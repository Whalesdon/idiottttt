import{$ as Y,Z as w,dg as Re}from"./entry.ce650135.js";var I={exports:{}},_=typeof Reflect=="object"?Reflect:null,$=_&&typeof _.apply=="function"?_.apply:function(e,n,i){return Function.prototype.apply.call(e,n,i)},P;_&&typeof _.ownKeys=="function"?P=_.ownKeys:Object.getOwnPropertySymbols?P=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:P=function(e){return Object.getOwnPropertyNames(e)};function Le(t){console&&console.warn&&console.warn(t)}var ee=Number.isNaN||function(e){return e!==e};function u(){u.init.call(this)}I.exports=u;I.exports.once=Pe;u.EventEmitter=u;u.prototype._events=void 0;u.prototype._eventsCount=0;u.prototype._maxListeners=void 0;var V=10;function x(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return V},set:function(t){if(typeof t!="number"||t<0||ee(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");V=t}});u.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};u.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||ee(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function te(t){return t._maxListeners===void 0?u.defaultMaxListeners:t._maxListeners}u.prototype.getMaxListeners=function(){return te(this)};u.prototype.emit=function(e){for(var n=[],i=1;i<arguments.length;i++)n.push(arguments[i]);var o=e==="error",a=this._events;if(a!==void 0)o=o&&a.error===void 0;else if(!o)return!1;if(o){var c;if(n.length>0&&(c=n[0]),c instanceof Error)throw c;var l=new Error("Unhandled error."+(c?" ("+c.message+")":""));throw l.context=c,l}var b=a[e];if(b===void 0)return!1;if(typeof b=="function")$(b,this,n);else for(var A=b.length,C=oe(b,A),i=0;i<A;++i)$(C[i],this,n);return!0};function ne(t,e,n,i){var o,a,c;if(x(n),a=t._events,a===void 0?(a=t._events=Object.create(null),t._eventsCount=0):(a.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),a=t._events),c=a[e]),c===void 0)c=a[e]=n,++t._eventsCount;else if(typeof c=="function"?c=a[e]=i?[n,c]:[c,n]:i?c.unshift(n):c.push(n),o=te(t),o>0&&c.length>o&&!c.warned){c.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+c.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=t,l.type=e,l.count=c.length,Le(l)}return t}u.prototype.addListener=function(e,n){return ne(this,e,n,!1)};u.prototype.on=u.prototype.addListener;u.prototype.prependListener=function(e,n){return ne(this,e,n,!0)};function Oe(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function re(t,e,n){var i={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},o=Oe.bind(i);return o.listener=n,i.wrapFn=o,o}u.prototype.once=function(e,n){return x(n),this.on(e,re(this,e,n)),this};u.prototype.prependOnceListener=function(e,n){return x(n),this.prependListener(e,re(this,e,n)),this};u.prototype.removeListener=function(e,n){var i,o,a,c,l;if(x(n),o=this._events,o===void 0)return this;if(i=o[e],i===void 0)return this;if(i===n||i.listener===n)--this._eventsCount===0?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,i.listener||n));else if(typeof i!="function"){for(a=-1,c=i.length-1;c>=0;c--)if(i[c]===n||i[c].listener===n){l=i[c].listener,a=c;break}if(a<0)return this;a===0?i.shift():Ae(i,a),i.length===1&&(o[e]=i[0]),o.removeListener!==void 0&&this.emit("removeListener",e,l||n)}return this};u.prototype.off=u.prototype.removeListener;u.prototype.removeAllListeners=function(e){var n,i,o;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var a=Object.keys(i),c;for(o=0;o<a.length;++o)c=a[o],c!=="removeListener"&&this.removeAllListeners(c);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=i[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(o=n.length-1;o>=0;o--)this.removeListener(e,n[o]);return this};function se(t,e,n){var i=t._events;if(i===void 0)return[];var o=i[e];return o===void 0?[]:typeof o=="function"?n?[o.listener||o]:[o]:n?Te(o):oe(o,o.length)}u.prototype.listeners=function(e){return se(this,e,!0)};u.prototype.rawListeners=function(e){return se(this,e,!1)};u.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):ie.call(t,e)};u.prototype.listenerCount=ie;function ie(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}u.prototype.eventNames=function(){return this._eventsCount>0?P(this._events):[]};function oe(t,e){for(var n=new Array(e),i=0;i<e;++i)n[i]=t[i];return n}function Ae(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function Te(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function Pe(t,e){return new Promise(function(n,i){function o(c){t.removeListener(e,a),i(c)}function a(){typeof t.removeListener=="function"&&t.removeListener("error",o),n([].slice.call(arguments))}ae(t,e,a,{once:!0}),e!=="error"&&xe(t,o,{once:!0})})}function xe(t,e,n){typeof t.on=="function"&&ae(t,"error",e,n)}function ae(t,e,n,i){if(typeof t.on=="function")i.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function o(a){i.once&&t.removeEventListener(e,o),n(a)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var N=I.exports;const it=Y(N),Ce=t=>JSON.stringify(t,(e,n)=>typeof n=="bigint"?n.toString()+"n":n),Se=t=>{const e=/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,n=t.replace(e,'$1"$2n"$3');return JSON.parse(n,(i,o)=>typeof o=="string"&&o.match(/^\d+n$/)?BigInt(o.substring(0,o.length-1)):o)};function Be(t){if(typeof t!="string")throw new Error(`Cannot safe json parse value of type ${typeof t}`);try{return Se(t)}catch{return t}}function k(t){return typeof t=="string"?t:Ce(t)||""}const je="PARSE_ERROR",De="INVALID_REQUEST",Me="METHOD_NOT_FOUND",Ie="INVALID_PARAMS",ce="INTERNAL_ERROR",U="SERVER_ERROR",Ne=[-32700,-32600,-32601,-32602,-32603],O={[je]:{code:-32700,message:"Parse error"},[De]:{code:-32600,message:"Invalid Request"},[Me]:{code:-32601,message:"Method not found"},[Ie]:{code:-32602,message:"Invalid params"},[ce]:{code:-32603,message:"Internal error"},[U]:{code:-32e3,message:"Server error"}},fe=U;function Ue(t){return Ne.includes(t)}function G(t){return Object.keys(O).includes(t)?O[t]:O[fe]}function Fe(t){const e=Object.values(O).find(n=>n.code===t);return e||O[fe]}function He(t,e,n){return t.message.includes("getaddrinfo ENOTFOUND")||t.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${n} RPC url at ${e}`):t}var Je={},m={},W;function qe(){if(W)return m;W=1,Object.defineProperty(m,"__esModule",{value:!0}),m.isBrowserCryptoAvailable=m.getSubtleCrypto=m.getBrowerCrypto=void 0;function t(){return(w===null||w===void 0?void 0:w.crypto)||(w===null||w===void 0?void 0:w.msCrypto)||{}}m.getBrowerCrypto=t;function e(){const i=t();return i.subtle||i.webkitSubtle}m.getSubtleCrypto=e;function n(){return!!t()&&!!e()}return m.isBrowserCryptoAvailable=n,m}var g={},K;function $e(){if(K)return g;K=1,Object.defineProperty(g,"__esModule",{value:!0}),g.isBrowser=g.isNode=g.isReactNative=void 0;function t(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}g.isReactNative=t;function e(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}g.isNode=e;function n(){return!t()&&!e()}return g.isBrowser=n,g}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=Re;e.__exportStar(qe(),t),e.__exportStar($e(),t)})(Je);function ue(t=3){const e=Date.now()*Math.pow(10,t),n=Math.floor(Math.random()*Math.pow(10,t));return e+n}function Ve(t=6){return BigInt(ue(t))}function ke(t,e,n){return{id:n||ue(),jsonrpc:"2.0",method:t,params:e}}function ot(t,e){return{id:t,jsonrpc:"2.0",result:e}}function Ge(t,e,n){return{id:t,jsonrpc:"2.0",error:We(e,n)}}function We(t,e){return typeof t>"u"?G(ce):(typeof t=="string"&&(t=Object.assign(Object.assign({},G(U)),{message:t})),typeof e<"u"&&(t.data=e),Ue(t.code)&&(t=Fe(t.code)),t)}class he{}class at extends he{constructor(e){super()}}class Ke extends he{constructor(){super()}}class Xe extends Ke{constructor(e){super()}}const ze="^https?:",Qe="^wss?:";function Ze(t){const e=t.match(new RegExp(/^\w+:/,"gi"));if(!(!e||!e.length))return e[0]}function le(t,e){const n=Ze(t);return typeof n>"u"?!1:new RegExp(e).test(n)}function X(t){return le(t,ze)}function ct(t){return le(t,Qe)}function ft(t){return new RegExp("wss?://localhost(:d{2,5})?").test(t)}function de(t){return typeof t=="object"&&"id"in t&&"jsonrpc"in t&&t.jsonrpc==="2.0"}function ut(t){return de(t)&&"method"in t}function Ye(t){return de(t)&&(et(t)||pe(t))}function et(t){return"result"in t}function pe(t){return"error"in t}class ht extends Xe{constructor(e){super(e),this.events=new N.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async request(e,n){return this.requestStrict(ke(e.method,e.params||[],e.id||Ve().toString()),n)}async requestStrict(e,n){return new Promise(async(i,o)=>{if(!this.connection.connected)try{await this.open()}catch(a){o(a)}this.events.on(`${e.id}`,a=>{pe(a)?o(a.error):i(a.result)});try{await this.connection.send(e,n)}catch(a){o(a)}})}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),Ye(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}onClose(e){e&&e.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)),this.events.emit("disconnect")}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),typeof e=="string"&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",e=>this.onPayload(e)),this.connection.on("close",e=>this.onClose(e)),this.connection.on("error",e=>this.events.emit("error",e)),this.connection.on("register_error",e=>this.onClose()),this.hasRegisteredEventListeners=!0)}}var M={exports:{}};(function(t,e){var n=typeof self<"u"?self:w,i=function(){function a(){this.fetch=!1,this.DOMException=n.DOMException}return a.prototype=n,new a}();(function(a){(function(c){var l={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};function b(r){return r&&DataView.prototype.isPrototypeOf(r)}if(l.arrayBuffer)var A=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],C=ArrayBuffer.isView||function(r){return r&&A.indexOf(Object.prototype.toString.call(r))>-1};function R(r){if(typeof r!="string"&&(r=String(r)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(r))throw new TypeError("Invalid character in header field name");return r.toLowerCase()}function F(r){return typeof r!="string"&&(r=String(r)),r}function S(r){var s={next:function(){var f=r.shift();return{done:f===void 0,value:f}}};return l.iterable&&(s[Symbol.iterator]=function(){return s}),s}function d(r){this.map={},r instanceof d?r.forEach(function(s,f){this.append(f,s)},this):Array.isArray(r)?r.forEach(function(s){this.append(s[0],s[1])},this):r&&Object.getOwnPropertyNames(r).forEach(function(s){this.append(s,r[s])},this)}d.prototype.append=function(r,s){r=R(r),s=F(s);var f=this.map[r];this.map[r]=f?f+", "+s:s},d.prototype.delete=function(r){delete this.map[R(r)]},d.prototype.get=function(r){return r=R(r),this.has(r)?this.map[r]:null},d.prototype.has=function(r){return this.map.hasOwnProperty(R(r))},d.prototype.set=function(r,s){this.map[R(r)]=F(s)},d.prototype.forEach=function(r,s){for(var f in this.map)this.map.hasOwnProperty(f)&&r.call(s,this.map[f],f,this)},d.prototype.keys=function(){var r=[];return this.forEach(function(s,f){r.push(f)}),S(r)},d.prototype.values=function(){var r=[];return this.forEach(function(s){r.push(s)}),S(r)},d.prototype.entries=function(){var r=[];return this.forEach(function(s,f){r.push([f,s])}),S(r)},l.iterable&&(d.prototype[Symbol.iterator]=d.prototype.entries);function B(r){if(r.bodyUsed)return Promise.reject(new TypeError("Already read"));r.bodyUsed=!0}function H(r){return new Promise(function(s,f){r.onload=function(){s(r.result)},r.onerror=function(){f(r.error)}})}function ye(r){var s=new FileReader,f=H(s);return s.readAsArrayBuffer(r),f}function ve(r){var s=new FileReader,f=H(s);return s.readAsText(r),f}function me(r){for(var s=new Uint8Array(r),f=new Array(s.length),y=0;y<s.length;y++)f[y]=String.fromCharCode(s[y]);return f.join("")}function J(r){if(r.slice)return r.slice(0);var s=new Uint8Array(r.byteLength);return s.set(new Uint8Array(r)),s.buffer}function q(){return this.bodyUsed=!1,this._initBody=function(r){this._bodyInit=r,r?typeof r=="string"?this._bodyText=r:l.blob&&Blob.prototype.isPrototypeOf(r)?this._bodyBlob=r:l.formData&&FormData.prototype.isPrototypeOf(r)?this._bodyFormData=r:l.searchParams&&URLSearchParams.prototype.isPrototypeOf(r)?this._bodyText=r.toString():l.arrayBuffer&&l.blob&&b(r)?(this._bodyArrayBuffer=J(r.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):l.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(r)||C(r))?this._bodyArrayBuffer=J(r):this._bodyText=r=Object.prototype.toString.call(r):this._bodyText="",this.headers.get("content-type")||(typeof r=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):l.searchParams&&URLSearchParams.prototype.isPrototypeOf(r)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},l.blob&&(this.blob=function(){var r=B(this);if(r)return r;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?B(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(ye)}),this.text=function(){var r=B(this);if(r)return r;if(this._bodyBlob)return ve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(me(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},l.formData&&(this.formData=function(){return this.text().then(Ee)}),this.json=function(){return this.text().then(JSON.parse)},this}var ge=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function be(r){var s=r.toUpperCase();return ge.indexOf(s)>-1?s:r}function E(r,s){s=s||{};var f=s.body;if(r instanceof E){if(r.bodyUsed)throw new TypeError("Already read");this.url=r.url,this.credentials=r.credentials,s.headers||(this.headers=new d(r.headers)),this.method=r.method,this.mode=r.mode,this.signal=r.signal,!f&&r._bodyInit!=null&&(f=r._bodyInit,r.bodyUsed=!0)}else this.url=String(r);if(this.credentials=s.credentials||this.credentials||"same-origin",(s.headers||!this.headers)&&(this.headers=new d(s.headers)),this.method=be(s.method||this.method||"GET"),this.mode=s.mode||this.mode||null,this.signal=s.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&f)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(f)}E.prototype.clone=function(){return new E(this,{body:this._bodyInit})};function Ee(r){var s=new FormData;return r.trim().split("&").forEach(function(f){if(f){var y=f.split("="),p=y.shift().replace(/\+/g," "),h=y.join("=").replace(/\+/g," ");s.append(decodeURIComponent(p),decodeURIComponent(h))}}),s}function we(r){var s=new d,f=r.replace(/\r?\n[\t ]+/g," ");return f.split(/\r?\n/).forEach(function(y){var p=y.split(":"),h=p.shift().trim();if(h){var T=p.join(":").trim();s.append(h,T)}}),s}q.call(E.prototype);function v(r,s){s||(s={}),this.type="default",this.status=s.status===void 0?200:s.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in s?s.statusText:"OK",this.headers=new d(s.headers),this.url=s.url||"",this._initBody(r)}q.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},v.error=function(){var r=new v(null,{status:0,statusText:""});return r.type="error",r};var _e=[301,302,303,307,308];v.redirect=function(r,s){if(_e.indexOf(s)===-1)throw new RangeError("Invalid status code");return new v(null,{status:s,headers:{location:r}})},c.DOMException=a.DOMException;try{new c.DOMException}catch{c.DOMException=function(s,f){this.message=s,this.name=f;var y=Error(s);this.stack=y.stack},c.DOMException.prototype=Object.create(Error.prototype),c.DOMException.prototype.constructor=c.DOMException}function j(r,s){return new Promise(function(f,y){var p=new E(r,s);if(p.signal&&p.signal.aborted)return y(new c.DOMException("Aborted","AbortError"));var h=new XMLHttpRequest;function T(){h.abort()}h.onload=function(){var L={status:h.status,statusText:h.statusText,headers:we(h.getAllResponseHeaders()||"")};L.url="responseURL"in h?h.responseURL:L.headers.get("X-Request-URL");var D="response"in h?h.response:h.responseText;f(new v(D,L))},h.onerror=function(){y(new TypeError("Network request failed"))},h.ontimeout=function(){y(new TypeError("Network request failed"))},h.onabort=function(){y(new c.DOMException("Aborted","AbortError"))},h.open(p.method,p.url,!0),p.credentials==="include"?h.withCredentials=!0:p.credentials==="omit"&&(h.withCredentials=!1),"responseType"in h&&l.blob&&(h.responseType="blob"),p.headers.forEach(function(L,D){h.setRequestHeader(D,L)}),p.signal&&(p.signal.addEventListener("abort",T),h.onreadystatechange=function(){h.readyState===4&&p.signal.removeEventListener("abort",T)}),h.send(typeof p._bodyInit>"u"?null:p._bodyInit)})}return j.polyfill=!0,a.fetch||(a.fetch=j,a.Headers=d,a.Request=E,a.Response=v),c.Headers=d,c.Request=E,c.Response=v,c.fetch=j,Object.defineProperty(c,"__esModule",{value:!0}),c})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var o=i;e=o.fetch,e.default=o.fetch,e.fetch=o.fetch,e.Headers=o.Headers,e.Request=o.Request,e.Response=o.Response,t.exports=e})(M,M.exports);var tt=M.exports;const z=Y(tt),nt={Accept:"application/json","Content-Type":"application/json"},rt="POST",Q={headers:nt,method:rt},Z=10;class lt{constructor(e,n=!1){if(this.url=e,this.disableProviderPing=n,this.events=new N.EventEmitter,this.isAvailable=!1,this.registering=!1,!X(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);this.url=e,this.disableProviderPing=n}get connected(){return this.isAvailable}get connecting(){return this.registering}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e=this.url){await this.register(e)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(e,n){this.isAvailable||await this.register();try{const i=k(e),a=await(await z(this.url,Object.assign(Object.assign({},Q),{body:i}))).json();this.onPayload({data:a})}catch(i){this.onError(e.id,i)}}async register(e=this.url){if(!X(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);if(this.registering){const n=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=n||this.events.listenerCount("open")>=n)&&this.events.setMaxListeners(n+1),new Promise((i,o)=>{this.events.once("register_error",a=>{this.resetMaxListeners(),o(a)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return o(new Error("HTTP connection is missing or invalid"));i()})})}this.url=e,this.registering=!0;try{if(!this.disableProviderPing){const n=k({id:1,jsonrpc:"2.0",method:"test",params:[]});await z(e,Object.assign(Object.assign({},Q),{body:n}))}this.onOpen()}catch(n){const i=this.parseError(n);throw this.events.emit("register_error",i),this.onClose(),i}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(e){if(typeof e.data>"u")return;const n=typeof e.data=="string"?Be(e.data):e.data;this.events.emit("payload",n)}onError(e,n){const i=this.parseError(n),o=i.message||i.toString(),a=Ge(e,o);this.events.emit("payload",a)}parseError(e,n=this.url){return He(e,n,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>Z&&this.events.setMaxListeners(Z)}}export{it as E,lt as H,at as I,ht as J,ft as a,Be as b,Je as c,ut as d,N as e,Ge as f,Ye as g,ot as h,ct as i,et as j,pe as k,ke as l,Ve as m,ue as n,He as p,k as s};
