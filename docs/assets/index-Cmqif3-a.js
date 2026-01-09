(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Pv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var td={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function VS(){if(Zg)return wo;Zg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return wo.Fragment=t,wo.jsx=i,wo.jsxs=i,wo}var Kg;function kS(){return Kg||(Kg=1,td.exports=VS()),td.exports}var F=kS(),nd={exports:{}},nt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function XS(){if(Qg)return nt;Qg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function E(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function v(L,X,H){this.props=L,this.context=X,this.refs=y,this.updater=H||b}v.prototype.isReactComponent={},v.prototype.setState=function(L,X){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,X,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function D(){}D.prototype=v.prototype;function A(L,X,H){this.props=L,this.context=X,this.refs=y,this.updater=H||b}var O=A.prototype=new D;O.constructor=A,M(O,v.prototype),O.isPureReactComponent=!0;var k=Array.isArray;function I(){}var P={H:null,A:null,T:null,S:null},pe=Object.prototype.hasOwnProperty;function C(L,X,H){var Y=H.ref;return{$$typeof:r,type:L,key:X,ref:Y!==void 0?Y:null,props:H}}function N(L,X){return C(L.type,X,L.props)}function ue(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function he(L){var X={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(H){return X[H]})}var Me=/\/+/g;function W(L,X){return typeof L=="object"&&L!==null&&L.key!=null?he(""+L.key):X.toString(36)}function ee(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(I,I):(L.status="pending",L.then(function(X){L.status==="pending"&&(L.status="fulfilled",L.value=X)},function(X){L.status==="pending"&&(L.status="rejected",L.reason=X)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function z(L,X,H,Y,_e){var Ee=typeof L;(Ee==="undefined"||Ee==="boolean")&&(L=null);var be=!1;if(L===null)be=!0;else switch(Ee){case"bigint":case"string":case"number":be=!0;break;case"object":switch(L.$$typeof){case r:case t:be=!0;break;case g:return be=L._init,z(be(L._payload),X,H,Y,_e)}}if(be)return _e=_e(L),be=Y===""?"."+W(L,0):Y,k(_e)?(H="",be!=null&&(H=be.replace(Me,"$&/")+"/"),z(_e,X,H,"",function(qe){return qe})):_e!=null&&(ue(_e)&&(_e=N(_e,H+(_e.key==null||L&&L.key===_e.key?"":(""+_e.key).replace(Me,"$&/")+"/")+be)),X.push(_e)),1;be=0;var He=Y===""?".":Y+":";if(k(L))for(var Pe=0;Pe<L.length;Pe++)Y=L[Pe],Ee=He+W(Y,Pe),be+=z(Y,X,H,Ee,_e);else if(Pe=E(L),typeof Pe=="function")for(L=Pe.call(L),Pe=0;!(Y=L.next()).done;)Y=Y.value,Ee=He+W(Y,Pe++),be+=z(Y,X,H,Ee,_e);else if(Ee==="object"){if(typeof L.then=="function")return z(ee(L),X,H,Y,_e);throw X=String(L),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return be}function j(L,X,H){if(L==null)return L;var Y=[],_e=0;return z(L,Y,"","",function(Ee){return X.call(H,Ee,_e++)}),Y}function Q(L){if(L._status===-1){var X=L._result;X=X(),X.then(function(H){(L._status===0||L._status===-1)&&(L._status=1,L._result=H)},function(H){(L._status===0||L._status===-1)&&(L._status=2,L._result=H)}),L._status===-1&&(L._status=0,L._result=X)}if(L._status===1)return L._result.default;throw L._result}var le=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},fe={map:j,forEach:function(L,X,H){j(L,function(){X.apply(this,arguments)},H)},count:function(L){var X=0;return j(L,function(){X++}),X},toArray:function(L){return j(L,function(X){return X})||[]},only:function(L){if(!ue(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return nt.Activity=_,nt.Children=fe,nt.Component=v,nt.Fragment=i,nt.Profiler=l,nt.PureComponent=A,nt.StrictMode=s,nt.Suspense=p,nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,nt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return P.H.useMemoCache(L)}},nt.cache=function(L){return function(){return L.apply(null,arguments)}},nt.cacheSignal=function(){return null},nt.cloneElement=function(L,X,H){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Y=M({},L.props),_e=L.key;if(X!=null)for(Ee in X.key!==void 0&&(_e=""+X.key),X)!pe.call(X,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&X.ref===void 0||(Y[Ee]=X[Ee]);var Ee=arguments.length-2;if(Ee===1)Y.children=H;else if(1<Ee){for(var be=Array(Ee),He=0;He<Ee;He++)be[He]=arguments[He+2];Y.children=be}return C(L.type,_e,Y)},nt.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},nt.createElement=function(L,X,H){var Y,_e={},Ee=null;if(X!=null)for(Y in X.key!==void 0&&(Ee=""+X.key),X)pe.call(X,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(_e[Y]=X[Y]);var be=arguments.length-2;if(be===1)_e.children=H;else if(1<be){for(var He=Array(be),Pe=0;Pe<be;Pe++)He[Pe]=arguments[Pe+2];_e.children=He}if(L&&L.defaultProps)for(Y in be=L.defaultProps,be)_e[Y]===void 0&&(_e[Y]=be[Y]);return C(L,Ee,_e)},nt.createRef=function(){return{current:null}},nt.forwardRef=function(L){return{$$typeof:d,render:L}},nt.isValidElement=ue,nt.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:Q}},nt.memo=function(L,X){return{$$typeof:m,type:L,compare:X===void 0?null:X}},nt.startTransition=function(L){var X=P.T,H={};P.T=H;try{var Y=L(),_e=P.S;_e!==null&&_e(H,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(I,le)}catch(Ee){le(Ee)}finally{X!==null&&H.types!==null&&(X.types=H.types),P.T=X}},nt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},nt.use=function(L){return P.H.use(L)},nt.useActionState=function(L,X,H){return P.H.useActionState(L,X,H)},nt.useCallback=function(L,X){return P.H.useCallback(L,X)},nt.useContext=function(L){return P.H.useContext(L)},nt.useDebugValue=function(){},nt.useDeferredValue=function(L,X){return P.H.useDeferredValue(L,X)},nt.useEffect=function(L,X){return P.H.useEffect(L,X)},nt.useEffectEvent=function(L){return P.H.useEffectEvent(L)},nt.useId=function(){return P.H.useId()},nt.useImperativeHandle=function(L,X,H){return P.H.useImperativeHandle(L,X,H)},nt.useInsertionEffect=function(L,X){return P.H.useInsertionEffect(L,X)},nt.useLayoutEffect=function(L,X){return P.H.useLayoutEffect(L,X)},nt.useMemo=function(L,X){return P.H.useMemo(L,X)},nt.useOptimistic=function(L,X){return P.H.useOptimistic(L,X)},nt.useReducer=function(L,X,H){return P.H.useReducer(L,X,H)},nt.useRef=function(L){return P.H.useRef(L)},nt.useState=function(L){return P.H.useState(L)},nt.useSyncExternalStore=function(L,X,H){return P.H.useSyncExternalStore(L,X,H)},nt.useTransition=function(){return P.H.useTransition()},nt.version="19.2.3",nt}var Jg;function eh(){return Jg||(Jg=1,nd.exports=XS()),nd.exports}var ce=eh();const WS=Pv(ce);var id={exports:{}},Lo={},ad={exports:{}},rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function jS(){return $g||($g=1,(function(r){function t(z,j){var Q=z.length;z.push(j);e:for(;0<Q;){var le=Q-1>>>1,fe=z[le];if(0<l(fe,j))z[le]=j,z[Q]=fe,Q=le;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var j=z[0],Q=z.pop();if(Q!==j){z[0]=Q;e:for(var le=0,fe=z.length,L=fe>>>1;le<L;){var X=2*(le+1)-1,H=z[X],Y=X+1,_e=z[Y];if(0>l(H,Q))Y<fe&&0>l(_e,H)?(z[le]=_e,z[Y]=Q,le=Y):(z[le]=H,z[X]=Q,le=X);else if(Y<fe&&0>l(_e,Q))z[le]=_e,z[Y]=Q,le=Y;else break e}}return j}function l(z,j){var Q=z.sortIndex-j.sortIndex;return Q!==0?Q:z.id-j.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,_=null,S=3,E=!1,b=!1,M=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function O(z){for(var j=i(m);j!==null;){if(j.callback===null)s(m);else if(j.startTime<=z)s(m),j.sortIndex=j.expirationTime,t(p,j);else break;j=i(m)}}function k(z){if(M=!1,O(z),!b)if(i(p)!==null)b=!0,I||(I=!0,he());else{var j=i(m);j!==null&&ee(k,j.startTime-z)}}var I=!1,P=-1,pe=5,C=-1;function N(){return y?!0:!(r.unstable_now()-C<pe)}function ue(){if(y=!1,I){var z=r.unstable_now();C=z;var j=!0;try{e:{b=!1,M&&(M=!1,D(P),P=-1),E=!0;var Q=S;try{t:{for(O(z),_=i(p);_!==null&&!(_.expirationTime>z&&N());){var le=_.callback;if(typeof le=="function"){_.callback=null,S=_.priorityLevel;var fe=le(_.expirationTime<=z);if(z=r.unstable_now(),typeof fe=="function"){_.callback=fe,O(z),j=!0;break t}_===i(p)&&s(p),O(z)}else s(p);_=i(p)}if(_!==null)j=!0;else{var L=i(m);L!==null&&ee(k,L.startTime-z),j=!1}}break e}finally{_=null,S=Q,E=!1}j=void 0}}finally{j?he():I=!1}}}var he;if(typeof A=="function")he=function(){A(ue)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,W=Me.port2;Me.port1.onmessage=ue,he=function(){W.postMessage(null)}}else he=function(){v(ue,0)};function ee(z,j){P=v(function(){z(r.unstable_now())},j)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pe=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(z){switch(S){case 1:case 2:case 3:var j=3;break;default:j=S}var Q=S;S=j;try{return z()}finally{S=Q}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=S;S=z;try{return j()}finally{S=Q}},r.unstable_scheduleCallback=function(z,j,Q){var le=r.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?le+Q:le):Q=le,z){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Q+fe,z={id:g++,callback:j,priorityLevel:z,startTime:Q,expirationTime:fe,sortIndex:-1},Q>le?(z.sortIndex=Q,t(m,z),i(p)===null&&z===i(m)&&(M?(D(P),P=-1):M=!0,ee(k,Q-le))):(z.sortIndex=fe,t(p,z),b||E||(b=!0,I||(I=!0,he()))),z},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(z){var j=S;return function(){var Q=S;S=j;try{return z.apply(this,arguments)}finally{S=Q}}}})(rd)),rd}var e_;function qS(){return e_||(e_=1,ad.exports=jS()),ad.exports}var sd={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function YS(){if(t_)return bn;t_=1;var r=eh();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,bn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},bn.flushSync=function(p){var m=h.T,g=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=m,s.p=g,s.d.f()}},bn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},bn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},bn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,E=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:E}):g==="script"&&s.d.X(p,{crossOrigin:_,integrity:S,fetchPriority:E,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},bn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},bn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},bn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},bn.requestFormReset=function(p){s.d.r(p)},bn.unstable_batchedUpdates=function(p,m){return p(m)},bn.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.2.3",bn}var n_;function ZS(){if(n_)return sd.exports;n_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),sd.exports=YS(),sd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function KS(){if(i_)return Lo;i_=1;var r=qS(),t=eh(),i=ZS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),e;if(f===o)return p(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var x=!1,T=u.child;T;){if(T===a){x=!0,a=u,o=f;break}if(T===o){x=!0,o=u,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,o=u;break}if(T===o){x=!0,o=f,a=u;break}T=T.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),A=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),ue=Symbol.iterator;function he(e){return e===null||typeof e!="object"?null:(e=ue&&e[ue]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Symbol.for("react.client.reference");function W(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Me?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case k:return"Suspense";case I:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case A:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:W(e.type)||"Memo";case pe:n=e._payload,e=e._init;try{return W(e(n))}catch{}}return null}var ee=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},le=[],fe=-1;function L(e){return{current:e}}function X(e){0>fe||(e.current=le[fe],le[fe]=null,fe--)}function H(e,n){fe++,le[fe]=e.current,e.current=n}var Y=L(null),_e=L(null),Ee=L(null),be=L(null);function He(e,n){switch(H(Ee,n),H(_e,e),H(Y,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?vg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=vg(n),e=xg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(Y),H(Y,e)}function Pe(){X(Y),X(_e),X(Ee)}function qe(e){e.memoizedState!==null&&H(be,e);var n=Y.current,a=xg(n,e.type);n!==a&&(H(_e,e),H(Y,a))}function ft(e){_e.current===e&&(X(Y),X(_e)),be.current===e&&(X(be),To._currentValue=Q)}var te,un;function Ge(e){if(te===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);te=n&&n[1]||"",un=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+te+e+un}var $e=!1;function Ie(e,n){if(!e||$e)return"";$e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(se){var $=se}Reflect.construct(e,[],ge)}else{try{ge.call()}catch(se){$=se}e.call(ge.prototype)}}else{try{throw Error()}catch(se){$=se}(ge=e())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(se){if(se&&$&&typeof se.stack=="string")return[se.stack,$.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var B=x.split(`
`),J=T.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===J.length)for(o=B.length-1,u=J.length-1;1<=o&&0<=u&&B[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==J[u]){var de=`
`+B[o].replace(" at new "," at ");return e.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",e.displayName)),de}while(1<=o&&0<=u);break}}}finally{$e=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ge(a):""}function It(e,n){switch(e.tag){case 26:case 27:case 5:return Ge(e.type);case 16:return Ge("Lazy");case 13:return e.child!==n&&n!==null?Ge("Suspense Fallback"):Ge("Suspense");case 19:return Ge("SuspenseList");case 0:case 15:return Ie(e.type,!1);case 11:return Ie(e.type.render,!1);case 1:return Ie(e.type,!0);case 31:return Ge("Activity");default:return""}}function it(e){try{var n="",a=null;do n+=It(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var U=Object.prototype.hasOwnProperty,R=r.unstable_scheduleCallback,ie=r.unstable_cancelCallback,ye=r.unstable_shouldYield,Se=r.unstable_requestPaint,ve=r.unstable_now,Ve=r.unstable_getCurrentPriorityLevel,we=r.unstable_ImmediatePriority,Oe=r.unstable_UserBlockingPriority,Ye=r.unstable_NormalPriority,rt=r.unstable_LowPriority,xe=r.unstable_IdlePriority,Mt=r.log,ut=r.unstable_setDisableYieldValue,Je=null,Ue=null;function De(e){if(typeof Mt=="function"&&ut(e),Ue&&typeof Ue.setStrictMode=="function")try{Ue.setStrictMode(Je,e)}catch{}}var We=Math.clz32?Math.clz32:ot,yt=Math.log,Vt=Math.LN2;function ot(e){return e>>>=0,e===0?32:31-(yt(e)/Vt|0)|0}var Te=256,G=262144,Ce=4194304;function Ae(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ke(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=Ae(o):(x&=T,x!==0?u=Ae(x):a||(a=T&~e,a!==0&&(u=Ae(a))))):(T=o&~f,T!==0?u=Ae(T):x!==0?u=Ae(x):a||(a=o&~e,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ke(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function wt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(){var e=Ce;return Ce<<=1,(Ce&62914560)===0&&(Ce=4194304),e}function Wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Yt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lt(e,n,a,o,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,B=e.expirationTimes,J=e.hiddenUpdates;for(a=x&~a;0<a;){var de=31-We(a),ge=1<<de;T[de]=0,B[de]=-1;var $=J[de];if($!==null)for(J[de]=null,de=0;de<$.length;de++){var se=$[de];se!==null&&(se.lane&=-536870913)}a&=~ge}o!==0&&fn(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function fn(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-We(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function kn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-We(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Os(e,n){var a=n&-n;return a=(a&42)!==0?1:Ps(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ps(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ca(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zs(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:Vg(e.type))}function Ka(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var pi=Math.random().toString(36).slice(2),Qt="__reactFiber$"+pi,En="__reactProps$"+pi,ua="__reactContainer$"+pi,Bs="__reactEvents$"+pi,w="__reactListeners$"+pi,Z="__reactHandles$"+pi,ae="__reactResources$"+pi,re="__reactMarker$"+pi;function ne(e){delete e[Qt],delete e[En],delete e[Bs],delete e[w],delete e[Z]}function Le(e){var n=e[Qt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ua]||a[Qt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ag(e);e!==null;){if(a=e[Qt])return a;e=Ag(e)}return n}e=a,a=e.parentNode}return null}function ze(e){if(e=e[Qt]||e[ua]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function je(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ze(e){var n=e[ae];return n||(n=e[ae]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Fe(e){e[re]=!0}var et=new Set,tt={};function Tt(e,n){Jt(e,n),Jt(e+"Capture",n)}function Jt(e,n){for(tt[e]=n,e=0;e<n.length;e++)et.add(n[e])}var $t=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$n={},Bt={};function lt(e){return U.call(Bt,e)?!0:U.call($n,e)?!1:$t.test(e)?Bt[e]=!0:($n[e]=!0,!1)}function fa(e,n,a){if(lt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Pt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function mn(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Rn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function da(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Is(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function en(e){if(!e._valueTracker){var n=da(e)?"checked":"value";e._valueTracker=Is(e,n,""+e[n])}}function Ti(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=da(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dn=/[\n"\\]/g;function Mn(e){return e.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fs(e,n,a,o,u,f,x,T){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Rn(n)):e.value!==""+Rn(n)&&(e.value=""+Rn(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Zc(e,x,Rn(n)):a!=null?Zc(e,x,Rn(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Rn(T):e.removeAttribute("name")}function Hs(e,n,a,o,u,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){en(e);return}a=a!=null?""+Rn(a):"",n=n!=null?""+Rn(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),en(e)}function Zc(e,n,a){n==="number"&&ha(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Cr(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Rn(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function hh(e,n,a){if(n!=null&&(n=""+Rn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Rn(a):""}function ph(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ee(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Rn(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),en(e)}function wr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var B0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mh(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||B0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function gh(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&mh(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&mh(e,f,n[f])}function Kc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var I0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),F0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(e){return F0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ni(){}var Qc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lr=null,Dr=null;function _h(e){var n=ze(e);if(n&&(e=n.stateNode)){var a=e[En]||null;e:switch(e=n.stateNode,n.type){case"input":if(Fs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[En]||null;if(!u)throw Error(s(90));Fs(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ti(o)}break e;case"textarea":hh(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Cr(e,!!a.multiple,n,!1)}}}var $c=!1;function vh(e,n,a){if($c)return e(n,a);$c=!0;try{var o=e(n);return o}finally{if($c=!1,(Lr!==null||Dr!==null)&&(Il(),Lr&&(n=Lr,e=Dr,Dr=Lr=null,_h(n),e)))for(n=0;n<e.length;n++)_h(e[n])}}function Gs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=!1;if(Oi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){eu=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{eu=!1}var pa=null,tu=null,Jo=null;function xh(){if(Jo)return Jo;var e,n=tu,a=n.length,o,u="value"in pa?pa.value:pa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[f-o];o++);return Jo=u.slice(e,1<o?1-o:void 0)}function $o(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function Sh(){return!1}function Un(e){function n(a,o,u,f,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:Sh,this.isPropagationStopped=Sh,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Un(Qa),ks=_({},Qa,{view:0,detail:0}),H0=Un(ks),nu,iu,Xs,nl=_({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xs&&(Xs&&e.type==="mousemove"?(nu=e.screenX-Xs.screenX,iu=e.screenY-Xs.screenY):iu=nu=0,Xs=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),yh=Un(nl),G0=_({},nl,{dataTransfer:0}),V0=Un(G0),k0=_({},ks,{relatedTarget:0}),au=Un(k0),X0=_({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),W0=Un(X0),j0=_({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),q0=Un(j0),Y0=_({},Qa,{data:0}),Eh=Un(Y0),Z0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Q0[e])?!!n[e]:!1}function ru(){return J0}var $0=_({},ks,{key:function(e){if(e.key){var n=Z0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?K0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ex=Un($0),tx=_({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mh=Un(tx),nx=_({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),ix=Un(nx),ax=_({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),rx=Un(ax),sx=_({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ox=Un(sx),lx=_({},Qa,{newState:0,oldState:0}),cx=Un(lx),ux=[9,13,27,32],su=Oi&&"CompositionEvent"in window,Ws=null;Oi&&"documentMode"in document&&(Ws=document.documentMode);var fx=Oi&&"TextEvent"in window&&!Ws,bh=Oi&&(!su||Ws&&8<Ws&&11>=Ws),Th=" ",Ah=!1;function Rh(e,n){switch(e){case"keyup":return ux.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ch(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function dx(e,n){switch(e){case"compositionend":return Ch(n);case"keypress":return n.which!==32?null:(Ah=!0,Th);case"textInput":return e=n.data,e===Th&&Ah?null:e;default:return null}}function hx(e,n){if(Ur)return e==="compositionend"||!su&&Rh(e,n)?(e=xh(),Jo=tu=pa=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bh&&n.locale!=="ko"?null:n.data;default:return null}}var px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!px[e.type]:n==="textarea"}function Lh(e,n,a,o){Lr?Dr?Dr.push(o):Dr=[o]:Lr=o,n=Wl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var js=null,qs=null;function mx(e){dg(e,0)}function il(e){var n=je(e);if(Ti(n))return e}function Dh(e,n){if(e==="change")return n}var Uh=!1;if(Oi){var ou;if(Oi){var lu="oninput"in document;if(!lu){var Nh=document.createElement("div");Nh.setAttribute("oninput","return;"),lu=typeof Nh.oninput=="function"}ou=lu}else ou=!1;Uh=ou&&(!document.documentMode||9<document.documentMode)}function Oh(){js&&(js.detachEvent("onpropertychange",Ph),qs=js=null)}function Ph(e){if(e.propertyName==="value"&&il(qs)){var n=[];Lh(n,qs,e,Jc(e)),vh(mx,n)}}function gx(e,n,a){e==="focusin"?(Oh(),js=n,qs=a,js.attachEvent("onpropertychange",Ph)):e==="focusout"&&Oh()}function _x(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(qs)}function vx(e,n){if(e==="click")return il(n)}function xx(e,n){if(e==="input"||e==="change")return il(n)}function Sx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xn=typeof Object.is=="function"?Object.is:Sx;function Ys(e,n){if(Xn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!U.call(n,u)||!Xn(e[u],n[u]))return!1}return!0}function zh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bh(e,n){var a=zh(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zh(a)}}function Ih(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ih(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Fh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ha(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ha(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var yx=Oi&&"documentMode"in document&&11>=document.documentMode,Nr=null,uu=null,Zs=null,fu=!1;function Hh(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Nr==null||Nr!==ha(o)||(o=Nr,"selectionStart"in o&&cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zs&&Ys(Zs,o)||(Zs=o,o=Wl(uu,"onSelect"),0<o.length&&(n=new tl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Nr)))}function Ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Or={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},du={},Gh={};Oi&&(Gh=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function $a(e){if(du[e])return du[e];if(!Or[e])return e;var n=Or[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Gh)return du[e]=n[a];return e}var Vh=$a("animationend"),kh=$a("animationiteration"),Xh=$a("animationstart"),Ex=$a("transitionrun"),Mx=$a("transitionstart"),bx=$a("transitioncancel"),Wh=$a("transitionend"),jh=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function mi(e,n){jh.set(e,n),Tt(n,[e])}var al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ei=[],Pr=0,pu=0;function rl(){for(var e=Pr,n=pu=Pr=0;n<e;){var a=ei[n];ei[n++]=null;var o=ei[n];ei[n++]=null;var u=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&qh(a,u,f)}}function sl(e,n,a,o){ei[Pr++]=e,ei[Pr++]=n,ei[Pr++]=a,ei[Pr++]=o,pu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function mu(e,n,a,o){return sl(e,n,a,o),ol(e)}function er(e,n){return sl(e,null,null,n),ol(e)}function qh(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-We(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function ol(e){if(50<vo)throw vo=0,Tf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function Tx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,n,a,o){return new Tx(e,n,a,o)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pi(e,n){var a=e.alternate;return a===null?(a=Wn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Yh(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ll(e,n,a,o,u,f){var x=0;if(o=e,typeof e=="function")gu(e)&&(x=1);else if(typeof e=="string")x=LS(e,a,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case C:return e=Wn(31,a,n,u),e.elementType=C,e.lanes=f,e;case M:return tr(a.children,u,f,n);case y:x=8,u|=24;break;case v:return e=Wn(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case k:return e=Wn(13,a,n,u),e.elementType=k,e.lanes=f,e;case I:return e=Wn(19,a,n,u),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:x=10;break e;case D:x=9;break e;case O:x=11;break e;case P:x=14;break e;case pe:x=16,o=null;break e}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Wn(x,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function tr(e,n,a,o){return e=Wn(7,e,o,n),e.lanes=a,e}function _u(e,n,a){return e=Wn(6,e,null,n),e.lanes=a,e}function Zh(e){var n=Wn(18,null,null,0);return n.stateNode=e,n}function vu(e,n,a){return n=Wn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Kh=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=Kh.get(e);return a!==void 0?a:(n={value:e,source:n,stack:it(n)},Kh.set(e,n),n)}return{value:e,source:n,stack:it(n)}}var Br=[],Ir=0,cl=null,Ks=0,ni=[],ii=0,ma=null,Ai=1,Ri="";function zi(e,n){Br[Ir++]=Ks,Br[Ir++]=cl,cl=e,Ks=n}function Qh(e,n,a){ni[ii++]=Ai,ni[ii++]=Ri,ni[ii++]=ma,ma=e;var o=Ai;e=Ri;var u=32-We(o)-1;o&=~(1<<u),a+=1;var f=32-We(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Ai=1<<32-We(n)+u|a<<u|o,Ri=f+e}else Ai=1<<f|a<<u|o,Ri=e}function xu(e){e.return!==null&&(zi(e,1),Qh(e,1,0))}function Su(e){for(;e===cl;)cl=Br[--Ir],Br[Ir]=null,Ks=Br[--Ir],Br[Ir]=null;for(;e===ma;)ma=ni[--ii],ni[ii]=null,Ri=ni[--ii],ni[ii]=null,Ai=ni[--ii],ni[ii]=null}function Jh(e,n){ni[ii++]=Ai,ni[ii++]=Ri,ni[ii++]=ma,Ai=n.id,Ri=n.overflow,ma=e}var gn=null,Ft=null,_t=!1,ga=null,ai=!1,yu=Error(s(519));function _a(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qs(ti(n,e)),yu}function $h(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Qt]=e,n[En]=o,a){case"dialog":pt("cancel",n),pt("close",n);break;case"iframe":case"object":case"embed":pt("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)pt(So[a],n);break;case"source":pt("error",n);break;case"img":case"image":case"link":pt("error",n),pt("load",n);break;case"details":pt("toggle",n);break;case"input":pt("invalid",n),Hs(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":pt("invalid",n);break;case"textarea":pt("invalid",n),ph(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||gg(n.textContent,a)?(o.popover!=null&&(pt("beforetoggle",n),pt("toggle",n)),o.onScroll!=null&&pt("scroll",n),o.onScrollEnd!=null&&pt("scrollend",n),o.onClick!=null&&(n.onclick=Ni),n=!0):n=!1,n||_a(e,!0)}function ep(e){for(gn=e.return;gn;)switch(gn.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:gn=gn.return}}function Fr(e){if(e!==gn)return!1;if(!_t)return ep(e),_t=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hf(e.type,e.memoizedProps)),a=!a),a&&Ft&&_a(e),ep(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ft=Tg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ft=Tg(e)}else n===27?(n=Ft,Da(e.type)?(e=Wf,Wf=null,Ft=e):Ft=n):Ft=gn?si(e.stateNode.nextSibling):null;return!0}function nr(){Ft=gn=null,_t=!1}function Eu(){var e=ga;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),ga=null),e}function Qs(e){ga===null?ga=[e]:ga.push(e)}var Mu=L(null),ir=null,Bi=null;function va(e,n,a){H(Mu,n._currentValue),n._currentValue=a}function Ii(e){e._currentValue=Mu.current,X(Mu)}function bu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Tu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),bu(f.return,a,e),o||(x=null);break e}f=T.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),bu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Hr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var T=u.type;Xn(u.pendingProps.value,x.value)||(e!==null?e.push(T):e=[T])}}else if(u===be.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}u=u.return}e!==null&&Tu(n,e,a,o),n.flags|=262144}function ul(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ar(e){ir=e,Bi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _n(e){return tp(ir,e)}function fl(e,n){return ir===null&&ar(e),tp(e,n)}function tp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(e===null)throw Error(s(308));Bi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Bi=Bi.next=n;return a}var Ax=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Rx=r.unstable_scheduleCallback,Cx=r.unstable_NormalPriority,tn={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new Ax,data:new Map,refCount:0}}function Js(e){e.refCount--,e.refCount===0&&Rx(Cx,function(){e.controller.abort()})}var $s=null,Ru=0,Gr=0,Vr=null;function wx(e,n){if($s===null){var a=$s=[];Ru=0,Gr=Df(),Vr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ru++,n.then(np,np),n}function np(){if(--Ru===0&&$s!==null){Vr!==null&&(Vr.status="fulfilled");var e=$s;$s=null,Gr=0,Vr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Lx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var ip=z.S;z.S=function(e,n){Hm=ve(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&wx(e,n),ip!==null&&ip(e,n)};var rr=L(null);function Cu(){var e=rr.current;return e!==null?e:zt.pooledCache}function dl(e,n){n===null?H(rr,rr.current):H(rr,n.pool)}function ap(){var e=Cu();return e===null?null:{parent:tn._currentValue,pool:e}}var kr=Error(s(460)),wu=Error(s(474)),hl=Error(s(542)),pl={then:function(){}};function rp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ni,Ni),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,lp(e),e;default:if(typeof n.status=="string")n.then(Ni,Ni);else{if(e=zt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,lp(e),e}throw or=n,kr}}function sr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(or=a,kr):a}}var or=null;function op(){if(or===null)throw Error(s(459));var e=or;return or=null,e}function lp(e){if(e===kr||e===hl)throw Error(s(483))}var Xr=null,eo=0;function ml(e){var n=eo;return eo+=1,Xr===null&&(Xr=[]),sp(Xr,e,n)}function to(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function gl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function cp(e){function n(q,V){if(e){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function a(q,V){if(!e)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function o(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function u(q,V){return q=Pi(q,V),q.index=0,q.sibling=null,q}function f(q,V,K){return q.index=K,e?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=67108866,V):K):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function x(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,V,K,me){return V===null||V.tag!==6?(V=_u(K,q.mode,me),V.return=q,V):(V=u(V,K),V.return=q,V)}function B(q,V,K,me){var Xe=K.type;return Xe===M?de(q,V,K.props.children,me,K.key):V!==null&&(V.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===pe&&sr(Xe)===V.type)?(V=u(V,K.props),to(V,K),V.return=q,V):(V=ll(K.type,K.key,K.props,null,q.mode,me),to(V,K),V.return=q,V)}function J(q,V,K,me){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=vu(K,q.mode,me),V.return=q,V):(V=u(V,K.children||[]),V.return=q,V)}function de(q,V,K,me,Xe){return V===null||V.tag!==7?(V=tr(K,q.mode,me,Xe),V.return=q,V):(V=u(V,K),V.return=q,V)}function ge(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=_u(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return K=ll(V.type,V.key,V.props,null,q.mode,K),to(K,V),K.return=q,K;case b:return V=vu(V,q.mode,K),V.return=q,V;case pe:return V=sr(V),ge(q,V,K)}if(ee(V)||he(V))return V=tr(V,q.mode,K,null),V.return=q,V;if(typeof V.then=="function")return ge(q,ml(V),K);if(V.$$typeof===A)return ge(q,fl(q,V),K);gl(q,V)}return null}function $(q,V,K,me){var Xe=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Xe!==null?null:T(q,V,""+K,me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return K.key===Xe?B(q,V,K,me):null;case b:return K.key===Xe?J(q,V,K,me):null;case pe:return K=sr(K),$(q,V,K,me)}if(ee(K)||he(K))return Xe!==null?null:de(q,V,K,me,null);if(typeof K.then=="function")return $(q,V,ml(K),me);if(K.$$typeof===A)return $(q,V,fl(q,K),me);gl(q,K)}return null}function se(q,V,K,me,Xe){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return q=q.get(K)||null,T(V,q,""+me,Xe);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case E:return q=q.get(me.key===null?K:me.key)||null,B(V,q,me,Xe);case b:return q=q.get(me.key===null?K:me.key)||null,J(V,q,me,Xe);case pe:return me=sr(me),se(q,V,K,me,Xe)}if(ee(me)||he(me))return q=q.get(K)||null,de(V,q,me,Xe,null);if(typeof me.then=="function")return se(q,V,K,ml(me),Xe);if(me.$$typeof===A)return se(q,V,K,fl(V,me),Xe);gl(V,me)}return null}function Ne(q,V,K,me){for(var Xe=null,xt=null,Be=V,st=V=0,gt=null;Be!==null&&st<K.length;st++){Be.index>st?(gt=Be,Be=null):gt=Be.sibling;var St=$(q,Be,K[st],me);if(St===null){Be===null&&(Be=gt);break}e&&Be&&St.alternate===null&&n(q,Be),V=f(St,V,st),xt===null?Xe=St:xt.sibling=St,xt=St,Be=gt}if(st===K.length)return a(q,Be),_t&&zi(q,st),Xe;if(Be===null){for(;st<K.length;st++)Be=ge(q,K[st],me),Be!==null&&(V=f(Be,V,st),xt===null?Xe=Be:xt.sibling=Be,xt=Be);return _t&&zi(q,st),Xe}for(Be=o(Be);st<K.length;st++)gt=se(Be,q,st,K[st],me),gt!==null&&(e&&gt.alternate!==null&&Be.delete(gt.key===null?st:gt.key),V=f(gt,V,st),xt===null?Xe=gt:xt.sibling=gt,xt=gt);return e&&Be.forEach(function(za){return n(q,za)}),_t&&zi(q,st),Xe}function Qe(q,V,K,me){if(K==null)throw Error(s(151));for(var Xe=null,xt=null,Be=V,st=V=0,gt=null,St=K.next();Be!==null&&!St.done;st++,St=K.next()){Be.index>st?(gt=Be,Be=null):gt=Be.sibling;var za=$(q,Be,St.value,me);if(za===null){Be===null&&(Be=gt);break}e&&Be&&za.alternate===null&&n(q,Be),V=f(za,V,st),xt===null?Xe=za:xt.sibling=za,xt=za,Be=gt}if(St.done)return a(q,Be),_t&&zi(q,st),Xe;if(Be===null){for(;!St.done;st++,St=K.next())St=ge(q,St.value,me),St!==null&&(V=f(St,V,st),xt===null?Xe=St:xt.sibling=St,xt=St);return _t&&zi(q,st),Xe}for(Be=o(Be);!St.done;st++,St=K.next())St=se(Be,q,st,St.value,me),St!==null&&(e&&St.alternate!==null&&Be.delete(St.key===null?st:St.key),V=f(St,V,st),xt===null?Xe=St:xt.sibling=St,xt=St);return e&&Be.forEach(function(GS){return n(q,GS)}),_t&&zi(q,st),Xe}function Nt(q,V,K,me){if(typeof K=="object"&&K!==null&&K.type===M&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case E:e:{for(var Xe=K.key;V!==null;){if(V.key===Xe){if(Xe=K.type,Xe===M){if(V.tag===7){a(q,V.sibling),me=u(V,K.props.children),me.return=q,q=me;break e}}else if(V.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===pe&&sr(Xe)===V.type){a(q,V.sibling),me=u(V,K.props),to(me,K),me.return=q,q=me;break e}a(q,V);break}else n(q,V);V=V.sibling}K.type===M?(me=tr(K.props.children,q.mode,me,K.key),me.return=q,q=me):(me=ll(K.type,K.key,K.props,null,q.mode,me),to(me,K),me.return=q,q=me)}return x(q);case b:e:{for(Xe=K.key;V!==null;){if(V.key===Xe)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(q,V.sibling),me=u(V,K.children||[]),me.return=q,q=me;break e}else{a(q,V);break}else n(q,V);V=V.sibling}me=vu(K,q.mode,me),me.return=q,q=me}return x(q);case pe:return K=sr(K),Nt(q,V,K,me)}if(ee(K))return Ne(q,V,K,me);if(he(K)){if(Xe=he(K),typeof Xe!="function")throw Error(s(150));return K=Xe.call(K),Qe(q,V,K,me)}if(typeof K.then=="function")return Nt(q,V,ml(K),me);if(K.$$typeof===A)return Nt(q,V,fl(q,K),me);gl(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(q,V.sibling),me=u(V,K),me.return=q,q=me):(a(q,V),me=_u(K,q.mode,me),me.return=q,q=me),x(q)):a(q,V)}return function(q,V,K,me){try{eo=0;var Xe=Nt(q,V,K,me);return Xr=null,Xe}catch(Be){if(Be===kr||Be===hl)throw Be;var xt=Wn(29,Be,null,q.mode);return xt.lanes=me,xt.return=q,xt}finally{}}}var lr=cp(!0),up=cp(!1),xa=!1;function Lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Et&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ol(e),qh(e,null,a),n}return sl(e,o,n,a),ol(e)}function no(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,kn(e,a)}}function Uu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Nu=!1;function io(){if(Nu){var e=Vr;if(e!==null)throw e}}function ao(e,n,a,o){Nu=!1;var u=e.updateQueue;xa=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,J=B.next;B.next=null,x===null?f=J:x.next=J,x=B;var de=e.alternate;de!==null&&(de=de.updateQueue,T=de.lastBaseUpdate,T!==x&&(T===null?de.firstBaseUpdate=J:T.next=J,de.lastBaseUpdate=B))}if(f!==null){var ge=u.baseState;x=0,de=J=B=null,T=f;do{var $=T.lane&-536870913,se=$!==T.lane;if(se?(mt&$)===$:(o&$)===$){$!==0&&$===Gr&&(Nu=!0),de!==null&&(de=de.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ne=e,Qe=T;$=n;var Nt=a;switch(Qe.tag){case 1:if(Ne=Qe.payload,typeof Ne=="function"){ge=Ne.call(Nt,ge,$);break e}ge=Ne;break e;case 3:Ne.flags=Ne.flags&-65537|128;case 0:if(Ne=Qe.payload,$=typeof Ne=="function"?Ne.call(Nt,ge,$):Ne,$==null)break e;ge=_({},ge,$);break e;case 2:xa=!0}}$=T.callback,$!==null&&(e.flags|=64,se&&(e.flags|=8192),se=u.callbacks,se===null?u.callbacks=[$]:se.push($))}else se={lane:$,tag:T.tag,payload:T.payload,callback:T.callback,next:null},de===null?(J=de=se,B=ge):de=de.next=se,x|=$;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;se=T,T=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);de===null&&(B=ge),u.baseState=B,u.firstBaseUpdate=J,u.lastBaseUpdate=de,f===null&&(u.shared.lanes=0),Aa|=x,e.lanes=x,e.memoizedState=ge}}function fp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function dp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fp(a[e],n)}var Wr=L(null),_l=L(0);function hp(e,n){e=qi,H(_l,e),H(Wr,n),qi=e|n.baseLanes}function Ou(){H(_l,qi),H(Wr,Wr.current)}function Pu(){qi=_l.current,X(Wr),X(_l)}var jn=L(null),ri=null;function Ea(e){var n=e.alternate;H(Zt,Zt.current&1),H(jn,e),ri===null&&(n===null||Wr.current!==null||n.memoizedState!==null)&&(ri=e)}function zu(e){H(Zt,Zt.current),H(jn,e),ri===null&&(ri=e)}function pp(e){e.tag===22?(H(Zt,Zt.current),H(jn,e),ri===null&&(ri=e)):Ma()}function Ma(){H(Zt,Zt.current),H(jn,jn.current)}function qn(e){X(jn),ri===e&&(ri=null),X(Zt)}var Zt=L(0);function vl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kf(a)||Xf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fi=0,at=null,Dt=null,nn=null,xl=!1,jr=!1,cr=!1,Sl=0,ro=0,qr=null,Dx=0;function jt(){throw Error(s(321))}function Bu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Xn(e[a],n[a]))return!1;return!0}function Iu(e,n,a,o,u,f){return Fi=f,at=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Qp:$u,cr=!1,f=a(o,u),cr=!1,jr&&(f=gp(n,a,o,u)),mp(e),f}function mp(e){z.H=lo;var n=Dt!==null&&Dt.next!==null;if(Fi=0,nn=Dt=at=null,xl=!1,ro=0,qr=null,n)throw Error(s(300));e===null||an||(e=e.dependencies,e!==null&&ul(e)&&(an=!0))}function gp(e,n,a,o){at=e;var u=0;do{if(jr&&(qr=null),ro=0,jr=!1,25<=u)throw Error(s(301));if(u+=1,nn=Dt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Jp,f=n(a,o)}while(jr);return f}function Ux(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?so(n):n,e=e.useState()[0],(Dt!==null?Dt.memoizedState:null)!==e&&(at.flags|=1024),n}function Fu(){var e=Sl!==0;return Sl=0,e}function Hu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Gu(e){if(xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xl=!1}Fi=0,nn=Dt=at=null,jr=!1,ro=Sl=0,qr=null}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?at.memoizedState=nn=e:nn=nn.next=e,nn}function Kt(){if(Dt===null){var e=at.alternate;e=e!==null?e.memoizedState:null}else e=Dt.next;var n=nn===null?at.memoizedState:nn.next;if(n!==null)nn=n,Dt=e;else{if(e===null)throw at.alternate===null?Error(s(467)):Error(s(310));Dt=e,e={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},nn===null?at.memoizedState=nn=e:nn=nn.next=e}return nn}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(e){var n=ro;return ro+=1,qr===null&&(qr=[]),e=sp(qr,e,n),n=at,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Qp:$u),e}function El(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return so(e);if(e.$$typeof===A)return _n(e)}throw Error(s(438,String(e)))}function Vu(e){var n=null,a=at.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=at.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yl(),at.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=N;return n.index++,a}function Hi(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=Kt();return ku(n,Dt,e)}function ku(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=x=null,B=null,J=n,de=!1;do{var ge=J.lane&-536870913;if(ge!==J.lane?(mt&ge)===ge:(Fi&ge)===ge){var $=J.revertLane;if($===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ge===Gr&&(de=!0);else if((Fi&$)===$){J=J.next,$===Gr&&(de=!0);continue}else ge={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=ge,x=f):B=B.next=ge,at.lanes|=$,Aa|=$;ge=J.action,cr&&a(f,ge),f=J.hasEagerState?J.eagerState:a(f,ge)}else $={lane:ge,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=$,x=f):B=B.next=$,at.lanes|=ge,Aa|=ge;J=J.next}while(J!==null&&J!==n);if(B===null?x=f:B.next=T,!Xn(f,e.memoizedState)&&(an=!0,de&&(a=Vr,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Xu(e){var n=Kt(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);Xn(f,n.memoizedState)||(an=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function _p(e,n,a){var o=at,u=Kt(),f=_t;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Xn((Dt||u).memoizedState,a);if(x&&(u.memoizedState=a,an=!0),u=u.queue,qu(Sp.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Yr(9,{destroy:void 0},xp.bind(null,o,u,a,n),null),zt===null)throw Error(s(349));f||(Fi&127)!==0||vp(o,n,a)}return a}function vp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=at.updateQueue,n===null?(n=yl(),at.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function xp(e,n,a,o){n.value=a,n.getSnapshot=o,yp(n)&&Ep(e)}function Sp(e,n,a){return a(function(){yp(n)&&Ep(e)})}function yp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Xn(e,a)}catch{return!0}}function Ep(e){var n=er(e,2);n!==null&&Bn(n,e,2)}function Wu(e){var n=Cn();if(typeof e=="function"){var a=e;if(e=a(),cr){De(!0);try{a()}finally{De(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},n}function Mp(e,n,a,o){return e.baseState=a,ku(e,Dt,typeof o=="function"?o:Hi)}function Nx(e,n,a,o,u){if(Al(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,bp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function bp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=z.T,x={};z.T=x;try{var T=a(u,o),B=z.S;B!==null&&B(x,T),Tp(e,n,T)}catch(J){ju(e,n,J)}finally{f!==null&&x.types!==null&&(f.types=x.types),z.T=f}}else try{f=a(u,o),Tp(e,n,f)}catch(J){ju(e,n,J)}}function Tp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Ap(e,n,o)},function(o){return ju(e,n,o)}):Ap(e,n,a)}function Ap(e,n,a){n.status="fulfilled",n.value=a,Rp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,bp(e,a)))}function ju(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Rp(n),n=n.next;while(n!==o)}e.action=null}function Rp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Cp(e,n){return n}function wp(e,n){if(_t){var a=zt.formState;if(a!==null){e:{var o=at;if(_t){if(Ft){t:{for(var u=Ft,f=ai;u.nodeType!==8;){if(!f){u=null;break t}if(u=si(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ft=si(u.nextSibling),o=u.data==="F!";break e}}_a(o)}o=!1}o&&(n=a[0])}}return a=Cn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cp,lastRenderedState:n},a.queue=o,a=Yp.bind(null,at,o),o.dispatch=a,o=Wu(!1),f=Ju.bind(null,at,!1,o.queue),o=Cn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Nx.bind(null,at,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Lp(e){var n=Kt();return Dp(n,Dt,e)}function Dp(e,n,a){if(n=ku(e,n,Cp)[0],e=Ml(Hi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=so(n)}catch(x){throw x===kr?hl:x}else o=n;n=Kt();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(at.flags|=2048,Yr(9,{destroy:void 0},Ox.bind(null,u,a),null)),[o,f,e]}function Ox(e,n){e.action=n}function Up(e){var n=Kt(),a=Dt;if(a!==null)return Dp(n,a,e);Kt(),n=n.memoizedState,a=Kt();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Yr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=at.updateQueue,n===null&&(n=yl(),at.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Np(){return Kt().memoizedState}function bl(e,n,a,o){var u=Cn();at.flags|=e,u.memoizedState=Yr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Tl(e,n,a,o){var u=Kt();o=o===void 0?null:o;var f=u.memoizedState.inst;Dt!==null&&o!==null&&Bu(o,Dt.memoizedState.deps)?u.memoizedState=Yr(n,f,a,o):(at.flags|=e,u.memoizedState=Yr(1|n,f,a,o))}function Op(e,n){bl(8390656,8,e,n)}function qu(e,n){Tl(2048,8,e,n)}function Px(e){at.flags|=4;var n=at.updateQueue;if(n===null)n=yl(),at.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Pp(e){var n=Kt().memoizedState;return Px({ref:n,nextImpl:e}),function(){if((Et&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function zp(e,n){return Tl(4,2,e,n)}function Bp(e,n){return Tl(4,4,e,n)}function Ip(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Fp(e,n,a){a=a!=null?a.concat([e]):null,Tl(4,4,Ip.bind(null,n,e),a)}function Yu(){}function Hp(e,n){var a=Kt();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Bu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Gp(e,n){var a=Kt();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Bu(n,o[1]))return o[0];if(o=e(),cr){De(!0);try{e()}finally{De(!1)}}return a.memoizedState=[o,n],o}function Zu(e,n,a){return a===void 0||(Fi&1073741824)!==0&&(mt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Vm(),at.lanes|=e,Aa|=e,a)}function Vp(e,n,a,o){return Xn(a,n)?a:Wr.current!==null?(e=Zu(e,a,o),Xn(e,n)||(an=!0),e):(Fi&42)===0||(Fi&1073741824)!==0&&(mt&261930)===0?(an=!0,e.memoizedState=a):(e=Vm(),at.lanes|=e,Aa|=e,n)}function kp(e,n,a,o,u){var f=j.p;j.p=f!==0&&8>f?f:8;var x=z.T,T={};z.T=T,Ju(e,!1,n,a);try{var B=u(),J=z.S;if(J!==null&&J(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var de=Lx(B,o);oo(e,n,de,Kn(e))}else oo(e,n,o,Kn(e))}catch(ge){oo(e,n,{then:function(){},status:"rejected",reason:ge},Kn())}finally{j.p=f,x!==null&&T.types!==null&&(x.types=T.types),z.T=x}}function zx(){}function Ku(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Xp(e).queue;kp(e,u,n,Q,a===null?zx:function(){return Wp(e),a(o)})}function Xp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:Q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Wp(e){var n=Xp(e);n.next===null&&(n=e.alternate.memoizedState),oo(e,n.next.queue,{},Kn())}function Qu(){return _n(To)}function jp(){return Kt().memoizedState}function qp(){return Kt().memoizedState}function Bx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();e=Sa(a);var o=ya(n,e,a);o!==null&&(Bn(o,n,a),no(o,n,a)),n={cache:Au()},e.payload=n;return}n=n.return}}function Ix(e,n,a){var o=Kn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Al(e)?Zp(n,a):(a=mu(e,n,a,o),a!==null&&(Bn(a,e,o),Kp(a,n,o)))}function Yp(e,n,a){var o=Kn();oo(e,n,a,o)}function oo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(e))Zp(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(u.hasEagerState=!0,u.eagerState=T,Xn(T,x))return sl(e,n,u,0),zt===null&&rl(),!1}catch{}finally{}if(a=mu(e,n,u,o),a!==null)return Bn(a,e,o),Kp(a,n,o),!0}return!1}function Ju(e,n,a,o){if(o={lane:2,revertLane:Df(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Al(e)){if(n)throw Error(s(479))}else n=mu(e,a,o,2),n!==null&&Bn(n,e,2)}function Al(e){var n=e.alternate;return e===at||n!==null&&n===at}function Zp(e,n){jr=xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Kp(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,kn(e,a)}}var lo={readContext:_n,use:El,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useLayoutEffect:jt,useInsertionEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useSyncExternalStore:jt,useId:jt,useHostTransitionStatus:jt,useFormState:jt,useActionState:jt,useOptimistic:jt,useMemoCache:jt,useCacheRefresh:jt};lo.useEffectEvent=jt;var Qp={readContext:_n,use:El,useCallback:function(e,n){return Cn().memoizedState=[e,n===void 0?null:n],e},useContext:_n,useEffect:Op,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,bl(4194308,4,Ip.bind(null,n,e),a)},useLayoutEffect:function(e,n){return bl(4194308,4,e,n)},useInsertionEffect:function(e,n){bl(4,2,e,n)},useMemo:function(e,n){var a=Cn();n=n===void 0?null:n;var o=e();if(cr){De(!0);try{e()}finally{De(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Cn();if(a!==void 0){var u=a(n);if(cr){De(!0);try{a(n)}finally{De(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Ix.bind(null,at,e),[o.memoizedState,e]},useRef:function(e){var n=Cn();return e={current:e},n.memoizedState=e},useState:function(e){e=Wu(e);var n=e.queue,a=Yp.bind(null,at,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Yu,useDeferredValue:function(e,n){var a=Cn();return Zu(a,e,n)},useTransition:function(){var e=Wu(!1);return e=kp.bind(null,at,e.queue,!0,!1),Cn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=at,u=Cn();if(_t){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),zt===null)throw Error(s(349));(mt&127)!==0||vp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Op(Sp.bind(null,o,f,e),[e]),o.flags|=2048,Yr(9,{destroy:void 0},xp.bind(null,o,f,a,n),null),a},useId:function(){var e=Cn(),n=zt.identifierPrefix;if(_t){var a=Ri,o=Ai;a=(o&~(1<<32-We(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Sl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Dx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Qu,useFormState:wp,useActionState:wp,useOptimistic:function(e){var n=Cn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ju.bind(null,at,!0,a),a.dispatch=n,[e,n]},useMemoCache:Vu,useCacheRefresh:function(){return Cn().memoizedState=Bx.bind(null,at)},useEffectEvent:function(e){var n=Cn(),a={impl:e};return n.memoizedState=a,function(){if((Et&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},$u={readContext:_n,use:El,useCallback:Hp,useContext:_n,useEffect:qu,useImperativeHandle:Fp,useInsertionEffect:zp,useLayoutEffect:Bp,useMemo:Gp,useReducer:Ml,useRef:Np,useState:function(){return Ml(Hi)},useDebugValue:Yu,useDeferredValue:function(e,n){var a=Kt();return Vp(a,Dt.memoizedState,e,n)},useTransition:function(){var e=Ml(Hi)[0],n=Kt().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:_p,useId:jp,useHostTransitionStatus:Qu,useFormState:Lp,useActionState:Lp,useOptimistic:function(e,n){var a=Kt();return Mp(a,Dt,e,n)},useMemoCache:Vu,useCacheRefresh:qp};$u.useEffectEvent=Pp;var Jp={readContext:_n,use:El,useCallback:Hp,useContext:_n,useEffect:qu,useImperativeHandle:Fp,useInsertionEffect:zp,useLayoutEffect:Bp,useMemo:Gp,useReducer:Xu,useRef:Np,useState:function(){return Xu(Hi)},useDebugValue:Yu,useDeferredValue:function(e,n){var a=Kt();return Dt===null?Zu(a,e,n):Vp(a,Dt.memoizedState,e,n)},useTransition:function(){var e=Xu(Hi)[0],n=Kt().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:_p,useId:jp,useHostTransitionStatus:Qu,useFormState:Up,useActionState:Up,useOptimistic:function(e,n){var a=Kt();return Dt!==null?Mp(a,Dt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:qp};Jp.useEffectEvent=Pp;function ef(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var tf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Kn(),u=Sa(o);u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(Bn(n,e,o),no(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Kn(),u=Sa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(Bn(n,e,o),no(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Kn(),o=Sa(a);o.tag=2,n!=null&&(o.callback=n),n=ya(e,o,a),n!==null&&(Bn(n,e,a),no(n,e,a))}};function $p(e,n,a,o,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,o)||!Ys(u,f):!0}function em(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&tf.enqueueReplaceState(n,n.state,null)}function ur(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function tm(e){al(e)}function nm(e){console.error(e)}function im(e){al(e)}function Rl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function am(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nf(e,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Rl(e,n)},a}function rm(e){return e=Sa(e),e.tag=3,e}function sm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){am(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){am(n,a,o),typeof u!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Fx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Hr(n,a,u,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return ri===null?Fl():a.alternate===null&&qt===0&&(qt=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Cf(e,o,u)),!1;case 22:return a.flags|=65536,o===pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Cf(e,o,u)),!1}throw Error(s(435,a.tag))}return Cf(e,o,u),Fl(),!1}if(_t)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==yu&&(e=Error(s(422),{cause:o}),Qs(ti(e,a)))):(o!==yu&&(n=Error(s(423),{cause:o}),Qs(ti(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ti(o,a),u=nf(e.stateNode,o,u),Uu(e,u),qt!==4&&(qt=2)),!1;var f=Error(s(520),{cause:o});if(f=ti(f,a),_o===null?_o=[f]:_o.push(f),qt!==4&&(qt=2),n===null)return!0;o=ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=nf(a.stateNode,o,e),Uu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ra===null||!Ra.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=rm(u),sm(u,e,a,o),Uu(a,u),!1}a=a.return}while(a!==null);return!1}var af=Error(s(461)),an=!1;function vn(e,n,a,o){n.child=e===null?up(n,null,a,o):lr(n,e.child,a,o)}function om(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var T in o)T!=="ref"&&(x[T]=o[T])}else x=o;return ar(n),o=Iu(e,n,a,x,f,u),T=Fu(),e!==null&&!an?(Hu(e,n,u),Gi(e,n,u)):(_t&&T&&xu(n),n.flags|=1,vn(e,n,o,u),n.child)}function lm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,cm(e,n,f,o,u)):(e=ll(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!df(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(x,o)&&e.ref===n.ref)return Gi(e,n,u)}return n.flags|=1,e=Pi(f,o),e.ref=n.ref,e.return=n,n.child=e}function cm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Ys(f,o)&&e.ref===n.ref)if(an=!1,n.pendingProps=o=f,df(e,u))(e.flags&131072)!==0&&(an=!0);else return n.lanes=e.lanes,Gi(e,n,u)}return rf(e,n,a,o,u)}function um(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return fm(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&dl(n,f!==null?f.cachePool:null),f!==null?hp(n,f):Ou(),pp(n);else return o=n.lanes=536870912,fm(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(dl(n,f.cachePool),hp(n,f),Ma(),n.memoizedState=null):(e!==null&&dl(n,null),Ou(),Ma());return vn(e,n,u,a),n.child}function co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function fm(e,n,a,o,u){var f=Cu();return f=f===null?null:{parent:tn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&dl(n,null),Ou(),pp(n),e!==null&&Hr(e,n,o,!0),n.childLanes=u,null}function Cl(e,n){return n=Ll({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function dm(e,n,a){return lr(n,e.child,null,a),e=Cl(n,n.pendingProps),e.flags|=2,qn(n),n.memoizedState=null,e}function Hx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(_t){if(o.mode==="hidden")return e=Cl(n,o),n.lanes=536870912,co(null,e);if(zu(n),(e=Ft)?(e=bg(e,ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=Zh(e),a.return=n,n.child=a,gn=n,Ft=null)):e=null,e===null)throw _a(n);return n.lanes=536870912,null}return Cl(n,o)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(zu(n),u)if(n.flags&256)n.flags&=-257,n=dm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(an||Hr(e,n,a,!1),u=(a&e.childLanes)!==0,an||u){if(o=zt,o!==null&&(x=Os(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,er(e,x),Bn(o,e,x),af;Fl(),n=dm(e,n,a)}else e=f.treeContext,Ft=si(x.nextSibling),gn=n,_t=!0,ga=null,ai=!1,e!==null&&Jh(n,e),n=Cl(n,o),n.flags|=4096;return n}return e=Pi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function rf(e,n,a,o,u){return ar(n),a=Iu(e,n,a,o,void 0,u),o=Fu(),e!==null&&!an?(Hu(e,n,u),Gi(e,n,u)):(_t&&o&&xu(n),n.flags|=1,vn(e,n,a,u),n.child)}function hm(e,n,a,o,u,f){return ar(n),n.updateQueue=null,a=gp(n,o,a,u),mp(e),o=Fu(),e!==null&&!an?(Hu(e,n,f),Gi(e,n,f)):(_t&&o&&xu(n),n.flags|=1,vn(e,n,a,f),n.child)}function pm(e,n,a,o,u){if(ar(n),n.stateNode===null){var f=zr,x=a.contextType;typeof x=="object"&&x!==null&&(f=_n(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=tf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Lu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?_n(x):zr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(ef(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&tf.enqueueReplaceState(f,f.state,null),ao(n,o,f,u),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,B=ur(a,T);f.props=B;var J=f.context,de=a.contextType;x=zr,typeof de=="object"&&de!==null&&(x=_n(de));var ge=a.getDerivedStateFromProps;de=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==x)&&em(n,f,o,x),xa=!1;var $=n.memoizedState;f.state=$,ao(n,o,f,u),io(),J=n.memoizedState,T||$!==J||xa?(typeof ge=="function"&&(ef(n,a,ge,o),J=n.memoizedState),(B=xa||$p(n,a,B,o,$,J,x))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=x,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Du(e,n),x=n.memoizedProps,de=ur(a,x),f.props=de,ge=n.pendingProps,$=f.context,J=a.contextType,B=zr,typeof J=="object"&&J!==null&&(B=_n(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==ge||$!==B)&&em(n,f,o,B),xa=!1,$=n.memoizedState,f.state=$,ao(n,o,f,u),io();var se=n.memoizedState;x!==ge||$!==se||xa||e!==null&&e.dependencies!==null&&ul(e.dependencies)?(typeof T=="function"&&(ef(n,a,T,o),se=n.memoizedState),(de=xa||$p(n,a,de,o,$,se,B)||e!==null&&e.dependencies!==null&&ul(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,se,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,se,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=se),f.props=o,f.state=se,f.context=B,o=de):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,wl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=lr(n,e.child,null,u),n.child=lr(n,null,a,u)):vn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Gi(e,n,u),e}function mm(e,n,a,o){return nr(),n.flags|=256,vn(e,n,a,o),n.child}var sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:ap()}}function lf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Zn),e}function gm(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(Zt.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(_t){if(u?Ea(n):Ma(),(e=Ft)?(e=bg(e,ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=Zh(e),a.return=n,n.child=a,gn=n,Ft=null)):e=null,e===null)throw _a(n);return Xf(e)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(Ma(),u=n.mode,T=Ll({mode:"hidden",children:T},u),o=tr(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=of(a),o.childLanes=lf(e,x,a),n.memoizedState=sf,co(null,o)):(Ea(n),cf(n,T))}var B=e.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(Ea(n),n.flags&=-257,n=uf(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),T=o.fallback,u=n.mode,o=Ll({mode:"visible",children:o.children},u),T=tr(T,u,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,lr(n,e.child,null,a),o=n.child,o.memoizedState=of(a),o.childLanes=lf(e,x,a),n.memoizedState=sf,n=co(null,o));else if(Ea(n),Xf(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var J=x.dgst;x=J,o=Error(s(419)),o.stack="",o.digest=x,Qs({value:o,source:null,stack:null}),n=uf(e,n,a)}else if(an||Hr(e,n,a,!1),x=(a&e.childLanes)!==0,an||x){if(x=zt,x!==null&&(o=Os(x,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,er(e,o),Bn(x,e,o),af;kf(T)||Fl(),n=uf(e,n,a)}else kf(T)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Ft=si(T.nextSibling),gn=n,_t=!0,ga=null,ai=!1,e!==null&&Jh(n,e),n=cf(n,o.children),n.flags|=4096);return n}return u?(Ma(),T=o.fallback,u=n.mode,B=e.child,J=B.sibling,o=Pi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,J!==null?T=Pi(J,T):(T=tr(T,u,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,co(null,o),o=n.child,T=e.child.memoizedState,T===null?T=of(a):(u=T.cachePool,u!==null?(B=tn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=ap(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=lf(e,x,a),n.memoizedState=sf,co(e.child,o)):(Ea(n),a=e.child,e=a.sibling,a=Pi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function cf(e,n){return n=Ll({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ll(e,n){return e=Wn(22,e,null,n),e.lanes=0,e}function uf(e,n,a){return lr(n,e.child,null,a),e=cf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function _m(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),bu(e.return,n,a)}function ff(e,n,a,o,u,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function vm(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var x=Zt.current,T=(x&2)!==0;if(T?(x=x&1|2,n.flags|=128):x&=1,H(Zt,x),vn(e,n,o,a),o=_t?Ks:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_m(e,a,n);else if(e.tag===19)_m(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&vl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ff(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&vl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}ff(n,!0,a,null,f,o);break;case"together":ff(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Gi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Hr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Pi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Pi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function df(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ul(e)))}function Gx(e,n,a){switch(n.tag){case 3:He(n,n.stateNode.containerInfo),va(n,tn,e.memoizedState.cache),nr();break;case 27:case 5:qe(n);break;case 4:He(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?gm(e,n,a):(Ea(n),e=Gi(e,n,a),e!==null?e.sibling:null);Ea(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Hr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return vm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),H(Zt,Zt.current),o)break;return null;case 22:return n.lanes=0,um(e,n,a,n.pendingProps);case 24:va(n,tn,e.memoizedState.cache)}return Gi(e,n,a)}function xm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)an=!0;else{if(!df(e,a)&&(n.flags&128)===0)return an=!1,Gx(e,n,a);an=(e.flags&131072)!==0}else an=!1,_t&&(n.flags&1048576)!==0&&Qh(n,Ks,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=sr(n.elementType),n.type=e,typeof e=="function")gu(e)?(o=ur(e,o),n.tag=1,n=pm(null,n,e,o,a)):(n.tag=0,n=rf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===O){n.tag=11,n=om(null,n,e,o,a);break e}else if(u===P){n.tag=14,n=lm(null,n,e,o,a);break e}}throw n=W(e)||e,Error(s(306,n,""))}}return n;case 0:return rf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ur(o,n.pendingProps),pm(e,n,o,u,a);case 3:e:{if(He(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Du(e,n),ao(n,o,null,a);var x=n.memoizedState;if(o=x.cache,va(n,tn,o),o!==f.cache&&Tu(n,[tn],a,!0),io(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=mm(e,n,o,a);break e}else if(o!==u){u=ti(Error(s(424)),n),Qs(u),n=mm(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ft=si(e.firstChild),gn=n,_t=!0,ga=null,ai=!0,a=up(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(nr(),o===u){n=Gi(e,n,a);break e}vn(e,n,o,a)}n=n.child}return n;case 26:return wl(e,n),e===null?(a=Lg(n.type,null,n.pendingProps,null))?n.memoizedState=a:_t||(a=n.type,e=n.pendingProps,o=jl(Ee.current).createElement(a),o[Qt]=n,o[En]=e,xn(o,a,e),Fe(o),n.stateNode=o):n.memoizedState=Lg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return qe(n),e===null&&_t&&(o=n.stateNode=Rg(n.type,n.pendingProps,Ee.current),gn=n,ai=!0,u=Ft,Da(n.type)?(Wf=u,Ft=si(o.firstChild)):Ft=u),vn(e,n,n.pendingProps.children,a),wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&_t&&((u=o=Ft)&&(o=_S(o,n.type,n.pendingProps,ai),o!==null?(n.stateNode=o,gn=n,Ft=si(o.firstChild),ai=!1,u=!0):u=!1),u||_a(n)),qe(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,o=f.children,Hf(u,f)?o=null:x!==null&&Hf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Iu(e,n,Ux,null,null,a),To._currentValue=u),wl(e,n),vn(e,n,o,a),n.child;case 6:return e===null&&_t&&((e=a=Ft)&&(a=vS(a,n.pendingProps,ai),a!==null?(n.stateNode=a,gn=n,Ft=null,e=!0):e=!1),e||_a(n)),null;case 13:return gm(e,n,a);case 4:return He(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=lr(n,null,o,a):vn(e,n,o,a),n.child;case 11:return om(e,n,n.type,n.pendingProps,a);case 7:return vn(e,n,n.pendingProps,a),n.child;case 8:return vn(e,n,n.pendingProps.children,a),n.child;case 12:return vn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,va(n,n.type,o.value),vn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ar(n),u=_n(u),o=o(u),n.flags|=1,vn(e,n,o,a),n.child;case 14:return lm(e,n,n.type,n.pendingProps,a);case 15:return cm(e,n,n.type,n.pendingProps,a);case 19:return vm(e,n,a);case 31:return Hx(e,n,a);case 22:return um(e,n,a,n.pendingProps);case 24:return ar(n),o=_n(tn),e===null?(u=Cu(),u===null&&(u=zt,f=Au(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Lu(n),va(n,tn,u)):((e.lanes&a)!==0&&(Du(e,n),ao(n,null,null,a),io()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),va(n,tn,o)):(o=f.cache,va(n,tn,o),o!==u.cache&&Tu(n,[tn],a,!0))),vn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Vi(e){e.flags|=4}function hf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(jm())e.flags|=8192;else throw or=pl,wu}else e.flags&=-16777217}function Sm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pg(n))if(jm())e.flags|=8192;else throw or=pl,wu}function Dl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?bt():536870912,e.lanes|=n,Jr|=n)}function uo(e,n){if(!_t)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ht(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Vx(e,n,a){var o=n.pendingProps;switch(Su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(n),null;case 1:return Ht(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ii(tn),Pe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fr(n)?Vi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Eu())),Ht(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Vi(n),f!==null?(Ht(n),Sm(n,f)):(Ht(n),hf(n,u,null,o,a))):f?f!==e.memoizedState?(Vi(n),Ht(n),Sm(n,f)):(Ht(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Vi(n),Ht(n),hf(n,u,e,o,a)),null;case 27:if(ft(n),a=Ee.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Vi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ht(n),null}e=Y.current,Fr(n)?$h(n):(e=Rg(u,o,a),n.stateNode=e,Vi(n))}return Ht(n),null;case 5:if(ft(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Vi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ht(n),null}if(f=Y.current,Fr(n))$h(n);else{var x=jl(Ee.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}f[Qt]=n,f[En]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(xn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Vi(n)}}return Ht(n),hf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Vi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Ee.current,Fr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=gn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Qt]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||gg(e.nodeValue,a)),e||_a(n,!0)}else e=jl(e).createTextNode(o),e[Qt]=n,n.stateNode=e}return Ht(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Fr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Qt]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ht(n),e=!1}else a=Eu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(qn(n),n):(qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ht(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Fr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Qt]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ht(n),u=!1}else u=Eu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(qn(n),n):(qn(n),null)}return qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),Ht(n),null);case 4:return Pe(),e===null&&Pf(n.stateNode.containerInfo),Ht(n),null;case 10:return Ii(n.type),Ht(n),null;case 19:if(X(Zt),o=n.memoizedState,o===null)return Ht(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)uo(o,!1);else{if(qt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=vl(e),f!==null){for(n.flags|=128,uo(o,!1),e=f.updateQueue,n.updateQueue=e,Dl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Yh(a,e),a=a.sibling;return H(Zt,Zt.current&1|2),_t&&zi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&ve()>zl&&(n.flags|=128,u=!0,uo(o,!1),n.lanes=4194304)}else{if(!u)if(e=vl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Dl(n,e),uo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!_t)return Ht(n),null}else 2*ve()-o.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,u=!0,uo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ve(),e.sibling=null,a=Zt.current,H(Zt,u?a&1|2:a&1),_t&&zi(n,o.treeForkCount),e):(Ht(n),null);case 22:case 23:return qn(n),Pu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ht(n),n.subtreeFlags&6&&(n.flags|=8192)):Ht(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&X(rr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(tn),Ht(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function kx(e,n){switch(Su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ii(tn),Pe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ft(n),null;case 31:if(n.memoizedState!==null){if(qn(n),n.alternate===null)throw Error(s(340));nr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));nr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(Zt),null;case 4:return Pe(),null;case 10:return Ii(n.type),null;case 22:case 23:return qn(n),Pu(),e!==null&&X(rr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ii(tn),null;case 25:return null;default:return null}}function ym(e,n){switch(Su(n),n.tag){case 3:Ii(tn),Pe();break;case 26:case 27:case 5:ft(n);break;case 4:Pe();break;case 31:n.memoizedState!==null&&qn(n);break;case 13:qn(n);break;case 19:X(Zt);break;case 10:Ii(n.type);break;case 22:case 23:qn(n),Pu(),e!==null&&X(rr);break;case 24:Ii(tn)}}function fo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==u)}}catch(T){Rt(n,n.return,T)}}function ba(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var x=o.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,u=n;var B=a,J=T;try{J()}catch(de){Rt(u,B,de)}}}o=o.next}while(o!==f)}}catch(de){Rt(n,n.return,de)}}function Em(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{dp(n,a)}catch(o){Rt(e,e.return,o)}}}function Mm(e,n,a){a.props=ur(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Rt(e,n,o)}}function ho(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Rt(e,n,u)}}function Ci(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Rt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Rt(e,n,u)}else a.current=null}function bm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Rt(e,e.return,u)}}function pf(e,n,a){try{var o=e.stateNode;fS(o,e.type,a,n),o[En]=n}catch(u){Rt(e,e.return,u)}}function Tm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function mf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ni));else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(gf(e,n,a),e=e.sibling;e!==null;)gf(e,n,a),e=e.sibling}function Ul(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ul(e,n,a),e=e.sibling;e!==null;)Ul(e,n,a),e=e.sibling}function Am(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);xn(n,o,a),n[Qt]=e,n[En]=a}catch(f){Rt(e,e.return,f)}}var ki=!1,rn=!1,_f=!1,Rm=typeof WeakSet=="function"?WeakSet:Set,dn=null;function Xx(e,n){if(e=e.containerInfo,If=$l,e=Fh(e),cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var x=0,T=-1,B=-1,J=0,de=0,ge=e,$=null;t:for(;;){for(var se;ge!==a||u!==0&&ge.nodeType!==3||(T=x+u),ge!==f||o!==0&&ge.nodeType!==3||(B=x+o),ge.nodeType===3&&(x+=ge.nodeValue.length),(se=ge.firstChild)!==null;)$=ge,ge=se;for(;;){if(ge===e)break t;if($===a&&++J===u&&(T=x),$===f&&++de===o&&(B=x),(se=ge.nextSibling)!==null)break;ge=$,$=ge.parentNode}ge=se}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ff={focusedElem:e,selectionRange:a},$l=!1,dn=n;dn!==null;)if(n=dn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,dn=e;else for(;dn!==null;){switch(n=dn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ne=ur(a.type,u);e=o.getSnapshotBeforeUpdate(Ne,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Qe){Rt(a,a.return,Qe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Vf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,dn=e;break}dn=n.return}}function Cm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(e,a),o&4&&fo(5,a);break;case 1:if(Wi(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Rt(a,a.return,x)}else{var u=ur(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Rt(a,a.return,x)}}o&64&&Em(a),o&512&&ho(a,a.return);break;case 3:if(Wi(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{dp(e,n)}catch(x){Rt(a,a.return,x)}}break;case 27:n===null&&o&4&&Am(a);case 26:case 5:Wi(e,a),n===null&&o&4&&bm(a),o&512&&ho(a,a.return);break;case 12:Wi(e,a);break;case 31:Wi(e,a),o&4&&Dm(e,a);break;case 13:Wi(e,a),o&4&&Um(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=$x.bind(null,a),xS(e,a))));break;case 22:if(o=a.memoizedState!==null||ki,!o){n=n!==null&&n.memoizedState!==null||rn,u=ki;var f=rn;ki=o,(rn=n)&&!f?ji(e,a,(a.subtreeFlags&8772)!==0):Wi(e,a),ki=u,rn=f}break;case 30:break;default:Wi(e,a)}}function wm(e){var n=e.alternate;n!==null&&(e.alternate=null,wm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ne(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var kt=null,Nn=!1;function Xi(e,n,a){for(a=a.child;a!==null;)Lm(e,n,a),a=a.sibling}function Lm(e,n,a){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 26:rn||Ci(a,n),Xi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ci(a,n);var o=kt,u=Nn;Da(a.type)&&(kt=a.stateNode,Nn=!1),Xi(e,n,a),Eo(a.stateNode),kt=o,Nn=u;break;case 5:rn||Ci(a,n);case 6:if(o=kt,u=Nn,kt=null,Xi(e,n,a),kt=o,Nn=u,kt!==null)if(Nn)try{(kt.nodeType===9?kt.body:kt.nodeName==="HTML"?kt.ownerDocument.body:kt).removeChild(a.stateNode)}catch(f){Rt(a,n,f)}else try{kt.removeChild(a.stateNode)}catch(f){Rt(a,n,f)}break;case 18:kt!==null&&(Nn?(e=kt,Eg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ss(e)):Eg(kt,a.stateNode));break;case 4:o=kt,u=Nn,kt=a.stateNode.containerInfo,Nn=!0,Xi(e,n,a),kt=o,Nn=u;break;case 0:case 11:case 14:case 15:ba(2,a,n),rn||ba(4,a,n),Xi(e,n,a);break;case 1:rn||(Ci(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Mm(a,n,o)),Xi(e,n,a);break;case 21:Xi(e,n,a);break;case 22:rn=(o=rn)||a.memoizedState!==null,Xi(e,n,a),rn=o;break;default:Xi(e,n,a)}}function Dm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ss(e)}catch(a){Rt(n,n.return,a)}}}function Um(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ss(e)}catch(a){Rt(n,n.return,a)}}function Wx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Rm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Rm),n;default:throw Error(s(435,e.tag))}}function Nl(e,n){var a=Wx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=eS.bind(null,e,o);o.then(u,u)}})}function On(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,x=n,T=x;e:for(;T!==null;){switch(T.tag){case 27:if(Da(T.type)){kt=T.stateNode,Nn=!1;break e}break;case 5:kt=T.stateNode,Nn=!1;break e;case 3:case 4:kt=T.stateNode.containerInfo,Nn=!0;break e}T=T.return}if(kt===null)throw Error(s(160));Lm(f,x,u),kt=null,Nn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Nm(n,e),n=n.sibling}var gi=null;function Nm(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:On(n,e),Pn(e),o&4&&(ba(3,e,e.return),fo(3,e),ba(5,e,e.return));break;case 1:On(n,e),Pn(e),o&512&&(rn||a===null||Ci(a,a.return)),o&64&&ki&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=gi;if(On(n,e),Pn(e),o&512&&(rn||a===null||Ci(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[re]||f[Qt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),xn(f,o,a),f[Qt]=e,Fe(f),o=f;break e;case"link":var x=Ng("link","href",u).get(o+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break t}}f=u.createElement(o),xn(f,o,a),u.head.appendChild(f);break;case"meta":if(x=Ng("meta","content",u).get(o+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break t}}f=u.createElement(o),xn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[Qt]=e,Fe(f),o=f}e.stateNode=o}else Og(u,e.type,e.stateNode);else e.stateNode=Ug(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Og(u,e.type,e.stateNode):Ug(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:On(n,e),Pn(e),o&512&&(rn||a===null||Ci(a,a.return)),a!==null&&o&4&&pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(On(n,e),Pn(e),o&512&&(rn||a===null||Ci(a,a.return)),e.flags&32){u=e.stateNode;try{wr(u,"")}catch(Ne){Rt(e,e.return,Ne)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,pf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(_f=!0);break;case 6:if(On(n,e),Pn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Ne){Rt(e,e.return,Ne)}}break;case 3:if(Zl=null,u=gi,gi=ql(n.containerInfo),On(n,e),gi=u,Pn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ss(n.containerInfo)}catch(Ne){Rt(e,e.return,Ne)}_f&&(_f=!1,Om(e));break;case 4:o=gi,gi=ql(e.stateNode.containerInfo),On(n,e),Pn(e),gi=o;break;case 12:On(n,e),Pn(e);break;case 31:On(n,e),Pn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Nl(e,o)));break;case 13:On(n,e),Pn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pl=ve()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Nl(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=ki,de=rn;if(ki=J||u,rn=de||B,On(n,e),rn=de,ki=J,Pn(e),o&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ki||rn||fr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=B.stateNode;var ge=B.memoizedProps.style,$=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;T.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Ne){Rt(B,B.return,Ne)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Ne){Rt(B,B.return,Ne)}}}else if(n.tag===18){if(a===null){B=n;try{var se=B.stateNode;u?Mg(se,!0):Mg(B.stateNode,!1)}catch(Ne){Rt(B,B.return,Ne)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Nl(e,a))));break;case 19:On(n,e),Pn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Nl(e,o)));break;case 30:break;case 21:break;default:On(n,e),Pn(e)}}function Pn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Tm(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=mf(e);Ul(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(wr(x,""),a.flags&=-33);var T=mf(e);Ul(e,T,x);break;case 3:case 4:var B=a.stateNode.containerInfo,J=mf(e);gf(e,J,B);break;default:throw Error(s(161))}}catch(de){Rt(e,e.return,de)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Om(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Om(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Wi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cm(e,n.alternate,n),n=n.sibling}function fr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ba(4,n,n.return),fr(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Mm(n,n.return,a),fr(n);break;case 27:Eo(n.stateNode);case 26:case 5:Ci(n,n.return),fr(n);break;case 22:n.memoizedState===null&&fr(n);break;case 30:fr(n);break;default:fr(n)}e=e.sibling}}function ji(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ji(u,f,a),fo(4,f);break;case 1:if(ji(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Rt(o,o.return,J)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)fp(B[u],T)}catch(J){Rt(o,o.return,J)}}a&&x&64&&Em(f),ho(f,f.return);break;case 27:Am(f);case 26:case 5:ji(u,f,a),a&&o===null&&x&4&&bm(f),ho(f,f.return);break;case 12:ji(u,f,a);break;case 31:ji(u,f,a),a&&x&4&&Dm(u,f);break;case 13:ji(u,f,a),a&&x&4&&Um(u,f);break;case 22:f.memoizedState===null&&ji(u,f,a),ho(f,f.return);break;case 30:break;default:ji(u,f,a)}n=n.sibling}}function vf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Js(a))}function xf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e))}function _i(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pm(e,n,a,o),n=n.sibling}function Pm(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:_i(e,n,a,o),u&2048&&fo(9,n);break;case 1:_i(e,n,a,o);break;case 3:_i(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e)));break;case 12:if(u&2048){_i(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Rt(n,n.return,B)}}else _i(e,n,a,o);break;case 31:_i(e,n,a,o);break;case 13:_i(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?_i(e,n,a,o):po(e,n):f._visibility&2?_i(e,n,a,o):(f._visibility|=2,Zr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&vf(x,n);break;case 24:_i(e,n,a,o),u&2048&&xf(n.alternate,n);break;default:_i(e,n,a,o)}}function Zr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,T=a,B=o,J=x.flags;switch(x.tag){case 0:case 11:case 15:Zr(f,x,T,B,u),fo(8,x);break;case 23:break;case 22:var de=x.stateNode;x.memoizedState!==null?de._visibility&2?Zr(f,x,T,B,u):po(f,x):(de._visibility|=2,Zr(f,x,T,B,u)),u&&J&2048&&vf(x.alternate,x);break;case 24:Zr(f,x,T,B,u),u&&J&2048&&xf(x.alternate,x);break;default:Zr(f,x,T,B,u)}n=n.sibling}}function po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:po(a,o),u&2048&&vf(o.alternate,o);break;case 24:po(a,o),u&2048&&xf(o.alternate,o);break;default:po(a,o)}n=n.sibling}}var mo=8192;function Kr(e,n,a){if(e.subtreeFlags&mo)for(e=e.child;e!==null;)zm(e,n,a),e=e.sibling}function zm(e,n,a){switch(e.tag){case 26:Kr(e,n,a),e.flags&mo&&e.memoizedState!==null&&DS(a,gi,e.memoizedState,e.memoizedProps);break;case 5:Kr(e,n,a);break;case 3:case 4:var o=gi;gi=ql(e.stateNode.containerInfo),Kr(e,n,a),gi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=mo,mo=16777216,Kr(e,n,a),mo=o):Kr(e,n,a));break;default:Kr(e,n,a)}}function Bm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];dn=o,Fm(o,e)}Bm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Im(e),e=e.sibling}function Im(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&ba(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ol(e)):go(e);break;default:go(e)}}function Ol(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];dn=o,Fm(o,e)}Bm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ba(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}e=e.sibling}}function Fm(e,n){for(;dn!==null;){var a=dn;switch(a.tag){case 0:case 11:case 15:ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Js(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,dn=o;else e:for(a=e;dn!==null;){o=dn;var u=o.sibling,f=o.return;if(wm(o),o===a){dn=null;break e}if(u!==null){u.return=f,dn=u;break e}dn=f}}}var jx={getCacheForType:function(e){var n=_n(tn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return _n(tn).controller.signal}},qx=typeof WeakMap=="function"?WeakMap:Map,Et=0,zt=null,ht=null,mt=0,At=0,Yn=null,Ta=!1,Qr=!1,Sf=!1,qi=0,qt=0,Aa=0,dr=0,yf=0,Zn=0,Jr=0,_o=null,zn=null,Ef=!1,Pl=0,Hm=0,zl=1/0,Bl=null,Ra=null,on=0,Ca=null,$r=null,Yi=0,Mf=0,bf=null,Gm=null,vo=0,Tf=null;function Kn(){return(Et&2)!==0&&mt!==0?mt&-mt:z.T!==null?Df():zs()}function Vm(){if(Zn===0)if((mt&536870912)===0||_t){var e=G;G<<=1,(G&3932160)===0&&(G=262144),Zn=e}else Zn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Zn}function Bn(e,n,a){(e===zt&&(At===2||At===9)||e.cancelPendingCommit!==null)&&(es(e,0),wa(e,mt,Zn,!1)),Yt(e,a),((Et&2)===0||e!==zt)&&(e===zt&&((Et&2)===0&&(dr|=a),qt===4&&wa(e,mt,Zn,!1)),wi(e))}function km(e,n,a){if((Et&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ke(e,n),u=o?Kx(e,n):Rf(e,n,!0),f=o;do{if(u===0){Qr&&!o&&wa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Yx(a)){u=Rf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var T=e;u=_o;var B=T.current.memoizedState.isDehydrated;if(B&&(es(T,x).flags|=256),x=Rf(T,x,!1),x!==2){if(Sf&&!B){T.errorRecoveryDisabledLanes|=f,dr|=f,u=4;break e}f=zn,zn=u,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){es(e,0),wa(e,n,0,!0);break}e:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:wa(o,n,Zn,!Ta);break e;case 2:zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Pl+300-ve(),10<u)){if(wa(o,n,Zn,!Ta),Ke(o,0,!0)!==0)break e;Yi=n,o.timeoutHandle=Sg(Xm.bind(null,o,a,zn,Bl,Ef,n,Zn,dr,Jr,Ta,f,"Throttled",-0,0),u);break e}Xm(o,a,zn,Bl,Ef,n,Zn,dr,Jr,Ta,f,null,-0,0)}}break}while(!0);wi(e)}function Xm(e,n,a,o,u,f,x,T,B,J,de,ge,$,se){if(e.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ni},zm(n,f,ge);var Ne=(f&62914560)===f?Pl-ve():(f&4194048)===f?Hm-ve():0;if(Ne=US(ge,Ne),Ne!==null){Yi=f,e.cancelPendingCommit=Ne(Jm.bind(null,e,n,f,a,o,u,x,T,B,de,ge,null,$,se)),wa(e,f,x,!J);return}}Jm(e,n,f,a,o,u,x,T,B)}function Yx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Xn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(e,n,a,o){n&=~yf,n&=~dr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-We(u),x=1<<f;o[f]=-1,u&=~x}a!==0&&fn(e,a,n)}function Il(){return(Et&6)===0?(xo(0),!1):!0}function Af(){if(ht!==null){if(At===0)var e=ht.return;else e=ht,Bi=ir=null,Gu(e),Xr=null,eo=0,e=ht;for(;e!==null;)ym(e.alternate,e),e=e.return;ht=null}}function es(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,pS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Yi=0,Af(),zt=e,ht=a=Pi(e.current,null),mt=n,At=0,Yn=null,Ta=!1,Qr=ke(e,n),Sf=!1,Jr=Zn=yf=dr=Aa=qt=0,zn=_o=null,Ef=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-We(o),f=1<<u;n|=e[u],o&=~f}return qi=n,rl(),a}function Wm(e,n){at=null,z.H=lo,n===kr||n===hl?(n=op(),At=3):n===wu?(n=op(),At=4):At=n===af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,ht===null&&(qt=1,Rl(e,ti(n,e.current)))}function jm(){var e=jn.current;return e===null?!0:(mt&4194048)===mt?ri===null:(mt&62914560)===mt||(mt&536870912)!==0?e===ri:!1}function qm(){var e=z.H;return z.H=lo,e===null?lo:e}function Ym(){var e=z.A;return z.A=jx,e}function Fl(){qt=4,Ta||(mt&4194048)!==mt&&jn.current!==null||(Qr=!0),(Aa&134217727)===0&&(dr&134217727)===0||zt===null||wa(zt,mt,Zn,!1)}function Rf(e,n,a){var o=Et;Et|=2;var u=qm(),f=Ym();(zt!==e||mt!==n)&&(Bl=null,es(e,n)),n=!1;var x=qt;e:do try{if(At!==0&&ht!==null){var T=ht,B=Yn;switch(At){case 8:Af(),x=6;break e;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var J=At;if(At=0,Yn=null,ts(e,T,B,J),a&&Qr){x=0;break e}break;default:J=At,At=0,Yn=null,ts(e,T,B,J)}}Zx(),x=qt;break}catch(de){Wm(e,de)}while(!0);return n&&e.shellSuspendCounter++,Bi=ir=null,Et=o,z.H=u,z.A=f,ht===null&&(zt=null,mt=0,rl()),x}function Zx(){for(;ht!==null;)Zm(ht)}function Kx(e,n){var a=Et;Et|=2;var o=qm(),u=Ym();zt!==e||mt!==n?(Bl=null,zl=ve()+500,es(e,n)):Qr=ke(e,n);e:do try{if(At!==0&&ht!==null){n=ht;var f=Yn;t:switch(At){case 1:At=0,Yn=null,ts(e,n,f,1);break;case 2:case 9:if(rp(f)){At=0,Yn=null,Km(n);break}n=function(){At!==2&&At!==9||zt!==e||(At=7),wi(e)},f.then(n,n);break e;case 3:At=7;break e;case 4:At=5;break e;case 7:rp(f)?(At=0,Yn=null,Km(n)):(At=0,Yn=null,ts(e,n,f,7));break;case 5:var x=null;switch(ht.tag){case 26:x=ht.memoizedState;case 5:case 27:var T=ht;if(x?Pg(x):T.stateNode.complete){At=0,Yn=null;var B=T.sibling;if(B!==null)ht=B;else{var J=T.return;J!==null?(ht=J,Hl(J)):ht=null}break t}}At=0,Yn=null,ts(e,n,f,5);break;case 6:At=0,Yn=null,ts(e,n,f,6);break;case 8:Af(),qt=6;break e;default:throw Error(s(462))}}Qx();break}catch(de){Wm(e,de)}while(!0);return Bi=ir=null,z.H=o,z.A=u,Et=a,ht!==null?0:(zt=null,mt=0,rl(),qt)}function Qx(){for(;ht!==null&&!ye();)Zm(ht)}function Zm(e){var n=xm(e.alternate,e,qi);e.memoizedProps=e.pendingProps,n===null?Hl(e):ht=n}function Km(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=hm(a,n,n.pendingProps,n.type,void 0,mt);break;case 11:n=hm(a,n,n.pendingProps,n.type.render,n.ref,mt);break;case 5:Gu(n);default:ym(a,n),n=ht=Yh(n,qi),n=xm(a,n,qi)}e.memoizedProps=e.pendingProps,n===null?Hl(e):ht=n}function ts(e,n,a,o){Bi=ir=null,Gu(n),Xr=null,eo=0;var u=n.return;try{if(Fx(e,u,n,a,mt)){qt=1,Rl(e,ti(a,e.current)),ht=null;return}}catch(f){if(u!==null)throw ht=u,f;qt=1,Rl(e,ti(a,e.current)),ht=null;return}n.flags&32768?(_t||o===1?e=!0:Qr||(mt&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Qm(n,e)):Hl(n)}function Hl(e){var n=e;do{if((n.flags&32768)!==0){Qm(n,Ta);return}e=n.return;var a=Vx(n.alternate,n,qi);if(a!==null){ht=a;return}if(n=n.sibling,n!==null){ht=n;return}ht=n=e}while(n!==null);qt===0&&(qt=5)}function Qm(e,n){do{var a=kx(e.alternate,e);if(a!==null){a.flags&=32767,ht=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ht=e;return}ht=e=a}while(e!==null);qt=6,ht=null}function Jm(e,n,a,o,u,f,x,T,B){e.cancelPendingCommit=null;do Gl();while(on!==0);if((Et&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=pu,Lt(e,a,f,x,T,B),e===zt&&(ht=zt=null,mt=0),$r=n,Ca=e,Yi=a,Mf=f,bf=u,Gm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,tS(Ye,function(){return ig(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=j.p,j.p=2,x=Et,Et|=4;try{Xx(e,n,a)}finally{Et=x,j.p=u,z.T=o}}on=1,$m(),eg(),tg()}}function $m(){if(on===1){on=0;var e=Ca,n=$r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=j.p;j.p=2;var u=Et;Et|=4;try{Nm(n,e);var f=Ff,x=Fh(e.containerInfo),T=f.focusedElem,B=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&Ih(T.ownerDocument.documentElement,T)){if(B!==null&&cu(T)){var J=B.start,de=B.end;if(de===void 0&&(de=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(de,T.value.length);else{var ge=T.ownerDocument||document,$=ge&&ge.defaultView||window;if($.getSelection){var se=$.getSelection(),Ne=T.textContent.length,Qe=Math.min(B.start,Ne),Nt=B.end===void 0?Qe:Math.min(B.end,Ne);!se.extend&&Qe>Nt&&(x=Nt,Nt=Qe,Qe=x);var q=Bh(T,Qe),V=Bh(T,Nt);if(q&&V&&(se.rangeCount!==1||se.anchorNode!==q.node||se.anchorOffset!==q.offset||se.focusNode!==V.node||se.focusOffset!==V.offset)){var K=ge.createRange();K.setStart(q.node,q.offset),se.removeAllRanges(),Qe>Nt?(se.addRange(K),se.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),se.addRange(K))}}}}for(ge=[],se=T;se=se.parentNode;)se.nodeType===1&&ge.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ge.length;T++){var me=ge[T];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}$l=!!If,Ff=If=null}finally{Et=u,j.p=o,z.T=a}}e.current=n,on=2}}function eg(){if(on===2){on=0;var e=Ca,n=$r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=j.p;j.p=2;var u=Et;Et|=4;try{Cm(e,n.alternate,n)}finally{Et=u,j.p=o,z.T=a}}on=3}}function tg(){if(on===4||on===3){on=0,Se();var e=Ca,n=$r,a=Yi,o=Gm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?on=5:(on=0,$r=Ca=null,ng(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ra=null),ca(a),n=n.stateNode,Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=j.p,j.p=2,z.T=null;try{for(var f=e.onRecoverableError,x=0;x<o.length;x++){var T=o[x];f(T.value,{componentStack:T.stack})}}finally{z.T=n,j.p=u}}(Yi&3)!==0&&Gl(),wi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Tf?vo++:(vo=0,Tf=e):vo=0,xo(0)}}function ng(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Js(n)))}function Gl(){return $m(),eg(),tg(),ig()}function ig(){if(on!==5)return!1;var e=Ca,n=Mf;Mf=0;var a=ca(Yi),o=z.T,u=j.p;try{j.p=32>a?32:a,z.T=null,a=bf,bf=null;var f=Ca,x=Yi;if(on=0,$r=Ca=null,Yi=0,(Et&6)!==0)throw Error(s(331));var T=Et;if(Et|=4,Im(f.current),Pm(f,f.current,x,a),Et=T,xo(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(Je,f)}catch{}return!0}finally{j.p=u,z.T=o,ng(e,n)}}function ag(e,n,a){n=ti(a,n),n=nf(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(Yt(e,2),wi(e))}function Rt(e,n,a){if(e.tag===3)ag(e,e,a);else for(;n!==null;){if(n.tag===3){ag(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ra===null||!Ra.has(o))){e=ti(a,e),a=rm(2),o=ya(n,a,2),o!==null&&(sm(a,o,n,e),Yt(o,2),wi(o));break}}n=n.return}}function Cf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new qx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Sf=!0,u.add(a),e=Jx.bind(null,e,n,a),n.then(e,e))}function Jx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,zt===e&&(mt&a)===a&&(qt===4||qt===3&&(mt&62914560)===mt&&300>ve()-Pl?(Et&2)===0&&es(e,0):yf|=a,Jr===mt&&(Jr=0)),wi(e)}function rg(e,n){n===0&&(n=bt()),e=er(e,n),e!==null&&(Yt(e,n),wi(e))}function $x(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),rg(e,a)}function eS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),rg(e,a)}function tS(e,n){return R(e,n)}var Vl=null,ns=null,wf=!1,kl=!1,Lf=!1,La=0;function wi(e){e!==ns&&e.next===null&&(ns===null?Vl=ns=e:ns=ns.next=e),kl=!0,wf||(wf=!0,iS())}function xo(e,n){if(!Lf&&kl){Lf=!0;do for(var a=!1,o=Vl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-We(42|e)+1)-1,f&=u&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,cg(o,f))}else f=mt,f=Ke(o,o===zt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||ke(o,f)||(a=!0,cg(o,f));o=o.next}while(a);Lf=!1}}function nS(){sg()}function sg(){kl=wf=!1;var e=0;La!==0&&hS()&&(e=La);for(var n=ve(),a=null,o=Vl;o!==null;){var u=o.next,f=og(o,n);f===0?(o.next=null,a===null?Vl=u:a.next=u,u===null&&(ns=a)):(a=o,(e!==0||(f&3)!==0)&&(kl=!0)),o=u}on!==0&&on!==5||xo(e),La!==0&&(La=0)}function og(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-We(f),T=1<<x,B=u[x];B===-1?((T&a)===0||(T&o)!==0)&&(u[x]=wt(T,n)):B<=n&&(e.expiredLanes|=T),f&=~T}if(n=zt,a=mt,a=Ke(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(At===2||At===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ie(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ke(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ie(o),ca(a)){case 2:case 8:a=Oe;break;case 32:a=Ye;break;case 268435456:a=xe;break;default:a=Ye}return o=lg.bind(null,e),a=R(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ie(o),e.callbackPriority=2,e.callbackNode=null,2}function lg(e,n){if(on!==0&&on!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gl()&&e.callbackNode!==a)return null;var o=mt;return o=Ke(e,e===zt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(km(e,o,n),og(e,ve()),e.callbackNode!=null&&e.callbackNode===a?lg.bind(null,e):null)}function cg(e,n){if(Gl())return null;km(e,n,!0)}function iS(){mS(function(){(Et&6)!==0?R(we,nS):sg()})}function Df(){if(La===0){var e=Gr;e===0&&(e=Te,Te<<=1,(Te&261888)===0&&(Te=256)),La=e}return La}function ug(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qo(""+e)}function fg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function aS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=ug((u[En]||null).action),x=o.submitter;x&&(n=(n=x[En]||null)?ug(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new tl("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(La!==0){var B=x?fg(u,x):new FormData(u);Ku(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=x?fg(u,x):new FormData(u),Ku(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Uf=0;Uf<hu.length;Uf++){var Nf=hu[Uf],rS=Nf.toLowerCase(),sS=Nf[0].toUpperCase()+Nf.slice(1);mi(rS,"on"+sS)}mi(Vh,"onAnimationEnd"),mi(kh,"onAnimationIteration"),mi(Xh,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Ex,"onTransitionRun"),mi(Mx,"onTransitionStart"),mi(bx,"onTransitionCancel"),mi(Wh,"onTransitionEnd"),Jt("onMouseEnter",["mouseout","mouseover"]),Jt("onMouseLeave",["mouseout","mouseover"]),Jt("onPointerEnter",["pointerout","pointerover"]),Jt("onPointerLeave",["pointerout","pointerover"]),Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function dg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var T=o[x],B=T.instance,J=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=J;try{f(u)}catch(de){al(de)}u.currentTarget=null,f=B}else for(x=0;x<o.length;x++){if(T=o[x],B=T.instance,J=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=J;try{f(u)}catch(de){al(de)}u.currentTarget=null,f=B}}}}function pt(e,n){var a=n[Bs];a===void 0&&(a=n[Bs]=new Set);var o=e+"__bubble";a.has(o)||(hg(n,e,2,!1),a.add(o))}function Of(e,n,a){var o=0;n&&(o|=4),hg(a,e,o,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Pf(e){if(!e[Xl]){e[Xl]=!0,et.forEach(function(a){a!=="selectionchange"&&(oS.has(a)||Of(a,!1,e),Of(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,Of("selectionchange",!1,n))}}function hg(e,n,a,o){switch(Vg(n)){case 2:var u=PS;break;case 8:u=zS;break;default:u=Kf}a=u.bind(null,n,a,e),u=void 0,!eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function zf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var T=o.stateNode.containerInfo;if(T===u)break;if(x===4)for(x=o.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;T!==null;){if(x=Le(T),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){o=f=x;continue e}T=T.parentNode}}o=o.return}vh(function(){var J=f,de=Jc(a),ge=[];e:{var $=jh.get(e);if($!==void 0){var se=tl,Ne=e;switch(e){case"keypress":if($o(a)===0)break e;case"keydown":case"keyup":se=ex;break;case"focusin":Ne="focus",se=au;break;case"focusout":Ne="blur",se=au;break;case"beforeblur":case"afterblur":se=au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=V0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=ix;break;case Vh:case kh:case Xh:se=W0;break;case Wh:se=rx;break;case"scroll":case"scrollend":se=H0;break;case"wheel":se=ox;break;case"copy":case"cut":case"paste":se=q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Mh;break;case"toggle":case"beforetoggle":se=cx}var Qe=(n&4)!==0,Nt=!Qe&&(e==="scroll"||e==="scrollend"),q=Qe?$!==null?$+"Capture":null:$;Qe=[];for(var V=J,K;V!==null;){var me=V;if(K=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||K===null||q===null||(me=Gs(V,q),me!=null&&Qe.push(yo(V,me,K))),Nt)break;V=V.return}0<Qe.length&&($=new se($,Ne,null,a,de),ge.push({event:$,listeners:Qe}))}}if((n&7)===0){e:{if($=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",$&&a!==Qc&&(Ne=a.relatedTarget||a.fromElement)&&(Le(Ne)||Ne[ua]))break e;if((se||$)&&($=de.window===de?de:($=de.ownerDocument)?$.defaultView||$.parentWindow:window,se?(Ne=a.relatedTarget||a.toElement,se=J,Ne=Ne?Le(Ne):null,Ne!==null&&(Nt=c(Ne),Qe=Ne.tag,Ne!==Nt||Qe!==5&&Qe!==27&&Qe!==6)&&(Ne=null)):(se=null,Ne=J),se!==Ne)){if(Qe=yh,me="onMouseLeave",q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Qe=Mh,me="onPointerLeave",q="onPointerEnter",V="pointer"),Nt=se==null?$:je(se),K=Ne==null?$:je(Ne),$=new Qe(me,V+"leave",se,a,de),$.target=Nt,$.relatedTarget=K,me=null,Le(de)===J&&(Qe=new Qe(q,V+"enter",Ne,a,de),Qe.target=K,Qe.relatedTarget=Nt,me=Qe),Nt=me,se&&Ne)t:{for(Qe=lS,q=se,V=Ne,K=0,me=q;me;me=Qe(me))K++;me=0;for(var Xe=V;Xe;Xe=Qe(Xe))me++;for(;0<K-me;)q=Qe(q),K--;for(;0<me-K;)V=Qe(V),me--;for(;K--;){if(q===V||V!==null&&q===V.alternate){Qe=q;break t}q=Qe(q),V=Qe(V)}Qe=null}else Qe=null;se!==null&&pg(ge,$,se,Qe,!1),Ne!==null&&Nt!==null&&pg(ge,Nt,Ne,Qe,!0)}}e:{if($=J?je(J):window,se=$.nodeName&&$.nodeName.toLowerCase(),se==="select"||se==="input"&&$.type==="file")var xt=Dh;else if(wh($))if(Uh)xt=xx;else{xt=_x;var Be=gx}else se=$.nodeName,!se||se.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?J&&Kc(J.elementType)&&(xt=Dh):xt=vx;if(xt&&(xt=xt(e,J))){Lh(ge,xt,a,de);break e}Be&&Be(e,$,J),e==="focusout"&&J&&$.type==="number"&&J.memoizedProps.value!=null&&Zc($,"number",$.value)}switch(Be=J?je(J):window,e){case"focusin":(wh(Be)||Be.contentEditable==="true")&&(Nr=Be,uu=J,Zs=null);break;case"focusout":Zs=uu=Nr=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,Hh(ge,a,de);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":Hh(ge,a,de)}var st;if(su)e:{switch(e){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else Ur?Rh(e,a)&&(gt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(bh&&a.locale!=="ko"&&(Ur||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Ur&&(st=xh()):(pa=de,tu="value"in pa?pa.value:pa.textContent,Ur=!0)),Be=Wl(J,gt),0<Be.length&&(gt=new Eh(gt,e,null,a,de),ge.push({event:gt,listeners:Be}),st?gt.data=st:(st=Ch(a),st!==null&&(gt.data=st)))),(st=fx?dx(e,a):hx(e,a))&&(gt=Wl(J,"onBeforeInput"),0<gt.length&&(Be=new Eh("onBeforeInput","beforeinput",null,a,de),ge.push({event:Be,listeners:gt}),Be.data=st)),aS(ge,e,J,a,de)}dg(ge,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Wl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Gs(e,a),u!=null&&o.unshift(yo(e,u,f)),u=Gs(e,n),u!=null&&o.push(yo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function lS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pg(e,n,a,o,u){for(var f=n._reactName,x=[];a!==null&&a!==o;){var T=a,B=T.alternate,J=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||J===null||(B=J,u?(J=Gs(a,f),J!=null&&x.unshift(yo(a,J,B))):u||(J=Gs(a,f),J!=null&&x.push(yo(a,J,B)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var cS=/\r\n?/g,uS=/\u0000|\uFFFD/g;function mg(e){return(typeof e=="string"?e:""+e).replace(cS,`
`).replace(uS,"")}function gg(e,n){return n=mg(n),mg(e)===n}function Ut(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||wr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&wr(e,""+o);break;case"className":Pt(e,"class",o);break;case"tabIndex":Pt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Pt(e,a,o);break;case"style":gh(e,o,f);break;case"data":if(n!=="object"){Pt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Qo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ut(e,n,"name",u.name,u,null),Ut(e,n,"formEncType",u.formEncType,u,null),Ut(e,n,"formMethod",u.formMethod,u,null),Ut(e,n,"formTarget",u.formTarget,u,null)):(Ut(e,n,"encType",u.encType,u,null),Ut(e,n,"method",u.method,u,null),Ut(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Qo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ni);break;case"onScroll":o!=null&&pt("scroll",e);break;case"onScrollEnd":o!=null&&pt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Qo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":pt("beforetoggle",e),pt("toggle",e),fa(e,"popover",o);break;case"xlinkActuate":mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":mn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":mn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":mn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":mn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":fa(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=I0.get(a)||a,fa(e,a,o))}}function Bf(e,n,a,o,u,f){switch(a){case"style":gh(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?wr(e,o):(typeof o=="number"||typeof o=="bigint")&&wr(e,""+o);break;case"onScroll":o!=null&&pt("scroll",e);break;case"onScrollEnd":o!=null&&pt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ni);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tt.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):fa(e,a,o)}}}function xn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pt("error",e),pt("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ut(e,n,f,x,a,null)}}u&&Ut(e,n,"srcSet",a.srcSet,a,null),o&&Ut(e,n,"src",a.src,a,null);return;case"input":pt("invalid",e);var T=f=x=u=null,B=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":u=de;break;case"type":x=de;break;case"checked":B=de;break;case"defaultChecked":J=de;break;case"value":f=de;break;case"defaultValue":T=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:Ut(e,n,o,de,a,null)}}Hs(e,f,T,B,J,x,u,!1);return;case"select":pt("invalid",e),o=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":o=T;default:Ut(e,n,u,T,a,null)}n=f,a=x,e.multiple=!!o,n!=null?Cr(e,!!o,n,!1):a!=null&&Cr(e,!!o,a,!0);return;case"textarea":pt("invalid",e),f=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ut(e,n,x,T,a,null)}ph(e,o,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ut(e,n,B,o,a,null)}return;case"dialog":pt("beforetoggle",e),pt("toggle",e),pt("cancel",e),pt("close",e);break;case"iframe":case"object":pt("load",e);break;case"video":case"audio":for(o=0;o<So.length;o++)pt(So[o],e);break;case"image":pt("error",e),pt("load",e);break;case"details":pt("toggle",e);break;case"embed":case"source":case"link":pt("error",e),pt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ut(e,n,J,o,a,null)}return;default:if(Kc(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&Bf(e,n,de,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ut(e,n,T,o,a,null))}function fS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,T=null,B=null,J=null,de=null;for(se in a){var ge=a[se];if(a.hasOwnProperty(se)&&ge!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":B=ge;default:o.hasOwnProperty(se)||Ut(e,n,se,null,o,ge)}}for(var $ in o){var se=o[$];if(ge=a[$],o.hasOwnProperty($)&&(se!=null||ge!=null))switch($){case"type":f=se;break;case"name":u=se;break;case"checked":J=se;break;case"defaultChecked":de=se;break;case"value":x=se;break;case"defaultValue":T=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:se!==ge&&Ut(e,n,$,se,o,ge)}}Fs(e,x,T,B,J,de,f,u);return;case"select":se=x=T=$=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":se=B;default:o.hasOwnProperty(f)||Ut(e,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":$=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==B&&Ut(e,n,u,f,o,B)}n=T,a=x,o=se,$!=null?Cr(e,!!a,$,!1):!!o!=!!a&&(n!=null?Cr(e,!!a,n,!0):Cr(e,!!a,a?[]:"",!1));return;case"textarea":se=$=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ut(e,n,T,null,o,u)}for(x in o)if(u=o[x],f=a[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":$=u;break;case"defaultValue":se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ut(e,n,x,u,o,f)}hh(e,$,se);return;case"option":for(var Ne in a)if($=a[Ne],a.hasOwnProperty(Ne)&&$!=null&&!o.hasOwnProperty(Ne))switch(Ne){case"selected":e.selected=!1;break;default:Ut(e,n,Ne,null,o,$)}for(B in o)if($=o[B],se=a[B],o.hasOwnProperty(B)&&$!==se&&($!=null||se!=null))switch(B){case"selected":e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Ut(e,n,B,$,o,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)$=a[Qe],a.hasOwnProperty(Qe)&&$!=null&&!o.hasOwnProperty(Qe)&&Ut(e,n,Qe,null,o,$);for(J in o)if($=o[J],se=a[J],o.hasOwnProperty(J)&&$!==se&&($!=null||se!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:Ut(e,n,J,$,o,se)}return;default:if(Kc(n)){for(var Nt in a)$=a[Nt],a.hasOwnProperty(Nt)&&$!==void 0&&!o.hasOwnProperty(Nt)&&Bf(e,n,Nt,void 0,o,$);for(de in o)$=o[de],se=a[de],!o.hasOwnProperty(de)||$===se||$===void 0&&se===void 0||Bf(e,n,de,$,o,se);return}}for(var q in a)$=a[q],a.hasOwnProperty(q)&&$!=null&&!o.hasOwnProperty(q)&&Ut(e,n,q,null,o,$);for(ge in o)$=o[ge],se=a[ge],!o.hasOwnProperty(ge)||$===se||$==null&&se==null||Ut(e,n,ge,$,o,se)}function _g(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,x=u.initiatorType,T=u.duration;if(f&&T&&_g(x)){for(x=0,T=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],J=B.startTime;if(J>T)break;var de=B.transferSize,ge=B.initiatorType;de&&_g(ge)&&(B=B.responseEnd,x+=de*(B<T?1:(T-J)/(B-J)))}if(--o,n+=8*(f+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var If=null,Ff=null;function jl(e){return e.nodeType===9?e:e.ownerDocument}function vg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function hS(){var e=window.event;return e&&e.type==="popstate"?e===Gf?!1:(Gf=e,!0):(Gf=null,!1)}var Sg=typeof setTimeout=="function"?setTimeout:void 0,pS=typeof clearTimeout=="function"?clearTimeout:void 0,yg=typeof Promise=="function"?Promise:void 0,mS=typeof queueMicrotask=="function"?queueMicrotask:typeof yg<"u"?function(e){return yg.resolve(null).then(e).catch(gS)}:Sg;function gS(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function Eg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),ss(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Eo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Eo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,T=f.nodeName;f[re]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Eo(e.ownerDocument.body);a=u}while(a);ss(n)}function Mg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Vf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),ne(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function _S(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[re])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=si(e.nextSibling),e===null)break}return null}function vS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=si(e.nextSibling),e===null))return null;return e}function bg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=si(e.nextSibling),e===null))return null;return e}function kf(e){return e.data==="$?"||e.data==="$~"}function Xf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function xS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Wf=null;function Tg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return si(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Ag(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Rg(e,n,a){switch(n=jl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Eo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ne(e)}var oi=new Map,Cg=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zi=j.d;j.d={f:SS,r:yS,D:ES,C:MS,L:bS,m:TS,X:RS,S:AS,M:CS};function SS(){var e=Zi.f(),n=Il();return e||n}function yS(e){var n=ze(e);n!==null&&n.tag===5&&n.type==="form"?Wp(n):Zi.r(e)}var is=typeof document>"u"?null:document;function wg(e,n,a){var o=is;if(o&&typeof n=="string"&&n){var u=Mn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Cg.has(u)||(Cg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),xn(n,"link",e),Fe(n),o.head.appendChild(n)))}}function ES(e){Zi.D(e),wg("dns-prefetch",e,null)}function MS(e,n){Zi.C(e,n),wg("preconnect",e,n)}function bS(e,n,a){Zi.L(e,n,a);var o=is;if(o&&e&&n){var u='link[rel="preload"][as="'+Mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Mn(a.imageSizes)+'"]')):u+='[href="'+Mn(e)+'"]';var f=u;switch(n){case"style":f=as(e);break;case"script":f=rs(e)}oi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Mo(f))||n==="script"&&o.querySelector(bo(f))||(n=o.createElement("link"),xn(n,"link",e),Fe(n),o.head.appendChild(n)))}}function TS(e,n){Zi.m(e,n);var a=is;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Mn(o)+'"][href="'+Mn(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rs(e)}if(!oi.has(f)&&(e=_({rel:"modulepreload",href:e},n),oi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}o=a.createElement("link"),xn(o,"link",e),Fe(o),a.head.appendChild(o)}}}function AS(e,n,a){Zi.S(e,n,a);var o=is;if(o&&e){var u=Ze(o).hoistableStyles,f=as(e);n=n||"default";var x=u.get(f);if(!x){var T={loading:0,preload:null};if(x=o.querySelector(Mo(f)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(f))&&jf(e,a);var B=x=o.createElement("link");Fe(B),xn(B,"link",e),B._p=new Promise(function(J,de){B.onload=J,B.onerror=de}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Yl(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:T},u.set(f,x)}}}function RS(e,n){Zi.X(e,n);var a=is;if(a&&e){var o=Ze(a).hoistableScripts,u=rs(e),f=o.get(u);f||(f=a.querySelector(bo(u)),f||(e=_({src:e,async:!0},n),(n=oi.get(u))&&qf(e,n),f=a.createElement("script"),Fe(f),xn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function CS(e,n){Zi.M(e,n);var a=is;if(a&&e){var o=Ze(a).hoistableScripts,u=rs(e),f=o.get(u);f||(f=a.querySelector(bo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=oi.get(u))&&qf(e,n),f=a.createElement("script"),Fe(f),xn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Lg(e,n,a,o){var u=(u=Ee.current)?ql(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=as(a.href),a=Ze(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=as(a.href);var f=Ze(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(Mo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),f||wS(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rs(a),a=Ze(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function as(e){return'href="'+Mn(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function Dg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function wS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),xn(n,"link",a),Fe(n),e.head.appendChild(n))}function rs(e){return'[src="'+Mn(e)+'"]'}function bo(e){return"script[async]"+e}function Ug(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Mn(a.href)+'"]');if(o)return n.instance=o,Fe(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Fe(o),xn(o,"style",u),Yl(o,a.precedence,e),n.instance=o;case"stylesheet":u=as(a.href);var f=e.querySelector(Mo(u));if(f)return n.state.loading|=4,n.instance=f,Fe(f),f;o=Dg(a),(u=oi.get(u))&&jf(o,u),f=(e.ownerDocument||e).createElement("link"),Fe(f);var x=f;return x._p=new Promise(function(T,B){x.onload=T,x.onerror=B}),xn(f,"link",o),n.state.loading|=4,Yl(f,a.precedence,e),n.instance=f;case"script":return f=rs(a.src),(u=e.querySelector(bo(f)))?(n.instance=u,Fe(u),u):(o=a,(u=oi.get(f))&&(o=_({},a),qf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Fe(u),xn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Yl(o,a.precedence,e));return n.instance}function Yl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var T=o[x];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zl=null;function Ng(e,n,a){if(Zl===null){var o=new Map,u=Zl=new Map;u.set(a,o)}else u=Zl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[re]||f[Qt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var T=o.get(x);T?T.push(f):o.set(x,[f])}}return o}function Og(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function LS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Pg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function DS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=as(o.href),f=n.querySelector(Mo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Kl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Fe(f);return}f=n.ownerDocument||n,o=Dg(o),(u=oi.get(u))&&jf(o,u),f=f.createElement("link"),Fe(f);var x=f;x._p=new Promise(function(T,B){x.onload=T,x.onerror=B}),xn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Kl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Yf=0;function US(e,n){return e.stylesheets&&e.count===0&&Jl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Jl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Yf===0&&(Yf=62500*dS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Jl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Yf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ql=null;function Jl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ql=new Map,n.forEach(NS,e),Ql=null,Kl.call(e))}function NS(e,n){if(!(n.state.loading&4)){var a=Ql.get(e);if(a)var o=a.get(null);else{a=new Map,Ql.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,u),a.set(x,u),this.count++,o=Kl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var To={$$typeof:A,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function OS(e,n,a,o,u,f,x,T,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wt(0),this.hiddenUpdates=Wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function zg(e,n,a,o,u,f,x,T,B,J,de,ge){return e=new OS(e,n,a,x,B,J,de,ge,T),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),e.current=f,f.stateNode=e,n=Au(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Lu(f),e}function Bg(e){return e?(e=zr,e):zr}function Ig(e,n,a,o,u,f){u=Bg(u),o.context===null?o.context=u:o.pendingContext=u,o=Sa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ya(e,o,n),a!==null&&(Bn(a,e,n),no(a,e,n))}function Fg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Zf(e,n){Fg(e,n),(e=e.alternate)&&Fg(e,n)}function Hg(e){if(e.tag===13||e.tag===31){var n=er(e,67108864);n!==null&&Bn(n,e,67108864),Zf(e,67108864)}}function Gg(e){if(e.tag===13||e.tag===31){var n=Kn();n=Ps(n);var a=er(e,n);a!==null&&Bn(a,e,n),Zf(e,n)}}var $l=!0;function PS(e,n,a,o){var u=z.T;z.T=null;var f=j.p;try{j.p=2,Kf(e,n,a,o)}finally{j.p=f,z.T=u}}function zS(e,n,a,o){var u=z.T;z.T=null;var f=j.p;try{j.p=8,Kf(e,n,a,o)}finally{j.p=f,z.T=u}}function Kf(e,n,a,o){if($l){var u=Qf(o);if(u===null)zf(e,n,o,ec,a),kg(e,o);else if(IS(u,e,n,a,o))o.stopPropagation();else if(kg(e,o),n&4&&-1<BS.indexOf(e)){for(;u!==null;){var f=ze(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Ae(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var B=1<<31-We(x);T.entanglements[1]|=B,x&=~B}wi(f),(Et&6)===0&&(zl=ve()+500,xo(0))}}break;case 31:case 13:T=er(f,2),T!==null&&Bn(T,f,2),Il(),Zf(f,2)}if(f=Qf(o),f===null&&zf(e,n,o,ec,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else zf(e,n,o,null,a)}}function Qf(e){return e=Jc(e),Jf(e)}var ec=null;function Jf(e){if(ec=null,e=Le(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ec=e,null}function Vg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ve()){case we:return 2;case Oe:return 8;case Ye:case rt:return 32;case xe:return 268435456;default:return 32}default:return 32}}var $f=!1,Ua=null,Na=null,Oa=null,Ao=new Map,Ro=new Map,Pa=[],BS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kg(e,n){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ze(n),n!==null&&Hg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function IS(e,n,a,o,u){switch(n){case"focusin":return Ua=Co(Ua,e,n,a,o,u),!0;case"dragenter":return Na=Co(Na,e,n,a,o,u),!0;case"mouseover":return Oa=Co(Oa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ao.set(f,Co(Ao.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ro.set(f,Co(Ro.get(f)||null,e,n,a,o,u)),!0}return!1}function Xg(e){var n=Le(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ka(e.priority,function(){Gg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ka(e.priority,function(){Gg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Qc=o,a.target.dispatchEvent(o),Qc=null}else return n=ze(a),n!==null&&Hg(n),e.blockedOn=a,!1;n.shift()}return!0}function Wg(e,n,a){tc(e)&&a.delete(n)}function FS(){$f=!1,Ua!==null&&tc(Ua)&&(Ua=null),Na!==null&&tc(Na)&&(Na=null),Oa!==null&&tc(Oa)&&(Oa=null),Ao.forEach(Wg),Ro.forEach(Wg)}function nc(e,n){e.blockedOn===n&&(e.blockedOn=null,$f||($f=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,FS)))}var ic=null;function jg(e){ic!==e&&(ic=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ic===e&&(ic=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Jf(o||a)===null)continue;break}var f=ze(a);f!==null&&(e.splice(n,3),n-=3,Ku(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ss(e){function n(B){return nc(B,e)}Ua!==null&&nc(Ua,e),Na!==null&&nc(Na,e),Oa!==null&&nc(Oa,e),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)Xg(a),a.blockedOn===null&&Pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],x=u[En]||null;if(typeof f=="function")x||jg(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[En]||null)T=x.formAction;else if(Jf(u)!==null)continue}else T=x.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),jg(a)}}}function qg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ed(e){this._internalRoot=e}ac.prototype.render=ed.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Kn();Ig(a,o,e,n,null,null)},ac.prototype.unmount=ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ig(e.current,2,null,e,null,null),Il(),n[ua]=null}};function ac(e){this._internalRoot=e}ac.prototype.unstable_scheduleHydration=function(e){if(e){var n=zs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,e),a===0&&Xg(e)}};var Yg=t.version;if(Yg!=="19.2.3")throw Error(s(527,Yg,"19.2.3"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var HS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{Je=rc.inject(HS),Ue=rc}catch{}}return Lo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=tm,f=nm,x=im;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=zg(e,1,!1,null,null,a,o,null,u,f,x,qg),e[ua]=n.current,Pf(e),new ed(n)},Lo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=tm,x=nm,T=im,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=zg(e,1,!0,n,a??null,o,u,B,f,x,T,qg),n.context=Bg(null),a=n.current,o=Kn(),o=Ps(o),u=Sa(o),u.callback=null,ya(a,u,o),a=o,n.current.lanes=a,Yt(n,a),wi(n),e[ua]=n.current,Pf(e),new ac(n)},Lo.version="19.2.3",Lo}var a_;function QS(){if(a_)return id.exports;a_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),id.exports=KS(),id.exports}var JS=QS();const $S=Pv(JS);/**
 * react-router v7.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var r_="popstate";function ey(r={}){function t(l,c){let{pathname:h="/",search:d="",hash:p=""}=Rr(l.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Gd("",{pathname:h,search:d,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let h=l.document.querySelector("base"),d="";if(h&&h.getAttribute("href")){let p=l.location.href,m=p.indexOf("#");d=m===-1?p:p.slice(0,m)}return d+"#"+(typeof c=="string"?c:Io(c))}function s(l,c){di(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return ny(t,i,s,r)}function Xt(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function di(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ty(){return Math.random().toString(36).substring(2,10)}function s_(r,t){return{usr:r.state,key:r.key,idx:t}}function Gd(r,t,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?Rr(t):t,state:i,key:t&&t.key||s||ty()}}function Io({pathname:r="/",search:t="",hash:i=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Rr(r){let t={};if(r){let i=r.indexOf("#");i>=0&&(t.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(t.search=r.substring(s),r=r.substring(0,s)),r&&(t.pathname=r)}return t}function ny(r,t,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,h=l.history,d="POP",p=null,m=g();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function g(){return(h.state||{idx:null}).idx}function _(){d="POP";let y=g(),v=y==null?null:y-m;m=y,p&&p({action:d,location:M.location,delta:v})}function S(y,v){d="PUSH";let D=Gd(M.location,y,v);i&&i(D,y),m=g()+1;let A=s_(D,m),O=M.createHref(D);try{h.pushState(A,"",O)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;l.location.assign(O)}c&&p&&p({action:d,location:M.location,delta:1})}function E(y,v){d="REPLACE";let D=Gd(M.location,y,v);i&&i(D,y),m=g();let A=s_(D,m),O=M.createHref(D);h.replaceState(A,"",O),c&&p&&p({action:d,location:M.location,delta:0})}function b(y){return iy(y)}let M={get action(){return d},get location(){return r(l,h)},listen(y){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(r_,_),p=y,()=>{l.removeEventListener(r_,_),p=null}},createHref(y){return t(l,y)},createURL:b,encodeLocation(y){let v=b(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:S,replace:E,go(y){return h.go(y)}};return M}function iy(r,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Xt(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Io(r);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function zv(r,t,i="/"){return ay(r,t,i,!1)}function ay(r,t,i,s){let l=typeof t=="string"?Rr(t):t,c=ra(l.pathname||"/",i);if(c==null)return null;let h=Bv(r);ry(h);let d=null;for(let p=0;d==null&&p<h.length;++p){let m=gy(c);d=py(h[p],m,s)}return d}function Bv(r,t=[],i=[],s="",l=!1){let c=(h,d,p=l,m)=>{let g={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:d,route:h};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&p)return;Xt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let _=aa([s,g.relativePath]),S=i.concat(g);h.children&&h.children.length>0&&(Xt(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Bv(h.children,t,S,_,p)),!(h.path==null&&!h.index)&&t.push({path:_,score:dy(_,h.index),routesMeta:S})};return r.forEach((h,d)=>{var p;if(h.path===""||!((p=h.path)!=null&&p.includes("?")))c(h,d);else for(let m of Iv(h.path))c(h,d,!0,m)}),t}function Iv(r){let t=r.split("/");if(t.length===0)return[];let[i,...s]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let h=Iv(s.join("/")),d=[];return d.push(...h.map(p=>p===""?c:[c,p].join("/"))),l&&d.push(...h),d.map(p=>r.startsWith("/")&&p===""?"/":p)}function ry(r){r.sort((t,i)=>t.score!==i.score?i.score-t.score:hy(t.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var sy=/^:[\w-]+$/,oy=3,ly=2,cy=1,uy=10,fy=-2,o_=r=>r==="*";function dy(r,t){let i=r.split("/"),s=i.length;return i.some(o_)&&(s+=fy),t&&(s+=ly),i.filter(l=>!o_(l)).reduce((l,c)=>l+(sy.test(c)?oy:c===""?cy:uy),s)}function hy(r,t){return r.length===t.length&&r.slice(0,-1).every((s,l)=>s===t[l])?r[r.length-1]-t[t.length-1]:0}function py(r,t,i=!1){let{routesMeta:s}=r,l={},c="/",h=[];for(let d=0;d<s.length;++d){let p=s[d],m=d===s.length-1,g=c==="/"?t:t.slice(c.length)||"/",_=Pc({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),S=p.route;if(!_&&m&&i&&!s[s.length-1].route.index&&(_=Pc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),h.push({params:l,pathname:aa([c,_.pathname]),pathnameBase:Sy(aa([c,_.pathnameBase])),route:S}),_.pathnameBase!=="/"&&(c=aa([c,_.pathnameBase]))}return h}function Pc(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=my(r.path,r.caseSensitive,r.end),l=t.match(i);if(!l)return null;let c=l[0],h=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:s.reduce((m,{paramName:g,isOptional:_},S)=>{if(g==="*"){let b=d[S]||"";h=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const E=d[S];return _&&!E?m[g]=void 0:m[g]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:h,pattern:r}}function my(r,t=!1,i=!0){di(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,p)=>(s.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function gy(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return di(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function ra(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var Fv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_y=r=>Fv.test(r);function vy(r,t="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Rr(r):r,c;if(i)if(_y(i))c=i;else{if(i.includes("//")){let h=i;i=i.replace(/\/\/+/g,"/"),di(!1,`Pathnames cannot have embedded double slashes - normalizing ${h} -> ${i}`)}i.startsWith("/")?c=l_(i.substring(1),"/"):c=l_(i,t)}else c=t;return{pathname:c,search:yy(s),hash:Ey(l)}}function l_(r,t){let i=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function od(r,t,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xy(r){return r.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Hv(r){let t=xy(r);return t.map((i,s)=>s===t.length-1?i.pathname:i.pathnameBase)}function Gv(r,t,i,s=!1){let l;typeof r=="string"?l=Rr(r):(l={...r},Xt(!l.pathname||!l.pathname.includes("?"),od("?","pathname","search",l)),Xt(!l.pathname||!l.pathname.includes("#"),od("#","pathname","hash",l)),Xt(!l.search||!l.search.includes("#"),od("#","search","hash",l)));let c=r===""||l.pathname==="",h=c?"/":l.pathname,d;if(h==null)d=i;else{let _=t.length-1;if(!s&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),_-=1;l.pathname=S.join("/")}d=_>=0?t[_]:"/"}let p=vy(l,d),m=h&&h!=="/"&&h.endsWith("/"),g=(c||h===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var aa=r=>r.join("/").replace(/\/\/+/g,"/"),Sy=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),yy=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Ey=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,My=class{constructor(r,t,i,s=!1){this.status=r,this.statusText=t||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function by(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Ty(r){return r.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Vv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function kv(r,t){let i=r;if(typeof i!="string"||!Fv.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(Vv)try{let c=new URL(window.location.href),h=i.startsWith("//")?new URL(c.protocol+i):new URL(i),d=ra(h.pathname,t);h.origin===c.origin&&d!=null?i=d+h.search+h.hash:l=!0}catch{di(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Xv=["POST","PUT","PATCH","DELETE"];new Set(Xv);var Ay=["GET",...Xv];new Set(Ay);var Ds=ce.createContext(null);Ds.displayName="DataRouter";var Gc=ce.createContext(null);Gc.displayName="DataRouterState";var Ry=ce.createContext(!1),Wv=ce.createContext({isTransitioning:!1});Wv.displayName="ViewTransition";var Cy=ce.createContext(new Map);Cy.displayName="Fetchers";var wy=ce.createContext(null);wy.displayName="Await";var hi=ce.createContext(null);hi.displayName="Navigation";var ko=ce.createContext(null);ko.displayName="Location";var Ui=ce.createContext({outlet:null,matches:[],isDataRoute:!1});Ui.displayName="Route";var th=ce.createContext(null);th.displayName="RouteError";var jv="REACT_ROUTER_ERROR",Ly="REDIRECT",Dy="ROUTE_ERROR_RESPONSE";function Uy(r){if(r.startsWith(`${jv}:${Ly}:{`))try{let t=JSON.parse(r.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Ny(r){if(r.startsWith(`${jv}:${Dy}:{`))try{let t=JSON.parse(r.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new My(t.status,t.statusText,t.data)}catch{}}function Oy(r,{relative:t}={}){Xt(Xo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=ce.useContext(hi),{hash:l,pathname:c,search:h}=Wo(r,{relative:t}),d=c;return i!=="/"&&(d=c==="/"?i:aa([i,c])),s.createHref({pathname:d,search:h,hash:l})}function Xo(){return ce.useContext(ko)!=null}function Za(){return Xt(Xo(),"useLocation() may be used only in the context of a <Router> component."),ce.useContext(ko).location}var qv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yv(r){ce.useContext(hi).static||ce.useLayoutEffect(r)}function nh(){let{isDataRoute:r}=ce.useContext(Ui);return r?Yy():Py()}function Py(){Xt(Xo(),"useNavigate() may be used only in the context of a <Router> component.");let r=ce.useContext(Ds),{basename:t,navigator:i}=ce.useContext(hi),{matches:s}=ce.useContext(Ui),{pathname:l}=Za(),c=JSON.stringify(Hv(s)),h=ce.useRef(!1);return Yv(()=>{h.current=!0}),ce.useCallback((p,m={})=>{if(di(h.current,qv),!h.current)return;if(typeof p=="number"){i.go(p);return}let g=Gv(p,JSON.parse(c),l,m.relative==="path");r==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:aa([t,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[t,i,c,l,r])}ce.createContext(null);function zy(){let{matches:r}=ce.useContext(Ui),t=r[r.length-1];return t?t.params:{}}function Wo(r,{relative:t}={}){let{matches:i}=ce.useContext(Ui),{pathname:s}=Za(),l=JSON.stringify(Hv(i));return ce.useMemo(()=>Gv(r,JSON.parse(l),s,t==="path"),[r,l,s,t])}function By(r,t){return Zv(r,t)}function Zv(r,t,i,s,l){var D;Xt(Xo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=ce.useContext(hi),{matches:h}=ce.useContext(Ui),d=h[h.length-1],p=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",_=d&&d.route;{let A=_&&_.path||"";Qv(m,!_||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let S=Za(),E;if(t){let A=typeof t=="string"?Rr(t):t;Xt(g==="/"||((D=A.pathname)==null?void 0:D.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${A.pathname}" was given in the \`location\` prop.`),E=A}else E=S;let b=E.pathname||"/",M=b;if(g!=="/"){let A=g.replace(/^\//,"").split("/");M="/"+b.replace(/^\//,"").split("/").slice(A.length).join("/")}let y=zv(r,{pathname:M});di(_||y!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),di(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=Vy(y&&y.map(A=>Object.assign({},A,{params:Object.assign({},p,A.params),pathname:aa([g,c.encodeLocation?c.encodeLocation(A.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?g:aa([g,c.encodeLocation?c.encodeLocation(A.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathnameBase])})),h,i,s,l);return t&&v?ce.createElement(ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},v):v}function Iy(){let r=qy(),t=by(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=ce.createElement(ce.Fragment,null,ce.createElement("p",null,"💿 Hey developer 👋"),ce.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ce.createElement("code",{style:c},"ErrorBoundary")," or"," ",ce.createElement("code",{style:c},"errorElement")," prop on your route.")),ce.createElement(ce.Fragment,null,ce.createElement("h2",null,"Unexpected Application Error!"),ce.createElement("h3",{style:{fontStyle:"italic"}},t),i?ce.createElement("pre",{style:l},i):null,h)}var Fy=ce.createElement(Iy,null),Kv=class extends ce.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){this.props.onError?this.props.onError(r,t):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=Ny(r.digest);i&&(r=i)}let t=r!==void 0?ce.createElement(Ui.Provider,{value:this.props.routeContext},ce.createElement(th.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?ce.createElement(Hy,{error:r},t):t}};Kv.contextType=Ry;var ld=new WeakMap;function Hy({children:r,error:t}){let{basename:i}=ce.useContext(hi);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let s=Uy(t.digest);if(s){let l=ld.get(t);if(l)throw l;let c=kv(s.location,i);if(Vv&&!ld.get(t))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw ld.set(t,h),h}return ce.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function Gy({routeContext:r,match:t,children:i}){let s=ce.useContext(Ds);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),ce.createElement(Ui.Provider,{value:r},i)}function Vy(r,t=[],i=null,s=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,h=i==null?void 0:i.errors;if(h!=null){let g=c.findIndex(_=>_.route.id&&(h==null?void 0:h[_.route.id])!==void 0);Xt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let d=!1,p=-1;if(i)for(let g=0;g<c.length;g++){let _=c[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=g),_.route.id){let{loaderData:S,errors:E}=i,b=_.route.loader&&!S.hasOwnProperty(_.route.id)&&(!E||E[_.route.id]===void 0);if(_.route.lazy||b){d=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}let m=i&&s?(g,_)=>{var S,E;s(g,{location:i.location,params:((E=(S=i.matches)==null?void 0:S[0])==null?void 0:E.params)??{},unstable_pattern:Ty(i.matches),errorInfo:_})}:void 0;return c.reduceRight((g,_,S)=>{let E,b=!1,M=null,y=null;i&&(E=h&&_.route.id?h[_.route.id]:void 0,M=_.route.errorElement||Fy,d&&(p<0&&S===0?(Qv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,y=null):p===S&&(b=!0,y=_.route.hydrateFallbackElement||null)));let v=t.concat(c.slice(0,S+1)),D=()=>{let A;return E?A=M:b?A=y:_.route.Component?A=ce.createElement(_.route.Component,null):_.route.element?A=_.route.element:A=g,ce.createElement(Gy,{match:_,routeContext:{outlet:g,matches:v,isDataRoute:i!=null},children:A})};return i&&(_.route.ErrorBoundary||_.route.errorElement||S===0)?ce.createElement(Kv,{location:i.location,revalidation:i.revalidation,component:M,error:E,children:D(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:m}):D()},null)}function ih(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ky(r){let t=ce.useContext(Ds);return Xt(t,ih(r)),t}function Xy(r){let t=ce.useContext(Gc);return Xt(t,ih(r)),t}function Wy(r){let t=ce.useContext(Ui);return Xt(t,ih(r)),t}function ah(r){let t=Wy(r),i=t.matches[t.matches.length-1];return Xt(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function jy(){return ah("useRouteId")}function qy(){var s;let r=ce.useContext(th),t=Xy("useRouteError"),i=ah("useRouteError");return r!==void 0?r:(s=t.errors)==null?void 0:s[i]}function Yy(){let{router:r}=ky("useNavigate"),t=ah("useNavigate"),i=ce.useRef(!1);return Yv(()=>{i.current=!0}),ce.useCallback(async(l,c={})=>{di(i.current,qv),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:t,...c}))},[r,t])}var c_={};function Qv(r,t,i){!t&&!c_[r]&&(c_[r]=!0,di(!1,i))}ce.memo(Zy);function Zy({routes:r,future:t,state:i,onError:s}){return Zv(r,void 0,i,s,t)}function _r(r){Xt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ky({basename:r="/",children:t=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:h}){Xt(!Xo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),p=ce.useMemo(()=>({basename:d,navigator:l,static:c,unstable_useTransitions:h,future:{}}),[d,l,c,h]);typeof i=="string"&&(i=Rr(i));let{pathname:m="/",search:g="",hash:_="",state:S=null,key:E="default"}=i,b=ce.useMemo(()=>{let M=ra(m,d);return M==null?null:{location:{pathname:M,search:g,hash:_,state:S,key:E},navigationType:s}},[d,m,g,_,S,E,s]);return di(b!=null,`<Router basename="${d}"> is not able to match the URL "${m}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:ce.createElement(hi.Provider,{value:p},ce.createElement(ko.Provider,{children:t,value:b}))}function Qy({children:r,location:t}){return By(Vd(r),t)}function Vd(r,t=[]){let i=[];return ce.Children.forEach(r,(s,l)=>{if(!ce.isValidElement(s))return;let c=[...t,l];if(s.type===ce.Fragment){i.push.apply(i,Vd(s.props.children,c));return}Xt(s.type===_r,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Vd(s.props.children,c)),i.push(h)}),i}var Uc="get",Nc="application/x-www-form-urlencoded";function Vc(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Jy(r){return Vc(r)&&r.tagName.toLowerCase()==="button"}function $y(r){return Vc(r)&&r.tagName.toLowerCase()==="form"}function eE(r){return Vc(r)&&r.tagName.toLowerCase()==="input"}function tE(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function nE(r,t){return r.button===0&&(!t||t==="_self")&&!tE(r)}var sc=null;function iE(){if(sc===null)try{new FormData(document.createElement("form"),0),sc=!1}catch{sc=!0}return sc}var aE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function cd(r){return r!=null&&!aE.has(r)?(di(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Nc}"`),null):r}function rE(r,t){let i,s,l,c,h;if($y(r)){let d=r.getAttribute("action");s=d?ra(d,t):null,i=r.getAttribute("method")||Uc,l=cd(r.getAttribute("enctype"))||Nc,c=new FormData(r)}else if(Jy(r)||eE(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||d.getAttribute("action");if(s=p?ra(p,t):null,i=r.getAttribute("formmethod")||d.getAttribute("method")||Uc,l=cd(r.getAttribute("formenctype"))||cd(d.getAttribute("enctype"))||Nc,c=new FormData(d,r),!iE()){let{name:m,type:g,value:_}=r;if(g==="image"){let S=m?`${m}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else m&&c.append(m,_)}}else{if(Vc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Uc,s=null,l=Nc,h=r}return c&&l==="text/plain"&&(h=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function rh(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function sE(r,t,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:t&&ra(l.pathname,t)==="/"?l.pathname=`${t.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function oE(r,t){if(r.id in t)return t[r.id];try{let i=await import(r.module);return t[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lE(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function cE(r,t,i){let s=await Promise.all(r.map(async l=>{let c=t.routes[l.route.id];if(c){let h=await oE(c,i);return h.links?h.links():[]}return[]}));return hE(s.flat(1).filter(lE).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function u_(r,t,i,s,l,c){let h=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,d=(p,m)=>{var g;return i[m].pathname!==p.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return c==="assets"?t.filter((p,m)=>h(p,m)||d(p,m)):c==="data"?t.filter((p,m)=>{var _;let g=s.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(h(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((_=i[0])==null?void 0:_.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function uE(r,t,{includeHydrateFallback:i}={}){return fE(r.map(s=>{let l=t.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function fE(r){return[...new Set(r)]}function dE(r){let t={},i=Object.keys(r).sort();for(let s of i)t[s]=r[s];return t}function hE(r,t){let i=new Set;return new Set(t),r.reduce((s,l)=>{let c=JSON.stringify(dE(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function Jv(){let r=ce.useContext(Ds);return rh(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function pE(){let r=ce.useContext(Gc);return rh(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var sh=ce.createContext(void 0);sh.displayName="FrameworkContext";function $v(){let r=ce.useContext(sh);return rh(r,"You must render this element inside a <HydratedRouter> element"),r}function mE(r,t){let i=ce.useContext(sh),[s,l]=ce.useState(!1),[c,h]=ce.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:_}=t,S=ce.useRef(null);ce.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let M=v=>{v.forEach(D=>{h(D.isIntersecting)})},y=new IntersectionObserver(M,{threshold:.5});return S.current&&y.observe(S.current),()=>{y.disconnect()}}},[r]),ce.useEffect(()=>{if(s){let M=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(M)}}},[s]);let E=()=>{l(!0)},b=()=>{l(!1),h(!1)};return i?r!=="intent"?[c,S,{}]:[c,S,{onFocus:Do(d,E),onBlur:Do(p,b),onMouseEnter:Do(m,E),onMouseLeave:Do(g,b),onTouchStart:Do(_,E)}]:[!1,S,{}]}function Do(r,t){return i=>{r&&r(i),i.defaultPrevented||t(i)}}function gE({page:r,...t}){let{router:i}=Jv(),s=ce.useMemo(()=>zv(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?ce.createElement(vE,{page:r,matches:s,...t}):null}function _E(r){let{manifest:t,routeModules:i}=$v(),[s,l]=ce.useState([]);return ce.useEffect(()=>{let c=!1;return cE(r,t,i).then(h=>{c||l(h)}),()=>{c=!0}},[r,t,i]),s}function vE({page:r,matches:t,...i}){let s=Za(),{future:l,manifest:c,routeModules:h}=$v(),{basename:d}=Jv(),{loaderData:p,matches:m}=pE(),g=ce.useMemo(()=>u_(r,t,m,c,s,"data"),[r,t,m,c,s]),_=ce.useMemo(()=>u_(r,t,m,c,s,"assets"),[r,t,m,c,s]),S=ce.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let M=new Set,y=!1;if(t.forEach(D=>{var O;let A=c.routes[D.route.id];!A||!A.hasLoader||(!g.some(k=>k.route.id===D.route.id)&&D.route.id in p&&((O=h[D.route.id])!=null&&O.shouldRevalidate)||A.hasClientLoader?y=!0:M.add(D.route.id))}),M.size===0)return[];let v=sE(r,d,l.unstable_trailingSlashAwareDataRequests,"data");return y&&M.size>0&&v.searchParams.set("_routes",t.filter(D=>M.has(D.route.id)).map(D=>D.route.id).join(",")),[v.pathname+v.search]},[d,l.unstable_trailingSlashAwareDataRequests,p,s,c,g,t,r,h]),E=ce.useMemo(()=>uE(_,c),[_,c]),b=_E(_);return ce.createElement(ce.Fragment,null,S.map(M=>ce.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),E.map(M=>ce.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),b.map(({key:M,link:y})=>ce.createElement("link",{key:M,nonce:i.nonce,...y})))}function xE(...r){return t=>{r.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var SE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{SE&&(window.__reactRouterVersion="7.12.0")}catch{}function yE({basename:r,children:t,unstable_useTransitions:i,window:s}){let l=ce.useRef();l.current==null&&(l.current=ey({window:s,v5Compat:!0}));let c=l.current,[h,d]=ce.useState({action:c.action,location:c.location}),p=ce.useCallback(m=>{i===!1?d(m):ce.startTransition(()=>d(m))},[i]);return ce.useLayoutEffect(()=>c.listen(p),[c,p]),ce.createElement(Ky,{basename:r,children:t,location:h.location,navigationType:h.action,navigator:c,unstable_useTransitions:i})}var e0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Er=ce.forwardRef(function({onClick:t,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:h,state:d,target:p,to:m,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:S,...E},b){let{basename:M,unstable_useTransitions:y}=ce.useContext(hi),v=typeof m=="string"&&e0.test(m),D=kv(m,M);m=D.to;let A=Oy(m,{relative:l}),[O,k,I]=mE(s,E),P=TE(m,{replace:h,state:d,target:p,preventScrollReset:g,relative:l,viewTransition:_,unstable_defaultShouldRevalidate:S,unstable_useTransitions:y});function pe(N){t&&t(N),N.defaultPrevented||P(N)}let C=ce.createElement("a",{...E,...I,href:D.absoluteURL||A,onClick:D.isExternal||c?t:pe,ref:xE(b,k),target:p,"data-discover":!v&&i==="render"?"true":void 0});return O&&!v?ce.createElement(ce.Fragment,null,C,ce.createElement(gE,{page:A})):C});Er.displayName="Link";var EE=ce.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:h,viewTransition:d,children:p,...m},g){let _=Wo(h,{relative:m.relative}),S=Za(),E=ce.useContext(Gc),{navigator:b,basename:M}=ce.useContext(hi),y=E!=null&&LE(_)&&d===!0,v=b.encodeLocation?b.encodeLocation(_).pathname:_.pathname,D=S.pathname,A=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(D=D.toLowerCase(),A=A?A.toLowerCase():null,v=v.toLowerCase()),A&&M&&(A=ra(A,M)||A);const O=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let k=D===v||!l&&D.startsWith(v)&&D.charAt(O)==="/",I=A!=null&&(A===v||!l&&A.startsWith(v)&&A.charAt(v.length)==="/"),P={isActive:k,isPending:I,isTransitioning:y},pe=k?t:void 0,C;typeof s=="function"?C=s(P):C=[s,k?"active":null,I?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let N=typeof c=="function"?c(P):c;return ce.createElement(Er,{...m,"aria-current":pe,className:C,ref:g,style:N,to:h,viewTransition:d},typeof p=="function"?p(P):p)});EE.displayName="NavLink";var ME=ce.forwardRef(({discover:r="render",fetcherKey:t,navigate:i,reloadDocument:s,replace:l,state:c,method:h=Uc,action:d,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:S,...E},b)=>{let{unstable_useTransitions:M}=ce.useContext(hi),y=CE(),v=wE(d,{relative:m}),D=h.toLowerCase()==="get"?"get":"post",A=typeof d=="string"&&e0.test(d),O=k=>{if(p&&p(k),k.defaultPrevented)return;k.preventDefault();let I=k.nativeEvent.submitter,P=(I==null?void 0:I.getAttribute("formmethod"))||h,pe=()=>y(I||k.currentTarget,{fetcherKey:t,method:P,navigate:i,replace:l,state:c,relative:m,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:S});M&&i!==!1?ce.startTransition(()=>pe()):pe()};return ce.createElement("form",{ref:b,method:D,action:v,onSubmit:s?p:O,...E,"data-discover":!A&&r==="render"?"true":void 0})});ME.displayName="Form";function bE(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function t0(r){let t=ce.useContext(Ds);return Xt(t,bE(r)),t}function TE(r,{target:t,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:h,unstable_defaultShouldRevalidate:d,unstable_useTransitions:p}={}){let m=nh(),g=Za(),_=Wo(r,{relative:c});return ce.useCallback(S=>{if(nE(S,t)){S.preventDefault();let E=i!==void 0?i:Io(g)===Io(_),b=()=>m(r,{replace:E,state:s,preventScrollReset:l,relative:c,viewTransition:h,unstable_defaultShouldRevalidate:d});p?ce.startTransition(()=>b()):b()}},[g,m,_,i,s,t,r,l,c,h,d,p])}var AE=0,RE=()=>`__${String(++AE)}__`;function CE(){let{router:r}=t0("useSubmit"),{basename:t}=ce.useContext(hi),i=jy(),s=r.fetch,l=r.navigate;return ce.useCallback(async(c,h={})=>{let{action:d,method:p,encType:m,formData:g,body:_}=rE(c,t);if(h.navigate===!1){let S=h.fetcherKey||RE();await s(S,i,h.action||d,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:g,body:_,formMethod:h.method||p,formEncType:h.encType||m,flushSync:h.flushSync})}else await l(h.action||d,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:g,body:_,formMethod:h.method||p,formEncType:h.encType||m,replace:h.replace,state:h.state,fromRouteId:i,flushSync:h.flushSync,viewTransition:h.viewTransition})},[s,l,t,i])}function wE(r,{relative:t}={}){let{basename:i}=ce.useContext(hi),s=ce.useContext(Ui);Xt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...Wo(r||".",{relative:t})},h=Za();if(r==null){c.search=h.search;let d=new URLSearchParams(c.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(_=>_).forEach(_=>d.append("index",_));let g=d.toString();c.search=g?`?${g}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:aa([i,c.pathname])),Io(c)}function LE(r,{relative:t}={}){let i=ce.useContext(Wv);Xt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=t0("useViewTransitionState"),l=Wo(r,{relative:t});if(!i.isTransitioning)return!1;let c=ra(i.currentLocation.pathname,s)||i.currentLocation.pathname,h=ra(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Pc(l.pathname,h)!=null||Pc(l.pathname,c)!=null}const DE=()=>{const r=Za(),t=i=>r.pathname===i;return F.jsxs("nav",{className:"fixed top-0 left-0 w-full z-50 px-12 py-12 md:px-24 md:py-16 flex justify-between items-center pointer-events-none",children:[F.jsx("div",{className:"pointer-events-auto",children:F.jsx(Er,{to:"/",className:"text-3xl font-artful font-bold tracking-tighter block leading-none hover:underline decoration-citron decoration-4 underline-offset-4",children:"SPHNSX"})}),F.jsxs("div",{className:"flex gap-10 pointer-events-auto items-center",children:[F.jsx(Er,{to:"/",className:`relative text-xs uppercase tracking-[0.4em] font-bold transition-all py-2 ${t("/")?"text-midnight border-b-4 border-cornflower":"text-midnight/40 hover:text-midnight hover:border-b-4 hover:border-cornflower/30"}`,children:"Work"}),F.jsx(Er,{to:"/about",className:`relative text-xs uppercase tracking-[0.4em] font-bold transition-all py-2 ${t("/about")?"text-midnight border-b-4 border-cornflower":"text-midnight/40 hover:text-midnight hover:border-b-4 hover:border-cornflower/30"}`,children:"About"})]})]})},UE={aboutMe:`Silvia (b 1999) is a London-based fine art photographer whose work interrogates the fluid boundaries between the tangible and the perceived. A graduate of Central Saint Martins, she has pivoted from the structural rigour of fashion towards a more ephemeral exploration of the 'shifted concept' — capturing the weight of a glance within a fleeting moment.

Her practice is deeply rooted in travel and the quiet observation of nature and still life. By isolating objects from their traditional contexts, Silvia creates unreal spaces where philosophical enquiry and visual subtlety converge. For her, the camera is not a tool for documentation, but a medium for leaping between states of being.`,projects:[{id:"hush-hush",title:"HUSH HUSH",description:`HUSH HUSH was photographed in Humlebæk, Denmark, during the long light of a Northern European summer. The series observes quiet fragments of an ordinary afternoon — wild flowers in a field, reflections in open windows, a distant boat, a house half-hidden by trees.

In this region, when the sun finally arrives, everyone steps outside. Parks and seafronts fill with people, yet in these photographs the crowd is barely visible. Shot through a 90mm lens, each frame isolates a scene or object, keeping distance while moving closer. The images appear serene, though they are surrounded by life and sound.`,imageUrl:"",gallery:[],year:"June 2025"}]},NE="silvia_admin",kc="silvia_jiang_portfolio_v1",Fo=()=>{const r=localStorage.getItem(kc);return r?JSON.parse(r):UE},OE=r=>{const t=Fo();t.aboutMe=r,localStorage.setItem(kc,JSON.stringify(t))},PE=r=>{const t=Fo();t.projects.unshift(r),localStorage.setItem(kc,JSON.stringify(t))},zE=r=>{const t=Fo();t.projects=t.projects.filter(i=>i.id!==r),localStorage.setItem(kc,JSON.stringify(t))},BE=({data:r,onRefresh:t,onLogout:i})=>{const s=nh(),[l,c]=ce.useState(r.aboutMe),[h,d]=ce.useState(!1),[p,m]=ce.useState("content"),[g,_]=ce.useState({title:"",description:"",imageUrl:"",gallery:[],year:new Date().getFullYear().toString()}),S=()=>{OE(l),t(),alert("Biography updated.")},E=v=>{if(v.preventDefault(),!g.title||g.gallery.length===0){alert("Please provide a title and at least one image.");return}PE({...g,id:Date.now().toString()}),_({title:"",description:"",imageUrl:"",gallery:[],year:"2025"}),t(),alert("Project published successfully.")},b=v=>{confirm("Are you sure you want to delete this project?")&&(zE(v),t())},M=async v=>{const D=v.target.files;if(!D||D.length===0)return;d(!0);const A=[];for(let O=0;O<D.length;O++){const k=D[O],I=new FileReader,pe=await new Promise(C=>{I.onloadend=()=>C(I.result),I.readAsDataURL(k)});A.push(pe)}_(O=>({...O,imageUrl:A[0],gallery:A})),d(!1)},y=()=>{i(),s("/")};return F.jsxs("div",{className:"max-w-6xl mx-auto py-40 px-8 space-y-24 font-sans bg-white",children:[F.jsxs("header",{className:"flex flex-col md:flex-row md:items-end justify-between gap-8",children:[F.jsxs("div",{className:"flex items-end gap-6",children:[F.jsx("div",{className:"w-16 h-16 bg-citron border-4 border-midnight"}),F.jsxs("div",{children:[F.jsx("h1",{className:"text-6xl font-artful font-bold tracking-tighter uppercase leading-none",children:"Editor"}),F.jsx("p",{className:"text-midnight/40 text-xs uppercase tracking-widest font-bold",children:"Project Management System"})]})]}),F.jsxs("div",{className:"flex gap-4 items-end",children:[F.jsx("button",{onClick:()=>m("content"),className:`px-6 py-3 text-[10px] uppercase tracking-widest font-bold border-4 border-midnight transition-colors ${p==="content"?"bg-midnight text-white":"bg-white text-midnight hover:bg-mist"}`,children:"Manage Content"}),F.jsx("button",{onClick:()=>m("deployment"),className:`px-6 py-3 text-[10px] uppercase tracking-widest font-bold border-4 border-midnight transition-colors ${p==="deployment"?"bg-midnight text-white":"bg-white text-midnight hover:bg-citron"}`,children:"Domain Setup"}),F.jsx("button",{onClick:y,className:"px-6 py-3 text-[10px] uppercase tracking-widest font-bold border-4 border-midnight bg-white text-midnight hover:bg-red-500 hover:text-white transition-colors",children:"Logout"})]})]}),p==="content"?F.jsxs("div",{className:"space-y-32",children:[F.jsxs("section",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12",children:[F.jsx("div",{className:"lg:col-span-4",children:F.jsx("h2",{className:"text-xl font-artful font-bold uppercase tracking-widest bg-mist inline-block p-2 border-2 border-midnight",children:"Biography"})}),F.jsxs("div",{className:"lg:col-span-8 space-y-6",children:[F.jsx("textarea",{className:"w-full h-48 p-6 border-4 border-midnight focus:bg-mist/10 outline-none text-xl font-medium bg-transparent leading-relaxed",value:l,onChange:v=>c(v.target.value)}),F.jsx("button",{onClick:S,className:"bg-midnight text-white px-12 py-5 hover:bg-cornflower transition-colors text-xs uppercase tracking-[0.3em] font-bold border-4 border-midnight",children:"Save Biography"})]})]}),F.jsxs("section",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12",children:[F.jsx("div",{className:"lg:col-span-4",children:F.jsx("h2",{className:"text-xl font-artful font-bold uppercase tracking-widest bg-citron inline-block p-2 border-2 border-midnight",children:"New Project"})}),F.jsx("div",{className:"lg:col-span-8",children:F.jsxs("form",{onSubmit:E,className:"space-y-8",children:[F.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[F.jsxs("div",{className:"space-y-2",children:[F.jsx("label",{className:"text-[10px] uppercase tracking-widest font-bold opacity-40",children:"Project Title"}),F.jsx("input",{type:"text",placeholder:"e.g. HUSH HUSH",className:"w-full p-5 border-4 border-midnight focus:bg-citron/5 outline-none bg-transparent text-lg font-bold",value:g.title,onChange:v=>_({...g,title:v.target.value}),required:!0})]}),F.jsxs("div",{className:"space-y-2",children:[F.jsx("label",{className:"text-[10px] uppercase tracking-widest font-bold opacity-40",children:"Completion Date"}),F.jsx("input",{type:"text",placeholder:"e.g. June 2025",className:"w-full p-5 border-4 border-midnight focus:bg-citron/5 outline-none bg-transparent text-lg font-bold",value:g.year,onChange:v=>_({...g,year:v.target.value}),required:!0})]})]}),F.jsxs("div",{className:"space-y-2",children:[F.jsx("label",{className:"text-[10px] uppercase tracking-widest font-bold opacity-40",children:"Narrative / Description"}),F.jsx("textarea",{placeholder:"Describe the series...",className:"w-full p-5 border-4 border-midnight focus:bg-citron/5 outline-none bg-transparent text-lg font-medium h-40 leading-relaxed",value:g.description,onChange:v=>_({...g,description:v.target.value})})]}),F.jsxs("div",{className:"relative group",children:[F.jsx("div",{className:"absolute inset-0 bg-cornflower translate-x-2 translate-y-2 -z-10 border-2 border-midnight"}),F.jsxs("div",{className:"bg-white border-4 border-midnight p-8",children:[F.jsx("label",{className:"block text-sm font-bold uppercase tracking-widest mb-4",children:"Select Your Photos"}),F.jsx("input",{type:"file",accept:"image/*",multiple:!0,className:"block w-full text-sm text-midnight/40 file:mr-6 file:py-4 file:px-8 file:border-4 file:border-midnight file:bg-midnight file:text-white file:font-bold file:uppercase hover:file:bg-cornflower transition-all cursor-pointer",onChange:M})]})]}),g.gallery.length>0&&F.jsxs("div",{className:"bg-mist/20 border-4 border-midnight p-6",children:[F.jsxs("p",{className:"text-xs uppercase tracking-widest font-bold mb-4",children:[g.gallery.length," Images ready for upload"]}),F.jsx("div",{className:"flex gap-2 overflow-x-auto pb-4",children:g.gallery.map((v,D)=>F.jsx("img",{src:v,alt:"",className:"h-20 w-auto border-2 border-midnight"},D))})]}),F.jsx("button",{type:"submit",disabled:h,className:`w-full md:w-auto bg-midnight text-white px-16 py-6 hover:bg-citron hover:text-midnight transition-all text-sm uppercase tracking-[0.4em] font-bold border-4 border-midnight shadow-[10px_10px_0px_0px_rgba(105,134,232,1)] active:shadow-none active:translate-x-1 active:translate-y-1 ${h?"opacity-50 cursor-not-allowed":""}`,children:h?"Processing Images...":"Publish Project"})]})})]}),F.jsxs("section",{className:"space-y-12",children:[F.jsx("h2",{className:"text-xl font-artful font-bold uppercase tracking-widest bg-midnight text-white inline-block p-2",children:"Published Works"}),F.jsx("div",{className:"grid grid-cols-1 gap-6",children:r.projects.map(v=>F.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between p-8 border-4 border-midnight bg-white hover:shadow-[12px_12px_0px_0px_rgba(231,255,110,1)] transition-all gap-8",children:[F.jsxs("div",{className:"flex items-center gap-8 w-full",children:[F.jsx("div",{className:"w-48 h-24 bg-midnight/5 overflow-hidden border-2 border-midnight shrink-0",children:v.imageUrl?F.jsx("img",{src:v.imageUrl,alt:v.title,className:"w-full h-full object-cover"}):F.jsx("div",{className:"w-full h-full flex items-center justify-center text-[10px] font-bold opacity-20 uppercase tracking-widest",children:"No Image"})}),F.jsxs("div",{children:[F.jsx("span",{className:"font-bold uppercase tracking-tighter text-2xl block",children:v.title}),F.jsxs("span",{className:"text-[10px] uppercase tracking-widest font-bold opacity-40",children:[v.year," — ",v.gallery.length," plates"]})]})]}),F.jsx("button",{onClick:()=>b(v.id),className:"w-full md:w-auto text-midnight border-4 border-midnight hover:bg-red-500 hover:text-white px-8 py-4 text-[10px] uppercase tracking-widest font-bold transition-all",children:"Delete Series"})]},v.id))})]})]}):F.jsxs("section",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12",children:[F.jsxs("div",{className:"lg:col-span-4",children:[F.jsx("h2",{className:"text-xl font-artful font-bold uppercase tracking-widest bg-citron inline-block p-2 border-2 border-midnight",children:"Domain Resolution"}),F.jsx("p",{className:"mt-4 text-xs font-bold opacity-40 leading-relaxed max-w-[200px]",children:'Follow these steps to fix the "sphnsx.net" redirection issue.'})]}),F.jsxs("div",{className:"lg:col-span-8 space-y-12",children:[F.jsxs("div",{className:"bg-mist/10 border-4 border-midnight p-10 space-y-8",children:[F.jsxs("div",{className:"space-y-4",children:[F.jsx("h3",{className:"text-2xl font-artful font-bold underline decoration-citron decoration-4 underline-offset-4",children:"Step 1: Fix the Naked Domain"}),F.jsxs("p",{className:"text-sm font-medium leading-relaxed",children:["Browsers treat ",F.jsx("span",{className:"font-bold",children:"sphnsx.net"})," differently than ",F.jsx("span",{className:"font-bold",children:"www.sphnsx.net"}),". To fix this, you must log into your domain registrar (e.g. GoDaddy, Namecheap) and add an ",F.jsx("span",{className:"bg-midnight text-white px-2 py-0.5 font-bold",children:"A Record"}),"."]}),F.jsxs("div",{className:"bg-white border-2 border-midnight p-4 font-mono text-[11px] space-y-2",children:[F.jsx("p",{className:"opacity-40",children:"// Set your naked domain record"}),F.jsxs("p",{children:[F.jsx("span",{className:"text-cornflower",children:"Type:"})," A"]}),F.jsxs("p",{children:[F.jsx("span",{className:"text-cornflower",children:"Host:"})," @"]}),F.jsxs("p",{children:[F.jsx("span",{className:"text-cornflower",children:"Value:"})," (Your Host IP Address)"]})]})]}),F.jsxs("div",{className:"space-y-4",children:[F.jsx("h3",{className:"text-2xl font-artful font-bold underline decoration-cornflower decoration-4 underline-offset-4",children:"Step 2: Enable Forwarding"}),F.jsxs("p",{className:"text-sm font-medium leading-relaxed",children:["Look for a setting called ",F.jsx("span",{className:"font-bold",children:"Domain Forwarding"}),". Configure it to redirect any traffic from ",F.jsx("span",{className:"italic",children:"sphnsx.net"})," to ",F.jsx("span",{className:"italic",children:"https://www.sphnsx.net"})," using a ",F.jsx("span",{className:"font-bold",children:"301 (Permanent) Redirect"}),"."]})]}),F.jsxs("div",{className:"p-6 bg-citron/20 border-2 border-midnight border-dashed",children:[F.jsx("p",{className:"text-[10px] uppercase tracking-widest font-bold",children:"Pro Tip: SSL Encryption"}),F.jsx("p",{className:"text-xs mt-2 font-medium",children:"Ensure your host has an active SSL certificate. Browsers will block a site that redirects from HTTP to a non-secure domain."})]})]}),F.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[F.jsxs("div",{className:"p-6 border-4 border-midnight text-center",children:[F.jsx("span",{className:"text-2xl font-bold block mb-2",children:"404"}),F.jsx("span",{className:"text-[10px] uppercase tracking-widest font-bold opacity-40",children:"App Router"}),F.jsx("p",{className:"text-[9px] mt-4 uppercase font-bold text-citron bg-midnight p-1",children:"Active"})]}),F.jsxs("div",{className:"p-6 border-4 border-midnight text-center",children:[F.jsx("span",{className:"text-2xl font-bold block mb-2",children:"WWW"}),F.jsx("span",{className:"text-[10px] uppercase tracking-widest font-bold opacity-40",children:"Subdomain"}),F.jsx("p",{className:"text-[9px] mt-4 uppercase font-bold text-cornflower bg-midnight p-1",children:"Operational"})]}),F.jsxs("div",{className:"p-6 border-4 border-midnight text-center",children:[F.jsx("span",{className:"text-2xl font-bold block mb-2",children:"@"}),F.jsx("span",{className:"text-[10px] uppercase tracking-widest font-bold opacity-40",children:"Root DNS"}),F.jsx("p",{className:"text-[9px] mt-4 uppercase font-bold text-red-400 bg-midnight p-1",children:"Action Req."})]})]})]})]})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oh="160",IE=0,f_=1,FE=2,n0=1,HE=2,ta=3,Ya=0,Hn=1,na=2,Wa=0,Ts=1,d_=2,h_=3,p_=4,GE=5,Sr=100,VE=101,kE=102,m_=103,g_=104,XE=200,WE=201,jE=202,qE=203,kd=204,Xd=205,YE=206,ZE=207,KE=208,QE=209,JE=210,$E=211,eM=212,tM=213,nM=214,iM=0,aM=1,rM=2,zc=3,sM=4,oM=5,lM=6,cM=7,i0=0,uM=1,fM=2,ja=0,dM=1,hM=2,pM=3,mM=4,gM=5,_M=6,a0=300,Rs=301,Cs=302,Wd=303,jd=304,Xc=306,qd=1e3,Ei=1001,Yd=1002,Ln=1003,__=1004,ud=1005,ci=1006,vM=1007,Ho=1008,qa=1009,xM=1010,SM=1011,lh=1012,r0=1013,Va=1014,ka=1015,Go=1016,s0=1017,o0=1018,Mr=1020,yM=1021,Mi=1023,EM=1024,MM=1025,br=1026,ws=1027,bM=1028,l0=1029,TM=1030,c0=1031,u0=1033,fd=33776,dd=33777,hd=33778,pd=33779,v_=35840,x_=35841,S_=35842,y_=35843,f0=36196,E_=37492,M_=37496,b_=37808,T_=37809,A_=37810,R_=37811,C_=37812,w_=37813,L_=37814,D_=37815,U_=37816,N_=37817,O_=37818,P_=37819,z_=37820,B_=37821,md=36492,I_=36494,F_=36495,AM=36283,H_=36284,G_=36285,V_=36286,d0=3e3,Tr=3001,RM=3200,CM=3201,wM=0,LM=1,fi="",Sn="srgb",sa="srgb-linear",ch="display-p3",Wc="display-p3-linear",Bc="linear",Gt="srgb",Ic="rec709",Fc="p3",os=7680,k_=519,DM=512,UM=513,NM=514,h0=515,OM=516,PM=517,zM=518,BM=519,X_=35044,W_="300 es",Zd=1035,ia=2e3,Hc=2001;class Us{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gd=Math.PI/180,Kd=180/Math.PI;function jo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[i&63|128]+Tn[i>>8&255]+"-"+Tn[i>>16&255]+Tn[i>>24&255]+Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]).toLowerCase()}function Fn(r,t,i){return Math.max(t,Math.min(i,r))}function IM(r,t){return(r%t+t)%t}function _d(r,t,i){return(1-i)*r+i*t}function j_(r){return(r&r-1)===0&&r!==0}function Qd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Uo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(t=0,i=0){Ct.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Fn(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(t,i,s,l,c,h,d,p,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,p,m)}set(t,i,s,l,c,h,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=s,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],g=s[4],_=s[7],S=s[2],E=s[5],b=s[8],M=l[0],y=l[3],v=l[6],D=l[1],A=l[4],O=l[7],k=l[2],I=l[5],P=l[8];return c[0]=h*M+d*D+p*k,c[3]=h*y+d*A+p*I,c[6]=h*v+d*O+p*P,c[1]=m*M+g*D+_*k,c[4]=m*y+g*A+_*I,c[7]=m*v+g*O+_*P,c[2]=S*M+E*D+b*k,c[5]=S*y+E*A+b*I,c[8]=S*v+E*O+b*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return i*h*g-i*d*m-s*c*g+s*d*p+l*c*m-l*h*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=g*h-d*m,S=d*p-g*c,E=m*c-h*p,b=i*_+s*S+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/b;return t[0]=_*M,t[1]=(l*m-g*s)*M,t[2]=(d*s-l*h)*M,t[3]=S*M,t[4]=(g*i-l*p)*M,t[5]=(l*c-d*i)*M,t[6]=E*M,t[7]=(s*p-m*i)*M,t[8]=(h*i-s*c)*M,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(vd.makeScale(t,i)),this}rotate(t){return this.premultiply(vd.makeRotation(-t)),this}translate(t,i){return this.premultiply(vd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vd=new dt;function p0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Vo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function FM(){const r=Vo("canvas");return r.style.display="block",r}const q_={};function Bo(r){r in q_||(q_[r]=!0,console.warn(r))}const Y_=new dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Z_=new dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oc={[sa]:{transfer:Bc,primaries:Ic,toReference:r=>r,fromReference:r=>r},[Sn]:{transfer:Gt,primaries:Ic,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Wc]:{transfer:Bc,primaries:Fc,toReference:r=>r.applyMatrix3(Z_),fromReference:r=>r.applyMatrix3(Y_)},[ch]:{transfer:Gt,primaries:Fc,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Z_),fromReference:r=>r.applyMatrix3(Y_).convertLinearToSRGB()}},HM=new Set([sa,Wc]),Ot={enabled:!0,_workingColorSpace:sa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!HM.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,i){if(this.enabled===!1||t===i||!t||!i)return r;const s=oc[t].toReference,l=oc[i].fromReference;return l(s(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return oc[r].primaries},getTransfer:function(r){return r===fi?Bc:oc[r].transfer}};function As(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xd(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ls;class m0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ls===void 0&&(ls=Vo("canvas")),ls.width=t.width,ls.height=t.height;const s=ls.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ls}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Vo("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=As(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(As(i[s]/255)*255):i[s]=As(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let GM=0;class g0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=jo(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Sd(l[h].image)):c.push(Sd(l[h]))}else c=Sd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Sd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?m0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VM=0;class Gn extends Us{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=Ei,l=Ei,c=ci,h=Ho,d=Mi,p=qa,m=Gn.DEFAULT_ANISOTROPY,g=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=jo(),this.name="",this.source=new g0(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Tr?Sn:fi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==a0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qd:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case Yd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qd:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case Yd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Sn?Tr:d0}set encoding(t){Bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Tr?Sn:fi}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=a0;Gn.DEFAULT_ANISOTROPY=1;class yn{constructor(t=0,i=0,s=0,l=1){yn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],S=p[1],E=p[5],b=p[9],M=p[2],y=p[6],v=p[10];if(Math.abs(g-S)<.01&&Math.abs(_-M)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+M)<.1&&Math.abs(b+y)<.1&&Math.abs(m+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const A=(m+1)/2,O=(E+1)/2,k=(v+1)/2,I=(g+S)/4,P=(_+M)/4,pe=(b+y)/4;return A>O&&A>k?A<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(A),l=I/s,c=P/s):O>k?O<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),s=I/l,c=pe/l):k<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),s=P/c,l=pe/c),this.set(s,l,c,i),this}let D=Math.sqrt((y-b)*(y-b)+(_-M)*(_-M)+(S-g)*(S-g));return Math.abs(D)<.001&&(D=1),this.x=(y-b)/D,this.y=(_-M)/D,this.z=(S-g)/D,this.w=Math.acos((m+E+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kM extends Us{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new yn(0,0,t,i),this.scissorTest=!1,this.viewport=new yn(0,0,t,i);const l={width:t,height:i,depth:1};s.encoding!==void 0&&(Bo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===Tr?Sn:fi),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new Gn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(t,i,s=1){(this.width!==t||this.height!==i||this.depth!==s)&&(this.width=t,this.height=i,this.depth=s,this.texture.image.width=t,this.texture.image.height=i,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new g0(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends kM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class _0 extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class XM extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let p=s[l+0],m=s[l+1],g=s[l+2],_=s[l+3];const S=c[h+0],E=c[h+1],b=c[h+2],M=c[h+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=S,t[i+1]=E,t[i+2]=b,t[i+3]=M;return}if(_!==M||p!==S||m!==E||g!==b){let y=1-d;const v=p*S+m*E+g*b+_*M,D=v>=0?1:-1,A=1-v*v;if(A>Number.EPSILON){const k=Math.sqrt(A),I=Math.atan2(k,v*D);y=Math.sin(y*I)/k,d=Math.sin(d*I)/k}const O=d*D;if(p=p*y+S*O,m=m*y+E*O,g=g*y+b*O,_=_*y+M*O,y===1-d){const k=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=k,m*=k,g*=k,_*=k}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],p=s[l+1],m=s[l+2],g=s[l+3],_=c[h],S=c[h+1],E=c[h+2],b=c[h+3];return t[i]=d*b+g*_+p*E-m*S,t[i+1]=p*b+g*S+m*_-d*E,t[i+2]=m*b+g*E+d*S-p*_,t[i+3]=g*b-d*_-p*S-m*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(s/2),g=d(l/2),_=d(c/2),S=p(s/2),E=p(l/2),b=p(c/2);switch(h){case"XYZ":this._x=S*g*_+m*E*b,this._y=m*E*_-S*g*b,this._z=m*g*b+S*E*_,this._w=m*g*_-S*E*b;break;case"YXZ":this._x=S*g*_+m*E*b,this._y=m*E*_-S*g*b,this._z=m*g*b-S*E*_,this._w=m*g*_+S*E*b;break;case"ZXY":this._x=S*g*_-m*E*b,this._y=m*E*_+S*g*b,this._z=m*g*b+S*E*_,this._w=m*g*_-S*E*b;break;case"ZYX":this._x=S*g*_-m*E*b,this._y=m*E*_+S*g*b,this._z=m*g*b-S*E*_,this._w=m*g*_+S*E*b;break;case"YZX":this._x=S*g*_+m*E*b,this._y=m*E*_+S*g*b,this._z=m*g*b-S*E*_,this._w=m*g*_-S*E*b;break;case"XZY":this._x=S*g*_-m*E*b,this._y=m*E*_-S*g*b,this._z=m*g*b+S*E*_,this._w=m*g*_+S*E*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],_=i[10],S=s+d+_;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(g-p)*E,this._y=(c-m)*E,this._z=(h-l)*E}else if(s>d&&s>_){const E=2*Math.sqrt(1+s-d-_);this._w=(g-p)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+m)/E}else if(d>_){const E=2*Math.sqrt(1+d-s-_);this._w=(c-m)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(p+g)/E}else{const E=2*Math.sqrt(1+_-s-d);this._w=(h-l)/E,this._x=(c+m)/E,this._y=(p+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fn(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=s*g+h*d+l*m-c*p,this._y=l*g+h*p+c*d-s*m,this._z=c*g+h*m+s*p-l*d,this._w=h*g-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const E=1-i;return this._w=E*h+i*this._w,this._x=E*s+i*this._x,this._y=E*l+i*this._y,this._z=E*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),_=Math.sin((1-i)*g)/m,S=Math.sin(i*g)/m;return this._w=h*_+this._w*S,this._x=s*_+this._x*S,this._y=l*_+this._y*S,this._z=c*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=Math.random(),i=Math.sqrt(1-t),s=Math.sqrt(t),l=2*Math.PI*Math.random(),c=2*Math.PI*Math.random();return this.set(i*Math.cos(l),s*Math.sin(c),s*Math.cos(c),i*Math.sin(l))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(t=0,i=0,s=0){oe.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(K_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(K_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*s),g=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+p*m+h*_-d*g,this.y=s+p*g+d*m-c*_,this.z=l+p*_+c*g-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-s*p,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return yd.copy(this).projectOnVector(t),this.sub(yd)}reflect(t){return this.sub(yd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Fn(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,s=Math.sqrt(1-t**2);return this.x=s*Math.cos(i),this.y=s*Math.sin(i),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yd=new oe,K_=new qo;class Yo{constructor(t=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,vi):vi.fromBufferAttribute(c,h),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),lc.copy(s.boundingBox)),lc.applyMatrix4(t.matrixWorld),this.union(lc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),cc.subVectors(this.max,No),cs.subVectors(t.a,No),us.subVectors(t.b,No),fs.subVectors(t.c,No),Ba.subVectors(us,cs),Ia.subVectors(fs,us),hr.subVectors(cs,fs);let i=[0,-Ba.z,Ba.y,0,-Ia.z,Ia.y,0,-hr.z,hr.y,Ba.z,0,-Ba.x,Ia.z,0,-Ia.x,hr.z,0,-hr.x,-Ba.y,Ba.x,0,-Ia.y,Ia.x,0,-hr.y,hr.x,0];return!Ed(i,cs,us,fs,cc)||(i=[1,0,0,0,1,0,0,0,1],!Ed(i,cs,us,fs,cc))?!1:(uc.crossVectors(Ba,Ia),i=[uc.x,uc.y,uc.z],Ed(i,cs,us,fs,cc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ki=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],vi=new oe,lc=new Yo,cs=new oe,us=new oe,fs=new oe,Ba=new oe,Ia=new oe,hr=new oe,No=new oe,cc=new oe,uc=new oe,pr=new oe;function Ed(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){pr.fromArray(r,c);const d=l.x*Math.abs(pr.x)+l.y*Math.abs(pr.y)+l.z*Math.abs(pr.z),p=t.dot(pr),m=i.dot(pr),g=s.dot(pr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const WM=new Yo,Oo=new oe,Md=new oe;class jc{constructor(t=new oe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):WM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Oo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Md.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add(Md)),this.expandByPoint(Oo.copy(t.center).sub(Md))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new oe,bd=new oe,fc=new oe,Fa=new oe,Td=new oe,dc=new oe,Ad=new oe;class v0{constructor(t=new oe,i=new oe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Qi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,i),Qi.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){bd.copy(t).add(i).multiplyScalar(.5),fc.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(bd);const c=t.distanceTo(i)*.5,h=-this.direction.dot(fc),d=Fa.dot(this.direction),p=-Fa.dot(fc),m=Fa.lengthSq(),g=Math.abs(1-h*h);let _,S,E,b;if(g>0)if(_=h*p-d,S=h*d-p,b=c*g,_>=0)if(S>=-b)if(S<=b){const M=1/g;_*=M,S*=M,E=_*(_+h*S+2*d)+S*(h*_+S+2*p)+m}else S=c,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*p)+m;else S=-c,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*p)+m;else S<=-b?(_=Math.max(0,-(-h*c+d)),S=_>0?-c:Math.min(Math.max(-c,-p),c),E=-_*_+S*(S+2*p)+m):S<=b?(_=0,S=Math.min(Math.max(-c,-p),c),E=S*(S+2*p)+m):(_=Math.max(0,-(h*c+d)),S=_>0?c:Math.min(Math.max(-c,-p),c),E=-_*_+S*(S+2*p)+m);else S=h>0?-c:c,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(bd).addScaledVector(fc,S),E}intersectSphere(t,i){Qi.subVectors(t.center,this.origin);const s=Qi.dot(this.direction),l=Qi.dot(Qi)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return m>=0?(s=(t.min.x-S.x)*m,l=(t.max.x-S.x)*m):(s=(t.max.x-S.x)*m,l=(t.min.x-S.x)*m),g>=0?(c=(t.min.y-S.y)*g,h=(t.max.y-S.y)*g):(c=(t.max.y-S.y)*g,h=(t.min.y-S.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-S.z)*_,p=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,p=(t.min.z-S.z)*_),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,i,s,l,c){Td.subVectors(i,t),dc.subVectors(s,t),Ad.crossVectors(Td,dc);let h=this.direction.dot(Ad),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Fa.subVectors(this.origin,t);const p=d*this.direction.dot(dc.crossVectors(Fa,dc));if(p<0)return null;const m=d*this.direction.dot(Td.cross(Fa));if(m<0||p+m>h)return null;const g=-d*Fa.dot(Ad);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(t,i,s,l,c,h,d,p,m,g,_,S,E,b,M,y){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,p,m,g,_,S,E,b,M,y)}set(t,i,s,l,c,h,d,p,m,g,_,S,E,b,M,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=S,v[3]=E,v[7]=b,v[11]=M,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/ds.setFromMatrixColumn(t,0).length(),c=1/ds.setFromMatrixColumn(t,1).length(),h=1/ds.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const S=h*g,E=h*_,b=d*g,M=d*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=E+b*m,i[5]=S-M*m,i[9]=-d*p,i[2]=M-S*m,i[6]=b+E*m,i[10]=h*p}else if(t.order==="YXZ"){const S=p*g,E=p*_,b=m*g,M=m*_;i[0]=S+M*d,i[4]=b*d-E,i[8]=h*m,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=E*d-b,i[6]=M+S*d,i[10]=h*p}else if(t.order==="ZXY"){const S=p*g,E=p*_,b=m*g,M=m*_;i[0]=S-M*d,i[4]=-h*_,i[8]=b+E*d,i[1]=E+b*d,i[5]=h*g,i[9]=M-S*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const S=h*g,E=h*_,b=d*g,M=d*_;i[0]=p*g,i[4]=b*m-E,i[8]=S*m+M,i[1]=p*_,i[5]=M*m+S,i[9]=E*m-b,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const S=h*p,E=h*m,b=d*p,M=d*m;i[0]=p*g,i[4]=M-S*_,i[8]=b*_+E,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=E*_+b,i[10]=S-M*_}else if(t.order==="XZY"){const S=h*p,E=h*m,b=d*p,M=d*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=S*_+M,i[5]=h*g,i[9]=E*_-b,i[2]=b*_-E,i[6]=d*g,i[10]=M*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jM,t,qM)}lookAt(t,i,s){const l=this.elements;return Qn.subVectors(t,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ha.crossVectors(s,Qn),Ha.lengthSq()===0&&(Math.abs(s.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ha.crossVectors(s,Qn)),Ha.normalize(),hc.crossVectors(Qn,Ha),l[0]=Ha.x,l[4]=hc.x,l[8]=Qn.x,l[1]=Ha.y,l[5]=hc.y,l[9]=Qn.y,l[2]=Ha.z,l[6]=hc.z,l[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],g=s[1],_=s[5],S=s[9],E=s[13],b=s[2],M=s[6],y=s[10],v=s[14],D=s[3],A=s[7],O=s[11],k=s[15],I=l[0],P=l[4],pe=l[8],C=l[12],N=l[1],ue=l[5],he=l[9],Me=l[13],W=l[2],ee=l[6],z=l[10],j=l[14],Q=l[3],le=l[7],fe=l[11],L=l[15];return c[0]=h*I+d*N+p*W+m*Q,c[4]=h*P+d*ue+p*ee+m*le,c[8]=h*pe+d*he+p*z+m*fe,c[12]=h*C+d*Me+p*j+m*L,c[1]=g*I+_*N+S*W+E*Q,c[5]=g*P+_*ue+S*ee+E*le,c[9]=g*pe+_*he+S*z+E*fe,c[13]=g*C+_*Me+S*j+E*L,c[2]=b*I+M*N+y*W+v*Q,c[6]=b*P+M*ue+y*ee+v*le,c[10]=b*pe+M*he+y*z+v*fe,c[14]=b*C+M*Me+y*j+v*L,c[3]=D*I+A*N+O*W+k*Q,c[7]=D*P+A*ue+O*ee+k*le,c[11]=D*pe+A*he+O*z+k*fe,c[15]=D*C+A*Me+O*j+k*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],p=t[9],m=t[13],g=t[2],_=t[6],S=t[10],E=t[14],b=t[3],M=t[7],y=t[11],v=t[15];return b*(+c*p*_-l*m*_-c*d*S+s*m*S+l*d*E-s*p*E)+M*(+i*p*E-i*m*S+c*h*S-l*h*E+l*m*g-c*p*g)+y*(+i*m*_-i*d*E-c*h*_+s*h*E+c*d*g-s*m*g)+v*(-l*d*g-i*p*_+i*d*S+l*h*_-s*h*S+s*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=t[9],S=t[10],E=t[11],b=t[12],M=t[13],y=t[14],v=t[15],D=_*y*m-M*S*m+M*p*E-d*y*E-_*p*v+d*S*v,A=b*S*m-g*y*m-b*p*E+h*y*E+g*p*v-h*S*v,O=g*M*m-b*_*m+b*d*E-h*M*E-g*d*v+h*_*v,k=b*_*p-g*M*p-b*d*S+h*M*S+g*d*y-h*_*y,I=i*D+s*A+l*O+c*k;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=D*P,t[1]=(M*S*c-_*y*c-M*l*E+s*y*E+_*l*v-s*S*v)*P,t[2]=(d*y*c-M*p*c+M*l*m-s*y*m-d*l*v+s*p*v)*P,t[3]=(_*p*c-d*S*c-_*l*m+s*S*m+d*l*E-s*p*E)*P,t[4]=A*P,t[5]=(g*y*c-b*S*c+b*l*E-i*y*E-g*l*v+i*S*v)*P,t[6]=(b*p*c-h*y*c-b*l*m+i*y*m+h*l*v-i*p*v)*P,t[7]=(h*S*c-g*p*c+g*l*m-i*S*m-h*l*E+i*p*E)*P,t[8]=O*P,t[9]=(b*_*c-g*M*c-b*s*E+i*M*E+g*s*v-i*_*v)*P,t[10]=(h*M*c-b*d*c+b*s*m-i*M*m-h*s*v+i*d*v)*P,t[11]=(g*d*c-h*_*c-g*s*m+i*_*m+h*s*E-i*d*E)*P,t[12]=k*P,t[13]=(g*M*l-b*_*l+b*s*S-i*M*S-g*s*y+i*_*y)*P,t[14]=(b*d*l-h*M*l-b*s*p+i*M*p+h*s*y-i*d*y)*P,t[15]=(h*_*l-g*d*l+g*s*p-i*_*p-h*s*S+i*d*S)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,p=t.z,m=c*h,g=c*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+s,g*p-l*h,0,m*p-l*d,g*p+l*h,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,g=h+h,_=d+d,S=c*m,E=c*g,b=c*_,M=h*g,y=h*_,v=d*_,D=p*m,A=p*g,O=p*_,k=s.x,I=s.y,P=s.z;return l[0]=(1-(M+v))*k,l[1]=(E+O)*k,l[2]=(b-A)*k,l[3]=0,l[4]=(E-O)*I,l[5]=(1-(S+v))*I,l[6]=(y+D)*I,l[7]=0,l[8]=(b+A)*P,l[9]=(y-D)*P,l[10]=(1-(S+M))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=ds.set(l[0],l[1],l[2]).length();const h=ds.set(l[4],l[5],l[6]).length(),d=ds.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const m=1/c,g=1/h,_=1/d;return xi.elements[0]*=m,xi.elements[1]*=m,xi.elements[2]*=m,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,i.setFromRotationMatrix(xi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=ia){const p=this.elements,m=2*c/(i-t),g=2*c/(s-l),_=(i+t)/(i-t),S=(s+l)/(s-l);let E,b;if(d===ia)E=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===Hc)E=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=ia){const p=this.elements,m=1/(i-t),g=1/(s-l),_=1/(h-c),S=(i+t)*m,E=(s+l)*g;let b,M;if(d===ia)b=(h+c)*_,M=-2*_;else if(d===Hc)b=c*_,M=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-E,p[2]=0,p[6]=0,p[10]=M,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const ds=new oe,xi=new pn,jM=new oe(0,0,0),qM=new oe(1,1,1),Ha=new oe,hc=new oe,Qn=new oe,Q_=new pn,J_=new qo;class qc{constructor(t=0,i=0,s=0,l=qc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],_=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Fn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Fn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Fn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Fn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Fn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Fn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Q_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Q_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return J_.setFromEuler(this),this.setFromQuaternion(J_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qc.DEFAULT_ORDER="XYZ";class x0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let YM=0;const $_=new oe,hs=new qo,Ji=new pn,pc=new oe,Po=new oe,ZM=new oe,KM=new qo,ev=new oe(1,0,0),tv=new oe(0,1,0),nv=new oe(0,0,1),QM={type:"added"},JM={type:"removed"};class Vn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const t=new oe,i=new qc,s=new qo,l=new oe(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pn},normalMatrix:{value:new dt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new x0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(ev,t)}rotateY(t){return this.rotateOnAxis(tv,t)}rotateZ(t){return this.rotateOnAxis(nv,t)}translateOnAxis(t,i){return $_.copy(t).applyQuaternion(this.quaternion),this.position.add($_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ev,t)}translateY(t){return this.translateOnAxis(tv,t)}translateZ(t){return this.translateOnAxis(nv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?pc.copy(t):pc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Po,pc,this.up):Ji.lookAt(pc,Po,this.up),this.quaternion.setFromRotationMatrix(Ji),l&&(Ji.extractRotation(l.matrixWorld),hs.setFromRotationMatrix(Ji),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(QM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(JM)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ji),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,ZM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,KM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++){const c=i[s];(c.matrixWorldAutoUpdate===!0||t===!0)&&c.updateMatrixWorld(t)}}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++){const d=l[c];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),g=h(t.images),_=h(t.shapes),S=h(t.skeletons),E=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Vn.DEFAULT_UP=new oe(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new oe,$i=new oe,Rd=new oe,ea=new oe,ps=new oe,ms=new oe,iv=new oe,Cd=new oe,wd=new oe,Ld=new oe;let mc=!1;class yi{constructor(t=new oe,i=new oe,s=new oe){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Si.subVectors(t,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Si.subVectors(l,i),$i.subVectors(s,i),Rd.subVectors(t,i);const h=Si.dot(Si),d=Si.dot($i),p=Si.dot(Rd),m=$i.dot($i),g=$i.dot(Rd),_=h*m-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,E=(m*p-d*g)*S,b=(h*g-d*p)*S;return c.set(1-E-b,b,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getUV(t,i,s,l,c,h,d,p){return mc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),mc=!0),this.getInterpolation(t,i,s,l,c,h,d,p)}static getInterpolation(t,i,s,l,c,h,d,p){return this.getBarycoord(t,i,s,l,ea)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ea.x),p.addScaledVector(h,ea.y),p.addScaledVector(d,ea.z),p)}static isFrontFacing(t,i,s,l){return Si.subVectors(s,i),$i.subVectors(t,i),Si.cross($i).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),Si.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getUV(t,i,s,l,c){return mc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),mc=!0),yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}getInterpolation(t,i,s,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;ps.subVectors(l,s),ms.subVectors(c,s),Cd.subVectors(t,s);const p=ps.dot(Cd),m=ms.dot(Cd);if(p<=0&&m<=0)return i.copy(s);wd.subVectors(t,l);const g=ps.dot(wd),_=ms.dot(wd);if(g>=0&&_<=g)return i.copy(l);const S=p*_-g*m;if(S<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(s).addScaledVector(ps,h);Ld.subVectors(t,c);const E=ps.dot(Ld),b=ms.dot(Ld);if(b>=0&&E<=b)return i.copy(c);const M=E*m-p*b;if(M<=0&&m>=0&&b<=0)return d=m/(m-b),i.copy(s).addScaledVector(ms,d);const y=g*b-E*_;if(y<=0&&_-g>=0&&E-b>=0)return iv.subVectors(c,l),d=(_-g)/(_-g+(E-b)),i.copy(l).addScaledVector(iv,d);const v=1/(y+M+S);return h=M*v,d=S*v,i.copy(s).addScaledVector(ps,h).addScaledVector(ms,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const S0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},gc={h:0,s:0,l:0};function Dd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class vt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ot.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Ot.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ot.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Ot.workingColorSpace){if(t=IM(t,1),i=Fn(i,0,1),s=Fn(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Dd(h,c,t+1/3),this.g=Dd(h,c,t),this.b=Dd(h,c,t-1/3)}return Ot.toWorkingColorSpace(this,l),this}setStyle(t,i=Sn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Sn){const s=S0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}copyLinearToSRGB(t){return this.r=xd(t.r),this.g=xd(t.g),this.b=xd(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return Ot.fromWorkingColorSpace(An.copy(this),t),Math.round(Fn(An.r*255,0,255))*65536+Math.round(Fn(An.g*255,0,255))*256+Math.round(Fn(An.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ot.workingColorSpace){Ot.fromWorkingColorSpace(An.copy(this),i);const s=An.r,l=An.g,c=An.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const _=h-d;switch(m=g<=.5?_/(h+d):_/(2-h-d),h){case s:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-s)/_+2;break;case c:p=(s-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(An.copy(this),i),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=Sn){Ot.fromWorkingColorSpace(An.copy(this),t);const i=An.r,s=An.g,l=An.b;return t!==Sn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ga),this.setHSL(Ga.h+t,Ga.s+i,Ga.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ga),t.getHSL(gc);const s=_d(Ga.h,gc.h,i),l=_d(Ga.s,gc.s,i),c=_d(Ga.l,gc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new vt;vt.NAMES=S0;let $M=0;class Zo extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Ts,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Xd,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=zc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(s.blending=this.blending),this.side!==Ya&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==kd&&(s.blendSrc=this.blendSrc),this.blendDst!==Xd&&(s.blendDst=this.blendDst),this.blendEquation!==Sr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==zc&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==k_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(s.stencilFail=this.stencilFail),this.stencilZFail!==os&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class y0 extends Zo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=i0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new oe,_c=new Ct;class Di{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=X_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ka,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(t),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Uo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=In(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array),c=In(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==X_&&(t.usage=this.usage),t}}class E0 extends Di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class M0 extends Di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class bi extends Di{constructor(t,i,s){super(new Float32Array(t),i,s)}}let eb=0;const li=new pn,Ud=new Vn,gs=new oe,Jn=new Yo,zo=new Yo,hn=new oe;class la extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(p0(t)?M0:E0)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new dt().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,s){return li.makeTranslation(t,i,s),this.applyMatrix4(li),this}scale(t,i,s){return li.makeScale(t,i,s),this.applyMatrix4(li),this}lookAt(t){return Ud.lookAt(t),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const i=[];for(let s=0,l=t.length;s<l;s++){const c=t[s];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new bi(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new oe,1/0);return}if(t){const s=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(hn.addVectors(Jn.min,zo.min),Jn.expandByPoint(hn),hn.addVectors(Jn.max,zo.max),Jn.expandByPoint(hn)):(Jn.expandByPoint(zo.min),Jn.expandByPoint(zo.max))}Jn.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)hn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(hn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)hn.fromBufferAttribute(d,m),p&&(gs.fromBufferAttribute(t,m),hn.add(gs)),l=Math.max(l,s.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.array,l=i.position.array,c=i.normal.array,h=i.uv.array,d=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*d),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let N=0;N<d;N++)m[N]=new oe,g[N]=new oe;const _=new oe,S=new oe,E=new oe,b=new Ct,M=new Ct,y=new Ct,v=new oe,D=new oe;function A(N,ue,he){_.fromArray(l,N*3),S.fromArray(l,ue*3),E.fromArray(l,he*3),b.fromArray(h,N*2),M.fromArray(h,ue*2),y.fromArray(h,he*2),S.sub(_),E.sub(_),M.sub(b),y.sub(b);const Me=1/(M.x*y.y-y.x*M.y);isFinite(Me)&&(v.copy(S).multiplyScalar(y.y).addScaledVector(E,-M.y).multiplyScalar(Me),D.copy(E).multiplyScalar(M.x).addScaledVector(S,-y.x).multiplyScalar(Me),m[N].add(v),m[ue].add(v),m[he].add(v),g[N].add(D),g[ue].add(D),g[he].add(D))}let O=this.groups;O.length===0&&(O=[{start:0,count:s.length}]);for(let N=0,ue=O.length;N<ue;++N){const he=O[N],Me=he.start,W=he.count;for(let ee=Me,z=Me+W;ee<z;ee+=3)A(s[ee+0],s[ee+1],s[ee+2])}const k=new oe,I=new oe,P=new oe,pe=new oe;function C(N){P.fromArray(c,N*3),pe.copy(P);const ue=m[N];k.copy(ue),k.sub(P.multiplyScalar(P.dot(ue))).normalize(),I.crossVectors(pe,ue);const Me=I.dot(g[N])<0?-1:1;p[N*4]=k.x,p[N*4+1]=k.y,p[N*4+2]=k.z,p[N*4+3]=Me}for(let N=0,ue=O.length;N<ue;++N){const he=O[N],Me=he.start,W=he.count;for(let ee=Me,z=Me+W;ee<z;ee+=3)C(s[ee+0]),C(s[ee+1]),C(s[ee+2])}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const l=new oe,c=new oe,h=new oe,d=new oe,p=new oe,m=new oe,g=new oe,_=new oe;if(t)for(let S=0,E=t.count;S<E;S+=3){const b=t.getX(S+0),M=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,M),h.fromBufferAttribute(i,y),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),m.fromBufferAttribute(s,y),d.add(g),p.add(g),m.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(M,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)hn.fromBufferAttribute(t,i),hn.normalize(),t.setXYZ(i,hn.x,hn.y,hn.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,_=d.normalized,S=new m.constructor(p.length*g);let E=0,b=0;for(let M=0,y=p.length;M<y;M++){d.isInterleavedBufferAttribute?E=p[M]*d.data.stride+d.offset:E=p[M]*g;for(let v=0;v<g;v++)S[b++]=m[E++]}return new Di(S,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new la,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,_=m.length;g<_;g++){const S=m[g],E=t(S,s);p.push(E)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,S=m.length;_<S;_++){const E=m[_];g.push(E.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let S=0,E=_.length;S<E;S++)g.push(_[S].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,g=h.length;m<g;m++){const _=h[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const av=new pn,mr=new v0,vc=new jc,rv=new oe,_s=new oe,vs=new oe,xs=new oe,Nd=new oe,xc=new oe,Sc=new Ct,yc=new Ct,Ec=new Ct,sv=new oe,ov=new oe,lv=new oe,Mc=new oe,bc=new oe;class Xa extends Vn{constructor(t=new la,i=new y0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){xc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],_=c[p];g!==0&&(Nd.fromBufferAttribute(_,t),h?xc.addScaledVector(Nd,g):xc.addScaledVector(Nd.sub(i),g))}i.add(xc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),vc.copy(s.boundingSphere),vc.applyMatrix4(c),mr.copy(t.ray).recast(t.near),!(vc.containsPoint(mr.origin)===!1&&(mr.intersectSphere(vc,rv)===null||mr.origin.distanceToSquared(rv)>(t.far-t.near)**2))&&(av.copy(c).invert(),mr.copy(t.ray).applyMatrix4(av),!(s.boundingBox!==null&&mr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,mr)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,S=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,M=S.length;b<M;b++){const y=S[b],v=h[y.materialIndex],D=Math.max(y.start,E.start),A=Math.min(d.count,Math.min(y.start+y.count,E.start+E.count));for(let O=D,k=A;O<k;O+=3){const I=d.getX(O),P=d.getX(O+1),pe=d.getX(O+2);l=Tc(this,v,t,s,m,g,_,I,P,pe),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),M=Math.min(d.count,E.start+E.count);for(let y=b,v=M;y<v;y+=3){const D=d.getX(y),A=d.getX(y+1),O=d.getX(y+2);l=Tc(this,h,t,s,m,g,_,D,A,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let b=0,M=S.length;b<M;b++){const y=S[b],v=h[y.materialIndex],D=Math.max(y.start,E.start),A=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let O=D,k=A;O<k;O+=3){const I=O,P=O+1,pe=O+2;l=Tc(this,v,t,s,m,g,_,I,P,pe),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),M=Math.min(p.count,E.start+E.count);for(let y=b,v=M;y<v;y+=3){const D=y,A=y+1,O=y+2;l=Tc(this,h,t,s,m,g,_,D,A,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function tb(r,t,i,s,l,c,h,d){let p;if(t.side===Hn?p=s.intersectTriangle(h,c,l,!0,d):p=s.intersectTriangle(l,c,h,t.side===Ya,d),p===null)return null;bc.copy(d),bc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(bc);return m<i.near||m>i.far?null:{distance:m,point:bc.clone(),object:r}}function Tc(r,t,i,s,l,c,h,d,p,m){r.getVertexPosition(d,_s),r.getVertexPosition(p,vs),r.getVertexPosition(m,xs);const g=tb(r,t,i,s,_s,vs,xs,Mc);if(g){l&&(Sc.fromBufferAttribute(l,d),yc.fromBufferAttribute(l,p),Ec.fromBufferAttribute(l,m),g.uv=yi.getInterpolation(Mc,_s,vs,xs,Sc,yc,Ec,new Ct)),c&&(Sc.fromBufferAttribute(c,d),yc.fromBufferAttribute(c,p),Ec.fromBufferAttribute(c,m),g.uv1=yi.getInterpolation(Mc,_s,vs,xs,Sc,yc,Ec,new Ct),g.uv2=g.uv1),h&&(sv.fromBufferAttribute(h,d),ov.fromBufferAttribute(h,p),lv.fromBufferAttribute(h,m),g.normal=yi.getInterpolation(Mc,_s,vs,xs,sv,ov,lv,new oe),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:p,c:m,normal:new oe,materialIndex:0};yi.getNormal(_s,vs,xs,_.normal),g.face=_}return g}class Ko extends la{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],g=[],_=[];let S=0,E=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new bi(m,3)),this.setAttribute("normal",new bi(g,3)),this.setAttribute("uv",new bi(_,2));function b(M,y,v,D,A,O,k,I,P,pe,C){const N=O/P,ue=k/pe,he=O/2,Me=k/2,W=I/2,ee=P+1,z=pe+1;let j=0,Q=0;const le=new oe;for(let fe=0;fe<z;fe++){const L=fe*ue-Me;for(let X=0;X<ee;X++){const H=X*N-he;le[M]=H*D,le[y]=L*A,le[v]=W,m.push(le.x,le.y,le.z),le[M]=0,le[y]=0,le[v]=I>0?1:-1,g.push(le.x,le.y,le.z),_.push(X/P),_.push(1-fe/pe),j+=1}}for(let fe=0;fe<pe;fe++)for(let L=0;L<P;L++){const X=S+L+ee*fe,H=S+L+ee*(fe+1),Y=S+(L+1)+ee*(fe+1),_e=S+(L+1)+ee*fe;p.push(X,H,_e),p.push(H,Y,_e),Q+=6}d.addGroup(E,Q,C),E+=Q,S+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function wn(r){const t={};for(let i=0;i<r.length;i++){const s=Ls(r[i]);for(const l in s)t[l]=s[l]}return t}function nb(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function b0(r){return r.getRenderTarget()===null?r.outputColorSpace:Ot.workingColorSpace}const ib={clone:Ls,merge:wn};var ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oa extends Zo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ab,this.fragmentShader=rb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=nb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class T0 extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=ia}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ui extends T0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Kd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kd*2*Math.atan(Math.tan(gd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(gd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ss=-90,ys=1;class sb extends Vn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(Ss,ys,t,i);l.layers=this.layers,this.add(l);const c=new ui(Ss,ys,t,i);c.layers=this.layers,this.add(c);const h=new ui(Ss,ys,t,i);h.layers=this.layers,this.add(h);const d=new ui(Ss,ys,t,i);d.layers=this.layers,this.add(d);const p=new ui(Ss,ys,t,i);p.layers=this.layers,this.add(p);const m=new ui(Ss,ys,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(t===ia)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Hc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,g]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const M=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=M,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,S,E),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class A0 extends Gn{constructor(t,i,s,l,c,h,d,p,m,g){t=t!==void 0?t:[],i=i!==void 0?i:Rs,super(t,i,s,l,c,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ob extends Ar{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];i.encoding!==void 0&&(Bo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Tr?Sn:fi),this.texture=new A0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ci}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ko(5,5,5),c=new oa({name:"CubemapFromEquirect",uniforms:Ls(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Hn,blending:Wa});c.uniforms.tEquirect.value=i;const h=new Xa(l,c),d=i.minFilter;return i.minFilter===Ho&&(i.minFilter=ci),new sb(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,l){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}const Od=new oe,lb=new oe,cb=new dt;class vr{constructor(t=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Od.subVectors(s,i).cross(lb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Od),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||cb.getNormalMatrix(t),l=this.coplanarPoint(Od).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new jc,Ac=new oe;class R0{constructor(t=new vr,i=new vr,s=new vr,l=new vr,c=new vr,h=new vr){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ia){const s=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],_=l[6],S=l[7],E=l[8],b=l[9],M=l[10],y=l[11],v=l[12],D=l[13],A=l[14],O=l[15];if(s[0].setComponents(p-c,S-m,y-E,O-v).normalize(),s[1].setComponents(p+c,S+m,y+E,O+v).normalize(),s[2].setComponents(p+h,S+g,y+b,O+D).normalize(),s[3].setComponents(p-h,S-g,y-b,O-D).normalize(),s[4].setComponents(p-d,S-_,y-M,O-A).normalize(),i===ia)s[5].setComponents(p+d,S+_,y+M,O+A).normalize();else if(i===Hc)s[5].setComponents(d,_,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(t){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(t.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ac.x=l.normal.x>0?t.max.x:t.min.x,Ac.y=l.normal.y>0?t.max.y:t.min.y,Ac.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function C0(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function ub(r,t){const i=t.isWebGL2,s=new WeakMap;function l(m,g){const _=m.array,S=m.usage,E=_.byteLength,b=r.createBuffer();r.bindBuffer(g,b),r.bufferData(g,_,S),m.onUploadCallback();let M;if(_ instanceof Float32Array)M=r.FLOAT;else if(_ instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)M=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=r.UNSIGNED_SHORT;else if(_ instanceof Int16Array)M=r.SHORT;else if(_ instanceof Uint32Array)M=r.UNSIGNED_INT;else if(_ instanceof Int32Array)M=r.INT;else if(_ instanceof Int8Array)M=r.BYTE;else if(_ instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:b,type:M,bytesPerElement:_.BYTES_PER_ELEMENT,version:m.version,size:E}}function c(m,g,_){const S=g.array,E=g._updateRange,b=g.updateRanges;if(r.bindBuffer(_,m),E.count===-1&&b.length===0&&r.bufferSubData(_,0,S),b.length!==0){for(let M=0,y=b.length;M<y;M++){const v=b[M];i?r.bufferSubData(_,v.start*S.BYTES_PER_ELEMENT,S,v.start,v.count):r.bufferSubData(_,v.start*S.BYTES_PER_ELEMENT,S.subarray(v.start,v.start+v.count))}g.clearUpdateRanges()}E.count!==-1&&(i?r.bufferSubData(_,E.offset*S.BYTES_PER_ELEMENT,S,E.offset,E.count):r.bufferSubData(_,E.offset*S.BYTES_PER_ELEMENT,S.subarray(E.offset,E.offset+E.count)),E.count=-1),g.onUploadCallback()}function h(m){return m.isInterleavedBufferAttribute&&(m=m.data),s.get(m)}function d(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=s.get(m);g&&(r.deleteBuffer(g.buffer),s.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const S=s.get(m);(!S||S.version<m.version)&&s.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const _=s.get(m);if(_===void 0)s.set(m,l(m,g));else if(_.version<m.version){if(_.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");c(_.buffer,m,g),_.version=m.version}}return{get:h,remove:d,update:p}}class uh extends la{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,g=p+1,_=t/d,S=i/p,E=[],b=[],M=[],y=[];for(let v=0;v<g;v++){const D=v*S-h;for(let A=0;A<m;A++){const O=A*_-c;b.push(O,-D,0),M.push(0,0,1),y.push(A/d),y.push(1-v/p)}}for(let v=0;v<p;v++)for(let D=0;D<d;D++){const A=D+m*v,O=D+m*(v+1),k=D+1+m*(v+1),I=D+1+m*v;E.push(A,O,I),E.push(O,k,I)}this.setIndex(E),this.setAttribute("position",new bi(b,3)),this.setAttribute("normal",new bi(M,3)),this.setAttribute("uv",new bi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uh(t.width,t.height,t.widthSegments,t.heightSegments)}}var fb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,db=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_b=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xb=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ub=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ob=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,kb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$b=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,eT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_T=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ST=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ET=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,AT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,RT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,CT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$T=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_A=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,SA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:fb,alphahash_pars_fragment:db,alphamap_fragment:hb,alphamap_pars_fragment:pb,alphatest_fragment:mb,alphatest_pars_fragment:gb,aomap_fragment:_b,aomap_pars_fragment:vb,batching_pars_vertex:xb,batching_vertex:Sb,begin_vertex:yb,beginnormal_vertex:Eb,bsdfs:Mb,iridescence_fragment:bb,bumpmap_pars_fragment:Tb,clipping_planes_fragment:Ab,clipping_planes_pars_fragment:Rb,clipping_planes_pars_vertex:Cb,clipping_planes_vertex:wb,color_fragment:Lb,color_pars_fragment:Db,color_pars_vertex:Ub,color_vertex:Nb,common:Ob,cube_uv_reflection_fragment:Pb,defaultnormal_vertex:zb,displacementmap_pars_vertex:Bb,displacementmap_vertex:Ib,emissivemap_fragment:Fb,emissivemap_pars_fragment:Hb,colorspace_fragment:Gb,colorspace_pars_fragment:Vb,envmap_fragment:kb,envmap_common_pars_fragment:Xb,envmap_pars_fragment:Wb,envmap_pars_vertex:jb,envmap_physical_pars_fragment:aT,envmap_vertex:qb,fog_vertex:Yb,fog_pars_vertex:Zb,fog_fragment:Kb,fog_pars_fragment:Qb,gradientmap_pars_fragment:Jb,lightmap_fragment:$b,lightmap_pars_fragment:eT,lights_lambert_fragment:tT,lights_lambert_pars_fragment:nT,lights_pars_begin:iT,lights_toon_fragment:rT,lights_toon_pars_fragment:sT,lights_phong_fragment:oT,lights_phong_pars_fragment:lT,lights_physical_fragment:cT,lights_physical_pars_fragment:uT,lights_fragment_begin:fT,lights_fragment_maps:dT,lights_fragment_end:hT,logdepthbuf_fragment:pT,logdepthbuf_pars_fragment:mT,logdepthbuf_pars_vertex:gT,logdepthbuf_vertex:_T,map_fragment:vT,map_pars_fragment:xT,map_particle_fragment:ST,map_particle_pars_fragment:yT,metalnessmap_fragment:ET,metalnessmap_pars_fragment:MT,morphcolor_vertex:bT,morphnormal_vertex:TT,morphtarget_pars_vertex:AT,morphtarget_vertex:RT,normal_fragment_begin:CT,normal_fragment_maps:wT,normal_pars_fragment:LT,normal_pars_vertex:DT,normal_vertex:UT,normalmap_pars_fragment:NT,clearcoat_normal_fragment_begin:OT,clearcoat_normal_fragment_maps:PT,clearcoat_pars_fragment:zT,iridescence_pars_fragment:BT,opaque_fragment:IT,packing:FT,premultiplied_alpha_fragment:HT,project_vertex:GT,dithering_fragment:VT,dithering_pars_fragment:kT,roughnessmap_fragment:XT,roughnessmap_pars_fragment:WT,shadowmap_pars_fragment:jT,shadowmap_pars_vertex:qT,shadowmap_vertex:YT,shadowmask_pars_fragment:ZT,skinbase_vertex:KT,skinning_pars_vertex:QT,skinning_vertex:JT,skinnormal_vertex:$T,specularmap_fragment:eA,specularmap_pars_fragment:tA,tonemapping_fragment:nA,tonemapping_pars_fragment:iA,transmission_fragment:aA,transmission_pars_fragment:rA,uv_pars_fragment:sA,uv_pars_vertex:oA,uv_vertex:lA,worldpos_vertex:cA,background_vert:uA,background_frag:fA,backgroundCube_vert:dA,backgroundCube_frag:hA,cube_vert:pA,cube_frag:mA,depth_vert:gA,depth_frag:_A,distanceRGBA_vert:vA,distanceRGBA_frag:xA,equirect_vert:SA,equirect_frag:yA,linedashed_vert:EA,linedashed_frag:MA,meshbasic_vert:bA,meshbasic_frag:TA,meshlambert_vert:AA,meshlambert_frag:RA,meshmatcap_vert:CA,meshmatcap_frag:wA,meshnormal_vert:LA,meshnormal_frag:DA,meshphong_vert:UA,meshphong_frag:NA,meshphysical_vert:OA,meshphysical_frag:PA,meshtoon_vert:zA,meshtoon_frag:BA,points_vert:IA,points_frag:FA,shadow_vert:HA,shadow_frag:GA,sprite_vert:VA,sprite_frag:kA},Re={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Li={basic:{uniforms:wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new vt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:wn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:wn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new vt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:wn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:wn([Re.points,Re.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:wn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:wn([Re.common,Re.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:wn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:wn([Re.sprite,Re.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:wn([Re.common,Re.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:wn([Re.lights,Re.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Li.physical={uniforms:wn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Rc={r:0,b:0,g:0};function XA(r,t,i,s,l,c,h){const d=new vt(0);let p=c===!0?0:1,m,g,_=null,S=0,E=null;function b(y,v){let D=!1,A=v.isScene===!0?v.background:null;A&&A.isTexture&&(A=(v.backgroundBlurriness>0?i:t).get(A)),A===null?M(d,p):A&&A.isColor&&(M(A,1),D=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,h):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Xc)?(g===void 0&&(g=new Xa(new Ko(1,1,1),new oa({name:"BackgroundCubeMaterial",uniforms:Ls(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=A,g.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,g.material.toneMapped=Ot.getTransfer(A.colorSpace)!==Gt,(_!==A||S!==A.version||E!==r.toneMapping)&&(g.material.needsUpdate=!0,_=A,S=A.version,E=r.toneMapping),g.layers.enableAll(),y.unshift(g,g.geometry,g.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new Xa(new uh(2,2),new oa({name:"BackgroundMaterial",uniforms:Ls(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,m.material.toneMapped=Ot.getTransfer(A.colorSpace)!==Gt,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(_!==A||S!==A.version||E!==r.toneMapping)&&(m.material.needsUpdate=!0,_=A,S=A.version,E=r.toneMapping),m.layers.enableAll(),y.unshift(m,m.geometry,m.material,0,0,null))}function M(y,v){y.getRGB(Rc,b0(r)),s.buffers.color.setClear(Rc.r,Rc.g,Rc.b,v,h)}return{getClearColor:function(){return d},setClearColor:function(y,v=1){d.set(y),p=v,M(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(y){p=y,M(d,p)},render:b}}function WA(r,t,i,s){const l=r.getParameter(r.MAX_VERTEX_ATTRIBS),c=s.isWebGL2?null:t.get("OES_vertex_array_object"),h=s.isWebGL2||c!==null,d={},p=y(null);let m=p,g=!1;function _(W,ee,z,j,Q){let le=!1;if(h){const fe=M(j,z,ee);m!==fe&&(m=fe,E(m.object)),le=v(W,j,z,Q),le&&D(W,j,z,Q)}else{const fe=ee.wireframe===!0;(m.geometry!==j.id||m.program!==z.id||m.wireframe!==fe)&&(m.geometry=j.id,m.program=z.id,m.wireframe=fe,le=!0)}Q!==null&&i.update(Q,r.ELEMENT_ARRAY_BUFFER),(le||g)&&(g=!1,pe(W,ee,z,j),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.get(Q).buffer))}function S(){return s.isWebGL2?r.createVertexArray():c.createVertexArrayOES()}function E(W){return s.isWebGL2?r.bindVertexArray(W):c.bindVertexArrayOES(W)}function b(W){return s.isWebGL2?r.deleteVertexArray(W):c.deleteVertexArrayOES(W)}function M(W,ee,z){const j=z.wireframe===!0;let Q=d[W.id];Q===void 0&&(Q={},d[W.id]=Q);let le=Q[ee.id];le===void 0&&(le={},Q[ee.id]=le);let fe=le[j];return fe===void 0&&(fe=y(S()),le[j]=fe),fe}function y(W){const ee=[],z=[],j=[];for(let Q=0;Q<l;Q++)ee[Q]=0,z[Q]=0,j[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:z,attributeDivisors:j,object:W,attributes:{},index:null}}function v(W,ee,z,j){const Q=m.attributes,le=ee.attributes;let fe=0;const L=z.getAttributes();for(const X in L)if(L[X].location>=0){const Y=Q[X];let _e=le[X];if(_e===void 0&&(X==="instanceMatrix"&&W.instanceMatrix&&(_e=W.instanceMatrix),X==="instanceColor"&&W.instanceColor&&(_e=W.instanceColor)),Y===void 0||Y.attribute!==_e||_e&&Y.data!==_e.data)return!0;fe++}return m.attributesNum!==fe||m.index!==j}function D(W,ee,z,j){const Q={},le=ee.attributes;let fe=0;const L=z.getAttributes();for(const X in L)if(L[X].location>=0){let Y=le[X];Y===void 0&&(X==="instanceMatrix"&&W.instanceMatrix&&(Y=W.instanceMatrix),X==="instanceColor"&&W.instanceColor&&(Y=W.instanceColor));const _e={};_e.attribute=Y,Y&&Y.data&&(_e.data=Y.data),Q[X]=_e,fe++}m.attributes=Q,m.attributesNum=fe,m.index=j}function A(){const W=m.newAttributes;for(let ee=0,z=W.length;ee<z;ee++)W[ee]=0}function O(W){k(W,0)}function k(W,ee){const z=m.newAttributes,j=m.enabledAttributes,Q=m.attributeDivisors;z[W]=1,j[W]===0&&(r.enableVertexAttribArray(W),j[W]=1),Q[W]!==ee&&((s.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,ee),Q[W]=ee)}function I(){const W=m.newAttributes,ee=m.enabledAttributes;for(let z=0,j=ee.length;z<j;z++)ee[z]!==W[z]&&(r.disableVertexAttribArray(z),ee[z]=0)}function P(W,ee,z,j,Q,le,fe){fe===!0?r.vertexAttribIPointer(W,ee,z,Q,le):r.vertexAttribPointer(W,ee,z,j,Q,le)}function pe(W,ee,z,j){if(s.isWebGL2===!1&&(W.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;A();const Q=j.attributes,le=z.getAttributes(),fe=ee.defaultAttributeValues;for(const L in le){const X=le[L];if(X.location>=0){let H=Q[L];if(H===void 0&&(L==="instanceMatrix"&&W.instanceMatrix&&(H=W.instanceMatrix),L==="instanceColor"&&W.instanceColor&&(H=W.instanceColor)),H!==void 0){const Y=H.normalized,_e=H.itemSize,Ee=i.get(H);if(Ee===void 0)continue;const be=Ee.buffer,He=Ee.type,Pe=Ee.bytesPerElement,qe=s.isWebGL2===!0&&(He===r.INT||He===r.UNSIGNED_INT||H.gpuType===r0);if(H.isInterleavedBufferAttribute){const ft=H.data,te=ft.stride,un=H.offset;if(ft.isInstancedInterleavedBuffer){for(let Ge=0;Ge<X.locationSize;Ge++)k(X.location+Ge,ft.meshPerAttribute);W.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ge=0;Ge<X.locationSize;Ge++)O(X.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,be);for(let Ge=0;Ge<X.locationSize;Ge++)P(X.location+Ge,_e/X.locationSize,He,Y,te*Pe,(un+_e/X.locationSize*Ge)*Pe,qe)}else{if(H.isInstancedBufferAttribute){for(let ft=0;ft<X.locationSize;ft++)k(X.location+ft,H.meshPerAttribute);W.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ft=0;ft<X.locationSize;ft++)O(X.location+ft);r.bindBuffer(r.ARRAY_BUFFER,be);for(let ft=0;ft<X.locationSize;ft++)P(X.location+ft,_e/X.locationSize,He,Y,_e*Pe,_e/X.locationSize*ft*Pe,qe)}}else if(fe!==void 0){const Y=fe[L];if(Y!==void 0)switch(Y.length){case 2:r.vertexAttrib2fv(X.location,Y);break;case 3:r.vertexAttrib3fv(X.location,Y);break;case 4:r.vertexAttrib4fv(X.location,Y);break;default:r.vertexAttrib1fv(X.location,Y)}}}}I()}function C(){he();for(const W in d){const ee=d[W];for(const z in ee){const j=ee[z];for(const Q in j)b(j[Q].object),delete j[Q];delete ee[z]}delete d[W]}}function N(W){if(d[W.id]===void 0)return;const ee=d[W.id];for(const z in ee){const j=ee[z];for(const Q in j)b(j[Q].object),delete j[Q];delete ee[z]}delete d[W.id]}function ue(W){for(const ee in d){const z=d[ee];if(z[W.id]===void 0)continue;const j=z[W.id];for(const Q in j)b(j[Q].object),delete j[Q];delete z[W.id]}}function he(){Me(),g=!0,m!==p&&(m=p,E(m.object))}function Me(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:_,reset:he,resetDefaultState:Me,dispose:C,releaseStatesOfGeometry:N,releaseStatesOfProgram:ue,initAttributes:A,enableAttribute:O,disableUnusedAttributes:I}}function jA(r,t,i,s){const l=s.isWebGL2;let c;function h(g){c=g}function d(g,_){r.drawArrays(c,g,_),i.update(_,c,1)}function p(g,_,S){if(S===0)return;let E,b;if(l)E=r,b="drawArraysInstanced";else if(E=t.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",E===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[b](c,g,_,S),i.update(_,c,S)}function m(g,_,S){if(S===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<S;b++)this.render(g[b],_[b]);else{E.multiDrawArraysWEBGL(c,g,0,_,0,S);let b=0;for(let M=0;M<S;M++)b+=_[M];i.update(b,c,1)}}this.setMode=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function qA(r,t,i){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let d=i.precision!==void 0?i.precision:"highp";const p=c(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=h||t.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),M=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=S>0,O=h||t.has("OES_texture_float"),k=A&&O,I=h?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:c,precision:d,logarithmicDepthBuffer:g,maxTextures:_,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:b,maxAttributes:M,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:D,vertexTextures:A,floatFragmentTextures:O,floatVertexTextures:k,maxSamples:I}}function YA(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new vr,d=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const E=_.length!==0||S||s!==0||l;return l=S,s=_.length,E},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,E){const b=_.clippingPlanes,M=_.clipIntersection,y=_.clipShadows,v=r.get(_);if(!l||b===null||b.length===0||c&&!y)c?g(null):m();else{const D=c?0:s,A=D*4;let O=v.clippingState||null;p.value=O,O=g(b,S,A,E);for(let k=0;k!==A;++k)O[k]=i[k];v.clippingState=O,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,S,E,b){const M=_!==null?_.length:0;let y=null;if(M!==0){if(y=p.value,b!==!0||y===null){const v=E+M*4,D=S.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<v)&&(y=new Float32Array(v));for(let A=0,O=E;A!==M;++A,O+=4)h.copy(_[A]).applyMatrix4(D,d),h.normal.toArray(y,O),y[O+3]=h.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}function ZA(r){let t=new WeakMap;function i(h,d){return d===Wd?h.mapping=Rs:d===jd&&(h.mapping=Cs),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Wd||d===jd)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new ob(p.height/2);return m.fromEquirectangularTexture(r,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}class KA extends T0{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ms=4,cv=[.125,.215,.35,.446,.526,.582],yr=20,Pd=new KA,uv=new vt;let zd=null,Bd=0,Id=0;const xr=(1+Math.sqrt(5))/2,Es=1/xr,fv=[new oe(1,1,1),new oe(-1,1,1),new oe(1,1,-1),new oe(-1,1,-1),new oe(0,xr,Es),new oe(0,xr,-Es),new oe(Es,0,xr),new oe(-Es,0,xr),new oe(xr,Es,0),new oe(-xr,Es,0)];class dv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){zd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zd,Bd,Id),t.scissorTest=!1,Cc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Rs||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel();const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Go,format:Mi,colorSpace:sa,depthBuffer:!1},l=hv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hv(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QA(c)),this._blurMaterial=JA(c,t,i)}return l}_compileMaterial(t){const i=new Xa(this._lodPlanes[0],t);this._renderer.compile(i,Pd)}_sceneToCubeUV(t,i,s,l){const d=new ui(90,1,i,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,S=g.toneMapping;g.getClearColor(uv),g.toneMapping=ja,g.autoClear=!1;const E=new y0({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),b=new Xa(new Ko,E);let M=!1;const y=t.background;y?y.isColor&&(E.color.copy(y),t.background=null,M=!0):(E.color.copy(uv),M=!0);for(let v=0;v<6;v++){const D=v%3;D===0?(d.up.set(0,p[v],0),d.lookAt(m[v],0,0)):D===1?(d.up.set(0,0,p[v]),d.lookAt(0,m[v],0)):(d.up.set(0,p[v],0),d.lookAt(0,0,m[v]));const A=this._cubeSize;Cc(l,D*A,v>2?A:0,A,A),g.setRenderTarget(l),M&&g.render(b,d),g.render(t,d)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=S,g.autoClear=_,t.background=y}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Rs||t.mapping===Cs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=mv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Xa(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;Cc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,Pd)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=fv[(l-1)%fv.length];this._blur(t,l-1,l,c,h)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Xa(this._lodPlanes[l],m),S=m.uniforms,E=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*yr-1),M=c/b,y=isFinite(c)?1+Math.floor(g*M):yr;y>yr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${yr}`);const v=[];let D=0;for(let P=0;P<yr;++P){const pe=P/M,C=Math.exp(-pe*pe/2);v.push(C),P===0?D+=C:P<y&&(D+=2*C)}for(let P=0;P<v.length;P++)v[P]=v[P]/D;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:A}=this;S.dTheta.value=b,S.mipInt.value=A-s;const O=this._sizeLods[l],k=3*O*(l>A-Ms?l-A+Ms:0),I=4*(this._cubeSize-O);Cc(i,k,I,3*O,2*O),p.setRenderTarget(i),p.render(_,Pd)}}function QA(r){const t=[],i=[],s=[];let l=r;const c=r-Ms+1+cv.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>r-Ms?p=cv[h-r+Ms-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),g=-m,_=1+m,S=[g,g,_,g,_,_,g,g,_,_,g,_],E=6,b=6,M=3,y=2,v=1,D=new Float32Array(M*b*E),A=new Float32Array(y*b*E),O=new Float32Array(v*b*E);for(let I=0;I<E;I++){const P=I%3*2/3-1,pe=I>2?0:-1,C=[P,pe,0,P+2/3,pe,0,P+2/3,pe+1,0,P,pe,0,P+2/3,pe+1,0,P,pe+1,0];D.set(C,M*b*I),A.set(S,y*b*I);const N=[I,I,I,I,I,I];O.set(N,v*b*I)}const k=new la;k.setAttribute("position",new Di(D,M)),k.setAttribute("uv",new Di(A,y)),k.setAttribute("faceIndex",new Di(O,v)),t.push(k),l>Ms&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function hv(r,t,i){const s=new Ar(r,t,i);return s.texture.mapping=Xc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Cc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function JA(r,t,i){const s=new Float32Array(yr),l=new oe(0,1,0);return new oa({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function pv(){return new oa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function mv(){return new oa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function fh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $A(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Wd||p===jd,g=p===Rs||p===Cs;if(m||g)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let _=t.get(d);return i===null&&(i=new dv(r)),_=m?i.fromEquirectangular(d,_):i.fromCubemap(d,_),t.set(d,_),_.texture}else{if(t.has(d))return t.get(d).texture;{const _=d.image;if(m&&_&&_.height>0||g&&_&&l(_)){i===null&&(i=new dv(r));const S=m?i.fromEquirectangular(d):i.fromCubemap(d);return t.set(d,S),d.addEventListener("dispose",c),S.texture}else return null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function e1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(s){s.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(s){const l=i(s);return l===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function t1(r,t,i,s){const l={},c=new WeakMap;function h(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);for(const b in S.morphAttributes){const M=S.morphAttributes[b];for(let y=0,v=M.length;y<v;y++)t.remove(M[y])}S.removeEventListener("dispose",h),delete l[S.id];const E=c.get(S);E&&(t.remove(E),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(_){const S=_.attributes;for(const b in S)t.update(S[b],r.ARRAY_BUFFER);const E=_.morphAttributes;for(const b in E){const M=E[b];for(let y=0,v=M.length;y<v;y++)t.update(M[y],r.ARRAY_BUFFER)}}function m(_){const S=[],E=_.index,b=_.attributes.position;let M=0;if(E!==null){const D=E.array;M=E.version;for(let A=0,O=D.length;A<O;A+=3){const k=D[A+0],I=D[A+1],P=D[A+2];S.push(k,I,I,P,P,k)}}else if(b!==void 0){const D=b.array;M=b.version;for(let A=0,O=D.length/3-1;A<O;A+=3){const k=A+0,I=A+1,P=A+2;S.push(k,I,I,P,P,k)}}else return;const y=new(p0(S)?M0:E0)(S,1);y.version=M;const v=c.get(_);v&&t.remove(v),c.set(_,y)}function g(_){const S=c.get(_);if(S){const E=_.index;E!==null&&S.version<E.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:g}}function n1(r,t,i,s){const l=s.isWebGL2;let c;function h(E){c=E}let d,p;function m(E){d=E.type,p=E.bytesPerElement}function g(E,b){r.drawElements(c,b,d,E*p),i.update(b,c,1)}function _(E,b,M){if(M===0)return;let y,v;if(l)y=r,v="drawElementsInstanced";else if(y=t.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[v](c,b,d,E*p,M),i.update(b,c,M)}function S(E,b,M){if(M===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<M;v++)this.render(E[v]/p,b[v]);else{y.multiDrawElementsWEBGL(c,b,0,d,E,0,M);let v=0;for(let D=0;D<M;D++)v+=b[D];i.update(v,c,1)}}this.setMode=h,this.setIndex=m,this.render=g,this.renderInstances=_,this.renderMultiDraw=S}function i1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function a1(r,t){return r[0]-t[0]}function r1(r,t){return Math.abs(t[1])-Math.abs(r[1])}function s1(r,t,i){const s={},l=new Float32Array(8),c=new WeakMap,h=new yn,d=[];for(let m=0;m<8;m++)d[m]=[m,0];function p(m,g,_){const S=m.morphTargetInfluences;if(t.isWebGL2===!0){const b=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,M=b!==void 0?b.length:0;let y=c.get(g);if(y===void 0||y.count!==M){let ee=function(){Me.dispose(),c.delete(g),g.removeEventListener("dispose",ee)};var E=ee;y!==void 0&&y.texture.dispose();const A=g.morphAttributes.position!==void 0,O=g.morphAttributes.normal!==void 0,k=g.morphAttributes.color!==void 0,I=g.morphAttributes.position||[],P=g.morphAttributes.normal||[],pe=g.morphAttributes.color||[];let C=0;A===!0&&(C=1),O===!0&&(C=2),k===!0&&(C=3);let N=g.attributes.position.count*C,ue=1;N>t.maxTextureSize&&(ue=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const he=new Float32Array(N*ue*4*M),Me=new _0(he,N,ue,M);Me.type=ka,Me.needsUpdate=!0;const W=C*4;for(let z=0;z<M;z++){const j=I[z],Q=P[z],le=pe[z],fe=N*ue*4*z;for(let L=0;L<j.count;L++){const X=L*W;A===!0&&(h.fromBufferAttribute(j,L),he[fe+X+0]=h.x,he[fe+X+1]=h.y,he[fe+X+2]=h.z,he[fe+X+3]=0),O===!0&&(h.fromBufferAttribute(Q,L),he[fe+X+4]=h.x,he[fe+X+5]=h.y,he[fe+X+6]=h.z,he[fe+X+7]=0),k===!0&&(h.fromBufferAttribute(le,L),he[fe+X+8]=h.x,he[fe+X+9]=h.y,he[fe+X+10]=h.z,he[fe+X+11]=le.itemSize===4?h.w:1)}}y={count:M,texture:Me,size:new Ct(N,ue)},c.set(g,y),g.addEventListener("dispose",ee)}let v=0;for(let A=0;A<S.length;A++)v+=S[A];const D=g.morphTargetsRelative?1:1-v;_.getUniforms().setValue(r,"morphTargetBaseInfluence",D),_.getUniforms().setValue(r,"morphTargetInfluences",S),_.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),_.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}else{const b=S===void 0?0:S.length;let M=s[g.id];if(M===void 0||M.length!==b){M=[];for(let O=0;O<b;O++)M[O]=[O,0];s[g.id]=M}for(let O=0;O<b;O++){const k=M[O];k[0]=O,k[1]=S[O]}M.sort(r1);for(let O=0;O<8;O++)O<b&&M[O][1]?(d[O][0]=M[O][0],d[O][1]=M[O][1]):(d[O][0]=Number.MAX_SAFE_INTEGER,d[O][1]=0);d.sort(a1);const y=g.morphAttributes.position,v=g.morphAttributes.normal;let D=0;for(let O=0;O<8;O++){const k=d[O],I=k[0],P=k[1];I!==Number.MAX_SAFE_INTEGER&&P?(y&&g.getAttribute("morphTarget"+O)!==y[I]&&g.setAttribute("morphTarget"+O,y[I]),v&&g.getAttribute("morphNormal"+O)!==v[I]&&g.setAttribute("morphNormal"+O,v[I]),l[O]=P,D+=P):(y&&g.hasAttribute("morphTarget"+O)===!0&&g.deleteAttribute("morphTarget"+O),v&&g.hasAttribute("morphNormal"+O)===!0&&g.deleteAttribute("morphNormal"+O),l[O]=0)}const A=g.morphTargetsRelative?1:1-D;_.getUniforms().setValue(r,"morphTargetBaseInfluence",A),_.getUniforms().setValue(r,"morphTargetInfluences",l)}}return{update:p}}function o1(r,t,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return _}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}class w0 extends Gn{constructor(t,i,s,l,c,h,d,p,m,g){if(g=g!==void 0?g:br,g!==br&&g!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===br&&(s=Va),s===void 0&&g===ws&&(s=Mr),super(null,l,c,h,d,p,g,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Ln,this.minFilter=p!==void 0?p:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const L0=new Gn,D0=new w0(1,1);D0.compareFunction=h0;const U0=new _0,N0=new XM,O0=new A0,gv=[],_v=[],vv=new Float32Array(16),xv=new Float32Array(9),Sv=new Float32Array(4);function Ns(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=gv[l];if(c===void 0&&(c=new Float32Array(l),gv[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function ln(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function cn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Yc(r,t){let i=_v[t];i===void 0&&(i=new Int32Array(t),_v[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function l1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function c1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;r.uniform2fv(this.addr,t),cn(i,t)}}function u1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ln(i,t))return;r.uniform3fv(this.addr,t),cn(i,t)}}function f1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;r.uniform4fv(this.addr,t),cn(i,t)}}function d1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(ln(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),cn(i,t)}else{if(ln(i,s))return;Sv.set(s),r.uniformMatrix2fv(this.addr,!1,Sv),cn(i,s)}}function h1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(ln(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),cn(i,t)}else{if(ln(i,s))return;xv.set(s),r.uniformMatrix3fv(this.addr,!1,xv),cn(i,s)}}function p1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(ln(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),cn(i,t)}else{if(ln(i,s))return;vv.set(s),r.uniformMatrix4fv(this.addr,!1,vv),cn(i,s)}}function m1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function g1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;r.uniform2iv(this.addr,t),cn(i,t)}}function _1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ln(i,t))return;r.uniform3iv(this.addr,t),cn(i,t)}}function v1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;r.uniform4iv(this.addr,t),cn(i,t)}}function x1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function S1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;r.uniform2uiv(this.addr,t),cn(i,t)}}function y1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ln(i,t))return;r.uniform3uiv(this.addr,t),cn(i,t)}}function E1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;r.uniform4uiv(this.addr,t),cn(i,t)}}function M1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);const c=this.type===r.SAMPLER_2D_SHADOW?D0:L0;i.setTexture2D(t||c,l)}function b1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||N0,l)}function T1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||O0,l)}function A1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||U0,l)}function R1(r){switch(r){case 5126:return l1;case 35664:return c1;case 35665:return u1;case 35666:return f1;case 35674:return d1;case 35675:return h1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return _1;case 35669:case 35673:return v1;case 5125:return x1;case 36294:return S1;case 36295:return y1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return A1}}function C1(r,t){r.uniform1fv(this.addr,t)}function w1(r,t){const i=Ns(t,this.size,2);r.uniform2fv(this.addr,i)}function L1(r,t){const i=Ns(t,this.size,3);r.uniform3fv(this.addr,i)}function D1(r,t){const i=Ns(t,this.size,4);r.uniform4fv(this.addr,i)}function U1(r,t){const i=Ns(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function N1(r,t){const i=Ns(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function O1(r,t){const i=Ns(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function P1(r,t){r.uniform1iv(this.addr,t)}function z1(r,t){r.uniform2iv(this.addr,t)}function B1(r,t){r.uniform3iv(this.addr,t)}function I1(r,t){r.uniform4iv(this.addr,t)}function F1(r,t){r.uniform1uiv(this.addr,t)}function H1(r,t){r.uniform2uiv(this.addr,t)}function G1(r,t){r.uniform3uiv(this.addr,t)}function V1(r,t){r.uniform4uiv(this.addr,t)}function k1(r,t,i){const s=this.cache,l=t.length,c=Yc(i,l);ln(s,c)||(r.uniform1iv(this.addr,c),cn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||L0,c[h])}function X1(r,t,i){const s=this.cache,l=t.length,c=Yc(i,l);ln(s,c)||(r.uniform1iv(this.addr,c),cn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||N0,c[h])}function W1(r,t,i){const s=this.cache,l=t.length,c=Yc(i,l);ln(s,c)||(r.uniform1iv(this.addr,c),cn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||O0,c[h])}function j1(r,t,i){const s=this.cache,l=t.length,c=Yc(i,l);ln(s,c)||(r.uniform1iv(this.addr,c),cn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||U0,c[h])}function q1(r){switch(r){case 5126:return C1;case 35664:return w1;case 35665:return L1;case 35666:return D1;case 35674:return U1;case 35675:return N1;case 35676:return O1;case 5124:case 35670:return P1;case 35667:case 35671:return z1;case 35668:case 35672:return B1;case 35669:case 35673:return I1;case 5125:return F1;case 36294:return H1;case 36295:return G1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return k1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return j1}}class Y1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=R1(i.type)}}class Z1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=q1(i.type)}}class K1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Fd=/(\w+)(\])?(\[|\.)?/g;function yv(r,t){r.seq.push(t),r.map[t.id]=t}function Q1(r,t,i){const s=r.name,l=s.length;for(Fd.lastIndex=0;;){const c=Fd.exec(s),h=Fd.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){yv(i,m===void 0?new Y1(d,r,t):new Z1(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new K1(d),yv(i,_)),i=_}}}class Oc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);Q1(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Ev(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const J1=37297;let $1=0;function eR(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}function tR(r){const t=Ot.getPrimaries(Ot.workingColorSpace),i=Ot.getPrimaries(r);let s;switch(t===i?s="":t===Fc&&i===Ic?s="LinearDisplayP3ToLinearSRGB":t===Ic&&i===Fc&&(s="LinearSRGBToLinearDisplayP3"),r){case sa:case Wc:return[s,"LinearTransferOETF"];case Sn:case ch:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[s,"LinearTransferOETF"]}}function Mv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+eR(r.getShaderSource(t),h)}else return l}function nR(r,t){const i=tR(t);return`vec4 ${r}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function iR(r,t){let i;switch(t){case dM:i="Linear";break;case hM:i="Reinhard";break;case pM:i="OptimizedCineon";break;case mM:i="ACESFilmic";break;case _M:i="AgX";break;case gM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function aR(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function rR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(bs).join(`
`)}function sR(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function oR(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function bs(r){return r!==""}function bv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(r){return r.replace(lR,uR)}const cR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function uR(r,t){let i=ct[t];if(i===void 0){const s=cR.get(t);if(s!==void 0)i=ct[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Jd(i)}const fR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Av(r){return r.replace(fR,dR)}function dR(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Rv(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hR(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===n0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===HE?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function pR(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rs:case Cs:t="ENVMAP_TYPE_CUBE";break;case Xc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mR(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function gR(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case i0:t="ENVMAP_BLENDING_MULTIPLY";break;case uM:t="ENVMAP_BLENDING_MIX";break;case fM:t="ENVMAP_BLENDING_ADD";break}return t}function _R(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function vR(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=hR(i),m=pR(i),g=mR(i),_=gR(i),S=_R(i),E=i.isWebGL2?"":aR(i),b=rR(i),M=sR(c),y=l.createProgram();let v,D,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(bs).join(`
`),v.length>0&&(v+=`
`),D=[E,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(bs).join(`
`),D.length>0&&(D+=`
`)):(v=[Rv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),D=[E,Rv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?ct.tonemapping_pars_fragment:"",i.toneMapping!==ja?iR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,nR("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bs).join(`
`)),h=Jd(h),h=bv(h,i),h=Tv(h,i),d=Jd(d),d=bv(d,i),d=Tv(d,i),h=Av(h),d=Av(d),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,v=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,D=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===W_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===W_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const O=A+v+h,k=A+D+d,I=Ev(l,l.VERTEX_SHADER,O),P=Ev(l,l.FRAGMENT_SHADER,k);l.attachShader(y,I),l.attachShader(y,P),i.index0AttributeName!==void 0?l.bindAttribLocation(y,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(y,0,"position"),l.linkProgram(y);function pe(he){if(r.debug.checkShaderErrors){const Me=l.getProgramInfoLog(y).trim(),W=l.getShaderInfoLog(I).trim(),ee=l.getShaderInfoLog(P).trim();let z=!0,j=!0;if(l.getProgramParameter(y,l.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,y,I,P);else{const Q=Mv(l,I,"vertex"),le=Mv(l,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(y,l.VALIDATE_STATUS)+`

Program Info Log: `+Me+`
`+Q+`
`+le)}else Me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Me):(W===""||ee==="")&&(j=!1);j&&(he.diagnostics={runnable:z,programLog:Me,vertexShader:{log:W,prefix:v},fragmentShader:{log:ee,prefix:D}})}l.deleteShader(I),l.deleteShader(P),C=new Oc(l,y),N=oR(l,y)}let C;this.getUniforms=function(){return C===void 0&&pe(this),C};let N;this.getAttributes=function(){return N===void 0&&pe(this),N};let ue=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ue===!1&&(ue=l.getProgramParameter(y,J1)),ue},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=$1++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=P,this}let xR=0;class SR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new yR(t),i.set(t,s)),s}}class yR{constructor(t){this.id=xR++,this.code=t,this.usedTimes=0}}function ER(r,t,i,s,l,c,h){const d=new x0,p=new SR,m=[],g=l.isWebGL2,_=l.logarithmicDepthBuffer,S=l.vertexTextures;let E=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(C){return C===0?"uv":`uv${C}`}function y(C,N,ue,he,Me){const W=he.fog,ee=Me.geometry,z=C.isMeshStandardMaterial?he.environment:null,j=(C.isMeshStandardMaterial?i:t).get(C.envMap||z),Q=j&&j.mapping===Xc?j.image.height:null,le=b[C.type];C.precision!==null&&(E=l.getMaxPrecision(C.precision),E!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",E,"instead."));const fe=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,L=fe!==void 0?fe.length:0;let X=0;ee.morphAttributes.position!==void 0&&(X=1),ee.morphAttributes.normal!==void 0&&(X=2),ee.morphAttributes.color!==void 0&&(X=3);let H,Y,_e,Ee;if(le){const Yt=Li[le];H=Yt.vertexShader,Y=Yt.fragmentShader}else H=C.vertexShader,Y=C.fragmentShader,p.update(C),_e=p.getVertexShaderID(C),Ee=p.getFragmentShaderID(C);const be=r.getRenderTarget(),He=Me.isInstancedMesh===!0,Pe=Me.isBatchedMesh===!0,qe=!!C.map,ft=!!C.matcap,te=!!j,un=!!C.aoMap,Ge=!!C.lightMap,$e=!!C.bumpMap,Ie=!!C.normalMap,It=!!C.displacementMap,it=!!C.emissiveMap,U=!!C.metalnessMap,R=!!C.roughnessMap,ie=C.anisotropy>0,ye=C.clearcoat>0,Se=C.iridescence>0,ve=C.sheen>0,Ve=C.transmission>0,we=ie&&!!C.anisotropyMap,Oe=ye&&!!C.clearcoatMap,Ye=ye&&!!C.clearcoatNormalMap,rt=ye&&!!C.clearcoatRoughnessMap,xe=Se&&!!C.iridescenceMap,Mt=Se&&!!C.iridescenceThicknessMap,ut=ve&&!!C.sheenColorMap,Je=ve&&!!C.sheenRoughnessMap,Ue=!!C.specularMap,De=!!C.specularColorMap,We=!!C.specularIntensityMap,yt=Ve&&!!C.transmissionMap,Vt=Ve&&!!C.thicknessMap,ot=!!C.gradientMap,Te=!!C.alphaMap,G=C.alphaTest>0,Ce=!!C.alphaHash,Ae=!!C.extensions,Ke=!!ee.attributes.uv1,ke=!!ee.attributes.uv2,wt=!!ee.attributes.uv3;let bt=ja;return C.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(bt=r.toneMapping),{isWebGL2:g,shaderID:le,shaderType:C.type,shaderName:C.name,vertexShader:H,fragmentShader:Y,defines:C.defines,customVertexShaderID:_e,customFragmentShaderID:Ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:E,batching:Pe,instancing:He,instancingColor:He&&Me.instanceColor!==null,supportsVertexTextures:S,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:sa,map:qe,matcap:ft,envMap:te,envMapMode:te&&j.mapping,envMapCubeUVHeight:Q,aoMap:un,lightMap:Ge,bumpMap:$e,normalMap:Ie,displacementMap:S&&It,emissiveMap:it,normalMapObjectSpace:Ie&&C.normalMapType===LM,normalMapTangentSpace:Ie&&C.normalMapType===wM,metalnessMap:U,roughnessMap:R,anisotropy:ie,anisotropyMap:we,clearcoat:ye,clearcoatMap:Oe,clearcoatNormalMap:Ye,clearcoatRoughnessMap:rt,iridescence:Se,iridescenceMap:xe,iridescenceThicknessMap:Mt,sheen:ve,sheenColorMap:ut,sheenRoughnessMap:Je,specularMap:Ue,specularColorMap:De,specularIntensityMap:We,transmission:Ve,transmissionMap:yt,thicknessMap:Vt,gradientMap:ot,opaque:C.transparent===!1&&C.blending===Ts,alphaMap:Te,alphaTest:G,alphaHash:Ce,combine:C.combine,mapUv:qe&&M(C.map.channel),aoMapUv:un&&M(C.aoMap.channel),lightMapUv:Ge&&M(C.lightMap.channel),bumpMapUv:$e&&M(C.bumpMap.channel),normalMapUv:Ie&&M(C.normalMap.channel),displacementMapUv:It&&M(C.displacementMap.channel),emissiveMapUv:it&&M(C.emissiveMap.channel),metalnessMapUv:U&&M(C.metalnessMap.channel),roughnessMapUv:R&&M(C.roughnessMap.channel),anisotropyMapUv:we&&M(C.anisotropyMap.channel),clearcoatMapUv:Oe&&M(C.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&M(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&M(C.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&M(C.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&M(C.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&M(C.sheenColorMap.channel),sheenRoughnessMapUv:Je&&M(C.sheenRoughnessMap.channel),specularMapUv:Ue&&M(C.specularMap.channel),specularColorMapUv:De&&M(C.specularColorMap.channel),specularIntensityMapUv:We&&M(C.specularIntensityMap.channel),transmissionMapUv:yt&&M(C.transmissionMap.channel),thicknessMapUv:Vt&&M(C.thicknessMap.channel),alphaMapUv:Te&&M(C.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ie||ie),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,vertexUv1s:Ke,vertexUv2s:ke,vertexUv3s:wt,pointsUvs:Me.isPoints===!0&&!!ee.attributes.uv&&(qe||Te),fog:!!W,useFog:C.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:Me.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:X,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&ue.length>0,shadowMapType:r.shadowMap.type,toneMapping:bt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:qe&&C.map.isVideoTexture===!0&&Ot.getTransfer(C.map.colorSpace)===Gt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===na,flipSided:C.side===Hn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:Ae&&C.extensions.derivatives===!0,extensionFragDepth:Ae&&C.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&C.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ae&&C.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:g||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()}}function v(C){const N=[];if(C.shaderID?N.push(C.shaderID):(N.push(C.customVertexShaderID),N.push(C.customFragmentShaderID)),C.defines!==void 0)for(const ue in C.defines)N.push(ue),N.push(C.defines[ue]);return C.isRawShaderMaterial===!1&&(D(N,C),A(N,C),N.push(r.outputColorSpace)),N.push(C.customProgramCacheKey),N.join()}function D(C,N){C.push(N.precision),C.push(N.outputColorSpace),C.push(N.envMapMode),C.push(N.envMapCubeUVHeight),C.push(N.mapUv),C.push(N.alphaMapUv),C.push(N.lightMapUv),C.push(N.aoMapUv),C.push(N.bumpMapUv),C.push(N.normalMapUv),C.push(N.displacementMapUv),C.push(N.emissiveMapUv),C.push(N.metalnessMapUv),C.push(N.roughnessMapUv),C.push(N.anisotropyMapUv),C.push(N.clearcoatMapUv),C.push(N.clearcoatNormalMapUv),C.push(N.clearcoatRoughnessMapUv),C.push(N.iridescenceMapUv),C.push(N.iridescenceThicknessMapUv),C.push(N.sheenColorMapUv),C.push(N.sheenRoughnessMapUv),C.push(N.specularMapUv),C.push(N.specularColorMapUv),C.push(N.specularIntensityMapUv),C.push(N.transmissionMapUv),C.push(N.thicknessMapUv),C.push(N.combine),C.push(N.fogExp2),C.push(N.sizeAttenuation),C.push(N.morphTargetsCount),C.push(N.morphAttributeCount),C.push(N.numDirLights),C.push(N.numPointLights),C.push(N.numSpotLights),C.push(N.numSpotLightMaps),C.push(N.numHemiLights),C.push(N.numRectAreaLights),C.push(N.numDirLightShadows),C.push(N.numPointLightShadows),C.push(N.numSpotLightShadows),C.push(N.numSpotLightShadowsWithMaps),C.push(N.numLightProbes),C.push(N.shadowMapType),C.push(N.toneMapping),C.push(N.numClippingPlanes),C.push(N.numClipIntersection),C.push(N.depthPacking)}function A(C,N){d.disableAll(),N.isWebGL2&&d.enable(0),N.supportsVertexTextures&&d.enable(1),N.instancing&&d.enable(2),N.instancingColor&&d.enable(3),N.matcap&&d.enable(4),N.envMap&&d.enable(5),N.normalMapObjectSpace&&d.enable(6),N.normalMapTangentSpace&&d.enable(7),N.clearcoat&&d.enable(8),N.iridescence&&d.enable(9),N.alphaTest&&d.enable(10),N.vertexColors&&d.enable(11),N.vertexAlphas&&d.enable(12),N.vertexUv1s&&d.enable(13),N.vertexUv2s&&d.enable(14),N.vertexUv3s&&d.enable(15),N.vertexTangents&&d.enable(16),N.anisotropy&&d.enable(17),N.alphaHash&&d.enable(18),N.batching&&d.enable(19),C.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.skinning&&d.enable(4),N.morphTargets&&d.enable(5),N.morphNormals&&d.enable(6),N.morphColors&&d.enable(7),N.premultipliedAlpha&&d.enable(8),N.shadowMapEnabled&&d.enable(9),N.useLegacyLights&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),C.push(d.mask)}function O(C){const N=b[C.type];let ue;if(N){const he=Li[N];ue=ib.clone(he.uniforms)}else ue=C.uniforms;return ue}function k(C,N){let ue;for(let he=0,Me=m.length;he<Me;he++){const W=m[he];if(W.cacheKey===N){ue=W,++ue.usedTimes;break}}return ue===void 0&&(ue=new vR(r,N,C,c),m.push(ue)),ue}function I(C){if(--C.usedTimes===0){const N=m.indexOf(C);m[N]=m[m.length-1],m.pop(),C.destroy()}}function P(C){p.remove(C)}function pe(){p.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:O,acquireProgram:k,releaseProgram:I,releaseShaderCache:P,programs:m,dispose:pe}}function MR(){let r=new WeakMap;function t(c){let h=r.get(c);return h===void 0&&(h={},r.set(c,h)),h}function i(c){r.delete(c)}function s(c,h,d){r.get(c)[h]=d}function l(){r=new WeakMap}return{get:t,remove:i,update:s,dispose:l}}function bR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Cv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function wv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,S,E,b,M,y){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:S,material:E,groupOrder:b,renderOrder:_.renderOrder,z:M,group:y},r[t]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=E,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=M,v.group=y),t++,v}function d(_,S,E,b,M,y){const v=h(_,S,E,b,M,y);E.transmission>0?s.push(v):E.transparent===!0?l.push(v):i.push(v)}function p(_,S,E,b,M,y){const v=h(_,S,E,b,M,y);E.transmission>0?s.unshift(v):E.transparent===!0?l.unshift(v):i.unshift(v)}function m(_,S){i.length>1&&i.sort(_||bR),s.length>1&&s.sort(S||Cv),l.length>1&&l.sort(S||Cv)}function g(){for(let _=t,S=r.length;_<S;_++){const E=r[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function TR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new wv,r.set(s,[h])):l>=c.length?(h=new wv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function AR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new oe,color:new vt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new vt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":i={color:new vt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return r[t.id]=i,i}}}function RR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let CR=0;function wR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function LR(r,t){const i=new AR,s=RR(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new oe);const c=new oe,h=new pn,d=new pn;function p(g,_){let S=0,E=0,b=0;for(let he=0;he<9;he++)l.probe[he].set(0,0,0);let M=0,y=0,v=0,D=0,A=0,O=0,k=0,I=0,P=0,pe=0,C=0;g.sort(wR);const N=_===!0?Math.PI:1;for(let he=0,Me=g.length;he<Me;he++){const W=g[he],ee=W.color,z=W.intensity,j=W.distance,Q=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)S+=ee.r*z*N,E+=ee.g*z*N,b+=ee.b*z*N;else if(W.isLightProbe){for(let le=0;le<9;le++)l.probe[le].addScaledVector(W.sh.coefficients[le],z);C++}else if(W.isDirectionalLight){const le=i.get(W);if(le.color.copy(W.color).multiplyScalar(W.intensity*N),W.castShadow){const fe=W.shadow,L=s.get(W);L.shadowBias=fe.bias,L.shadowNormalBias=fe.normalBias,L.shadowRadius=fe.radius,L.shadowMapSize=fe.mapSize,l.directionalShadow[M]=L,l.directionalShadowMap[M]=Q,l.directionalShadowMatrix[M]=W.shadow.matrix,O++}l.directional[M]=le,M++}else if(W.isSpotLight){const le=i.get(W);le.position.setFromMatrixPosition(W.matrixWorld),le.color.copy(ee).multiplyScalar(z*N),le.distance=j,le.coneCos=Math.cos(W.angle),le.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),le.decay=W.decay,l.spot[v]=le;const fe=W.shadow;if(W.map&&(l.spotLightMap[P]=W.map,P++,fe.updateMatrices(W),W.castShadow&&pe++),l.spotLightMatrix[v]=fe.matrix,W.castShadow){const L=s.get(W);L.shadowBias=fe.bias,L.shadowNormalBias=fe.normalBias,L.shadowRadius=fe.radius,L.shadowMapSize=fe.mapSize,l.spotShadow[v]=L,l.spotShadowMap[v]=Q,I++}v++}else if(W.isRectAreaLight){const le=i.get(W);le.color.copy(ee).multiplyScalar(z),le.halfWidth.set(W.width*.5,0,0),le.halfHeight.set(0,W.height*.5,0),l.rectArea[D]=le,D++}else if(W.isPointLight){const le=i.get(W);if(le.color.copy(W.color).multiplyScalar(W.intensity*N),le.distance=W.distance,le.decay=W.decay,W.castShadow){const fe=W.shadow,L=s.get(W);L.shadowBias=fe.bias,L.shadowNormalBias=fe.normalBias,L.shadowRadius=fe.radius,L.shadowMapSize=fe.mapSize,L.shadowCameraNear=fe.camera.near,L.shadowCameraFar=fe.camera.far,l.pointShadow[y]=L,l.pointShadowMap[y]=Q,l.pointShadowMatrix[y]=W.shadow.matrix,k++}l.point[y]=le,y++}else if(W.isHemisphereLight){const le=i.get(W);le.skyColor.copy(W.color).multiplyScalar(z*N),le.groundColor.copy(W.groundColor).multiplyScalar(z*N),l.hemi[A]=le,A++}}D>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Re.LTC_FLOAT_1,l.rectAreaLTC2=Re.LTC_FLOAT_2):(l.rectAreaLTC1=Re.LTC_HALF_1,l.rectAreaLTC2=Re.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Re.LTC_FLOAT_1,l.rectAreaLTC2=Re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Re.LTC_HALF_1,l.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=S,l.ambient[1]=E,l.ambient[2]=b;const ue=l.hash;(ue.directionalLength!==M||ue.pointLength!==y||ue.spotLength!==v||ue.rectAreaLength!==D||ue.hemiLength!==A||ue.numDirectionalShadows!==O||ue.numPointShadows!==k||ue.numSpotShadows!==I||ue.numSpotMaps!==P||ue.numLightProbes!==C)&&(l.directional.length=M,l.spot.length=v,l.rectArea.length=D,l.point.length=y,l.hemi.length=A,l.directionalShadow.length=O,l.directionalShadowMap.length=O,l.pointShadow.length=k,l.pointShadowMap.length=k,l.spotShadow.length=I,l.spotShadowMap.length=I,l.directionalShadowMatrix.length=O,l.pointShadowMatrix.length=k,l.spotLightMatrix.length=I+P-pe,l.spotLightMap.length=P,l.numSpotLightShadowsWithMaps=pe,l.numLightProbes=C,ue.directionalLength=M,ue.pointLength=y,ue.spotLength=v,ue.rectAreaLength=D,ue.hemiLength=A,ue.numDirectionalShadows=O,ue.numPointShadows=k,ue.numSpotShadows=I,ue.numSpotMaps=P,ue.numLightProbes=C,l.version=CR++)}function m(g,_){let S=0,E=0,b=0,M=0,y=0;const v=_.matrixWorldInverse;for(let D=0,A=g.length;D<A;D++){const O=g[D];if(O.isDirectionalLight){const k=l.directional[S];k.direction.setFromMatrixPosition(O.matrixWorld),c.setFromMatrixPosition(O.target.matrixWorld),k.direction.sub(c),k.direction.transformDirection(v),S++}else if(O.isSpotLight){const k=l.spot[b];k.position.setFromMatrixPosition(O.matrixWorld),k.position.applyMatrix4(v),k.direction.setFromMatrixPosition(O.matrixWorld),c.setFromMatrixPosition(O.target.matrixWorld),k.direction.sub(c),k.direction.transformDirection(v),b++}else if(O.isRectAreaLight){const k=l.rectArea[M];k.position.setFromMatrixPosition(O.matrixWorld),k.position.applyMatrix4(v),d.identity(),h.copy(O.matrixWorld),h.premultiply(v),d.extractRotation(h),k.halfWidth.set(O.width*.5,0,0),k.halfHeight.set(0,O.height*.5,0),k.halfWidth.applyMatrix4(d),k.halfHeight.applyMatrix4(d),M++}else if(O.isPointLight){const k=l.point[E];k.position.setFromMatrixPosition(O.matrixWorld),k.position.applyMatrix4(v),E++}else if(O.isHemisphereLight){const k=l.hemi[y];k.direction.setFromMatrixPosition(O.matrixWorld),k.direction.transformDirection(v),y++}}}return{setup:p,setupView:m,state:l}}function Lv(r,t){const i=new LR(r,t),s=[],l=[];function c(){s.length=0,l.length=0}function h(_){s.push(_)}function d(_){l.push(_)}function p(_){i.setup(s,_)}function m(_){i.setupView(s,_)}return{init:c,state:{lightsArray:s,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:h,pushShadow:d}}function DR(r,t){let i=new WeakMap;function s(c,h=0){const d=i.get(c);let p;return d===void 0?(p=new Lv(r,t),i.set(c,[p])):h>=d.length?(p=new Lv(r,t),d.push(p)):p=d[h],p}function l(){i=new WeakMap}return{get:s,dispose:l}}class UR extends Zo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class NR extends Zo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const OR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zR(r,t,i){let s=new R0;const l=new Ct,c=new Ct,h=new yn,d=new UR({depthPacking:CM}),p=new NR,m={},g=i.maxTextureSize,_={[Ya]:Hn,[Hn]:Ya,[na]:na},S=new oa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:OR,fragmentShader:PR}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const b=new la;b.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Xa(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n0;let v=this.type;this.render=function(I,P,pe){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const C=r.getRenderTarget(),N=r.getActiveCubeFace(),ue=r.getActiveMipmapLevel(),he=r.state;he.setBlending(Wa),he.buffers.color.setClear(1,1,1,1),he.buffers.depth.setTest(!0),he.setScissorTest(!1);const Me=v!==ta&&this.type===ta,W=v===ta&&this.type!==ta;for(let ee=0,z=I.length;ee<z;ee++){const j=I[ee],Q=j.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const le=Q.getFrameExtents();if(l.multiply(le),c.copy(Q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/le.x),l.x=c.x*le.x,Q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/le.y),l.y=c.y*le.y,Q.mapSize.y=c.y)),Q.map===null||Me===!0||W===!0){const L=this.type!==ta?{minFilter:Ln,magFilter:Ln}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ar(l.x,l.y,L),Q.map.texture.name=j.name+".shadowMap",Q.camera.updateProjectionMatrix()}r.setRenderTarget(Q.map),r.clear();const fe=Q.getViewportCount();for(let L=0;L<fe;L++){const X=Q.getViewport(L);h.set(c.x*X.x,c.y*X.y,c.x*X.z,c.y*X.w),he.viewport(h),Q.updateMatrices(j,L),s=Q.getFrustum(),O(P,pe,Q.camera,j,this.type)}Q.isPointLightShadow!==!0&&this.type===ta&&D(Q,pe),Q.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(C,N,ue)};function D(I,P){const pe=t.update(M);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,E.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ar(l.x,l.y)),S.uniforms.shadow_pass.value=I.map.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(P,null,pe,S,M,null),E.uniforms.shadow_pass.value=I.mapPass.texture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(P,null,pe,E,M,null)}function A(I,P,pe,C){let N=null;const ue=pe.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(ue!==void 0)N=ue;else if(N=pe.isPointLight===!0?p:d,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const he=N.uuid,Me=P.uuid;let W=m[he];W===void 0&&(W={},m[he]=W);let ee=W[Me];ee===void 0&&(ee=N.clone(),W[Me]=ee,P.addEventListener("dispose",k)),N=ee}if(N.visible=P.visible,N.wireframe=P.wireframe,C===ta?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:_[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,pe.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const he=r.properties.get(N);he.light=pe}return N}function O(I,P,pe,C,N){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&N===ta)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,I.matrixWorld);const Me=t.update(I),W=I.material;if(Array.isArray(W)){const ee=Me.groups;for(let z=0,j=ee.length;z<j;z++){const Q=ee[z],le=W[Q.materialIndex];if(le&&le.visible){const fe=A(I,le,C,N);I.onBeforeShadow(r,I,P,pe,Me,fe,Q),r.renderBufferDirect(pe,null,Me,fe,I,Q),I.onAfterShadow(r,I,P,pe,Me,fe,Q)}}}else if(W.visible){const ee=A(I,W,C,N);I.onBeforeShadow(r,I,P,pe,Me,ee,null),r.renderBufferDirect(pe,null,Me,ee,I,null),I.onAfterShadow(r,I,P,pe,Me,ee,null)}}const he=I.children;for(let Me=0,W=he.length;Me<W;Me++)O(he[Me],P,pe,C,N)}function k(I){I.target.removeEventListener("dispose",k);for(const pe in m){const C=m[pe],N=I.target.uuid;N in C&&(C[N].dispose(),delete C[N])}}}function BR(r,t,i){const s=i.isWebGL2;function l(){let G=!1;const Ce=new yn;let Ae=null;const Ke=new yn(0,0,0,0);return{setMask:function(ke){Ae!==ke&&!G&&(r.colorMask(ke,ke,ke,ke),Ae=ke)},setLocked:function(ke){G=ke},setClear:function(ke,wt,bt,Wt,Yt){Yt===!0&&(ke*=Wt,wt*=Wt,bt*=Wt),Ce.set(ke,wt,bt,Wt),Ke.equals(Ce)===!1&&(r.clearColor(ke,wt,bt,Wt),Ke.copy(Ce))},reset:function(){G=!1,Ae=null,Ke.set(-1,0,0,0)}}}function c(){let G=!1,Ce=null,Ae=null,Ke=null;return{setTest:function(ke){ke?Pe(r.DEPTH_TEST):qe(r.DEPTH_TEST)},setMask:function(ke){Ce!==ke&&!G&&(r.depthMask(ke),Ce=ke)},setFunc:function(ke){if(Ae!==ke){switch(ke){case iM:r.depthFunc(r.NEVER);break;case aM:r.depthFunc(r.ALWAYS);break;case rM:r.depthFunc(r.LESS);break;case zc:r.depthFunc(r.LEQUAL);break;case sM:r.depthFunc(r.EQUAL);break;case oM:r.depthFunc(r.GEQUAL);break;case lM:r.depthFunc(r.GREATER);break;case cM:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ae=ke}},setLocked:function(ke){G=ke},setClear:function(ke){Ke!==ke&&(r.clearDepth(ke),Ke=ke)},reset:function(){G=!1,Ce=null,Ae=null,Ke=null}}}function h(){let G=!1,Ce=null,Ae=null,Ke=null,ke=null,wt=null,bt=null,Wt=null,Yt=null;return{setTest:function(Lt){G||(Lt?Pe(r.STENCIL_TEST):qe(r.STENCIL_TEST))},setMask:function(Lt){Ce!==Lt&&!G&&(r.stencilMask(Lt),Ce=Lt)},setFunc:function(Lt,fn,kn){(Ae!==Lt||Ke!==fn||ke!==kn)&&(r.stencilFunc(Lt,fn,kn),Ae=Lt,Ke=fn,ke=kn)},setOp:function(Lt,fn,kn){(wt!==Lt||bt!==fn||Wt!==kn)&&(r.stencilOp(Lt,fn,kn),wt=Lt,bt=fn,Wt=kn)},setLocked:function(Lt){G=Lt},setClear:function(Lt){Yt!==Lt&&(r.clearStencil(Lt),Yt=Lt)},reset:function(){G=!1,Ce=null,Ae=null,Ke=null,ke=null,wt=null,bt=null,Wt=null,Yt=null}}}const d=new l,p=new c,m=new h,g=new WeakMap,_=new WeakMap;let S={},E={},b=new WeakMap,M=[],y=null,v=!1,D=null,A=null,O=null,k=null,I=null,P=null,pe=null,C=new vt(0,0,0),N=0,ue=!1,he=null,Me=null,W=null,ee=null,z=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,le=0;const fe=r.getParameter(r.VERSION);fe.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(fe)[1]),Q=le>=1):fe.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),Q=le>=2);let L=null,X={};const H=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),_e=new yn().fromArray(H),Ee=new yn().fromArray(Y);function be(G,Ce,Ae,Ke){const ke=new Uint8Array(4),wt=r.createTexture();r.bindTexture(G,wt),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let bt=0;bt<Ae;bt++)s&&(G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY)?r.texImage3D(Ce,0,r.RGBA,1,1,Ke,0,r.RGBA,r.UNSIGNED_BYTE,ke):r.texImage2D(Ce+bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ke);return wt}const He={};He[r.TEXTURE_2D]=be(r.TEXTURE_2D,r.TEXTURE_2D,1),He[r.TEXTURE_CUBE_MAP]=be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(He[r.TEXTURE_2D_ARRAY]=be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),He[r.TEXTURE_3D]=be(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),d.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Pe(r.DEPTH_TEST),p.setFunc(zc),it(!1),U(f_),Pe(r.CULL_FACE),Ie(Wa);function Pe(G){S[G]!==!0&&(r.enable(G),S[G]=!0)}function qe(G){S[G]!==!1&&(r.disable(G),S[G]=!1)}function ft(G,Ce){return E[G]!==Ce?(r.bindFramebuffer(G,Ce),E[G]=Ce,s&&(G===r.DRAW_FRAMEBUFFER&&(E[r.FRAMEBUFFER]=Ce),G===r.FRAMEBUFFER&&(E[r.DRAW_FRAMEBUFFER]=Ce)),!0):!1}function te(G,Ce){let Ae=M,Ke=!1;if(G)if(Ae=b.get(Ce),Ae===void 0&&(Ae=[],b.set(Ce,Ae)),G.isWebGLMultipleRenderTargets){const ke=G.texture;if(Ae.length!==ke.length||Ae[0]!==r.COLOR_ATTACHMENT0){for(let wt=0,bt=ke.length;wt<bt;wt++)Ae[wt]=r.COLOR_ATTACHMENT0+wt;Ae.length=ke.length,Ke=!0}}else Ae[0]!==r.COLOR_ATTACHMENT0&&(Ae[0]=r.COLOR_ATTACHMENT0,Ke=!0);else Ae[0]!==r.BACK&&(Ae[0]=r.BACK,Ke=!0);Ke&&(i.isWebGL2?r.drawBuffers(Ae):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ae))}function un(G){return y!==G?(r.useProgram(G),y=G,!0):!1}const Ge={[Sr]:r.FUNC_ADD,[VE]:r.FUNC_SUBTRACT,[kE]:r.FUNC_REVERSE_SUBTRACT};if(s)Ge[m_]=r.MIN,Ge[g_]=r.MAX;else{const G=t.get("EXT_blend_minmax");G!==null&&(Ge[m_]=G.MIN_EXT,Ge[g_]=G.MAX_EXT)}const $e={[XE]:r.ZERO,[WE]:r.ONE,[jE]:r.SRC_COLOR,[kd]:r.SRC_ALPHA,[JE]:r.SRC_ALPHA_SATURATE,[KE]:r.DST_COLOR,[YE]:r.DST_ALPHA,[qE]:r.ONE_MINUS_SRC_COLOR,[Xd]:r.ONE_MINUS_SRC_ALPHA,[QE]:r.ONE_MINUS_DST_COLOR,[ZE]:r.ONE_MINUS_DST_ALPHA,[$E]:r.CONSTANT_COLOR,[eM]:r.ONE_MINUS_CONSTANT_COLOR,[tM]:r.CONSTANT_ALPHA,[nM]:r.ONE_MINUS_CONSTANT_ALPHA};function Ie(G,Ce,Ae,Ke,ke,wt,bt,Wt,Yt,Lt){if(G===Wa){v===!0&&(qe(r.BLEND),v=!1);return}if(v===!1&&(Pe(r.BLEND),v=!0),G!==GE){if(G!==D||Lt!==ue){if((A!==Sr||I!==Sr)&&(r.blendEquation(r.FUNC_ADD),A=Sr,I=Sr),Lt)switch(G){case Ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case d_:r.blendFunc(r.ONE,r.ONE);break;case h_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case p_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case d_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case h_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case p_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}O=null,k=null,P=null,pe=null,C.set(0,0,0),N=0,D=G,ue=Lt}return}ke=ke||Ce,wt=wt||Ae,bt=bt||Ke,(Ce!==A||ke!==I)&&(r.blendEquationSeparate(Ge[Ce],Ge[ke]),A=Ce,I=ke),(Ae!==O||Ke!==k||wt!==P||bt!==pe)&&(r.blendFuncSeparate($e[Ae],$e[Ke],$e[wt],$e[bt]),O=Ae,k=Ke,P=wt,pe=bt),(Wt.equals(C)===!1||Yt!==N)&&(r.blendColor(Wt.r,Wt.g,Wt.b,Yt),C.copy(Wt),N=Yt),D=G,ue=!1}function It(G,Ce){G.side===na?qe(r.CULL_FACE):Pe(r.CULL_FACE);let Ae=G.side===Hn;Ce&&(Ae=!Ae),it(Ae),G.blending===Ts&&G.transparent===!1?Ie(Wa):Ie(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),p.setFunc(G.depthFunc),p.setTest(G.depthTest),p.setMask(G.depthWrite),d.setMask(G.colorWrite);const Ke=G.stencilWrite;m.setTest(Ke),Ke&&(m.setMask(G.stencilWriteMask),m.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),m.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ie(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):qe(r.SAMPLE_ALPHA_TO_COVERAGE)}function it(G){he!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),he=G)}function U(G){G!==IE?(Pe(r.CULL_FACE),G!==Me&&(G===f_?r.cullFace(r.BACK):G===FE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):qe(r.CULL_FACE),Me=G}function R(G){G!==W&&(Q&&r.lineWidth(G),W=G)}function ie(G,Ce,Ae){G?(Pe(r.POLYGON_OFFSET_FILL),(ee!==Ce||z!==Ae)&&(r.polygonOffset(Ce,Ae),ee=Ce,z=Ae)):qe(r.POLYGON_OFFSET_FILL)}function ye(G){G?Pe(r.SCISSOR_TEST):qe(r.SCISSOR_TEST)}function Se(G){G===void 0&&(G=r.TEXTURE0+j-1),L!==G&&(r.activeTexture(G),L=G)}function ve(G,Ce,Ae){Ae===void 0&&(L===null?Ae=r.TEXTURE0+j-1:Ae=L);let Ke=X[Ae];Ke===void 0&&(Ke={type:void 0,texture:void 0},X[Ae]=Ke),(Ke.type!==G||Ke.texture!==Ce)&&(L!==Ae&&(r.activeTexture(Ae),L=Ae),r.bindTexture(G,Ce||He[G]),Ke.type=G,Ke.texture=Ce)}function Ve(){const G=X[L];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function we(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(G){_e.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),_e.copy(G))}function yt(G){Ee.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Ee.copy(G))}function Vt(G,Ce){let Ae=_.get(Ce);Ae===void 0&&(Ae=new WeakMap,_.set(Ce,Ae));let Ke=Ae.get(G);Ke===void 0&&(Ke=r.getUniformBlockIndex(Ce,G.name),Ae.set(G,Ke))}function ot(G,Ce){const Ke=_.get(Ce).get(G);g.get(Ce)!==Ke&&(r.uniformBlockBinding(Ce,Ke,G.__bindingPointIndex),g.set(Ce,Ke))}function Te(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),s===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),S={},L=null,X={},E={},b=new WeakMap,M=[],y=null,v=!1,D=null,A=null,O=null,k=null,I=null,P=null,pe=null,C=new vt(0,0,0),N=0,ue=!1,he=null,Me=null,W=null,ee=null,z=null,_e.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),d.reset(),p.reset(),m.reset()}return{buffers:{color:d,depth:p,stencil:m},enable:Pe,disable:qe,bindFramebuffer:ft,drawBuffers:te,useProgram:un,setBlending:Ie,setMaterial:It,setFlipSided:it,setCullFace:U,setLineWidth:R,setPolygonOffset:ie,setScissorTest:ye,activeTexture:Se,bindTexture:ve,unbindTexture:Ve,compressedTexImage2D:we,compressedTexImage3D:Oe,texImage2D:Ue,texImage3D:De,updateUBOMapping:Vt,uniformBlockBinding:ot,texStorage2D:ut,texStorage3D:Je,texSubImage2D:Ye,texSubImage3D:rt,compressedTexSubImage2D:xe,compressedTexSubImage3D:Mt,scissor:We,viewport:yt,reset:Te}}function IR(r,t,i,s,l,c,h){const d=l.isWebGL2,p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,R){return E?new OffscreenCanvas(U,R):Vo("canvas")}function M(U,R,ie,ye){let Se=1;if((U.width>ye||U.height>ye)&&(Se=ye/Math.max(U.width,U.height)),Se<1||R===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const ve=R?Qd:Math.floor,Ve=ve(Se*U.width),we=ve(Se*U.height);_===void 0&&(_=b(Ve,we));const Oe=ie?b(Ve,we):_;return Oe.width=Ve,Oe.height=we,Oe.getContext("2d").drawImage(U,0,0,Ve,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+Ve+"x"+we+")."),Oe}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function y(U){return j_(U.width)&&j_(U.height)}function v(U){return d?!1:U.wrapS!==Ei||U.wrapT!==Ei||U.minFilter!==Ln&&U.minFilter!==ci}function D(U,R){return U.generateMipmaps&&R&&U.minFilter!==Ln&&U.minFilter!==ci}function A(U){r.generateMipmap(U)}function O(U,R,ie,ye,Se=!1){if(d===!1)return R;if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ve=R;if(R===r.RED&&(ie===r.FLOAT&&(ve=r.R32F),ie===r.HALF_FLOAT&&(ve=r.R16F),ie===r.UNSIGNED_BYTE&&(ve=r.R8)),R===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(ve=r.R8UI),ie===r.UNSIGNED_SHORT&&(ve=r.R16UI),ie===r.UNSIGNED_INT&&(ve=r.R32UI),ie===r.BYTE&&(ve=r.R8I),ie===r.SHORT&&(ve=r.R16I),ie===r.INT&&(ve=r.R32I)),R===r.RG&&(ie===r.FLOAT&&(ve=r.RG32F),ie===r.HALF_FLOAT&&(ve=r.RG16F),ie===r.UNSIGNED_BYTE&&(ve=r.RG8)),R===r.RGBA){const Ve=Se?Bc:Ot.getTransfer(ye);ie===r.FLOAT&&(ve=r.RGBA32F),ie===r.HALF_FLOAT&&(ve=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(ve=Ve===Gt?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT_4_4_4_4&&(ve=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(ve=r.RGB5_A1)}return(ve===r.R16F||ve===r.R32F||ve===r.RG16F||ve===r.RG32F||ve===r.RGBA16F||ve===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ve}function k(U,R,ie){return D(U,ie)===!0||U.isFramebufferTexture&&U.minFilter!==Ln&&U.minFilter!==ci?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function I(U){return U===Ln||U===__||U===ud?r.NEAREST:r.LINEAR}function P(U){const R=U.target;R.removeEventListener("dispose",P),C(R),R.isVideoTexture&&g.delete(R)}function pe(U){const R=U.target;R.removeEventListener("dispose",pe),ue(R)}function C(U){const R=s.get(U);if(R.__webglInit===void 0)return;const ie=U.source,ye=S.get(ie);if(ye){const Se=ye[R.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&N(U),Object.keys(ye).length===0&&S.delete(ie)}s.remove(U)}function N(U){const R=s.get(U);r.deleteTexture(R.__webglTexture);const ie=U.source,ye=S.get(ie);delete ye[R.__cacheKey],h.memory.textures--}function ue(U){const R=U.texture,ie=s.get(U),ye=s.get(R);if(ye.__webglTexture!==void 0&&(r.deleteTexture(ye.__webglTexture),h.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(ie.__webglFramebuffer[Se]))for(let ve=0;ve<ie.__webglFramebuffer[Se].length;ve++)r.deleteFramebuffer(ie.__webglFramebuffer[Se][ve]);else r.deleteFramebuffer(ie.__webglFramebuffer[Se]);ie.__webglDepthbuffer&&r.deleteRenderbuffer(ie.__webglDepthbuffer[Se])}else{if(Array.isArray(ie.__webglFramebuffer))for(let Se=0;Se<ie.__webglFramebuffer.length;Se++)r.deleteFramebuffer(ie.__webglFramebuffer[Se]);else r.deleteFramebuffer(ie.__webglFramebuffer);if(ie.__webglDepthbuffer&&r.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&r.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let Se=0;Se<ie.__webglColorRenderbuffer.length;Se++)ie.__webglColorRenderbuffer[Se]&&r.deleteRenderbuffer(ie.__webglColorRenderbuffer[Se]);ie.__webglDepthRenderbuffer&&r.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let Se=0,ve=R.length;Se<ve;Se++){const Ve=s.get(R[Se]);Ve.__webglTexture&&(r.deleteTexture(Ve.__webglTexture),h.memory.textures--),s.remove(R[Se])}s.remove(R),s.remove(U)}let he=0;function Me(){he=0}function W(){const U=he;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),he+=1,U}function ee(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function z(U,R){const ie=s.get(U);if(U.isVideoTexture&&It(U),U.isRenderTargetTexture===!1&&U.version>0&&ie.__version!==U.version){const ye=U.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(ie,U,R);return}}i.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+R)}function j(U,R){const ie=s.get(U);if(U.version>0&&ie.__version!==U.version){_e(ie,U,R);return}i.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+R)}function Q(U,R){const ie=s.get(U);if(U.version>0&&ie.__version!==U.version){_e(ie,U,R);return}i.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+R)}function le(U,R){const ie=s.get(U);if(U.version>0&&ie.__version!==U.version){Ee(ie,U,R);return}i.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+R)}const fe={[qd]:r.REPEAT,[Ei]:r.CLAMP_TO_EDGE,[Yd]:r.MIRRORED_REPEAT},L={[Ln]:r.NEAREST,[__]:r.NEAREST_MIPMAP_NEAREST,[ud]:r.NEAREST_MIPMAP_LINEAR,[ci]:r.LINEAR,[vM]:r.LINEAR_MIPMAP_NEAREST,[Ho]:r.LINEAR_MIPMAP_LINEAR},X={[DM]:r.NEVER,[BM]:r.ALWAYS,[UM]:r.LESS,[h0]:r.LEQUAL,[NM]:r.EQUAL,[zM]:r.GEQUAL,[OM]:r.GREATER,[PM]:r.NOTEQUAL};function H(U,R,ie){if(ie?(r.texParameteri(U,r.TEXTURE_WRAP_S,fe[R.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,fe[R.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,fe[R.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,L[R.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,L[R.minFilter])):(r.texParameteri(U,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(U,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(R.wrapS!==Ei||R.wrapT!==Ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(U,r.TEXTURE_MAG_FILTER,I(R.magFilter)),r.texParameteri(U,r.TEXTURE_MIN_FILTER,I(R.minFilter)),R.minFilter!==Ln&&R.minFilter!==ci&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,X[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ye=t.get("EXT_texture_filter_anisotropic");if(R.magFilter===Ln||R.minFilter!==ud&&R.minFilter!==Ho||R.type===ka&&t.has("OES_texture_float_linear")===!1||d===!1&&R.type===Go&&t.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||s.get(R).__currentAnisotropy)&&(r.texParameterf(U,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy)}}function Y(U,R){let ie=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",P));const ye=R.source;let Se=S.get(ye);Se===void 0&&(Se={},S.set(ye,Se));const ve=ee(R);if(ve!==U.__cacheKey){Se[ve]===void 0&&(Se[ve]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,ie=!0),Se[ve].usedTimes++;const Ve=Se[U.__cacheKey];Ve!==void 0&&(Se[U.__cacheKey].usedTimes--,Ve.usedTimes===0&&N(R)),U.__cacheKey=ve,U.__webglTexture=Se[ve].texture}return ie}function _e(U,R,ie){let ye=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ye=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ye=r.TEXTURE_3D);const Se=Y(U,R),ve=R.source;i.bindTexture(ye,U.__webglTexture,r.TEXTURE0+ie);const Ve=s.get(ve);if(ve.version!==Ve.__version||Se===!0){i.activeTexture(r.TEXTURE0+ie);const we=Ot.getPrimaries(Ot.workingColorSpace),Oe=R.colorSpace===fi?null:Ot.getPrimaries(R.colorSpace),Ye=R.colorSpace===fi||we===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const rt=v(R)&&y(R.image)===!1;let xe=M(R.image,rt,!1,l.maxTextureSize);xe=it(R,xe);const Mt=y(xe)||d,ut=c.convert(R.format,R.colorSpace);let Je=c.convert(R.type),Ue=O(R.internalFormat,ut,Je,R.colorSpace,R.isVideoTexture);H(ye,R,Mt);let De;const We=R.mipmaps,yt=d&&R.isVideoTexture!==!0&&Ue!==f0,Vt=Ve.__version===void 0||Se===!0,ot=k(R,xe,Mt);if(R.isDepthTexture)Ue=r.DEPTH_COMPONENT,d?R.type===ka?Ue=r.DEPTH_COMPONENT32F:R.type===Va?Ue=r.DEPTH_COMPONENT24:R.type===Mr?Ue=r.DEPTH24_STENCIL8:Ue=r.DEPTH_COMPONENT16:R.type===ka&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===br&&Ue===r.DEPTH_COMPONENT&&R.type!==lh&&R.type!==Va&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=Va,Je=c.convert(R.type)),R.format===ws&&Ue===r.DEPTH_COMPONENT&&(Ue=r.DEPTH_STENCIL,R.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=Mr,Je=c.convert(R.type))),Vt&&(yt?i.texStorage2D(r.TEXTURE_2D,1,Ue,xe.width,xe.height):i.texImage2D(r.TEXTURE_2D,0,Ue,xe.width,xe.height,0,ut,Je,null));else if(R.isDataTexture)if(We.length>0&&Mt){yt&&Vt&&i.texStorage2D(r.TEXTURE_2D,ot,Ue,We[0].width,We[0].height);for(let Te=0,G=We.length;Te<G;Te++)De=We[Te],yt?i.texSubImage2D(r.TEXTURE_2D,Te,0,0,De.width,De.height,ut,Je,De.data):i.texImage2D(r.TEXTURE_2D,Te,Ue,De.width,De.height,0,ut,Je,De.data);R.generateMipmaps=!1}else yt?(Vt&&i.texStorage2D(r.TEXTURE_2D,ot,Ue,xe.width,xe.height),i.texSubImage2D(r.TEXTURE_2D,0,0,0,xe.width,xe.height,ut,Je,xe.data)):i.texImage2D(r.TEXTURE_2D,0,Ue,xe.width,xe.height,0,ut,Je,xe.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){yt&&Vt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,ot,Ue,We[0].width,We[0].height,xe.depth);for(let Te=0,G=We.length;Te<G;Te++)De=We[Te],R.format!==Mi?ut!==null?yt?i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,De.width,De.height,xe.depth,ut,De.data,0,0):i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,Ue,De.width,De.height,xe.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?i.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,De.width,De.height,xe.depth,ut,Je,De.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Te,Ue,De.width,De.height,xe.depth,0,ut,Je,De.data)}else{yt&&Vt&&i.texStorage2D(r.TEXTURE_2D,ot,Ue,We[0].width,We[0].height);for(let Te=0,G=We.length;Te<G;Te++)De=We[Te],R.format!==Mi?ut!==null?yt?i.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,De.width,De.height,ut,De.data):i.compressedTexImage2D(r.TEXTURE_2D,Te,Ue,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?i.texSubImage2D(r.TEXTURE_2D,Te,0,0,De.width,De.height,ut,Je,De.data):i.texImage2D(r.TEXTURE_2D,Te,Ue,De.width,De.height,0,ut,Je,De.data)}else if(R.isDataArrayTexture)yt?(Vt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,ot,Ue,xe.width,xe.height,xe.depth),i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,ut,Je,xe.data)):i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,xe.width,xe.height,xe.depth,0,ut,Je,xe.data);else if(R.isData3DTexture)yt?(Vt&&i.texStorage3D(r.TEXTURE_3D,ot,Ue,xe.width,xe.height,xe.depth),i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,ut,Je,xe.data)):i.texImage3D(r.TEXTURE_3D,0,Ue,xe.width,xe.height,xe.depth,0,ut,Je,xe.data);else if(R.isFramebufferTexture){if(Vt)if(yt)i.texStorage2D(r.TEXTURE_2D,ot,Ue,xe.width,xe.height);else{let Te=xe.width,G=xe.height;for(let Ce=0;Ce<ot;Ce++)i.texImage2D(r.TEXTURE_2D,Ce,Ue,Te,G,0,ut,Je,null),Te>>=1,G>>=1}}else if(We.length>0&&Mt){yt&&Vt&&i.texStorage2D(r.TEXTURE_2D,ot,Ue,We[0].width,We[0].height);for(let Te=0,G=We.length;Te<G;Te++)De=We[Te],yt?i.texSubImage2D(r.TEXTURE_2D,Te,0,0,ut,Je,De):i.texImage2D(r.TEXTURE_2D,Te,Ue,ut,Je,De);R.generateMipmaps=!1}else yt?(Vt&&i.texStorage2D(r.TEXTURE_2D,ot,Ue,xe.width,xe.height),i.texSubImage2D(r.TEXTURE_2D,0,0,0,ut,Je,xe)):i.texImage2D(r.TEXTURE_2D,0,Ue,ut,Je,xe);D(R,Mt)&&A(ye),Ve.__version=ve.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function Ee(U,R,ie){if(R.image.length!==6)return;const ye=Y(U,R),Se=R.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+ie);const ve=s.get(Se);if(Se.version!==ve.__version||ye===!0){i.activeTexture(r.TEXTURE0+ie);const Ve=Ot.getPrimaries(Ot.workingColorSpace),we=R.colorSpace===fi?null:Ot.getPrimaries(R.colorSpace),Oe=R.colorSpace===fi||Ve===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Ye=R.isCompressedTexture||R.image[0].isCompressedTexture,rt=R.image[0]&&R.image[0].isDataTexture,xe=[];for(let Te=0;Te<6;Te++)!Ye&&!rt?xe[Te]=M(R.image[Te],!1,!0,l.maxCubemapSize):xe[Te]=rt?R.image[Te].image:R.image[Te],xe[Te]=it(R,xe[Te]);const Mt=xe[0],ut=y(Mt)||d,Je=c.convert(R.format,R.colorSpace),Ue=c.convert(R.type),De=O(R.internalFormat,Je,Ue,R.colorSpace),We=d&&R.isVideoTexture!==!0,yt=ve.__version===void 0||ye===!0;let Vt=k(R,Mt,ut);H(r.TEXTURE_CUBE_MAP,R,ut);let ot;if(Ye){We&&yt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Vt,De,Mt.width,Mt.height);for(let Te=0;Te<6;Te++){ot=xe[Te].mipmaps;for(let G=0;G<ot.length;G++){const Ce=ot[G];R.format!==Mi?Je!==null?We?i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G,0,0,Ce.width,Ce.height,Je,Ce.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G,De,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G,0,0,Ce.width,Ce.height,Je,Ue,Ce.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G,De,Ce.width,Ce.height,0,Je,Ue,Ce.data)}}}else{ot=R.mipmaps,We&&yt&&(ot.length>0&&Vt++,i.texStorage2D(r.TEXTURE_CUBE_MAP,Vt,De,xe[0].width,xe[0].height));for(let Te=0;Te<6;Te++)if(rt){We?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,xe[Te].width,xe[Te].height,Je,Ue,xe[Te].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,De,xe[Te].width,xe[Te].height,0,Je,Ue,xe[Te].data);for(let G=0;G<ot.length;G++){const Ae=ot[G].image[Te].image;We?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G+1,0,0,Ae.width,Ae.height,Je,Ue,Ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G+1,De,Ae.width,Ae.height,0,Je,Ue,Ae.data)}}else{We?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Je,Ue,xe[Te]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,De,Je,Ue,xe[Te]);for(let G=0;G<ot.length;G++){const Ce=ot[G];We?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G+1,0,0,Je,Ue,Ce.image[Te]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G+1,De,Je,Ue,Ce.image[Te])}}}D(R,ut)&&A(r.TEXTURE_CUBE_MAP),ve.__version=Se.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function be(U,R,ie,ye,Se,ve){const Ve=c.convert(ie.format,ie.colorSpace),we=c.convert(ie.type),Oe=O(ie.internalFormat,Ve,we,ie.colorSpace);if(!s.get(R).__hasExternalTextures){const rt=Math.max(1,R.width>>ve),xe=Math.max(1,R.height>>ve);Se===r.TEXTURE_3D||Se===r.TEXTURE_2D_ARRAY?i.texImage3D(Se,ve,Oe,rt,xe,R.depth,0,Ve,we,null):i.texImage2D(Se,ve,Oe,rt,xe,0,Ve,we,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),Ie(R)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,Se,s.get(ie).__webglTexture,0,$e(R)):(Se===r.TEXTURE_2D||Se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ye,Se,s.get(ie).__webglTexture,ve),i.bindFramebuffer(r.FRAMEBUFFER,null)}function He(U,R,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,U),R.depthBuffer&&!R.stencilBuffer){let ye=d===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(ie||Ie(R)){const Se=R.depthTexture;Se&&Se.isDepthTexture&&(Se.type===ka?ye=r.DEPTH_COMPONENT32F:Se.type===Va&&(ye=r.DEPTH_COMPONENT24));const ve=$e(R);Ie(R)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve,ye,R.width,R.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,ye,R.width,R.height)}else r.renderbufferStorage(r.RENDERBUFFER,ye,R.width,R.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,U)}else if(R.depthBuffer&&R.stencilBuffer){const ye=$e(R);ie&&Ie(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,r.DEPTH24_STENCIL8,R.width,R.height):Ie(R)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,r.DEPTH24_STENCIL8,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,U)}else{const ye=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Se=0;Se<ye.length;Se++){const ve=ye[Se],Ve=c.convert(ve.format,ve.colorSpace),we=c.convert(ve.type),Oe=O(ve.internalFormat,Ve,we,ve.colorSpace),Ye=$e(R);ie&&Ie(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,Oe,R.width,R.height):Ie(R)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye,Oe,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),z(R.depthTexture,0);const ye=s.get(R.depthTexture).__webglTexture,Se=$e(R);if(R.depthTexture.format===br)Ie(R)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0,Se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0);else if(R.depthTexture.format===ws)Ie(R)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0,Se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function qe(U){const R=s.get(U),ie=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Pe(R.__webglFramebuffer,U)}else if(ie){R.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[ye]),R.__webglDepthbuffer[ye]=r.createRenderbuffer(),He(R.__webglDepthbuffer[ye],U,!1)}else i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=r.createRenderbuffer(),He(R.__webglDepthbuffer,U,!1);i.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(U,R,ie){const ye=s.get(U);R!==void 0&&be(ye.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&qe(U)}function te(U){const R=U.texture,ie=s.get(U),ye=s.get(R);U.addEventListener("dispose",pe),U.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture()),ye.__version=R.version,h.memory.textures++);const Se=U.isWebGLCubeRenderTarget===!0,ve=U.isWebGLMultipleRenderTargets===!0,Ve=y(U)||d;if(Se){ie.__webglFramebuffer=[];for(let we=0;we<6;we++)if(d&&R.mipmaps&&R.mipmaps.length>0){ie.__webglFramebuffer[we]=[];for(let Oe=0;Oe<R.mipmaps.length;Oe++)ie.__webglFramebuffer[we][Oe]=r.createFramebuffer()}else ie.__webglFramebuffer[we]=r.createFramebuffer()}else{if(d&&R.mipmaps&&R.mipmaps.length>0){ie.__webglFramebuffer=[];for(let we=0;we<R.mipmaps.length;we++)ie.__webglFramebuffer[we]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(ve)if(l.drawBuffers){const we=U.texture;for(let Oe=0,Ye=we.length;Oe<Ye;Oe++){const rt=s.get(we[Oe]);rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&U.samples>0&&Ie(U)===!1){const we=ve?R:[R];ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Oe=0;Oe<we.length;Oe++){const Ye=we[Oe];ie.__webglColorRenderbuffer[Oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[Oe]);const rt=c.convert(Ye.format,Ye.colorSpace),xe=c.convert(Ye.type),Mt=O(Ye.internalFormat,rt,xe,Ye.colorSpace,U.isXRRenderTarget===!0),ut=$e(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,Mt,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,ie.__webglColorRenderbuffer[Oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),He(ie.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Se){i.bindTexture(r.TEXTURE_CUBE_MAP,ye.__webglTexture),H(r.TEXTURE_CUBE_MAP,R,Ve);for(let we=0;we<6;we++)if(d&&R.mipmaps&&R.mipmaps.length>0)for(let Oe=0;Oe<R.mipmaps.length;Oe++)be(ie.__webglFramebuffer[we][Oe],U,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Oe);else be(ie.__webglFramebuffer[we],U,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);D(R,Ve)&&A(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ve){const we=U.texture;for(let Oe=0,Ye=we.length;Oe<Ye;Oe++){const rt=we[Oe],xe=s.get(rt);i.bindTexture(r.TEXTURE_2D,xe.__webglTexture),H(r.TEXTURE_2D,rt,Ve),be(ie.__webglFramebuffer,U,rt,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,0),D(rt,Ve)&&A(r.TEXTURE_2D)}i.unbindTexture()}else{let we=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(d?we=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(we,ye.__webglTexture),H(we,R,Ve),d&&R.mipmaps&&R.mipmaps.length>0)for(let Oe=0;Oe<R.mipmaps.length;Oe++)be(ie.__webglFramebuffer[Oe],U,R,r.COLOR_ATTACHMENT0,we,Oe);else be(ie.__webglFramebuffer,U,R,r.COLOR_ATTACHMENT0,we,0);D(R,Ve)&&A(we),i.unbindTexture()}U.depthBuffer&&qe(U)}function un(U){const R=y(U)||d,ie=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let ye=0,Se=ie.length;ye<Se;ye++){const ve=ie[ye];if(D(ve,R)){const Ve=U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,we=s.get(ve).__webglTexture;i.bindTexture(Ve,we),A(Ve),i.unbindTexture()}}}function Ge(U){if(d&&U.samples>0&&Ie(U)===!1){const R=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],ie=U.width,ye=U.height;let Se=r.COLOR_BUFFER_BIT;const ve=[],Ve=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=s.get(U),Oe=U.isWebGLMultipleRenderTargets===!0;if(Oe)for(let Ye=0;Ye<R.length;Ye++)i.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ye=0;Ye<R.length;Ye++){ve.push(r.COLOR_ATTACHMENT0+Ye),U.depthBuffer&&ve.push(Ve);const rt=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(rt===!1&&(U.depthBuffer&&(Se|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&(Se|=r.STENCIL_BUFFER_BIT)),Oe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,we.__webglColorRenderbuffer[Ye]),rt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ve]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ve])),Oe){const xe=s.get(R[Ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xe,0)}r.blitFramebuffer(0,0,ie,ye,0,0,ie,ye,Se,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ve)}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Oe)for(let Ye=0;Ye<R.length;Ye++){i.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.RENDERBUFFER,we.__webglColorRenderbuffer[Ye]);const rt=s.get(R[Ye]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.TEXTURE_2D,rt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function $e(U){return Math.min(l.maxSamples,U.samples)}function Ie(U){const R=s.get(U);return d&&U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function It(U){const R=h.render.frame;g.get(U)!==R&&(g.set(U,R),U.update())}function it(U,R){const ie=U.colorSpace,ye=U.format,Se=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===Zd||ie!==sa&&ie!==fi&&(Ot.getTransfer(ie)===Gt?d===!1?t.has("EXT_sRGB")===!0&&ye===Mi?(U.format=Zd,U.minFilter=ci,U.generateMipmaps=!1):R=m0.sRGBToLinear(R):(ye!==Mi||Se!==qa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),R}this.allocateTextureUnit=W,this.resetTextureUnits=Me,this.setTexture2D=z,this.setTexture2DArray=j,this.setTexture3D=Q,this.setTextureCube=le,this.rebindTextures=ft,this.setupRenderTarget=te,this.updateRenderTargetMipmap=un,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ie}function FR(r,t,i){const s=i.isWebGL2;function l(c,h=fi){let d;const p=Ot.getTransfer(h);if(c===qa)return r.UNSIGNED_BYTE;if(c===s0)return r.UNSIGNED_SHORT_4_4_4_4;if(c===o0)return r.UNSIGNED_SHORT_5_5_5_1;if(c===xM)return r.BYTE;if(c===SM)return r.SHORT;if(c===lh)return r.UNSIGNED_SHORT;if(c===r0)return r.INT;if(c===Va)return r.UNSIGNED_INT;if(c===ka)return r.FLOAT;if(c===Go)return s?r.HALF_FLOAT:(d=t.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(c===yM)return r.ALPHA;if(c===Mi)return r.RGBA;if(c===EM)return r.LUMINANCE;if(c===MM)return r.LUMINANCE_ALPHA;if(c===br)return r.DEPTH_COMPONENT;if(c===ws)return r.DEPTH_STENCIL;if(c===Zd)return d=t.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(c===bM)return r.RED;if(c===l0)return r.RED_INTEGER;if(c===TM)return r.RG;if(c===c0)return r.RG_INTEGER;if(c===u0)return r.RGBA_INTEGER;if(c===fd||c===dd||c===hd||c===pd)if(p===Gt)if(d=t.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(c===fd)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===dd)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===hd)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===pd)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=t.get("WEBGL_compressed_texture_s3tc"),d!==null){if(c===fd)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===dd)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===hd)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===pd)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===v_||c===x_||c===S_||c===y_)if(d=t.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(c===v_)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===x_)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===S_)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===y_)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===f0)return d=t.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===E_||c===M_)if(d=t.get("WEBGL_compressed_texture_etc"),d!==null){if(c===E_)return p===Gt?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(c===M_)return p===Gt?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===b_||c===T_||c===A_||c===R_||c===C_||c===w_||c===L_||c===D_||c===U_||c===N_||c===O_||c===P_||c===z_||c===B_)if(d=t.get("WEBGL_compressed_texture_astc"),d!==null){if(c===b_)return p===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===T_)return p===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===A_)return p===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===R_)return p===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===C_)return p===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===w_)return p===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===L_)return p===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===D_)return p===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===U_)return p===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===N_)return p===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===O_)return p===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===P_)return p===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===z_)return p===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===B_)return p===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===md||c===I_||c===F_)if(d=t.get("EXT_texture_compression_bptc"),d!==null){if(c===md)return p===Gt?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(c===I_)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(c===F_)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(c===AM||c===H_||c===G_||c===V_)if(d=t.get("EXT_texture_compression_rgtc"),d!==null){if(c===md)return d.COMPRESSED_RED_RGTC1_EXT;if(c===H_)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(c===G_)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(c===V_)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return c===Mr?s?r.UNSIGNED_INT_24_8:(d=t.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):r[c]!==void 0?r[c]:null}return{convert:l}}class HR extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class wc extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GR={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const M of t.hand.values()){const y=i.getJointPose(M,s),v=this._getHandJoint(m,M);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],S=g.position.distanceTo(_.position),E=.02,b=.005;m.inputState.pinching&&S>E+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&S<=E-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(GR)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new wc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class VR extends Us{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,g=null,_=null,S=null,E=null,b=null;const M=i.getContextAttributes();let y=null,v=null;const D=[],A=[],O=new Ct;let k=null;const I=new ui;I.layers.enable(1),I.viewport=new yn;const P=new ui;P.layers.enable(2),P.viewport=new yn;const pe=[I,P],C=new HR;C.layers.enable(1),C.layers.enable(2);let N=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=D[H];return Y===void 0&&(Y=new Hd,D[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=D[H];return Y===void 0&&(Y=new Hd,D[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=D[H];return Y===void 0&&(Y=new Hd,D[H]=Y),Y.getHandSpace()};function he(H){const Y=A.indexOf(H.inputSource);if(Y===-1)return;const _e=D[Y];_e!==void 0&&(_e.update(H.inputSource,H.frame,m||h),_e.dispatchEvent({type:H.type,data:H.inputSource}))}function Me(){l.removeEventListener("select",he),l.removeEventListener("selectstart",he),l.removeEventListener("selectend",he),l.removeEventListener("squeeze",he),l.removeEventListener("squeezestart",he),l.removeEventListener("squeezeend",he),l.removeEventListener("end",Me),l.removeEventListener("inputsourceschange",W);for(let H=0;H<D.length;H++){const Y=A[H];Y!==null&&(A[H]=null,D[H].disconnect(Y))}N=null,ue=null,t.setRenderTarget(y),E=null,S=null,_=null,l=null,v=null,X.stop(),s.isPresenting=!1,t.setPixelRatio(k),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){c=H,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){d=H,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(H){m=H},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(H){if(l=H,l!==null){if(y=t.getRenderTarget(),l.addEventListener("select",he),l.addEventListener("selectstart",he),l.addEventListener("selectend",he),l.addEventListener("squeeze",he),l.addEventListener("squeezestart",he),l.addEventListener("squeezeend",he),l.addEventListener("end",Me),l.addEventListener("inputsourceschange",W),M.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(O),l.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Y={antialias:l.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Y),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),v=new Ar(E.framebufferWidth,E.framebufferHeight,{format:Mi,type:qa,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let Y=null,_e=null,Ee=null;M.depth&&(Ee=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Y=M.stencil?ws:br,_e=M.stencil?Mr:Va);const be={colorFormat:i.RGBA8,depthFormat:Ee,scaleFactor:c};_=new XRWebGLBinding(l,i),S=_.createProjectionLayer(be),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),v=new Ar(S.textureWidth,S.textureHeight,{format:Mi,type:qa,depthTexture:new w0(S.textureWidth,S.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0});const He=t.properties.get(v);He.__ignoreDepthValues=S.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),X.setContext(l),X.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function W(H){for(let Y=0;Y<H.removed.length;Y++){const _e=H.removed[Y],Ee=A.indexOf(_e);Ee>=0&&(A[Ee]=null,D[Ee].disconnect(_e))}for(let Y=0;Y<H.added.length;Y++){const _e=H.added[Y];let Ee=A.indexOf(_e);if(Ee===-1){for(let He=0;He<D.length;He++)if(He>=A.length){A.push(_e),Ee=He;break}else if(A[He]===null){A[He]=_e,Ee=He;break}if(Ee===-1)break}const be=D[Ee];be&&be.connect(_e)}}const ee=new oe,z=new oe;function j(H,Y,_e){ee.setFromMatrixPosition(Y.matrixWorld),z.setFromMatrixPosition(_e.matrixWorld);const Ee=ee.distanceTo(z),be=Y.projectionMatrix.elements,He=_e.projectionMatrix.elements,Pe=be[14]/(be[10]-1),qe=be[14]/(be[10]+1),ft=(be[9]+1)/be[5],te=(be[9]-1)/be[5],un=(be[8]-1)/be[0],Ge=(He[8]+1)/He[0],$e=Pe*un,Ie=Pe*Ge,It=Ee/(-un+Ge),it=It*-un;Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(it),H.translateZ(It),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const U=Pe+It,R=qe+It,ie=$e-it,ye=Ie+(Ee-it),Se=ft*qe/R*U,ve=te*qe/R*U;H.projectionMatrix.makePerspective(ie,ye,Se,ve,U,R),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function Q(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(l===null)return;C.near=P.near=I.near=H.near,C.far=P.far=I.far=H.far,(N!==C.near||ue!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),N=C.near,ue=C.far);const Y=H.parent,_e=C.cameras;Q(C,Y);for(let Ee=0;Ee<_e.length;Ee++)Q(_e[Ee],Y);_e.length===2?j(C,I,P):C.projectionMatrix.copy(I.projectionMatrix),le(H,C,Y)};function le(H,Y,_e){_e===null?H.matrix.copy(Y.matrixWorld):(H.matrix.copy(_e.matrixWorld),H.matrix.invert(),H.matrix.multiply(Y.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Kd*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&E===null))return p},this.setFoveation=function(H){p=H,S!==null&&(S.fixedFoveation=H),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=H)};let fe=null;function L(H,Y){if(g=Y.getViewerPose(m||h),b=Y,g!==null){const _e=g.views;E!==null&&(t.setRenderTargetFramebuffer(v,E.framebuffer),t.setRenderTarget(v));let Ee=!1;_e.length!==C.cameras.length&&(C.cameras.length=0,Ee=!0);for(let be=0;be<_e.length;be++){const He=_e[be];let Pe=null;if(E!==null)Pe=E.getViewport(He);else{const ft=_.getViewSubImage(S,He);Pe=ft.viewport,be===0&&(t.setRenderTargetTextures(v,ft.colorTexture,S.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(v))}let qe=pe[be];qe===void 0&&(qe=new ui,qe.layers.enable(be),qe.viewport=new yn,pe[be]=qe),qe.matrix.fromArray(He.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(He.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),be===0&&(C.matrix.copy(qe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ee===!0&&C.cameras.push(qe)}}for(let _e=0;_e<D.length;_e++){const Ee=A[_e],be=D[_e];Ee!==null&&be!==void 0&&be.update(Ee,Y,m||h)}fe&&fe(H,Y),Y.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Y}),b=null}const X=new C0;X.setAnimationLoop(L),this.setAnimationLoop=function(H){fe=H},this.dispose=function(){}}}function kR(r,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,b0(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,D,A,O){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),S(y,v),v.isMeshPhysicalMaterial&&E(y,v,O)):v.isMeshMatcapMaterial?(c(y,v),b(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),M(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?p(y,v,D,A):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Hn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Hn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const D=t.get(v).envMap;if(D&&(y.envMap.value=D,y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap){y.lightMap.value=v.lightMap;const A=r._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=v.lightMapIntensity*A,i(v.lightMap,y.lightMapTransform)}v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function p(y,v,D,A){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*D,y.scale.value=A*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),t.get(v).envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function E(y,v,D){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Hn&&y.clearcoatNormalScale.value.negate())),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function M(y,v){const D=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function XR(r,t,i,s){let l={},c={},h=[];const d=i.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(D,A){const O=A.program;s.uniformBlockBinding(D,O)}function m(D,A){let O=l[D.id];O===void 0&&(b(D),O=g(D),l[D.id]=O,D.addEventListener("dispose",y));const k=A.program;s.updateUBOMapping(D,k);const I=t.render.frame;c[D.id]!==I&&(S(D),c[D.id]=I)}function g(D){const A=_();D.__bindingPointIndex=A;const O=r.createBuffer(),k=D.__size,I=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,O),r.bufferData(r.UNIFORM_BUFFER,k,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,A,O),O}function _(){for(let D=0;D<d;D++)if(h.indexOf(D)===-1)return h.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const A=l[D.id],O=D.uniforms,k=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,A);for(let I=0,P=O.length;I<P;I++){const pe=Array.isArray(O[I])?O[I]:[O[I]];for(let C=0,N=pe.length;C<N;C++){const ue=pe[C];if(E(ue,I,C,k)===!0){const he=ue.__offset,Me=Array.isArray(ue.value)?ue.value:[ue.value];let W=0;for(let ee=0;ee<Me.length;ee++){const z=Me[ee],j=M(z);typeof z=="number"||typeof z=="boolean"?(ue.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,he+W,ue.__data)):z.isMatrix3?(ue.__data[0]=z.elements[0],ue.__data[1]=z.elements[1],ue.__data[2]=z.elements[2],ue.__data[3]=0,ue.__data[4]=z.elements[3],ue.__data[5]=z.elements[4],ue.__data[6]=z.elements[5],ue.__data[7]=0,ue.__data[8]=z.elements[6],ue.__data[9]=z.elements[7],ue.__data[10]=z.elements[8],ue.__data[11]=0):(z.toArray(ue.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,he,ue.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(D,A,O,k){const I=D.value,P=A+"_"+O;if(k[P]===void 0)return typeof I=="number"||typeof I=="boolean"?k[P]=I:k[P]=I.clone(),!0;{const pe=k[P];if(typeof I=="number"||typeof I=="boolean"){if(pe!==I)return k[P]=I,!0}else if(pe.equals(I)===!1)return pe.copy(I),!0}return!1}function b(D){const A=D.uniforms;let O=0;const k=16;for(let P=0,pe=A.length;P<pe;P++){const C=Array.isArray(A[P])?A[P]:[A[P]];for(let N=0,ue=C.length;N<ue;N++){const he=C[N],Me=Array.isArray(he.value)?he.value:[he.value];for(let W=0,ee=Me.length;W<ee;W++){const z=Me[W],j=M(z),Q=O%k;Q!==0&&k-Q<j.boundary&&(O+=k-Q),he.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=O,O+=j.storage}}}const I=O%k;return I>0&&(O+=k-I),D.__size=O,D.__cache={},this}function M(D){const A={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(A.boundary=4,A.storage=4):D.isVector2?(A.boundary=8,A.storage=8):D.isVector3||D.isColor?(A.boundary=16,A.storage=12):D.isVector4?(A.boundary=16,A.storage=16):D.isMatrix3?(A.boundary=48,A.storage=48):D.isMatrix4?(A.boundary=64,A.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),A}function y(D){const A=D.target;A.removeEventListener("dispose",y);const O=h.indexOf(A.__bindingPointIndex);h.splice(O,1),r.deleteBuffer(l[A.id]),delete l[A.id],delete c[A.id]}function v(){for(const D in l)r.deleteBuffer(l[D]);h=[],l={},c={}}return{bind:p,update:m,dispose:v}}class P0{constructor(t={}){const{canvas:i=FM(),context:s=null,depth:l=!0,stencil:c=!0,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1}=t;this.isWebGLRenderer=!0;let S;s!==null?S=s.getContextAttributes().alpha:S=h;const E=new Uint32Array(4),b=new Int32Array(4);let M=null,y=null;const v=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this._useLegacyLights=!1,this.toneMapping=ja,this.toneMappingExposure=1;const A=this;let O=!1,k=0,I=0,P=null,pe=-1,C=null;const N=new yn,ue=new yn;let he=null;const Me=new vt(0);let W=0,ee=i.width,z=i.height,j=1,Q=null,le=null;const fe=new yn(0,0,ee,z),L=new yn(0,0,ee,z);let X=!1;const H=new R0;let Y=!1,_e=!1,Ee=null;const be=new pn,He=new Ct,Pe=new oe,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return P===null?j:1}let te=s;function un(w,Z){for(let ae=0;ae<w.length;ae++){const re=w[ae],ne=i.getContext(re,Z);if(ne!==null)return ne}return null}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${oh}`),i.addEventListener("webglcontextlost",Te,!1),i.addEventListener("webglcontextrestored",G,!1),i.addEventListener("webglcontextcreationerror",Ce,!1),te===null){const Z=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&Z.shift(),te=un(Z,w),te===null)throw un(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&te instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ge,$e,Ie,It,it,U,R,ie,ye,Se,ve,Ve,we,Oe,Ye,rt,xe,Mt,ut,Je,Ue,De,We,yt;function Vt(){Ge=new e1(te),$e=new qA(te,Ge,t),Ge.init($e),De=new FR(te,Ge,$e),Ie=new BR(te,Ge,$e),It=new i1(te),it=new MR,U=new IR(te,Ge,Ie,it,$e,De,It),R=new ZA(A),ie=new $A(A),ye=new ub(te,$e),We=new WA(te,Ge,ye,$e),Se=new t1(te,ye,It,We),ve=new o1(te,Se,ye,It),ut=new s1(te,$e,U),rt=new YA(it),Ve=new ER(A,R,ie,Ge,$e,We,rt),we=new kR(A,it),Oe=new TR,Ye=new DR(Ge,$e),Mt=new XA(A,R,ie,Ie,ve,S,p),xe=new zR(A,ve,$e),yt=new XR(te,It,$e,Ie),Je=new jA(te,Ge,It,$e),Ue=new n1(te,Ge,It,$e),It.programs=Ve.programs,A.capabilities=$e,A.extensions=Ge,A.properties=it,A.renderLists=Oe,A.shadowMap=xe,A.state=Ie,A.info=It}Vt();const ot=new VR(A,te);this.xr=ot,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(ee,z,!1))},this.getSize=function(w){return w.set(ee,z)},this.setSize=function(w,Z,ae=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=w,z=Z,i.width=Math.floor(w*j),i.height=Math.floor(Z*j),ae===!0&&(i.style.width=w+"px",i.style.height=Z+"px"),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(ee*j,z*j).floor()},this.setDrawingBufferSize=function(w,Z,ae){ee=w,z=Z,j=ae,i.width=Math.floor(w*ae),i.height=Math.floor(Z*ae),this.setViewport(0,0,w,Z)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(fe)},this.setViewport=function(w,Z,ae,re){w.isVector4?fe.set(w.x,w.y,w.z,w.w):fe.set(w,Z,ae,re),Ie.viewport(N.copy(fe).multiplyScalar(j).floor())},this.getScissor=function(w){return w.copy(L)},this.setScissor=function(w,Z,ae,re){w.isVector4?L.set(w.x,w.y,w.z,w.w):L.set(w,Z,ae,re),Ie.scissor(ue.copy(L).multiplyScalar(j).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(w){Ie.setScissorTest(X=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){le=w},this.getClearColor=function(w){return w.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(w=!0,Z=!0,ae=!0){let re=0;if(w){let ne=!1;if(P!==null){const Le=P.texture.format;ne=Le===u0||Le===c0||Le===l0}if(ne){const Le=P.texture.type,ze=Le===qa||Le===Va||Le===lh||Le===Mr||Le===s0||Le===o0,je=Mt.getClearColor(),Ze=Mt.getClearAlpha(),Fe=je.r,et=je.g,tt=je.b;ze?(E[0]=Fe,E[1]=et,E[2]=tt,E[3]=Ze,te.clearBufferuiv(te.COLOR,0,E)):(b[0]=Fe,b[1]=et,b[2]=tt,b[3]=Ze,te.clearBufferiv(te.COLOR,0,b))}else re|=te.COLOR_BUFFER_BIT}Z&&(re|=te.DEPTH_BUFFER_BIT),ae&&(re|=te.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Te,!1),i.removeEventListener("webglcontextrestored",G,!1),i.removeEventListener("webglcontextcreationerror",Ce,!1),Oe.dispose(),Ye.dispose(),it.dispose(),R.dispose(),ie.dispose(),ve.dispose(),We.dispose(),yt.dispose(),Ve.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Yt),ot.removeEventListener("sessionend",Lt),Ee&&(Ee.dispose(),Ee=null),fn.stop()};function Te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const w=It.autoReset,Z=xe.enabled,ae=xe.autoUpdate,re=xe.needsUpdate,ne=xe.type;Vt(),It.autoReset=w,xe.enabled=Z,xe.autoUpdate=ae,xe.needsUpdate=re,xe.type=ne}function Ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ae(w){const Z=w.target;Z.removeEventListener("dispose",Ae),Ke(Z)}function Ke(w){ke(w),it.remove(w)}function ke(w){const Z=it.get(w).programs;Z!==void 0&&(Z.forEach(function(ae){Ve.releaseProgram(ae)}),w.isShaderMaterial&&Ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,ae,re,ne,Le){Z===null&&(Z=qe);const ze=ne.isMesh&&ne.matrixWorld.determinant()<0,je=En(w,Z,ae,re,ne);Ie.setMaterial(re,ze);let Ze=ae.index,Fe=1;if(re.wireframe===!0){if(Ze=Se.getWireframeAttribute(ae),Ze===void 0)return;Fe=2}const et=ae.drawRange,tt=ae.attributes.position;let Tt=et.start*Fe,Jt=(et.start+et.count)*Fe;Le!==null&&(Tt=Math.max(Tt,Le.start*Fe),Jt=Math.min(Jt,(Le.start+Le.count)*Fe)),Ze!==null?(Tt=Math.max(Tt,0),Jt=Math.min(Jt,Ze.count)):tt!=null&&(Tt=Math.max(Tt,0),Jt=Math.min(Jt,tt.count));const $t=Jt-Tt;if($t<0||$t===1/0)return;We.setup(ne,re,je,ae,Ze);let $n,Bt=Je;if(Ze!==null&&($n=ye.get(Ze),Bt=Ue,Bt.setIndex($n)),ne.isMesh)re.wireframe===!0?(Ie.setLineWidth(re.wireframeLinewidth*ft()),Bt.setMode(te.LINES)):Bt.setMode(te.TRIANGLES);else if(ne.isLine){let lt=re.linewidth;lt===void 0&&(lt=1),Ie.setLineWidth(lt*ft()),ne.isLineSegments?Bt.setMode(te.LINES):ne.isLineLoop?Bt.setMode(te.LINE_LOOP):Bt.setMode(te.LINE_STRIP)}else ne.isPoints?Bt.setMode(te.POINTS):ne.isSprite&&Bt.setMode(te.TRIANGLES);if(ne.isBatchedMesh)Bt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)Bt.renderInstances(Tt,$t,ne.count);else if(ae.isInstancedBufferGeometry){const lt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,fa=Math.min(ae.instanceCount,lt);Bt.renderInstances(Tt,$t,fa)}else Bt.render(Tt,$t)};function wt(w,Z,ae){w.transparent===!0&&w.side===na&&w.forceSinglePass===!1?(w.side=Hn,w.needsUpdate=!0,Ka(w,Z,ae),w.side=Ya,w.needsUpdate=!0,Ka(w,Z,ae),w.side=na):Ka(w,Z,ae)}this.compile=function(w,Z,ae=null){ae===null&&(ae=w),y=Ye.get(ae),y.init(),D.push(y),ae.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(y.pushLight(ne),ne.castShadow&&y.pushShadow(ne))}),w!==ae&&w.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(y.pushLight(ne),ne.castShadow&&y.pushShadow(ne))}),y.setupLights(A._useLegacyLights);const re=new Set;return w.traverse(function(ne){const Le=ne.material;if(Le)if(Array.isArray(Le))for(let ze=0;ze<Le.length;ze++){const je=Le[ze];wt(je,ae,ne),re.add(je)}else wt(Le,ae,ne),re.add(Le)}),D.pop(),y=null,re},this.compileAsync=function(w,Z,ae=null){const re=this.compile(w,Z,ae);return new Promise(ne=>{function Le(){if(re.forEach(function(ze){it.get(ze).currentProgram.isReady()&&re.delete(ze)}),re.size===0){ne(w);return}setTimeout(Le,10)}Ge.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let bt=null;function Wt(w){bt&&bt(w)}function Yt(){fn.stop()}function Lt(){fn.start()}const fn=new C0;fn.setAnimationLoop(Wt),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(w){bt=w,ot.setAnimationLoop(w),w===null?fn.stop():fn.start()},ot.addEventListener("sessionstart",Yt),ot.addEventListener("sessionend",Lt),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(Z),Z=ot.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,Z,P),y=Ye.get(w,D.length),y.init(),D.push(y),be.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H.setFromProjectionMatrix(be),_e=this.localClippingEnabled,Y=rt.init(this.clippingPlanes,_e),M=Oe.get(w,v.length),M.init(),v.push(M),kn(w,Z,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(Q,le),this.info.render.frame++,Y===!0&&rt.beginShadows();const ae=y.state.shadowsArray;if(xe.render(ae,w,Z),Y===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Mt.render(M,w),y.setupLights(A._useLegacyLights),Z.isArrayCamera){const re=Z.cameras;for(let ne=0,Le=re.length;ne<Le;ne++){const ze=re[ne];Os(M,w,ze,ze.viewport)}}else Os(M,w,Z);P!==null&&(U.updateMultisampleRenderTarget(P),U.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(A,w,Z),We.resetDefaultState(),pe=-1,C=null,D.pop(),D.length>0?y=D[D.length-1]:y=null,v.pop(),v.length>0?M=v[v.length-1]:M=null};function kn(w,Z,ae,re){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)ae=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||H.intersectsSprite(w)){re&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(be);const ze=ve.update(w),je=w.material;je.visible&&M.push(w,ze,je,ae,Pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||H.intersectsObject(w))){const ze=ve.update(w),je=w.material;if(re&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Pe.copy(ze.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(be)),Array.isArray(je)){const Ze=ze.groups;for(let Fe=0,et=Ze.length;Fe<et;Fe++){const tt=Ze[Fe],Tt=je[tt.materialIndex];Tt&&Tt.visible&&M.push(w,ze,Tt,ae,Pe.z,tt)}}else je.visible&&M.push(w,ze,je,ae,Pe.z,null)}}const Le=w.children;for(let ze=0,je=Le.length;ze<je;ze++)kn(Le[ze],Z,ae,re)}function Os(w,Z,ae,re){const ne=w.opaque,Le=w.transmissive,ze=w.transparent;y.setupLightsView(ae),Y===!0&&rt.setGlobalState(A.clippingPlanes,ae),Le.length>0&&Ps(ne,Le,Z,ae),re&&Ie.viewport(N.copy(re)),ne.length>0&&ca(ne,Z,ae),Le.length>0&&ca(Le,Z,ae),ze.length>0&&ca(ze,Z,ae),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Ps(w,Z,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;const Le=$e.isWebGL2;Ee===null&&(Ee=new Ar(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")?Go:qa,minFilter:Ho,samples:Le?4:0})),A.getDrawingBufferSize(He),Le?Ee.setSize(He.x,He.y):Ee.setSize(Qd(He.x),Qd(He.y));const ze=A.getRenderTarget();A.setRenderTarget(Ee),A.getClearColor(Me),W=A.getClearAlpha(),W<1&&A.setClearColor(16777215,.5),A.clear();const je=A.toneMapping;A.toneMapping=ja,ca(w,ae,re),U.updateMultisampleRenderTarget(Ee),U.updateRenderTargetMipmap(Ee);let Ze=!1;for(let Fe=0,et=Z.length;Fe<et;Fe++){const tt=Z[Fe],Tt=tt.object,Jt=tt.geometry,$t=tt.material,$n=tt.group;if($t.side===na&&Tt.layers.test(re.layers)){const Bt=$t.side;$t.side=Hn,$t.needsUpdate=!0,zs(Tt,ae,re,Jt,$t,$n),$t.side=Bt,$t.needsUpdate=!0,Ze=!0}}Ze===!0&&(U.updateMultisampleRenderTarget(Ee),U.updateRenderTargetMipmap(Ee)),A.setRenderTarget(ze),A.setClearColor(Me,W),A.toneMapping=je}function ca(w,Z,ae){const re=Z.isScene===!0?Z.overrideMaterial:null;for(let ne=0,Le=w.length;ne<Le;ne++){const ze=w[ne],je=ze.object,Ze=ze.geometry,Fe=re===null?ze.material:re,et=ze.group;je.layers.test(ae.layers)&&zs(je,Z,ae,Ze,Fe,et)}}function zs(w,Z,ae,re,ne,Le){w.onBeforeRender(A,Z,ae,re,ne,Le),w.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ne.onBeforeRender(A,Z,ae,re,w,Le),ne.transparent===!0&&ne.side===na&&ne.forceSinglePass===!1?(ne.side=Hn,ne.needsUpdate=!0,A.renderBufferDirect(ae,Z,re,ne,w,Le),ne.side=Ya,ne.needsUpdate=!0,A.renderBufferDirect(ae,Z,re,ne,w,Le),ne.side=na):A.renderBufferDirect(ae,Z,re,ne,w,Le),w.onAfterRender(A,Z,ae,re,ne,Le)}function Ka(w,Z,ae){Z.isScene!==!0&&(Z=qe);const re=it.get(w),ne=y.state.lights,Le=y.state.shadowsArray,ze=ne.state.version,je=Ve.getParameters(w,ne.state,Le,Z,ae),Ze=Ve.getProgramCacheKey(je);let Fe=re.programs;re.environment=w.isMeshStandardMaterial?Z.environment:null,re.fog=Z.fog,re.envMap=(w.isMeshStandardMaterial?ie:R).get(w.envMap||re.environment),Fe===void 0&&(w.addEventListener("dispose",Ae),Fe=new Map,re.programs=Fe);let et=Fe.get(Ze);if(et!==void 0){if(re.currentProgram===et&&re.lightsStateVersion===ze)return Qt(w,je),et}else je.uniforms=Ve.getUniforms(w),w.onBuild(ae,je,A),w.onBeforeCompile(je,A),et=Ve.acquireProgram(je,Ze),Fe.set(Ze,et),re.uniforms=je.uniforms;const tt=re.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(tt.clippingPlanes=rt.uniform),Qt(w,je),re.needsLights=Bs(w),re.lightsStateVersion=ze,re.needsLights&&(tt.ambientLightColor.value=ne.state.ambient,tt.lightProbe.value=ne.state.probe,tt.directionalLights.value=ne.state.directional,tt.directionalLightShadows.value=ne.state.directionalShadow,tt.spotLights.value=ne.state.spot,tt.spotLightShadows.value=ne.state.spotShadow,tt.rectAreaLights.value=ne.state.rectArea,tt.ltc_1.value=ne.state.rectAreaLTC1,tt.ltc_2.value=ne.state.rectAreaLTC2,tt.pointLights.value=ne.state.point,tt.pointLightShadows.value=ne.state.pointShadow,tt.hemisphereLights.value=ne.state.hemi,tt.directionalShadowMap.value=ne.state.directionalShadowMap,tt.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,tt.spotShadowMap.value=ne.state.spotShadowMap,tt.spotLightMatrix.value=ne.state.spotLightMatrix,tt.spotLightMap.value=ne.state.spotLightMap,tt.pointShadowMap.value=ne.state.pointShadowMap,tt.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.currentProgram=et,re.uniformsList=null,et}function pi(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=Oc.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function Qt(w,Z){const ae=it.get(w);ae.outputColorSpace=Z.outputColorSpace,ae.batching=Z.batching,ae.instancing=Z.instancing,ae.instancingColor=Z.instancingColor,ae.skinning=Z.skinning,ae.morphTargets=Z.morphTargets,ae.morphNormals=Z.morphNormals,ae.morphColors=Z.morphColors,ae.morphTargetsCount=Z.morphTargetsCount,ae.numClippingPlanes=Z.numClippingPlanes,ae.numIntersection=Z.numClipIntersection,ae.vertexAlphas=Z.vertexAlphas,ae.vertexTangents=Z.vertexTangents,ae.toneMapping=Z.toneMapping}function En(w,Z,ae,re,ne){Z.isScene!==!0&&(Z=qe),U.resetTextureUnits();const Le=Z.fog,ze=re.isMeshStandardMaterial?Z.environment:null,je=P===null?A.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:sa,Ze=(re.isMeshStandardMaterial?ie:R).get(re.envMap||ze),Fe=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,et=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),tt=!!ae.morphAttributes.position,Tt=!!ae.morphAttributes.normal,Jt=!!ae.morphAttributes.color;let $t=ja;re.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&($t=A.toneMapping);const $n=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Bt=$n!==void 0?$n.length:0,lt=it.get(re),fa=y.state.lights;if(Y===!0&&(_e===!0||w!==C)){const Dn=w===C&&re.id===pe;rt.setState(re,w,Dn)}let Pt=!1;re.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==fa.state.version||lt.outputColorSpace!==je||ne.isBatchedMesh&&lt.batching===!1||!ne.isBatchedMesh&&lt.batching===!0||ne.isInstancedMesh&&lt.instancing===!1||!ne.isInstancedMesh&&lt.instancing===!0||ne.isSkinnedMesh&&lt.skinning===!1||!ne.isSkinnedMesh&&lt.skinning===!0||ne.isInstancedMesh&&lt.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&lt.instancingColor===!1&&ne.instanceColor!==null||lt.envMap!==Ze||re.fog===!0&&lt.fog!==Le||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==rt.numPlanes||lt.numIntersection!==rt.numIntersection)||lt.vertexAlphas!==Fe||lt.vertexTangents!==et||lt.morphTargets!==tt||lt.morphNormals!==Tt||lt.morphColors!==Jt||lt.toneMapping!==$t||$e.isWebGL2===!0&&lt.morphTargetsCount!==Bt)&&(Pt=!0):(Pt=!0,lt.__version=re.version);let mn=lt.currentProgram;Pt===!0&&(mn=Ka(re,Z,ne));let Rn=!1,da=!1,Is=!1;const en=mn.getUniforms(),Ti=lt.uniforms;if(Ie.useProgram(mn.program)&&(Rn=!0,da=!0,Is=!0),re.id!==pe&&(pe=re.id,da=!0),Rn||C!==w){en.setValue(te,"projectionMatrix",w.projectionMatrix),en.setValue(te,"viewMatrix",w.matrixWorldInverse);const Dn=en.map.cameraPosition;Dn!==void 0&&Dn.setValue(te,Pe.setFromMatrixPosition(w.matrixWorld)),$e.logarithmicDepthBuffer&&en.setValue(te,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&en.setValue(te,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,da=!0,Is=!0)}if(ne.isSkinnedMesh){en.setOptional(te,ne,"bindMatrix"),en.setOptional(te,ne,"bindMatrixInverse");const Dn=ne.skeleton;Dn&&($e.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),en.setValue(te,"boneTexture",Dn.boneTexture,U)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ne.isBatchedMesh&&(en.setOptional(te,ne,"batchingTexture"),en.setValue(te,"batchingTexture",ne._matricesTexture,U));const ha=ae.morphAttributes;if((ha.position!==void 0||ha.normal!==void 0||ha.color!==void 0&&$e.isWebGL2===!0)&&ut.update(ne,ae,mn),(da||lt.receiveShadow!==ne.receiveShadow)&&(lt.receiveShadow=ne.receiveShadow,en.setValue(te,"receiveShadow",ne.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Ti.envMap.value=Ze,Ti.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),da&&(en.setValue(te,"toneMappingExposure",A.toneMappingExposure),lt.needsLights&&ua(Ti,Is),Le&&re.fog===!0&&we.refreshFogUniforms(Ti,Le),we.refreshMaterialUniforms(Ti,re,j,z,Ee),Oc.upload(te,pi(lt),Ti,U)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Oc.upload(te,pi(lt),Ti,U),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&en.setValue(te,"center",ne.center),en.setValue(te,"modelViewMatrix",ne.modelViewMatrix),en.setValue(te,"normalMatrix",ne.normalMatrix),en.setValue(te,"modelMatrix",ne.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Dn=re.uniformsGroups;for(let Mn=0,Fs=Dn.length;Mn<Fs;Mn++)if($e.isWebGL2){const Hs=Dn[Mn];yt.update(Hs,mn),yt.bind(Hs,mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mn}function ua(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function Bs(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,Z,ae){it.get(w.texture).__webglTexture=Z,it.get(w.depthTexture).__webglTexture=ae;const re=it.get(w);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=ae===void 0,re.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,Z){const ae=it.get(w);ae.__webglFramebuffer=Z,ae.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(w,Z=0,ae=0){P=w,k=Z,I=ae;let re=!0,ne=null,Le=!1,ze=!1;if(w){const Ze=it.get(w);Ze.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(te.FRAMEBUFFER,null),re=!1):Ze.__webglFramebuffer===void 0?U.setupRenderTarget(w):Ze.__hasExternalTextures&&U.rebindTextures(w,it.get(w.texture).__webglTexture,it.get(w.depthTexture).__webglTexture);const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ze=!0);const et=it.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(et[Z])?ne=et[Z][ae]:ne=et[Z],Le=!0):$e.isWebGL2&&w.samples>0&&U.useMultisampledRTT(w)===!1?ne=it.get(w).__webglMultisampledFramebuffer:Array.isArray(et)?ne=et[ae]:ne=et,N.copy(w.viewport),ue.copy(w.scissor),he=w.scissorTest}else N.copy(fe).multiplyScalar(j).floor(),ue.copy(L).multiplyScalar(j).floor(),he=X;if(Ie.bindFramebuffer(te.FRAMEBUFFER,ne)&&$e.drawBuffers&&re&&Ie.drawBuffers(w,ne),Ie.viewport(N),Ie.scissor(ue),Ie.setScissorTest(he),Le){const Ze=it.get(w.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ze.__webglTexture,ae)}else if(ze){const Ze=it.get(w.texture),Fe=Z||0;te.framebufferTextureLayer(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,Ze.__webglTexture,ae||0,Fe)}pe=-1},this.readRenderTargetPixels=function(w,Z,ae,re,ne,Le,ze){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=it.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(je=je[ze]),je){Ie.bindFramebuffer(te.FRAMEBUFFER,je);try{const Ze=w.texture,Fe=Ze.format,et=Ze.type;if(Fe!==Mi&&De.convert(Fe)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const tt=et===Go&&(Ge.has("EXT_color_buffer_half_float")||$e.isWebGL2&&Ge.has("EXT_color_buffer_float"));if(et!==qa&&De.convert(et)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_TYPE)&&!(et===ka&&($e.isWebGL2||Ge.has("OES_texture_float")||Ge.has("WEBGL_color_buffer_float")))&&!tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-re&&ae>=0&&ae<=w.height-ne&&te.readPixels(Z,ae,re,ne,De.convert(Fe),De.convert(et),Le)}finally{const Ze=P!==null?it.get(P).__webglFramebuffer:null;Ie.bindFramebuffer(te.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(w,Z,ae=0){const re=Math.pow(2,-ae),ne=Math.floor(Z.image.width*re),Le=Math.floor(Z.image.height*re);U.setTexture2D(Z,0),te.copyTexSubImage2D(te.TEXTURE_2D,ae,0,0,w.x,w.y,ne,Le),Ie.unbindTexture()},this.copyTextureToTexture=function(w,Z,ae,re=0){const ne=Z.image.width,Le=Z.image.height,ze=De.convert(ae.format),je=De.convert(ae.type);U.setTexture2D(ae,0),te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,ae.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,ae.unpackAlignment),Z.isDataTexture?te.texSubImage2D(te.TEXTURE_2D,re,w.x,w.y,ne,Le,ze,je,Z.image.data):Z.isCompressedTexture?te.compressedTexSubImage2D(te.TEXTURE_2D,re,w.x,w.y,Z.mipmaps[0].width,Z.mipmaps[0].height,ze,Z.mipmaps[0].data):te.texSubImage2D(te.TEXTURE_2D,re,w.x,w.y,ze,je,Z.image),re===0&&ae.generateMipmaps&&te.generateMipmap(te.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(w,Z,ae,re,ne=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=w.max.x-w.min.x+1,ze=w.max.y-w.min.y+1,je=w.max.z-w.min.z+1,Ze=De.convert(re.format),Fe=De.convert(re.type);let et;if(re.isData3DTexture)U.setTexture3D(re,0),et=te.TEXTURE_3D;else if(re.isDataArrayTexture||re.isCompressedArrayTexture)U.setTexture2DArray(re,0),et=te.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,re.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,re.unpackAlignment);const tt=te.getParameter(te.UNPACK_ROW_LENGTH),Tt=te.getParameter(te.UNPACK_IMAGE_HEIGHT),Jt=te.getParameter(te.UNPACK_SKIP_PIXELS),$t=te.getParameter(te.UNPACK_SKIP_ROWS),$n=te.getParameter(te.UNPACK_SKIP_IMAGES),Bt=ae.isCompressedTexture?ae.mipmaps[ne]:ae.image;te.pixelStorei(te.UNPACK_ROW_LENGTH,Bt.width),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,Bt.height),te.pixelStorei(te.UNPACK_SKIP_PIXELS,w.min.x),te.pixelStorei(te.UNPACK_SKIP_ROWS,w.min.y),te.pixelStorei(te.UNPACK_SKIP_IMAGES,w.min.z),ae.isDataTexture||ae.isData3DTexture?te.texSubImage3D(et,ne,Z.x,Z.y,Z.z,Le,ze,je,Ze,Fe,Bt.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),te.compressedTexSubImage3D(et,ne,Z.x,Z.y,Z.z,Le,ze,je,Ze,Bt.data)):te.texSubImage3D(et,ne,Z.x,Z.y,Z.z,Le,ze,je,Ze,Fe,Bt),te.pixelStorei(te.UNPACK_ROW_LENGTH,tt),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,Tt),te.pixelStorei(te.UNPACK_SKIP_PIXELS,Jt),te.pixelStorei(te.UNPACK_SKIP_ROWS,$t),te.pixelStorei(te.UNPACK_SKIP_IMAGES,$n),ne===0&&re.generateMipmaps&&te.generateMipmap(et),Ie.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?U.setTextureCube(w,0):w.isData3DTexture?U.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?U.setTexture2DArray(w,0):U.setTexture2D(w,0),Ie.unbindTexture()},this.resetState=function(){k=0,I=0,P=null,Ie.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===ch?"display-p3":"srgb",i.unpackColorSpace=Ot.workingColorSpace===Wc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Sn?Tr:d0}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Tr?Sn:sa}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class WR extends P0{}WR.prototype.isWebGL1Renderer=!0;class jR extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class qR extends Zo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Dv=new pn,$d=new v0,Lc=new jc,Dc=new oe;class YR extends Vn{constructor(t=new la,i=new qR){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(l),Lc.radius+=c,t.ray.intersectsSphere(Lc)===!1)return;Dv.copy(l).invert(),$d.copy(t.ray).applyMatrix4(Dv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=s.index,_=s.attributes.position;if(m!==null){const S=Math.max(0,h.start),E=Math.min(m.count,h.start+h.count);for(let b=S,M=E;b<M;b++){const y=m.getX(b);Dc.fromBufferAttribute(_,y),Uv(Dc,y,p,l,t,i,this)}}else{const S=Math.max(0,h.start),E=Math.min(_.count,h.start+h.count);for(let b=S,M=E;b<M;b++)Dc.fromBufferAttribute(_,b),Uv(Dc,b,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Uv(r,t,i,s,l,c,h){const d=$d.distanceSqToPoint(r);if(d<i){const p=new oe;$d.closestPointToPoint(r,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,object:h})}}const Nv={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class ZR{constructor(t,i,s){const l=this;let c=!1,h=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,d),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return m.push(g,_),this},this.removeHandler=function(g){const _=m.indexOf(g);return _!==-1&&m.splice(_,2),this},this.getHandler=function(g){for(let _=0,S=m.length;_<S;_+=2){const E=m[_],b=m[_+1];if(E.global&&(E.lastIndex=0),E.test(g))return b}return null}}}const KR=new ZR;class dh{constructor(t){this.manager=t!==void 0?t:KR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}dh.DEFAULT_MATERIAL_NAME="__DEFAULT";class QR extends dh{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,h=Nv.get(t);if(h!==void 0)return c.manager.itemStart(t),setTimeout(function(){i&&i(h),c.manager.itemEnd(t)},0),h;const d=Vo("img");function p(){g(),Nv.add(t,this),i&&i(this),c.manager.itemEnd(t)}function m(_){g(),l&&l(_),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),c.manager.itemStart(t),d.src=t,d}}class JR extends dh{constructor(t){super(t)}load(t,i,s,l){const c=new Gn,h=new QR(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);const $R=({imageUrl:r})=>{const t=ce.useRef(null),i=ce.useRef(new Ct(9999,9999)),s=ce.useRef(null),[l,c]=ce.useState(!1);return ce.useEffect(()=>{if(!t.current)return;c(!1);let h,d,p,m;const g={LEMON:new vt("#E7FF6E"),PERIWINKLE:new vt("#6986E8"),PINK:new vt("#FFE5FF"),DARK:new vt("#1a1a1a")},_=`
      attribute vec3 aCustomColor;
      attribute float aRandom;
      attribute float aBrightness; 
      uniform float uTime;
      uniform vec2 uMouse;
      varying vec3 vColor;

      void main() {
        vColor = aCustomColor;
        vec3 pos = position;
        pos.z += sin(uTime * 1.2 + aRandom * 5.0) * (20.0 * aBrightness);
        float dx = pos.x - uMouse.x;
        float dy = pos.y - uMouse.y;
        float dist = sqrt(dx*dx + dy*dy);
        float interactionRadius = 180.0;
        if(dist < interactionRadius) {
          float force = (interactionRadius - dist) / interactionRadius;
          pos.z -= force * 140.0; 
          pos.x += (dx / dist) * force * 40.0;
          pos.y += (dy / dist) * force * 40.0;
        }
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        float viewDist = max(1.0, -mvPosition.z);
        gl_PointSize = (8.0 * aBrightness) * (400.0 / viewDist); 
        gl_Position = projectionMatrix * mvPosition;
      }
    `,S=`
      varying vec3 vColor;
      void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        if(length(coord) > 0.5) discard;
        gl_FragColor = vec4(vColor, 1.0);
      }
    `,E=()=>{if(!t.current)return;const y=t.current.clientWidth,v=y*9/16;h=new jR,h.background=new vt(16777215),d=new ui(50,y/v,1,1e4),d.position.z=600;const D=new P0({antialias:!0,alpha:!0});D.setSize(y,v),D.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.current.appendChild(D.domElement),s.current=D;const A=new JR;A.setCrossOrigin("anonymous"),A.load(r,O=>{try{const k=O.image,I=document.createElement("canvas");I.width=k.width,I.height=k.height;const P=I.getContext("2d",{willReadFrequently:!0});if(!P)return;P.drawImage(k,0,0);const pe=P.getImageData(0,0,k.width,k.height).data,C=new la,N=[],ue=[],he=[],Me=[],W=Math.max(3,Math.floor(k.width/160));for(let z=0;z<k.height;z+=W)for(let j=0;j<k.width;j+=W){const Q=(j+z*k.width)*4,le=pe[Q]/255,fe=pe[Q+1]/255,L=pe[Q+2]/255,X=pe[Q+3]/255,H=.2126*le+.7152*fe+.0722*L;if(X>.1){N.push(j-k.width/2,-(z-k.height/2),0);let Y;H<.2?Y=g.DARK:H<.45?Y=g.PERIWINKLE:H<.7?Y=g.PINK:Y=g.LEMON,ue.push(Y.r,Y.g,Y.b),he.push(Math.random()),Me.push(H)}}C.setAttribute("position",new bi(N,3)),C.setAttribute("aCustomColor",new bi(ue,3)),C.setAttribute("aRandom",new bi(he,1)),C.setAttribute("aBrightness",new bi(Me,1));const ee=new oa({uniforms:{uTime:{value:0},uMouse:{value:i.current}},vertexShader:_,fragmentShader:S,transparent:!0});p=new YR(C,ee),h.add(p),c(!0)}catch(k){console.error(k)}})},b=()=>{m=requestAnimationFrame(b),p&&p.material instanceof oa&&(p.material.uniforms.uTime.value=performance.now()/1e3),s.current&&h&&d&&s.current.render(h,d)};E(),b();const M=y=>{var O;const v=(O=t.current)==null?void 0:O.getBoundingClientRect();if(!v)return;const D=y.clientX-v.left-v.width/2,A=-(y.clientY-v.top-v.height/2);i.current.set(D,A)};return window.addEventListener("mousemove",M),()=>{window.removeEventListener("mousemove",M),cancelAnimationFrame(m),s.current&&(t.current&&t.current.contains(s.current.domElement)&&t.current.removeChild(s.current.domElement),s.current.dispose(),s.current=null)}},[r]),F.jsx("div",{ref:t,className:"w-full bg-white overflow-hidden cursor-none aspect-video relative group",children:!l&&F.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-10 transition-opacity group-hover:opacity-20",children:F.jsx("div",{className:"text-[10px] uppercase tracking-[2em] font-mono",children:"LOADING DATA"})})})},e2=({src:r,alt:t,className:i})=>r?F.jsxs("div",{className:"relative group select-none overflow-hidden bg-midnight/5 w-full h-full",children:[F.jsx("img",{src:r,alt:t,className:`${i} w-full h-full object-contain transition-transform duration-1000 group-hover:scale-[1.03]`,onContextMenu:s=>s.preventDefault(),onDragStart:s=>s.preventDefault(),style:{pointerEvents:"none"}}),F.jsx("div",{className:"absolute inset-0 z-10 bg-transparent cursor-crosshair",onContextMenu:s=>s.preventDefault()}),F.jsx("div",{className:"absolute top-2 left-2 w-2 h-[0.5px] bg-midnight/10 z-20"}),F.jsx("div",{className:"absolute top-2 left-2 w-[0.5px] h-2 bg-midnight/10 z-20"})]}):F.jsx("div",{className:"w-full aspect-[4/5] bg-midnight/5 border border-dashed border-midnight/10 flex items-center justify-center",children:F.jsx("span",{className:"text-[10px] uppercase tracking-widest font-bold opacity-20",children:"Visual data missing"})}),t2=()=>F.jsxs("div",{className:"fixed inset-0 pointer-events-none z-[100]",children:[F.jsxs("div",{className:"absolute top-0 left-0 p-4 md:p-6",children:[F.jsx("div",{className:"absolute top-0 left-8 w-[0.5px] h-12 bg-citron/60"}),F.jsx("div",{className:"absolute top-8 left-0 w-12 h-[0.5px] bg-citron/60"})]}),F.jsxs("div",{className:"absolute top-0 right-0 p-4 md:p-6",children:[F.jsx("div",{className:"absolute top-0 right-8 w-[0.5px] h-12 bg-cornflower/40"}),F.jsx("div",{className:"absolute top-8 right-0 w-12 h-[0.5px] bg-cornflower/40"})]}),F.jsxs("div",{className:"absolute bottom-0 left-0 p-4 md:p-6",children:[F.jsx("div",{className:"absolute bottom-0 left-8 w-[0.5px] h-12 bg-mist"}),F.jsx("div",{className:"absolute bottom-8 left-0 w-12 h-[0.5px] bg-mist"})]}),F.jsxs("div",{className:"absolute bottom-0 right-0 p-4 md:p-6",children:[F.jsx("div",{className:"absolute bottom-0 right-8 w-[0.5px] h-12 bg-midnight/10"}),F.jsx("div",{className:"absolute bottom-8 right-0 w-12 h-[0.5px] bg-midnight/10"})]})]}),n2=({data:r})=>F.jsx("main",{className:"min-h-screen pt-48 px-12 md:px-32 pb-40 flex items-center justify-center",children:F.jsxs("div",{className:"max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start",children:[F.jsxs("div",{className:"lg:col-span-8",children:[F.jsx("h1",{className:"text-5xl md:text-8xl font-artful font-bold text-midnight tracking-tighter mb-16 underline decoration-citron decoration-8 underline-offset-8",children:"SPHNSX"}),F.jsx("div",{className:"max-w-3xl",children:F.jsx("p",{className:"text-xl md:text-2xl leading-relaxed text-midnight font-medium whitespace-pre-line",children:r.aboutMe})})]}),F.jsxs("div",{className:"hidden lg:block lg:col-span-4 relative",children:[F.jsx("div",{className:"absolute -top-6 -right-6 w-full h-full bg-mist/30 -z-10"}),F.jsx("img",{src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000",alt:"Portrait of Silvia",className:"w-full grayscale border border-midnight/5"})]})]})}),i2=({data:r})=>{const{id:t}=zy(),i=nh(),s=r.projects.find(l=>l.id===t);return s?F.jsx("main",{className:"min-h-screen pt-32 md:pt-48 px-8 md:px-16 pb-40",children:F.jsx("div",{className:"max-w-[1600px] mx-auto",children:F.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24",children:[F.jsx("aside",{className:"lg:col-span-4 space-y-12",children:F.jsxs("div",{className:"lg:sticky lg:top-48 space-y-12",children:[F.jsxs("button",{onClick:()=>i(-1),className:"group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-midnight/40 hover:text-midnight transition-colors",children:[F.jsx("div",{className:"w-8 h-[1px] bg-midnight/20 group-hover:bg-midnight transition-all"}),"Return to Index"]}),F.jsxs("div",{className:"space-y-6",children:[F.jsx("div",{className:"flex items-center gap-4",children:F.jsx("span",{className:"text-[10px] uppercase tracking-[0.3em] font-bold border-l-4 border-citron pl-4",children:s.year})}),F.jsx("h1",{className:"text-5xl md:text-7xl font-artful font-bold text-midnight uppercase tracking-tighter leading-[0.9]",children:s.title}),F.jsx("div",{className:"w-12 h-[1px] bg-midnight/10 my-8"}),F.jsx("div",{className:"text-sm md:text-base text-midnight/70 leading-relaxed font-medium whitespace-pre-line max-w-sm space-y-4",children:s.description})]}),F.jsx("div",{className:"pt-12 hidden lg:block",children:F.jsx("p",{className:"text-[9px] uppercase tracking-[0.5em] text-midnight/20 font-bold",children:"All rights reserved © 2025"})})]})}),F.jsxs("div",{className:"lg:col-span-8",children:[s.gallery&&s.gallery.length>0?F.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 md:gap-x-12 md:gap-y-32 items-start",children:s.gallery.map((l,c)=>F.jsxs("div",{className:`flex flex-col ${c%2!==0?"sm:mt-32":""}`,children:[F.jsx(e2,{src:l,alt:`${s.title} Plate ${c+1}`,className:"w-full shadow-sm"}),F.jsx("div",{className:"mt-4 flex justify-between items-center px-1",children:F.jsxs("span",{className:"text-[8px] uppercase tracking-widest text-midnight/20 font-mono",children:["#",String(c+1).padStart(2,"0")]})})]},c))}):F.jsx("div",{className:"w-full py-40 flex flex-col items-center justify-center bg-midnight/5 border-4 border-dashed border-midnight/10",children:F.jsx("p",{className:"text-xs uppercase tracking-[0.4em] font-bold opacity-30 text-center px-12",children:"This series is currently being processed for archiving."})}),s.gallery.length>0&&F.jsxs("div",{className:"mt-40 flex flex-col items-center justify-center gap-4 opacity-10",children:[F.jsx("div",{className:"w-[1px] h-24 bg-midnight"}),F.jsx("span",{className:"text-[10px] uppercase tracking-[1em] font-bold",children:"FIN"})]})]})]})})}):F.jsx("div",{className:"pt-64 px-12",children:"Project not found."})},a2=({data:r})=>F.jsx("main",{className:"min-h-screen pt-48 px-12 md:px-32 pb-40",children:F.jsx("div",{className:"max-w-6xl mx-auto flex flex-col gap-24 md:gap-40",children:r.projects.map((t,i)=>{const s=i%2===0;return F.jsx("div",{className:`w-full flex ${s?"justify-end":"justify-start"}`,children:F.jsx("div",{className:"w-full lg:w-[80%] group",children:F.jsxs(Er,{to:`/project/${t.id}`,className:"block relative bg-white overflow-hidden shadow-sm border border-midnight/5",children:[F.jsx($R,{imageUrl:t.imageUrl}),F.jsxs("div",{className:"absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 bg-white p-6 border-4 border-midnight shadow-[8px_8px_0px_0px_rgba(231,255,110,1)] z-20",children:[F.jsx("h3",{className:"text-sm font-bold uppercase tracking-[0.5em]",children:t.title}),F.jsx("p",{className:"text-[10px] uppercase tracking-widest mt-2 text-midnight/40",children:t.year})]}),F.jsx("div",{className:"absolute inset-0 z-10",onContextMenu:l=>l.preventDefault()})]})})},t.id)})})}),r2=()=>F.jsxs("main",{className:"min-h-screen flex flex-col items-center justify-center p-12 text-center",children:[F.jsx("div",{className:"w-20 h-20 bg-citron mb-12 border-4 border-midnight"}),F.jsx("h1",{className:"text-4xl font-artful font-bold uppercase tracking-widest mb-4",children:"404: Resource Unavailable"}),F.jsx("p",{className:"text-xs uppercase tracking-[0.5em] opacity-40 mb-12",children:"The requested path does not exist in this archive"}),F.jsx(Er,{to:"/",className:"text-xs font-bold uppercase tracking-[0.3em] border-b-4 border-cornflower pb-2 hover:opacity-50 transition-opacity",children:"Return to Index"})]}),Ov=({data:r,onRefresh:t})=>{const i="sphnsx_admin_authenticated",[l,c]=ce.useState(!1),[h,d]=ce.useState("");ce.useEffect(()=>{const g=localStorage.getItem(i);if(g)try{const{timestamp:_}=JSON.parse(g);Date.now()-_<864e5?c(!0):localStorage.removeItem(i)}catch{localStorage.removeItem(i)}},[]);const p=g=>{g.preventDefault(),h===NE?(c(!0),localStorage.setItem(i,JSON.stringify({timestamp:Date.now()}))):alert("Unauthorised access denied.")},m=()=>{localStorage.removeItem(i),c(!1)};return l?F.jsx(BE,{data:r,onRefresh:t,onLogout:m}):F.jsx("div",{className:"min-h-screen flex items-center justify-center px-8 bg-mist/5",children:F.jsxs("form",{onSubmit:p,className:"w-full max-w-sm border-4 border-midnight bg-white p-12 text-center shadow-2xl",children:[F.jsx("h2",{className:"text-3xl font-artful font-bold mb-8 uppercase tracking-widest",children:"Editor Login"}),F.jsx("input",{type:"password",placeholder:"Security Key",className:"w-full p-4 border-b-4 border-midnight mb-8 text-center focus:bg-citron/10 outline-none transition-colors font-mono font-bold",value:h,onChange:g=>d(g.target.value)}),F.jsx("button",{type:"submit",className:"w-full bg-midnight text-white py-5 font-bold uppercase tracking-[0.3em] hover:bg-cornflower transition-all text-xs border-4 border-midnight",children:"Authenticate"})]})})},s2=()=>{const[r,t]=ce.useState(Fo()),i=()=>{t(Fo())};return ce.useEffect(()=>{i()},[]),F.jsx(yE,{children:F.jsxs("div",{className:"relative min-h-screen bg-white selection:bg-citron selection:text-midnight overflow-x-hidden",children:[F.jsx(t2,{}),F.jsx(DE,{}),F.jsxs(Qy,{children:[F.jsx(_r,{path:"/",element:F.jsx(a2,{data:r})}),F.jsx(_r,{path:"/project/:id",element:F.jsx(i2,{data:r})}),F.jsx(_r,{path:"/about",element:F.jsx(n2,{data:r})}),F.jsx(_r,{path:"/admin",element:F.jsx(Ov,{data:r,onRefresh:i})}),F.jsx(_r,{path:"/a",element:F.jsx(Ov,{data:r,onRefresh:i})}),F.jsx(_r,{path:"*",element:F.jsx(r2,{})})]}),F.jsxs("footer",{className:"px-12 md:px-32 py-20 flex flex-col md:flex-row justify-between items-center gap-10",children:[F.jsxs("div",{className:"flex items-center gap-6",children:[F.jsx("div",{className:"w-8 h-[2px] bg-citron"}),F.jsx("span",{className:"text-[10px] uppercase tracking-[0.4em] font-bold text-midnight/40",children:"© 2024 SPHNSX"})]}),F.jsxs("div",{className:"flex gap-16 items-center",children:[F.jsx("a",{href:"#",className:"text-[11px] uppercase tracking-[0.3em] font-bold hover:underline decoration-cornflower decoration-2 underline-offset-4",children:"Instagram"}),F.jsx("a",{href:"#",className:"text-[11px] uppercase tracking-[0.3em] font-bold hover:underline decoration-mist decoration-2 underline-offset-4",children:"Contact"})]})]})]})})},z0=document.getElementById("root");if(!z0)throw new Error("Could not find root element to mount to");const o2=$S.createRoot(z0);o2.render(F.jsx(WS.StrictMode,{children:F.jsx(s2,{})}));
