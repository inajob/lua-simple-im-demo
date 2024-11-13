import './style.css'
import { LuaEngine, LuaFactory } from 'wasmoon'
//import {dict2} from './dict2.ts'
import skkDic from './SKK-JISYO.M.txt?raw'
import shellSource from './shell.lua?raw'
import editSource from './main.lua?raw'
import skkSource from './skk.lua?raw'

let dict: { [key: string]: string[] } = {}
let fs: { [key: string]: string } = {}

let gctx:CanvasRenderingContext2D | null = null;
let luaKeydown: (k:number ,c:string, ctrl:boolean) => Promise<void> |null;
let screenWidth = 320;
let screenHeight = 240;
let exitRequest = false;
let fileName = "/shell.lua";
let fileNameStack:string[] = []
let lua: LuaEngine;

let init = () => {
  (async () => {
  const factory = new LuaFactory()
  // mountしたファイルを後でJavaScriptから参照する方法がわからない
  factory.mountFile("skk.lua", skkSource)
  factory.mountFile("edit.lua", editSource)
  fs["/test.txt"] = "hello world"
  fs["/skk.lua"] = skkSource
  fs["/shell.lua"] = shellSource
  fs["/edit.lua"] = editSource
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
      
      lua.global.set('run', (fname: string) => {
        fileNameStack.push(fileName)
        fileName = fname
        exitRequest = true
      })
      lua.global.set('exit', () => {
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
  if(e.key == "Shift"){
    return
  }
  luaKeydown(e.keyCode, e.key, e.ctrlKey)

  if(exitRequest){
    console.log("EXIT")
    exitRequest = false
    lua.global.close()
    init()
  }

  e.preventDefault()
})
addEventListener("load", () => {
  let canv:HTMLCanvasElement = document.createElement("canvas")
  canv.width = screenWidth
  canv.height = screenHeight
  canv.style.width = screenWidth + "px"
  canv.style.height = screenHeight + "px"
  document.getElementById("app")?.appendChild(canv)
  
  let lines = skkDic.split("\n").filter((l) => (l.length > 0 && l[0] != ";")).map((l) => {
    let parts = l.split(" ")
    let k = parts[0]
    let v = parts[1].split("/").filter((l) => (l.length != 0))
    return {k: k, v:v}
  })
  //console.log(lines)
  lines.forEach((l) => {
    dict[l.k] = l.v
  })

  let ctx = canv.getContext("2d")
  if(ctx != null){
    gctx = ctx
    ctx.fillStyle = "white"
    ctx.textBaseline = "top"
    ctx.fillRect(0,0,800,480)

    ctx.fillStyle = "black"
  }
})