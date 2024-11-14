(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const U of document.querySelectorAll('link[rel="modulepreload"]'))D(U);new MutationObserver(U=>{for(const H of U)if(H.type==="childList")for(const J of H.addedNodes)J.tagName==="LINK"&&J.rel==="modulepreload"&&D(J)}).observe(document,{childList:!0,subtree:!0});function p(U){const H={};return U.integrity&&(H.integrity=U.integrity),U.referrerPolicy&&(H.referrerPolicy=U.referrerPolicy),U.crossOrigin==="use-credentials"?H.credentials="include":U.crossOrigin==="anonymous"?H.credentials="omit":H.credentials="same-origin",H}function D(U){if(U.ep)return;U.ep=!0;const H=p(U);fetch(U.href,H)}})();const yn="modulepreload",vn=function(j){return"/"+j},Fr={},En=function(x,p,D){let U=Promise.resolve();if(p&&p.length>0){document.getElementsByTagName("link");const H=document.querySelector("meta[property=csp-nonce]"),J=(H==null?void 0:H.nonce)||(H==null?void 0:H.getAttribute("nonce"));U=Promise.all(p.map(Y=>{if(Y=vn(Y),Y in Fr)return;Fr[Y]=!0;const de=Y.endsWith(".css"),te=de?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Y}"]${te}`))return;const ae=document.createElement("link");if(ae.rel=de?"stylesheet":yn,de||(ae.as="script",ae.crossOrigin=""),ae.href=Y,J&&ae.setAttribute("nonce",J),document.head.appendChild(ae),de)return new Promise(($e,he)=>{ae.addEventListener("load",$e),ae.addEventListener("error",()=>he(new Error(`Unable to preload CSS for ${Y}`)))})}))}return U.then(()=>x()).catch(H=>{const J=new Event("vite:preloadError",{cancelable:!0});if(J.payload=H,window.dispatchEvent(J),!J.defaultPrevented)throw H})};var kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function it(j){throw new Error('Could not dynamically require "'+j+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Pt={exports:{}};(function(j,x){(function(p,D){D(x)})(kn,function(p){var D=typeof document<"u"?document.currentScript:null;p.LuaReturn=void 0,function(_){_[_.Ok=0]="Ok",_[_.Yield=1]="Yield",_[_.ErrorRun=2]="ErrorRun",_[_.ErrorSyntax=3]="ErrorSyntax",_[_.ErrorMem=4]="ErrorMem",_[_.ErrorErr=5]="ErrorErr",_[_.ErrorFile=6]="ErrorFile"}(p.LuaReturn||(p.LuaReturn={}));const U=4,H=-1,J=1e6,Y=-J-1e3;p.LuaType=void 0,function(_){_[_.None=-1]="None",_[_.Nil=0]="Nil",_[_.Boolean=1]="Boolean",_[_.LightUserdata=2]="LightUserdata",_[_.Number=3]="Number",_[_.String=4]="String",_[_.Table=5]="Table",_[_.Function=6]="Function",_[_.Userdata=7]="Userdata",_[_.Thread=8]="Thread"}(p.LuaType||(p.LuaType={})),p.LuaEventCodes=void 0,function(_){_[_.Call=0]="Call",_[_.Ret=1]="Ret",_[_.Line=2]="Line",_[_.Count=3]="Count",_[_.TailCall=4]="TailCall"}(p.LuaEventCodes||(p.LuaEventCodes={})),p.LuaEventMasks=void 0,function(_){_[_.Call=1]="Call",_[_.Ret=2]="Ret",_[_.Line=4]="Line",_[_.Count=8]="Count"}(p.LuaEventMasks||(p.LuaEventMasks={})),p.LuaLibraries=void 0,function(_){_.Base="_G",_.Coroutine="coroutine",_.Table="table",_.IO="io",_.OS="os",_.String="string",_.UTF8="utf8",_.Math="math",_.Debug="debug",_.Package="package"}(p.LuaLibraries||(p.LuaLibraries={}));class de extends Error{}class te{constructor(r,a){this.target=r,this.options=a}}function ae(_,r){return new te(_,r)}class $e extends Number{}class he extends Array{}const Pr=1e3;class Le{constructor(r,a,o,u){this.closed=!1,this.lua=r,this.typeExtensions=a,this.address=o,this.parent=u}newThread(){const r=this.lua.lua_newthread(this.address);if(!r)throw new Error("lua_newthread returned a null pointer");return new Le(this.lua,this.typeExtensions,r,this.parent||this)}resetThread(){this.assertOk(this.lua.lua_resetthread(this.address))}loadString(r,a){const o=this.lua.module.lengthBytesUTF8(r),u=o+1,m=this.lua.module._malloc(u);try{this.lua.module.stringToUTF8(r,m,u),this.assertOk(this.lua.luaL_loadbufferx(this.address,m,o,a??m,null))}finally{this.lua.module._free(m)}}loadFile(r){this.assertOk(this.lua.luaL_loadfilex(this.address,r,null))}resume(r=0){const a=this.lua.module._malloc(U);try{return this.lua.module.setValue(a,0,"i32"),{result:this.lua.lua_resume(this.address,null,r,a),resultCount:this.lua.module.getValue(a,"i32")}}finally{this.lua.module._free(a)}}getTop(){return this.lua.lua_gettop(this.address)}setTop(r){this.lua.lua_settop(this.address,r)}remove(r){return this.lua.lua_remove(this.address,r)}setField(r,a,o){r=this.lua.lua_absindex(this.address,r),this.pushValue(o),this.lua.lua_setfield(this.address,r,a)}async run(r=0,a){const o=this.timeout;try{(a==null?void 0:a.timeout)!==void 0&&this.setTimeout(Date.now()+a.timeout);let u=this.resume(r);for(;u.result===p.LuaReturn.Yield;){if(this.timeout&&Date.now()>this.timeout)throw u.resultCount>0&&this.pop(u.resultCount),new de("thread timeout exceeded");if(u.resultCount>0){const m=this.getValue(-1);this.pop(u.resultCount),m===Promise.resolve(m)?await m:await new Promise(y=>setImmediate(y))}else await new Promise(m=>setImmediate(m));u=this.resume(0)}return this.assertOk(u.result),this.getStackValues()}finally{(a==null?void 0:a.timeout)!==void 0&&this.setTimeout(o)}}runSync(r=0){const a=this.getTop()-r-1;return this.assertOk(this.lua.lua_pcallk(this.address,r,H,0,0,null)),this.getStackValues(a)}pop(r=1){this.lua.lua_pop(this.address,r)}call(r,...a){const o=this.lua.lua_getglobal(this.address,r);if(o!==p.LuaType.Function)throw new Error(`A function of type '${o}' was pushed, expected is ${p.LuaType.Function}`);for(const m of a)this.pushValue(m);const u=this.getTop()-a.length-1;return this.lua.lua_callk(this.address,a.length,H,0,null),this.getStackValues(u)}getStackValues(r=0){const a=this.getTop()-r,o=new he(a);for(let u=0;u<a;u++)o[u]=this.getValue(r+u+1);return o}stateToThread(r){var a;return r===((a=this.parent)===null||a===void 0?void 0:a.address)?this.parent:new Le(this.lua,this.typeExtensions,r,this.parent||this)}pushValue(r,a){const o=this.getValueDecorations(r),u=o.target;if(u instanceof Le){this.lua.lua_pushthread(u.address)===1||this.lua.lua_xmove(u.address,this.address,1);return}const m=this.getTop();switch(typeof u){case"undefined":this.lua.lua_pushnil(this.address);break;case"number":Number.isInteger(u)?this.lua.lua_pushinteger(this.address,BigInt(u)):this.lua.lua_pushnumber(this.address,u);break;case"string":this.lua.lua_pushstring(this.address,u);break;case"boolean":this.lua.lua_pushboolean(this.address,u?1:0);break;default:if(!this.typeExtensions.find(y=>y.extension.pushValue(this,o,a)))throw new Error(`The type '${typeof u}' is not supported by Lua`)}if(o.options.metatable&&this.setMetatable(-1,o.options.metatable),this.getTop()!==m+1)throw new Error(`pushValue expected stack size ${m+1}, got ${this.getTop()}`)}setMetatable(r,a){if(r=this.lua.lua_absindex(this.address,r),this.lua.lua_getmetatable(this.address,r)){this.pop(1);const o=this.getMetatableName(r);throw new Error(`data already has associated metatable: ${o||"unknown name"}`)}this.pushValue(a),this.lua.lua_setmetatable(this.address,r)}getMetatableName(r){const a=this.lua.luaL_getmetafield(this.address,r,"__name");if(a===p.LuaType.Nil)return;if(a!==p.LuaType.String){this.pop(1);return}const o=this.lua.lua_tolstring(this.address,-1,null);return this.pop(1),o}getValue(r,a,o){r=this.lua.lua_absindex(this.address,r);const u=a??this.lua.lua_type(this.address,r);switch(u){case p.LuaType.None:return;case p.LuaType.Nil:return null;case p.LuaType.Number:return this.lua.lua_tonumberx(this.address,r,null);case p.LuaType.String:return this.lua.lua_tolstring(this.address,r,null);case p.LuaType.Boolean:return!!this.lua.lua_toboolean(this.address,r);case p.LuaType.Thread:return this.stateToThread(this.lua.lua_tothread(this.address,r));default:{let m;(u===p.LuaType.Table||u===p.LuaType.Userdata)&&(m=this.getMetatableName(r));const y=this.typeExtensions.find(M=>M.extension.isType(this,r,u,m));return y?y.extension.getValue(this,r,o):(console.warn(`The type '${this.lua.lua_typename(this.address,u)}' returned is not supported on JS`),new $e(this.lua.lua_topointer(this.address,r)))}}}close(){this.isClosed()||(this.hookFunctionPointer&&this.lua.module.removeFunction(this.hookFunctionPointer),this.closed=!0)}setTimeout(r){r&&r>0?(this.hookFunctionPointer||(this.hookFunctionPointer=this.lua.module.addFunction(()=>{Date.now()>r&&(this.pushValue(new de("thread timeout exceeded")),this.lua.lua_error(this.address))},"vii")),this.lua.lua_sethook(this.address,this.hookFunctionPointer,p.LuaEventMasks.Count,Pr),this.timeout=r):this.hookFunctionPointer&&(this.hookFunctionPointer=void 0,this.timeout=void 0,this.lua.lua_sethook(this.address,null,0,0))}getTimeout(){return this.timeout}getPointer(r){return new $e(this.lua.lua_topointer(this.address,r))}isClosed(){var r;return!this.address||this.closed||!!(!((r=this.parent)===null||r===void 0)&&r.isClosed())}indexToString(r){const a=this.lua.luaL_tolstring(this.address,r,null);return this.pop(),a}dumpStack(r=console.log){const a=this.getTop();for(let o=1;o<=a;o++){const u=this.lua.lua_type(this.address,o),m=this.lua.lua_typename(this.address,u),y=this.getPointer(o),M=this.indexToString(o),k=this.getValue(o,u);r(o,m,y,M,k)}}assertOk(r){if(r!==p.LuaReturn.Ok&&r!==p.LuaReturn.Yield){const a=p.LuaReturn[r],o=new Error(`Lua Error(${a}/${r})`);if(this.getTop()>0)if(r===p.LuaReturn.ErrorMem)o.message=this.lua.lua_tolstring(this.address,-1,null);else{const u=this.getValue(-1);u instanceof Error&&(o.stack=u.stack),o.message=this.indexToString(-1)}if(r!==p.LuaReturn.ErrorMem)try{this.lua.luaL_traceback(this.address,this.address,null,1);const u=this.lua.lua_tolstring(this.address,-1,null);u.trim()!=="stack traceback:"&&(o.message=`${o.message}
${u}`),this.pop(1)}catch(u){console.warn("Failed to generate stack trace",u)}throw o}}getValueDecorations(r){return r instanceof te?r:new te(r,{})}}class Ht extends Le{constructor(r,a){if(a){const o={memoryUsed:0},u=r.module.addFunction((y,M,k,N)=>{if(N===0)return M&&(o.memoryUsed-=k,r.module._free(M)),0;const R=M?N-k:N,P=o.memoryUsed+R;if(N>k&&o.memoryMax&&P>o.memoryMax)return 0;const B=r.module._realloc(M,N);return B&&(o.memoryUsed=P),B},"iiiii"),m=r.lua_newstate(u,null);if(!m)throw r.module.removeFunction(u),new Error("lua_newstate returned a null pointer");super(r,[],m),this.memoryStats=o,this.allocatorFunctionPointer=u}else super(r,[],r.luaL_newstate());if(this.isClosed())throw new Error("Global state could not be created (probably due to lack of memory)")}close(){if(!this.isClosed()){super.close(),this.lua.lua_close(this.address),this.allocatorFunctionPointer&&this.lua.module.removeFunction(this.allocatorFunctionPointer);for(const r of this.typeExtensions)r.extension.close()}}registerTypeExtension(r,a){this.typeExtensions.push({extension:a,priority:r}),this.typeExtensions.sort((o,u)=>u.priority-o.priority)}loadLibrary(r){switch(r){case p.LuaLibraries.Base:this.lua.luaopen_base(this.address);break;case p.LuaLibraries.Coroutine:this.lua.luaopen_coroutine(this.address);break;case p.LuaLibraries.Table:this.lua.luaopen_table(this.address);break;case p.LuaLibraries.IO:this.lua.luaopen_io(this.address);break;case p.LuaLibraries.OS:this.lua.luaopen_os(this.address);break;case p.LuaLibraries.String:this.lua.luaopen_string(this.address);break;case p.LuaLibraries.UTF8:this.lua.luaopen_string(this.address);break;case p.LuaLibraries.Math:this.lua.luaopen_math(this.address);break;case p.LuaLibraries.Debug:this.lua.luaopen_debug(this.address);break;case p.LuaLibraries.Package:this.lua.luaopen_package(this.address);break}this.lua.lua_setglobal(this.address,r)}get(r){const a=this.lua.lua_getglobal(this.address,r),o=this.getValue(-1,a);return this.pop(),o}set(r,a){this.pushValue(a),this.lua.lua_setglobal(this.address,r)}getTable(r,a){const o=this.getTop(),u=this.lua.lua_getglobal(this.address,r);try{if(u!==p.LuaType.Table)throw new TypeError(`Unexpected type in ${r}. Expected ${p.LuaType[p.LuaType.Table]}. Got ${p.LuaType[u]}.`);a(o+1)}finally{this.getTop()!==o+1&&console.warn(`getTable: expected stack size ${o} got ${this.getTop()}`),this.setTop(o)}}getMemoryUsed(){return this.getMemoryStatsRef().memoryUsed}getMemoryMax(){return this.getMemoryStatsRef().memoryMax}setMemoryMax(r){this.getMemoryStatsRef().memoryMax=r}getMemoryStatsRef(){if(!this.memoryStats)throw new Error("Memory allocations is not being traced, please build engine with { traceAllocations: true }");return this.memoryStats}}class fe{constructor(r,a){this.thread=r,this.name=a}isType(r,a,o,u){return o===p.LuaType.Userdata&&u===this.name}getValue(r,a,o){const u=r.lua.luaL_testudata(r.address,a,this.name);if(!u)throw new Error(`data does not have the expected metatable: ${this.name}`);const m=r.lua.module.getValue(u,"*");return r.lua.getRef(m)}pushValue(r,a,o){const{target:u}=a,m=r.lua.ref(u),y=r.lua.lua_newuserdatauv(r.address,U,0);if(r.lua.module.setValue(y,m,"*"),p.LuaType.Nil===r.lua.luaL_getmetatable(r.address,this.name))throw r.pop(2),new Error(`metatable not found: ${this.name}`);return r.lua.lua_setmetatable(r.address,-2),!0}}class Cr extends fe{constructor(r,a){if(super(r,"js_error"),this.gcPointer=r.lua.module.addFunction(o=>{const u=r.lua.luaL_checkudata(o,1,this.name),m=r.lua.module.getValue(u,"*");return r.lua.unref(m),p.LuaReturn.Ok},"ii"),r.lua.luaL_newmetatable(r.address,this.name)){const o=r.lua.lua_gettop(r.address);r.lua.lua_pushstring(r.address,"protected metatable"),r.lua.lua_setfield(r.address,o,"__metatable"),r.lua.lua_pushcclosure(r.address,this.gcPointer,0),r.lua.lua_setfield(r.address,o,"__gc"),r.pushValue((u,m)=>m==="message"?u.message:null),r.lua.lua_setfield(r.address,o,"__index"),r.pushValue(u=>u.message),r.lua.lua_setfield(r.address,o,"__tostring")}r.lua.lua_pop(r.address,1),a&&r.set("Error",{create:o=>{if(o&&typeof o!="string")throw new Error("message must be a string");return new Error(o)}})}pushValue(r,a){return a.target instanceof Error?super.pushValue(r,a):!1}close(){this.thread.lua.module.removeFunction(this.gcPointer)}}function Dr(_,r){return new Cr(_,r)}class Ge{constructor(r){this.count=r}}function lt(_,r){return new te(_,r)}class Ur extends fe{constructor(r,a){super(r,"js_function"),this.functionRegistry=typeof FinalizationRegistry<"u"?new FinalizationRegistry(o=>{this.thread.isClosed()||this.thread.lua.luaL_unref(this.thread.address,Y,o)}):void 0,this.options=a,this.callbackContext=r.newThread(),this.callbackContextIndex=this.thread.lua.luaL_ref(r.address,Y),this.functionRegistry||console.warn("FunctionTypeExtension: FinalizationRegistry not found. Memory leaks likely."),this.gcPointer=r.lua.module.addFunction(o=>{r.lua.luaL_checkudata(o,1,this.name);const u=r.lua.luaL_checkudata(o,1,this.name),m=r.lua.module.getValue(u,"*");return r.lua.unref(m),p.LuaReturn.Ok},"ii"),r.lua.luaL_newmetatable(r.address,this.name)&&(r.lua.lua_pushstring(r.address,"__gc"),r.lua.lua_pushcclosure(r.address,this.gcPointer,0),r.lua.lua_settable(r.address,-3),r.lua.lua_pushstring(r.address,"__metatable"),r.lua.lua_pushstring(r.address,"protected metatable"),r.lua.lua_settable(r.address,-3)),r.lua.lua_pop(r.address,1),this.functionWrapper=r.lua.module.addFunction(o=>{const u=r.stateToThread(o),m=r.lua.luaL_checkudata(o,r.lua.lua_upvalueindex(1),this.name),y=r.lua.module.getValue(m,"*"),{target:M,options:k}=r.lua.getRef(y),N=u.getTop(),R=[];if(k.receiveThread&&R.push(u),k.receiveArgsQuantity)R.push(N);else for(let P=1;P<=N;P++){const B=u.getValue(P);(P!==1||!(k!=null&&k.self)||B!==k.self)&&R.push(B)}try{const P=M.apply(k==null?void 0:k.self,R);if(P===void 0)return 0;if(P instanceof Ge)return P.count;if(P instanceof he){for(const B of P)u.pushValue(B);return P.length}else return u.pushValue(P),1}catch(P){if(P===1/0)throw P;return u.pushValue(P),u.lua.lua_error(u.address)}},"ii")}close(){this.thread.lua.module.removeFunction(this.gcPointer),this.thread.lua.module.removeFunction(this.functionWrapper),this.callbackContext.close(),this.callbackContext.lua.luaL_unref(this.callbackContext.address,Y,this.callbackContextIndex)}isType(r,a,o){return o===p.LuaType.Function}pushValue(r,a){if(typeof a.target!="function")return!1;const o=r.lua.ref(a),u=r.lua.lua_newuserdatauv(r.address,U,0);if(r.lua.module.setValue(u,o,"*"),p.LuaType.Nil===r.lua.luaL_getmetatable(r.address,this.name))throw r.pop(1),r.lua.unref(o),new Error(`metatable not found: ${this.name}`);return r.lua.lua_setmetatable(r.address,-2),r.lua.lua_pushcclosure(r.address,this.functionWrapper,1),!0}getValue(r,a){var o;r.lua.lua_pushvalue(r.address,a);const u=r.lua.luaL_ref(r.address,Y),m=(...y)=>{var M;if(this.callbackContext.isClosed()){console.warn("Tried to call a function after closing lua state");return}const k=this.callbackContext.newThread();try{const N=k.lua.lua_rawgeti(k.address,Y,BigInt(u));if(N!==p.LuaType.Function){const P=k.lua.luaL_getmetafield(k.address,-1,"__call");if(k.pop(),P!==p.LuaType.Function)throw new Error(`A value of type '${N}' was pushed but it is not callable`)}for(const P of y)k.pushValue(P);!((M=this.options)===null||M===void 0)&&M.functionTimeout&&k.setTimeout(Date.now()+this.options.functionTimeout);const R=k.lua.lua_pcallk(k.address,y.length,1,0,0,null);if(R===p.LuaReturn.Yield)throw new Error("cannot yield in callbacks from javascript");return k.assertOk(R),k.getTop()>0?k.getValue(-1):void 0}finally{k.close(),this.callbackContext.pop()}};return(o=this.functionRegistry)===null||o===void 0||o.register(m,u),m}}function Hr(_,r){return new Ur(_,r)}class Vr extends fe{constructor(r){if(super(r,"js_null"),this.gcPointer=r.lua.module.addFunction(a=>{const o=r.lua.luaL_checkudata(a,1,this.name),u=r.lua.module.getValue(o,"*");return r.lua.unref(u),p.LuaReturn.Ok},"ii"),r.lua.luaL_newmetatable(r.address,this.name)){const a=r.lua.lua_gettop(r.address);r.lua.lua_pushstring(r.address,"protected metatable"),r.lua.lua_setfield(r.address,a,"__metatable"),r.lua.lua_pushcclosure(r.address,this.gcPointer,0),r.lua.lua_setfield(r.address,a,"__gc"),r.pushValue(()=>null),r.lua.lua_setfield(r.address,a,"__index"),r.pushValue(()=>"null"),r.lua.lua_setfield(r.address,a,"__tostring"),r.pushValue((o,u)=>o===u),r.lua.lua_setfield(r.address,a,"__eq")}r.lua.lua_pop(r.address,1),super.pushValue(r,new te({},{})),r.lua.lua_setglobal(r.address,"null")}getValue(r,a){if(!r.lua.luaL_testudata(r.address,a,this.name))throw new Error(`data does not have the expected metatable: ${this.name}`);return null}pushValue(r,a){return(a==null?void 0:a.target)!==null?!1:(r.lua.lua_getglobal(r.address,"null"),!0)}close(){this.thread.lua.module.removeFunction(this.gcPointer)}}function jr(_){return new Vr(_)}class Br extends fe{constructor(r,a){if(super(r,"js_promise"),this.gcPointer=r.lua.module.addFunction(o=>{const u=r.lua.luaL_checkudata(o,1,this.name),m=r.lua.module.getValue(u,"*");return r.lua.unref(m),p.LuaReturn.Ok},"ii"),r.lua.luaL_newmetatable(r.address,this.name)){const o=r.lua.lua_gettop(r.address);r.lua.lua_pushstring(r.address,"protected metatable"),r.lua.lua_setfield(r.address,o,"__metatable"),r.lua.lua_pushcclosure(r.address,this.gcPointer,0),r.lua.lua_setfield(r.address,o,"__gc");const u=m=>{if(Promise.resolve(m)!==m&&typeof m.then!="function")throw new Error("promise method called without self instance");return!0};r.pushValue({next:(m,...y)=>u(m)&&m.then(...y),catch:(m,...y)=>u(m)&&m.catch(...y),finally:(m,...y)=>u(m)&&m.finally(...y),await:lt((m,y)=>{if(u(y),m.address===r.address)throw new Error("cannot await in the main thread");let M;const k=y.then(R=>{M={status:"fulfilled",value:R}}).catch(R=>{M={status:"rejected",value:R}}),N=this.thread.lua.module.addFunction(R=>{if(!M)return r.lua.lua_yieldk(m.address,0,0,N);this.thread.lua.module.removeFunction(N);const P=r.stateToThread(R);if(M.status==="rejected")return P.pushValue(M.value||new Error("promise rejected with no error")),this.thread.lua.lua_error(R);if(M.value instanceof Ge)return M.value.count;if(M.value instanceof he){for(const B of M.value)P.pushValue(B);return M.value.length}else return P.pushValue(M.value),1},"iiii");return m.pushValue(k),new Ge(r.lua.lua_yieldk(m.address,1,0,N))},{receiveThread:!0})}),r.lua.lua_setfield(r.address,o,"__index"),r.pushValue((m,y)=>m===y),r.lua.lua_setfield(r.address,o,"__eq")}r.lua.lua_pop(r.address,1),a&&r.set("Promise",{create:o=>new Promise(o),all:o=>{if(!Array.isArray(o))throw new Error("argument must be an array of promises");return Promise.all(o.map(u=>Promise.resolve(u)))},resolve:o=>Promise.resolve(o)})}close(){this.thread.lua.module.removeFunction(this.gcPointer)}pushValue(r,a){return Promise.resolve(a.target)!==a.target&&typeof a.target.then!="function"?!1:super.pushValue(r,a)}}function zr(_,r){return new Br(_,r)}function Vt(_,r){return new te(_,r||{})}class Yr extends fe{constructor(r){if(super(r,"js_proxy"),this.gcPointer=r.lua.module.addFunction(a=>{const o=r.lua.luaL_checkudata(a,1,this.name),u=r.lua.module.getValue(o,"*");return r.lua.unref(u),p.LuaReturn.Ok},"ii"),r.lua.luaL_newmetatable(r.address,this.name)){const a=r.lua.lua_gettop(r.address);r.lua.lua_pushstring(r.address,"protected metatable"),r.lua.lua_setfield(r.address,a,"__metatable"),r.lua.lua_pushcclosure(r.address,this.gcPointer,0),r.lua.lua_setfield(r.address,a,"__gc"),r.pushValue((o,u)=>{switch(typeof u){case"number":u=u-1;case"string":break;default:throw new Error("Only strings or numbers can index js objects")}const m=o[u];return typeof m=="function"?lt(m,{self:o}):m}),r.lua.lua_setfield(r.address,a,"__index"),r.pushValue((o,u,m)=>{switch(typeof u){case"number":u=u-1;case"string":break;default:throw new Error("Only strings or numbers can index js objects")}o[u]=m}),r.lua.lua_setfield(r.address,a,"__newindex"),r.pushValue(o=>{var u,m;return(m=(u=o.toString)===null||u===void 0?void 0:u.call(o))!==null&&m!==void 0?m:typeof o}),r.lua.lua_setfield(r.address,a,"__tostring"),r.pushValue(o=>o.length||0),r.lua.lua_setfield(r.address,a,"__len"),r.pushValue(o=>{const u=Object.getOwnPropertyNames(o);let m=0;return he.of(()=>{const y=he.of(u[m],o[u[m]]);return m++,y},o,null)}),r.lua.lua_setfield(r.address,a,"__pairs"),r.pushValue((o,u)=>o===u),r.lua.lua_setfield(r.address,a,"__eq"),r.pushValue((o,...u)=>(u[0]===o&&u.shift(),o(...u))),r.lua.lua_setfield(r.address,a,"__call")}r.lua.lua_pop(r.address,1)}isType(r,a,o,u){return o===p.LuaType.Userdata&&u===this.name}getValue(r,a){const o=r.lua.lua_touserdata(r.address,a),u=r.lua.module.getValue(o,"*");return r.lua.getRef(u)}pushValue(r,a){var o;const{target:u,options:m}=a;if(m.proxy===void 0){if(u==null||typeof u!="object"&&!(typeof u=="function"&&((o=u.prototype)===null||o===void 0?void 0:o.constructor)===u&&u.toString().startsWith("class "))||Promise.resolve(u)===u||typeof u.then=="function")return!1}else if(m.proxy===!1)return!1;return m.metatable&&!(m.metatable instanceof te)?(a.options.metatable=Vt(m.metatable,{proxy:!1}),!1):super.pushValue(r,a)}close(){this.thread.lua.module.removeFunction(this.gcPointer)}}function Wr(_){return new Yr(_)}class $r extends fe{constructor(r){super(r,"js_table")}close(){}isType(r,a,o){return o===p.LuaType.Table}getValue(r,a,o){const u=o||new Map,m=r.lua.lua_topointer(r.address,a);let y=u.get(m);if(!y){const M=this.readTableKeys(r,a);y=M.length>0&&M.every((N,R)=>N===String(R+1))?[]:{},u.set(m,y),this.readTableValues(r,a,u,y)}return y}pushValue(r,{target:a},o){if(typeof a!="object"||a===null)return!1;const u=o||new Map,m=u.get(a);if(m!==void 0)return r.lua.lua_rawgeti(r.address,Y,BigInt(m)),!0;try{const y=r.getTop()+1,M=(k,N)=>{r.lua.lua_createtable(r.address,k,N);const R=r.lua.luaL_ref(r.address,Y);u.set(a,R),r.lua.lua_rawgeti(r.address,Y,BigInt(R))};if(Array.isArray(a)){M(a.length,0);for(let k=0;k<a.length;k++)r.pushValue(k+1,u),r.pushValue(a[k],u),r.lua.lua_settable(r.address,y)}else{M(0,Object.getOwnPropertyNames(a).length);for(const k in a)r.pushValue(k,u),r.pushValue(a[k],u),r.lua.lua_settable(r.address,y)}}finally{if(o===void 0)for(const y of u.values())r.lua.luaL_unref(r.address,Y,y)}return!0}readTableKeys(r,a){const o=[];for(r.lua.lua_pushnil(r.address);r.lua.lua_next(r.address,a);){const u=r.indexToString(-2);o.push(u),r.pop()}return o}readTableValues(r,a,o,u){const m=Array.isArray(u);for(r.lua.lua_pushnil(r.address);r.lua.lua_next(r.address,a);){const y=r.indexToString(-2),M=r.getValue(-1,void 0,o);m?u.push(M):u[y]=M,r.pop()}}}function Gr(_){return new $r(_)}function Kr(_){return new te(_,{reference:!0})}class qr extends fe{constructor(r){if(super(r,"js_userdata"),this.gcPointer=r.lua.module.addFunction(a=>{const o=r.lua.luaL_checkudata(a,1,this.name),u=r.lua.module.getValue(o,"*");return r.lua.unref(u),p.LuaReturn.Ok},"ii"),r.lua.luaL_newmetatable(r.address,this.name)){const a=r.lua.lua_gettop(r.address);r.lua.lua_pushstring(r.address,"protected metatable"),r.lua.lua_setfield(r.address,a,"__metatable"),r.lua.lua_pushcclosure(r.address,this.gcPointer,0),r.lua.lua_setfield(r.address,a,"__gc")}r.lua.lua_pop(r.address,1)}isType(r,a,o,u){return o===p.LuaType.Userdata&&u===this.name}getValue(r,a){const o=r.lua.lua_touserdata(r.address,a),u=r.lua.module.getValue(o,"*");return r.lua.getRef(u)}pushValue(r,a){return a.options.reference?super.pushValue(r,a):!1}close(){this.thread.lua.module.removeFunction(this.gcPointer)}}function Xr(_){return new qr(_)}class jt{constructor(r,{openStandardLibs:a=!0,injectObjects:o=!1,enableProxy:u=!0,traceAllocations:m=!1,functionTimeout:y=void 0}={}){this.cmodule=r,this.global=new Ht(this.cmodule,m),this.global.registerTypeExtension(0,Gr(this.global)),this.global.registerTypeExtension(0,Hr(this.global,{functionTimeout:y})),this.global.registerTypeExtension(1,zr(this.global,o)),o&&this.global.registerTypeExtension(5,jr(this.global)),u?this.global.registerTypeExtension(3,Wr(this.global)):this.global.registerTypeExtension(1,Dr(this.global,o)),this.global.registerTypeExtension(4,Xr(this.global)),a&&this.cmodule.luaL_openlibs(this.global.address)}doString(r){return this.callByteCode(a=>a.loadString(r))}doFile(r){return this.callByteCode(a=>a.loadFile(r))}doStringSync(r){return this.global.loadString(r),this.global.runSync()[0]}doFileSync(r){return this.global.loadFile(r),this.global.runSync()[0]}async callByteCode(r){const a=this.global.newThread(),o=this.global.getTop();try{r(a);const u=await a.run(0);return u.length>0?(this.cmodule.lua_xmove(a.address,this.global.address,u.length),this.global.getValue(this.global.getTop()-u.length+1)):void 0}finally{this.global.remove(o)}}}var Jr=(()=>{var _=typeof document>"u"&&typeof location>"u"?it("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:D&&D.src||new URL("index.js",document.baseURI).href;return async function(r={}){var a=r,o,u;a.ready=new Promise((e,t)=>{o=e,u=t}),"_malloc _free _realloc _luaL_checkversion_ _luaL_getmetafield _luaL_callmeta _luaL_tolstring _luaL_argerror _luaL_typeerror _luaL_checklstring _luaL_optlstring _luaL_checknumber _luaL_optnumber _luaL_checkinteger _luaL_optinteger _luaL_checkstack _luaL_checktype _luaL_checkany _luaL_newmetatable _luaL_setmetatable _luaL_testudata _luaL_checkudata _luaL_where _luaL_fileresult _luaL_execresult _luaL_ref _luaL_unref _luaL_loadfilex _luaL_loadbufferx _luaL_loadstring _luaL_newstate _luaL_len _luaL_addgsub _luaL_gsub _luaL_setfuncs _luaL_getsubtable _luaL_traceback _luaL_requiref _luaL_buffinit _luaL_prepbuffsize _luaL_addlstring _luaL_addstring _luaL_addvalue _luaL_pushresult _luaL_pushresultsize _luaL_buffinitsize _lua_newstate _lua_close _lua_newthread _lua_resetthread _lua_atpanic _lua_version _lua_absindex _lua_gettop _lua_settop _lua_pushvalue _lua_rotate _lua_copy _lua_checkstack _lua_xmove _lua_isnumber _lua_isstring _lua_iscfunction _lua_isinteger _lua_isuserdata _lua_type _lua_typename _lua_tonumberx _lua_tointegerx _lua_toboolean _lua_tolstring _lua_rawlen _lua_tocfunction _lua_touserdata _lua_tothread _lua_topointer _lua_arith _lua_rawequal _lua_compare _lua_pushnil _lua_pushnumber _lua_pushinteger _lua_pushlstring _lua_pushstring _lua_pushcclosure _lua_pushboolean _lua_pushlightuserdata _lua_pushthread _lua_getglobal _lua_gettable _lua_getfield _lua_geti _lua_rawget _lua_rawgeti _lua_rawgetp _lua_createtable _lua_newuserdatauv _lua_getmetatable _lua_getiuservalue _lua_setglobal _lua_settable _lua_setfield _lua_seti _lua_rawset _lua_rawseti _lua_rawsetp _lua_setmetatable _lua_setiuservalue _lua_callk _lua_pcallk _lua_load _lua_dump _lua_yieldk _lua_resume _lua_status _lua_isyieldable _lua_setwarnf _lua_warning _lua_error _lua_next _lua_concat _lua_len _lua_stringtonumber _lua_getallocf _lua_setallocf _lua_toclose _lua_closeslot _lua_getstack _lua_getinfo _lua_getlocal _lua_setlocal _lua_getupvalue _lua_setupvalue _lua_upvalueid _lua_upvaluejoin _lua_sethook _lua_gethook _lua_gethookmask _lua_gethookcount _lua_setcstacklimit _luaopen_base _luaopen_coroutine _luaopen_table _luaopen_io _luaopen_os _luaopen_string _luaopen_utf8 _luaopen_math _luaopen_debug _luaopen_package _luaL_openlibs _memory ___indirect_function_table _fflush onRuntimeInitialized".split(" ").forEach(e=>{Object.getOwnPropertyDescriptor(a.ready,e)||Object.defineProperty(a.ready,e,{get:()=>z("You are getting "+e+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),set:()=>z("You are setting "+e+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")})});var m=Object.assign({},a),y="./this.program",M=(e,t)=>{throw t},k=typeof window=="object",N=typeof importScripts=="function",R=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",P=!k&&!R&&!N;if(a.ENVIRONMENT)throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");var B="",Te,Se,Me;if(R){if(typeof process>"u"||!process.release||process.release.name!=="node")throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var Bt=process.versions.node,De=Bt.split(".").slice(0,3);if(De=1e4*De[0]+100*De[1]+1*De[2].split("-")[0],16e4>De)throw Error("This emscripten-generated code requires node v16.0.0 (detected v"+Bt+")");const{createRequire:e}=await En(async()=>{const{createRequire:t}=await Promise.resolve().then(()=>Sn);return{createRequire:t}},void 0);var xe=e(typeof document>"u"&&typeof location>"u"?it("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:D&&D.src||new URL("index.js",document.baseURI).href),ut=xe("fs"),ot=xe("path");N?B=ot.dirname(B)+"/":B=xe("url").fileURLToPath(new URL("./",typeof document>"u"&&typeof location>"u"?it("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:D&&D.src||new URL("index.js",document.baseURI).href)),Te=(t,n)=>(t=Be(t)?new URL(t):ot.normalize(t),ut.readFileSync(t,n?void 0:"utf8")),Me=t=>(t=Te(t,!0),t.buffer||(t=new Uint8Array(t)),g(t.buffer),t),Se=(t,n,i,l=!0)=>{t=Be(t)?new URL(t):ot.normalize(t),ut.readFile(t,l?void 0:"utf8",(c,f)=>{c?i(c):n(l?f.buffer:f)})},!a.thisProgram&&1<process.argv.length&&(y=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),M=(t,n)=>{throw process.exitCode=t,n},a.inspect=()=>"[Emscripten Module object]"}else if(P){if(typeof process=="object"&&typeof xe=="function"||typeof window=="object"||typeof importScripts=="function")throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");typeof read<"u"&&(Te=read),Me=e=>typeof readbuffer=="function"?new Uint8Array(readbuffer(e)):(e=read(e,"binary"),g(typeof e=="object"),e),Se=(e,t)=>{setTimeout(()=>t(Me(e)))},typeof clearTimeout>"u"&&(globalThis.clearTimeout=()=>{}),typeof setTimeout>"u"&&(globalThis.setTimeout=e=>typeof e=="function"?e():z()),typeof quit=="function"&&(M=(e,t)=>{throw setTimeout(()=>{if(!(t instanceof tr)){let n=t;t&&typeof t=="object"&&t.stack&&(n=[t,t.stack]),W(`exiting due to exception: ${n}`)}quit(e)}),t}),typeof print<"u"&&(typeof console>"u"&&(console={}),console.log=print,console.warn=console.error=typeof printErr<"u"?printErr:print)}else if(k||N){if(N?B=self.location.href:typeof document<"u"&&document.currentScript&&(B=document.currentScript.src),_&&(B=_),B.indexOf("blob:")!==0?B=B.substr(0,B.replace(/[?#].*/,"").lastIndexOf("/")+1):B="",typeof window!="object"&&typeof importScripts!="function")throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");Te=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},N&&(Me=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),Se=(e,t,n)=>{var i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="arraybuffer",i.onload=()=>{i.status==200||i.status==0&&i.response?t(i.response):n()},i.onerror=n,i.send(null)}}else throw Error("environment detection error");var Fe=console.log.bind(console),W=console.error.bind(console);Object.assign(a,m),m=null,L("ENVIRONMENT"),L("GL_MAX_TEXTURE_IMAGE_UNITS"),L("SDL_canPlayWithWebAudio"),L("SDL_numSimultaneouslyQueuedBuffers"),L("INITIAL_MEMORY"),L("wasmMemory"),L("arguments"),L("buffer"),L("canvas"),L("doNotCaptureKeyboard"),L("dynamicLibraries"),L("elementPointerLock"),L("extraStackTrace"),L("forcedAspectRatio"),L("instantiateWasm"),L("keyboardListeningElement"),L("freePreloadedMediaOnUse"),L("loadSplitModule"),L("logReadFiles"),L("mainScriptUrlOrBlob"),L("mem"),L("monitorRunDependencies"),L("noExitRuntime"),L("noInitialRun"),L("onAbort"),L("onCustomMessage"),L("onExit"),L("onFree"),L("onFullScreen"),L("onMalloc"),L("onRealloc"),L("onRuntimeInitialized"),L("postMainLoop"),L("postRun"),L("preInit"),L("preMainLoop"),L("preinitializedWebGLContext"),L("memoryInitializerRequest"),L("preloadPlugins"),L("print"),L("printErr"),L("quit"),L("setStatus"),L("statusMessage"),L("stderr"),L("stdin"),L("stdout"),L("thisProgram"),L("wasm"),L("wasmBinary"),L("websocket"),L("fetchSettings"),se("arguments","arguments_"),se("thisProgram","thisProgram"),se("quit","quit_"),g(typeof a.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),g(typeof a.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),g(typeof a.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),g(typeof a.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),g(typeof a.read>"u","Module.read option was removed (modify read_ in JS)"),g(typeof a.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),g(typeof a.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),g(typeof a.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),g(typeof a.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),se("asm","wasmExports"),se("read","read_"),se("readAsync","readAsync"),se("readBinary","readBinary"),se("setWindowTitle","setWindowTitle"),g(!P,"shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable."),se("wasmBinary","wasmBinary"),typeof WebAssembly!="object"&&z("no native wasm support detected");var Ue,He=!1;function g(e,t){e||z("Assertion failed"+(t?": "+t:""))}var G,qe,Oe,v,V,ct,Xe,dt;function zt(){var e=Ue.buffer;a.HEAP8=G=new Int8Array(e),a.HEAP16=Oe=new Int16Array(e),a.HEAPU8=qe=new Uint8Array(e),a.HEAPU16=new Uint16Array(e),a.HEAP32=v=new Int32Array(e),a.HEAPU32=V=new Uint32Array(e),a.HEAPF32=ct=new Float32Array(e),a.HEAPF64=dt=new Float64Array(e),a.HEAP64=Xe=new BigInt64Array(e),a.HEAPU64=new BigUint64Array(e)}g(!a.STACK_SIZE,"STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),g(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support"),g(!a.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),g(!a.INITIAL_MEMORY,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");function ht(){if(!He){var e=Nt();e==0&&(e+=4);var t=V[e>>2],n=V[e+4>>2];t==34821223&&n==2310721022||z(`Stack overflow! Stack cookie has been overwritten at ${ze(e)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ze(n)} ${ze(t)}`),V[0]!=1668509029&&z("Runtime error: The application has corrupted its heap memory area (address zero)!")}}var Yt=new Int16Array(1),Wt=new Int8Array(Yt.buffer);if(Yt[0]=25459,Wt[0]!==115||Wt[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";var ft=[],mt=[],$t=[],_t=!1;g(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),g(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),g(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),g(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var Ve=0,pe=null,je=null,Ae={};function Gt(e){for(var t=e;;){if(!Ae[e])return e;e=t+Math.random()}}function pt(e){Ve++,e?(g(!Ae[e]),Ae[e]=1,pe===null&&typeof setInterval<"u"&&(pe=setInterval(()=>{if(He)clearInterval(pe),pe=null;else{var t=!1,n;for(n in Ae)t||(t=!0,W("still waiting on run dependencies:")),W(`dependency: ${n}`);t&&W("(end of list)")}},1e4))):W("warning: run dependency added without ID")}function Je(e){Ve--,e?(g(Ae[e]),delete Ae[e]):W("warning: run dependency removed without ID"),Ve==0&&(pe!==null&&(clearInterval(pe),pe=null),je&&(e=je,je=null,e()))}function z(e){throw e="Aborted("+e+")",W(e),He=!0,e=new WebAssembly.RuntimeError(e),u(e),e}var Kt=e=>e.startsWith("data:application/octet-stream;base64,"),Be=e=>e.startsWith("file://");function d(e){return function(){g(_t,`native function \`${e}\` called before runtime initialization`);var t=ke[e];return g(t,`exported native function \`${e}\` not found`),t.apply(null,arguments)}}var me;if(a.locateFile){if(me="glue.wasm",!Kt(me)){var qt=me;me=a.locateFile?a.locateFile(qt,B):B+qt}}else me=new URL("glue.wasm",typeof document>"u"&&typeof location>"u"?it("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:D&&D.src||new URL("index.js",document.baseURI).href).href;function Xt(e){if(Me)return Me(e);throw"both async and sync fetching of the wasm failed"}function en(e){if(k||N){if(typeof fetch=="function"&&!Be(e))return fetch(e,{credentials:"same-origin"}).then(t=>{if(!t.ok)throw"failed to load wasm binary file at '"+e+"'";return t.arrayBuffer()}).catch(()=>Xt(e));if(Se)return new Promise((t,n)=>{Se(e,i=>t(new Uint8Array(i)),n)})}return Promise.resolve().then(()=>Xt(e))}function Jt(e,t,n){return en(e).then(i=>WebAssembly.instantiate(i,t)).then(i=>i).then(n,i=>{W(`failed to asynchronously prepare wasm: ${i}`),Be(me)&&W(`warning: Loading from a file URI (${me}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),z(i)})}function tn(e,t){var n=me;return typeof WebAssembly.instantiateStreaming!="function"||Kt(n)||Be(n)||R||typeof fetch!="function"?Jt(n,e,t):fetch(n,{credentials:"same-origin"}).then(i=>WebAssembly.instantiateStreaming(i,e).then(t,function(l){return W(`wasm streaming compile failed: ${l}`),W("falling back to ArrayBuffer instantiation"),Jt(n,e,t)}))}function se(e,t){Object.getOwnPropertyDescriptor(a,e)||Object.defineProperty(a,e,{configurable:!0,get(){z(`\`Module.${e}\` has been replaced by \`${t}\` (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)`)}})}function L(e){Object.getOwnPropertyDescriptor(a,e)&&z(`\`Module.${e}\` was supplied but \`${e}\` not included in INCOMING_MODULE_JS_API`)}function Zt(e){return e==="FS_createPath"||e==="FS_createDataFile"||e==="FS_createPreloadedFile"||e==="FS_unlink"||e==="addRunDependency"||e==="FS_createLazyFile"||e==="FS_createDevice"||e==="removeRunDependency"}function Qt(e,t){typeof globalThis<"u"&&Object.defineProperty(globalThis,e,{configurable:!0,get(){Re(`\`${e}\` is not longer defined by emscripten. ${t}`)}})}Qt("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),Qt("asm","Please use wasmExports instead");function er(e){Object.getOwnPropertyDescriptor(a,e)||Object.defineProperty(a,e,{configurable:!0,get(){var t=`'${e}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;Zt(e)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),z(t)}})}function tr(e){this.name="ExitStatus",this.message=`Program terminated with exit(${e})`,this.status=e}var ze=e=>(g(typeof e=="number"),"0x"+(e>>>0).toString(16).padStart(8,"0")),Re=e=>{gt||(gt={}),gt[e]||(gt[e]=1,R&&(e="warning: "+e),W(e))},gt,rr=(e,t)=>{for(var n=0,i=e.length-1;0<=i;i--){var l=e[i];l==="."?e.splice(i,1):l===".."?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n;n--)e.unshift("..");return e},le=e=>{var t=e.charAt(0)==="/",n=e.substr(-1)==="/";return(e=rr(e.split("/").filter(i=>!!i),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e},bt=e=>{var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);return e=t[0],t=t[1],!e&&!t?".":(t&&(t=t.substr(0,t.length-1)),e+t)},ge=e=>{if(e==="/")return"/";e=le(e),e=e.replace(/\/$/,"");var t=e.lastIndexOf("/");return t===-1?e:e.substr(t+1)},rn=(e,t)=>le(e+"/"+t),nn=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return n=>crypto.getRandomValues(n);if(R)try{var e=xe("crypto");if(e.randomFillSync)return n=>e.randomFillSync(n);var t=e.randomBytes;return n=>(n.set(t(n.byteLength)),n)}catch{}z("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };")},nr=e=>(nr=nn())(e);function be(){for(var e="",t=!1,n=arguments.length-1;-1<=n&&!t;n--){if(t=0<=n?arguments[n]:s.cwd(),typeof t!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!t)return"";e=t+"/"+e,t=t.charAt(0)==="/"}return e=rr(e.split("/").filter(i=>!!i),!t).join("/"),(t?"/":"")+e||"."}var ar=(e,t)=>{function n(f){for(var b=0;b<f.length&&f[b]==="";b++);for(var O=f.length-1;0<=O&&f[O]==="";O--);return b>O?[]:f.slice(b,O-b+1)}e=be(e).substr(1),t=be(t).substr(1),e=n(e.split("/")),t=n(t.split("/"));for(var i=Math.min(e.length,t.length),l=i,c=0;c<i;c++)if(e[c]!==t[c]){l=c;break}for(i=[],c=l;c<e.length;c++)i.push("..");return i=i.concat(t.slice(l)),i.join("/")},ir=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Ne=(e,t)=>{for(var n=t+NaN,i=t;e[i]&&!(i>=n);)++i;if(16<i-t&&e.buffer&&ir)return ir.decode(e.subarray(t,i));for(n="";t<i;){var l=e[t++];if(l&128){var c=e[t++]&63;if((l&224)==192)n+=String.fromCharCode((l&31)<<6|c);else{var f=e[t++]&63;(l&240)==224?l=(l&15)<<12|c<<6|f:((l&248)!=240&&Re("Invalid UTF-8 leading byte "+ze(l)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),l=(l&7)<<18|c<<12|f<<6|e[t++]&63),65536>l?n+=String.fromCharCode(l):(l-=65536,n+=String.fromCharCode(55296|l>>10,56320|l&1023))}}else n+=String.fromCharCode(l)}return n},wt=[],Ie=e=>{for(var t=0,n=0;n<e.length;++n){var i=e.charCodeAt(n);127>=i?t++:2047>=i?t+=2:55296<=i&&57343>=i?(t+=4,++n):t+=3}return t},yt=(e,t,n,i)=>{if(g(typeof e=="string",`stringToUTF8Array expects a string (got ${typeof e})`),!(0<i))return 0;var l=n;i=n+i-1;for(var c=0;c<e.length;++c){var f=e.charCodeAt(c);if(55296<=f&&57343>=f){var b=e.charCodeAt(++c);f=65536+((f&1023)<<10)|b&1023}if(127>=f){if(n>=i)break;t[n++]=f}else{if(2047>=f){if(n+1>=i)break;t[n++]=192|f>>6}else{if(65535>=f){if(n+2>=i)break;t[n++]=224|f>>12}else{if(n+3>=i)break;1114111<f&&Re("Invalid Unicode code point "+ze(f)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),t[n++]=240|f>>18,t[n++]=128|f>>12&63}t[n++]=128|f>>6&63}t[n++]=128|f&63}}return t[n]=0,n-l};function Ze(e,t){var n=Array(Ie(e)+1);return e=yt(e,n,0,n.length),t&&(n.length=e),n}var vt=[];function sr(e,t){vt[e]={input:[],output:[],K:t},kt(e,an)}var an={open(e){var t=vt[e.node.rdev];if(!t)throw new s.g(43);e.tty=t,e.seekable=!1},close(e){e.tty.K.fsync(e.tty)},fsync(e){e.tty.K.fsync(e.tty)},read(e,t,n,i){if(!e.tty||!e.tty.K.ra)throw new s.g(60);for(var l=0,c=0;c<i;c++){try{var f=e.tty.K.ra(e.tty)}catch{throw new s.g(29)}if(f===void 0&&l===0)throw new s.g(6);if(f==null)break;l++,t[n+c]=f}return l&&(e.node.timestamp=Date.now()),l},write(e,t,n,i){if(!e.tty||!e.tty.K.ia)throw new s.g(60);try{for(var l=0;l<i;l++)e.tty.K.ia(e.tty,t[n+l])}catch{throw new s.g(29)}return i&&(e.node.timestamp=Date.now()),l}},sn={ra(){e:{if(!wt.length){var e=null;if(R){var t=Buffer.alloc(256),n=0,i=process.stdin.fd;try{n=ut.readSync(i,t)}catch(l){if(l.toString().includes("EOF"))n=0;else throw l}0<n?e=t.slice(0,n).toString("utf-8"):e=null}else typeof window<"u"&&typeof window.prompt=="function"?(e=window.prompt("Input: "),e!==null&&(e+=`
`)):typeof readline=="function"&&(e=readline(),e!==null&&(e+=`
`));if(!e){e=null;break e}wt=Ze(e,!0)}e=wt.shift()}return e},ia(e,t){t===null||t===10?(Fe(Ne(e.output,0)),e.output=[]):t!=0&&e.output.push(t)},fsync(e){e.output&&0<e.output.length&&(Fe(Ne(e.output,0)),e.output=[])},Ia(){return{ab:25856,cb:5,$a:191,bb:35387,Za:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Ja(){return 0},Ka(){return[24,80]}},ln={ia(e,t){t===null||t===10?(W(Ne(e.output,0)),e.output=[]):t!=0&&e.output.push(t)},fsync(e){e.output&&0<e.output.length&&(W(Ne(e.output,0)),e.output=[])}},lr=()=>{z("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")};function ur(e,t){var n=e.m?e.m.length:0;n>=t||(t=Math.max(t,n*(1048576>n?2:1.125)>>>0),n!=0&&(t=Math.max(t,256)),n=e.m,e.m=new Uint8Array(t),0<e.o&&e.m.set(n.subarray(0,e.o),0))}var A={G:null,s(){return A.createNode(null,"/",16895,0)},createNode(e,t,n,i){if((n&61440)===24576||s.isFIFO(n))throw new s.g(63);return A.G||(A.G={dir:{node:{C:A.h.C,v:A.h.v,lookup:A.h.lookup,J:A.h.J,rename:A.h.rename,unlink:A.h.unlink,rmdir:A.h.rmdir,readdir:A.h.readdir,symlink:A.h.symlink},stream:{D:A.l.D}},file:{node:{C:A.h.C,v:A.h.v},stream:{D:A.l.D,read:A.l.read,write:A.l.write,T:A.l.T,S:A.l.S,V:A.l.V}},link:{node:{C:A.h.C,v:A.h.v,readlink:A.h.readlink},stream:{}},na:{node:{C:A.h.C,v:A.h.v},stream:s.Da}}),n=s.createNode(e,t,n,i),X(n.mode)?(n.h=A.G.dir.node,n.l=A.G.dir.stream,n.m={}):s.isFile(n.mode)?(n.h=A.G.file.node,n.l=A.G.file.stream,n.o=0,n.m=null):(n.mode&61440)===40960?(n.h=A.G.link.node,n.l=A.G.link.stream):(n.mode&61440)===8192&&(n.h=A.G.na.node,n.l=A.G.na.stream),n.timestamp=Date.now(),e&&(e.m[t]=n,e.timestamp=n.timestamp),n},lb(e){return e.m?e.m.subarray?e.m.subarray(0,e.o):new Uint8Array(e.m):new Uint8Array(0)},h:{C(e){var t={};return t.dev=(e.mode&61440)===8192?e.id:1,t.ino=e.id,t.mode=e.mode,t.nlink=1,t.uid=0,t.gid=0,t.rdev=e.rdev,X(e.mode)?t.size=4096:s.isFile(e.mode)?t.size=e.o:(e.mode&61440)===40960?t.size=e.link.length:t.size=0,t.atime=new Date(e.timestamp),t.mtime=new Date(e.timestamp),t.ctime=new Date(e.timestamp),t.Ba=4096,t.blocks=Math.ceil(t.size/t.Ba),t},v(e,t){if(t.mode!==void 0&&(e.mode=t.mode),t.timestamp!==void 0&&(e.timestamp=t.timestamp),t.size!==void 0&&(t=t.size,e.o!=t))if(t==0)e.m=null,e.o=0;else{var n=e.m;e.m=new Uint8Array(t),n&&e.m.set(n.subarray(0,Math.min(t,e.o))),e.o=t}},lookup(){throw s.da[44]},J(e,t,n,i){return A.createNode(e,t,n,i)},rename(e,t,n){if(X(e.mode)){try{var i=ue(t,n)}catch{}if(i)for(var l in i.m)throw new s.g(55)}delete e.parent.m[e.name],e.parent.timestamp=Date.now(),e.name=n,t.m[n]=e,t.timestamp=e.parent.timestamp,e.parent=t},unlink(e,t){delete e.m[t],e.timestamp=Date.now()},rmdir(e,t){var n=ue(e,t),i;for(i in n.m)throw new s.g(55);delete e.m[t],e.timestamp=Date.now()},readdir(e){var t=[".",".."],n;for(n in e.m)e.m.hasOwnProperty(n)&&t.push(n);return t},symlink(e,t,n){return e=A.createNode(e,t,41471,0),e.link=n,e},readlink(e){if((e.mode&61440)!==40960)throw new s.g(28);return e.link}},l:{read(e,t,n,i,l){var c=e.node.m;if(l>=e.node.o)return 0;if(e=Math.min(e.node.o-l,i),g(0<=e),8<e&&c.subarray)t.set(c.subarray(l,l+e),n);else for(i=0;i<e;i++)t[n+i]=c[l+i];return e},write(e,t,n,i,l,c){if(g(!(t instanceof ArrayBuffer)),t.buffer===G.buffer&&(c=!1),!i)return 0;if(e=e.node,e.timestamp=Date.now(),t.subarray&&(!e.m||e.m.subarray)){if(c)return g(l===0,"canOwn must imply no weird position inside the file"),e.m=t.subarray(n,n+i),e.o=i;if(e.o===0&&l===0)return e.m=t.slice(n,n+i),e.o=i;if(l+i<=e.o)return e.m.set(t.subarray(n,n+i),l),i}if(ur(e,l+i),e.m.subarray&&t.subarray)e.m.set(t.subarray(n,n+i),l);else for(c=0;c<i;c++)e.m[l+c]=t[n+c];return e.o=Math.max(e.o,l+i),i},D(e,t,n){if(n===1?t+=e.position:n===2&&s.isFile(e.node.mode)&&(t+=e.node.o),0>t)throw new s.g(28);return t},T(e,t,n){ur(e.node,t+n),e.node.o=Math.max(e.node.o,t+n)},S(e,t,n,i,l){if(!s.isFile(e.node.mode))throw new s.g(43);if(e=e.node.m,l&2||e.buffer!==G.buffer){if((0<n||n+t<e.length)&&(e.subarray?e=e.subarray(n,n+t):e=Array.prototype.slice.call(e,n,n+t)),n=!0,t=lr(),!t)throw new s.g(48);G.set(e,t)}else n=!1,t=e.byteOffset;return{Ra:t,Aa:n}},V(e,t,n,i){return A.l.write(e,t,0,i,n,!1),0}}},un=(e,t,n)=>{var i=Gt(`al ${e}`);Se(e,l=>{g(l,`Loading data file "${e}" failed (no arrayBuffer).`),t(new Uint8Array(l)),i&&Je(i)},()=>{if(n)n();else throw`Loading data file "${e}" failed.`}),i&&pt(i)},on=[],cn=(e,t,n,i)=>{typeof Browser<"u"&&Browser.R();var l=!1;return on.forEach(c=>{!l&&c.canHandle(t)&&(c.handle(e,t,n,i),l=!0)}),l},Et=(e,t)=>{var n=0;return e&&(n|=365),t&&(n|=146),n},dn={0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"},or={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},hn=e=>e.replace(/\b_Z[\w\d_]+/g,function(t){return Re("warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling"),t===t?t:t+" ["+t+"]"});function kt(e,t){s.pa[e]={l:t}}function X(e){return(e&61440)===16384}function ue(e,t){var n;if(n=(n=ye(e,"x"))?n:e.h.lookup?0:2)throw new s.g(n,e);for(n=s.F[Lt(e.id,t)];n;n=n.N){var i=n.name;if(n.parent.id===e.id&&i===t)return n}return s.lookup(e,t)}function $(e,t={}){if(e=be(e),!e)return{path:"",node:null};if(t=Object.assign({ba:!0,ka:0},t),8<t.ka)throw new s.g(32);e=e.split("/").filter(f=>!!f);for(var n=s.root,i="/",l=0;l<e.length;l++){var c=l===e.length-1;if(c&&t.parent)break;if(n=ue(n,e[l]),i=le(i+"/"+e[l]),n.A&&(!c||c&&t.ba)&&(n=n.A.root),!c||t.B){for(c=0;(n.mode&61440)===40960;)if(n=s.readlink(i),i=be(bt(i),n),n=$(i,{ka:t.ka+1}).node,40<c++)throw new s.g(32)}}return{path:i,node:n}}function we(e){for(var t;;){if(s.Z(e))return e=e.s.ua,t?e[e.length-1]!=="/"?`${e}/${t}`:e+t:e;t=t?`${e.name}/${t}`:e.name,e=e.parent}}function Lt(e,t){for(var n=0,i=0;i<t.length;i++)n=(n<<5)-n+t.charCodeAt(i)|0;return(e+n>>>0)%s.F.length}function cr(e){var t=Lt(e.parent.id,e.name);e.N=s.F[t],s.F[t]=e}function Qe(e){var t=Lt(e.parent.id,e.name);if(s.F[t]===e)s.F[t]=e.N;else for(t=s.F[t];t;){if(t.N===e){t.N=e.N;break}t=t.N}}function dr(e){var t=["r","w","rw"][e&3];return e&512&&(t+="w"),t}function ye(e,t){if(s.ta)return 0;if(!t.includes("r")||e.mode&292){if(t.includes("w")&&!(e.mode&146)||t.includes("x")&&!(e.mode&73))return 2}else return 2;return 0}function Tt(e,t){try{return ue(e,t),20}catch{}return ye(e,"wx")}function et(e,t,n){try{var i=ue(e,t)}catch(l){return l.u}if(e=ye(e,"wx"))return e;if(n){if(!X(i.mode))return 54;if(s.Z(i)||we(i)===s.cwd())return 10}else if(X(i.mode))return 31;return 0}function fn(){for(var e=0;e<=s.xa;e++)if(!s.streams[e])return e;throw new s.g(33)}function ee(e){if(e=s.qa(e),!e)throw new s.g(8);return e}function St(e,t=-1){return s.X||(s.X=function(){this.I={}},s.X.prototype={},Object.defineProperties(s.X.prototype,{object:{get(){return this.node},set(n){this.node=n}},flags:{get(){return this.I.flags},set(n){this.I.flags=n}},position:{get(){return this.I.position},set(n){this.I.position=n}}})),e=Object.assign(new s.X,e),t==-1&&(t=fn()),e.fd=t,s.streams[t]=e}function hr(e){var t=[];for(e=[e];e.length;){var n=e.pop();t.push(n),e.push.apply(e,n.U)}return t}function tt(e,t,n){return typeof n>"u"&&(n=t,t=438),s.J(e,t|8192,n)}function fr(){s.g||(s.g=function(e,t){this.name="ErrnoError",this.node=t,this.Sa=function(n){this.u=n;for(var i in or)if(or[i]===n){this.code=i;break}},this.Sa(e),this.message=dn[e],this.stack&&(Object.defineProperty(this,"stack",{value:Error().stack,writable:!0}),this.stack=hn(this.stack))},s.g.prototype=Error(),s.g.prototype.constructor=s.g,[44].forEach(e=>{s.da[e]=new s.g(e),s.da[e].stack="<generic error, no stack>"}))}function mr(e,t){try{var n=$(e,{B:!t});e=n.path}catch{}var i={Z:!1,exists:!1,error:0,name:null,path:null,object:null,Oa:!1,Qa:null,Pa:null};try{n=$(e,{parent:!0}),i.Oa=!0,i.Qa=n.path,i.Pa=n.node,i.name=ge(e),n=$(e,{B:!t}),i.exists=!0,i.path=n.path,i.object=n.node,i.name=n.node.name,i.Z=n.path==="/"}catch(l){i.error=l.u}return i}function mn(e,t,n,i){return e=typeof e=="string"?e:we(e),t=le(e+"/"+t),s.create(t,Et(n,i))}function Mt(e){if(!(e.La||e.Ma||e.link||e.m)){if(typeof XMLHttpRequest<"u")throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(Te)try{e.m=Ze(Te(e.url),!0),e.o=e.m.length}catch{throw new s.g(29)}else throw Error("Cannot load without read() or XMLHttpRequest.")}}var s={root:null,U:[],pa:{},streams:[],Na:1,F:null,oa:"/",Y:!1,ta:!0,g:null,da:{},Fa:null,W:0,createNode(e,t,n,i){return g(typeof e=="object"),e=new s.wa(e,t,n,i),cr(e),e},Z(e){return e===e.parent},isFile(e){return(e&61440)===32768},isFIFO(e){return(e&61440)===4096},isSocket(e){return(e&49152)===49152},xa:4096,qa:e=>s.streams[e],Da:{open(e){e.l=s.Ga(e.node.rdev).l,e.l.open&&e.l.open(e)},D(){throw new s.g(70)}},ha:e=>e>>8,nb:e=>e&255,M:(e,t)=>e<<8|t,Ga:e=>s.pa[e],va(e,t){function n(f){return g(0<s.W),s.W--,t(f)}function i(f){if(f){if(!i.Ea)return i.Ea=!0,n(f)}else++c>=l.length&&n(null)}typeof e=="function"&&(t=e,e=!1),s.W++,1<s.W&&W(`warning: ${s.W} FS.syncfs operations in flight at once, probably just doing extra work`);var l=hr(s.root.s),c=0;l.forEach(f=>{if(!f.type.va)return i(null);f.type.va(f,e,i)})},s(e,t,n){if(typeof e=="string")throw e;var i=n==="/",l=!n;if(i&&s.root)throw new s.g(10);if(!i&&!l){var c=$(n,{ba:!1});if(n=c.path,c=c.node,c.A)throw new s.g(10);if(!X(c.mode))throw new s.g(54)}return t={type:e,rb:t,ua:n,U:[]},e=e.s(t),e.s=t,t.root=e,i?s.root=e:c&&(c.A=t,c.s&&c.s.U.push(t)),e},xb(e){if(e=$(e,{ba:!1}),!e.node.A)throw new s.g(28);e=e.node;var t=e.A,n=hr(t);Object.keys(s.F).forEach(i=>{for(i=s.F[i];i;){var l=i.N;n.includes(i.s)&&Qe(i),i=l}}),e.A=null,t=e.s.U.indexOf(t),g(t!==-1),e.s.U.splice(t,1)},lookup(e,t){return e.h.lookup(e,t)},J(e,t,n){var i=$(e,{parent:!0}).node;if(e=ge(e),!e||e==="."||e==="..")throw new s.g(28);var l=Tt(i,e);if(l)throw new s.g(l);if(!i.h.J)throw new s.g(63);return i.h.J(i,e,t,n)},create(e,t){return s.J(e,(t!==void 0?t:438)&4095|32768,0)},mkdir(e,t){return s.J(e,(t!==void 0?t:511)&1023|16384,0)},ob(e,t){e=e.split("/");for(var n="",i=0;i<e.length;++i)if(e[i]){n+="/"+e[i];try{s.mkdir(n,t)}catch(l){if(l.u!=20)throw l}}},symlink(e,t){if(!be(e))throw new s.g(44);var n=$(t,{parent:!0}).node;if(!n)throw new s.g(44);t=ge(t);var i=Tt(n,t);if(i)throw new s.g(i);if(!n.h.symlink)throw new s.g(63);return n.h.symlink(n,t,e)},rename(e,t){var n=bt(e),i=bt(t),l=ge(e),c=ge(t),f=$(e,{parent:!0}),b=f.node;if(f=$(t,{parent:!0}),f=f.node,!b||!f)throw new s.g(44);if(b.s!==f.s)throw new s.g(75);var O=ue(b,l);if(e=ar(e,i),e.charAt(0)!==".")throw new s.g(28);if(e=ar(t,n),e.charAt(0)!==".")throw new s.g(55);try{var w=ue(f,c)}catch{}if(O!==w){if(t=X(O.mode),l=et(b,l,t))throw new s.g(l);if(l=w?et(f,c,t):Tt(f,c))throw new s.g(l);if(!b.h.rename)throw new s.g(63);if(O.A||w&&w.A)throw new s.g(10);if(f!==b&&(l=ye(b,"w")))throw new s.g(l);Qe(O);try{b.h.rename(O,f,c)}catch(F){throw F}finally{cr(O)}}},rmdir(e){var t=$(e,{parent:!0}).node;e=ge(e);var n=ue(t,e),i=et(t,e,!0);if(i)throw new s.g(i);if(!t.h.rmdir)throw new s.g(63);if(n.A)throw new s.g(10);t.h.rmdir(t,e),Qe(n)},readdir(e){if(e=$(e,{B:!0}).node,!e.h.readdir)throw new s.g(54);return e.h.readdir(e)},unlink(e){var t=$(e,{parent:!0}).node;if(!t)throw new s.g(44);e=ge(e);var n=ue(t,e),i=et(t,e,!1);if(i)throw new s.g(i);if(!t.h.unlink)throw new s.g(63);if(n.A)throw new s.g(10);t.h.unlink(t,e),Qe(n)},readlink(e){if(e=$(e).node,!e)throw new s.g(44);if(!e.h.readlink)throw new s.g(28);return be(we(e.parent),e.h.readlink(e))},stat(e,t){if(e=$(e,{B:!t}).node,!e)throw new s.g(44);if(!e.h.C)throw new s.g(63);return e.h.C(e)},lstat(e){return s.stat(e,!0)},chmod(e,t,n){if(e=typeof e=="string"?$(e,{B:!n}).node:e,!e.h.v)throw new s.g(63);e.h.v(e,{mode:t&4095|e.mode&-4096,timestamp:Date.now()})},lchmod(e,t){s.chmod(e,t,!0)},fchmod(e,t){e=ee(e),s.chmod(e.node,t)},chown(e,t,n,i){if(e=typeof e=="string"?$(e,{B:!i}).node:e,!e.h.v)throw new s.g(63);e.h.v(e,{timestamp:Date.now()})},lchown(e,t,n){s.chown(e,t,n,!0)},fchown(e,t,n){e=ee(e),s.chown(e.node,t,n)},truncate(e,t){if(0>t)throw new s.g(28);if(e=typeof e=="string"?$(e,{B:!0}).node:e,!e.h.v)throw new s.g(63);if(X(e.mode))throw new s.g(31);if(!s.isFile(e.mode))throw new s.g(28);var n=ye(e,"w");if(n)throw new s.g(n);e.h.v(e,{size:t,timestamp:Date.now()})},kb(e,t){if(e=ee(e),!(e.flags&2097155))throw new s.g(28);s.truncate(e.node,t)},yb(e,t,n){e=$(e,{B:!0}).node,e.h.v(e,{timestamp:Math.max(t,n)})},open(e,t,n){if(e==="")throw new s.g(44);if(typeof t=="string"){var i={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[t];if(typeof i>"u")throw Error(`Unknown file open mode: ${t}`);t=i}if(n=t&64?(typeof n>"u"?438:n)&4095|32768:0,typeof e=="object")var l=e;else{e=le(e);try{l=$(e,{B:!(t&131072)}).node}catch{}}if(i=!1,t&64)if(l){if(t&128)throw new s.g(20)}else l=s.J(e,n,0),i=!0;if(!l)throw new s.g(44);if((l.mode&61440)===8192&&(t&=-513),t&65536&&!X(l.mode))throw new s.g(54);if(!i&&(n=l?(l.mode&61440)===40960?32:X(l.mode)&&(dr(t)!=="r"||t&512)?31:ye(l,dr(t)):44))throw new s.g(n);return t&512&&!i&&s.truncate(l,0),t&=-131713,l=St({node:l,path:we(l),flags:t,seekable:!0,position:0,l:l.l,Xa:[],error:!1}),l.l.open&&l.l.open(l),!a.logReadFiles||t&1||(s.ja||(s.ja={}),e in s.ja||(s.ja[e]=1)),l},close(e){if(e.fd===null)throw new s.g(8);e.ea&&(e.ea=null);try{e.l.close&&e.l.close(e)}catch(t){throw t}finally{s.streams[e.fd]=null}e.fd=null},D(e,t,n){if(e.fd===null)throw new s.g(8);if(!e.seekable||!e.l.D)throw new s.g(70);if(n!=0&&n!=1&&n!=2)throw new s.g(28);return e.position=e.l.D(e,t,n),e.Xa=[],e.position},read(e,t,n,i,l){if(g(0<=n),0>i||0>l)throw new s.g(28);if(e.fd===null)throw new s.g(8);if((e.flags&2097155)===1)throw new s.g(8);if(X(e.node.mode))throw new s.g(31);if(!e.l.read)throw new s.g(28);var c=typeof l<"u";if(!c)l=e.position;else if(!e.seekable)throw new s.g(70);return t=e.l.read(e,t,n,i,l),c||(e.position+=t),t},write(e,t,n,i,l,c){if(g(0<=n),0>i||0>l)throw new s.g(28);if(e.fd===null)throw new s.g(8);if(!(e.flags&2097155))throw new s.g(8);if(X(e.node.mode))throw new s.g(31);if(!e.l.write)throw new s.g(28);e.seekable&&e.flags&1024&&s.D(e,0,2);var f=typeof l<"u";if(!f)l=e.position;else if(!e.seekable)throw new s.g(70);return t=e.l.write(e,t,n,i,l,c),f||(e.position+=t),t},T(e,t,n){if(e.fd===null)throw new s.g(8);if(0>t||0>=n)throw new s.g(28);if(!(e.flags&2097155))throw new s.g(8);if(!s.isFile(e.node.mode)&&!X(e.node.mode))throw new s.g(43);if(!e.l.T)throw new s.g(138);e.l.T(e,t,n)},S(e,t,n,i,l){if(i&2&&!(l&2)&&(e.flags&2097155)!==2)throw new s.g(2);if((e.flags&2097155)===1)throw new s.g(2);if(!e.l.S)throw new s.g(43);return e.l.S(e,t,n,i,l)},V(e,t,n,i,l){return g(0<=n),e.l.V?e.l.V(e,t,n,i,l):0},qb:()=>0,fa(e,t,n){if(!e.l.fa)throw new s.g(59);return e.l.fa(e,t,n)},readFile(e,t={}){if(t.flags=t.flags||0,t.encoding=t.encoding||"binary",t.encoding!=="utf8"&&t.encoding!=="binary")throw Error(`Invalid encoding type "${t.encoding}"`);var n,i=s.open(e,t.flags);e=s.stat(e).size;var l=new Uint8Array(e);return s.read(i,l,0,e,0),t.encoding==="utf8"?n=Ne(l,0):t.encoding==="binary"&&(n=l),s.close(i),n},writeFile(e,t,n={}){if(n.flags=n.flags||577,e=s.open(e,n.flags,n.mode),typeof t=="string"){var i=new Uint8Array(Ie(t)+1);t=yt(t,i,0,i.length),s.write(e,i,0,t,void 0,n.Ca)}else if(ArrayBuffer.isView(t))s.write(e,t,0,t.byteLength,void 0,n.Ca);else throw Error("Unsupported data type");s.close(e)},cwd:()=>s.oa,chdir(e){if(e=$(e,{B:!0}),e.node===null)throw new s.g(44);if(!X(e.node.mode))throw new s.g(54);var t=ye(e.node,"x");if(t)throw new s.g(t);s.oa=e.path},R(e,t,n){g(!s.R.Y,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),s.R.Y=!0,fr(),a.stdin=e||a.stdin,a.stdout=t||a.stdout,a.stderr=n||a.stderr,a.stdin?s.L("/dev","stdin",a.stdin):s.symlink("/dev/tty","/dev/stdin"),a.stdout?s.L("/dev","stdout",null,a.stdout):s.symlink("/dev/tty","/dev/stdout"),a.stderr?s.L("/dev","stderr",null,a.stderr):s.symlink("/dev/tty1","/dev/stderr"),e=s.open("/dev/stdin",0),t=s.open("/dev/stdout",1),n=s.open("/dev/stderr",1),g(e.fd===0,`invalid handle for stdin (${e.fd})`),g(t.fd===1,`invalid handle for stdout (${t.fd})`),g(n.fd===2,`invalid handle for stderr (${n.fd})`)},sb(){s.R.Y=!1,kr(0);for(var e=0;e<s.streams.length;e++){var t=s.streams[e];t&&s.close(t)}},jb(e,t){return e=mr(e,t),e.exists?e.object:null},hb(e,t){for(e=typeof e=="string"?e:we(e),t=t.split("/").reverse();t.length;){var n=t.pop();if(n){var i=le(e+"/"+n);try{s.mkdir(i)}catch{}e=i}}return i},L(e,t,n,i){e=rn(typeof e=="string"?e:we(e),t),t=Et(!!n,!!i),s.L.ha||(s.L.ha=64);var l=s.M(s.L.ha++,0);return kt(l,{open(c){c.seekable=!1},close(){i&&i.buffer&&i.buffer.length&&i(10)},read(c,f,b,O){for(var w=0,F=0;F<O;F++){try{var E=n()}catch{throw new s.g(29)}if(E===void 0&&w===0)throw new s.g(6);if(E==null)break;w++,f[b+F]=E}return w&&(c.node.timestamp=Date.now()),w},write(c,f,b,O){for(var w=0;w<O;w++)try{i(f[b+w])}catch{throw new s.g(29)}return O&&(c.node.timestamp=Date.now()),w}}),tt(e,t,l)},fb(e,t,n,i,l){function c(){this.ga=!1,this.I=[]}function f(E,C,h,S,T){if(E=E.node.m,T>=E.length)return 0;if(S=Math.min(E.length-T,S),g(0<=S),E.slice)for(var I=0;I<S;I++)C[h+I]=E[T+I];else for(I=0;I<S;I++)C[h+I]=E.get(T+I);return S}if(c.prototype.get=function(E){if(!(E>this.length-1||0>E)){var C=E%this.chunkSize;return this.sa(E/this.chunkSize|0)[C]}},c.prototype.Ha=function(E){this.sa=E},c.prototype.ma=function(){var E=new XMLHttpRequest;if(E.open("HEAD",n,!1),E.send(null),!(200<=E.status&&300>E.status||E.status===304))throw Error("Couldn't load "+n+". Status: "+E.status);var C=Number(E.getResponseHeader("Content-length")),h,S=(h=E.getResponseHeader("Accept-Ranges"))&&h==="bytes";E=(h=E.getResponseHeader("Content-Encoding"))&&h==="gzip";var T=1048576;S||(T=C);var I=this;I.Ha(q=>{var re=q*T,ne=(q+1)*T-1;if(ne=Math.min(ne,C-1),typeof I.I[q]>"u"){var It=I.I;if(re>ne)throw Error("invalid range ("+re+", "+ne+") or no bytes requested!");if(ne>C-1)throw Error("only "+C+" bytes available! programmer error!");var Q=new XMLHttpRequest;if(Q.open("GET",n,!1),C!==T&&Q.setRequestHeader("Range","bytes="+re+"-"+ne),Q.responseType="arraybuffer",Q.overrideMimeType&&Q.overrideMimeType("text/plain; charset=x-user-defined"),Q.send(null),!(200<=Q.status&&300>Q.status||Q.status===304))throw Error("Couldn't load "+n+". Status: "+Q.status);re=Q.response!==void 0?new Uint8Array(Q.response||[]):Ze(Q.responseText||"",!0),It[q]=re}if(typeof I.I[q]>"u")throw Error("doXHR failed!");return I.I[q]}),(E||!C)&&(T=C=1,T=C=this.sa(0).length,Fe("LazyFiles on gzip forces download of the whole file when length is accessed")),this.za=C,this.ya=T,this.ga=!0},typeof XMLHttpRequest<"u"){if(!N)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var b=new c;Object.defineProperties(b,{length:{get:function(){return this.ga||this.ma(),this.za}},chunkSize:{get:function(){return this.ga||this.ma(),this.ya}}});var O=void 0}else O=n,b=void 0;var w=mn(e,t,i,l);b?w.m=b:O&&(w.m=null,w.url=O),Object.defineProperties(w,{o:{get:function(){return this.m.length}}});var F={};return Object.keys(w.l).forEach(E=>{var C=w.l[E];F[E]=function(){return Mt(w),C.apply(null,arguments)}}),F.read=(E,C,h,S,T)=>(Mt(w),f(E,C,h,S,T)),F.S=(E,C,h)=>{Mt(w);var S=lr();if(!S)throw new s.g(48);return f(E,G,S,C,h),{Ra:S,Aa:!0}},w.l=F,w},Ya(){z("FS.absolutePath has been removed; use PATH_FS.resolve instead")},eb(){z("FS.createFolder has been removed; use FS.mkdir instead")},gb(){z("FS.createLink has been removed; use FS.symlink instead")},mb(){z("FS.joinPath has been removed; use PATH.join instead")},pb(){z("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},vb(){z("FS.standardizePath has been removed; use PATH.normalize instead")}},ie=e=>(g(typeof e=="number",`UTF8ToString expects a number (got ${typeof e})`),e?Ne(qe,e):"");function Ye(e,t){if(t.charAt(0)==="/")return t;if(e=e===-100?s.cwd():ee(e).path,t.length==0)throw new s.g(44);return le(e+"/"+t)}var Pe=void 0;function oe(){g(Pe!=null);var e=v[+Pe>>2];return Pe+=4,e}var rt=(e,t,n)=>(g(typeof n=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),yt(e,qe,t,n)),Ce=e=>e%4===0&&(e%100!==0||e%400===0),_r=[0,31,60,91,121,152,182,213,244,274,305,335],pr=[0,31,59,90,120,151,181,212,243,273,304,334],xt=e=>{var t=Ie(e)+1,n=pn(t);return n&&rt(e,n,t),n},nt={},gr=()=>{if(!Ft){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:y||"./this.program"},t;for(t in nt)nt[t]===void 0?delete e[t]:e[t]=nt[t];var n=[];for(t in e)n.push(`${t}=${e[t]}`);Ft=n}return Ft},Ft,br=[31,29,31,30,31,30,31,31,30,31,30,31],wr=[31,28,31,30,31,30,31,31,30,31,30,31],yr=(e,t)=>{g(0<=e.length,"writeArrayToMemory array must have a length (should be an array or typed array)"),G.set(e,t)},ve=[],Z,Ot=e=>{var t=ve[e];return t||(e>=ve.length&&(ve.length=e+1),ve[e]=t=Z.get(e)),g(Z.get(e)==t,"JavaScript-side Wasm function table mirror is out of date!"),t},_n=e=>{var t=a["_"+e];return g(t,"Cannot call unknown function "+e+", make sure it is exported"),t},Ee,At=[];function vr(e,t,n,i){e||(e=this),this.parent=e,this.s=e.s,this.A=null,this.id=s.Na++,this.name=t,this.mode=n,this.h={},this.l={},this.rdev=i}Object.defineProperties(vr.prototype,{read:{get:function(){return(this.mode&365)===365},set:function(e){e?this.mode|=365:this.mode&=-366}},write:{get:function(){return(this.mode&146)===146},set:function(e){e?this.mode|=146:this.mode&=-147}},Ma:{get:function(){return X(this.mode)}},La:{get:function(){return(this.mode&61440)===8192}}}),s.wa=vr,s.ib=(e,t,n,i,l,c,f,b,O,w)=>{function F(h){function S(T){if(w&&w(),!b){var I=e,q=t;if(I&&(I=typeof I=="string"?I:we(I),q=t?le(I+"/"+t):I),I=Et(i,l),q=s.create(q,I),T){if(typeof T=="string"){for(var re=Array(T.length),ne=0,It=T.length;ne<It;++ne)re[ne]=T.charCodeAt(ne);T=re}s.chmod(q,I|146),re=s.open(q,577),s.write(re,T,0,T.length,0,O),s.close(re),s.chmod(q,I)}}c&&c(),Je(C)}cn(h,E,S,()=>{f&&f(),Je(C)})||S(h)}var E=t?be(le(e+"/"+t)):e,C=Gt(`cp ${E}`);pt(C),typeof n=="string"?un(n,h=>F(h),f):F(n)},fr(),s.F=Array(4096),s.s(A,{},"/"),s.mkdir("/tmp"),s.mkdir("/home"),s.mkdir("/home/web_user"),function(){s.mkdir("/dev"),kt(s.M(1,3),{read:()=>0,write:(i,l,c,f)=>f}),tt("/dev/null",s.M(1,3)),sr(s.M(5,0),sn),sr(s.M(6,0),ln),tt("/dev/tty",s.M(5,0)),tt("/dev/tty1",s.M(6,0));var e=new Uint8Array(1024),t=0,n=()=>(t===0&&(t=nr(e).byteLength),e[--t]);s.L("/dev","random",n),s.L("/dev","urandom",n),s.mkdir("/dev/shm"),s.mkdir("/dev/shm/tmp")}(),function(){s.mkdir("/proc");var e=s.mkdir("/proc/self");s.mkdir("/proc/self/fd"),s.s({s(){var t=s.createNode(e,"fd",16895,73);return t.h={lookup(n,i){var l=ee(+i);return n={parent:null,s:{ua:"fake"},h:{readlink:()=>l.path}},n.parent=n}},t}},{},"/proc/self/fd")}(),s.Fa={MEMFS:A};var Er={__syscall_dup3:function(e,t,n){try{var i=ee(e);if(g(!n),i.fd===t)return-28;var l=s.qa(t);return l&&s.close(l),St(i,t).fd}catch(c){if(typeof s>"u"||c.name!=="ErrnoError")throw c;return-c.u}},__syscall_fcntl64:function(e,t,n){Pe=n;try{var i=ee(e);switch(t){case 0:var l=oe();if(0>l)return-28;for(;s.streams[l];)l++;return St(i,l).fd;case 1:case 2:return 0;case 3:return i.flags;case 4:return l=oe(),i.flags|=l,0;case 5:return l=oe(),Oe[l+0>>1]=2,0;case 6:case 7:return 0;case 16:case 8:return-28;case 9:return v[Rt()>>2]=28,-1;default:return-28}}catch(c){if(typeof s>"u"||c.name!=="ErrnoError")throw c;return-c.u}},__syscall_ioctl:function(e,t,n){Pe=n;try{var i=ee(e);switch(t){case 21509:return i.tty?0:-59;case 21505:if(!i.tty)return-59;if(i.tty.K.Ia){e=[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var l=oe();v[l>>2]=25856,v[l+4>>2]=5,v[l+8>>2]=191,v[l+12>>2]=35387;for(var c=0;32>c;c++)G[l+c+17>>0]=e[c]||0}return 0;case 21510:case 21511:case 21512:return i.tty?0:-59;case 21506:case 21507:case 21508:if(!i.tty)return-59;if(i.tty.K.Ja)for(l=oe(),e=[],c=0;32>c;c++)e.push(G[l+c+17>>0]);return 0;case 21519:return i.tty?(l=oe(),v[l>>2]=0):-59;case 21520:return i.tty?-28:-59;case 21531:return l=oe(),s.fa(i,t,l);case 21523:return i.tty?(i.tty.K.Ka&&(c=[24,80],l=oe(),Oe[l>>1]=c[0],Oe[l+2>>1]=c[1]),0):-59;case 21524:return i.tty?0:-59;case 21515:return i.tty?0:-59;default:return-28}}catch(f){if(typeof s>"u"||f.name!=="ErrnoError")throw f;return-f.u}},__syscall_openat:function(e,t,n,i){Pe=i;try{t=ie(t),t=Ye(e,t);var l=i?oe():0;return s.open(t,n,l).fd}catch(c){if(typeof s>"u"||c.name!=="ErrnoError")throw c;return-c.u}},__syscall_readlinkat:function(e,t,n,i){try{if(t=ie(t),t=Ye(e,t),0>=i)return-28;var l=s.readlink(t),c=Math.min(i,Ie(l)),f=G[n+c];return rt(l,n,i+1),G[n+c]=f,c}catch(b){if(typeof s>"u"||b.name!=="ErrnoError")throw b;return-b.u}},__syscall_renameat:function(e,t,n,i){try{return t=ie(t),i=ie(i),t=Ye(e,t),i=Ye(n,i),s.rename(t,i),0}catch(l){if(typeof s>"u"||l.name!=="ErrnoError")throw l;return-l.u}},__syscall_rmdir:function(e){try{return e=ie(e),s.rmdir(e),0}catch(t){if(typeof s>"u"||t.name!=="ErrnoError")throw t;return-t.u}},__syscall_unlinkat:function(e,t,n){try{return t=ie(t),t=Ye(e,t),n===0?s.unlink(t):n===512?s.rmdir(t):z("Invalid flags passed to unlinkat"),0}catch(i){if(typeof s>"u"||i.name!=="ErrnoError")throw i;return-i.u}},_emscripten_get_now_is_monotonic:()=>1,_emscripten_throw_longjmp:()=>{throw 1/0},_gmtime_js:function(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),e=new Date(1e3*e),v[t>>2]=e.getUTCSeconds(),v[t+4>>2]=e.getUTCMinutes(),v[t+8>>2]=e.getUTCHours(),v[t+12>>2]=e.getUTCDate(),v[t+16>>2]=e.getUTCMonth(),v[t+20>>2]=e.getUTCFullYear()-1900,v[t+24>>2]=e.getUTCDay(),v[t+28>>2]=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0},_localtime_js:function(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),e=new Date(1e3*e),v[t>>2]=e.getSeconds(),v[t+4>>2]=e.getMinutes(),v[t+8>>2]=e.getHours(),v[t+12>>2]=e.getDate(),v[t+16>>2]=e.getMonth(),v[t+20>>2]=e.getFullYear()-1900,v[t+24>>2]=e.getDay(),v[t+28>>2]=(Ce(e.getFullYear())?_r:pr)[e.getMonth()]+e.getDate()-1|0,v[t+36>>2]=-(60*e.getTimezoneOffset());var n=new Date(e.getFullYear(),6,1).getTimezoneOffset(),i=new Date(e.getFullYear(),0,1).getTimezoneOffset();v[t+32>>2]=(n!=i&&e.getTimezoneOffset()==Math.min(i,n))|0},_mktime_js:function(e){var t=new Date(v[e+20>>2]+1900,v[e+16>>2],v[e+12>>2],v[e+8>>2],v[e+4>>2],v[e>>2],0),n=v[e+32>>2],i=t.getTimezoneOffset(),l=new Date(t.getFullYear(),6,1).getTimezoneOffset(),c=new Date(t.getFullYear(),0,1).getTimezoneOffset(),f=Math.min(c,l);return 0>n?v[e+32>>2]=+(l!=c&&f==i):0<n!=(f==i)&&(l=Math.max(c,l),t.setTime(t.getTime()+6e4*((0<n?f:l)-i))),v[e+24>>2]=t.getDay(),v[e+28>>2]=(Ce(t.getFullYear())?_r:pr)[t.getMonth()]+t.getDate()-1|0,v[e>>2]=t.getSeconds(),v[e+4>>2]=t.getMinutes(),v[e+8>>2]=t.getHours(),v[e+12>>2]=t.getDate(),v[e+16>>2]=t.getMonth(),v[e+20>>2]=t.getYear(),e=t.getTime(),isNaN(e)?(v[Rt()>>2]=61,e=-1):e/=1e3,BigInt(e)},_tzset_js:(e,t,n)=>{function i(O){return(O=O.toTimeString().match(/\(([A-Za-z ]+)\)$/))?O[1]:"GMT"}var l=new Date().getFullYear(),c=new Date(l,0,1),f=new Date(l,6,1);l=c.getTimezoneOffset();var b=f.getTimezoneOffset();V[e>>2]=60*Math.max(l,b),v[t>>2]=+(l!=b),e=i(c),t=i(f),e=xt(e),t=xt(t),b<l?(V[n>>2]=e,V[n+4>>2]=t):(V[n>>2]=t,V[n+4>>2]=e)},abort:()=>{z("native code called abort()")},emscripten_date_now:()=>Date.now(),emscripten_get_now:()=>performance.now(),emscripten_resize_heap:e=>{var t=qe.length;if(e>>>=0,g(e>t),2147483648<e)return W(`Cannot enlarge memory, requested ${e} bytes, but the limit is ${2147483648} bytes!`),!1;for(var n=1;4>=n;n*=2){var i=t*(1+.2/n);i=Math.min(i,e+100663296);var l=Math;i=Math.max(e,i),l=l.min.call(l,2147483648,i+(65536-i%65536)%65536);e:{i=l;var c=Ue.buffer,f=(i-c.byteLength+65535)/65536;try{Ue.grow(f),zt();var b=1;break e}catch(O){W(`growMemory: Attempted to grow heap from ${c.byteLength} bytes to ${i} bytes, but got error: ${O}`)}b=void 0}if(b)return!0}return W(`Failed to grow the heap from ${t} bytes to ${l} bytes, not enough memory!`),!1},environ_get:(e,t)=>{var n=0;return gr().forEach((i,l)=>{var c=t+n;for(l=V[e+4*l>>2]=c,c=0;c<i.length;++c)g(i.charCodeAt(c)===(i.charCodeAt(c)&255)),G[l++>>0]=i.charCodeAt(c);G[l>>0]=0,n+=i.length+1}),0},environ_sizes_get:(e,t)=>{var n=gr();V[e>>2]=n.length;var i=0;return n.forEach(l=>i+=l.length+1),V[t>>2]=i,0},exit:e=>{wn(),He=!0,M(e,new tr(e))},fd_close:function(e){try{var t=ee(e);return s.close(t),0}catch(n){if(typeof s>"u"||n.name!=="ErrnoError")throw n;return n.u}},fd_read:function(e,t,n,i){try{e:{var l=ee(e);e=t;for(var c,f=t=0;f<n;f++){var b=V[e>>2],O=V[e+4>>2];e+=8;var w=s.read(l,G,b,O,c);if(0>w){var F=-1;break e}if(t+=w,w<O)break;typeof c<"u"&&(c+=w)}F=t}return V[i>>2]=F,0}catch(E){if(typeof s>"u"||E.name!=="ErrnoError")throw E;return E.u}},fd_seek:function(e,t,n,i){t=-9007199254740992>t||9007199254740992<t?NaN:Number(t);try{if(isNaN(t))return 61;var l=ee(e);return s.D(l,t,n),Xe[i>>3]=BigInt(l.position),l.ea&&t===0&&n===0&&(l.ea=null),0}catch(c){if(typeof s>"u"||c.name!=="ErrnoError")throw c;return c.u}},fd_write:function(e,t,n,i){try{e:{var l=ee(e);e=t;for(var c,f=t=0;f<n;f++){var b=V[e>>2],O=V[e+4>>2];e+=8;var w=s.write(l,G,b,O,c);if(0>w){var F=-1;break e}t+=w,typeof c<"u"&&(c+=w)}F=t}return V[i>>2]=F,0}catch(E){if(typeof s>"u"||E.name!=="ErrnoError")throw E;return E.u}},invoke_vii:bn,strftime:(e,t,n,i)=>{function l(h,S,T){for(h=typeof h=="number"?h.toString():h||"";h.length<S;)h=T[0]+h;return h}function c(h,S){return l(h,S,"0")}function f(h,S){function T(q){return 0>q?-1:0<q?1:0}var I;return(I=T(h.getFullYear()-S.getFullYear()))===0&&(I=T(h.getMonth()-S.getMonth()))===0&&(I=T(h.getDate()-S.getDate())),I}function b(h){switch(h.getDay()){case 0:return new Date(h.getFullYear()-1,11,29);case 1:return h;case 2:return new Date(h.getFullYear(),0,3);case 3:return new Date(h.getFullYear(),0,2);case 4:return new Date(h.getFullYear(),0,1);case 5:return new Date(h.getFullYear()-1,11,31);case 6:return new Date(h.getFullYear()-1,11,30)}}function O(h){var S=h.O;for(h=new Date(new Date(h.P+1900,0,1).getTime());0<S;){var T=h.getMonth(),I=(Ce(h.getFullYear())?br:wr)[T];if(S>I-h.getDate())S-=I-h.getDate()+1,h.setDate(1),11>T?h.setMonth(T+1):(h.setMonth(0),h.setFullYear(h.getFullYear()+1));else{h.setDate(h.getDate()+S);break}}return T=new Date(h.getFullYear()+1,0,4),S=b(new Date(h.getFullYear(),0,4)),T=b(T),0>=f(S,h)?0>=f(T,h)?h.getFullYear()+1:h.getFullYear():h.getFullYear()-1}var w=V[i+40>>2];i={Va:v[i>>2],Ua:v[i+4>>2],$:v[i+8>>2],la:v[i+12>>2],aa:v[i+16>>2],P:v[i+20>>2],H:v[i+24>>2],O:v[i+28>>2],wb:v[i+32>>2],Ta:v[i+36>>2],Wa:w?ie(w):""},n=ie(n),w={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var F in w)n=n.replace(new RegExp(F,"g"),w[F]);var E="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),C="January February March April May June July August September October November December".split(" ");w={"%a":h=>E[h.H].substring(0,3),"%A":h=>E[h.H],"%b":h=>C[h.aa].substring(0,3),"%B":h=>C[h.aa],"%C":h=>c((h.P+1900)/100|0,2),"%d":h=>c(h.la,2),"%e":h=>l(h.la,2," "),"%g":h=>O(h).toString().substring(2),"%G":h=>O(h),"%H":h=>c(h.$,2),"%I":h=>(h=h.$,h==0?h=12:12<h&&(h-=12),c(h,2)),"%j":h=>{for(var S=0,T=0;T<=h.aa-1;S+=(Ce(h.P+1900)?br:wr)[T++]);return c(h.la+S,3)},"%m":h=>c(h.aa+1,2),"%M":h=>c(h.Ua,2),"%n":()=>`
`,"%p":h=>0<=h.$&&12>h.$?"AM":"PM","%S":h=>c(h.Va,2),"%t":()=>"	","%u":h=>h.H||7,"%U":h=>c(Math.floor((h.O+7-h.H)/7),2),"%V":h=>{var S=Math.floor((h.O+7-(h.H+6)%7)/7);if(2>=(h.H+371-h.O-2)%7&&S++,S)S==53&&(T=(h.H+371-h.O)%7,T==4||T==3&&Ce(h.P)||(S=1));else{S=52;var T=(h.H+7-h.O-1)%7;(T==4||T==5&&Ce(h.P%400-1))&&S++}return c(S,2)},"%w":h=>h.H,"%W":h=>c(Math.floor((h.O+7-(h.H+6)%7)/7),2),"%y":h=>(h.P+1900).toString().substring(2),"%Y":h=>h.P+1900,"%z":h=>{h=h.Ta;var S=0<=h;return h=Math.abs(h)/60,(S?"+":"-")+("0000"+(h/60*100+h%60)).slice(-4)},"%Z":h=>h.Wa,"%%":()=>"%"},n=n.replace(/%%/g,"\0\0");for(F in w)n.includes(F)&&(n=n.replace(new RegExp(F,"g"),w[F](i)));return n=n.replace(/\0\0/g,"%"),F=Ze(n,!1),F.length>t?0:(yr(F,e),F.length-1)},system:e=>{if(R){if(!e)return 1;if(e=ie(e),!e.length)return 0;e=xe("child_process").ub(e,[],{tb:!0,stdio:"inherit"});var t=(n,i)=>n<<8|i;return e.status===null?t(0,(n=>{switch(n){case"SIGHUP":return 1;case"SIGQUIT":return 3;case"SIGFPE":return 8;case"SIGKILL":return 9;case"SIGALRM":return 14;case"SIGTERM":return 15}return 2})(e.signal)):e.status<<8|0}return e?(v[Rt()>>2]=52,-1):0}},ke=function(){var e={env:Er,wasi_snapshot_preview1:Er};pt("wasm-instantiate");var t=a;return tn(e,function(n){g(a===t,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),t=null,ke=n.instance.exports,Ue=ke.memory,g(Ue,"memory not found in wasm exports"),zt(),Z=ke.__indirect_function_table,g(Z,"table not found in wasm exports"),mt.unshift(ke.__wasm_call_ctors),Je("wasm-instantiate")}).catch(u),{}}();a._lua_checkstack=d("lua_checkstack"),a._lua_xmove=d("lua_xmove"),a._lua_atpanic=d("lua_atpanic"),a._lua_version=d("lua_version"),a._lua_absindex=d("lua_absindex"),a._lua_gettop=d("lua_gettop"),a._lua_settop=d("lua_settop"),a._lua_closeslot=d("lua_closeslot"),a._lua_rotate=d("lua_rotate"),a._lua_copy=d("lua_copy"),a._lua_pushvalue=d("lua_pushvalue"),a._lua_type=d("lua_type"),a._lua_typename=d("lua_typename"),a._lua_iscfunction=d("lua_iscfunction"),a._lua_isinteger=d("lua_isinteger"),a._lua_isnumber=d("lua_isnumber"),a._lua_isstring=d("lua_isstring"),a._lua_isuserdata=d("lua_isuserdata"),a._lua_rawequal=d("lua_rawequal"),a._lua_arith=d("lua_arith"),a._lua_compare=d("lua_compare"),a._lua_stringtonumber=d("lua_stringtonumber"),a._lua_tonumberx=d("lua_tonumberx"),a._lua_tointegerx=d("lua_tointegerx"),a._lua_toboolean=d("lua_toboolean"),a._lua_tolstring=d("lua_tolstring"),a._lua_rawlen=d("lua_rawlen"),a._lua_tocfunction=d("lua_tocfunction"),a._lua_touserdata=d("lua_touserdata"),a._lua_tothread=d("lua_tothread"),a._lua_topointer=d("lua_topointer"),a._lua_pushnil=d("lua_pushnil"),a._lua_pushnumber=d("lua_pushnumber"),a._lua_pushinteger=d("lua_pushinteger"),a._lua_pushlstring=d("lua_pushlstring"),a._lua_pushstring=d("lua_pushstring"),a._lua_pushcclosure=d("lua_pushcclosure"),a._lua_pushboolean=d("lua_pushboolean"),a._lua_pushlightuserdata=d("lua_pushlightuserdata"),a._lua_pushthread=d("lua_pushthread"),a._lua_getglobal=d("lua_getglobal"),a._lua_gettable=d("lua_gettable"),a._lua_getfield=d("lua_getfield"),a._lua_geti=d("lua_geti"),a._lua_rawget=d("lua_rawget"),a._lua_rawgeti=d("lua_rawgeti"),a._lua_rawgetp=d("lua_rawgetp"),a._lua_createtable=d("lua_createtable"),a._lua_getmetatable=d("lua_getmetatable"),a._lua_getiuservalue=d("lua_getiuservalue"),a._lua_setglobal=d("lua_setglobal"),a._lua_settable=d("lua_settable"),a._lua_setfield=d("lua_setfield"),a._lua_seti=d("lua_seti"),a._lua_rawset=d("lua_rawset"),a._lua_rawsetp=d("lua_rawsetp"),a._lua_rawseti=d("lua_rawseti"),a._lua_setmetatable=d("lua_setmetatable"),a._lua_setiuservalue=d("lua_setiuservalue"),a._lua_callk=d("lua_callk"),a._lua_pcallk=d("lua_pcallk"),a._lua_load=d("lua_load"),a._lua_dump=d("lua_dump"),a._lua_status=d("lua_status"),a._lua_error=d("lua_error"),a._lua_next=d("lua_next"),a._lua_toclose=d("lua_toclose"),a._lua_concat=d("lua_concat"),a._lua_len=d("lua_len"),a._lua_getallocf=d("lua_getallocf"),a._lua_setallocf=d("lua_setallocf"),a._lua_setwarnf=d("lua_setwarnf"),a._lua_warning=d("lua_warning"),a._lua_newuserdatauv=d("lua_newuserdatauv"),a._lua_getupvalue=d("lua_getupvalue"),a._lua_setupvalue=d("lua_setupvalue"),a._lua_upvalueid=d("lua_upvalueid"),a._lua_upvaluejoin=d("lua_upvaluejoin"),a._luaL_traceback=d("luaL_traceback"),a._lua_getstack=d("lua_getstack"),a._lua_getinfo=d("lua_getinfo"),a._luaL_buffinit=d("luaL_buffinit"),a._luaL_addstring=d("luaL_addstring"),a._luaL_prepbuffsize=d("luaL_prepbuffsize"),a._luaL_addvalue=d("luaL_addvalue"),a._luaL_pushresult=d("luaL_pushresult"),a._luaL_argerror=d("luaL_argerror"),a._luaL_typeerror=d("luaL_typeerror"),a._luaL_getmetafield=d("luaL_getmetafield"),a._luaL_where=d("luaL_where"),a._luaL_fileresult=d("luaL_fileresult");var Rt=d("__errno_location");a._luaL_execresult=d("luaL_execresult"),a._luaL_newmetatable=d("luaL_newmetatable"),a._luaL_setmetatable=d("luaL_setmetatable"),a._luaL_testudata=d("luaL_testudata"),a._luaL_checkudata=d("luaL_checkudata"),a._luaL_optlstring=d("luaL_optlstring"),a._luaL_checklstring=d("luaL_checklstring"),a._luaL_checkstack=d("luaL_checkstack"),a._luaL_checktype=d("luaL_checktype"),a._luaL_checkany=d("luaL_checkany"),a._luaL_checknumber=d("luaL_checknumber"),a._luaL_optnumber=d("luaL_optnumber"),a._luaL_checkinteger=d("luaL_checkinteger"),a._luaL_optinteger=d("luaL_optinteger"),a._luaL_setfuncs=d("luaL_setfuncs"),a._luaL_addlstring=d("luaL_addlstring"),a._luaL_pushresultsize=d("luaL_pushresultsize"),a._luaL_buffinitsize=d("luaL_buffinitsize"),a._luaL_ref=d("luaL_ref"),a._luaL_unref=d("luaL_unref"),a._luaL_loadfilex=d("luaL_loadfilex"),a._luaL_loadbufferx=d("luaL_loadbufferx"),a._luaL_loadstring=d("luaL_loadstring"),a._luaL_callmeta=d("luaL_callmeta"),a._luaL_len=d("luaL_len"),a._luaL_tolstring=d("luaL_tolstring"),a._luaL_getsubtable=d("luaL_getsubtable"),a._luaL_requiref=d("luaL_requiref"),a._luaL_addgsub=d("luaL_addgsub"),a._luaL_gsub=d("luaL_gsub"),a._luaL_newstate=d("luaL_newstate"),a._lua_newstate=d("lua_newstate"),a._free=d("free"),a._realloc=d("realloc");var kr=a._fflush=d("fflush");a._luaL_checkversion_=d("luaL_checkversion_"),a._luaopen_base=d("luaopen_base"),a._luaopen_coroutine=d("luaopen_coroutine"),a._lua_newthread=d("lua_newthread"),a._lua_yieldk=d("lua_yieldk"),a._lua_isyieldable=d("lua_isyieldable"),a._lua_resetthread=d("lua_resetthread"),a._lua_resume=d("lua_resume"),a._luaopen_debug=d("luaopen_debug"),a._lua_gethookmask=d("lua_gethookmask"),a._lua_gethook=d("lua_gethook"),a._lua_gethookcount=d("lua_gethookcount"),a._lua_getlocal=d("lua_getlocal"),a._lua_sethook=d("lua_sethook"),a._lua_setlocal=d("lua_setlocal"),a._lua_setcstacklimit=d("lua_setcstacklimit");var pn=a._malloc=d("malloc");a._luaL_openlibs=d("luaL_openlibs"),a._luaopen_package=d("luaopen_package"),a._luaopen_table=d("luaopen_table"),a._luaopen_io=d("luaopen_io"),a._luaopen_os=d("luaopen_os"),a._luaopen_string=d("luaopen_string"),a._luaopen_math=d("luaopen_math"),a._luaopen_utf8=d("luaopen_utf8"),a._lua_close=d("lua_close");var gn=d("setThrew"),Lr=()=>(Lr=ke.emscripten_stack_init)(),Nt=()=>(Nt=ke.emscripten_stack_get_end)(),Tr=d("stackSave"),Sr=d("stackRestore"),Mr=d("stackAlloc");function bn(e,t,n){var i=Tr();try{Ot(e)(t,n)}catch(l){if(Sr(i),l!==l+0)throw l;gn(1,0)}}a.ENV=nt,a.ccall=(e,t,n,i)=>{var l={string:w=>{var F=0;if(w!=null&&w!==0){F=Ie(w)+1;var E=Mr(F);rt(w,E,F),F=E}return F},array:w=>{var F=Mr(w.length);return yr(w,F),F}};e=_n(e);var c=[],f=0;if(g(t!=="array",'Return type should not be "array".'),i)for(var b=0;b<i.length;b++){var O=l[n[b]];O?(f===0&&(f=Tr()),c[b]=O(i[b])):c[b]=i[b]}return n=e.apply(null,c),n=function(w){return f!==0&&Sr(f),t==="string"?ie(w):t==="boolean"?!!w:w}(n)},a.addFunction=(e,t)=>{if(g(typeof e<"u"),!Ee){Ee=new WeakMap;var n=Z.length;if(Ee)for(var i=0;i<0+n;i++){var l=Ot(i);l&&Ee.set(l,i)}}if(n=Ee.get(e)||0)return n;if(At.length)n=At.pop();else{try{Z.grow(1)}catch(b){throw b instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":b}n=Z.length-1}try{i=n,Z.set(i,e),ve[i]=Z.get(i)}catch(b){if(!(b instanceof TypeError))throw b;if(g(typeof t<"u","Missing signature argument to addFunction: "+e),typeof WebAssembly.Function=="function"){i=WebAssembly.Function,l={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"};for(var c={parameters:[],results:t[0]=="v"?[]:[l[t[0]]]},f=1;f<t.length;++f)g(t[f]in l,"invalid signature char: "+t[f]),c.parameters.push(l[t[f]]);t=new i(c,e)}else{for(i=[1],l=t.slice(0,1),t=t.slice(1),c={i:127,p:127,j:126,f:125,d:124,e:111},i.push(96),f=t.length,g(16384>f),128>f?i.push(f):i.push(f%128|128,f>>7),f=0;f<t.length;++f)g(t[f]in c,"invalid signature char: "+t[f]),i.push(c[t[f]]);l=="v"?i.push(0):i.push(1,c[l]),t=[0,97,115,109,1,0,0,0,1],l=i.length,g(16384>l),128>l?t.push(l):t.push(l%128|128,l>>7),t.push.apply(t,i),t.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),t=new WebAssembly.Module(new Uint8Array(t)),t=new WebAssembly.Instance(t,{e:{f:e}}).exports.f}i=n,Z.set(i,t),ve[i]=Z.get(i)}return Ee.set(e,n),n},a.removeFunction=e=>{Ee.delete(Ot(e)),Z.set(e,null),ve[e]=Z.get(e),At.push(e)},a.setValue=function(e,t,n="i8"){switch(n.endsWith("*")&&(n="*"),n){case"i1":G[e>>0]=t;break;case"i8":G[e>>0]=t;break;case"i16":Oe[e>>1]=t;break;case"i32":v[e>>2]=t;break;case"i64":Xe[e>>3]=BigInt(t);break;case"float":ct[e>>2]=t;break;case"double":dt[e>>3]=t;break;case"*":V[e>>2]=t;break;default:z(`invalid type for setValue: ${n}`)}},a.getValue=function(e,t="i8"){switch(t.endsWith("*")&&(t="*"),t){case"i1":return G[e>>0];case"i8":return G[e>>0];case"i16":return Oe[e>>1];case"i32":return v[e>>2];case"i64":return Xe[e>>3];case"float":return ct[e>>2];case"double":return dt[e>>3];case"*":return V[e>>2];default:z(`invalid type for getValue: ${t}`)}},a.stringToUTF8=rt,a.lengthBytesUTF8=Ie,a.stringToNewUTF8=xt,a.FS=s,"writeI53ToI64 writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling readI53FromI64 readI53FromU64 convertI32PairToI53 convertI32PairToI53Checked convertU32PairToI53 inetPton4 inetNtop4 inetPton6 inetNtop6 readSockaddr writeSockaddr getHostByName getCallstack emscriptenLog convertPCtoSourceLocation readEmAsmArgs jstoi_q jstoi_s listenOnce autoResumeAudioContext getDynCaller dynCall handleException runtimeKeepalivePush runtimeKeepalivePop callUserCallback maybeExit asmjsMangle handleAllocatorInit HandleAllocator getNativeTypeSize STACK_SIZE STACK_ALIGN POINTER_SIZE ASSERTIONS cwrap reallyNegative unSign strLen reSign formatString intArrayToString AsciiToString UTF16ToString stringToUTF16 lengthBytesUTF16 UTF32ToString stringToUTF32 lengthBytesUTF32 registerKeyEventCallback maybeCStringToJsString findEventTarget findCanvasEventTarget getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback registerBeforeUnloadEventCallback fillBatteryEventData battery registerBatteryEventCallback setCanvasElementSize getCanvasElementSize jsStackTrace stackTrace checkWasiClock wasiRightsToMuslOFlags wasiOFlagsToMuslOFlags createDyncallWrapper safeSetTimeout setImmediateWrapped clearImmediateWrapped polyfillSetImmediate getPromise makePromise idsToPromises makePromiseCallback setMainLoop getSocketFromFD getSocketAddress FS_unlink FS_mkdirTree _setNetworkCallback".split(" ").forEach(function(e){typeof globalThis>"u"||Object.getOwnPropertyDescriptor(globalThis,e)||Object.defineProperty(globalThis,e,{configurable:!0,get(){var t=`\`${e}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,n=e;n.startsWith("_")||(n="$"+e),t+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${n}')`,Zt(e)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Re(t)}}),er(e)}),"run addOnPreRun addOnInit addOnPreMain addOnExit addOnPostRun addRunDependency removeRunDependency FS_createFolder FS_createPath FS_createLazyFile FS_createLink FS_createDevice FS_readFile out err callMain abort wasmMemory wasmExports stackAlloc stackSave stackRestore getTempRet0 setTempRet0 writeStackCookie checkStackCookie MAX_INT53 MIN_INT53 bigintToI53Checked ptrToString zeroMemory exitJS getHeapMax growMemory MONTH_DAYS_REGULAR MONTH_DAYS_LEAP MONTH_DAYS_REGULAR_CUMULATIVE MONTH_DAYS_LEAP_CUMULATIVE isLeapYear ydayFromDate arraySum addDays ERRNO_CODES ERRNO_MESSAGES setErrNo DNS Protocols Sockets initRandomFill randomFill timers warnOnce UNWIND_CACHE readEmAsmArgsArray getExecutableName keepRuntimeAlive asyncLoad alignMemory mmapAlloc wasmTable noExitRuntime getCFunc uleb128Encode sigToWasmTypes generateFuncType convertJsFunctionToWasm freeTableIndexes functionsInTableMap getEmptyTableSlot updateTableMap getFunctionAddress PATH PATH_FS UTF8Decoder UTF8ArrayToString UTF8ToString stringToUTF8Array intArrayFromString stringToAscii UTF16Decoder stringToUTF8OnStack writeArrayToMemory JSEvents specialHTMLTargets currentFullscreenStrategy restoreOldWindowedStyle demangle demangleAll ExitStatus getEnvStrings doReadv doWritev promiseMap Browser wget SYSCALLS preloadPlugins FS_createPreloadedFile FS_modeStringToFlags FS_getMode FS_stdin_getChar_buffer FS_stdin_getChar FS_createDataFile MEMFS TTY PIPEFS SOCKFS".split(" ").forEach(er);var at;je=function e(){at||xr(),at||(je=e)};function xr(){if(!(0<Ve)){Lr();var e=Nt();if(g((e&3)==0),e==0&&(e+=4),V[e>>2]=34821223,V[e+4>>2]=2310721022,V[0]=1668509029,a.preRun)for(typeof a.preRun=="function"&&(a.preRun=[a.preRun]);a.preRun.length;)e=a.preRun.shift(),ft.unshift(e);for(;0<ft.length;)ft.shift()(a);if(!(0<Ve)){if(!at&&(at=!0,a.calledRun=!0,!He)){for(g(!_t),_t=!0,ht(),a.noFSInit||s.R.Y||s.R(),s.ta=!1;0<mt.length;)mt.shift()(a);for(o(a),g(!a._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),ht();0<$t.length;)$t.shift()(a)}ht()}}}function wn(){var e=Fe,t=W,n=!1;Fe=W=()=>{n=!0};try{kr(0),["stdout","stderr"].forEach(function(i){(i=mr("/dev/"+i))&&(i=vt[i.object.rdev])&&i.output&&i.output.length&&(n=!0)})}catch{}Fe=e,W=t,n&&Re("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}return xr(),r.ready}})();class Ke{static async initialize(r,a){const o=await Jr({locateFile:(u,m)=>r||m+u,preRun:u=>{typeof a=="object"&&Object.entries(a).forEach(([m,y])=>u.ENV[m]=y)}});return new Ke(o)}constructor(r){this.referenceTracker=new WeakMap,this.referenceMap=new Map,this.availableReferences=[],this.module=r,this.luaL_checkversion_=this.cwrap("luaL_checkversion_",null,["number","number","number"]),this.luaL_getmetafield=this.cwrap("luaL_getmetafield","number",["number","number","string"]),this.luaL_callmeta=this.cwrap("luaL_callmeta","number",["number","number","string"]),this.luaL_tolstring=this.cwrap("luaL_tolstring","string",["number","number","number"]),this.luaL_argerror=this.cwrap("luaL_argerror","number",["number","number","string"]),this.luaL_typeerror=this.cwrap("luaL_typeerror","number",["number","number","string"]),this.luaL_checklstring=this.cwrap("luaL_checklstring","string",["number","number","number"]),this.luaL_optlstring=this.cwrap("luaL_optlstring","string",["number","number","string","number"]),this.luaL_checknumber=this.cwrap("luaL_checknumber","number",["number","number"]),this.luaL_optnumber=this.cwrap("luaL_optnumber","number",["number","number","number"]),this.luaL_checkinteger=this.cwrap("luaL_checkinteger","number",["number","number"]),this.luaL_optinteger=this.cwrap("luaL_optinteger","number",["number","number","number"]),this.luaL_checkstack=this.cwrap("luaL_checkstack",null,["number","number","string"]),this.luaL_checktype=this.cwrap("luaL_checktype",null,["number","number","number"]),this.luaL_checkany=this.cwrap("luaL_checkany",null,["number","number"]),this.luaL_newmetatable=this.cwrap("luaL_newmetatable","number",["number","string"]),this.luaL_setmetatable=this.cwrap("luaL_setmetatable",null,["number","string"]),this.luaL_testudata=this.cwrap("luaL_testudata","number",["number","number","string"]),this.luaL_checkudata=this.cwrap("luaL_checkudata","number",["number","number","string"]),this.luaL_where=this.cwrap("luaL_where",null,["number","number"]),this.luaL_fileresult=this.cwrap("luaL_fileresult","number",["number","number","string"]),this.luaL_execresult=this.cwrap("luaL_execresult","number",["number","number"]),this.luaL_ref=this.cwrap("luaL_ref","number",["number","number"]),this.luaL_unref=this.cwrap("luaL_unref",null,["number","number","number"]),this.luaL_loadfilex=this.cwrap("luaL_loadfilex","number",["number","string","string"]),this.luaL_loadbufferx=this.cwrap("luaL_loadbufferx","number",["number","string|number","number","string|number","string"]),this.luaL_loadstring=this.cwrap("luaL_loadstring","number",["number","string"]),this.luaL_newstate=this.cwrap("luaL_newstate","number",[]),this.luaL_len=this.cwrap("luaL_len","number",["number","number"]),this.luaL_addgsub=this.cwrap("luaL_addgsub",null,["number","string","string","string"]),this.luaL_gsub=this.cwrap("luaL_gsub","string",["number","string","string","string"]),this.luaL_setfuncs=this.cwrap("luaL_setfuncs",null,["number","number","number"]),this.luaL_getsubtable=this.cwrap("luaL_getsubtable","number",["number","number","string"]),this.luaL_traceback=this.cwrap("luaL_traceback",null,["number","number","string","number"]),this.luaL_requiref=this.cwrap("luaL_requiref",null,["number","string","number","number"]),this.luaL_buffinit=this.cwrap("luaL_buffinit",null,["number","number"]),this.luaL_prepbuffsize=this.cwrap("luaL_prepbuffsize","string",["number","number"]),this.luaL_addlstring=this.cwrap("luaL_addlstring",null,["number","string","number"]),this.luaL_addstring=this.cwrap("luaL_addstring",null,["number","string"]),this.luaL_addvalue=this.cwrap("luaL_addvalue",null,["number"]),this.luaL_pushresult=this.cwrap("luaL_pushresult",null,["number"]),this.luaL_pushresultsize=this.cwrap("luaL_pushresultsize",null,["number","number"]),this.luaL_buffinitsize=this.cwrap("luaL_buffinitsize","string",["number","number","number"]),this.lua_newstate=this.cwrap("lua_newstate","number",["number","number"]),this.lua_close=this.cwrap("lua_close",null,["number"]),this.lua_newthread=this.cwrap("lua_newthread","number",["number"]),this.lua_resetthread=this.cwrap("lua_resetthread","number",["number"]),this.lua_atpanic=this.cwrap("lua_atpanic","number",["number","number"]),this.lua_version=this.cwrap("lua_version","number",["number"]),this.lua_absindex=this.cwrap("lua_absindex","number",["number","number"]),this.lua_gettop=this.cwrap("lua_gettop","number",["number"]),this.lua_settop=this.cwrap("lua_settop",null,["number","number"]),this.lua_pushvalue=this.cwrap("lua_pushvalue",null,["number","number"]),this.lua_rotate=this.cwrap("lua_rotate",null,["number","number","number"]),this.lua_copy=this.cwrap("lua_copy",null,["number","number","number"]),this.lua_checkstack=this.cwrap("lua_checkstack","number",["number","number"]),this.lua_xmove=this.cwrap("lua_xmove",null,["number","number","number"]),this.lua_isnumber=this.cwrap("lua_isnumber","number",["number","number"]),this.lua_isstring=this.cwrap("lua_isstring","number",["number","number"]),this.lua_iscfunction=this.cwrap("lua_iscfunction","number",["number","number"]),this.lua_isinteger=this.cwrap("lua_isinteger","number",["number","number"]),this.lua_isuserdata=this.cwrap("lua_isuserdata","number",["number","number"]),this.lua_type=this.cwrap("lua_type","number",["number","number"]),this.lua_typename=this.cwrap("lua_typename","string",["number","number"]),this.lua_tonumberx=this.cwrap("lua_tonumberx","number",["number","number","number"]),this.lua_tointegerx=this.cwrap("lua_tointegerx","number",["number","number","number"]),this.lua_toboolean=this.cwrap("lua_toboolean","number",["number","number"]),this.lua_tolstring=this.cwrap("lua_tolstring","string",["number","number","number"]),this.lua_rawlen=this.cwrap("lua_rawlen","number",["number","number"]),this.lua_tocfunction=this.cwrap("lua_tocfunction","number",["number","number"]),this.lua_touserdata=this.cwrap("lua_touserdata","number",["number","number"]),this.lua_tothread=this.cwrap("lua_tothread","number",["number","number"]),this.lua_topointer=this.cwrap("lua_topointer","number",["number","number"]),this.lua_arith=this.cwrap("lua_arith",null,["number","number"]),this.lua_rawequal=this.cwrap("lua_rawequal","number",["number","number","number"]),this.lua_compare=this.cwrap("lua_compare","number",["number","number","number","number"]),this.lua_pushnil=this.cwrap("lua_pushnil",null,["number"]),this.lua_pushnumber=this.cwrap("lua_pushnumber",null,["number","number"]),this.lua_pushinteger=this.cwrap("lua_pushinteger",null,["number","number"]),this.lua_pushlstring=this.cwrap("lua_pushlstring","string",["number","string|number","number"]),this.lua_pushstring=this.cwrap("lua_pushstring","string",["number","string|number"]),this.lua_pushcclosure=this.cwrap("lua_pushcclosure",null,["number","number","number"]),this.lua_pushboolean=this.cwrap("lua_pushboolean",null,["number","number"]),this.lua_pushlightuserdata=this.cwrap("lua_pushlightuserdata",null,["number","number"]),this.lua_pushthread=this.cwrap("lua_pushthread","number",["number"]),this.lua_getglobal=this.cwrap("lua_getglobal","number",["number","string"]),this.lua_gettable=this.cwrap("lua_gettable","number",["number","number"]),this.lua_getfield=this.cwrap("lua_getfield","number",["number","number","string"]),this.lua_geti=this.cwrap("lua_geti","number",["number","number","number"]),this.lua_rawget=this.cwrap("lua_rawget","number",["number","number"]),this.lua_rawgeti=this.cwrap("lua_rawgeti","number",["number","number","number"]),this.lua_rawgetp=this.cwrap("lua_rawgetp","number",["number","number","number"]),this.lua_createtable=this.cwrap("lua_createtable",null,["number","number","number"]),this.lua_newuserdatauv=this.cwrap("lua_newuserdatauv","number",["number","number","number"]),this.lua_getmetatable=this.cwrap("lua_getmetatable","number",["number","number"]),this.lua_getiuservalue=this.cwrap("lua_getiuservalue","number",["number","number","number"]),this.lua_setglobal=this.cwrap("lua_setglobal",null,["number","string"]),this.lua_settable=this.cwrap("lua_settable",null,["number","number"]),this.lua_setfield=this.cwrap("lua_setfield",null,["number","number","string"]),this.lua_seti=this.cwrap("lua_seti",null,["number","number","number"]),this.lua_rawset=this.cwrap("lua_rawset",null,["number","number"]),this.lua_rawseti=this.cwrap("lua_rawseti",null,["number","number","number"]),this.lua_rawsetp=this.cwrap("lua_rawsetp",null,["number","number","number"]),this.lua_setmetatable=this.cwrap("lua_setmetatable","number",["number","number"]),this.lua_setiuservalue=this.cwrap("lua_setiuservalue","number",["number","number","number"]),this.lua_callk=this.cwrap("lua_callk",null,["number","number","number","number","number"]),this.lua_pcallk=this.cwrap("lua_pcallk","number",["number","number","number","number","number","number"]),this.lua_load=this.cwrap("lua_load","number",["number","number","number","string","string"]),this.lua_dump=this.cwrap("lua_dump","number",["number","number","number","number"]),this.lua_yieldk=this.cwrap("lua_yieldk","number",["number","number","number","number"]),this.lua_resume=this.cwrap("lua_resume","number",["number","number","number","number"]),this.lua_status=this.cwrap("lua_status","number",["number"]),this.lua_isyieldable=this.cwrap("lua_isyieldable","number",["number"]),this.lua_setwarnf=this.cwrap("lua_setwarnf",null,["number","number","number"]),this.lua_warning=this.cwrap("lua_warning",null,["number","string","number"]),this.lua_error=this.cwrap("lua_error","number",["number"]),this.lua_next=this.cwrap("lua_next","number",["number","number"]),this.lua_concat=this.cwrap("lua_concat",null,["number","number"]),this.lua_len=this.cwrap("lua_len",null,["number","number"]),this.lua_stringtonumber=this.cwrap("lua_stringtonumber","number",["number","string"]),this.lua_getallocf=this.cwrap("lua_getallocf","number",["number","number"]),this.lua_setallocf=this.cwrap("lua_setallocf",null,["number","number","number"]),this.lua_toclose=this.cwrap("lua_toclose",null,["number","number"]),this.lua_closeslot=this.cwrap("lua_closeslot",null,["number","number"]),this.lua_getstack=this.cwrap("lua_getstack","number",["number","number","number"]),this.lua_getinfo=this.cwrap("lua_getinfo","number",["number","string","number"]),this.lua_getlocal=this.cwrap("lua_getlocal","string",["number","number","number"]),this.lua_setlocal=this.cwrap("lua_setlocal","string",["number","number","number"]),this.lua_getupvalue=this.cwrap("lua_getupvalue","string",["number","number","number"]),this.lua_setupvalue=this.cwrap("lua_setupvalue","string",["number","number","number"]),this.lua_upvalueid=this.cwrap("lua_upvalueid","number",["number","number","number"]),this.lua_upvaluejoin=this.cwrap("lua_upvaluejoin",null,["number","number","number","number","number"]),this.lua_sethook=this.cwrap("lua_sethook",null,["number","number","number","number"]),this.lua_gethook=this.cwrap("lua_gethook","number",["number"]),this.lua_gethookmask=this.cwrap("lua_gethookmask","number",["number"]),this.lua_gethookcount=this.cwrap("lua_gethookcount","number",["number"]),this.lua_setcstacklimit=this.cwrap("lua_setcstacklimit","number",["number","number"]),this.luaopen_base=this.cwrap("luaopen_base","number",["number"]),this.luaopen_coroutine=this.cwrap("luaopen_coroutine","number",["number"]),this.luaopen_table=this.cwrap("luaopen_table","number",["number"]),this.luaopen_io=this.cwrap("luaopen_io","number",["number"]),this.luaopen_os=this.cwrap("luaopen_os","number",["number"]),this.luaopen_string=this.cwrap("luaopen_string","number",["number"]),this.luaopen_utf8=this.cwrap("luaopen_utf8","number",["number"]),this.luaopen_math=this.cwrap("luaopen_math","number",["number"]),this.luaopen_debug=this.cwrap("luaopen_debug","number",["number"]),this.luaopen_package=this.cwrap("luaopen_package","number",["number"]),this.luaL_openlibs=this.cwrap("luaL_openlibs",null,["number"])}lua_remove(r,a){this.lua_rotate(r,a,-1),this.lua_pop(r,1)}lua_pop(r,a){this.lua_settop(r,-a-1)}luaL_getmetatable(r,a){return this.lua_getfield(r,Y,a)}lua_yield(r,a){return this.lua_yieldk(r,a,0,null)}lua_upvalueindex(r){return Y-r}ref(r){const a=this.referenceTracker.get(r);if(a)return a.refCount++,a.index;const o=this.availableReferences.pop(),u=o===void 0?this.referenceMap.size+1:o;return this.referenceMap.set(u,r),this.referenceTracker.set(r,{refCount:1,index:u}),this.lastRefIndex=u,u}unref(r){const a=this.referenceMap.get(r);if(a===void 0)return;const o=this.referenceTracker.get(a);if(o===void 0){this.referenceTracker.delete(a),this.availableReferences.push(r);return}o.refCount--,o.refCount<=0&&(this.referenceTracker.delete(a),this.referenceMap.delete(r),this.availableReferences.push(r))}getRef(r){return this.referenceMap.get(r)}getLastRefIndex(){return this.lastRefIndex}printRefs(){for(const[r,a]of this.referenceMap.entries())console.log(r,a)}cwrap(r,a,o){return o.some(m=>m==="string|number")?(...m)=>{const y=[],M=o.map((k,N)=>{var R;if(k==="string|number"){if(typeof m[N]=="number")return"number";if(((R=m[N])===null||R===void 0?void 0:R.length)>1024){const P=this.module.stringToNewUTF8(m[N]);return m[N]=P,y.push(P),"number"}else return"string"}return k});try{return this.module.ccall(r,a,M,m)}finally{for(const k of y)this.module._free(k)}}:(...m)=>this.module.ccall(r,a,o,m)}}var Zr="1.16.0";class Qr{constructor(r,a){var o;r===void 0&&(typeof window=="object"&&typeof window.document<"u"||typeof self=="object"&&((o=self==null?void 0:self.constructor)===null||o===void 0?void 0:o.name)==="DedicatedWorkerGlobalScope")&&(r=`https://unpkg.com/wasmoon@${Zr}/dist/glue.wasm`),this.luaWasmPromise=Ke.initialize(r,a)}async mountFile(r,a){this.mountFileSync(await this.getLuaModule(),r,a)}mountFileSync(r,a,o){const u=a.lastIndexOf("/"),m=a.substring(u+1),y=a.substring(0,a.length-m.length-1);if(y.length>0){const M=y.split("/").reverse();let k="";for(;M.length;){const N=M.pop();if(!N)continue;const R=`${k}/${N}`;try{r.module.FS.mkdir(R)}catch{}k=R}}r.module.FS.writeFile(a,o)}async createEngine(r={}){return new jt(await this.getLuaModule(),r)}async getLuaModule(){return this.luaWasmPromise}}p.Decoration=te,p.LUAI_MAXSTACK=J,p.LUA_MULTRET=H,p.LUA_REGISTRYINDEX=Y,p.LuaEngine=jt,p.LuaFactory=Qr,p.LuaGlobal=Ht,p.LuaMultiReturn=he,p.LuaRawResult=Ge,p.LuaThread=Le,p.LuaTimeoutError=de,p.LuaTypeExtension=fe,p.LuaWasm=Ke,p.PointerSize=U,p.decorate=ae,p.decorateFunction=lt,p.decorateProxy=Vt,p.decorateUserdata=Kr})})(Pt,Pt.exports);var Ln=Pt.exports;const Tn=`screenWidth = screenwidth()\r
screenHeight = screenheight()\r
fontHeight = 12\r
\r
line = ""\r
result = ""\r
dirty = true\r
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
function split(string, delim)\r
	local stringTable = {}\r
	local lastIndex = 1\r
	for i=1,string.len(string) do\r
		local currentlyContains = true\r
		for j=1,string.len(delim) do\r
			if (string.sub(string, i+j-1, i+j-1) ~= string.sub(delim, j, j)) then\r
				currentlyContains = false\r
			end\r
		end\r
		if (currentlyContains and string.len(string.sub(string, lastIndex, i-1)) > 0) then\r
			stringTable[#stringTable+1] = string.sub(string, lastIndex, i-1)\r
			lastIndex = i+string.len(delim)\r
		end\r
	end\r
	stringTable[#stringTable+1] = string.sub(string, lastIndex, #string)\r
	return stringTable\r
end\r
\r
function draw(setPos)\r
    -- clear edit line\r
    color(255,255,255)\r
    fillrect(0, fontHeight, screenWidth, fontHeight)\r
    \r
    color(0,0,0)\r
    local l = "> " .. line\r
    text(l, 0, fontHeight * 1)\r
\r
    -- cursor\r
    local w = textwidth(l)\r
    fillrect(w, fontHeight, 2, fontHeight)\r
\r
    if dirty then\r
        color(255,255,255)\r
        fillrect(0, fontHeight * 2, screenWidth, screenHeight - fontHeight*2)\r
        color(0,0,0)\r
        text(result, 0, fontHeight * 2)\r
        dirty = false\r
    end\r
\r
    color(255,255,255)\r
    fillrect(0, screenHeight - fontHeight*2, screenWidth, fontHeight*2)\r
    color(0,0,0)\r
    text(getfreeheap(), 0, screenHeight - fontHeight*2)\r
\r
    setPos(w, 0)\r
end\r
\r
function keydown(k, c)\r
    debug("keydown: " .. k .. "," .. c)\r
    local key = c\r
    -- result = ""\r
    if k == 13 then -- Enter\r
        exec(line)\r
        line = ""\r
    elseif k == 8 then -- Backspace\r
        line = subChar(line, 1, utf8.len(line))\r
    elseif k == 37 then -- ArrowLeft\r
    elseif k == 39 then -- ArrowRight\r
    elseif k == 38 then -- ArrowUp\r
    elseif k == 40 then -- ArrowDown\r
    elseif string.len(key) == 1 or utf8.len(key) == 1 then\r
     line = line .. key\r
    end\r
    draw(setPos)\r
end\r
\r
function exec(line)\r
    result = ""\r
    dirty = true\r
    local parts = split(line, " ")\r
    if parts[1] == "ls" then\r
        local files = getfiles()\r
        for i=1, #files do\r
            result = result .. files[i] .. " "\r
        end\r
    elseif parts[1] == "edit" then\r
        result = "edit:"\r
        if #parts > 1 then\r
            result = result .. parts[2]\r
        end\r
    elseif parts[1] == "run" then\r
        if #parts > 1 then\r
            run(parts[2])\r
        else\r
            result = "invalid argument"\r
        end\r
    end\r
end\r
\r
require("skk")\r
imMode = M_HAN\r
\r
-- all clear\r
color(255,255,255)\r
fillrect(0, 0, screenWidth, screenHeight)\r
\r
-- title bar\r
color(100,100,255)\r
fillrect(0, 0, screenWidth, fontHeight)\r
color(150,150,255)\r
fillrect(2, 2, screenWidth - 4, fontHeight - 4)\r
color(255,255,255)\r
text("Shell", fontHeight, 0)\r
color(0,0,255)\r
fillrect(2,2,fontHeight-4,fontHeight-4)\r
color(255,255,255)\r
fillrect(3,3,fontHeight-6,fontHeight-6)\r
\r
draw(setPos)`,Or=`-- init\r
lines = {}\r
lines[#lines + 1] = {value="Hello World", dirty=true}\r
lines[#lines + 1] = {value="日本語 テスト", dirty=true}\r
x = 1 -- cursor x(row)\r
y = 1 -- cursor y(row)\r
\r
scrollY = 0 -- scroll position in row\r
screenWidth = screenwidth()\r
screenHeight = screenheight()\r
fontHeight = 12\r
alldirty = true\r
\r
debug("== init ==")\r
--debug(getfiles())\r
--debug(readfile("test.txt"))\r
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
\r
function draw(setPos)\r
    local px = 0 -- (px)\r
    local py = 0 -- (px)\r
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
        if i < scrollY or i - scrollY > screenHeight/fontHeight then\r
            goto skip\r
        end\r
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
                fillrect(offset + px, py, 1, fontHeight - 1)\r
                cx = px\r
                cy = py\r
            end\r
            if offset + px + textwidth(uc) > screenWidth then\r
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
            fillrect(offset + px, py, 1, fontHeight - 1)\r
            cx = px\r
            cy = py\r
        end\r
        ::continue::\r
        py = py + fontHeight\r
        ::skip::\r
    end\r
\r
    if setPos then\r
        setPos(offset + cx, cy)\r
    end\r
end\r
\r
draw()\r
\r
function keydown(k, c, ctrl)\r
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
    elseif key == "q" and ctrl then\r
        exit()\r
    elseif string.len(key) == 1 or utf8.len(key) == 1 then\r
        local line = lines[y]\r
        lines[y]["value"] = insertChar(line["value"], x, key)\r
        x = x + 1\r
    end\r
\r
    if cy <= 0  and scrollY > 0 then\r
        scrollY = scrollY - 1\r
        alldirty = true\r
    end\r
\r
    if cy >= screenHeight - fontHeight * 2 then\r
        scrollY = scrollY + 1\r
        alldirty = true\r
    end\r
\r
    draw(setPos)\r
end\r
\r
require("skk")`,Ar=`-- IME\r
candidate = ""\r
nextCandidate = ""\r
results = {}\r
index = 1\r
M_DIRECT = 0\r
M_HENKAN = 1\r
M_SELECT = 2\r
M_HAN = 3\r
imMode = M_DIRECT\r
cx = 0 -- (px)\r
cy = 0 -- (px)\r
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
rome["kye"] = "きぇ"\r
rome["kyo"] = "きょ"\r
rome["sya"] = "しゃ"\r
rome["syu"] = "しゅ"\r
rome["sye"] = "しぇ"\r
rome["syo"] = "しょ"\r
rome["tya"] = "ちゃ"\r
rome["tyu"] = "ちゅ"\r
rome["tye"] = "ちぇ"\r
rome["tyo"] = "ちょ"\r
rome["nya"] = "にゃ"\r
rome["nyu"] = "にゅ"\r
rome["nye"] = "にぇ"\r
rome["nyo"] = "にょ"\r
rome["hya"] = "ひゃ"\r
rome["hyu"] = "ひゅ"\r
rome["hye"] = "ひぇ"\r
rome["hyo"] = "ひょ"\r
rome["mya"] = "みゃ"\r
rome["myu"] = "みゅ"\r
rome["mye"] = "みぇ"\r
rome["myo"] = "みょ"\r
rome["rya"] = "りゃ"\r
rome["ryu"] = "りゅ"\r
rome["rye"] = "りぇ"\r
rome["ryo"] = "りょ"\r
rome["gya"] = "ぎゃ"\r
rome["gyu"] = "ぎゅ"\r
rome["gye"] = "ぎぇ"\r
rome["gyo"] = "ぎょ"\r
rome["zya"] = "じゃ"\r
rome["zyu"] = "じゅ"\r
rome["zye"] = "じぇ"\r
rome["zyo"] = "じょ"\r
rome["fa"] = "ふぁ"\r
rome["fo"] = "ふぉ"\r
rome["ja"] = "じゃ"\r
rome["ju"] = "じゅ"\r
rome["je"] = "じぇ"\r
rome["jo"] = "じょ"\r
rome["dya"] = "ぢゃ"\r
rome["dyu"] = "ぢゅ"\r
rome["dye"] = "ぢぇ"\r
rome["dyo"] = "ぢょ"\r
rome["bya"] = "びゃ"\r
rome["byu"] = "びゅ"\r
rome["bye"] = "びぇ"\r
rome["byo"] = "びょ"\r
rome["pya"] = "ぴゃ"\r
rome["pyu"] = "ぴゅ"\r
rome["pye"] = "ぴぇ"\r
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
            onCharHandler(0, string.sub(candidate, i, i), false)\r
        end\r
    else\r
        local s = results[index]\r
        for p, c in utf8.codes(s) do\r
            local uc = utf8.char(c)\r
            onCharHandler(0, uc, false)\r
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
    elseif c == 'l' and imMode == M_DIRECT then\r
        imMode = M_HAN\r
        drawIm()\r
    elseif c == 'j' and ctrl  and imMode == M_HAN then\r
        imMode = M_DIRECT\r
        drawIm()\r
    elseif c == 'q' and imMode == M_HENKAN then\r
        -- katakana\r
        local hira = rome2kana(candidate)\r
        local kata = hira2kata(hira)\r
        results = {kata}\r
        decide()\r
    elseif string.len(c) == 1 and k ~= 13 and k ~= 32 and not(ctrl) then\r
        if imMode == M_HAN then\r
            onCharHandler(0, c, ctrl)\r
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
                        onCharHandler(0, uc, false)\r
                    end\r
                    candidate = string.sub(candidate, index)\r
                end\r
            end\r
        end\r
        drawIm()\r
    else\r
        onCharHandler(k, c, ctrl)\r
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
\r
drawIm()`;let Ct={},_e={},ce=null,Nr,Dt=320,Ut=240,st=!1,We="/edit.lua",Rr=[],K,Ir=()=>{(async()=>{const j=new Ln.LuaFactory;j.mountFile("skk.lua",Ar),j.mountFile("edit.lua",Or),_e["/test.txt"]="hello world",_e["/skk.lua"]=Ar,_e["/shell.lua"]=Tn,_e["/edit.lua"]=Or,K=await j.createEngine();try{K.global.set("color",(x,p,D)=>{ce!=null&&(ce.fillStyle=`rgb(${x},${p},${D})`)}),K.global.set("text",(x,p,D)=>{ce!=null&&ce.fillText(x,p,D)}),K.global.set("textwidth",x=>{if(ce!=null)return ce.measureText(x).width}),K.global.set("screenwidth",()=>Dt),K.global.set("screenheight",()=>Ut),K.global.set("fillrect",(x,p,D,U)=>{ce!=null&&ce.fillRect(x,p,D,U)}),K.global.set("debug",x=>{console.log(x)}),K.global.set("getfiles",()=>Object.keys(_e)),K.global.set("savefile",(x,p)=>{_e[x]=p}),K.global.set("readfile",x=>_e[x]),K.global.set("getfreeheap",()=>-1),K.global.set("run",x=>{Rr.push(We),We=x,st=!0}),K.global.set("exit",()=>{const x=Rr.pop();if(x)We=x,st=!0;else throw new Error("root process can't exit!")}),K.global.set("ksearch",x=>{let p=[];return x in Ct&&(p=Ct[x].slice()),p}),Nr=async(x,p,D)=>{K.global.get("keydown")(x,p,D)},console.log("load: "+We),await K.doString(_e[We])}catch(x){console.log(x)}finally{}})()};Ir();addEventListener("keydown",j=>{j.key!="Shift"&&(Nr(j.keyCode,j.key,j.ctrlKey),st&&(console.log("EXIT"),st=!1,K.global.close(),Ir()),j.preventDefault())});addEventListener("load",()=>{var p;fetch("https://raw.githubusercontent.com/skk-dev/dict/refs/heads/master/json/SKK-JISYO.M.json",{method:"GET"}).then(D=>D.json()).then(D=>{Ct={...D.okuri_ari,...D.okuri_nasi}});let j=document.createElement("canvas");j.width=Dt,j.height=Ut,j.style.width=Dt+"px",j.style.height=Ut+"px",(p=document.getElementById("app"))==null||p.appendChild(j);let x=j.getContext("2d");x!=null&&(ce=x,x.fillStyle="white",x.textBaseline="top",x.fillRect(0,0,800,480),x.fillStyle="black",x.font="12px San-serif")});const Sn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
