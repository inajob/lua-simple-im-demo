import './style.css'
import { LuaEngine, LuaFactory } from 'wasmoon'
import shellSource from './shell.lua?raw'
import editSource from './main.lua?raw'
import skkSource from './skk.lua?raw'
import alertSource from './alert.lua?raw'
import promptSource from './prompt.lua?raw'
import jsonSource from './json.lua?raw'
import lsSource from './ls.lua?raw'
import grepSource from './grep.lua?raw'
import catSource from './cat.lua?raw'
import headSource from './head.lua?raw'
import tailSource from './tail.lua?raw'

let dict: { [key: string]: string[] } = {}
let fs: { [key: string]: string } = {}

let gctx:CanvasRenderingContext2D | null = null;
let luaKeydown: (k:number ,c:string, ctrl:boolean) => Promise<void> |null;
let screenWidth = 800;
let screenHeight = 480;
let exitRequest = false;
let fileName = "/shell.lua";
let fileNameStack:string[] = []

let lua: LuaEngine;

let mobileInput: HTMLInputElement | null = null;
let ctrlSticky = false;
let ctrlBtn: HTMLButtonElement | null = null;

const sendKey = (k: number, c: string, ctrl: boolean) => {
  if (!luaKeydown || !lua) return
  luaKeydown(k, c, ctrl)
  if (exitRequest) {
    console.log("EXIT")
    exitRequest = false
    lua.global.close()
    init()
  }
}

const consumeCtrl = () => {
  ctrlSticky = false
  ctrlBtn?.classList.remove("active")
}

const setupMobile = (canv: HTMLCanvasElement) => {
  const app = document.getElementById("app")
  if (!app) return

  const input = document.createElement("input")
  input.type = "text"
  input.className = "hidden-input"
  input.autocapitalize = "off"
  input.autocomplete = "off"
  input.spellcheck = false
  input.setAttribute("autocorrect", "off")
  app.appendChild(input)
  mobileInput = input

  let prevVal = ""
  let composing = false
  let enterComposes = false
  let lastChanged = false
  const resetBuffer = () => {
    input.value = ""
    prevVal = ""
  }

  canv.addEventListener("pointerdown", (ev) => {
    ev.preventDefault()
    input.focus({ preventScroll: true })
  })

  input.addEventListener("focus", () => {
    document.body.classList.add("keyboard-open")
  })
  input.addEventListener("blur", () => {
    composing = false
    enterComposes = false
    lastChanged = false
    resetBuffer()
    document.body.classList.remove("keyboard-open")
  })

  const syncFromValue = () => {
    const cur = input.value
    let p = 0
    while (p < prevVal.length && p < cur.length && prevVal[p] === cur[p]) p++
    for (let i = p; i < prevVal.length; i++) {
      sendKey(8, "Backspace", ctrlSticky)
      consumeCtrl()
    }
    for (let i = p; i < cur.length; i++) {
      const ch = cur[i]
      sendKey(ch.codePointAt(0) ?? 0, ch, ctrlSticky)
      consumeCtrl()
    }
    if (p < prevVal.length || p < cur.length) {
      lastChanged = true
    }
    prevVal = cur
    if (!composing && cur.length > 128) {
      resetBuffer()
    }
  }

  input.addEventListener("compositionstart", () => {
    composing = true
  })
  input.addEventListener("compositionend", () => {
    composing = false
    syncFromValue()
    const committedAscii = /^[\x20-\x7e]*$/.test(input.value)
    const commitEnter = committedAscii && (enterComposes || !lastChanged)
    lastChanged = false
    enterComposes = false
    resetBuffer()
    if (commitEnter) {
      sendKey(13, "Enter", ctrlSticky)
      consumeCtrl()
    }
  })

  input.addEventListener("input", () => {
    syncFromValue()
  })

  input.addEventListener("keydown", (e) => {
    if (e.isComposing || e.keyCode === 229) {
      lastChanged = false
      if (e.key === "Enter" || e.keyCode === 13) {
        enterComposes = true
      }
      return
    }
    const k = e.keyCode
    if (e.ctrlKey) {
      e.preventDefault()
      sendKey(k, e.key, true)
      consumeCtrl()
      return
    }
    if (k === 13 || k === 9 || k === 27 || (k >= 37 && k <= 40)) {
      e.preventDefault()
      sendKey(k, e.key, e.ctrlKey || ctrlSticky)
      consumeCtrl()
      if (k === 13) {
        resetBuffer()
      }
    } else if (k === 8 && !composing) {
      e.preventDefault()
      sendKey(8, "Backspace", e.ctrlKey || ctrlSticky)
      consumeCtrl()
    }
  })

  const bar = document.createElement("div")
  bar.className = "keybar"
  const mkBtn = (label: string, fn: () => void) => {
    const b = document.createElement("button")
    b.type = "button"
    b.textContent = label
    b.addEventListener("pointerdown", (ev) => {
      ev.preventDefault()
      fn()
    })
    bar.appendChild(b)
    return b
  }
  ctrlBtn = mkBtn("Ctrl", () => {
    ctrlSticky = !ctrlSticky
    ctrlBtn?.classList.toggle("active", ctrlSticky)
  })
  mkBtn("Esc", () => { sendKey(27, "Escape", ctrlSticky); consumeCtrl() })
  mkBtn("⏎", () => { sendKey(13, "Enter", ctrlSticky); consumeCtrl() })
  mkBtn("←", () => { sendKey(37, "ArrowLeft", ctrlSticky); consumeCtrl() })
  mkBtn("↑", () => { sendKey(38, "ArrowUp", ctrlSticky); consumeCtrl() })
  mkBtn("↓", () => { sendKey(40, "ArrowDown", ctrlSticky); consumeCtrl() })
  mkBtn("→", () => { sendKey(39, "ArrowRight", ctrlSticky); consumeCtrl() })
  app.appendChild(bar)
}

