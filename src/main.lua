-- init
lines = {}
lines[#lines + 1] = {value="Hello World", dirty=true}
lines[#lines + 1] = {value="日本語 テスト", dirty=true}
x = 1 -- cursor x
y = 1 -- cursor y
screenWidth = 800
screenHeight = 480
fontHeight = 16
alldirty = true

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
    local cx = 0 -- cursor pos
    local cy = 0
    local offset = 10
    if alldirty then
        color(255,255,255)
        fillrect(0,0,screenWidth,480)
        alldirty = false
    end
    color(0,0,0)
    for i, l in pairs(lines) do
        px = 0
        local j = 1
        if l["dirty"] == false then
            goto continue
        end
        l["dirty"] = true
        color(255,255,255)
        fillrect(0,py,screenWidth,fontHeight)
        -- left blue bar
        color(0,0,255)
        fillrect(0, py, 3, fontHeight)
        for p, c in utf8.codes(l["value"]) do
            local uc = utf8.char(c)
            if i == y and j == x then
                -- cursor
                color(0,0,0)
                fillrect(offset + px, py, 1, fontHeight)
                cx = px
                cy = py
            end
            if px + textwidth(uc) > screenWidth then
                px = 0
                py = py + fontHeight
                color(255,255,255)
                fillrect(0,py,screenWidth,fontHeight)
            end
            color(0,0,0)
            text(uc, offset + px, py)
            px = px + textwidth(uc)
            j = j + 1
        end
        if i == y and j == x then
            -- draw cursor
            color(0,0,0)
            fillrect(offset + px, py, 1, fontHeight)
            cx = px
            cy = py
        end
        ::continue::
        py = py + fontHeight
    end

    if setPos then
        setPos(offset + cx, cy)
    end
end

draw()

function keydown(k, c)
    debug("keydown: " .. k .. "," .. c)
    local key = c
    if k == 13 then -- Enter
        local line = lines[y]["value"]
        lines[y]["value"] = subChar(line, 1, x)
        lines[y]["dirty"] = true
        table.insert(lines, y + 1, {
            value = subChar(line, x, utf8.len(line) + 1),
            dirty=true
        })
        x = 1
        y = y + 1
    elseif k == 8 then -- Backspace
        local line = lines[y]["value"]
        lines[y]["dirty"] = true
        if x == 1 then
            if y > 1 then
            local px = utf8.len(lines[y - 1]["value"]) + 1
            lines[y - 1]["value"] = lines[y - 1]["value"] .. lines[y]["value"]
            lines[y]["value"] = ""
            table.remove(lines, y)
            y = y - 1
            x = px
            end
        else
            lines[y]["value"] = subChar(line, 1, x - 1) .. subChar(line, x, utf8.len(line) + 1)
            x = x - 1
        end
    elseif k == 37 then -- ArrowLeft
        if x > 1 then
            x = x - 1
        end
    elseif k == 39 then -- ArrowRight
        if x <= utf8.len(lines[y]["value"]) then
            x = x + 1
        end
    elseif k == 38 then -- ArrowUp
        if y > 1 then
            y = y - 1
            if x > utf8.len(lines[y]["value"]) + 1 then
                x = utf8.len(lines[y]["value"]) + 1
            end
        end
    elseif k == 40 then -- ArrowDown
        if y < #lines then
            y = y + 1
            if x > utf8.len(lines[y]["value"]) + 1 then
                x = utf8.len(lines[y]["value"]) + 1
            end
        end
    elseif string.len(key) == 1 or utf8.len(key) == 1 then
        local line = lines[y]
        lines[y]["value"] = insertChar(line["value"], x, key)
        x = x + 1
    end
    draw(setPos)
end

-- IME
candidate = ""
nextCandidate = ""
results = {}
index = 1
M_DIRECT = 0
M_HENKAN = 1
M_SELECT = 2
imMode = M_DIRCET
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

function isAlphabet(char)
    local byte = string.byte(char)
    return (byte >= 65 and byte <= 90) or (byte >= 97 and byte <= 122)
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
            local c = string.sub(s, index, index)
            if not(isAlphabet(c)) then
                out = out .. c
                index = index + 1
                break
            end
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
                if n == "n" then
                    out = out .. "ん"
                    index = index + 1
                    goto continue
                end
            end
            break -- can't convert hiragana
            ::continue::
        end
    end
    return out, index
end

function decide()
    alldirty = true
    if #results == 0 then
        for i=1, #candidate do
            onCharHandler(0, string.sub(candidate, i, i))
        end
    else
        local s = results[index]
        for p, c in utf8.codes(s) do
            local uc = utf8.char(c)
            onCharHandler(0, uc)
        end
    end
    candidate = nextCandidate
    nextCandidate = ""
    results = {}
    index = 1
    imMode = M_DIRECT
    drawIm()
end

-- override onKeyHandler
onCharHandler = keydown
function keydown(k, c, ctrl)
    debug("keydown k:" .. k .. ", c:" .. c)
    -- Enter == 13
    if k == 13 and string.len(candidate) > 0 then
        decide()
    -- Backspace = 8
    elseif k == 8 and string.len(candidate) > 0 then
        candidate = string.sub(candidate, 0, #candidate - 1)
        local hira = rome2kana(candidate)
        -- results = ksearch(hira)
        results = {}
        table.insert(results, 1, hira2kata(hira))
        table.insert(results, 1, hira)
        alldirty = true
        draw()
        drawIm()
    -- 32 is space, not Tab
    elseif k == 32 and string.len(candidate) > 0 and imMode == M_HENKAN then
        local hira = rome2kana(candidate)
        results = ksearch(hira)
        table.insert(results, #results + 1, hira)
        imMode = M_SELECT
        drawIm()
    elseif k == 32 and string.len(candidate) > 0 and imMode == M_SELECT then
        index = index + 1
        if index > #results then
            index = 1
        end
        drawIm()
    elseif string.len(c) == 1 and k ~= 13 and k ~= 32 then
        local triggered = (string.upper(c) == c and isAlphabet(c))
        if imMode == M_SELECT then
            decide()
        end
        
        c = string.lower(c)
        
        
        if imMode == M_HENKAN and triggered then
            local hira, index = rome2kana(candidate)
            
            debug("ksearch:" .. hira .. c)
            results = ksearch(hira .. c) -- SLOW
            table.insert(results, #results + 1, hira)
            imMode = M_SELECT
            nextCandidate = c
        else
            candidate = candidate .. c
            local hira, index = rome2kana(candidate)

            if triggered or imMode == M_HENKAN then
                -- first triggered or in HENKAN
                imMode = M_HENKAN
                results = {}
                table.insert(results, 1, hira)
            elseif not(triggered) then
                for p, c in utf8.codes(hira) do
                    local uc = utf8.char(c)
                    onCharHandler(0, uc)
                end
                candidate = string.sub(candidate, index)
            end
        end
        drawIm()
    else
        onCharHandler(k, c)
    end
end

function drawIm()
    local mstr = "[A]"
    if imMode == M_DIRECT then
        mstr = "[あ]"
    elseif imMode == M_HENKAN then
        mstr = "[変]"
    elseif imMode == M_SELECT then
        mstr = "[選]"
    end
    color(255,255,255)
    fillrect(0, screenHeight - fontHeight, screenWidth, fontHeight)
    color(0,0,0)
    text(mstr, 0, screenHeight - fontHeight)

    if candidate == "" then
        return
    end
    -- local hira, index = rome2kana(candidate)
    local w = textwidth(candidate)
    color(0,0,255)
    fillrect(cx, cy, w, fontHeight)
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
    fillrect(cx-1, cy+fontHeight-1, maxW+2, fontHeight*(#results)+2)
    color(240,240,240)
    fillrect(cx, cy+fontHeight, maxW, fontHeight*(#results))
    for i=1, #results do
        if index == i then
            color(0,0,255)
            fillrect(cx, i * fontHeight + cy, maxW, fontHeight)
            color(255,255,255)
        else
            color(0,0,0)
        end
        text(results[i], cx, i*fontHeight + cy)
    end
end
