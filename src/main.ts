import './style.css'
import { LuaFactory } from 'wasmoon'
//import {dict2} from './dict2.ts'
import skkDic from './SKK-JISYO.M.txt?raw'
import luaSource from './main.lua?raw'

let dict: { [key: string]: string[] } = {}

let gctx:CanvasRenderingContext2D | null = null;
let luaKeydown: (k:number ,c:string) => Promise<void> |null;

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
      let out:string[] = []
      if(s in dict){
        out = dict[s].slice()
      }
      return out
    })

    luaKeydown = async (k:number ,c:string) => {
      const draw = lua.global.get('draw')
      draw()
      const onKeyHandler = lua.global.get('keydown')
      onKeyHandler(k, c)
    }
    // Run a lua string
    await lua.doString(luaSource)
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
  if(e.key == "Shift"){
    return
  }
  luaKeydown(e.keyCode, e.key)
  e.preventDefault()
})
addEventListener("load", () => {
  let canv:HTMLCanvasElement = document.createElement("canvas")
  canv.width = 800
  canv.height = 480
  canv.style.width = "800px"
  canv.style.height = "480px"
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