let init = () => {
  (async () => {
  const factory = new LuaFactory()
  // mountしたファイルを後でJavaScriptから参照する方法がわからない
  factory.mountFile("skk.lua", skkSource)
  factory.mountFile("edit.lua", editSource)
  factory.mountFile("alert.lua", alertSource)
  factory.mountFile("prompt.lua", promptSource)
  factory.mountFile("json.lua", jsonSource)
  fs["/test.txt"] = "hello world\naaa\nbbb\nccc"
  fs["/skk.lua"] = skkSource
  fs["/shell.lua"] = shellSource
  fs["/edit.lua"] = editSource
  fs["/alert.lua"] = alertSource
  fs["/prompt.lua"] = promptSource
  fs["/json.lua"] = jsonSource
  fs["/ls.lua"] = lsSource
  fs["/grep.lua"] = grepSource
  fs["/cat.lua"] = catSource
  fs["/head.lua"] = headSource
  fs["/tail.lua"] = tailSource

  lua = await factory.createEngine()

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
      lua.global.set('screenwidth', () => {
        return screenWidth
      })
      lua.global.set('screenheight', () => {
        return screenHeight
      })
      lua.global.set('fillrect', (x:number, y:number, w:number, h:number) => {
        if(gctx != null){
          gctx.fillRect(x, y, w, h)
        }
      })
      lua.global.set('debug', (s:string) => {
        console.log(s)
      })
      lua.global.set('getfiles', () => {
        // パスの指定をサポートしていない
        return Object.keys(fs)
      })
      lua.global.set('savefile', (fname:string, body:string) => {
          fs[fname] = body
      })
      lua.global.set('readfile', (fname:string) => {
        return fs[fname]
      })
      lua.global.set('fetch', (host:string, path:string, callback: (text: string) => void) => {
        (async () => {
          let res = await fetch("http://" + host + path)
          let out = await res.text()
          console.log("fetch",out,callback)
          callback(out)
        })()
      })
      lua.global.set('getfreeheap', () => {
        return -1
      })
      
      lua.global.set('sys_run', (fname: string) => {
        fileNameStack.push(fileName)
        fileName = fname
        exitRequest = true
      })
      lua.global.set('sys_exit', () => {
        const f = fileNameStack.pop()
        if(f){
          fileName = f
          exitRequest = true
        }else{
          throw new Error("root process can't exit!")
        }
      })
      
      lua.global.set('ksearch', (s:string) => {
        let out:string[] = []
        if(s in dict){
          out = dict[s].slice()
        }
        return out
      })

      luaKeydown = async (k:number ,c:string, ctrl:boolean) => {
        //const draw = lua.global.get('draw')
        //draw()
        const onKeyHandler = lua.global.get('keydown')
        onKeyHandler(k, c, ctrl)
      }
      // Run a lua string
      console.log("load: " + fileName)
      await lua.doString(fs[fileName])
      // Get a global lua function as a JS function
  }catch(e) {
    console.log(e)
  }finally {
      // Close the lua environment, so it can be freed
      //lua.global.close()
  }
  })();
}
init()
addEventListener("keydown", (e) => {
  //console.log("keydown", e)
  if(e.target === mobileInput){
    return
  }
  if(e.key == "Shift"){
    return
  }
  sendKey(e.keyCode, e.key, e.ctrlKey)

  e.preventDefault()
})
addEventListener("load", () => {
  fetch("https://raw.githubusercontent.com/skk-dev/dict/refs/heads/master/json/SKK-JISYO.M.json", {
    method: "GET",
  }).then(response => response.json())
  .then(o => {
    dict = { ...o.okuri_ari, ...o.okuri_nasi}
  });
  
  let canv:HTMLCanvasElement = document.createElement("canvas")
  canv.width = screenWidth
  canv.height = screenHeight
  document.getElementById("app")?.appendChild(canv)

  let ctx = canv.getContext("2d")
  if(ctx != null){
    gctx = ctx
    ctx.fillStyle = "white"
    ctx.textBaseline = "top"
    ctx.fillRect(0,0,800,480)

    ctx.fillStyle = "black"
    ctx.font = "16px San-serif"
  }

  setupMobile(canv)
})
