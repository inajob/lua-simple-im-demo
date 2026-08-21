(function(){const T=document.createElement("link").relList;if(T&&T.supports&&T.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))C(D);new MutationObserver(D=>{for(const O of D)if(O.type==="childList")for(const B of O.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&C(B)}).observe(document,{childList:!0,subtree:!0});function h(D){const O={};return D.integrity&&(O.integrity=D.integrity),D.referrerPolicy&&(O.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?O.credentials="include":D.crossOrigin==="anonymous"?O.credentials="omit":O.credentials="same-origin",O}function C(D){if(D.ep)return;D.ep=!0;const O=h(D);fetch(D.href,O)}})();const Mt="modulepreload",Ot=function(U){return"/"+U},Fn={},At=function(T,h,C){let D=Promise.resolve();if(h&&h.length>0){document.getElementsByTagName("link");const O=document.querySelector("meta[property=csp-nonce]"),B=(O==null?void 0:O.nonce)||(O==null?void 0:O.getAttribute("nonce"));D=Promise.all(h.map(j=>{if(j=Ot(j),j in Fn)return;Fn[j]=!0;const le=j.endsWith(".css"),ne=le?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${j}"]${ne}`))return;const se=document.createElement("link");if(se.rel=le?"stylesheet":Mt,le||(se.as="script",se.crossOrigin=""),se.href=j,B&&se.setAttribute("nonce",B),document.head.appendChild(se),le)return new Promise((Xe,_e)=>{se.addEventListener("load",Xe),se.addEventListener("error",()=>_e(new Error(`Unable to preload CSS for ${j}`)))})}))}return D.then(()=>T()).catch(O=>{const B=new Event("vite:preloadError",{cancelable:!0});if(B.payload=O,window.dispatchEvent(B),!B.defaultPrevented)throw O})};var Nt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ur(U){throw new Error('Could not dynamically require "'+U+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ur={exports:{}};(function(U,T){(function(h,C){C(T)})(Nt,function(h){var C=typeof document<"u"?document.currentScript:null;h.LuaReturn=void 0,function(_){_[_.Ok=0]="Ok",_[_.Yield=1]="Yield",_[_.ErrorRun=2]="ErrorRun",_[_.ErrorSyntax=3]="ErrorSyntax",_[_.ErrorMem=4]="ErrorMem",_[_.ErrorErr=5]="ErrorErr",_[_.ErrorFile=6]="ErrorFile"}(h.LuaReturn||(h.LuaReturn={}));const D=4,O=-1,B=1e6,j=-B-1e3;h.LuaType=void 0,function(_){_[_.None=-1]="None",_[_.Nil=0]="Nil",_[_.Boolean=1]="Boolean",_[_.LightUserdata=2]="LightUserdata",_[_.Number=3]="Number",_[_.String=4]="String",_[_.Table=5]="Table",_[_.Function=6]="Function",_[_.Userdata=7]="Userdata",_[_.Thread=8]="Thread"}(h.LuaType||(h.LuaType={})),h.LuaEventCodes=void 0,function(_){_[_.Call=0]="Call",_[_.Ret=1]="Ret",_[_.Line=2]="Line",_[_.Count=3]="Count",_[_.TailCall=4]="TailCall"}(h.LuaEventCodes||(h.LuaEventCodes={})),h.LuaEventMasks=void 0,function(_){_[_.Call=1]="Call",_[_.Ret=2]="Ret",_[_.Line=4]="Line",_[_.Count=8]="Count"}(h.LuaEventMasks||(h.LuaEventMasks={})),h.LuaLibraries=void 0,function(_){_.Base="_G",_.Coroutine="coroutine",_.Table="table",_.IO="io",_.OS="os",_.String="string",_.UTF8="utf8",_.Math="math",_.Debug="debug",_.Package="package"}(h.LuaLibraries||(h.LuaLibraries={}));class le extends Error{}class ne{constructor(n,a){this.target=n,this.options=a}}function se(_,n){return new ne(_,n)}class Xe extends Number{}class _e extends Array{}const Yn=1e3;class Me{constructor(n,a,u,o){this.closed=!1,this.lua=n,this.typeExtensions=a,this.address=u,this.parent=o}newThread(){const n=this.lua.lua_newthread(this.address);if(!n)throw new Error("lua_newthread returned a null pointer");return new Me(this.lua,this.typeExtensions,n,this.parent||this)}resetThread(){this.assertOk(this.lua.lua_resetthread(this.address))}loadString(n,a){const u=this.lua.module.lengthBytesUTF8(n),o=u+1,p=this.lua.module._malloc(o);try{this.lua.module.stringToUTF8(n,p,o),this.assertOk(this.lua.luaL_loadbufferx(this.address,p,u,a??p,null))}finally{this.lua.module._free(p)}}loadFile(n){this.assertOk(this.lua.luaL_loadfilex(this.address,n,null))}resume(n=0){const a=this.lua.module._malloc(D);try{return this.lua.module.setValue(a,0,"i32"),{result:this.lua.lua_resume(this.address,null,n,a),resultCount:this.lua.module.getValue(a,"i32")}}finally{this.lua.module._free(a)}}getTop(){return this.lua.lua_gettop(this.address)}setTop(n){this.lua.lua_settop(this.address,n)}remove(n){return this.lua.lua_remove(this.address,n)}setField(n,a,u){n=this.lua.lua_absindex(this.address,n),this.pushValue(u),this.lua.lua_setfield(this.address,n,a)}async run(n=0,a){const u=this.timeout;try{(a==null?void 0:a.timeout)!==void 0&&this.setTimeout(Date.now()+a.timeout);let o=this.resume(n);for(;o.result===h.LuaReturn.Yield;){if(this.timeout&&Date.now()>this.timeout)throw o.resultCount>0&&this.pop(o.resultCount),new le("thread timeout exceeded");if(o.resultCount>0){const p=this.getValue(-1);this.pop(o.resultCount),p===Promise.resolve(p)?await p:await new Promise(w=>setImmediate(w))}else await new Promise(p=>setImmediate(p));o=this.resume(0)}return this.assertOk(o.result),this.getStackValues()}finally{(a==null?void 0:a.timeout)!==void 0&&this.setTimeout(u)}}runSync(n=0){const a=this.getTop()-n-1;return this.assertOk(this.lua.lua_pcallk(this.address,n,O,0,0,null)),this.getStackValues(a)}pop(n=1){this.lua.lua_pop(this.address,n)}call(n,...a){const u=this.lua.lua_getglobal(this.address,n);if(u!==h.LuaType.Function)throw new Error(`A function of type '${u}' was pushed, expected is ${h.LuaType.Function}`);for(const p of a)this.pushValue(p);const o=this.getTop()-a.length-1;return this.lua.lua_callk(this.address,a.length,O,0,null),this.getStackValues(o)}getStackValues(n=0){const a=this.getTop()-n,u=new _e(a);for(let o=0;o<a;o++)u[o]=this.getValue(n+o+1);return u}stateToThread(n){var a;return n===((a=this.parent)===null||a===void 0?void 0:a.address)?this.parent:new Me(this.lua,this.typeExtensions,n,this.parent||this)}pushValue(n,a){const u=this.getValueDecorations(n),o=u.target;if(o instanceof Me){this.lua.lua_pushthread(o.address)===1||this.lua.lua_xmove(o.address,this.address,1);return}const p=this.getTop();switch(typeof o){case"undefined":this.lua.lua_pushnil(this.address);break;case"number":Number.isInteger(o)?this.lua.lua_pushinteger(this.address,BigInt(o)):this.lua.lua_pushnumber(this.address,o);break;case"string":this.lua.lua_pushstring(this.address,o);break;case"boolean":this.lua.lua_pushboolean(this.address,o?1:0);break;default:if(!this.typeExtensions.find(w=>w.extension.pushValue(this,u,a)))throw new Error(`The type '${typeof o}' is not supported by Lua`)}if(u.options.metatable&&this.setMetatable(-1,u.options.metatable),this.getTop()!==p+1)throw new Error(`pushValue expected stack size ${p+1}, got ${this.getTop()}`)}setMetatable(n,a){if(n=this.lua.lua_absindex(this.address,n),this.lua.lua_getmetatable(this.address,n)){this.pop(1);const u=this.getMetatableName(n);throw new Error(`data already has associated metatable: ${u||"unknown name"}`)}this.pushValue(a),this.lua.lua_setmetatable(this.address,n)}getMetatableName(n){const a=this.lua.luaL_getmetafield(this.address,n,"__name");if(a===h.LuaType.Nil)return;if(a!==h.LuaType.String){this.pop(1);return}const u=this.lua.lua_tolstring(this.address,-1,null);return this.pop(1),u}getValue(n,a,u){n=this.lua.lua_absindex(this.address,n);const o=a??this.lua.lua_type(this.address,n);switch(o){case h.LuaType.None:return;case h.LuaType.Nil:return null;case h.LuaType.Number:return this.lua.lua_tonumberx(this.address,n,null);case h.LuaType.String:return this.lua.lua_tolstring(this.address,n,null);case h.LuaType.Boolean:return!!this.lua.lua_toboolean(this.address,n);case h.LuaType.Thread:return this.stateToThread(this.lua.lua_tothread(this.address,n));default:{let p;(o===h.LuaType.Table||o===h.LuaType.Userdata)&&(p=this.getMetatableName(n));const w=this.typeExtensions.find(M=>M.extension.isType(this,n,o,p));return w?w.extension.getValue(this,n,u):(console.warn(`The type '${this.lua.lua_typename(this.address,o)}' returned is not supported on JS`),new Xe(this.lua.lua_topointer(this.address,n)))}}}close(){this.isClosed()||(this.hookFunctionPointer&&this.lua.module.removeFunction(this.hookFunctionPointer),this.closed=!0)}setTimeout(n){n&&n>0?(this.hookFunctionPointer||(this.hookFunctionPointer=this.lua.module.addFunction(()=>{Date.now()>n&&(this.pushValue(new le("thread timeout exceeded")),this.lua.lua_error(this.address))},"vii")),this.lua.lua_sethook(this.address,this.hookFunctionPointer,h.LuaEventMasks.Count,Yn),this.timeout=n):this.hookFunctionPointer&&(this.hookFunctionPointer=void 0,this.timeout=void 0,this.lua.lua_sethook(this.address,null,0,0))}getTimeout(){return this.timeout}getPointer(n){return new Xe(this.lua.lua_topointer(this.address,n))}isClosed(){var n;return!this.address||this.closed||!!(!((n=this.parent)===null||n===void 0)&&n.isClosed())}indexToString(n){const a=this.lua.luaL_tolstring(this.address,n,null);return this.pop(),a}dumpStack(n=console.log){const a=this.getTop();for(let u=1;u<=a;u++){const o=this.lua.lua_type(this.address,u),p=this.lua.lua_typename(this.address,o),w=this.getPointer(u),M=this.indexToString(u),E=this.getValue(u,o);n(u,p,w,M,E)}}assertOk(n){if(n!==h.LuaReturn.Ok&&n!==h.LuaReturn.Yield){const a=h.LuaReturn[n],u=new Error(`Lua Error(${a}/${n})`);if(this.getTop()>0)if(n===h.LuaReturn.ErrorMem)u.message=this.lua.lua_tolstring(this.address,-1,null);else{const o=this.getValue(-1);o instanceof Error&&(u.stack=o.stack),u.message=this.indexToString(-1)}if(n!==h.LuaReturn.ErrorMem)try{this.lua.luaL_traceback(this.address,this.address,null,1);const o=this.lua.lua_tolstring(this.address,-1,null);o.trim()!=="stack traceback:"&&(u.message=`${u.message}
${o}`),this.pop(1)}catch(o){console.warn("Failed to generate stack trace",o)}throw u}}getValueDecorations(n){return n instanceof ne?n:new ne(n,{})}}class Br extends Me{constructor(n,a){if(a){const u={memoryUsed:0},o=n.module.addFunction((w,M,E,P)=>{if(P===0)return M&&(u.memoryUsed-=E,n.module._free(M)),0;const F=M?P-E:P,H=u.memoryUsed+F;if(P>E&&u.memoryMax&&H>u.memoryMax)return 0;const Y=n.module._realloc(M,P);return Y&&(u.memoryUsed=H),Y},"iiiii"),p=n.lua_newstate(o,null);if(!p)throw n.module.removeFunction(o),new Error("lua_newstate returned a null pointer");super(n,[],p),this.memoryStats=u,this.allocatorFunctionPointer=o}else super(n,[],n.luaL_newstate());if(this.isClosed())throw new Error("Global state could not be created (probably due to lack of memory)")}close(){if(!this.isClosed()){super.close(),this.lua.lua_close(this.address),this.allocatorFunctionPointer&&this.lua.module.removeFunction(this.allocatorFunctionPointer);for(const n of this.typeExtensions)n.extension.close()}}registerTypeExtension(n,a){this.typeExtensions.push({extension:a,priority:n}),this.typeExtensions.sort((u,o)=>o.priority-u.priority)}loadLibrary(n){switch(n){case h.LuaLibraries.Base:this.lua.luaopen_base(this.address);break;case h.LuaLibraries.Coroutine:this.lua.luaopen_coroutine(this.address);break;case h.LuaLibraries.Table:this.lua.luaopen_table(this.address);break;case h.LuaLibraries.IO:this.lua.luaopen_io(this.address);break;case h.LuaLibraries.OS:this.lua.luaopen_os(this.address);break;case h.LuaLibraries.String:this.lua.luaopen_string(this.address);break;case h.LuaLibraries.UTF8:this.lua.luaopen_string(this.address);break;case h.LuaLibraries.Math:this.lua.luaopen_math(this.address);break;case h.LuaLibraries.Debug:this.lua.luaopen_debug(this.address);break;case h.LuaLibraries.Package:this.lua.luaopen_package(this.address);break}this.lua.lua_setglobal(this.address,n)}get(n){const a=this.lua.lua_getglobal(this.address,n),u=this.getValue(-1,a);return this.pop(),u}set(n,a){this.pushValue(a),this.lua.lua_setglobal(this.address,n)}getTable(n,a){const u=this.getTop(),o=this.lua.lua_getglobal(this.address,n);try{if(o!==h.LuaType.Table)throw new TypeError(`Unexpected type in ${n}. Expected ${h.LuaType[h.LuaType.Table]}. Got ${h.LuaType[o]}.`);a(u+1)}finally{this.getTop()!==u+1&&console.warn(`getTable: expected stack size ${u} got ${this.getTop()}`),this.setTop(u)}}getMemoryUsed(){return this.getMemoryStatsRef().memoryUsed}getMemoryMax(){return this.getMemoryStatsRef().memoryMax}setMemoryMax(n){this.getMemoryStatsRef().memoryMax=n}getMemoryStatsRef(){if(!this.memoryStats)throw new Error("Memory allocations is not being traced, please build engine with { traceAllocations: true }");return this.memoryStats}}class ge{constructor(n,a){this.thread=n,this.name=a}isType(n,a,u,o){return u===h.LuaType.Userdata&&o===this.name}getValue(n,a,u){const o=n.lua.luaL_testudata(n.address,a,this.name);if(!o)throw new Error(`data does not have the expected metatable: ${this.name}`);const p=n.lua.module.getValue(o,"*");return n.lua.getRef(p)}pushValue(n,a,u){const{target:o}=a,p=n.lua.ref(o),w=n.lua.lua_newuserdatauv(n.address,D,0);if(n.lua.module.setValue(w,p,"*"),h.LuaType.Nil===n.lua.luaL_getmetatable(n.address,this.name))throw n.pop(2),new Error(`metatable not found: ${this.name}`);return n.lua.lua_setmetatable(n.address,-2),!0}}class zn extends ge{constructor(n,a){if(super(n,"js_error"),this.gcPointer=n.lua.module.addFunction(u=>{const o=n.lua.luaL_checkudata(u,1,this.name),p=n.lua.module.getValue(o,"*");return n.lua.unref(p),h.LuaReturn.Ok},"ii"),n.lua.luaL_newmetatable(n.address,this.name)){const u=n.lua.lua_gettop(n.address);n.lua.lua_pushstring(n.address,"protected metatable"),n.lua.lua_setfield(n.address,u,"__metatable"),n.lua.lua_pushcclosure(n.address,this.gcPointer,0),n.lua.lua_setfield(n.address,u,"__gc"),n.pushValue((o,p)=>p==="message"?o.message:null),n.lua.lua_setfield(n.address,u,"__index"),n.pushValue(o=>o.message),n.lua.lua_setfield(n.address,u,"__tostring")}n.lua.lua_pop(n.address,1),a&&n.set("Error",{create:u=>{if(u&&typeof u!="string")throw new Error("message must be a string");return new Error(u)}})}pushValue(n,a){return a.target instanceof Error?super.pushValue(n,a):!1}close(){this.thread.lua.module.removeFunction(this.gcPointer)}}function $n(_,n){return new zn(_,n)}class Je{constructor(n){this.count=n}}function dr(_,n){return new ne(_,n)}class Gn extends ge{constructor(n,a){super(n,"js_function"),this.functionRegistry=typeof FinalizationRegistry<"u"?new FinalizationRegistry(u=>{this.thread.isClosed()||this.thread.lua.luaL_unref(this.thread.address,j,u)}):void 0,this.options=a,this.callbackContext=n.newThread(),this.callbackContextIndex=this.thread.lua.luaL_ref(n.address,j),this.functionRegistry||console.warn("FunctionTypeExtension: FinalizationRegistry not found. Memory leaks likely."),this.gcPointer=n.lua.module.addFunction(u=>{n.lua.luaL_checkudata(u,1,this.name);const o=n.lua.luaL_checkudata(u,1,this.name),p=n.lua.module.getValue(o,"*");return n.lua.unref(p),h.LuaReturn.Ok},"ii"),n.lua.luaL_newmetatable(n.address,this.name)&&(n.lua.lua_pushstring(n.address,"__gc"),n.lua.lua_pushcclosure(n.address,this.gcPointer,0),n.lua.lua_settable(n.address,-3),n.lua.lua_pushstring(n.address,"__metatable"),n.lua.lua_pushstring(n.address,"protected metatable"),n.lua.lua_settable(n.address,-3)),n.lua.lua_pop(n.address,1),this.functionWrapper=n.lua.module.addFunction(u=>{const o=n.stateToThread(u),p=n.lua.luaL_checkudata(u,n.lua.lua_upvalueindex(1),this.name),w=n.lua.module.getValue(p,"*"),{target:M,options:E}=n.lua.getRef(w),P=o.getTop(),F=[];if(E.receiveThread&&F.push(o),E.receiveArgsQuantity)F.push(P);else for(let H=1;H<=P;H++){const Y=o.getValue(H);(H!==1||!(E!=null&&E.self)||Y!==E.self)&&F.push(Y)}try{const H=M.apply(E==null?void 0:E.self,F);if(H===void 0)return 0;if(H instanceof Je)return H.count;if(H instanceof _e){for(const Y of H)o.pushValue(Y);return H.length}else return o.pushValue(H),1}catch(H){if(H===1/0)throw H;return o.pushValue(H),o.lua.lua_error(o.address)}},"ii")}close(){this.thread.lua.module.removeFunction(this.gcPointer),this.thread.lua.module.removeFunction(this.functionWrapper),this.callbackContext.close(),this.callbackContext.lua.luaL_unref(this.callbackContext.address,j,this.callbackContextIndex)}isType(n,a,u){return u===h.LuaType.Function}pushValue(n,a){if(typeof a.target!="function")return!1;const u=n.lua.ref(a),o=n.lua.lua_newuserdatauv(n.address,D,0);if(n.lua.module.setValue(o,u,"*"),h.LuaType.Nil===n.lua.luaL_getmetatable(n.address,this.name))throw n.pop(1),n.lua.unref(u),new Error(`metatable not found: ${this.name}`);return n.lua.lua_setmetatable(n.address,-2),n.lua.lua_pushcclosure(n.address,this.functionWrapper,1),!0}getValue(n,a){var u;n.lua.lua_pushvalue(n.address,a);const o=n.lua.luaL_ref(n.address,j),p=(...w)=>{var M;if(this.callbackContext.isClosed()){console.warn("Tried to call a function after closing lua state");return}const E=this.callbackContext.newThread();try{const P=E.lua.lua_rawgeti(E.address,j,BigInt(o));if(P!==h.LuaType.Function){const H=E.lua.luaL_getmetafield(E.address,-1,"__call");if(E.pop(),H!==h.LuaType.Function)throw new Error(`A value of type '${P}' was pushed but it is not callable`)}for(const H of w)E.pushValue(H);!((M=this.options)===null||M===void 0)&&M.functionTimeout&&E.setTimeout(Date.now()+this.options.functionTimeout);const F=E.lua.lua_pcallk(E.address,w.length,1,0,0,null);if(F===h.LuaReturn.Yield)throw new Error("cannot yield in callbacks from javascript");return E.assertOk(F),E.getTop()>0?E.getValue(-1):void 0}finally{E.close(),this.callbackContext.pop()}};return(u=this.functionRegistry)===null||u===void 0||u.register(p,o),p}}function Kn(_,n){return new Gn(_,n)}class qn extends ge{constructor(n){if(super(n,"js_null"),this.gcPointer=n.lua.module.addFunction(a=>{const u=n.lua.luaL_checkudata(a,1,this.name),o=n.lua.module.getValue(u,"*");return n.lua.unref(o),h.LuaReturn.Ok},"ii"),n.lua.luaL_newmetatable(n.address,this.name)){const a=n.lua.lua_gettop(n.address);n.lua.lua_pushstring(n.address,"protected metatable"),n.lua.lua_setfield(n.address,a,"__metatable"),n.lua.lua_pushcclosure(n.address,this.gcPointer,0),n.lua.lua_setfield(n.address,a,"__gc"),n.pushValue(()=>null),n.lua.lua_setfield(n.address,a,"__index"),n.pushValue(()=>"null"),n.lua.lua_setfield(n.address,a,"__tostring"),n.pushValue((u,o)=>u===o),n.lua.lua_setfield(n.address,a,"__eq")}n.lua.lua_pop(n.address,1),super.pushValue(n,new ne({},{})),n.lua.lua_setglobal(n.address,"null")}getValue(n,a){if(!n.lua.luaL_testudata(n.address,a,this.name))throw new Error(`data does not have the expected metatable: ${this.name}`);return null}pushValue(n,a){return(a==null?void 0:a.target)!==null?!1:(n.lua.lua_getglobal(n.address,"null"),!0)}close(){this.thread.lua.module.removeFunction(this.gcPointer)}}function Xn(_){return new qn(_)}class Jn extends ge{constructor(n,a){if(super(n,"js_promise"),this.gcPointer=n.lua.module.addFunction(u=>{const o=n.lua.luaL_checkudata(u,1,this.name),p=n.lua.module.getValue(o,"*");return n.lua.unref(p),h.LuaReturn.Ok},"ii"),n.lua.luaL_newmetatable(n.address,this.name)){const u=n.lua.lua_gettop(n.address);n.lua.lua_pushstring(n.address,"protected metatable"),n.lua.lua_setfield(n.address,u,"__metatable"),n.lua.lua_pushcclosure(n.address,this.gcPointer,0),n.lua.lua_setfield(n.address,u,"__gc");const o=p=>{if(Promise.resolve(p)!==p&&typeof p.then!="function")throw new Error("promise method called without self instance");return!0};n.pushValue({next:(p,...w)=>o(p)&&p.then(...w),catch:(p,...w)=>o(p)&&p.catch(...w),finally:(p,...w)=>o(p)&&p.finally(...w),await:dr((p,w)=>{if(o(w),p.address===n.address)throw new Error("cannot await in the main thread");let M;const E=w.then(F=>{M={status:"fulfilled",value:F}}).catch(F=>{M={status:"rejected",value:F}}),P=this.thread.lua.module.addFunction(F=>{if(!M)return n.lua.lua_yieldk(p.address,0,0,P);this.thread.lua.module.removeFunction(P);const H=n.stateToThread(F);if(M.status==="rejected")return H.pushValue(M.value||new Error("promise rejected with no error")),this.thread.lua.lua_error(F);if(M.value instanceof Je)return M.value.count;if(M.value instanceof _e){for(const Y of M.value)H.pushValue(Y);return M.value.length}else return H.pushValue(M.value),1},"iiii");return p.pushValue(E),new Je(n.lua.lua_yieldk(p.address,1,0,P))},{receiveThread:!0})}),n.lua.lua_setfield(n.address,u,"__index"),n.pushValue((p,w)=>p===w),n.lua.lua_setfield(n.address,u,"__eq")}n.lua.lua_pop(n.address,1),a&&n.set("Promise",{create:u=>new Promise(u),all:u=>{if(!Array.isArray(u))throw new Error("argument must be an array of promises");return Promise.all(u.map(o=>Promise.resolve(o)))},resolve:u=>Promise.resolve(u)})}close(){this.thread.lua.module.removeFunction(this.gcPointer)}pushValue(n,a){return Promise.resolve(a.target)!==a.target&&typeof a.target.then!="function"?!1:super.pushValue(n,a)}}function Zn(_,n){return new Jn(_,n)}function Wr(_,n){return new ne(_,n||{})}class Qn extends ge{constructor(n){if(super(n,"js_proxy"),this.gcPointer=n.lua.module.addFunction(a=>{const u=n.lua.luaL_checkudata(a,1,this.name),o=n.lua.module.getValue(u,"*");return n.lua.unref(o),h.LuaReturn.Ok},"ii"),n.lua.luaL_newmetatable(n.address,this.name)){const a=n.lua.lua_gettop(n.address);n.lua.lua_pushstring(n.address,"protected metatable"),n.lua.lua_setfield(n.address,a,"__metatable"),n.lua.lua_pushcclosure(n.address,this.gcPointer,0),n.lua.lua_setfield(n.address,a,"__gc"),n.pushValue((u,o)=>{switch(typeof o){case"number":o=o-1;case"string":break;default:throw new Error("Only strings or numbers can index js objects")}const p=u[o];return typeof p=="function"?dr(p,{self:u}):p}),n.lua.lua_setfield(n.address,a,"__index"),n.pushValue((u,o,p)=>{switch(typeof o){case"number":o=o-1;case"string":break;default:throw new Error("Only strings or numbers can index js objects")}u[o]=p}),n.lua.lua_setfield(n.address,a,"__newindex"),n.pushValue(u=>{var o,p;return(p=(o=u.toString)===null||o===void 0?void 0:o.call(u))!==null&&p!==void 0?p:typeof u}),n.lua.lua_setfield(n.address,a,"__tostring"),n.pushValue(u=>u.length||0),n.lua.lua_setfield(n.address,a,"__len"),n.pushValue(u=>{const o=Object.getOwnPropertyNames(u);let p=0;return _e.of(()=>{const w=_e.of(o[p],u[o[p]]);return p++,w},u,null)}),n.lua.lua_setfield(n.address,a,"__pairs"),n.pushValue((u,o)=>u===o),n.lua.lua_setfield(n.address,a,"__eq"),n.pushValue((u,...o)=>(o[0]===u&&o.shift(),u(...o))),n.lua.lua_setfield(n.address,a,"__call")}n.lua.lua_pop(n.address,1)}isType(n,a,u,o){return u===h.LuaType.Userdata&&o===this.name}getValue(n,a){const u=n.lua.lua_touserdata(n.address,a),o=n.lua.module.getValue(u,"*");return n.lua.getRef(o)}pushValue(n,a){var u;const{target:o,options:p}=a;if(p.proxy===void 0){if(o==null||typeof o!="object"&&!(typeof o=="function"&&((u=o.prototype)===null||u===void 0?void 0:u.constructor)===o&&o.toString().startsWith("class "))||Promise.resolve(o)===o||typeof o.then=="function")return!1}else if(p.proxy===!1)return!1;return p.metatable&&!(p.metatable instanceof ne)?(a.options.metatable=Wr(p.metatable,{proxy:!1}),!1):super.pushValue(n,a)}close(){this.thread.lua.module.removeFunction(this.gcPointer)}}function et(_){return new Qn(_)}class rt extends ge{constructor(n){super(n,"js_table")}close(){}isType(n,a,u){return u===h.LuaType.Table}getValue(n,a,u){const o=u||new Map,p=n.lua.lua_topointer(n.address,a);let w=o.get(p);if(!w){const M=this.readTableKeys(n,a);w=M.length>0&&M.every((P,F)=>P===String(F+1))?[]:{},o.set(p,w),this.readTableValues(n,a,o,w)}return w}pushValue(n,{target:a},u){if(typeof a!="object"||a===null)return!1;const o=u||new Map,p=o.get(a);if(p!==void 0)return n.lua.lua_rawgeti(n.address,j,BigInt(p)),!0;try{const w=n.getTop()+1,M=(E,P)=>{n.lua.lua_createtable(n.address,E,P);const F=n.lua.luaL_ref(n.address,j);o.set(a,F),n.lua.lua_rawgeti(n.address,j,BigInt(F))};if(Array.isArray(a)){M(a.length,0);for(let E=0;E<a.length;E++)n.pushValue(E+1,o),n.pushValue(a[E],o),n.lua.lua_settable(n.address,w)}else{M(0,Object.getOwnPropertyNames(a).length);for(const E in a)n.pushValue(E,o),n.pushValue(a[E],o),n.lua.lua_settable(n.address,w)}}finally{if(u===void 0)for(const w of o.values())n.lua.luaL_unref(n.address,j,w)}return!0}readTableKeys(n,a){const u=[];for(n.lua.lua_pushnil(n.address);n.lua.lua_next(n.address,a);){const o=n.indexToString(-2);u.push(o),n.pop()}return u}readTableValues(n,a,u,o){const p=Array.isArray(o);for(n.lua.lua_pushnil(n.address);n.lua.lua_next(n.address,a);){const w=n.indexToString(-2),M=n.getValue(-1,void 0,u);p?o.push(M):o[w]=M,n.pop()}}}function nt(_){return new rt(_)}function tt(_){return new ne(_,{reference:!0})}class at extends ge{constructor(n){if(super(n,"js_userdata"),this.gcPointer=n.lua.module.addFunction(a=>{const u=n.lua.luaL_checkudata(a,1,this.name),o=n.lua.module.getValue(u,"*");return n.lua.unref(o),h.LuaReturn.Ok},"ii"),n.lua.luaL_newmetatable(n.address,this.name)){const a=n.lua.lua_gettop(n.address);n.lua.lua_pushstring(n.address,"protected metatable"),n.lua.lua_setfield(n.address,a,"__metatable"),n.lua.lua_pushcclosure(n.address,this.gcPointer,0),n.lua.lua_setfield(n.address,a,"__gc")}n.lua.lua_pop(n.address,1)}isType(n,a,u,o){return u===h.LuaType.Userdata&&o===this.name}getValue(n,a){const u=n.lua.lua_touserdata(n.address,a),o=n.lua.module.getValue(u,"*");return n.lua.getRef(o)}pushValue(n,a){return a.options.reference?super.pushValue(n,a):!1}close(){this.thread.lua.module.removeFunction(this.gcPointer)}}function it(_){return new at(_)}class Yr{constructor(n,{openStandardLibs:a=!0,injectObjects:u=!1,enableProxy:o=!0,traceAllocations:p=!1,functionTimeout:w=void 0}={}){this.cmodule=n,this.global=new Br(this.cmodule,p),this.global.registerTypeExtension(0,nt(this.global)),this.global.registerTypeExtension(0,Kn(this.global,{functionTimeout:w})),this.global.registerTypeExtension(1,Zn(this.global,u)),u&&this.global.registerTypeExtension(5,Xn(this.global)),o?this.global.registerTypeExtension(3,et(this.global)):this.global.registerTypeExtension(1,$n(this.global,u)),this.global.registerTypeExtension(4,it(this.global)),a&&this.cmodule.luaL_openlibs(this.global.address)}doString(n){return this.callByteCode(a=>a.loadString(n))}doFile(n){return this.callByteCode(a=>a.loadFile(n))}doStringSync(n){return this.global.loadString(n),this.global.runSync()[0]}doFileSync(n){return this.global.loadFile(n),this.global.runSync()[0]}async callByteCode(n){const a=this.global.newThread(),u=this.global.getTop();try{n(a);const o=await a.run(0);return o.length>0?(this.cmodule.lua_xmove(a.address,this.global.address,o.length),this.global.getValue(this.global.getTop()-o.length+1)):void 0}finally{this.global.remove(u)}}}var lt=(()=>{var _=typeof document>"u"&&typeof location>"u"?ur("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:C&&C.src||new URL("index.js",document.baseURI).href;return async function(n={}){var a=n,u,o;a.ready=new Promise((e,r)=>{u=e,o=r}),"_malloc _free _realloc _luaL_checkversion_ _luaL_getmetafield _luaL_callmeta _luaL_tolstring _luaL_argerror _luaL_typeerror _luaL_checklstring _luaL_optlstring _luaL_checknumber _luaL_optnumber _luaL_checkinteger _luaL_optinteger _luaL_checkstack _luaL_checktype _luaL_checkany _luaL_newmetatable _luaL_setmetatable _luaL_testudata _luaL_checkudata _luaL_where _luaL_fileresult _luaL_execresult _luaL_ref _luaL_unref _luaL_loadfilex _luaL_loadbufferx _luaL_loadstring _luaL_newstate _luaL_len _luaL_addgsub _luaL_gsub _luaL_setfuncs _luaL_getsubtable _luaL_traceback _luaL_requiref _luaL_buffinit _luaL_prepbuffsize _luaL_addlstring _luaL_addstring _luaL_addvalue _luaL_pushresult _luaL_pushresultsize _luaL_buffinitsize _lua_newstate _lua_close _lua_newthread _lua_resetthread _lua_atpanic _lua_version _lua_absindex _lua_gettop _lua_settop _lua_pushvalue _lua_rotate _lua_copy _lua_checkstack _lua_xmove _lua_isnumber _lua_isstring _lua_iscfunction _lua_isinteger _lua_isuserdata _lua_type _lua_typename _lua_tonumberx _lua_tointegerx _lua_toboolean _lua_tolstring _lua_rawlen _lua_tocfunction _lua_touserdata _lua_tothread _lua_topointer _lua_arith _lua_rawequal _lua_compare _lua_pushnil _lua_pushnumber _lua_pushinteger _lua_pushlstring _lua_pushstring _lua_pushcclosure _lua_pushboolean _lua_pushlightuserdata _lua_pushthread _lua_getglobal _lua_gettable _lua_getfield _lua_geti _lua_rawget _lua_rawgeti _lua_rawgetp _lua_createtable _lua_newuserdatauv _lua_getmetatable _lua_getiuservalue _lua_setglobal _lua_settable _lua_setfield _lua_seti _lua_rawset _lua_rawseti _lua_rawsetp _lua_setmetatable _lua_setiuservalue _lua_callk _lua_pcallk _lua_load _lua_dump _lua_yieldk _lua_resume _lua_status _lua_isyieldable _lua_setwarnf _lua_warning _lua_error _lua_next _lua_concat _lua_len _lua_stringtonumber _lua_getallocf _lua_setallocf _lua_toclose _lua_closeslot _lua_getstack _lua_getinfo _lua_getlocal _lua_setlocal _lua_getupvalue _lua_setupvalue _lua_upvalueid _lua_upvaluejoin _lua_sethook _lua_gethook _lua_gethookmask _lua_gethookcount _lua_setcstacklimit _luaopen_base _luaopen_coroutine _luaopen_table _luaopen_io _luaopen_os _luaopen_string _luaopen_utf8 _luaopen_math _luaopen_debug _luaopen_package _luaL_openlibs _memory ___indirect_function_table _fflush onRuntimeInitialized".split(" ").forEach(e=>{Object.getOwnPropertyDescriptor(a.ready,e)||Object.defineProperty(a.ready,e,{get:()=>z("You are getting "+e+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),set:()=>z("You are setting "+e+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")})});var p=Object.assign({},a),w="./this.program",M=(e,r)=>{throw r},E=typeof window=="object",P=typeof importScripts=="function",F=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",H=!E&&!F&&!P;if(a.ENVIRONMENT)throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");var Y="",Oe,Ae,Ne;if(F){if(typeof process>"u"||!process.release||process.release.name!=="node")throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var zr=process.versions.node,Ve=zr.split(".").slice(0,3);if(Ve=1e4*Ve[0]+100*Ve[1]+1*Ve[2].split("-")[0],16e4>Ve)throw Error("This emscripten-generated code requires node v16.0.0 (detected v"+zr+")");const{createRequire:e}=await At(async()=>{const{createRequire:r}=await Promise.resolve().then(()=>jt);return{createRequire:r}},void 0);var Ie=e(typeof document>"u"&&typeof location>"u"?ur("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:C&&C.src||new URL("index.js",document.baseURI).href),fr=Ie("fs"),hr=Ie("path");P?Y=hr.dirname(Y)+"/":Y=Ie("url").fileURLToPath(new URL("./",typeof document>"u"&&typeof location>"u"?ur("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:C&&C.src||new URL("index.js",document.baseURI).href)),Oe=(r,t)=>(r=$e(r)?new URL(r):hr.normalize(r),fr.readFileSync(r,t?void 0:"utf8")),Ne=r=>(r=Oe(r,!0),r.buffer||(r=new Uint8Array(r)),g(r.buffer),r),Ae=(r,t,i,s=!0)=>{r=$e(r)?new URL(r):hr.normalize(r),fr.readFile(r,s?void 0:"utf8",(c,m)=>{c?i(c):t(s?m.buffer:m)})},!a.thisProgram&&1<process.argv.length&&(w=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),M=(r,t)=>{throw process.exitCode=r,t},a.inspect=()=>"[Emscripten Module object]"}else if(H){if(typeof process=="object"&&typeof Ie=="function"||typeof window=="object"||typeof importScripts=="function")throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");typeof read<"u"&&(Oe=read),Ne=e=>typeof readbuffer=="function"?new Uint8Array(readbuffer(e)):(e=read(e,"binary"),g(typeof e=="object"),e),Ae=(e,r)=>{setTimeout(()=>r(Ne(e)))},typeof clearTimeout>"u"&&(globalThis.clearTimeout=()=>{}),typeof setTimeout>"u"&&(globalThis.setTimeout=e=>typeof e=="function"?e():z()),typeof quit=="function"&&(M=(e,r)=>{throw setTimeout(()=>{if(!(r instanceof an)){let t=r;r&&typeof r=="object"&&r.stack&&(t=[r,r.stack]),$(`exiting due to exception: ${t}`)}quit(e)}),r}),typeof print<"u"&&(typeof console>"u"&&(console={}),console.log=print,console.warn=console.error=typeof printErr<"u"?printErr:print)}else if(E||P){if(P?Y=self.location.href:typeof document<"u"&&document.currentScript&&(Y=document.currentScript.src),_&&(Y=_),Y.indexOf("blob:")!==0?Y=Y.substr(0,Y.replace(/[?#].*/,"").lastIndexOf("/")+1):Y="",typeof window!="object"&&typeof importScripts!="function")throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");Oe=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),r.responseText},P&&(Ne=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}),Ae=(e,r,t)=>{var i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="arraybuffer",i.onload=()=>{i.status==200||i.status==0&&i.response?r(i.response):t()},i.onerror=t,i.send(null)}}else throw Error("environment detection error");var Fe=console.log.bind(console),$=console.error.bind(console);Object.assign(a,p),p=null,L("ENVIRONMENT"),L("GL_MAX_TEXTURE_IMAGE_UNITS"),L("SDL_canPlayWithWebAudio"),L("SDL_numSimultaneouslyQueuedBuffers"),L("INITIAL_MEMORY"),L("wasmMemory"),L("arguments"),L("buffer"),L("canvas"),L("doNotCaptureKeyboard"),L("dynamicLibraries"),L("elementPointerLock"),L("extraStackTrace"),L("forcedAspectRatio"),L("instantiateWasm"),L("keyboardListeningElement"),L("freePreloadedMediaOnUse"),L("loadSplitModule"),L("logReadFiles"),L("mainScriptUrlOrBlob"),L("mem"),L("monitorRunDependencies"),L("noExitRuntime"),L("noInitialRun"),L("onAbort"),L("onCustomMessage"),L("onExit"),L("onFree"),L("onFullScreen"),L("onMalloc"),L("onRealloc"),L("onRuntimeInitialized"),L("postMainLoop"),L("postRun"),L("preInit"),L("preMainLoop"),L("preinitializedWebGLContext"),L("memoryInitializerRequest"),L("preloadPlugins"),L("print"),L("printErr"),L("quit"),L("setStatus"),L("statusMessage"),L("stderr"),L("stdin"),L("stdout"),L("thisProgram"),L("wasm"),L("wasmBinary"),L("websocket"),L("fetchSettings"),ce("arguments","arguments_"),ce("thisProgram","thisProgram"),ce("quit","quit_"),g(typeof a.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),g(typeof a.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),g(typeof a.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),g(typeof a.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),g(typeof a.read>"u","Module.read option was removed (modify read_ in JS)"),g(typeof a.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),g(typeof a.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),g(typeof a.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),g(typeof a.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),ce("asm","wasmExports"),ce("read","read_"),ce("readAsync","readAsync"),ce("readBinary","readBinary"),ce("setWindowTitle","setWindowTitle"),g(!H,"shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable."),ce("wasmBinary","wasmBinary"),typeof WebAssembly!="object"&&z("no native wasm support detected");var Be,We=!1;function g(e,r){e||z("Assertion failed"+(r?": "+r:""))}var q,Qe,Pe,v,W,mr,er,pr;function $r(){var e=Be.buffer;a.HEAP8=q=new Int8Array(e),a.HEAP16=Pe=new Int16Array(e),a.HEAPU8=Qe=new Uint8Array(e),a.HEAPU16=new Uint16Array(e),a.HEAP32=v=new Int32Array(e),a.HEAPU32=W=new Uint32Array(e),a.HEAPF32=mr=new Float32Array(e),a.HEAPF64=pr=new Float64Array(e),a.HEAP64=er=new BigInt64Array(e),a.HEAPU64=new BigUint64Array(e)}g(!a.STACK_SIZE,"STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),g(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support"),g(!a.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),g(!a.INITIAL_MEMORY,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");function _r(){if(!We){var e=Dr();e==0&&(e+=4);var r=W[e>>2],t=W[e+4>>2];r==34821223&&t==2310721022||z(`Stack overflow! Stack cookie has been overwritten at ${Ge(e)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Ge(t)} ${Ge(r)}`),W[0]!=1668509029&&z("Runtime error: The application has corrupted its heap memory area (address zero)!")}}var Gr=new Int16Array(1),Kr=new Int8Array(Gr.buffer);if(Gr[0]=25459,Kr[0]!==115||Kr[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";var gr=[],br=[],qr=[],yr=!1;g(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),g(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),g(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),g(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var Ye=0,ye=null,ze=null,Re={};function Xr(e){for(var r=e;;){if(!Re[e])return e;e=r+Math.random()}}function wr(e){Ye++,e?(g(!Re[e]),Re[e]=1,ye===null&&typeof setInterval<"u"&&(ye=setInterval(()=>{if(We)clearInterval(ye),ye=null;else{var r=!1,t;for(t in Re)r||(r=!0,$("still waiting on run dependencies:")),$(`dependency: ${t}`);r&&$("(end of list)")}},1e4))):$("warning: run dependency added without ID")}function rr(e){Ye--,e?(g(Re[e]),delete Re[e]):$("warning: run dependency removed without ID"),Ye==0&&(ye!==null&&(clearInterval(ye),ye=null),ze&&(e=ze,ze=null,e()))}function z(e){throw e="Aborted("+e+")",$(e),We=!0,e=new WebAssembly.RuntimeError(e),o(e),e}var Jr=e=>e.startsWith("data:application/octet-stream;base64,"),$e=e=>e.startsWith("file://");function d(e){return function(){g(yr,`native function \`${e}\` called before runtime initialization`);var r=xe[e];return g(r,`exported native function \`${e}\` not found`),r.apply(null,arguments)}}var be;if(a.locateFile){if(be="glue.wasm",!Jr(be)){var Zr=be;be=a.locateFile?a.locateFile(Zr,Y):Y+Zr}}else be=new URL("glue.wasm",typeof document>"u"&&typeof location>"u"?ur("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:C&&C.src||new URL("index.js",document.baseURI).href).href;function Qr(e){if(Ne)return Ne(e);throw"both async and sync fetching of the wasm failed"}function ut(e){if(E||P){if(typeof fetch=="function"&&!$e(e))return fetch(e,{credentials:"same-origin"}).then(r=>{if(!r.ok)throw"failed to load wasm binary file at '"+e+"'";return r.arrayBuffer()}).catch(()=>Qr(e));if(Ae)return new Promise((r,t)=>{Ae(e,i=>r(new Uint8Array(i)),t)})}return Promise.resolve().then(()=>Qr(e))}function en(e,r,t){return ut(e).then(i=>WebAssembly.instantiate(i,r)).then(i=>i).then(t,i=>{$(`failed to asynchronously prepare wasm: ${i}`),$e(be)&&$(`warning: Loading from a file URI (${be}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),z(i)})}function ct(e,r){var t=be;return typeof WebAssembly.instantiateStreaming!="function"||Jr(t)||$e(t)||F||typeof fetch!="function"?en(t,e,r):fetch(t,{credentials:"same-origin"}).then(i=>WebAssembly.instantiateStreaming(i,e).then(r,function(s){return $(`wasm streaming compile failed: ${s}`),$("falling back to ArrayBuffer instantiation"),en(t,e,r)}))}function ce(e,r){Object.getOwnPropertyDescriptor(a,e)||Object.defineProperty(a,e,{configurable:!0,get(){z(`\`Module.${e}\` has been replaced by \`${r}\` (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)`)}})}function L(e){Object.getOwnPropertyDescriptor(a,e)&&z(`\`Module.${e}\` was supplied but \`${e}\` not included in INCOMING_MODULE_JS_API`)}function rn(e){return e==="FS_createPath"||e==="FS_createDataFile"||e==="FS_createPreloadedFile"||e==="FS_unlink"||e==="addRunDependency"||e==="FS_createLazyFile"||e==="FS_createDevice"||e==="removeRunDependency"}function nn(e,r){typeof globalThis<"u"&&Object.defineProperty(globalThis,e,{configurable:!0,get(){Ce(`\`${e}\` is not longer defined by emscripten. ${r}`)}})}nn("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),nn("asm","Please use wasmExports instead");function tn(e){Object.getOwnPropertyDescriptor(a,e)||Object.defineProperty(a,e,{configurable:!0,get(){var r=`'${e}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;rn(e)&&(r+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),z(r)}})}function an(e){this.name="ExitStatus",this.message=`Program terminated with exit(${e})`,this.status=e}var Ge=e=>(g(typeof e=="number"),"0x"+(e>>>0).toString(16).padStart(8,"0")),Ce=e=>{vr||(vr={}),vr[e]||(vr[e]=1,F&&(e="warning: "+e),$(e))},vr,ln=(e,r)=>{for(var t=0,i=e.length-1;0<=i;i--){var s=e[i];s==="."?e.splice(i,1):s===".."?(e.splice(i,1),t++):t&&(e.splice(i,1),t--)}if(r)for(;t;t--)e.unshift("..");return e},de=e=>{var r=e.charAt(0)==="/",t=e.substr(-1)==="/";return(e=ln(e.split("/").filter(i=>!!i),!r).join("/"))||r||(e="."),e&&t&&(e+="/"),(r?"/":"")+e},kr=e=>{var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);return e=r[0],r=r[1],!e&&!r?".":(r&&(r=r.substr(0,r.length-1)),e+r)},we=e=>{if(e==="/")return"/";e=de(e),e=e.replace(/\/$/,"");var r=e.lastIndexOf("/");return r===-1?e:e.substr(r+1)},dt=(e,r)=>de(e+"/"+r),ft=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return t=>crypto.getRandomValues(t);if(F)try{var e=Ie("crypto");if(e.randomFillSync)return t=>e.randomFillSync(t);var r=e.randomBytes;return t=>(t.set(r(t.byteLength)),t)}catch{}z("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };")},sn=e=>(sn=ft())(e);function ve(){for(var e="",r=!1,t=arguments.length-1;-1<=t&&!r;t--){if(r=0<=t?arguments[t]:l.cwd(),typeof r!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!r)return"";e=r+"/"+e,r=r.charAt(0)==="/"}return e=ln(e.split("/").filter(i=>!!i),!r).join("/"),(r?"/":"")+e||"."}var on=(e,r)=>{function t(m){for(var b=0;b<m.length&&m[b]==="";b++);for(var N=m.length-1;0<=N&&m[N]==="";N--);return b>N?[]:m.slice(b,N-b+1)}e=ve(e).substr(1),r=ve(r).substr(1),e=t(e.split("/")),r=t(r.split("/"));for(var i=Math.min(e.length,r.length),s=i,c=0;c<i;c++)if(e[c]!==r[c]){s=c;break}for(i=[],c=s;c<e.length;c++)i.push("..");return i=i.concat(r.slice(s)),i.join("/")},un=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,De=(e,r)=>{for(var t=r+NaN,i=r;e[i]&&!(i>=t);)++i;if(16<i-r&&e.buffer&&un)return un.decode(e.subarray(r,i));for(t="";r<i;){var s=e[r++];if(s&128){var c=e[r++]&63;if((s&224)==192)t+=String.fromCharCode((s&31)<<6|c);else{var m=e[r++]&63;(s&240)==224?s=(s&15)<<12|c<<6|m:((s&248)!=240&&Ce("Invalid UTF-8 leading byte "+Ge(s)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),s=(s&7)<<18|c<<12|m<<6|e[r++]&63),65536>s?t+=String.fromCharCode(s):(s-=65536,t+=String.fromCharCode(55296|s>>10,56320|s&1023))}}else t+=String.fromCharCode(s)}return t},Er=[],He=e=>{for(var r=0,t=0;t<e.length;++t){var i=e.charCodeAt(t);127>=i?r++:2047>=i?r+=2:55296<=i&&57343>=i?(r+=4,++t):r+=3}return r},Lr=(e,r,t,i)=>{if(g(typeof e=="string",`stringToUTF8Array expects a string (got ${typeof e})`),!(0<i))return 0;var s=t;i=t+i-1;for(var c=0;c<e.length;++c){var m=e.charCodeAt(c);if(55296<=m&&57343>=m){var b=e.charCodeAt(++c);m=65536+((m&1023)<<10)|b&1023}if(127>=m){if(t>=i)break;r[t++]=m}else{if(2047>=m){if(t+1>=i)break;r[t++]=192|m>>6}else{if(65535>=m){if(t+2>=i)break;r[t++]=224|m>>12}else{if(t+3>=i)break;1114111<m&&Ce("Invalid Unicode code point "+Ge(m)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),r[t++]=240|m>>18,r[t++]=128|m>>12&63}r[t++]=128|m>>6&63}r[t++]=128|m&63}}return r[t]=0,t-s};function nr(e,r){var t=Array(He(e)+1);return e=Lr(e,t,0,t.length),r&&(t.length=e),t}var Tr=[];function cn(e,r){Tr[e]={input:[],output:[],K:r},Sr(e,ht)}var ht={open(e){var r=Tr[e.node.rdev];if(!r)throw new l.g(43);e.tty=r,e.seekable=!1},close(e){e.tty.K.fsync(e.tty)},fsync(e){e.tty.K.fsync(e.tty)},read(e,r,t,i){if(!e.tty||!e.tty.K.ra)throw new l.g(60);for(var s=0,c=0;c<i;c++){try{var m=e.tty.K.ra(e.tty)}catch{throw new l.g(29)}if(m===void 0&&s===0)throw new l.g(6);if(m==null)break;s++,r[t+c]=m}return s&&(e.node.timestamp=Date.now()),s},write(e,r,t,i){if(!e.tty||!e.tty.K.ia)throw new l.g(60);try{for(var s=0;s<i;s++)e.tty.K.ia(e.tty,r[t+s])}catch{throw new l.g(29)}return i&&(e.node.timestamp=Date.now()),s}},mt={ra(){e:{if(!Er.length){var e=null;if(F){var r=Buffer.alloc(256),t=0,i=process.stdin.fd;try{t=fr.readSync(i,r)}catch(s){if(s.toString().includes("EOF"))t=0;else throw s}0<t?e=r.slice(0,t).toString("utf-8"):e=null}else typeof window<"u"&&typeof window.prompt=="function"?(e=window.prompt("Input: "),e!==null&&(e+=`
`)):typeof readline=="function"&&(e=readline(),e!==null&&(e+=`
`));if(!e){e=null;break e}Er=nr(e,!0)}e=Er.shift()}return e},ia(e,r){r===null||r===10?(Fe(De(e.output,0)),e.output=[]):r!=0&&e.output.push(r)},fsync(e){e.output&&0<e.output.length&&(Fe(De(e.output,0)),e.output=[])},Ia(){return{ab:25856,cb:5,$a:191,bb:35387,Za:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Ja(){return 0},Ka(){return[24,80]}},pt={ia(e,r){r===null||r===10?($(De(e.output,0)),e.output=[]):r!=0&&e.output.push(r)},fsync(e){e.output&&0<e.output.length&&($(De(e.output,0)),e.output=[])}},dn=()=>{z("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")};function fn(e,r){var t=e.m?e.m.length:0;t>=r||(r=Math.max(r,t*(1048576>t?2:1.125)>>>0),t!=0&&(r=Math.max(r,256)),t=e.m,e.m=new Uint8Array(r),0<e.o&&e.m.set(t.subarray(0,e.o),0))}var I={G:null,s(){return I.createNode(null,"/",16895,0)},createNode(e,r,t,i){if((t&61440)===24576||l.isFIFO(t))throw new l.g(63);return I.G||(I.G={dir:{node:{C:I.h.C,v:I.h.v,lookup:I.h.lookup,J:I.h.J,rename:I.h.rename,unlink:I.h.unlink,rmdir:I.h.rmdir,readdir:I.h.readdir,symlink:I.h.symlink},stream:{D:I.l.D}},file:{node:{C:I.h.C,v:I.h.v},stream:{D:I.l.D,read:I.l.read,write:I.l.write,T:I.l.T,S:I.l.S,V:I.l.V}},link:{node:{C:I.h.C,v:I.h.v,readlink:I.h.readlink},stream:{}},na:{node:{C:I.h.C,v:I.h.v},stream:l.Da}}),t=l.createNode(e,r,t,i),Z(t.mode)?(t.h=I.G.dir.node,t.l=I.G.dir.stream,t.m={}):l.isFile(t.mode)?(t.h=I.G.file.node,t.l=I.G.file.stream,t.o=0,t.m=null):(t.mode&61440)===40960?(t.h=I.G.link.node,t.l=I.G.link.stream):(t.mode&61440)===8192&&(t.h=I.G.na.node,t.l=I.G.na.stream),t.timestamp=Date.now(),e&&(e.m[r]=t,e.timestamp=t.timestamp),t},lb(e){return e.m?e.m.subarray?e.m.subarray(0,e.o):new Uint8Array(e.m):new Uint8Array(0)},h:{C(e){var r={};return r.dev=(e.mode&61440)===8192?e.id:1,r.ino=e.id,r.mode=e.mode,r.nlink=1,r.uid=0,r.gid=0,r.rdev=e.rdev,Z(e.mode)?r.size=4096:l.isFile(e.mode)?r.size=e.o:(e.mode&61440)===40960?r.size=e.link.length:r.size=0,r.atime=new Date(e.timestamp),r.mtime=new Date(e.timestamp),r.ctime=new Date(e.timestamp),r.Ba=4096,r.blocks=Math.ceil(r.size/r.Ba),r},v(e,r){if(r.mode!==void 0&&(e.mode=r.mode),r.timestamp!==void 0&&(e.timestamp=r.timestamp),r.size!==void 0&&(r=r.size,e.o!=r))if(r==0)e.m=null,e.o=0;else{var t=e.m;e.m=new Uint8Array(r),t&&e.m.set(t.subarray(0,Math.min(r,e.o))),e.o=r}},lookup(){throw l.da[44]},J(e,r,t,i){return I.createNode(e,r,t,i)},rename(e,r,t){if(Z(e.mode)){try{var i=fe(r,t)}catch{}if(i)for(var s in i.m)throw new l.g(55)}delete e.parent.m[e.name],e.parent.timestamp=Date.now(),e.name=t,r.m[t]=e,r.timestamp=e.parent.timestamp,e.parent=r},unlink(e,r){delete e.m[r],e.timestamp=Date.now()},rmdir(e,r){var t=fe(e,r),i;for(i in t.m)throw new l.g(55);delete e.m[r],e.timestamp=Date.now()},readdir(e){var r=[".",".."],t;for(t in e.m)e.m.hasOwnProperty(t)&&r.push(t);return r},symlink(e,r,t){return e=I.createNode(e,r,41471,0),e.link=t,e},readlink(e){if((e.mode&61440)!==40960)throw new l.g(28);return e.link}},l:{read(e,r,t,i,s){var c=e.node.m;if(s>=e.node.o)return 0;if(e=Math.min(e.node.o-s,i),g(0<=e),8<e&&c.subarray)r.set(c.subarray(s,s+e),t);else for(i=0;i<e;i++)r[t+i]=c[s+i];return e},write(e,r,t,i,s,c){if(g(!(r instanceof ArrayBuffer)),r.buffer===q.buffer&&(c=!1),!i)return 0;if(e=e.node,e.timestamp=Date.now(),r.subarray&&(!e.m||e.m.subarray)){if(c)return g(s===0,"canOwn must imply no weird position inside the file"),e.m=r.subarray(t,t+i),e.o=i;if(e.o===0&&s===0)return e.m=r.slice(t,t+i),e.o=i;if(s+i<=e.o)return e.m.set(r.subarray(t,t+i),s),i}if(fn(e,s+i),e.m.subarray&&r.subarray)e.m.set(r.subarray(t,t+i),s);else for(c=0;c<i;c++)e.m[s+c]=r[t+c];return e.o=Math.max(e.o,s+i),i},D(e,r,t){if(t===1?r+=e.position:t===2&&l.isFile(e.node.mode)&&(r+=e.node.o),0>r)throw new l.g(28);return r},T(e,r,t){fn(e.node,r+t),e.node.o=Math.max(e.node.o,r+t)},S(e,r,t,i,s){if(!l.isFile(e.node.mode))throw new l.g(43);if(e=e.node.m,s&2||e.buffer!==q.buffer){if((0<t||t+r<e.length)&&(e.subarray?e=e.subarray(t,t+r):e=Array.prototype.slice.call(e,t,t+r)),t=!0,r=dn(),!r)throw new l.g(48);q.set(e,r)}else t=!1,r=e.byteOffset;return{Ra:r,Aa:t}},V(e,r,t,i){return I.l.write(e,r,0,i,t,!1),0}}},_t=(e,r,t)=>{var i=Xr(`al ${e}`);Ae(e,s=>{g(s,`Loading data file "${e}" failed (no arrayBuffer).`),r(new Uint8Array(s)),i&&rr(i)},()=>{if(t)t();else throw`Loading data file "${e}" failed.`}),i&&wr(i)},gt=[],bt=(e,r,t,i)=>{typeof Browser<"u"&&Browser.R();var s=!1;return gt.forEach(c=>{!s&&c.canHandle(r)&&(c.handle(e,r,t,i),s=!0)}),s},xr=(e,r)=>{var t=0;return e&&(t|=365),r&&(t|=146),t},yt={0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"},hn={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},wt=e=>e.replace(/\b_Z[\w\d_]+/g,function(r){return Ce("warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling"),r===r?r:r+" ["+r+"]"});function Sr(e,r){l.pa[e]={l:r}}function Z(e){return(e&61440)===16384}function fe(e,r){var t;if(t=(t=Ee(e,"x"))?t:e.h.lookup?0:2)throw new l.g(t,e);for(t=l.F[Mr(e.id,r)];t;t=t.N){var i=t.name;if(t.parent.id===e.id&&i===r)return t}return l.lookup(e,r)}function G(e,r={}){if(e=ve(e),!e)return{path:"",node:null};if(r=Object.assign({ba:!0,ka:0},r),8<r.ka)throw new l.g(32);e=e.split("/").filter(m=>!!m);for(var t=l.root,i="/",s=0;s<e.length;s++){var c=s===e.length-1;if(c&&r.parent)break;if(t=fe(t,e[s]),i=de(i+"/"+e[s]),t.A&&(!c||c&&r.ba)&&(t=t.A.root),!c||r.B){for(c=0;(t.mode&61440)===40960;)if(t=l.readlink(i),i=ve(kr(i),t),t=G(i,{ka:r.ka+1}).node,40<c++)throw new l.g(32)}}return{path:i,node:t}}function ke(e){for(var r;;){if(l.Z(e))return e=e.s.ua,r?e[e.length-1]!=="/"?`${e}/${r}`:e+r:e;r=r?`${e.name}/${r}`:e.name,e=e.parent}}function Mr(e,r){for(var t=0,i=0;i<r.length;i++)t=(t<<5)-t+r.charCodeAt(i)|0;return(e+t>>>0)%l.F.length}function mn(e){var r=Mr(e.parent.id,e.name);e.N=l.F[r],l.F[r]=e}function tr(e){var r=Mr(e.parent.id,e.name);if(l.F[r]===e)l.F[r]=e.N;else for(r=l.F[r];r;){if(r.N===e){r.N=e.N;break}r=r.N}}function pn(e){var r=["r","w","rw"][e&3];return e&512&&(r+="w"),r}function Ee(e,r){if(l.ta)return 0;if(!r.includes("r")||e.mode&292){if(r.includes("w")&&!(e.mode&146)||r.includes("x")&&!(e.mode&73))return 2}else return 2;return 0}function Or(e,r){try{return fe(e,r),20}catch{}return Ee(e,"wx")}function ar(e,r,t){try{var i=fe(e,r)}catch(s){return s.u}if(e=Ee(e,"wx"))return e;if(t){if(!Z(i.mode))return 54;if(l.Z(i)||ke(i)===l.cwd())return 10}else if(Z(i.mode))return 31;return 0}function vt(){for(var e=0;e<=l.xa;e++)if(!l.streams[e])return e;throw new l.g(33)}function re(e){if(e=l.qa(e),!e)throw new l.g(8);return e}function Ar(e,r=-1){return l.X||(l.X=function(){this.I={}},l.X.prototype={},Object.defineProperties(l.X.prototype,{object:{get(){return this.node},set(t){this.node=t}},flags:{get(){return this.I.flags},set(t){this.I.flags=t}},position:{get(){return this.I.position},set(t){this.I.position=t}}})),e=Object.assign(new l.X,e),r==-1&&(r=vt()),e.fd=r,l.streams[r]=e}function _n(e){var r=[];for(e=[e];e.length;){var t=e.pop();r.push(t),e.push.apply(e,t.U)}return r}function ir(e,r,t){return typeof t>"u"&&(t=r,r=438),l.J(e,r|8192,t)}function gn(){l.g||(l.g=function(e,r){this.name="ErrnoError",this.node=r,this.Sa=function(t){this.u=t;for(var i in hn)if(hn[i]===t){this.code=i;break}},this.Sa(e),this.message=yt[e],this.stack&&(Object.defineProperty(this,"stack",{value:Error().stack,writable:!0}),this.stack=wt(this.stack))},l.g.prototype=Error(),l.g.prototype.constructor=l.g,[44].forEach(e=>{l.da[e]=new l.g(e),l.da[e].stack="<generic error, no stack>"}))}function bn(e,r){try{var t=G(e,{B:!r});e=t.path}catch{}var i={Z:!1,exists:!1,error:0,name:null,path:null,object:null,Oa:!1,Qa:null,Pa:null};try{t=G(e,{parent:!0}),i.Oa=!0,i.Qa=t.path,i.Pa=t.node,i.name=we(e),t=G(e,{B:!r}),i.exists=!0,i.path=t.path,i.object=t.node,i.name=t.node.name,i.Z=t.path==="/"}catch(s){i.error=s.u}return i}function kt(e,r,t,i){return e=typeof e=="string"?e:ke(e),r=de(e+"/"+r),l.create(r,xr(t,i))}function Nr(e){if(!(e.La||e.Ma||e.link||e.m)){if(typeof XMLHttpRequest<"u")throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(Oe)try{e.m=nr(Oe(e.url),!0),e.o=e.m.length}catch{throw new l.g(29)}else throw Error("Cannot load without read() or XMLHttpRequest.")}}var l={root:null,U:[],pa:{},streams:[],Na:1,F:null,oa:"/",Y:!1,ta:!0,g:null,da:{},Fa:null,W:0,createNode(e,r,t,i){return g(typeof e=="object"),e=new l.wa(e,r,t,i),mn(e),e},Z(e){return e===e.parent},isFile(e){return(e&61440)===32768},isFIFO(e){return(e&61440)===4096},isSocket(e){return(e&49152)===49152},xa:4096,qa:e=>l.streams[e],Da:{open(e){e.l=l.Ga(e.node.rdev).l,e.l.open&&e.l.open(e)},D(){throw new l.g(70)}},ha:e=>e>>8,nb:e=>e&255,M:(e,r)=>e<<8|r,Ga:e=>l.pa[e],va(e,r){function t(m){return g(0<l.W),l.W--,r(m)}function i(m){if(m){if(!i.Ea)return i.Ea=!0,t(m)}else++c>=s.length&&t(null)}typeof e=="function"&&(r=e,e=!1),l.W++,1<l.W&&$(`warning: ${l.W} FS.syncfs operations in flight at once, probably just doing extra work`);var s=_n(l.root.s),c=0;s.forEach(m=>{if(!m.type.va)return i(null);m.type.va(m,e,i)})},s(e,r,t){if(typeof e=="string")throw e;var i=t==="/",s=!t;if(i&&l.root)throw new l.g(10);if(!i&&!s){var c=G(t,{ba:!1});if(t=c.path,c=c.node,c.A)throw new l.g(10);if(!Z(c.mode))throw new l.g(54)}return r={type:e,rb:r,ua:t,U:[]},e=e.s(r),e.s=r,r.root=e,i?l.root=e:c&&(c.A=r,c.s&&c.s.U.push(r)),e},xb(e){if(e=G(e,{ba:!1}),!e.node.A)throw new l.g(28);e=e.node;var r=e.A,t=_n(r);Object.keys(l.F).forEach(i=>{for(i=l.F[i];i;){var s=i.N;t.includes(i.s)&&tr(i),i=s}}),e.A=null,r=e.s.U.indexOf(r),g(r!==-1),e.s.U.splice(r,1)},lookup(e,r){return e.h.lookup(e,r)},J(e,r,t){var i=G(e,{parent:!0}).node;if(e=we(e),!e||e==="."||e==="..")throw new l.g(28);var s=Or(i,e);if(s)throw new l.g(s);if(!i.h.J)throw new l.g(63);return i.h.J(i,e,r,t)},create(e,r){return l.J(e,(r!==void 0?r:438)&4095|32768,0)},mkdir(e,r){return l.J(e,(r!==void 0?r:511)&1023|16384,0)},ob(e,r){e=e.split("/");for(var t="",i=0;i<e.length;++i)if(e[i]){t+="/"+e[i];try{l.mkdir(t,r)}catch(s){if(s.u!=20)throw s}}},symlink(e,r){if(!ve(e))throw new l.g(44);var t=G(r,{parent:!0}).node;if(!t)throw new l.g(44);r=we(r);var i=Or(t,r);if(i)throw new l.g(i);if(!t.h.symlink)throw new l.g(63);return t.h.symlink(t,r,e)},rename(e,r){var t=kr(e),i=kr(r),s=we(e),c=we(r),m=G(e,{parent:!0}),b=m.node;if(m=G(r,{parent:!0}),m=m.node,!b||!m)throw new l.g(44);if(b.s!==m.s)throw new l.g(75);var N=fe(b,s);if(e=on(e,i),e.charAt(0)!==".")throw new l.g(28);if(e=on(r,t),e.charAt(0)!==".")throw new l.g(55);try{var y=fe(m,c)}catch{}if(N!==y){if(r=Z(N.mode),s=ar(b,s,r))throw new l.g(s);if(s=y?ar(m,c,r):Or(m,c))throw new l.g(s);if(!b.h.rename)throw new l.g(63);if(N.A||y&&y.A)throw new l.g(10);if(m!==b&&(s=Ee(b,"w")))throw new l.g(s);tr(N);try{b.h.rename(N,m,c)}catch(A){throw A}finally{mn(N)}}},rmdir(e){var r=G(e,{parent:!0}).node;e=we(e);var t=fe(r,e),i=ar(r,e,!0);if(i)throw new l.g(i);if(!r.h.rmdir)throw new l.g(63);if(t.A)throw new l.g(10);r.h.rmdir(r,e),tr(t)},readdir(e){if(e=G(e,{B:!0}).node,!e.h.readdir)throw new l.g(54);return e.h.readdir(e)},unlink(e){var r=G(e,{parent:!0}).node;if(!r)throw new l.g(44);e=we(e);var t=fe(r,e),i=ar(r,e,!1);if(i)throw new l.g(i);if(!r.h.unlink)throw new l.g(63);if(t.A)throw new l.g(10);r.h.unlink(r,e),tr(t)},readlink(e){if(e=G(e).node,!e)throw new l.g(44);if(!e.h.readlink)throw new l.g(28);return ve(ke(e.parent),e.h.readlink(e))},stat(e,r){if(e=G(e,{B:!r}).node,!e)throw new l.g(44);if(!e.h.C)throw new l.g(63);return e.h.C(e)},lstat(e){return l.stat(e,!0)},chmod(e,r,t){if(e=typeof e=="string"?G(e,{B:!t}).node:e,!e.h.v)throw new l.g(63);e.h.v(e,{mode:r&4095|e.mode&-4096,timestamp:Date.now()})},lchmod(e,r){l.chmod(e,r,!0)},fchmod(e,r){e=re(e),l.chmod(e.node,r)},chown(e,r,t,i){if(e=typeof e=="string"?G(e,{B:!i}).node:e,!e.h.v)throw new l.g(63);e.h.v(e,{timestamp:Date.now()})},lchown(e,r,t){l.chown(e,r,t,!0)},fchown(e,r,t){e=re(e),l.chown(e.node,r,t)},truncate(e,r){if(0>r)throw new l.g(28);if(e=typeof e=="string"?G(e,{B:!0}).node:e,!e.h.v)throw new l.g(63);if(Z(e.mode))throw new l.g(31);if(!l.isFile(e.mode))throw new l.g(28);var t=Ee(e,"w");if(t)throw new l.g(t);e.h.v(e,{size:r,timestamp:Date.now()})},kb(e,r){if(e=re(e),!(e.flags&2097155))throw new l.g(28);l.truncate(e.node,r)},yb(e,r,t){e=G(e,{B:!0}).node,e.h.v(e,{timestamp:Math.max(r,t)})},open(e,r,t){if(e==="")throw new l.g(44);if(typeof r=="string"){var i={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[r];if(typeof i>"u")throw Error(`Unknown file open mode: ${r}`);r=i}if(t=r&64?(typeof t>"u"?438:t)&4095|32768:0,typeof e=="object")var s=e;else{e=de(e);try{s=G(e,{B:!(r&131072)}).node}catch{}}if(i=!1,r&64)if(s){if(r&128)throw new l.g(20)}else s=l.J(e,t,0),i=!0;if(!s)throw new l.g(44);if((s.mode&61440)===8192&&(r&=-513),r&65536&&!Z(s.mode))throw new l.g(54);if(!i&&(t=s?(s.mode&61440)===40960?32:Z(s.mode)&&(pn(r)!=="r"||r&512)?31:Ee(s,pn(r)):44))throw new l.g(t);return r&512&&!i&&l.truncate(s,0),r&=-131713,s=Ar({node:s,path:ke(s),flags:r,seekable:!0,position:0,l:s.l,Xa:[],error:!1}),s.l.open&&s.l.open(s),!a.logReadFiles||r&1||(l.ja||(l.ja={}),e in l.ja||(l.ja[e]=1)),s},close(e){if(e.fd===null)throw new l.g(8);e.ea&&(e.ea=null);try{e.l.close&&e.l.close(e)}catch(r){throw r}finally{l.streams[e.fd]=null}e.fd=null},D(e,r,t){if(e.fd===null)throw new l.g(8);if(!e.seekable||!e.l.D)throw new l.g(70);if(t!=0&&t!=1&&t!=2)throw new l.g(28);return e.position=e.l.D(e,r,t),e.Xa=[],e.position},read(e,r,t,i,s){if(g(0<=t),0>i||0>s)throw new l.g(28);if(e.fd===null)throw new l.g(8);if((e.flags&2097155)===1)throw new l.g(8);if(Z(e.node.mode))throw new l.g(31);if(!e.l.read)throw new l.g(28);var c=typeof s<"u";if(!c)s=e.position;else if(!e.seekable)throw new l.g(70);return r=e.l.read(e,r,t,i,s),c||(e.position+=r),r},write(e,r,t,i,s,c){if(g(0<=t),0>i||0>s)throw new l.g(28);if(e.fd===null)throw new l.g(8);if(!(e.flags&2097155))throw new l.g(8);if(Z(e.node.mode))throw new l.g(31);if(!e.l.write)throw new l.g(28);e.seekable&&e.flags&1024&&l.D(e,0,2);var m=typeof s<"u";if(!m)s=e.position;else if(!e.seekable)throw new l.g(70);return r=e.l.write(e,r,t,i,s,c),m||(e.position+=r),r},T(e,r,t){if(e.fd===null)throw new l.g(8);if(0>r||0>=t)throw new l.g(28);if(!(e.flags&2097155))throw new l.g(8);if(!l.isFile(e.node.mode)&&!Z(e.node.mode))throw new l.g(43);if(!e.l.T)throw new l.g(138);e.l.T(e,r,t)},S(e,r,t,i,s){if(i&2&&!(s&2)&&(e.flags&2097155)!==2)throw new l.g(2);if((e.flags&2097155)===1)throw new l.g(2);if(!e.l.S)throw new l.g(43);return e.l.S(e,r,t,i,s)},V(e,r,t,i,s){return g(0<=t),e.l.V?e.l.V(e,r,t,i,s):0},qb:()=>0,fa(e,r,t){if(!e.l.fa)throw new l.g(59);return e.l.fa(e,r,t)},readFile(e,r={}){if(r.flags=r.flags||0,r.encoding=r.encoding||"binary",r.encoding!=="utf8"&&r.encoding!=="binary")throw Error(`Invalid encoding type "${r.encoding}"`);var t,i=l.open(e,r.flags);e=l.stat(e).size;var s=new Uint8Array(e);return l.read(i,s,0,e,0),r.encoding==="utf8"?t=De(s,0):r.encoding==="binary"&&(t=s),l.close(i),t},writeFile(e,r,t={}){if(t.flags=t.flags||577,e=l.open(e,t.flags,t.mode),typeof r=="string"){var i=new Uint8Array(He(r)+1);r=Lr(r,i,0,i.length),l.write(e,i,0,r,void 0,t.Ca)}else if(ArrayBuffer.isView(r))l.write(e,r,0,r.byteLength,void 0,t.Ca);else throw Error("Unsupported data type");l.close(e)},cwd:()=>l.oa,chdir(e){if(e=G(e,{B:!0}),e.node===null)throw new l.g(44);if(!Z(e.node.mode))throw new l.g(54);var r=Ee(e.node,"x");if(r)throw new l.g(r);l.oa=e.path},R(e,r,t){g(!l.R.Y,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),l.R.Y=!0,gn(),a.stdin=e||a.stdin,a.stdout=r||a.stdout,a.stderr=t||a.stderr,a.stdin?l.L("/dev","stdin",a.stdin):l.symlink("/dev/tty","/dev/stdin"),a.stdout?l.L("/dev","stdout",null,a.stdout):l.symlink("/dev/tty","/dev/stdout"),a.stderr?l.L("/dev","stderr",null,a.stderr):l.symlink("/dev/tty1","/dev/stderr"),e=l.open("/dev/stdin",0),r=l.open("/dev/stdout",1),t=l.open("/dev/stderr",1),g(e.fd===0,`invalid handle for stdin (${e.fd})`),g(r.fd===1,`invalid handle for stdout (${r.fd})`),g(t.fd===2,`invalid handle for stderr (${t.fd})`)},sb(){l.R.Y=!1,Sn(0);for(var e=0;e<l.streams.length;e++){var r=l.streams[e];r&&l.close(r)}},jb(e,r){return e=bn(e,r),e.exists?e.object:null},hb(e,r){for(e=typeof e=="string"?e:ke(e),r=r.split("/").reverse();r.length;){var t=r.pop();if(t){var i=de(e+"/"+t);try{l.mkdir(i)}catch{}e=i}}return i},L(e,r,t,i){e=dt(typeof e=="string"?e:ke(e),r),r=xr(!!t,!!i),l.L.ha||(l.L.ha=64);var s=l.M(l.L.ha++,0);return Sr(s,{open(c){c.seekable=!1},close(){i&&i.buffer&&i.buffer.length&&i(10)},read(c,m,b,N){for(var y=0,A=0;A<N;A++){try{var k=t()}catch{throw new l.g(29)}if(k===void 0&&y===0)throw new l.g(6);if(k==null)break;y++,m[b+A]=k}return y&&(c.node.timestamp=Date.now()),y},write(c,m,b,N){for(var y=0;y<N;y++)try{i(m[b+y])}catch{throw new l.g(29)}return N&&(c.node.timestamp=Date.now()),y}}),ir(e,r,s)},fb(e,r,t,i,s){function c(){this.ga=!1,this.I=[]}function m(k,V,f,S,x){if(k=k.node.m,x>=k.length)return 0;if(S=Math.min(k.length-x,S),g(0<=S),k.slice)for(var R=0;R<S;R++)V[f+R]=k[x+R];else for(R=0;R<S;R++)V[f+R]=k.get(x+R);return S}if(c.prototype.get=function(k){if(!(k>this.length-1||0>k)){var V=k%this.chunkSize;return this.sa(k/this.chunkSize|0)[V]}},c.prototype.Ha=function(k){this.sa=k},c.prototype.ma=function(){var k=new XMLHttpRequest;if(k.open("HEAD",t,!1),k.send(null),!(200<=k.status&&300>k.status||k.status===304))throw Error("Couldn't load "+t+". Status: "+k.status);var V=Number(k.getResponseHeader("Content-length")),f,S=(f=k.getResponseHeader("Accept-Ranges"))&&f==="bytes";k=(f=k.getResponseHeader("Content-Encoding"))&&f==="gzip";var x=1048576;S||(x=V);var R=this;R.Ha(X=>{var te=X*x,ae=(X+1)*x-1;if(ae=Math.min(ae,V-1),typeof R.I[X]>"u"){var Hr=R.I;if(te>ae)throw Error("invalid range ("+te+", "+ae+") or no bytes requested!");if(ae>V-1)throw Error("only "+V+" bytes available! programmer error!");var ee=new XMLHttpRequest;if(ee.open("GET",t,!1),V!==x&&ee.setRequestHeader("Range","bytes="+te+"-"+ae),ee.responseType="arraybuffer",ee.overrideMimeType&&ee.overrideMimeType("text/plain; charset=x-user-defined"),ee.send(null),!(200<=ee.status&&300>ee.status||ee.status===304))throw Error("Couldn't load "+t+". Status: "+ee.status);te=ee.response!==void 0?new Uint8Array(ee.response||[]):nr(ee.responseText||"",!0),Hr[X]=te}if(typeof R.I[X]>"u")throw Error("doXHR failed!");return R.I[X]}),(k||!V)&&(x=V=1,x=V=this.sa(0).length,Fe("LazyFiles on gzip forces download of the whole file when length is accessed")),this.za=V,this.ya=x,this.ga=!0},typeof XMLHttpRequest<"u"){if(!P)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var b=new c;Object.defineProperties(b,{length:{get:function(){return this.ga||this.ma(),this.za}},chunkSize:{get:function(){return this.ga||this.ma(),this.ya}}});var N=void 0}else N=t,b=void 0;var y=kt(e,r,i,s);b?y.m=b:N&&(y.m=null,y.url=N),Object.defineProperties(y,{o:{get:function(){return this.m.length}}});var A={};return Object.keys(y.l).forEach(k=>{var V=y.l[k];A[k]=function(){return Nr(y),V.apply(null,arguments)}}),A.read=(k,V,f,S,x)=>(Nr(y),m(k,V,f,S,x)),A.S=(k,V,f)=>{Nr(y);var S=dn();if(!S)throw new l.g(48);return m(k,q,S,V,f),{Ra:S,Aa:!0}},y.l=A,y},Ya(){z("FS.absolutePath has been removed; use PATH_FS.resolve instead")},eb(){z("FS.createFolder has been removed; use FS.mkdir instead")},gb(){z("FS.createLink has been removed; use FS.symlink instead")},mb(){z("FS.joinPath has been removed; use PATH.join instead")},pb(){z("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},vb(){z("FS.standardizePath has been removed; use PATH.normalize instead")}},oe=e=>(g(typeof e=="number",`UTF8ToString expects a number (got ${typeof e})`),e?De(Qe,e):"");function Ke(e,r){if(r.charAt(0)==="/")return r;if(e=e===-100?l.cwd():re(e).path,r.length==0)throw new l.g(44);return de(e+"/"+r)}var Ue=void 0;function he(){g(Ue!=null);var e=v[+Ue>>2];return Ue+=4,e}var lr=(e,r,t)=>(g(typeof t=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),Lr(e,Qe,r,t)),je=e=>e%4===0&&(e%100!==0||e%400===0),yn=[0,31,60,91,121,152,182,213,244,274,305,335],wn=[0,31,59,90,120,151,181,212,243,273,304,334],Ir=e=>{var r=He(e)+1,t=Lt(r);return t&&lr(e,t,r),t},sr={},vn=()=>{if(!Fr){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:w||"./this.program"},r;for(r in sr)sr[r]===void 0?delete e[r]:e[r]=sr[r];var t=[];for(r in e)t.push(`${r}=${e[r]}`);Fr=t}return Fr},Fr,kn=[31,29,31,30,31,30,31,31,30,31,30,31],En=[31,28,31,30,31,30,31,31,30,31,30,31],Ln=(e,r)=>{g(0<=e.length,"writeArrayToMemory array must have a length (should be an array or typed array)"),q.set(e,r)},Le=[],Q,Pr=e=>{var r=Le[e];return r||(e>=Le.length&&(Le.length=e+1),Le[e]=r=Q.get(e)),g(Q.get(e)==r,"JavaScript-side Wasm function table mirror is out of date!"),r},Et=e=>{var r=a["_"+e];return g(r,"Cannot call unknown function "+e+", make sure it is exported"),r},Te,Rr=[];function Tn(e,r,t,i){e||(e=this),this.parent=e,this.s=e.s,this.A=null,this.id=l.Na++,this.name=r,this.mode=t,this.h={},this.l={},this.rdev=i}Object.defineProperties(Tn.prototype,{read:{get:function(){return(this.mode&365)===365},set:function(e){e?this.mode|=365:this.mode&=-366}},write:{get:function(){return(this.mode&146)===146},set:function(e){e?this.mode|=146:this.mode&=-147}},Ma:{get:function(){return Z(this.mode)}},La:{get:function(){return(this.mode&61440)===8192}}}),l.wa=Tn,l.ib=(e,r,t,i,s,c,m,b,N,y)=>{function A(f){function S(x){if(y&&y(),!b){var R=e,X=r;if(R&&(R=typeof R=="string"?R:ke(R),X=r?de(R+"/"+r):R),R=xr(i,s),X=l.create(X,R),x){if(typeof x=="string"){for(var te=Array(x.length),ae=0,Hr=x.length;ae<Hr;++ae)te[ae]=x.charCodeAt(ae);x=te}l.chmod(X,R|146),te=l.open(X,577),l.write(te,x,0,x.length,0,N),l.close(te),l.chmod(X,R)}}c&&c(),rr(V)}bt(f,k,S,()=>{m&&m(),rr(V)})||S(f)}var k=r?ve(de(e+"/"+r)):e,V=Xr(`cp ${k}`);wr(V),typeof t=="string"?_t(t,f=>A(f),m):A(t)},gn(),l.F=Array(4096),l.s(I,{},"/"),l.mkdir("/tmp"),l.mkdir("/home"),l.mkdir("/home/web_user"),function(){l.mkdir("/dev"),Sr(l.M(1,3),{read:()=>0,write:(i,s,c,m)=>m}),ir("/dev/null",l.M(1,3)),cn(l.M(5,0),mt),cn(l.M(6,0),pt),ir("/dev/tty",l.M(5,0)),ir("/dev/tty1",l.M(6,0));var e=new Uint8Array(1024),r=0,t=()=>(r===0&&(r=sn(e).byteLength),e[--r]);l.L("/dev","random",t),l.L("/dev","urandom",t),l.mkdir("/dev/shm"),l.mkdir("/dev/shm/tmp")}(),function(){l.mkdir("/proc");var e=l.mkdir("/proc/self");l.mkdir("/proc/self/fd"),l.s({s(){var r=l.createNode(e,"fd",16895,73);return r.h={lookup(t,i){var s=re(+i);return t={parent:null,s:{ua:"fake"},h:{readlink:()=>s.path}},t.parent=t}},r}},{},"/proc/self/fd")}(),l.Fa={MEMFS:I};var xn={__syscall_dup3:function(e,r,t){try{var i=re(e);if(g(!t),i.fd===r)return-28;var s=l.qa(r);return s&&l.close(s),Ar(i,r).fd}catch(c){if(typeof l>"u"||c.name!=="ErrnoError")throw c;return-c.u}},__syscall_fcntl64:function(e,r,t){Ue=t;try{var i=re(e);switch(r){case 0:var s=he();if(0>s)return-28;for(;l.streams[s];)s++;return Ar(i,s).fd;case 1:case 2:return 0;case 3:return i.flags;case 4:return s=he(),i.flags|=s,0;case 5:return s=he(),Pe[s+0>>1]=2,0;case 6:case 7:return 0;case 16:case 8:return-28;case 9:return v[Cr()>>2]=28,-1;default:return-28}}catch(c){if(typeof l>"u"||c.name!=="ErrnoError")throw c;return-c.u}},__syscall_ioctl:function(e,r,t){Ue=t;try{var i=re(e);switch(r){case 21509:return i.tty?0:-59;case 21505:if(!i.tty)return-59;if(i.tty.K.Ia){e=[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var s=he();v[s>>2]=25856,v[s+4>>2]=5,v[s+8>>2]=191,v[s+12>>2]=35387;for(var c=0;32>c;c++)q[s+c+17>>0]=e[c]||0}return 0;case 21510:case 21511:case 21512:return i.tty?0:-59;case 21506:case 21507:case 21508:if(!i.tty)return-59;if(i.tty.K.Ja)for(s=he(),e=[],c=0;32>c;c++)e.push(q[s+c+17>>0]);return 0;case 21519:return i.tty?(s=he(),v[s>>2]=0):-59;case 21520:return i.tty?-28:-59;case 21531:return s=he(),l.fa(i,r,s);case 21523:return i.tty?(i.tty.K.Ka&&(c=[24,80],s=he(),Pe[s>>1]=c[0],Pe[s+2>>1]=c[1]),0):-59;case 21524:return i.tty?0:-59;case 21515:return i.tty?0:-59;default:return-28}}catch(m){if(typeof l>"u"||m.name!=="ErrnoError")throw m;return-m.u}},__syscall_openat:function(e,r,t,i){Ue=i;try{r=oe(r),r=Ke(e,r);var s=i?he():0;return l.open(r,t,s).fd}catch(c){if(typeof l>"u"||c.name!=="ErrnoError")throw c;return-c.u}},__syscall_readlinkat:function(e,r,t,i){try{if(r=oe(r),r=Ke(e,r),0>=i)return-28;var s=l.readlink(r),c=Math.min(i,He(s)),m=q[t+c];return lr(s,t,i+1),q[t+c]=m,c}catch(b){if(typeof l>"u"||b.name!=="ErrnoError")throw b;return-b.u}},__syscall_renameat:function(e,r,t,i){try{return r=oe(r),i=oe(i),r=Ke(e,r),i=Ke(t,i),l.rename(r,i),0}catch(s){if(typeof l>"u"||s.name!=="ErrnoError")throw s;return-s.u}},__syscall_rmdir:function(e){try{return e=oe(e),l.rmdir(e),0}catch(r){if(typeof l>"u"||r.name!=="ErrnoError")throw r;return-r.u}},__syscall_unlinkat:function(e,r,t){try{return r=oe(r),r=Ke(e,r),t===0?l.unlink(r):t===512?l.rmdir(r):z("Invalid flags passed to unlinkat"),0}catch(i){if(typeof l>"u"||i.name!=="ErrnoError")throw i;return-i.u}},_emscripten_get_now_is_monotonic:()=>1,_emscripten_throw_longjmp:()=>{throw 1/0},_gmtime_js:function(e,r){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),e=new Date(1e3*e),v[r>>2]=e.getUTCSeconds(),v[r+4>>2]=e.getUTCMinutes(),v[r+8>>2]=e.getUTCHours(),v[r+12>>2]=e.getUTCDate(),v[r+16>>2]=e.getUTCMonth(),v[r+20>>2]=e.getUTCFullYear()-1900,v[r+24>>2]=e.getUTCDay(),v[r+28>>2]=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0},_localtime_js:function(e,r){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),e=new Date(1e3*e),v[r>>2]=e.getSeconds(),v[r+4>>2]=e.getMinutes(),v[r+8>>2]=e.getHours(),v[r+12>>2]=e.getDate(),v[r+16>>2]=e.getMonth(),v[r+20>>2]=e.getFullYear()-1900,v[r+24>>2]=e.getDay(),v[r+28>>2]=(je(e.getFullYear())?yn:wn)[e.getMonth()]+e.getDate()-1|0,v[r+36>>2]=-(60*e.getTimezoneOffset());var t=new Date(e.getFullYear(),6,1).getTimezoneOffset(),i=new Date(e.getFullYear(),0,1).getTimezoneOffset();v[r+32>>2]=(t!=i&&e.getTimezoneOffset()==Math.min(i,t))|0},_mktime_js:function(e){var r=new Date(v[e+20>>2]+1900,v[e+16>>2],v[e+12>>2],v[e+8>>2],v[e+4>>2],v[e>>2],0),t=v[e+32>>2],i=r.getTimezoneOffset(),s=new Date(r.getFullYear(),6,1).getTimezoneOffset(),c=new Date(r.getFullYear(),0,1).getTimezoneOffset(),m=Math.min(c,s);return 0>t?v[e+32>>2]=+(s!=c&&m==i):0<t!=(m==i)&&(s=Math.max(c,s),r.setTime(r.getTime()+6e4*((0<t?m:s)-i))),v[e+24>>2]=r.getDay(),v[e+28>>2]=(je(r.getFullYear())?yn:wn)[r.getMonth()]+r.getDate()-1|0,v[e>>2]=r.getSeconds(),v[e+4>>2]=r.getMinutes(),v[e+8>>2]=r.getHours(),v[e+12>>2]=r.getDate(),v[e+16>>2]=r.getMonth(),v[e+20>>2]=r.getYear(),e=r.getTime(),isNaN(e)?(v[Cr()>>2]=61,e=-1):e/=1e3,BigInt(e)},_tzset_js:(e,r,t)=>{function i(N){return(N=N.toTimeString().match(/\(([A-Za-z ]+)\)$/))?N[1]:"GMT"}var s=new Date().getFullYear(),c=new Date(s,0,1),m=new Date(s,6,1);s=c.getTimezoneOffset();var b=m.getTimezoneOffset();W[e>>2]=60*Math.max(s,b),v[r>>2]=+(s!=b),e=i(c),r=i(m),e=Ir(e),r=Ir(r),b<s?(W[t>>2]=e,W[t+4>>2]=r):(W[t>>2]=r,W[t+4>>2]=e)},abort:()=>{z("native code called abort()")},emscripten_date_now:()=>Date.now(),emscripten_get_now:()=>performance.now(),emscripten_resize_heap:e=>{var r=Qe.length;if(e>>>=0,g(e>r),2147483648<e)return $(`Cannot enlarge memory, requested ${e} bytes, but the limit is ${2147483648} bytes!`),!1;for(var t=1;4>=t;t*=2){var i=r*(1+.2/t);i=Math.min(i,e+100663296);var s=Math;i=Math.max(e,i),s=s.min.call(s,2147483648,i+(65536-i%65536)%65536);e:{i=s;var c=Be.buffer,m=(i-c.byteLength+65535)/65536;try{Be.grow(m),$r();var b=1;break e}catch(N){$(`growMemory: Attempted to grow heap from ${c.byteLength} bytes to ${i} bytes, but got error: ${N}`)}b=void 0}if(b)return!0}return $(`Failed to grow the heap from ${r} bytes to ${s} bytes, not enough memory!`),!1},environ_get:(e,r)=>{var t=0;return vn().forEach((i,s)=>{var c=r+t;for(s=W[e+4*s>>2]=c,c=0;c<i.length;++c)g(i.charCodeAt(c)===(i.charCodeAt(c)&255)),q[s++>>0]=i.charCodeAt(c);q[s>>0]=0,t+=i.length+1}),0},environ_sizes_get:(e,r)=>{var t=vn();W[e>>2]=t.length;var i=0;return t.forEach(s=>i+=s.length+1),W[r>>2]=i,0},exit:e=>{St(),We=!0,M(e,new an(e))},fd_close:function(e){try{var r=re(e);return l.close(r),0}catch(t){if(typeof l>"u"||t.name!=="ErrnoError")throw t;return t.u}},fd_read:function(e,r,t,i){try{e:{var s=re(e);e=r;for(var c,m=r=0;m<t;m++){var b=W[e>>2],N=W[e+4>>2];e+=8;var y=l.read(s,q,b,N,c);if(0>y){var A=-1;break e}if(r+=y,y<N)break;typeof c<"u"&&(c+=y)}A=r}return W[i>>2]=A,0}catch(k){if(typeof l>"u"||k.name!=="ErrnoError")throw k;return k.u}},fd_seek:function(e,r,t,i){r=-9007199254740992>r||9007199254740992<r?NaN:Number(r);try{if(isNaN(r))return 61;var s=re(e);return l.D(s,r,t),er[i>>3]=BigInt(s.position),s.ea&&r===0&&t===0&&(s.ea=null),0}catch(c){if(typeof l>"u"||c.name!=="ErrnoError")throw c;return c.u}},fd_write:function(e,r,t,i){try{e:{var s=re(e);e=r;for(var c,m=r=0;m<t;m++){var b=W[e>>2],N=W[e+4>>2];e+=8;var y=l.write(s,q,b,N,c);if(0>y){var A=-1;break e}r+=y,typeof c<"u"&&(c+=y)}A=r}return W[i>>2]=A,0}catch(k){if(typeof l>"u"||k.name!=="ErrnoError")throw k;return k.u}},invoke_vii:xt,strftime:(e,r,t,i)=>{function s(f,S,x){for(f=typeof f=="number"?f.toString():f||"";f.length<S;)f=x[0]+f;return f}function c(f,S){return s(f,S,"0")}function m(f,S){function x(X){return 0>X?-1:0<X?1:0}var R;return(R=x(f.getFullYear()-S.getFullYear()))===0&&(R=x(f.getMonth()-S.getMonth()))===0&&(R=x(f.getDate()-S.getDate())),R}function b(f){switch(f.getDay()){case 0:return new Date(f.getFullYear()-1,11,29);case 1:return f;case 2:return new Date(f.getFullYear(),0,3);case 3:return new Date(f.getFullYear(),0,2);case 4:return new Date(f.getFullYear(),0,1);case 5:return new Date(f.getFullYear()-1,11,31);case 6:return new Date(f.getFullYear()-1,11,30)}}function N(f){var S=f.O;for(f=new Date(new Date(f.P+1900,0,1).getTime());0<S;){var x=f.getMonth(),R=(je(f.getFullYear())?kn:En)[x];if(S>R-f.getDate())S-=R-f.getDate()+1,f.setDate(1),11>x?f.setMonth(x+1):(f.setMonth(0),f.setFullYear(f.getFullYear()+1));else{f.setDate(f.getDate()+S);break}}return x=new Date(f.getFullYear()+1,0,4),S=b(new Date(f.getFullYear(),0,4)),x=b(x),0>=m(S,f)?0>=m(x,f)?f.getFullYear()+1:f.getFullYear():f.getFullYear()-1}var y=W[i+40>>2];i={Va:v[i>>2],Ua:v[i+4>>2],$:v[i+8>>2],la:v[i+12>>2],aa:v[i+16>>2],P:v[i+20>>2],H:v[i+24>>2],O:v[i+28>>2],wb:v[i+32>>2],Ta:v[i+36>>2],Wa:y?oe(y):""},t=oe(t),y={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var A in y)t=t.replace(new RegExp(A,"g"),y[A]);var k="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),V="January February March April May June July August September October November December".split(" ");y={"%a":f=>k[f.H].substring(0,3),"%A":f=>k[f.H],"%b":f=>V[f.aa].substring(0,3),"%B":f=>V[f.aa],"%C":f=>c((f.P+1900)/100|0,2),"%d":f=>c(f.la,2),"%e":f=>s(f.la,2," "),"%g":f=>N(f).toString().substring(2),"%G":f=>N(f),"%H":f=>c(f.$,2),"%I":f=>(f=f.$,f==0?f=12:12<f&&(f-=12),c(f,2)),"%j":f=>{for(var S=0,x=0;x<=f.aa-1;S+=(je(f.P+1900)?kn:En)[x++]);return c(f.la+S,3)},"%m":f=>c(f.aa+1,2),"%M":f=>c(f.Ua,2),"%n":()=>`
`,"%p":f=>0<=f.$&&12>f.$?"AM":"PM","%S":f=>c(f.Va,2),"%t":()=>"	","%u":f=>f.H||7,"%U":f=>c(Math.floor((f.O+7-f.H)/7),2),"%V":f=>{var S=Math.floor((f.O+7-(f.H+6)%7)/7);if(2>=(f.H+371-f.O-2)%7&&S++,S)S==53&&(x=(f.H+371-f.O)%7,x==4||x==3&&je(f.P)||(S=1));else{S=52;var x=(f.H+7-f.O-1)%7;(x==4||x==5&&je(f.P%400-1))&&S++}return c(S,2)},"%w":f=>f.H,"%W":f=>c(Math.floor((f.O+7-(f.H+6)%7)/7),2),"%y":f=>(f.P+1900).toString().substring(2),"%Y":f=>f.P+1900,"%z":f=>{f=f.Ta;var S=0<=f;return f=Math.abs(f)/60,(S?"+":"-")+("0000"+(f/60*100+f%60)).slice(-4)},"%Z":f=>f.Wa,"%%":()=>"%"},t=t.replace(/%%/g,"\0\0");for(A in y)t.includes(A)&&(t=t.replace(new RegExp(A,"g"),y[A](i)));return t=t.replace(/\0\0/g,"%"),A=nr(t,!1),A.length>r?0:(Ln(A,e),A.length-1)},system:e=>{if(F){if(!e)return 1;if(e=oe(e),!e.length)return 0;e=Ie("child_process").ub(e,[],{tb:!0,stdio:"inherit"});var r=(t,i)=>t<<8|i;return e.status===null?r(0,(t=>{switch(t){case"SIGHUP":return 1;case"SIGQUIT":return 3;case"SIGFPE":return 8;case"SIGKILL":return 9;case"SIGALRM":return 14;case"SIGTERM":return 15}return 2})(e.signal)):e.status<<8|0}return e?(v[Cr()>>2]=52,-1):0}},xe=function(){var e={env:xn,wasi_snapshot_preview1:xn};wr("wasm-instantiate");var r=a;return ct(e,function(t){g(a===r,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),r=null,xe=t.instance.exports,Be=xe.memory,g(Be,"memory not found in wasm exports"),$r(),Q=xe.__indirect_function_table,g(Q,"table not found in wasm exports"),br.unshift(xe.__wasm_call_ctors),rr("wasm-instantiate")}).catch(o),{}}();a._lua_checkstack=d("lua_checkstack"),a._lua_xmove=d("lua_xmove"),a._lua_atpanic=d("lua_atpanic"),a._lua_version=d("lua_version"),a._lua_absindex=d("lua_absindex"),a._lua_gettop=d("lua_gettop"),a._lua_settop=d("lua_settop"),a._lua_closeslot=d("lua_closeslot"),a._lua_rotate=d("lua_rotate"),a._lua_copy=d("lua_copy"),a._lua_pushvalue=d("lua_pushvalue"),a._lua_type=d("lua_type"),a._lua_typename=d("lua_typename"),a._lua_iscfunction=d("lua_iscfunction"),a._lua_isinteger=d("lua_isinteger"),a._lua_isnumber=d("lua_isnumber"),a._lua_isstring=d("lua_isstring"),a._lua_isuserdata=d("lua_isuserdata"),a._lua_rawequal=d("lua_rawequal"),a._lua_arith=d("lua_arith"),a._lua_compare=d("lua_compare"),a._lua_stringtonumber=d("lua_stringtonumber"),a._lua_tonumberx=d("lua_tonumberx"),a._lua_tointegerx=d("lua_tointegerx"),a._lua_toboolean=d("lua_toboolean"),a._lua_tolstring=d("lua_tolstring"),a._lua_rawlen=d("lua_rawlen"),a._lua_tocfunction=d("lua_tocfunction"),a._lua_touserdata=d("lua_touserdata"),a._lua_tothread=d("lua_tothread"),a._lua_topointer=d("lua_topointer"),a._lua_pushnil=d("lua_pushnil"),a._lua_pushnumber=d("lua_pushnumber"),a._lua_pushinteger=d("lua_pushinteger"),a._lua_pushlstring=d("lua_pushlstring"),a._lua_pushstring=d("lua_pushstring"),a._lua_pushcclosure=d("lua_pushcclosure"),a._lua_pushboolean=d("lua_pushboolean"),a._lua_pushlightuserdata=d("lua_pushlightuserdata"),a._lua_pushthread=d("lua_pushthread"),a._lua_getglobal=d("lua_getglobal"),a._lua_gettable=d("lua_gettable"),a._lua_getfield=d("lua_getfield"),a._lua_geti=d("lua_geti"),a._lua_rawget=d("lua_rawget"),a._lua_rawgeti=d("lua_rawgeti"),a._lua_rawgetp=d("lua_rawgetp"),a._lua_createtable=d("lua_createtable"),a._lua_getmetatable=d("lua_getmetatable"),a._lua_getiuservalue=d("lua_getiuservalue"),a._lua_setglobal=d("lua_setglobal"),a._lua_settable=d("lua_settable"),a._lua_setfield=d("lua_setfield"),a._lua_seti=d("lua_seti"),a._lua_rawset=d("lua_rawset"),a._lua_rawsetp=d("lua_rawsetp"),a._lua_rawseti=d("lua_rawseti"),a._lua_setmetatable=d("lua_setmetatable"),a._lua_setiuservalue=d("lua_setiuservalue"),a._lua_callk=d("lua_callk"),a._lua_pcallk=d("lua_pcallk"),a._lua_load=d("lua_load"),a._lua_dump=d("lua_dump"),a._lua_status=d("lua_status"),a._lua_error=d("lua_error"),a._lua_next=d("lua_next"),a._lua_toclose=d("lua_toclose"),a._lua_concat=d("lua_concat"),a._lua_len=d("lua_len"),a._lua_getallocf=d("lua_getallocf"),a._lua_setallocf=d("lua_setallocf"),a._lua_setwarnf=d("lua_setwarnf"),a._lua_warning=d("lua_warning"),a._lua_newuserdatauv=d("lua_newuserdatauv"),a._lua_getupvalue=d("lua_getupvalue"),a._lua_setupvalue=d("lua_setupvalue"),a._lua_upvalueid=d("lua_upvalueid"),a._lua_upvaluejoin=d("lua_upvaluejoin"),a._luaL_traceback=d("luaL_traceback"),a._lua_getstack=d("lua_getstack"),a._lua_getinfo=d("lua_getinfo"),a._luaL_buffinit=d("luaL_buffinit"),a._luaL_addstring=d("luaL_addstring"),a._luaL_prepbuffsize=d("luaL_prepbuffsize"),a._luaL_addvalue=d("luaL_addvalue"),a._luaL_pushresult=d("luaL_pushresult"),a._luaL_argerror=d("luaL_argerror"),a._luaL_typeerror=d("luaL_typeerror"),a._luaL_getmetafield=d("luaL_getmetafield"),a._luaL_where=d("luaL_where"),a._luaL_fileresult=d("luaL_fileresult");var Cr=d("__errno_location");a._luaL_execresult=d("luaL_execresult"),a._luaL_newmetatable=d("luaL_newmetatable"),a._luaL_setmetatable=d("luaL_setmetatable"),a._luaL_testudata=d("luaL_testudata"),a._luaL_checkudata=d("luaL_checkudata"),a._luaL_optlstring=d("luaL_optlstring"),a._luaL_checklstring=d("luaL_checklstring"),a._luaL_checkstack=d("luaL_checkstack"),a._luaL_checktype=d("luaL_checktype"),a._luaL_checkany=d("luaL_checkany"),a._luaL_checknumber=d("luaL_checknumber"),a._luaL_optnumber=d("luaL_optnumber"),a._luaL_checkinteger=d("luaL_checkinteger"),a._luaL_optinteger=d("luaL_optinteger"),a._luaL_setfuncs=d("luaL_setfuncs"),a._luaL_addlstring=d("luaL_addlstring"),a._luaL_pushresultsize=d("luaL_pushresultsize"),a._luaL_buffinitsize=d("luaL_buffinitsize"),a._luaL_ref=d("luaL_ref"),a._luaL_unref=d("luaL_unref"),a._luaL_loadfilex=d("luaL_loadfilex"),a._luaL_loadbufferx=d("luaL_loadbufferx"),a._luaL_loadstring=d("luaL_loadstring"),a._luaL_callmeta=d("luaL_callmeta"),a._luaL_len=d("luaL_len"),a._luaL_tolstring=d("luaL_tolstring"),a._luaL_getsubtable=d("luaL_getsubtable"),a._luaL_requiref=d("luaL_requiref"),a._luaL_addgsub=d("luaL_addgsub"),a._luaL_gsub=d("luaL_gsub"),a._luaL_newstate=d("luaL_newstate"),a._lua_newstate=d("lua_newstate"),a._free=d("free"),a._realloc=d("realloc");var Sn=a._fflush=d("fflush");a._luaL_checkversion_=d("luaL_checkversion_"),a._luaopen_base=d("luaopen_base"),a._luaopen_coroutine=d("luaopen_coroutine"),a._lua_newthread=d("lua_newthread"),a._lua_yieldk=d("lua_yieldk"),a._lua_isyieldable=d("lua_isyieldable"),a._lua_resetthread=d("lua_resetthread"),a._lua_resume=d("lua_resume"),a._luaopen_debug=d("luaopen_debug"),a._lua_gethookmask=d("lua_gethookmask"),a._lua_gethook=d("lua_gethook"),a._lua_gethookcount=d("lua_gethookcount"),a._lua_getlocal=d("lua_getlocal"),a._lua_sethook=d("lua_sethook"),a._lua_setlocal=d("lua_setlocal"),a._lua_setcstacklimit=d("lua_setcstacklimit");var Lt=a._malloc=d("malloc");a._luaL_openlibs=d("luaL_openlibs"),a._luaopen_package=d("luaopen_package"),a._luaopen_table=d("luaopen_table"),a._luaopen_io=d("luaopen_io"),a._luaopen_os=d("luaopen_os"),a._luaopen_string=d("luaopen_string"),a._luaopen_math=d("luaopen_math"),a._luaopen_utf8=d("luaopen_utf8"),a._lua_close=d("lua_close");var Tt=d("setThrew"),Mn=()=>(Mn=xe.emscripten_stack_init)(),Dr=()=>(Dr=xe.emscripten_stack_get_end)(),On=d("stackSave"),An=d("stackRestore"),Nn=d("stackAlloc");function xt(e,r,t){var i=On();try{Pr(e)(r,t)}catch(s){if(An(i),s!==s+0)throw s;Tt(1,0)}}a.ENV=sr,a.ccall=(e,r,t,i)=>{var s={string:y=>{var A=0;if(y!=null&&y!==0){A=He(y)+1;var k=Nn(A);lr(y,k,A),A=k}return A},array:y=>{var A=Nn(y.length);return Ln(y,A),A}};e=Et(e);var c=[],m=0;if(g(r!=="array",'Return type should not be "array".'),i)for(var b=0;b<i.length;b++){var N=s[t[b]];N?(m===0&&(m=On()),c[b]=N(i[b])):c[b]=i[b]}return t=e.apply(null,c),t=function(y){return m!==0&&An(m),r==="string"?oe(y):r==="boolean"?!!y:y}(t)},a.addFunction=(e,r)=>{if(g(typeof e<"u"),!Te){Te=new WeakMap;var t=Q.length;if(Te)for(var i=0;i<0+t;i++){var s=Pr(i);s&&Te.set(s,i)}}if(t=Te.get(e)||0)return t;if(Rr.length)t=Rr.pop();else{try{Q.grow(1)}catch(b){throw b instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":b}t=Q.length-1}try{i=t,Q.set(i,e),Le[i]=Q.get(i)}catch(b){if(!(b instanceof TypeError))throw b;if(g(typeof r<"u","Missing signature argument to addFunction: "+e),typeof WebAssembly.Function=="function"){i=WebAssembly.Function,s={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"};for(var c={parameters:[],results:r[0]=="v"?[]:[s[r[0]]]},m=1;m<r.length;++m)g(r[m]in s,"invalid signature char: "+r[m]),c.parameters.push(s[r[m]]);r=new i(c,e)}else{for(i=[1],s=r.slice(0,1),r=r.slice(1),c={i:127,p:127,j:126,f:125,d:124,e:111},i.push(96),m=r.length,g(16384>m),128>m?i.push(m):i.push(m%128|128,m>>7),m=0;m<r.length;++m)g(r[m]in c,"invalid signature char: "+r[m]),i.push(c[r[m]]);s=="v"?i.push(0):i.push(1,c[s]),r=[0,97,115,109,1,0,0,0,1],s=i.length,g(16384>s),128>s?r.push(s):r.push(s%128|128,s>>7),r.push.apply(r,i),r.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),r=new WebAssembly.Module(new Uint8Array(r)),r=new WebAssembly.Instance(r,{e:{f:e}}).exports.f}i=t,Q.set(i,r),Le[i]=Q.get(i)}return Te.set(e,t),t},a.removeFunction=e=>{Te.delete(Pr(e)),Q.set(e,null),Le[e]=Q.get(e),Rr.push(e)},a.setValue=function(e,r,t="i8"){switch(t.endsWith("*")&&(t="*"),t){case"i1":q[e>>0]=r;break;case"i8":q[e>>0]=r;break;case"i16":Pe[e>>1]=r;break;case"i32":v[e>>2]=r;break;case"i64":er[e>>3]=BigInt(r);break;case"float":mr[e>>2]=r;break;case"double":pr[e>>3]=r;break;case"*":W[e>>2]=r;break;default:z(`invalid type for setValue: ${t}`)}},a.getValue=function(e,r="i8"){switch(r.endsWith("*")&&(r="*"),r){case"i1":return q[e>>0];case"i8":return q[e>>0];case"i16":return Pe[e>>1];case"i32":return v[e>>2];case"i64":return er[e>>3];case"float":return mr[e>>2];case"double":return pr[e>>3];case"*":return W[e>>2];default:z(`invalid type for getValue: ${r}`)}},a.stringToUTF8=lr,a.lengthBytesUTF8=He,a.stringToNewUTF8=Ir,a.FS=l,"writeI53ToI64 writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling readI53FromI64 readI53FromU64 convertI32PairToI53 convertI32PairToI53Checked convertU32PairToI53 inetPton4 inetNtop4 inetPton6 inetNtop6 readSockaddr writeSockaddr getHostByName getCallstack emscriptenLog convertPCtoSourceLocation readEmAsmArgs jstoi_q jstoi_s listenOnce autoResumeAudioContext getDynCaller dynCall handleException runtimeKeepalivePush runtimeKeepalivePop callUserCallback maybeExit asmjsMangle handleAllocatorInit HandleAllocator getNativeTypeSize STACK_SIZE STACK_ALIGN POINTER_SIZE ASSERTIONS cwrap reallyNegative unSign strLen reSign formatString intArrayToString AsciiToString UTF16ToString stringToUTF16 lengthBytesUTF16 UTF32ToString stringToUTF32 lengthBytesUTF32 registerKeyEventCallback maybeCStringToJsString findEventTarget findCanvasEventTarget getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback registerBeforeUnloadEventCallback fillBatteryEventData battery registerBatteryEventCallback setCanvasElementSize getCanvasElementSize jsStackTrace stackTrace checkWasiClock wasiRightsToMuslOFlags wasiOFlagsToMuslOFlags createDyncallWrapper safeSetTimeout setImmediateWrapped clearImmediateWrapped polyfillSetImmediate getPromise makePromise idsToPromises makePromiseCallback setMainLoop getSocketFromFD getSocketAddress FS_unlink FS_mkdirTree _setNetworkCallback".split(" ").forEach(function(e){typeof globalThis>"u"||Object.getOwnPropertyDescriptor(globalThis,e)||Object.defineProperty(globalThis,e,{configurable:!0,get(){var r=`\`${e}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,t=e;t.startsWith("_")||(t="$"+e),r+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${t}')`,rn(e)&&(r+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Ce(r)}}),tn(e)}),"run addOnPreRun addOnInit addOnPreMain addOnExit addOnPostRun addRunDependency removeRunDependency FS_createFolder FS_createPath FS_createLazyFile FS_createLink FS_createDevice FS_readFile out err callMain abort wasmMemory wasmExports stackAlloc stackSave stackRestore getTempRet0 setTempRet0 writeStackCookie checkStackCookie MAX_INT53 MIN_INT53 bigintToI53Checked ptrToString zeroMemory exitJS getHeapMax growMemory MONTH_DAYS_REGULAR MONTH_DAYS_LEAP MONTH_DAYS_REGULAR_CUMULATIVE MONTH_DAYS_LEAP_CUMULATIVE isLeapYear ydayFromDate arraySum addDays ERRNO_CODES ERRNO_MESSAGES setErrNo DNS Protocols Sockets initRandomFill randomFill timers warnOnce UNWIND_CACHE readEmAsmArgsArray getExecutableName keepRuntimeAlive asyncLoad alignMemory mmapAlloc wasmTable noExitRuntime getCFunc uleb128Encode sigToWasmTypes generateFuncType convertJsFunctionToWasm freeTableIndexes functionsInTableMap getEmptyTableSlot updateTableMap getFunctionAddress PATH PATH_FS UTF8Decoder UTF8ArrayToString UTF8ToString stringToUTF8Array intArrayFromString stringToAscii UTF16Decoder stringToUTF8OnStack writeArrayToMemory JSEvents specialHTMLTargets currentFullscreenStrategy restoreOldWindowedStyle demangle demangleAll ExitStatus getEnvStrings doReadv doWritev promiseMap Browser wget SYSCALLS preloadPlugins FS_createPreloadedFile FS_modeStringToFlags FS_getMode FS_stdin_getChar_buffer FS_stdin_getChar FS_createDataFile MEMFS TTY PIPEFS SOCKFS".split(" ").forEach(tn);var or;ze=function e(){or||In(),or||(ze=e)};function In(){if(!(0<Ye)){Mn();var e=Dr();if(g((e&3)==0),e==0&&(e+=4),W[e>>2]=34821223,W[e+4>>2]=2310721022,W[0]=1668509029,a.preRun)for(typeof a.preRun=="function"&&(a.preRun=[a.preRun]);a.preRun.length;)e=a.preRun.shift(),gr.unshift(e);for(;0<gr.length;)gr.shift()(a);if(!(0<Ye)){if(!or&&(or=!0,a.calledRun=!0,!We)){for(g(!yr),yr=!0,_r(),a.noFSInit||l.R.Y||l.R(),l.ta=!1;0<br.length;)br.shift()(a);for(u(a),g(!a._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),_r();0<qr.length;)qr.shift()(a)}_r()}}}function St(){var e=Fe,r=$,t=!1;Fe=$=()=>{t=!0};try{Sn(0),["stdout","stderr"].forEach(function(i){(i=bn("/dev/"+i))&&(i=Tr[i.object.rdev])&&i.output&&i.output.length&&(t=!0)})}catch{}Fe=e,$=r,t&&Ce("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}return In(),n.ready}})();class Ze{static async initialize(n,a){const u=await lt({locateFile:(o,p)=>n||p+o,preRun:o=>{typeof a=="object"&&Object.entries(a).forEach(([p,w])=>o.ENV[p]=w)}});return new Ze(u)}constructor(n){this.referenceTracker=new WeakMap,this.referenceMap=new Map,this.availableReferences=[],this.module=n,this.luaL_checkversion_=this.cwrap("luaL_checkversion_",null,["number","number","number"]),this.luaL_getmetafield=this.cwrap("luaL_getmetafield","number",["number","number","string"]),this.luaL_callmeta=this.cwrap("luaL_callmeta","number",["number","number","string"]),this.luaL_tolstring=this.cwrap("luaL_tolstring","string",["number","number","number"]),this.luaL_argerror=this.cwrap("luaL_argerror","number",["number","number","string"]),this.luaL_typeerror=this.cwrap("luaL_typeerror","number",["number","number","string"]),this.luaL_checklstring=this.cwrap("luaL_checklstring","string",["number","number","number"]),this.luaL_optlstring=this.cwrap("luaL_optlstring","string",["number","number","string","number"]),this.luaL_checknumber=this.cwrap("luaL_checknumber","number",["number","number"]),this.luaL_optnumber=this.cwrap("luaL_optnumber","number",["number","number","number"]),this.luaL_checkinteger=this.cwrap("luaL_checkinteger","number",["number","number"]),this.luaL_optinteger=this.cwrap("luaL_optinteger","number",["number","number","number"]),this.luaL_checkstack=this.cwrap("luaL_checkstack",null,["number","number","string"]),this.luaL_checktype=this.cwrap("luaL_checktype",null,["number","number","number"]),this.luaL_checkany=this.cwrap("luaL_checkany",null,["number","number"]),this.luaL_newmetatable=this.cwrap("luaL_newmetatable","number",["number","string"]),this.luaL_setmetatable=this.cwrap("luaL_setmetatable",null,["number","string"]),this.luaL_testudata=this.cwrap("luaL_testudata","number",["number","number","string"]),this.luaL_checkudata=this.cwrap("luaL_checkudata","number",["number","number","string"]),this.luaL_where=this.cwrap("luaL_where",null,["number","number"]),this.luaL_fileresult=this.cwrap("luaL_fileresult","number",["number","number","string"]),this.luaL_execresult=this.cwrap("luaL_execresult","number",["number","number"]),this.luaL_ref=this.cwrap("luaL_ref","number",["number","number"]),this.luaL_unref=this.cwrap("luaL_unref",null,["number","number","number"]),this.luaL_loadfilex=this.cwrap("luaL_loadfilex","number",["number","string","string"]),this.luaL_loadbufferx=this.cwrap("luaL_loadbufferx","number",["number","string|number","number","string|number","string"]),this.luaL_loadstring=this.cwrap("luaL_loadstring","number",["number","string"]),this.luaL_newstate=this.cwrap("luaL_newstate","number",[]),this.luaL_len=this.cwrap("luaL_len","number",["number","number"]),this.luaL_addgsub=this.cwrap("luaL_addgsub",null,["number","string","string","string"]),this.luaL_gsub=this.cwrap("luaL_gsub","string",["number","string","string","string"]),this.luaL_setfuncs=this.cwrap("luaL_setfuncs",null,["number","number","number"]),this.luaL_getsubtable=this.cwrap("luaL_getsubtable","number",["number","number","string"]),this.luaL_traceback=this.cwrap("luaL_traceback",null,["number","number","string","number"]),this.luaL_requiref=this.cwrap("luaL_requiref",null,["number","string","number","number"]),this.luaL_buffinit=this.cwrap("luaL_buffinit",null,["number","number"]),this.luaL_prepbuffsize=this.cwrap("luaL_prepbuffsize","string",["number","number"]),this.luaL_addlstring=this.cwrap("luaL_addlstring",null,["number","string","number"]),this.luaL_addstring=this.cwrap("luaL_addstring",null,["number","string"]),this.luaL_addvalue=this.cwrap("luaL_addvalue",null,["number"]),this.luaL_pushresult=this.cwrap("luaL_pushresult",null,["number"]),this.luaL_pushresultsize=this.cwrap("luaL_pushresultsize",null,["number","number"]),this.luaL_buffinitsize=this.cwrap("luaL_buffinitsize","string",["number","number","number"]),this.lua_newstate=this.cwrap("lua_newstate","number",["number","number"]),this.lua_close=this.cwrap("lua_close",null,["number"]),this.lua_newthread=this.cwrap("lua_newthread","number",["number"]),this.lua_resetthread=this.cwrap("lua_resetthread","number",["number"]),this.lua_atpanic=this.cwrap("lua_atpanic","number",["number","number"]),this.lua_version=this.cwrap("lua_version","number",["number"]),this.lua_absindex=this.cwrap("lua_absindex","number",["number","number"]),this.lua_gettop=this.cwrap("lua_gettop","number",["number"]),this.lua_settop=this.cwrap("lua_settop",null,["number","number"]),this.lua_pushvalue=this.cwrap("lua_pushvalue",null,["number","number"]),this.lua_rotate=this.cwrap("lua_rotate",null,["number","number","number"]),this.lua_copy=this.cwrap("lua_copy",null,["number","number","number"]),this.lua_checkstack=this.cwrap("lua_checkstack","number",["number","number"]),this.lua_xmove=this.cwrap("lua_xmove",null,["number","number","number"]),this.lua_isnumber=this.cwrap("lua_isnumber","number",["number","number"]),this.lua_isstring=this.cwrap("lua_isstring","number",["number","number"]),this.lua_iscfunction=this.cwrap("lua_iscfunction","number",["number","number"]),this.lua_isinteger=this.cwrap("lua_isinteger","number",["number","number"]),this.lua_isuserdata=this.cwrap("lua_isuserdata","number",["number","number"]),this.lua_type=this.cwrap("lua_type","number",["number","number"]),this.lua_typename=this.cwrap("lua_typename","string",["number","number"]),this.lua_tonumberx=this.cwrap("lua_tonumberx","number",["number","number","number"]),this.lua_tointegerx=this.cwrap("lua_tointegerx","number",["number","number","number"]),this.lua_toboolean=this.cwrap("lua_toboolean","number",["number","number"]),this.lua_tolstring=this.cwrap("lua_tolstring","string",["number","number","number"]),this.lua_rawlen=this.cwrap("lua_rawlen","number",["number","number"]),this.lua_tocfunction=this.cwrap("lua_tocfunction","number",["number","number"]),this.lua_touserdata=this.cwrap("lua_touserdata","number",["number","number"]),this.lua_tothread=this.cwrap("lua_tothread","number",["number","number"]),this.lua_topointer=this.cwrap("lua_topointer","number",["number","number"]),this.lua_arith=this.cwrap("lua_arith",null,["number","number"]),this.lua_rawequal=this.cwrap("lua_rawequal","number",["number","number","number"]),this.lua_compare=this.cwrap("lua_compare","number",["number","number","number","number"]),this.lua_pushnil=this.cwrap("lua_pushnil",null,["number"]),this.lua_pushnumber=this.cwrap("lua_pushnumber",null,["number","number"]),this.lua_pushinteger=this.cwrap("lua_pushinteger",null,["number","number"]),this.lua_pushlstring=this.cwrap("lua_pushlstring","string",["number","string|number","number"]),this.lua_pushstring=this.cwrap("lua_pushstring","string",["number","string|number"]),this.lua_pushcclosure=this.cwrap("lua_pushcclosure",null,["number","number","number"]),this.lua_pushboolean=this.cwrap("lua_pushboolean",null,["number","number"]),this.lua_pushlightuserdata=this.cwrap("lua_pushlightuserdata",null,["number","number"]),this.lua_pushthread=this.cwrap("lua_pushthread","number",["number"]),this.lua_getglobal=this.cwrap("lua_getglobal","number",["number","string"]),this.lua_gettable=this.cwrap("lua_gettable","number",["number","number"]),this.lua_getfield=this.cwrap("lua_getfield","number",["number","number","string"]),this.lua_geti=this.cwrap("lua_geti","number",["number","number","number"]),this.lua_rawget=this.cwrap("lua_rawget","number",["number","number"]),this.lua_rawgeti=this.cwrap("lua_rawgeti","number",["number","number","number"]),this.lua_rawgetp=this.cwrap("lua_rawgetp","number",["number","number","number"]),this.lua_createtable=this.cwrap("lua_createtable",null,["number","number","number"]),this.lua_newuserdatauv=this.cwrap("lua_newuserdatauv","number",["number","number","number"]),this.lua_getmetatable=this.cwrap("lua_getmetatable","number",["number","number"]),this.lua_getiuservalue=this.cwrap("lua_getiuservalue","number",["number","number","number"]),this.lua_setglobal=this.cwrap("lua_setglobal",null,["number","string"]),this.lua_settable=this.cwrap("lua_settable",null,["number","number"]),this.lua_setfield=this.cwrap("lua_setfield",null,["number","number","string"]),this.lua_seti=this.cwrap("lua_seti",null,["number","number","number"]),this.lua_rawset=this.cwrap("lua_rawset",null,["number","number"]),this.lua_rawseti=this.cwrap("lua_rawseti",null,["number","number","number"]),this.lua_rawsetp=this.cwrap("lua_rawsetp",null,["number","number","number"]),this.lua_setmetatable=this.cwrap("lua_setmetatable","number",["number","number"]),this.lua_setiuservalue=this.cwrap("lua_setiuservalue","number",["number","number","number"]),this.lua_callk=this.cwrap("lua_callk",null,["number","number","number","number","number"]),this.lua_pcallk=this.cwrap("lua_pcallk","number",["number","number","number","number","number","number"]),this.lua_load=this.cwrap("lua_load","number",["number","number","number","string","string"]),this.lua_dump=this.cwrap("lua_dump","number",["number","number","number","number"]),this.lua_yieldk=this.cwrap("lua_yieldk","number",["number","number","number","number"]),this.lua_resume=this.cwrap("lua_resume","number",["number","number","number","number"]),this.lua_status=this.cwrap("lua_status","number",["number"]),this.lua_isyieldable=this.cwrap("lua_isyieldable","number",["number"]),this.lua_setwarnf=this.cwrap("lua_setwarnf",null,["number","number","number"]),this.lua_warning=this.cwrap("lua_warning",null,["number","string","number"]),this.lua_error=this.cwrap("lua_error","number",["number"]),this.lua_next=this.cwrap("lua_next","number",["number","number"]),this.lua_concat=this.cwrap("lua_concat",null,["number","number"]),this.lua_len=this.cwrap("lua_len",null,["number","number"]),this.lua_stringtonumber=this.cwrap("lua_stringtonumber","number",["number","string"]),this.lua_getallocf=this.cwrap("lua_getallocf","number",["number","number"]),this.lua_setallocf=this.cwrap("lua_setallocf",null,["number","number","number"]),this.lua_toclose=this.cwrap("lua_toclose",null,["number","number"]),this.lua_closeslot=this.cwrap("lua_closeslot",null,["number","number"]),this.lua_getstack=this.cwrap("lua_getstack","number",["number","number","number"]),this.lua_getinfo=this.cwrap("lua_getinfo","number",["number","string","number"]),this.lua_getlocal=this.cwrap("lua_getlocal","string",["number","number","number"]),this.lua_setlocal=this.cwrap("lua_setlocal","string",["number","number","number"]),this.lua_getupvalue=this.cwrap("lua_getupvalue","string",["number","number","number"]),this.lua_setupvalue=this.cwrap("lua_setupvalue","string",["number","number","number"]),this.lua_upvalueid=this.cwrap("lua_upvalueid","number",["number","number","number"]),this.lua_upvaluejoin=this.cwrap("lua_upvaluejoin",null,["number","number","number","number","number"]),this.lua_sethook=this.cwrap("lua_sethook",null,["number","number","number","number"]),this.lua_gethook=this.cwrap("lua_gethook","number",["number"]),this.lua_gethookmask=this.cwrap("lua_gethookmask","number",["number"]),this.lua_gethookcount=this.cwrap("lua_gethookcount","number",["number"]),this.lua_setcstacklimit=this.cwrap("lua_setcstacklimit","number",["number","number"]),this.luaopen_base=this.cwrap("luaopen_base","number",["number"]),this.luaopen_coroutine=this.cwrap("luaopen_coroutine","number",["number"]),this.luaopen_table=this.cwrap("luaopen_table","number",["number"]),this.luaopen_io=this.cwrap("luaopen_io","number",["number"]),this.luaopen_os=this.cwrap("luaopen_os","number",["number"]),this.luaopen_string=this.cwrap("luaopen_string","number",["number"]),this.luaopen_utf8=this.cwrap("luaopen_utf8","number",["number"]),this.luaopen_math=this.cwrap("luaopen_math","number",["number"]),this.luaopen_debug=this.cwrap("luaopen_debug","number",["number"]),this.luaopen_package=this.cwrap("luaopen_package","number",["number"]),this.luaL_openlibs=this.cwrap("luaL_openlibs",null,["number"])}lua_remove(n,a){this.lua_rotate(n,a,-1),this.lua_pop(n,1)}lua_pop(n,a){this.lua_settop(n,-a-1)}luaL_getmetatable(n,a){return this.lua_getfield(n,j,a)}lua_yield(n,a){return this.lua_yieldk(n,a,0,null)}lua_upvalueindex(n){return j-n}ref(n){const a=this.referenceTracker.get(n);if(a)return a.refCount++,a.index;const u=this.availableReferences.pop(),o=u===void 0?this.referenceMap.size+1:u;return this.referenceMap.set(o,n),this.referenceTracker.set(n,{refCount:1,index:o}),this.lastRefIndex=o,o}unref(n){const a=this.referenceMap.get(n);if(a===void 0)return;const u=this.referenceTracker.get(a);if(u===void 0){this.referenceTracker.delete(a),this.availableReferences.push(n);return}u.refCount--,u.refCount<=0&&(this.referenceTracker.delete(a),this.referenceMap.delete(n),this.availableReferences.push(n))}getRef(n){return this.referenceMap.get(n)}getLastRefIndex(){return this.lastRefIndex}printRefs(){for(const[n,a]of this.referenceMap.entries())console.log(n,a)}cwrap(n,a,u){return u.some(p=>p==="string|number")?(...p)=>{const w=[],M=u.map((E,P)=>{var F;if(E==="string|number"){if(typeof p[P]=="number")return"number";if(((F=p[P])===null||F===void 0?void 0:F.length)>1024){const H=this.module.stringToNewUTF8(p[P]);return p[P]=H,w.push(H),"number"}else return"string"}return E});try{return this.module.ccall(n,a,M,p)}finally{for(const E of w)this.module._free(E)}}:(...p)=>this.module.ccall(n,a,u,p)}}var st="1.16.0";class ot{constructor(n,a){var u;n===void 0&&(typeof window=="object"&&typeof window.document<"u"||typeof self=="object"&&((u=self==null?void 0:self.constructor)===null||u===void 0?void 0:u.name)==="DedicatedWorkerGlobalScope")&&(n=`https://unpkg.com/wasmoon@${st}/dist/glue.wasm`),this.luaWasmPromise=Ze.initialize(n,a)}async mountFile(n,a){this.mountFileSync(await this.getLuaModule(),n,a)}mountFileSync(n,a,u){const o=a.lastIndexOf("/"),p=a.substring(o+1),w=a.substring(0,a.length-p.length-1);if(w.length>0){const M=w.split("/").reverse();let E="";for(;M.length;){const P=M.pop();if(!P)continue;const F=`${E}/${P}`;try{n.module.FS.mkdir(F)}catch{}E=F}}n.module.FS.writeFile(a,u)}async createEngine(n={}){return new Yr(await this.getLuaModule(),n)}async getLuaModule(){return this.luaWasmPromise}}h.Decoration=ne,h.LUAI_MAXSTACK=B,h.LUA_MULTRET=O,h.LUA_REGISTRYINDEX=j,h.LuaEngine=Yr,h.LuaFactory=ot,h.LuaGlobal=Br,h.LuaMultiReturn=_e,h.LuaRawResult=Je,h.LuaThread=Me,h.LuaTimeoutError=le,h.LuaTypeExtension=ge,h.LuaWasm=Ze,h.PointerSize=D,h.decorate=se,h.decorateFunction=dr,h.decorateProxy=Wr,h.decorateUserdata=tt})})(Ur,Ur.exports);var It=Ur.exports;const Ft=`screenWidth = screenwidth()\r
screenHeight = screenheight()\r
fontHeight = 16\r
\r
-- UTILS\r
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
function split(s, delim)\r
	local stringTable = {}\r
	local lastIndex = 1\r
	for i=1,string.len(s) do\r
		local currentlyContains = true\r
		for j=1,string.len(delim) do\r
			if (string.sub(s, i+j-1, i+j-1) ~= string.sub(delim, j, j)) then\r
				currentlyContains = false\r
			end\r
		end\r
		if (currentlyContains and string.len(string.sub(s, lastIndex, i-1)) > 0) then\r
			stringTable[#stringTable+1] = string.sub(s, lastIndex, i-1)\r
			lastIndex = i+string.len(delim)\r
		end\r
	end\r
	stringTable[#stringTable+1] = string.sub(s, lastIndex, #s)\r
	return stringTable\r
end\r
\r
-- PROCESS MANAGEMENT\r
Processes = {}\r
windows = Processes -- compatibility with skk.lua\r
\r
Shell = {\r
    line = "",\r
    history = {},\r
    cmdHistory = {},\r
    cmdHistoryIdx = 0,\r
    alldirty = true,\r
    -- Reserved: Title (1), Prompt (1), Heap (1), SKK (1) = 4 lines\r
    maxHistory = math.floor((screenHeight - fontHeight * 4) / fontHeight)\r
}\r
\r
function printLog(msg)\r
    local lines = split(msg, "\\n")\r
    for _, l in ipairs(lines) do\r
        table.insert(Shell.history, l)\r
    end\r
    while #Shell.history > Shell.maxHistory do\r
        table.remove(Shell.history, 1)\r
    end\r
end\r
\r
function Shell:draw(setPos)\r
    -- clear background (except title and skk status bar)\r
    color(255,255,255)\r
    fillrect(0, fontHeight, screenWidth, screenHeight - fontHeight * 2)\r
    \r
    color(0,0,0)\r
    local y = fontHeight\r
    for i=1, #self.history do\r
        text(self.history[i], 0, y)\r
        y = y + fontHeight\r
    end\r
\r
    local promptStr = "> " .. self.line\r
    text(promptStr, 0, y)\r
\r
    -- cursor\r
    local w = textwidth(promptStr)\r
    fillrect(w, y, 2, fontHeight)\r
\r
    -- heap info\r
    color(255,255,255)\r
    fillrect(0, screenHeight - fontHeight * 2, screenWidth, fontHeight)\r
    color(0,0,0)\r
    text("Heap: " .. getfreeheap(), 0, screenHeight - fontHeight * 2)\r
\r
    if setPos then\r
        setPos(w, y)\r
    end\r
end\r
\r
function Shell:keydown(k, c, ctrl)\r
    debug("shell keydown: " .. k .. "," .. c)\r
    local key = c\r
    if k == 13 then -- Enter\r
        if self.line ~= "" then\r
            table.insert(self.cmdHistory, 1, self.line)\r
            if #self.cmdHistory > 50 then table.remove(self.cmdHistory) end\r
        end\r
        self.cmdHistoryIdx = 0\r
        self:exec(self.line)\r
        self.line = ""\r
    elseif k == 8 then -- Backspace\r
        self.line = subChar(self.line, 1, utf8.len(self.line))\r
    elseif k == 38 then -- ArrowUp\r
        if #self.cmdHistory > 0 then\r
            self.cmdHistoryIdx = self.cmdHistoryIdx + 1\r
            if self.cmdHistoryIdx > #self.cmdHistory then\r
                self.cmdHistoryIdx = #self.cmdHistory\r
            end\r
            self.line = self.cmdHistory[self.cmdHistoryIdx]\r
        end\r
    elseif k == 40 then -- ArrowDown\r
        if self.cmdHistoryIdx > 0 then\r
            self.cmdHistoryIdx = self.cmdHistoryIdx - 1\r
            if self.cmdHistoryIdx == 0 then\r
                self.line = ""\r
            else\r
                self.line = self.cmdHistory[self.cmdHistoryIdx]\r
            end\r
        end\r
    elseif k == 37 then -- ArrowLeft\r
    elseif k == 39 then -- ArrowRight\r
    elseif string.len(key) == 1 or utf8.len(key) == 1 then\r
        self.line = self.line .. key\r
        self.cmdHistoryIdx = 0\r
    end\r
    self:draw(setPos)\r
end\r
\r
function pushProcess(p)\r
    table.insert(Processes, p)\r
    if p.draw then p:draw(setPos) end\r
end\r
\r
function popProcess()\r
    table.remove(Processes)\r
    local top = Processes[#Processes]\r
    if top then\r
        if top.alldirty ~= nil then top.alldirty = true end\r
        if top.draw then top:draw(setPos) end\r
    end\r
end\r
\r
function draw(sp)\r
    local top = Processes[#Processes]\r
    if top and top.draw then\r
        top:draw(sp)\r
    end\r
end\r
\r
function keydown(k, c, ctrl)\r
    local top = Processes[#Processes]\r
    if top and top.keydown then\r
        top:keydown(k, c, ctrl)\r
    end\r
end\r
\r
-- LOADING LOGIC\r
local function resolvePath(filename)\r
    if not string.find(filename, "^/") then\r
        filename = "/" .. filename\r
    end\r
    debug("resolvePath: " .. filename)\r
    local content = readfile(filename)\r
    if not content and not string.find(filename, "%.lua$") then\r
        local alt = filename .. ".lua"\r
        debug("resolvePath: " .. alt)\r
        content = readfile(alt)\r
        if content then filename = alt end\r
    end\r
    return filename, content\r
end\r
\r
local function makeSandbox(args, is_pipe_stage, is_last_pipe)\r
    local env = {\r
        arg = args,\r
        gui = {},\r
        exit = popProcess,\r
        print = function(...)\r
            local msg = table.concat({...}, "\\t")\r
            if is_pipe_stage and not is_last_pipe then\r
                coroutine.yield(msg)\r
            else\r
                printLog(msg)\r
            end\r
        end\r
    }\r
    return setmetatable(env, { __index = _G })\r
end\r
\r
function run(filename, ...)\r
    local path, content = resolvePath(filename)\r
    if not content then\r
        printLog("File not found: " .. filename)\r
        return\r
    end\r
\r
    local env = makeSandbox({...}, false)\r
    local f, err = load(content, path, "t", env)\r
    if f then\r
        local status, result = pcall(f)\r
        if not status then\r
            printLog("Error: " .. result)\r
        elseif rawget(env, "keydown") or rawget(env, "draw") then\r
            pushProcess(env)\r
        end\r
    else\r
        printLog("Load error: " .. err)\r
    end\r
end\r
\r
local function run_pipe(commands)\r
    local coroutines = {}\r
    for i, cmd_str in ipairs(commands) do\r
        local parts = split(cmd_str, " ")\r
        local filename = parts[1]\r
        local args = {}\r
        for j=2, #parts do table.insert(args, parts[j]) end\r
\r
        local path, content = resolvePath(filename)\r
        if not content then\r
            printLog("Command not found: " .. filename)\r
            return\r
        end\r
\r
        local env = makeSandbox(args, true, i == #commands)\r
        local f, err = load(content, path, "t", env)\r
        if not f then\r
            printLog("Load error in " .. path .. ": " .. err)\r
            return\r
        end\r
        table.insert(coroutines, coroutine.create(f))\r
    end\r
\r
    local function drive(data)\r
        local current_data = data\r
        for i=2, #coroutines do\r
            local co = coroutines[i]\r
            if coroutine.status(co) == "dead" then return end\r
            local status, result = coroutine.resume(co, current_data)\r
            if not status then\r
                printLog("Error in stage " .. i .. ": " .. result)\r
                return\r
            end\r
            current_data = result\r
            if not current_data then break end\r
        end\r
    end\r
\r
    for i, co in ipairs(coroutines) do\r
        local status, result = coroutine.resume(co)\r
        if not status then\r
            printLog("Init error in stage " .. i .. ": " .. result)\r
            return\r
        end\r
    end\r
\r
    local first_co = coroutines[1]\r
    while coroutine.status(first_co) ~= "dead" do\r
        local status, result = coroutine.resume(first_co)\r
        if not status then\r
            printLog("Error in source: " .. result)\r
            break\r
        end\r
        if result then drive(result) end\r
    end\r
    drive(nil) -- EOF\r
end\r
\r
-- COMMANDS\r
Commands = {}\r
\r
Commands["ls"] = function(args)\r
    run("/ls.lua")\r
end\r
\r
Commands["clear"] = function(args)\r
    Shell.history = {}\r
end\r
\r
Commands["edit"] = function(args)\r
    if #args > 0 then\r
        run("/edit.lua", args[1])\r
    else\r
        printLog("edit: no filename specified")\r
    end\r
end\r
\r
Commands["switch"] = function(args)\r
    if #args > 0 then\r
        sys_run(args[1])\r
    else\r
        printLog("switch: no filename specified")\r
    end\r
end\r
\r
Commands["off"] = function(args)\r
    if backlight then backlight(false) end\r
end\r
\r
Commands["on"] = function(args)\r
    if backlight then backlight(true) end\r
end\r
\r
Commands["run"] = function(args)\r
    if #args > 0 then\r
        local cmdArgs = {}\r
        for i=2, #args do table.insert(cmdArgs, args[i]) end\r
        run(args[1], table.unpack(cmdArgs))\r
    else\r
        printLog("run: no filename specified")\r
    end\r
end\r
\r
Commands["help"] = function(args)\r
    printLog("Built-in commands:")\r
    local builtins = {}\r
    for k in pairs(Commands) do table.insert(builtins, k) end\r
    table.sort(builtins)\r
    printLog("  " .. table.concat(builtins, ", "))\r
    \r
    printLog("External scripts:")\r
    local files = getfiles()\r
    local scripts = {}\r
    for _, f in ipairs(files) do\r
        if string.find(f, "%.lua$") then\r
            table.insert(scripts, f)\r
        end\r
    end\r
    table.sort(scripts)\r
    printLog("  " .. table.concat(scripts, ", "))\r
end\r
\r
function Shell:exec(line)\r
    printLog("> " .. line)\r
    if string.find(line, "|") then\r
        local cmds = split(line, "|")\r
        for i, v in ipairs(cmds) do\r
            cmds[i] = v:match("^%s*(.-)%s*$")\r
        end\r
        run_pipe(cmds)\r
        return\r
    end\r
\r
    local parts = split(line, " ")\r
    local cmdName = parts[1]\r
    local args = {}\r
    for i=2, #parts do table.insert(args, parts[i]) end\r
\r
    if Commands[cmdName] then\r
        Commands[cmdName](args)\r
    else\r
        run(cmdName, table.unpack(args))\r
    end\r
end\r
\r
table.insert(Processes, Shell)\r
\r
require("skk")\r
imMode = M_HAN\r
\r
color(255,255,255)\r
fillrect(0, 0, screenWidth, screenHeight)\r
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
draw(setPos)\r
`,Pn=`-- init\r
screenWidth = screenwidth()\r
screenHeight = screenheight()\r
fontHeight = 16+2\r
\r
debug("== init ==")\r
\r
require("alert")\r
require("prompt")\r
json = require "json"\r
\r
function url_encode(str)\r
    if str == nil then return "" end\r
    str = tostring(str)\r
    str = str:gsub("\\n", "\\r\\n")\r
    str = str:gsub("([^%w%-%.%_%~])", function(c)\r
        return string.format("%%%02X", string.byte(c))\r
    end)\r
    return str\r
end\r
\r
Editor = {}\r
Editor.new = function()\r
    local obj = {}\r
    obj.lines = {}\r
    obj.lines[#obj.lines + 1] = {value="Hello World", dirty=true}\r
    obj.lines[#obj.lines + 1] = {value="日本語 テスト", dirty=true}\r
    obj.x = 1\r
    obj.y = 1\r
    obj.scrollY = 0\r
    obj.alldirty = true\r
    obj.getText = function(self)\r
        local ls = {}\r
        for i, l in pairs(self.lines) do\r
            ls[#ls + 1] = l.value\r
        end\r
        return table.concat(ls, "\\n")\r
    end\r
    obj.loadText = function(self, text)\r
        self.lines = {}\r
        debug("loadText")\r
        for line in text:gmatch("[^\\n]+") do\r
            debug("load: " .. line)\r
            self.lines[#self.lines + 1] = {value = line, dirty = true}\r
        end\r
        if #self.lines == 0 then\r
            self.lines[1] = {value = "", dirty = true}\r
        end\r
        self.alldirty = true\r
    end\r
    obj.draw = function(self, setPos)\r
        local px = 0\r
        local py = 0\r
        local cx = 0\r
        local cy = 0\r
        local offset = 10\r
        if self.alldirty then\r
            color(255,255,255)\r
            fillrect(0,0,screenWidth,screenHeight)\r
        end\r
        color(0,0,0)\r
        for i, l in pairs(self.lines) do\r
            if i < self.scrollY or i - self.scrollY > screenHeight/fontHeight then\r
                goto skip\r
            end\r
            px = 0\r
            local j = 1\r
            if l["dirty"] == false and i ~= self.y and not(self.alldirty) then\r
                goto continue\r
            end\r
            l["dirty"] = false\r
            color(255,255,255)\r
            fillrect(0,py,screenWidth,fontHeight)\r
            if i == #self.lines then\r
                fillrect(0,py + fontHeight,screenWidth,fontHeight)\r
            end\r
            color(0,0,255)\r
            fillrect(0, py, 3, fontHeight)\r
            for p, c in utf8.codes(l["value"]) do\r
                local uc = utf8.char(c)\r
                if i == self.y and j == self.x then\r
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
            if i == self.y and j == self.x then\r
                color(0,0,0)\r
                fillrect(offset + px, py, 1, fontHeight - 1)\r
                cx = px\r
                cy = py\r
            end\r
            ::continue::\r
            py = py + fontHeight\r
            ::skip::\r
        end\r
        if self.alldirty then self.alldirty = false end\r
        if setPos then setPos(offset + cx, cy) end\r
    end\r
    obj.keydown = function(self, k, c, ctrl)\r
        debug("keydown: " .. k .. "," .. c)\r
        local key = c\r
        if k == 13 then -- Enter\r
            local line = self.lines[self.y]["value"]\r
            self.lines[self.y]["value"] = subChar(line, 1, self.x)\r
            self.lines[self.y]["dirty"] = true\r
            table.insert(self.lines, self.y + 1, {\r
                value = subChar(line, self.x, utf8.len(line) + 1),\r
                dirty=true\r
            })\r
            self.x = 1\r
            self.y = self.y + 1\r
            self.alldirty = true\r
        elseif k == 8 then -- Backspace\r
            local line = self.lines[self.y]["value"]\r
            if self.x == 1 then\r
                if self.y > 1 then\r
                    local px = utf8.len(self.lines[self.y - 1]["value"]) + 1\r
                    self.lines[self.y - 1]["value"] = self.lines[self.y - 1]["value"] .. self.lines[self.y]["value"]\r
                    table.remove(self.lines, self.y)\r
                    self.y = self.y - 1\r
                    self.x = px\r
                    self.alldirty = true\r
                end\r
            else\r
                self.lines[self.y]["value"] = subChar(line, 1, self.x - 1) .. subChar(line, self.x, utf8.len(line) + 1)\r
                self.x = self.x - 1\r
                self.lines[self.y]["dirty"] = true\r
            end\r
        elseif k == 37 then -- ArrowLeft\r
            if self.x > 1 then self.x = self.x - 1 end\r
        elseif k == 39 then -- ArrowRight\r
            if self.x <= utf8.len(self.lines[self.y]["value"]) then self.x = self.x + 1 end\r
        elseif k == 38 then -- ArrowUp\r
            if self.y > 1 then\r
                self.lines[self.y]["dirty"] = true\r
                self.y = self.y - 1\r
                if self.x > utf8.len(self.lines[self.y]["value"]) + 1 then\r
                    self.x = utf8.len(self.lines[self.y]["value"]) + 1\r
                end\r
            end\r
        elseif k == 40 then -- ArrowDown\r
            if self.y < #self.lines then\r
                self.lines[self.y]["dirty"] = true\r
                self.y = self.y + 1\r
                if self.x > utf8.len(self.lines[self.y]["value"]) + 1 then\r
                    self.x = utf8.len(self.lines[self.y]["value"]) + 1\r
                end\r
            end\r
        elseif key == "q" and ctrl then\r
            exit()\r
        elseif key == "f" and ctrl then\r
            fetch("ja.wikipedia.org", "/api/rest_v1/page/summary/" .. url_encode(self.lines[self.y]["value"]), function(out)\r
                local obj = json.decode(out)\r
                showAlert("fetch:" .. (obj["extract"] or "no summary"))            \r
            end)\r
            return\r
        elseif key == "d" and ctrl then\r
            local files = getfiles()\r
            showAlert("files:" .. table.concat(files, "\\n"))\r
            return\r
        elseif key == "l" and ctrl then\r
            showPrompt("load...", function(fileName)\r
                local text = readfile(fileName)\r
                if text == nil then\r
                    showAlert("Load Error! " .. fileName)\r
                else\r
                    self:loadText(text)\r
                end\r
            end)\r
            return\r
        elseif key == "s" and ctrl then\r
            showPrompt("Save...", function(fileName)\r
                local b = self:getText()\r
                savefile(fileName, b)\r
                showAlert("SAVE to " .. fileName)\r
            end)\r
            return\r
        elseif string.len(key) == 1 or utf8.len(key) == 1 then\r
            local line = self.lines[self.y]\r
            self.lines[self.y]["value"] = insertChar(line["value"], self.x, key)\r
            self.x = self.x + 1\r
            self.lines[self.y]["dirty"] = true\r
        end\r
    \r
        if cy <= 0 and self.scrollY > 0 then\r
            self.scrollY = self.scrollY - 1\r
            self.alldirty = true\r
        end\r
        if cy >= screenHeight - fontHeight * 2 then\r
            self.scrollY = self.scrollY + 1\r
            self.alldirty = true\r
        end\r
        self:draw(setPos)\r
    end\r
    return obj\r
end\r
\r
editor = Editor.new()\r
-- Initial load if arg is provided\r
if arg and arg[1] then\r
    local text = readfile(arg[1])\r
    if text then editor:loadText(text) end\r
end\r
\r
function showAlert(msg)\r
    local alert = Alert.new(msg, function()\r
        popProcess()\r
    end)\r
    pushProcess(alert)\r
end\r
\r
function showPrompt(msg, handler)\r
    local prompt = Prompt.new(\r
        msg,\r
        function(text)\r
            popProcess()\r
            handler(text)\r
        end,\r
        function()\r
            popProcess()\r
        end\r
    )\r
    pushProcess(prompt)\r
end\r
\r
-- Export to sandbox\r
function draw(self, sp)\r
    if self.alldirty then\r
        editor.alldirty = true\r
        self.alldirty = false\r
    end\r
    editor:draw(sp)\r
end\r
function keydown(self, k, c, ctrl) editor:keydown(k, c, ctrl) end\r
`,Rn=`-- IME\r
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
    for i, w in pairs(windows) do\r
        w.alldirty = true\r
    end\r
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
    draw()\r
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
    elseif string.len(c) == 1 and k ~= 13 and k ~= 32 and k ~= 8 and not(ctrl) then\r
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
drawIm()`,Cn=`Alert = {}\r
Alert.new = function(msg, handler)\r
    local obj = {}\r
    obj.msg = msg\r
    obj.handler = handler\r
    obj.draw = function(self)\r
        local top = fontHeight\r
        color(0,0,0)\r
        fillrect(0,top - 1,screenWidth, fontHeight*1 + 2)\r
        color(200,200,255)\r
        fillrect(1,top, screenWidth - 2, fontHeight*1)\r
        \r
        -- title\r
        color(0,0,0)        \r
        -- text(self.msg, 10, top)\r
        local offset = 2\r
        local px = 0\r
        local py = fontHeight\r
        local cx = px\r
        local cy = py\r
\r
        for p, c in utf8.codes(self.msg) do\r
            local uc = utf8.char(c)\r
            if offset + px + textwidth(uc) > screenWidth then\r
                px = 0\r
                py = py + fontHeight\r
                color(200,200,255)\r
                fillrect(0,py,screenWidth,fontHeight)\r
            end\r
            color(0,0,0)\r
            text(uc, offset + px, py)\r
            px = px + textwidth(uc)\r
        end\r
\r
    end\r
    obj.keydown = function(self, k, c, ctrl)\r
        local key = c\r
        if k == 13 then -- Enter\r
            self.handler()\r
            return\r
        elseif k == 27 then -- Esc\r
            popProcess()\r
            return\r
        end\r
        self:draw()\r
    end\r
    return obj\r
end\r
`,Dn=`Prompt = {}\r
Prompt.new = function(msg, okHandler, cancelHandler)\r
    local obj = {}\r
    obj.line = ""\r
    obj.x = 1\r
    obj.msg = msg\r
    obj.okHandler = okHandler\r
    obj.cancelHandler = cancelHandler\r
    obj.draw = function(self, setPos)\r
        color(0,0,0)\r
        fillrect(0,0,screenWidth, fontHeight * 2)\r
        color(255,255,255)\r
        fillrect(1,1,screenWidth - 2, fontHeight * 2 - 2)\r
        color(200,200,255)\r
        fillrect(1, 1,screenWidth - 2, fontHeight * 1 - 2)\r
        \r
        -- title\r
        color(0,0,0)        \r
        text(self.msg, 10, 1)\r
        local offset = 2\r
        local j = 1\r
        local px = 0\r
        local py = fontHeight\r
        local cx = px\r
        local cy = py\r
        color(255, 255, 255)\r
        for p, c in utf8.codes(self.line) do\r
            local uc = utf8.char(c)\r
            if j == self.x then\r
                -- draw cursor\r
                color(0,0,0)\r
                fillrect(offset + px, py, 1, fontHeight - 1)\r
                cx = offset + px\r
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
        if j == self.x then\r
            -- draw cursor\r
            color(0,0,0)\r
            fillrect(offset + px, py, 1, fontHeight - 1)\r
            cx = offset + px\r
            cy = py\r
        end\r
        if setPos then\r
            setPos(cx, cy)\r
        end\r
    end\r
    obj.keydown = function(self, k, c, ctrl)\r
        local key = c\r
        if k == 13 then -- Enter\r
            self.okHandler(self.line)\r
            return\r
        elseif k == 27 then -- Esc\r
            self.cancelHandler()\r
            return\r
        elseif k == 8 then -- Backspace\r
            if self.x ~= 1 then\r
                self.line = subChar(self.line, 1, self.x - 1) .. subChar(self.line, self.x, utf8.len(self.line) + 1)\r
                self.x = self.x - 1\r
            end\r
        elseif k == 37 then -- ArrowLeft\r
            if self.x > 1 then\r
                self.x = self.x - 1\r
            end\r
        elseif k == 39 then -- ArrowRight\r
            if self.x <= utf8.len(self.line) then\r
                self.x = self.x + 1\r
            end\r
        elseif string.len(key) == 1 or utf8.len(key) == 1 then\r
            self.line = insertChar(self.line, self.x, key)\r
            self.x = self.x + 1\r
        end\r
        self:draw()\r
        end\r
        return obj\r
        end`,Hn=`--\r
-- json.lua\r
--\r
-- Copyright (c) 2020 rxi\r
--\r
-- Permission is hereby granted, free of charge, to any person obtaining a copy of\r
-- this software and associated documentation files (the "Software"), to deal in\r
-- the Software without restriction, including without limitation the rights to\r
-- use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\r
-- of the Software, and to permit persons to whom the Software is furnished to do\r
-- so, subject to the following conditions:\r
--\r
-- The above copyright notice and this permission notice shall be included in all\r
-- copies or substantial portions of the Software.\r
--\r
-- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r
-- IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r
-- FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r
-- AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r
-- LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r
-- OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\r
-- SOFTWARE.\r
--\r
\r
local json = { _version = "0.1.2" }\r
\r
-------------------------------------------------------------------------------\r
-- Encode\r
-------------------------------------------------------------------------------\r
\r
local encode\r
\r
local escape_char_map = {\r
  [ "\\\\" ] = "\\\\",\r
  [ "\\"" ] = "\\"",\r
  [ "\\b" ] = "b",\r
  [ "\\f" ] = "f",\r
  [ "\\n" ] = "n",\r
  [ "\\r" ] = "r",\r
  [ "\\t" ] = "t",\r
}\r
\r
local escape_char_map_inv = { [ "/" ] = "/" }\r
for k, v in pairs(escape_char_map) do\r
  escape_char_map_inv[v] = k\r
end\r
\r
\r
local function escape_char(c)\r
  return "\\\\" .. (escape_char_map[c] or string.format("u%04x", c:byte()))\r
end\r
\r
\r
local function encode_nil(val)\r
  return "null"\r
end\r
\r
\r
local function encode_table(val, stack)\r
  local res = {}\r
  stack = stack or {}\r
\r
  -- Circular reference?\r
  if stack[val] then error("circular reference") end\r
\r
  stack[val] = true\r
\r
  if rawget(val, 1) ~= nil or next(val) == nil then\r
    -- Treat as array -- check keys are valid and it is not sparse\r
    local n = 0\r
    for k in pairs(val) do\r
      if type(k) ~= "number" then\r
        error("invalid table: mixed or invalid key types")\r
      end\r
      n = n + 1\r
    end\r
    if n ~= #val then\r
      error("invalid table: sparse array")\r
    end\r
    -- Encode\r
    for i, v in ipairs(val) do\r
      table.insert(res, encode(v, stack))\r
    end\r
    stack[val] = nil\r
    return "[" .. table.concat(res, ",") .. "]"\r
\r
  else\r
    -- Treat as an object\r
    for k, v in pairs(val) do\r
      if type(k) ~= "string" then\r
        error("invalid table: mixed or invalid key types")\r
      end\r
      table.insert(res, encode(k, stack) .. ":" .. encode(v, stack))\r
    end\r
    stack[val] = nil\r
    return "{" .. table.concat(res, ",") .. "}"\r
  end\r
end\r
\r
\r
local function encode_string(val)\r
  return '"' .. val:gsub('[%z\\1-\\31\\\\"]', escape_char) .. '"'\r
end\r
\r
\r
local function encode_number(val)\r
  -- Check for NaN, -inf and inf\r
  if val ~= val or val <= -math.huge or val >= math.huge then\r
    error("unexpected number value '" .. tostring(val) .. "'")\r
  end\r
  return string.format("%.14g", val)\r
end\r
\r
\r
local type_func_map = {\r
  [ "nil"     ] = encode_nil,\r
  [ "table"   ] = encode_table,\r
  [ "string"  ] = encode_string,\r
  [ "number"  ] = encode_number,\r
  [ "boolean" ] = tostring,\r
}\r
\r
\r
encode = function(val, stack)\r
  local t = type(val)\r
  local f = type_func_map[t]\r
  if f then\r
    return f(val, stack)\r
  end\r
  error("unexpected type '" .. t .. "'")\r
end\r
\r
\r
function json.encode(val)\r
  return ( encode(val) )\r
end\r
\r
\r
-------------------------------------------------------------------------------\r
-- Decode\r
-------------------------------------------------------------------------------\r
\r
local parse\r
\r
local function create_set(...)\r
  local res = {}\r
  for i = 1, select("#", ...) do\r
    res[ select(i, ...) ] = true\r
  end\r
  return res\r
end\r
\r
local space_chars   = create_set(" ", "\\t", "\\r", "\\n")\r
local delim_chars   = create_set(" ", "\\t", "\\r", "\\n", "]", "}", ",")\r
local escape_chars  = create_set("\\\\", "/", '"', "b", "f", "n", "r", "t", "u")\r
local literals      = create_set("true", "false", "null")\r
\r
local literal_map = {\r
  [ "true"  ] = true,\r
  [ "false" ] = false,\r
  [ "null"  ] = nil,\r
}\r
\r
\r
local function next_char(str, idx, set, negate)\r
  for i = idx, #str do\r
    if set[str:sub(i, i)] ~= negate then\r
      return i\r
    end\r
  end\r
  return #str + 1\r
end\r
\r
\r
local function decode_error(str, idx, msg)\r
  local line_count = 1\r
  local col_count = 1\r
  for i = 1, idx - 1 do\r
    col_count = col_count + 1\r
    if str:sub(i, i) == "\\n" then\r
      line_count = line_count + 1\r
      col_count = 1\r
    end\r
  end\r
  error( string.format("%s at line %d col %d", msg, line_count, col_count) )\r
end\r
\r
\r
local function codepoint_to_utf8(n)\r
  -- http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=iws-appendixa\r
  local f = math.floor\r
  if n <= 0x7f then\r
    return string.char(n)\r
  elseif n <= 0x7ff then\r
    return string.char(f(n / 64) + 192, n % 64 + 128)\r
  elseif n <= 0xffff then\r
    return string.char(f(n / 4096) + 224, f(n % 4096 / 64) + 128, n % 64 + 128)\r
  elseif n <= 0x10ffff then\r
    return string.char(f(n / 262144) + 240, f(n % 262144 / 4096) + 128,\r
                       f(n % 4096 / 64) + 128, n % 64 + 128)\r
  end\r
  error( string.format("invalid unicode codepoint '%x'", n) )\r
end\r
\r
\r
local function parse_unicode_escape(s)\r
  local n1 = tonumber( s:sub(1, 4),  16 )\r
  local n2 = tonumber( s:sub(7, 10), 16 )\r
   -- Surrogate pair?\r
  if n2 then\r
    return codepoint_to_utf8((n1 - 0xd800) * 0x400 + (n2 - 0xdc00) + 0x10000)\r
  else\r
    return codepoint_to_utf8(n1)\r
  end\r
end\r
\r
\r
local function parse_string(str, i)\r
  local res = ""\r
  local j = i + 1\r
  local k = j\r
\r
  while j <= #str do\r
    local x = str:byte(j)\r
\r
    if x < 32 then\r
      decode_error(str, j, "control character in string")\r
\r
    elseif x == 92 then -- \`\\\`: Escape\r
      res = res .. str:sub(k, j - 1)\r
      j = j + 1\r
      local c = str:sub(j, j)\r
      if c == "u" then\r
        local hex = str:match("^[dD][89aAbB]%x%x\\\\u%x%x%x%x", j + 1)\r
                 or str:match("^%x%x%x%x", j + 1)\r
                 or decode_error(str, j - 1, "invalid unicode escape in string")\r
        res = res .. parse_unicode_escape(hex)\r
        j = j + #hex\r
      else\r
        if not escape_chars[c] then\r
          decode_error(str, j - 1, "invalid escape char '" .. c .. "' in string")\r
        end\r
        res = res .. escape_char_map_inv[c]\r
      end\r
      k = j + 1\r
\r
    elseif x == 34 then -- \`"\`: End of string\r
      res = res .. str:sub(k, j - 1)\r
      return res, j + 1\r
    end\r
\r
    j = j + 1\r
  end\r
\r
  decode_error(str, i, "expected closing quote for string")\r
end\r
\r
\r
local function parse_number(str, i)\r
  local x = next_char(str, i, delim_chars)\r
  local s = str:sub(i, x - 1)\r
  local n = tonumber(s)\r
  if not n then\r
    decode_error(str, i, "invalid number '" .. s .. "'")\r
  end\r
  return n, x\r
end\r
\r
\r
local function parse_literal(str, i)\r
  local x = next_char(str, i, delim_chars)\r
  local word = str:sub(i, x - 1)\r
  if not literals[word] then\r
    decode_error(str, i, "invalid literal '" .. word .. "'")\r
  end\r
  return literal_map[word], x\r
end\r
\r
\r
local function parse_array(str, i)\r
  local res = {}\r
  local n = 1\r
  i = i + 1\r
  while 1 do\r
    local x\r
    i = next_char(str, i, space_chars, true)\r
    -- Empty / end of array?\r
    if str:sub(i, i) == "]" then\r
      i = i + 1\r
      break\r
    end\r
    -- Read token\r
    x, i = parse(str, i)\r
    res[n] = x\r
    n = n + 1\r
    -- Next token\r
    i = next_char(str, i, space_chars, true)\r
    local chr = str:sub(i, i)\r
    i = i + 1\r
    if chr == "]" then break end\r
    if chr ~= "," then decode_error(str, i, "expected ']' or ','") end\r
  end\r
  return res, i\r
end\r
\r
\r
local function parse_object(str, i)\r
  local res = {}\r
  i = i + 1\r
  while 1 do\r
    local key, val\r
    i = next_char(str, i, space_chars, true)\r
    -- Empty / end of object?\r
    if str:sub(i, i) == "}" then\r
      i = i + 1\r
      break\r
    end\r
    -- Read key\r
    if str:sub(i, i) ~= '"' then\r
      decode_error(str, i, "expected string for key")\r
    end\r
    key, i = parse(str, i)\r
    -- Read ':' delimiter\r
    i = next_char(str, i, space_chars, true)\r
    if str:sub(i, i) ~= ":" then\r
      decode_error(str, i, "expected ':' after key")\r
    end\r
    i = next_char(str, i + 1, space_chars, true)\r
    -- Read value\r
    val, i = parse(str, i)\r
    -- Set\r
    res[key] = val\r
    -- Next token\r
    i = next_char(str, i, space_chars, true)\r
    local chr = str:sub(i, i)\r
    i = i + 1\r
    if chr == "}" then break end\r
    if chr ~= "," then decode_error(str, i, "expected '}' or ','") end\r
  end\r
  return res, i\r
end\r
\r
\r
local char_func_map = {\r
  [ '"' ] = parse_string,\r
  [ "0" ] = parse_number,\r
  [ "1" ] = parse_number,\r
  [ "2" ] = parse_number,\r
  [ "3" ] = parse_number,\r
  [ "4" ] = parse_number,\r
  [ "5" ] = parse_number,\r
  [ "6" ] = parse_number,\r
  [ "7" ] = parse_number,\r
  [ "8" ] = parse_number,\r
  [ "9" ] = parse_number,\r
  [ "-" ] = parse_number,\r
  [ "t" ] = parse_literal,\r
  [ "f" ] = parse_literal,\r
  [ "n" ] = parse_literal,\r
  [ "[" ] = parse_array,\r
  [ "{" ] = parse_object,\r
}\r
\r
\r
parse = function(str, idx)\r
  local chr = str:sub(idx, idx)\r
  local f = char_func_map[chr]\r
  if f then\r
    return f(str, idx)\r
  end\r
  decode_error(str, idx, "unexpected character '" .. chr .. "'")\r
end\r
\r
\r
function json.decode(str)\r
  if type(str) ~= "string" then\r
    error("expected argument of type string, got " .. type(str))\r
  end\r
  local res, idx = parse(str, next_char(str, 1, space_chars, true))\r
  idx = next_char(str, idx, space_chars, true)\r
  if idx <= #str then\r
    decode_error(str, idx, "trailing garbage")\r
  end\r
  return res\r
end\r
\r
\r
return json`,Pt=`local files = getfiles()\r
for i=1, #files do\r
    print(files[i])\r
end\r
`,Rt=`local pattern = arg[1]\r
if not pattern then\r
    print("Usage: grep <pattern>")\r
    return\r
end\r
\r
while true do\r
    local line = coroutine.yield()\r
    if line == nil then break end\r
    if string.find(line, pattern) then\r
        print(line)\r
    end\r
end\r
`,Ct=`local filename = arg[1]\r
if filename then\r
    if not string.find(filename, "^/") then filename = "/" .. filename end\r
    local content = readfile(filename)\r
    if content then\r
        local lines = split(content, "\\n")\r
        for _, l in ipairs(lines) do\r
            print(l)\r
        end\r
    else\r
        print("cat: " .. filename .. ": No such file")\r
    end\r
else\r
    -- No filename, read from pipe\r
    while true do\r
        local line = coroutine.yield()\r
        if line == nil then break end\r
        print(line)\r
    end\r
end\r
`,Dt=`local n = 10\r
local filename = nil\r
\r
local i = 1\r
while i <= #arg do\r
    if arg[i] == "-n" and arg[i+1] then\r
        n = tonumber(arg[i+1]) or 10\r
        i = i + 2\r
    elseif not string.find(arg[i], "^-") then\r
        filename = arg[i]\r
        i = i + 1\r
    else\r
        i = i + 1\r
    end\r
end\r
\r
local count = 0\r
if filename then\r
    if not string.find(filename, "^/") then filename = "/" .. filename end\r
    local content = readfile(filename)\r
    if content then\r
        local lines = split(content, "\\n")\r
        for _, l in ipairs(lines) do\r
            if count >= n then break end\r
            print(l)\r
            count = count + 1\r
        end\r
    else\r
        print("head: " .. filename .. ": No such file")\r
    end\r
else\r
    -- Pipe input\r
    while count < n do\r
        local line = coroutine.yield()\r
        if line == nil then break end\r
        print(line)\r
        count = count + 1\r
    end\r
end\r
`,Ht=`local n = 10\r
local filename = nil\r
\r
local i = 1\r
while i <= #arg do\r
    if arg[i] == "-n" and arg[i+1] then\r
        n = tonumber(arg[i+1]) or 10\r
        i = i + 2\r
    elseif not string.find(arg[i], "^-") then\r
        filename = arg[i]\r
        i = i + 1\r
    else\r
        i = i + 1\r
    end\r
end\r
\r
local buffer = {}\r
if filename then\r
    if not string.find(filename, "^/") then filename = "/" .. filename end\r
    local content = readfile(filename)\r
    if content then\r
        buffer = split(content, "\\n")\r
    else\r
        print("tail: " .. filename .. ": No such file")\r
        return\r
    end\r
else\r
    -- Pipe input\r
    while true do\r
        local line = coroutine.yield()\r
        if line == nil then break end\r
        table.insert(buffer, line)\r
    end\r
end\r
\r
local start = #buffer - n + 1\r
if start < 1 then start = 1 end\r
for i=start, #buffer do\r
    print(buffer[i])\r
end\r
`;let jr={},J={},pe=null,Vr,jn=800,Vn=480,cr=!1,qe="/shell.lua",Un=[],K,Bn=null,ie=!1,Se=null;const ue=(U,T,h)=>{!Vr||!K||(Vr(U,T,h),cr&&(console.log("EXIT"),cr=!1,K.global.close(),Wn()))},me=()=>{ie=!1,Se==null||Se.classList.remove("active")},Ut=U=>{const T=document.getElementById("app");if(!T)return;const h=document.createElement("input");h.type="text",h.className="hidden-input",h.autocapitalize="off",h.autocomplete="off",h.spellcheck=!1,h.setAttribute("autocorrect","off"),T.appendChild(h),Bn=h,U.addEventListener("pointerdown",()=>{h.focus({preventScroll:!0})}),h.addEventListener("focus",()=>{document.body.classList.add("keyboard-open")}),h.addEventListener("blur",()=>{document.body.classList.remove("keyboard-open")}),h.addEventListener("keydown",O=>{const B=O.keyCode;(B===13||B===8||B===9||B===27||B>=37&&B<=40)&&(O.preventDefault(),ue(B,O.key,O.ctrlKey||ie),me())}),h.addEventListener("beforeinput",O=>{O.preventDefault();const B=O.ctrlKey||ie;if(O.inputType==="insertText"&&O.data)for(const j of O.data)ue(j.codePointAt(0)??0,j,B),me();else O.inputType==="insertLineBreak"?(ue(13,"Enter",B),me()):O.inputType==="deleteContentBackward"&&(ue(8,"Backspace",B),me())});const C=document.createElement("div");C.className="keybar";const D=(O,B)=>{const j=document.createElement("button");return j.type="button",j.textContent=O,j.addEventListener("pointerdown",le=>{le.preventDefault(),B()}),C.appendChild(j),j};Se=D("Ctrl",()=>{ie=!ie,Se==null||Se.classList.toggle("active",ie)}),D("Esc",()=>{ue(27,"Escape",ie),me()}),D("←",()=>{ue(37,"ArrowLeft",ie),me()}),D("↑",()=>{ue(38,"ArrowUp",ie),me()}),D("↓",()=>{ue(40,"ArrowDown",ie),me()}),D("→",()=>{ue(39,"ArrowRight",ie),me()}),T.appendChild(C)};let Wn=()=>{(async()=>{const U=new It.LuaFactory;U.mountFile("skk.lua",Rn),U.mountFile("edit.lua",Pn),U.mountFile("alert.lua",Cn),U.mountFile("prompt.lua",Dn),U.mountFile("json.lua",Hn),J["/test.txt"]=`hello world
aaa
bbb
ccc`,J["/skk.lua"]=Rn,J["/shell.lua"]=Ft,J["/edit.lua"]=Pn,J["/alert.lua"]=Cn,J["/prompt.lua"]=Dn,J["/json.lua"]=Hn,J["/ls.lua"]=Pt,J["/grep.lua"]=Rt,J["/cat.lua"]=Ct,J["/head.lua"]=Dt,J["/tail.lua"]=Ht,K=await U.createEngine();try{K.global.set("color",(T,h,C)=>{pe!=null&&(pe.fillStyle=`rgb(${T},${h},${C})`)}),K.global.set("text",(T,h,C)=>{pe!=null&&pe.fillText(T,h,C)}),K.global.set("textwidth",T=>{if(pe!=null)return pe.measureText(T).width}),K.global.set("screenwidth",()=>jn),K.global.set("screenheight",()=>Vn),K.global.set("fillrect",(T,h,C,D)=>{pe!=null&&pe.fillRect(T,h,C,D)}),K.global.set("debug",T=>{console.log(T)}),K.global.set("getfiles",()=>Object.keys(J)),K.global.set("savefile",(T,h)=>{J[T]=h}),K.global.set("readfile",T=>J[T]),K.global.set("fetch",(T,h,C)=>{(async()=>{let O=await(await fetch("http://"+T+h)).text();console.log("fetch",O,C),C(O)})()}),K.global.set("getfreeheap",()=>-1),K.global.set("sys_run",T=>{Un.push(qe),qe=T,cr=!0}),K.global.set("sys_exit",()=>{const T=Un.pop();if(T)qe=T,cr=!0;else throw new Error("root process can't exit!")}),K.global.set("ksearch",T=>{let h=[];return T in jr&&(h=jr[T].slice()),h}),Vr=async(T,h,C)=>{K.global.get("keydown")(T,h,C)},console.log("load: "+qe),await K.doString(J[qe])}catch(T){console.log(T)}finally{}})()};Wn();addEventListener("keydown",U=>{U.target!==Bn&&U.key!="Shift"&&(ue(U.keyCode,U.key,U.ctrlKey),U.preventDefault())});addEventListener("load",()=>{var h;fetch("https://raw.githubusercontent.com/skk-dev/dict/refs/heads/master/json/SKK-JISYO.M.json",{method:"GET"}).then(C=>C.json()).then(C=>{jr={...C.okuri_ari,...C.okuri_nasi}});let U=document.createElement("canvas");U.width=jn,U.height=Vn,(h=document.getElementById("app"))==null||h.appendChild(U);let T=U.getContext("2d");T!=null&&(pe=T,T.fillStyle="white",T.textBaseline="top",T.fillRect(0,0,800,480),T.fillStyle="black",T.font="16px San-serif"),Ut(U)});const jt=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
