import './style.css'
import { LuaFactory } from 'wasmoon'
import {dict2} from './dict2.ts'

let gctx:CanvasRenderingContext2D | null = null;
let luaKeydown: (k:string) => Promise<void> |null;

(async () => {
const factory = new LuaFactory()
const lua = await factory.createEngine()

try {
    // Set a JS function to be a global lua function
    lua.global.set('color', (r:number, g:number, b:number) => {
      if(gctx != null){
        gctx.fillStyle = `rgb(${r},${g},${b})`
      }
    })
    lua.global.set('text', (s:string, x:number, y:number) => {
      if(gctx != null){
        gctx.fillText(s, x, y)
      }
    })
    lua.global.set('textwidth', (s:string) => {
      if(gctx != null){
        return gctx.measureText(s).width
      }
    })
    lua.global.set('fillrect', (x:number, y:number, w:number, h:number) => {
      if(gctx != null){
        gctx.fillRect(x, y, w, h)
      }
    })
    lua.global.set('debug', (s:string) => {
      console.log(s)
    })
    lua.global.set('ksearch', (s:string) => {
      let out = []
      let exactOut = []
      for(let i = 0; i < dict2.length; i ++){
        if(dict2[i][1] == s){
          exactOut.push(dict2[i][0])
        }else if(dict2[i][1].indexOf(s) == 0){
          out.push(dict2[i][0])
        }
      }
      return exactOut.concat(out).slice(0,10)
    })

    luaKeydown = async (k:string) => {
      const draw = lua.global.get('draw')
      draw()
      const onKeyHandler = lua.global.get('onKeyHandler')
      onKeyHandler(k)
    }
    // Run a lua string
    await lua.doString(`

    -- init
    lines = {}
    lines[#lines + 1] = "Hello World"
    lines[#lines + 1] = "日本語 テスト"
    x = 1 -- cursor x
    y = 1 -- cursor y

    function subChar(s, start, e)
      local counter = 1
      local r = ""
      for p, c in utf8.codes(s) do
        if counter >= start and counter < e then
          r = r .. utf8.char(c)
        end
        counter = counter + 1
      end
      return r
    end

    function insertChar(s, i, t)
      local r = ""
      local counter = 1
      for p, c in utf8.codes(s) do
        if counter == i then
          r = r .. t
        end
        r = r .. utf8.char(c)
        counter = counter + 1
      end
      if counter == i then
        r = r .. t
      end
      return r
    end
    function draw(setPos)
      local px = 0
      local py = 0
      local cx = 0
      local cy = 0
      local offset = 10
      color(255,255,255)
      fillrect(0,0,400,400)
      color(0,0,0)
      for i, l in pairs(lines) do
        px = 0
        local j = 1
        text(">", 0, py)
        for p, c in utf8.codes(l) do
          local uc = utf8.char(c)
          if i == y and j == x then
            color(0,0,0)
            fillrect(offset + px, py, 1, 12)
            cx = px
            cy = py
          end
          color(0,0,0)
          text(uc, offset + px, py)
          px = px + textwidth(uc)
          j = j + 1
        end
        if i == y and j == x then
          -- draw cursor
          color(0,0,0)
          fillrect(offset + px, py, 1, 12)
          cx = px
          cy = py
        end

        py = py + 12
      end

      if setPos then
        setPos(offset + cx, cy)
      end
    end

    draw()

    function onKeyHandler(k)
      debug("keydown: " .. k)
      local key = k
      if key == "Enter" then
        local line = lines[y]
        lines[y] = subChar(line, 1, x)
        table.insert(lines, y + 1, subChar(line, x, utf8.len(line) + 1))
        x = 1
        y = y + 1
      elseif key == "Backspace" then
        local line = lines[y]
        if x == 1 then
          if y > 1 then
            local px = utf8.len(lines[y - 1]) + 1
            lines[y - 1] = lines[y - 1] .. lines[y]
            lines[y] = ""
            table.remove(lines, y)
            y = y - 1
            x = px
          end
        else
          lines[y] = subChar(line, 1, x - 1) .. subChar(line, x, utf8.len(line) + 1)
          x = x - 1
        end
      elseif key == "ArrowLeft" then
        if x > 1 then
          x = x - 1
        end
      elseif key == "ArrowRight" then
        if x <= utf8.len(lines[y]) then
          x = x + 1
        end
      elseif key == "ArrowUp" then
        if y > 1 then
          y = y - 1
          if x > utf8.len(lines[y]) + 1 then
            x = utf8.len(lines[y]) + 1
          end
        end
      elseif key == "ArrowDown" then
        if y < #lines then
          y = y + 1
          if x > utf8.len(lines[y]) + 1 then
            x = utf8.len(lines[y]) + 1
          end
        end
      elseif string.len(key) == 1 or utf8.len(key) == 1 then
        local line = lines[y]
        lines[y] = insertChar(line, x, key)
        x = x + 1
      end
      draw(setPos)
    end

    -- IME
    candidate = ""
    results = {}
    index = 1
    cx = 0
    cy = 0

    rome = {}
    rome["a"] = "あ"
    rome["i"] = "い"
    rome["u"] = "う"
    rome["e"] = "え"
    rome["o"] = "お"
    rome["ka"] = "か"
    rome["ki"] = "き"
    rome["ku"] = "く"
    rome["ke"] = "け"
    rome["ko"] = "こ"
    rome["sa"] = "さ"
    rome["si"] = "し"
    rome["su"] = "す"
    rome["se"] = "せ"
    rome["so"] = "そ"
    rome["ta"] = "た"
    rome["ti"] = "ち"
    rome["tu"] = "つ"
    rome["te"] = "て"
    rome["to"] = "と"
    rome["na"] = "な"
    rome["ni"] = "に"
    rome["nu"] = "ぬ"
    rome["ne"] = "ね"
    rome["no"] = "の"
    rome["ha"] = "は"
    rome["hi"] = "ひ"
    rome["hu"] = "ふ"
    rome["he"] = "へ"
    rome["ho"] = "ほ"
    rome["ma"] = "ま"
    rome["mi"] = "み"
    rome["mu"] = "む"
    rome["me"] = "め"
    rome["mo"] = "も"
    rome["ya"] = "や"
    rome["yu"] = "ゆ"
    rome["yo"] = "よ"
    rome["ra"] = "ら"
    rome["ri"] = "り"
    rome["ru"] = "る"
    rome["re"] = "れ"
    rome["ro"] = "ろ"
    rome["wa"] = "わ"
    rome["wo"] = "を"
    rome["ga"] = "が"
    rome["gi"] = "ぎ"
    rome["gu"] = "ぐ"
    rome["ge"] = "げ"
    rome["go"] = "ご"
    rome["za"] = "ざ"
    rome["zi"] = "じ"
    rome["zu"] = "ず"
    rome["ze"] = "ぜ"
    rome["zo"] = "ぞ"
    rome["da"] = "だ"
    rome["di"] = "ぢ"
    rome["du"] = "づ"
    rome["de"] = "で"
    rome["do"] = "ど"
    rome["ba"] = "ば"
    rome["bi"] = "び"
    rome["bu"] = "ぶ"
    rome["be"] = "べ"
    rome["bo"] = "ぼ"
    rome["pa"] = "ぱ"
    rome["pi"] = "ぴ"
    rome["pu"] = "ぷ"
    rome["pe"] = "ぺ"
    rome["po"] = "ぽ"
    rome["kya"] = "きゃ"
    rome["kyu"] = "きゅ"
    rome["kyo"] = "きょ"
    rome["sya"] = "しゃ"
    rome["syu"] = "しゅ"
    rome["syo"] = "しょ"
    rome["tya"] = "ちゃ"
    rome["tyu"] = "ちゅ"
    rome["tyo"] = "ちょ"
    rome["nya"] = "にゃ"
    rome["nyu"] = "にゅ"
    rome["nyo"] = "にょ"
    rome["hya"] = "ひゃ"
    rome["hyu"] = "ひゅ"
    rome["hyo"] = "ひょ"
    rome["mya"] = "みゃ"
    rome["myu"] = "みゅ"
    rome["myo"] = "みょ"
    rome["rya"] = "りゃ"
    rome["ryu"] = "りゅ"
    rome["ryo"] = "りょ"
    rome["gya"] = "ぎゃ"
    rome["gyu"] = "ぎゅ"
    rome["gyo"] = "ぎょ"
    rome["zya"] = "じゃ"
    rome["zyu"] = "じゅ"
    rome["zyo"] = "じょ"
    rome["ja"] = "じゃ"
    rome["ju"] = "じゅ"
    rome["jo"] = "じょ"
    rome["dya"] = "ぢゃ"
    rome["dyu"] = "ぢゅ"
    rome["dyo"] = "ぢょ"
    rome["bya"] = "びゃ"
    rome["byu"] = "びゅ"
    rome["byo"] = "びょ"
    rome["pya"] = "ぴゃ"
    rome["pyu"] = "ぴゅ"
    rome["pyo"] = "ぴょ"
    rome["nn"] = "ん"
    rome["-"] = "ー"

    function setPos(x, y)
      cx = x
      cy = y
      return 1
    end

    function hira2kata(s)
      local out = ""
      for p,c in utf8.codes(s) do
        if "ー" == utf8.char(c) then
          out = out .. utf8.char(c)
        else
          out = out .. utf8.char(c + 96)
        end
      end
      return out
    end

    function rome2kana(s)
      local out = ""
      local index = 1
      while index ~= string.len(s) + 1 do
        local hit = false
        for k,v in pairs(rome) do
          local i = string.find(s, k, index, true)
          if i == index then
            out = out .. v
            index = index + string.len(k)
            hit = true
            break
          end
        end
        if not(hit) then
          local n = string.sub(s, index, index)
          if index < string.len(s) then
            local m = string.sub(s, index + 1, index + 1)
            if n == m then
              out = out .. "っ"
              index = index + 1
              goto continue
            end
          end
          if n == "n" then
            out = out .. "ん"
            index = index + 1
            goto continue
          end
          out = out .. string.sub(s, index, index)
          index = index + 1
          ::continue::
        end
      end
      return out
    end
    
    -- override onKeyHandler
    onCharHandler = onKeyHandler
    function onKeyHandler(k)
      if k == "Enter" and string.len(candidate) > 0 then
        if #results == 0 then
          for i=1, #candidate do
            onCharHandler(string.sub(candidate, i, i))
          end
        else
          local s = results[index]
          for p, c in utf8.codes(s) do
            local uc = utf8.char(c)
            onCharHandler(uc)
          end
        end
        candidate = ""
        results = {}
        index = 1
        drawIm()
      elseif k == "Backspace" and string.len(candidate) > 0 then
        candidate = string.sub(candidate, 0, #candidate - 1)
        local hira = rome2kana(candidate)
        results = ksearch(hira)
        drawIm()
      elseif k == "Tab" and string.len(candidate) > 0 then
        index = index + 1
        if index > #results then
          index = 1
        end
        drawIm()
      elseif string.len(k) == 1 then
        candidate = candidate .. k
        local hira = rome2kana(candidate)
        results = ksearch(hira)
        table.insert(results, 1, hira2kata(hira))
        table.insert(results, 1, hira)
        drawIm()
      else
        onCharHandler(k)
      end
    end

    function drawIm()
      if candidate == "" then
        return
      end
      local w = textwidth(candidate)
      color(0,0,255)
      fillrect(cx, cy, w + 12, 12)
      color(255,255,255)
      text(candidate, cx, cy)
      local maxW = 0
      for i=1, #results do
        local w = textwidth(results[i])
        if maxW < w then
          maxW = w
        end
      end
      color(20,20,20)
      fillrect(cx-1, cy+12-1, maxW+2, 12*(#results)+2)
      color(240,240,240)
      fillrect(cx, cy+12, maxW, 12*(#results))
      for i=1, #results do
        if index == i then
          color(0,0,255)
          fillrect(cx, i * 12 + cy, maxW, 12)
          color(255,255,255)
        else
          color(0,0,0)
        end
        text(results[i], cx, i*12 + cy)
      end
    end

    `)
    // Get a global lua function as a JS function
}catch(e) {
  console.log(e)
}finally {
    // Close the lua environment, so it can be freed
    //lua.global.close()
}
})();
addEventListener("keydown", (e) => {
  //console.log("keydown", e)
  luaKeydown(e.key)
  e.preventDefault()
})
addEventListener("load", () => {
  let canv:HTMLCanvasElement = document.createElement("canvas")
  canv.width = 400
  canv.height = 400
  canv.style.width = "400px"
  canv.style.height = "400px"
  document.getElementById("app")?.appendChild(canv)

  let ctx = canv.getContext("2d")
  if(ctx != null){
    gctx = ctx
    ctx.fillStyle = "white"
    ctx.textBaseline = "top"
    ctx.fillRect(0,0,400,400)

    ctx.fillStyle = "black"
  }
})