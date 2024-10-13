(function(){const W=document.createElement("link").relList;if(W&&W.supports&&W.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))D(O);new MutationObserver(O=>{for(const C of O)if(C.type==="childList")for(const K of C.addedNodes)K.tagName==="LINK"&&K.rel==="modulepreload"&&D(K)}).observe(document,{childList:!0,subtree:!0});function f(O){const C={};return O.integrity&&(C.integrity=O.integrity),O.referrerPolicy&&(C.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?C.credentials="include":O.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function D(O){if(O.ep)return;O.ep=!0;const C=f(O);fetch(O.href,C)}})();const cr="modulepreload",dr=function(Y){return"/"+Y},Lt={},mr=function(W,f,D){let O=Promise.resolve();if(f&&f.length>0){document.getElementsByTagName("link");const C=document.querySelector("meta[property=csp-nonce]"),K=(C==null?void 0:C.nonce)||(C==null?void 0:C.getAttribute("nonce"));O=Promise.all(f.map(V=>{if(V=dr(V),V in Lt)return;Lt[V]=!0;const rn=V.endsWith(".css"),nn=rn?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${V}"]${nn}`))return;const an=document.createElement("link");if(an.rel=rn?"stylesheet":cr,rn||(an.as="script",an.crossOrigin=""),an.href=V,K&&an.setAttribute("nonce",K),document.head.appendChild(an),rn)return new Promise(($n,mn)=>{an.addEventListener("load",$n),an.addEventListener("error",()=>mn(new Error(`Unable to preload CSS for ${V}`)))})}))}return O.then(()=>W()).catch(C=>{const K=new Event("vite:preloadError",{cancelable:!0});if(K.payload=C,window.dispatchEvent(K),!K.defaultPrevented)throw C})};var hr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function re(Y){throw new Error('Could not dynamically require "'+Y+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Re={exports:{}};(function(Y,W){(function(f,D){D(W)})(hr,function(f){var D=typeof document<"u"?document.currentScript:null;f.LuaReturn=void 0,function(_){_[_.Ok=0]="Ok",_[_.Yield=1]="Yield",_[_.ErrorRun=2]="ErrorRun",_[_.ErrorSyntax=3]="ErrorSyntax",_[_.ErrorMem=4]="ErrorMem",_[_.ErrorErr=5]="ErrorErr",_[_.ErrorFile=6]="ErrorFile"}(f.LuaReturn||(f.LuaReturn={}));const O=4,C=-1,K=1e6,V=-K-1e3;f.LuaType=void 0,function(_){_[_.None=-1]="None",_[_.Nil=0]="Nil",_[_.Boolean=1]="Boolean",_[_.LightUserdata=2]="LightUserdata",_[_.Number=3]="Number",_[_.String=4]="String",_[_.Table=5]="Table",_[_.Function=6]="Function",_[_.Userdata=7]="Userdata",_[_.Thread=8]="Thread"}(f.LuaType||(f.LuaType={})),f.LuaEventCodes=void 0,function(_){_[_.Call=0]="Call",_[_.Ret=1]="Ret",_[_.Line=2]="Line",_[_.Count=3]="Count",_[_.TailCall=4]="TailCall"}(f.LuaEventCodes||(f.LuaEventCodes={})),f.LuaEventMasks=void 0,function(_){_[_.Call=1]="Call",_[_.Ret=2]="Ret",_[_.Line=4]="Line",_[_.Count=8]="Count"}(f.LuaEventMasks||(f.LuaEventMasks={})),f.LuaLibraries=void 0,function(_){_.Base="_G",_.Coroutine="coroutine",_.Table="table",_.IO="io",_.OS="os",_.String="string",_.UTF8="utf8",_.Math="math",_.Debug="debug",_.Package="package"}(f.LuaLibraries||(f.LuaLibraries={}));class rn extends Error{}class nn{constructor(t,a){this.target=t,this.options=a}}function an(_,t){return new nn(_,t)}class $n extends Number{}class mn extends Array{}const St=1e3;class En{constructor(t,a,l,o){this.closed=!1,this.lua=t,this.typeExtensions=a,this.address=l,this.parent=o}newThread(){const t=this.lua.lua_newthread(this.address);if(!t)throw new Error("lua_newthread returned a null pointer");return new En(this.lua,this.typeExtensions,t,this.parent||this)}resetThread(){this.assertOk(this.lua.lua_resetthread(this.address))}loadString(t,a){const l=this.lua.module.lengthBytesUTF8(t),o=l+1,p=this.lua.module._malloc(o);try{this.lua.module.stringToUTF8(t,p,o),this.assertOk(this.lua.luaL_loadbufferx(this.address,p,l,a??p,null))}finally{this.lua.module._free(p)}}loadFile(t){this.assertOk(this.lua.luaL_loadfilex(this.address,t,null))}resume(t=0){const a=this.lua.module._malloc(O);try{return this.lua.module.setValue(a,0,"i32"),{result:this.lua.lua_resume(this.address,null,t,a),resultCount:this.lua.module.getValue(a,"i32")}}finally{this.lua.module._free(a)}}getTop(){return this.lua.lua_gettop(this.address)}setTop(t){this.lua.lua_settop(this.address,t)}remove(t){return this.lua.lua_remove(this.address,t)}setField(t,a,l){t=this.lua.lua_absindex(this.address,t),this.pushValue(l),this.lua.lua_setfield(this.address,t,a)}async run(t=0,a){const l=this.timeout;try{(a==null?void 0:a.timeout)!==void 0&&this.setTimeout(Date.now()+a.timeout);let o=this.resume(t);for(;o.result===f.LuaReturn.Yield;){if(this.timeout&&Date.now()>this.timeout)throw o.resultCount>0&&this.pop(o.resultCount),new rn("thread timeout exceeded");if(o.resultCount>0){const p=this.getValue(-1);this.pop(o.resultCount),p===Promise.resolve(p)?await p:await new Promise(y=>setImmediate(y))}else await new Promise(p=>setImmediate(p));o=this.resume(0)}return this.assertOk(o.result),this.getStackValues()}finally{(a==null?void 0:a.timeout)!==void 0&&this.setTimeout(l)}}runSync(t=0){const a=this.getTop()-t-1;return this.assertOk(this.lua.lua_pcallk(this.address,t,C,0,0,null)),this.getStackValues(a)}pop(t=1){this.lua.lua_pop(this.address,t)}call(t,...a){const l=this.lua.lua_getglobal(this.address,t);if(l!==f.LuaType.Function)throw new Error(`A function of type '${l}' was pushed, expected is ${f.LuaType.Function}`);for(const p of a)this.pushValue(p);const o=this.getTop()-a.length-1;return this.lua.lua_callk(this.address,a.length,C,0,null),this.getStackValues(o)}getStackValues(t=0){const a=this.getTop()-t,l=new mn(a);for(let o=0;o<a;o++)l[o]=this.getValue(t+o+1);return l}stateToThread(t){var a;return t===((a=this.parent)===null||a===void 0?void 0:a.address)?this.parent:new En(this.lua,this.typeExtensions,t,this.parent||this)}pushValue(t,a){const l=this.getValueDecorations(t),o=l.target;if(o instanceof En){this.lua.lua_pushthread(o.address)===1||this.lua.lua_xmove(o.address,this.address,1);return}const p=this.getTop();switch(typeof o){case"undefined":this.lua.lua_pushnil(this.address);break;case"number":Number.isInteger(o)?this.lua.lua_pushinteger(this.address,BigInt(o)):this.lua.lua_pushnumber(this.address,o);break;case"string":this.lua.lua_pushstring(this.address,o);break;case"boolean":this.lua.lua_pushboolean(this.address,o?1:0);break;default:if(!this.typeExtensions.find(y=>y.extension.pushValue(this,l,a)))throw new Error(`The type '${typeof o}' is not supported by Lua`)}if(l.options.metatable&&this.setMetatable(-1,l.options.metatable),this.getTop()!==p+1)throw new Error(`pushValue expected stack size ${p+1}, got ${this.getTop()}`)}setMetatable(t,a){if(t=this.lua.lua_absindex(this.address,t),this.lua.lua_getmetatable(this.address,t)){this.pop(1);const l=this.getMetatableName(t);throw new Error(`data already has associated metatable: ${l||"unknown name"}`)}this.pushValue(a),this.lua.lua_setmetatable(this.address,t)}getMetatableName(t){const a=this.lua.luaL_getmetafield(this.address,t,"__name");if(a===f.LuaType.Nil)return;if(a!==f.LuaType.String){this.pop(1);return}const l=this.lua.lua_tolstring(this.address,-1,null);return this.pop(1),l}getValue(t,a,l){t=this.lua.lua_absindex(this.address,t);const o=a??this.lua.lua_type(this.address,t);switch(o){case f.LuaType.None:return;case f.LuaType.Nil:return null;case f.LuaType.Number:return this.lua.lua_tonumberx(this.address,t,null);case f.LuaType.String:return this.lua.lua_tolstring(this.address,t,null);case f.LuaType.Boolean:return!!this.lua.lua_toboolean(this.address,t);case f.LuaType.Thread:return this.stateToThread(this.lua.lua_tothread(this.address,t));default:{let p;(o===f.LuaType.Table||o===f.LuaType.Userdata)&&(p=this.getMetatableName(t));const y=this.typeExtensions.find(M=>M.extension.isType(this,t,o,p));return y?y.extension.getValue(this,t,l):(console.warn(`The type '${this.lua.lua_typename(this.address,o)}' returned is not supported on JS`),new $n(this.lua.lua_topointer(this.address,t)))}}}close(){this.isClosed()||(this.hookFunctionPointer&&this.lua.module.removeFunction(this.hookFunctionPointer),this.closed=!0)}setTimeout(t){t&&t>0?(this.hookFunctionPointer||(this.hookFunctionPointer=this.lua.module.addFunction(()=>{Date.now()>t&&(this.pushValue(new rn("thread timeout exceeded")),this.lua.lua_error(this.address))},"vii")),this.lua.lua_sethook(this.address,this.hookFunctionPointer,f.LuaEventMasks.Count,St),this.timeout=t):this.hookFunctionPointer&&(this.hookFunctionPointer=void 0,this.timeout=void 0,this.lua.lua_sethook(this.address,null,0,0))}getTimeout(){return this.timeout}getPointer(t){return new $n(this.lua.lua_topointer(this.address,t))}isClosed(){var t;return!this.address||this.closed||!!(!((t=this.parent)===null||t===void 0)&&t.isClosed())}indexToString(t){const a=this.lua.luaL_tolstring(this.address,t,null);return this.pop(),a}dumpStack(t=console.log){const a=this.getTop();for(let l=1;l<=a;l++){const o=this.lua.lua_type(this.address,l),p=this.lua.lua_typename(this.address,o),y=this.getPointer(l),M=this.indexToString(l),E=this.getValue(l,o);t(l,p,y,M,E)}}assertOk(t){if(t!==f.LuaReturn.Ok&&t!==f.LuaReturn.Yield){const a=f.LuaReturn[t],l=new Error(`Lua Error(${a}/${t})`);if(this.getTop()>0)if(t===f.LuaReturn.ErrorMem)l.message=this.lua.lua_tolstring(this.address,-1,null);else{const o=this.getValue(-1);o instanceof Error&&(l.stack=o.stack),l.message=this.indexToString(-1)}if(t!==f.LuaReturn.ErrorMem)try{this.lua.luaL_traceback(this.address,this.address,null,1);const o=this.lua.lua_tolstring(this.address,-1,null);o.trim()!=="stack traceback:"&&(l.message=`${l.message}
${o}`),this.pop(1)}catch(o){console.warn("Failed to generate stack trace",o)}throw l}}getValueDecorations(t){return t instanceof nn?t:new nn(t,{})}}class Ie extends En{constructor(t,a){if(a){const l={memoryUsed:0},o=t.module.addFunction((y,M,E,N)=>{if(N===0)return M&&(l.memoryUsed-=E,t.module._free(M)),0;const R=M?N-E:N,P=l.memoryUsed+R;if(N>E&&l.memoryMax&&P>l.memoryMax)return 0;const H=t.module._realloc(M,N);return H&&(l.memoryUsed=P),H},"iiiii"),p=t.lua_newstate(o,null);if(!p)throw t.module.removeFunction(o),new Error("lua_newstate returned a null pointer");super(t,[],p),this.memoryStats=l,this.allocatorFunctionPointer=o}else super(t,[],t.luaL_newstate());if(this.isClosed())throw new Error("Global state could not be created (probably due to lack of memory)")}close(){if(!this.isClosed()){super.close(),this.lua.lua_close(this.address),this.allocatorFunctionPointer&&this.lua.module.removeFunction(this.allocatorFunctionPointer);for(const t of this.typeExtensions)t.extension.close()}}registerTypeExtension(t,a){this.typeExtensions.push({extension:a,priority:t}),this.typeExtensions.sort((l,o)=>o.priority-l.priority)}loadLibrary(t){switch(t){case f.LuaLibraries.Base:this.lua.luaopen_base(this.address);break;case f.LuaLibraries.Coroutine:this.lua.luaopen_coroutine(this.address);break;case f.LuaLibraries.Table:this.lua.luaopen_table(this.address);break;case f.LuaLibraries.IO:this.lua.luaopen_io(this.address);break;case f.LuaLibraries.OS:this.lua.luaopen_os(this.address);break;case f.LuaLibraries.String:this.lua.luaopen_string(this.address);break;case f.LuaLibraries.UTF8:this.lua.luaopen_string(this.address);break;case f.LuaLibraries.Math:this.lua.luaopen_math(this.address);break;case f.LuaLibraries.Debug:this.lua.luaopen_debug(this.address);break;case f.LuaLibraries.Package:this.lua.luaopen_package(this.address);break}this.lua.lua_setglobal(this.address,t)}get(t){const a=this.lua.lua_getglobal(this.address,t),l=this.getValue(-1,a);return this.pop(),l}set(t,a){this.pushValue(a),this.lua.lua_setglobal(this.address,t)}getTable(t,a){const l=this.getTop(),o=this.lua.lua_getglobal(this.address,t);try{if(o!==f.LuaType.Table)throw new TypeError(`Unexpected type in ${t}. Expected ${f.LuaType[f.LuaType.Table]}. Got ${f.LuaType[o]}.`);a(l+1)}finally{this.getTop()!==l+1&&console.warn(`getTable: expected stack size ${l} got ${this.getTop()}`),this.setTop(l)}}getMemoryUsed(){return this.getMemoryStatsRef().memoryUsed}getMemoryMax(){return this.getMemoryStatsRef().memoryMax}setMemoryMax(t){this.getMemoryStatsRef().memoryMax=t}getMemoryStatsRef(){if(!this.memoryStats)throw new Error("Memory allocations is not being traced, please build engine with { traceAllocations: true }");return this.memoryStats}}class hn{constructor(t,a){this.thread=t,this.name=a}isType(t,a,l,o){return l===f.LuaType.Userdata&&o===this.name}getValue(t,a,l){const o=t.lua.luaL_testudata(t.address,a,this.name);if(!o)throw new Error(`data does not have the expected metatable: ${this.name}`);const p=t.lua.module.getValue(o,"*");return t.lua.getRef(p)}pushValue(t,a,l){const{target:o}=a,p=t.lua.ref(o),y=t.lua.lua_newuserdatauv(t.address,O,0);if(t.lua.module.setValue(y,p,"*"),f.LuaType.Nil===t.lua.luaL_getmetatable(t.address,this.name))throw t.pop(2),new Error(`metatable not found: ${this.name}`);return t.lua.lua_setmetatable(t.address,-2),!0}}class Mt extends hn{constructor(t,a){if(super(t,"js_error"),this.gcPointer=t.lua.module.addFunction(l=>{const o=t.lua.luaL_checkudata(l,1,this.name),p=t.lua.module.getValue(o,"*");return t.lua.unref(p),f.LuaReturn.Ok},"ii"),t.lua.luaL_newmetatable(t.address,this.name)){const l=t.lua.lua_gettop(t.address);t.lua.lua_pushstring(t.address,"protected metatable"),t.lua.lua_setfield(t.address,l,"__metatable"),t.lua.lua_pushcclosure(t.address,this.gcPointer,0),t.lua.lua_setfield(t.address,l,"__gc"),t.pushValue((o,p)=>p==="message"?o.message:null),t.lua.lua_setfield(t.address,l,"__index"),t.pushValue(o=>o.message),t.lua.lua_setfield(t.address,l,"__tostring")}t.lua.lua_pop(t.address,1),a&&t.set("Error",{create:l=>{if(l&&typeof l!="string")throw new Error("message must be a string");return new Error(l)}})}pushValue(t,a){return a.target instanceof Error?super.pushValue(t,a):!1}close(){this.thread.lua.module.removeFunction(this.gcPointer)}}function Ft(_,t){return new Mt(_,t)}class Yn{constructor(t){this.count=t}}function ae(_,t){return new nn(_,t)}class xt extends hn{constructor(t,a){super(t,"js_function"),this.functionRegistry=typeof FinalizationRegistry<"u"?new FinalizationRegistry(l=>{this.thread.isClosed()||this.thread.lua.luaL_unref(this.thread.address,V,l)}):void 0,this.options=a,this.callbackContext=t.newThread(),this.callbackContextIndex=this.thread.lua.luaL_ref(t.address,V),this.functionRegistry||console.warn("FunctionTypeExtension: FinalizationRegistry not found. Memory leaks likely."),this.gcPointer=t.lua.module.addFunction(l=>{t.lua.luaL_checkudata(l,1,this.name);const o=t.lua.luaL_checkudata(l,1,this.name),p=t.lua.module.getValue(o,"*");return t.lua.unref(p),f.LuaReturn.Ok},"ii"),t.lua.luaL_newmetatable(t.address,this.name)&&(t.lua.lua_pushstring(t.address,"__gc"),t.lua.lua_pushcclosure(t.address,this.gcPointer,0),t.lua.lua_settable(t.address,-3),t.lua.lua_pushstring(t.address,"__metatable"),t.lua.lua_pushstring(t.address,"protected metatable"),t.lua.lua_settable(t.address,-3)),t.lua.lua_pop(t.address,1),this.functionWrapper=t.lua.module.addFunction(l=>{const o=t.stateToThread(l),p=t.lua.luaL_checkudata(l,t.lua.lua_upvalueindex(1),this.name),y=t.lua.module.getValue(p,"*"),{target:M,options:E}=t.lua.getRef(y),N=o.getTop(),R=[];if(E.receiveThread&&R.push(o),E.receiveArgsQuantity)R.push(N);else for(let P=1;P<=N;P++){const H=o.getValue(P);(P!==1||!(E!=null&&E.self)||H!==E.self)&&R.push(H)}try{const P=M.apply(E==null?void 0:E.self,R);if(P===void 0)return 0;if(P instanceof Yn)return P.count;if(P instanceof mn){for(const H of P)o.pushValue(H);return P.length}else return o.pushValue(P),1}catch(P){if(P===1/0)throw P;return o.pushValue(P),o.lua.lua_error(o.address)}},"ii")}close(){this.thread.lua.module.removeFunction(this.gcPointer),this.thread.lua.module.removeFunction(this.functionWrapper),this.callbackContext.close(),this.callbackContext.lua.luaL_unref(this.callbackContext.address,V,this.callbackContextIndex)}isType(t,a,l){return l===f.LuaType.Function}pushValue(t,a){if(typeof a.target!="function")return!1;const l=t.lua.ref(a),o=t.lua.lua_newuserdatauv(t.address,O,0);if(t.lua.module.setValue(o,l,"*"),f.LuaType.Nil===t.lua.luaL_getmetatable(t.address,this.name))throw t.pop(1),t.lua.unref(l),new Error(`metatable not found: ${this.name}`);return t.lua.lua_setmetatable(t.address,-2),t.lua.lua_pushcclosure(t.address,this.functionWrapper,1),!0}getValue(t,a){var l;t.lua.lua_pushvalue(t.address,a);const o=t.lua.luaL_ref(t.address,V),p=(...y)=>{var M;if(this.callbackContext.isClosed()){console.warn("Tried to call a function after closing lua state");return}const E=this.callbackContext.newThread();try{const N=E.lua.lua_rawgeti(E.address,V,BigInt(o));if(N!==f.LuaType.Function){const P=E.lua.luaL_getmetafield(E.address,-1,"__call");if(E.pop(),P!==f.LuaType.Function)throw new Error(`A value of type '${N}' was pushed but it is not callable`)}for(const P of y)E.pushValue(P);!((M=this.options)===null||M===void 0)&&M.functionTimeout&&E.setTimeout(Date.now()+this.options.functionTimeout);const R=E.lua.lua_pcallk(E.address,y.length,1,0,0,null);if(R===f.LuaReturn.Yield)throw new Error("cannot yield in callbacks from javascript");return E.assertOk(R),E.getTop()>0?E.getValue(-1):void 0}finally{E.close(),this.callbackContext.pop()}};return(l=this.functionRegistry)===null||l===void 0||l.register(p,o),p}}function Ot(_,t){return new xt(_,t)}class At extends hn{constructor(t){if(super(t,"js_null"),this.gcPointer=t.lua.module.addFunction(a=>{const l=t.lua.luaL_checkudata(a,1,this.name),o=t.lua.module.getValue(l,"*");return t.lua.unref(o),f.LuaReturn.Ok},"ii"),t.lua.luaL_newmetatable(t.address,this.name)){const a=t.lua.lua_gettop(t.address);t.lua.lua_pushstring(t.address,"protected metatable"),t.lua.lua_setfield(t.address,a,"__metatable"),t.lua.lua_pushcclosure(t.address,this.gcPointer,0),t.lua.lua_setfield(t.address,a,"__gc"),t.pushValue(()=>null),t.lua.lua_setfield(t.address,a,"__index"),t.pushValue(()=>"null"),t.lua.lua_setfield(t.address,a,"__tostring"),t.pushValue((l,o)=>l===o),t.lua.lua_setfield(t.address,a,"__eq")}t.lua.lua_pop(t.address,1),super.pushValue(t,new nn({},{})),t.lua.lua_setglobal(t.address,"null")}getValue(t,a){if(!t.lua.luaL_testudata(t.address,a,this.name))throw new Error(`data does not have the expected metatable: ${this.name}`);return null}pushValue(t,a){return(a==null?void 0:a.target)!==null?!1:(t.lua.lua_getglobal(t.address,"null"),!0)}close(){this.thread.lua.module.removeFunction(this.gcPointer)}}function Rt(_){return new At(_)}class Nt extends hn{constructor(t,a){if(super(t,"js_promise"),this.gcPointer=t.lua.module.addFunction(l=>{const o=t.lua.luaL_checkudata(l,1,this.name),p=t.lua.module.getValue(o,"*");return t.lua.unref(p),f.LuaReturn.Ok},"ii"),t.lua.luaL_newmetatable(t.address,this.name)){const l=t.lua.lua_gettop(t.address);t.lua.lua_pushstring(t.address,"protected metatable"),t.lua.lua_setfield(t.address,l,"__metatable"),t.lua.lua_pushcclosure(t.address,this.gcPointer,0),t.lua.lua_setfield(t.address,l,"__gc");const o=p=>{if(Promise.resolve(p)!==p&&typeof p.then!="function")throw new Error("promise method called without self instance");return!0};t.pushValue({next:(p,...y)=>o(p)&&p.then(...y),catch:(p,...y)=>o(p)&&p.catch(...y),finally:(p,...y)=>o(p)&&p.finally(...y),await:ae((p,y)=>{if(o(y),p.address===t.address)throw new Error("cannot await in the main thread");let M;const E=y.then(R=>{M={status:"fulfilled",value:R}}).catch(R=>{M={status:"rejected",value:R}}),N=this.thread.lua.module.addFunction(R=>{if(!M)return t.lua.lua_yieldk(p.address,0,0,N);this.thread.lua.module.removeFunction(N);const P=t.stateToThread(R);if(M.status==="rejected")return P.pushValue(M.value||new Error("promise rejected with no error")),this.thread.lua.lua_error(R);if(M.value instanceof Yn)return M.value.count;if(M.value instanceof mn){for(const H of M.value)P.pushValue(H);return M.value.length}else return P.pushValue(M.value),1},"iiii");return p.pushValue(E),new Yn(t.lua.lua_yieldk(p.address,1,0,N))},{receiveThread:!0})}),t.lua.lua_setfield(t.address,l,"__index"),t.pushValue((p,y)=>p===y),t.lua.lua_setfield(t.address,l,"__eq")}t.lua.lua_pop(t.address,1),a&&t.set("Promise",{create:l=>new Promise(l),all:l=>{if(!Array.isArray(l))throw new Error("argument must be an array of promises");return Promise.all(l.map(o=>Promise.resolve(o)))},resolve:l=>Promise.resolve(l)})}close(){this.thread.lua.module.removeFunction(this.gcPointer)}pushValue(t,a){return Promise.resolve(a.target)!==a.target&&typeof a.target.then!="function"?!1:super.pushValue(t,a)}}function It(_,t){return new Nt(_,t)}function Pe(_,t){return new nn(_,t||{})}class Pt extends hn{constructor(t){if(super(t,"js_proxy"),this.gcPointer=t.lua.module.addFunction(a=>{const l=t.lua.luaL_checkudata(a,1,this.name),o=t.lua.module.getValue(l,"*");return t.lua.unref(o),f.LuaReturn.Ok},"ii"),t.lua.luaL_newmetatable(t.address,this.name)){const a=t.lua.lua_gettop(t.address);t.lua.lua_pushstring(t.address,"protected metatable"),t.lua.lua_setfield(t.address,a,"__metatable"),t.lua.lua_pushcclosure(t.address,this.gcPointer,0),t.lua.lua_setfield(t.address,a,"__gc"),t.pushValue((l,o)=>{switch(typeof o){case"number":o=o-1;case"string":break;default:throw new Error("Only strings or numbers can index js objects")}const p=l[o];return typeof p=="function"?ae(p,{self:l}):p}),t.lua.lua_setfield(t.address,a,"__index"),t.pushValue((l,o,p)=>{switch(typeof o){case"number":o=o-1;case"string":break;default:throw new Error("Only strings or numbers can index js objects")}l[o]=p}),t.lua.lua_setfield(t.address,a,"__newindex"),t.pushValue(l=>{var o,p;return(p=(o=l.toString)===null||o===void 0?void 0:o.call(l))!==null&&p!==void 0?p:typeof l}),t.lua.lua_setfield(t.address,a,"__tostring"),t.pushValue(l=>l.length||0),t.lua.lua_setfield(t.address,a,"__len"),t.pushValue(l=>{const o=Object.getOwnPropertyNames(l);let p=0;return mn.of(()=>{const y=mn.of(o[p],l[o[p]]);return p++,y},l,null)}),t.lua.lua_setfield(t.address,a,"__pairs"),t.pushValue((l,o)=>l===o),t.lua.lua_setfield(t.address,a,"__eq"),t.pushValue((l,...o)=>(o[0]===l&&o.shift(),l(...o))),t.lua.lua_setfield(t.address,a,"__call")}t.lua.lua_pop(t.address,1)}isType(t,a,l,o){return l===f.LuaType.Userdata&&o===this.name}getValue(t,a){const l=t.lua.lua_touserdata(t.address,a),o=t.lua.module.getValue(l,"*");return t.lua.getRef(o)}pushValue(t,a){var l;const{target:o,options:p}=a;if(p.proxy===void 0){if(o==null||typeof o!="object"&&!(typeof o=="function"&&((l=o.prototype)===null||l===void 0?void 0:l.constructor)===o&&o.toString().startsWith("class "))||Promise.resolve(o)===o||typeof o.then=="function")return!1}else if(p.proxy===!1)return!1;return p.metatable&&!(p.metatable instanceof nn)?(a.options.metatable=Pe(p.metatable,{proxy:!1}),!1):super.pushValue(t,a)}close(){this.thread.lua.module.removeFunction(this.gcPointer)}}function Ct(_){return new Pt(_)}class Dt extends hn{constructor(t){super(t,"js_table")}close(){}isType(t,a,l){return l===f.LuaType.Table}getValue(t,a,l){const o=l||new Map,p=t.lua.lua_topointer(t.address,a);let y=o.get(p);if(!y){const M=this.readTableKeys(t,a);y=M.length>0&&M.every((N,R)=>N===String(R+1))?[]:{},o.set(p,y),this.readTableValues(t,a,o,y)}return y}pushValue(t,{target:a},l){if(typeof a!="object"||a===null)return!1;const o=l||new Map,p=o.get(a);if(p!==void 0)return t.lua.lua_rawgeti(t.address,V,BigInt(p)),!0;try{const y=t.getTop()+1,M=(E,N)=>{t.lua.lua_createtable(t.address,E,N);const R=t.lua.luaL_ref(t.address,V);o.set(a,R),t.lua.lua_rawgeti(t.address,V,BigInt(R))};if(Array.isArray(a)){M(a.length,0);for(let E=0;E<a.length;E++)t.pushValue(E+1,o),t.pushValue(a[E],o),t.lua.lua_settable(t.address,y)}else{M(0,Object.getOwnPropertyNames(a).length);for(const E in a)t.pushValue(E,o),t.pushValue(a[E],o),t.lua.lua_settable(t.address,y)}}finally{if(l===void 0)for(const y of o.values())t.lua.luaL_unref(t.address,V,y)}return!0}readTableKeys(t,a){const l=[];for(t.lua.lua_pushnil(t.address);t.lua.lua_next(t.address,a);){const o=t.indexToString(-2);l.push(o),t.pop()}return l}readTableValues(t,a,l,o){const p=Array.isArray(o);for(t.lua.lua_pushnil(t.address);t.lua.lua_next(t.address,a);){const y=t.indexToString(-2),M=t.getValue(-1,void 0,l);p?o.push(M):o[y]=M,t.pop()}}}function Ut(_){return new Dt(_)}function jt(_){return new nn(_,{reference:!0})}class Vt extends hn{constructor(t){if(super(t,"js_userdata"),this.gcPointer=t.lua.module.addFunction(a=>{const l=t.lua.luaL_checkudata(a,1,this.name),o=t.lua.module.getValue(l,"*");return t.lua.unref(o),f.LuaReturn.Ok},"ii"),t.lua.luaL_newmetatable(t.address,this.name)){const a=t.lua.lua_gettop(t.address);t.lua.lua_pushstring(t.address,"protected metatable"),t.lua.lua_setfield(t.address,a,"__metatable"),t.lua.lua_pushcclosure(t.address,this.gcPointer,0),t.lua.lua_setfield(t.address,a,"__gc")}t.lua.lua_pop(t.address,1)}isType(t,a,l,o){return l===f.LuaType.Userdata&&o===this.name}getValue(t,a){const l=t.lua.lua_touserdata(t.address,a),o=t.lua.module.getValue(l,"*");return t.lua.getRef(o)}pushValue(t,a){return a.options.reference?super.pushValue(t,a):!1}close(){this.thread.lua.module.removeFunction(this.gcPointer)}}function Ht(_){return new Vt(_)}class Ce{constructor(t,{openStandardLibs:a=!0,injectObjects:l=!1,enableProxy:o=!0,traceAllocations:p=!1,functionTimeout:y=void 0}={}){this.cmodule=t,this.global=new Ie(this.cmodule,p),this.global.registerTypeExtension(0,Ut(this.global)),this.global.registerTypeExtension(0,Ot(this.global,{functionTimeout:y})),this.global.registerTypeExtension(1,It(this.global,l)),l&&this.global.registerTypeExtension(5,Rt(this.global)),o?this.global.registerTypeExtension(3,Ct(this.global)):this.global.registerTypeExtension(1,Ft(this.global,l)),this.global.registerTypeExtension(4,Ht(this.global)),a&&this.cmodule.luaL_openlibs(this.global.address)}doString(t){return this.callByteCode(a=>a.loadString(t))}doFile(t){return this.callByteCode(a=>a.loadFile(t))}doStringSync(t){return this.global.loadString(t),this.global.runSync()[0]}doFileSync(t){return this.global.loadFile(t),this.global.runSync()[0]}async callByteCode(t){const a=this.global.newThread(),l=this.global.getTop();try{t(a);const o=await a.run(0);return o.length>0?(this.cmodule.lua_xmove(a.address,this.global.address,o.length),this.global.getValue(this.global.getTop()-o.length+1)):void 0}finally{this.global.remove(l)}}}var zt=(()=>{var _=typeof document>"u"&&typeof location>"u"?re("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:D&&D.src||new URL("index.js",document.baseURI).href;return async function(t={}){var a=t,l,o;a.ready=new Promise((n,e)=>{l=n,o=e}),"_malloc _free _realloc _luaL_checkversion_ _luaL_getmetafield _luaL_callmeta _luaL_tolstring _luaL_argerror _luaL_typeerror _luaL_checklstring _luaL_optlstring _luaL_checknumber _luaL_optnumber _luaL_checkinteger _luaL_optinteger _luaL_checkstack _luaL_checktype _luaL_checkany _luaL_newmetatable _luaL_setmetatable _luaL_testudata _luaL_checkudata _luaL_where _luaL_fileresult _luaL_execresult _luaL_ref _luaL_unref _luaL_loadfilex _luaL_loadbufferx _luaL_loadstring _luaL_newstate _luaL_len _luaL_addgsub _luaL_gsub _luaL_setfuncs _luaL_getsubtable _luaL_traceback _luaL_requiref _luaL_buffinit _luaL_prepbuffsize _luaL_addlstring _luaL_addstring _luaL_addvalue _luaL_pushresult _luaL_pushresultsize _luaL_buffinitsize _lua_newstate _lua_close _lua_newthread _lua_resetthread _lua_atpanic _lua_version _lua_absindex _lua_gettop _lua_settop _lua_pushvalue _lua_rotate _lua_copy _lua_checkstack _lua_xmove _lua_isnumber _lua_isstring _lua_iscfunction _lua_isinteger _lua_isuserdata _lua_type _lua_typename _lua_tonumberx _lua_tointegerx _lua_toboolean _lua_tolstring _lua_rawlen _lua_tocfunction _lua_touserdata _lua_tothread _lua_topointer _lua_arith _lua_rawequal _lua_compare _lua_pushnil _lua_pushnumber _lua_pushinteger _lua_pushlstring _lua_pushstring _lua_pushcclosure _lua_pushboolean _lua_pushlightuserdata _lua_pushthread _lua_getglobal _lua_gettable _lua_getfield _lua_geti _lua_rawget _lua_rawgeti _lua_rawgetp _lua_createtable _lua_newuserdatauv _lua_getmetatable _lua_getiuservalue _lua_setglobal _lua_settable _lua_setfield _lua_seti _lua_rawset _lua_rawseti _lua_rawsetp _lua_setmetatable _lua_setiuservalue _lua_callk _lua_pcallk _lua_load _lua_dump _lua_yieldk _lua_resume _lua_status _lua_isyieldable _lua_setwarnf _lua_warning _lua_error _lua_next _lua_concat _lua_len _lua_stringtonumber _lua_getallocf _lua_setallocf _lua_toclose _lua_closeslot _lua_getstack _lua_getinfo _lua_getlocal _lua_setlocal _lua_getupvalue _lua_setupvalue _lua_upvalueid _lua_upvaluejoin _lua_sethook _lua_gethook _lua_gethookmask _lua_gethookcount _lua_setcstacklimit _luaopen_base _luaopen_coroutine _luaopen_table _luaopen_io _luaopen_os _luaopen_string _luaopen_utf8 _luaopen_math _luaopen_debug _luaopen_package _luaL_openlibs _memory ___indirect_function_table _fflush onRuntimeInitialized".split(" ").forEach(n=>{Object.getOwnPropertyDescriptor(a.ready,n)||Object.defineProperty(a.ready,n,{get:()=>z("You are getting "+n+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),set:()=>z("You are setting "+n+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")})});var p=Object.assign({},a),y="./this.program",M=(n,e)=>{throw e},E=typeof window=="object",N=typeof importScripts=="function",R=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",P=!E&&!R&&!N;if(a.ENVIRONMENT)throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");var H="",Ln,Tn,Sn;if(R){if(typeof process>"u"||!process.release||process.release.name!=="node")throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var De=process.versions.node,Cn=De.split(".").slice(0,3);if(Cn=1e4*Cn[0]+100*Cn[1]+1*Cn[2].split("-")[0],16e4>Cn)throw Error("This emscripten-generated code requires node v16.0.0 (detected v"+De+")");const{createRequire:n}=await mr(async()=>{const{createRequire:e}=await Promise.resolve().then(()=>gr);return{createRequire:e}},void 0);var Mn=n(typeof document>"u"&&typeof location>"u"?re("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:D&&D.src||new URL("index.js",document.baseURI).href),ie=Mn("fs"),se=Mn("path");N?H=se.dirname(H)+"/":H=Mn("url").fileURLToPath(new URL("./",typeof document>"u"&&typeof location>"u"?re("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:D&&D.src||new URL("index.js",document.baseURI).href)),Ln=(e,r)=>(e=Hn(e)?new URL(e):se.normalize(e),ie.readFileSync(e,r?void 0:"utf8")),Sn=e=>(e=Ln(e,!0),e.buffer||(e=new Uint8Array(e)),g(e.buffer),e),Tn=(e,r,i,u=!0)=>{e=Hn(e)?new URL(e):se.normalize(e),ie.readFile(e,u?void 0:"utf8",(c,h)=>{c?i(c):r(u?h.buffer:h)})},!a.thisProgram&&1<process.argv.length&&(y=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),M=(e,r)=>{throw process.exitCode=e,r},a.inspect=()=>"[Emscripten Module object]"}else if(P){if(typeof process=="object"&&typeof Mn=="function"||typeof window=="object"||typeof importScripts=="function")throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");typeof read<"u"&&(Ln=read),Sn=n=>typeof readbuffer=="function"?new Uint8Array(readbuffer(n)):(n=read(n,"binary"),g(typeof n=="object"),n),Tn=(n,e)=>{setTimeout(()=>e(Sn(n)))},typeof clearTimeout>"u"&&(globalThis.clearTimeout=()=>{}),typeof setTimeout>"u"&&(globalThis.setTimeout=n=>typeof n=="function"?n():z()),typeof quit=="function"&&(M=(n,e)=>{throw setTimeout(()=>{if(!(e instanceof Xe)){let r=e;e&&typeof e=="object"&&e.stack&&(r=[e,e.stack]),B(`exiting due to exception: ${r}`)}quit(n)}),e}),typeof print<"u"&&(typeof console>"u"&&(console={}),console.log=print,console.warn=console.error=typeof printErr<"u"?printErr:print)}else if(E||N){if(N?H=self.location.href:typeof document<"u"&&document.currentScript&&(H=document.currentScript.src),_&&(H=_),H.indexOf("blob:")!==0?H=H.substr(0,H.replace(/[?#].*/,"").lastIndexOf("/")+1):H="",typeof window!="object"&&typeof importScripts!="function")throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");Ln=n=>{var e=new XMLHttpRequest;return e.open("GET",n,!1),e.send(null),e.responseText},N&&(Sn=n=>{var e=new XMLHttpRequest;return e.open("GET",n,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),Tn=(n,e,r)=>{var i=new XMLHttpRequest;i.open("GET",n,!0),i.responseType="arraybuffer",i.onload=()=>{i.status==200||i.status==0&&i.response?e(i.response):r()},i.onerror=r,i.send(null)}}else throw Error("environment detection error");var Fn=console.log.bind(console),B=console.error.bind(console);Object.assign(a,p),p=null,L("ENVIRONMENT"),L("GL_MAX_TEXTURE_IMAGE_UNITS"),L("SDL_canPlayWithWebAudio"),L("SDL_numSimultaneouslyQueuedBuffers"),L("INITIAL_MEMORY"),L("wasmMemory"),L("arguments"),L("buffer"),L("canvas"),L("doNotCaptureKeyboard"),L("dynamicLibraries"),L("elementPointerLock"),L("extraStackTrace"),L("forcedAspectRatio"),L("instantiateWasm"),L("keyboardListeningElement"),L("freePreloadedMediaOnUse"),L("loadSplitModule"),L("logReadFiles"),L("mainScriptUrlOrBlob"),L("mem"),L("monitorRunDependencies"),L("noExitRuntime"),L("noInitialRun"),L("onAbort"),L("onCustomMessage"),L("onExit"),L("onFree"),L("onFullScreen"),L("onMalloc"),L("onRealloc"),L("onRuntimeInitialized"),L("postMainLoop"),L("postRun"),L("preInit"),L("preMainLoop"),L("preinitializedWebGLContext"),L("memoryInitializerRequest"),L("preloadPlugins"),L("print"),L("printErr"),L("quit"),L("setStatus"),L("statusMessage"),L("stderr"),L("stdin"),L("stdout"),L("thisProgram"),L("wasm"),L("wasmBinary"),L("websocket"),L("fetchSettings"),un("arguments","arguments_"),un("thisProgram","thisProgram"),un("quit","quit_"),g(typeof a.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),g(typeof a.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),g(typeof a.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),g(typeof a.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),g(typeof a.read>"u","Module.read option was removed (modify read_ in JS)"),g(typeof a.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),g(typeof a.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),g(typeof a.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),g(typeof a.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),un("asm","wasmExports"),un("read","read_"),un("readAsync","readAsync"),un("readBinary","readBinary"),un("setWindowTitle","setWindowTitle"),g(!P,"shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable."),un("wasmBinary","wasmBinary"),typeof WebAssembly!="object"&&z("no native wasm support detected");var Dn,Un=!1;function g(n,e){n||z("Assertion failed"+(e?": "+e:""))}var G,Gn,xn,k,j,ue,Kn,oe;function Ue(){var n=Dn.buffer;a.HEAP8=G=new Int8Array(n),a.HEAP16=xn=new Int16Array(n),a.HEAPU8=Gn=new Uint8Array(n),a.HEAPU16=new Uint16Array(n),a.HEAP32=k=new Int32Array(n),a.HEAPU32=j=new Uint32Array(n),a.HEAPF32=ue=new Float32Array(n),a.HEAPF64=oe=new Float64Array(n),a.HEAP64=Kn=new BigInt64Array(n),a.HEAPU64=new BigUint64Array(n)}g(!a.STACK_SIZE,"STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),g(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support"),g(!a.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),g(!a.INITIAL_MEMORY,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");function le(){if(!Un){var n=Oe();n==0&&(n+=4);var e=j[n>>2],r=j[n+4>>2];e==34821223&&r==2310721022||z(`Stack overflow! Stack cookie has been overwritten at ${zn(n)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${zn(r)} ${zn(e)}`),j[0]!=1668509029&&z("Runtime error: The application has corrupted its heap memory area (address zero)!")}}var je=new Int16Array(1),Ve=new Int8Array(je.buffer);if(je[0]=25459,Ve[0]!==115||Ve[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";var ce=[],de=[],He=[],me=!1;g(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),g(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),g(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),g(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var jn=0,pn=null,Vn=null,On={};function ze(n){for(var e=n;;){if(!On[n])return n;n=e+Math.random()}}function he(n){jn++,n?(g(!On[n]),On[n]=1,pn===null&&typeof setInterval<"u"&&(pn=setInterval(()=>{if(Un)clearInterval(pn),pn=null;else{var e=!1,r;for(r in On)e||(e=!0,B("still waiting on run dependencies:")),B(`dependency: ${r}`);e&&B("(end of list)")}},1e4))):B("warning: run dependency added without ID")}function qn(n){jn--,n?(g(On[n]),delete On[n]):B("warning: run dependency removed without ID"),jn==0&&(pn!==null&&(clearInterval(pn),pn=null),Vn&&(n=Vn,Vn=null,n()))}function z(n){throw n="Aborted("+n+")",B(n),Un=!0,n=new WebAssembly.RuntimeError(n),o(n),n}var Be=n=>n.startsWith("data:application/octet-stream;base64,"),Hn=n=>n.startsWith("file://");function d(n){return function(){g(me,`native function \`${n}\` called before runtime initialization`);var e=vn[n];return g(e,`exported native function \`${n}\` not found`),e.apply(null,arguments)}}var fn;if(a.locateFile){if(fn="glue.wasm",!Be(fn)){var $e=fn;fn=a.locateFile?a.locateFile($e,H):H+$e}}else fn=new URL("glue.wasm",typeof document>"u"&&typeof location>"u"?re("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:D&&D.src||new URL("index.js",document.baseURI).href).href;function Ye(n){if(Sn)return Sn(n);throw"both async and sync fetching of the wasm failed"}function Yt(n){if(E||N){if(typeof fetch=="function"&&!Hn(n))return fetch(n,{credentials:"same-origin"}).then(e=>{if(!e.ok)throw"failed to load wasm binary file at '"+n+"'";return e.arrayBuffer()}).catch(()=>Ye(n));if(Tn)return new Promise((e,r)=>{Tn(n,i=>e(new Uint8Array(i)),r)})}return Promise.resolve().then(()=>Ye(n))}function We(n,e,r){return Yt(n).then(i=>WebAssembly.instantiate(i,e)).then(i=>i).then(r,i=>{B(`failed to asynchronously prepare wasm: ${i}`),Hn(fn)&&B(`warning: Loading from a file URI (${fn}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),z(i)})}function Wt(n,e){var r=fn;return typeof WebAssembly.instantiateStreaming!="function"||Be(r)||Hn(r)||R||typeof fetch!="function"?We(r,n,e):fetch(r,{credentials:"same-origin"}).then(i=>WebAssembly.instantiateStreaming(i,n).then(e,function(u){return B(`wasm streaming compile failed: ${u}`),B("falling back to ArrayBuffer instantiation"),We(r,n,e)}))}function un(n,e){Object.getOwnPropertyDescriptor(a,n)||Object.defineProperty(a,n,{configurable:!0,get(){z(`\`Module.${n}\` has been replaced by \`${e}\` (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)`)}})}function L(n){Object.getOwnPropertyDescriptor(a,n)&&z(`\`Module.${n}\` was supplied but \`${n}\` not included in INCOMING_MODULE_JS_API`)}function Ge(n){return n==="FS_createPath"||n==="FS_createDataFile"||n==="FS_createPreloadedFile"||n==="FS_unlink"||n==="addRunDependency"||n==="FS_createLazyFile"||n==="FS_createDevice"||n==="removeRunDependency"}function Ke(n,e){typeof globalThis<"u"&&Object.defineProperty(globalThis,n,{configurable:!0,get(){An(`\`${n}\` is not longer defined by emscripten. ${e}`)}})}Ke("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),Ke("asm","Please use wasmExports instead");function qe(n){Object.getOwnPropertyDescriptor(a,n)||Object.defineProperty(a,n,{configurable:!0,get(){var e=`'${n}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;Ge(n)&&(e+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),z(e)}})}function Xe(n){this.name="ExitStatus",this.message=`Program terminated with exit(${n})`,this.status=n}var zn=n=>(g(typeof n=="number"),"0x"+(n>>>0).toString(16).padStart(8,"0")),An=n=>{fe||(fe={}),fe[n]||(fe[n]=1,R&&(n="warning: "+n),B(n))},fe,Je=(n,e)=>{for(var r=0,i=n.length-1;0<=i;i--){var u=n[i];u==="."?n.splice(i,1):u===".."?(n.splice(i,1),r++):r&&(n.splice(i,1),r--)}if(e)for(;r;r--)n.unshift("..");return n},on=n=>{var e=n.charAt(0)==="/",r=n.substr(-1)==="/";return(n=Je(n.split("/").filter(i=>!!i),!e).join("/"))||e||(n="."),n&&r&&(n+="/"),(e?"/":"")+n},pe=n=>{var e=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(n).slice(1);return n=e[0],e=e[1],!n&&!e?".":(e&&(e=e.substr(0,e.length-1)),n+e)},_n=n=>{if(n==="/")return"/";n=on(n),n=n.replace(/\/$/,"");var e=n.lastIndexOf("/");return e===-1?n:n.substr(e+1)},Gt=(n,e)=>on(n+"/"+e),Kt=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return r=>crypto.getRandomValues(r);if(R)try{var n=Mn("crypto");if(n.randomFillSync)return r=>n.randomFillSync(r);var e=n.randomBytes;return r=>(r.set(e(r.byteLength)),r)}catch{}z("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };")},Ze=n=>(Ze=Kt())(n);function gn(){for(var n="",e=!1,r=arguments.length-1;-1<=r&&!e;r--){if(e=0<=r?arguments[r]:s.cwd(),typeof e!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!e)return"";n=e+"/"+n,e=e.charAt(0)==="/"}return n=Je(n.split("/").filter(i=>!!i),!e).join("/"),(e?"/":"")+n||"."}var Qe=(n,e)=>{function r(h){for(var b=0;b<h.length&&h[b]==="";b++);for(var x=h.length-1;0<=x&&h[x]==="";x--);return b>x?[]:h.slice(b,x-b+1)}n=gn(n).substr(1),e=gn(e).substr(1),n=r(n.split("/")),e=r(e.split("/"));for(var i=Math.min(n.length,e.length),u=i,c=0;c<i;c++)if(n[c]!==e[c]){u=c;break}for(i=[],c=u;c<n.length;c++)i.push("..");return i=i.concat(e.slice(u)),i.join("/")},nt=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Rn=(n,e)=>{for(var r=e+NaN,i=e;n[i]&&!(i>=r);)++i;if(16<i-e&&n.buffer&&nt)return nt.decode(n.subarray(e,i));for(r="";e<i;){var u=n[e++];if(u&128){var c=n[e++]&63;if((u&224)==192)r+=String.fromCharCode((u&31)<<6|c);else{var h=n[e++]&63;(u&240)==224?u=(u&15)<<12|c<<6|h:((u&248)!=240&&An("Invalid UTF-8 leading byte "+zn(u)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),u=(u&7)<<18|c<<12|h<<6|n[e++]&63),65536>u?r+=String.fromCharCode(u):(u-=65536,r+=String.fromCharCode(55296|u>>10,56320|u&1023))}}else r+=String.fromCharCode(u)}return r},_e=[],Nn=n=>{for(var e=0,r=0;r<n.length;++r){var i=n.charCodeAt(r);127>=i?e++:2047>=i?e+=2:55296<=i&&57343>=i?(e+=4,++r):e+=3}return e},ge=(n,e,r,i)=>{if(g(typeof n=="string",`stringToUTF8Array expects a string (got ${typeof n})`),!(0<i))return 0;var u=r;i=r+i-1;for(var c=0;c<n.length;++c){var h=n.charCodeAt(c);if(55296<=h&&57343>=h){var b=n.charCodeAt(++c);h=65536+((h&1023)<<10)|b&1023}if(127>=h){if(r>=i)break;e[r++]=h}else{if(2047>=h){if(r+1>=i)break;e[r++]=192|h>>6}else{if(65535>=h){if(r+2>=i)break;e[r++]=224|h>>12}else{if(r+3>=i)break;1114111<h&&An("Invalid Unicode code point "+zn(h)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),e[r++]=240|h>>18,e[r++]=128|h>>12&63}e[r++]=128|h>>6&63}e[r++]=128|h&63}}return e[r]=0,r-u};function Xn(n,e){var r=Array(Nn(n)+1);return n=ge(n,r,0,r.length),e&&(r.length=n),r}var be=[];function et(n,e){be[n]={input:[],output:[],K:e},ye(n,qt)}var qt={open(n){var e=be[n.node.rdev];if(!e)throw new s.g(43);n.tty=e,n.seekable=!1},close(n){n.tty.K.fsync(n.tty)},fsync(n){n.tty.K.fsync(n.tty)},read(n,e,r,i){if(!n.tty||!n.tty.K.ra)throw new s.g(60);for(var u=0,c=0;c<i;c++){try{var h=n.tty.K.ra(n.tty)}catch{throw new s.g(29)}if(h===void 0&&u===0)throw new s.g(6);if(h==null)break;u++,e[r+c]=h}return u&&(n.node.timestamp=Date.now()),u},write(n,e,r,i){if(!n.tty||!n.tty.K.ia)throw new s.g(60);try{for(var u=0;u<i;u++)n.tty.K.ia(n.tty,e[r+u])}catch{throw new s.g(29)}return i&&(n.node.timestamp=Date.now()),u}},Xt={ra(){n:{if(!_e.length){var n=null;if(R){var e=Buffer.alloc(256),r=0,i=process.stdin.fd;try{r=ie.readSync(i,e)}catch(u){if(u.toString().includes("EOF"))r=0;else throw u}0<r?n=e.slice(0,r).toString("utf-8"):n=null}else typeof window<"u"&&typeof window.prompt=="function"?(n=window.prompt("Input: "),n!==null&&(n+=`
`)):typeof readline=="function"&&(n=readline(),n!==null&&(n+=`
`));if(!n){n=null;break n}_e=Xn(n,!0)}n=_e.shift()}return n},ia(n,e){e===null||e===10?(Fn(Rn(n.output,0)),n.output=[]):e!=0&&n.output.push(e)},fsync(n){n.output&&0<n.output.length&&(Fn(Rn(n.output,0)),n.output=[])},Ia(){return{ab:25856,cb:5,$a:191,bb:35387,Za:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Ja(){return 0},Ka(){return[24,80]}},Jt={ia(n,e){e===null||e===10?(B(Rn(n.output,0)),n.output=[]):e!=0&&n.output.push(e)},fsync(n){n.output&&0<n.output.length&&(B(Rn(n.output,0)),n.output=[])}},tt=()=>{z("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")};function rt(n,e){var r=n.m?n.m.length:0;r>=e||(e=Math.max(e,r*(1048576>r?2:1.125)>>>0),r!=0&&(e=Math.max(e,256)),r=n.m,n.m=new Uint8Array(e),0<n.o&&n.m.set(r.subarray(0,n.o),0))}var A={G:null,s(){return A.createNode(null,"/",16895,0)},createNode(n,e,r,i){if((r&61440)===24576||s.isFIFO(r))throw new s.g(63);return A.G||(A.G={dir:{node:{C:A.h.C,v:A.h.v,lookup:A.h.lookup,J:A.h.J,rename:A.h.rename,unlink:A.h.unlink,rmdir:A.h.rmdir,readdir:A.h.readdir,symlink:A.h.symlink},stream:{D:A.l.D}},file:{node:{C:A.h.C,v:A.h.v},stream:{D:A.l.D,read:A.l.read,write:A.l.write,T:A.l.T,S:A.l.S,V:A.l.V}},link:{node:{C:A.h.C,v:A.h.v,readlink:A.h.readlink},stream:{}},na:{node:{C:A.h.C,v:A.h.v},stream:s.Da}}),r=s.createNode(n,e,r,i),X(r.mode)?(r.h=A.G.dir.node,r.l=A.G.dir.stream,r.m={}):s.isFile(r.mode)?(r.h=A.G.file.node,r.l=A.G.file.stream,r.o=0,r.m=null):(r.mode&61440)===40960?(r.h=A.G.link.node,r.l=A.G.link.stream):(r.mode&61440)===8192&&(r.h=A.G.na.node,r.l=A.G.na.stream),r.timestamp=Date.now(),n&&(n.m[e]=r,n.timestamp=r.timestamp),r},lb(n){return n.m?n.m.subarray?n.m.subarray(0,n.o):new Uint8Array(n.m):new Uint8Array(0)},h:{C(n){var e={};return e.dev=(n.mode&61440)===8192?n.id:1,e.ino=n.id,e.mode=n.mode,e.nlink=1,e.uid=0,e.gid=0,e.rdev=n.rdev,X(n.mode)?e.size=4096:s.isFile(n.mode)?e.size=n.o:(n.mode&61440)===40960?e.size=n.link.length:e.size=0,e.atime=new Date(n.timestamp),e.mtime=new Date(n.timestamp),e.ctime=new Date(n.timestamp),e.Ba=4096,e.blocks=Math.ceil(e.size/e.Ba),e},v(n,e){if(e.mode!==void 0&&(n.mode=e.mode),e.timestamp!==void 0&&(n.timestamp=e.timestamp),e.size!==void 0&&(e=e.size,n.o!=e))if(e==0)n.m=null,n.o=0;else{var r=n.m;n.m=new Uint8Array(e),r&&n.m.set(r.subarray(0,Math.min(e,n.o))),n.o=e}},lookup(){throw s.da[44]},J(n,e,r,i){return A.createNode(n,e,r,i)},rename(n,e,r){if(X(n.mode)){try{var i=ln(e,r)}catch{}if(i)for(var u in i.m)throw new s.g(55)}delete n.parent.m[n.name],n.parent.timestamp=Date.now(),n.name=r,e.m[r]=n,e.timestamp=n.parent.timestamp,n.parent=e},unlink(n,e){delete n.m[e],n.timestamp=Date.now()},rmdir(n,e){var r=ln(n,e),i;for(i in r.m)throw new s.g(55);delete n.m[e],n.timestamp=Date.now()},readdir(n){var e=[".",".."],r;for(r in n.m)n.m.hasOwnProperty(r)&&e.push(r);return e},symlink(n,e,r){return n=A.createNode(n,e,41471,0),n.link=r,n},readlink(n){if((n.mode&61440)!==40960)throw new s.g(28);return n.link}},l:{read(n,e,r,i,u){var c=n.node.m;if(u>=n.node.o)return 0;if(n=Math.min(n.node.o-u,i),g(0<=n),8<n&&c.subarray)e.set(c.subarray(u,u+n),r);else for(i=0;i<n;i++)e[r+i]=c[u+i];return n},write(n,e,r,i,u,c){if(g(!(e instanceof ArrayBuffer)),e.buffer===G.buffer&&(c=!1),!i)return 0;if(n=n.node,n.timestamp=Date.now(),e.subarray&&(!n.m||n.m.subarray)){if(c)return g(u===0,"canOwn must imply no weird position inside the file"),n.m=e.subarray(r,r+i),n.o=i;if(n.o===0&&u===0)return n.m=e.slice(r,r+i),n.o=i;if(u+i<=n.o)return n.m.set(e.subarray(r,r+i),u),i}if(rt(n,u+i),n.m.subarray&&e.subarray)n.m.set(e.subarray(r,r+i),u);else for(c=0;c<i;c++)n.m[u+c]=e[r+c];return n.o=Math.max(n.o,u+i),i},D(n,e,r){if(r===1?e+=n.position:r===2&&s.isFile(n.node.mode)&&(e+=n.node.o),0>e)throw new s.g(28);return e},T(n,e,r){rt(n.node,e+r),n.node.o=Math.max(n.node.o,e+r)},S(n,e,r,i,u){if(!s.isFile(n.node.mode))throw new s.g(43);if(n=n.node.m,u&2||n.buffer!==G.buffer){if((0<r||r+e<n.length)&&(n.subarray?n=n.subarray(r,r+e):n=Array.prototype.slice.call(n,r,r+e)),r=!0,e=tt(),!e)throw new s.g(48);G.set(n,e)}else r=!1,e=n.byteOffset;return{Ra:e,Aa:r}},V(n,e,r,i){return A.l.write(n,e,0,i,r,!1),0}}},Zt=(n,e,r)=>{var i=ze(`al ${n}`);Tn(n,u=>{g(u,`Loading data file "${n}" failed (no arrayBuffer).`),e(new Uint8Array(u)),i&&qn(i)},()=>{if(r)r();else throw`Loading data file "${n}" failed.`}),i&&he(i)},Qt=[],nr=(n,e,r,i)=>{typeof Browser<"u"&&Browser.R();var u=!1;return Qt.forEach(c=>{!u&&c.canHandle(e)&&(c.handle(n,e,r,i),u=!0)}),u},we=(n,e)=>{var r=0;return n&&(r|=365),e&&(r|=146),r},er={0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"},at={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},tr=n=>n.replace(/\b_Z[\w\d_]+/g,function(e){return An("warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling"),e===e?e:e+" ["+e+"]"});function ye(n,e){s.pa[n]={l:e}}function X(n){return(n&61440)===16384}function ln(n,e){var r;if(r=(r=wn(n,"x"))?r:n.h.lookup?0:2)throw new s.g(r,n);for(r=s.F[ke(n.id,e)];r;r=r.N){var i=r.name;if(r.parent.id===n.id&&i===e)return r}return s.lookup(n,e)}function $(n,e={}){if(n=gn(n),!n)return{path:"",node:null};if(e=Object.assign({ba:!0,ka:0},e),8<e.ka)throw new s.g(32);n=n.split("/").filter(h=>!!h);for(var r=s.root,i="/",u=0;u<n.length;u++){var c=u===n.length-1;if(c&&e.parent)break;if(r=ln(r,n[u]),i=on(i+"/"+n[u]),r.A&&(!c||c&&e.ba)&&(r=r.A.root),!c||e.B){for(c=0;(r.mode&61440)===40960;)if(r=s.readlink(i),i=gn(pe(i),r),r=$(i,{ka:e.ka+1}).node,40<c++)throw new s.g(32)}}return{path:i,node:r}}function bn(n){for(var e;;){if(s.Z(n))return n=n.s.ua,e?n[n.length-1]!=="/"?`${n}/${e}`:n+e:n;e=e?`${n.name}/${e}`:n.name,n=n.parent}}function ke(n,e){for(var r=0,i=0;i<e.length;i++)r=(r<<5)-r+e.charCodeAt(i)|0;return(n+r>>>0)%s.F.length}function it(n){var e=ke(n.parent.id,n.name);n.N=s.F[e],s.F[e]=n}function Jn(n){var e=ke(n.parent.id,n.name);if(s.F[e]===n)s.F[e]=n.N;else for(e=s.F[e];e;){if(e.N===n){e.N=n.N;break}e=e.N}}function st(n){var e=["r","w","rw"][n&3];return n&512&&(e+="w"),e}function wn(n,e){if(s.ta)return 0;if(!e.includes("r")||n.mode&292){if(e.includes("w")&&!(n.mode&146)||e.includes("x")&&!(n.mode&73))return 2}else return 2;return 0}function ve(n,e){try{return ln(n,e),20}catch{}return wn(n,"wx")}function Zn(n,e,r){try{var i=ln(n,e)}catch(u){return u.u}if(n=wn(n,"wx"))return n;if(r){if(!X(i.mode))return 54;if(s.Z(i)||bn(i)===s.cwd())return 10}else if(X(i.mode))return 31;return 0}function rr(){for(var n=0;n<=s.xa;n++)if(!s.streams[n])return n;throw new s.g(33)}function Q(n){if(n=s.qa(n),!n)throw new s.g(8);return n}function Ee(n,e=-1){return s.X||(s.X=function(){this.I={}},s.X.prototype={},Object.defineProperties(s.X.prototype,{object:{get(){return this.node},set(r){this.node=r}},flags:{get(){return this.I.flags},set(r){this.I.flags=r}},position:{get(){return this.I.position},set(r){this.I.position=r}}})),n=Object.assign(new s.X,n),e==-1&&(e=rr()),n.fd=e,s.streams[e]=n}function ut(n){var e=[];for(n=[n];n.length;){var r=n.pop();e.push(r),n.push.apply(n,r.U)}return e}function Qn(n,e,r){return typeof r>"u"&&(r=e,e=438),s.J(n,e|8192,r)}function ot(){s.g||(s.g=function(n,e){this.name="ErrnoError",this.node=e,this.Sa=function(r){this.u=r;for(var i in at)if(at[i]===r){this.code=i;break}},this.Sa(n),this.message=er[n],this.stack&&(Object.defineProperty(this,"stack",{value:Error().stack,writable:!0}),this.stack=tr(this.stack))},s.g.prototype=Error(),s.g.prototype.constructor=s.g,[44].forEach(n=>{s.da[n]=new s.g(n),s.da[n].stack="<generic error, no stack>"}))}function lt(n,e){try{var r=$(n,{B:!e});n=r.path}catch{}var i={Z:!1,exists:!1,error:0,name:null,path:null,object:null,Oa:!1,Qa:null,Pa:null};try{r=$(n,{parent:!0}),i.Oa=!0,i.Qa=r.path,i.Pa=r.node,i.name=_n(n),r=$(n,{B:!e}),i.exists=!0,i.path=r.path,i.object=r.node,i.name=r.node.name,i.Z=r.path==="/"}catch(u){i.error=u.u}return i}function ar(n,e,r,i){return n=typeof n=="string"?n:bn(n),e=on(n+"/"+e),s.create(e,we(r,i))}function Le(n){if(!(n.La||n.Ma||n.link||n.m)){if(typeof XMLHttpRequest<"u")throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(Ln)try{n.m=Xn(Ln(n.url),!0),n.o=n.m.length}catch{throw new s.g(29)}else throw Error("Cannot load without read() or XMLHttpRequest.")}}var s={root:null,U:[],pa:{},streams:[],Na:1,F:null,oa:"/",Y:!1,ta:!0,g:null,da:{},Fa:null,W:0,createNode(n,e,r,i){return g(typeof n=="object"),n=new s.wa(n,e,r,i),it(n),n},Z(n){return n===n.parent},isFile(n){return(n&61440)===32768},isFIFO(n){return(n&61440)===4096},isSocket(n){return(n&49152)===49152},xa:4096,qa:n=>s.streams[n],Da:{open(n){n.l=s.Ga(n.node.rdev).l,n.l.open&&n.l.open(n)},D(){throw new s.g(70)}},ha:n=>n>>8,nb:n=>n&255,M:(n,e)=>n<<8|e,Ga:n=>s.pa[n],va(n,e){function r(h){return g(0<s.W),s.W--,e(h)}function i(h){if(h){if(!i.Ea)return i.Ea=!0,r(h)}else++c>=u.length&&r(null)}typeof n=="function"&&(e=n,n=!1),s.W++,1<s.W&&B(`warning: ${s.W} FS.syncfs operations in flight at once, probably just doing extra work`);var u=ut(s.root.s),c=0;u.forEach(h=>{if(!h.type.va)return i(null);h.type.va(h,n,i)})},s(n,e,r){if(typeof n=="string")throw n;var i=r==="/",u=!r;if(i&&s.root)throw new s.g(10);if(!i&&!u){var c=$(r,{ba:!1});if(r=c.path,c=c.node,c.A)throw new s.g(10);if(!X(c.mode))throw new s.g(54)}return e={type:n,rb:e,ua:r,U:[]},n=n.s(e),n.s=e,e.root=n,i?s.root=n:c&&(c.A=e,c.s&&c.s.U.push(e)),n},xb(n){if(n=$(n,{ba:!1}),!n.node.A)throw new s.g(28);n=n.node;var e=n.A,r=ut(e);Object.keys(s.F).forEach(i=>{for(i=s.F[i];i;){var u=i.N;r.includes(i.s)&&Jn(i),i=u}}),n.A=null,e=n.s.U.indexOf(e),g(e!==-1),n.s.U.splice(e,1)},lookup(n,e){return n.h.lookup(n,e)},J(n,e,r){var i=$(n,{parent:!0}).node;if(n=_n(n),!n||n==="."||n==="..")throw new s.g(28);var u=ve(i,n);if(u)throw new s.g(u);if(!i.h.J)throw new s.g(63);return i.h.J(i,n,e,r)},create(n,e){return s.J(n,(e!==void 0?e:438)&4095|32768,0)},mkdir(n,e){return s.J(n,(e!==void 0?e:511)&1023|16384,0)},ob(n,e){n=n.split("/");for(var r="",i=0;i<n.length;++i)if(n[i]){r+="/"+n[i];try{s.mkdir(r,e)}catch(u){if(u.u!=20)throw u}}},symlink(n,e){if(!gn(n))throw new s.g(44);var r=$(e,{parent:!0}).node;if(!r)throw new s.g(44);e=_n(e);var i=ve(r,e);if(i)throw new s.g(i);if(!r.h.symlink)throw new s.g(63);return r.h.symlink(r,e,n)},rename(n,e){var r=pe(n),i=pe(e),u=_n(n),c=_n(e),h=$(n,{parent:!0}),b=h.node;if(h=$(e,{parent:!0}),h=h.node,!b||!h)throw new s.g(44);if(b.s!==h.s)throw new s.g(75);var x=ln(b,u);if(n=Qe(n,i),n.charAt(0)!==".")throw new s.g(28);if(n=Qe(e,r),n.charAt(0)!==".")throw new s.g(55);try{var w=ln(h,c)}catch{}if(x!==w){if(e=X(x.mode),u=Zn(b,u,e))throw new s.g(u);if(u=w?Zn(h,c,e):ve(h,c))throw new s.g(u);if(!b.h.rename)throw new s.g(63);if(x.A||w&&w.A)throw new s.g(10);if(h!==b&&(u=wn(b,"w")))throw new s.g(u);Jn(x);try{b.h.rename(x,h,c)}catch(F){throw F}finally{it(x)}}},rmdir(n){var e=$(n,{parent:!0}).node;n=_n(n);var r=ln(e,n),i=Zn(e,n,!0);if(i)throw new s.g(i);if(!e.h.rmdir)throw new s.g(63);if(r.A)throw new s.g(10);e.h.rmdir(e,n),Jn(r)},readdir(n){if(n=$(n,{B:!0}).node,!n.h.readdir)throw new s.g(54);return n.h.readdir(n)},unlink(n){var e=$(n,{parent:!0}).node;if(!e)throw new s.g(44);n=_n(n);var r=ln(e,n),i=Zn(e,n,!1);if(i)throw new s.g(i);if(!e.h.unlink)throw new s.g(63);if(r.A)throw new s.g(10);e.h.unlink(e,n),Jn(r)},readlink(n){if(n=$(n).node,!n)throw new s.g(44);if(!n.h.readlink)throw new s.g(28);return gn(bn(n.parent),n.h.readlink(n))},stat(n,e){if(n=$(n,{B:!e}).node,!n)throw new s.g(44);if(!n.h.C)throw new s.g(63);return n.h.C(n)},lstat(n){return s.stat(n,!0)},chmod(n,e,r){if(n=typeof n=="string"?$(n,{B:!r}).node:n,!n.h.v)throw new s.g(63);n.h.v(n,{mode:e&4095|n.mode&-4096,timestamp:Date.now()})},lchmod(n,e){s.chmod(n,e,!0)},fchmod(n,e){n=Q(n),s.chmod(n.node,e)},chown(n,e,r,i){if(n=typeof n=="string"?$(n,{B:!i}).node:n,!n.h.v)throw new s.g(63);n.h.v(n,{timestamp:Date.now()})},lchown(n,e,r){s.chown(n,e,r,!0)},fchown(n,e,r){n=Q(n),s.chown(n.node,e,r)},truncate(n,e){if(0>e)throw new s.g(28);if(n=typeof n=="string"?$(n,{B:!0}).node:n,!n.h.v)throw new s.g(63);if(X(n.mode))throw new s.g(31);if(!s.isFile(n.mode))throw new s.g(28);var r=wn(n,"w");if(r)throw new s.g(r);n.h.v(n,{size:e,timestamp:Date.now()})},kb(n,e){if(n=Q(n),!(n.flags&2097155))throw new s.g(28);s.truncate(n.node,e)},yb(n,e,r){n=$(n,{B:!0}).node,n.h.v(n,{timestamp:Math.max(e,r)})},open(n,e,r){if(n==="")throw new s.g(44);if(typeof e=="string"){var i={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[e];if(typeof i>"u")throw Error(`Unknown file open mode: ${e}`);e=i}if(r=e&64?(typeof r>"u"?438:r)&4095|32768:0,typeof n=="object")var u=n;else{n=on(n);try{u=$(n,{B:!(e&131072)}).node}catch{}}if(i=!1,e&64)if(u){if(e&128)throw new s.g(20)}else u=s.J(n,r,0),i=!0;if(!u)throw new s.g(44);if((u.mode&61440)===8192&&(e&=-513),e&65536&&!X(u.mode))throw new s.g(54);if(!i&&(r=u?(u.mode&61440)===40960?32:X(u.mode)&&(st(e)!=="r"||e&512)?31:wn(u,st(e)):44))throw new s.g(r);return e&512&&!i&&s.truncate(u,0),e&=-131713,u=Ee({node:u,path:bn(u),flags:e,seekable:!0,position:0,l:u.l,Xa:[],error:!1}),u.l.open&&u.l.open(u),!a.logReadFiles||e&1||(s.ja||(s.ja={}),n in s.ja||(s.ja[n]=1)),u},close(n){if(n.fd===null)throw new s.g(8);n.ea&&(n.ea=null);try{n.l.close&&n.l.close(n)}catch(e){throw e}finally{s.streams[n.fd]=null}n.fd=null},D(n,e,r){if(n.fd===null)throw new s.g(8);if(!n.seekable||!n.l.D)throw new s.g(70);if(r!=0&&r!=1&&r!=2)throw new s.g(28);return n.position=n.l.D(n,e,r),n.Xa=[],n.position},read(n,e,r,i,u){if(g(0<=r),0>i||0>u)throw new s.g(28);if(n.fd===null)throw new s.g(8);if((n.flags&2097155)===1)throw new s.g(8);if(X(n.node.mode))throw new s.g(31);if(!n.l.read)throw new s.g(28);var c=typeof u<"u";if(!c)u=n.position;else if(!n.seekable)throw new s.g(70);return e=n.l.read(n,e,r,i,u),c||(n.position+=e),e},write(n,e,r,i,u,c){if(g(0<=r),0>i||0>u)throw new s.g(28);if(n.fd===null)throw new s.g(8);if(!(n.flags&2097155))throw new s.g(8);if(X(n.node.mode))throw new s.g(31);if(!n.l.write)throw new s.g(28);n.seekable&&n.flags&1024&&s.D(n,0,2);var h=typeof u<"u";if(!h)u=n.position;else if(!n.seekable)throw new s.g(70);return e=n.l.write(n,e,r,i,u,c),h||(n.position+=e),e},T(n,e,r){if(n.fd===null)throw new s.g(8);if(0>e||0>=r)throw new s.g(28);if(!(n.flags&2097155))throw new s.g(8);if(!s.isFile(n.node.mode)&&!X(n.node.mode))throw new s.g(43);if(!n.l.T)throw new s.g(138);n.l.T(n,e,r)},S(n,e,r,i,u){if(i&2&&!(u&2)&&(n.flags&2097155)!==2)throw new s.g(2);if((n.flags&2097155)===1)throw new s.g(2);if(!n.l.S)throw new s.g(43);return n.l.S(n,e,r,i,u)},V(n,e,r,i,u){return g(0<=r),n.l.V?n.l.V(n,e,r,i,u):0},qb:()=>0,fa(n,e,r){if(!n.l.fa)throw new s.g(59);return n.l.fa(n,e,r)},readFile(n,e={}){if(e.flags=e.flags||0,e.encoding=e.encoding||"binary",e.encoding!=="utf8"&&e.encoding!=="binary")throw Error(`Invalid encoding type "${e.encoding}"`);var r,i=s.open(n,e.flags);n=s.stat(n).size;var u=new Uint8Array(n);return s.read(i,u,0,n,0),e.encoding==="utf8"?r=Rn(u,0):e.encoding==="binary"&&(r=u),s.close(i),r},writeFile(n,e,r={}){if(r.flags=r.flags||577,n=s.open(n,r.flags,r.mode),typeof e=="string"){var i=new Uint8Array(Nn(e)+1);e=ge(e,i,0,i.length),s.write(n,i,0,e,void 0,r.Ca)}else if(ArrayBuffer.isView(e))s.write(n,e,0,e.byteLength,void 0,r.Ca);else throw Error("Unsupported data type");s.close(n)},cwd:()=>s.oa,chdir(n){if(n=$(n,{B:!0}),n.node===null)throw new s.g(44);if(!X(n.node.mode))throw new s.g(54);var e=wn(n.node,"x");if(e)throw new s.g(e);s.oa=n.path},R(n,e,r){g(!s.R.Y,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),s.R.Y=!0,ot(),a.stdin=n||a.stdin,a.stdout=e||a.stdout,a.stderr=r||a.stderr,a.stdin?s.L("/dev","stdin",a.stdin):s.symlink("/dev/tty","/dev/stdin"),a.stdout?s.L("/dev","stdout",null,a.stdout):s.symlink("/dev/tty","/dev/stdout"),a.stderr?s.L("/dev","stderr",null,a.stderr):s.symlink("/dev/tty1","/dev/stderr"),n=s.open("/dev/stdin",0),e=s.open("/dev/stdout",1),r=s.open("/dev/stderr",1),g(n.fd===0,`invalid handle for stdin (${n.fd})`),g(e.fd===1,`invalid handle for stdout (${e.fd})`),g(r.fd===2,`invalid handle for stderr (${r.fd})`)},sb(){s.R.Y=!1,bt(0);for(var n=0;n<s.streams.length;n++){var e=s.streams[n];e&&s.close(e)}},jb(n,e){return n=lt(n,e),n.exists?n.object:null},hb(n,e){for(n=typeof n=="string"?n:bn(n),e=e.split("/").reverse();e.length;){var r=e.pop();if(r){var i=on(n+"/"+r);try{s.mkdir(i)}catch{}n=i}}return i},L(n,e,r,i){n=Gt(typeof n=="string"?n:bn(n),e),e=we(!!r,!!i),s.L.ha||(s.L.ha=64);var u=s.M(s.L.ha++,0);return ye(u,{open(c){c.seekable=!1},close(){i&&i.buffer&&i.buffer.length&&i(10)},read(c,h,b,x){for(var w=0,F=0;F<x;F++){try{var v=r()}catch{throw new s.g(29)}if(v===void 0&&w===0)throw new s.g(6);if(v==null)break;w++,h[b+F]=v}return w&&(c.node.timestamp=Date.now()),w},write(c,h,b,x){for(var w=0;w<x;w++)try{i(h[b+w])}catch{throw new s.g(29)}return x&&(c.node.timestamp=Date.now()),w}}),Qn(n,e,u)},fb(n,e,r,i,u){function c(){this.ga=!1,this.I=[]}function h(v,U,m,S,T){if(v=v.node.m,T>=v.length)return 0;if(S=Math.min(v.length-T,S),g(0<=S),v.slice)for(var I=0;I<S;I++)U[m+I]=v[T+I];else for(I=0;I<S;I++)U[m+I]=v.get(T+I);return S}if(c.prototype.get=function(v){if(!(v>this.length-1||0>v)){var U=v%this.chunkSize;return this.sa(v/this.chunkSize|0)[U]}},c.prototype.Ha=function(v){this.sa=v},c.prototype.ma=function(){var v=new XMLHttpRequest;if(v.open("HEAD",r,!1),v.send(null),!(200<=v.status&&300>v.status||v.status===304))throw Error("Couldn't load "+r+". Status: "+v.status);var U=Number(v.getResponseHeader("Content-length")),m,S=(m=v.getResponseHeader("Accept-Ranges"))&&m==="bytes";v=(m=v.getResponseHeader("Content-Encoding"))&&m==="gzip";var T=1048576;S||(T=U);var I=this;I.Ha(q=>{var en=q*T,tn=(q+1)*T-1;if(tn=Math.min(tn,U-1),typeof I.I[q]>"u"){var Ae=I.I;if(en>tn)throw Error("invalid range ("+en+", "+tn+") or no bytes requested!");if(tn>U-1)throw Error("only "+U+" bytes available! programmer error!");var Z=new XMLHttpRequest;if(Z.open("GET",r,!1),U!==T&&Z.setRequestHeader("Range","bytes="+en+"-"+tn),Z.responseType="arraybuffer",Z.overrideMimeType&&Z.overrideMimeType("text/plain; charset=x-user-defined"),Z.send(null),!(200<=Z.status&&300>Z.status||Z.status===304))throw Error("Couldn't load "+r+". Status: "+Z.status);en=Z.response!==void 0?new Uint8Array(Z.response||[]):Xn(Z.responseText||"",!0),Ae[q]=en}if(typeof I.I[q]>"u")throw Error("doXHR failed!");return I.I[q]}),(v||!U)&&(T=U=1,T=U=this.sa(0).length,Fn("LazyFiles on gzip forces download of the whole file when length is accessed")),this.za=U,this.ya=T,this.ga=!0},typeof XMLHttpRequest<"u"){if(!N)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var b=new c;Object.defineProperties(b,{length:{get:function(){return this.ga||this.ma(),this.za}},chunkSize:{get:function(){return this.ga||this.ma(),this.ya}}});var x=void 0}else x=r,b=void 0;var w=ar(n,e,i,u);b?w.m=b:x&&(w.m=null,w.url=x),Object.defineProperties(w,{o:{get:function(){return this.m.length}}});var F={};return Object.keys(w.l).forEach(v=>{var U=w.l[v];F[v]=function(){return Le(w),U.apply(null,arguments)}}),F.read=(v,U,m,S,T)=>(Le(w),h(v,U,m,S,T)),F.S=(v,U,m)=>{Le(w);var S=tt();if(!S)throw new s.g(48);return h(v,G,S,U,m),{Ra:S,Aa:!0}},w.l=F,w},Ya(){z("FS.absolutePath has been removed; use PATH_FS.resolve instead")},eb(){z("FS.createFolder has been removed; use FS.mkdir instead")},gb(){z("FS.createLink has been removed; use FS.symlink instead")},mb(){z("FS.joinPath has been removed; use PATH.join instead")},pb(){z("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},vb(){z("FS.standardizePath has been removed; use PATH.normalize instead")}},sn=n=>(g(typeof n=="number",`UTF8ToString expects a number (got ${typeof n})`),n?Rn(Gn,n):"");function Bn(n,e){if(e.charAt(0)==="/")return e;if(n=n===-100?s.cwd():Q(n).path,e.length==0)throw new s.g(44);return on(n+"/"+e)}var In=void 0;function cn(){g(In!=null);var n=k[+In>>2];return In+=4,n}var ne=(n,e,r)=>(g(typeof r=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),ge(n,Gn,e,r)),Pn=n=>n%4===0&&(n%100!==0||n%400===0),ct=[0,31,60,91,121,152,182,213,244,274,305,335],dt=[0,31,59,90,120,151,181,212,243,273,304,334],Te=n=>{var e=Nn(n)+1,r=sr(e);return r&&ne(n,r,e),r},ee={},mt=()=>{if(!Se){var n={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:y||"./this.program"},e;for(e in ee)ee[e]===void 0?delete n[e]:n[e]=ee[e];var r=[];for(e in n)r.push(`${e}=${n[e]}`);Se=r}return Se},Se,ht=[31,29,31,30,31,30,31,31,30,31,30,31],ft=[31,28,31,30,31,30,31,31,30,31,30,31],pt=(n,e)=>{g(0<=n.length,"writeArrayToMemory array must have a length (should be an array or typed array)"),G.set(n,e)},yn=[],J,Me=n=>{var e=yn[n];return e||(n>=yn.length&&(yn.length=n+1),yn[n]=e=J.get(n)),g(J.get(n)==e,"JavaScript-side Wasm function table mirror is out of date!"),e},ir=n=>{var e=a["_"+n];return g(e,"Cannot call unknown function "+n+", make sure it is exported"),e},kn,Fe=[];function _t(n,e,r,i){n||(n=this),this.parent=n,this.s=n.s,this.A=null,this.id=s.Na++,this.name=e,this.mode=r,this.h={},this.l={},this.rdev=i}Object.defineProperties(_t.prototype,{read:{get:function(){return(this.mode&365)===365},set:function(n){n?this.mode|=365:this.mode&=-366}},write:{get:function(){return(this.mode&146)===146},set:function(n){n?this.mode|=146:this.mode&=-147}},Ma:{get:function(){return X(this.mode)}},La:{get:function(){return(this.mode&61440)===8192}}}),s.wa=_t,s.ib=(n,e,r,i,u,c,h,b,x,w)=>{function F(m){function S(T){if(w&&w(),!b){var I=n,q=e;if(I&&(I=typeof I=="string"?I:bn(I),q=e?on(I+"/"+e):I),I=we(i,u),q=s.create(q,I),T){if(typeof T=="string"){for(var en=Array(T.length),tn=0,Ae=T.length;tn<Ae;++tn)en[tn]=T.charCodeAt(tn);T=en}s.chmod(q,I|146),en=s.open(q,577),s.write(en,T,0,T.length,0,x),s.close(en),s.chmod(q,I)}}c&&c(),qn(U)}nr(m,v,S,()=>{h&&h(),qn(U)})||S(m)}var v=e?gn(on(n+"/"+e)):n,U=ze(`cp ${v}`);he(U),typeof r=="string"?Zt(r,m=>F(m),h):F(r)},ot(),s.F=Array(4096),s.s(A,{},"/"),s.mkdir("/tmp"),s.mkdir("/home"),s.mkdir("/home/web_user"),function(){s.mkdir("/dev"),ye(s.M(1,3),{read:()=>0,write:(i,u,c,h)=>h}),Qn("/dev/null",s.M(1,3)),et(s.M(5,0),Xt),et(s.M(6,0),Jt),Qn("/dev/tty",s.M(5,0)),Qn("/dev/tty1",s.M(6,0));var n=new Uint8Array(1024),e=0,r=()=>(e===0&&(e=Ze(n).byteLength),n[--e]);s.L("/dev","random",r),s.L("/dev","urandom",r),s.mkdir("/dev/shm"),s.mkdir("/dev/shm/tmp")}(),function(){s.mkdir("/proc");var n=s.mkdir("/proc/self");s.mkdir("/proc/self/fd"),s.s({s(){var e=s.createNode(n,"fd",16895,73);return e.h={lookup(r,i){var u=Q(+i);return r={parent:null,s:{ua:"fake"},h:{readlink:()=>u.path}},r.parent=r}},e}},{},"/proc/self/fd")}(),s.Fa={MEMFS:A};var gt={__syscall_dup3:function(n,e,r){try{var i=Q(n);if(g(!r),i.fd===e)return-28;var u=s.qa(e);return u&&s.close(u),Ee(i,e).fd}catch(c){if(typeof s>"u"||c.name!=="ErrnoError")throw c;return-c.u}},__syscall_fcntl64:function(n,e,r){In=r;try{var i=Q(n);switch(e){case 0:var u=cn();if(0>u)return-28;for(;s.streams[u];)u++;return Ee(i,u).fd;case 1:case 2:return 0;case 3:return i.flags;case 4:return u=cn(),i.flags|=u,0;case 5:return u=cn(),xn[u+0>>1]=2,0;case 6:case 7:return 0;case 16:case 8:return-28;case 9:return k[xe()>>2]=28,-1;default:return-28}}catch(c){if(typeof s>"u"||c.name!=="ErrnoError")throw c;return-c.u}},__syscall_ioctl:function(n,e,r){In=r;try{var i=Q(n);switch(e){case 21509:return i.tty?0:-59;case 21505:if(!i.tty)return-59;if(i.tty.K.Ia){n=[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var u=cn();k[u>>2]=25856,k[u+4>>2]=5,k[u+8>>2]=191,k[u+12>>2]=35387;for(var c=0;32>c;c++)G[u+c+17>>0]=n[c]||0}return 0;case 21510:case 21511:case 21512:return i.tty?0:-59;case 21506:case 21507:case 21508:if(!i.tty)return-59;if(i.tty.K.Ja)for(u=cn(),n=[],c=0;32>c;c++)n.push(G[u+c+17>>0]);return 0;case 21519:return i.tty?(u=cn(),k[u>>2]=0):-59;case 21520:return i.tty?-28:-59;case 21531:return u=cn(),s.fa(i,e,u);case 21523:return i.tty?(i.tty.K.Ka&&(c=[24,80],u=cn(),xn[u>>1]=c[0],xn[u+2>>1]=c[1]),0):-59;case 21524:return i.tty?0:-59;case 21515:return i.tty?0:-59;default:return-28}}catch(h){if(typeof s>"u"||h.name!=="ErrnoError")throw h;return-h.u}},__syscall_openat:function(n,e,r,i){In=i;try{e=sn(e),e=Bn(n,e);var u=i?cn():0;return s.open(e,r,u).fd}catch(c){if(typeof s>"u"||c.name!=="ErrnoError")throw c;return-c.u}},__syscall_readlinkat:function(n,e,r,i){try{if(e=sn(e),e=Bn(n,e),0>=i)return-28;var u=s.readlink(e),c=Math.min(i,Nn(u)),h=G[r+c];return ne(u,r,i+1),G[r+c]=h,c}catch(b){if(typeof s>"u"||b.name!=="ErrnoError")throw b;return-b.u}},__syscall_renameat:function(n,e,r,i){try{return e=sn(e),i=sn(i),e=Bn(n,e),i=Bn(r,i),s.rename(e,i),0}catch(u){if(typeof s>"u"||u.name!=="ErrnoError")throw u;return-u.u}},__syscall_rmdir:function(n){try{return n=sn(n),s.rmdir(n),0}catch(e){if(typeof s>"u"||e.name!=="ErrnoError")throw e;return-e.u}},__syscall_unlinkat:function(n,e,r){try{return e=sn(e),e=Bn(n,e),r===0?s.unlink(e):r===512?s.rmdir(e):z("Invalid flags passed to unlinkat"),0}catch(i){if(typeof s>"u"||i.name!=="ErrnoError")throw i;return-i.u}},_emscripten_get_now_is_monotonic:()=>1,_emscripten_throw_longjmp:()=>{throw 1/0},_gmtime_js:function(n,e){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),n=new Date(1e3*n),k[e>>2]=n.getUTCSeconds(),k[e+4>>2]=n.getUTCMinutes(),k[e+8>>2]=n.getUTCHours(),k[e+12>>2]=n.getUTCDate(),k[e+16>>2]=n.getUTCMonth(),k[e+20>>2]=n.getUTCFullYear()-1900,k[e+24>>2]=n.getUTCDay(),k[e+28>>2]=(n.getTime()-Date.UTC(n.getUTCFullYear(),0,1,0,0,0,0))/864e5|0},_localtime_js:function(n,e){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),n=new Date(1e3*n),k[e>>2]=n.getSeconds(),k[e+4>>2]=n.getMinutes(),k[e+8>>2]=n.getHours(),k[e+12>>2]=n.getDate(),k[e+16>>2]=n.getMonth(),k[e+20>>2]=n.getFullYear()-1900,k[e+24>>2]=n.getDay(),k[e+28>>2]=(Pn(n.getFullYear())?ct:dt)[n.getMonth()]+n.getDate()-1|0,k[e+36>>2]=-(60*n.getTimezoneOffset());var r=new Date(n.getFullYear(),6,1).getTimezoneOffset(),i=new Date(n.getFullYear(),0,1).getTimezoneOffset();k[e+32>>2]=(r!=i&&n.getTimezoneOffset()==Math.min(i,r))|0},_mktime_js:function(n){var e=new Date(k[n+20>>2]+1900,k[n+16>>2],k[n+12>>2],k[n+8>>2],k[n+4>>2],k[n>>2],0),r=k[n+32>>2],i=e.getTimezoneOffset(),u=new Date(e.getFullYear(),6,1).getTimezoneOffset(),c=new Date(e.getFullYear(),0,1).getTimezoneOffset(),h=Math.min(c,u);return 0>r?k[n+32>>2]=+(u!=c&&h==i):0<r!=(h==i)&&(u=Math.max(c,u),e.setTime(e.getTime()+6e4*((0<r?h:u)-i))),k[n+24>>2]=e.getDay(),k[n+28>>2]=(Pn(e.getFullYear())?ct:dt)[e.getMonth()]+e.getDate()-1|0,k[n>>2]=e.getSeconds(),k[n+4>>2]=e.getMinutes(),k[n+8>>2]=e.getHours(),k[n+12>>2]=e.getDate(),k[n+16>>2]=e.getMonth(),k[n+20>>2]=e.getYear(),n=e.getTime(),isNaN(n)?(k[xe()>>2]=61,n=-1):n/=1e3,BigInt(n)},_tzset_js:(n,e,r)=>{function i(x){return(x=x.toTimeString().match(/\(([A-Za-z ]+)\)$/))?x[1]:"GMT"}var u=new Date().getFullYear(),c=new Date(u,0,1),h=new Date(u,6,1);u=c.getTimezoneOffset();var b=h.getTimezoneOffset();j[n>>2]=60*Math.max(u,b),k[e>>2]=+(u!=b),n=i(c),e=i(h),n=Te(n),e=Te(e),b<u?(j[r>>2]=n,j[r+4>>2]=e):(j[r>>2]=e,j[r+4>>2]=n)},abort:()=>{z("native code called abort()")},emscripten_date_now:()=>Date.now(),emscripten_get_now:()=>performance.now(),emscripten_resize_heap:n=>{var e=Gn.length;if(n>>>=0,g(n>e),2147483648<n)return B(`Cannot enlarge memory, requested ${n} bytes, but the limit is ${2147483648} bytes!`),!1;for(var r=1;4>=r;r*=2){var i=e*(1+.2/r);i=Math.min(i,n+100663296);var u=Math;i=Math.max(n,i),u=u.min.call(u,2147483648,i+(65536-i%65536)%65536);n:{i=u;var c=Dn.buffer,h=(i-c.byteLength+65535)/65536;try{Dn.grow(h),Ue();var b=1;break n}catch(x){B(`growMemory: Attempted to grow heap from ${c.byteLength} bytes to ${i} bytes, but got error: ${x}`)}b=void 0}if(b)return!0}return B(`Failed to grow the heap from ${e} bytes to ${u} bytes, not enough memory!`),!1},environ_get:(n,e)=>{var r=0;return mt().forEach((i,u)=>{var c=e+r;for(u=j[n+4*u>>2]=c,c=0;c<i.length;++c)g(i.charCodeAt(c)===(i.charCodeAt(c)&255)),G[u++>>0]=i.charCodeAt(c);G[u>>0]=0,r+=i.length+1}),0},environ_sizes_get:(n,e)=>{var r=mt();j[n>>2]=r.length;var i=0;return r.forEach(u=>i+=u.length+1),j[e>>2]=i,0},exit:n=>{lr(),Un=!0,M(n,new Xe(n))},fd_close:function(n){try{var e=Q(n);return s.close(e),0}catch(r){if(typeof s>"u"||r.name!=="ErrnoError")throw r;return r.u}},fd_read:function(n,e,r,i){try{n:{var u=Q(n);n=e;for(var c,h=e=0;h<r;h++){var b=j[n>>2],x=j[n+4>>2];n+=8;var w=s.read(u,G,b,x,c);if(0>w){var F=-1;break n}if(e+=w,w<x)break;typeof c<"u"&&(c+=w)}F=e}return j[i>>2]=F,0}catch(v){if(typeof s>"u"||v.name!=="ErrnoError")throw v;return v.u}},fd_seek:function(n,e,r,i){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e);try{if(isNaN(e))return 61;var u=Q(n);return s.D(u,e,r),Kn[i>>3]=BigInt(u.position),u.ea&&e===0&&r===0&&(u.ea=null),0}catch(c){if(typeof s>"u"||c.name!=="ErrnoError")throw c;return c.u}},fd_write:function(n,e,r,i){try{n:{var u=Q(n);n=e;for(var c,h=e=0;h<r;h++){var b=j[n>>2],x=j[n+4>>2];n+=8;var w=s.write(u,G,b,x,c);if(0>w){var F=-1;break n}e+=w,typeof c<"u"&&(c+=w)}F=e}return j[i>>2]=F,0}catch(v){if(typeof s>"u"||v.name!=="ErrnoError")throw v;return v.u}},invoke_vii:or,strftime:(n,e,r,i)=>{function u(m,S,T){for(m=typeof m=="number"?m.toString():m||"";m.length<S;)m=T[0]+m;return m}function c(m,S){return u(m,S,"0")}function h(m,S){function T(q){return 0>q?-1:0<q?1:0}var I;return(I=T(m.getFullYear()-S.getFullYear()))===0&&(I=T(m.getMonth()-S.getMonth()))===0&&(I=T(m.getDate()-S.getDate())),I}function b(m){switch(m.getDay()){case 0:return new Date(m.getFullYear()-1,11,29);case 1:return m;case 2:return new Date(m.getFullYear(),0,3);case 3:return new Date(m.getFullYear(),0,2);case 4:return new Date(m.getFullYear(),0,1);case 5:return new Date(m.getFullYear()-1,11,31);case 6:return new Date(m.getFullYear()-1,11,30)}}function x(m){var S=m.O;for(m=new Date(new Date(m.P+1900,0,1).getTime());0<S;){var T=m.getMonth(),I=(Pn(m.getFullYear())?ht:ft)[T];if(S>I-m.getDate())S-=I-m.getDate()+1,m.setDate(1),11>T?m.setMonth(T+1):(m.setMonth(0),m.setFullYear(m.getFullYear()+1));else{m.setDate(m.getDate()+S);break}}return T=new Date(m.getFullYear()+1,0,4),S=b(new Date(m.getFullYear(),0,4)),T=b(T),0>=h(S,m)?0>=h(T,m)?m.getFullYear()+1:m.getFullYear():m.getFullYear()-1}var w=j[i+40>>2];i={Va:k[i>>2],Ua:k[i+4>>2],$:k[i+8>>2],la:k[i+12>>2],aa:k[i+16>>2],P:k[i+20>>2],H:k[i+24>>2],O:k[i+28>>2],wb:k[i+32>>2],Ta:k[i+36>>2],Wa:w?sn(w):""},r=sn(r),w={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var F in w)r=r.replace(new RegExp(F,"g"),w[F]);var v="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),U="January February March April May June July August September October November December".split(" ");w={"%a":m=>v[m.H].substring(0,3),"%A":m=>v[m.H],"%b":m=>U[m.aa].substring(0,3),"%B":m=>U[m.aa],"%C":m=>c((m.P+1900)/100|0,2),"%d":m=>c(m.la,2),"%e":m=>u(m.la,2," "),"%g":m=>x(m).toString().substring(2),"%G":m=>x(m),"%H":m=>c(m.$,2),"%I":m=>(m=m.$,m==0?m=12:12<m&&(m-=12),c(m,2)),"%j":m=>{for(var S=0,T=0;T<=m.aa-1;S+=(Pn(m.P+1900)?ht:ft)[T++]);return c(m.la+S,3)},"%m":m=>c(m.aa+1,2),"%M":m=>c(m.Ua,2),"%n":()=>`
`,"%p":m=>0<=m.$&&12>m.$?"AM":"PM","%S":m=>c(m.Va,2),"%t":()=>"	","%u":m=>m.H||7,"%U":m=>c(Math.floor((m.O+7-m.H)/7),2),"%V":m=>{var S=Math.floor((m.O+7-(m.H+6)%7)/7);if(2>=(m.H+371-m.O-2)%7&&S++,S)S==53&&(T=(m.H+371-m.O)%7,T==4||T==3&&Pn(m.P)||(S=1));else{S=52;var T=(m.H+7-m.O-1)%7;(T==4||T==5&&Pn(m.P%400-1))&&S++}return c(S,2)},"%w":m=>m.H,"%W":m=>c(Math.floor((m.O+7-(m.H+6)%7)/7),2),"%y":m=>(m.P+1900).toString().substring(2),"%Y":m=>m.P+1900,"%z":m=>{m=m.Ta;var S=0<=m;return m=Math.abs(m)/60,(S?"+":"-")+("0000"+(m/60*100+m%60)).slice(-4)},"%Z":m=>m.Wa,"%%":()=>"%"},r=r.replace(/%%/g,"\0\0");for(F in w)r.includes(F)&&(r=r.replace(new RegExp(F,"g"),w[F](i)));return r=r.replace(/\0\0/g,"%"),F=Xn(r,!1),F.length>e?0:(pt(F,n),F.length-1)},system:n=>{if(R){if(!n)return 1;if(n=sn(n),!n.length)return 0;n=Mn("child_process").ub(n,[],{tb:!0,stdio:"inherit"});var e=(r,i)=>r<<8|i;return n.status===null?e(0,(r=>{switch(r){case"SIGHUP":return 1;case"SIGQUIT":return 3;case"SIGFPE":return 8;case"SIGKILL":return 9;case"SIGALRM":return 14;case"SIGTERM":return 15}return 2})(n.signal)):n.status<<8|0}return n?(k[xe()>>2]=52,-1):0}},vn=function(){var n={env:gt,wasi_snapshot_preview1:gt};he("wasm-instantiate");var e=a;return Wt(n,function(r){g(a===e,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),e=null,vn=r.instance.exports,Dn=vn.memory,g(Dn,"memory not found in wasm exports"),Ue(),J=vn.__indirect_function_table,g(J,"table not found in wasm exports"),de.unshift(vn.__wasm_call_ctors),qn("wasm-instantiate")}).catch(o),{}}();a._lua_checkstack=d("lua_checkstack"),a._lua_xmove=d("lua_xmove"),a._lua_atpanic=d("lua_atpanic"),a._lua_version=d("lua_version"),a._lua_absindex=d("lua_absindex"),a._lua_gettop=d("lua_gettop"),a._lua_settop=d("lua_settop"),a._lua_closeslot=d("lua_closeslot"),a._lua_rotate=d("lua_rotate"),a._lua_copy=d("lua_copy"),a._lua_pushvalue=d("lua_pushvalue"),a._lua_type=d("lua_type"),a._lua_typename=d("lua_typename"),a._lua_iscfunction=d("lua_iscfunction"),a._lua_isinteger=d("lua_isinteger"),a._lua_isnumber=d("lua_isnumber"),a._lua_isstring=d("lua_isstring"),a._lua_isuserdata=d("lua_isuserdata"),a._lua_rawequal=d("lua_rawequal"),a._lua_arith=d("lua_arith"),a._lua_compare=d("lua_compare"),a._lua_stringtonumber=d("lua_stringtonumber"),a._lua_tonumberx=d("lua_tonumberx"),a._lua_tointegerx=d("lua_tointegerx"),a._lua_toboolean=d("lua_toboolean"),a._lua_tolstring=d("lua_tolstring"),a._lua_rawlen=d("lua_rawlen"),a._lua_tocfunction=d("lua_tocfunction"),a._lua_touserdata=d("lua_touserdata"),a._lua_tothread=d("lua_tothread"),a._lua_topointer=d("lua_topointer"),a._lua_pushnil=d("lua_pushnil"),a._lua_pushnumber=d("lua_pushnumber"),a._lua_pushinteger=d("lua_pushinteger"),a._lua_pushlstring=d("lua_pushlstring"),a._lua_pushstring=d("lua_pushstring"),a._lua_pushcclosure=d("lua_pushcclosure"),a._lua_pushboolean=d("lua_pushboolean"),a._lua_pushlightuserdata=d("lua_pushlightuserdata"),a._lua_pushthread=d("lua_pushthread"),a._lua_getglobal=d("lua_getglobal"),a._lua_gettable=d("lua_gettable"),a._lua_getfield=d("lua_getfield"),a._lua_geti=d("lua_geti"),a._lua_rawget=d("lua_rawget"),a._lua_rawgeti=d("lua_rawgeti"),a._lua_rawgetp=d("lua_rawgetp"),a._lua_createtable=d("lua_createtable"),a._lua_getmetatable=d("lua_getmetatable"),a._lua_getiuservalue=d("lua_getiuservalue"),a._lua_setglobal=d("lua_setglobal"),a._lua_settable=d("lua_settable"),a._lua_setfield=d("lua_setfield"),a._lua_seti=d("lua_seti"),a._lua_rawset=d("lua_rawset"),a._lua_rawsetp=d("lua_rawsetp"),a._lua_rawseti=d("lua_rawseti"),a._lua_setmetatable=d("lua_setmetatable"),a._lua_setiuservalue=d("lua_setiuservalue"),a._lua_callk=d("lua_callk"),a._lua_pcallk=d("lua_pcallk"),a._lua_load=d("lua_load"),a._lua_dump=d("lua_dump"),a._lua_status=d("lua_status"),a._lua_error=d("lua_error"),a._lua_next=d("lua_next"),a._lua_toclose=d("lua_toclose"),a._lua_concat=d("lua_concat"),a._lua_len=d("lua_len"),a._lua_getallocf=d("lua_getallocf"),a._lua_setallocf=d("lua_setallocf"),a._lua_setwarnf=d("lua_setwarnf"),a._lua_warning=d("lua_warning"),a._lua_newuserdatauv=d("lua_newuserdatauv"),a._lua_getupvalue=d("lua_getupvalue"),a._lua_setupvalue=d("lua_setupvalue"),a._lua_upvalueid=d("lua_upvalueid"),a._lua_upvaluejoin=d("lua_upvaluejoin"),a._luaL_traceback=d("luaL_traceback"),a._lua_getstack=d("lua_getstack"),a._lua_getinfo=d("lua_getinfo"),a._luaL_buffinit=d("luaL_buffinit"),a._luaL_addstring=d("luaL_addstring"),a._luaL_prepbuffsize=d("luaL_prepbuffsize"),a._luaL_addvalue=d("luaL_addvalue"),a._luaL_pushresult=d("luaL_pushresult"),a._luaL_argerror=d("luaL_argerror"),a._luaL_typeerror=d("luaL_typeerror"),a._luaL_getmetafield=d("luaL_getmetafield"),a._luaL_where=d("luaL_where"),a._luaL_fileresult=d("luaL_fileresult");var xe=d("__errno_location");a._luaL_execresult=d("luaL_execresult"),a._luaL_newmetatable=d("luaL_newmetatable"),a._luaL_setmetatable=d("luaL_setmetatable"),a._luaL_testudata=d("luaL_testudata"),a._luaL_checkudata=d("luaL_checkudata"),a._luaL_optlstring=d("luaL_optlstring"),a._luaL_checklstring=d("luaL_checklstring"),a._luaL_checkstack=d("luaL_checkstack"),a._luaL_checktype=d("luaL_checktype"),a._luaL_checkany=d("luaL_checkany"),a._luaL_checknumber=d("luaL_checknumber"),a._luaL_optnumber=d("luaL_optnumber"),a._luaL_checkinteger=d("luaL_checkinteger"),a._luaL_optinteger=d("luaL_optinteger"),a._luaL_setfuncs=d("luaL_setfuncs"),a._luaL_addlstring=d("luaL_addlstring"),a._luaL_pushresultsize=d("luaL_pushresultsize"),a._luaL_buffinitsize=d("luaL_buffinitsize"),a._luaL_ref=d("luaL_ref"),a._luaL_unref=d("luaL_unref"),a._luaL_loadfilex=d("luaL_loadfilex"),a._luaL_loadbufferx=d("luaL_loadbufferx"),a._luaL_loadstring=d("luaL_loadstring"),a._luaL_callmeta=d("luaL_callmeta"),a._luaL_len=d("luaL_len"),a._luaL_tolstring=d("luaL_tolstring"),a._luaL_getsubtable=d("luaL_getsubtable"),a._luaL_requiref=d("luaL_requiref"),a._luaL_addgsub=d("luaL_addgsub"),a._luaL_gsub=d("luaL_gsub"),a._luaL_newstate=d("luaL_newstate"),a._lua_newstate=d("lua_newstate"),a._free=d("free"),a._realloc=d("realloc");var bt=a._fflush=d("fflush");a._luaL_checkversion_=d("luaL_checkversion_"),a._luaopen_base=d("luaopen_base"),a._luaopen_coroutine=d("luaopen_coroutine"),a._lua_newthread=d("lua_newthread"),a._lua_yieldk=d("lua_yieldk"),a._lua_isyieldable=d("lua_isyieldable"),a._lua_resetthread=d("lua_resetthread"),a._lua_resume=d("lua_resume"),a._luaopen_debug=d("luaopen_debug"),a._lua_gethookmask=d("lua_gethookmask"),a._lua_gethook=d("lua_gethook"),a._lua_gethookcount=d("lua_gethookcount"),a._lua_getlocal=d("lua_getlocal"),a._lua_sethook=d("lua_sethook"),a._lua_setlocal=d("lua_setlocal"),a._lua_setcstacklimit=d("lua_setcstacklimit");var sr=a._malloc=d("malloc");a._luaL_openlibs=d("luaL_openlibs"),a._luaopen_package=d("luaopen_package"),a._luaopen_table=d("luaopen_table"),a._luaopen_io=d("luaopen_io"),a._luaopen_os=d("luaopen_os"),a._luaopen_string=d("luaopen_string"),a._luaopen_math=d("luaopen_math"),a._luaopen_utf8=d("luaopen_utf8"),a._lua_close=d("lua_close");var ur=d("setThrew"),wt=()=>(wt=vn.emscripten_stack_init)(),Oe=()=>(Oe=vn.emscripten_stack_get_end)(),yt=d("stackSave"),kt=d("stackRestore"),vt=d("stackAlloc");function or(n,e,r){var i=yt();try{Me(n)(e,r)}catch(u){if(kt(i),u!==u+0)throw u;ur(1,0)}}a.ENV=ee,a.ccall=(n,e,r,i)=>{var u={string:w=>{var F=0;if(w!=null&&w!==0){F=Nn(w)+1;var v=vt(F);ne(w,v,F),F=v}return F},array:w=>{var F=vt(w.length);return pt(w,F),F}};n=ir(n);var c=[],h=0;if(g(e!=="array",'Return type should not be "array".'),i)for(var b=0;b<i.length;b++){var x=u[r[b]];x?(h===0&&(h=yt()),c[b]=x(i[b])):c[b]=i[b]}return r=n.apply(null,c),r=function(w){return h!==0&&kt(h),e==="string"?sn(w):e==="boolean"?!!w:w}(r)},a.addFunction=(n,e)=>{if(g(typeof n<"u"),!kn){kn=new WeakMap;var r=J.length;if(kn)for(var i=0;i<0+r;i++){var u=Me(i);u&&kn.set(u,i)}}if(r=kn.get(n)||0)return r;if(Fe.length)r=Fe.pop();else{try{J.grow(1)}catch(b){throw b instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":b}r=J.length-1}try{i=r,J.set(i,n),yn[i]=J.get(i)}catch(b){if(!(b instanceof TypeError))throw b;if(g(typeof e<"u","Missing signature argument to addFunction: "+n),typeof WebAssembly.Function=="function"){i=WebAssembly.Function,u={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"};for(var c={parameters:[],results:e[0]=="v"?[]:[u[e[0]]]},h=1;h<e.length;++h)g(e[h]in u,"invalid signature char: "+e[h]),c.parameters.push(u[e[h]]);e=new i(c,n)}else{for(i=[1],u=e.slice(0,1),e=e.slice(1),c={i:127,p:127,j:126,f:125,d:124,e:111},i.push(96),h=e.length,g(16384>h),128>h?i.push(h):i.push(h%128|128,h>>7),h=0;h<e.length;++h)g(e[h]in c,"invalid signature char: "+e[h]),i.push(c[e[h]]);u=="v"?i.push(0):i.push(1,c[u]),e=[0,97,115,109,1,0,0,0,1],u=i.length,g(16384>u),128>u?e.push(u):e.push(u%128|128,u>>7),e.push.apply(e,i),e.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),e=new WebAssembly.Module(new Uint8Array(e)),e=new WebAssembly.Instance(e,{e:{f:n}}).exports.f}i=r,J.set(i,e),yn[i]=J.get(i)}return kn.set(n,r),r},a.removeFunction=n=>{kn.delete(Me(n)),J.set(n,null),yn[n]=J.get(n),Fe.push(n)},a.setValue=function(n,e,r="i8"){switch(r.endsWith("*")&&(r="*"),r){case"i1":G[n>>0]=e;break;case"i8":G[n>>0]=e;break;case"i16":xn[n>>1]=e;break;case"i32":k[n>>2]=e;break;case"i64":Kn[n>>3]=BigInt(e);break;case"float":ue[n>>2]=e;break;case"double":oe[n>>3]=e;break;case"*":j[n>>2]=e;break;default:z(`invalid type for setValue: ${r}`)}},a.getValue=function(n,e="i8"){switch(e.endsWith("*")&&(e="*"),e){case"i1":return G[n>>0];case"i8":return G[n>>0];case"i16":return xn[n>>1];case"i32":return k[n>>2];case"i64":return Kn[n>>3];case"float":return ue[n>>2];case"double":return oe[n>>3];case"*":return j[n>>2];default:z(`invalid type for getValue: ${e}`)}},a.stringToUTF8=ne,a.lengthBytesUTF8=Nn,a.stringToNewUTF8=Te,a.FS=s,"writeI53ToI64 writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling readI53FromI64 readI53FromU64 convertI32PairToI53 convertI32PairToI53Checked convertU32PairToI53 inetPton4 inetNtop4 inetPton6 inetNtop6 readSockaddr writeSockaddr getHostByName getCallstack emscriptenLog convertPCtoSourceLocation readEmAsmArgs jstoi_q jstoi_s listenOnce autoResumeAudioContext getDynCaller dynCall handleException runtimeKeepalivePush runtimeKeepalivePop callUserCallback maybeExit asmjsMangle handleAllocatorInit HandleAllocator getNativeTypeSize STACK_SIZE STACK_ALIGN POINTER_SIZE ASSERTIONS cwrap reallyNegative unSign strLen reSign formatString intArrayToString AsciiToString UTF16ToString stringToUTF16 lengthBytesUTF16 UTF32ToString stringToUTF32 lengthBytesUTF32 registerKeyEventCallback maybeCStringToJsString findEventTarget findCanvasEventTarget getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback registerBeforeUnloadEventCallback fillBatteryEventData battery registerBatteryEventCallback setCanvasElementSize getCanvasElementSize jsStackTrace stackTrace checkWasiClock wasiRightsToMuslOFlags wasiOFlagsToMuslOFlags createDyncallWrapper safeSetTimeout setImmediateWrapped clearImmediateWrapped polyfillSetImmediate getPromise makePromise idsToPromises makePromiseCallback setMainLoop getSocketFromFD getSocketAddress FS_unlink FS_mkdirTree _setNetworkCallback".split(" ").forEach(function(n){typeof globalThis>"u"||Object.getOwnPropertyDescriptor(globalThis,n)||Object.defineProperty(globalThis,n,{configurable:!0,get(){var e=`\`${n}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,r=n;r.startsWith("_")||(r="$"+n),e+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${r}')`,Ge(n)&&(e+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),An(e)}}),qe(n)}),"run addOnPreRun addOnInit addOnPreMain addOnExit addOnPostRun addRunDependency removeRunDependency FS_createFolder FS_createPath FS_createLazyFile FS_createLink FS_createDevice FS_readFile out err callMain abort wasmMemory wasmExports stackAlloc stackSave stackRestore getTempRet0 setTempRet0 writeStackCookie checkStackCookie MAX_INT53 MIN_INT53 bigintToI53Checked ptrToString zeroMemory exitJS getHeapMax growMemory MONTH_DAYS_REGULAR MONTH_DAYS_LEAP MONTH_DAYS_REGULAR_CUMULATIVE MONTH_DAYS_LEAP_CUMULATIVE isLeapYear ydayFromDate arraySum addDays ERRNO_CODES ERRNO_MESSAGES setErrNo DNS Protocols Sockets initRandomFill randomFill timers warnOnce UNWIND_CACHE readEmAsmArgsArray getExecutableName keepRuntimeAlive asyncLoad alignMemory mmapAlloc wasmTable noExitRuntime getCFunc uleb128Encode sigToWasmTypes generateFuncType convertJsFunctionToWasm freeTableIndexes functionsInTableMap getEmptyTableSlot updateTableMap getFunctionAddress PATH PATH_FS UTF8Decoder UTF8ArrayToString UTF8ToString stringToUTF8Array intArrayFromString stringToAscii UTF16Decoder stringToUTF8OnStack writeArrayToMemory JSEvents specialHTMLTargets currentFullscreenStrategy restoreOldWindowedStyle demangle demangleAll ExitStatus getEnvStrings doReadv doWritev promiseMap Browser wget SYSCALLS preloadPlugins FS_createPreloadedFile FS_modeStringToFlags FS_getMode FS_stdin_getChar_buffer FS_stdin_getChar FS_createDataFile MEMFS TTY PIPEFS SOCKFS".split(" ").forEach(qe);var te;Vn=function n(){te||Et(),te||(Vn=n)};function Et(){if(!(0<jn)){wt();var n=Oe();if(g((n&3)==0),n==0&&(n+=4),j[n>>2]=34821223,j[n+4>>2]=2310721022,j[0]=1668509029,a.preRun)for(typeof a.preRun=="function"&&(a.preRun=[a.preRun]);a.preRun.length;)n=a.preRun.shift(),ce.unshift(n);for(;0<ce.length;)ce.shift()(a);if(!(0<jn)){if(!te&&(te=!0,a.calledRun=!0,!Un)){for(g(!me),me=!0,le(),a.noFSInit||s.R.Y||s.R(),s.ta=!1;0<de.length;)de.shift()(a);for(l(a),g(!a._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),le();0<He.length;)He.shift()(a)}le()}}}function lr(){var n=Fn,e=B,r=!1;Fn=B=()=>{r=!0};try{bt(0),["stdout","stderr"].forEach(function(i){(i=lt("/dev/"+i))&&(i=be[i.object.rdev])&&i.output&&i.output.length&&(r=!0)})}catch{}Fn=n,B=e,r&&An("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}return Et(),t.ready}})();class Wn{static async initialize(t,a){const l=await zt({locateFile:(o,p)=>t||p+o,preRun:o=>{typeof a=="object"&&Object.entries(a).forEach(([p,y])=>o.ENV[p]=y)}});return new Wn(l)}constructor(t){this.referenceTracker=new WeakMap,this.referenceMap=new Map,this.availableReferences=[],this.module=t,this.luaL_checkversion_=this.cwrap("luaL_checkversion_",null,["number","number","number"]),this.luaL_getmetafield=this.cwrap("luaL_getmetafield","number",["number","number","string"]),this.luaL_callmeta=this.cwrap("luaL_callmeta","number",["number","number","string"]),this.luaL_tolstring=this.cwrap("luaL_tolstring","string",["number","number","number"]),this.luaL_argerror=this.cwrap("luaL_argerror","number",["number","number","string"]),this.luaL_typeerror=this.cwrap("luaL_typeerror","number",["number","number","string"]),this.luaL_checklstring=this.cwrap("luaL_checklstring","string",["number","number","number"]),this.luaL_optlstring=this.cwrap("luaL_optlstring","string",["number","number","string","number"]),this.luaL_checknumber=this.cwrap("luaL_checknumber","number",["number","number"]),this.luaL_optnumber=this.cwrap("luaL_optnumber","number",["number","number","number"]),this.luaL_checkinteger=this.cwrap("luaL_checkinteger","number",["number","number"]),this.luaL_optinteger=this.cwrap("luaL_optinteger","number",["number","number","number"]),this.luaL_checkstack=this.cwrap("luaL_checkstack",null,["number","number","string"]),this.luaL_checktype=this.cwrap("luaL_checktype",null,["number","number","number"]),this.luaL_checkany=this.cwrap("luaL_checkany",null,["number","number"]),this.luaL_newmetatable=this.cwrap("luaL_newmetatable","number",["number","string"]),this.luaL_setmetatable=this.cwrap("luaL_setmetatable",null,["number","string"]),this.luaL_testudata=this.cwrap("luaL_testudata","number",["number","number","string"]),this.luaL_checkudata=this.cwrap("luaL_checkudata","number",["number","number","string"]),this.luaL_where=this.cwrap("luaL_where",null,["number","number"]),this.luaL_fileresult=this.cwrap("luaL_fileresult","number",["number","number","string"]),this.luaL_execresult=this.cwrap("luaL_execresult","number",["number","number"]),this.luaL_ref=this.cwrap("luaL_ref","number",["number","number"]),this.luaL_unref=this.cwrap("luaL_unref",null,["number","number","number"]),this.luaL_loadfilex=this.cwrap("luaL_loadfilex","number",["number","string","string"]),this.luaL_loadbufferx=this.cwrap("luaL_loadbufferx","number",["number","string|number","number","string|number","string"]),this.luaL_loadstring=this.cwrap("luaL_loadstring","number",["number","string"]),this.luaL_newstate=this.cwrap("luaL_newstate","number",[]),this.luaL_len=this.cwrap("luaL_len","number",["number","number"]),this.luaL_addgsub=this.cwrap("luaL_addgsub",null,["number","string","string","string"]),this.luaL_gsub=this.cwrap("luaL_gsub","string",["number","string","string","string"]),this.luaL_setfuncs=this.cwrap("luaL_setfuncs",null,["number","number","number"]),this.luaL_getsubtable=this.cwrap("luaL_getsubtable","number",["number","number","string"]),this.luaL_traceback=this.cwrap("luaL_traceback",null,["number","number","string","number"]),this.luaL_requiref=this.cwrap("luaL_requiref",null,["number","string","number","number"]),this.luaL_buffinit=this.cwrap("luaL_buffinit",null,["number","number"]),this.luaL_prepbuffsize=this.cwrap("luaL_prepbuffsize","string",["number","number"]),this.luaL_addlstring=this.cwrap("luaL_addlstring",null,["number","string","number"]),this.luaL_addstring=this.cwrap("luaL_addstring",null,["number","string"]),this.luaL_addvalue=this.cwrap("luaL_addvalue",null,["number"]),this.luaL_pushresult=this.cwrap("luaL_pushresult",null,["number"]),this.luaL_pushresultsize=this.cwrap("luaL_pushresultsize",null,["number","number"]),this.luaL_buffinitsize=this.cwrap("luaL_buffinitsize","string",["number","number","number"]),this.lua_newstate=this.cwrap("lua_newstate","number",["number","number"]),this.lua_close=this.cwrap("lua_close",null,["number"]),this.lua_newthread=this.cwrap("lua_newthread","number",["number"]),this.lua_resetthread=this.cwrap("lua_resetthread","number",["number"]),this.lua_atpanic=this.cwrap("lua_atpanic","number",["number","number"]),this.lua_version=this.cwrap("lua_version","number",["number"]),this.lua_absindex=this.cwrap("lua_absindex","number",["number","number"]),this.lua_gettop=this.cwrap("lua_gettop","number",["number"]),this.lua_settop=this.cwrap("lua_settop",null,["number","number"]),this.lua_pushvalue=this.cwrap("lua_pushvalue",null,["number","number"]),this.lua_rotate=this.cwrap("lua_rotate",null,["number","number","number"]),this.lua_copy=this.cwrap("lua_copy",null,["number","number","number"]),this.lua_checkstack=this.cwrap("lua_checkstack","number",["number","number"]),this.lua_xmove=this.cwrap("lua_xmove",null,["number","number","number"]),this.lua_isnumber=this.cwrap("lua_isnumber","number",["number","number"]),this.lua_isstring=this.cwrap("lua_isstring","number",["number","number"]),this.lua_iscfunction=this.cwrap("lua_iscfunction","number",["number","number"]),this.lua_isinteger=this.cwrap("lua_isinteger","number",["number","number"]),this.lua_isuserdata=this.cwrap("lua_isuserdata","number",["number","number"]),this.lua_type=this.cwrap("lua_type","number",["number","number"]),this.lua_typename=this.cwrap("lua_typename","string",["number","number"]),this.lua_tonumberx=this.cwrap("lua_tonumberx","number",["number","number","number"]),this.lua_tointegerx=this.cwrap("lua_tointegerx","number",["number","number","number"]),this.lua_toboolean=this.cwrap("lua_toboolean","number",["number","number"]),this.lua_tolstring=this.cwrap("lua_tolstring","string",["number","number","number"]),this.lua_rawlen=this.cwrap("lua_rawlen","number",["number","number"]),this.lua_tocfunction=this.cwrap("lua_tocfunction","number",["number","number"]),this.lua_touserdata=this.cwrap("lua_touserdata","number",["number","number"]),this.lua_tothread=this.cwrap("lua_tothread","number",["number","number"]),this.lua_topointer=this.cwrap("lua_topointer","number",["number","number"]),this.lua_arith=this.cwrap("lua_arith",null,["number","number"]),this.lua_rawequal=this.cwrap("lua_rawequal","number",["number","number","number"]),this.lua_compare=this.cwrap("lua_compare","number",["number","number","number","number"]),this.lua_pushnil=this.cwrap("lua_pushnil",null,["number"]),this.lua_pushnumber=this.cwrap("lua_pushnumber",null,["number","number"]),this.lua_pushinteger=this.cwrap("lua_pushinteger",null,["number","number"]),this.lua_pushlstring=this.cwrap("lua_pushlstring","string",["number","string|number","number"]),this.lua_pushstring=this.cwrap("lua_pushstring","string",["number","string|number"]),this.lua_pushcclosure=this.cwrap("lua_pushcclosure",null,["number","number","number"]),this.lua_pushboolean=this.cwrap("lua_pushboolean",null,["number","number"]),this.lua_pushlightuserdata=this.cwrap("lua_pushlightuserdata",null,["number","number"]),this.lua_pushthread=this.cwrap("lua_pushthread","number",["number"]),this.lua_getglobal=this.cwrap("lua_getglobal","number",["number","string"]),this.lua_gettable=this.cwrap("lua_gettable","number",["number","number"]),this.lua_getfield=this.cwrap("lua_getfield","number",["number","number","string"]),this.lua_geti=this.cwrap("lua_geti","number",["number","number","number"]),this.lua_rawget=this.cwrap("lua_rawget","number",["number","number"]),this.lua_rawgeti=this.cwrap("lua_rawgeti","number",["number","number","number"]),this.lua_rawgetp=this.cwrap("lua_rawgetp","number",["number","number","number"]),this.lua_createtable=this.cwrap("lua_createtable",null,["number","number","number"]),this.lua_newuserdatauv=this.cwrap("lua_newuserdatauv","number",["number","number","number"]),this.lua_getmetatable=this.cwrap("lua_getmetatable","number",["number","number"]),this.lua_getiuservalue=this.cwrap("lua_getiuservalue","number",["number","number","number"]),this.lua_setglobal=this.cwrap("lua_setglobal",null,["number","string"]),this.lua_settable=this.cwrap("lua_settable",null,["number","number"]),this.lua_setfield=this.cwrap("lua_setfield",null,["number","number","string"]),this.lua_seti=this.cwrap("lua_seti",null,["number","number","number"]),this.lua_rawset=this.cwrap("lua_rawset",null,["number","number"]),this.lua_rawseti=this.cwrap("lua_rawseti",null,["number","number","number"]),this.lua_rawsetp=this.cwrap("lua_rawsetp",null,["number","number","number"]),this.lua_setmetatable=this.cwrap("lua_setmetatable","number",["number","number"]),this.lua_setiuservalue=this.cwrap("lua_setiuservalue","number",["number","number","number"]),this.lua_callk=this.cwrap("lua_callk",null,["number","number","number","number","number"]),this.lua_pcallk=this.cwrap("lua_pcallk","number",["number","number","number","number","number","number"]),this.lua_load=this.cwrap("lua_load","number",["number","number","number","string","string"]),this.lua_dump=this.cwrap("lua_dump","number",["number","number","number","number"]),this.lua_yieldk=this.cwrap("lua_yieldk","number",["number","number","number","number"]),this.lua_resume=this.cwrap("lua_resume","number",["number","number","number","number"]),this.lua_status=this.cwrap("lua_status","number",["number"]),this.lua_isyieldable=this.cwrap("lua_isyieldable","number",["number"]),this.lua_setwarnf=this.cwrap("lua_setwarnf",null,["number","number","number"]),this.lua_warning=this.cwrap("lua_warning",null,["number","string","number"]),this.lua_error=this.cwrap("lua_error","number",["number"]),this.lua_next=this.cwrap("lua_next","number",["number","number"]),this.lua_concat=this.cwrap("lua_concat",null,["number","number"]),this.lua_len=this.cwrap("lua_len",null,["number","number"]),this.lua_stringtonumber=this.cwrap("lua_stringtonumber","number",["number","string"]),this.lua_getallocf=this.cwrap("lua_getallocf","number",["number","number"]),this.lua_setallocf=this.cwrap("lua_setallocf",null,["number","number","number"]),this.lua_toclose=this.cwrap("lua_toclose",null,["number","number"]),this.lua_closeslot=this.cwrap("lua_closeslot",null,["number","number"]),this.lua_getstack=this.cwrap("lua_getstack","number",["number","number","number"]),this.lua_getinfo=this.cwrap("lua_getinfo","number",["number","string","number"]),this.lua_getlocal=this.cwrap("lua_getlocal","string",["number","number","number"]),this.lua_setlocal=this.cwrap("lua_setlocal","string",["number","number","number"]),this.lua_getupvalue=this.cwrap("lua_getupvalue","string",["number","number","number"]),this.lua_setupvalue=this.cwrap("lua_setupvalue","string",["number","number","number"]),this.lua_upvalueid=this.cwrap("lua_upvalueid","number",["number","number","number"]),this.lua_upvaluejoin=this.cwrap("lua_upvaluejoin",null,["number","number","number","number","number"]),this.lua_sethook=this.cwrap("lua_sethook",null,["number","number","number","number"]),this.lua_gethook=this.cwrap("lua_gethook","number",["number"]),this.lua_gethookmask=this.cwrap("lua_gethookmask","number",["number"]),this.lua_gethookcount=this.cwrap("lua_gethookcount","number",["number"]),this.lua_setcstacklimit=this.cwrap("lua_setcstacklimit","number",["number","number"]),this.luaopen_base=this.cwrap("luaopen_base","number",["number"]),this.luaopen_coroutine=this.cwrap("luaopen_coroutine","number",["number"]),this.luaopen_table=this.cwrap("luaopen_table","number",["number"]),this.luaopen_io=this.cwrap("luaopen_io","number",["number"]),this.luaopen_os=this.cwrap("luaopen_os","number",["number"]),this.luaopen_string=this.cwrap("luaopen_string","number",["number"]),this.luaopen_utf8=this.cwrap("luaopen_utf8","number",["number"]),this.luaopen_math=this.cwrap("luaopen_math","number",["number"]),this.luaopen_debug=this.cwrap("luaopen_debug","number",["number"]),this.luaopen_package=this.cwrap("luaopen_package","number",["number"]),this.luaL_openlibs=this.cwrap("luaL_openlibs",null,["number"])}lua_remove(t,a){this.lua_rotate(t,a,-1),this.lua_pop(t,1)}lua_pop(t,a){this.lua_settop(t,-a-1)}luaL_getmetatable(t,a){return this.lua_getfield(t,V,a)}lua_yield(t,a){return this.lua_yieldk(t,a,0,null)}lua_upvalueindex(t){return V-t}ref(t){const a=this.referenceTracker.get(t);if(a)return a.refCount++,a.index;const l=this.availableReferences.pop(),o=l===void 0?this.referenceMap.size+1:l;return this.referenceMap.set(o,t),this.referenceTracker.set(t,{refCount:1,index:o}),this.lastRefIndex=o,o}unref(t){const a=this.referenceMap.get(t);if(a===void 0)return;const l=this.referenceTracker.get(a);if(l===void 0){this.referenceTracker.delete(a),this.availableReferences.push(t);return}l.refCount--,l.refCount<=0&&(this.referenceTracker.delete(a),this.referenceMap.delete(t),this.availableReferences.push(t))}getRef(t){return this.referenceMap.get(t)}getLastRefIndex(){return this.lastRefIndex}printRefs(){for(const[t,a]of this.referenceMap.entries())console.log(t,a)}cwrap(t,a,l){return l.some(p=>p==="string|number")?(...p)=>{const y=[],M=l.map((E,N)=>{var R;if(E==="string|number"){if(typeof p[N]=="number")return"number";if(((R=p[N])===null||R===void 0?void 0:R.length)>1024){const P=this.module.stringToNewUTF8(p[N]);return p[N]=P,y.push(P),"number"}else return"string"}return E});try{return this.module.ccall(t,a,M,p)}finally{for(const E of y)this.module._free(E)}}:(...p)=>this.module.ccall(t,a,l,p)}}var Bt="1.16.0";class $t{constructor(t,a){var l;t===void 0&&(typeof window=="object"&&typeof window.document<"u"||typeof self=="object"&&((l=self==null?void 0:self.constructor)===null||l===void 0?void 0:l.name)==="DedicatedWorkerGlobalScope")&&(t=`https://unpkg.com/wasmoon@${Bt}/dist/glue.wasm`),this.luaWasmPromise=Wn.initialize(t,a)}async mountFile(t,a){this.mountFileSync(await this.getLuaModule(),t,a)}mountFileSync(t,a,l){const o=a.lastIndexOf("/"),p=a.substring(o+1),y=a.substring(0,a.length-p.length-1);if(y.length>0){const M=y.split("/").reverse();let E="";for(;M.length;){const N=M.pop();if(!N)continue;const R=`${E}/${N}`;try{t.module.FS.mkdir(R)}catch{}E=R}}t.module.FS.writeFile(a,l)}async createEngine(t={}){return new Ce(await this.getLuaModule(),t)}async getLuaModule(){return this.luaWasmPromise}}f.Decoration=nn,f.LUAI_MAXSTACK=K,f.LUA_MULTRET=C,f.LUA_REGISTRYINDEX=V,f.LuaEngine=Ce,f.LuaFactory=$t,f.LuaGlobal=Ie,f.LuaMultiReturn=mn,f.LuaRawResult=Yn,f.LuaThread=En,f.LuaTimeoutError=rn,f.LuaTypeExtension=hn,f.LuaWasm=Wn,f.PointerSize=O,f.decorate=an,f.decorateFunction=ae,f.decorateProxy=Pe,f.decorateUserdata=jt})})(Re,Re.exports);var fr=Re.exports;const pr=`;; -*- fundamental -*- ; coding: euc-jp -*-
;; Medium size dictionary for SKK system
;; Copyright (C) 1988-1995, 1999-2001, 2003, 2004
;; Masahiko Sato <masahiko@kuis.kyoto-u.ac.jp>
;; Hironobu Takahashi <takahasi@tiny.or.jp>,
;; Masahiro Doteguchi, Miki Inooka,
;; Yukiyoshi Kameyama <kameyama@kuis.kyoto-u.ac.jp>,
;; Akihiko Sasaki, Dai Ando, Junichi Okukawa,
;; Katsushi Sato and Nobuhiro Yamagishi
;; SKK Development Team <skk@ring.gr.jp>
;;
;; Maintainer: SKK Development Team <skk@ring.gr.jp>
;; Version: $Id: SKK-JISYO.M,v 1.28 2006/01/04 10:25:03 skk-cvs Exp $
;; Keywords: japanese
;; Last Modified: $Date: 2006/01/04 10:25:03 $
;;
;; This dictionary is free software; you can redistribute it and/or modify
;; it under the terms of the GNU General Public License as published by
;; the Free Software Foundation; either versions 2, or (at your option)
;; any later version.
;;
;; This dictionary is distributed in the hope that it will be useful
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU General Public License for more details.
;;
;; You should have received a copy of the GNU General Public License
;; along with Daredevil SKK, see the file COPYING.  If not, write to the Free
;; Software Foundation Inc., 51 Franklin St, Fifth Floor, Boston,
;; MA 02110-1301, USA.
;;
;; okuri-ari entries.
わるs /悪/
わるk /悪/
わるi /悪/
わりこn /割り込/
わりこm /割込/
わりあt /割当/
わらw /笑/
わらu /笑/
わらt /笑/
わらi /笑/
わらe /笑/
わたt /渡/
わたs /渡/
わたr /渉/渡/亘/亙/
わずらw /煩/
わずらu /患/煩/
わずk /僅/
わすr /忘/
わざわi /災/
わかt /判/解/分/
わかs /若/
わかr /判/解/分/別/
わかk /若/
わかi /若/
わr /割/
わk /分/沸/
わb /詫/
よわt /弱/
よわs /弱/
よわr /弱/
よわm /弱/
よわk /弱/
よわi /弱/
よろこn /喜/
よろこb /喜/慶/
よろs /宜/
よみこm /読み込/読込/
よみかk /読み書/
よびだs /呼出/
よそおu /装/
よせがk /寄書/
よごs /汚/
よごr /汚/
よくばr /欲張/
ようs /要/
ようn /様/
よw /酔/
よu /酔/
よt /酔/寄/四/
よs /寄/良/
よr /寄/因/依/
よn /読/呼/
よm /読/呼/詠/
よk /良/
よi /良/酔/善/
よb /呼/
ゆるy /緩/
ゆるs /許/
ゆるm /緩/
ゆるi /緩/
ゆだn /委/
ゆたk /豊/
ゆずt /譲/
ゆずr /譲/
ゆがn /歪/
ゆがm /歪/
ゆえn /故/
ゆうs /有/
ゆw /結/
ゆu /結/
ゆs /揺/
ゆr /揺/
ゆk /行/逝/
やわr /柔/軟/和/
やぶr /破/敗/
やどs /宿/
やどr /宿/
やとu /雇/
やっt /八/
やすうr /安売/
やすs /安/
やすn /休/
やすm /休/
やすk /安/易/
やすi /安/易/
やしなu /養/
やさs /易/優/
やくだt /役立/
やくたt /役立/
やs /痩/
やm /止/辞/病/
やk /焼/
やi /焼/
もらw /貰/
もらu /貰/
もらt /貰/
もらi /貰/
もらe /貰/
もよおs /催/
もよr /最寄/
もどt /戻/
もどs /戻/
もどr /戻/
もとz /基/
もとm /求/
もとd /基/
もっぱr /専/
もっとm /最/尤/
もちi /用/
もぐr /潜/
もうしあg /申し上/
もうs /申/
もうk /設/儲/
もy /燃/
もt /持/盛/
もs /若/燃/
もr /盛/漏/守/
もe /燃/
もc /持/
めつk /目付/
めだt /目立/
めずらs /珍/
めざs /目指/
めぐr /巡/
めぐm /恵/
めいr /滅入/
めs /召/
むづかs /難/
むっt /六/
むずかs /難/
むすn /結/
むすb /結/
むくw /報/
むくi /報/
むかi /向/
むかe /迎/
むt /六/
むs /蒸/
むr /群/蒸/
むk /向/
むi /向/
みやぶr /見破/
みやすk /見易/
みまもr /見守/
みまi /見舞/
みはt /見張/
みはr /見張/
みのr /実/稔/
みにくi /醜/
みなs /皆/
みなr /見慣/
みとおs /見通/
みとm /認/
みつもr /見積/
みつk /見付/
みつg /貢/
みっt /三/
みちびk /導/
みちびi /導/
みちがu /見違/
みだs /乱/
みだr /乱/
みずかr /自/
みじかm /短/
みじかk /短/
みじかi /短/
みじm /惨/
みしr /見知/
みさだm /見定/
みこm /見込/
みぎまわr /右回/
みがk /磨/
みかk /見掛/
みおとs /見落/
みおt /見落/
みいだs /見出/
みあw /見合/
みあt /見当/
みz /見/
みy /見/観/
みt /見/満/観/
みs /見/
みr /見/観/診/
みn /観/見/看/
みm /見/
みk /見/
みe /見/
まわt /回/
まわs /周/回/
まわr /周/回/
まるm /丸/
まるi /丸/円/
まよw /迷/
まよu /迷/
まよt /迷/
まよi /迷/
まよe /迷/
まもt /守/
まもr /守/
まねk /招/
まねi /招/
まぬかr /免/
まなn /学/
まなb /学/
まどu /惑/
まどi /惑/
まつr /祭/
まったk /全/
まちがu /間違/
まちがt /間違/
まちがi /間違/
まちがe /間違/
またたk /瞬/
またh /又/
まずs /貧/
まじw /交/
まじe /交/
まさr /勝/
まぎr /紛/
まがr /曲/
まかなu /賄/
まかs /任/
まいt /参/
まいr /参/
まz /混/交/
まu /舞/
まt /待/
まs /増/
まk /負/巻/
まj /交/
まi /舞/
まg /曲/
まc /待/
ぼうえいs /防衛/
ほろb /滅/
ほねおr /骨折/
ほどこs /施/
ほとんd /殆/
ほっs /欲/
ほそながi /細長/
ほそs /細/
ほそr /細/
ほそm /細/
ほそk /細/
ほそi /細/
ほこr /誇/
ほがr /朗/
ほうむr /葬/
ほうt /放/
ほs /欲/干/
ほr /掘/惚/彫/
ほm /褒/
ほe /吠/
へんにゅうs /編入/
へんかんg /変換/
へだt /隔/
へt /減/経/
へr /減/経/
ぶあつi /分厚/
ぶr /振/
ふるさとh /故郷/
ふるu /震/奮/
ふるs /古/
ふるm /古/
ふるk /古/
ふるi /古/
ふるe /震/
ふるb /古/
ふりこm /振り込/
ふとどk /不届/
ふとt /太/
ふとr /太/
ふとi /太/
ふたたb /再/
ふたt /二/
ふせi /防/
ふせg /防/
ふくr /膨/
ふくn /含/
ふくm /含/
ふかm /深/
ふかk /深/
ふかi /深/
ふy /増/殖/
ふt /降/振/
ふs /付/伏/
ふr /振/触/降/
ふn /踏/
ふm /踏/
ふk /吹/更/噴/老/
ふi /吹/
ふe /増/殖/
ひろu /拾/
ひろm /広/
ひろk /広/
ひろi /広/
ひろg /広/
ひるがえs /翻/
ひるがえr /翻/
ひらk /開/
ひらi /開/
ひょうへんs /豹変/
ひやs /冷/
ひびk /響/
ひとt /一/
ひとs /等/
ひとr /独/
ひっこs /引越/
ひたs /浸/
ひたr /浸/
ひそn /潜/
ひそm /潜/
ひさs /久/
ひくs /低/
ひくm /低/
ひくk /低/
ひくi /低/
ひきつづk /引き続/
ひきだs /引出/
ひきうk /引き受/
ひきi /率/
ひがえr /日帰/
ひかr /光/
ひかe /控/
ひいd /秀/
ひy /冷/
ひt /引/
ひr /干/
ひm /秘/
ひk /引/弾/挽/
ひi /引/弾/
ひe /冷/
ばあいわk /場合分/
ばk /化/
はんs /反/
はるk /遥/
はらw /払/
はらu /払/
はらt /払/
はらo /払/
はらi /払/
はらe /払/
はやがわr /早変/
はやt /流行/
はやs /速/早/
はやm /早/速/
はやk /早/速/
はやi /速/早/
はぶk /省/
はばm /阻/
はなはd /甚/
はなy /華/
はなt /放/
はなs /離/話/放/
はなr /離/放/
はたらk /働/
はたらi /働/
はずかしm /辱/
はずs /外/
はずr /外/
はずm /弾/
はじm /始/初/
はしt /走/
はしr /走/
はさm /挟/
はこn /運/
はこb /運/
はげs /激/
はげm /励/
はかt /計/
はかr /図/計/諮/測/謀/量/
はいt /入/
はいs /排/
はいr /入/
はz /恥/
はy /生/
はu /這/
はt /果/貼/張/
はs /発/
はr /張/貼/晴/
はn /跳/
はk /掃/吐/履/
はe /生/栄/映/
のぼt /登/
のぼs /上/
のぼr /登/昇/上/
のぞn /望/
のぞm /望/臨/
のぞk /除/覗/
のぞi /除/覗/
のこt /残/
のこs /残/
のこr /残/
のがs /逃/
のがr /逃/
のt /乗/載/
のs /載/乗/
のr /乗/載/
のn /飲/
のm /飲/呑/
のk /退/
のb /述/伸/延/
ねんごr /懇/
ねらu /狙/
ねらt /狙/
ねらi /狙/
ねむt /眠/
ねむr /眠/
ねむi /眠/
ねびk /値引/
ねばr /粘/
ねがu /願/
ねがt /願/
ねがi /願/
ねr /寝/練/
ぬすm /盗/
ぬu /縫/
ぬt /塗/縫/
ぬr /塗/濡/
ぬk /抜/
ぬi /抜/
ぬg /脱/
にぶr /鈍/
にぶi /鈍/
になu /担/
になt /担/
にごs /濁/
にごr /濁/
にくs /憎/
にくr /憎/
にくm /憎/
にくi /憎/
にぎw /賑/
にぎt /握/
にぎr /握/
にがi /苦/
におw /匂/
におu /匂/
におi /匂/
におe /匂/
にあw /似合/
にあu /似合/
にあt /似合/
にあi /似合/
にy /煮/
にt /似/
にs /似/
にr /煮/似/
にg /逃/
にe /煮/
なりたt /成り立/
ならべかe /並べ変/
ならu /習/倣/
ならt /習/
ならn /並/
ならi /習/
ならb /並/
なやn /悩/
なやm /悩/
なめr /滑/
なまk /怠/
なのr /名乗/
なにげn /何気/
ななt /七/
ななm /斜/
なつやすm /夏休/
なつk /懐/
なさk /情/
なごy /和/
なごr /名残/
なごm /和/
なげk /嘆/
なぐさm /慰/
なぐr /殴/
ながs /流/長/
ながr /流/乍/
ながm /眺/
ながk /長/
ながi /長/永/
なかb /半/
なおt /治/直/
なおs /直/治/
なおr /直/治/
なt /鳴/成/
なs /無/成/
なr /慣/鳴/馴/成/
なk /無/鳴/亡/泣/
なi /無/鳴/泣/亡/
なg /投/薙/凪/
どうせきs /同席/
とりはかr /取り計/
とりのぞi /取り除/
とりだs /取出/
とりいr /取り入/取入/
とりあつかu /取り扱/
とりあつかi /取り扱/
とりあe /取り敢/
とらe /捕/
ともなw /伴/
ともなu /伴/
ともなt /伴/
ともなi /伴/
ともr /燈/
とむらu /弔/
とまt /止/
とぼs /乏/
となr /隣/
となe /唱/
とどこおr /滞/
とどm /留/
とどk /届/
とどi /届/
ととのu /整/調/
ととのt /整/
ととのe /整/調/
とつg /嫁/
とっしんs /突進/
とくちょうづk /特徴付/
とくn /特/
とおz /遠/
とおt /通/
とおs /遠/通/
とおr /通/
とおk /遠/
とおi /遠/
とうとi /尊/貴/
とうとb /尊/貴/
とうz /投/
とうj /投/
といあw /問い合/
とz /綴/閉/
とu /問/
とt /取/撮/採/
とr /取/撮/捕/採/執/
とn /飛/
とm /止/泊/富/留/
とk /解/溶/説/
とj /綴/閉/
とi /問/解/
とg /研/遂/
とb /飛/跳/
でまわr /出回/
できt /出来/
できs /出来/
できr /出来/
できn /出来/
できm /出来/
でかk /出掛/
であu /出逢/
であt /出逢/
でy /出/
でt /出/
でs /出/
でr /出/
でn /出/
でm /出/
てまどr /手間取/
てびk /手引/
てなおs /手直/
てつづk /手続/
てつだu /手伝/
てつだt /手伝/
てつだi /手伝/
てつだe /手伝/
てちがi /手違/
てごわs /手強/
てごわi /手強/
てきs /適/
てがk /手書/
ておくr /手遅/
ていs /呈/
てあt /手当/
てr /照/
づk /付/
つらぬk /貫/
つらn /連/
つらi /辛/
つよm /強/
つよk /強/
つよi /強/
つめt /冷/
つむg /紡/
つぶs /潰/
つのr /募/
つねn /常/
つなi /継/
つなg /繋/
つどu /集/
つどi /集/
つとm /勤/務/努/
つづr /綴/
つづk /続/
つづi /続/
つつしn /謹/
つつしm /慎/謹/
つつm /包/
つちかu /培/
つだi /伝/
つたw /伝/
つたu /伝/
つたt /伝/
つたe /伝/
つずr /綴/
つけくわe /付け加/
つぐなu /償/
つくろu /繕/
つくt /作/
つくr /作/創/造/
つかさどr /司/
つかw /使/遣/
つかu /使/遣/
つかt /使/
つかr /疲/
つかo /使/
つかm /捕/掴/
つかi /使/遣/
つかe /使/仕/
つうほうs /通報/
つうz /通/
つうj /通/
ついy /費/
ついe /費/
つt /突/
つr /連/釣/
つn /積/
つm /詰/積/摘/
つk /付/着/突/漬/尽/点/尾/就/
つi /付/着/突/憑/
つg /告/継/次/接/
ちまよt /血迷/
ちぢr /縮/
ちぢm /縮/
ちじm /縮/
ちぎr /契/
ちがw /違/
ちがu /違/
ちがt /違/
ちがi /違/
ちがe /違/
ちかづi /近付/
ちかu /誓/
ちかt /誓/
ちかk /近/
ちかi /近/
ちいs /小/
ちr /散/
だまt /黙/
だまs /騙/
だまr /黙/
だいすk /大好/
だs /出/
だk /抱/
たんn /単/
たわむr /戯/
たよt /頼/
たよr /頼/便/
たもt /保/
ためs /試/
ためn /為/
たまわr /賜/
たまt /溜/
たまr /溜/
たのs /楽/
たのn /頼/
たのm /頼/
たどr /辿/
たとe /例/
たてまつr /奉/
たっとi /貴/尊/
たっとb /尊/貴/
たっs /達/
ただよu /漂/
ただt /直/
ただs /正/但/
たたかu /闘/戦/
たたかt /闘/戦/
たたm /畳/
たたk /叩/
たずさw /携/
たずさe /携/
たずn /尋/訪/
たすk /助/
たしk /確/
たくわe /蓄/
たがやs /耕/
たがi /互/
たかs /高/
たかm /高/
たかk /高/
たかi /高/
たおs /倒/
たおr /倒/
たいs /対/大/
たいr /平/
たy /絶/
たt /立/建/断/経/裁/絶/
たs /足/達/
たr /足/垂/
たn /他/
たm /溜/矯/
たk /炊/
たe /耐/絶/
たc /立/
たb /食/
ぞんz /存/
ぞんj /存/
ぞくs /属/
そろt /揃/
そろi /揃/
そろe /揃/
そむk /背/
そなw /備/
そなe /備/供/
そだt /育/
そそのかs /唆/
そそg /注/
そこn /損/
そうろu /候/
そu /沿/添/
そt /沿/添/
そr /反/
そm /初/染/
そi /沿/
そe /添/
ぜんk /前/
ぜっs /絶/
せまt /迫/
せまr /迫/
せまi /狭/
せばm /狭/
せつめいs /説明/
せっしょくs /接触/
せっきんs /接近/
せいちょうs /成長/
せs /接/
せr /競/
せm /責/攻/
ずm /済/
すわt /座/
すわr /座/
するどi /鋭/
すみy /速/
すべt /全/滑/
すべr /滑/
すばらs /素晴/
すばやi /素早/
すばr /素晴/
すなわt /即/
すなわc /即/
すでn /既/
すたr /廃/
すずs /涼/
すずm /涼/
すすn /進/
すすm /進/勧/薦/
すごs /凄/過/
すごm /凄/
すごk /凄/
すごi /凄/
すこぶr /頗/
すこy /健/
すこs /少/
すぐr /優/
すくw /救/
すくu /救/
すくn /少/
すくi /救/
すw /据/
すu /吸/
すt /捨/吸/
すr /擦/摺/刷/
すn /住/済/
すm /済/住/澄/
すk /好/透/
すi /済/吸/酸/
すg /過/直/
すe /据/
すb /統/
じゅんz /準/
じてんd /時点/
しんz /信/
しんj /信/
しろk /白/
しろi /白/
しるs /記/
しりぞk /退/
しらb /調/
しようs /使用/
しょじs /所持/
しょうz /生/
しょうs /称/
しょうj /生/
しゃべt /喋/
しゃべr /喋/
しめきr /締切/
しめs /示/湿/
しめr /湿/
しめp /湿/
しぼt /絞/
しぼr /絞/搾/
しぶt /渋/
しぶi /渋/
しばr /縛/
しはらw /支払/
しはらu /支払/
しはらt /支払/
しはらi /支払/
しのg /凌/
しのb /偲/忍/
したたr /舌足/滴/
したがw /従/
したがu /順/従/
したがt /従/
したがi /従/
したがe /従/
したu /慕/
したs /親/
しずn /沈/
しずm /沈/鎮/
しずk /静/
しげr /茂/
しくm /仕組/
しかくi /四角/
しかt /叱/
しかr /叱/
しかk /仕掛/
しいたg /虐/
しあわs /幸/
しあg /仕上/
しt /知/
しr /知/
しn /死/
しm /締/占/閉/絞/染/
しk /敷/
しi /強/
ざいせきs /在籍/
さわt /触/
さわr /触/障/
さわi /騒/
さわg /騒/
さらs /晒/
さらn /更/
さむs /寒/
さむk /寒/
さむi /寒/
さみs /淋/寂/
さまたg /妨/
さびs /寂/淋/
さびr /寂/
さばk /捌/裁/
さとt /悟/
さとs /諭/
さとr /悟/
さっちs /察知/
さだm /定/
さだk /定/
さそw /誘/
さそu /誘/
さそt /誘/
さそi /誘/
さずk /授/
さしだs /差出/
ささe /支/
さけn /叫/
さけb /叫/
さぐr /探/
さがs /捜/探/
さかr /盛/逆/
さかn /盛/
さかe /栄/
さえぎr /遮/
さいわi /幸/
さt /去/
さs /指/差/刺/挿/
さr /去/
さm /覚/冷/
さk /避/咲/裂/割/
さi /咲/裂/
さg /下/提/
さe /冴/
ごぞんz /御存/
こわs /壊/
こわr /壊/
こわk /恐/怖/
こわi /恐/怖/
こわg /怖/恐/
ころs /殺/
ころn /転/
ころg /転/
ころb /転/
こまt /困/
こまr /困/
こまk /細/
こばm /拒/
このm /好/
ことわt /断/
ことわr /断/
ことなr /異/
ことごとk /尽/
ことw /断/
ことn /異/
こたe /答/応/
こじs /誇示/
こごe /凍/
こころよi /快/
こころざs /志/
こころm /試/
こころh /心/
ここのt /九/
こがr /焦/
こおr /凍/
こえt /超/
こうりょs /考慮/
こうむr /被/
こうz /高/講/
こいs /恋/
こy /来/肥/
こu /乞/請/恋/
こt /凝/
こs /越/漉/超/
こr /来/懲/凝/
こn /込/来/
こm /込/混/
こk /濃/
こi /濃/来/乞/
こg /焦/
こe /越/超/肥/
げんz /減/
けんとうs /検討/
けわs /険/
けむr /煙/
けむi /煙/
けっs /決/
けずt /削/
けずr /削/
けがs /汚/
けがr /汚/
けいこくs /警告/
けいえいs /経営/
けt /蹴/
けs /消/決/
けr /蹴/
くわだt /企/
くわw /加/
くわs /詳/
くわe /加/
くろi /黒/
くるu /狂/
くるt /狂/
くるs /苦/
くるo /狂/
くるi /狂/
くりあw /繰り合/
くらt /食/
くらk /暗/
くらi /暗/
くらb /比/較/
くやs /悔/
くやm /悔/
くもr /曇/
くみとr /汲み取/
くみこm /組込/
くみあw /組合/
くばt /配/
くばr /配/
くつがえs /覆/
くつがえr /覆/
くだs /下/
くだr /下/
くだk /砕/
くずs /崩/
くずr /崩/
くさr /腐/
くさi /臭/
くぎt /区切/
くぎr /区切/
くy /悔/
くw /食/喰/
くu /食/喰/
くt /食/喰/朽/
くr /来/繰/暮/食/
くn /組/
くm /組/酌/
くi /食/喰/悔/
くe /喰/食/
ぎゃっこうs /逆行/
ぎゃくもどr /逆戻/
ぎゃくじょうs /逆上/
きんちょうs /緊張/
きわm /極/窮/究/
きりはなs /切離/
きりとr /切取/
きらw /嫌/
きらu /嫌/
きらt /嫌/
きらi /嫌/
きよm /清/
きよi /清/
きょうh /今日/
きゅうs /窮/
きもt /気持/
きびs /厳/
きどr /気取/
きづk /気付/
きづi /気付/
きたなi /汚/
きたn /汚/
きたe /鍛/
きそu /競/
きずt /傷/
きずk /築/
きざs /兆/
きざm /刻/
きさいs /記載/
きかe /着換/
きt /来/切/着/
きs /記/着/
きr /切/着/
きm /決/来/
きk /聞/聴/効/利/
きi /聞/聴/効/
きg /気/
きe /消/
がんばt /頑張/
がんばr /頑張/
かんばt /頑張/
かんばs /芳/
かんねんs /観念/
かんちがi /勘違/
かんだかi /甲高/
かんしゃs /感謝/
かんがe /考/
かんz /感/
かんs /関/
かんj /感/
かわいr /可愛/
かわいk /可愛/
かわいi /可愛/
かわいg /可愛/
かわt /変/
かわr /変/代/換/
かわk /渇/乾/
かろy /軽/
かれr /彼/
かるs /軽/
かるk /軽/
かるi /軽/
からn /絡/
からm /絡/
からi /辛/
かよw /通/
かよu /通/
かよt /通/
かよo /通/
かよi /通/
かよe /通/
かもs /醸/
かまw /構/
かまu /構/
かまi /構/
かまe /構/
かならz /必/
かなu /叶/
かなs /悲/
かなd /奏/
かつg /担/
かたわr /傍/
かたよr /偏/
かたむk /傾/
かたむi /傾/
かたつk /型付/
かたt /語/
かたr /語/
かたm /固/傾/
かたk /固/
かたi /難/固/堅/硬/
かぞe /数/
かせg /稼/
かしこk /賢/
かしこi /賢/
かざr /飾/
かさn /重/
かこu /囲/
かこn /囲/
かこm /囲/
かくていs /確定/
かくs /隠/
かくr /隠/
かぎt /限/
かぎr /限/
かきならb /書き並/
かきなおs /書き直/
かきだs /書出/
かきこm /書込/
かきかe /書換/
かがやk /輝/
かがやi /輝/
かかw /関/
かかr /係/
かかg /掲/
かかe /抱/
かおまk /顔負/
かおだt /顔立/
かおr /香/馨/薫/
かえりm /省/顧/
かえt /帰/返/
かえs /返/帰/
かえr /帰/換/返/
かいs /介/
かw /買/替/変/代/換/
かu /買/交/飼/
かt /買/勝/掛/且/
かs /貸/化/課/
かr /借/苅/刈/枯/駆/狩/
かo /買/
かn /噛/兼/
かm /噛/
かk /書/掛/欠/架/駆/懸/
かi /書/買/
かe /変/替/買/換/代/
おんよm /音読/
おわt /終/
おわr /終/
おろs /卸/
おろk /愚/
およg /泳/
およb /及/
おもむk /赴/
おもしろs /面白/
おもしろk /面白/
おもしろi /面白/
おもw /思/
おもu /思/
おもt /思/重/
おもs /重/
おもn /主/
おもm /重/
おもk /重/
おもi /思/重/
おもe /思/
おぼe /覚/憶/
おびやk /脅/
おねがi /お願/
おなz /同/
おなj /同/
おどろk /驚/
おどろi /驚/
おどs /脅/
おどr /踊/躍/
おどk /脅/
おとろe /衰/
おとどk /御届/
おとずr /訪/
おとしいr /陥/
おとs /落/
おとr /劣/
おちつk /落着/
おちいr /陥/
おだy /穏/
おそw /教/
おそu /襲/
おそs /遅/
おそr /恐/
おそk /遅/
おそi /遅/
おしe /教/
おさなi /幼/
おさm /収/治/納/修/
おさe /抑/
おごそk /厳/
おこなw /行/
おこなu /行/
おこなt /行/
おこなo /行/
おこなi /行/
おこなe /行/
おこたt /怠/
おこたr /怠/
おこs /起/興/
おこr /起/怒/興/
おくt /送/
おくr /送/遅/贈/後/
おぎなu /補/
おぎなt /補/
おきかe /置き換/
おがm /拝/
おかs /犯/可笑/冒/
おおくr /御送/
おおu /覆/
おおt /覆/
おおs /多/
おおm /多/
おおk /大/多/
おおi /多/大/
おうz /応/
おうj /応/
おw /終/追/
おu /負/追/
おt /落/折/負/追/
おs /押/惜/推/
おr /下/降/折/居/織/
おp /追/
おo /追/
おk /起/置/
おi /置/追/負/老/
おe /終/追/負/
おc /落/
おb /帯/
えらs /偉/
えらn /選/
えらi /偉/
えらb /選/
えがk /描/
えがi /描/
えt /得/
えr /得/
えn /得/
えm /得/笑/
うれs /嬉/
うれi /憂/愁/
うれe /愁/憂/
うるわs /麗/
うるおu /潤/
うるおs /潤/
うるm /潤/
うらなu /占/
うらなi /占/
うらぎr /裏切/
うらn /恨/
うらm /恨/
うやまu /敬/
うやうやs /恭/
うみだs /生み出/
うまi /旨/
うばu /奪/
うばt /奪/
うながs /促/
うとm /疎/
うとi /疎/
うつくs /美/
うつt /移/
うつs /移/映/写/
うつr /移/写/映/
うったe /訴/
うたがw /疑/
うたがu /疑/
うたがi /疑/
うたu /歌/謡/
うたi /歌/
うすr /薄/
うすm /薄/
うすk /薄/
うすi /薄/
うしなw /失/
うしなu /失/
うしなt /失/
うしr /後/
うごk /動/
うごi /動/
うけわたs /受渡/
うけとt /受け取/受取/
うけとr /受け取/受取/
うけたまわr /承/
うかがw /伺/
うかがu /窺/伺/
うかがt /伺/
うかがi /伺/窺/
うかがe /伺/
うw /植/
うt /売/打/撃/討/
うr /売/得/熟/
うm /埋/生/産/
うk /受/浮/請/
うi /浮/憂/
うe /飢/植/
いわu /祝/
いわi /祝/
いろどr /彩/
いれかe /入れ替/
いやs /卑/
いましm /戒/
いのt /祈/
いのr /祈/
いなm /否/
いどm /挑/
いとなm /営/
いとs /愛/
いつわr /偽/
いつくs /慈/
いつt /五/
いっしょn /一緒/
いちずk /位置付/
いちじるs /著/
いだk /抱/
いだi /抱/
いただk /頂/戴/
いただi /頂/戴/
いたt /至/
いたs /致/
いたr /至/
いたn /痛/
いたm /痛/傷/悼/
いたi /痛/
いそがs /忙/
いそi /急/
いそg /急/
いさぎよi /潔/
いさm /勇/
いこu /憩/
いこi /憩/
いくとおr /幾通/
いくt /幾/
いくr /幾/
いきどおr /憤/
いきぎr /息切/
いきおi /勢/
いかt /怒/
いかr /怒/
いw /言/
いu /言/云/
いt /言/行/居/
いr /入/居/煎/鋳/射/要/
いo /言/
いn /居/
いm /居/忌/
いk /行/生/
いi /言/良/
いe /言/
あんしんs /安心/
あわt /慌/
あわs /併/
あわr /憐/哀/
あわi /淡/
あるk /歩/
あるi /歩/
ありがとu /有難/
ありがたi /有難/
あらわs /表/現/著/
あらわr /現/表/
あらたm /改/
あらそu /争/
あらかじm /予/
あらいだs /洗い出/
あらz /非/
あらu /洗/
あらt /新/洗/
あらi /洗/荒/粗/
あらe /洗/
あゆm /歩/
あやまt /誤/謝/過/
あやまr /誤/謝/
あやつr /操/
あやu /危/
あやs /怪/
あやb /危/
あまy /甘/
あまs /余/
あまr /余/
あまi /甘/
あまe /甘/
あぶなi /危/
あぶn /危/
あばr /暴/
あばk /暴/
あなどr /侮/
あつかw /扱/
あつかu /扱/
あつかt /扱/
あつかo /扱/
あつかi /扱/
あつかe /扱/
あつs /暑/
あつm /集/厚/
あつk /厚/熱/暑/
あつi /熱/暑/厚/
あたらs /新/
あたたm /暖/温/
あたたk /暖/温/
あたr /辺/
あたe /与/
あそn /遊/
あそb /遊/
あせt /焦/
あせr /焦/
あずk /預/
あじw /味/
あざむk /欺/
あざy /鮮/
あさk /浅/
あさi /浅/
あきらm /諦/
あきなu /商/
あきr /明/
あかr /明/赤/
あかn /赤/
あかi /赤/
あおk /青/
あおi /青/
あいかわr /相変/
あいs /愛/
あw /合/会/
あu /遭/合/逢/会/
あt /当/有/合/会/蓬/充/
あs /悪/
あr /有/在/荒/
あo /会/合/
あm /編/
あk /飽/開/明/空/
あi /合/会/空/開/
あg /挙/揚/上/
あe /合/会/逢/
あb /浴/
;; okuri-nasi entries.
! /！/
" /″/
$ /＄/
% /％/
& /＆/
' /′/
( /（/
) /）/
* /＊/※/
, /，/
- /―/
. /．/・/
: /：/
< /〈/
= /〓/
> /〉/
? /？/
@ /＠/
Cyrillic /А/Б/В/Г/Д/Е/Ё/Ж/З/И/Й/К/Л/М/Н/О/П/Р/С/Т/У/Ф/Х/Ц/Ч/Ш/Щ/Ъ/Ы/Ь/Э/Ю/Я/
Greek /Α/Β/Γ/Δ/Ε/Ζ/Η/Θ/Ι/Κ/Λ/Μ/Ν/Ξ/Ο/Π/Ρ/Σ/Τ/Υ/Φ/Χ/Ψ/Ω/
Lambda /Λ/
Russia /А/Б/В/Г/Д/Е/Ё/Ж/З/И/Й/К/Л/М/Н/О/П/Р/С/Т/У/Ф/Х/Ц/Ч/Ш/Щ/Ъ/Ы/Ь/Э/Ю/Я/
Sigma /Σ/
] /］/
abstract /アブストラクト/
access /アクセス/
account /アカウント/
address /アドレス/
advice /アドバイス/
algol /アルゴル/
algorithm /アルゴリズム/
allocate /アロケート/
alpha /α/
alphabet /アルファベット/
america /アメリカ/
and /∧/
announce /アナウンス/
apart /アパート/
application /アプリケーション/
approach /アプローチ/
architecture /アーキテクチャ/
ascii /アスキー/
assembler /アセンブラ/
assign /アサイン/
automaton /オートマトン/
average /アベレージ/
backup /バックアップ/
base /ベース/
batch /バッチ/
baud /ボー/
beer /ビール/
benchmark /ベンチマーク/
berkley /バークレイ/
best /ベスト/
beta /β/
bit /ビット/
bitmap /ビットマップ/
board /ボード/
branch /ブランチ/
bridge /ブリッジ/
broadcast /ブロードキャスト/
buffer /バッファ/
bug /バグ/
bus /バス/
button /ボタン/
byte /バイト/
cable /ケーブル/
cache /キャッシュ/
cake /ケーキ/
california /カルフォルニア/
call /コール/
camp /キャンプ/
campus /キャンパス/
cancel /キャンセル/
capability /ケーパビリティ/
card /カード/
cartridge /カートリッジ/
case /ケース/
cassette /カセット/
catalogue /カタログ/
category /カテゴリー/
center /センター/
channel /チャネル/
character /キャラクタ/
check /チェック/
circle /サークル/
class /クラス/
clear /クリア/
click /クリック/
client /クライアント/
code /コード/
coding /コーディング/
coffee /コーヒー/
color /カラー/
comeback /カムバック/
command /コマンド/
comment /コメント/
communication /コミュニケーション/
compa /コンパ/
compile /コンパイル/
compiler /コンパイラ/
computer /コンピューター/コンピュータ/
connector /コネクタ/
console /コンソール/
contact /コンタクト/
copy /コピー/
cost /コスト/
count /カウント/
course /コース/
cover /カバー/
cpu /中央処理装置/ＣＰＵ/
crash /クラッシュ/
cross /クロス/
cursor /カーソル/
custom /カスタム/
cyrillic /а/б/в/г/д/е/ё/ж/з/и/й/к/л/м/н/о/п/р/с/т/у/ф/х/ц/ч/ш/щ/ъ/ы/ь/э/ю/я/
data /データ/
database /データベース/
debug /ディバッグ/
default /ディフォルト/
delta /δ/
demo /デモ/
design /デザイン/
desk /デスク/
device /デバイス/
directory /ディレクトリィ/ディレクトリ/
disk /ディスク/
display /ディスプレイ/
document /ドキュメント/
domain /ドメイン/
dot /ドット/
down /ダウン/
drive /ドライブ/
driver /ドライバー/ドライバ/
dynamic /ダイナミック/
edinburgh /エディンバラ/
edit /エディット/
editor /エディタ/
electronics /エレクトロニクス/
emulator /エミュレーター/
end /エンド/
energy /エネルギー/
entry /エントリー/エントリ/
epsilon /ε/
error /エラー/
essay /エッセィ/
eta /η/
ethernet /イーサネット/
etl /電総研/
fiber /ファイバー/
file /ファイル/
filter /フィルター/
floppy /フロッピィ/
flow /フロー/
flowchart /フローチャート/
follow /フォロウ/
font /フォント/
forall /∀/
format /フォーマット/
forward /フォワード/
frame /フレーム/
france /フランス/
free /フリー/
gamma /γ/
gap /ギャップ/
gateway /ゲートウェイ/
giga /ギガ/
graph /グラフ/
greek /α/β/γ/δ/ε/ζ/η/θ/ι/κ/λ/μ/ν/ξ/ο/π/ρ/σ/τ/υ/φ/χ/ψ/ω/
group /グループ/
guard /ガード/
hamming /ハミング/
hard /ハード/
hardware /ハードウェア/
head /ヘッド/
header /ヘッダー/ヘッダ/
hiking /ハイキング/
hint /ヒント/
host /ホスト/
hotel /ホテル/
house /ハウス/
ibm /ＩＢＭ/
icon /アイコン/
icot /新世代コンピュータ開発機構/
idea /アイディア/
ideal /イデアル/
image /イメージ/
implement /インプリメント/
inch /インチ/
informal /インフォーマル/
inheritance /インヘリタンス/
inhouse /インハウス/
install /インストール/
interface /インターフェース/インタフェース/
internet /インターネット/
interpreter /インタープリタ/
invoice /インボイス/
iota /ι/
italic /イタリック/
job /ジョブ/
juice /ジュース/
kernel /カーネル/
key /キー/
keyboard /キーボード/
keyword /キーワード/
kilo /キロ/
kit /キット/
kk /株式会社/
label /ラベル/
lambda /λ/
laser /レーザー/
laserprinter /レーザープリンタ/
laserwriter /レーザーライタ/
level /レベル/
library /ライブラリ/
license /ライセンス/
line /ライン/
link /リンク/
list /リスト/
load /ロード/
local /ローカル/
lock /ロック/
login /ログイン/
logout /ログアウト/
london /ロンドン/
loop /ループ/
lucky /ラッキー/
mach /Ｍａｃｈ/
machine /マシン/マシーン/
macro /マクロ/
mail /メイル/メール/
mailer /メイラー/
mailing /メイリング/
main /メイン/
maker /メーカー/
manager /マネージャ/マネージャー/
manner /マナー/
manual /マニュアル/
map /マップ/
mapping /マッピング/
mask /マスク/
master /マスター/
mccarthy /マッカーシー/
mechanism /メカニズム/
medal /メダル/
mega /メガ/
member /メンバー/
memo /メモ/
memory /メモリ/
menu /メニュー/
merge /マージ/
merit /メリット/
message /メッセージ/
meta /メタ/
meter /メートル/
micro /マイクロ/
minibuffer /ミニバッファ/
minor /マイナー/
mode /モード/
model /モデル/
modem /モデム/
module /モジュール/
monitor /モニター/
mount /マウント/
mouse /マウス/
mu /μ/
multi /マルチ/
multiprocessor /マルチプロセッサ/
name /ネーム/
nami /〜/
neck /ネック/
net /ネット/
network /ネットワーク/
news /ニュース/
nickname /ニックネーム/
node /ノード/
note /ノート/
nu /ν/
number /ナンバー/
object /オブジェクト/
observer /オブザーバ/オブザーバー/
office /オフィス/
olympic /オリンピック/
omega /ω/
omicron /ο/
online /オンライン/
operating /オペレーティング/
operation /オペレーション/
option /オプション/
order /オーダ/
oriented /オリエンテッド/
original /オリジナル/
os /ＯＳ/
out /アウト/
overflow /オーバーフロー/
overhead /オーバヘッド/
package /パッケージ/
packet /パケット/
page /ページ/
pager /ページャ/
paging /ページング/
pair /ペア/
paradigm /パラダイム/
paradox /パラドックス/
parameter /パラメーター/パラメータ/
paris /パリ/
partition /パーティション/
party /パーティー/
pass /パス/
passing /パッシング/
passport /パスポート/
password /パスワード/
patch /パッチ/
path /パス/
pattern /パターン/
percent /％/
performance /パーフォーマンス/
period /ピリオド/
permission /パーミッション/
phi /φ/
pi /π/
piano /ピアノ/
pitcher /ピッチャー/
pocket /ポケット/
pointer /ポインタ/
polling /ポーリング/
port /ポート/
post /〒/ポスト/
postmaster /ポストマスター/
primitive /プリミティブ/
print /プリント/
printer /プリンター/
procedure /プロシージャ/
process /プロセス/
processor /プロセッサ/
professional /プロフェッショナル/
program /プログラム/
programmer /プログラマ/プログラマー/
programming /プログラミング/
project /プロジェクト/
prompt /プロンプト/
protect /プロテクト/
protection /プロテクション/
protocol /プロトコル/
psi /ψ/
public /パブリック/
question /？/
queue /キュー/
radio /ラジオ/
random /ランダム/
reader /リーダー/
record /レコード/
region /リージョン/
register /レジスタ/
release /リリース/
remote /リモート/
repeat /々/
report /レポート/
request /リクエスト/
reset /リセット/
ring /リング/
roma /ローマ/
room /ルーム/
root /ルート/
route /ルート/
routing /ルーティング/
rule /ルール/
russia /а/б/в/г/д/е/ё/ж/з/и/й/к/л/м/н/о/п/р/с/т/у/ф/х/ц/ч/ш/щ/ъ/ы/ь/э/ю/я/
sample /サンプル/
save /セーブ/
schedule /スケジュール/
scheduling /スケジューリング/
search /サーチ/
second /セカンド/
security /セキュリティー/
segment /セグメント/
semaphore /セマフォ/
semicolon /セミコロン/
seminar /セミナー/
sense /センス/
serial /シリアル/
series /シリーズ/
server /サーバー/サーバ/
service /サービス/
session /セッション/
set /セット/
shell /シェル/
shock /ショック/
short /ショート/
sigma /σ/
simple /シンプル/
single /シングル/
site /サイト/
size /サイズ/
soft /ソフト/
software /ソフトウェア/
sort /ソート/
source /ソース/
space /スペース/
speech /スピーチ/
sports /スポーツ/
ss /§/
stack /スタック/
stanford /スタンフォード/
step /ステップ/
stockholm /ストックホルム/
stream /ストリーム/
string /ストリング/
style /スタイル/
sub /サブ/
subdomain /サブドメイン/
subject /サブジェクト/
subnet /サブネット/
subnetting /サブネッティング/
sun /サン/
support /サポート/
sweden /スウェーデン/
switch /スィッチ/
system /システム/
table /テーブル/
tap /タップ/
tape /テープ/
task /タスク/
tau /τ/
tautology /トートロジー/
taxi /タクシー/
tennis /テニス/
test /テスト/
text /テキスト/
theta /θ/
thread /スレッド/
tool /ツール/
toplevel /トップレベル/
touch /タッチ/
traffic /トラフィック/
trans /トランス/
transceiver /トランシーバー/
tree /ツリー/
trouble /トラブル/
tutorial /チュートリアル/
tv /テレビ/
type /タイプ/
unix /ＵＮＩＸ/
up /アップ/
user /ユーザ/ユーザー/
vector /ベクトル/
version /バージョン/
virus /ウィルス/
visa /ビザ/
volt /ボルト/
volunteer /ボランティア/
white /ホワイト/
window /ウィンドウ/
workinggroup /ワーキンググループ/
workshop /ワークショップ/
workstation /ワークステーション/
writer /ライター/
zeta /ζ/
| /｜/
~ /〜/
あ /阿/娃/唖/亜/
あい /愛/哀/相/姶/挨/合/
あいかわ /相川/
あいさつ /挨拶/
あいしゃ /愛車/
あいしょう /愛称/相性/
あいじょう /愛情/
あいだ /間/
あいち /愛知/
あいちゃく /愛着/
あいて /相手/
あいはら /相原/
あいぼう /相棒/
あいまい /曖昧/
あいよう /愛用/
あいら /姶良/
あお /青/
あおい /葵/青井/
あおき /青木/
あおぞら /青空/
あおた /青田/
あおば /青葉/
あおばやま /青葉山/
あおやま /青山/
あか /赤/垢/
あかご /赤子/
あかさか /赤坂/
あかじ /赤字/
あかつき /暁/
あかね /茜/
あかほん /赤本/
あかま /赤間/
あかもん /赤門/
あき /秋/穐/空/章/昭/明/晰/
あきこ /晶子/
あきた /秋田/
あきのり /明憲/彰則/
あきはばら /秋葉原/
あきひこ /昭彦/
あきひろ /昭博/晃広/
あきら /晃/明/彰/朗/璋/
あく /悪/渥/握/
あくい /悪意/
あくしつ /悪質/
あくしゅ /握手/
あくしゅけん /握手券/
あくせい /悪性/
あくま /悪魔/
あけぼの /曙/
あげ /上/
あさ /朝/麻/浅/
あさか /浅香/
あさがた /朝方/
あさくさ /浅草/
あさって /明後日/
あさひ /朝日/旭/
あざ /字/
あざぶ /麻布/
あし /足/芦/葦/脚/
あしがら /足柄/
あした /明日/
あしなみ /足並/
あしべ /芦部/
あじ /味/鯵/
あじとみ /安次富/
あす /明日/
あずさ /梓/
あずま /東/吾妻/
あせ /汗/
あぜ /畦/
あそ /阿曽/
あたい /値/価/
あたかも /宛/
あたま /頭/
あたり /辺/
あだち /足立/
あっか /悪化/
あっしゅく /圧縮/
あっとう /圧倒/
あっとうてき /圧倒的/
あつ /篤/斡/圧/厚/敦/
あつぎ /厚木/
あつぎし /厚木市/
あつし /篤志/敦/厚志/
あつみ /渥美/
あつゆき /篤幸/
あて /宛/
あてさき /宛先/
あと /後/跡/
あな /穴/
あなた /貴方/
あに /兄/
あね /姉/姐/
あねがさき /姉ヶ崎/
あねさき /姉崎/
あぶ /虻/
あぶら /油/脂/
あべ /安部/安倍/阿部/
あほ /阿呆/
あま /天/甘/雨/尼/
あまがい /天海/
あまの /天野/
あまみ /奄美/
あみ /網/
あめ /雨/飴/天/
あや /文/綾/絢/
あやこ /亜矢子/彩子/
あゆ /鮎/
あゆみ /彩友美/
あら /荒/
あらい /荒井/
あらかじめ /予/
あらかわ /荒川/
あらがね /鉱/荒金/
あらき /荒木/
あらし /嵐/
あらまき /荒巻/
あらわざ /荒技/
あり /有/蟻/
ありかわ /有川/
ありま /有馬/
ある /或/
あるじ /主/
あわ /泡/粟/阿波/
あわさ /粟佐/
あわせ /袷/
あわばこ /泡箱/
あん /安/案/暗/杏/鞍/闇/按/庵/
あんい /安易/
あんか /安価/
あんぎゃ /行脚/
あんけん /案件/
あんこく /暗黒/
あんごう /暗号/
あんごうか /暗号化/
あんざい /安西/
あんしん /安心/
あんじ /暗示/
あんず /杏/
あんぜん /安全/
あんぜんせい /安全性/
あんてい /安定/
あんどう /安藤/
あんない /案内/
あんもく /暗黙/
あんらく /安楽/
い /位/為/意/井/唯/如/偉/異/亥/医/遺/違/謂/衣/萎/胃/緯/維/移/畏/椅/易/慰/惟/尉/威/委/夷/囲/依/伊/以/彙/猪/居/
いい /飯/猪/
いいざわ /飯沢/
いいだ /飯田/
いいだばし /飯田橋/
いいづか /飯塚/
いいわけ /言い訳/
いいん /医院/委員/
いいんかい /委員会/
いいんちょう /委員長/
いえ /家/
いえだ /家田/
いえもと /家元/
いか /以下/医科/
いかが /如何/
いかがく /医科学/
いかだ /筏/
いかり /錨/
いかわ /井川/
いかん /如何/
いがい /以外/意外/
いがくぶ /医学部/
いがらし /五十嵐/
いき /息/域/囲気/閾/粋/意気/
いきき /行き来/
いぎ /意義/
いく /郁/育/幾/
いくお /郁雄/育男/
いくさ /戦/
いくせい /育成/
いけ /池/
いけお /池尾/
いけだ /池田/
いけぶくろ /池袋/
いけん /意見/
いこう /以降/移行/意向/
いこく /異国/
いこま /生駒/
いご /以後/
いざかや /居酒屋/
いし /医師/石/意思/意志/
いしかわ /石河/石川/
いしき /意識/
いしきてき /意識的/
いしざか /石坂/
いしじま /石島/
いしずえ /礎/
いしずか /石塚/
いしそつう /意思疎通/
いしだ /石田/
いしつ /異質/
いしはた /石畑/
いしばし /石橋/
いしゃ /医者/
いしやま /石山/
いしゅ /異種/
いしゅせい /異種性/
いしょう /衣裳/衣装/
いしょく /移植/委嘱/
いしょくせい /移植性/
いじ /維持/意地/
いじょう /以上/異常/≧/
いじょうしゅうりょう /異常終了/
いじん /異人/
いす /椅子/
いすう /位数/
いず /伊豆/
いずみ /和泉/泉/
いせん /緯線/
いぜん /以前/依然/
いそ /磯/
いそう /位相/
いぞん /依存/異存/
いぞんせい /依存性/
いぞんぶ /依存部/
いた /板/
いたい /遺体/
いたくけんきゅう /委託研究/
いただき /頂/
いだ /井田/
いち /一/位置/壱/市/
いちい /一位/一意/
いちいせい /一意性/
いちいち /一々/
いちいてき /一意的/
いちいん /一因/一員/
いちおう /一応/
いちかわ /市川/
いちがい /一概/
いちぎょう /一行/
いちげん /一言/一見/
いちごうかん /一号館/
いちじ /一次/一時/一事/
いちじかん /一時間/
いちじてき /一時的/
いちたろう /一太郎/
いちだい /一台/
いちだん /一段/
いちど /一度/
いちどう /一同/
いちにち /一日/
いちにんまえ /一人前/
いちねん /一年/
いちはら /市原/
いちばん /一番/
いちばんちょう /一番町/
いちぶ /一部/
いちぶぶん /一部分/
いちまい /一枚/
いちまんえん /一万円/
いちまんえんしへい /一万円紙幣/
いちもつ /一物/
いちよう /一様/
いちよし /市吉/
いちらん /一覧/
いちれい /一例/
いちれん /一連/
いちろう /一郎/
いっかい /一回/一階/一介/
いっかげつ /一箇月/
いっかしょ /一箇所/
いっかつ /一括/
いっかん /一環/一貫/
いっき /一気/
いっきょ /一挙/
いっけん /一見/一軒/
いっこ /一個/
いっこう /一行/一向/
いっこく /一刻/
いっさい /一切/
いっさくねん /一昨年/
いっしき /一式/
いっしゅ /一種/
いっしゅうかん /一週間/
いっしゅどくとく /一種独特/
いっしゅるい /一種類/
いっしゅん /一瞬/
いっしょ /一緒/
いっしょう /一生/
いっしょうけんめい /一生懸命/
いっすん /一寸/
いっせい /一斉/
いっそう /一層/
いったい /一体/
いったん /一端/一旦/
いっち /一致/
いっちょうめ /一丁目/
いっつう /一通/
いってい /一定/
いっとき /一時/
いっぱい /一杯/
いっぱく /一泊/一拍/
いっぱつ /一発/
いっぱん /一般/
いっぱんか /一般化/
いっぱんせい /一般性/
いっぱんてき /一般的/
いっぷう /一風/
いっぺん /一遍/
いっぽ /一歩/
いっぽう /一方/一報/
いっぽん /一本/
いつ /逸/溢/何時/五/
いつつばし /五橋/
いてん /移転/
いでん /遺伝/
いでんし /遺伝子/
いと /意図/糸/
いとう /伊藤/伊東/
いとうちゅう /伊藤忠/
いとてき /意図的/
いど /井戸/
いどう /移動/
いな /否/稲/
いない /以内/
いなか /田舎/
いながき /稲垣/
いなげ /稲毛/
いなもり /稲盛/
いなもりざいだん /稲盛財団/
いにん /委任/
いぬ /犬/
いぬがみ /犬神/
いね /稲/
いの /猪野/伊野/猪/
いのうえ /井上/
いのおか /猪岡/
いのしし /猪/
いのち /命/生命/
いのまた /猪股/
いはん /違反/
いばら /茨/
いばらぎ /茨城/
いほう /違法/
いま /今/
いまい /今井/
いまだ /未/
いみ /意味/
いみろん /意味論/
いも /芋/
いもうと /妹/
いや /嫌/
いよう /医用/異様/
いよく /意欲/
いらい /以来/依頼/
いりえ /入江/
いりぐち /入口/
いりや /入谷/
いりょう /医療/
いりょく /威力/
いるま /入間/
いろ /色/
いろいろ /色々/
いわ /岩/
いわお /巌/
いわき /岩城/
いわし /鰯/
いわた /岩田/
いわて /岩手/
いわてだいがく /岩手大学/
いわなみ /岩波/
いわま /岩間/
いわもと /岩本/
いん /音/引/印/隠/陰/因/韻/院/蔭/胤/淫/飲/姻/員/咽/允/隕/
いんさつ /印刷/
いんし /印紙/因子/
いんしょう /印象/
いんじ /印字/
いんすう /因数/
いんせい /院生/
いんせき /隕石/
いんたい /引退/
いんち /吋/
いんど /印度/
いんぺい /隠蔽/
いんぼう /陰謀/
いんよう /引用/
いんようかいし /引用開始/
いんりょく /引力/
いんりょくけん /引力圏/
う /雨/右/有/鵜/卯/迂/羽/烏/宇/
うい /初/
うえ /上/↑/植/
うええだ /上枝/
うえだ /上田/
うえなか /植中/
うえの /上野/
うお /魚/
うぐいす /鴬/
うけつけ /受付/
うけとりにん /受取人/
うさぎ /兎/
うし /丑/牛/
うしろ /後/
うじ /氏/
うす /臼/碓/
うすい /臼井/
うすき /薄/
うず /渦/
うそ /嘘/
うた /歌/唄/
うたい /謡/
うたひめ /歌姫/
うち /内/家/
うちがわ /内側/
うちだ /内田/
うちゅう /宇宙/
うちゅうきち /宇宙基地/
うちゅうれき /宇宙暦/
うちわけ /内訳/
うつ /蔚/欝/鬱/
うつわ /器/
うで /腕/
うでまえ /腕前/
うなぎ /鰻/
うね /畝/
うば /姥/
うぶ /産/
うへん /右辺/
うべ /宇部/
うま /馬/
うまや /厩/
うみ /海/
うみべ /海辺/
うめ /梅/
うめだ /梅田/
うめむら /梅村/
うら /裏/浦/
うらやす /浦安/
うらわ /浦和/
うり /瓜/
うりば /売場/
うるう /閏/
うるうどし /閏年/
うるし /漆/
うわ /上/
うわさ /噂/
うわべ /上辺/
うん /云/運/雲/
うんえい /運営/
うんえいのうりょく /運営能力/
うんせい /運勢/
うんちん /運賃/
うんてん /運転/
うんてんしゅ /運転手/
うんどう /運動/
うんぬん /云々/
うんめい /運命/
うんよう /運用/
え /回/会/絵/重/恵/餌/荏/江/得/枝/柄/笑/
えい /英/映/影/鋭/詠/衛/頴/穎/盈/瑛/洩/泳/永/栄/曳/嬰/営/叡/
えいいち /英一/
えいえん /永遠/
えいかいわ /英会話/
えいが /映画/
えいきゅう /永久/
えいきょう /影響/
えいぎょう /営業/
えいぎょうしょ /営業所/
えいぎょうぶ /営業部/
えいぎょうほんぶ /営業本部/
えいこく /英国/
えいこもじ /英小文字/
えいご /英語/
えいじ /英字/
えいすうじ /英数字/
えいたろう /永太朗/
えいてん /栄転/
えいぶん /英文/
えいゆう /英雄/
えいり /営利/
えいりもくてき /営利目的/
えがお /笑顔/
えがわ /江川/
えき /駅/役/益/疫/液/易/繹/
えきしょう /液晶/
えきちょう /駅長/
えきでん /駅伝/
えきめい /駅名/
えたい /得体/
えだ /枝/
えちご /越後/
えつ /閲/越/謁/悦/
えつこ /悦子/
えのき /榎/
えのもと /榎本/
えひめ /愛媛/
えびす /恵比寿/
えみ /恵美/
えり /襟/
えん /円/宛/延/煙/淵/演/塩/鴛/鉛/遠/薗/苑/艶/縁/猿/燕/焔/炎/沿/援/掩/怨/宴/奄/堰/園/厭/
えんえき /演繹/
えんえきほう /演繹法/
えんかい /宴会/
えんかく /遠隔/
えんかくち /遠隔地/
えんかつ /円滑/
えんかん /鉛管/
えんき /延期/
えんぎ /演技/縁起/
えんざん /演算/
えんざんし /演算子/
えんしゅう /演習/円周/
えんしんりょく /遠心力/
えんじょ /援助/
えんじょう /遠城/
えんそう /演奏/
えんだい /演題/
えんちょう /園長/延長/
えんどう /遠藤/
えんりょ /遠慮/
お /汚/於/尾/夫/御/雄/男/生/小/和/緒/
おい /甥/追/
おいわけ /追分/
おう /横/桜/応/黄/鴎/鴬/襖/翁/王/殴/欧/旺/押/往/奥/央/凹/皇/
おうえん /応援/
おうかん /王冠/
おうぎ /扇/
おうしゅう /応酬/
おうしょう /王将/
おうじ /王子/
おうじさま /王子様/
おうじょう /往生/
おうせい /旺盛/
おうだ /殴打/
おうとう /応答/
おうとつ /凹凸/
おうふく /往復/
おうぶん /欧文/
おうへん /応変/
おうぼ /応募/
おうむ /鸚鵡/
おうよう /応用/
おうようかがく /応用科学/
おお /大/多/
おおあかじ /大赤字/
おおあざ /大字/
おおい /大井/
おおいそ /大磯/
おおいた /大分/
おおいまちせん /大井町線/
おおおかやま /大岡山/
おおかみ /狼/
おおかわ /大川/
おおがた /大型/
おおがら /大柄/
おおき /大木/
おおくぼ /大久保/大窪/
おおくら /大倉/
おおぐろ /大黒/
おおけが /大怪我/
おおごえ /大声/
おおごと /大事/
おおさか /大阪/
おおさかだいがく /大阪大学/
おおさき /大崎/
おおさわ /大沢/
おおしば /大芝/
おおしま /大嶋/
おおすじ /大筋/
おおぜい /大勢/
おおそうじ /大掃除/
おおた /太田/大田/
おおたに /大谷/
おおだい /大台/
おおつ /大津/
おおつか /大塚/
おおつき /大槻/
おおて /大手/
おおとも /大友/
おおはし /大橋/
おおはば /大幅/
おおふな /大船/
おおまえ /大前/
おおまち /大町/
おおみや /大宮/
おおむかし /大昔/
おおむね /概/
おおめ /大目/
おおもじ /大文字/
おおもり /大森/
おおや /大矢/
おおやけ /公/
おか /丘/岡/
おかげ /御陰/
おかし /お菓子/
おかだ /岡田/
おかむら /岡村/
おかやま /岡山/
おがさわら /小笠原/
おがた /小方/
おがわ /小川/
おき /沖/
おきなわ /沖縄/
おぎ /荻/
おぎくぼ /荻窪/
おぎの /荻野/
おぎわら /荻原/
おく /屋/奥/臆/憶/億/
おくかわ /奥川/
おくじょう /屋上/
おくの /奥野/奥乃/
おくりじょう /送り状/
おぐら /小倉/
おけ /桶/
おげんき /御元気/
おこり /瘧/
おさ /長/
おさむ /修/
おざわ /小沢/
おじゃま /御邪魔/
おす /牡/雄/♂/
おそれ /虞/
おだ /織田/小田/
おだか /小高/
おち /落/
おちあい /落合/
おちば /落葉/
おっと /夫/
おっぱま /追浜/
おつ /乙/
おと /音/
おとうと /弟/
おとこ /男/
おとさた /音沙汰/
おととい /一昨日/
おとな /大人/
おとなし /音無/
おなじ /々/
おに /鬼/
おにづか /鬼塚/
おねがい /お願い/
おの /斧/小野/
おのおの /各々/各/
おのれ /己/
おば /伯母/
おひま /御暇/
おび /帯/
おびひろ /帯広/
おみ /臣/
おも /主/面/
おもい /思/
おもしろ /面白/
おもて /表/面/
おもむき /趣/
おや /親/
おやこ /親子/
おやだま /親玉/
おり /折/
おれ /俺/
おれい /御礼/
おれせん /折線/
おろし /卸/
おわり /終/
おん /音/御/穏/温/恩/
おんかい /音階/
おんがく /音楽/
おんがくか /音楽家/
おんきょう /音響/
おんせい /音声/
おんせん /温泉/
おんちゅう /御中/
おんてい /音程/
おんど /音頭/温度/
おんどく /音読/
おんな /女/
おんぱ /音波/
おんぷ /音符/
か /下/日/歌/化/家/仮/花/夏/火/暇/香/靴/果/蚊/霞/過/迦/貨/嘩/課/蝦/菓/華/荷/茄/苛/箇/稼/禾/禍/珂/河/架/科/寡/嫁/嘉/可/加/佳/価/伽/何/賀/
かい /回/皆/会/絵/改/海/階/懐/壊/魁/解/介/怪/開/甲斐/貝/蟹/芥/界/灰/械/晦/拐/戒/恢/悔/快/廻/塊/下位/獪/
かいいん /会員/
かいえん /開演/
かいかん /快感/会館/
かいが /絵画/
かいがい /海外/
かいがいりょこう /海外旅行/
かいがもり /貝が森/
かいがら /貝殻/
かいがん /海岸/
かいがんせん /海岸線/
かいきょう /回教/
かいぎ /会議/
かいぎしつ /会議室/
かいぎょう /改行/開業/
かいけい /会計/
かいけつ /解決/
かいこ /蚕/
かいこうめん /開口面/
かいごう /会合/
かいさい /開催/
かいさつ /改札/
かいし /開始/
かいしつ /開室/
かいしつび /開室日/
かいしゃ /会社/
かいしゃく /解釈/
かいしゃめい /会社名/
かいしゅう /回収/
かいしょう /解消/
かいしょく /会食/
かいじょ /解除/
かいじょう /会場/階乗/海上/
かいすう /回数/
かいせい /快晴/改正/
かいせき /解析/
かいせきほう /解析法/
かいせつ /解説/
かいせん /回線/
かいせんぞくせい /回線属性/
かいぜん /改善/
かいそう /階層/
かいそく /快速/
かいぞう /改造/解像/
かいぞうど /解像度/
かいたい /解体/
かいだん /階段/
かいちょう /快調/会長/
かいてい /改訂/
かいていばん /改訂版/
かいてき /快適/
かいてん /回転/
かいとう /回答/
かいとうしゃ /回答者/
かいどく /解読/
かいにゅう /介入/
かいにん /解任/
かいはつ /開発/
かいはつぶ /開発部/
かいひ /回避/会費/
かいひん /海浜/
かいふう /開封/
かいふく /回復/
かいぶん /回文/
かいへい /開閉/
かいへん /改変/
かいほう /開放/解法/解放/会報/
かいむ /皆無/
かいめい /改名/解明/
かいもの /買物/
かいよう /潰瘍/
かいらん /回覧/
かいり /浬/
かいりょう /改良/
かいろ /回路/
かいわ /会話/
かいわい /界隈/
かいわれ /貝割/
かえ /替/
かえで /楓/
かえりびと /帰人/
かえる /蛙/
かお /顔/
かおう /花王/
かおり /香織/香/
かおる /馨/薫/
かかい /可解/
かかく /価格/
かかり /係/掛/
かかりかん /係官/
かかりちょう /係長/掛長/
かかん /日間/
かがく /科学/化学/
かがくか /科学科/
かがくかい /科学会/
かがくぎじゅつ /科学技術/
かがみ /鏡/
かき /下記/蛎/柿/垣/書/
かきおき /書き置き/
かきん /課金/
かぎ /鍵/鈎/
かぎり /限/
かく /確/各/客/覚/革/隔/閣/郭/較/赫/角/穫/獲/殻/核/格/撹/拡/廓/嚇/劃/画/
かくい /各位/
かくえい /角栄/
かくぎょう /各行/
かくご /覚悟/
かくしゃ /各社/
かくしゅ /各種/
かくしん /確信/
かくじ /各自/
かくじつ /確実/
かくじん /各人/
かくすう /画数/
かくだい /拡大/
かくちょう /拡張/格調/
かくちょうし /拡張子/
かくちょうせい /拡張性/
かくてい /確定/
かくていてき /確定的/
かくとく /獲得/
かくど /角度/
かくにん /確認/
かくのう /格納/
かくほ /確保/
かくらん /各欄/
かくりつ /確率/確立/
かぐら /神楽/
かけ /掛/
かけひ /筧/
かけんひ /科研費/
かげ /陰/影/
かげき /歌劇/
かげつ /ヶ月/箇月/
かげん /加減/
かこ /過去/
かこう /加工/
かご /篭/
かごしま /鹿児島/
かさ /笠/傘/
かさい /火災/家裁/
かさま /笠間/
かさん /加算/
かざ /風/
かざん /火山/
かし /菓子/歌詞/橿/樫/可視/
かしつ /過失/
かしゅ /歌手/
かしょ /個所/箇所/
かしら /頭/
かしわ /栢/柏/
かしわぎ /柏木/
かじ /梶/
かじうら /梶浦/
かじか /鰍/
かじょう /箇条/
かすが /春日/
かすみ /霞/
かず /数/和/一/下図/
かずひろ /一博/
かずまさ /和正/
かずよし /和義/一義/
かせい /火星/化成/
かせつ /仮説/
かせん /下線/
かぜ /風/風邪/
かそう /仮想/
かそうきおく /仮想記憶/
かそうきおくきこう /仮想記憶機構/
かそうてき /仮想的/
かぞく /家族/
かた /方/形/型/肩/潟/片/
かたい /難/
かたかな /片仮名/
かたがた /方々/
かたき /敵/
かたすいろん /型推論/
かたたいけい /型体系/
かたち /形/
かたて /片手/
かたな /刀/
かたはば /肩幅/
かたひら /片平/
かたほう /片方/
かたまり /塊/
かためん /片面/
かたやま /片山/
かたりろん /型理論/
かだい /課題/
かち /価値/
かちどき /勝鬨/
かちょう /課長/
かっ /合/
かっか /閣下/
かっきてき /画期的/
かっこ /括弧/【/】/（/）/』/『/［/］/
かっこう /格好/
かって /勝手/
かっぱつ /活発/
かつ /割/滑/且/轄/褐/葛/渇/活/括/恰/喝/勝/克/
かつお /鰹/
かつし /克志/
かつじ /活字/
かつどう /活動/
かつやく /活躍/
かつやま /勝山/
かつよう /活用/
かて /糧/
かてい /仮定/過程/課程/家庭/
かていかんきょう /家庭環境/
かていちょうさ /家庭調査/
かとう /加藤/
かとき /過渡期/
かど /角/過度/門/┘/┐/┌/└/
かどう /稼働/華道/
かどく /可読/
かどくせい /可読性/
かどた /角田/
かどまつ /角松/
かな /仮名/金/
かなかんじ /仮名漢字/
かなかんじへんかん /仮名漢字変換/
かながわ /神奈川/
かなざわ /金沢/
かなめ /要/
かなもり /金森/
かにゅう /加入/
かね /金/鐘/
かねこ /金子/
かねつ /加熱/
かの /彼/
かのう /可能/
かのうせい /可能性/
かのじょ /彼女/
かのじょじしん /彼女自身/
かば /樺/椛/
かばん /鞄/
かひつ /加筆/
かびん /花瓶/
かふんしょう /花粉症/
かぶ /株/下部/蕪/
かぶしき /株式/
かぶしきかいしゃ /株式会社/
かぶしきがいしゃ /株式会社/
かぶそしき /下部組織/
かぶと /兜/甲/
かべ /壁/
かま /鎌/釜/蒲/窯/竃/
かまいし /釜石/
かまくら /鎌倉/
かまた /鎌田/蒲田/
かまど /竃/
かみ /上/紙/髪/神/
かみすぎ /上杉/
かみなり /雷/
かみむら /上村/
かみや /神谷/
かめ /亀/
かめい /仮名/亀井/
かめやま /亀山/
かめん /仮面/
かも /鴨/
かもく /科目/
かや /萱/茅/栢/
かゆ /粥/
かよう /火曜/
かようび /火曜日/
から /空/〜/柄/殻/唐/
からだ /体/身体/
かり /仮/刈/狩/
かりうど /狩人/
かりゅう /下流/
かりょく /火力/
かれ /彼/
かれら /彼等/
かわ /側/川/皮/河/革/
かわい /川合/
かわうち /川内/
かわかみ /川上/
かわごえ /川越/
かわさき /川崎/
かわしま /川島/
かわぞえ /川添/
かわたび /川渡/
かわだ /川田/
かわちや /河内谷/
かわはら /川原/
かわまた /川又/
かわら /瓦/河原/
かん /間/換/巻/感/甘/観/完/函/関/舘/館/韓/陥/閑/鑑/還/貫/諌/莞/艦/肝/翰/缶/緩/簡/管/竿/看/監/環/潅/澗/漢/汗/歓/款/棺/桓/柑/敢/憾/慣/患/幹/干/寛/官/姦/堪/喚/勧/勘/刊/寒/冠/侃/乾/甲/菅/煥/神/
かんい /簡易/
かんかく /感覚/間隔/
かんかつ /管轄/
かんがえ /考え/
かんきょう /環境/
かんきょうせってい /環境設定/
かんきょうへんすう /環境変数/
かんけい /関係/
かんけいしゃ /関係者/
かんけいせつ /関係節/
かんけつ /簡潔/完結/間欠/
かんけつか /簡潔化/
かんげい /歓迎/
かんげき /感激/
かんげん /管弦/
かんこう /観光/官公/刊行/
かんこく /韓国/
かんさい /関西/
かんさいちく /関西地区/
かんさいちほう /関西地方/
かんさつ /観察/
かんし /監視/
かんしゃ /感謝/
かんしゅう /慣習/監修/
かんしょく /感触/
かんしん /感心/関心/
かんじ /漢字/幹事/
かんじへんかん /漢字変換/
かんじょう /感情/勘定/
かんじん /肝心/
かんすう /関数/
かんすうがた /関数型/
かんすうくうかん /関数空間/
かんすうてきよう /関数適用/
かんすうめい /関数名/
かんせい /完成/
かんせつ /間接/関節/
かんせつてき /間接的/
かんぜん /完全/
かんそう /感想/乾燥/完走/
かんそく /観測/
かんそくじょ /観測所/
かんたん /簡単/
かんたんか /簡単化/
かんだ /神田/
かんち /関知/感知/
かんちょう /艦長/
かんづめ /缶詰/
かんてん /観点/
かんとう /関東/
かんとく /監督/
かんどう /感動/
かんない /関内/
かんねん /観念/
かんばん /看板/
かんべん /勘弁/簡便/
かんぺき /完璧/
かんむり /冠/
かんやく /簡約/監訳/
かんやくりつ /簡約律/
かんよ /関与/
かんり /管理/
かんりしゃ /管理者/
かんりにん /管理人/
かんりゃく /簡略/
かんりょう /完了/
かんれき /還暦/
かんれん /関連/
かんわきゅうだい /閑話休題/
が /我/駕/餓/雅/賀/蛾/芽/臥/画/牙/峨/俄/河/
がい /外/街/害/概/骸/鎧/該/蓋/碍/涯/慨/崖/咳/劾/凱/既/
がいかい /外界/
がいかん /概観/
がいこく /外国/
がいこくご /外国語/
がいこくじん /外国人/
がいしゃ /会社/外車/
がいしゅつ /外出/
がいしょう /外傷/
がいじ /外字/
がいじん /外人/
がいせつ /概説/
がいせつほう /外接法/
がいせん /外線/
がいてき /外的/
がいとう /該当/街頭/
がいねん /概念/
がいねんてき /概念的/
がいぶ /外部/
がいよう /概要/
がいりゃく /概略/
がいろ /街路/
がいろじゅ /街路樹/
がか /画家/
がき /垣/
がく /楽/額/学/顎/岳/學/
がくい /学位/
がくいん /学院/
がくえん /学園/
がくがい /学外/
がくぎょう /学業/
がくぎょうせいせき /学業成績/
がくし /学士/
がくしゃ /学者/
がくしゅう /学習/
がくしゅういん /学習院/
がくしょう /楽章/
がくしん /学振/
がくじゅつ /学術/
がくじょうもう /学情網/
がくせい /学生/
がくせいふく /学生服/
がくだん /楽団/
がくちょう /学長/
がくない /学内/
がくないびん /学内便/
がくねん /学年/
がくふ /楽譜/
がくぶ /学部/
がくほう /学報/
がくれき /学歴/
がくわり /学割/
がし /樫/
がそ /画素/
がそかん /画素間/
がそごと /画素毎/
がぞう /画像/
がぞうしょり /画像処理/
がぞうじょうほう /画像情報/
がた /型/潟/方/
がっ /合/
がっか /学科/
がっかい /学会/
がっかいし /学会誌/
がっき /学期/楽器/
がっこう /学校/
がっこうきょうし /学校教師/
がっこうたんい /学校単位/
がっしゅく /合宿/
がっしょう /合唱/
がっそう /合奏/
がっち /合致/
がっぴ /月日/
がつ /月/
がばん /画板/
がまん /我慢/
がみ /上/
がめん /画面/
がら /柄/
がらす /硝子/
がりゅう /我流/
がわ /側/
がん /元/顔/丸/含/願/頑/雁/贋/翫/岩/眼/癌/玩/巌/岸/
がんたん /元旦/
き /気/既/木/机/基/記/機/危/起/祈/寄/亀/鬼/騎/飢/輝/軌/貴/規/徽/紀/稀/季/畿/汽/毅/帰/棄/棋/期/旗/揮/忌/幾/希/岐/嬉/奇/器/喜/伎/企/樹/黄/饋/綺/氣/己/僖/
きあつ /気圧/
きい /紀伊/奇異/
きいろ /黄色/
きうち /木内/
きおく /記憶/
きおくせんめい /記憶鮮明/
きおくそうち /記憶装置/
きおん /気温/
きかい /機械/機会/
きかく /企画/規格/
きかくぶ /企画部/
きかん /期間/機関/饋還/貴艦/
きがく /貴学/
きがる /気軽/
きき /機器/危機/
ききょう /桔梗/
きぎょう /企業/
きく /鞠/菊/掬/
きくち /菊地/菊池/
きぐ /危惧/器具/
きぐち /木口/
きけいしき /木形式/
きけつ /帰結/
きけん /危険/棄権/
きけんど /危険度/
きげん /起源/期限/
きこう /機構/寄港/気候/
きこうぞう /木構造/
きこく /帰国/
きごう /記号/〓/↓/↑/←/→/〒/※/▼/▽/▲/△/■/□/◆/◇/◎/●/○/★/☆/§/＠/＊/＆/＃/％/£/¢/＄/￥/℃/″/′/°/♀/♂/∴/∞/≧/≦/＞/＜/≠/＝/÷/×/±/−/＋/】/【/』/『/」/「/》/《/〉/〈/｝/｛/］/［/〕/〔/）/（/”/“/’/‘/‥/…/｜/‖/〜/＼/／/‐/―/ー/〇/〆/々/仝/〃/ゞ/ゝ/ヾ/ヽ/＿/￣/＾/¨/｀/´/゜/゛/！/？/；/：/・/．/，/。/、/♪/
きごうしょり /記号処理/
きごうれつ /記号列/
きごうろんりがく /記号論理学/
きさい /記載/
きさま /貴様/
きざい /機材/
きし /岸/
きしゃ /汽車/
きしゅ /機種/
きしょく /気色/
きじ /記事/
きじすう /記事数/
きじせんたく /記事選択/
きじつ /期日/
きじゅつ /記述/
きじゅん /基準/
きすう /奇数/
きず /傷/
きせい /帰省/既成/
きせき /奇跡/
きせつ /季節/
きそ /基礎/起訴/
きそく /規則/
きそけんきゅう /基礎研究/
きそけんきゅうしょ /基礎研究所/
きそけんきゅうぶ /基礎研究部/
きそりろん /基礎理論/
きそろん /基礎論/
きそん /既存/
きぞく /帰属/
きぞん /既存/
きた /北/
きたい /期待/
きたかぜ /北風/
きたく /帰宅/
きたはら /北原/
きたむら /北村/
きち /吉/基地/
きちゃく /帰着/
きちょう /貴重/
きっさ /喫茶/
きって /切手/
きっぷ /切符/
きつ /詰/橘/桔/喫/吃/吉/
きてい /規定/
きど /城戸/
きどう /起動/
きなが /気長/
きにゅう /記入/
きぬ /絹/
きぬた /砧/
きね /杵/
きねん /記念/
きねんかい /記念会/
きねんび /記念日/
きのう /機能/昨日/帰納/
きのうかん /機能間/
きのうてき /帰納的/
きのうてきていぎ /帰納的定義/
きのうほう /帰納法/
きのした /木下/
きば /牙/木場/
きばん /基盤/
きび /黍/
きびき /忌引/
きふ /寄付/
きふきん /寄付金/
きぶん /気分/
きほう /記法/
きほん /基本/
きほんがた /基本型/
きほんきごうれつ /基本記号列/
きほんきのう /基本機能/
きほんしき /基本式/
きほんてき /基本的/
きぼ /規模/
きぼう /希望/
きぼうしゃ /希望者/
きまつ /期末/
きみ /君/気味/
きみとし /公稔/
きみょう /奇妙/
きむら /木村/
きも /肝/
きもち /気持/
きゃく /客/脚/却/
きゃくいん /客員/
きゃくほん /脚本/
きゃしゃ /華奢/
きゃっかん /客観/
きやく /規約/
きゅう /久/吸/急/泣/救/休/及/求/旧/給/糾/級/笈/窮/究/球/灸/汲/朽/弓/宮/仇/丘/九/
きゅういん /吸引/
きゅうがた /旧型/
きゅうきゅう /救急/
きゅうきゅうしゃ /救急車/
きゅうきょく /究極/
きゅうぎょう /休業/
きゅうけい /休憩/
きゅうけいじょ /休憩所/
きゅうげき /急激/
きゅうこう /急行/休講/
きゅうし /給紙/
きゅうしゅう /九州/吸収/
きゅうしゅうだい /九州大/
きゅうしゅうだいがく /九州大学/
きゅうじつ /休日/
きゅうじょう /球場/
きゅうじん /求人/
きゅうじんこうこく /求人広告/
きゅうせい /旧姓/
きゅうそく /急速/
きゅうだい /九大/
きゅうびん /急便/
きゅうむ /急務/
きゅうめん /球面/
きゅうよう /休養/
きゅうりょう /給料/
きょ /居/去/距/許/虚/渠/挙/拠/拒/巨/鋸/
きょう /梗/今日/京/強/狭/橋/鏡/胸/共/香/狂/経/叫/教/驚/饗/響/郷/蕎/興/脅/矯/況/挟/恭/恐/怯/彊/峡/境/喬/卿/匡/協/凶/競/兇/僑/侠/供/享/亨/兄/
きょうあく /凶悪/
きょういく /教育/
きょういくしゃ /教育者/
きょういくてき /教育的/
きょうか /強化/
きょうかい /境界/協会/教会/
きょうかいめん /境界面/
きょうかしょ /教科書/
きょうかつ /恐喝/
きょうかん /教官/共感/
きょうき /凶器/
きょうきゅう /供給/
きょうぎ /協議/
きょうくん /教訓/
きょうこ /響子/
きょうこう /恐慌/
きょうごう /競合/
きょうさい /共済/
きょうざい /教材/
きょうし /教師/
きょうしつ /教室/
きょうしゅく /恐縮/
きょうじ /恭司/教示/
きょうじゃく /強弱/
きょうじゅ /教授/
きょうじゅしつ /教授室/
きょうじん /強靭/
きょうせい /強制/
きょうせいてき /強制的/
きょうそう /競争/
きょうそうきょく /協奏曲/
きょうぞん /共存/
きょうだい /京大/兄弟/兄妹/
きょうちょう /強調/協調/
きょうちょうせい /協調性/
きょうつう /共通/
きょうつういちじ /共通一次/
きょうてん /経典/
きょうと /京都/
きょうとう /教頭/
きょうとしょう /京都賞/
きょうとだいがく /京都大学/
きょうど /強度/
きょうどう /協同/共同/
きょうふ /恐怖/
きょうへん /共編/
きょうぼう /凶暴/
きょうみ /興味/
きょうむ /教務/
きょうゆう /共有/
きょうよう /教養/共用/
きょうようがくぶ /教養学部/
きょうようぶ /教養部/
きょうりつ /共立/
きょうりょく /協力/強力/
きょうれつ /強烈/
きょうわ /協和/
きょか /許可/
きょく /曲/局/極/
きょくいん /局員/
きょくしょう /極小/
きょくしょうち /極小値/
きょくせつ /曲折/
きょくせん /曲線/
きょくたん /極端/
きょくち /極値/
きょくちょう /局長/
きょくばん /局番/
きょくめい /曲名/
きょくめん /曲面/局面/
きょくもく /曲目/
きょくりつ /曲率/
きょくりょく /極力/
きょしつ /居室/
きょじん /巨人/
きょせい /虚勢/
きょぞう /巨象/
きょだい /巨大/
きょねん /去年/
きょひ /拒否/
きょよう /許容/
きょり /距離/
きよ /清/
きよう /器用/
きよし /清/
きよみず /清水/
きらく /気楽/
きり /桐/切/霧/
きりすときょう /基督教/
きりとりせん /切取り線/
きりゅう /桐生/
きれい /綺麗/
きろく /記録/
きろめーとる /粁/
きわ /際/
きん /今/近/金/筋/謹/襟/衿/菌/芹/緊/禽/禁/琴/欽/欣/斤/錦/巾/均/勤/僅/
きんがく /金額/
きんき /近畿/
きんきゅう /緊急/
きんきょう /近況/
きんけん /金券/
きんこ /金庫/
きんざん /金山/
きんし /禁止/
きんしつ /均質/
きんしょう /金賞/
きんじ /近似/
きんじょ /近所/
きんせん /金銭/
きんぞく /金属/
きんだい /近代/
きんちょう /緊張/
きんてつ /近鉄/
きんにく /筋肉/
きんねん /近年/
きんぱく /金箔/
きんぺん /近辺/
きんぼう /近傍/
きんむ /勤務/
きんよう /金曜/
きんようび /金曜日/
きんりん /近隣/
ぎ /技/疑/議/誼/蟻/義/祇/犠/欺/擬/戯/宜/妓/儀/偽/城/木/
ぎし /技師/
ぎじ /議事/擬似/
ぎじへんすう /擬似変数/
ぎじゅく /義塾/
ぎじゅつ /技術/
ぎじゅつしゃ /技術者/
ぎじゅつてき /技術的/
ぎじゅつほんぶ /技術本部/
ぎじろく /議事録/
ぎせい /犠牲/
ぎせいしゃ /犠牲者/
ぎだい /議題/
ぎちょう /議長/
ぎふ /岐阜/
ぎほう /技法/
ぎみ /気味/
ぎむ /義務/
ぎもん /疑問/
ぎもんし /疑問視/
ぎもんてん /疑問点/
ぎゃく /逆/虐/
ぎゃくかんすう /逆関数/
ぎゃくしゅう /逆襲/
ぎゃくじょう /逆上/
ぎゃっこう /逆行/
ぎゅう /牛/
ぎゅうにゅう /牛乳/
ぎょ /魚/御/禦/漁/
ぎょう /行/仰/業/暁/尭/凝/形/
ぎょうかい /業界/
ぎょうしゃ /業者/
ぎょうすう /行数/
ぎょうせき /業績/
ぎょうむ /業務/
ぎょうめ /行目/
ぎょうれつ /行列/
ぎょく /玉/
ぎょらい /魚雷/
ぎれい /儀礼/
ぎろん /議論/
ぎん /銀/吟/
ぎんが /銀河/
ぎんがけい /銀河系/
ぎんがちず /銀河地図/
ぎんこう /銀行/
ぎんざ /銀座/
く /口/苦/工/駒/駈/駆/躯/矩/玖/狗/区/句/倶/九/久/宮/庫/功/拘/紅/供/貢/
くい /杭/
くう /空/
くうかん /空間/
くうかんちゅう /空間中/
くうき /空気/
くうきょ /空虚/
くうこう /空港/
くうしゅうごう /空集合/
くうせき /空席/
くうちょう /空調/
くうはく /空白/
くうれつ /空列/
くかく /区画/
くかん /区間/
くき /茎/
くぎり /区切/
くけい /矩形/
くさ /草/
くさか /久坂/
くさり /鎖/
くし /櫛/串/駆使/
くしろ /釧路/
くしん /苦心/
くじょう /苦情/
くじら /鯨/
くす /楠/
くすのき /楠/
くすり /薬/
くず /屑/
くそ /糞/
くだ /管/
くだん /九段/
くち /口/
くちぐち /口々/
くちびる /唇/
くちぶえ /口笛/
くちゃ /苦茶/
くちょう /口調/
くっせつ /屈折/
くつ /靴/掘/沓/窟/屈/
くつう /苦痛/
くつわ /轡/
くとうてん /句読点/
くどう /駆動/工藤/
くどうりん /駆動輪/
くに /国/邦/國/
くにあき /国昭/
くによし /国吉/
くび /首/
くふう /工夫/
くぶん /区分/
くべつ /区別/
くぼ /窪/久保/
くぼた /久保田/
くま /熊/隈/
くまがい /熊谷/
くまがや /熊谷/
くまもと /熊本/
くみ /組/
くみあい /組合/
くみこ /久美子/
くめ /粂/
くも /雲/蜘蛛/
くもり /曇/
くら /蔵/倉/
くらい /位/
くらしき /倉敷/
くらぶ /倶楽部/
くり /繰/栗/
くるま /車/
くれない /紅/
くろ /黒/
くろう /苦労/
くろかみ /黒髪/
くろかわ /黒川/
くろご /黒子/
くろさか /黒坂/
くろぼし /黒星/
くろまつ /黒松/
くろまる /黒丸/●/
くわ /鍬/桑/
くわはら /桑原/
くん /君/訓/薫/勲/
くんれいしき /訓令式/
くんれん /訓練/
ぐ /虞/愚/具/倶/
ぐあい /具合/
ぐう /隅/遇/寓/偶/宮/
ぐうき /偶奇/
ぐうきせい /偶奇性/
ぐうぜん /偶然/
ぐしょうか /具象化/
ぐたい /具体/
ぐたいてき /具体的/
ぐたいれい /具体例/
ぐち /愚痴/
ぐのう /愚能/
ぐび /具備/
ぐみ /組/
ぐらい /位/
ぐん /群/郡/軍/
ぐんじ /郡司/
ぐんたい /軍隊/
ぐんま /群馬/
け /化/家/怪/祁/袈/卦/毛/気/仮/
けい /形/型/系/兄/計/継/恵/軽/経/傾/鶏/頚/警/詣/蛍/荊/茎/罫/繋/稽/畦/渓/桂/景/敬/携/掲/憩/慧/慶/径/契/珪/圭/啓/刑/係/掛/痙/京/競/境/
けいい /敬意/経緯/
けいえい /経営/
けいおう /慶應/慶応/
けいおうだい /慶応大/
けいか /経過/
けいかい /警戒/
けいかく /計画/
けいかん /警官/
けいぐ /敬具/
けいけん /経験/
けいげん /軽減/
けいこ /稽古/
けいこう /傾向/
けいこく /警告/
けいさい /掲載/
けいさつ /警察/
けいさん /計算/
けいさんき /計算機/
けいさんきかがく /計算機科学/
けいさんきしつ /計算機室/
けいさんきそく /計算規則/
けいさんけっか /計算結果/
けいさんほう /計算法/
けいさんほうほう /計算方法/
けいさんりょう /計算量/
けいざい /経済/
けいしき /形式/
けいしきか /形式化/
けいしきてき /形式的/
けいしゃ /傾斜/
けいしょう /継承/敬称/
けいじ /刑事/掲示/計時/
けいじどうしゃ /軽自動車/
けいじばん /掲示板/
けいじゅ /圭樹/
けいじょう /形状/
けいすう /係数/
けいせい /形成/
けいせき /形跡/
けいせん /罫線/┴/┤/┼/┘/┬/├/└/┐/┌/│/─/━/┃/┏/┓/┛/┗/┣/┳/┫/┻/╋/┠/┯/┨/┷/┿/┝/┰/┥/┸/╂/
けいそう /軽装/
けいそく /計測/
けいぞう /敬三/
けいぞく /継続/
けいぞくてき /継続的/
けいたい /形態/
けいだい /慶大/
けいとう /系統/
けいとうてき /系統的/
けいひ /経費/
けいひん /京浜/
けいもう /啓蒙/
けいやく /契約/
けいやくしょ /契約書/
けいゆ /経由/
けいよう /京葉/
けいり /経理/
けいりょう /計量/
けいりょうてき /計量的/
けいれき /経歴/
けいれつ /系列/
けいれん /痙攣/
けいろ /経路/
けが /怪我/
けさ /今朝/袈裟/
けしき /景色/
けしょう /化粧/
けしょうばこ /化粧箱/
けしん /化身/
けた /桁/
けっか /結果/
けっかん /血管/
けっきょく /結局/
けっこう /結構/
けっこん /結婚/
けっこんしき /結婚式/
けっさく /傑作/
けっしん /決心/
けっせき /欠席/
けっせきにっすう /欠席日数/
けっそん /欠損/
けっちゃく /結着/
けってい /決定/
けってん /欠点/
けっぱく /潔白/
けつ /穴/決/結/訣/血/潔/欠/傑/
けつあつ /血圧/
けつご /結語/
けつごう /結合/
けつごうほうそく /結合法則/
けつじょ /欠如/
けつろん /結論/
けはい /気配/
けみがわ /検見川/
けむ /煙/
けむり /煙/
けもの /獣/
けん /見/間/件/研/肩/犬/嫌/鍵/権/鹸/験/顕/険/遣/軒/賢/謙/県/絹/硯/献/牽/検/捲/拳/懸/憲/建/堅/圏/喧/剣/券/兼/健/倦/倹/樫/筧/繭/
けんあん /懸案/
けんい /権威/
けんいち /健一/
けんか /喧嘩/
けんかい /見解/
けんかじょうず /喧嘩上手/
けんがく /見学/
けんきゅう /研究/
けんきゅういん /研究員/
けんきゅうか /研究科/
けんきゅうかい /研究会/
けんきゅうしつ /研究室/
けんきゅうしゃ /研究者/
けんきゅうしゅうかい /研究集会/
けんきゅうしょ /研究所/
けんきゅうじょ /研究所/
けんきゅうひ /研究費/
けんげん /権限/
けんこう /健康/
けんこうしんだん /健康診断/
けんさ /検査/
けんさく /検索/
けんし /犬歯/
けんしゅう /研修/
けんしゅうせい /研修生/
けんしゅつ /検出/
けんしょう /検証/
けんしょうけい /検証系/
けんじ /健二/
けんじょう /謙譲/
けんじょうご /謙譲語/
けんせつ /建設/
けんせつてき /建設的/
けんそう /喧噪/
けんぞうぶつ /建造物/
けんたろう /健太郎/
けんち /検知/見地/
けんちく /建築/
けんちょ /顕著/
けんとう /検討/見当/
けんとうちゅう /検討中/
けんない /県内/
けんにん /兼任/
けんびきょう /顕微鏡/
けんぶつ /見物/
けんみん /県民/
けんむ /兼務/
けんめい /懸命/賢明/
けんり /権利/
けんろん /圏論/
げ /下/外/解/
げい /鯨/迎/芸/猊/
げいか /猊下/
げいじゅつ /芸術/
げき /激/隙/撃/戟/劇/
げきじょう /劇場/
げきてき /劇的/
げきとつ /激突/
げきは /撃破/
げしゃ /下車/
げしゅく /下宿/
げじゅん /下旬/
げっかん /月刊/
げっこう /月光/
げっぽ /月歩/
げつ /月/
げつよう /月曜/
げつようび /月曜日/
げん /言/元/現/原/限/諺/舷/絃/玄/源/減/弦/幻/厳/嫌/験/
げんあん /原案/
げんいん /原因/
げんいんふめい /原因不明/
げんかい /限界/
げんき /元気/
げんきゅう /言及/
げんきょう /元凶/
げんきん /現金/
げんこう /原稿/現行/
げんご /言語/
げんさく /原作/
げんざい /現在/
げんざいいち /現在位置/
げんし /原子/
げんしかく /原子核/
げんしゅ /厳守/
げんしょ /原書/
げんしょう /現象/減少/
げんしりょく /原子力/
げんじつ /現実/
げんじつてき /現実的/
げんじてん /現時点/
げんじゅう /厳重/
げんじょう /現状/現場/
げんそく /原則/
げんぞん /現存/
げんだい /現代/
げんち /現地/
げんちょ /原著/
げんてい /限定/
げんてん /原点/
げんど /限度/
げんば /現場/
げんぱつ /原発/
げんぶん /原文/
げんぺい /源平/
げんぽん /原本/
げんまい /玄米/
げんみつ /厳密/
げんり /原理/
げんりてき /原理的/
げんりょう /限量/
こ /虚/子/個/雇/鼓/顧/鈷/跨/誇/虎/菰/胡/股/袴/糊/狐/湖/枯/故/戸/弧/庫/己/孤/姑/固/呼/古/乎/小/琥/児/来/去/拠/粉/木/
こあみ /小網/
こい /恋/鯉/故意/
こいし /小石/
こいびと /恋人/
こう /行/後/広/口/好/項/光/向/考/香/高/更/慌/垢/溝/稿/工/公/降/構/厚/鴻/閤/鋼/砿/鉱/酵/郊/購/貢/講/衡/荒/航/膏/腔/肱/肯/耕/綱/絞/紘/紅/糠/硬/皇/甲/港/浩/洪/江/梗/校/杭/晃/昂/攻/控/拘/抗/恒/弘/康/庚/幸/巷/巧/宏/孝/孔/坑/喉/后/勾/効/功/倖/候/侯/佼/交/黄/廣/敲/剛/興/河/神/仰/耗/
こうあん /考案/
こうい /行為/好意/
こういき /広域/
こういしょう /後遺症/
こういち /浩一/康一/孝一/
こううん /幸運/
こうえん /講演/公園/公演/
こうえんかい /講演会/
こうえんじ /高円寺/
こうか /効果/高架/工科/
こうかい /公開/後悔/高階/
こうかいろんり /高階論理/
こうかきかえ /項書換え/
こうかせんろ /高架線路/
こうかん /交換/
こうかんけい /項関係/
こうがい /梗概/
こうがく /工学/
こうがくか /工学科/
こうがくはかせ /工学博士/
こうがくぶ /工学部/
こうがっか /工学科/
こうき /後期/後記/
こうきしん /好奇心/
こうきち /厚吉/
こうきゅう /高級/
こうきょう /交響/公共/
こうきょうきょく /交響曲/
こうぎ /抗議/講義/
こうぎょう /興業/工業/
こうくう /航空/
こうぐ /工具/
こうけい /光景/
こうけいしゃ /後継者/
こうけん /貢献/
こうげき /攻撃/
こうこう /高校/航行/
こうこうせい /高校生/
こうこく /広告/
こうご /交互/
こうごう /皇后/
こうさ /交差/
こうさく /耕作/
こうさつ /考察/
こうざ /口座/講座/
こうざん /鉱山/
こうし /講師/格子/講士/
こうしき /公式/
こうしぎょらい /光子魚雷/
こうしつ /皇室/
こうしてん /格子点/
こうしゃ /後者/公社/校舎/
こうしゅう /講習/公衆/
こうしゅうかい /講習会/
こうしょう /交渉/
こうしん /更新/交信/
こうじ /麹/孝二/高次/工事/
こうじつ /口実/
こうじゅつ /後述/
こうじょう /工場/向上/
こうすいい /高水位/
こうすう /工数/
こうず /構図/
こうせい /構成/更生/後世/校正/恒星/
こうせいきそく /構成規則/
こうせいけい /恒星系/
こうせいし /構成子/
こうせいてき /構成的/
こうせいてきすうがく /構成的数学/
こうせいのう /高性能/
こうせいようそ /構成要素/
こうせん /高専/光線/
こうそう /高層/
こうそく /高速/拘束/
こうそくか /高速化/
こうぞう /構造/
こうぞうたい /構造体/
こうぞうてき /構造的/
こうた /小唄/
こうたい /交代/
こうだい /工大/
こうだんしゃ /講談社/
こうち /高知/
こうちく /構築/
こうちゃ /紅茶/
こうちょう /好調/校長/
こうちょうしつ /校長室/
こうつう /交通/
こうつうこうしゃ /交通公社/
こうつうひ /交通費/
こうつごう /好都合/
こうてい /肯定/高低/工程/
こうてん /交点/
こうでん /光電/
こうとう /高等/恒等/後頭/
こうとうく /江東区/
こうとうぶ /後頭部/
こうど /高度/
こうどう /行動/講堂/
こうどく /講読/
こうにゅう /購入/
こうの /河野/
こうはい /後輩/荒廃/
こうはく /工博/
こうはん /後半/
こうばい /公倍/
こうひ /校費/
こうひょう /公表/好評/講評/
こうふ /甲府/交付/
こうふく /幸福/
こうふし /甲府市/
こうぶん /構文/
こうぶんきそく /構文規則/
こうぶんし /高分子/
こうぶんろん /構文論/
こうへい /公平/
こうべ /頭/神戸/
こうほ /候補/
こうほう /広報/
こうほしゃ /候補者/
こうぼ /公募/
こうみょう /巧妙/
こうむ /公務/
こうむいん /公務員/
こうもく /項目/
こうや /荒野/
こうよう /紅葉/効用/
こうらくえん /後楽園/
こうり /公理/
こうりけい /公理系/
こうりつ /効率/
こうりつてき /効率的/
こうりゅう /交流/
こうりょ /考慮/
こうりょう /荒涼/
こうろ /航路/
こえ /声/越/肥/
こおり /氷/
こがた /小型/
こきゅう /呼吸/
こきゅうおん /呼吸音/
こく /国/黒/鵠/酷/穀/告/刻/克/石/谷/
こくおう /国王/
こくこうりつ /国公立/
こくご /国語/
こくごじてん /国語辞典/
こくさい /国際/
こくさいかいぎ /国際会議/
こくさいけん /国際研/
こくさいしょく /国際色/
こくてつ /国鉄/
こくどう /国道/
こくない /国内/
こくばん /黒板/
こくびゃく /黒白/
こくぶんちょう /国分町/
こくみん /国民/
こくりつ /国立/
ここ /個々/
ここち /心地/
ここの /九/
こころ /心/
こころざし /志/
ここん /古今/
こごえ /小声/
こさめ /小雨/
こし /腰/
こしき /甑/
こしつ /個室/
こしょう /故障/
こしょうちゅう /故障中/
こじ /誇示/
こじま /小島/児島/
こじん /個人/
こじんじょうほう /個人情報/
こじんてき /個人的/
こすう /個数/
こせい /個性/
こせき /戸籍/
こせきとうほん /戸籍謄本/
こぜに /小銭/
こたえ /答/
こたつ /炬燵/
こたに /小谷/
こっか /国家/）/】/］/
こつ /骨/惚/忽/
こてい /固定/
こていてき /固定的/
こと /事/琴/異/言/殊/
ことがら /事柄/
ことし /今年/
ことば /言葉/
ことぶき /寿/
ことり /小鳥/
こども /子供/小人/
こな /粉/
こはく /琥珀/
こはる /小春/
こばし /小橋/
こばやし /小林/
こぶし /拳/
こべつ /個別/
こま /細/駒/狛/
こまいぬ /狛/
こまごめ /駒込/
こまざわ /駒沢/
こまつ /小松/
こまつだ /小松田/
こまつばら /小松原/
こまば /駒場/
こまめ /細目/
こみ /込/
こむ /込/
こむら /古村/
こめ /米/
こもじ /小文字/
こもん /顧問/
こやま /小山/
こゆう /固有/個有/
こよみ /暦/
これ /此/
ころ /頃/
ころも /衣/
こわ /声/
こわね /声音/
こん /今/金/混/根/魂/艮/紺/痕/梱/昆/昏/懇/恨/婚/墾/坤/困/琴/建/献/
こんかい /今回/
こんき /根気/
こんきょ /根拠/
こんげつ /今月/
こんげつごう /今月号/
こんげつちゅう /今月中/
こんげん /根源/
こんご /今後/
こんざい /混在/
こんざつ /混雑/
こんしゅう /今週/
こんしん /懇親/
こんじょう /根性/
こんせい /混成/
こんだんかい /懇談会/
こんど /今度/
こんどう /混同/
こんなん /困難/
こんにち /今日/
こんねん /今年/
こんねんど /今年度/
こんばん /今晩/
こんぽん /根本/
こんや /今夜/
こんらん /混乱/
こんわく /困惑/
ご /後/語/御/誤/醐/護/碁/瑚/檎/梧/悟/娯/吾/呉/午/伍/互/五/児/期/
ごあんない /御案内/
ごい /語彙/
ごいけん /御意見/
ごう /合/号/強/轟/豪/濠/拷/壕/劫/剛/郷/傲/業/
ごうい /合意/
ごういん /強引/
ごうかく /合格/
ごうかん /号館/
ごうけい /合計/
ごうしつ /号室/
ごうせい /合成/
ごうとう /強盗/
ごうどう /合同/
ごうまん /傲慢/
ごうりか /合理化/
ごうりゅう /合流/
ごえ /声/
ごかい /誤解/
ごかん /互換/
ごかんせい /互換性/
ごがく /語学/
ごく /獄/極/
ごくひ /極秘/
ごくろう /御苦労/
ごご /午後/
ごしゅっせき /御出席/
ごしょく /誤植/
ごじつ /後日/
ごじゅん /語順/
ごじょ /互除/
ごじょげん /御助言/
ごぜん /午前/
ごぜんちゅう /午前中/
ごぞんじ /御存知/
ごと /毎/
ごとう /後藤/
ごはん /御飯/
ごふく /五福/
ごぶさた /御無沙汰/
ごへんじ /御返事/
ごめいわく /御迷惑/
ごめん /御免/
ごよう /御用/
ごようぼう /御要望/
ごらく /娯楽/
ごらん /御覧/
ごりょう /御陵/
ごろ /頃/語呂/
ごん /言/権/
ごんご /言語/
ごんごどうだん /言語道断/
さ /差/左/茶/裟/鎖/詐/砂/瑳/沙/査/嵯/唆/叉/佐/些/作/再/
さい /際/最/歳/才/西/再/妻/載/裁/菜/細/斎/祭/砦/砕/犀/采/災/済/栽/採/彩/宰/塞/哉/催/債/差異/齋/財/殺/切/
さいあく /最悪/
さいかい /最下位/再開/
さいがい /災害/
さいき /再帰/
さいきてき /再帰的/
さいきょう /最強/
さいきん /最近/細菌/
さいく /細工/
さいけん /再見/
さいけんさ /再検査/
さいげん /再現/
さいこう /最高/再考/
さいこうせい /再構成/
さいご /最後/
さいしゅう /最終/
さいしゅうかい /最終回/
さいしゅうてき /最終的/
さいしょ /最初/
さいしょう /最少/最小/
さいしょうかもんだい /最小化問題/
さいしょうげん /最小限/
さいしょうこうばいすう /最小公倍数/
さいしょうち /最小値/
さいしょく /彩色/
さいしん /最新/細心/
さいしんえい /最新鋭/
さいしんばん /最新版/
さいじつ /祭日/
さいじょう /西条/
さいじょうい /最上位/
さいせい /再生/
さいせん /細線/
さいせんか /細線化/
さいぜん /最善/
さいそう /再送/
さいそく /催促/
さいたま /埼玉/
さいたん /最短/
さいだい /最大/
さいだいげん /最大限/
さいだいち /最大値/
さいちゅう /最中/
さいてい /最低/
さいていげん /最低限/
さいてき /最適/
さいてきか /最適化/
さいてん /採点/
さいとう /斉藤/斎藤/齋藤/
さいど /再度/
さいはいふ /再配布/
さいはつ /再発/
さいふ /財布/
さいぶ /細部/
さいぶん /細分/
さいぼう /細胞/
さいゆうせん /最優先/
さいよう /採用/
さいりょう /最良/
さいりよう /再利用/
さお /竿/
さか /酒/坂/阪/逆/
さかい /堺/境/酒井/坂井/
さかえ /栄/
さかお /阪尾/
さかき /榊/
さかきばら /榊原/
さかさ /逆/
さかずき /杯/
さかた /坂田/
さかな /魚/肴/
さかむら /坂村/
さかもと /坂本/
さかや /酒屋/
さが /性/佐賀/嵯峨/
さがみはら /相模原/
さがわ /佐川/
さがわきゅうびん /佐川急便/
さき /先/碕/埼/崎/咲/嵜/
さきごろ /先頃/
さきほど /先程/
さきょう /左京/
さぎ /鷺/
さぎょう /作業/
さく /作/冊/錯/索/策/窄/柵/朔/昨/搾/咋/削/酢/
さくいん /索引/
さくご /錯誤/
さくし /索師/作詩/
さくしゃ /作者/
さくじつ /昨日/
さくじょ /削除/
さくせい /作成/
さくせいしゃ /作成者/
さくせいび /作成日/
さくそう /錯綜/
さくねん /昨年/
さくばん /昨晩/
さくひん /作品/
さくふ /作譜/
さくふしゃ /作譜者/
さくま /佐久間/
さくや /昨夜/
さくら /桜/
さくらい /桜井/
さけ /酒/鮭/
さこ /迫/
さこう /酒匂/
ささ /笹/
ささい /些細/
ささき /佐々木/
さしだしにん /差出人/
さじ /匙/
さた /沙汰/
さだ /貞/
さだかた /定方/
さち /幸/
さっ /早/
さっか /作家/
さっき /殺気/
さっきょく /作曲/
さっきん /殺菌/
さっそく /早速/
さっち /察知/
さっぽろ /札幌/
さつ /札/冊/擦/薩/殺/撮/拶/察/刷/
さつき /皐/
さつたば /札束/
さと /里/智/
さとう /佐藤/砂糖/
さとし /聡/
さとる /達/
さどう /作動/
さどうちゅう /作動中/
さどく /査読/
さはんじ /茶飯事/
さば /鯖/
さび /錆/寂/
さぶん /差分/
さへん /左辺/
さほう /作法/
さま /様/
さまざま /様々/
さむらい /士/侍/
さめ /鮫/
さゆう /左右/
さゆうたいしょう /左右対称/
さよう /作用/
さら /更/皿/
さらす /晒/
さる /猿/
さわ /澤/沢/
さわだ /沢田/
さわむら /沢村/
さん /山/三/散/餐/酸/賛/讃/蚕/纂/算/産/珊/燦/桟/撒/惨/参/傘/
さんか /参加/
さんかい /三階/
さんかく /▽/
さんかしゃ /参加者/
さんがつ /三月/
さんぎょう /産業/
さんげんぢゃや /三軒茶屋/
さんこう /参考/
さんこうしりょう /参考資料/
さんこうぶんけん /参考文献/
さんご /珊瑚/
さんしゃ /三者/
さんしょう /参照/
さんじ /参事/
さんじゅうし /三銃士/
さんじゅつ /算術/
さんすう /算数/
さんせい /賛成/
さんちょう /山頂/
さんにゅう /参入/
さんにんぐみ /三人組/
さんねん /三年/
さんのう /山王/
さんばんちょう /三番町/
さんぱく /三拍/
さんぱつ /散髪/散発/
さんぶ /三部/
さんぷ /算譜/
さんぽ /散歩/
さんぽう /算法/
さんめい /三名/
さんよ /参与/
さんりく /三陸/
さんろく /山麓/
ざ /座/挫/坐/
ざい /財/在/罪/材/剤/済/
ざいがく /在学/
ざいけい /財形/
ざいこ /在庫/
ざいさん /財産/
ざいしょく /在職/
ざいせき /在籍/
ざいだん /財団/
ざいだんほうじん /財団法人/
ざいむ /財務/
ざいりょう /材料/
ざき /崎/
ざた /沙汰/
ざちょう /座長/
ざっし /雑誌/
ざっそう /雑草/
ざっとう /雑踏/
ざっぱ /雑破/
ざつ /雑/
ざつおん /雑音/
ざつよう /雑用/
ざひょう /座標/
ざひょうけい /座標系/
ざひょうへんかん /座標変換/
ざわ /沢/
ざん /残/暫/斬/
ざんがい /残骸/
ざんがく /残額/
ざんぎょう /残業/
ざんしょ /残暑/
ざんだんすう /残弾数/
ざんてい /暫定/
ざんねん /残念/
ざんりょう /残量/
し /私/子/氏/指/紙/覗/使/誌/死/旨/姿/姉/伺/至/師/歯/止/試/飼/雌/賜/資/諮/詩/詞/視/脂/肢/紫/糸/祉/獅/枝/施/斯/孜/支/思/志/市/屍/始/士/四/嗣/史/司/刺/仔/仕/岐/知/次/示/自/矢/
しあい /試合/
しあげ /仕上/
しあん /思案/試案/
しい /椎/
しいな /椎名/
しいの /椎野/
しいん /子音/
しえん /支援/
しえんけい /支援系/
しお /汐/塩/潮/
しおかぜ /汐風/潮風/
しおた /塩田/
しか /鹿/歯科/
しかい /司会/
しかいしゃ /司会者/
しかく /資格/視覚/四角/■/□/
しかけ /仕掛/
しかた /仕方/
しかん /弛緩/
しがい /市外/
しがくぶ /歯学部/
しがん /志願/
しき /色/式/拭/識/指揮/敷/織/
しきじょう /式場/
しきべつ /識別/
しきべつし /識別子/
しきゅう /至急/支給/
しぎ /鴫/
しけん /試験/私見/
しげ /滋/茂/重/
しげき /滋樹/茂樹/刺激/
しげる /茂/滋/
しげん /資源/
しこう /指向/思考/施行/
しこく /四国/
しご /死後/
しごと /仕事/
しさく /試作/
しさつ /視察/
しさん /資産/
しさんか /資産家/
しし /宍/
ししつ /資質/
ししゃ /支社/死者/
ししょ /支所/
ししょう /支障/
ししょばこ /私書箱/
ししん /私信/指針/
しじ /指示/支持/
しじょう /史上/市上/
しじょうさいきょう /史上最強/
しじん /詩人/
しすう /指数/
しず /静/
しずお /静雄/
しずおか /静岡/
しずおかだい /静岡大/
しずおかだいがく /静岡大学/
しずか /静香/
しずく /雫/滴/
しずや /静谷/
しせい /姿勢/
しせつ /施設/
しぜん /自然/
しぜんえんえきたいけい /自然演繹体系/
しぜんすう /自然数/
しぜんすうしき /自然数式/
しそう /思想/
しそく /四則/
した /下/舌/↓/
したい /死体/
したみ /下見/
しだい /次第/
しち /質/七/
しちょうかく /視聴覚/
しっぱい /失敗/
しっぴつ /執筆/
しつ /失/質/疾/漆/湿/悉/室/嫉/執/叱/
しつちょう /室長/
しつない /室内/
しつぼう /失望/
しつもん /質問/
しつもんしゃ /質問者/
しつれい /失礼/
しつれん /失恋/
してい /指定/
してき /指摘/私的/
してつ /私鉄/
してん /支店/始点/視点/
しとみ /蔀/
しどう /指導/
しどういん /指導員/
しどうきょうかん /指導教官/
しどうしゃ /指導者/
しな /品/支那/科/
しない /市内/
しながわ /品川/
しなもの /品物/
しなん /至難/
しの /篠/紫乃/
しのばず /不忍/
しはい /支配/
しば /芝/柴/
しばうら /芝浦/
しばこうえん /芝公園/
しばしば /屡/
しばた /柴田/
しばやま /柴山/
しひ /私費/
しぶ /渋/支部/
しぶや /渋谷/
しへい /紙幣/
しべ /蕊/
しほう /紫峰/
しほん /資本/
しぼう /死亡/脂肪/
しぼうさいぼう /脂肪細胞/
しま /縞/嶋/島/
しまい /姉妹/
しまうち /島内/
しまだ /島田/
しまね /島根/
しまむら /島村/
しみず /清水/
しめい /氏名/
しめきり /締切/
しも /下/霜/
しもきた /下北/
しもだ /下田/
しもだいら /下平/
しもて /下手/
しゃ /車/者/社/煮/写/斜/遮/謝/紗/赦/捨/射/舎/砂/
しゃいん /社員/
しゃかい /社会/
しゃがい /社外/
しゃきん /謝金/
しゃく /昔/錫/釈/酌/爵/灼/杓/尺/勺/借/
しゃくぜん /釈然/
しゃくぶく /折伏/
しゃくよう /借用/
しゃくようしょ /借用書/
しゃげき /射撃/
しゃしょう /車掌/捨象/
しゃしょく /写植/
しゃしん /写真/
しゃじ /謝辞/
しゃぞう /写像/
しゃだん /社団/
しゃちょう /社長/
しゃない /社内/
しゃりょう /車両/
しゃんはい /上海/
しゅ /手/主/種/修/首/酒/取/趣/腫/珠/狩/殊/朱/守/衆/
しゅう /集/修/週/秋/祝/拾/習/醜/酬/酋/輯/蹴/讐/襲/衆/蒐/舟/臭/繍/終/秀/洲/愁/州/就/宗/周/収/囚/執/
しゅうい /周囲/
しゅうえいしゃ /集英社/
しゅうかい /集会/
しゅうかん /週間/
しゅうきょう /宗教/
しゅうぎ /祝儀/
しゅうけい /集計/
しゅうけつ /終結/
しゅうごう /集合/
しゅうごうかた /集合型/
しゅうごうばしょ /集合場所/
しゅうごうろん /集合論/
しゅうし /修士/
しゅうしかてい /修士課程/
しゅうしゅう /収拾/収集/
しゅうしょく /就職/
しゅうしろんぶん /修士論文/
しゅうじつ /終日/
しゅうせい /修正/
しゅうせき /集積/
しゅうそく /収束/
しゅうだん /集団/
しゅうち /周知/
しゅうちゃく /執着/
しゅうちゅう /集中/
しゅうちゅうこうぎ /集中講義/
しゅうちょう /酋長/
しゅうてん /終点/
しゅうとく /修得/
しゅうにゅう /収入/
しゅうねん /周年/執念/
しゅうのう /収納/
しゅうは /宗派/
しゅうはい /集配/
しゅうはすう /周波数/
しゅうふく /修復/
しゅうふくさぎょう /修復作業/
しゅうぶん /秋分/
しゅうへん /周辺/
しゅうへんきき /周辺機器/
しゅうへんそうち /周辺装置/
しゅうほう /週報/
しゅうまつ /週末/
しゅうもく /衆目/
しゅうやく /集約/
しゅうり /修理/
しゅうりちゅう /修理中/
しゅうりょう /終了/修了/
しゅうろく /収録/
しゅうろん /修論/
しゅうわ /秀和/
しゅかん /主幹/主管/
しゅきおく /主記憶/
しゅきおくそうち /主記憶装置/
しゅぎ /主義/
しゅぎょう /修行/
しゅく /宿/祝/粛/縮/淑/夙/叔/
しゅくが /祝賀/
しゅくしゃ /宿舎/
しゅくしょう /縮小/
しゅくだい /宿題/
しゅくはく /宿泊/
しゅくめい /宿命/
しゅご /主語/
しゅさ /主査/
しゅさい /主催/
しゅし /主旨/趣旨/
しゅしゃ /取捨/
しゅしゅ /種々/
しゅじ /主事/
しゅじん /主人/
しゅじんこう /主人公/
しゅせき /主席/
しゅたい /主体/
しゅだい /主題/
しゅだいか /主題歌/
しゅだん /手段/
しゅちょう /主張/
しゅっか /出荷/
しゅっきん /出勤/
しゅっけつ /出欠/
しゅっこう /出向/出航/
しゅっしゃ /出社/
しゅっしょ /出所/
しゅっしん /出身/
しゅっすい /出水/
しゅっせ /出世/
しゅっせい /出生/
しゅっせき /出席/
しゅったいきん /出退勤/
しゅっちょう /出張/
しゅっちょうちゅう /出張中/
しゅってん /出典/出展/
しゅっぱつ /出発/
しゅっぱつてん /出発点/
しゅっぱん /出版/
しゅっぱんしゃ /出版社/
しゅつ /出/
しゅつえん /出演/
しゅつえんしゃ /出演者/
しゅつがん /出願/
しゅつげん /出現/
しゅつげんいち /出現位置/
しゅつじょう /出場/
しゅつりょく /出力/
しゅつりょくほう /出力法/
しゅとく /取得/
しゅどう /手動/
しゅにん /主任/
しゅび /守備/
しゅふ /主婦/
しゅべつ /種別/
しゅほう /手法/
しゅみ /趣味/
しゅむ /主務/
しゅもく /種目/
しゅよう /主要/
しゅりゅう /主流/
しゅるい /種類/
しゅん /春/瞬/駿/舜/竣/峻/俊/旬/
しゅんかん /瞬間/
しゅんこう /竣工/
しゅんぶん /春分/
しょ /所/初/書/暑/諸/藷/薯/署/緒/庶/渚/曙/処/
しょう /上/松/少/章/性/勝/傷/正/尚/姓/称/小/消/笑/焼/鞘/障/鐘/鍾/鉦/醤/賞/象/詳/詔/証/訟/裳/衝/蕉/蒋/菖/肖/紹/粧/祥/礁/硝/省/症/照/焦/湘/渉/沼/樵/樟/梢/晶/昭/昌/昇/捷/掌/招/抄/承/彰/廠/床/庄/将/宵/娼/妾/奨/嘗/唱/商/哨/召/升/匠/償/生/漿/璋/声/政/星/精/相/装/
しょういち /正一/
しょううちゅう /小宇宙/
しょうかい /紹介/照会/
しょうがい /障害/生涯/渉外/傷害/
しょうがいぶつ /障害物/
しょうがく /小学/
しょうがくかん /小学館/
しょうがくきふきん /奨学寄付金/
しょうがくきん /奨学金/
しょうがくせい /小学生/
しょうがっこう /小学校/
しょうがつ /正月/
しょうきぼ /小規模/
しょうきょ /消去/
しょうきょく /消極/
しょうぎょう /商業/
しょうぎょうてき /商業的/
しょうぎょうもくてき /商業目的/
しょうけん /証券/
しょうげき /衝撃/
しょうこ /証拠/
しょうこう /商工/
しょうこうし /小公子/
しょうこうもく /小項目/
しょうご /正午/
しょうごう /照合/
しょうさい /詳細/
しょうしゅう /召集/
しょうしょう /少々/
しょうじ /商事/
しょうじき /正直/
しょうじょ /少女/
しょうじょう /症状/
しょうすう /小数/
しょうせつ /小説/小節/
しょうたい /招待/正体/
しょうだく /承諾/
しょうだくしょ /承諾書/
しょうち /承知/
しょうちょう /象徴/
しょうちょうてき /象徴的/
しょうてん /商店/焦点/
しょうとつ /衝突/
しょうどう /衝動/
しょうなり /≦/
しょうなん /湘南/
しょうにん /承認/証人/
しょうねん /少年/
しょうねんひこう /少年非行/
しょうばい /商売/
しょうひ /消費/
しょうひしゃ /消費者/
しょうひょう /商標/
しょうひょうけん /商標権/
しょうひん /商品/賞品/小品/
しょうひんめい /商品名/
しょうぶ /勝負/菖蒲/
しょうめい /証明/
しょうめいしょ /証明書/
しょうめいず /証明図/
しょうめいろん /証明論/
しょうめつ /消滅/
しょうもう /消耗/
しょうもうひん /消耗品/
しょうよう /商用/
しょうらい /将来/
しょうりゃく /省略/
しょうりょう /少量/
しょうれい /奨励/
しょうわ /昭和/
しょき /初期/書記/
しょきか /初期化/
しょきけい /初期型/
しょきち /初期値/
しょきゅう /初級/
しょく /色/燭/拭/食/蝕/触/職/織/殖/植/飾/埴/嘱/
しょくいん /職員/
しょくいんしつ /職員室/
しょくぎょう /職業/
しょくぎょうがら /職業柄/
しょくじ /食事/
しょくどう /食堂/
しょくどうしゃ /食堂車/
しょくば /職場/
しょくひん /食品/
しょくぶつ /植物/
しょくみん /植民/
しょくみんせい /植民星/
しょくみんち /植民地/
しょくよく /食欲/
しょくん /諸君/
しょぐう /処遇/
しょけん /所見/
しょこく /諸国/
しょしき /書式/
しょしんしゃ /初心者/
しょじ /所持/
しょじゅん /初旬/
しょせき /書籍/
しょぞく /所属/
しょたいめん /初対面/
しょだな /書棚/
しょち /処置/
しょちょう /所長/
しょっき /食器/
しょてん /書店/
しょとうてき /初等的/
しょとうてきろんりしき /初等的論理式/
しょない /所内/
しょにち /初日/
しょはん /初版/
しょほ /初歩/
しょほてき /初歩的/
しょぼう /書房/
しょむ /庶務/
しょむかかり /庶務掛/
しょめい /署名/書名/
しょゆう /所有/
しょり /処理/
しょりけい /処理系/
しょりそうち /処理装置/
しょりちゅう /処理中/
しょりほうしき /処理方式/
しょるい /書類/
しよう /使用/仕様/私用/
しようご /使用後/
しようしゃ /使用者/
しようしょ /仕様書/
しようちゅう /使用中/
しようほう /使用法/
しようれい /使用例/
しら /白/
しらい /白井/
しらかわ /白川/
しらゆり /白百合/
しり /尻/
しりつ /私立/
しりつちゅうがく /私立中学/
しりょ /思慮/
しりょう /資料/
しりょく /視力/
しる /汁/
しるし /印/
しれい /指令/
しろ /城/白/代/
しろうと /素人/
しろぼし /白星/
しろまる /白丸/〇/
しろもの /代物/
しわく /思惑/
しわす /師走/
しん /心/新/真/親/身/神/伸/森/寝/辛/辰/進/信/震/針/診/薪/芯/臣/紳/秦/疹/申/深/浸/榛/晋/振/慎/審/娠/唇/侵/清/眞/請/
しんいち /伸一/真一/
しんか /進化/
しんかん /新館/
しんかんせん /新幹線/
しんがい /侵害/
しんがく /進学/
しんがくぎほう /信学技報/
しんがくろん /信学論/
しんき /新規/
しんきょく /新曲/
しんぎ /審議/
しんくうでんし /真空電子/
しんけい /神経/
しんけいけい /神経系/
しんけいしつ /神経質/
しんけいじょうほうしょり /神経情報処理/
しんけん /真剣/
しんこう /進行/振興/信仰/
しんこうかい /振興会/
しんこうちゅう /進行中/
しんこうべ /新神戸/
しんご /伸吾/
しんごう /信号/
しんさ /審査/
しんさく /新作/
しんさつ /診察/
しんざん /新参/
しんしゃ /新車/
しんしゅう /信州/
しんしゅつ /新出/進出/
しんしょ /新書/
しんじつ /真実/
しんじゅく /新宿/
しんじゅくく /新宿区/
しんじん /新人/
しんすう /進数/
しんせい /申請/新星/
しんせいしょ /申請書/
しんせいひん /新製品/
しんせき /親戚/
しんせだい /新世代/
しんせつ /親切/新設/
しんせん /新鮮/
しんそう /真相/
しんたい /身体/
しんたく /信託/
しんたまがわせん /新玉川線/
しんだん /診断/
しんだんしょ /診断書/
しんちょう /慎重/
しんちょく /進捗/
しんてん /進展/親展/
しんとう /新棟/浸透/
しんにってつ /新日鉄/
しんにほんせいてつ /新日本製鉄/
しんにゅう /侵入/新入/
しんねん /信念/新年/
しんねんかい /新年会/
しんばし /新橋/
しんばんぐみ /新番組/
しんぱい /心配/
しんぴん /新品/
しんぶん /新聞/
しんぶんしゃ /新聞社/
しんぷく /振幅/
しんぼく /親睦/
しんぼくかい /親睦会/
しんぽ /進歩/
しんみつ /親密/
しんや /深夜/
しんよう /信用/
しんらい /信頼/
しんらいせい /信頼性/
しんり /真理/心理/
しんりかんすう /真理関数/
しんりがく /心理学/
しんりち /真理値/
しんりひょう /真理表/
しんろ /進路/
しんわ /神話/親和/新和/
しんわせい /親和性/
じ /時/次/事/字/二/耳/自/地/持/辞/蒔/而/示/磁/痔/璽/爾/治/滋/慈/寺/児/侍/似/子/除/路/
じあい /自愛/
じいしき /自意識/
じいん /寺院/
じえい /自衛/自営/
じえいそしき /自衛組織/
じかい /次回/磁界/
じかく /自覚/
じかん /時間/
じかんえいぎょう /時間営業/
じき /直/時期/磁気/次期/自棄/
じきあらし /磁気嵐/
じきてき /自棄的/
じきゅう /自給/時給/
じぎょう /事業/事行/
じぎょうぶ /事業部/
じぎょうほんぶ /事業本部/
じく /宍/軸/竺/
じけい /自警/
じけいだん /自警団/
じけん /事件/
じげん /次元/
じげんじょう /次元上/
じこ /事故/自己/
じこう /事項/時効/自校/
じこく /時刻/
じこし /事故死/
じこしゅうふく /自己修復/
じこしゅうふくきのう /自己修復機能/
じこしょうかい /自己紹介/
じご /事後/
じごう /次号/
じごく /地獄/
じさ /時差/
じさく /自作/
じさつ /自殺/
じさん /自参/
じしき /次式/
じしつ /自室/
じしゃ /自社/
じしゃく /磁石/
じしゅく /自粛/
じしょ /辞書/
じしょう /事象/次章/
じしょとうろく /辞書登録/
じしん /自身/自信/地震/
じじこくこく /時々刻々/
じじつ /事実/
じじつじょう /事実上/
じじょう /事情/
じせい /時制/自制/時世/
じせつ /次節/時節/
じぜん /事前/
じそう /時相/
じそく /自足/
じたい /自体/事態/辞退/字体/
じたく /自宅/
じだ /耳朶/
じだい /時代/
じちょう /次長/
じっ /十/
じっか /実家/
じっかん /実感/
じっけん /実験/実権/
じっけんしつ /実験室/
じっこう /実行/実効/
じっこうちゅう /実行中/
じっさい /実際/
じっさいてき /実際的/
じっし /実施/
じっしゅう /実習/
じっしん /実身/
じっすう /実数/
じっせいかつ /実生活/
じっせかい /実世界/
じっせき /実績/
じっせん /実践/
じっそう /実装/
じっそく /実測/
じったい /実体/
じっぴ /実費/
じつ /日/実/
じつぎ /実技/
じつげん /実現/
じつげんか /実現化/
じつざい /実在/
じつざいろん /実在論/
じつじょう /実状/
じつぶつ /実物/
じつよう /実用/
じつようか /実用化/
じつようせい /実用性/
じつようてき /実用的/
じつれい /実例/
じてん /時点/辞典/
じてんしゃ /自転車/
じどう /自動/
じどうか /自動化/
じどうしゃ /自動車/
じどうてき /自動的/
じどうはんばいき /自動販売機/
じはく /自白/
じはつ /自発/
じばく /自爆/
じひ /自費/
じふ /自負/
じぶん /自分/
じぶんかつ /時分割/
じぶんじしん /自分自身/
じぶんよう /自分用/
じま /島/
じまえ /自前/
じみ /地味/
じむ /事務/
じむきょく /事務局/
じむしつ /事務室/
じむしょ /事務所/
じむしょるい /事務書類/
じむてき /事務的/
じめい /自明/
じめん /地面/
じもと /地元/
じゃ /邪/蛇/
じゃく /寂/惹/弱/若/雀/
じゃけん /邪険/
じゃっかん /若干/
じゃどう /邪道/
じゃま /邪魔/
じゅ /受/需/綬/樹/授/寿/呪/儒/就/
じゅう /重/十/住/渋/銃/縦/獣/汁/柔/戎/従/充/什/中/
じゅうこう /重工/
じゅうし /重視/
じゅうしょ /住所/
じゅうしん /重心/
じゅうじ /従事/
じゅうじつ /充実/
じゅうせい /獣性/
じゅうたい /渋滞/
じゅうたく /住宅/
じゅうたくがい /住宅街/
じゅうだい /重大/
じゅうてん /重点/
じゅうどう /柔道/
じゅうなん /柔軟/
じゅうなんせい /柔軟性/
じゅうふく /重複/
じゅうぶん /十分/充分/
じゅうめん /渋面/
じゅうよう /重要/
じゅうらい /従来/
じゅうりょく /重力/
じゅぎょう /授業/
じゅく /熟/塾/
じゅくご /熟語/
じゅくれん /熟練/
じゅけん /受験/
じゅけんしゃ /受験者/
じゅこう /受講/
じゅこうせい /受講生/
じゅしょう /受賞/
じゅしょうしき /授賞式/
じゅしん /受信/受身/
じゅしんしゃ /受信者/
じゅじゅ /授受/
じゅたく /受託/
じゅちゅう /受注/
じゅつ /述/術/
じゅつご /述語/
じゅもん /呪文/
じゅよ /授与/
じゅよう /需要/
じゅり /受理/
じゅん /順/醇/遵/巡/純/盾/潤/準/淳/殉/楯/旬/循/准/
じゅんい /順位/
じゅんいち /淳一/
じゅんかい /巡回/
じゅんかん /循環/
じゅんかんしょうすう /循環小数/
じゅんきょ /準拠/
じゅんぎょう /巡業/
じゅんこ /絢子/
じゅんじ /順次/
じゅんじょ /順序/
じゅんじょつい /順序対/
じゅんすい /純粋/
じゅんせい /純正/
じゅんせんもん /準専門/
じゅんちょう /順調/
じゅんどうけい /準同形/
じゅんどうけいしゃぞう /準同形写像/
じゅんばん /順番/
じゅんび /準備/
じゆう /自由/
じゆうど /自由度/
じゆうへんすう /自由変数/
じょ /女/如/除/鋤/恕/徐/序/叙/助/
じょう /上/生/場/常/定/成/条/城/状/情/乗/錠/醸/譲/蒸/穣/畳/浄/杖/擾/嬢/壌/剰/丞/丈/冗/條/盛/
じょうい /上位/
じょうえい /上映/
じょうえつ /上越/
じょうき /上記/
じょうきょう /状況/
じょうきょういみろん /状況意味論/
じょうきょうりろん /状況理論/
じょうけん /条件/
じょうけんしき /条件式/
じょうけんぶ /条件部/
じょうげ /上下/
じょうげん /上限/
じょうざん /乗算/
じょうし /上司/
じょうしき /常識/
じょうしゃ /乗車/
じょうしゃけん /乗車券/
じょうじ /常時/
じょうじゅつ /上述/
じょうじゅん /上旬/
じょうず /上手/
じょうたい /状態/
じょうたいせんいず /状態遷移図/
じょうたん /上端/
じょうだん /冗談/
じょうち /上智/
じょうちょう /冗長/
じょうなん /城南/
じょうにん /常任/
じょうひん /上品/
じょうぶ /丈夫/
じょうほう /情報/
じょうほうか /情報科/
じょうほうかがく /情報科学/
じょうほうかがくか /情報科学科/
じょうほうかがっか /情報科学科/
じょうほうがく /情報学/
じょうほうきき /情報機器/
じょうほうけんさく /情報検索/
じょうほうこうかん /情報交換/
じょうほうこうがく /情報工学/
じょうほうこうがくか /情報工学科/
じょうほうこうがっか /情報工学科/
じょうほうしょり /情報処理/
じょうほうしょりがっかい /情報処理学会/
じょうほうりろん /情報理論/
じょうむ /常務/
じょうよ /剰余/
じょうらん /擾乱/
じょうりゅう /上流/
じょうれん /常連/
じょがい /除外/
じょきょ /除去/
じょきょうじゅ /助教授/
じょきょく /序曲/
じょく /辱/
じょげん /助言/
じょざん /除算/
じょし /女子/
じょしつ /除湿/
じょしつき /除湿機/
じょしゅ /助手/
じょしゅせき /助手席/
じょじょ /徐々/
じょせい /女性/助成/
じょぶん /序文/
じょゆう /女優/
じょりょく /助力/
じりき /自力/
じりゅう /自流/
じりょく /磁力/
じれい /事例/
じろう /二郎/
じん /人/尽/靭/陣/迅/訊/腎/甚/尋/壬/塵/刃/仁/神/臣/
じんいん /人員/
じんく /甚句/
じんこう /人工/
じんこうちのう /人工知能/
じんしゅ /人種/
じんじ /人事/
じんじゃ /神社/
じんせい /人生/
じんそく /迅速/
じんたい /人体/
じんとく /人徳/
じんぶつ /人物/
じんりょく /尽力/
す /酢/須/諏/笥/素/寿/洲/主/州/巣/
すい /水/吹/錘/錐/酔/遂/衰/翠/粋/睡/炊/推/帥/垂/出/穂/
すいい /推移/水位/
すいけい /水系/
すいこう /推敲/遂行/
すいしつ /水質/
すいしょう /推奨/
すいしん /推進/
すいしんねんりょう /推進燃料/
すいじゅん /水準/
すいず /水津/
すいせん /推薦/
すいそく /推測/
すいた /吹田/
すいちょく /垂直/
すいてい /推定/
すいてんぐう /水天宮/
すいとう /水筒/
すいどう /水道/
すいへい /水平/
すいま /睡魔/
すいみん /睡眠/
すいよう /水曜/
すいようえき /水溶液/
すいようび /水曜日/
すいり /推理/
すいりょう /水量/
すいりょく /水力/
すいろん /推論/
すいろんきそく /推論規則/
すう /数/雛/趨/枢/嵩/崇/
すうがく /数学/
すうがくか /数学科/
すうがくきょうしつ /数学教室/
すうがくてき /数学的/
すうがっか /数学科/
すうぎょう /数行/
すうこ /数個/
すうしゅうかん /数週間/
すうじ /数字/
すうじかん /数時間/
すうじつ /数日/
すうじゅう /数十/
すうだい /数台/
すうち /数値/
すうにん /数人/
すうねん /数年/
すうふん /数分/
すうぶつ /数物/
すうめい /数名/
すうり /数理/
すうりかいせき /数理解析/
すえ /末/
すえひろ /末広/
すが /菅/須賀/
すがた /姿/
すがの /菅野/
すき /隙/鋤/
すきま /隙間/
すぎ /椙/杉/
すぎなみ /杉並/
すぎなみく /杉並区/
すぎもと /杉本/
すぎやま /杉山/
すけ /介/助/
すけっと /助っ人/助人/
すげ /菅/
すこぶる /頗/
すじ /筋/
すすむ /晋/進/
すず /鈴/
すずか /鈴鹿/
すずき /鈴木/
すずめ /雀/
すそ /裾/
すだ /須田/
すてき /素敵/
すで /既/素手/
すな /砂/
すなお /素直/
すべて /総/
すみ /墨/純/済/隅/炭/
すみとも /住友/
すり /摺/
するが /駿河/
するがだい /駿河台/
すわ /諏訪/
すん /寸/
すんぜん /寸前/
すんだい /駿台/
すんぴょう /寸評/
すんぽう /寸法/
ず /頭/逗/厨/図/津/豆/
ずい /髄/瑞/随/
ずいじ /随時/
ずいぶん /随分/
ずけい /図形/
ずけいもじ /図形文字/
ずし /図示/逗子/
ずしき /図式/
ずみ /済/
ずめ /詰/
ずめん /図面/
せ /世/背/瀬/畝/施/
せい /生/声/世/星/成/性/西/製/正/姓/青/勢/斉/静/醒/逝/請/誓/誠/聖/精/盛/牲/清/栖/棲/晴/整/政/征/制/凄/省/靖/背/歳/情/婿/
せいか /成果/
せいかい /正解/盛会/
せいかく /正確/性格/
せいかつ /生活/
せいかつたいど /生活態度/
せいかん /青函/
せいがん /請願/
せいき /世紀/精気/生起/正規/
せいきけい /正規形/
せいきこう /正規項/
せいきゅう /請求/
せいきゅうしょ /請求書/
せいきょ /逝去/
せいきょう /盛況/生協/
せいぎ /正義/
せいぎょ /制御/
せいぎょこうがく /制御工学/
せいぎょそうち /制御装置/
せいげん /制限/
せいこ /聖子/
せいこう /成功/
せいご /清吾/
せいごう /整合/
せいごうせい /整合性/
せいさく /製作/
せいさくしゃ /製作者/
せいさくしょ /製作所/
せいさん /生産/
せいし /正視/
せいしき /正式/
せいしつ /性質/
せいしゅん /青春/
せいしょ /成書/
せいしん /精神/
せいじ /政治/
せいじか /政治家/
せいじつ /誠実/
せいじょう /正常/成城/
せいじん /成人/
せいすう /整数/
せいせい /生成/
せいせいきそく /生成規則/
せいせいぶんぽう /生成文法/
せいせいほうほう /生成方法/
せいせき /成績/
せいそ /整礎/
せいぞう /製造/
せいたい /生態/
せいちょう /成長/
せいてき /静的/
せいてつ /製鉄/
せいてん /晴天/
せいでんき /静電気/
せいと /生徒/
せいとう /正当/政党/
せいとうか /正当化/
せいとうせい /正当性/
せいとうぼうえい /正当防衛/
せいとくてき /生得的/
せいど /制度/精度/
せいねん /生年/青年/
せいねんがっぴ /生年月日/
せいのう /性能/
せいひ /正否/
せいひん /製品/
せいび /整備/
せいびし /整備士/
せいふ /政府/
せいぶ /西武/
せいぶつ /生物/
せいぶん /成分/
せいほう /正方/
せいほん /製本/
せいみつ /精密/
せいみつか /精密化/
せいめい /生命/
せいやく /制約/
せいよう /西洋/静養/
せいようけん /精養軒/
せいり /整理/
せいりつ /成立/
せいりょく /勢力/
せいれき /西暦/
せいれつ /整列/
せいれん /精錬/
せいろんりしき /正論理式/
せかい /世界/
せかいじゅう /世界中/
せかいてき /世界的/
せがみ /瀬上/
せがわ /瀬川/
せき /昔/積/席/夕/関/寂/碩/蹟/跡/赤/責/脊/績/籍/石/析/斥/戚/惜/隻/晰/堰/咳/
せきぐち /関口/
せきにん /責任/
せきにんしゃ /責任者/
せきぶん /積分/
せけん /世間/
せじ /世辞/
せすじ /背筋/
せた /瀬田/
せたがや /世田谷/
せたがやく /世田谷区/
せだい /世代/
せち /節/
せっかく /折角/
せっきょく /積極/
せっきょくてき /積極的/
せっきん /接近/
せっく /節句/
せっけい /設計/
せっけん /石鹸/
せっし /℃/
せっしょう /折衝/
せっしょく /接触/
せっち /設置/
せっちゅう /折衷/
せってい /設定/
せっとく /説得/
せつ /雪/説/節/切/設/折/窃/摂/接/拙/殺/
せつお /節夫/
せつじょく /雪辱/
せつじょくせん /雪辱戦/
せつぞく /接続/
せつぞくかんけい /接続関係/
せつだん /切断/
せつど /節度/
せつなん /摂南/
せつび /設備/
せつめい /説明/
せつめいかい /説明会/
せつめいしょ /説明書/
せつやく /節約/
せつわ /説話/
せとおおはし /瀬戸大橋/
せびょうし /背表紙/
せびろ /背広/
せびろふう /背広風/
せみ /蝉/
せりふ /台詞/
せろん /世論/
せわ /世話/
せわにん /世話人/
せん /先/線/戦/繊/船/川/選/占/鮮/閃/銑/銭/遷/践/賎/詮/薦/舛/腺/羨/箭/穿/旋/煽/煎/潜/染/洗/浅/泉/栴/栓/撰/扇/尖/専/宣/千/仙/箋/
せんい /遷移/繊維/
せんが /線画/
せんきょく /選曲/
せんけい /線型/
せんけつごう /線結合/
せんげん /宣言/
せんこう /先行/選考/専攻/
せんざい /潜在/
せんしゅ /選手/
せんしゅう /先週/
せんしゅけん /選手権/
せんしん /先進/
せんじつ /先日/
せんじょう /線状/
せんせい /先生/
せんそう /戦争/
せんたく /選択/洗濯/
せんたくし /選択肢/
せんだい /仙台/
せんだいし /仙台市/
せんち /糎/
せんちめーとる /糎/
せんちょう /線長/
せんちょうかいせき /線長解析/
せんてい /選定/
せんでん /宣伝/
せんとう /先頭/戦闘/銭湯/
せんにゅうかん /先入観/
せんにん /専任/
せんば /仙波/
せんぱい /先輩/
せんぱん /先般/
せんぷう /旋風/
せんべつ /選別/
せんぼく /泉北/
せんぽう /先方/
せんむ /専務/
せんめい /鮮明/
せんもん /専門/
せんもんか /専門家/
せんゆう /占有/
せんよう /専用/
せんようかいせん /専用回線/
せんようせん /専用線/
せんりゃく /戦略/
せんりょう /占領/
せんりんかく /線輪郭/
せんれん /洗練/
せんれんけつ /線連結/
せんろ /線路/
ぜ /是/
ぜい /税/脆/説/
ぜいきん /税金/
ぜいりし /税理士/
ぜっく /絶句/
ぜっしょく /絶食/
ぜったい /絶対/
ぜつ /絶/舌/
ぜつみょう /絶妙/
ぜに /銭/
ぜひ /是非/
ぜん /前/全/膳/繕/禅/然/漸/善/
ぜんいん /全員/
ぜんえい /全英/
ぜんかい /前回/
ぜんかく /全角/
ぜんかくかな /全角仮名/
ぜんがく /全学/全額/
ぜんき /前期/
ぜんこう /前項/
ぜんこく /全国/
ぜんこくたいかい /全国大会/
ぜんこくてき /全国的/
ぜんご /前後/
ぜんごさゆう /前後左右/
ぜんしゃ /前者/全社/
ぜんしゅう /全集/
ぜんしょう /前章/全称/
ぜんじつ /前日/
ぜんじゅつ /前述/
ぜんじゅんじょ /全順序/
ぜんじんるい /全人類/
ぜんせつ /前節/
ぜんぜん /全然/
ぜんたい /全体/
ぜんちきゅう /全地球/
ぜんちょう /全長/
ぜんてい /前提/
ぜんねん /前年/
ぜんねんど /前年度/
ぜんはん /前半/
ぜんぱん /全般/
ぜんぶ /全部/
ぜんぶん /全文/
ぜんぷく /全幅/
ぜんめつ /全滅/
ぜんめんてき /全面的/
ぜんりゃく /前略/
そ /組/鼠/遡/阻/訴/蘇/素/粗/租/祖/礎/疎/疏/狙/楚/曽/曾/措/岨/塑/噌/想/
そいんすう /素因数/
そいんすうぶんかい /素因数分解/
そう /騒/総/層/相/想/送/早/霜/鎗/遭/走/装/藻/蒼/葬/荘/草/聡/綜/糟/窓/痩/争/燥/漕/槽/槍/巣/曹/操/掻/挿/掃/捜/惣/匝/宋/爽/奏/壮/喪/倉/叢/双/創/僧/噪/宗/贈/
そうい /相違/相異/
そういてん /相異点/相違点/
そうおう /相応/
そうかい /総会/
そうかつ /総括/
そうかん /壮観/
そうき /早期/
そうきゅう /早急/
そうきん /送金/
そうぐう /遭遇/
そうこ /倉庫/
そうこう /走行/草稿/
そうご /相互/
そうごう /総合/綜合/
そうごうかがくぶ /総合科学部/
そうごうけんきゅう /総合研究/
そうさ /操作/走査/
そうさいん /操作員/
そうさく /創作/
そうし /創始/
そうししゃ /総支社/
そうしゃ /奏者/
そうしゅつ /送出/
そうしょう /総称/
そうしん /送信/
そうじ /掃除/
そうじゅ /送受/
そうじゅしん /送受信/
そうすう /総数/
そうそう /草々/早々/
そうぞう /想像/創造/
そうたい /相対/
そうだ /操舵/
そうだん /相談/
そうだんいん /相談員/
そうだんしょ /相談所/
そうち /装置/
そうちゃく /装着/
そうてい /想定/
そうでん /送電/
そうとう /相当/争闘/
そうにゅう /挿入/
そうび /装備/
そうふ /送付/
そうふさき /送付先/
そうほう /双方/
そうま /相馬/
そうむ /創夢/総務/
そうりつ /創立/
そうりょう /送料/
そうろう /候/
そえ /添/
そえだ /添田/
そが /蘇我/
そがい /阻害/
そく /足/側/速/息/即/測/束/捉/則/促/
そくざ /即座/
そくしん /促進/
そくせん /側線/
そくたつ /速達/
そくてい /測定/
そくど /速度/測度/
そくばく /束縛/
そくめん /側面/
そけつごう /疎結合/
そこ /底/
そこう /粗稿/
そしき /組織/
そしきぼうりょく /組織暴力/
そしきぼうりょくはんざいしゃ /組織暴力犯罪者/
そすう /素数/
そすうぶんかい /素数分解/
そち /措置/
そっき /測器/
そつ /率/卒/
そつぎょう /卒業/
そつけん /卒研/
そで /袖/
そと /外/
そとがわ /外側/
そね /曽根/
その /其/園/
そのた /その他/
そば /側/蕎麦/
そふ /祖父/
そぼ /祖母/
そぼう /粗暴/
そぼく /素朴/
そら /空/
そらいろ /空色/
それい /祖霊/
それがし /某/
そん /損/存/遜/村/尊/孫/
そんがい /損害/
そんけい /尊敬/
そんけいご /尊敬語/
そんざい /存在/
そんしつ /損失/
そんしょう /損傷/
そんしょうど /損傷度/
そんぞく /存続/
そんちょう /尊重/
ぞう /臓/贈/造/蔵/憎/増/像/象/三/雑/
ぞうか /増加/
ぞうかん /増刊/
ぞうき /臓器/
ぞうご /造語/
ぞうさつ /増刷/
ぞうせつ /増設/
ぞうせん /造船/
ぞうだい /増大/
ぞうぶん /増分/
ぞく /続/族/賊/属/俗/
ぞくご /俗語/
ぞくせい /属性/
ぞくせつ /俗説/
ぞくへん /続編/
ぞくほう /続報/
ぞん /存/
ぞんじ /存知/
ぞんぶん /存分/
ぞんめい /存命/
た /他/太/多/詑/汰/田/手/
たい /大/代/袋/体/隊/対/態/鯛/黛/逮/退/貸/苔/腿/胎/滞/泰/替/戴/怠/待/帯/岱/耐/堆/他意/太/台/
たいあん /大安/
たいい /大意/
たいおう /対応/
たいおん /体温/
たいかい /大会/
たいかく /体格/
たいかん /退官/
たいがい /大概/
たいがく /退学/
たいき /大気/
たいきゅう /耐久/
たいきゅうりょく /耐久力/
たいきょく /対極/
たいきん /大金/
たいく /体躯/
たいくつ /退屈/
たいけい /体系/体型/
たいけん /体験/
たいこう /対抗/
たいさ /大差/
たいさく /大作/対策/
たいざい /大罪/滞在/
たいし /大史/
たいしかん /大使館/
たいしつ /退室/
たいしゃ /退社/
たいしゃく /貸借/
たいしょ /対処/
たいしょう /対象/大将/対称/大賞/大正/対症/対照/
たいしょうせい /対称性/
たいしょうぶつ /対象物/
たいしょく /退職/
たいしん /耐震/
たいせい /態勢/体制/
たいせき /体積/退席/
たいせつ /大切/
たいせん /大戦/
たいちょう /体調/
たいてい /大抵/
たいでん /帯電/
たいとう /台東/
たいど /態度/
たいはく /太白/
たいひ /退避/対比/
たいふう /台風/
たいへん /大変/
たいまん /怠慢/
たいめん /対面/
たいやく /対訳/
たいよう /大要/太陽/
たいら /平/
たいりょう /大量/
たいわ /対話/
たえ /妙/
たえこ /妙子/
たか /鷹/高/隆/貴/孝/亨/
たかい /高井/
たかぎ /高木/
たかし /貴史/尚史/喬/
たかす /高須/
たかだ /高田/
たかの /高野/
たかのり /高徳/
たかはし /高橋/
たかふみ /貴文/
たかまつ /高松/
たかみ /高見/
たかやす /貴康/
たかやま /高山/
たかゆき /高之/
たから /宝/
たからだ /宝田/
たがじょう /多賀城/
たがわ /田川/
たき /瀧/滝/多岐/
たきうち /瀧内/
たきぎ /薪/
たく /鐸/託/琢/濯/沢/拓/択/托/宅/啄/卓/澤/度/
たくいつ /択一/
たくさん /沢山/
たくぼ /田窪/
たぐい /類/
たけ /茸/竹/武/丈/健/岳/
たけいち /武市/
たけうち /武内/竹内/
たけし /猛/武志/
たけだ /武田/竹田/
たけはら /竹原/
たけひさ /竹久/
たけやま /武山/
たこ /蛸/凧/
たこう /他校/
たこうしき /多項式/
たこうせい /他校生/
たしゃ /他社/
たしょう /多少/
たじげん /多次元/
たじま /田島/
たじゅう /多重/
たじゅうしょり /多重処理/
たじゅうせきぶん /多重積分/
たすう /多数/
たぜい /多勢/
たそう /多相/
たそうがた /多相型/
たそがれ /黄昏/
たたみ /疊/畳/
ただ /唯/只/忠/
ただあき /理顕/
ただい /多大/
ただし /正/
たち /館/達/立/
たちぎ /立木/
たちば /立場/
たちまち /立町/
たっきゅうびん /宅急便/
たっしゃ /達者/
たっせい /達成/
たつ /辰/達/龍/竜/
たつた /龍田/
たつみ /巽/
たて /竪/│/縦/立/楯/
たていし /立石/
たてぼう /縦棒/
たてもの /建物/
たどころ /田所/
たな /棚/
たなか /田中/
たなばた /七夕/
たに /谷/
たにやま /谷山/
たにん /他人/
たぬき /狸/
たね /種/
たば /束/
たばら /田原/
たび /度/旅/
たびたび /度々/
たぶん /多分/
たぼう /多忙/
たま /玉/弾/多摩/球/霊/
たまがわ /多摩川/玉川/
たまき /玉木/
たまご /卵/
たましい /魂/
たましま /玉島/
たまち /田町/
たまねぎ /玉葱/
たみ /民/
たむら /田村/
ため /為/
ためいき /溜息/
たよう /多様/
たようがた /多様型/
たら /鱈/
たる /樽/
たろう /太郎/太朗/
たわら /俵/
たん /単/端/反/鍛/誕/蛋/胆/耽/綻/箪/短/炭/湛/淡/歎/旦/探/担/坦/嘆/丹/
たんい /単位/
たんいげん /単位元/
たんいつ /単一/
たんいつか /単一化/
たんき /短期/
たんきょり /短距離/
たんけん /探検/
たんこう /単項/
たんこうぼん /単行本/
たんご /単語/
たんさ /探査/
たんさき /探査機/
たんさく /探索/
たんしゃ /単写/
たんしゅく /短縮/
たんしょ /短所/
たんじゅん /単純/
たんじょう /誕生/
たんじょうび /誕生日/
たんす /箪笥/
たんすう /単数/
たんち /探知/
たんちょう /単調/短調/
たんとう /担当/
たんとうしゃ /担当者/
たんどく /単独/
たんにん /担任/
たんば /丹羽/
たんぱく /蛋白/
たんぺん /短編/
たんまつ /端末/
たんまつまど /端末窓/
たんらく /短絡/
だ /騨/駄/陀/楕/舵/柁/打/惰/妥/堕/唾/田/朶/蛇/
だい /大/第/内/代/台/題/醍/弟/
だいいち /第一/
だいがく /大学/
だいがくいん /大学院/
だいがくいんせい /大学院生/
だいがくせい /大学生/
だいがくない /大学内/
だいきぼ /大規模/
だいきん /代金/
だいこう /代行/
だいこん /大根/
だいご /醍醐/第五/
だいさん /第三/
だいさんけいひん /第三京浜/
だいさんしゃ /第三者/
だいさんせい /大賛成/
だいしょう /代償/
だいじ /大事/
だいじょうぶ /大丈夫/
だいすう /台数/代数/
だいぜんてい /大前提/
だいたい /大体/
だいたん /大胆/
だいち /大地/
だいに /第二/
だいにゅう /代入/
だいにゅうぶん /代入文/
だいひゃっか /大百科/
だいひょう /代表/
だいひょうしゃ /代表者/
だいひょうてき /代表的/
だいぶぶん /大部分/
だいめい /題名/
だいもく /題目/
だいよう /代用/
だいり /代理/
だいりてん /代理店/
だえん /楕円/
だく /諾/濁/
だくおん /濁音/
だしん /打診/
だそく /蛇足/
だち /達/
だっ /脱/
だつ /奪/脱/
だて /館/
だとう /妥当/
だな /棚/
だめ /駄目/
だれ /誰/
だん /男/段/断/弾/暖/談/檀/壇/団/
だんいん /団員/
だんかい /段階/
だんき /暖機/
だんけつ /団結/
だんし /男子/
だんすう /弾数/
だんそう /断層/
だんたい /団体/
だんだん /段々/
だんち /団地/
だんぼう /暖房/
だんめん /断面/
だんらく /段落/
だんわ /談話/
だんわかい /談話会/
ち /値/恥/地/知/茅/馳/遅/蜘/致/置/稚/痴/池/智/弛/血/千/質/乳/治/
ちい /地位/
ちいき /地域/
ちえ /知恵/
ちえん /遅延/
ちか /地下/近/
ちかく /地殻/
ちかごろ /近頃/
ちかてつ /地下鉄/
ちから /力/
ちがく /地学/
ちきゅう /地球/
ちきゅうじん /地球人/
ちきゅうれんぽう /地球連邦/
ちく /逐/蓄/筑/竹/畜/築/地区/
ちくきょう /地区協/
ちくさ /千種/
ちくさく /千種区/
ちくじ /逐次/
ちくせき /蓄積/
ちくりん /竹林/
ちこく /遅刻/
ちしき /知識/
ちじき /地磁気/
ちず /地図/
ちずこ /千寿子/
ちせい /知性/
ちだ /千田/
ちち /父/乳/
ちつ /窒/秩/
ちつじょ /秩序/
ちてき /知的/
ちてきしょり /知的処理/
ちてん /地点/
ちとせ /千歳/
ちなつ /千夏/
ちのう /知能/
ちのうはん /知能犯/
ちのけ /血の気/
ちはる /千春/
ちば /千葉/
ちばけん /千葉県/
ちほう /地方/
ちまた /巷/
ちめい /地名/
ちゃ /茶/
ちゃく /着/嫡/
ちゃくしん /着信/
ちゃくそう /着想/
ちゃくにん /着任/
ちゃくもく /着目/
ちゃくりく /着陸/
ちゃだい /茶代/
ちゃっかん /着艦/
ちゅう /中/注/昼/虫/宙/駐/鋳/酎/註/衷/柱/抽/忠/仲/
ちゅうい /注意/
ちゅういほう /注意報/
ちゅうおう /中央/
ちゅうおうしょりそうち /中央処理装置/
ちゅうか /中華/
ちゅうかがい /中華街/
ちゅうかく /中核/
ちゅうかん /中間/
ちゅうがく /中学/
ちゅうがっこう /中学校/
ちゅうきゅう /中級/
ちゅうきょう /中京/
ちゅうきょり /中距離/
ちゅうぎ /忠義/
ちゅうけい /中継/
ちゅうこ /中古/
ちゅうごく /中国/
ちゅうし /中止/
ちゅうしゃ /駐車/
ちゅうしゃく /註釈/注釈/
ちゅうしゃじょう /駐車場/
ちゅうしゅつ /抽出/
ちゅうしょう /抽象/
ちゅうしょうか /抽象化/
ちゅうしょうきぎょう /中小企業/
ちゅうしょうつい /抽象対/
ちゅうしょうてき /抽象的/
ちゅうしょく /昼食/
ちゅうしん /中心/
ちゅうじゅん /中旬/
ちゅうじょう /中條/
ちゅうだん /中断/
ちゅうと /中途/
ちゅうとはんぱ /中途半端/
ちゅうどく /中毒/
ちゅうばち /中鉢/
ちゅうび /中火/
ちゅうぶ /中部/
ちゅうもく /注目/
ちゅうもん /注文/
ちゅうりつ /中立/
ちゅうりゃく /中略/
ちょ /貯/著/苧/猪/瀦/樗/緒/
ちょう /長/超/肇/弔/重/帳/調/張/鳥/頂/銚/跳/諜/蝶/腸/脹/聴/眺/町/牒/潮/朝/暢/挑/懲/徴/彫/庁/帖/寵/喋/凋/兆/丁/嘲/澄/
ちょうおん /長音/
ちょうか /超過/
ちょうかく /聴覚/
ちょうかん /長官/
ちょうき /長期/
ちょうきょり /長距離/
ちょうきん /超勤/
ちょうこう /徴候/聴講/
ちょうさ /調査/
ちょうし /調子/銚子/
ちょうしゃ /庁舎/
ちょうしゅう /徴収/長洲/
ちょうしょ /調書/長所/
ちょうしょう /嘲笑/
ちょうじかん /長時間/
ちょうじゅん /超準/
ちょうじょう /長上/
ちょうじょうしゃ /長上者/
ちょうせい /調整/
ちょうせつ /調節/
ちょうせん /挑戦/朝鮮/
ちょうたん /長短/
ちょうちょう /長調/
ちょうてん /頂点/
ちょうでん /弔電/
ちょうど /丁度/
ちょうはつ /長髪/
ちょうひょう /帳表/帳票/
ちょうふ /調布/
ちょうふく /重複/
ちょうへい /徴兵/
ちょうほう /重宝/
ちょうほうけい /長方形/
ちょうめ /丁目/
ちょうめい /町名/
ちょきん /貯金/
ちょく /直/捗/勅/
ちょくげき /直撃/
ちょくご /直後/
ちょくせき /直積/
ちょくせつ /直接/
ちょくせつてき /直接的/
ちょくせん /直線/
ちょくぜん /直前/
ちょくつう /直通/
ちょくめん /直面/
ちょくれつ /直列/
ちょくわ /直和/
ちょさく /著作/
ちょさくけん /著作権/
ちょさくけんほう /著作権法/
ちょさくしゃ /著作者/
ちょさくぶつ /著作物/
ちょしゃ /著者/
ちょしゃめい /著者名/
ちょしょ /著書/
ちょすい /貯水/
ちょすいりょう /貯水量/
ちょちく /貯蓄/
ちょっかん /直観/直感/
ちょっけつ /直結/
ちょっこう /直交/
ちょっこうせい /直交性/
ちょめい /著名/
ちよだ /千代田/
ちよだく /千代田区/
ちり /地理/
ちん /椿/陳/鎮/賃/珍/沈/朕/
ちんぎん /賃金/
ぢめん /地面/
つ /津/都/付/
つい /対/鎚/追/槌/椎/墜/
ついか /追加/
ついきゅう /追及/追求/
ついしん /追伸/
ついたち /一日/
ついび /追尾/
ついびそうち /追尾装置/
つう /通/痛/
つううん /通運/
つうか /通過/
つうかい /痛快/
つうがく /通学/
つうきん /通勤/
つうけん /通研/
つうさん /通産/
つうしょう /通称/
つうしん /通信/
つうしんこうがっか /通信工学科/
つうしんほうしき /通信方式/
つうじょう /通常/
つうち /通知/
つうほう /通報/
つうやく /通訳/
つうよう /通用/痛痒/
つか /塚/
つかいかた /使い方/
つかいがって /使い勝手/
つかもと /塚本/
つが /栂/
つき /月/付/槻/築/
つきじ /築地/
つぎ /次/
つぎつぎ /次々/
つく /筑/
つくえ /机/
つくだ /佃/
つくば /筑波/
つくばだい /筑波大/
つくばだいがく /筑波大学/
つくりかた /作り方/
つくりて /作り手/
つけかた /付け方/
つげ /柘/柘植/
つごう /都合/
つしま /津島/
つじ /辻/
つじい /辻井/
つた /蔦/
つだ /津田/
つだじゅく /津田塾/
つだぬま /津田沼/
つち /土/
つちうら /土浦/
つちや /土屋/
つつ /砲/筒/
つつみ /堤/
つづみ /鼓/
つとむ /務/勉/
つど /都度/
つどい /集/
つな /綱/
つね /常/
つねじ /常次/
つの /角/
つば /鍔/
つばき /椿/
つばさ /翼/
つぶ /粒/
つぼ /壷/坪/
つま /妻/嬬/
つみ /罪/
つみき /積木/
つみたて /積立/
つむ /錘/
つむぎ /紬/
つむじかぜ /旋風/
つめ /爪/詰/
つゆ /露/梅雨/
つよき /強気/
つら /面/
つり /釣/吊/
つる /鶴/弦/蔓/
つるぎ /剣/
づけ /付/
づめ /詰/
て /手/
てい /定/袋/程/鼎/釘/鄭/邸/逓/蹄/諦/訂/艇/締/禎/碇/汀/梯/提/挺/抵/悌/弟/廷/庭/底/帝/堤/呈/貞/剃/偵/停/低/亭/体/丁/
ていあん /提案/
ていいん /定員/
ていおん /低温/
ていか /定価/低下/
ていき /定期/提起/
ていきょう /提供/
ていぎ /定義/
ていぎいき /定義域/
ていけい /提携/
ていげん /提言/
ていこく /帝国/
ていし /停止/
ていしき /定式/
ていしきか /定式化/
ていしせい /停止性/
ていしゅつ /提出/
ていしょう /提唱/
ていじ /提示/定時/
ていすう /定数/
ていせい /訂正/定性/
ていせいてき /定性的/
ていそく /低速/
ていでん /停電/
ていど /程度/
ていねい /丁寧/
ていり /定理/
ていりつ /定立/
ていりょう /定量/
ていれい /定例/
てかず /手数/
てがみ /手紙/
てがる /手軽/
てき /的/敵/鏑/適/笛/滴/擢/摘/
てきおう /適応/
てきかく /的確/適格/
てきかん /敵艦/
てきぎ /適宜/
てきごう /適合/
てきせつ /適切/
てきとう /適当/
てきど /適度/
てきにん /適任/
てきよう /適用/
てぎわ /手際/
てくび /手首/
てごろ /手頃/
てさぎょう /手作業/
てじゅん /手順/
てすう /手数/
てすうりょう /手数料/
てちょう /手帳/
てっこつ /鉄骨/
てってい /徹底/
てつ /鉄/迭/轍/撤/徹/哲/鐵/
てつお /哲雄/
てつがく /哲学/
てつがくしゃ /哲学者/
てつどう /鉄道/
てつや /徹夜/哲弥/
てはい /手配/
てびき /手引/
てふだ /手札/
てほん /手本/
てま /手間/
てまえ /手前/
てもと /手元/
てら /寺/
てらした /寺下/
てる /輝/照/
てるい /照井/
てるお /輝男/
てれや /照れ屋/
てん /点/店/天/転/顛/甜/纏/添/展/填/典/・/．/殿/貼/
てんい /転移/
てんいん /店員/
てんか /転嫁/点火/天下/
てんかい /展開/
てんかん /転換/
てんき /天気/
てんきん /転勤/
てんくう /天空/
てんけいてき /典型的/
てんけつごう /点結合/
てんけん /点検/
てんこう /転校/天候/
てんこうせい /転校生/
てんごく /天国/
てんさい /転載/天才/
てんさく /添削/
てんし /天使/
てんしゅうごう /点集合/
てんしゅつ /転出/
てんしゅつこう /転出校/
てんじ /展示/
てんじん /天神/
てんそう /転送/
てんつい /点対/
てんてん /転々/・・・/…/‥/
てんとう /店頭/点灯/転倒/
てんにゅう /転入/
てんにゅうせい /転入生/
てんにん /転任/
てんねん /天然/
てんのう /天皇/
てんのうだい /天王台/
てんぱん /典範/
てんぷ /添付/
てんぼう /展望/
てんもん /天文/
てんり /天理/
てんれつ /点列/
てんれんけつ /点連結/
で /出/弟/
でい /泥/
でいりぐち /出入口/
でき /出来/溺/
できごと /出来事/
でぐち /出口/
でこぼこ /凸凹/
でし /弟子/
でばん /出番/
でん /電/田/澱/殿/伝/
でんえんとしせん /田園都市線/
でんか /電化/殿下/
でんかせいひん /電化製品/
でんき /電気/電機/伝記/電器/
でんきけい /電気系/
でんきけいそくがく /電気計測学/
でんきこうがく /電気工学/
でんきこうがくか /電気工学科/
でんきこうがっか /電気工学科/
でんきつうしんけんきゅうしょ /電気通信研究所/
でんきつうしんけんきゅうじょ /電気通信研究所/
でんげん /電源/
でんごん /伝言/
でんごんばん /伝言板/
でんさん /電算/
でんさんき /電算機/
でんし /電子/
でんしけいさん /電子計算/
でんしこうがっか /電子工学科/
でんしじょうほうけい /電子情報系/
でんしぶつり /電子物理/
でんしゃ /電車/
でんしょく /電飾/
でんしん /電信/
でんしんでんわ /電信電話/
でんそう /電装/伝送/
でんそうけん /電総研/
でんたく /電卓/
でんたつ /伝達/
でんつう /電通/
でんつうだい /電通大/
でんとう /伝統/
でんぱ /電波/
でんぱけん /電波研/
でんぴょう /伝票/
でんまちょう /伝馬町/
でんりゅう /電流/
でんりょく /電力/
でんわ /電話/
でんわだい /電話代/
でんわばんごう /電話番号/
と /土/十/登/砺/砥/鍍/都/途/賭/菟/渡/杜/斗/徒/屠/妬/塗/堵/吐/兎/戸/富/人/図/度/
とい /問/
とう /等/頭/当/討/董/東/投/冬/盗/闘/騰/陶/鐙/透/逃/踏/豆/謄/藤/蕩/到/統/糖/筒/答/祷/痘/燈/灯/涛/湯/淘/棟/梼/桃/搭/悼/嶋/島/宕/套/塘/塔/唐/刀/凍/党/倒/父/道/納/登/読/
とういつ /統一/
とういつか /統一化/
とうえい /投影/
とうか /十日/
とうかい /東海/
とうかいどう /東海道/
とうかつ /統轄/
とうかんかく /等間隔/
とうがい /当該/
とうき /冬季/冬期/
とうきゅう /東急/
とうきょう /東京/
とうきょうきんぺん /東京近辺/
とうきょうこうぎょうだいがく /東京工業大学/
とうきょうだいがく /東京大学/
とうきょうと /東京都/
とうきょうほうめん /東京方面/
とうけい /統計/
とうけいじょうほう /統計情報/
とうけいてき /統計的/
とうげ /峠/
とうこう /投稿/等高/
とうこうしゃ /投稿者/
とうこうせん /等高線/
とうこうだい /東工大/
とうごう /統合/等号/
とうごうか /統合化/
とうさい /搭載/
とうさんさい /唐三彩/
とうざ /当座/
とうざい /東西/
とうしき /等式/
とうしば /東芝/
とうしゃ /投射/
とうしょ /当初/
とうしょう /闘将/
とうじ /当時/
とうじしゃ /当事者/
とうじつ /当日/
とうじょう /登場/
とうぜん /当然/
とうたつ /到達/
とうだい /東大/
とうち /当地/
とうちゃく /到着/
とうちょう /盗聴/
とうにん /当人/
とうばん /当番/
とうひょう /投票/
とうふ /豆腐/
とうぶん /当分/
とうほう /当方/
とうほく /東北/
とうほくししゃ /東北支社/
とうほくだい /東北大/
とうほくだいがく /東北大学/
とうほん /謄本/
とうめい /東名/透明/
とうめいせい /透明性/
とうめん /当面/
とうよう /東洋/東陽/
とうようちょう /東陽町/
とうよこ /東横/
とうらい /到来/
とうろく /登録/
とうろん /討論/闘論/
とお /十/
とおり /通/
とおる /徹/透/
とかい /都会/
とき /時/鴇/
ときどき /時々/
ときわ /常盤/
とく /特/得/篤/禿/督/涜/徳/匿/読/
とくい /得意/
とくがわ /徳川/
とくぎ /特技/
とくさつ /特撮/
とくしつ /特質/
とくしま /徳島/
とくしゅ /特殊/
とくしゅう /特集/
とくしゅうごう /特集号/
とくしょく /特色/
とくせい /特性/
とくだ /徳田/
とくちょう /特徴/特長/
とくてい /特定/
とくてん /得点/特典/
とくなが /徳永/
とくはら /徳原/
とくばん /特番/
とくべつ /特別/
とくゆう /特有/
とくろん /特論/
とけい /時計/
とけつ /吐血/
とこ /常/床/
ところ /所/
とざん /登山/
とし /年/歳/利/都市/俊/寿/捷/敏/
としあき /利明/
としお /利夫/
としたか /敏隆/
としはる /季栄/
としひさ /俊久/
としま /豊島/
としまく /豊島区/
としゆき /利之/
としょ /図書/
としょかん /図書館/
としょかんじょうほうだいがく /図書館情報大学/
とせ /歳/
とたん /途端/
とだ /戸田/
とち /土地/橡/栃/
とちゅう /途中/
とっきょ /特許/
とっけん /特権/
とっしん /突進/
とっとり /鳥取/
とっぴ /突飛/
とつ /突/凸/
とつぜん /突然/
ととう /徒党/
とど /椴/
とどうふけん /都道府県/
とない /都内/
となり /隣/
との /殿/
とび /鳶/
とびら /扉/
とま /苫/
とみ /富/冨/
とみおか /富岡/
とむら /戸村/
とも /共/友/知/智/供/
ともお /友雄/
ともこ /知子/
ともだち /友達/
ともみ /知美/
とやま /富山/
とよ /豊/
とよなか /豊中/
とよはし /豊橋/
とら /寅/虎/
とらい /渡来/
とらのもん /虎の門/
とり /酉/鳥/
とりしまりやく /取締役/
とりつ /都立/
とろ /瀞/
とん /豚/頓/遁/沌/敦/惇/屯/噸/団/問/
ど /度/奴/土/怒/努/
どあい /度合/
どう /道/動/瞳/導/同/銅/萄/胴/童/洞/撞/憧/堂/働/藤/
どうい /同意/
どういつ /同一/
どういつし /同一視/
どういん /動員/
どうかん /同感/
どうき /同期/動機/
どうぎ /同義/
どうくん /同君/
どうぐ /道具/
どうけい /同型/同形/
どうげんざか /道玄坂/
どうこう /瞳孔/動向/同行/
どうさ /動作/
どうさつ /洞察/
どうし /動詞/同士/同志/
どうしゃ /同社/
どうしゅつ /導出/
どうじ /同時/童子/
どうじく /同軸/
どうじつ /同日/
どうじょう /同乗/同上/同情/
どうじょうしゃ /同乗者/
どうじん /同人/
どうじんし /同人誌/
どうせい /同姓/
どうせいどうめい /同姓同名/
どうせき /同席/
どうそう /同窓/
どうそうかい /同窓会/
どうたい /導体/
どうだん /道断/
どうち /同値/
どうちかんけい /同値関係/
どうちせい /同値性/
どうちょう /同調/
どうてき /動的/
どうとう /同等/
どうにゅう /導入/
どうねん /同年/
どうねんれい /同年齢/
どうふう /同封/
どうぶつ /動物/
どうぶん /同文/
どうほう /同報/
どうめい /同名/
どうよう /同様/
どうり /道理/
どうりょう /同僚/
どうるい /同類/
どうろ /道路/
どがいし /度外視/
どきょう /度胸/
どく /毒/読/独/
どくがく /独学/
どくしゃ /読者/
どくしゅう /独習/
どくしょ /読書/
どくしん /独身/
どくじ /独自/
どくせん /独占/
どくそう /独創/
どくだん /独断/
どくとく /独特/
どくりつ /独立/
どくりょく /独力/
どこ /何処/
どしゃ /土砂/
どだい /土台/
どて /土手/
どにち /土日/
どの /殿/
どぼく /土木/
どよう /土曜/
どようび /土曜日/
どりょく /努力/
どろ /泥/
どろつち /泥土/
どん /鈍/曇/呑/貪/丼/
どんき /鈍器/
どんてん /曇天/
どんよく /貪欲/
な /名/那/奈/南/菜/納/
ない /内/無/
ないがい /内外/
ないき /内記/
ないしょ /内緒/
ないせん /内線/
ないぞう /内臓/内蔵/
ないち /内地/
ないてい /内定/
ないぶ /内部/
ないぶしりょう /内部資料/
ないぶひょうげん /内部表現/
ないぶへんすう /内部変数/
ないよう /内容/
ないようてき /内容的/
ないりん /内輪/
なえ /苗/
なえば /苗場/
なお /直/尚/
なおた /直田/
なおと /直人/
なおゆき /直幸/
なか /中/仲/
なかお /中尾/
なかがわ /中川/
なかごろ /中頃/
なかしま /中島/
なかじま /中島/
なかず /中頭/
なかた /中田/
なかてん /・/
なかにし /中西/
なかの /中野/
なかはら /中原/
なかま /仲間/
なかまどうし /仲間同士/
なかみ /中身/
なかむら /中村/
なかやま /中山/
なが /長/永/
ながい /永井/
ながお /長尾/
ながおか /長岡/
ながさき /長崎/
ながさわ /永沢/
ながしま /長島/
ながた /永田/
ながなが /長々/
ながの /長野/永野/
ながまち /長町/
ながら /乍/
ながれず /流れ図/
なぎ /凪/薙/
なぎさ /渚/
なぐ /薙/
なごや /名古屋/
なごやし /名古屋市/
なごやだい /名古屋大/
なごやだいがく /名古屋大学/
なさけ /情/
なし /梨/
なす /那須/
なぜ /何故/
なぞ /謎/
なだ /灘/
なっ /納/
なっとく /納得/
なつ /夏/捺/
なつじかん /夏時間/
など /等/
なな /七/
ななえ /七重/
ななくさ /七草/
なに /何/
なにげ /何気/
なべ /鍋/
なま /生/
なまえ /名前/
なまり /鉛/
なみ /波/並/奈美/〜/
なみだ /涙/泪/
なら /奈良/楢/
なり /成/
なりさわ /成沢/
なりた /成田/
なわ /縄/苗/
なわて /畷/
なん /何/難/南/軟/楠/納/男/
なんい /難易/
なんいど /難易度/
なんかい /何回/南海/
なんきょく /南極/
なんぎ /難儀/
なんぎょう /何行/
なんこうだい /南光台/
なんざん /南山/
なんしょ /難所/
なんじ /汝/何時/
なんじかん /何時間/
なんだい /何台/
なんつう /何通/
なんど /何度/
なんにち /何日/
なんにん /何人/
なんねん /何年/
なんの /南野/
なんば /難波/
なんばん /何番/
なんぷん /何分/
なんまい /何枚/
なんもん /難問/
に /二/迩/弐/尼/荷/煮/児/
にい /新/兄/
にいがた /新潟/
にかい /二階/
にがて /苦手/
にく /肉/
にこう /二項/
にごうかん /二号館/
にし /西/
にしかど /西門/
にしかわ /西川/
にしき /錦/
にしだ /西田/
にしな /仁科/
にしはら /西原/
にしふなばし /西船橋/
にしむら /西村/
にしゃたくいつ /二者択一/
にしやま /西山/
にしんほう /２進法/
にじ /虹/二次/
にじかい /二次会/
にじゅう /廿/
にせ /偽/
にち /日/
にちじ /日時/
にちじょう /日常/
にちじょうさはんじ /日常茶飯事/
にちべい /日米/
にちや /日夜/
にちょうめ /二丁目/
にちよう /日曜/
にちようび /日曜日/
にっかん /日刊/
にっかんこうぎょう /日刊工業/
にっき /日記/
にっけい /日経/
にっしん /日清/日進/
にっすう /日数/
にっちゅう /日中/
にってい /日程/
にってつ /日鉄/
にっとう /日当/
にっぽん /日本/
にど /二度/
にどめ /二度目/
にねん /二年/
にはく /二泊/二拍/
にばい /二倍/
にばいす /二杯酢/
にぶんぎ /二分木/
にほん /日本/二本/
にほんがわ /日本側/
にほんこくない /日本国内/
にほんご /日本語/
にほんごか /日本語化/
にほんごにゅうりょく /日本語入力/
にほんごにゅうりょくきこう /日本語入力機構/
にほんごやく /日本語訳/
にほんしゅ /日本酒/
にほんじん /日本人/
にほんだいら /日本平/
にほんばし /日本橋/
にほんりょうり /日本料理/
にもつ /荷物/
にもの /煮物/
にゃく /若/
にゅう /入/乳/
にゅういん /入院/
にゅうかい /入会/
にゅうがく /入学/
にゅうしゃ /入社/
にゅうしゅ /入手/
にゅうしゅかのう /入手可能/
にゅうしゅつりょく /入出力/
にゅうじょう /入場/
にゅうでん /入電/
にゅうもん /入門/
にゅうりょく /入力/
にょ /女/如/
にょう /尿/女/
にら /韮/
にわ /庭/
にわとり /鶏/
にん /人/任/妊/忍/刃/認/
にんい /任意/
にんき /人気/任期/
にんぎょう /人形/
にんげん /人間/
にんしき /認識/
にんじゃ /忍者/
にんずう /人数/
にんち /認知/
にんてい /認定/
にんむ /任務/
にんめ /人目/
ぬ /奴/怒/
ぬか /糠/
ぬき /貫/
ぬし /主/
ぬの /布/
ぬま /沼/
ぬまず /沼津/
ね /音/値/寝/根/祢/禰/
ねい /寧/祢/禰/
ねうち /値打/
ねぎ /葱/
ねぎし /根岸/
ねこ /猫/
ねこか /猫科/
ねだん /値段/
ねっとう /熱湯/
ねつ /熱/
ねつい /熱意/
ねぼう /寝坊/
ねもと /根本/
ねやがわ /寝屋川/
ねり /練/
ねりま /練馬/
ねん /年/念/粘/燃/撚/捻/然/
ねんかん /年間/
ねんがっぴ /年月日/
ねんきゅう /年休/
ねんし /年始/
ねんしょう /年少/燃焼/
ねんじゅう /年中/
ねんせい /年生/
ねんだい /年代/
ねんちょう /年長/
ねんとう /念頭/
ねんど /年度/
ねんない /年内/
ねんばん /年版/
ねんぴ /燃費/
ねんまえ /年前/
ねんまつ /年末/
ねんりょう /燃料/
ねんりょうひ /燃料費/
ねんれい /年齢/
の /埜/之/廼/乃/野/濃/
のう /農/膿/脳/能/納/濃/悩/嚢/王/皇/
のうがくぶ /農学部/
のうき /農機/
のうぎょう /農業/
のうこうだい /農工大/
のうそん /農村/
のうど /濃度/
のうにゅう /納入/
のうひん /納品/
のうひんけつ /脳貧血/
のうひんしょ /納品書/
のうりょく /能力/
のき /軒/
のぐち /野口/
のした /野下/
のじま /野島/
のち /後/
のとせん /能登線/
のはら /野原/
のぶ /信/伸/宣/
のぶお /信夫/信男/
のぶひろ /伸浩/信寛/
のぼる /昇/
のみ /蚤/
のみかい /飲み会/
のむら /野村/
のり /糊/法/紀/則/典/憲/徳/範/
のりお /典夫/徳雄/
のりこ /範子/典子/法子/
のりひさ /則久/
のりゆき /範幸/
は /破/葉/歯/波/端/琶/派/杷/覇/播/把/巴/羽/刃/
はあく /把握/
はい /背/配/輩/肺/牌/盃/杯/敗/排/拝/廃/俳/灰/
はいいろ /灰色/
はいけい /背景/拝啓/
はいけん /拝見/
はいご /背後/
はいし /廃止/
はいじょ /排除/
はいせん /配線/
はいそう /配送/
はいぞく /配属/
はいた /排他/
はいたつ /配達/
はいち /配置/
はいちゅうりつ /排中律/
はいふ /配布/
はいふはんい /配布範囲/
はいふほうほう /配布方法/
はいぶん /配分/
はいぼく /敗北/
はいり /背理/
はいりほう /背理法/
はいりょ /配慮/
はいれつ /配列/
はえ /蝿/
はか /墓/
はかい /破壊/
はかいてき /破壊的/
はかいりょく /破壊力/
はかく /破格/
はかせ /博士/
はかせかてい /博士課程/
はかま /袴/
はかり /秤/
はがね /鋼/
はき /破棄/
はぎ /萩/矧/
はぎや /萩谷/
はく /泊/白/薄/迫/舶/粕/箔/柏/拍/博/剥/伯/珀/
はくい /白衣/
はくがい /迫害/
はくさん /白山/
はくし /博士/
はくしかてい /博士課程/
はくしゃく /伯爵/
はくじょう /白状/薄情/
はくじん /白人/
はくぶつかん /博物館/
はくりょく /迫力/
はぐろ /羽黒/
はけん /派遣/
はこ /箱/函/
はこざき /箱崎/
はこだて /函館/
はこね /箱根/
はさん /破産/
はざま /硲/
はし /箸/橋/端/
はしだ /橋田/
はしら /柱/
はじ /恥/
はじめ /肇/一/
はす /蓮/
はず /筈/
はずれ /外/
はせがわ /長谷川/
はぜ /櫨/
はた /幡/畑/旗/機/端/
はたけ /畠/畑/
はたん /破綻/
はだ /肌/
はだか /裸/
はち /鉢/八/
はっ /法/
はっかん /発刊/
はっき /発揮/
はっきょう /発狂/
はっくつ /発掘/
はっけい /八景/
はっけん /発見/
はっこう /発行/発酵/
はっこうねん /発行年/
はっさん /発散/
はっしゃ /発射/
はっしょう /発祥/
はっしん /発信/
はっしんび /発信日/
はっせい /発生/
はっせいほう /発生法/
はっそう /発送/発想/
はったつ /発達/
はっちゅう /発注/
はってん /発展/
はっぴゃく /八百/
はっぴょう /発表/
はっぴょうかい /発表会/
はっぴょうしゃ /発表者/
はっぴょうないよう /発表内容/
はつ /髪/初/発/醗/溌/
はつおん /発音/
はつげん /発言/
はつさわ /初沢/
はつでん /発電/
はつでんしょ /発電所/
はつに /初荷/
はつばい /発売/
はつひので /初日の出/
はつほん /発本/
はつめい /発明/
はつもうで /初詣/
はつゆめ /初夢/
はてな /？/
はで /派手/
はと /鳩/
はな /花/鼻/華/
はないずみ /花泉/
はなし /話/噺/
はなたば /花束/
はなび /花火/
はなもじ /花文字/
はなよめ /花嫁/
はなわ /塙/
はね /羽/羽根/
はねだ /羽田/
はは /母/
ははおや /母親/
はば /幅/
はへん /破片/
はま /浜/
はまかわ /浜川/
はまぐり /蛤/
はまだ /浜田/
はままつ /浜松/
はままつし /浜松市/
はもの /刃物/
はもん /波紋/
はや /早/
はやかわぶんこ /早川文庫/
はやし /林/
はやばや /早々/
はやぶさ /隼/
はやめ /早目/
はやり /流行/
はら /腹/原/
はらだ /原田/
はらん /波乱/
はり /張/針/
はる /春/治/
はるか /遥/
はるき /春木/
はん /版/半/坂/判/反/飯/頒/煩/釆/範/販/藩/般/繁/畔/班/犯/汎/氾/板/斑/搬/帆/叛/伴/凡/
はんい /範囲/
はんえい /反映/
はんかく /半角/
はんかくかたかな /半角片仮名/
はんかくかな /半角仮名/
はんがく /半額/
はんきゅう /阪急/
はんきょう /反響/
はんざい /犯罪/
はんざいしゃ /犯罪者/
はんしゃ /反射/
はんしゃてき /反射的/
はんしょく /繁殖/
はんしょくち /繁殖地/
はんしん /阪神/
はんせい /反省/
はんせいかい /反省会/
はんたい /反対/
はんだ /半田/
はんだい /阪大/
はんだん /判断/
はんてい /判定/
はんていかいろ /判定回路/
はんていかのう /判定可能/
はんてん /反転/
はんとし /半年/
はんどうたい /半導体/
はんにん /犯人/
はんのう /反応/
はんばい /販売/
はんばいてん /販売店/
はんぱ /半端/
はんぶん /半分/
はんぷく /反復/
はんべつ /判別/
はんめい /判明/
はんめん /反面/
はんよう /汎用/
はんようき /汎用機/
はんようてき /汎用的/
はんらん /氾濫/
はんろん /反論/
ば /場/馬/芭/罵/婆/羽/
ばあい /場合/
ばい /倍/陪/賠/売/買/狽/煤/楳/梅/媒/培/
ばいう /梅雨/
ばいかい /媒介/
ばいかく /倍角/
ばいすう /倍数/
ばいたい /媒体/
ばいばい /売買/
ばか /馬鹿/
ばく /麦/駁/莫/縛/爆/漠/曝/獏/博/暴/幕/
ばくしょう /爆笑/
ばくぜん /漠然/
ばくだい /莫大/
ばくは /爆破/
ばくはつ /爆発/
ばくはつてき /爆発的/
ばし /橋/
ばしょ /場所/
ばせい /罵声/
ばち /罰/
ばっすい /抜粋/
ばつ /罰/閥/筏/抜/伐/末/×/
ばめん /場面/
ばん /版/番/万/判/蛮/蕃/磐/盤/晩/挽/坂/伴/板/
ばんがい /番外/
ばんぐみ /番組/
ばんこく /万国/
ばんごう /番号/
ばんしょう /万障/
ばんそう /伴奏/
ばんち /番地/
ばんのう /万能/
ばんめ /番目/
ばんり /万里/
ぱ /波/破/
ぱん /版/
ひ /日/彼/比/扉/火/陽/費/樋/飛/非/避/誹/被/肥/罷/緋/秘/碑/皮/疲/泌/斐/披/批/悲/庇/妃/否/卑/匪/痺/灯/氷/簸/
ひいらぎ /柊/
ひえ /稗/
ひかかい /非可解/
ひかく /比較/
ひかくてき /比較的/
ひかげ /日陰/
ひかり /光/
ひかん /悲観/
ひがい /被害/
ひがし /東/
ひがしの /東野/
ひき /匹/疋/引/比企/
ひきすう /引数/
ひぐち /樋口/
ひけっていせい /非決定性/
ひげ /髭/
ひげき /悲劇/
ひげんじつてき /非現実的/
ひこ /彦/
ひこう /飛行/非行/
ひこうき /飛行機/
ひこうしょうねん /非行少年/
ひごろ /日頃/
ひさ /久/寿/
ひさお /久雄/
ひさき /寿樹/
ひさん /悲惨/
ひざ /膝/
ひし /菱/
ひしがた /菱形/
ひしだ /菱田/
ひしょ /秘書/
ひじ /肘/
ひじゅうふく /非重複/
ひじゅうふくわ /非重複和/
ひじょう /非常/
ひじょうきん /非常勤/
ひたい /額/
ひたち /日立/
ひたんちょう /非単調/
ひたんちょうすいろん /非単調推論/
ひだ /飛騨/飛田/
ひだい /肥大/
ひだいか /肥大化/
ひだか /日高/
ひだり /左/←/
ひだりかんやくほうそく /左簡約法則/
ひだりがわ /左側/
ひだりようそ /左要素/
ひっ /必/
ひっし /必死/
ひっしゃ /筆者/
ひっす /必須/
ひっちゃく /必着/
ひつ /必/逼/筆/畢/弼/泌/
ひつぎ /棺/
ひつじ /未/羊/
ひつじゅ /必需/
ひつぜん /必然/
ひつぜんせい /必然性/
ひつぜんてき /必然的/
ひつどく /必読/
ひつよう /必要/
ひつようじゅうぶんじょうけん /必要十分条件/
ひつようせい /必要性/
ひづけ /日付/
ひてい /否定/
ひで /英/秀/
ひであき /秀昭/
ひでき /秀樹/
ひでひこ /英彦/
ひでゆき /秀之/
ひと /人/
ひといき /一息/
ひとくち /一口/
ひとけ /人気/
ひとこえ /一声/
ひとこと /一言/
ひとごと /人事/
ひとすじ /一筋/
ひとすじなわ /一筋縄/
ひとたち /人達/
ひとたび /一度/
ひとで /人手/人出/
ひとなみ /人波/
ひとびと /人々/
ひとみ /瞳/
ひとめ /人目/
ひとり /一人/
ひどうき /非同期/
ひなた /日向/
ひなん /非難/
ひにく /皮肉/
ひの /日野/
ひのき /桧/
ひはん /批判/
ひび /日々/
ひびや /日比谷/
ひま /暇/
ひみつ /秘密/
ひめ /媛/姫/
ひめい /悲鳴/
ひも /紐/
ひゃく /百/
ひやあせ /冷汗/
ひょう /表/豹/評/票/瓢/漂/氷/標/彪/俵/剽/憑/拍/兵/
ひょうか /評価/
ひょうかけっか /評価結果/
ひょうかご /評価後/
ひょうかじゅんじょ /評価順序/
ひょうかず /評価図/
ひょうかち /評価値/
ひょうかほう /評価法/
ひょうかよう /評価用/
ひょうき /表記/標記/
ひょうきほう /表記法/
ひょうぎかい /評議会/
ひょうげん /表現/
ひょうし /表紙/拍子/
ひょうしょう /表象/表彰/
ひょうじ /表示/
ひょうじゅん /標準/
ひょうじゅんか /標準化/
ひょうじゅんご /標準語/
ひょうじゅんてき /標準的/
ひょうじょう /表情/
ひょうたん /瓢箪/
ひょうだい /表題/標題/
ひょうばん /評判/
ひょうへん /豹変/
ひょうほん /標本/
ひょうめい /表明/
ひょうめん /表面/
ひょうめんせき /表面積/
ひょうろん /評論/
ひょうろんしゃ /評論社/
ひよう /費用/
ひより /日和/
ひら /平/
ひらい /平井/
ひらた /平田/
ひらの /平野/
ひらばる /平原/
ひらやま /平山/
ひりき /非力/
ひる /昼/蛭/蒜/簸/
ひるま /昼間/
ひるめし /昼飯/
ひれ /鰭/
ひれい /非礼/比例/
ひれつ /卑劣/
ひろ /裕/広/博/弘/洋/尋/寛/比呂/廣/宏/
ひろう /疲労/
ひろうえん /披露宴/
ひろこ /浩子/
ひろし /宏/博/博史/浩/
ひろしま /広島/
ひろしまだい /広島大/
ひろせ /広瀬/
ひろふみ /寛文/弘文/
ひろみ /博美/
ひろゆき /周行/
ひん /頻/賓/貧/瀕/浜/斌/彬/品/
ひんい /品位/
ひんけつ /貧血/
ひんこん /貧困/
ひんじゃく /貧弱/
ひんど /頻度/
ひんぱん /頻繁/
び /鼻/美/眉/琵/毘/枇/微/尾/備/日/
びおん /鼻音/
びおんか /鼻音化/
びこう /備考/
びしょう /微少/
びしょうじょ /美少女/
びしょうねん /美少年/
びじん /美人/
びだくおん /鼻濁音/
びっくり /！/
びと /人/
びどう /微動/
びひん /備品/
びぶん /微分/
びみ /美味/
びみょう /微妙/
びゃく /白/
びゅう /謬/
びょう /秒/平/鋲/錨/苗/病/描/廟/猫/
びょういん /病院/
びょうき /病気/
びょうげんきん /病源菌/
びよういん /美容院/
びりょう /鼻梁/
びわ /枇杷/琵琶/
びん /瓶/敏/便/貧/
びんじょう /便乗/
びんせん /便箋/
びんぼう /貧乏/
びんめい /便名/
びんらん /便覧/
ふ /父/負/附/阜/赴/賦/譜/芙/膚/腐/符/浮/普/斧/敷/扶/怖/府/布/冨/富/婦/夫/埠/付/不/風/歩/
ふあん /不安/
ふあんてい /不安定/
ふう /風/楓/封/富/夫/
ふうけい /風景/
ふうちょう /風潮/
ふうとう /封筒/
ふうふ /夫婦/
ふうみ /風味/
ふえ /笛/
ふか /付加/負荷/不可/
ふかけつ /不可欠/
ふかさわ /深沢/
ふかざわ /深沢/
ふかのう /不可能/
ふかや /深谷/
ふかんぜん /不完全/
ふき /蕗/葺/
ふきゅう /普及/
ふきょう /布教/
ふきん /付近/
ふく /覆/幅/腹/福/服/複/復/副/伏/
ふくい /福井/
ふくおか /福岡/
ふくおかこうぎょうだいがく /福岡工業大学/
ふくおかし /福岡市/
ふくげん /復元/
ふくごう /復号/複合/
ふくさよう /副作用/
ふくざつ /複雑/
ふくざつか /複雑化/
ふくしゃ /複写/
ふくしゅ /副手/
ふくしゅう /復讐/
ふくすう /複数/
ふくせい /複製/
ふくそう /服装/
ふくちょう /復調/
ふくぶ /腹部/
ふくぶくろ /福袋/
ふくもと /福本/
ふくろ /袋/
ふこう /不幸/
ふごう /符号/
ふごうか /符号化/
ふごうかく /不合格/
ふごうご /符号語/
ふさ /総/房/
ふさんか /不参加/
ふざい /不在/
ふし /節/
ふしぎ /不思議/
ふしぜん /不自然/
ふじ /富士/藤/
ふじい /藤井/
ふじさん /富士山/
ふじた /藤田/
ふじたに /藤谷/
ふじつう /富士通/
ふじみ /富士見/
ふじゅうぶん /不十分/
ふじわら /藤原/
ふすま /襖/
ふずい /付随/附随/
ふせいかく /不正確/
ふそく /不足/
ふぞく /附属/付属/
ふた /二/双/
ふたがみ /二上/
ふたご /双子/
ふたござ /双子座/
ふたつ /二/
ふたつぎ /二木/
ふたばしゃ /双葉社/
ふたむら /二村/
ふたり /二人/
ふたん /負担/
ふだ /札/簡/
ふだん /普段/
ふち /淵/縁/
ふちゅう /府中/
ふちょう /不調/
ふっかつ /復活/
ふっき /復帰/
ふっきゅう /復旧/
ふっきん /腹筋/
ふつ /沸/払/弗/仏/
ふつう /普通/不通/
ふつごう /不都合/
ふてき /不適/
ふてきとう /不適当/
ふてん /符点/
ふで /筆/
ふところ /懐/
ふとん /布団/
ふどう /浮動/
ふどうてん /不動点/浮動点/
ふな /鮒/船/舟/
ふなばし /船橋/
ふにん /赴任/
ふね /船/舟/
ふのう /不能/
ふひつよう /不必要/
ふへん /不変/
ふべん /不便/
ふまん /不満/
ふみ /文/
ふめい /不明/
ふもん /不問/
ふゆ /冬/
ふよ /付与/
ふよう /不要/
ふり /振/
ふりかえ /振替/
ふりつ /府立/
ふりょう /不良/
ふるかわ /古川/
ふるさと /故郷/
ふれんぞく /不連続/
ふろ /風呂/
ふろう /不老/
ふろうちょう /不老町/
ふろく /付録/
ふろしき /風呂敷/
ふろんりしき /負論理式/
ふん /分/糞/雰/紛/粉/奮/焚/扮/憤/墳/噴/吻/
ふんいき /雰囲気/
ふんか /噴火/
ふんさい /粉砕/
ふんしつ /紛失/
ぶ /分/部/無/蕪/葡/舞/武/撫/侮/奉/不/歩/
ぶいん /部員/
ぶき /武器/
ぶきみ /不気味/
ぶきょく /部局/
ぶさいく /不細工/
ぶさた /無沙汰/
ぶしょ /部署/
ぶじ /無事/
ぶすう /部数/
ぶぜい /無勢/
ぶた /豚/
ぶたい /舞台/
ぶちょう /部長/
ぶっけん /物件/
ぶっし /物資/
ぶっせい /物性/
ぶったい /物体/
ぶつ /物/仏/
ぶつめつ /仏滅/
ぶつり /物理/
ぶつりがく /物理学/
ぶつりてき /物理的/
ぶつりゅう /物流/
ぶどう /葡萄/
ぶなん /無難/
ぶひん /部品/
ぶひんか /部品化/
ぶぶん /部分/
ぶぶんぐん /部分群/
ぶぶんてき /部分的/
ぶもん /部門/
ぶん /分/文/聞/
ぶんか /文化/分科/分化/
ぶんかい /分解/
ぶんかかい /分科会/
ぶんかつ /分割/
ぶんがく /文学/
ぶんがくぶ /文学部/
ぶんきょう /文京/文教/
ぶんきょうく /文京区/
ぶんけん /文献/
ぶんこ /文庫/
ぶんさん /分散/
ぶんさんかんきょう /分散環境/
ぶんさんしょり /分散処理/
ぶんし /分子/
ぶんしょ /文書/
ぶんしょう /文章/
ぶんしょしょり /文書処理/
ぶんじん /文人/
ぶんせき /分析/
ぶんせつ /文節/
ぶんたい /文体/
ぶんたん /分担/
ぶんたんしゃ /分担者/
ぶんちゅう /文中/
ぶんぱい /分配/
ぶんぽう /文法/
ぶんぽうてき /文法的/
ぶんみゃく /文脈/
ぶんめい /文明/
ぶんや /分野/
ぶんり /分離/
ぶんりょう /分量/
ぶんるい /分類/
ぷん /分/
へい /閉/平/陛/蔽/並/柄/弊/幣/塀/兵/併/丙/病/
へいか /陛下/
へいがい /弊害/
へいき /平気/
へいきん /平均/
へいきんち /平均値/
へいきんちょう /平均長/
へいきんてん /平均点/
へいげん /平原/
へいこう /並行/平行/平向/
へいごう /併合/
へいさ /閉鎖/
へいにん /併任/
へいほう /閉包/平方/
へいめん /平面/
へいめんじょう /平面上/
へいよう /併用/
へいれつ /並列/
へいれつしょり /並列処理/
へいれつせい /並列性/
へいわ /平和/
へき /壁/碧/癖/僻/
へた /下手/
へび /蛇/
へや /部屋/
へら /箆/
へり /辺/
へん /変/辺/編/返/遍/篇/片/偏/
へんか /変化/
へんかん /変換/
へんかんりつ /変換率/
へんきゃく /返却/
へんきゃくきげん /返却期限/
へんきょく /編曲/
へんけい /変形/辺形/
へんけん /偏見/
へんげ /変化/
へんこう /変更/
へんこうてん /変更点/
へんさい /返済/
へんしゅう /編集/
へんしゅうぶ /編集部/
へんしん /返信/
へんじ /返事/
へんすう /変数/
へんすうめい /変数名/
へんせい /編成/
へんそう /返送/
へんそうきょく /変奏曲/
へんそく /変則/
へんとう /返答/
へんどう /変動/
へんにゅう /編入/
へんぴん /返品/
へんぶん /変分/
へんみ /辺見/
べ /辺/部/
べい /米/
べいこく /米国/
べっかく /別格/
べっかん /別館/
べっさつ /別冊/
べっし /別紙/
べっそう /別荘/
べっと /別途/
べっぴょう /別表/
べつ /別/蔑/瞥/
べつず /別図/
べつびん /別便/
べつべつ /別々/
べつめい /別名/
べに /紅/
べん /勉/鞭/弁/娩/便/
べんきょう /勉強/
べんきょうかい /勉強会/
べんぎ /便宜/
べんごし /弁護士/
べんとう /弁当/
べんべつ /弁別/
べんり /便利/
ぺーじ /頁/
ぺい /平/閉/
ほ /保/穂/輔/補/甫/歩/捕/圃/鋪/舗/帆/火/
ほう /方/法/泡/砲/放/報/鵬/鳳/飽/鋒/邦/豊/訪/褒/蜂/蓬/萌/芳/胞/烹/朋/捧/抱/庖/崩/峯/峰/宝/奉/呆/包/俸/倣/封/縫/
ほうい /方位/
ほうえい /放映/
ほうかつ /包括/
ほうがん /包含/
ほうき /放棄/
ほうげん /方言/
ほうこう /方向/
ほうこく /報告/
ほうこくしょ /報告書/
ほうこくじこう /報告事項/
ほうさく /方策/
ほうしき /方式/
ほうしゅう /報酬/
ほうしょく /奉職/
ほうしん /方針/
ほうじん /法人/
ほうそう /放送/包装/
ほうそく /法則/
ほうたい /包帯/
ほうち /放置/
ほうていしき /方程式/
ほうどう /報道/
ほうび /褒美/
ほうふ /豊富/
ほうぶつ /放物/
ほうぶつせん /放物線/
ほうほう /方法/
ほうほうろん /方法論/
ほうむ /法務/
ほうめん /方面/
ほうもん /訪問/
ほうりつ /法律/
ほうりつろん /法律論/
ほうろう /放浪/
ほうろうへき /放浪癖/
ほお /頬/
ほか /他/外/
ほかん /保管/
ほきゅう /補給/
ほきゅうぶっし /補給物資/
ほきゅうりょう /補給量/
ほく /北/
ほくだい /北大/
ほくと /北斗/
ほくりく /北陸/
ほけん /保険/保健/
ほけんしょう /保険証/
ほこ /鉾/矛/
ほこう /歩行/
ほこうしゃ /歩行者/
ほご /保護/
ほごしゃ /保護者/
ほさ /補佐/
ほさか /保坂/
ほし /星/※/☆/★/
ほしくず /星屑/
ほしとりひょう /星取表/
ほしゅ /保守/
ほしょう /保証/
ほじ /保持/
ほじょ /補助/
ほずみ /穂積/
ほぜん /保全/
ほそ /細/
ほそい /細井/
ほそく /補足/
ほそじ /細字/
ほその /細野/
ほぞん /保存/
ほたる /蛍/
ほっ /発/法/
ほっかいどう /北海道/
ほっさ /発作/
ほっそく /発足/
ほったん /発端/
ほつ /発/
ほとぎ /缶/
ほとけ /仏/
ほとり /辺/
ほとんど /殆ど/
ほど /程/
ほどう /補導/
ほどうれき /補導歴/
ほね /骨/
ほねみ /骨身/
ほのお /炎/
ほゆう /保有/
ほゆうりょう /保有量/
ほら /洞/
ほり /堀/
ほりうち /堀内/
ほりかわ /堀川/
ほろ /幌/
ほん /本/翻/奔/反/
ほんかく /本格/
ほんかくてき /本格的/
ほんかん /本館/本艦/
ほんき /本気/
ほんぎょう /本業/
ほんけんきゅう /本研究/
ほんこう /本稿/
ほんこまごめ /本駒込/
ほんごう /本郷/
ほんしつ /本質/
ほんしつてき /本質的/
ほんしゃ /本社/
ほんしょ /本書/
ほんしょう /本章/
ほんじつ /本日/
ほんじょう /本庄/
ほんすじ /本筋/
ほんせつ /本節/
ほんせん /本線/
ほんたい /本体/
ほんだ /本田/本多/
ほんだい /本題/
ほんちょう /本町/
ほんとう /本当/
ほんにん /本人/
ほんね /本音/
ほんねん /本年/
ほんねんど /本年度/
ほんのう /本能/
ほんのうてき /本能的/
ほんば /本場/
ほんぶ /本部/
ほんぶん /本文/
ほんまち /本町/
ほんみょう /本名/
ほんもの /本物/
ほんや /本屋/
ほんやく /翻訳/
ほんらい /本来/
ほんろんぶん /本論文/
ぼ /母/暮/菩/簿/戊/慕/墓/募/模/保/
ぼいん /母音/
ぼう /某/妨/防/鉾/貿/貌/謀/膨/肪/紡/冒/棒/望/暴/房/忙/忘/帽/坊/剖/傍/亡/乏/妄/
ぼうえい /防衛/
ぼうえき /貿易/
ぼうけん /冒険/
ぼうこう /暴行/
ぼうこうざた /暴行沙汰/
ぼうし /防止/帽子/
ぼうそう /暴走/
ぼうだい /膨大/
ぼうとう /冒頭/
ぼうねんかい /忘年会/
ぼうり /暴利/
ぼうりょく /暴力/
ぼうりょくざた /暴力沙汰/
ぼうりょくだん /暴力団/
ぼうれい /亡霊/
ぼく /僕/木/穆/睦/牧/朴/撲/墨/卜/目/
ぼこう /母校/
ぼこくご /母国語/
ぼさつ /菩薩/
ぼしゅう /募集/
ぼしゅうこうこく /募集広告/
ぼたい /母体/
ぼたん /釦/
ぼだい /菩提/
ぼっ /坊/
ぼっとう /没頭/
ぼつ /没/勃/
ぼん /盆/凡/
ぽん /本/
ま /間/目/真/麻/魔/磨/摩/馬/眞/
まーじゃん /麻雀/
まい /枚/毎/昧/妹/埋/舞/米/
まいあさ /毎朝/
まいかい /毎回/
まいご /迷子/
まいごう /毎号/
まいしゅう /毎週/
まいすう /枚数/
まいつき /毎月/
まいとし /毎年/
まいど /毎度/
まいにち /毎日/
まいねん /毎年/
まいる /哩/
まえ /前/
まえかわ /前川/
まえしょり /前処理/
まえの /前野/
まき /巻/槙/牧/
まきた /真北/
まきの /牧野/
まく /膜/幕/
まくはり /幕張/
まくら /枕/
まぐろ /鮪/
まこと /真/誠/
まご /孫/
まさ /正/柾/雅/政/真/昌/征/
まさかず /正和/
まさし /仁/
まさはる /正晴/
まさひこ /雅彦/
まさひろ /雅洋/
まさゆき /昌之/
ましこ /益子/
まじか /真近/
まじめ /真面目/
まじん /魔神/
ます /桝/鱒/益/増/升/
ますだ /増田/益田/
また /又/俣/亦/股/
まち /街/町/
まちこ /眞智子/
まちなか /街中/町中/
まっか /真赤/
まっしょう /抹消/
まったく /全/
まったん /末端/
まつ /松/末/沫/抹/
まつい /松井/
まつうら /松浦/
まつえ /松江/
まつおか /松岡/
まつかた /松方/
まつくら /松倉/
まつざわ /松沢/
まつした /松下/
まつしま /松島/
まつじつ /末日/
まつだ /松田/
まつばら /松原/
まつび /末尾/
まつもと /松本/
まつやま /松山/
まつり /祭/
まつりごと /政/
まで /迄/
まと /的/
まど /窓/
まどぐち /窓口/
まどべ /窓辺/
まなこ /眼/
まなつ /真夏/
まなみ /真奈美/
まね /真似/
まひ /麻痺/
まひがし /真東/
まほう /魔法/
まぼろし /幻/
まま /侭/
まみこ /真美子/
まみなみ /真南/
まめ /豆/
まやく /麻薬/
まゆ /繭/
まよなか /真夜中/
まりお /真理雄/
まりこ /真理子/
まりな /満里奈/
まる /円/丸/○/●/◎/
まるおか /丸岡/
まるぜん /丸善/
まるばやし /丸林/
まるやま /丸山/
まれ /稀/
まろ /麿/
まん /万/満/蔓/漫/慢/饅/
まんいち /万一/
まんえん /万円/
まんかい /満開/
まんが /漫画/
まんじ /卍/
まんじゅう /饅頭/
まんすい /満水/
まんせい /慢性/
まんぞく /満足/
まんてん /満点/
まんなか /真中/
まんめん /満面/
み /実/味/三/身/未/箕/巳/魅/美/見/己/
みうち /身内/
みえ /三重/
みかいけつ /未解決/
みかくにん /未確認/
みかた /味方/見方/
みかみ /三上/
みかみね /三神峯/
みかんせい /未完成/
みがる /身軽/
みき /幹/美紀/
みきお /幹雄/
みぎ /右/→/
みぎがわ /右側/
みぎて /右手/
みぎようそ /右要素/
みぎよこ /右横/
みことのり /詔/
みごと /見事/
みさお /操/
みさき /岬/
みささぎ /陵/
みさわ /三澤/三沢/
みしま /三島/
みじか /身近/
みじゅく /未熟/
みじゅくもの /未熟者/
みず /水/
みずうみ /湖/
みずた /水田/
みずたに /水谷/
みずの /水野/
みせ /店/
みぜん /未然/
みそ /味噌/
みそか /晦/
みぞ /溝/
みた /三田/
みたか /三鷹/
みたに /三谷/
みち /道/路/未知/
みっか /三日/
みっせつ /密接/
みっぺい /密閉/
みつ /蜜/密/光/
みつい /三井/
みつけつごう /密結合/
みつど /密度/
みつびし /三菱/
みつびしでんき /三菱電機/
みつゆき /光之/
みてい /未定/
みていぎ /未定義/
みと /水戸/
みどく /未読/
みどり /緑/
みな /皆/
みなかた /皆方/
みなこ /美奈子/
みなさま /皆様/
みなと /湊/港/
みなとく /港区/
みなみ /南/
みなみの /南野/
みなもと /源/
みね /峯/峰/
みの /蓑/美濃/
みのる /稔/實/
みはら /三原/
みぶん /身分/
みほ /三保/
みほん /見本/
みみ /耳/
みみもと /耳許/
みめい /未明/
みゃく /脈/
みや /宮/
みやうち /宮内/
みやぎ /宮城/
みやけ /三宅/
みやげ /土産/
みやこ /都/宮古/
みやさか /宮坂/
みやざき /宮崎/
みやした /宮下/
みやの /宮野/
みやはら /宮原/
みやもと /宮本/
みょう /名/明/命/妙/
みょうごにち /明後日/
みょうじ /苗字/
みょうじん /明神/
みょうにち /明日/
みよし /三好/
みらい /未来/
みり /粍/
みりめーとる /粍/
みりょく /魅力/
みん /眠/民/
みんぞく /民族/
みんな /皆/
む /夢/無/鵡/霧/矛/牟/務/謀/武/六/
むいみ /無意味/
むかい /向井/
むかいの /向野/
むかし /昔/
むかしつ /無過失/
むかしつせきにん /無過失責任/
むかんけい /無関係/
むぎ /麦/
むく /椋/
むげん /無限/
むこ /婿/
むこう /無効/
むさし /武蔵/
むさしの /武蔵野/
むさしのし /武蔵野市/
むし /無視/虫/
むしょう /無償/無性/
むじゅん /矛盾/
むじょうけん /無条件/
むすう /無数/
むすこ /息子/
むすめ /娘/
むせいか /無声化/
むせいげん /無制限/
むせきにん /無責任/
むせん /無線/
むだ /無駄/
むち /無知/
むちゃ /無茶/
むな /胸/棟/
むね /旨/胸/宗/棟/
むねん /無念/
むのう /無能/
むのうしゃ /無能者/
むひょうじょう /無表情/
むぼう /無謀/
むよう /無用/
むら /村/群/
むらい /村井/
むらかみ /村上/
むらさき /紫/
むらた /村田/
むり /無理/
むりょう /無料/
むりょく /無力/
むれ /群/
むろ /室/
むろまち /室町/
むろらん /室蘭/
め /目/女/眼/芽/雌/
めい /名/明/命/迷/姪/鳴/銘/盟/冥/
めいかく /明確/
めいき /明記/
めいきょく /名曲/
めいぎ /名義/
めいさい /明細/
めいさいしょ /明細書/
めいさく /名作/
めいさくげきじょう /名作劇場/
めいし /名詞/名刺/
めいしょ /名所/
めいしょう /名称/
めいじ /明示/明治/
めいじてき /明示的/
めいじや /明治屋/
めいだい /命題/
めいだいへんすう /命題変数/
めいちゅう /命中/
めいてつ /名鉄/
めいはく /明白/
めいぶつ /名物/
めいぼ /名簿/
めいもく /名目/
めいよ /名誉/
めいれい /命令/
めいろ /迷路/
めいわく /迷惑/
めがみ /女神/
めぐろ /目黒/
めぐろく /目黒区/
めし /飯/
めす /牝/雌/♀/
めだまやき /目玉焼/
めった /滅多/
めつ /滅/
めど /目途/
めやす /目安/
めん /面/麺/緬/綿/棉/免/
めんきょ /免許/
めんけつごう /面結合/
めんしき /面識/
めんじょ /免除/
めんせき /面積/
めんせつ /面接/
めんどう /面倒/面堂/
めんめん /面々/
めんれんけつ /面連結/
も /茂/母/模/摸/喪/
もう /蒙/耗/網/盲/猛/毛/孟/妄/亡/望/
もうしこみしょ /申込書/
もうしで /申し出/
もうしわけ /申し訳/
もうそう /妄想/
もうだ /猛打/
もうで /詣/
もうら /網羅/
もうりょう /魍魎/
もく /目/木/杢/黙/
もくし /目指/
もくじ /目次/
もくせい /木星/
もくてき /目的/
もくてきご /目的語/
もくひょう /目標/
もくようび /木曜日/
もくろく /目録/
もけい /模型/
もじ /文字/
もじじょうほう /文字情報/
もじれつ /文字列/
もち /餅/持/勿/
もちづき /望月/
もちろん /勿論/
もっとも /尤も/
もつ /物/
もと /下/本/元/基/許/素/
もとい /基/
もとおか /元岡/
もとはし /本橋/
もとまち /元町/
もともと /元々/
もなか /最中/
もの /物/者/
ものがたり /物語/
ものごと /物事/
もはや /最早/
もはん /模範/
もみ /籾/
もみじ /紅葉/
もも /桃/
ももこ /桃子/
もよう /模様/
もり /森/守/盛/杜/
もりおか /盛岡/
もりかわ /森川/
もりした /森下/
もろ /諸/
もろもろ /諸々/
もん /問/文/門/紋/悶/聞/
もんがいかん /門外漢/
もんく /文句/
もんしょう /紋章/
もんだい /問題/
もんだいかいけつ /問題解決/
もんだいじ /問題児/
もんだいていき /問題提起/
もんだいてん /問題点/
もんぶ /文部/
もんぶしょう /文部省/
もんめ /匁/
や /屋/家/夜/矢/弥/野/耶/爺/冶/也/谷/↓/←/→/↑/八/彌/哉/
やかん /夜間/
やき /夜気/
やきとり /焼き鳥/
やきとりや /焼き鳥屋/
やきにく /焼肉/
やきゅう /野球/
やぎ /八木/柳/
やぎやま /八木山/
やく /訳/役/約/薬/躍/厄/繹/
やくいん /役員/
やくがくぶ /薬学部/
やくご /訳語/
やくしまる /薬師丸/
やくしゃ /訳者/
やくしょ /役所/
やくすう /約数/
やくそう /薬草/
やくそく /約束/
やくちゅう /訳注/
やくぶん /約分/
やくほん /訳本/
やくわり /役割/
やしろ /社/八代/
やじ /野次/
やじゅう /野獣/
やじるし /矢印/↓/↑/→/←/
やす /康/安/靖/泰/
やすい /靖/安井/
やすこ /靖子/康子/
やすざけ /安酒/
やすし /靖/康/
やすだ /安田/
やすひこ /康彦/靖彦/
やすもと /安本/
やすよし /康善/
やせい /野生/
やせいみ /野生味/
やっかい /厄介/
やっこ /奴/
やつ /奴/
やど /宿/
やなぎ /柳/
やね /屋根/
やの /矢野/
やばん /野蛮/
やひ /野卑/
やぶ /薮/
やま /山/
やまい /病/
やまうち /山内/
やまかげ /山影/
やまかみ /山上/
やまがた /山形/
やまがみ /山上/
やまぎし /山岸/
やまぐち /山口/
やまざき /山崎/
やました /山下/
やましな /山科/
やまだ /山田/
やまなし /山梨/
やまなしけん /山梨県/
やまむら /山村/
やまもと /山本/
やみ /闇/
やよい /弥生/
やり /鑓/矢理/
やろう /野郎/
ゆ /諭/油/由/輸/癒/愈/愉/湯/遊/
ゆい /由/唯/
ゆいいつ /唯一/
ゆいごん /遺言/
ゆいしょ /由緒/
ゆう /優/由/裕/夕/有/融/雄/郵/邑/遊/誘/祐/猷/猶/涌/湧/柚/揖/憂/悠/幽/宥/友/勇/佑/右/
ゆうい /有為/
ゆううつ /憂鬱/
ゆうえき /有益/
ゆうかい /誘拐/
ゆうが /優雅/
ゆうがた /夕方/
ゆうき /勇気/有機/
ゆうきぶつ /有機物/
ゆうげん /有限/
ゆうげんかい /有限回/
ゆうげんぐん /有限群/
ゆうげんこ /有限個/
ゆうこ /裕子/
ゆうこう /有効/有向/
ゆうこうか /有効化/
ゆうごう /融合/
ゆうし /勇史/有志/
ゆうしゅう /優秀/
ゆうしょう /優勝/
ゆうしょく /夕食/
ゆうじ /裕司/
ゆうじょう /友情/
ゆうじん /友人/
ゆうすけ /祐介/
ゆうせい /郵政/
ゆうせいしょう /郵政省/
ゆうせん /優先/
ゆうせんじゅんい /優先順位/
ゆうせんど /優先度/
ゆうそう /郵送/
ゆうづう /融通/
ゆうどう /誘導/
ゆうはつ /誘発/
ゆうはん /夕飯/
ゆうびん /郵便/〒/
ゆうびんきょく /郵便局/
ゆうびんばんごう /〒/郵便番号/
ゆうびんぶつ /郵便物/
ゆうめい /有名/
ゆうめいじん /有名人/
ゆうよう /有用/
ゆうらくちょう /有楽町/
ゆうり /有利/
ゆうりょう /有料/
ゆうりょく /有力/
ゆうわく /誘惑/
ゆえ /故/
ゆか /床/
ゆかわ /湯河/
ゆき /雪/之/由貴/由樹/由記/幸/行/
ゆきのり /行則/
ゆきよし /幸義/
ゆくえ /行方/
ゆずる /譲/
ゆたか /裕/
ゆにゅう /輸入/
ゆび /指/
ゆびさき /指先/
ゆびわ /指輪/
ゆびわものがたり /指輪物語/
ゆみ /弓/
ゆみこ /弓子/由美子/
ゆめ /夢/
ゆめじ /夢二/
ゆやま /湯山/
ゆらい /由来/
よ /代/世/余/夜/予/預/輿/誉/与/四/
よい /宵/
よう /用/様/要/陽/遥/葉/養/踊/謡/蓉/耀/羊/窯/熔/溶/洋/楊/曜/擁/揺/揚/庸/容/妖/幼/傭/雍/八/腰/
ようい /用意/容易/
よういせい /容易性/
よういち /陽一/
よういん /要因/
ようがし /洋菓子/
ようき /容器/
ようきゅう /要求/
ようきゅうしよう /要求仕様/
ようけん /用件/
ようこ /葉子/陽子/
ようこう /要項/
ようご /用語/
ようし /用紙/
ようしき /様式/
ようしゃ /容赦/
ようしょ /洋書/
ようじ /用事/
ようじん /用心/
ようす /様子/
ようせい /要請/妖精/
ようせん /用箋/
ようそ /要素/
ようそう /様相/
ようそうろんり /様相論理/
ようたい /容体/
ようち /幼稚/
ようちえん /幼稚園/
ようてん /要点/
ようと /用途/
ようど /用度/
ようひん /用品/
ようび /曜日/
ようほう /用法/
ようぼう /要望/
ようやく /要約/
ようりょう /容量/要領/
よきん /預金/
よぎ /余儀/
よく /翼/翌/浴/沃/欲/抑/慾/
よくじつ /翌日/
よくせい /抑制/
よくぼう /欲望/
よけい /余計/
よけん /予見/
よげん /予言/
よこ /横/─/
よこう /予行/予稿/
よこうち /横内/
よこく /予告/
よこすか /横須賀/
よこせん /横線/
よこた /横田/
よこて /横手/
よこはま /横浜/
よこもじ /横文字/
よこやま /横山/
よさん /予算/
よし /由/吉/嘉/義/好/良/芳/
よしかわ /吉川/
よしき /佳樹/
よしだ /吉田/
よそう /予想/
よそく /予測/
よだん /余談/
よち /予知/
よてい /予定/
よど /淀/
よなか /夜中/
よね /米/
よねざわ /米澤/米沢/
よねだ /米田/
よのなか /世の中/
よは /余波/
よび /予備/
よびぐん /予備軍/
よぶん /余分/
よほど /余程/
よぼう /予防/
よみせ /夜店/
よみて /読み手/
よめ /夜目/嫁/
よやく /予約/
よゆう /余裕/
より /和/
よりどころ /拠所/
よりょく /余力/
よる /夜/
よろい /鎧/
よろず /万/
よん /四/
よんかい /四階/
ら /等/裸/螺/羅/
らい /来/雷/頼/礼/莱/
らいげつ /来月/
らいこう /来航/
らいしゃ /来社/
らいしゅう /来週/
らいしゅん /来春/
らいてん /来店/
らいにち /来日/
らいねん /来年/
らいねんど /来年度/
らく /楽/落/酪/絡/洛/
らくさ /落差/
られつ /羅列/
らん /覧/欄/嵐/乱/蘭/藍/濫/卵/
らんすう /乱数/
らんぼう /乱暴/
り /裏/里/離/理/利/痢/裡/璃/梨/李/履/吏/
りえき /利益/
りか /理科/
りかい /理解/
りかがく /理化学/
りかだい /理科大/
りがく /理学/
りがくけい /理学系/
りがくはくし /理学博士/
りがくぶ /理学部/
りき /力/
りきがく /力学/
りく /陸/
りくつ /理屈/
りけい /理経/理系/
りけん /理研/
りこう /理工/
りこうがく /理工学/
りこうがくぶ /理工学部/
りさん /離散/
りし /利子/
りじ /理事/
りじゅん /利潤/
りせい /理性/
りそう /理想/
りち /律/
りっきょう /立教/
りったい /立体/
りっぱ /立派/
りっぽう /立方/
りっぽうがそ /立方画素/
りっぽうこうし /立方格子/
りっぽうたい /立方体/
りつ /率/立/葎/律/
りてん /利点/
りはく /理博/
りゃく /略/掠/
りゃっきほう /略記法/
りゅう /流/隆/立/龍/竜/粒/硫/留/琉/溜/劉/柳/
りゅうがく /留学/
りゅうがくせい /留学生/
りゅうきゅう /琉球/
りゅうぎ /流儀/
りゅうこう /流行/
りゅうしゅつ /流出/
りゅうつう /流通/
りゅうど /粒度/
りゆう /理由/
りょ /虜/旅/慮/侶/
りょう /量/寮/両/領/陵/遼/諒/良/糧/稜/瞭/療/猟/涼/梁/料/凌/僚/亮/了/漁/霊/
りょうあし /両足/
りょういき /領域/
りょうか /量化/
りょうかい /了解/
りょうがわ /両側/
りょうきん /料金/
りょうこう /良好/
りょうしゃ /両者/
りょうしょう /了承/
りょうしん /両親/
りょうじつ /両日/
りょうて /両手/
りょうへん /両辺/
りょうほう /両方/療法/
りょうめ /両目/
りょうめん /両面/
りょうり /料理/
りょうりつ /両立/
りょく /力/緑/
りょこう /旅行/
りょひ /旅費/
りよう /利用/
りようけん /利用研/
りようしゃ /利用者/
りようほうほう /利用方法/
りれき /履歴/
りれきしょ /履歴書/
りろん /理論/
りろんてき /理論的/
りん /隣/輪/麟/鱗/臨/琳/燐/淋/林/厘/倫/鈴/
りんかい /臨海/
りんかく /輪郭/
りんき /臨機/
りんきおうへん /臨機応変/
りんこう /輪講/
りんご /林檎/
りんじ /臨時/
りんじょう /臨場/
りんせつ /隣接/
る /流/瑠/留/
るい /涙/類/累/塁/
るいじ /類似/
るいすい /類推/
るす /留守/
るすちゅう /留守中/
るすばん /留守番/
れい /例/齢/麗/霊/零/隷/鈴/苓/礼/玲/怜/嶺/励/冷/伶/令/戻/
れいがい /例外/
れいき /冷気/
れいこ /玲子/
れいじ /玲二/
れいぜん /冷然/
れいだい /例題/
れいねん /例年/
れいふう /冷風/
れいふうき /冷風機/
れいふく /礼服/
れいぶん /例文/
れき /歴/暦/
れきし /歴史/
れっき /列記/
れっきょ /列挙/
れっしゃ /列車/
れつ /列/裂/烈/劣/
れん /恋/蓮/連/聯/練/簾/煉/漣/憐/廉/攣/錬/
れんきゅう /連休/
れんけつ /連結/
れんけつせい /連結性/
れんこう /連行/
れんごう /連合/
れんさい /連載/
れんしゅう /練習/
れんせつ /連接/
れんそう /連想/
れんぞく /連続/
れんぞくち /連続値/
れんぞくてき /連続的/
れんだん /連弾/
れんどう /連動/
れんぱつ /連発/
れんぽう /連邦/
れんぽうかいぎ /連邦会議/
れんぽうぐん /連邦軍/
れんらく /連絡/
れんらくかい /連絡会/
れんらくさき /連絡先/
れんらくせん /連絡船/
れんりつ /連立/
ろ /露/路/賂/炉/櫓/魯/呂/
ろう /朗/郎/蝋/聾/老/篭/狼/牢/漏/浪/榔/楼/弄/廊/婁/労/糧/露/
ろうか /廊下/
ろうかい /老獪/
ろうどう /労働/
ろうどく /朗読/
ろうひ /浪費/
ろうりょく /労力/
ろく /緑/録/肋/禄/麓/六/
ろくが /録画/
ろこつ /露骨/
ろじ /路地/
ろせん /路線/
ろっこう /六甲/
ろっこうだい /六甲台/
ろっぽんぎ /六本木/
ろっぽんまつ /六本松/
ろん /論/
ろんがい /論外/
ろんぎ /論議/
ろんぶん /論文/
ろんぶんし /論文誌/
ろんり /論理/
ろんりがく /論理学/
ろんりきごう /論理記号/
ろんりしき /論理式/
ろんりてき /論理的/
わ /話/輪/和/倭/羽/我/
わい /歪/賄/隈/
わいろ /賄賂/
わか /若/
わかい /和賀井/
わかばやし /若林/
わかまつ /若松/
わが /我/
わがくに /我が国/
わき /脇/
わきやま /脇山/
わく /枠/惑/
わくせい /惑星/
わけ /訳/
わざ /技/業/
わし /鷲/儂/
わしつ /和室/
わしゃ /話者/
わじま /和嶋/
わせだ /早稲田/
わせだだい /早稲田大/
わた /綿/渡/
わたくし /私/
わたし /私/
わたしこじん /私個人/
わたしじしん /私自身/
わたしたち /私達/
わたなべ /渡辺/
わだ /和田/
わだい /話題/
わに /鰐/
わふう /和風/
わやく /和訳/
わら /藁/原/
わらび /蕨/
わらべ /童/
わり /割/
わりあい /割合/
わりばし /割箸/
わるくち /悪口/
われ /我/
われら /我等/
われわれ /我々/
わん /腕/碗/湾/椀/
わんがん /湾岸/
`,_r=`-- init\r
lines = {}\r
lines[#lines + 1] = {value="Hello World", dirty=true}\r
lines[#lines + 1] = {value="日本語 テスト", dirty=true}\r
x = 1 -- cursor x\r
y = 1 -- cursor y\r
screenWidth = 800\r
screenHeight = 480\r
fontHeight = 16\r
alldirty = true\r
\r
function subChar(s, start, e)\r
    local counter = 1\r
    local r = ""\r
    for p, c in utf8.codes(s) do\r
        if counter >= start and counter < e then\r
            r = r .. utf8.char(c)\r
        end\r
        counter = counter + 1\r
    end\r
    return r\r
end\r
\r
function insertChar(s, i, t)\r
    local r = ""\r
    local counter = 1\r
    for p, c in utf8.codes(s) do\r
        if counter == i then\r
            r = r .. t\r
        end\r
        r = r .. utf8.char(c)\r
        counter = counter + 1\r
    end\r
    if counter == i then\r
        r = r .. t\r
    end\r
    return r\r
end\r
function draw(setPos)\r
    local px = 0\r
    local py = 0\r
    local cx = 0 -- cursor pos\r
    local cy = 0\r
    local offset = 10\r
    if alldirty then\r
        color(255,255,255)\r
        fillrect(0,0,screenWidth,480)\r
        alldirty = false\r
    end\r
    color(0,0,0)\r
    for i, l in pairs(lines) do\r
        px = 0\r
        local j = 1\r
        if l["dirty"] == false then\r
            goto continue\r
        end\r
        l["dirty"] = true\r
        color(255,255,255)\r
        fillrect(0,py,screenWidth,fontHeight)\r
        -- left blue bar\r
        color(0,0,255)\r
        fillrect(0, py, 3, fontHeight)\r
        for p, c in utf8.codes(l["value"]) do\r
            local uc = utf8.char(c)\r
            if i == y and j == x then\r
                -- cursor\r
                color(0,0,0)\r
                fillrect(offset + px, py, 1, fontHeight)\r
                cx = px\r
                cy = py\r
            end\r
            if px + textwidth(uc) > screenWidth then\r
                px = 0\r
                py = py + fontHeight\r
                color(255,255,255)\r
                fillrect(0,py,screenWidth,fontHeight)\r
            end\r
            color(0,0,0)\r
            text(uc, offset + px, py)\r
            px = px + textwidth(uc)\r
            j = j + 1\r
        end\r
        if i == y and j == x then\r
            -- draw cursor\r
            color(0,0,0)\r
            fillrect(offset + px, py, 1, fontHeight)\r
            cx = px\r
            cy = py\r
        end\r
        ::continue::\r
        py = py + fontHeight\r
    end\r
\r
    if setPos then\r
        setPos(offset + cx, cy)\r
    end\r
end\r
\r
draw()\r
\r
function keydown(k, c)\r
    debug("keydown: " .. k .. "," .. c)\r
    local key = c\r
    if k == 13 then -- Enter\r
        local line = lines[y]["value"]\r
        lines[y]["value"] = subChar(line, 1, x)\r
        lines[y]["dirty"] = true\r
        table.insert(lines, y + 1, {\r
            value = subChar(line, x, utf8.len(line) + 1),\r
            dirty=true\r
        })\r
        x = 1\r
        y = y + 1\r
    elseif k == 8 then -- Backspace\r
        local line = lines[y]["value"]\r
        lines[y]["dirty"] = true\r
        if x == 1 then\r
            if y > 1 then\r
            local px = utf8.len(lines[y - 1]["value"]) + 1\r
            lines[y - 1]["value"] = lines[y - 1]["value"] .. lines[y]["value"]\r
            lines[y]["value"] = ""\r
            table.remove(lines, y)\r
            y = y - 1\r
            x = px\r
            end\r
        else\r
            lines[y]["value"] = subChar(line, 1, x - 1) .. subChar(line, x, utf8.len(line) + 1)\r
            x = x - 1\r
        end\r
    elseif k == 37 then -- ArrowLeft\r
        if x > 1 then\r
            x = x - 1\r
        end\r
    elseif k == 39 then -- ArrowRight\r
        if x <= utf8.len(lines[y]["value"]) then\r
            x = x + 1\r
        end\r
    elseif k == 38 then -- ArrowUp\r
        if y > 1 then\r
            y = y - 1\r
            if x > utf8.len(lines[y]["value"]) + 1 then\r
                x = utf8.len(lines[y]["value"]) + 1\r
            end\r
        end\r
    elseif k == 40 then -- ArrowDown\r
        if y < #lines then\r
            y = y + 1\r
            if x > utf8.len(lines[y]["value"]) + 1 then\r
                x = utf8.len(lines[y]["value"]) + 1\r
            end\r
        end\r
    elseif string.len(key) == 1 or utf8.len(key) == 1 then\r
        local line = lines[y]\r
        lines[y]["value"] = insertChar(line["value"], x, key)\r
        x = x + 1\r
    end\r
    draw(setPos)\r
end\r
\r
-- IME\r
candidate = ""\r
nextCandidate = ""\r
results = {}\r
index = 1\r
M_DIRECT = 0\r
M_HENKAN = 1\r
M_SELECT = 2\r
M_HAN = 3\r
imMode = M_DIRCET\r
cx = 0\r
cy = 0\r
\r
rome = {}\r
rome["a"] = "あ"\r
rome["i"] = "い"\r
rome["u"] = "う"\r
rome["e"] = "え"\r
rome["o"] = "お"\r
rome["ka"] = "か"\r
rome["ki"] = "き"\r
rome["ku"] = "く"\r
rome["ke"] = "け"\r
rome["ko"] = "こ"\r
rome["sa"] = "さ"\r
rome["si"] = "し"\r
rome["su"] = "す"\r
rome["se"] = "せ"\r
rome["so"] = "そ"\r
rome["ta"] = "た"\r
rome["ti"] = "ち"\r
rome["tu"] = "つ"\r
rome["te"] = "て"\r
rome["to"] = "と"\r
rome["na"] = "な"\r
rome["ni"] = "に"\r
rome["nu"] = "ぬ"\r
rome["ne"] = "ね"\r
rome["no"] = "の"\r
rome["ha"] = "は"\r
rome["hi"] = "ひ"\r
rome["hu"] = "ふ"\r
rome["he"] = "へ"\r
rome["ho"] = "ほ"\r
rome["ma"] = "ま"\r
rome["mi"] = "み"\r
rome["mu"] = "む"\r
rome["me"] = "め"\r
rome["mo"] = "も"\r
rome["ya"] = "や"\r
rome["yu"] = "ゆ"\r
rome["yo"] = "よ"\r
rome["ra"] = "ら"\r
rome["ri"] = "り"\r
rome["ru"] = "る"\r
rome["re"] = "れ"\r
rome["ro"] = "ろ"\r
rome["wa"] = "わ"\r
rome["wo"] = "を"\r
rome["ga"] = "が"\r
rome["gi"] = "ぎ"\r
rome["gu"] = "ぐ"\r
rome["ge"] = "げ"\r
rome["go"] = "ご"\r
rome["za"] = "ざ"\r
rome["zi"] = "じ"\r
rome["zu"] = "ず"\r
rome["ze"] = "ぜ"\r
rome["zo"] = "ぞ"\r
rome["da"] = "だ"\r
rome["di"] = "ぢ"\r
rome["du"] = "づ"\r
rome["de"] = "で"\r
rome["do"] = "ど"\r
rome["ba"] = "ば"\r
rome["bi"] = "び"\r
rome["bu"] = "ぶ"\r
rome["be"] = "べ"\r
rome["bo"] = "ぼ"\r
rome["pa"] = "ぱ"\r
rome["pi"] = "ぴ"\r
rome["pu"] = "ぷ"\r
rome["pe"] = "ぺ"\r
rome["po"] = "ぽ"\r
rome["kya"] = "きゃ"\r
rome["kyu"] = "きゅ"\r
rome["kyo"] = "きょ"\r
rome["sya"] = "しゃ"\r
rome["syu"] = "しゅ"\r
rome["syo"] = "しょ"\r
rome["tya"] = "ちゃ"\r
rome["tyu"] = "ちゅ"\r
rome["tyo"] = "ちょ"\r
rome["nya"] = "にゃ"\r
rome["nyu"] = "にゅ"\r
rome["nyo"] = "にょ"\r
rome["hya"] = "ひゃ"\r
rome["hyu"] = "ひゅ"\r
rome["hyo"] = "ひょ"\r
rome["mya"] = "みゃ"\r
rome["myu"] = "みゅ"\r
rome["myo"] = "みょ"\r
rome["rya"] = "りゃ"\r
rome["ryu"] = "りゅ"\r
rome["ryo"] = "りょ"\r
rome["gya"] = "ぎゃ"\r
rome["gyu"] = "ぎゅ"\r
rome["gyo"] = "ぎょ"\r
rome["zya"] = "じゃ"\r
rome["zyu"] = "じゅ"\r
rome["zyo"] = "じょ"\r
rome["ja"] = "じゃ"\r
rome["ju"] = "じゅ"\r
rome["jo"] = "じょ"\r
rome["dya"] = "ぢゃ"\r
rome["dyu"] = "ぢゅ"\r
rome["dyo"] = "ぢょ"\r
rome["bya"] = "びゃ"\r
rome["byu"] = "びゅ"\r
rome["byo"] = "びょ"\r
rome["pya"] = "ぴゃ"\r
rome["pyu"] = "ぴゅ"\r
rome["pyo"] = "ぴょ"\r
rome["nn"] = "ん"\r
rome["-"] = "ー"\r
\r
function setPos(x, y)\r
    cx = x\r
    cy = y\r
    return 1\r
end\r
\r
-- alphabet and hyphen\r
function isAlphabet(char)\r
    local byte = string.byte(char)\r
    return byte == 45 or (byte >= 65 and byte <= 90) or (byte >= 97 and byte <= 122)\r
end\r
\r
function hira2kata(s)\r
    local out = ""\r
    for p,c in utf8.codes(s) do\r
        if "ー" == utf8.char(c) then\r
            out = out .. utf8.char(c)\r
        else\r
            out = out .. utf8.char(c + 96)\r
        end\r
    end\r
    return out\r
end\r
\r
function rome2kana(s)\r
    local out = ""\r
    local index = 1\r
    while index ~= string.len(s) + 1 do\r
        local hit = false\r
        for k,v in pairs(rome) do\r
            local c = string.sub(s, index, index)\r
            if not(isAlphabet(c)) then\r
                out = out .. c\r
                index = index + 1\r
                break\r
            end\r
            local i = string.find(s, k, index, true)\r
            if i == index then\r
                out = out .. v\r
                index = index + string.len(k)\r
                hit = true\r
                break\r
            end\r
        end\r
        if not(hit) then\r
            local n = string.sub(s, index, index)\r
            if index < string.len(s) then\r
                local m = string.sub(s, index + 1, index + 1)\r
                if n == m then\r
                    out = out .. "っ"\r
                    index = index + 1\r
                    goto continue\r
                end\r
                if n == "n" then\r
                    out = out .. "ん"\r
                    index = index + 1\r
                    goto continue\r
                end\r
            end\r
            break -- can't convert hiragana\r
            ::continue::\r
        end\r
    end\r
    return out, index\r
end\r
\r
function decide()\r
    alldirty = true\r
    if #results == 0 then\r
        for i=1, #candidate do\r
            onCharHandler(0, string.sub(candidate, i, i))\r
        end\r
    else\r
        local s = results[index]\r
        for p, c in utf8.codes(s) do\r
            local uc = utf8.char(c)\r
            onCharHandler(0, uc)\r
        end\r
    end\r
    candidate = nextCandidate\r
    nextCandidate = ""\r
    results = {}\r
    index = 1\r
    imMode = M_DIRECT\r
    drawIm()\r
end\r
\r
-- override onKeyHandler\r
onCharHandler = keydown\r
function keydown(k, c, ctrl)\r
    debug("keydown k:" .. k .. ", c:" .. c)\r
    -- Enter == 13\r
    if k == 13 and string.len(candidate) > 0 then\r
        decide()\r
        -- TODO: rome2kana(nextCandidate)\r
    -- Backspace = 8\r
    elseif k == 8 and string.len(candidate) > 0 then\r
        candidate = string.sub(candidate, 0, #candidate - 1)\r
        local hira = rome2kana(candidate)\r
        -- results = ksearch(hira)\r
        results = {}\r
        table.insert(results, 1, hira)\r
        alldirty = true\r
        draw()\r
        drawIm()\r
    -- 32 is space, not Tab\r
    elseif k == 32 and string.len(candidate) > 0 and imMode == M_HENKAN then\r
        local hira = rome2kana(candidate)\r
        results = ksearch(hira)\r
        table.insert(results, #results + 1, hira)\r
        table.insert(results, #results + 1, hira2kata(hira))\r
        imMode = M_SELECT\r
        drawIm()\r
    elseif k == 32 and string.len(candidate) > 0 and imMode == M_SELECT then\r
        index = index + 1\r
        if index > #results then\r
            index = 1\r
        end\r
        drawIm()\r
    elseif c == 'l' then\r
        imMode = M_HAN\r
        drawIm()\r
    elseif c == 'j' and ctrl then\r
        imMode = M_DIRECT\r
        drawIm()\r
    elseif c == 'q' and imMode == M_HENKAN then\r
        -- katakana\r
        local hira = rome2kana(candidate)\r
        local kata = hira2kata(hira)\r
        results = {kata}\r
        decide()\r
    elseif string.len(c) == 1 and k ~= 13 and k ~= 32 then\r
        if imMode == M_HAN then\r
            onCharHandler(0, c)\r
        else\r
            local triggered = (string.upper(c) == c and isAlphabet(c)) and c ~= "-"\r
            if imMode == M_SELECT then\r
                decide()\r
            end\r
            \r
            c = string.lower(c)\r
            \r
            \r
            if imMode == M_HENKAN and triggered then\r
                local hira, index = rome2kana(candidate)\r
                \r
                debug("ksearch:" .. hira .. c)\r
                results = ksearch(hira .. c) -- SLOW\r
                table.insert(results, #results + 1, hira)\r
                table.insert(results, #results + 1, hira2kata(hira))\r
                imMode = M_SELECT\r
                nextCandidate = c\r
            else\r
                candidate = candidate .. c\r
                local hira, index = rome2kana(candidate)\r
\r
                if triggered or imMode == M_HENKAN then\r
                    -- first triggered or in HENKAN\r
                    imMode = M_HENKAN\r
                    results = {}\r
                    table.insert(results, 1, hira)\r
                elseif not(triggered) then\r
                    for p, c in utf8.codes(hira) do\r
                        local uc = utf8.char(c)\r
                        onCharHandler(0, uc)\r
                    end\r
                    candidate = string.sub(candidate, index)\r
                end\r
            end\r
        end\r
        drawIm()\r
    else\r
        onCharHandler(k, c)\r
    end\r
end\r
\r
function drawIm()\r
    local mstr = "[A]"\r
    if imMode == M_DIRECT then\r
        mstr = "[あ]"\r
    elseif imMode == M_HENKAN then\r
        mstr = "[変]"\r
    elseif imMode == M_SELECT then\r
        mstr = "[選]"\r
    elseif imMode == M_HAN then\r
        mstr = "[a]"\r
    end\r
    color(255,255,255)\r
    fillrect(0, screenHeight - fontHeight, screenWidth, fontHeight)\r
    color(0,0,0)\r
    text(mstr, 0, screenHeight - fontHeight)\r
\r
    if candidate == "" then\r
        return\r
    end\r
    -- local hira, index = rome2kana(candidate)\r
    local w = textwidth(candidate .. nextCandidate)\r
    color(0,0,255)\r
    fillrect(cx, cy, w, fontHeight)\r
    color(255,255,255)\r
    text(candidate .. nextCandidate, cx, cy)\r
    local maxW = 0\r
    for i=1, #results do\r
        local w = textwidth(results[i])\r
        if maxW < w then\r
            maxW = w\r
        end\r
    end\r
    color(20,20,20)\r
    fillrect(cx-1, cy+fontHeight-1, maxW+2, fontHeight*(#results)+2)\r
    color(240,240,240)\r
    fillrect(cx, cy+fontHeight, maxW, fontHeight*(#results))\r
    for i=1, #results do\r
        if index == i then\r
            color(0,0,255)\r
            fillrect(cx, i * fontHeight + cy, maxW, fontHeight)\r
            color(255,255,255)\r
        else\r
            color(0,0,0)\r
        end\r
        text(results[i], cx, i*fontHeight + cy)\r
    end\r
end\r
`;let Ne={},dn=null,Tt;(async()=>{const W=await new fr.LuaFactory().createEngine();try{W.global.set("color",(f,D,O)=>{dn!=null&&(dn.fillStyle=`rgb(${f},${D},${O})`)}),W.global.set("text",(f,D,O)=>{dn!=null&&dn.fillText(f,D,O)}),W.global.set("textwidth",f=>{if(dn!=null)return dn.measureText(f).width}),W.global.set("fillrect",(f,D,O,C)=>{dn!=null&&dn.fillRect(f,D,O,C)}),W.global.set("debug",f=>{console.log(f)}),W.global.set("ksearch",f=>{let D=[];return f in Ne&&(D=Ne[f].slice()),D}),Tt=async(f,D,O)=>{W.global.get("draw")(),W.global.get("keydown")(f,D,O)},await W.doString(_r)}catch(f){console.log(f)}finally{}})();addEventListener("keydown",Y=>{Y.key!="Shift"&&(Tt(Y.keyCode,Y.key,Y.ctrlKey),Y.preventDefault())});addEventListener("load",()=>{var D;let Y=document.createElement("canvas");Y.width=800,Y.height=480,Y.style.width="800px",Y.style.height="480px",(D=document.getElementById("app"))==null||D.appendChild(Y),pr.split(`
`).filter(O=>O.length>0&&O[0]!=";").map(O=>{let C=O.split(" "),K=C[0],V=C[1].split("/").filter(rn=>rn.length!=0);return{k:K,v:V}}).forEach(O=>{Ne[O.k]=O.v});let f=Y.getContext("2d");f!=null&&(dn=f,f.fillStyle="white",f.textBaseline="top",f.fillRect(0,0,800,480),f.fillStyle="black")});const gr=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
