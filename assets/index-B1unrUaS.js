(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();var Th={exports:{}},qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function _S(){if(J_)return qo;J_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,r,c){var u=null;if(c!==void 0&&(u=""+c),r.key!==void 0&&(u=""+r.key),"key"in r){c={};for(var h in r)h!=="key"&&(c[h]=r[h])}else c=r;return r=c.ref,{$$typeof:o,type:a,key:u,ref:r!==void 0?r:null,props:c}}return qo.Fragment=e,qo.jsx=n,qo.jsxs=n,qo}var $_;function vS(){return $_||($_=1,Th.exports=_S()),Th.exports}var Ii=vS(),bh={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function xS(){if(e0)return ot;e0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(U,$,ve){this.props=U,this.context=$,this.refs=T,this.updater=ve||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=S.prototype;function P(U,$,ve){this.props=U,this.context=$,this.refs=T,this.updater=ve||y}var L=P.prototype=new x;L.constructor=P,E(L,S.prototype),L.isPureReactComponent=!0;var w=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function z(U,$,ve,ye,we,ne){return ve=ne.ref,{$$typeof:o,type:U,key:$,ref:ve!==void 0?ve:null,props:ne}}function X(U,$){return z(U.type,$,void 0,void 0,void 0,U.props)}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function D(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ve){return $[ve]})}var F=/\/+/g;function re(U,$){return typeof U=="object"&&U!==null&&U.key!=null?D(""+U.key):$.toString(36)}function oe(){}function ue(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(oe,oe):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function he(U,$,ve,ye,we){var ne=typeof U;(ne==="undefined"||ne==="boolean")&&(U=null);var de=!1;if(U===null)de=!0;else switch(ne){case"bigint":case"string":case"number":de=!0;break;case"object":switch(U.$$typeof){case o:case e:de=!0;break;case g:return de=U._init,he(de(U._payload),$,ve,ye,we)}}if(de)return we=we(U),de=ye===""?"."+re(U,0):ye,w(we)?(ve="",de!=null&&(ve=de.replace(F,"$&/")+"/"),he(we,$,ve,"",function(qe){return qe})):we!=null&&(C(we)&&(we=X(we,ve+(we.key==null||U&&U.key===we.key?"":(""+we.key).replace(F,"$&/")+"/")+de)),$.push(we)),1;de=0;var Se=ye===""?".":ye+":";if(w(U))for(var Oe=0;Oe<U.length;Oe++)ye=U[Oe],ne=Se+re(ye,Oe),de+=he(ye,$,ve,ne,we);else if(Oe=v(U),typeof Oe=="function")for(U=Oe.call(U),Oe=0;!(ye=U.next()).done;)ye=ye.value,ne=Se+re(ye,Oe++),de+=he(ye,$,ve,ne,we);else if(ne==="object"){if(typeof U.then=="function")return he(ue(U),$,ve,ye,we);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return de}function B(U,$,ve){if(U==null)return U;var ye=[],we=0;return he(U,ye,"","",function(ne){return $.call(ve,ne,we++)}),ye}function Z(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(ve){(U._status===0||U._status===-1)&&(U._status=1,U._result=ve)},function(ve){(U._status===0||U._status===-1)&&(U._status=2,U._result=ve)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var j=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function xe(){}return ot.Children={map:B,forEach:function(U,$,ve){B(U,function(){$.apply(this,arguments)},ve)},count:function(U){var $=0;return B(U,function(){$++}),$},toArray:function(U){return B(U,function($){return $})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ot.Component=S,ot.Fragment=n,ot.Profiler=r,ot.PureComponent=P,ot.StrictMode=a,ot.Suspense=p,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ot.__COMPILER_RUNTIME={__proto__:null,c:function(U){return O.H.useMemoCache(U)}},ot.cache=function(U){return function(){return U.apply(null,arguments)}},ot.cloneElement=function(U,$,ve){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var ye=E({},U.props),we=U.key,ne=void 0;if($!=null)for(de in $.ref!==void 0&&(ne=void 0),$.key!==void 0&&(we=""+$.key),$)!G.call($,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&$.ref===void 0||(ye[de]=$[de]);var de=arguments.length-2;if(de===1)ye.children=ve;else if(1<de){for(var Se=Array(de),Oe=0;Oe<de;Oe++)Se[Oe]=arguments[Oe+2];ye.children=Se}return z(U.type,we,void 0,void 0,ne,ye)},ot.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ot.createElement=function(U,$,ve){var ye,we={},ne=null;if($!=null)for(ye in $.key!==void 0&&(ne=""+$.key),$)G.call($,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(we[ye]=$[ye]);var de=arguments.length-2;if(de===1)we.children=ve;else if(1<de){for(var Se=Array(de),Oe=0;Oe<de;Oe++)Se[Oe]=arguments[Oe+2];we.children=Se}if(U&&U.defaultProps)for(ye in de=U.defaultProps,de)we[ye]===void 0&&(we[ye]=de[ye]);return z(U,ne,void 0,void 0,null,we)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(U){return{$$typeof:h,render:U}},ot.isValidElement=C,ot.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Z}},ot.memo=function(U,$){return{$$typeof:d,type:U,compare:$===void 0?null:$}},ot.startTransition=function(U){var $=O.T,ve={};O.T=ve;try{var ye=U(),we=O.S;we!==null&&we(ve,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(xe,j)}catch(ne){j(ne)}finally{O.T=$}},ot.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ot.use=function(U){return O.H.use(U)},ot.useActionState=function(U,$,ve){return O.H.useActionState(U,$,ve)},ot.useCallback=function(U,$){return O.H.useCallback(U,$)},ot.useContext=function(U){return O.H.useContext(U)},ot.useDebugValue=function(){},ot.useDeferredValue=function(U,$){return O.H.useDeferredValue(U,$)},ot.useEffect=function(U,$,ve){var ye=O.H;if(typeof ve=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ye.useEffect(U,$)},ot.useId=function(){return O.H.useId()},ot.useImperativeHandle=function(U,$,ve){return O.H.useImperativeHandle(U,$,ve)},ot.useInsertionEffect=function(U,$){return O.H.useInsertionEffect(U,$)},ot.useLayoutEffect=function(U,$){return O.H.useLayoutEffect(U,$)},ot.useMemo=function(U,$){return O.H.useMemo(U,$)},ot.useOptimistic=function(U,$){return O.H.useOptimistic(U,$)},ot.useReducer=function(U,$,ve){return O.H.useReducer(U,$,ve)},ot.useRef=function(U){return O.H.useRef(U)},ot.useState=function(U){return O.H.useState(U)},ot.useSyncExternalStore=function(U,$,ve){return O.H.useSyncExternalStore(U,$,ve)},ot.useTransition=function(){return O.H.useTransition()},ot.version="19.1.1",ot}var t0;function rp(){return t0||(t0=1,bh.exports=xS()),bh.exports}var nu=rp(),Ah={exports:{}},Yo={},Rh={exports:{}},wh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function yS(){return n0||(n0=1,function(o){function e(B,Z){var j=B.length;B.push(Z);e:for(;0<j;){var xe=j-1>>>1,U=B[xe];if(0<r(U,Z))B[xe]=Z,B[j]=U,j=xe;else break e}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var Z=B[0],j=B.pop();if(j!==Z){B[0]=j;e:for(var xe=0,U=B.length,$=U>>>1;xe<$;){var ve=2*(xe+1)-1,ye=B[ve],we=ve+1,ne=B[we];if(0>r(ye,j))we<U&&0>r(ne,ye)?(B[xe]=ne,B[we]=j,xe=we):(B[xe]=ye,B[ve]=j,xe=ve);else if(we<U&&0>r(ne,j))B[xe]=ne,B[we]=j,xe=we;else break e}}return Z}function r(B,Z){var j=B.sortIndex-Z.sortIndex;return j!==0?j:B.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();o.unstable_now=function(){return u.now()-h}}var p=[],d=[],g=1,_=null,v=3,y=!1,E=!1,T=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var Z=n(d);Z!==null;){if(Z.callback===null)a(d);else if(Z.startTime<=B)a(d),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=n(d)}}function O(B){if(T=!1,w(B),!E)if(n(p)!==null)E=!0,G||(G=!0,re());else{var Z=n(d);Z!==null&&he(O,Z.startTime-B)}}var G=!1,z=-1,X=5,C=-1;function D(){return S?!0:!(o.unstable_now()-C<X)}function F(){if(S=!1,G){var B=o.unstable_now();C=B;var Z=!0;try{e:{E=!1,T&&(T=!1,P(z),z=-1),y=!0;var j=v;try{t:{for(w(B),_=n(p);_!==null&&!(_.expirationTime>B&&D());){var xe=_.callback;if(typeof xe=="function"){_.callback=null,v=_.priorityLevel;var U=xe(_.expirationTime<=B);if(B=o.unstable_now(),typeof U=="function"){_.callback=U,w(B),Z=!0;break t}_===n(p)&&a(p),w(B)}else a(p);_=n(p)}if(_!==null)Z=!0;else{var $=n(d);$!==null&&he(O,$.startTime-B),Z=!1}}break e}finally{_=null,v=j,y=!1}Z=void 0}}finally{Z?re():G=!1}}}var re;if(typeof L=="function")re=function(){L(F)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ue=oe.port2;oe.port1.onmessage=F,re=function(){ue.postMessage(null)}}else re=function(){x(F,0)};function he(B,Z){z=x(function(){B(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(B){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var j=v;v=Z;try{return B()}finally{v=j}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var j=v;v=B;try{return Z()}finally{v=j}},o.unstable_scheduleCallback=function(B,Z,j){var xe=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?xe+j:xe):j=xe,B){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=j+U,B={id:g++,callback:Z,priorityLevel:B,startTime:j,expirationTime:U,sortIndex:-1},j>xe?(B.sortIndex=j,e(d,B),n(p)===null&&B===n(d)&&(T?(P(z),z=-1):T=!0,he(O,j-xe))):(B.sortIndex=U,e(p,B),E||y||(E=!0,G||(G=!0,re()))),B},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(B){var Z=v;return function(){var j=v;v=Z;try{return B.apply(this,arguments)}finally{v=j}}}}(wh)),wh}var i0;function SS(){return i0||(i0=1,Rh.exports=yS()),Rh.exports}var Ch={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function MS(){if(a0)return Dn;a0=1;var o=rp();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function c(p,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:p,containerInfo:d,implementation:g}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Dn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(p,d,null,g)},Dn.flushSync=function(p){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=g,a.d.f()}},Dn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Dn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Dn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Dn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Dn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Dn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Dn.requestFormReset=function(p){a.d.r(p)},Dn.unstable_batchedUpdates=function(p,d){return p(d)},Dn.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},Dn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Dn.version="19.1.1",Dn}var s0;function ES(){if(s0)return Ch.exports;s0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ch.exports=MS(),Ch.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0;function TS(){if(r0)return Yo;r0=1;var o=SS(),e=rp(),n=ES();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),t;if(m===l)return h(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var M=!1,A=f.child;A;){if(A===s){M=!0,s=f,l=m;break}if(A===l){M=!0,l=f,s=m;break}A=A.sibling}if(!M){for(A=m.child;A;){if(A===s){M=!0,s=m,l=f;break}if(A===l){M=!0,l=m,s=f;break}A=A.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function d(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=d(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case O:return"Suspense";case G:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case L:return(t.displayName||"Context")+".Provider";case P:return(t._context.displayName||"Context")+".Consumer";case w:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:ue(t.type)||"Memo";case X:i=t._payload,t=t._init;try{return ue(t(i))}catch{}}return null}var he=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},xe=[],U=-1;function $(t){return{current:t}}function ve(t){0>U||(t.current=xe[U],xe[U]=null,U--)}function ye(t,i){U++,xe[U]=t.current,t.current=i}var we=$(null),ne=$(null),de=$(null),Se=$(null);function Oe(t,i){switch(ye(de,i),ye(ne,t),ye(we,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?A_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=A_(i),t=R_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ve(we),ye(we,t)}function qe(){ve(we),ve(ne),ve(de)}function nt(t){t.memoizedState!==null&&ye(Se,t);var i=we.current,s=R_(i,t.type);i!==s&&(ye(ne,t),ye(we,s))}function kt(t){ne.current===t&&(ve(we),ve(ne)),Se.current===t&&(ve(Se),Go._currentValue=j)}var mt=Object.prototype.hasOwnProperty,H=o.unstable_scheduleCallback,Dt=o.unstable_cancelCallback,Ze=o.unstable_shouldYield,Tt=o.unstable_requestPaint,Fe=o.unstable_now,Xt=o.unstable_getCurrentPriorityLevel,ze=o.unstable_ImmediatePriority,rt=o.unstable_UserBlockingPriority,Kt=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,N=o.unstable_IdlePriority,b=o.log,ee=o.unstable_setDisableYieldValue,ce=null,_e=null;function le(t){if(typeof b=="function"&&ee(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(ce,t)}catch{}}var Pe=Math.clz32?Math.clz32:We,Ae=Math.log,ke=Math.LN2;function We(t){return t>>>=0,t===0?32:31-(Ae(t)/ke|0)|0}var Me=256,Ue=4194304;function je(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ve(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?f=je(l):(M&=A,M!==0?f=je(M):s||(s=A&~t,s!==0&&(f=je(s))))):(A=l&~m,A!==0?f=je(A):M!==0?f=je(M):s||(s=l&~t,s!==0&&(f=je(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Ce(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function at(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var t=Me;return Me<<=1,(Me&4194048)===0&&(Me=256),t}function be(){var t=Ue;return Ue<<=1,(Ue&62914560)===0&&(Ue=4194304),t}function Re(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Ie(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ee(t,i,s,l,f,m){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,J=t.hiddenUpdates;for(s=M&~s;0<s;){var fe=31-Pe(s),me=1<<fe;A[fe]=0,I[fe]=-1;var te=J[fe];if(te!==null)for(J[fe]=null,fe=0;fe<te.length;fe++){var ie=te[fe];ie!==null&&(ie.lane&=-536870913)}s&=~me}l!==0&&ge(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(M&~i))}function ge(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Pe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function Ge(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Pe(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function it(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ut(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:q_(t.type))}function _i(t,i){var s=Z.p;try{return Z.p=t,i()}finally{Z.p=s}}var un=Math.random().toString(36).slice(2),fn="__reactFiber$"+un,$t="__reactProps$"+un,Ci="__reactContainer$"+un,Ps="__reactEvents$"+un,_l="__reactListeners$"+un,Is="__reactHandles$"+un,Jr="__reactResources$"+un,Di="__reactMarker$"+un;function Bs(t){delete t[fn],delete t[$t],delete t[Ps],delete t[_l],delete t[Is]}function qi(t){var i=t[fn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ci]||s[fn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=U_(t);t!==null;){if(s=t[fn])return s;t=U_(t)}return i}t=s,s=t.parentNode}return null}function ya(t){if(t=t[fn]||t[Ci]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function is(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Sa(t){var i=t[Jr];return i||(i=t[Jr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function rn(t){t[Di]=!0}var vl=new Set,xl={};function R(t,i){W(t,i),W(t+"Capture",i)}function W(t,i){for(xl[t]=i,t=0;t<i.length;t++)vl.add(i[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},K={};function Te(t){return mt.call(K,t)?!0:mt.call(se,t)?!1:ae.test(t)?K[t]=!0:(se[t]=!0,!1)}function De(t,i,s){if(Te(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Be(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Le(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}var Qe,$e;function Xe(t){if(Qe===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Qe=i&&i[1]||"",$e=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+t+$e}var ct=!1;function At(t,i){if(!t||ct)return"";ct=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(ie){var te=ie}Reflect.construct(t,[],me)}else{try{me.call()}catch(ie){te=ie}t.call(me.prototype)}}else{try{throw Error()}catch(ie){te=ie}(me=t())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(ie){if(ie&&te&&typeof ie.stack=="string")return[ie.stack,te.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],A=m[1];if(M&&A){var I=M.split(`
`),J=A.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<J.length&&!J[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===J.length)for(l=I.length-1,f=J.length-1;1<=l&&0<=f&&I[l]!==J[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==J[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==J[f]){var fe=`
`+I[l].replace(" at new "," at ");return t.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",t.displayName)),fe}while(1<=l&&0<=f);break}}}finally{ct=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Xe(s):""}function Yt(t){switch(t.tag){case 26:case 27:case 5:return Xe(t.type);case 16:return Xe("Lazy");case 13:return Xe("Suspense");case 19:return Xe("SuspenseList");case 0:case 15:return At(t.type,!1);case 11:return At(t.type.render,!1);case 1:return At(t.type,!0);case 31:return Xe("Activity");default:return""}}function It(t){try{var i="";do i+=Yt(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function ut(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ke(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qt(t){var i=Ke(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,m.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function gt(t){t._valueTracker||(t._valueTracker=qt(t))}function Rn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ke(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function vi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var On=/[\n"\\]/g;function gn(t){return t.replace(On,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Gt(t,i,s,l,f,m,M,A){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ut(i)):t.value!==""+ut(i)&&(t.value=""+ut(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?wn(t,M,ut(i)):s!=null?wn(t,M,ut(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ut(A):t.removeAttribute("name")}function Pn(t,i,s,l,f,m,M,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+ut(s):"",i=i!=null?""+ut(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function wn(t,i,s){i==="number"&&vi(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function en(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ut(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Mn(t,i,s){if(i!=null&&(i=""+ut(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+ut(s):""}function Fs(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(he(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ut(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function Gn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var px=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ap(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||px.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Rp(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Ap(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Ap(t,m,i[m])}function Mu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yl(t){return gx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Eu=null;function Tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zs=null,Hs=null;function wp(t){var i=ya(t);if(i&&(t=i.stateNode)){var s=t[$t]||null;e:switch(t=i.stateNode,i.type){case"input":if(Gt(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+gn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[$t]||null;if(!f)throw Error(a(90));Gt(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Rn(l)}break e;case"textarea":Mn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&en(t,!!s.multiple,i,!1)}}}var bu=!1;function Cp(t,i,s){if(bu)return t(i,s);bu=!0;try{var l=t(i);return l}finally{if(bu=!1,(zs!==null||Hs!==null)&&(sc(),zs&&(i=zs,t=Hs,Hs=zs=null,wp(i),t)))for(i=0;i<t.length;i++)wp(t[i])}}function $r(t,i){var s=t.stateNode;if(s===null)return null;var l=s[$t]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(Yi)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Au=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Au=!1}var Ma=null,Ru=null,Sl=null;function Dp(){if(Sl)return Sl;var t,i=Ru,s=i.length,l,f="value"in Ma?Ma.value:Ma.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===f[m-l];l++);return Sl=f.slice(t,1<l?1-l:void 0)}function Ml(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function Up(){return!1}function Vn(t){function i(s,l,f,m,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?El:Up,this.isPropagationStopped=Up,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Vn(as),to=g({},as,{view:0,detail:0}),_x=Vn(to),wu,Cu,no,bl=g({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(wu=t.screenX-no.screenX,Cu=t.screenY-no.screenY):Cu=wu=0,no=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Cu}}),Lp=Vn(bl),vx=g({},bl,{dataTransfer:0}),xx=Vn(vx),yx=g({},to,{relatedTarget:0}),Du=Vn(yx),Sx=g({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),Mx=Vn(Sx),Ex=g({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tx=Vn(Ex),bx=g({},as,{data:0}),Np=Vn(bx),Ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=wx[t])?!!i[t]:!1}function Uu(){return Cx}var Dx=g({},to,{key:function(t){if(t.key){var i=Ax[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(t){return t.type==="keypress"?Ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ux=Vn(Dx),Lx=g({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=Vn(Lx),Nx=g({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),Ox=Vn(Nx),Px=g({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ix=Vn(Px),Bx=g({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fx=Vn(Bx),zx=g({},as,{newState:0,oldState:0}),Hx=Vn(zx),Gx=[9,13,27,32],Lu=Yi&&"CompositionEvent"in window,io=null;Yi&&"documentMode"in document&&(io=document.documentMode);var Vx=Yi&&"TextEvent"in window&&!io,Pp=Yi&&(!Lu||io&&8<io&&11>=io),Ip=" ",Bp=!1;function Fp(t,i){switch(t){case"keyup":return Gx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function kx(t,i){switch(t){case"compositionend":return zp(i);case"keypress":return i.which!==32?null:(Bp=!0,Ip);case"textInput":return t=i.data,t===Ip&&Bp?null:t;default:return null}}function Xx(t,i){if(Gs)return t==="compositionend"||!Lu&&Fp(t,i)?(t=Dp(),Sl=Ru=Ma=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Pp&&i.locale!=="ko"?null:i.data;default:return null}}var Wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Wx[t.type]:i==="textarea"}function Gp(t,i,s,l){zs?Hs?Hs.push(l):Hs=[l]:zs=l,i=fc(i,"onChange"),0<i.length&&(s=new Tl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var ao=null,so=null;function qx(t){S_(t,0)}function Al(t){var i=is(t);if(Rn(i))return t}function Vp(t,i){if(t==="change")return i}var kp=!1;if(Yi){var Nu;if(Yi){var Ou="oninput"in document;if(!Ou){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Ou=typeof Xp.oninput=="function"}Nu=Ou}else Nu=!1;kp=Nu&&(!document.documentMode||9<document.documentMode)}function Wp(){ao&&(ao.detachEvent("onpropertychange",qp),so=ao=null)}function qp(t){if(t.propertyName==="value"&&Al(so)){var i=[];Gp(i,so,t,Tu(t)),Cp(qx,i)}}function Yx(t,i,s){t==="focusin"?(Wp(),ao=i,so=s,ao.attachEvent("onpropertychange",qp)):t==="focusout"&&Wp()}function jx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Al(so)}function Kx(t,i){if(t==="click")return Al(i)}function Zx(t,i){if(t==="input"||t==="change")return Al(i)}function Qx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var jn=typeof Object.is=="function"?Object.is:Qx;function ro(t,i){if(jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!mt.call(i,f)||!jn(t[f],i[f]))return!1}return!0}function Yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jp(t,i){var s=Yp(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Yp(s)}}function Kp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Kp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Zp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=vi(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=vi(t.document)}return i}function Pu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Jx=Yi&&"documentMode"in document&&11>=document.documentMode,Vs=null,Iu=null,oo=null,Bu=!1;function Qp(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Bu||Vs==null||Vs!==vi(l)||(l=Vs,"selectionStart"in l&&Pu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oo&&ro(oo,l)||(oo=l,l=fc(Iu,"onSelect"),0<l.length&&(i=new Tl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Vs)))}function ss(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ks={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},Fu={},Jp={};Yi&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function rs(t){if(Fu[t])return Fu[t];if(!ks[t])return t;var i=ks[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Jp)return Fu[t]=i[s];return t}var $p=rs("animationend"),em=rs("animationiteration"),tm=rs("animationstart"),$x=rs("transitionrun"),ey=rs("transitionstart"),ty=rs("transitioncancel"),nm=rs("transitionend"),im=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function xi(t,i){im.set(t,i),R(i,[t])}var am=new WeakMap;function si(t,i){if(typeof t=="object"&&t!==null){var s=am.get(t);return s!==void 0?s:(i={value:t,source:i,stack:It(i)},am.set(t,i),i)}return{value:t,source:i,stack:It(i)}}var ri=[],Xs=0,Hu=0;function Rl(){for(var t=Xs,i=Hu=Xs=0;i<t;){var s=ri[i];ri[i++]=null;var l=ri[i];ri[i++]=null;var f=ri[i];ri[i++]=null;var m=ri[i];if(ri[i++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}m!==0&&sm(s,f,m)}}function wl(t,i,s,l){ri[Xs++]=t,ri[Xs++]=i,ri[Xs++]=s,ri[Xs++]=l,Hu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Gu(t,i,s,l){return wl(t,i,s,l),Cl(t)}function Ws(t,i){return wl(t,null,null,i),Cl(t)}function sm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-Pe(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function Cl(t){if(50<No)throw No=0,jf=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var qs={};function ny(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,s,l){return new ny(t,i,s,l)}function Vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ji(t,i){var s=t.alternate;return s===null?(s=Kn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function rm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Dl(t,i,s,l,f,m){var M=0;if(l=t,typeof t=="function")Vu(t)&&(M=1);else if(typeof t=="string")M=aS(t,s,we.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Kn(31,s,i,f),t.elementType=C,t.lanes=m,t;case E:return os(s.children,f,m,i);case T:M=8,f|=24;break;case S:return t=Kn(12,s,i,f|2),t.elementType=S,t.lanes=m,t;case O:return t=Kn(13,s,i,f),t.elementType=O,t.lanes=m,t;case G:return t=Kn(19,s,i,f),t.elementType=G,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case L:M=10;break e;case P:M=9;break e;case w:M=11;break e;case z:M=14;break e;case X:M=16,l=null;break e}M=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=Kn(M,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function os(t,i,s,l){return t=Kn(7,t,l,i),t.lanes=s,t}function ku(t,i,s){return t=Kn(6,t,null,i),t.lanes=s,t}function Xu(t,i,s){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Ys=[],js=0,Ul=null,Ll=0,oi=[],li=0,ls=null,Ki=1,Zi="";function cs(t,i){Ys[js++]=Ll,Ys[js++]=Ul,Ul=t,Ll=i}function om(t,i,s){oi[li++]=Ki,oi[li++]=Zi,oi[li++]=ls,ls=t;var l=Ki;t=Zi;var f=32-Pe(l)-1;l&=~(1<<f),s+=1;var m=32-Pe(i)+f;if(30<m){var M=f-f%5;m=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Ki=1<<32-Pe(i)+f|s<<f|l,Zi=m+t}else Ki=1<<m|s<<f|l,Zi=t}function Wu(t){t.return!==null&&(cs(t,1),om(t,1,0))}function qu(t){for(;t===Ul;)Ul=Ys[--js],Ys[js]=null,Ll=Ys[--js],Ys[js]=null;for(;t===ls;)ls=oi[--li],oi[li]=null,Zi=oi[--li],oi[li]=null,Ki=oi[--li],oi[li]=null}var In=null,tn=null,wt=!1,us=null,Ui=!1,Yu=Error(a(519));function fs(t){var i=Error(a(418,""));throw uo(si(i,t)),Yu}function lm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[fn]=t,i[$t]=l,s){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(s=0;s<Po.length;s++)vt(Po[s],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":vt("invalid",i),Pn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),gt(i);break;case"select":vt("invalid",i);break;case"textarea":vt("invalid",i),Fs(i,l.value,l.defaultValue,l.children),gt(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||b_(i.textContent,s)?(l.popover!=null&&(vt("beforetoggle",i),vt("toggle",i)),l.onScroll!=null&&vt("scroll",i),l.onScrollEnd!=null&&vt("scrollend",i),l.onClick!=null&&(i.onclick=hc),i=!0):i=!1,i||fs(t)}function cm(t){for(In=t.return;In;)switch(In.tag){case 5:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:In=In.return}}function lo(t){if(t!==In)return!1;if(!wt)return cm(t),wt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||uh(t.type,t.memoizedProps)),s=!s),s&&tn&&fs(t),cm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){tn=Si(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}tn=null}}else i===27?(i=tn,Fa(t.type)?(t=ph,ph=null,tn=t):tn=i):tn=In?Si(t.stateNode.nextSibling):null;return!0}function co(){tn=In=null,wt=!1}function um(){var t=us;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),us=null),t}function uo(t){us===null?us=[t]:us.push(t)}var ju=$(null),hs=null,Qi=null;function Ea(t,i,s){ye(ju,i._currentValue),i._currentValue=s}function Ji(t){t._currentValue=ju.current,ve(ju)}function Ku(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Zu(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var M=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var I=0;I<i.length;I++)if(A.context===i[I]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),Ku(m.return,s,t),l||(M=null);break e}m=A.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(a(341));M.lanes|=s,m=M.alternate,m!==null&&(m.lanes|=s),Ku(M,s,t),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===t){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function fo(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var A=f.type;jn(f.pendingProps.value,M.value)||(t!==null?t.push(A):t=[A])}}else if(f===Se.current){if(M=f.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Go):t=[Go])}f=f.return}t!==null&&Zu(i,t,s,l),i.flags|=262144}function Nl(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ds(t){hs=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return fm(hs,t)}function Ol(t,i){return hs===null&&ds(t),fm(t,i)}function fm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Qi===null){if(t===null)throw Error(a(308));Qi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Qi=Qi.next=i;return s}var iy=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},ay=o.unstable_scheduleCallback,sy=o.unstable_NormalPriority,hn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new iy,data:new Map,refCount:0}}function ho(t){t.refCount--,t.refCount===0&&ay(sy,function(){t.controller.abort()})}var po=null,Ju=0,Ks=0,Zs=null;function ry(t,i){if(po===null){var s=po=[];Ju=0,Ks=th(),Zs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Ju++,i.then(hm,hm),i}function hm(){if(--Ju===0&&po!==null){Zs!==null&&(Zs.status="fulfilled");var t=po;po=null,Ks=0,Zs=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function oy(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var dm=B.S;B.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&ry(t,i),dm!==null&&dm(t,i)};var ps=$(null);function $u(){var t=ps.current;return t!==null?t:Wt.pooledCache}function Pl(t,i){i===null?ye(ps,ps.current):ye(ps,i.pool)}function pm(){var t=$u();return t===null?null:{parent:hn._currentValue,pool:t}}var mo=Error(a(460)),mm=Error(a(474)),Il=Error(a(542)),ef={then:function(){}};function gm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bl(){}function _m(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Bl,Bl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,xm(t),t;default:if(typeof i.status=="string")i.then(Bl,Bl);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,xm(t),t}throw go=i,mo}}var go=null;function vm(){if(go===null)throw Error(a(459));var t=go;return go=null,t}function xm(t){if(t===mo||t===Il)throw Error(a(483))}var Ta=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Aa(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Lt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Cl(t),sm(t,null,s),i}return wl(t,l,i,s),Cl(t)}function _o(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Ge(t,s)}}function af(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=M:m=m.next=M,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var sf=!1;function vo(){if(sf){var t=Zs;if(t!==null)throw t}}function xo(t,i,s,l){sf=!1;var f=t.updateQueue;Ta=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var I=A,J=I.next;I.next=null,M===null?m=J:M.next=J,M=I;var fe=t.alternate;fe!==null&&(fe=fe.updateQueue,A=fe.lastBaseUpdate,A!==M&&(A===null?fe.firstBaseUpdate=J:A.next=J,fe.lastBaseUpdate=I))}if(m!==null){var me=f.baseState;M=0,fe=J=I=null,A=m;do{var te=A.lane&-536870913,ie=te!==A.lane;if(ie?(Mt&te)===te:(l&te)===te){te!==0&&te===Ks&&(sf=!0),fe!==null&&(fe=fe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var tt=t,Je=A;te=i;var zt=s;switch(Je.tag){case 1:if(tt=Je.payload,typeof tt=="function"){me=tt.call(zt,me,te);break e}me=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=Je.payload,te=typeof tt=="function"?tt.call(zt,me,te):tt,te==null)break e;me=g({},me,te);break e;case 2:Ta=!0}}te=A.callback,te!==null&&(t.flags|=64,ie&&(t.flags|=8192),ie=f.callbacks,ie===null?f.callbacks=[te]:ie.push(te))}else ie={lane:te,tag:A.tag,payload:A.payload,callback:A.callback,next:null},fe===null?(J=fe=ie,I=me):fe=fe.next=ie,M|=te;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ie=A,A=ie.next,ie.next=null,f.lastBaseUpdate=ie,f.shared.pending=null}}while(!0);fe===null&&(I=me),f.baseState=I,f.firstBaseUpdate=J,f.lastBaseUpdate=fe,m===null&&(f.shared.lanes=0),Oa|=M,t.lanes=M,t.memoizedState=me}}function ym(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Sm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)ym(s[t],i)}var Qs=$(null),Fl=$(0);function Mm(t,i){t=sa,ye(Fl,t),ye(Qs,i),sa=t|i.baseLanes}function rf(){ye(Fl,sa),ye(Qs,Qs.current)}function of(){sa=Fl.current,ve(Qs),ve(Fl)}var Ra=0,dt=null,Bt=null,on=null,zl=!1,Js=!1,ms=!1,Hl=0,yo=0,$s=null,ly=0;function an(){throw Error(a(321))}function lf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!jn(t[s],i[s]))return!1;return!0}function cf(t,i,s,l,f,m){return Ra=m,dt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=t===null||t.memoizedState===null?sg:rg,ms=!1,m=s(l,f),ms=!1,Js&&(m=Tm(i,s,l,f)),Em(t),m}function Em(t){B.H=ql;var i=Bt!==null&&Bt.next!==null;if(Ra=0,on=Bt=dt=null,zl=!1,yo=0,$s=null,i)throw Error(a(300));t===null||_n||(t=t.dependencies,t!==null&&Nl(t)&&(_n=!0))}function Tm(t,i,s,l){dt=t;var f=0;do{if(Js&&($s=null),yo=0,Js=!1,25<=f)throw Error(a(301));if(f+=1,on=Bt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=my,m=i(s,l)}while(Js);return m}function cy(){var t=B.H,i=t.useState()[0];return i=typeof i.then=="function"?So(i):i,t=t.useState()[0],(Bt!==null?Bt.memoizedState:null)!==t&&(dt.flags|=1024),i}function uf(){var t=Hl!==0;return Hl=0,t}function ff(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function hf(t){if(zl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}zl=!1}Ra=0,on=Bt=dt=null,Js=!1,yo=Hl=0,$s=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?dt.memoizedState=on=t:on=on.next=t,on}function ln(){if(Bt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var i=on===null?dt.memoizedState:on.next;if(i!==null)on=i,Bt=t;else{if(t===null)throw dt.alternate===null?Error(a(467)):Error(a(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},on===null?dt.memoizedState=on=t:on=on.next=t}return on}function df(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(t){var i=yo;return yo+=1,$s===null&&($s=[]),t=_m($s,t,i),i=dt,(on===null?i.memoizedState:on.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?sg:rg),t}function Gl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return So(t);if(t.$$typeof===L)return Cn(t)}throw Error(a(438,String(t)))}function pf(t){var i=null,s=dt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=dt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=df(),dt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=D;return i.index++,s}function $i(t,i){return typeof i=="function"?i(t):i}function Vl(t){var i=ln();return mf(i,Bt,t)}function mf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var A=M=null,I=null,J=i,fe=!1;do{var me=J.lane&-536870913;if(me!==J.lane?(Mt&me)===me:(Ra&me)===me){var te=J.revertLane;if(te===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),me===Ks&&(fe=!0);else if((Ra&te)===te){J=J.next,te===Ks&&(fe=!0);continue}else me={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(A=I=me,M=m):I=I.next=me,dt.lanes|=te,Oa|=te;me=J.action,ms&&s(m,me),m=J.hasEagerState?J.eagerState:s(m,me)}else te={lane:me,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(A=I=te,M=m):I=I.next=te,dt.lanes|=me,Oa|=me;J=J.next}while(J!==null&&J!==i);if(I===null?M=m:I.next=A,!jn(m,t.memoizedState)&&(_n=!0,fe&&(s=Zs,s!==null)))throw s;t.memoizedState=m,t.baseState=M,t.baseQueue=I,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function gf(t){var i=ln(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do m=t(m,M.action),M=M.next;while(M!==f);jn(m,i.memoizedState)||(_n=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function bm(t,i,s){var l=dt,f=ln(),m=wt;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var M=!jn((Bt||f).memoizedState,s);M&&(f.memoizedState=s,_n=!0),f=f.queue;var A=wm.bind(null,l,f,t);if(Mo(2048,8,A,[t]),f.getSnapshot!==i||M||on!==null&&on.memoizedState.tag&1){if(l.flags|=2048,er(9,kl(),Rm.bind(null,l,f,s,i),null),Wt===null)throw Error(a(349));m||(Ra&124)!==0||Am(l,i,s)}return s}function Am(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=dt.updateQueue,i===null?(i=df(),dt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Rm(t,i,s,l){i.value=s,i.getSnapshot=l,Cm(i)&&Dm(t)}function wm(t,i,s){return s(function(){Cm(i)&&Dm(t)})}function Cm(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!jn(t,s)}catch{return!0}}function Dm(t){var i=Ws(t,2);i!==null&&ei(i,t,2)}function _f(t){var i=kn();if(typeof t=="function"){var s=t;if(t=s(),ms){le(!0);try{s()}finally{le(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:t},i}function Um(t,i,s,l){return t.baseState=s,mf(t,Bt,typeof l=="function"?l:$i)}function uy(t,i,s,l,f){if(Wl(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};B.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,Lm(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Lm(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=B.T,M={};B.T=M;try{var A=s(f,l),I=B.S;I!==null&&I(M,A),Nm(t,i,A)}catch(J){vf(t,i,J)}finally{B.T=m}}else try{m=s(f,l),Nm(t,i,m)}catch(J){vf(t,i,J)}}function Nm(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Om(t,i,l)},function(l){return vf(t,i,l)}):Om(t,i,s)}function Om(t,i,s){i.status="fulfilled",i.value=s,Pm(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Lm(t,s)))}function vf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Pm(i),i=i.next;while(i!==l)}t.action=null}function Pm(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Im(t,i){return i}function Bm(t,i){if(wt){var s=Wt.formState;if(s!==null){e:{var l=dt;if(wt){if(tn){t:{for(var f=tn,m=Ui;f.nodeType!==8;){if(!m){f=null;break t}if(f=Si(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){tn=Si(f.nextSibling),l=f.data==="F!";break e}}fs(l)}l=!1}l&&(i=s[0])}}return s=kn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:i},s.queue=l,s=ng.bind(null,dt,l),l.dispatch=s,l=_f(!1),m=Ef.bind(null,dt,!1,l.queue),l=kn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=uy.bind(null,dt,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Fm(t){var i=ln();return zm(i,Bt,t)}function zm(t,i,s){if(i=mf(t,i,Im)[0],t=Vl($i)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=So(i)}catch(M){throw M===mo?Il:M}else l=i;i=ln();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(dt.flags|=2048,er(9,kl(),fy.bind(null,f,s),null)),[l,m,t]}function fy(t,i){t.action=i}function Hm(t){var i=ln(),s=Bt;if(s!==null)return zm(i,s,t);ln(),i=i.memoizedState,s=ln();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function er(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=dt.updateQueue,i===null&&(i=df(),dt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function kl(){return{destroy:void 0,resource:void 0}}function Gm(){return ln().memoizedState}function Xl(t,i,s,l){var f=kn();l=l===void 0?null:l,dt.flags|=t,f.memoizedState=er(1|i,kl(),s,l)}function Mo(t,i,s,l){var f=ln();l=l===void 0?null:l;var m=f.memoizedState.inst;Bt!==null&&l!==null&&lf(l,Bt.memoizedState.deps)?f.memoizedState=er(i,m,s,l):(dt.flags|=t,f.memoizedState=er(1|i,m,s,l))}function Vm(t,i){Xl(8390656,8,t,i)}function km(t,i){Mo(2048,8,t,i)}function Xm(t,i){return Mo(4,2,t,i)}function Wm(t,i){return Mo(4,4,t,i)}function qm(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ym(t,i,s){s=s!=null?s.concat([t]):null,Mo(4,4,qm.bind(null,i,t),s)}function xf(){}function jm(t,i){var s=ln();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&lf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Km(t,i){var s=ln();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&lf(i,l[1]))return l[0];if(l=t(),ms){le(!0);try{t()}finally{le(!1)}}return s.memoizedState=[l,i],l}function yf(t,i,s){return s===void 0||(Ra&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=Jg(),dt.lanes|=t,Oa|=t,s)}function Zm(t,i,s,l){return jn(s,i)?s:Qs.current!==null?(t=yf(t,s,l),jn(t,i)||(_n=!0),t):(Ra&42)===0?(_n=!0,t.memoizedState=s):(t=Jg(),dt.lanes|=t,Oa|=t,i)}function Qm(t,i,s,l,f){var m=Z.p;Z.p=m!==0&&8>m?m:8;var M=B.T,A={};B.T=A,Ef(t,!1,i,s);try{var I=f(),J=B.S;if(J!==null&&J(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var fe=oy(I,l);Eo(t,i,fe,$n(t))}else Eo(t,i,l,$n(t))}catch(me){Eo(t,i,{then:function(){},status:"rejected",reason:me},$n())}finally{Z.p=m,B.T=M}}function hy(){}function Sf(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=Jm(t).queue;Qm(t,f,i,j,s===null?hy:function(){return $m(t),s(l)})}function Jm(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:j},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function $m(t){var i=Jm(t).next.queue;Eo(t,i,{},$n())}function Mf(){return Cn(Go)}function eg(){return ln().memoizedState}function tg(){return ln().memoizedState}function dy(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=$n();t=ba(s);var l=Aa(i,t,s);l!==null&&(ei(l,i,s),_o(l,i,s)),i={cache:Qu()},t.payload=i;return}i=i.return}}function py(t,i,s){var l=$n();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Wl(t)?ig(i,s):(s=Gu(t,i,s,l),s!==null&&(ei(s,t,l),ag(s,i,l)))}function ng(t,i,s){var l=$n();Eo(t,i,s,l)}function Eo(t,i,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Wl(t))ig(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,A=m(M,s);if(f.hasEagerState=!0,f.eagerState=A,jn(A,M))return wl(t,i,f,0),Wt===null&&Rl(),!1}catch{}finally{}if(s=Gu(t,i,f,l),s!==null)return ei(s,t,l),ag(s,i,l),!0}return!1}function Ef(t,i,s,l){if(l={lane:2,revertLane:th(),action:l,hasEagerState:!1,eagerState:null,next:null},Wl(t)){if(i)throw Error(a(479))}else i=Gu(t,s,l,2),i!==null&&ei(i,t,2)}function Wl(t){var i=t.alternate;return t===dt||i!==null&&i===dt}function ig(t,i){Js=zl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function ag(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Ge(t,s)}}var ql={readContext:Cn,use:Gl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},sg={readContext:Cn,use:Gl,useCallback:function(t,i){return kn().memoizedState=[t,i===void 0?null:i],t},useContext:Cn,useEffect:Vm,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Xl(4194308,4,qm.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Xl(4194308,4,t,i)},useInsertionEffect:function(t,i){Xl(4,2,t,i)},useMemo:function(t,i){var s=kn();i=i===void 0?null:i;var l=t();if(ms){le(!0);try{t()}finally{le(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=kn();if(s!==void 0){var f=s(i);if(ms){le(!0);try{s(i)}finally{le(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=py.bind(null,dt,t),[l.memoizedState,t]},useRef:function(t){var i=kn();return t={current:t},i.memoizedState=t},useState:function(t){t=_f(t);var i=t.queue,s=ng.bind(null,dt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:xf,useDeferredValue:function(t,i){var s=kn();return yf(s,t,i)},useTransition:function(){var t=_f(!1);return t=Qm.bind(null,dt,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=dt,f=kn();if(wt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Wt===null)throw Error(a(349));(Mt&124)!==0||Am(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Vm(wm.bind(null,l,m,t),[t]),l.flags|=2048,er(9,kl(),Rm.bind(null,l,m,s,i),null),s},useId:function(){var t=kn(),i=Wt.identifierPrefix;if(wt){var s=Zi,l=Ki;s=(l&~(1<<32-Pe(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Hl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=ly++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Mf,useFormState:Bm,useActionState:Bm,useOptimistic:function(t){var i=kn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Ef.bind(null,dt,!0,s),s.dispatch=i,[t,i]},useMemoCache:pf,useCacheRefresh:function(){return kn().memoizedState=dy.bind(null,dt)}},rg={readContext:Cn,use:Gl,useCallback:jm,useContext:Cn,useEffect:km,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Km,useReducer:Vl,useRef:Gm,useState:function(){return Vl($i)},useDebugValue:xf,useDeferredValue:function(t,i){var s=ln();return Zm(s,Bt.memoizedState,t,i)},useTransition:function(){var t=Vl($i)[0],i=ln().memoizedState;return[typeof t=="boolean"?t:So(t),i]},useSyncExternalStore:bm,useId:eg,useHostTransitionStatus:Mf,useFormState:Fm,useActionState:Fm,useOptimistic:function(t,i){var s=ln();return Um(s,Bt,t,i)},useMemoCache:pf,useCacheRefresh:tg},my={readContext:Cn,use:Gl,useCallback:jm,useContext:Cn,useEffect:km,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Km,useReducer:gf,useRef:Gm,useState:function(){return gf($i)},useDebugValue:xf,useDeferredValue:function(t,i){var s=ln();return Bt===null?yf(s,t,i):Zm(s,Bt.memoizedState,t,i)},useTransition:function(){var t=gf($i)[0],i=ln().memoizedState;return[typeof t=="boolean"?t:So(t),i]},useSyncExternalStore:bm,useId:eg,useHostTransitionStatus:Mf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t,i){var s=ln();return Bt!==null?Um(s,Bt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:pf,useCacheRefresh:tg},tr=null,To=0;function Yl(t){var i=To;return To+=1,tr===null&&(tr=[]),_m(tr,t,i)}function bo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function jl(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function og(t){var i=t._init;return i(t._payload)}function lg(t){function i(Y,V){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[V],Y.flags|=16):Q.push(V)}}function s(Y,V){if(!t)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function l(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function f(Y,V){return Y=ji(Y,V),Y.index=0,Y.sibling=null,Y}function m(Y,V,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<V?(Y.flags|=67108866,V):Q):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,V,Q,pe){return V===null||V.tag!==6?(V=ku(Q,Y.mode,pe),V.return=Y,V):(V=f(V,Q),V.return=Y,V)}function I(Y,V,Q,pe){var He=Q.type;return He===E?fe(Y,V,Q.props.children,pe,Q.key):V!==null&&(V.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===X&&og(He)===V.type)?(V=f(V,Q.props),bo(V,Q),V.return=Y,V):(V=Dl(Q.type,Q.key,Q.props,null,Y.mode,pe),bo(V,Q),V.return=Y,V)}function J(Y,V,Q,pe){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=Xu(Q,Y.mode,pe),V.return=Y,V):(V=f(V,Q.children||[]),V.return=Y,V)}function fe(Y,V,Q,pe,He){return V===null||V.tag!==7?(V=os(Q,Y.mode,pe,He),V.return=Y,V):(V=f(V,Q),V.return=Y,V)}function me(Y,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=ku(""+V,Y.mode,Q),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case v:return Q=Dl(V.type,V.key,V.props,null,Y.mode,Q),bo(Q,V),Q.return=Y,Q;case y:return V=Xu(V,Y.mode,Q),V.return=Y,V;case X:var pe=V._init;return V=pe(V._payload),me(Y,V,Q)}if(he(V)||re(V))return V=os(V,Y.mode,Q,null),V.return=Y,V;if(typeof V.then=="function")return me(Y,Yl(V),Q);if(V.$$typeof===L)return me(Y,Ol(Y,V),Q);jl(Y,V)}return null}function te(Y,V,Q,pe){var He=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return He!==null?null:A(Y,V,""+Q,pe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===He?I(Y,V,Q,pe):null;case y:return Q.key===He?J(Y,V,Q,pe):null;case X:return He=Q._init,Q=He(Q._payload),te(Y,V,Q,pe)}if(he(Q)||re(Q))return He!==null?null:fe(Y,V,Q,pe,null);if(typeof Q.then=="function")return te(Y,V,Yl(Q),pe);if(Q.$$typeof===L)return te(Y,V,Ol(Y,Q),pe);jl(Y,Q)}return null}function ie(Y,V,Q,pe,He){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return Y=Y.get(Q)||null,A(V,Y,""+pe,He);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case v:return Y=Y.get(pe.key===null?Q:pe.key)||null,I(V,Y,pe,He);case y:return Y=Y.get(pe.key===null?Q:pe.key)||null,J(V,Y,pe,He);case X:var pt=pe._init;return pe=pt(pe._payload),ie(Y,V,Q,pe,He)}if(he(pe)||re(pe))return Y=Y.get(Q)||null,fe(V,Y,pe,He,null);if(typeof pe.then=="function")return ie(Y,V,Q,Yl(pe),He);if(pe.$$typeof===L)return ie(Y,V,Q,Ol(V,pe),He);jl(V,pe)}return null}function tt(Y,V,Q,pe){for(var He=null,pt=null,Ye=V,et=V=0,xn=null;Ye!==null&&et<Q.length;et++){Ye.index>et?(xn=Ye,Ye=null):xn=Ye.sibling;var Rt=te(Y,Ye,Q[et],pe);if(Rt===null){Ye===null&&(Ye=xn);break}t&&Ye&&Rt.alternate===null&&i(Y,Ye),V=m(Rt,V,et),pt===null?He=Rt:pt.sibling=Rt,pt=Rt,Ye=xn}if(et===Q.length)return s(Y,Ye),wt&&cs(Y,et),He;if(Ye===null){for(;et<Q.length;et++)Ye=me(Y,Q[et],pe),Ye!==null&&(V=m(Ye,V,et),pt===null?He=Ye:pt.sibling=Ye,pt=Ye);return wt&&cs(Y,et),He}for(Ye=l(Ye);et<Q.length;et++)xn=ie(Ye,Y,et,Q[et],pe),xn!==null&&(t&&xn.alternate!==null&&Ye.delete(xn.key===null?et:xn.key),V=m(xn,V,et),pt===null?He=xn:pt.sibling=xn,pt=xn);return t&&Ye.forEach(function(ka){return i(Y,ka)}),wt&&cs(Y,et),He}function Je(Y,V,Q,pe){if(Q==null)throw Error(a(151));for(var He=null,pt=null,Ye=V,et=V=0,xn=null,Rt=Q.next();Ye!==null&&!Rt.done;et++,Rt=Q.next()){Ye.index>et?(xn=Ye,Ye=null):xn=Ye.sibling;var ka=te(Y,Ye,Rt.value,pe);if(ka===null){Ye===null&&(Ye=xn);break}t&&Ye&&ka.alternate===null&&i(Y,Ye),V=m(ka,V,et),pt===null?He=ka:pt.sibling=ka,pt=ka,Ye=xn}if(Rt.done)return s(Y,Ye),wt&&cs(Y,et),He;if(Ye===null){for(;!Rt.done;et++,Rt=Q.next())Rt=me(Y,Rt.value,pe),Rt!==null&&(V=m(Rt,V,et),pt===null?He=Rt:pt.sibling=Rt,pt=Rt);return wt&&cs(Y,et),He}for(Ye=l(Ye);!Rt.done;et++,Rt=Q.next())Rt=ie(Ye,Y,et,Rt.value,pe),Rt!==null&&(t&&Rt.alternate!==null&&Ye.delete(Rt.key===null?et:Rt.key),V=m(Rt,V,et),pt===null?He=Rt:pt.sibling=Rt,pt=Rt);return t&&Ye.forEach(function(gS){return i(Y,gS)}),wt&&cs(Y,et),He}function zt(Y,V,Q,pe){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:e:{for(var He=Q.key;V!==null;){if(V.key===He){if(He=Q.type,He===E){if(V.tag===7){s(Y,V.sibling),pe=f(V,Q.props.children),pe.return=Y,Y=pe;break e}}else if(V.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===X&&og(He)===V.type){s(Y,V.sibling),pe=f(V,Q.props),bo(pe,Q),pe.return=Y,Y=pe;break e}s(Y,V);break}else i(Y,V);V=V.sibling}Q.type===E?(pe=os(Q.props.children,Y.mode,pe,Q.key),pe.return=Y,Y=pe):(pe=Dl(Q.type,Q.key,Q.props,null,Y.mode,pe),bo(pe,Q),pe.return=Y,Y=pe)}return M(Y);case y:e:{for(He=Q.key;V!==null;){if(V.key===He)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){s(Y,V.sibling),pe=f(V,Q.children||[]),pe.return=Y,Y=pe;break e}else{s(Y,V);break}else i(Y,V);V=V.sibling}pe=Xu(Q,Y.mode,pe),pe.return=Y,Y=pe}return M(Y);case X:return He=Q._init,Q=He(Q._payload),zt(Y,V,Q,pe)}if(he(Q))return tt(Y,V,Q,pe);if(re(Q)){if(He=re(Q),typeof He!="function")throw Error(a(150));return Q=He.call(Q),Je(Y,V,Q,pe)}if(typeof Q.then=="function")return zt(Y,V,Yl(Q),pe);if(Q.$$typeof===L)return zt(Y,V,Ol(Y,Q),pe);jl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(s(Y,V.sibling),pe=f(V,Q),pe.return=Y,Y=pe):(s(Y,V),pe=ku(Q,Y.mode,pe),pe.return=Y,Y=pe),M(Y)):s(Y,V)}return function(Y,V,Q,pe){try{To=0;var He=zt(Y,V,Q,pe);return tr=null,He}catch(Ye){if(Ye===mo||Ye===Il)throw Ye;var pt=Kn(29,Ye,null,Y.mode);return pt.lanes=pe,pt.return=Y,pt}finally{}}}var nr=lg(!0),cg=lg(!1),ci=$(null),Li=null;function wa(t){var i=t.alternate;ye(dn,dn.current&1),ye(ci,t),Li===null&&(i===null||Qs.current!==null||i.memoizedState!==null)&&(Li=t)}function ug(t){if(t.tag===22){if(ye(dn,dn.current),ye(ci,t),Li===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Li=t)}}else Ca()}function Ca(){ye(dn,dn.current),ye(ci,ci.current)}function ea(t){ve(ci),Li===t&&(Li=null),ve(dn)}var dn=$(0);function Kl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||dh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Tf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var bf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=$n(),f=ba(l);f.payload=i,s!=null&&(f.callback=s),i=Aa(t,f,l),i!==null&&(ei(i,t,l),_o(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=$n(),f=ba(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Aa(t,f,l),i!==null&&(ei(i,t,l),_o(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=$n(),l=ba(s);l.tag=2,i!=null&&(l.callback=i),i=Aa(t,l,s),i!==null&&(ei(i,t,s),_o(i,t,s))}};function fg(t,i,s,l,f,m,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,M):i.prototype&&i.prototype.isPureReactComponent?!ro(s,l)||!ro(f,m):!0}function hg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&bf.enqueueReplaceState(i,i.state,null)}function gs(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}var Zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function dg(t){Zl(t)}function pg(t){console.error(t)}function mg(t){Zl(t)}function Ql(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function gg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Af(t,i,s){return s=ba(s),s.tag=3,s.payload={element:null},s.callback=function(){Ql(t,i)},s}function _g(t){return t=ba(t),t.tag=3,t}function vg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){gg(i,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){gg(i,s,l),typeof f!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function gy(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&fo(i,s,f,!0),s=ci.current,s!==null){switch(s.tag){case 13:return Li===null?Zf():s.alternate===null&&nn===0&&(nn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===ef?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Jf(t,l,f)),!1;case 22:return s.flags|=65536,l===ef?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Jf(t,l,f)),!1}throw Error(a(435,s.tag))}return Jf(t,l,f),Zf(),!1}if(wt)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Yu&&(t=Error(a(422),{cause:l}),uo(si(t,s)))):(l!==Yu&&(i=Error(a(423),{cause:l}),uo(si(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=si(l,s),f=Af(t.stateNode,l,f),af(t,f),nn!==4&&(nn=2)),!1;var m=Error(a(520),{cause:l});if(m=si(m,s),Lo===null?Lo=[m]:Lo.push(m),nn!==4&&(nn=2),i===null)return!0;l=si(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Af(s.stateNode,l,t),af(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Pa===null||!Pa.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=_g(f),vg(f,t,s,l),af(s,f),!1}s=s.return}while(s!==null);return!1}var xg=Error(a(461)),_n=!1;function En(t,i,s,l){i.child=t===null?cg(i,null,s,l):nr(i,t.child,s,l)}function yg(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var M={};for(var A in l)A!=="ref"&&(M[A]=l[A])}else M=l;return ds(i),l=cf(t,i,s,M,m,f),A=uf(),t!==null&&!_n?(ff(t,i,f),ta(t,i,f)):(wt&&A&&Wu(i),i.flags|=1,En(t,i,l,f),i.child)}function Sg(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!Vu(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,Mg(t,i,m,l,f)):(t=Dl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!Of(t,f)){var M=m.memoizedProps;if(s=s.compare,s=s!==null?s:ro,s(M,l)&&t.ref===i.ref)return ta(t,i,f)}return i.flags|=1,t=ji(m,l),t.ref=i.ref,t.return=i,i.child=t}function Mg(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(ro(m,l)&&t.ref===i.ref)if(_n=!1,i.pendingProps=l=m,Of(t,f))(t.flags&131072)!==0&&(_n=!0);else return i.lanes=t.lanes,ta(t,i,f)}return Rf(t,i,s,l,f)}function Eg(t,i,s){var l=i.pendingProps,f=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,t!==null){for(f=i.child=t.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return Tg(t,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pl(i,m!==null?m.cachePool:null),m!==null?Mm(i,m):rf(),ug(i);else return i.lanes=i.childLanes=536870912,Tg(t,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Pl(i,m.cachePool),Mm(i,m),Ca(),i.memoizedState=null):(t!==null&&Pl(i,null),rf(),Ca());return En(t,i,f,s),i.child}function Tg(t,i,s,l){var f=$u();return f=f===null?null:{parent:hn._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},t!==null&&Pl(i,null),rf(),ug(i),t!==null&&fo(t,i,l,!0),null}function Jl(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Rf(t,i,s,l,f){return ds(i),s=cf(t,i,s,l,void 0,f),l=uf(),t!==null&&!_n?(ff(t,i,f),ta(t,i,f)):(wt&&l&&Wu(i),i.flags|=1,En(t,i,s,f),i.child)}function bg(t,i,s,l,f,m){return ds(i),i.updateQueue=null,s=Tm(i,l,s,f),Em(t),l=uf(),t!==null&&!_n?(ff(t,i,m),ta(t,i,m)):(wt&&l&&Wu(i),i.flags|=1,En(t,i,s,m),i.child)}function Ag(t,i,s,l,f){if(ds(i),i.stateNode===null){var m=qs,M=s.contextType;typeof M=="object"&&M!==null&&(m=Cn(M)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=bf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},tf(i),M=s.contextType,m.context=typeof M=="object"&&M!==null?Cn(M):qs,m.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(Tf(i,s,M,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&bf.enqueueReplaceState(m,m.state,null),xo(i,l,m,f),vo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var A=i.memoizedProps,I=gs(s,A);m.props=I;var J=m.context,fe=s.contextType;M=qs,typeof fe=="object"&&fe!==null&&(M=Cn(fe));var me=s.getDerivedStateFromProps;fe=typeof me=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,fe||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||J!==M)&&hg(i,m,l,M),Ta=!1;var te=i.memoizedState;m.state=te,xo(i,l,m,f),vo(),J=i.memoizedState,A||te!==J||Ta?(typeof me=="function"&&(Tf(i,s,me,l),J=i.memoizedState),(I=Ta||fg(i,s,I,l,te,J,M))?(fe||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=J),m.props=l,m.state=J,m.context=M,l=I):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,nf(t,i),M=i.memoizedProps,fe=gs(s,M),m.props=fe,me=i.pendingProps,te=m.context,J=s.contextType,I=qs,typeof J=="object"&&J!==null&&(I=Cn(J)),A=s.getDerivedStateFromProps,(J=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==me||te!==I)&&hg(i,m,l,I),Ta=!1,te=i.memoizedState,m.state=te,xo(i,l,m,f),vo();var ie=i.memoizedState;M!==me||te!==ie||Ta||t!==null&&t.dependencies!==null&&Nl(t.dependencies)?(typeof A=="function"&&(Tf(i,s,A,l),ie=i.memoizedState),(fe=Ta||fg(i,s,fe,l,te,ie,I)||t!==null&&t.dependencies!==null&&Nl(t.dependencies))?(J||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ie,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ie,I)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===t.memoizedProps&&te===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&te===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ie),m.props=l,m.state=ie,m.context=I,l=fe):(typeof m.componentDidUpdate!="function"||M===t.memoizedProps&&te===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&te===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,Jl(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=nr(i,t.child,null,f),i.child=nr(i,null,s,f)):En(t,i,s,f),i.memoizedState=m.state,t=i.child):t=ta(t,i,f),t}function Rg(t,i,s,l){return co(),i.flags|=256,En(t,i,s,l),i.child}var wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(t){return{baseLanes:t,cachePool:pm()}}function Df(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=ui),t}function wg(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,M;if((M=m)||(M=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),M&&(f=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(wt){if(f?wa(i):Ca(),wt){var A=tn,I;if(I=A){e:{for(I=A,A=Ui;I.nodeType!==8;){if(!A){A=null;break e}if(I=Si(I.nextSibling),I===null){A=null;break e}}A=I}A!==null?(i.memoizedState={dehydrated:A,treeContext:ls!==null?{id:Ki,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},I=Kn(18,null,null,0),I.stateNode=A,I.return=i,i.child=I,In=i,tn=null,I=!0):I=!1}I||fs(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return dh(A)?i.lanes=32:i.lanes=536870912,null;ea(i)}return A=l.children,l=l.fallback,f?(Ca(),f=i.mode,A=$l({mode:"hidden",children:A},f),l=os(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,f=i.child,f.memoizedState=Cf(s),f.childLanes=Df(t,M,s),i.memoizedState=wf,l):(wa(i),Uf(i,A))}if(I=t.memoizedState,I!==null&&(A=I.dehydrated,A!==null)){if(m)i.flags&256?(wa(i),i.flags&=-257,i=Lf(t,i,s)):i.memoizedState!==null?(Ca(),i.child=t.child,i.flags|=128,i=null):(Ca(),f=l.fallback,A=i.mode,l=$l({mode:"visible",children:l.children},A),f=os(f,A,s,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,nr(i,t.child,null,s),l=i.child,l.memoizedState=Cf(s),l.childLanes=Df(t,M,s),i.memoizedState=wf,i=f);else if(wa(i),dh(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var J=M.dgst;M=J,l=Error(a(419)),l.stack="",l.digest=M,uo({value:l,source:null,stack:null}),i=Lf(t,i,s)}else if(_n||fo(t,i,s,!1),M=(s&t.childLanes)!==0,_n||M){if(M=Wt,M!==null&&(l=s&-s,l=(l&42)!==0?1:it(l),l=(l&(M.suspendedLanes|s))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,Ws(t,l),ei(M,t,l),xg;A.data==="$?"||Zf(),i=Lf(t,i,s)}else A.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=I.treeContext,tn=Si(A.nextSibling),In=i,wt=!0,us=null,Ui=!1,t!==null&&(oi[li++]=Ki,oi[li++]=Zi,oi[li++]=ls,Ki=t.id,Zi=t.overflow,ls=i),i=Uf(i,l.children),i.flags|=4096);return i}return f?(Ca(),f=l.fallback,A=i.mode,I=t.child,J=I.sibling,l=ji(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,J!==null?f=ji(J,f):(f=os(f,A,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,A=t.child.memoizedState,A===null?A=Cf(s):(I=A.cachePool,I!==null?(J=hn._currentValue,I=I.parent!==J?{parent:J,pool:J}:I):I=pm(),A={baseLanes:A.baseLanes|s,cachePool:I}),f.memoizedState=A,f.childLanes=Df(t,M,s),i.memoizedState=wf,l):(wa(i),s=t.child,t=s.sibling,s=ji(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=s,i.memoizedState=null,s)}function Uf(t,i){return i=$l({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function $l(t,i){return t=Kn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Lf(t,i,s){return nr(i,t.child,null,s),t=Uf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Cg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Ku(t.return,i,s)}function Nf(t,i,s,l,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function Dg(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(En(t,i,l.children,s),l=dn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cg(t,s,i);else if(t.tag===19)Cg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(ye(dn,l),f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Kl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Nf(i,!1,f,s,m);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Kl(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Nf(i,!0,s,null,m);break;case"together":Nf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ta(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Oa|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(fo(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=ji(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ji(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Of(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Nl(t)))}function _y(t,i,s){switch(i.tag){case 3:Oe(i,i.stateNode.containerInfo),Ea(i,hn,t.memoizedState.cache),co();break;case 27:case 5:nt(i);break;case 4:Oe(i,i.stateNode.containerInfo);break;case 10:Ea(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(wa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?wg(t,i,s):(wa(i),t=ta(t,i,s),t!==null?t.sibling:null);wa(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(fo(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Dg(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ye(dn,dn.current),l)break;return null;case 22:case 23:return i.lanes=0,Eg(t,i,s);case 24:Ea(i,hn,t.memoizedState.cache)}return ta(t,i,s)}function Ug(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)_n=!0;else{if(!Of(t,s)&&(i.flags&128)===0)return _n=!1,_y(t,i,s);_n=(t.flags&131072)!==0}else _n=!1,wt&&(i.flags&1048576)!==0&&om(i,Ll,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")Vu(l)?(t=gs(l,t),i.tag=1,i=Ag(null,i,l,t,s)):(i.tag=0,i=Rf(null,i,l,t,s));else{if(l!=null){if(f=l.$$typeof,f===w){i.tag=11,i=yg(null,i,l,t,s);break e}else if(f===z){i.tag=14,i=Sg(null,i,l,t,s);break e}}throw i=ue(l)||l,Error(a(306,i,""))}}return i;case 0:return Rf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=gs(l,i.pendingProps),Ag(t,i,l,f,s);case 3:e:{if(Oe(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,nf(t,i),xo(i,l,null,s);var M=i.memoizedState;if(l=M.cache,Ea(i,hn,l),l!==m.cache&&Zu(i,[hn],s,!0),vo(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Rg(t,i,l,s);break e}else if(l!==f){f=si(Error(a(424)),i),uo(f),i=Rg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tn=Si(t.firstChild),In=i,wt=!0,us=null,Ui=!0,s=cg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(co(),l===f){i=ta(t,i,s);break e}En(t,i,l,s)}i=i.child}return i;case 26:return Jl(t,i),t===null?(s=P_(i.type,null,i.pendingProps,null))?i.memoizedState=s:wt||(s=i.type,t=i.pendingProps,l=dc(de.current).createElement(s),l[fn]=i,l[$t]=t,bn(l,s,t),rn(l),i.stateNode=l):i.memoizedState=P_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return nt(i),t===null&&wt&&(l=i.stateNode=L_(i.type,i.pendingProps,de.current),In=i,Ui=!0,f=tn,Fa(i.type)?(ph=f,tn=Si(l.firstChild)):tn=f),En(t,i,i.pendingProps.children,s),Jl(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&wt&&((f=l=tn)&&(l=Wy(l,i.type,i.pendingProps,Ui),l!==null?(i.stateNode=l,In=i,tn=Si(l.firstChild),Ui=!1,f=!0):f=!1),f||fs(i)),nt(i),f=i.type,m=i.pendingProps,M=t!==null?t.memoizedProps:null,l=m.children,uh(f,m)?l=null:M!==null&&uh(f,M)&&(i.flags|=32),i.memoizedState!==null&&(f=cf(t,i,cy,null,null,s),Go._currentValue=f),Jl(t,i),En(t,i,l,s),i.child;case 6:return t===null&&wt&&((t=s=tn)&&(s=qy(s,i.pendingProps,Ui),s!==null?(i.stateNode=s,In=i,tn=null,t=!0):t=!1),t||fs(i)),null;case 13:return wg(t,i,s);case 4:return Oe(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=nr(i,null,l,s):En(t,i,l,s),i.child;case 11:return yg(t,i,i.type,i.pendingProps,s);case 7:return En(t,i,i.pendingProps,s),i.child;case 8:return En(t,i,i.pendingProps.children,s),i.child;case 12:return En(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ea(i,i.type,l.value),En(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,ds(i),f=Cn(f),l=l(f),i.flags|=1,En(t,i,l,s),i.child;case 14:return Sg(t,i,i.type,i.pendingProps,s);case 15:return Mg(t,i,i.type,i.pendingProps,s);case 19:return Dg(t,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},t===null?(s=$l(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=ji(t.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Eg(t,i,s);case 24:return ds(i),l=Cn(hn),t===null?(f=$u(),f===null&&(f=Wt,m=Qu(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},tf(i),Ea(i,hn,f)):((t.lanes&s)!==0&&(nf(t,i),xo(i,null,null,s),vo()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ea(i,hn,l)):(l=m.cache,Ea(i,hn,l),l!==f.cache&&Zu(i,[hn],s,!0))),En(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function na(t){t.flags|=4}function Lg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!H_(i)){if(i=ci.current,i!==null&&((Mt&4194048)===Mt?Li!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||i!==Li))throw go=ef,mm;t.flags|=8192}}function ec(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?be():536870912,t.lanes|=i,rr|=i)}function Ao(t,i){if(!wt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Qt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function vy(t,i,s){var l=i.pendingProps;switch(qu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(i),null;case 1:return Qt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ji(hn),qe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(lo(i)?na(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,um())),Qt(i),null;case 26:return s=i.memoizedState,t===null?(na(i),s!==null?(Qt(i),Lg(i,s)):(Qt(i),i.flags&=-16777217)):s?s!==t.memoizedState?(na(i),Qt(i),Lg(i,s)):(Qt(i),i.flags&=-16777217):(t.memoizedProps!==l&&na(i),Qt(i),i.flags&=-16777217),null;case 27:kt(i),s=de.current;var f=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&na(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Qt(i),null}t=we.current,lo(i)?lm(i):(t=L_(f,l,s),i.stateNode=t,na(i))}return Qt(i),null;case 5:if(kt(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&na(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Qt(i),null}if(t=we.current,lo(i))lm(i);else{switch(f=dc(de.current),t){case 1:t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}t[fn]=i,t[$t]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)t.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=t;e:switch(bn(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&na(i)}}return Qt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&na(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=de.current,lo(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=In,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[fn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||b_(t.nodeValue,s)),t||fs(i)}else t=dc(t).createTextNode(l),t[fn]=i,i.stateNode=t}return Qt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=lo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[fn]=i}else co(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qt(i),f=!1}else f=um(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ea(i),i):(ea(i),null)}if(ea(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),ec(i,i.updateQueue),Qt(i),null;case 4:return qe(),t===null&&sh(i.stateNode.containerInfo),Qt(i),null;case 10:return Ji(i.type),Qt(i),null;case 19:if(ve(dn),f=i.memoizedState,f===null)return Qt(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)Ao(f,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Kl(t),m!==null){for(i.flags|=128,Ao(f,!1),t=m.updateQueue,i.updateQueue=t,ec(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)rm(s,t),s=s.sibling;return ye(dn,dn.current&1|2),i.child}t=t.sibling}f.tail!==null&&Fe()>ic&&(i.flags|=128,l=!0,Ao(f,!1),i.lanes=4194304)}else{if(!l)if(t=Kl(m),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,ec(i,t),Ao(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!wt)return Qt(i),null}else 2*Fe()-f.renderingStartTime>ic&&s!==536870912&&(i.flags|=128,l=!0,Ao(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(t=f.last,t!==null?t.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Fe(),i.sibling=null,t=dn.current,ye(dn,l?t&1|2:t&1),i):(Qt(i),null);case 22:case 23:return ea(i),of(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Qt(i),i.subtreeFlags&6&&(i.flags|=8192)):Qt(i),s=i.updateQueue,s!==null&&ec(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ve(ps),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ji(hn),Qt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function xy(t,i){switch(qu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ji(hn),qe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return kt(i),null;case 13:if(ea(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));co()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ve(dn),null;case 4:return qe(),null;case 10:return Ji(i.type),null;case 22:case 23:return ea(i),of(),t!==null&&ve(ps),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ji(hn),null;case 25:return null;default:return null}}function Ng(t,i){switch(qu(i),i.tag){case 3:Ji(hn),qe();break;case 26:case 27:case 5:kt(i);break;case 4:qe();break;case 13:ea(i);break;case 19:ve(dn);break;case 10:Ji(i.type);break;case 22:case 23:ea(i),of(),t!==null&&ve(ps);break;case 24:Ji(hn)}}function Ro(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,M=s.inst;l=m(),M.destroy=l}s=s.next}while(s!==f)}}catch(A){Vt(i,i.return,A)}}function Da(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var M=l.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,f=i;var I=s,J=A;try{J()}catch(fe){Vt(f,I,fe)}}}l=l.next}while(l!==m)}}catch(fe){Vt(i,i.return,fe)}}function Og(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Sm(i,s)}catch(l){Vt(t,t.return,l)}}}function Pg(t,i,s){s.props=gs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Vt(t,i,l)}}function wo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Vt(t,i,f)}}function Ni(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Vt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Vt(t,i,f)}else s.current=null}function Ig(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Vt(t,t.return,f)}}function Pf(t,i,s){try{var l=t.stateNode;Hy(l,t.type,s,i),l[$t]=i}catch(f){Vt(t,t.return,f)}}function Bg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function If(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=hc));else if(l!==4&&(l===27&&Fa(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Bf(t,i,s),t=t.sibling;t!==null;)Bf(t,i,s),t=t.sibling}function tc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&Fa(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(tc(t,i,s),t=t.sibling;t!==null;)tc(t,i,s),t=t.sibling}function Fg(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);bn(i,l,s),i[fn]=t,i[$t]=s}catch(m){Vt(t,t.return,m)}}var ia=!1,sn=!1,Ff=!1,zg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function yy(t,i){if(t=t.containerInfo,lh=xc,t=Zp(t),Pu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var M=0,A=-1,I=-1,J=0,fe=0,me=t,te=null;t:for(;;){for(var ie;me!==s||f!==0&&me.nodeType!==3||(A=M+f),me!==m||l!==0&&me.nodeType!==3||(I=M+l),me.nodeType===3&&(M+=me.nodeValue.length),(ie=me.firstChild)!==null;)te=me,me=ie;for(;;){if(me===t)break t;if(te===s&&++J===f&&(A=M),te===m&&++fe===l&&(I=M),(ie=me.nextSibling)!==null)break;me=te,te=me.parentNode}me=ie}s=A===-1||I===-1?null:{start:A,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(ch={focusedElem:t,selectionRange:s},xc=!1,vn=i;vn!==null;)if(i=vn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,vn=t;else for(;vn!==null;){switch(i=vn,m=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var tt=gs(s.type,f,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(tt,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(Je){Vt(s,s.return,Je)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)hh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":hh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,vn=t;break}vn=i.return}}function Hg(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ua(t,s),l&4&&Ro(5,s);break;case 1:if(Ua(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(M){Vt(s,s.return,M)}else{var f=gs(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Vt(s,s.return,M)}}l&64&&Og(s),l&512&&wo(s,s.return);break;case 3:if(Ua(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Sm(t,i)}catch(M){Vt(s,s.return,M)}}break;case 27:i===null&&l&4&&Fg(s);case 26:case 5:Ua(t,s),i===null&&l&4&&Ig(s),l&512&&wo(s,s.return);break;case 12:Ua(t,s);break;case 13:Ua(t,s),l&4&&kg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Cy.bind(null,s),Yy(t,s))));break;case 22:if(l=s.memoizedState!==null||ia,!l){i=i!==null&&i.memoizedState!==null||sn,f=ia;var m=sn;ia=l,(sn=i)&&!m?La(t,s,(s.subtreeFlags&8772)!==0):Ua(t,s),ia=f,sn=m}break;case 30:break;default:Ua(t,s)}}function Gg(t){var i=t.alternate;i!==null&&(t.alternate=null,Gg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Bs(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,Xn=!1;function aa(t,i,s){for(s=s.child;s!==null;)Vg(t,i,s),s=s.sibling}function Vg(t,i,s){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(ce,s)}catch{}switch(s.tag){case 26:sn||Ni(s,i),aa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:sn||Ni(s,i);var l=jt,f=Xn;Fa(s.type)&&(jt=s.stateNode,Xn=!1),aa(t,i,s),Bo(s.stateNode),jt=l,Xn=f;break;case 5:sn||Ni(s,i);case 6:if(l=jt,f=Xn,jt=null,aa(t,i,s),jt=l,Xn=f,jt!==null)if(Xn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(s.stateNode)}catch(m){Vt(s,i,m)}else try{jt.removeChild(s.stateNode)}catch(m){Vt(s,i,m)}break;case 18:jt!==null&&(Xn?(t=jt,D_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Wo(t)):D_(jt,s.stateNode));break;case 4:l=jt,f=Xn,jt=s.stateNode.containerInfo,Xn=!0,aa(t,i,s),jt=l,Xn=f;break;case 0:case 11:case 14:case 15:sn||Da(2,s,i),sn||Da(4,s,i),aa(t,i,s);break;case 1:sn||(Ni(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Pg(s,i,l)),aa(t,i,s);break;case 21:aa(t,i,s);break;case 22:sn=(l=sn)||s.memoizedState!==null,aa(t,i,s),sn=l;break;default:aa(t,i,s)}}function kg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Wo(t)}catch(s){Vt(i,i.return,s)}}function Sy(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new zg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new zg),i;default:throw Error(a(435,t.tag))}}function zf(t,i){var s=Sy(t);i.forEach(function(l){var f=Dy.bind(null,t,l);s.has(l)||(s.add(l),l.then(f,f))})}function Zn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,M=i,A=M;e:for(;A!==null;){switch(A.tag){case 27:if(Fa(A.type)){jt=A.stateNode,Xn=!1;break e}break;case 5:jt=A.stateNode,Xn=!1;break e;case 3:case 4:jt=A.stateNode.containerInfo,Xn=!0;break e}A=A.return}if(jt===null)throw Error(a(160));Vg(m,M,f),jt=null,Xn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Xg(i,t),i=i.sibling}var yi=null;function Xg(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zn(i,t),Qn(t),l&4&&(Da(3,t,t.return),Ro(3,t),Da(5,t,t.return));break;case 1:Zn(i,t),Qn(t),l&512&&(sn||s===null||Ni(s,s.return)),l&64&&ia&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=yi;if(Zn(i,t),Qn(t),l&512&&(sn||s===null||Ni(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Di]||m[fn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),bn(m,l,s),m[fn]=t,rn(m),l=m;break e;case"link":var M=F_("link","href",f).get(l+(s.href||""));if(M){for(var A=0;A<M.length;A++)if(m=M[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(A,1);break t}}m=f.createElement(l),bn(m,l,s),f.head.appendChild(m);break;case"meta":if(M=F_("meta","content",f).get(l+(s.content||""))){for(A=0;A<M.length;A++)if(m=M[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(A,1);break t}}m=f.createElement(l),bn(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[fn]=t,rn(m),l=m}t.stateNode=l}else z_(f,t.type,t.stateNode);else t.stateNode=B_(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?z_(f,t.type,t.stateNode):B_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Pf(t,t.memoizedProps,s.memoizedProps)}break;case 27:Zn(i,t),Qn(t),l&512&&(sn||s===null||Ni(s,s.return)),s!==null&&l&4&&Pf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Zn(i,t),Qn(t),l&512&&(sn||s===null||Ni(s,s.return)),t.flags&32){f=t.stateNode;try{Gn(f,"")}catch(ie){Vt(t,t.return,ie)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Pf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Ff=!0);break;case 6:if(Zn(i,t),Qn(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(ie){Vt(t,t.return,ie)}}break;case 3:if(gc=null,f=yi,yi=pc(i.containerInfo),Zn(i,t),yi=f,Qn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Wo(i.containerInfo)}catch(ie){Vt(t,t.return,ie)}Ff&&(Ff=!1,Wg(t));break;case 4:l=yi,yi=pc(t.stateNode.containerInfo),Zn(i,t),Qn(t),yi=l;break;case 12:Zn(i,t),Qn(t);break;case 13:Zn(i,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Wf=Fe()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,zf(t,l)));break;case 22:f=t.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,J=ia,fe=sn;if(ia=J||f,sn=fe||I,Zn(i,t),sn=fe,ia=J,Qn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||I||ia||sn||_s(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){I=s=i;try{if(m=I.stateNode,f)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=I.stateNode;var me=I.memoizedProps.style,te=me!=null&&me.hasOwnProperty("display")?me.display:null;A.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(ie){Vt(I,I.return,ie)}}}else if(i.tag===6){if(s===null){I=i;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(ie){Vt(I,I.return,ie)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,zf(t,s))));break;case 19:Zn(i,t),Qn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,zf(t,l)));break;case 30:break;case 21:break;default:Zn(i,t),Qn(t)}}function Qn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Bg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=If(t);tc(t,m,f);break;case 5:var M=s.stateNode;s.flags&32&&(Gn(M,""),s.flags&=-33);var A=If(t);tc(t,A,M);break;case 3:case 4:var I=s.stateNode.containerInfo,J=If(t);Bf(t,J,I);break;default:throw Error(a(161))}}catch(fe){Vt(t,t.return,fe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Wg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Wg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ua(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Hg(t,i.alternate,i),i=i.sibling}function _s(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Da(4,i,i.return),_s(i);break;case 1:Ni(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Pg(i,i.return,s),_s(i);break;case 27:Bo(i.stateNode);case 26:case 5:Ni(i,i.return),_s(i);break;case 22:i.memoizedState===null&&_s(i);break;case 30:_s(i);break;default:_s(i)}t=t.sibling}}function La(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,M=m.flags;switch(m.tag){case 0:case 11:case 15:La(f,m,s),Ro(4,m);break;case 1:if(La(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(J){Vt(l,l.return,J)}if(l=m,f=l.updateQueue,f!==null){var A=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)ym(I[f],A)}catch(J){Vt(l,l.return,J)}}s&&M&64&&Og(m),wo(m,m.return);break;case 27:Fg(m);case 26:case 5:La(f,m,s),s&&l===null&&M&4&&Ig(m),wo(m,m.return);break;case 12:La(f,m,s);break;case 13:La(f,m,s),s&&M&4&&kg(f,m);break;case 22:m.memoizedState===null&&La(f,m,s),wo(m,m.return);break;case 30:break;default:La(f,m,s)}i=i.sibling}}function Hf(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&ho(s))}function Gf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ho(t))}function Oi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)qg(t,i,s,l),i=i.sibling}function qg(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Oi(t,i,s,l),f&2048&&Ro(9,i);break;case 1:Oi(t,i,s,l);break;case 3:Oi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ho(t)));break;case 12:if(f&2048){Oi(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,M=m.id,A=m.onPostCommit;typeof A=="function"&&A(M,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Vt(i,i.return,I)}}else Oi(t,i,s,l);break;case 13:Oi(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,M=i.alternate,i.memoizedState!==null?m._visibility&2?Oi(t,i,s,l):Co(t,i):m._visibility&2?Oi(t,i,s,l):(m._visibility|=2,ir(t,i,s,l,(i.subtreeFlags&10256)!==0)),f&2048&&Hf(M,i);break;case 24:Oi(t,i,s,l),f&2048&&Gf(i.alternate,i);break;default:Oi(t,i,s,l)}}function ir(t,i,s,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=t,M=i,A=s,I=l,J=M.flags;switch(M.tag){case 0:case 11:case 15:ir(m,M,A,I,f),Ro(8,M);break;case 23:break;case 22:var fe=M.stateNode;M.memoizedState!==null?fe._visibility&2?ir(m,M,A,I,f):Co(m,M):(fe._visibility|=2,ir(m,M,A,I,f)),f&&J&2048&&Hf(M.alternate,M);break;case 24:ir(m,M,A,I,f),f&&J&2048&&Gf(M.alternate,M);break;default:ir(m,M,A,I,f)}i=i.sibling}}function Co(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:Co(s,l),f&2048&&Hf(l.alternate,l);break;case 24:Co(s,l),f&2048&&Gf(l.alternate,l);break;default:Co(s,l)}i=i.sibling}}var Do=8192;function ar(t){if(t.subtreeFlags&Do)for(t=t.child;t!==null;)Yg(t),t=t.sibling}function Yg(t){switch(t.tag){case 26:ar(t),t.flags&Do&&t.memoizedState!==null&&rS(yi,t.memoizedState,t.memoizedProps);break;case 5:ar(t);break;case 3:case 4:var i=yi;yi=pc(t.stateNode.containerInfo),ar(t),yi=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Do,Do=16777216,ar(t),Do=i):ar(t));break;default:ar(t)}}function jg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Uo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];vn=l,Zg(l,t)}jg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kg(t),t=t.sibling}function Kg(t){switch(t.tag){case 0:case 11:case 15:Uo(t),t.flags&2048&&Da(9,t,t.return);break;case 3:Uo(t);break;case 12:Uo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,nc(t)):Uo(t);break;default:Uo(t)}}function nc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];vn=l,Zg(l,t)}jg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Da(8,i,i.return),nc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,nc(i));break;default:nc(i)}t=t.sibling}}function Zg(t,i){for(;vn!==null;){var s=vn;switch(s.tag){case 0:case 11:case 15:Da(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ho(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,vn=l;else e:for(s=t;vn!==null;){l=vn;var f=l.sibling,m=l.return;if(Gg(l),l===s){vn=null;break e}if(f!==null){f.return=m,vn=f;break e}vn=m}}}var My={getCacheForType:function(t){var i=Cn(hn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},Ey=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Wt=null,_t=null,Mt=0,Nt=0,Jn=null,Na=!1,sr=!1,Vf=!1,sa=0,nn=0,Oa=0,vs=0,kf=0,ui=0,rr=0,Lo=null,Wn=null,Xf=!1,Wf=0,ic=1/0,ac=null,Pa=null,Tn=0,Ia=null,or=null,lr=0,qf=0,Yf=null,Qg=null,No=0,jf=null;function $n(){if((Lt&2)!==0&&Mt!==0)return Mt&-Mt;if(B.T!==null){var t=Ks;return t!==0?t:th()}return bt()}function Jg(){ui===0&&(ui=(Mt&536870912)===0||wt?k():536870912);var t=ci.current;return t!==null&&(t.flags|=32),ui}function ei(t,i,s){(t===Wt&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)&&(cr(t,0),Ba(t,Mt,ui,!1)),Ie(t,s),((Lt&2)===0||t!==Wt)&&(t===Wt&&((Lt&2)===0&&(vs|=s),nn===4&&Ba(t,Mt,ui,!1)),Pi(t))}function $g(t,i,s){if((Lt&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&t.expiredLanes)===0||Ce(t,i),f=l?Ay(t,i):Qf(t,i,!0),m=l;do{if(f===0){sr&&!l&&Ba(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!Ty(s)){f=Qf(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var A=t;f=Lo;var I=A.current.memoizedState.isDehydrated;if(I&&(cr(A,M).flags|=256),M=Qf(A,M,!1),M!==2){if(Vf&&!I){A.errorRecoveryDisabledLanes|=m,vs|=m,f=4;break e}m=Wn,Wn=f,m!==null&&(Wn===null?Wn=m:Wn.push.apply(Wn,m))}f=M}if(m=!1,f!==2)continue}}if(f===1){cr(t,0),Ba(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ba(l,i,ui,!Na);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Wf+300-Fe(),10<f)){if(Ba(l,i,ui,!Na),Ve(l,0,!0)!==0)break e;l.timeoutHandle=w_(e_.bind(null,l,s,Wn,ac,Xf,i,ui,vs,rr,Na,m,2,-0,0),f);break e}e_(l,s,Wn,ac,Xf,i,ui,vs,rr,Na,m,0,-0,0)}}break}while(!0);Pi(t)}function e_(t,i,s,l,f,m,M,A,I,J,fe,me,te,ie){if(t.timeoutHandle=-1,me=i.subtreeFlags,(me&8192||(me&16785408)===16785408)&&(Ho={stylesheets:null,count:0,unsuspend:sS},Yg(i),me=oS(),me!==null)){t.cancelPendingCommit=me(o_.bind(null,t,i,m,s,l,f,M,A,I,fe,1,te,ie)),Ba(t,m,M,!J);return}o_(t,i,m,s,l,f,M,A,I)}function Ty(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!jn(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ba(t,i,s,l){i&=~kf,i&=~vs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-Pe(f),M=1<<m;l[m]=-1,f&=~M}s!==0&&ge(t,s,i)}function sc(){return(Lt&6)===0?(Oo(0),!1):!0}function Kf(){if(_t!==null){if(Nt===0)var t=_t.return;else t=_t,Qi=hs=null,hf(t),tr=null,To=0,t=_t;for(;t!==null;)Ng(t.alternate,t),t=t.return;_t=null}}function cr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Vy(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Kf(),Wt=t,_t=s=ji(t.current,null),Mt=i,Nt=0,Jn=null,Na=!1,sr=Ce(t,i),Vf=!1,rr=ui=kf=vs=Oa=nn=0,Wn=Lo=null,Xf=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Pe(l),m=1<<f;i|=t[f],l&=~m}return sa=i,Rl(),s}function t_(t,i){dt=null,B.H=ql,i===mo||i===Il?(i=vm(),Nt=3):i===mm?(i=vm(),Nt=4):Nt=i===xg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Jn=i,_t===null&&(nn=1,Ql(t,si(i,t.current)))}function n_(){var t=B.H;return B.H=ql,t===null?ql:t}function i_(){var t=B.A;return B.A=My,t}function Zf(){nn=4,Na||(Mt&4194048)!==Mt&&ci.current!==null||(sr=!0),(Oa&134217727)===0&&(vs&134217727)===0||Wt===null||Ba(Wt,Mt,ui,!1)}function Qf(t,i,s){var l=Lt;Lt|=2;var f=n_(),m=i_();(Wt!==t||Mt!==i)&&(ac=null,cr(t,i)),i=!1;var M=nn;e:do try{if(Nt!==0&&_t!==null){var A=_t,I=Jn;switch(Nt){case 8:Kf(),M=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var J=Nt;if(Nt=0,Jn=null,ur(t,A,I,J),s&&sr){M=0;break e}break;default:J=Nt,Nt=0,Jn=null,ur(t,A,I,J)}}by(),M=nn;break}catch(fe){t_(t,fe)}while(!0);return i&&t.shellSuspendCounter++,Qi=hs=null,Lt=l,B.H=f,B.A=m,_t===null&&(Wt=null,Mt=0,Rl()),M}function by(){for(;_t!==null;)a_(_t)}function Ay(t,i){var s=Lt;Lt|=2;var l=n_(),f=i_();Wt!==t||Mt!==i?(ac=null,ic=Fe()+500,cr(t,i)):sr=Ce(t,i);e:do try{if(Nt!==0&&_t!==null){i=_t;var m=Jn;t:switch(Nt){case 1:Nt=0,Jn=null,ur(t,i,m,1);break;case 2:case 9:if(gm(m)){Nt=0,Jn=null,s_(i);break}i=function(){Nt!==2&&Nt!==9||Wt!==t||(Nt=7),Pi(t)},m.then(i,i);break e;case 3:Nt=7;break e;case 4:Nt=5;break e;case 7:gm(m)?(Nt=0,Jn=null,s_(i)):(Nt=0,Jn=null,ur(t,i,m,7));break;case 5:var M=null;switch(_t.tag){case 26:M=_t.memoizedState;case 5:case 27:var A=_t;if(!M||H_(M)){Nt=0,Jn=null;var I=A.sibling;if(I!==null)_t=I;else{var J=A.return;J!==null?(_t=J,rc(J)):_t=null}break t}}Nt=0,Jn=null,ur(t,i,m,5);break;case 6:Nt=0,Jn=null,ur(t,i,m,6);break;case 8:Kf(),nn=6;break e;default:throw Error(a(462))}}Ry();break}catch(fe){t_(t,fe)}while(!0);return Qi=hs=null,B.H=l,B.A=f,Lt=s,_t!==null?0:(Wt=null,Mt=0,Rl(),nn)}function Ry(){for(;_t!==null&&!Ze();)a_(_t)}function a_(t){var i=Ug(t.alternate,t,sa);t.memoizedProps=t.pendingProps,i===null?rc(t):_t=i}function s_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=bg(s,i,i.pendingProps,i.type,void 0,Mt);break;case 11:i=bg(s,i,i.pendingProps,i.type.render,i.ref,Mt);break;case 5:hf(i);default:Ng(s,i),i=_t=rm(i,sa),i=Ug(s,i,sa)}t.memoizedProps=t.pendingProps,i===null?rc(t):_t=i}function ur(t,i,s,l){Qi=hs=null,hf(i),tr=null,To=0;var f=i.return;try{if(gy(t,f,i,s,Mt)){nn=1,Ql(t,si(s,t.current)),_t=null;return}}catch(m){if(f!==null)throw _t=f,m;nn=1,Ql(t,si(s,t.current)),_t=null;return}i.flags&32768?(wt||l===1?t=!0:sr||(Mt&536870912)!==0?t=!1:(Na=t=!0,(l===2||l===9||l===3||l===6)&&(l=ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),r_(i,t)):rc(i)}function rc(t){var i=t;do{if((i.flags&32768)!==0){r_(i,Na);return}t=i.return;var s=vy(i.alternate,i,sa);if(s!==null){_t=s;return}if(i=i.sibling,i!==null){_t=i;return}_t=i=t}while(i!==null);nn===0&&(nn=5)}function r_(t,i){do{var s=xy(t.alternate,t);if(s!==null){s.flags&=32767,_t=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){_t=t;return}_t=t=s}while(t!==null);nn=6,_t=null}function o_(t,i,s,l,f,m,M,A,I){t.cancelPendingCommit=null;do oc();while(Tn!==0);if((Lt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Hu,Ee(t,s,m,M,A,I),t===Wt&&(_t=Wt=null,Mt=0),or=i,Ia=t,lr=s,qf=m,Yf=f,Qg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Uy(Kt,function(){return h_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=Z.p,Z.p=2,M=Lt,Lt|=4;try{yy(t,i,s)}finally{Lt=M,Z.p=f,B.T=l}}Tn=1,l_(),c_(),u_()}}function l_(){if(Tn===1){Tn=0;var t=Ia,i=or,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=Z.p;Z.p=2;var f=Lt;Lt|=4;try{Xg(i,t);var m=ch,M=Zp(t.containerInfo),A=m.focusedElem,I=m.selectionRange;if(M!==A&&A&&A.ownerDocument&&Kp(A.ownerDocument.documentElement,A)){if(I!==null&&Pu(A)){var J=I.start,fe=I.end;if(fe===void 0&&(fe=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(fe,A.value.length);else{var me=A.ownerDocument||document,te=me&&me.defaultView||window;if(te.getSelection){var ie=te.getSelection(),tt=A.textContent.length,Je=Math.min(I.start,tt),zt=I.end===void 0?Je:Math.min(I.end,tt);!ie.extend&&Je>zt&&(M=zt,zt=Je,Je=M);var Y=jp(A,Je),V=jp(A,zt);if(Y&&V&&(ie.rangeCount!==1||ie.anchorNode!==Y.node||ie.anchorOffset!==Y.offset||ie.focusNode!==V.node||ie.focusOffset!==V.offset)){var Q=me.createRange();Q.setStart(Y.node,Y.offset),ie.removeAllRanges(),Je>zt?(ie.addRange(Q),ie.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),ie.addRange(Q))}}}}for(me=[],ie=A;ie=ie.parentNode;)ie.nodeType===1&&me.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<me.length;A++){var pe=me[A];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}xc=!!lh,ch=lh=null}finally{Lt=f,Z.p=l,B.T=s}}t.current=i,Tn=2}}function c_(){if(Tn===2){Tn=0;var t=Ia,i=or,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=Z.p;Z.p=2;var f=Lt;Lt|=4;try{Hg(t,i.alternate,i)}finally{Lt=f,Z.p=l,B.T=s}}Tn=3}}function u_(){if(Tn===4||Tn===3){Tn=0,Tt();var t=Ia,i=or,s=lr,l=Qg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Tn=5:(Tn=0,or=Ia=null,f_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Pa=null),Ut(s),i=i.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(ce,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,f=Z.p,Z.p=2,B.T=null;try{for(var m=t.onRecoverableError,M=0;M<l.length;M++){var A=l[M];m(A.value,{componentStack:A.stack})}}finally{B.T=i,Z.p=f}}(lr&3)!==0&&oc(),Pi(t),f=t.pendingLanes,(s&4194090)!==0&&(f&42)!==0?t===jf?No++:(No=0,jf=t):No=0,Oo(0)}}function f_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,ho(i)))}function oc(t){return l_(),c_(),u_(),h_()}function h_(){if(Tn!==5)return!1;var t=Ia,i=qf;qf=0;var s=Ut(lr),l=B.T,f=Z.p;try{Z.p=32>s?32:s,B.T=null,s=Yf,Yf=null;var m=Ia,M=lr;if(Tn=0,or=Ia=null,lr=0,(Lt&6)!==0)throw Error(a(331));var A=Lt;if(Lt|=4,Kg(m.current),qg(m,m.current,M,s),Lt=A,Oo(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(ce,m)}catch{}return!0}finally{Z.p=f,B.T=l,f_(t,i)}}function d_(t,i,s){i=si(s,i),i=Af(t.stateNode,i,2),t=Aa(t,i,2),t!==null&&(Ie(t,2),Pi(t))}function Vt(t,i,s){if(t.tag===3)d_(t,t,s);else for(;i!==null;){if(i.tag===3){d_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Pa===null||!Pa.has(l))){t=si(s,t),s=_g(2),l=Aa(i,s,2),l!==null&&(vg(s,l,i,t),Ie(l,2),Pi(l));break}}i=i.return}}function Jf(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Ey;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Vf=!0,f.add(s),t=wy.bind(null,t,i,s),i.then(t,t))}function wy(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Wt===t&&(Mt&s)===s&&(nn===4||nn===3&&(Mt&62914560)===Mt&&300>Fe()-Wf?(Lt&2)===0&&cr(t,0):kf|=s,rr===Mt&&(rr=0)),Pi(t)}function p_(t,i){i===0&&(i=be()),t=Ws(t,i),t!==null&&(Ie(t,i),Pi(t))}function Cy(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),p_(t,s)}function Dy(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),p_(t,s)}function Uy(t,i){return H(t,i)}var lc=null,fr=null,$f=!1,cc=!1,eh=!1,xs=0;function Pi(t){t!==fr&&t.next===null&&(fr===null?lc=fr=t:fr=fr.next=t),cc=!0,$f||($f=!0,Ny())}function Oo(t,i){if(!eh&&cc){eh=!0;do for(var s=!1,l=lc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var M=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-Pe(42|t)+1)-1,m&=f&~(M&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,v_(l,m))}else m=Mt,m=Ve(l,l===Wt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ce(l,m)||(s=!0,v_(l,m));l=l.next}while(s);eh=!1}}function Ly(){m_()}function m_(){cc=$f=!1;var t=0;xs!==0&&(Gy()&&(t=xs),xs=0);for(var i=Fe(),s=null,l=lc;l!==null;){var f=l.next,m=g_(l,i);m===0?(l.next=null,s===null?lc=f:s.next=f,f===null&&(fr=s)):(s=l,(t!==0||(m&3)!==0)&&(cc=!0)),l=f}Oo(t)}function g_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var M=31-Pe(m),A=1<<M,I=f[M];I===-1?((A&s)===0||(A&l)!==0)&&(f[M]=at(A,i)):I<=i&&(t.expiredLanes|=A),m&=~A}if(i=Wt,s=Mt,s=Ve(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Dt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ce(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Dt(l),Ut(s)){case 2:case 8:s=rt;break;case 32:s=Kt;break;case 268435456:s=N;break;default:s=Kt}return l=__.bind(null,t),s=H(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Dt(l),t.callbackPriority=2,t.callbackNode=null,2}function __(t,i){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(oc()&&t.callbackNode!==s)return null;var l=Mt;return l=Ve(t,t===Wt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:($g(t,l,i),g_(t,Fe()),t.callbackNode!=null&&t.callbackNode===s?__.bind(null,t):null)}function v_(t,i){if(oc())return null;$g(t,i,!0)}function Ny(){ky(function(){(Lt&6)!==0?H(ze,Ly):m_()})}function th(){return xs===0&&(xs=k()),xs}function x_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:yl(""+t)}function y_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Oy(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=x_((f[$t]||null).action),M=l.submitter;M&&(i=(i=M[$t]||null)?x_(i.formAction):M.getAttribute("formAction"),i!==null&&(m=i,M=null));var A=new Tl("action","action",null,l,f);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(xs!==0){var I=M?y_(f,M):new FormData(f);Sf(s,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(A.preventDefault(),I=M?y_(f,M):new FormData(f),Sf(s,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var nh=0;nh<zu.length;nh++){var ih=zu[nh],Py=ih.toLowerCase(),Iy=ih[0].toUpperCase()+ih.slice(1);xi(Py,"on"+Iy)}xi($p,"onAnimationEnd"),xi(em,"onAnimationIteration"),xi(tm,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi($x,"onTransitionRun"),xi(ey,"onTransitionStart"),xi(ty,"onTransitionCancel"),xi(nm,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),By=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function S_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var M=l.length-1;0<=M;M--){var A=l[M],I=A.instance,J=A.currentTarget;if(A=A.listener,I!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=J;try{m(f)}catch(fe){Zl(fe)}f.currentTarget=null,m=I}else for(M=0;M<l.length;M++){if(A=l[M],I=A.instance,J=A.currentTarget,A=A.listener,I!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=J;try{m(f)}catch(fe){Zl(fe)}f.currentTarget=null,m=I}}}}function vt(t,i){var s=i[Ps];s===void 0&&(s=i[Ps]=new Set);var l=t+"__bubble";s.has(l)||(M_(i,t,2,!1),s.add(l))}function ah(t,i,s){var l=0;i&&(l|=4),M_(s,t,l,i)}var uc="_reactListening"+Math.random().toString(36).slice(2);function sh(t){if(!t[uc]){t[uc]=!0,vl.forEach(function(s){s!=="selectionchange"&&(By.has(s)||ah(s,!1,t),ah(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[uc]||(i[uc]=!0,ah("selectionchange",!1,i))}}function M_(t,i,s,l){switch(q_(i)){case 2:var f=uS;break;case 8:f=fS;break;default:f=xh}s=f.bind(null,i,s,t),f=void 0,!Au||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function rh(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var A=l.stateNode.containerInfo;if(A===f)break;if(M===4)for(M=l.return;M!==null;){var I=M.tag;if((I===3||I===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;A!==null;){if(M=qi(A),M===null)return;if(I=M.tag,I===5||I===6||I===26||I===27){l=m=M;continue e}A=A.parentNode}}l=l.return}Cp(function(){var J=m,fe=Tu(s),me=[];e:{var te=im.get(t);if(te!==void 0){var ie=Tl,tt=t;switch(t){case"keypress":if(Ml(s)===0)break e;case"keydown":case"keyup":ie=Ux;break;case"focusin":tt="focus",ie=Du;break;case"focusout":tt="blur",ie=Du;break;case"beforeblur":case"afterblur":ie=Du;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=Ox;break;case $p:case em:case tm:ie=Mx;break;case nm:ie=Ix;break;case"scroll":case"scrollend":ie=_x;break;case"wheel":ie=Fx;break;case"copy":case"cut":case"paste":ie=Tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=Op;break;case"toggle":case"beforetoggle":ie=Hx}var Je=(i&4)!==0,zt=!Je&&(t==="scroll"||t==="scrollend"),Y=Je?te!==null?te+"Capture":null:te;Je=[];for(var V=J,Q;V!==null;){var pe=V;if(Q=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||Q===null||Y===null||(pe=$r(V,Y),pe!=null&&Je.push(Io(V,pe,Q))),zt)break;V=V.return}0<Je.length&&(te=new ie(te,tt,null,s,fe),me.push({event:te,listeners:Je}))}}if((i&7)===0){e:{if(te=t==="mouseover"||t==="pointerover",ie=t==="mouseout"||t==="pointerout",te&&s!==Eu&&(tt=s.relatedTarget||s.fromElement)&&(qi(tt)||tt[Ci]))break e;if((ie||te)&&(te=fe.window===fe?fe:(te=fe.ownerDocument)?te.defaultView||te.parentWindow:window,ie?(tt=s.relatedTarget||s.toElement,ie=J,tt=tt?qi(tt):null,tt!==null&&(zt=c(tt),Je=tt.tag,tt!==zt||Je!==5&&Je!==27&&Je!==6)&&(tt=null)):(ie=null,tt=J),ie!==tt)){if(Je=Lp,pe="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Je=Op,pe="onPointerLeave",Y="onPointerEnter",V="pointer"),zt=ie==null?te:is(ie),Q=tt==null?te:is(tt),te=new Je(pe,V+"leave",ie,s,fe),te.target=zt,te.relatedTarget=Q,pe=null,qi(fe)===J&&(Je=new Je(Y,V+"enter",tt,s,fe),Je.target=Q,Je.relatedTarget=zt,pe=Je),zt=pe,ie&&tt)t:{for(Je=ie,Y=tt,V=0,Q=Je;Q;Q=hr(Q))V++;for(Q=0,pe=Y;pe;pe=hr(pe))Q++;for(;0<V-Q;)Je=hr(Je),V--;for(;0<Q-V;)Y=hr(Y),Q--;for(;V--;){if(Je===Y||Y!==null&&Je===Y.alternate)break t;Je=hr(Je),Y=hr(Y)}Je=null}else Je=null;ie!==null&&E_(me,te,ie,Je,!1),tt!==null&&zt!==null&&E_(me,zt,tt,Je,!0)}}e:{if(te=J?is(J):window,ie=te.nodeName&&te.nodeName.toLowerCase(),ie==="select"||ie==="input"&&te.type==="file")var He=Vp;else if(Hp(te))if(kp)He=Zx;else{He=jx;var pt=Yx}else ie=te.nodeName,!ie||ie.toLowerCase()!=="input"||te.type!=="checkbox"&&te.type!=="radio"?J&&Mu(J.elementType)&&(He=Vp):He=Kx;if(He&&(He=He(t,J))){Gp(me,He,s,fe);break e}pt&&pt(t,te,J),t==="focusout"&&J&&te.type==="number"&&J.memoizedProps.value!=null&&wn(te,"number",te.value)}switch(pt=J?is(J):window,t){case"focusin":(Hp(pt)||pt.contentEditable==="true")&&(Vs=pt,Iu=J,oo=null);break;case"focusout":oo=Iu=Vs=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,Qp(me,s,fe);break;case"selectionchange":if(Jx)break;case"keydown":case"keyup":Qp(me,s,fe)}var Ye;if(Lu)e:{switch(t){case"compositionstart":var et="onCompositionStart";break e;case"compositionend":et="onCompositionEnd";break e;case"compositionupdate":et="onCompositionUpdate";break e}et=void 0}else Gs?Fp(t,s)&&(et="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(et="onCompositionStart");et&&(Pp&&s.locale!=="ko"&&(Gs||et!=="onCompositionStart"?et==="onCompositionEnd"&&Gs&&(Ye=Dp()):(Ma=fe,Ru="value"in Ma?Ma.value:Ma.textContent,Gs=!0)),pt=fc(J,et),0<pt.length&&(et=new Np(et,t,null,s,fe),me.push({event:et,listeners:pt}),Ye?et.data=Ye:(Ye=zp(s),Ye!==null&&(et.data=Ye)))),(Ye=Vx?kx(t,s):Xx(t,s))&&(et=fc(J,"onBeforeInput"),0<et.length&&(pt=new Np("onBeforeInput","beforeinput",null,s,fe),me.push({event:pt,listeners:et}),pt.data=Ye)),Oy(me,t,J,s,fe)}S_(me,i)})}function Io(t,i,s){return{instance:t,listener:i,currentTarget:s}}function fc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=$r(t,s),f!=null&&l.unshift(Io(t,f,m)),f=$r(t,i),f!=null&&l.push(Io(t,f,m))),t.tag===3)return l;t=t.return}return[]}function hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function E_(t,i,s,l,f){for(var m=i._reactName,M=[];s!==null&&s!==l;){var A=s,I=A.alternate,J=A.stateNode;if(A=A.tag,I!==null&&I===l)break;A!==5&&A!==26&&A!==27||J===null||(I=J,f?(J=$r(s,m),J!=null&&M.unshift(Io(s,J,I))):f||(J=$r(s,m),J!=null&&M.push(Io(s,J,I)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var Fy=/\r\n?/g,zy=/\u0000|\uFFFD/g;function T_(t){return(typeof t=="string"?t:""+t).replace(Fy,`
`).replace(zy,"")}function b_(t,i){return i=T_(i),T_(t)===i}function hc(){}function Ft(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Gn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Gn(t,""+l);break;case"className":Be(t,"class",l);break;case"tabIndex":Be(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Be(t,s,l);break;case"style":Rp(t,l,m);break;case"data":if(i!=="object"){Be(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=yl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Ft(t,i,"name",f.name,f,null),Ft(t,i,"formEncType",f.formEncType,f,null),Ft(t,i,"formMethod",f.formMethod,f,null),Ft(t,i,"formTarget",f.formTarget,f,null)):(Ft(t,i,"encType",f.encType,f,null),Ft(t,i,"method",f.method,f,null),Ft(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=yl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=hc);break;case"onScroll":l!=null&&vt("scroll",t);break;case"onScrollEnd":l!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=yl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":vt("beforetoggle",t),vt("toggle",t),De(t,"popover",l);break;case"xlinkActuate":Le(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Le(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Le(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Le(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Le(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Le(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Le(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Le(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Le(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":De(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=mx.get(s)||s,De(t,s,l))}}function oh(t,i,s,l,f,m){switch(s){case"style":Rp(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Gn(t,l):(typeof l=="number"||typeof l=="bigint")&&Gn(t,""+l);break;case"onScroll":l!=null&&vt("scroll",t);break;case"onScrollEnd":l!=null&&vt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=hc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xl.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[$t]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):De(t,s,l)}}}function bn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var M=s[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ft(t,i,m,M,s,null)}}f&&Ft(t,i,"srcSet",s.srcSet,s,null),l&&Ft(t,i,"src",s.src,s,null);return;case"input":vt("invalid",t);var A=m=M=f=null,I=null,J=null;for(l in s)if(s.hasOwnProperty(l)){var fe=s[l];if(fe!=null)switch(l){case"name":f=fe;break;case"type":M=fe;break;case"checked":I=fe;break;case"defaultChecked":J=fe;break;case"value":m=fe;break;case"defaultValue":A=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(a(137,i));break;default:Ft(t,i,l,fe,s,null)}}Pn(t,m,A,I,J,M,f,!1),gt(t);return;case"select":vt("invalid",t),l=M=m=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":M=A;break;case"multiple":l=A;default:Ft(t,i,f,A,s,null)}i=m,s=M,t.multiple=!!l,i!=null?en(t,!!l,i,!1):s!=null&&en(t,!!l,s,!0);return;case"textarea":vt("invalid",t),m=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(A=s[M],A!=null))switch(M){case"value":l=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Ft(t,i,M,A,s,null)}Fs(t,l,f,m),gt(t);return;case"option":for(I in s)if(s.hasOwnProperty(I)&&(l=s[I],l!=null))switch(I){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ft(t,i,I,l,s,null)}return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(l=0;l<Po.length;l++)vt(Po[l],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in s)if(s.hasOwnProperty(J)&&(l=s[J],l!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ft(t,i,J,l,s,null)}return;default:if(Mu(i)){for(fe in s)s.hasOwnProperty(fe)&&(l=s[fe],l!==void 0&&oh(t,i,fe,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Ft(t,i,A,l,s,null))}function Hy(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,M=null,A=null,I=null,J=null,fe=null;for(ie in s){var me=s[ie];if(s.hasOwnProperty(ie)&&me!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":I=me;default:l.hasOwnProperty(ie)||Ft(t,i,ie,null,l,me)}}for(var te in l){var ie=l[te];if(me=s[te],l.hasOwnProperty(te)&&(ie!=null||me!=null))switch(te){case"type":m=ie;break;case"name":f=ie;break;case"checked":J=ie;break;case"defaultChecked":fe=ie;break;case"value":M=ie;break;case"defaultValue":A=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(a(137,i));break;default:ie!==me&&Ft(t,i,te,ie,l,me)}}Gt(t,M,A,I,J,fe,m,f);return;case"select":ie=M=A=te=null;for(m in s)if(I=s[m],s.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":ie=I;default:l.hasOwnProperty(m)||Ft(t,i,m,null,l,I)}for(f in l)if(m=l[f],I=s[f],l.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":te=m;break;case"defaultValue":A=m;break;case"multiple":M=m;default:m!==I&&Ft(t,i,f,m,l,I)}i=A,s=M,l=ie,te!=null?en(t,!!s,te,!1):!!l!=!!s&&(i!=null?en(t,!!s,i,!0):en(t,!!s,s?[]:"",!1));return;case"textarea":ie=te=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ft(t,i,A,null,l,f)}for(M in l)if(f=l[M],m=s[M],l.hasOwnProperty(M)&&(f!=null||m!=null))switch(M){case"value":te=f;break;case"defaultValue":ie=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Ft(t,i,M,f,l,m)}Mn(t,te,ie);return;case"option":for(var tt in s)if(te=s[tt],s.hasOwnProperty(tt)&&te!=null&&!l.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:Ft(t,i,tt,null,l,te)}for(I in l)if(te=l[I],ie=s[I],l.hasOwnProperty(I)&&te!==ie&&(te!=null||ie!=null))switch(I){case"selected":t.selected=te&&typeof te!="function"&&typeof te!="symbol";break;default:Ft(t,i,I,te,l,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in s)te=s[Je],s.hasOwnProperty(Je)&&te!=null&&!l.hasOwnProperty(Je)&&Ft(t,i,Je,null,l,te);for(J in l)if(te=l[J],ie=s[J],l.hasOwnProperty(J)&&te!==ie&&(te!=null||ie!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(a(137,i));break;default:Ft(t,i,J,te,l,ie)}return;default:if(Mu(i)){for(var zt in s)te=s[zt],s.hasOwnProperty(zt)&&te!==void 0&&!l.hasOwnProperty(zt)&&oh(t,i,zt,void 0,l,te);for(fe in l)te=l[fe],ie=s[fe],!l.hasOwnProperty(fe)||te===ie||te===void 0&&ie===void 0||oh(t,i,fe,te,l,ie);return}}for(var Y in s)te=s[Y],s.hasOwnProperty(Y)&&te!=null&&!l.hasOwnProperty(Y)&&Ft(t,i,Y,null,l,te);for(me in l)te=l[me],ie=s[me],!l.hasOwnProperty(me)||te===ie||te==null&&ie==null||Ft(t,i,me,te,l,ie)}var lh=null,ch=null;function dc(t){return t.nodeType===9?t:t.ownerDocument}function A_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function uh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var fh=null;function Gy(){var t=window.event;return t&&t.type==="popstate"?t===fh?!1:(fh=t,!0):(fh=null,!1)}var w_=typeof setTimeout=="function"?setTimeout:void 0,Vy=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,ky=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(t){return C_.resolve(null).then(t).catch(Xy)}:w_;function Xy(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function D_(t,i){var s=i,l=0,f=0;do{var m=s.nextSibling;if(t.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var M=t.ownerDocument;if(s&1&&Bo(M.documentElement),s&2&&Bo(M.body),s&4)for(s=M.head,Bo(s),M=s.firstChild;M;){var A=M.nextSibling,I=M.nodeName;M[Di]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=A}}if(f===0){t.removeChild(m),Wo(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);Wo(i)}function hh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":hh(s),Bs(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Wy(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Di])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Si(t.nextSibling),t===null)break}return null}function qy(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Si(t.nextSibling),t===null))return null;return t}function dh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Yy(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Si(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var ph=null;function U_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function L_(t,i,s){switch(i=dc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Bo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Bs(t)}var fi=new Map,N_=new Set;function pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=Z.d;Z.d={f:jy,r:Ky,D:Zy,C:Qy,L:Jy,m:$y,X:tS,S:eS,M:nS};function jy(){var t=ra.f(),i=sc();return t||i}function Ky(t){var i=ya(t);i!==null&&i.tag===5&&i.type==="form"?$m(i):ra.r(t)}var dr=typeof document>"u"?null:document;function O_(t,i,s){var l=dr;if(l&&typeof i=="string"&&i){var f=gn(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),N_.has(f)||(N_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),bn(i,"link",t),rn(i),l.head.appendChild(i)))}}function Zy(t){ra.D(t),O_("dns-prefetch",t,null)}function Qy(t,i){ra.C(t,i),O_("preconnect",t,i)}function Jy(t,i,s){ra.L(t,i,s);var l=dr;if(l&&t&&i){var f='link[rel="preload"][as="'+gn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+gn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+gn(s.imageSizes)+'"]')):f+='[href="'+gn(t)+'"]';var m=f;switch(i){case"style":m=pr(t);break;case"script":m=mr(t)}fi.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),fi.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Fo(m))||i==="script"&&l.querySelector(zo(m))||(i=l.createElement("link"),bn(i,"link",t),rn(i),l.head.appendChild(i)))}}function $y(t,i){ra.m(t,i);var s=dr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+gn(l)+'"][href="'+gn(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=mr(t)}if(!fi.has(m)&&(t=g({rel:"modulepreload",href:t},i),fi.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(zo(m)))return}l=s.createElement("link"),bn(l,"link",t),rn(l),s.head.appendChild(l)}}}function eS(t,i,s){ra.S(t,i,s);var l=dr;if(l&&t){var f=Sa(l).hoistableStyles,m=pr(t);i=i||"default";var M=f.get(m);if(!M){var A={loading:0,preload:null};if(M=l.querySelector(Fo(m)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=fi.get(m))&&mh(t,s);var I=M=l.createElement("link");rn(I),bn(I,"link",t),I._p=new Promise(function(J,fe){I.onload=J,I.onerror=fe}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,mc(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:A},f.set(m,M)}}}function tS(t,i){ra.X(t,i);var s=dr;if(s&&t){var l=Sa(s).hoistableScripts,f=mr(t),m=l.get(f);m||(m=s.querySelector(zo(f)),m||(t=g({src:t,async:!0},i),(i=fi.get(f))&&gh(t,i),m=s.createElement("script"),rn(m),bn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function nS(t,i){ra.M(t,i);var s=dr;if(s&&t){var l=Sa(s).hoistableScripts,f=mr(t),m=l.get(f);m||(m=s.querySelector(zo(f)),m||(t=g({src:t,async:!0,type:"module"},i),(i=fi.get(f))&&gh(t,i),m=s.createElement("script"),rn(m),bn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function P_(t,i,s,l){var f=(f=de.current)?pc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=pr(s.href),s=Sa(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=pr(s.href);var m=Sa(f).hoistableStyles,M=m.get(t);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,M),(m=f.querySelector(Fo(t)))&&!m._p&&(M.instance=m,M.state.loading=5),fi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},fi.set(t,s),m||iS(f,t,s,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=mr(s),s=Sa(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function pr(t){return'href="'+gn(t)+'"'}function Fo(t){return'link[rel="stylesheet"]['+t+"]"}function I_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function iS(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),bn(i,"link",s),rn(i),t.head.appendChild(i))}function mr(t){return'[src="'+gn(t)+'"]'}function zo(t){return"script[async]"+t}function B_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+gn(s.href)+'"]');if(l)return i.instance=l,rn(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),rn(l),bn(l,"style",f),mc(l,s.precedence,t),i.instance=l;case"stylesheet":f=pr(s.href);var m=t.querySelector(Fo(f));if(m)return i.state.loading|=4,i.instance=m,rn(m),m;l=I_(s),(f=fi.get(f))&&mh(l,f),m=(t.ownerDocument||t).createElement("link"),rn(m);var M=m;return M._p=new Promise(function(A,I){M.onload=A,M.onerror=I}),bn(m,"link",l),i.state.loading|=4,mc(m,s.precedence,t),i.instance=m;case"script":return m=mr(s.src),(f=t.querySelector(zo(m)))?(i.instance=f,rn(f),f):(l=s,(f=fi.get(m))&&(l=g({},s),gh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),rn(f),bn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,mc(l,s.precedence,t));return i.instance}function mc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,M=0;M<l.length;M++){var A=l[M];if(A.dataset.precedence===i)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function mh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function gh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var gc=null;function F_(t,i,s){if(gc===null){var l=new Map,f=gc=new Map;f.set(s,l)}else f=gc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[Di]||m[fn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(i)||"";M=t+M;var A=l.get(M);A?A.push(m):l.set(M,[m])}}return l}function z_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function aS(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function H_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ho=null;function sS(){}function rS(t,i,s){if(Ho===null)throw Error(a(475));var l=Ho;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=pr(s.href),m=t.querySelector(Fo(f));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=_c.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=m,rn(m);return}m=t.ownerDocument||t,s=I_(s),(f=fi.get(f))&&mh(s,f),m=m.createElement("link"),rn(m);var M=m;M._p=new Promise(function(A,I){M.onload=A,M.onerror=I}),bn(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=_c.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function oS(){if(Ho===null)throw Error(a(475));var t=Ho;return t.stylesheets&&t.count===0&&_h(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&_h(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function _c(){if(this.count--,this.count===0){if(this.stylesheets)_h(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vc=null;function _h(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vc=new Map,i.forEach(lS,t),vc=null,_c.call(t))}function lS(t,i){if(!(i.state.loading&4)){var s=vc.get(t);if(s)var l=s.get(null);else{s=new Map,vc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var M=f[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=i.instance,M=f.getAttribute("data-precedence"),m=s.get(M)||l,m===l&&s.set(null,f),s.set(M,f),this.count++,l=_c.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Go={$$typeof:L,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function cS(t,i,s,l,f,m,M,A){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function G_(t,i,s,l,f,m,M,A,I,J,fe,me){return t=new cS(t,i,s,M,A,I,J,me),i=1,m===!0&&(i|=24),m=Kn(3,null,null,i),t.current=m,m.stateNode=t,i=Qu(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},tf(m),t}function V_(t){return t?(t=qs,t):qs}function k_(t,i,s,l,f,m){f=V_(f),l.context===null?l.context=f:l.pendingContext=f,l=ba(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Aa(t,l,i),s!==null&&(ei(s,t,i),_o(s,t,i))}function X_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function vh(t,i){X_(t,i),(t=t.alternate)&&X_(t,i)}function W_(t){if(t.tag===13){var i=Ws(t,67108864);i!==null&&ei(i,t,67108864),vh(t,67108864)}}var xc=!0;function uS(t,i,s,l){var f=B.T;B.T=null;var m=Z.p;try{Z.p=2,xh(t,i,s,l)}finally{Z.p=m,B.T=f}}function fS(t,i,s,l){var f=B.T;B.T=null;var m=Z.p;try{Z.p=8,xh(t,i,s,l)}finally{Z.p=m,B.T=f}}function xh(t,i,s,l){if(xc){var f=yh(l);if(f===null)rh(t,i,l,yc,s),Y_(t,l);else if(dS(f,t,i,s,l))l.stopPropagation();else if(Y_(t,l),i&4&&-1<hS.indexOf(t)){for(;f!==null;){var m=ya(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=je(m.pendingLanes);if(M!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var I=1<<31-Pe(M);A.entanglements[1]|=I,M&=~I}Pi(m),(Lt&6)===0&&(ic=Fe()+500,Oo(0))}}break;case 13:A=Ws(m,2),A!==null&&ei(A,m,2),sc(),vh(m,2)}if(m=yh(l),m===null&&rh(t,i,l,yc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else rh(t,i,l,null,s)}}function yh(t){return t=Tu(t),Sh(t)}var yc=null;function Sh(t){if(yc=null,t=qi(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return yc=t,null}function q_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case ze:return 2;case rt:return 8;case Kt:case Zt:return 32;case N:return 268435456;default:return 32}default:return 32}}var Mh=!1,za=null,Ha=null,Ga=null,Vo=new Map,ko=new Map,Va=[],hS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Y_(t,i){switch(t){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":Vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(i.pointerId)}}function Xo(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=ya(i),i!==null&&W_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function dS(t,i,s,l,f){switch(i){case"focusin":return za=Xo(za,t,i,s,l,f),!0;case"dragenter":return Ha=Xo(Ha,t,i,s,l,f),!0;case"mouseover":return Ga=Xo(Ga,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return Vo.set(m,Xo(Vo.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,ko.set(m,Xo(ko.get(m)||null,t,i,s,l,f)),!0}return!1}function j_(t){var i=qi(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,_i(t.priority,function(){if(s.tag===13){var l=$n();l=it(l);var f=Ws(s,l);f!==null&&ei(f,s,l),vh(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=yh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Eu=l,s.target.dispatchEvent(l),Eu=null}else return i=ya(s),i!==null&&W_(i),t.blockedOn=s,!1;i.shift()}return!0}function K_(t,i,s){Sc(t)&&s.delete(i)}function pS(){Mh=!1,za!==null&&Sc(za)&&(za=null),Ha!==null&&Sc(Ha)&&(Ha=null),Ga!==null&&Sc(Ga)&&(Ga=null),Vo.forEach(K_),ko.forEach(K_)}function Mc(t,i){t.blockedOn===i&&(t.blockedOn=null,Mh||(Mh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,pS)))}var Ec=null;function Z_(t){Ec!==t&&(Ec=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ec===t&&(Ec=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Sh(l||s)===null)continue;break}var m=ya(s);m!==null&&(t.splice(i,3),i-=3,Sf(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Wo(t){function i(I){return Mc(I,t)}za!==null&&Mc(za,t),Ha!==null&&Mc(Ha,t),Ga!==null&&Mc(Ga,t),Vo.forEach(i),ko.forEach(i);for(var s=0;s<Va.length;s++){var l=Va[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Va.length&&(s=Va[0],s.blockedOn===null);)j_(s),s.blockedOn===null&&Va.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],M=f[$t]||null;if(typeof m=="function")M||Z_(s);else if(M){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,M=m[$t]||null)A=M.formAction;else if(Sh(f)!==null)continue}else A=M.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),Z_(s)}}}function Eh(t){this._internalRoot=t}Tc.prototype.render=Eh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=$n();k_(s,l,t,i,null,null)},Tc.prototype.unmount=Eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;k_(t.current,2,null,t,null,null),sc(),i[Ci]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var i=bt();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Va.length&&i!==0&&i<Va[s].priority;s++);Va.splice(s,0,t),s===0&&j_(t)}};var Q_=e.version;if(Q_!=="19.1.1")throw Error(a(527,Q_,"19.1.1"));Z.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?d(t):null,t=t===null?null:t.stateNode,t};var mS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{ce=bc.inject(mS),_e=bc}catch{}}return Yo.createRoot=function(t,i){if(!r(t))throw Error(a(299));var s=!1,l="",f=dg,m=pg,M=mg,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=G_(t,1,!1,null,null,s,l,f,m,M,A,null),t[Ci]=i.current,sh(t),new Eh(i)},Yo.hydrateRoot=function(t,i,s){if(!r(t))throw Error(a(299));var l=!1,f="",m=dg,M=pg,A=mg,I=null,J=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(I=s.unstable_transitionCallbacks),s.formState!==void 0&&(J=s.formState)),i=G_(t,1,!0,i,s??null,l,f,m,M,A,I,J),i.context=V_(null),s=i.current,l=$n(),l=it(l),f=ba(l),f.callback=null,Aa(s,f,l),s=l,i.current.lanes=s,Ie(i,s),Pi(i),t[Ci]=i.current,sh(t),new Tc(i)},Yo.version="19.1.1",Yo}var o0;function bS(){if(o0)return Ah.exports;o0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ah.exports=TS(),Ah.exports}var AS=bS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const op="179",RS=0,l0=1,wS=2,Dv=1,CS=2,da=3,va=0,Yn=1,Fi=2,$a=0,Nr=1,c0=2,u0=3,f0=4,DS=5,Cs=100,US=101,LS=102,NS=103,OS=104,PS=200,IS=201,BS=202,FS=203,md=204,gd=205,zS=206,HS=207,GS=208,VS=209,kS=210,XS=211,WS=212,qS=213,YS=214,_d=0,vd=1,xd=2,Fr=3,yd=4,Sd=5,Md=6,Ed=7,Uv=0,jS=1,KS=2,es=0,ZS=1,QS=2,JS=3,$S=4,eM=5,tM=6,nM=7,h0="attached",iM="detached",Lv=300,zr=301,Hr=302,Td=303,bd=304,mu=306,Gr=1e3,Ja=1001,uu=1002,zn=1003,Nv=1004,il=1005,ii=1006,iu=1007,ma=1008,Vi=1009,Ov=1010,Pv=1011,ol=1012,lp=1013,Ns=1014,Ai=1015,pl=1016,cp=1017,up=1018,ll=1020,Iv=35902,Bv=1021,Fv=1022,mi=1023,cl=1026,ul=1027,fp=1028,hp=1029,zv=1030,dp=1031,pp=1033,au=33776,su=33777,ru=33778,ou=33779,Ad=35840,Rd=35841,wd=35842,Cd=35843,Dd=36196,Ud=37492,Ld=37496,Nd=37808,Od=37809,Pd=37810,Id=37811,Bd=37812,Fd=37813,zd=37814,Hd=37815,Gd=37816,Vd=37817,kd=37818,Xd=37819,Wd=37820,qd=37821,lu=36492,Yd=36494,jd=36495,Hv=36283,Kd=36284,Zd=36285,Qd=36286,fl=2300,hl=2301,Dh=2302,d0=2400,p0=2401,m0=2402,aM=2500,sM=0,Gv=1,Jd=2,rM=3200,oM=3201,Vv=0,lM=1,Qa="",An="srgb",Hn="srgb-linear",fu="linear",Ht="srgb",gr=7680,g0=519,cM=512,uM=513,fM=514,kv=515,hM=516,dM=517,pM=518,mM=519,$d=35044,_0="300 es",zi=2e3,hu=2001;class Yr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const r=a[e];if(r!==void 0){const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let c=0,u=r.length;c<u;c++)r[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let v0=1234567;const Or=Math.PI/180,Vr=180/Math.PI;function Ri(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[n&63|128]+Un[n>>8&255]+"-"+Un[n>>16&255]+Un[n>>24&255]+Un[a&255]+Un[a>>8&255]+Un[a>>16&255]+Un[a>>24&255]).toLowerCase()}function xt(o,e,n){return Math.max(e,Math.min(n,o))}function mp(o,e){return(o%e+e)%e}function gM(o,e,n,a,r){return a+(o-e)*(r-a)/(n-e)}function _M(o,e,n){return o!==e?(n-o)/(e-o):0}function sl(o,e,n){return(1-n)*o+n*e}function vM(o,e,n,a){return sl(o,e,1-Math.exp(-n*a))}function xM(o,e=1){return e-Math.abs(mp(o,e*2)-e)}function yM(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*(3-2*o))}function SM(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*o*(o*(o*6-15)+10))}function MM(o,e){return o+Math.floor(Math.random()*(e-o+1))}function EM(o,e){return o+Math.random()*(e-o)}function TM(o){return o*(.5-Math.random())}function bM(o){o!==void 0&&(v0=o);let e=v0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AM(o){return o*Or}function RM(o){return o*Vr}function wM(o){return(o&o-1)===0&&o!==0}function CM(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function DM(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function UM(o,e,n,a,r){const c=Math.cos,u=Math.sin,h=c(n/2),p=u(n/2),d=c((e+a)/2),g=u((e+a)/2),_=c((e-a)/2),v=u((e-a)/2),y=c((a-e)/2),E=u((a-e)/2);switch(r){case"XYX":o.set(h*g,p*_,p*v,h*d);break;case"YZY":o.set(p*v,h*g,p*_,h*d);break;case"ZXZ":o.set(p*_,p*v,h*g,h*d);break;case"XZX":o.set(h*g,p*E,p*y,h*d);break;case"YXY":o.set(p*y,h*g,p*E,h*d);break;case"ZYZ":o.set(p*E,p*y,h*g,h*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function bi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ot(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const ep={DEG2RAD:Or,RAD2DEG:Vr,generateUUID:Ri,clamp:xt,euclideanModulo:mp,mapLinear:gM,inverseLerp:_M,lerp:sl,damp:vM,pingpong:xM,smoothstep:yM,smootherstep:SM,randInt:MM,randFloat:EM,randFloatSpread:TM,seededRandom:bM,degToRad:AM,radToDeg:RM,isPowerOfTwo:wM,ceilPowerOfTwo:CM,floorPowerOfTwo:DM,setQuaternionFromProperEuler:UM,normalize:Ot,denormalize:bi};class St{constructor(e=0,n=0){St.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,r=e.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(xt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),r=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*r+e.x,this.y=c*r+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ns{constructor(e=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=r}static slerpFlat(e,n,a,r,c,u,h){let p=a[r+0],d=a[r+1],g=a[r+2],_=a[r+3];const v=c[u+0],y=c[u+1],E=c[u+2],T=c[u+3];if(h===0){e[n+0]=p,e[n+1]=d,e[n+2]=g,e[n+3]=_;return}if(h===1){e[n+0]=v,e[n+1]=y,e[n+2]=E,e[n+3]=T;return}if(_!==T||p!==v||d!==y||g!==E){let S=1-h;const x=p*v+d*y+g*E+_*T,P=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const O=Math.sqrt(L),G=Math.atan2(O,x*P);S=Math.sin(S*G)/O,h=Math.sin(h*G)/O}const w=h*P;if(p=p*S+v*w,d=d*S+y*w,g=g*S+E*w,_=_*S+T*w,S===1-h){const O=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=O,d*=O,g*=O,_*=O}}e[n]=p,e[n+1]=d,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,r,c,u){const h=a[r],p=a[r+1],d=a[r+2],g=a[r+3],_=c[u],v=c[u+1],y=c[u+2],E=c[u+3];return e[n]=h*E+g*_+p*y-d*v,e[n+1]=p*E+g*v+d*_-h*y,e[n+2]=d*E+g*y+h*v-p*_,e[n+3]=g*E-h*_-p*v-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,r){return this._x=e,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,r=e._y,c=e._z,u=e._order,h=Math.cos,p=Math.sin,d=h(a/2),g=h(r/2),_=h(c/2),v=p(a/2),y=p(r/2),E=p(c/2);switch(u){case"XYZ":this._x=v*g*_+d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_+v*y*E;break;case"YZX":this._x=v*g*_+d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_-v*y*E;break;case"XZY":this._x=v*g*_-d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],r=n[4],c=n[8],u=n[1],h=n[5],p=n[9],d=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-d)*y,this._z=(u-r)*y}else if(a>h&&a>_){const y=2*Math.sqrt(1+a-h-_);this._w=(g-p)/y,this._x=.25*y,this._y=(r+u)/y,this._z=(c+d)/y}else if(h>_){const y=2*Math.sqrt(1+h-a-_);this._w=(c-d)/y,this._x=(r+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+_-a-h);this._w=(u-r)/y,this._x=(c+d)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,r=e._y,c=e._z,u=e._w,h=n._x,p=n._y,d=n._z,g=n._w;return this._x=a*g+u*h+r*d-c*p,this._y=r*g+u*p+c*h-a*d,this._z=c*g+u*d+a*p-r*h,this._w=u*g-a*h-r*p-c*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const a=this._x,r=this._y,c=this._z,u=this._w;let h=u*e._w+a*e._x+r*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=a,this._y=r,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const y=1-n;return this._w=y*u+n*this._w,this._x=y*a+n*this._x,this._y=y*r+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const d=Math.sqrt(p),g=Math.atan2(d,h),_=Math.sin((1-n)*g)/d,v=Math.sin(n*g)/d;return this._w=u*_+this._w*v,this._x=a*_+this._x*v,this._y=r*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,a=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(x0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(x0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*r,this.y=c[1]*n+c[4]*a+c[7]*r,this.z=c[2]*n+c[5]*a+c[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*r+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*r+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*r+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*r+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,r=this.z,c=e.x,u=e.y,h=e.z,p=e.w,d=2*(u*r-h*a),g=2*(h*n-c*r),_=2*(c*a-u*n);return this.x=n+p*d+u*_-h*g,this.y=a+p*g+h*d-c*_,this.z=r+p*_+c*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*r,this.y=c[1]*n+c[5]*a+c[9]*r,this.z=c[2]*n+c[6]*a+c[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,r=e.y,c=e.z,u=n.x,h=n.y,p=n.z;return this.x=r*p-c*h,this.y=c*u-a*p,this.z=a*h-r*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Uh.copy(this).projectOnVector(e),this.sub(Uh)}reflect(e){return this.sub(Uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(xt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return n*n+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const r=Math.sin(n)*e;return this.x=r*Math.sin(a),this.y=Math.cos(n)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uh=new q,x0=new ns;class lt{constructor(e,n,a,r,c,u,h,p,d){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,h,p,d)}set(e,n,a,r,c,u,h,p,d){const g=this.elements;return g[0]=e,g[1]=r,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],h=a[3],p=a[6],d=a[1],g=a[4],_=a[7],v=a[2],y=a[5],E=a[8],T=r[0],S=r[3],x=r[6],P=r[1],L=r[4],w=r[7],O=r[2],G=r[5],z=r[8];return c[0]=u*T+h*P+p*O,c[3]=u*S+h*L+p*G,c[6]=u*x+h*w+p*z,c[1]=d*T+g*P+_*O,c[4]=d*S+g*L+_*G,c[7]=d*x+g*w+_*z,c[2]=v*T+y*P+E*O,c[5]=v*S+y*L+E*G,c[8]=v*x+y*w+E*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8];return n*u*g-n*h*d-a*c*g+a*h*p+r*c*d-r*u*p}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8],_=g*u-h*d,v=h*p-g*c,y=d*c-u*p,E=n*_+a*v+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(r*d-g*a)*T,e[2]=(h*a-r*u)*T,e[3]=v*T,e[4]=(g*n-r*p)*T,e[5]=(r*c-h*n)*T,e[6]=y*T,e[7]=(a*p-d*n)*T,e[8]=(u*n-a*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,r,c,u,h){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*h)+u+e,-r*d,r*p,-r*(-d*u+p*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(Lh.makeScale(e,n)),this}rotate(e){return this.premultiply(Lh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lh=new lt;function Xv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function dl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function LM(){const o=dl("canvas");return o.style.display="block",o}const y0={};function Pr(o){o in y0||(y0[o]=!0,console.warn(o))}function NM(o,e,n){return new Promise(function(a,r){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const S0=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),M0=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OM(){const o={enabled:!0,workingColorSpace:Hn,spaces:{},convert:function(r,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ht&&(r.r=_a(r.r),r.g=_a(r.g),r.b=_a(r.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[c].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ht&&(r.r=Ir(r.r),r.g=Ir(r.g),r.b=Ir(r.b))),r},workingToColorSpace:function(r,c){return this.convert(r,this.workingColorSpace,c)},colorSpaceToWorking:function(r,c){return this.convert(r,c,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qa?fu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,c=this.workingColorSpace){return r.fromArray(this.spaces[c].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,c,u){return r.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,c){return Pr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,c)},toWorkingColorSpace:function(r,c){return Pr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Hn]:{primaries:e,whitePoint:a,transfer:fu,toXYZ:S0,fromXYZ:M0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:a,transfer:Ht,toXYZ:S0,fromXYZ:M0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),o}const Et=OM();function _a(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ir(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let _r;class PM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{_r===void 0&&(_r=dl("canvas")),_r.width=e.width,_r.height=e.height;const r=_r.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=_r}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),c=r.data;for(let u=0;u<c.length;u++)c[u]=_a(c[u]/255)*255;return a.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(_a(n[a]/255)*255):n[a]=_a(n[a]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IM=0;class gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let c;if(Array.isArray(r)){c=[];for(let u=0,h=r.length;u<h;u++)r[u].isDataTexture?c.push(Nh(r[u].image)):c.push(Nh(r[u]))}else c=Nh(r);a.url=c}return n||(e.images[this.uuid]=a),a}}function Nh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?PM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BM=0;const Oh=new q;class Sn extends Yr{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,a=Ja,r=Ja,c=ii,u=ma,h=mi,p=Vi,d=Sn.DEFAULT_ANISOTROPY,g=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Ri(),this.name="",this.source=new gp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Oh).x}get height(){return this.source.getSize(Oh).y}get depth(){return this.source.getSize(Oh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case Ja:e.x=e.x<0?0:1;break;case uu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case Ja:e.y=e.y<0?0:1;break;case uu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Lv;Sn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,a=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,r){return this.x=e,this.y=n,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,r,c;const p=e.elements,d=p[0],g=p[4],_=p[8],v=p[1],y=p[5],E=p[9],T=p[2],S=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(d+1)/2,w=(y+1)/2,O=(x+1)/2,G=(g+v)/4,z=(_+T)/4,X=(E+S)/4;return L>w&&L>O?L<.01?(a=0,r=.707106781,c=.707106781):(a=Math.sqrt(L),r=G/a,c=z/a):w>O?w<.01?(a=.707106781,r=0,c=.707106781):(r=Math.sqrt(w),a=G/r,c=X/r):O<.01?(a=.707106781,r=.707106781,c=0):(c=Math.sqrt(O),a=z/c,r=X/c),this.set(a,r,c,n),this}let P=Math.sqrt((S-E)*(S-E)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(S-E)/P,this.y=(_-T)/P,this.z=(v-g)/P,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this.w=xt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this.w=xt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FM extends Yr{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:a.depth},c=new Sn(r);this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let r=0,c=this.textures.length;r<c;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new gp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends FM{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Wv extends Sn{constructor(e=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zM extends Sn{constructor(e=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xa{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Mi):Mi.fromBufferAttribute(c,u),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ac.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Ac.copy(a.boundingBox)),Ac.applyMatrix4(e.matrixWorld),this.union(Ac)}const r=e.children;for(let c=0,u=r.length;c<u;c++)this.expandByObject(r[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Rc.subVectors(this.max,jo),vr.subVectors(e.a,jo),xr.subVectors(e.b,jo),yr.subVectors(e.c,jo),Xa.subVectors(xr,vr),Wa.subVectors(yr,xr),ys.subVectors(vr,yr);let n=[0,-Xa.z,Xa.y,0,-Wa.z,Wa.y,0,-ys.z,ys.y,Xa.z,0,-Xa.x,Wa.z,0,-Wa.x,ys.z,0,-ys.x,-Xa.y,Xa.x,0,-Wa.y,Wa.x,0,-ys.y,ys.x,0];return!Ph(n,vr,xr,yr,Rc)||(n=[1,0,0,0,1,0,0,0,1],!Ph(n,vr,xr,yr,Rc))?!1:(wc.crossVectors(Xa,Wa),n=[wc.x,wc.y,wc.z],Ph(n,vr,xr,yr,Rc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oa=[new q,new q,new q,new q,new q,new q,new q,new q],Mi=new q,Ac=new xa,vr=new q,xr=new q,yr=new q,Xa=new q,Wa=new q,ys=new q,jo=new q,Rc=new q,wc=new q,Ss=new q;function Ph(o,e,n,a,r){for(let c=0,u=o.length-3;c<=u;c+=3){Ss.fromArray(o,c);const h=r.x*Math.abs(Ss.x)+r.y*Math.abs(Ss.y)+r.z*Math.abs(Ss.z),p=e.dot(Ss),d=n.dot(Ss),g=a.dot(Ss);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const HM=new xa,Ko=new q,Ih=new q;class Xi{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):HM.setFromPoints(e).getCenter(a);let r=0;for(let c=0,u=e.length;c<u;c++)r=Math.max(r,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const n=Ko.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(Ko,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(Ih)),this.expandByPoint(Ko.copy(e.center).sub(Ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const la=new q,Bh=new q,Cc=new q,qa=new q,Fh=new q,Dc=new q,zh=new q;class gu{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,la)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=la.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(la.copy(this.origin).addScaledVector(this.direction,n),la.distanceToSquared(e))}distanceSqToSegment(e,n,a,r){Bh.copy(e).add(n).multiplyScalar(.5),Cc.copy(n).sub(e).normalize(),qa.copy(this.origin).sub(Bh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Cc),h=qa.dot(this.direction),p=-qa.dot(Cc),d=qa.lengthSq(),g=Math.abs(1-u*u);let _,v,y,E;if(g>0)if(_=u*p-h,v=u*h-p,E=c*g,_>=0)if(v>=-E)if(v<=E){const T=1/g;_*=T,v*=T,y=_*(_+u*v+2*h)+v*(u*_+v+2*p)+d}else v=c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*p)+d;else v=-c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*p)+d;else v<=-E?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-p),c),y=-_*_+v*(v+2*p)+d):v<=E?(_=0,v=Math.min(Math.max(-c,-p),c),y=v*(v+2*p)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-p),c),y=-_*_+v*(v+2*p)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Bh).addScaledVector(Cc,v),y}intersectSphere(e,n){la.subVectors(e.center,this.origin);const a=la.dot(this.direction),r=la.dot(la)-a*a,c=e.radius*e.radius;if(r>c)return null;const u=Math.sqrt(c-r),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,r,c,u,h,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(a=(e.min.x-v.x)*d,r=(e.max.x-v.x)*d):(a=(e.max.x-v.x)*d,r=(e.min.x-v.x)*d),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),a>u||c>r||((c>a||isNaN(a))&&(a=c),(u<r||isNaN(r))&&(r=u),_>=0?(h=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),a>p||h>r)||((h>a||a!==a)&&(a=h),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(e){return this.intersectBox(e,la)!==null}intersectTriangle(e,n,a,r,c){Fh.subVectors(n,e),Dc.subVectors(a,e),zh.crossVectors(Fh,Dc);let u=this.direction.dot(zh),h;if(u>0){if(r)return null;h=1}else if(u<0)h=-1,u=-u;else return null;qa.subVectors(this.origin,e);const p=h*this.direction.dot(Dc.crossVectors(qa,Dc));if(p<0)return null;const d=h*this.direction.dot(Fh.cross(qa));if(d<0||p+d>u)return null;const g=-h*qa.dot(zh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,a,r,c,u,h,p,d,g,_,v,y,E,T,S){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,h,p,d,g,_,v,y,E,T,S)}set(e,n,a,r,c,u,h,p,d,g,_,v,y,E,T,S){const x=this.elements;return x[0]=e,x[4]=n,x[8]=a,x[12]=r,x[1]=c,x[5]=u,x[9]=h,x[13]=p,x[2]=d,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,r=1/Sr.setFromMatrixColumn(e,0).length(),c=1/Sr.setFromMatrixColumn(e,1).length(),u=1/Sr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,r=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(r),d=Math.sin(r),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,y=u*_,E=h*g,T=h*_;n[0]=p*g,n[4]=-p*_,n[8]=d,n[1]=y+E*d,n[5]=v-T*d,n[9]=-h*p,n[2]=T-v*d,n[6]=E+y*d,n[10]=u*p}else if(e.order==="YXZ"){const v=p*g,y=p*_,E=d*g,T=d*_;n[0]=v+T*h,n[4]=E*h-y,n[8]=u*d,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=y*h-E,n[6]=T+v*h,n[10]=u*p}else if(e.order==="ZXY"){const v=p*g,y=p*_,E=d*g,T=d*_;n[0]=v-T*h,n[4]=-u*_,n[8]=E+y*h,n[1]=y+E*h,n[5]=u*g,n[9]=T-v*h,n[2]=-u*d,n[6]=h,n[10]=u*p}else if(e.order==="ZYX"){const v=u*g,y=u*_,E=h*g,T=h*_;n[0]=p*g,n[4]=E*d-y,n[8]=v*d+T,n[1]=p*_,n[5]=T*d+v,n[9]=y*d-E,n[2]=-d,n[6]=h*p,n[10]=u*p}else if(e.order==="YZX"){const v=u*p,y=u*d,E=h*p,T=h*d;n[0]=p*g,n[4]=T-v*_,n[8]=E*_+y,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-d*g,n[6]=y*_+E,n[10]=v-T*_}else if(e.order==="XZY"){const v=u*p,y=u*d,E=h*p,T=h*d;n[0]=p*g,n[4]=-_,n[8]=d*g,n[1]=v*_+T,n[5]=u*g,n[9]=y*_-E,n[2]=E*_-y,n[6]=h*g,n[10]=T*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GM,e,VM)}lookAt(e,n,a){const r=this.elements;return ti.subVectors(e,n),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ya.crossVectors(a,ti),Ya.lengthSq()===0&&(Math.abs(a.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ya.crossVectors(a,ti)),Ya.normalize(),Uc.crossVectors(ti,Ya),r[0]=Ya.x,r[4]=Uc.x,r[8]=ti.x,r[1]=Ya.y,r[5]=Uc.y,r[9]=ti.y,r[2]=Ya.z,r[6]=Uc.z,r[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],h=a[4],p=a[8],d=a[12],g=a[1],_=a[5],v=a[9],y=a[13],E=a[2],T=a[6],S=a[10],x=a[14],P=a[3],L=a[7],w=a[11],O=a[15],G=r[0],z=r[4],X=r[8],C=r[12],D=r[1],F=r[5],re=r[9],oe=r[13],ue=r[2],he=r[6],B=r[10],Z=r[14],j=r[3],xe=r[7],U=r[11],$=r[15];return c[0]=u*G+h*D+p*ue+d*j,c[4]=u*z+h*F+p*he+d*xe,c[8]=u*X+h*re+p*B+d*U,c[12]=u*C+h*oe+p*Z+d*$,c[1]=g*G+_*D+v*ue+y*j,c[5]=g*z+_*F+v*he+y*xe,c[9]=g*X+_*re+v*B+y*U,c[13]=g*C+_*oe+v*Z+y*$,c[2]=E*G+T*D+S*ue+x*j,c[6]=E*z+T*F+S*he+x*xe,c[10]=E*X+T*re+S*B+x*U,c[14]=E*C+T*oe+S*Z+x*$,c[3]=P*G+L*D+w*ue+O*j,c[7]=P*z+L*F+w*he+O*xe,c[11]=P*X+L*re+w*B+O*U,c[15]=P*C+L*oe+w*Z+O*$,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],r=e[8],c=e[12],u=e[1],h=e[5],p=e[9],d=e[13],g=e[2],_=e[6],v=e[10],y=e[14],E=e[3],T=e[7],S=e[11],x=e[15];return E*(+c*p*_-r*d*_-c*h*v+a*d*v+r*h*y-a*p*y)+T*(+n*p*y-n*d*v+c*u*v-r*u*y+r*d*g-c*p*g)+S*(+n*d*_-n*h*y-c*u*_+a*u*y+c*h*g-a*d*g)+x*(-r*h*g-n*p*_+n*h*v+r*u*_-a*u*v+a*p*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8],_=e[9],v=e[10],y=e[11],E=e[12],T=e[13],S=e[14],x=e[15],P=_*S*d-T*v*d+T*p*y-h*S*y-_*p*x+h*v*x,L=E*v*d-g*S*d-E*p*y+u*S*y+g*p*x-u*v*x,w=g*T*d-E*_*d+E*h*y-u*T*y-g*h*x+u*_*x,O=E*_*p-g*T*p-E*h*v+u*T*v+g*h*S-u*_*S,G=n*P+a*L+r*w+c*O;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return e[0]=P*z,e[1]=(T*v*c-_*S*c-T*r*y+a*S*y+_*r*x-a*v*x)*z,e[2]=(h*S*c-T*p*c+T*r*d-a*S*d-h*r*x+a*p*x)*z,e[3]=(_*p*c-h*v*c-_*r*d+a*v*d+h*r*y-a*p*y)*z,e[4]=L*z,e[5]=(g*S*c-E*v*c+E*r*y-n*S*y-g*r*x+n*v*x)*z,e[6]=(E*p*c-u*S*c-E*r*d+n*S*d+u*r*x-n*p*x)*z,e[7]=(u*v*c-g*p*c+g*r*d-n*v*d-u*r*y+n*p*y)*z,e[8]=w*z,e[9]=(E*_*c-g*T*c-E*a*y+n*T*y+g*a*x-n*_*x)*z,e[10]=(u*T*c-E*h*c+E*a*d-n*T*d-u*a*x+n*h*x)*z,e[11]=(g*h*c-u*_*c-g*a*d+n*_*d+u*a*y-n*h*y)*z,e[12]=O*z,e[13]=(g*T*r-E*_*r+E*a*v-n*T*v-g*a*S+n*_*S)*z,e[14]=(E*h*r-u*T*r-E*a*p+n*T*p+u*a*S-n*h*S)*z,e[15]=(u*_*r-g*h*r+g*a*p-n*_*p-u*a*v+n*h*v)*z,this}scale(e){const n=this.elements,a=e.x,r=e.y,c=e.z;return n[0]*=a,n[4]*=r,n[8]*=c,n[1]*=a,n[5]*=r,n[9]*=c,n[2]*=a,n[6]*=r,n[10]*=c,n[3]*=a,n[7]*=r,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),r=Math.sin(n),c=1-a,u=e.x,h=e.y,p=e.z,d=c*u,g=c*h;return this.set(d*u+a,d*h-r*p,d*p+r*h,0,d*h+r*p,g*h+a,g*p-r*u,0,d*p-r*h,g*p+r*u,c*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,r,c,u){return this.set(1,a,c,0,e,1,u,0,n,r,1,0,0,0,0,1),this}compose(e,n,a){const r=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,d=c+c,g=u+u,_=h+h,v=c*d,y=c*g,E=c*_,T=u*g,S=u*_,x=h*_,P=p*d,L=p*g,w=p*_,O=a.x,G=a.y,z=a.z;return r[0]=(1-(T+x))*O,r[1]=(y+w)*O,r[2]=(E-L)*O,r[3]=0,r[4]=(y-w)*G,r[5]=(1-(v+x))*G,r[6]=(S+P)*G,r[7]=0,r[8]=(E+L)*z,r[9]=(S-P)*z,r[10]=(1-(v+T))*z,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,a){const r=this.elements;let c=Sr.set(r[0],r[1],r[2]).length();const u=Sr.set(r[4],r[5],r[6]).length(),h=Sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(c=-c),e.x=r[12],e.y=r[13],e.z=r[14],Ei.copy(this);const d=1/c,g=1/u,_=1/h;return Ei.elements[0]*=d,Ei.elements[1]*=d,Ei.elements[2]*=d,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=_,Ei.elements[9]*=_,Ei.elements[10]*=_,n.setFromRotationMatrix(Ei),a.x=c,a.y=u,a.z=h,this}makePerspective(e,n,a,r,c,u,h=zi,p=!1){const d=this.elements,g=2*c/(n-e),_=2*c/(a-r),v=(n+e)/(n-e),y=(a+r)/(a-r);let E,T;if(p)E=c/(u-c),T=u*c/(u-c);else if(h===zi)E=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(h===hu)E=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,r,c,u,h=zi,p=!1){const d=this.elements,g=2/(n-e),_=2/(a-r),v=-(n+e)/(n-e),y=-(a+r)/(a-r);let E,T;if(p)E=1/(u-c),T=u/(u-c);else if(h===zi)E=-2/(u-c),T=-(u+c)/(u-c);else if(h===hu)E=-1/(u-c),T=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Sr=new q,Ei=new ht,GM=new q(0,0,0),VM=new q(1,1,1),Ya=new q,Uc=new q,ti=new q,E0=new ht,T0=new ns;class ki{constructor(e=0,n=0,a=0,r=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,r=this._order){return this._x=e,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const r=e.elements,c=r[0],u=r[4],h=r[8],p=r[1],d=r[5],g=r[9],_=r[2],v=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return E0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(E0,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return T0.setFromEuler(this),this.setFromQuaternion(T0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class qv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kM=0;const b0=new q,Mr=new ns,ca=new ht,Lc=new q,Zo=new q,XM=new q,WM=new ns,A0=new q(1,0,0),R0=new q(0,1,0),w0=new q(0,0,1),C0={type:"added"},qM={type:"removed"},Er={type:"childadded",child:null},Hh={type:"childremoved",child:null};class Jt extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new q,n=new ki,a=new ns,r=new q(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new lt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Mr.setFromAxisAngle(e,n),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,n){return Mr.setFromAxisAngle(e,n),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(A0,e)}rotateY(e){return this.rotateOnAxis(R0,e)}rotateZ(e){return this.rotateOnAxis(w0,e)}translateOnAxis(e,n){return b0.copy(e).applyQuaternion(this.quaternion),this.position.add(b0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(A0,e)}translateY(e){return this.translateOnAxis(R0,e)}translateZ(e){return this.translateOnAxis(w0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Lc.copy(e):Lc.set(e,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Zo,Lc,this.up):ca.lookAt(Lc,Zo,this.up),this.quaternion.setFromRotationMatrix(ca),r&&(ca.extractRotation(r.matrixWorld),Mr.setFromRotationMatrix(ca),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C0),Er.child=e,this.dispatchEvent(Er),Er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(qM),Hh.child=e,this.dispatchEvent(Hh),Hh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C0),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,XM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,WM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(h=>({...h})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(e.materials,this.material[p]));r.material=h}else r.material=c(e.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];r.animations.push(c(e.animations,p))}}if(n){const h=u(e.geometries),p=u(e.materials),d=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),y=u(e.animations),E=u(e.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=r,a;function u(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new q(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new q,ua=new q,Gh=new q,fa=new q,Tr=new q,br=new q,D0=new q,Vh=new q,kh=new q,Xh=new q,Wh=new Ct,qh=new Ct,Yh=new Ct;class pi{constructor(e=new q,n=new q,a=new q){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,r){r.subVectors(a,n),Ti.subVectors(e,n),r.cross(Ti);const c=r.lengthSq();return c>0?r.multiplyScalar(1/Math.sqrt(c)):r.set(0,0,0)}static getBarycoord(e,n,a,r,c){Ti.subVectors(r,n),ua.subVectors(a,n),Gh.subVectors(e,n);const u=Ti.dot(Ti),h=Ti.dot(ua),p=Ti.dot(Gh),d=ua.dot(ua),g=ua.dot(Gh),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(d*p-h*g)*v,E=(u*g-h*p)*v;return c.set(1-y-E,E,y)}static containsPoint(e,n,a,r){return this.getBarycoord(e,n,a,r,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(e,n,a,r,c,u,h,p){return this.getBarycoord(e,n,a,r,fa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,fa.x),p.addScaledVector(u,fa.y),p.addScaledVector(h,fa.z),p)}static getInterpolatedAttribute(e,n,a,r,c,u){return Wh.setScalar(0),qh.setScalar(0),Yh.setScalar(0),Wh.fromBufferAttribute(e,n),qh.fromBufferAttribute(e,a),Yh.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(Wh,c.x),u.addScaledVector(qh,c.y),u.addScaledVector(Yh,c.z),u}static isFrontFacing(e,n,a,r){return Ti.subVectors(a,n),ua.subVectors(e,n),Ti.cross(ua).dot(r)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,r){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,a,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),Ti.cross(ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,r,c){return pi.getInterpolation(e,this.a,this.b,this.c,n,a,r,c)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,r=this.b,c=this.c;let u,h;Tr.subVectors(r,a),br.subVectors(c,a),Vh.subVectors(e,a);const p=Tr.dot(Vh),d=br.dot(Vh);if(p<=0&&d<=0)return n.copy(a);kh.subVectors(e,r);const g=Tr.dot(kh),_=br.dot(kh);if(g>=0&&_<=g)return n.copy(r);const v=p*_-g*d;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(Tr,u);Xh.subVectors(e,c);const y=Tr.dot(Xh),E=br.dot(Xh);if(E>=0&&y<=E)return n.copy(c);const T=y*d-p*E;if(T<=0&&d>=0&&E<=0)return h=d/(d-E),n.copy(a).addScaledVector(br,h);const S=g*E-y*_;if(S<=0&&_-g>=0&&y-E>=0)return D0.subVectors(c,r),h=(_-g)/(_-g+(y-E)),n.copy(r).addScaledVector(D0,h);const x=1/(S+T+v);return u=T*x,h=v*x,n.copy(a).addScaledVector(Tr,u).addScaledVector(br,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function jh(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class st{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,n),this}setRGB(e,n,a,r=Et.workingColorSpace){return this.r=e,this.g=n,this.b=a,Et.colorSpaceToWorking(this,r),this}setHSL(e,n,a,r=Et.workingColorSpace){if(e=mp(e,1),n=xt(n,0,1),a=xt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=jh(u,c,e+1/3),this.g=jh(u,c,e),this.b=jh(u,c,e-1/3)}return Et.colorSpaceToWorking(this,r),this}setStyle(e,n=An){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=r[1],h=r[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=r[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=An){const a=Yv[e.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Et.workingToColorSpace(Ln.copy(this),e),Math.round(xt(Ln.r*255,0,255))*65536+Math.round(xt(Ln.g*255,0,255))*256+Math.round(xt(Ln.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.workingToColorSpace(Ln.copy(this),n);const a=Ln.r,r=Ln.g,c=Ln.b,u=Math.max(a,r,c),h=Math.min(a,r,c);let p,d;const g=(h+u)/2;if(h===u)p=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case a:p=(r-c)/_+(r<c?6:0);break;case r:p=(c-a)/_+2;break;case c:p=(a-r)/_+4;break}p/=6}return e.h=p,e.s=d,e.l=g,e}getRGB(e,n=Et.workingColorSpace){return Et.workingToColorSpace(Ln.copy(this),n),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=An){Et.workingToColorSpace(Ln.copy(this),e);const n=Ln.r,a=Ln.g,r=Ln.b;return e!==An?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,n,a){return this.getHSL(ja),this.setHSL(ja.h+e,ja.s+n,ja.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(ja),e.getHSL(Nc);const a=sl(ja.h,Nc.h,n),r=sl(ja.s,Nc.s,n),c=sl(ja.l,Nc.l,n);return this.setHSL(a,r,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,r=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*r,this.g=c[1]*n+c[4]*a+c[7]*r,this.b=c[2]*n+c[5]*a+c[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new st;st.NAMES=Yv;let YM=0;class Hi extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Nr,this.side=va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(a.blending=this.blending),this.side!==va&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==md&&(a.blendSrc=this.blendSrc),this.blendDst!==gd&&(a.blendDst=this.blendDst),this.blendEquation!==Cs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==g0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=r(e.textures),u=r(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let c=0;c!==r;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Us extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new q,Oc=new St;let jM=0;class Nn{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=$d,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let r=0,c=this.itemSize;r<c;r++)this.array[e+r]=n.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Oc.fromBufferAttribute(this,n),Oc.applyMatrix3(e),this.setXY(n,Oc.x,Oc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=bi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Ot(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),a=Ot(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,r){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),a=Ot(a,this.array),r=Ot(r,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),a=Ot(a,this.array),r=Ot(r,this.array),c=Ot(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$d&&(e.usage=this.usage),e}}class jv extends Nn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class Kv extends Nn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Gi extends Nn{constructor(e,n,a){super(new Float32Array(e),n,a)}}let KM=0;const hi=new ht,Kh=new Jt,Ar=new q,ni=new xa,Qo=new xa,yn=new q;class gi extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xv(e)?Kv:jv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new lt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,n,a){return hi.makeTranslation(e,n,a),this.applyMatrix4(hi),this}scale(e,n,a){return hi.makeScale(e,n,a),this.applyMatrix4(hi),this}lookAt(e){return Kh.lookAt(e),Kh.updateMatrix(),this.applyMatrix4(Kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,c=e.length;r<c;r++){const u=e[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Gi(a,3))}else{const a=Math.min(e.length,n.count);for(let r=0;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){const c=n[a];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const a=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Qo.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ni.min,Qo.min),ni.expandByPoint(yn),yn.addVectors(ni.max,Qo.max),ni.expandByPoint(yn)):(ni.expandByPoint(Qo.min),ni.expandByPoint(Qo.max))}ni.getCenter(a);let r=0;for(let c=0,u=e.count;c<u;c++)yn.fromBufferAttribute(e,c),r=Math.max(r,a.distanceToSquared(yn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)yn.fromBufferAttribute(h,d),p&&(Ar.fromBufferAttribute(e,d),yn.add(Ar)),r=Math.max(r,a.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let X=0;X<a.count;X++)h[X]=new q,p[X]=new q;const d=new q,g=new q,_=new q,v=new St,y=new St,E=new St,T=new q,S=new q;function x(X,C,D){d.fromBufferAttribute(a,X),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,D),v.fromBufferAttribute(c,X),y.fromBufferAttribute(c,C),E.fromBufferAttribute(c,D),g.sub(d),_.sub(d),y.sub(v),E.sub(v);const F=1/(y.x*E.y-E.x*y.y);isFinite(F)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(F),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(F),h[X].add(T),h[C].add(T),h[D].add(T),p[X].add(S),p[C].add(S),p[D].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let X=0,C=P.length;X<C;++X){const D=P[X],F=D.start,re=D.count;for(let oe=F,ue=F+re;oe<ue;oe+=3)x(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const L=new q,w=new q,O=new q,G=new q;function z(X){O.fromBufferAttribute(r,X),G.copy(O);const C=h[X];L.copy(C),L.sub(O.multiplyScalar(O.dot(C))).normalize(),w.crossVectors(G,C);const F=w.dot(p[X])<0?-1:1;u.setXYZW(X,L.x,L.y,L.z,F)}for(let X=0,C=P.length;X<C;++X){const D=P[X],F=D.start,re=D.count;for(let oe=F,ue=F+re;oe<ue;oe+=3)z(e.getX(oe+0)),z(e.getX(oe+1)),z(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Nn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const r=new q,c=new q,u=new q,h=new q,p=new q,d=new q,g=new q,_=new q;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);r.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(r,c),g.cross(_),h.fromBufferAttribute(a,E),p.fromBufferAttribute(a,T),d.fromBufferAttribute(a,S),h.add(g),p.add(g),d.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=n.count;v<y;v+=3)r.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(r,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)yn.fromBufferAttribute(e,n),yn.normalize(),e.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function e(h,p){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(p.length*g);let y=0,E=0;for(let T=0,S=p.length;T<S;T++){h.isInterleavedBufferAttribute?y=p[T]*h.data.stride+h.offset:y=p[T]*g;for(let x=0;x<g;x++)v[E++]=d[y++]}return new Nn(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gi,a=this.index.array,r=this.attributes;for(const h in r){const p=r[h],d=e(p,a);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],y=e(v,a);p.push(y)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];e.data.attributes[p]=d.toJSON(e.data)}const r={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,v=d.length;_<v;_++){const y=d[_];g.push(y.toJSON(e.data))}g.length>0&&(r[p]=g,c=!0)}c&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const r=e.attributes;for(const d in r){const g=r[d];this.setAttribute(d,g.clone(n))}const c=e.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const U0=new ht,Ms=new gu,Pc=new Xi,L0=new q,Ic=new q,Bc=new q,Fc=new q,Zh=new q,zc=new q,N0=new q,Hc=new q;class ai extends Jt{constructor(e=new gi,n=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,r=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,e);const h=this.morphTargetInfluences;if(c&&h){zc.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=h[p],_=c[p];g!==0&&(Zh.fromBufferAttribute(_,e),u?zc.addScaledVector(Zh,g):zc.addScaledVector(Zh.sub(n),g))}n.add(zc)}return n}raycast(e,n){const a=this.geometry,r=this.material,c=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Pc.copy(a.boundingSphere),Pc.applyMatrix4(c),Ms.copy(e.ray).recast(e.near),!(Pc.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Pc,L0)===null||Ms.origin.distanceToSquared(L0)>(e.far-e.near)**2))&&(U0.copy(c).invert(),Ms.copy(e.ray).applyMatrix4(U0),!(a.boundingBox!==null&&Ms.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Ms)))}_computeIntersections(e,n,a){let r;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const S=v[E],x=u[S.materialIndex],P=Math.max(S.start,y.start),L=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let w=P,O=L;w<O;w+=3){const G=h.getX(w),z=h.getX(w+1),X=h.getX(w+2);r=Gc(this,x,e,a,d,g,_,G,z,X),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const E=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let S=E,x=T;S<x;S+=3){const P=h.getX(S),L=h.getX(S+1),w=h.getX(S+2);r=Gc(this,u,e,a,d,g,_,P,L,w),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const S=v[E],x=u[S.materialIndex],P=Math.max(S.start,y.start),L=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let w=P,O=L;w<O;w+=3){const G=w,z=w+1,X=w+2;r=Gc(this,x,e,a,d,g,_,G,z,X),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const E=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);for(let S=E,x=T;S<x;S+=3){const P=S,L=S+1,w=S+2;r=Gc(this,u,e,a,d,g,_,P,L,w),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}}}function ZM(o,e,n,a,r,c,u,h){let p;if(e.side===Yn?p=a.intersectTriangle(u,c,r,!0,h):p=a.intersectTriangle(r,c,u,e.side===va,h),p===null)return null;Hc.copy(h),Hc.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(Hc);return d<n.near||d>n.far?null:{distance:d,point:Hc.clone(),object:o}}function Gc(o,e,n,a,r,c,u,h,p,d){o.getVertexPosition(h,Ic),o.getVertexPosition(p,Bc),o.getVertexPosition(d,Fc);const g=ZM(o,e,n,a,Ic,Bc,Fc,N0);if(g){const _=new q;pi.getBarycoord(N0,Ic,Bc,Fc,_),r&&(g.uv=pi.getInterpolatedAttribute(r,h,p,d,_,new St)),c&&(g.uv1=pi.getInterpolatedAttribute(c,h,p,d,_,new St)),u&&(g.normal=pi.getInterpolatedAttribute(u,h,p,d,_,new q),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:d,normal:new q,materialIndex:0};pi.getNormal(Ic,Bc,Fc,v.normal),g.face=v,g.barycoord=_}return g}class ml extends gi{constructor(e=1,n=1,a=1,r=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:r,heightSegments:c,depthSegments:u};const h=this;r=Math.floor(r),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,a,n,e,u,c,0),E("z","y","x",1,-1,a,n,-e,u,c,1),E("x","z","y",1,1,e,a,n,r,u,2),E("x","z","y",1,-1,e,a,-n,r,u,3),E("x","y","z",1,-1,e,n,a,r,c,4),E("x","y","z",-1,-1,e,n,-a,r,c,5),this.setIndex(p),this.setAttribute("position",new Gi(d,3)),this.setAttribute("normal",new Gi(g,3)),this.setAttribute("uv",new Gi(_,2));function E(T,S,x,P,L,w,O,G,z,X,C){const D=w/z,F=O/X,re=w/2,oe=O/2,ue=G/2,he=z+1,B=X+1;let Z=0,j=0;const xe=new q;for(let U=0;U<B;U++){const $=U*F-oe;for(let ve=0;ve<he;ve++){const ye=ve*D-re;xe[T]=ye*P,xe[S]=$*L,xe[x]=ue,d.push(xe.x,xe.y,xe.z),xe[T]=0,xe[S]=0,xe[x]=G>0?1:-1,g.push(xe.x,xe.y,xe.z),_.push(ve/z),_.push(1-U/X),Z+=1}}for(let U=0;U<X;U++)for(let $=0;$<z;$++){const ve=v+$+he*U,ye=v+$+he*(U+1),we=v+($+1)+he*(U+1),ne=v+($+1)+he*U;p.push(ve,ye,ne),p.push(ye,we,ne),j+=6}h.addGroup(y,j,C),y+=j,v+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function kr(o){const e={};for(const n in o){e[n]={};for(const a in o[n]){const r=o[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=r.clone():Array.isArray(r)?e[n][a]=r.slice():e[n][a]=r}}return e}function Fn(o){const e={};for(let n=0;n<o.length;n++){const a=kr(o[n]);for(const r in a)e[r]=a[r]}return e}function QM(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Zv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const JM={clone:kr,merge:Fn};var $M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$M,this.fragmentShader=eE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=QM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Qv extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new q,O0=new St,P0=new St;class qn extends Qv{constructor(e=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z)}getViewSize(e,n){return this.getViewBounds(e,O0,P0),n.subVectors(P0,O0)}setViewOffset(e,n,a,r,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Or*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,c=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*r/p,n-=u.offsetY*a/d,r*=u.width/p,a*=u.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+r,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Rr=-90,wr=1;class tE extends Jt{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(Rr,wr,e,n);r.layers=this.layers,this.add(r);const c=new qn(Rr,wr,e,n);c.layers=this.layers,this.add(c);const u=new qn(Rr,wr,e,n);u.layers=this.layers,this.add(u);const h=new qn(Rr,wr,e,n);h.layers=this.layers,this.add(h);const p=new qn(Rr,wr,e,n);p.layers=this.layers,this.add(p);const d=new qn(Rr,wr,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,r,c,u,h,p]=n;for(const d of n)this.remove(d);if(e===zi)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===hu)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,d,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,r),e.render(n,c),e.setRenderTarget(a,1,r),e.render(n,u),e.setRenderTarget(a,2,r),e.render(n,h),e.setRenderTarget(a,3,r),e.render(n,p),e.setRenderTarget(a,4,r),e.render(n,d),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,r),e.render(n,g),e.setRenderTarget(_,v,y),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class Jv extends Sn{constructor(e=[],n=zr,a,r,c,u,h,p,d,g){super(e,n,a,r,c,u,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nE extends Os{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new Jv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ml(5,5,5),c=new ts({name:"CubemapFromEquirect",uniforms:kr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Yn,blending:$a});c.uniforms.tEquirect.value=n;const u=new ai(r,c),h=n.minFilter;return n.minFilter===ma&&(n.minFilter=ii),new tE(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,r=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,r);e.setRenderTarget(c)}}class Ls extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iE={type:"move"};class Qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let r=null,c=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const T of e.hand.values()){const S=n.getJointPose(T,a),x=this._getHandJoint(d,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;d.inputState.pinching&&v>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(r=n.getPose(e.targetRaySpace,a),r===null&&c!==null&&(r=c),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(iE)))}return h!==null&&(h.visible=r!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Ls;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class aE extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class sE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=$d,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let r=0,c=this.stride;r<c;r++)this.array[e+r]=n.array[a+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new q;class _p{constructor(e,n,a,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)Bn.fromBufferAttribute(this,n),Bn.applyMatrix4(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Bn.fromBufferAttribute(this,n),Bn.applyNormalMatrix(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Bn.fromBufferAttribute(this,n),Bn.transformDirection(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=bi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Ot(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=bi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=bi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=bi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=bi(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ot(n,this.array),a=Ot(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ot(n,this.array),a=Ot(a,this.array),r=Ot(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ot(n,this.array),a=Ot(a,this.array),r=Ot(r,this.array),c=Ot(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this.data.array[e+3]=c,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return new Nn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _p(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const I0=new q,B0=new Ct,F0=new Ct,rE=new q,z0=new ht,Vc=new q,Jh=new Xi,H0=new ht,$h=new gu;class oE extends ai{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=h0,this.bindMatrix=new ht,this.bindMatrixInverse=new ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xa),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,Vc),this.boundingBox.expandByPoint(Vc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xi),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,Vc),this.boundingSphere.expandByPoint(Vc)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,r=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jh.copy(this.boundingSphere),Jh.applyMatrix4(r),e.ray.intersectsSphere(Jh)!==!1&&(H0.copy(r).invert(),$h.copy(e.ray).applyMatrix4(H0),!(this.boundingBox!==null&&$h.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,$h)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ct,n=this.geometry.attributes.skinWeight;for(let a=0,r=n.count;a<r;a++){e.fromBufferAttribute(n,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===h0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===iM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,r=this.geometry;B0.fromBufferAttribute(r.attributes.skinIndex,e),F0.fromBufferAttribute(r.attributes.skinWeight,e),I0.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let c=0;c<4;c++){const u=F0.getComponent(c);if(u!==0){const h=B0.getComponent(c);z0.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),n.addScaledVector(rE.copy(I0).applyMatrix4(z0),u)}}return n.applyMatrix4(this.bindMatrixInverse)}}class $v extends Jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ex extends Sn{constructor(e=null,n=1,a=1,r,c,u,h,p,d=zn,g=zn,_,v){super(null,u,h,p,d,g,r,c,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const G0=new ht,lE=new ht;class vp{constructor(e=[],n=[]){this.uuid=Ri(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,r=this.bones.length;a<r;a++)this.boneInverses.push(new ht)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new ht;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,r=this.boneTexture;for(let c=0,u=e.length;c<u;c++){const h=e[c]?e[c].matrixWorld:lE;G0.multiplyMatrices(h,n[c]),G0.toArray(a,c*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new vp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new ex(n,e,e,mi,Ai);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,r=e.bones.length;a<r;a++){const c=e.bones[a];let u=n[c];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",c),u=new $v),this.bones.push(u),this.boneInverses.push(new ht().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let r=0,c=n.length;r<c;r++){const u=n[r];e.bones.push(u.uuid);const h=a[r];e.boneInverses.push(h.toArray())}return e}}class tp extends Nn{constructor(e,n,a,r=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cr=new ht,V0=new ht,kc=[],k0=new xa,cE=new ht,Jo=new ai,$o=new Xi;class uE extends ai{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new tp(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<a;r++)this.setMatrixAt(r,cE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new xa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Cr),k0.copy(e.boundingBox).applyMatrix4(Cr),this.boundingBox.union(k0)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Cr),$o.copy(e.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union($o)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,r=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let h=0;h<a.length;h++)a[h]=r[u+h]}raycast(e,n){const a=this.matrixWorld,r=this.count;if(Jo.geometry=this.geometry,Jo.material=this.material,Jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(a),e.ray.intersectsSphere($o)!==!1))for(let c=0;c<r;c++){this.getMatrixAt(c,Cr),V0.multiplyMatrices(a,Cr),Jo.matrixWorld=V0,Jo.raycast(e,kc);for(let u=0,h=kc.length;u<h;u++){const p=kc[u];p.instanceId=c,p.object=this,n.push(p)}kc.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new tp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const a=n.morphTargetInfluences,r=a.length+1;this.morphTexture===null&&(this.morphTexture=new ex(new Float32Array(r*this.count),r,this.count,fp,Ai));const c=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const h=this.geometry.morphTargetsRelative?1:1-u,p=r*e;c[p]=h,c.set(a,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ed=new q,fE=new q,hE=new lt;class Rs{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,r){return this.normal.set(e,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const r=ed.subVectors(a,n).cross(fE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(ed),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/r;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||hE.getNormalMatrix(e),r=this.coplanarPoint(ed).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new Xi,dE=new St(.5,.5),Xc=new q;class xp{constructor(e=new Rs,n=new Rs,a=new Rs,r=new Rs,c=new Rs,u=new Rs){this.planes=[e,n,a,r,c,u]}set(e,n,a,r,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(r),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=zi,a=!1){const r=this.planes,c=e.elements,u=c[0],h=c[1],p=c[2],d=c[3],g=c[4],_=c[5],v=c[6],y=c[7],E=c[8],T=c[9],S=c[10],x=c[11],P=c[12],L=c[13],w=c[14],O=c[15];if(r[0].setComponents(d-u,y-g,x-E,O-P).normalize(),r[1].setComponents(d+u,y+g,x+E,O+P).normalize(),r[2].setComponents(d+h,y+_,x+T,O+L).normalize(),r[3].setComponents(d-h,y-_,x-T,O-L).normalize(),a)r[4].setComponents(p,v,S,w).normalize(),r[5].setComponents(d-p,y-v,x-S,O-w).normalize();else if(r[4].setComponents(d-p,y-v,x-S,O-w).normalize(),n===zi)r[5].setComponents(d+p,y+v,x+S,O+w).normalize();else if(n===hu)r[5].setComponents(p,v,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const n=dE.distanceTo(e.center);return Es.radius=.7071067811865476+n,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const n=this.planes,a=e.center,r=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(Xc.x=r.normal.x>0?e.max.x:e.min.x,Xc.y=r.normal.y>0?e.max.y:e.min.y,Xc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yp extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const du=new q,pu=new q,X0=new ht,el=new gu,Wc=new Xi,td=new q,W0=new q;class _u extends Jt{constructor(e=new gi,n=new yp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let r=1,c=n.count;r<c;r++)du.fromBufferAttribute(n,r-1),pu.fromBufferAttribute(n,r),a[r]=a[r-1],a[r]+=du.distanceTo(pu);e.setAttribute("lineDistance",new Gi(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Wc.copy(a.boundingSphere),Wc.applyMatrix4(r),Wc.radius+=c,e.ray.intersectsSphere(Wc)===!1)return;X0.copy(r).invert(),el.copy(e.ray).applyMatrix4(X0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,g=a.index,v=a.attributes.position;if(g!==null){const y=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let T=y,S=E-1;T<S;T+=d){const x=g.getX(T),P=g.getX(T+1),L=qc(this,e,el,p,x,P,T);L&&n.push(L)}if(this.isLineLoop){const T=g.getX(E-1),S=g.getX(y),x=qc(this,e,el,p,T,S,E-1);x&&n.push(x)}}else{const y=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let T=y,S=E-1;T<S;T+=d){const x=qc(this,e,el,p,T,T+1,T);x&&n.push(x)}if(this.isLineLoop){const T=qc(this,e,el,p,E-1,y,E-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function qc(o,e,n,a,r,c,u){const h=o.geometry.attributes.position;if(du.fromBufferAttribute(h,r),pu.fromBufferAttribute(h,c),n.distanceSqToSegment(du,pu,td,W0)>a)return;td.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(td);if(!(d<e.near||d>e.far))return{distance:d,point:W0.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const q0=new q,Y0=new q;class pE extends _u{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let r=0,c=n.count;r<c;r+=2)q0.fromBufferAttribute(n,r),Y0.fromBufferAttribute(n,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+q0.distanceTo(Y0);e.setAttribute("lineDistance",new Gi(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mE extends _u{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class tx extends Hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const j0=new ht,np=new gu,Yc=new Xi,jc=new q;class gE extends Jt{constructor(e=new gi,n=new tx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Yc.copy(a.boundingSphere),Yc.applyMatrix4(r),Yc.radius+=c,e.ray.intersectsSphere(Yc)===!1)return;j0.copy(r).invert(),np.copy(e.ray).applyMatrix4(j0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=a.index,_=a.attributes.position;if(d!==null){const v=Math.max(0,u.start),y=Math.min(d.count,u.start+u.count);for(let E=v,T=y;E<T;E++){const S=d.getX(E);jc.fromBufferAttribute(_,S),K0(jc,S,p,r,e,n,this)}}else{const v=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let E=v,T=y;E<T;E++)jc.fromBufferAttribute(_,E),K0(jc,E,p,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function K0(o,e,n,a,r,c,u){const h=np.distanceSqToPoint(o);if(h<n){const p=new q;np.closestPointToPoint(o,p),p.applyMatrix4(a);const d=r.ray.origin.distanceTo(p);if(d<r.near||d>r.far)return;c.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class nx extends Sn{constructor(e,n,a=Ns,r,c,u,h=zn,p=zn,d,g=cl,_=1){if(g!==cl&&g!==ul)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,r,c,u,h,p,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Kc=new q,Zc=new q,nd=new q,Qc=new pi;class _E extends gi{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),c=Math.cos(Or*n),u=e.getIndex(),h=e.getAttribute("position"),p=u?u.count:h.count,d=[0,0,0],g=["a","b","c"],_=new Array(3),v={},y=[];for(let E=0;E<p;E+=3){u?(d[0]=u.getX(E),d[1]=u.getX(E+1),d[2]=u.getX(E+2)):(d[0]=E,d[1]=E+1,d[2]=E+2);const{a:T,b:S,c:x}=Qc;if(T.fromBufferAttribute(h,d[0]),S.fromBufferAttribute(h,d[1]),x.fromBufferAttribute(h,d[2]),Qc.getNormal(nd),_[0]=`${Math.round(T.x*r)},${Math.round(T.y*r)},${Math.round(T.z*r)}`,_[1]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,_[2]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let P=0;P<3;P++){const L=(P+1)%3,w=_[P],O=_[L],G=Qc[g[P]],z=Qc[g[L]],X=`${w}_${O}`,C=`${O}_${w}`;C in v&&v[C]?(nd.dot(v[C].normal)<=c&&(y.push(G.x,G.y,G.z),y.push(z.x,z.y,z.z)),v[C]=null):X in v||(v[X]={index0:d[P],index1:d[L],normal:nd.clone()})}}for(const E in v)if(v[E]){const{index0:T,index1:S}=v[E];Kc.fromBufferAttribute(h,T),Zc.fromBufferAttribute(h,S),y.push(Kc.x,Kc.y,Kc.z),y.push(Zc.x,Zc.y,Zc.z)}this.setAttribute("position",new Gi(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class vu extends gi{constructor(e=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:r};const c=e/2,u=n/2,h=Math.floor(a),p=Math.floor(r),d=h+1,g=p+1,_=e/h,v=n/p,y=[],E=[],T=[],S=[];for(let x=0;x<g;x++){const P=x*v-u;for(let L=0;L<d;L++){const w=L*_-c;E.push(w,-P,0),T.push(0,0,1),S.push(L/h),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let P=0;P<h;P++){const L=P+d*x,w=P+d*(x+1),O=P+1+d*(x+1),G=P+1+d*x;y.push(L,w,G),y.push(w,O,G)}this.setIndex(y),this.setAttribute("position",new Gi(E,3)),this.setAttribute("normal",new Gi(T,3)),this.setAttribute("uv",new Gi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sp extends Hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vv,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wi extends Sp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new St(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vE extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xE extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Jc(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function yE(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function SE(o){function e(r,c){return o[r]-o[c]}const n=o.length,a=new Array(n);for(let r=0;r!==n;++r)a[r]=r;return a.sort(e),a}function Z0(o,e,n){const a=o.length,r=new o.constructor(a);for(let c=0,u=0;u!==a;++c){const h=n[c]*e;for(let p=0;p!==e;++p)r[u++]=o[h+p]}return r}function ix(o,e,n,a){let r=1,c=o[0];for(;c!==void 0&&c[a]===void 0;)c=o[r++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(e.push(c.time),n.push(...u)),c=o[r++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(e.push(c.time),u.toArray(n,n.length)),c=o[r++];while(c!==void 0);else do u=c[a],u!==void 0&&(e.push(c.time),n.push(u)),c=o[r++];while(c!==void 0)}class gl{constructor(e,n,a,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,r=n[a],c=n[a-1];e:{t:{let u;n:{i:if(!(e<r)){for(let h=a+2;;){if(r===void 0){if(e<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===h)break;if(c=r,r=n[++a],e<r)break t}u=n.length;break n}if(!(e>=c)){const h=n[1];e<h&&(a=2,c=h);for(let p=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(r=c,c=n[--a-1],e>=c)break t}u=a,a=0;break n}break e}for(;a<u;){const h=a+u>>>1;e<n[h]?u=h:a=h+1}if(r=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,r)}return this.interpolate_(a,c,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r;for(let u=0;u!==r;++u)n[u]=a[c+u];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ME extends gl{constructor(e,n,a,r){super(e,n,a,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:d0,endingEnd:d0}}intervalChanged_(e,n,a){const r=this.parameterPositions;let c=e-2,u=e+1,h=r[c],p=r[u];if(h===void 0)switch(this.getSettings_().endingStart){case p0:c=e,h=2*n-a;break;case m0:c=r.length-2,h=n+r[c]-r[c+1];break;default:c=e,h=a}if(p===void 0)switch(this.getSettings_().endingEnd){case p0:u=e,p=2*a-n;break;case m0:u=1,p=a+r[1]-r[0];break;default:u=e-1,p=n}const d=(a-n)*.5,g=this.valueSize;this._weightPrev=d/(n-h),this._weightNext=d/(p-a),this._offsetPrev=c*g,this._offsetNext=u*g}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,y=this._weightNext,E=(a-n)/(r-n),T=E*E,S=T*E,x=-v*S+2*v*T-v*E,P=(1+v)*S+(-1.5-2*v)*T+(-.5+v)*E+1,L=(-1-y)*S+(1.5+y)*T+.5*E,w=y*S-y*T;for(let O=0;O!==h;++O)c[O]=x*u[g+O]+P*u[d+O]+L*u[p+O]+w*u[_+O];return c}}class EE extends gl{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=(a-n)/(r-n),_=1-g;for(let v=0;v!==h;++v)c[v]=u[d+v]*_+u[p+v]*g;return c}}class TE extends gl{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class wi{constructor(e,n,a,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jc(n,this.TimeBufferType),this.values=Jc(a,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:Jc(e.times,Array),values:Jc(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(a.interpolation=r)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new TE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new EE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ME(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case fl:n=this.InterpolantFactoryMethodDiscrete;break;case hl:n=this.InterpolantFactoryMethodLinear;break;case Dh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fl;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return Dh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]*=e}return this}trim(e,n){const a=this.times,r=a.length;let c=0,u=r-1;for(;c!==r&&a[c]<e;)++c;for(;u!==-1&&a[u]>n;)--u;if(++u,c!==0||u!==r){c>=u&&(u=Math.max(u,1),c=u-1);const h=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*h,u*h)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,r=this.values,c=a.length;c===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let h=0;h!==c;h++){const p=a[h];if(typeof p=="number"&&isNaN(p)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,p),e=!1;break}if(u!==null&&u>p){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,p,u),e=!1;break}u=p}if(r!==void 0&&yE(r))for(let h=0,p=r.length;h!==p;++h){const d=r[h];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),r=this.getInterpolation()===Dh,c=e.length-1;let u=1;for(let h=1;h<c;++h){let p=!1;const d=e[h],g=e[h+1];if(d!==g&&(h!==1||d!==e[0]))if(r)p=!0;else{const _=h*a,v=_-a,y=_+a;for(let E=0;E!==a;++E){const T=n[_+E];if(T!==n[v+E]||T!==n[y+E]){p=!0;break}}}if(p){if(h!==u){e[u]=e[h];const _=h*a,v=u*a;for(let y=0;y!==a;++y)n[v+y]=n[_+y]}++u}}if(c>0){e[u]=e[c];for(let h=c*a,p=u*a,d=0;d!==a;++d)n[p+d]=n[h+d];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=n.slice(0,u*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,r=new a(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}wi.prototype.ValueTypeName="";wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=hl;class jr extends wi{constructor(e,n,a){super(e,n,a)}}jr.prototype.ValueTypeName="bool";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=fl;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;class ax extends wi{constructor(e,n,a,r){super(e,n,a,r)}}ax.prototype.ValueTypeName="color";class Xr extends wi{constructor(e,n,a,r){super(e,n,a,r)}}Xr.prototype.ValueTypeName="number";class bE extends gl{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=(a-n)/(r-n);let d=e*h;for(let g=d+h;d!==g;d+=4)ns.slerpFlat(c,0,u,d-h,u,d,p);return c}}class Wr extends wi{constructor(e,n,a,r){super(e,n,a,r)}InterpolantFactoryMethodLinear(e){return new bE(this.times,this.values,this.getValueSize(),e)}}Wr.prototype.ValueTypeName="quaternion";Wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Kr extends wi{constructor(e,n,a){super(e,n,a)}}Kr.prototype.ValueTypeName="string";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=fl;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;class qr extends wi{constructor(e,n,a,r){super(e,n,a,r)}}qr.prototype.ValueTypeName="vector";class AE{constructor(e="",n=-1,a=[],r=aM){this.name=e,this.tracks=a,this.duration=n,this.blendMode=r,this.uuid=Ri(),this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,r=1/(e.fps||1);for(let u=0,h=a.length;u!==h;++u)n.push(wE(a[u]).scale(r));const c=new this(e.name,e.duration,n,e.blendMode);return c.uuid=e.uuid,c}static toJSON(e){const n=[],a=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode};for(let c=0,u=a.length;c!==u;++c)n.push(wi.toJSON(a[c]));return r}static CreateFromMorphTargetSequence(e,n,a,r){const c=n.length,u=[];for(let h=0;h<c;h++){let p=[],d=[];p.push((h+c-1)%c,h,(h+1)%c),d.push(0,1,0);const g=SE(p);p=Z0(p,1,g),d=Z0(d,1,g),!r&&p[0]===0&&(p.push(c),d.push(d[0])),u.push(new Xr(".morphTargetInfluences["+n[h].name+"]",p,d).scale(1/a))}return new this(e,-1,u)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const r=e;a=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<a.length;r++)if(a[r].name===n)return a[r];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const r={},c=/^([\w-]*?)([\d]+)$/;for(let h=0,p=e.length;h<p;h++){const d=e[h],g=d.name.match(c);if(g&&g.length>1){const _=g[1];let v=r[_];v||(r[_]=v=[]),v.push(d)}}const u=[];for(const h in r)u.push(this.CreateFromMorphTargetSequence(h,r[h],n,a));return u}static parseAnimation(e,n){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const a=function(_,v,y,E,T){if(y.length!==0){const S=[],x=[];ix(y,S,x,E),S.length!==0&&T.push(new _(v,S,x))}},r=[],c=e.name||"default",u=e.fps||30,h=e.blendMode;let p=e.length||-1;const d=e.hierarchy||[];for(let _=0;_<d.length;_++){const v=d[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let E;for(E=0;E<v.length;E++)if(v[E].morphTargets)for(let T=0;T<v[E].morphTargets.length;T++)y[v[E].morphTargets[T]]=-1;for(const T in y){const S=[],x=[];for(let P=0;P!==v[E].morphTargets.length;++P){const L=v[E];S.push(L.time),x.push(L.morphTarget===T?1:0)}r.push(new Xr(".morphTargetInfluence["+T+"]",S,x))}p=y.length*u}else{const y=".bones["+n[_].name+"]";a(qr,y+".position",v,"pos",r),a(Wr,y+".quaternion",v,"rot",r),a(qr,y+".scale",v,"scl",r)}}return r.length===0?null:new this(c,p,r,h)}resetDuration(){const e=this.tracks;let n=0;for(let a=0,r=e.length;a!==r;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function RE(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xr;case"vector":case"vector2":case"vector3":case"vector4":return qr;case"color":return ax;case"quaternion":return Wr;case"bool":case"boolean":return jr;case"string":return Kr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function wE(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=RE(o.type);if(o.times===void 0){const n=[],a=[];ix(o.keys,n,a,"value"),o.times=n,o.values=a}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const ga={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class CE{constructor(e,n,a){const r=this;let c=!1,u=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this.abortController=new AbortController,this.itemStart=function(g){h++,c===!1&&r.onStart!==void 0&&r.onStart(g,u,h),c=!0},this.itemEnd=function(g){u++,r.onProgress!==void 0&&r.onProgress(g,u,h),u===h&&(c=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=d.length;_<v;_+=2){const y=d[_],E=d[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const DE=new CE;class Zr{constructor(e){this.manager=e!==void 0?e:DE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(r,c){a.load(e,r,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Zr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ha={};class UE extends Error{constructor(e,n){super(e),this.response=n}}class sx extends Zr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=ga.get(`file:${e}`);if(c!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0),c;if(ha[e]!==void 0){ha[e].push({onLoad:n,onProgress:a,onError:r});return}ha[e]=[],ha[e].push({onLoad:n,onProgress:a,onError:r});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,p=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=ha[e],_=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=v?parseInt(v):0,E=y!==0;let T=0;const S=new ReadableStream({start(x){P();function P(){_.read().then(({done:L,value:w})=>{if(L)x.close();else{T+=w.byteLength;const O=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:y});for(let G=0,z=g.length;G<z;G++){const X=g[G];X.onProgress&&X.onProgress(O)}x.enqueue(w),P()}},L=>{x.error(L)})}}});return new Response(S)}else throw new UE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return d.json();default:if(h==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),v=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(v);return d.arrayBuffer().then(E=>y.decode(E))}}}).then(d=>{ga.add(`file:${e}`,d);const g=ha[e];delete ha[e];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onLoad&&y.onLoad(d)}}).catch(d=>{const g=ha[e];if(g===void 0)throw this.manager.itemError(e),d;delete ha[e];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Dr=new WeakMap;class LE extends Zr{constructor(e){super(e)}load(e,n,a,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=ga.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let _=Dr.get(u);_===void 0&&(_=[],Dr.set(u,_)),_.push({onLoad:n,onError:r})}return u}const h=dl("img");function p(){g(),n&&n(this);const _=Dr.get(this)||[];for(let v=0;v<_.length;v++){const y=_[v];y.onLoad&&y.onLoad(this)}Dr.delete(this),c.manager.itemEnd(e)}function d(_){g(),r&&r(_),ga.remove(`image:${e}`);const v=Dr.get(this)||[];for(let y=0;y<v.length;y++){const E=v[y];E.onError&&E.onError(_)}Dr.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){h.removeEventListener("load",p,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),ga.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class NE extends Zr{constructor(e){super(e)}load(e,n,a,r){const c=new Sn,u=new LE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,r),c}}class xu extends Jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const id=new ht,Q0=new q,J0=new q;class Mp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=Vi,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xp,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;Q0.setFromMatrixPosition(e.matrixWorld),n.position.copy(Q0),J0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(J0),n.updateMatrixWorld(),id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(id)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class OE extends Mp{constructor(){super(new qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,a=Vr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||n.far;(a!==n.fov||r!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=r,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class PE extends xu{constructor(e,n,a=0,r=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.distance=a,this.angle=r,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new OE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $0=new ht,tl=new q,ad=new q;class IE extends Mp{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,n=0){const a=this.camera,r=this.matrix,c=e.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),tl.setFromMatrixPosition(e.matrixWorld),a.position.copy(tl),ad.copy(a.position),ad.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(ad),a.updateMatrixWorld(),r.makeTranslation(-tl.x,-tl.y,-tl.z),$0.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix($0,a.coordinateSystem,a.reversedDepth)}}class BE extends xu{constructor(e,n,a=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=r,this.shadow=new IE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yu extends Qv{constructor(e=-1,n=1,a=1,r=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=r,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,r,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class FE extends Mp{constructor(){super(new yu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zE extends xu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new FE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class HE extends xu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class rl{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}const sd=new WeakMap;class GE extends Zr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=ga.get(`image-bitmap:${e}`);if(u!==void 0){if(c.manager.itemStart(e),u.then){u.then(d=>{if(sd.has(u)===!0)r&&r(sd.get(u)),c.manager.itemError(e),c.manager.itemEnd(e);else return n&&n(d),c.manager.itemEnd(e),d});return}return setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader,h.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const p=fetch(e,h).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(d){return ga.add(`image-bitmap:${e}`,d),n&&n(d),c.manager.itemEnd(e),d}).catch(function(d){r&&r(d),sd.set(p,d),ga.remove(`image-bitmap:${e}`),c.manager.itemError(e),c.manager.itemEnd(e)});ga.add(`image-bitmap:${e}`,p),c.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class VE extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ep="\\[\\]\\.:\\/",kE=new RegExp("["+Ep+"]","g"),Tp="[^"+Ep+"]",XE="[^"+Ep.replace("\\.","")+"]",WE=/((?:WC+[\/:])*)/.source.replace("WC",Tp),qE=/(WCOD+)?/.source.replace("WCOD",XE),YE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tp),jE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tp),KE=new RegExp("^"+WE+qE+YE+jE+"$"),ZE=["material","materials","bones","map"];class QE{constructor(e,n,a){const r=a||Pt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,r=this._bindings[a];r!==void 0&&r.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let r=this._targetGroup.nCachedObjects_,c=a.length;r!==c;++r)a[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class Pt{constructor(e,n,a){this.path=n,this.parsedPath=a||Pt.parseTrackName(n),this.node=Pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new Pt.Composite(e,n,a):new Pt(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kE,"")}static parseTrackName(e){const n=KE.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=a.nodeName&&a.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const c=a.nodeName.substring(r+1);ZE.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,r),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let u=0;u<c.length;u++){const h=c[u];if(h.name===n||h.uuid===n)return h;const p=a(h.children);if(p)return p}return null},r=a(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)e[n++]=a[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,r=n.propertyName;let c=n.propertyIndex;if(e||(e=Pt.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=n.objectIndex;switch(a){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===d){d=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const u=e[r];if(u===void 0){const d=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(c!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=r;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pt.Composite=QE;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function ev(o,e,n,a){const r=JE(a);switch(n){case Bv:return o*e;case fp:return o*e/r.components*r.byteLength;case hp:return o*e/r.components*r.byteLength;case zv:return o*e*2/r.components*r.byteLength;case dp:return o*e*2/r.components*r.byteLength;case Fv:return o*e*3/r.components*r.byteLength;case mi:return o*e*4/r.components*r.byteLength;case pp:return o*e*4/r.components*r.byteLength;case au:case su:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ru:case ou:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rd:case Cd:return Math.max(o,16)*Math.max(e,8)/4;case Ad:case wd:return Math.max(o,8)*Math.max(e,8)/2;case Dd:case Ud:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ld:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Id:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case zd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case kd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case qd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case lu:case Yd:case jd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Hv:case Kd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Zd:case Qd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function JE(o){switch(o){case Vi:case Ov:return{byteLength:1,components:1};case ol:case Pv:case pl:return{byteLength:2,components:1};case cp:case up:return{byteLength:2,components:4};case Ns:case lp:case Ai:return{byteLength:4,components:1};case Iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rx(){let o=null,e=!1,n=null,a=null;function r(c,u){n(c,u),a=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(a=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function $E(o){const e=new WeakMap;function n(h,p){const d=h.array,g=h.usage,_=d.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,d,g),h.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,p,d){const g=p.array,_=p.updateRanges;if(o.bindBuffer(d,h),_.length===0)o.bufferSubData(d,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],T=_[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,_[v]=T)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const T=_[y];o.bufferSubData(d,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,p),d.version=h.version}}return{get:r,remove:c,update:u}}var eT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tT=`#ifdef USE_ALPHAHASH
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
#endif`,nT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rT=`#ifdef USE_AOMAP
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
#endif`,oT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dT=`#ifdef USE_IRIDESCENCE
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
#endif`,pT=`#ifdef USE_BUMPMAP
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
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ST=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,MT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ET=`#define PI 3.141592653589793
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
} // validated`,TT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bT=`vec3 transformedNormal = objectNormal;
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
#endif`,AT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DT="gl_FragColor = linearToOutputTexel( gl_FragColor );",UT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,NT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OT=`#ifdef USE_ENVMAP
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
#endif`,PT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
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
#endif`,BT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GT=`#ifdef USE_GRADIENTMAP
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
}`,VT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WT=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,qT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,YT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QT=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,JT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,$T=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,eb=`#if defined( RE_IndirectDiffuse )
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
#endif`,tb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ib=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ab=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cb=`#if defined( USE_POINTS_UV )
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
#endif`,ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_b=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mb=`#ifdef USE_NORMALMAP
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
#endif`,Eb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ab=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Cb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ib=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hb=`#ifdef USE_SKINNING
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
#endif`,Gb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vb=`#ifdef USE_SKINNING
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
#endif`,kb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qb=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yb=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jb=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eA=`uniform sampler2D t2D;
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
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sA=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,rA=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oA=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,lA=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dA=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,pA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,mA=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,gA=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_A=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,vA=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,xA=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,yA=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SA=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,MA=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,EA=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,TA=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,bA=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,AA=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,RA=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,wA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,CA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,DA=`uniform vec3 color;
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
}`,UA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,LA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ft={alphahash_fragment:eT,alphahash_pars_fragment:tT,alphamap_fragment:nT,alphamap_pars_fragment:iT,alphatest_fragment:aT,alphatest_pars_fragment:sT,aomap_fragment:rT,aomap_pars_fragment:oT,batching_pars_vertex:lT,batching_vertex:cT,begin_vertex:uT,beginnormal_vertex:fT,bsdfs:hT,iridescence_fragment:dT,bumpmap_pars_fragment:pT,clipping_planes_fragment:mT,clipping_planes_pars_fragment:gT,clipping_planes_pars_vertex:_T,clipping_planes_vertex:vT,color_fragment:xT,color_pars_fragment:yT,color_pars_vertex:ST,color_vertex:MT,common:ET,cube_uv_reflection_fragment:TT,defaultnormal_vertex:bT,displacementmap_pars_vertex:AT,displacementmap_vertex:RT,emissivemap_fragment:wT,emissivemap_pars_fragment:CT,colorspace_fragment:DT,colorspace_pars_fragment:UT,envmap_fragment:LT,envmap_common_pars_fragment:NT,envmap_pars_fragment:OT,envmap_pars_vertex:PT,envmap_physical_pars_fragment:qT,envmap_vertex:IT,fog_vertex:BT,fog_pars_vertex:FT,fog_fragment:zT,fog_pars_fragment:HT,gradientmap_pars_fragment:GT,lightmap_pars_fragment:VT,lights_lambert_fragment:kT,lights_lambert_pars_fragment:XT,lights_pars_begin:WT,lights_toon_fragment:YT,lights_toon_pars_fragment:jT,lights_phong_fragment:KT,lights_phong_pars_fragment:ZT,lights_physical_fragment:QT,lights_physical_pars_fragment:JT,lights_fragment_begin:$T,lights_fragment_maps:eb,lights_fragment_end:tb,logdepthbuf_fragment:nb,logdepthbuf_pars_fragment:ib,logdepthbuf_pars_vertex:ab,logdepthbuf_vertex:sb,map_fragment:rb,map_pars_fragment:ob,map_particle_fragment:lb,map_particle_pars_fragment:cb,metalnessmap_fragment:ub,metalnessmap_pars_fragment:fb,morphinstance_vertex:hb,morphcolor_vertex:db,morphnormal_vertex:pb,morphtarget_pars_vertex:mb,morphtarget_vertex:gb,normal_fragment_begin:_b,normal_fragment_maps:vb,normal_pars_fragment:xb,normal_pars_vertex:yb,normal_vertex:Sb,normalmap_pars_fragment:Mb,clearcoat_normal_fragment_begin:Eb,clearcoat_normal_fragment_maps:Tb,clearcoat_pars_fragment:bb,iridescence_pars_fragment:Ab,opaque_fragment:Rb,packing:wb,premultiplied_alpha_fragment:Cb,project_vertex:Db,dithering_fragment:Ub,dithering_pars_fragment:Lb,roughnessmap_fragment:Nb,roughnessmap_pars_fragment:Ob,shadowmap_pars_fragment:Pb,shadowmap_pars_vertex:Ib,shadowmap_vertex:Bb,shadowmask_pars_fragment:Fb,skinbase_vertex:zb,skinning_pars_vertex:Hb,skinning_vertex:Gb,skinnormal_vertex:Vb,specularmap_fragment:kb,specularmap_pars_fragment:Xb,tonemapping_fragment:Wb,tonemapping_pars_fragment:qb,transmission_fragment:Yb,transmission_pars_fragment:jb,uv_pars_fragment:Kb,uv_pars_vertex:Zb,uv_vertex:Qb,worldpos_vertex:Jb,background_vert:$b,background_frag:eA,backgroundCube_vert:tA,backgroundCube_frag:nA,cube_vert:iA,cube_frag:aA,depth_vert:sA,depth_frag:rA,distanceRGBA_vert:oA,distanceRGBA_frag:lA,equirect_vert:cA,equirect_frag:uA,linedashed_vert:fA,linedashed_frag:hA,meshbasic_vert:dA,meshbasic_frag:pA,meshlambert_vert:mA,meshlambert_frag:gA,meshmatcap_vert:_A,meshmatcap_frag:vA,meshnormal_vert:xA,meshnormal_frag:yA,meshphong_vert:SA,meshphong_frag:MA,meshphysical_vert:EA,meshphysical_frag:TA,meshtoon_vert:bA,meshtoon_frag:AA,points_vert:RA,points_frag:wA,shadow_vert:CA,shadow_frag:DA,sprite_vert:UA,sprite_frag:LA},Ne={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Bi={basic:{uniforms:Fn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Fn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new st(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Fn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Fn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Fn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new st(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Fn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Fn([Ne.points,Ne.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Fn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Fn([Ne.common,Ne.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Fn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Fn([Ne.sprite,Ne.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Fn([Ne.common,Ne.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Fn([Ne.lights,Ne.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Bi.physical={uniforms:Fn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const $c={r:0,b:0,g:0},Ts=new ki,NA=new ht;function OA(o,e,n,a,r,c,u){const h=new st(0);let p=c===!0?0:1,d,g,_=null,v=0,y=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?n:e).get(w)),w}function T(L){let w=!1;const O=E(L);O===null?x(h,p):O&&O.isColor&&(x(O,1),w=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?a.buffers.color.setClear(0,0,0,1,u):G==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,w){const O=E(w);O&&(O.isCubeTexture||O.mapping===mu)?(g===void 0&&(g=new ai(new ml(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:kr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,z,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Ts.copy(w.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),g.material.uniforms.envMap.value=O,g.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(NA.makeRotationFromEuler(Ts)),g.material.toneMapped=Et.getTransfer(O.colorSpace)!==Ht,(_!==O||v!==O.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,_=O,v=O.version,y=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new ai(new vu(2,2),new ts({name:"BackgroundMaterial",uniforms:kr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Et.getTransfer(O.colorSpace)!==Ht,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||v!==O.version||y!==o.toneMapping)&&(d.material.needsUpdate=!0,_=O,v=O.version,y=o.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function x(L,w){L.getRGB($c,Zv(o)),a.buffers.color.setClear($c.r,$c.g,$c.b,w,u)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,w=1){h.set(L),p=w,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,x(h,p)},render:T,addToRenderList:S,dispose:P}}function PA(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=v(null);let c=r,u=!1;function h(D,F,re,oe,ue){let he=!1;const B=_(oe,re,F);c!==B&&(c=B,d(c.object)),he=y(D,oe,re,ue),he&&E(D,oe,re,ue),ue!==null&&e.update(ue,o.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,w(D,F,re,oe),ue!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function p(){return o.createVertexArray()}function d(D){return o.bindVertexArray(D)}function g(D){return o.deleteVertexArray(D)}function _(D,F,re){const oe=re.wireframe===!0;let ue=a[D.id];ue===void 0&&(ue={},a[D.id]=ue);let he=ue[F.id];he===void 0&&(he={},ue[F.id]=he);let B=he[oe];return B===void 0&&(B=v(p()),he[oe]=B),B}function v(D){const F=[],re=[],oe=[];for(let ue=0;ue<n;ue++)F[ue]=0,re[ue]=0,oe[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:re,attributeDivisors:oe,object:D,attributes:{},index:null}}function y(D,F,re,oe){const ue=c.attributes,he=F.attributes;let B=0;const Z=re.getAttributes();for(const j in Z)if(Z[j].location>=0){const U=ue[j];let $=he[j];if($===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;B++}return c.attributesNum!==B||c.index!==oe}function E(D,F,re,oe){const ue={},he=F.attributes;let B=0;const Z=re.getAttributes();for(const j in Z)if(Z[j].location>=0){let U=he[j];U===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(U=D.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),ue[j]=$,B++}c.attributes=ue,c.attributesNum=B,c.index=oe}function T(){const D=c.newAttributes;for(let F=0,re=D.length;F<re;F++)D[F]=0}function S(D){x(D,0)}function x(D,F){const re=c.newAttributes,oe=c.enabledAttributes,ue=c.attributeDivisors;re[D]=1,oe[D]===0&&(o.enableVertexAttribArray(D),oe[D]=1),ue[D]!==F&&(o.vertexAttribDivisor(D,F),ue[D]=F)}function P(){const D=c.newAttributes,F=c.enabledAttributes;for(let re=0,oe=F.length;re<oe;re++)F[re]!==D[re]&&(o.disableVertexAttribArray(re),F[re]=0)}function L(D,F,re,oe,ue,he,B){B===!0?o.vertexAttribIPointer(D,F,re,ue,he):o.vertexAttribPointer(D,F,re,oe,ue,he)}function w(D,F,re,oe){T();const ue=oe.attributes,he=re.getAttributes(),B=F.defaultAttributeValues;for(const Z in he){const j=he[Z];if(j.location>=0){let xe=ue[Z];if(xe===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),xe!==void 0){const U=xe.normalized,$=xe.itemSize,ve=e.get(xe);if(ve===void 0)continue;const ye=ve.buffer,we=ve.type,ne=ve.bytesPerElement,de=we===o.INT||we===o.UNSIGNED_INT||xe.gpuType===lp;if(xe.isInterleavedBufferAttribute){const Se=xe.data,Oe=Se.stride,qe=xe.offset;if(Se.isInstancedInterleavedBuffer){for(let nt=0;nt<j.locationSize;nt++)x(j.location+nt,Se.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let nt=0;nt<j.locationSize;nt++)S(j.location+nt);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let nt=0;nt<j.locationSize;nt++)L(j.location+nt,$/j.locationSize,we,U,Oe*ne,(qe+$/j.locationSize*nt)*ne,de)}else{if(xe.isInstancedBufferAttribute){for(let Se=0;Se<j.locationSize;Se++)x(j.location+Se,xe.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Se=0;Se<j.locationSize;Se++)S(j.location+Se);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let Se=0;Se<j.locationSize;Se++)L(j.location+Se,$/j.locationSize,we,U,$*ne,$/j.locationSize*Se*ne,de)}}else if(B!==void 0){const U=B[Z];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(j.location,U);break;case 3:o.vertexAttrib3fv(j.location,U);break;case 4:o.vertexAttrib4fv(j.location,U);break;default:o.vertexAttrib1fv(j.location,U)}}}}P()}function O(){X();for(const D in a){const F=a[D];for(const re in F){const oe=F[re];for(const ue in oe)g(oe[ue].object),delete oe[ue];delete F[re]}delete a[D]}}function G(D){if(a[D.id]===void 0)return;const F=a[D.id];for(const re in F){const oe=F[re];for(const ue in oe)g(oe[ue].object),delete oe[ue];delete F[re]}delete a[D.id]}function z(D){for(const F in a){const re=a[F];if(re[D.id]===void 0)continue;const oe=re[D.id];for(const ue in oe)g(oe[ue].object),delete oe[ue];delete re[D.id]}}function X(){C(),u=!0,c!==r&&(c=r,d(c.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:X,resetDefaultState:C,dispose:O,releaseStatesOfGeometry:G,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:S,disableUnusedAttributes:P}}function IA(o,e,n){let a;function r(d){a=d}function c(d,g){o.drawArrays(a,d,g),n.update(g,a,1)}function u(d,g,_){_!==0&&(o.drawArraysInstanced(a,d,g,_),n.update(g,a,_))}function h(d,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];n.update(y,a,1)}function p(d,g,_,v){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)u(d[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(a,d,0,g,0,v,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*v[T];n.update(E,a,1)}}this.setMode=r,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function BA(o,e,n,a){let r;function c(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(z){return!(z!==mi&&a.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const X=z===pl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Vi&&a.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ai&&!X)}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=E>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:O,maxSamples:G}}function FA(o){const e=this;let n=null,a=0,r=!1,c=!1;const u=new Rs,h=new lt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||a!==0||r;return r=v,a=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,x=o.get(_);if(!r||E===null||E.length===0||c&&!S)c?g(null):d();else{const P=c?0:a,L=P*4;let w=x.clippingState||null;p.value=w,w=g(E,v,L,y);for(let O=0;O!==L;++O)w[O]=n[O];x.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,y,E){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=p.value,E!==!0||S===null){const x=y+T*4,P=v.matrixWorldInverse;h.getNormalMatrix(P),(S===null||S.length<x)&&(S=new Float32Array(x));for(let L=0,w=y;L!==T;++L,w+=4)u.copy(_[L]).applyMatrix4(P,h),u.normal.toArray(S,w),S[w+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function zA(o){let e=new WeakMap;function n(u,h){return h===Td?u.mapping=zr:h===bd&&(u.mapping=Hr),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===Td||h===bd)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new nE(p.height);return d.fromEquirectangularTexture(o,u),e.set(u,d),u.addEventListener("dispose",r),n(d.texture,u.mapping)}else return null}}return u}function r(u){const h=u.target;h.removeEventListener("dispose",r);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Lr=4,tv=[.125,.215,.35,.446,.526,.582],Ds=20,rd=new yu,nv=new st;let od=null,ld=0,cd=0,ud=!1;const ws=(1+Math.sqrt(5))/2,Ur=1/ws,iv=[new q(-ws,Ur,0),new q(ws,Ur,0),new q(-Ur,0,ws),new q(Ur,0,ws),new q(0,ws,-Ur),new q(0,ws,Ur),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],HA=new q;class av{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,a=.1,r=100,c={}){const{size:u=256,position:h=HA}=c;od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,r,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ld,cd),this._renderer.xr.enabled=ud,e.scissorTest=!1,eu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:pl,format:mi,colorSpace:Hn,depthBuffer:!1},r=sv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sv(e,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GA(c)),this._blurMaterial=VA(c,e,n)}return r}_compileMaterial(e){const n=new ai(this._lodPlanes[0],e);this._renderer.compile(n,rd)}_sceneToCubeUV(e,n,a,r,c){const p=new qn(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(nv),_.toneMapping=es,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(r),_.clearDepth(),_.setRenderTarget(null));const T=new Us({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),S=new ai(new ml,T);let x=!1;const P=e.background;P?P.isColor&&(T.color.copy(P),e.background=null,x=!0):(T.color.copy(nv),x=!0);for(let L=0;L<6;L++){const w=L%3;w===0?(p.up.set(0,d[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[L],c.y,c.z)):w===1?(p.up.set(0,0,d[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[L],c.z)):(p.up.set(0,d[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[L]));const O=this._cubeSize;eu(r,w*O,L>2?O:0,O,O),_.setRenderTarget(r),x&&_.render(S,p),_.render(e,p)}S.geometry.dispose(),S.material.dispose(),_.toneMapping=y,_.autoClear=v,e.background=P}_textureToCubeUV(e,n){const a=this._renderer,r=e.mapping===zr||e.mapping===Hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const c=r?this._cubemapMaterial:this._equirectMaterial,u=new ai(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;eu(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,rd)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let c=1;c<r;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=iv[(r-c-1)%iv.length];this._blur(e,c-1,c,u,h)}n.autoClear=a}_blur(e,n,a,r,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,r,"latitudinal",c),this._halfBlur(u,e,a,a,r,"longitudinal",c)}_halfBlur(e,n,a,r,c,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new ai(this._lodPlanes[r],d),v=d.uniforms,y=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ds-1),T=c/E,S=isFinite(c)?1+Math.floor(g*T):Ds;S>Ds&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ds}`);const x=[];let P=0;for(let z=0;z<Ds;++z){const X=z/T,C=Math.exp(-X*X/2);x.push(C),z===0?P+=C:z<S&&(P+=2*C)}for(let z=0;z<x.length;z++)x[z]=x[z]/P;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-a;const w=this._sizeLods[r],O=3*w*(r>L-Lr?r-L+Lr:0),G=4*(this._cubeSize-w);eu(n,O,G,3*w,2*w),p.setRenderTarget(n),p.render(_,rd)}}function GA(o){const e=[],n=[],a=[];let r=o;const c=o-Lr+1+tv.length;for(let u=0;u<c;u++){const h=Math.pow(2,r);n.push(h);let p=1/h;u>o-Lr?p=tv[u-o+Lr-1]:u===0&&(p=0),a.push(p);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,T=3,S=2,x=1,P=new Float32Array(T*E*y),L=new Float32Array(S*E*y),w=new Float32Array(x*E*y);for(let G=0;G<y;G++){const z=G%3*2/3-1,X=G>2?0:-1,C=[z,X,0,z+2/3,X,0,z+2/3,X+1,0,z,X,0,z+2/3,X+1,0,z,X+1,0];P.set(C,T*E*G),L.set(v,S*E*G);const D=[G,G,G,G,G,G];w.set(D,x*E*G)}const O=new gi;O.setAttribute("position",new Nn(P,T)),O.setAttribute("uv",new Nn(L,S)),O.setAttribute("faceIndex",new Nn(w,x)),e.push(O),r>Lr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:a}}function sv(o,e,n){const a=new Os(o,e,n);return a.texture.mapping=mu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function eu(o,e,n,a,r){o.viewport.set(e,n,a,r),o.scissor.set(e,n,a,r)}function VA(o,e,n){const a=new Float32Array(Ds),r=new q(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bp(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function rv(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bp(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function ov(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function bp(){return`

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
	`}function kA(o){let e=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const p=h.mapping,d=p===Td||p===bd,g=p===zr||p===Hr;if(d||g){let _=e.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new av(o)),_=d?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return d&&y&&y.height>0||g&&y&&r(y)?(n===null&&(n=new av(o)),_=d?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function r(h){let p=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&p++;return p===d}function c(h){const p=h.target;p.removeEventListener("dispose",c);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function XA(o){const e={};function n(a){if(e[a]!==void 0)return e[a];let r;switch(a){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(a)}return e[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&Pr("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function WA(o,e,n,a){const r={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete r[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function d(_){const v=[],y=_.index,E=_.attributes.position;let T=0;if(y!==null){const P=y.array;T=y.version;for(let L=0,w=P.length;L<w;L+=3){const O=P[L+0],G=P[L+1],z=P[L+2];v.push(O,G,G,z,z,O)}}else if(E!==void 0){const P=E.array;T=E.version;for(let L=0,w=P.length/3-1;L<w;L+=3){const O=L+0,G=L+1,z=L+2;v.push(O,G,G,z,z,O)}}else return;const S=new(Xv(v)?Kv:jv)(v,1);S.version=T;const x=c.get(_);x&&e.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function qA(o,e,n){let a;function r(v){a=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function p(v,y){o.drawElements(a,y,c,v*u),n.update(y,a,1)}function d(v,y,E){E!==0&&(o.drawElementsInstanced(a,y,c,v*u,E),n.update(y,a,E))}function g(v,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];n.update(S,a,1)}function _(v,y,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/u,y[x],T[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,c,v,0,T,0,E);let x=0;for(let P=0;P<E;P++)x+=y[P]*T[P];n.update(x,a,1)}}this.setMode=r,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function YA(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case o.TRIANGLES:n.triangles+=h*(c/3);break;case o.LINES:n.lines+=h*(c/2);break;case o.LINE_STRIP:n.lines+=h*(c-1);break;case o.LINE_LOOP:n.lines+=h*c;break;case o.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:a}}function jA(o,e,n){const a=new WeakMap,r=new Ct;function c(u,h,p){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let D=function(){X.dispose(),a.delete(h),h.removeEventListener("dispose",D)};var y=D;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),T===!0&&(w=2),S===!0&&(w=3);let O=h.attributes.position.count*w,G=1;O>e.maxTextureSize&&(G=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const z=new Float32Array(O*G*4*_),X=new Wv(z,O,G,_);X.type=Ai,X.needsUpdate=!0;const C=w*4;for(let F=0;F<_;F++){const re=x[F],oe=P[F],ue=L[F],he=O*G*4*F;for(let B=0;B<re.count;B++){const Z=B*C;E===!0&&(r.fromBufferAttribute(re,B),z[he+Z+0]=r.x,z[he+Z+1]=r.y,z[he+Z+2]=r.z,z[he+Z+3]=0),T===!0&&(r.fromBufferAttribute(oe,B),z[he+Z+4]=r.x,z[he+Z+5]=r.y,z[he+Z+6]=r.z,z[he+Z+7]=0),S===!0&&(r.fromBufferAttribute(ue,B),z[he+Z+8]=r.x,z[he+Z+9]=r.y,z[he+Z+10]=r.z,z[he+Z+11]=ue.itemSize===4?r.w:1)}}v={count:_,texture:X,size:new St(O,G)},a.set(h,v),h.addEventListener("dispose",D)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",u.morphTexture,n);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const T=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",T),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function KA(o,e,n,a){let r=new WeakMap;function c(p){const d=a.render.frame,g=p.geometry,_=e.get(p,g);if(r.get(_)!==d&&(e.update(_),r.set(_,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),r.get(p)!==d&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),r.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;r.get(v)!==d&&(v.update(),r.set(v,d))}return _}function u(){r=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:u}}const ox=new Sn,lv=new nx(1,1),lx=new Wv,cx=new zM,ux=new Jv,cv=[],uv=[],fv=new Float32Array(16),hv=new Float32Array(9),dv=new Float32Array(4);function Qr(o,e,n){const a=o[0];if(a<=0||a>0)return o;const r=e*n;let c=cv[r];if(c===void 0&&(c=new Float32Array(r),cv[r]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,o[u].toArray(c,h)}return c}function pn(o,e){if(o.length!==e.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==e[n])return!1;return!0}function mn(o,e){for(let n=0,a=e.length;n<a;n++)o[n]=e[n]}function Su(o,e){let n=uv[e];n===void 0&&(n=new Int32Array(e),uv[e]=n);for(let a=0;a!==e;++a)n[a]=o.allocateTextureUnit();return n}function ZA(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function QA(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pn(n,e))return;o.uniform2fv(this.addr,e),mn(n,e)}}function JA(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(pn(n,e))return;o.uniform3fv(this.addr,e),mn(n,e)}}function $A(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pn(n,e))return;o.uniform4fv(this.addr,e),mn(n,e)}}function e1(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(pn(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),mn(n,e)}else{if(pn(n,a))return;dv.set(a),o.uniformMatrix2fv(this.addr,!1,dv),mn(n,a)}}function t1(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(pn(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),mn(n,e)}else{if(pn(n,a))return;hv.set(a),o.uniformMatrix3fv(this.addr,!1,hv),mn(n,a)}}function n1(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(pn(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),mn(n,e)}else{if(pn(n,a))return;fv.set(a),o.uniformMatrix4fv(this.addr,!1,fv),mn(n,a)}}function i1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function a1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pn(n,e))return;o.uniform2iv(this.addr,e),mn(n,e)}}function s1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(pn(n,e))return;o.uniform3iv(this.addr,e),mn(n,e)}}function r1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pn(n,e))return;o.uniform4iv(this.addr,e),mn(n,e)}}function o1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function l1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pn(n,e))return;o.uniform2uiv(this.addr,e),mn(n,e)}}function c1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(pn(n,e))return;o.uniform3uiv(this.addr,e),mn(n,e)}}function u1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pn(n,e))return;o.uniform4uiv(this.addr,e),mn(n,e)}}function f1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let c;this.type===o.SAMPLER_2D_SHADOW?(lv.compareFunction=kv,c=lv):c=ox,n.setTexture2D(e||c,r)}function h1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(e||cx,r)}function d1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(e||ux,r)}function p1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(e||lx,r)}function m1(o){switch(o){case 5126:return ZA;case 35664:return QA;case 35665:return JA;case 35666:return $A;case 35674:return e1;case 35675:return t1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return a1;case 35668:case 35672:return s1;case 35669:case 35673:return r1;case 5125:return o1;case 36294:return l1;case 36295:return c1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return d1;case 36289:case 36303:case 36311:case 36292:return p1}}function g1(o,e){o.uniform1fv(this.addr,e)}function _1(o,e){const n=Qr(e,this.size,2);o.uniform2fv(this.addr,n)}function v1(o,e){const n=Qr(e,this.size,3);o.uniform3fv(this.addr,n)}function x1(o,e){const n=Qr(e,this.size,4);o.uniform4fv(this.addr,n)}function y1(o,e){const n=Qr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function S1(o,e){const n=Qr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function M1(o,e){const n=Qr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function E1(o,e){o.uniform1iv(this.addr,e)}function T1(o,e){o.uniform2iv(this.addr,e)}function b1(o,e){o.uniform3iv(this.addr,e)}function A1(o,e){o.uniform4iv(this.addr,e)}function R1(o,e){o.uniform1uiv(this.addr,e)}function w1(o,e){o.uniform2uiv(this.addr,e)}function C1(o,e){o.uniform3uiv(this.addr,e)}function D1(o,e){o.uniform4uiv(this.addr,e)}function U1(o,e,n){const a=this.cache,r=e.length,c=Su(n,r);pn(a,c)||(o.uniform1iv(this.addr,c),mn(a,c));for(let u=0;u!==r;++u)n.setTexture2D(e[u]||ox,c[u])}function L1(o,e,n){const a=this.cache,r=e.length,c=Su(n,r);pn(a,c)||(o.uniform1iv(this.addr,c),mn(a,c));for(let u=0;u!==r;++u)n.setTexture3D(e[u]||cx,c[u])}function N1(o,e,n){const a=this.cache,r=e.length,c=Su(n,r);pn(a,c)||(o.uniform1iv(this.addr,c),mn(a,c));for(let u=0;u!==r;++u)n.setTextureCube(e[u]||ux,c[u])}function O1(o,e,n){const a=this.cache,r=e.length,c=Su(n,r);pn(a,c)||(o.uniform1iv(this.addr,c),mn(a,c));for(let u=0;u!==r;++u)n.setTexture2DArray(e[u]||lx,c[u])}function P1(o){switch(o){case 5126:return g1;case 35664:return _1;case 35665:return v1;case 35666:return x1;case 35674:return y1;case 35675:return S1;case 35676:return M1;case 5124:case 35670:return E1;case 35667:case 35671:return T1;case 35668:case 35672:return b1;case 35669:case 35673:return A1;case 5125:return R1;case 36294:return w1;case 36295:return C1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return O1}}class I1{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=m1(n.type)}}class B1{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=P1(n.type)}}class F1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const r=this.seq;for(let c=0,u=r.length;c!==u;++c){const h=r[c];h.setValue(e,n[h.id],a)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function pv(o,e){o.seq.push(e),o.map[e.id]=e}function z1(o,e,n){const a=o.name,r=a.length;for(fd.lastIndex=0;;){const c=fd.exec(a),u=fd.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===r){pv(n,d===void 0?new I1(h,o,e):new B1(h,o,e));break}else{let _=n.map[h];_===void 0&&(_=new F1(h),pv(n,_)),n=_}}}class cu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const c=e.getActiveUniform(n,r),u=e.getUniformLocation(n,c.name);z1(c,u,this)}}setValue(e,n,a,r){const c=this.map[n];c!==void 0&&c.setValue(e,a,r)}setOptional(e,n,a){const r=n[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,n,a,r){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,r)}}static seqWithValue(e,n){const a=[];for(let r=0,c=e.length;r!==c;++r){const u=e[r];u.id in n&&a.push(u)}return a}}function mv(o,e,n){const a=o.createShader(e);return o.shaderSource(a,n),o.compileShader(a),a}const H1=37297;let G1=0;function V1(o,e){const n=o.split(`
`),a=[],r=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=r;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const gv=new lt;function k1(o){Et._getMatrix(gv,Et.workingColorSpace,o);const e=`mat3( ${gv.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(o)){case fu:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function _v(o,e,n){const a=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+V1(o.getShaderSource(e),h)}else return c}function X1(o,e){const n=k1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function W1(o,e){let n;switch(e){case ZS:n="Linear";break;case QS:n="Reinhard";break;case JS:n="Cineon";break;case $S:n="ACESFilmic";break;case tM:n="AgX";break;case nM:n="Neutral";break;case eM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const tu=new q;function q1(){Et.getLuminanceCoefficients(tu);const o=tu.x.toFixed(4),e=tu.y.toFixed(4),n=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function j1(o){const e=[];for(const n in o){const a=o[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function K1(o,e){const n={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const c=o.getActiveAttrib(e,r),u=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:o.getAttribLocation(e,u),locationSize:h}}return n}function al(o){return o!==""}function vv(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(o){return o.replace(Z1,J1)}const Q1=new Map;function J1(o,e){let n=ft[e];if(n===void 0){const a=Q1.get(e);if(a!==void 0)n=ft[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return ip(n)}const $1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yv(o){return o.replace($1,eR)}function eR(o,e,n,a){let r="";for(let c=parseInt(e);c<parseInt(n);c++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return r}function Sv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Dv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===CS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===da&&(e="SHADOWMAP_TYPE_VSM"),e}function nR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case zr:case Hr:e="ENVMAP_TYPE_CUBE";break;case mu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Hr:e="ENVMAP_MODE_REFRACTION";break}return e}function aR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Uv:e="ENVMAP_BLENDING_MULTIPLY";break;case jS:e="ENVMAP_BLENDING_MIX";break;case KS:e="ENVMAP_BLENDING_ADD";break}return e}function sR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function rR(o,e,n,a){const r=o.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=tR(n),d=nR(n),g=iR(n),_=aR(n),v=sR(n),y=Y1(n),E=j1(c),T=r.createProgram();let S,x,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(al).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(al).join(`
`),x.length>0&&(x+=`
`)):(S=[Sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),x=[Sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==es?"#define TONE_MAPPING":"",n.toneMapping!==es?ft.tonemapping_pars_fragment:"",n.toneMapping!==es?W1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,X1("linearToOutputTexel",n.outputColorSpace),q1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(al).join(`
`)),u=ip(u),u=vv(u,n),u=xv(u,n),h=ip(h),h=vv(h,n),h=xv(h,n),u=yv(u),h=yv(h),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===_0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=P+S+u,w=P+x+h,O=mv(r,r.VERTEX_SHADER,L),G=mv(r,r.FRAGMENT_SHADER,w);r.attachShader(T,O),r.attachShader(T,G),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function z(F){if(o.debug.checkShaderErrors){const re=r.getProgramInfoLog(T)||"",oe=r.getShaderInfoLog(O)||"",ue=r.getShaderInfoLog(G)||"",he=re.trim(),B=oe.trim(),Z=ue.trim();let j=!0,xe=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,T,O,G);else{const U=_v(r,O,"vertex"),$=_v(r,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+he+`
`+U+`
`+$)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(B===""||Z==="")&&(xe=!1);xe&&(F.diagnostics={runnable:j,programLog:he,vertexShader:{log:B,prefix:S},fragmentShader:{log:Z,prefix:x}})}r.deleteShader(O),r.deleteShader(G),X=new cu(r,T),C=K1(r,T)}let X;this.getUniforms=function(){return X===void 0&&z(this),X};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(T,H1)),D},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=G1++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=O,this.fragmentShader=G,this}let oR=0;class lR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,r=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new cR(e),n.set(e,a)),a}}class cR{constructor(e){this.id=oR++,this.code=e,this.usedTimes=0}}function uR(o,e,n,a,r,c,u){const h=new qv,p=new lR,d=new Set,g=[],_=r.logarithmicDepthBuffer,v=r.vertexTextures;let y=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return d.add(C),C===0?"uv":`uv${C}`}function S(C,D,F,re,oe){const ue=re.fog,he=oe.geometry,B=C.isMeshStandardMaterial?re.environment:null,Z=(C.isMeshStandardMaterial?n:e).get(C.envMap||B),j=Z&&Z.mapping===mu?Z.image.height:null,xe=E[C.type];C.precision!==null&&(y=r.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const U=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,$=U!==void 0?U.length:0;let ve=0;he.morphAttributes.position!==void 0&&(ve=1),he.morphAttributes.normal!==void 0&&(ve=2),he.morphAttributes.color!==void 0&&(ve=3);let ye,we,ne,de;if(xe){const bt=Bi[xe];ye=bt.vertexShader,we=bt.fragmentShader}else ye=C.vertexShader,we=C.fragmentShader,p.update(C),ne=p.getVertexShaderID(C),de=p.getFragmentShaderID(C);const Se=o.getRenderTarget(),Oe=o.state.buffers.depth.getReversed(),qe=oe.isInstancedMesh===!0,nt=oe.isBatchedMesh===!0,kt=!!C.map,mt=!!C.matcap,H=!!Z,Dt=!!C.aoMap,Ze=!!C.lightMap,Tt=!!C.bumpMap,Fe=!!C.normalMap,Xt=!!C.displacementMap,ze=!!C.emissiveMap,rt=!!C.metalnessMap,Kt=!!C.roughnessMap,Zt=C.anisotropy>0,N=C.clearcoat>0,b=C.dispersion>0,ee=C.iridescence>0,ce=C.sheen>0,_e=C.transmission>0,le=Zt&&!!C.anisotropyMap,Pe=N&&!!C.clearcoatMap,Ae=N&&!!C.clearcoatNormalMap,ke=N&&!!C.clearcoatRoughnessMap,We=ee&&!!C.iridescenceMap,Me=ee&&!!C.iridescenceThicknessMap,Ue=ce&&!!C.sheenColorMap,je=ce&&!!C.sheenRoughnessMap,Ve=!!C.specularMap,Ce=!!C.specularColorMap,at=!!C.specularIntensityMap,k=_e&&!!C.transmissionMap,be=_e&&!!C.thicknessMap,Re=!!C.gradientMap,Ie=!!C.alphaMap,Ee=C.alphaTest>0,ge=!!C.alphaHash,Ge=!!C.extensions;let it=es;C.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(it=o.toneMapping);const Ut={shaderID:xe,shaderType:C.type,shaderName:C.name,vertexShader:ye,fragmentShader:we,defines:C.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:nt,batchingColor:nt&&oe._colorsTexture!==null,instancing:qe,instancingColor:qe&&oe.instanceColor!==null,instancingMorph:qe&&oe.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Se===null?o.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Hn,alphaToCoverage:!!C.alphaToCoverage,map:kt,matcap:mt,envMap:H,envMapMode:H&&Z.mapping,envMapCubeUVHeight:j,aoMap:Dt,lightMap:Ze,bumpMap:Tt,normalMap:Fe,displacementMap:v&&Xt,emissiveMap:ze,normalMapObjectSpace:Fe&&C.normalMapType===lM,normalMapTangentSpace:Fe&&C.normalMapType===Vv,metalnessMap:rt,roughnessMap:Kt,anisotropy:Zt,anisotropyMap:le,clearcoat:N,clearcoatMap:Pe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ke,dispersion:b,iridescence:ee,iridescenceMap:We,iridescenceThicknessMap:Me,sheen:ce,sheenColorMap:Ue,sheenRoughnessMap:je,specularMap:Ve,specularColorMap:Ce,specularIntensityMap:at,transmission:_e,transmissionMap:k,thicknessMap:be,gradientMap:Re,opaque:C.transparent===!1&&C.blending===Nr&&C.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Ee,alphaHash:ge,combine:C.combine,mapUv:kt&&T(C.map.channel),aoMapUv:Dt&&T(C.aoMap.channel),lightMapUv:Ze&&T(C.lightMap.channel),bumpMapUv:Tt&&T(C.bumpMap.channel),normalMapUv:Fe&&T(C.normalMap.channel),displacementMapUv:Xt&&T(C.displacementMap.channel),emissiveMapUv:ze&&T(C.emissiveMap.channel),metalnessMapUv:rt&&T(C.metalnessMap.channel),roughnessMapUv:Kt&&T(C.roughnessMap.channel),anisotropyMapUv:le&&T(C.anisotropyMap.channel),clearcoatMapUv:Pe&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:je&&T(C.sheenRoughnessMap.channel),specularMapUv:Ve&&T(C.specularMap.channel),specularColorMapUv:Ce&&T(C.specularColorMap.channel),specularIntensityMapUv:at&&T(C.specularIntensityMap.channel),transmissionMapUv:k&&T(C.transmissionMap.channel),thicknessMapUv:be&&T(C.thicknessMap.channel),alphaMapUv:Ie&&T(C.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(Fe||Zt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!he.attributes.uv&&(kt||Ie),fog:!!ue,useFog:C.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Oe,skinning:oe.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ve,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:kt&&C.map.isVideoTexture===!0&&Et.getTransfer(C.map.colorSpace)===Ht,decodeVideoTextureEmissive:ze&&C.emissiveMap.isVideoTexture===!0&&Et.getTransfer(C.emissiveMap.colorSpace)===Ht,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Fi,flipSided:C.side===Yn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ge&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&C.extensions.multiDraw===!0||nt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ut.vertexUv1s=d.has(1),Ut.vertexUv2s=d.has(2),Ut.vertexUv3s=d.has(3),d.clear(),Ut}function x(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)D.push(F),D.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(P(D,C),L(D,C),D.push(o.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function P(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function L(C,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),C.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),C.push(h.mask)}function w(C){const D=E[C.type];let F;if(D){const re=Bi[D];F=JM.clone(re.uniforms)}else F=C.uniforms;return F}function O(C,D){let F;for(let re=0,oe=g.length;re<oe;re++){const ue=g[re];if(ue.cacheKey===D){F=ue,++F.usedTimes;break}}return F===void 0&&(F=new rR(o,D,C,c),g.push(F)),F}function G(C){if(--C.usedTimes===0){const D=g.indexOf(C);g[D]=g[g.length-1],g.pop(),C.destroy()}}function z(C){p.remove(C)}function X(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:w,acquireProgram:O,releaseProgram:G,releaseShaderCache:z,programs:g,dispose:X}}function fR(){let o=new WeakMap;function e(u){return o.has(u)}function n(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function a(u){o.delete(u)}function r(u,h,p){o.get(u)[h]=p}function c(){o=new WeakMap}return{has:e,get:n,remove:a,update:r,dispose:c}}function hR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Mv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Ev(){const o=[];let e=0;const n=[],a=[],r=[];function c(){e=0,n.length=0,a.length=0,r.length=0}function u(_,v,y,E,T,S){let x=o[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:T,group:S},o[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=T,x.group=S),e++,x}function h(_,v,y,E,T,S){const x=u(_,v,y,E,T,S);y.transmission>0?a.push(x):y.transparent===!0?r.push(x):n.push(x)}function p(_,v,y,E,T,S){const x=u(_,v,y,E,T,S);y.transmission>0?a.unshift(x):y.transparent===!0?r.unshift(x):n.unshift(x)}function d(_,v){n.length>1&&n.sort(_||hR),a.length>1&&a.sort(v||Mv),r.length>1&&r.sort(v||Mv)}function g(){for(let _=e,v=o.length;_<v;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:r,init:c,push:h,unshift:p,finish:g,sort:d}}function dR(){let o=new WeakMap;function e(a,r){const c=o.get(a);let u;return c===void 0?(u=new Ev,o.set(a,[u])):r>=c.length?(u=new Ev,c.push(u)):u=c[r],u}function n(){o=new WeakMap}return{get:e,dispose:n}}function pR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new st};break;case"SpotLight":n={position:new q,direction:new q,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new q,halfWidth:new q,halfHeight:new q};break}return o[e.id]=n,n}}}function mR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let gR=0;function _R(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function vR(o){const e=new pR,n=mR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new q);const r=new q,c=new ht,u=new ht;function h(d){let g=0,_=0,v=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let y=0,E=0,T=0,S=0,x=0,P=0,L=0,w=0,O=0,G=0,z=0;d.sort(_R);for(let C=0,D=d.length;C<D;C++){const F=d[C],re=F.color,oe=F.intensity,ue=F.distance,he=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=re.r*oe,_+=re.g*oe,v+=re.b*oe;else if(F.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(F.sh.coefficients[B],oe);z++}else if(F.isDirectionalLight){const B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,j=n.get(F);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,a.directionalShadow[y]=j,a.directionalShadowMap[y]=he,a.directionalShadowMatrix[y]=F.shadow.matrix,P++}a.directional[y]=B,y++}else if(F.isSpotLight){const B=e.get(F);B.position.setFromMatrixPosition(F.matrixWorld),B.color.copy(re).multiplyScalar(oe),B.distance=ue,B.coneCos=Math.cos(F.angle),B.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),B.decay=F.decay,a.spot[T]=B;const Z=F.shadow;if(F.map&&(a.spotLightMap[O]=F.map,O++,Z.updateMatrices(F),F.castShadow&&G++),a.spotLightMatrix[T]=Z.matrix,F.castShadow){const j=n.get(F);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,a.spotShadow[T]=j,a.spotShadowMap[T]=he,w++}T++}else if(F.isRectAreaLight){const B=e.get(F);B.color.copy(re).multiplyScalar(oe),B.halfWidth.set(F.width*.5,0,0),B.halfHeight.set(0,F.height*.5,0),a.rectArea[S]=B,S++}else if(F.isPointLight){const B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),B.distance=F.distance,B.decay=F.decay,F.castShadow){const Z=F.shadow,j=n.get(F);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,a.pointShadow[E]=j,a.pointShadowMap[E]=he,a.pointShadowMatrix[E]=F.shadow.matrix,L++}a.point[E]=B,E++}else if(F.isHemisphereLight){const B=e.get(F);B.skyColor.copy(F.color).multiplyScalar(oe),B.groundColor.copy(F.groundColor).multiplyScalar(oe),a.hemi[x]=B,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_FLOAT_1,a.rectAreaLTC2=Ne.LTC_FLOAT_2):(a.rectAreaLTC1=Ne.LTC_HALF_1,a.rectAreaLTC2=Ne.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const X=a.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==T||X.rectAreaLength!==S||X.hemiLength!==x||X.numDirectionalShadows!==P||X.numPointShadows!==L||X.numSpotShadows!==w||X.numSpotMaps!==O||X.numLightProbes!==z)&&(a.directional.length=y,a.spot.length=T,a.rectArea.length=S,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=w+O-G,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=G,a.numLightProbes=z,X.directionalLength=y,X.pointLength=E,X.spotLength=T,X.rectAreaLength=S,X.hemiLength=x,X.numDirectionalShadows=P,X.numPointShadows=L,X.numSpotShadows=w,X.numSpotMaps=O,X.numLightProbes=z,a.version=gR++)}function p(d,g){let _=0,v=0,y=0,E=0,T=0;const S=g.matrixWorldInverse;for(let x=0,P=d.length;x<P;x++){const L=d[x];if(L.isDirectionalLight){const w=a.directional[_];w.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(S),_++}else if(L.isSpotLight){const w=a.spot[y];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const w=a.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),u.identity(),c.copy(L.matrixWorld),c.premultiply(S),u.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const w=a.point[v];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const w=a.hemi[T];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(S),T++}}}return{setup:h,setupView:p,state:a}}function Tv(o){const e=new vR(o),n=[],a=[];function r(g){d.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){e.setup(n)}function p(g){e.setupView(n,g)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u}}function xR(o){let e=new WeakMap;function n(r,c=0){const u=e.get(r);let h;return u===void 0?(h=new Tv(o),e.set(r,[h])):c>=u.length?(h=new Tv(o),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const yR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SR=`uniform sampler2D shadow_pass;
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
}`;function MR(o,e,n){let a=new xp;const r=new St,c=new St,u=new Ct,h=new vE({depthPacking:oM}),p=new xE,d={},g=n.maxTextureSize,_={[va]:Yn,[Yn]:va,[Fi]:Fi},v=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:yR,fragmentShader:SR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new gi;E.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ai(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dv;let x=this.type;this.render=function(G,z,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const C=o.getRenderTarget(),D=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),re=o.state;re.setBlending($a),re.buffers.depth.getReversed()?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const oe=x!==da&&this.type===da,ue=x===da&&this.type!==da;for(let he=0,B=G.length;he<B;he++){const Z=G[he],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const xe=j.getFrameExtents();if(r.multiply(xe),c.copy(j.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(c.x=Math.floor(g/xe.x),r.x=c.x*xe.x,j.mapSize.x=c.x),r.y>g&&(c.y=Math.floor(g/xe.y),r.y=c.y*xe.y,j.mapSize.y=c.y)),j.map===null||oe===!0||ue===!0){const $=this.type!==da?{minFilter:zn,magFilter:zn}:{};j.map!==null&&j.map.dispose(),j.map=new Os(r.x,r.y,$),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const U=j.getViewportCount();for(let $=0;$<U;$++){const ve=j.getViewport($);u.set(c.x*ve.x,c.y*ve.y,c.x*ve.z,c.y*ve.w),re.viewport(u),j.updateMatrices(Z,$),a=j.getFrustum(),w(z,X,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===da&&P(j,X),j.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(C,D,F)};function P(G,z){const X=e.update(T);v.defines.VSM_SAMPLES!==G.blurSamples&&(v.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Os(r.x,r.y)),v.uniforms.shadow_pass.value=G.map.texture,v.uniforms.resolution.value=G.mapSize,v.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(z,null,X,v,T,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(z,null,X,y,T,null)}function L(G,z,X,C){let D=null;const F=X.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(F!==void 0)D=F;else if(D=X.isPointLight===!0?p:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const re=D.uuid,oe=z.uuid;let ue=d[re];ue===void 0&&(ue={},d[re]=ue);let he=ue[oe];he===void 0&&(he=D.clone(),ue[oe]=he,z.addEventListener("dispose",O)),D=he}if(D.visible=z.visible,D.wireframe=z.wireframe,C===da?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:_[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,X.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const re=o.properties.get(D);re.light=X}return D}function w(G,z,X,C,D){if(G.visible===!1)return;if(G.layers.test(z.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&D===da)&&(!G.frustumCulled||a.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,G.matrixWorld);const oe=e.update(G),ue=G.material;if(Array.isArray(ue)){const he=oe.groups;for(let B=0,Z=he.length;B<Z;B++){const j=he[B],xe=ue[j.materialIndex];if(xe&&xe.visible){const U=L(G,xe,C,D);G.onBeforeShadow(o,G,z,X,oe,U,j),o.renderBufferDirect(X,null,oe,U,G,j),G.onAfterShadow(o,G,z,X,oe,U,j)}}}else if(ue.visible){const he=L(G,ue,C,D);G.onBeforeShadow(o,G,z,X,oe,he,null),o.renderBufferDirect(X,null,oe,he,G,null),G.onAfterShadow(o,G,z,X,oe,he,null)}}const re=G.children;for(let oe=0,ue=re.length;oe<ue;oe++)w(re[oe],z,X,C,D)}function O(G){G.target.removeEventListener("dispose",O);for(const X in d){const C=d[X],D=G.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const ER={[_d]:vd,[xd]:Md,[yd]:Ed,[Fr]:Sd,[vd]:_d,[Md]:xd,[Ed]:yd,[Sd]:Fr};function TR(o,e){function n(){let k=!1;const be=new Ct;let Re=null;const Ie=new Ct(0,0,0,0);return{setMask:function(Ee){Re!==Ee&&!k&&(o.colorMask(Ee,Ee,Ee,Ee),Re=Ee)},setLocked:function(Ee){k=Ee},setClear:function(Ee,ge,Ge,it,Ut){Ut===!0&&(Ee*=it,ge*=it,Ge*=it),be.set(Ee,ge,Ge,it),Ie.equals(be)===!1&&(o.clearColor(Ee,ge,Ge,it),Ie.copy(be))},reset:function(){k=!1,Re=null,Ie.set(-1,0,0,0)}}}function a(){let k=!1,be=!1,Re=null,Ie=null,Ee=null;return{setReversed:function(ge){if(be!==ge){const Ge=e.get("EXT_clip_control");ge?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),be=ge;const it=Ee;Ee=null,this.setClear(it)}},getReversed:function(){return be},setTest:function(ge){ge?Se(o.DEPTH_TEST):Oe(o.DEPTH_TEST)},setMask:function(ge){Re!==ge&&!k&&(o.depthMask(ge),Re=ge)},setFunc:function(ge){if(be&&(ge=ER[ge]),Ie!==ge){switch(ge){case _d:o.depthFunc(o.NEVER);break;case vd:o.depthFunc(o.ALWAYS);break;case xd:o.depthFunc(o.LESS);break;case Fr:o.depthFunc(o.LEQUAL);break;case yd:o.depthFunc(o.EQUAL);break;case Sd:o.depthFunc(o.GEQUAL);break;case Md:o.depthFunc(o.GREATER);break;case Ed:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ie=ge}},setLocked:function(ge){k=ge},setClear:function(ge){Ee!==ge&&(be&&(ge=1-ge),o.clearDepth(ge),Ee=ge)},reset:function(){k=!1,Re=null,Ie=null,Ee=null,be=!1}}}function r(){let k=!1,be=null,Re=null,Ie=null,Ee=null,ge=null,Ge=null,it=null,Ut=null;return{setTest:function(bt){k||(bt?Se(o.STENCIL_TEST):Oe(o.STENCIL_TEST))},setMask:function(bt){be!==bt&&!k&&(o.stencilMask(bt),be=bt)},setFunc:function(bt,_i,un){(Re!==bt||Ie!==_i||Ee!==un)&&(o.stencilFunc(bt,_i,un),Re=bt,Ie=_i,Ee=un)},setOp:function(bt,_i,un){(ge!==bt||Ge!==_i||it!==un)&&(o.stencilOp(bt,_i,un),ge=bt,Ge=_i,it=un)},setLocked:function(bt){k=bt},setClear:function(bt){Ut!==bt&&(o.clearStencil(bt),Ut=bt)},reset:function(){k=!1,be=null,Re=null,Ie=null,Ee=null,ge=null,Ge=null,it=null,Ut=null}}}const c=new n,u=new a,h=new r,p=new WeakMap,d=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,T=!1,S=null,x=null,P=null,L=null,w=null,O=null,G=null,z=new st(0,0,0),X=0,C=!1,D=null,F=null,re=null,oe=null,ue=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),B=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),B=Z>=2);let xe=null,U={};const $=o.getParameter(o.SCISSOR_BOX),ve=o.getParameter(o.VIEWPORT),ye=new Ct().fromArray($),we=new Ct().fromArray(ve);function ne(k,be,Re,Ie){const Ee=new Uint8Array(4),ge=o.createTexture();o.bindTexture(k,ge),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ge=0;Ge<Re;Ge++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(be,0,o.RGBA,1,1,Ie,0,o.RGBA,o.UNSIGNED_BYTE,Ee):o.texImage2D(be+Ge,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ee);return ge}const de={};de[o.TEXTURE_2D]=ne(o.TEXTURE_2D,o.TEXTURE_2D,1),de[o.TEXTURE_CUBE_MAP]=ne(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[o.TEXTURE_2D_ARRAY]=ne(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),de[o.TEXTURE_3D]=ne(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Se(o.DEPTH_TEST),u.setFunc(Fr),Tt(!1),Fe(l0),Se(o.CULL_FACE),Dt($a);function Se(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function Oe(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function qe(k,be){return _[k]!==be?(o.bindFramebuffer(k,be),_[k]=be,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=be),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=be),!0):!1}function nt(k,be){let Re=y,Ie=!1;if(k){Re=v.get(be),Re===void 0&&(Re=[],v.set(be,Re));const Ee=k.textures;if(Re.length!==Ee.length||Re[0]!==o.COLOR_ATTACHMENT0){for(let ge=0,Ge=Ee.length;ge<Ge;ge++)Re[ge]=o.COLOR_ATTACHMENT0+ge;Re.length=Ee.length,Ie=!0}}else Re[0]!==o.BACK&&(Re[0]=o.BACK,Ie=!0);Ie&&o.drawBuffers(Re)}function kt(k){return E!==k?(o.useProgram(k),E=k,!0):!1}const mt={[Cs]:o.FUNC_ADD,[US]:o.FUNC_SUBTRACT,[LS]:o.FUNC_REVERSE_SUBTRACT};mt[NS]=o.MIN,mt[OS]=o.MAX;const H={[PS]:o.ZERO,[IS]:o.ONE,[BS]:o.SRC_COLOR,[md]:o.SRC_ALPHA,[kS]:o.SRC_ALPHA_SATURATE,[GS]:o.DST_COLOR,[zS]:o.DST_ALPHA,[FS]:o.ONE_MINUS_SRC_COLOR,[gd]:o.ONE_MINUS_SRC_ALPHA,[VS]:o.ONE_MINUS_DST_COLOR,[HS]:o.ONE_MINUS_DST_ALPHA,[XS]:o.CONSTANT_COLOR,[WS]:o.ONE_MINUS_CONSTANT_COLOR,[qS]:o.CONSTANT_ALPHA,[YS]:o.ONE_MINUS_CONSTANT_ALPHA};function Dt(k,be,Re,Ie,Ee,ge,Ge,it,Ut,bt){if(k===$a){T===!0&&(Oe(o.BLEND),T=!1);return}if(T===!1&&(Se(o.BLEND),T=!0),k!==DS){if(k!==S||bt!==C){if((x!==Cs||w!==Cs)&&(o.blendEquation(o.FUNC_ADD),x=Cs,w=Cs),bt)switch(k){case Nr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case c0:o.blendFunc(o.ONE,o.ONE);break;case u0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case f0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Nr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case c0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case u0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case f0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}P=null,L=null,O=null,G=null,z.set(0,0,0),X=0,S=k,C=bt}return}Ee=Ee||be,ge=ge||Re,Ge=Ge||Ie,(be!==x||Ee!==w)&&(o.blendEquationSeparate(mt[be],mt[Ee]),x=be,w=Ee),(Re!==P||Ie!==L||ge!==O||Ge!==G)&&(o.blendFuncSeparate(H[Re],H[Ie],H[ge],H[Ge]),P=Re,L=Ie,O=ge,G=Ge),(it.equals(z)===!1||Ut!==X)&&(o.blendColor(it.r,it.g,it.b,Ut),z.copy(it),X=Ut),S=k,C=!1}function Ze(k,be){k.side===Fi?Oe(o.CULL_FACE):Se(o.CULL_FACE);let Re=k.side===Yn;be&&(Re=!Re),Tt(Re),k.blending===Nr&&k.transparent===!1?Dt($a):Dt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),c.setMask(k.colorWrite);const Ie=k.stencilWrite;h.setTest(Ie),Ie&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ze(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Se(o.SAMPLE_ALPHA_TO_COVERAGE):Oe(o.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(k){D!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),D=k)}function Fe(k){k!==RS?(Se(o.CULL_FACE),k!==F&&(k===l0?o.cullFace(o.BACK):k===wS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Oe(o.CULL_FACE),F=k}function Xt(k){k!==re&&(B&&o.lineWidth(k),re=k)}function ze(k,be,Re){k?(Se(o.POLYGON_OFFSET_FILL),(oe!==be||ue!==Re)&&(o.polygonOffset(be,Re),oe=be,ue=Re)):Oe(o.POLYGON_OFFSET_FILL)}function rt(k){k?Se(o.SCISSOR_TEST):Oe(o.SCISSOR_TEST)}function Kt(k){k===void 0&&(k=o.TEXTURE0+he-1),xe!==k&&(o.activeTexture(k),xe=k)}function Zt(k,be,Re){Re===void 0&&(xe===null?Re=o.TEXTURE0+he-1:Re=xe);let Ie=U[Re];Ie===void 0&&(Ie={type:void 0,texture:void 0},U[Re]=Ie),(Ie.type!==k||Ie.texture!==be)&&(xe!==Re&&(o.activeTexture(Re),xe=Re),o.bindTexture(k,be||de[k]),Ie.type=k,Ie.texture=be)}function N(){const k=U[xe];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(k){ye.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),ye.copy(k))}function je(k){we.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),we.copy(k))}function Ve(k,be){let Re=d.get(be);Re===void 0&&(Re=new WeakMap,d.set(be,Re));let Ie=Re.get(k);Ie===void 0&&(Ie=o.getUniformBlockIndex(be,k.name),Re.set(k,Ie))}function Ce(k,be){const Ie=d.get(be).get(k);p.get(be)!==Ie&&(o.uniformBlockBinding(be,Ie,k.__bindingPointIndex),p.set(be,Ie))}function at(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},xe=null,U={},_={},v=new WeakMap,y=[],E=null,T=!1,S=null,x=null,P=null,L=null,w=null,O=null,G=null,z=new st(0,0,0),X=0,C=!1,D=null,F=null,re=null,oe=null,ue=null,ye.set(0,0,o.canvas.width,o.canvas.height),we.set(0,0,o.canvas.width,o.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Se,disable:Oe,bindFramebuffer:qe,drawBuffers:nt,useProgram:kt,setBlending:Dt,setMaterial:Ze,setFlipSided:Tt,setCullFace:Fe,setLineWidth:Xt,setPolygonOffset:ze,setScissorTest:rt,activeTexture:Kt,bindTexture:Zt,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:ee,texImage2D:We,texImage3D:Me,updateUBOMapping:Ve,uniformBlockBinding:Ce,texStorage2D:Ae,texStorage3D:ke,texSubImage2D:ce,texSubImage3D:_e,compressedTexSubImage2D:le,compressedTexSubImage3D:Pe,scissor:Ue,viewport:je,reset:at}}function bR(o,e,n,a,r,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new St,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return y?new OffscreenCanvas(N,b):dl("canvas")}function T(N,b,ee){let ce=1;const _e=Zt(N);if((_e.width>ee||_e.height>ee)&&(ce=ee/Math.max(_e.width,_e.height)),ce<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const le=Math.floor(ce*_e.width),Pe=Math.floor(ce*_e.height);_===void 0&&(_=E(le,Pe));const Ae=b?E(le,Pe):_;return Ae.width=le,Ae.height=Pe,Ae.getContext("2d").drawImage(N,0,0,le,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+le+"x"+Pe+")."),Ae}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),N;return N}function S(N){return N.generateMipmaps}function x(N){o.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(N,b,ee,ce,_e=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let le=b;if(b===o.RED&&(ee===o.FLOAT&&(le=o.R32F),ee===o.HALF_FLOAT&&(le=o.R16F),ee===o.UNSIGNED_BYTE&&(le=o.R8)),b===o.RED_INTEGER&&(ee===o.UNSIGNED_BYTE&&(le=o.R8UI),ee===o.UNSIGNED_SHORT&&(le=o.R16UI),ee===o.UNSIGNED_INT&&(le=o.R32UI),ee===o.BYTE&&(le=o.R8I),ee===o.SHORT&&(le=o.R16I),ee===o.INT&&(le=o.R32I)),b===o.RG&&(ee===o.FLOAT&&(le=o.RG32F),ee===o.HALF_FLOAT&&(le=o.RG16F),ee===o.UNSIGNED_BYTE&&(le=o.RG8)),b===o.RG_INTEGER&&(ee===o.UNSIGNED_BYTE&&(le=o.RG8UI),ee===o.UNSIGNED_SHORT&&(le=o.RG16UI),ee===o.UNSIGNED_INT&&(le=o.RG32UI),ee===o.BYTE&&(le=o.RG8I),ee===o.SHORT&&(le=o.RG16I),ee===o.INT&&(le=o.RG32I)),b===o.RGB_INTEGER&&(ee===o.UNSIGNED_BYTE&&(le=o.RGB8UI),ee===o.UNSIGNED_SHORT&&(le=o.RGB16UI),ee===o.UNSIGNED_INT&&(le=o.RGB32UI),ee===o.BYTE&&(le=o.RGB8I),ee===o.SHORT&&(le=o.RGB16I),ee===o.INT&&(le=o.RGB32I)),b===o.RGBA_INTEGER&&(ee===o.UNSIGNED_BYTE&&(le=o.RGBA8UI),ee===o.UNSIGNED_SHORT&&(le=o.RGBA16UI),ee===o.UNSIGNED_INT&&(le=o.RGBA32UI),ee===o.BYTE&&(le=o.RGBA8I),ee===o.SHORT&&(le=o.RGBA16I),ee===o.INT&&(le=o.RGBA32I)),b===o.RGB&&ee===o.UNSIGNED_INT_5_9_9_9_REV&&(le=o.RGB9_E5),b===o.RGBA){const Pe=_e?fu:Et.getTransfer(ce);ee===o.FLOAT&&(le=o.RGBA32F),ee===o.HALF_FLOAT&&(le=o.RGBA16F),ee===o.UNSIGNED_BYTE&&(le=Pe===Ht?o.SRGB8_ALPHA8:o.RGBA8),ee===o.UNSIGNED_SHORT_4_4_4_4&&(le=o.RGBA4),ee===o.UNSIGNED_SHORT_5_5_5_1&&(le=o.RGB5_A1)}return(le===o.R16F||le===o.R32F||le===o.RG16F||le===o.RG32F||le===o.RGBA16F||le===o.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function w(N,b){let ee;return N?b===null||b===Ns||b===ll?ee=o.DEPTH24_STENCIL8:b===Ai?ee=o.DEPTH32F_STENCIL8:b===ol&&(ee=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ns||b===ll?ee=o.DEPTH_COMPONENT24:b===Ai?ee=o.DEPTH_COMPONENT32F:b===ol&&(ee=o.DEPTH_COMPONENT16),ee}function O(N,b){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==zn&&N.minFilter!==ii?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function G(N){const b=N.target;b.removeEventListener("dispose",G),X(b),b.isVideoTexture&&g.delete(b)}function z(N){const b=N.target;b.removeEventListener("dispose",z),D(b)}function X(N){const b=a.get(N);if(b.__webglInit===void 0)return;const ee=N.source,ce=v.get(ee);if(ce){const _e=ce[b.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&C(N),Object.keys(ce).length===0&&v.delete(ee)}a.remove(N)}function C(N){const b=a.get(N);o.deleteTexture(b.__webglTexture);const ee=N.source,ce=v.get(ee);delete ce[b.__cacheKey],u.memory.textures--}function D(N){const b=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(b.__webglFramebuffer[ce]))for(let _e=0;_e<b.__webglFramebuffer[ce].length;_e++)o.deleteFramebuffer(b.__webglFramebuffer[ce][_e]);else o.deleteFramebuffer(b.__webglFramebuffer[ce]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[ce])}else{if(Array.isArray(b.__webglFramebuffer))for(let ce=0;ce<b.__webglFramebuffer.length;ce++)o.deleteFramebuffer(b.__webglFramebuffer[ce]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ce=0;ce<b.__webglColorRenderbuffer.length;ce++)b.__webglColorRenderbuffer[ce]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[ce]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ee=N.textures;for(let ce=0,_e=ee.length;ce<_e;ce++){const le=a.get(ee[ce]);le.__webglTexture&&(o.deleteTexture(le.__webglTexture),u.memory.textures--),a.remove(ee[ce])}a.remove(N)}let F=0;function re(){F=0}function oe(){const N=F;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),F+=1,N}function ue(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function he(N,b){const ee=a.get(N);if(N.isVideoTexture&&rt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&ee.__version!==N.version){const ce=N.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(ee,N,b);return}}else N.isExternalTexture&&(ee.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,ee.__webglTexture,o.TEXTURE0+b)}function B(N,b){const ee=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){de(ee,N,b);return}n.bindTexture(o.TEXTURE_2D_ARRAY,ee.__webglTexture,o.TEXTURE0+b)}function Z(N,b){const ee=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){de(ee,N,b);return}n.bindTexture(o.TEXTURE_3D,ee.__webglTexture,o.TEXTURE0+b)}function j(N,b){const ee=a.get(N);if(N.version>0&&ee.__version!==N.version){Se(ee,N,b);return}n.bindTexture(o.TEXTURE_CUBE_MAP,ee.__webglTexture,o.TEXTURE0+b)}const xe={[Gr]:o.REPEAT,[Ja]:o.CLAMP_TO_EDGE,[uu]:o.MIRRORED_REPEAT},U={[zn]:o.NEAREST,[Nv]:o.NEAREST_MIPMAP_NEAREST,[il]:o.NEAREST_MIPMAP_LINEAR,[ii]:o.LINEAR,[iu]:o.LINEAR_MIPMAP_NEAREST,[ma]:o.LINEAR_MIPMAP_LINEAR},$={[cM]:o.NEVER,[mM]:o.ALWAYS,[uM]:o.LESS,[kv]:o.LEQUAL,[fM]:o.EQUAL,[pM]:o.GEQUAL,[hM]:o.GREATER,[dM]:o.NOTEQUAL};function ve(N,b){if(b.type===Ai&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ii||b.magFilter===iu||b.magFilter===il||b.magFilter===ma||b.minFilter===ii||b.minFilter===iu||b.minFilter===il||b.minFilter===ma)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,xe[b.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,xe[b.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,xe[b.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,U[b.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,U[b.minFilter]),b.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,$[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===zn||b.minFilter!==il&&b.minFilter!==ma||b.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function ye(N,b){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",G));const ce=b.source;let _e=v.get(ce);_e===void 0&&(_e={},v.set(ce,_e));const le=ue(b);if(le!==N.__cacheKey){_e[le]===void 0&&(_e[le]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),_e[le].usedTimes++;const Pe=_e[N.__cacheKey];Pe!==void 0&&(_e[N.__cacheKey].usedTimes--,Pe.usedTimes===0&&C(b)),N.__cacheKey=le,N.__webglTexture=_e[le].texture}return ee}function we(N,b,ee){return Math.floor(Math.floor(N/ee)/b)}function ne(N,b,ee,ce){const le=N.updateRanges;if(le.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,ee,ce,b.data);else{le.sort((Me,Ue)=>Me.start-Ue.start);let Pe=0;for(let Me=1;Me<le.length;Me++){const Ue=le[Pe],je=le[Me],Ve=Ue.start+Ue.count,Ce=we(je.start,b.width,4),at=we(Ue.start,b.width,4);je.start<=Ve+1&&Ce===at&&we(je.start+je.count-1,b.width,4)===Ce?Ue.count=Math.max(Ue.count,je.start+je.count-Ue.start):(++Pe,le[Pe]=je)}le.length=Pe+1;const Ae=o.getParameter(o.UNPACK_ROW_LENGTH),ke=o.getParameter(o.UNPACK_SKIP_PIXELS),We=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Me=0,Ue=le.length;Me<Ue;Me++){const je=le[Me],Ve=Math.floor(je.start/4),Ce=Math.ceil(je.count/4),at=Ve%b.width,k=Math.floor(Ve/b.width),be=Ce,Re=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,at),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),n.texSubImage2D(o.TEXTURE_2D,0,at,k,be,Re,ee,ce,b.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ae),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ke),o.pixelStorei(o.UNPACK_SKIP_ROWS,We)}}function de(N,b,ee){let ce=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ce=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ce=o.TEXTURE_3D);const _e=ye(N,b),le=b.source;n.bindTexture(ce,N.__webglTexture,o.TEXTURE0+ee);const Pe=a.get(le);if(le.version!==Pe.__version||_e===!0){n.activeTexture(o.TEXTURE0+ee);const Ae=Et.getPrimaries(Et.workingColorSpace),ke=b.colorSpace===Qa?null:Et.getPrimaries(b.colorSpace),We=b.colorSpace===Qa||Ae===ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Me=T(b.image,!1,r.maxTextureSize);Me=Kt(b,Me);const Ue=c.convert(b.format,b.colorSpace),je=c.convert(b.type);let Ve=L(b.internalFormat,Ue,je,b.colorSpace,b.isVideoTexture);ve(ce,b);let Ce;const at=b.mipmaps,k=b.isVideoTexture!==!0,be=Pe.__version===void 0||_e===!0,Re=le.dataReady,Ie=O(b,Me);if(b.isDepthTexture)Ve=w(b.format===ul,b.type),be&&(k?n.texStorage2D(o.TEXTURE_2D,1,Ve,Me.width,Me.height):n.texImage2D(o.TEXTURE_2D,0,Ve,Me.width,Me.height,0,Ue,je,null));else if(b.isDataTexture)if(at.length>0){k&&be&&n.texStorage2D(o.TEXTURE_2D,Ie,Ve,at[0].width,at[0].height);for(let Ee=0,ge=at.length;Ee<ge;Ee++)Ce=at[Ee],k?Re&&n.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Ce.width,Ce.height,Ue,je,Ce.data):n.texImage2D(o.TEXTURE_2D,Ee,Ve,Ce.width,Ce.height,0,Ue,je,Ce.data);b.generateMipmaps=!1}else k?(be&&n.texStorage2D(o.TEXTURE_2D,Ie,Ve,Me.width,Me.height),Re&&ne(b,Me,Ue,je)):n.texImage2D(o.TEXTURE_2D,0,Ve,Me.width,Me.height,0,Ue,je,Me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&be&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,Ve,at[0].width,at[0].height,Me.depth);for(let Ee=0,ge=at.length;Ee<ge;Ee++)if(Ce=at[Ee],b.format!==mi)if(Ue!==null)if(k){if(Re)if(b.layerUpdates.size>0){const Ge=ev(Ce.width,Ce.height,b.format,b.type);for(const it of b.layerUpdates){const Ut=Ce.data.subarray(it*Ge/Ce.data.BYTES_PER_ELEMENT,(it+1)*Ge/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,it,Ce.width,Ce.height,1,Ue,Ut)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,Ce.width,Ce.height,Me.depth,Ue,Ce.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ee,Ve,Ce.width,Ce.height,Me.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Re&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,Ce.width,Ce.height,Me.depth,Ue,je,Ce.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Ee,Ve,Ce.width,Ce.height,Me.depth,0,Ue,je,Ce.data)}else{k&&be&&n.texStorage2D(o.TEXTURE_2D,Ie,Ve,at[0].width,at[0].height);for(let Ee=0,ge=at.length;Ee<ge;Ee++)Ce=at[Ee],b.format!==mi?Ue!==null?k?Re&&n.compressedTexSubImage2D(o.TEXTURE_2D,Ee,0,0,Ce.width,Ce.height,Ue,Ce.data):n.compressedTexImage2D(o.TEXTURE_2D,Ee,Ve,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Re&&n.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Ce.width,Ce.height,Ue,je,Ce.data):n.texImage2D(o.TEXTURE_2D,Ee,Ve,Ce.width,Ce.height,0,Ue,je,Ce.data)}else if(b.isDataArrayTexture)if(k){if(be&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,Ve,Me.width,Me.height,Me.depth),Re)if(b.layerUpdates.size>0){const Ee=ev(Me.width,Me.height,b.format,b.type);for(const ge of b.layerUpdates){const Ge=Me.data.subarray(ge*Ee/Me.data.BYTES_PER_ELEMENT,(ge+1)*Ee/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ge,Me.width,Me.height,1,Ue,je,Ge)}b.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ue,je,Me.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Ve,Me.width,Me.height,Me.depth,0,Ue,je,Me.data);else if(b.isData3DTexture)k?(be&&n.texStorage3D(o.TEXTURE_3D,Ie,Ve,Me.width,Me.height,Me.depth),Re&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ue,je,Me.data)):n.texImage3D(o.TEXTURE_3D,0,Ve,Me.width,Me.height,Me.depth,0,Ue,je,Me.data);else if(b.isFramebufferTexture){if(be)if(k)n.texStorage2D(o.TEXTURE_2D,Ie,Ve,Me.width,Me.height);else{let Ee=Me.width,ge=Me.height;for(let Ge=0;Ge<Ie;Ge++)n.texImage2D(o.TEXTURE_2D,Ge,Ve,Ee,ge,0,Ue,je,null),Ee>>=1,ge>>=1}}else if(at.length>0){if(k&&be){const Ee=Zt(at[0]);n.texStorage2D(o.TEXTURE_2D,Ie,Ve,Ee.width,Ee.height)}for(let Ee=0,ge=at.length;Ee<ge;Ee++)Ce=at[Ee],k?Re&&n.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Ue,je,Ce):n.texImage2D(o.TEXTURE_2D,Ee,Ve,Ue,je,Ce);b.generateMipmaps=!1}else if(k){if(be){const Ee=Zt(Me);n.texStorage2D(o.TEXTURE_2D,Ie,Ve,Ee.width,Ee.height)}Re&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Ue,je,Me)}else n.texImage2D(o.TEXTURE_2D,0,Ve,Ue,je,Me);S(b)&&x(ce),Pe.__version=le.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Se(N,b,ee){if(b.image.length!==6)return;const ce=ye(N,b),_e=b.source;n.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+ee);const le=a.get(_e);if(_e.version!==le.__version||ce===!0){n.activeTexture(o.TEXTURE0+ee);const Pe=Et.getPrimaries(Et.workingColorSpace),Ae=b.colorSpace===Qa?null:Et.getPrimaries(b.colorSpace),ke=b.colorSpace===Qa||Pe===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const We=b.isCompressedTexture||b.image[0].isCompressedTexture,Me=b.image[0]&&b.image[0].isDataTexture,Ue=[];for(let ge=0;ge<6;ge++)!We&&!Me?Ue[ge]=T(b.image[ge],!0,r.maxCubemapSize):Ue[ge]=Me?b.image[ge].image:b.image[ge],Ue[ge]=Kt(b,Ue[ge]);const je=Ue[0],Ve=c.convert(b.format,b.colorSpace),Ce=c.convert(b.type),at=L(b.internalFormat,Ve,Ce,b.colorSpace),k=b.isVideoTexture!==!0,be=le.__version===void 0||ce===!0,Re=_e.dataReady;let Ie=O(b,je);ve(o.TEXTURE_CUBE_MAP,b);let Ee;if(We){k&&be&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,at,je.width,je.height);for(let ge=0;ge<6;ge++){Ee=Ue[ge].mipmaps;for(let Ge=0;Ge<Ee.length;Ge++){const it=Ee[Ge];b.format!==mi?Ve!==null?k?Re&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge,0,0,it.width,it.height,Ve,it.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge,at,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Re&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge,0,0,it.width,it.height,Ve,Ce,it.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge,at,it.width,it.height,0,Ve,Ce,it.data)}}}else{if(Ee=b.mipmaps,k&&be){Ee.length>0&&Ie++;const ge=Zt(Ue[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,at,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Me){k?Re&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ue[ge].width,Ue[ge].height,Ve,Ce,Ue[ge].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,at,Ue[ge].width,Ue[ge].height,0,Ve,Ce,Ue[ge].data);for(let Ge=0;Ge<Ee.length;Ge++){const Ut=Ee[Ge].image[ge].image;k?Re&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge+1,0,0,Ut.width,Ut.height,Ve,Ce,Ut.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge+1,at,Ut.width,Ut.height,0,Ve,Ce,Ut.data)}}else{k?Re&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ve,Ce,Ue[ge]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,at,Ve,Ce,Ue[ge]);for(let Ge=0;Ge<Ee.length;Ge++){const it=Ee[Ge];k?Re&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge+1,0,0,Ve,Ce,it.image[ge]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge+1,at,Ve,Ce,it.image[ge])}}}S(b)&&x(o.TEXTURE_CUBE_MAP),le.__version=_e.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Oe(N,b,ee,ce,_e,le){const Pe=c.convert(ee.format,ee.colorSpace),Ae=c.convert(ee.type),ke=L(ee.internalFormat,Pe,Ae,ee.colorSpace),We=a.get(b),Me=a.get(ee);if(Me.__renderTarget=b,!We.__hasExternalTextures){const Ue=Math.max(1,b.width>>le),je=Math.max(1,b.height>>le);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?n.texImage3D(_e,le,ke,Ue,je,b.depth,0,Pe,Ae,null):n.texImage2D(_e,le,ke,Ue,je,0,Pe,Ae,null)}n.bindFramebuffer(o.FRAMEBUFFER,N),ze(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ce,_e,Me.__webglTexture,0,Xt(b)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ce,_e,Me.__webglTexture,le),n.bindFramebuffer(o.FRAMEBUFFER,null)}function qe(N,b,ee){if(o.bindRenderbuffer(o.RENDERBUFFER,N),b.depthBuffer){const ce=b.depthTexture,_e=ce&&ce.isDepthTexture?ce.type:null,le=w(b.stencilBuffer,_e),Pe=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=Xt(b);ze(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae,le,b.width,b.height):ee?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae,le,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,le,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pe,o.RENDERBUFFER,N)}else{const ce=b.textures;for(let _e=0;_e<ce.length;_e++){const le=ce[_e],Pe=c.convert(le.format,le.colorSpace),Ae=c.convert(le.type),ke=L(le.internalFormat,Pe,Ae,le.colorSpace),We=Xt(b);ee&&ze(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,We,ke,b.width,b.height):ze(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,We,ke,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ke,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function nt(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=a.get(b.depthTexture);ce.__renderTarget=b,(!ce.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),he(b.depthTexture,0);const _e=ce.__webglTexture,le=Xt(b);if(b.depthTexture.format===cl)ze(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0,le):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0);else if(b.depthTexture.format===ul)ze(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0,le):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function kt(N){const b=a.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const ce=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ce){const _e=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ce.removeEventListener("dispose",_e)};ce.addEventListener("dispose",_e),b.__depthDisposeCallback=_e}b.__boundDepthTexture=ce}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const ce=N.texture.mipmaps;ce&&ce.length>0?nt(b.__webglFramebuffer[0],N):nt(b.__webglFramebuffer,N)}else if(ee){b.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[ce]),b.__webglDepthbuffer[ce]===void 0)b.__webglDepthbuffer[ce]=o.createRenderbuffer(),qe(b.__webglDepthbuffer[ce],N,!1);else{const _e=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer[ce];o.bindRenderbuffer(o.RENDERBUFFER,le),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,le)}}else{const ce=N.texture.mipmaps;if(ce&&ce.length>0?n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),qe(b.__webglDepthbuffer,N,!1);else{const _e=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,le),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,le)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function mt(N,b,ee){const ce=a.get(N);b!==void 0&&Oe(ce.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ee!==void 0&&kt(N)}function H(N){const b=N.texture,ee=a.get(N),ce=a.get(b);N.addEventListener("dispose",z);const _e=N.textures,le=N.isWebGLCubeRenderTarget===!0,Pe=_e.length>1;if(Pe||(ce.__webglTexture===void 0&&(ce.__webglTexture=o.createTexture()),ce.__version=b.version,u.memory.textures++),le){ee.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer[Ae]=[];for(let ke=0;ke<b.mipmaps.length;ke++)ee.__webglFramebuffer[Ae][ke]=o.createFramebuffer()}else ee.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ae=0;Ae<b.mipmaps.length;Ae++)ee.__webglFramebuffer[Ae]=o.createFramebuffer()}else ee.__webglFramebuffer=o.createFramebuffer();if(Pe)for(let Ae=0,ke=_e.length;Ae<ke;Ae++){const We=a.get(_e[Ae]);We.__webglTexture===void 0&&(We.__webglTexture=o.createTexture(),u.memory.textures++)}if(N.samples>0&&ze(N)===!1){ee.__webglMultisampledFramebuffer=o.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const ke=_e[Ae];ee.__webglColorRenderbuffer[Ae]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ee.__webglColorRenderbuffer[Ae]);const We=c.convert(ke.format,ke.colorSpace),Me=c.convert(ke.type),Ue=L(ke.internalFormat,We,Me,ke.colorSpace,N.isXRRenderTarget===!0),je=Xt(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,je,Ue,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,ee.__webglColorRenderbuffer[Ae])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=o.createRenderbuffer(),qe(ee.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(le){n.bindTexture(o.TEXTURE_CUBE_MAP,ce.__webglTexture),ve(o.TEXTURE_CUBE_MAP,b);for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0)for(let ke=0;ke<b.mipmaps.length;ke++)Oe(ee.__webglFramebuffer[Ae][ke],N,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ke);else Oe(ee.__webglFramebuffer[Ae],N,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(b)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let Ae=0,ke=_e.length;Ae<ke;Ae++){const We=_e[Ae],Me=a.get(We);let Ue=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ue=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ue,Me.__webglTexture),ve(Ue,We),Oe(ee.__webglFramebuffer,N,We,o.COLOR_ATTACHMENT0+Ae,Ue,0),S(We)&&x(Ue)}n.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ae=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ae,ce.__webglTexture),ve(Ae,b),b.mipmaps&&b.mipmaps.length>0)for(let ke=0;ke<b.mipmaps.length;ke++)Oe(ee.__webglFramebuffer[ke],N,b,o.COLOR_ATTACHMENT0,Ae,ke);else Oe(ee.__webglFramebuffer,N,b,o.COLOR_ATTACHMENT0,Ae,0);S(b)&&x(Ae),n.unbindTexture()}N.depthBuffer&&kt(N)}function Dt(N){const b=N.textures;for(let ee=0,ce=b.length;ee<ce;ee++){const _e=b[ee];if(S(_e)){const le=P(N),Pe=a.get(_e).__webglTexture;n.bindTexture(le,Pe),x(le),n.unbindTexture()}}}const Ze=[],Tt=[];function Fe(N){if(N.samples>0){if(ze(N)===!1){const b=N.textures,ee=N.width,ce=N.height;let _e=o.COLOR_BUFFER_BIT;const le=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pe=a.get(N),Ae=b.length>1;if(Ae)for(let We=0;We<b.length;We++)n.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ke=N.texture.mipmaps;ke&&ke.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let We=0;We<b.length;We++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),Ae){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[We]);const Me=a.get(b[We]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Me,0)}o.blitFramebuffer(0,0,ee,ce,0,0,ee,ce,_e,o.NEAREST),p===!0&&(Ze.length=0,Tt.length=0,Ze.push(o.COLOR_ATTACHMENT0+We),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ze.push(le),Tt.push(le),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Tt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ze))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ae)for(let We=0;We<b.length;We++){n.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[We]);const Me=a.get(b[We]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.TEXTURE_2D,Me,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const b=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Xt(N){return Math.min(r.maxSamples,N.samples)}function ze(N){const b=a.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function rt(N){const b=u.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function Kt(N,b){const ee=N.colorSpace,ce=N.format,_e=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ee!==Hn&&ee!==Qa&&(Et.getTransfer(ee)===Ht?(ce!==mi||_e!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),b}function Zt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=oe,this.resetTextureUnits=re,this.setTexture2D=he,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=mt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=ze}function AR(o,e){function n(a,r=Qa){let c;const u=Et.getTransfer(r);if(a===Vi)return o.UNSIGNED_BYTE;if(a===cp)return o.UNSIGNED_SHORT_4_4_4_4;if(a===up)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Iv)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===Ov)return o.BYTE;if(a===Pv)return o.SHORT;if(a===ol)return o.UNSIGNED_SHORT;if(a===lp)return o.INT;if(a===Ns)return o.UNSIGNED_INT;if(a===Ai)return o.FLOAT;if(a===pl)return o.HALF_FLOAT;if(a===Bv)return o.ALPHA;if(a===Fv)return o.RGB;if(a===mi)return o.RGBA;if(a===cl)return o.DEPTH_COMPONENT;if(a===ul)return o.DEPTH_STENCIL;if(a===fp)return o.RED;if(a===hp)return o.RED_INTEGER;if(a===zv)return o.RG;if(a===dp)return o.RG_INTEGER;if(a===pp)return o.RGBA_INTEGER;if(a===au||a===su||a===ru||a===ou)if(u===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===au)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===au)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===su)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ru)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ou)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ad||a===Rd||a===wd||a===Cd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Ad)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Rd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===wd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Cd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Dd||a===Ud||a===Ld)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Dd||a===Ud)return u===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Ld)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Nd||a===Od||a===Pd||a===Id||a===Bd||a===Fd||a===zd||a===Hd||a===Gd||a===Vd||a===kd||a===Xd||a===Wd||a===qd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Nd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Od)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Pd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Id)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Bd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Fd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===zd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Hd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Gd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Vd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===kd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Xd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Wd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===qd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===lu||a===Yd||a===jd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===lu)return u===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Yd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===jd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Hv||a===Kd||a===Zd||a===Qd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===lu)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ll?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}class fx extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const RR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new fx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new ts({vertexShader:RR,fragmentShader:wR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ai(new vu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DR extends Yr{constructor(e,n){super();const a=this;let r=null,c=1,u=null,h="local-floor",p=1,d=null,g=null,_=null,v=null,y=null,E=null;const T=new CR,S={},x=n.getContextAttributes();let P=null,L=null;const w=[],O=[],G=new St;let z=null;const X=new qn;X.viewport=new Ct;const C=new qn;C.viewport=new Ct;const D=[X,C],F=new VE;let re=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=w[ne];return de===void 0&&(de=new Qh,w[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=w[ne];return de===void 0&&(de=new Qh,w[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=w[ne];return de===void 0&&(de=new Qh,w[ne]=de),de.getHandSpace()};function ue(ne){const de=O.indexOf(ne.inputSource);if(de===-1)return;const Se=w[de];Se!==void 0&&(Se.update(ne.inputSource,ne.frame,d||u),Se.dispatchEvent({type:ne.type,data:ne.inputSource}))}function he(){r.removeEventListener("select",ue),r.removeEventListener("selectstart",ue),r.removeEventListener("selectend",ue),r.removeEventListener("squeeze",ue),r.removeEventListener("squeezestart",ue),r.removeEventListener("squeezeend",ue),r.removeEventListener("end",he),r.removeEventListener("inputsourceschange",B);for(let ne=0;ne<w.length;ne++){const de=O[ne];de!==null&&(O[ne]=null,w[ne].disconnect(de))}re=null,oe=null,T.reset();for(const ne in S)delete S[ne];e.setRenderTarget(P),y=null,v=null,_=null,r=null,L=null,we.stop(),a.isPresenting=!1,e.setPixelRatio(z),e.setSize(G.width,G.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){h=ne,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(ne){d=ne},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(P=e.getRenderTarget(),r.addEventListener("select",ue),r.addEventListener("selectstart",ue),r.addEventListener("selectend",ue),r.addEventListener("squeeze",ue),r.addEventListener("squeezestart",ue),r.addEventListener("squeezeend",ue),r.addEventListener("end",he),r.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(r,n)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Oe=null,qe=null;x.depth&&(qe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=x.stencil?ul:cl,Oe=x.stencil?ll:Ns);const nt={colorFormat:n.RGBA8,depthFormat:qe,scaleFactor:c};v=_.createProjectionLayer(nt),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new Os(v.textureWidth,v.textureHeight,{format:mi,type:Vi,depthTexture:new nx(v.textureWidth,v.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(r,n,Se),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Os(y.framebufferWidth,y.framebufferHeight,{format:mi,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await r.requestReferenceSpace(h),we.setContext(r),we.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function B(ne){for(let de=0;de<ne.removed.length;de++){const Se=ne.removed[de],Oe=O.indexOf(Se);Oe>=0&&(O[Oe]=null,w[Oe].disconnect(Se))}for(let de=0;de<ne.added.length;de++){const Se=ne.added[de];let Oe=O.indexOf(Se);if(Oe===-1){for(let nt=0;nt<w.length;nt++)if(nt>=O.length){O.push(Se),Oe=nt;break}else if(O[nt]===null){O[nt]=Se,Oe=nt;break}if(Oe===-1)break}const qe=w[Oe];qe&&qe.connect(Se)}}const Z=new q,j=new q;function xe(ne,de,Se){Z.setFromMatrixPosition(de.matrixWorld),j.setFromMatrixPosition(Se.matrixWorld);const Oe=Z.distanceTo(j),qe=de.projectionMatrix.elements,nt=Se.projectionMatrix.elements,kt=qe[14]/(qe[10]-1),mt=qe[14]/(qe[10]+1),H=(qe[9]+1)/qe[5],Dt=(qe[9]-1)/qe[5],Ze=(qe[8]-1)/qe[0],Tt=(nt[8]+1)/nt[0],Fe=kt*Ze,Xt=kt*Tt,ze=Oe/(-Ze+Tt),rt=ze*-Ze;if(de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(rt),ne.translateZ(ze),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),qe[10]===-1)ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Kt=kt+ze,Zt=mt+ze,N=Fe-rt,b=Xt+(Oe-rt),ee=H*mt/Zt*Kt,ce=Dt*mt/Zt*Kt;ne.projectionMatrix.makePerspective(N,b,ee,ce,Kt,Zt),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function U(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let de=ne.near,Se=ne.far;T.texture!==null&&(T.depthNear>0&&(de=T.depthNear),T.depthFar>0&&(Se=T.depthFar)),F.near=C.near=X.near=de,F.far=C.far=X.far=Se,(re!==F.near||oe!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),re=F.near,oe=F.far),F.layers.mask=ne.layers.mask|6,X.layers.mask=F.layers.mask&3,C.layers.mask=F.layers.mask&5;const Oe=ne.parent,qe=F.cameras;U(F,Oe);for(let nt=0;nt<qe.length;nt++)U(qe[nt],Oe);qe.length===2?xe(F,X,C):F.projectionMatrix.copy(X.projectionMatrix),$(ne,F,Oe)};function $(ne,de,Se){Se===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(Se.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Vr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(ne){p=ne,v!==null&&(v.fixedFoveation=ne),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ne)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(F)},this.getCameraTexture=function(ne){return S[ne]};let ve=null;function ye(ne,de){if(g=de.getViewerPose(d||u),E=de,g!==null){const Se=g.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let Oe=!1;Se.length!==F.cameras.length&&(F.cameras.length=0,Oe=!0);for(let mt=0;mt<Se.length;mt++){const H=Se[mt];let Dt=null;if(y!==null)Dt=y.getViewport(H);else{const Tt=_.getViewSubImage(v,H);Dt=Tt.viewport,mt===0&&(e.setRenderTargetTextures(L,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(L))}let Ze=D[mt];Ze===void 0&&(Ze=new qn,Ze.layers.enable(mt),Ze.viewport=new Ct,D[mt]=Ze),Ze.matrix.fromArray(H.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(H.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),mt===0&&(F.matrix.copy(Ze.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Oe===!0&&F.cameras.push(Ze)}const qe=r.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){const mt=_.getDepthInformation(Se[0]);mt&&mt.isValid&&mt.texture&&T.init(mt,r.renderState)}if(qe&&qe.includes("camera-access")&&(e.state.unbindTexture(),_))for(let mt=0;mt<Se.length;mt++){const H=Se[mt].camera;if(H){let Dt=S[H];Dt||(Dt=new fx,S[H]=Dt);const Ze=_.getCameraImage(H);Dt.sourceTexture=Ze}}}for(let Se=0;Se<w.length;Se++){const Oe=O[Se],qe=w[Se];Oe!==null&&qe!==void 0&&qe.update(Oe,de,d||u)}ve&&ve(ne,de),de.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:de}),E=null}const we=new rx;we.setAnimationLoop(ye),this.setAnimationLoop=function(ne){ve=ne},this.dispose=function(){}}}const bs=new ki,UR=new ht;function LR(o,e){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,Zv(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function r(S,x,P,L,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,w)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),T(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?p(S,x,P,L):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Yn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Yn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const P=e.get(x),L=P.envMap,w=P.envMapRotation;L&&(S.envMap.value=L,bs.copy(w),bs.x*=-1,bs.y*=-1,bs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),S.envMapRotation.value.setFromMatrix4(UR.makeRotationFromEuler(bs)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,P,L){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*P,S.scale.value=L*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,P){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Yn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){const P=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function NR(o,e,n,a){let r={},c={},u=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,L){const w=L.program;a.uniformBlockBinding(P,w)}function d(P,L){let w=r[P.id];w===void 0&&(E(P),w=g(P),r[P.id]=w,P.addEventListener("dispose",S));const O=L.program;a.updateUBOMapping(P,O);const G=e.render.frame;c[P.id]!==G&&(v(P),c[P.id]=G)}function g(P){const L=_();P.__bindingPointIndex=L;const w=o.createBuffer(),O=P.__size,G=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,O,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,w),w}function _(){for(let P=0;P<h;P++)if(u.indexOf(P)===-1)return u.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const L=r[P.id],w=P.uniforms,O=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let G=0,z=w.length;G<z;G++){const X=Array.isArray(w[G])?w[G]:[w[G]];for(let C=0,D=X.length;C<D;C++){const F=X[C];if(y(F,G,C,O)===!0){const re=F.__offset,oe=Array.isArray(F.value)?F.value:[F.value];let ue=0;for(let he=0;he<oe.length;he++){const B=oe[he],Z=T(B);typeof B=="number"||typeof B=="boolean"?(F.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,re+ue,F.__data)):B.isMatrix3?(F.__data[0]=B.elements[0],F.__data[1]=B.elements[1],F.__data[2]=B.elements[2],F.__data[3]=0,F.__data[4]=B.elements[3],F.__data[5]=B.elements[4],F.__data[6]=B.elements[5],F.__data[7]=0,F.__data[8]=B.elements[6],F.__data[9]=B.elements[7],F.__data[10]=B.elements[8],F.__data[11]=0):(B.toArray(F.__data,ue),ue+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,re,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(P,L,w,O){const G=P.value,z=L+"_"+w;if(O[z]===void 0)return typeof G=="number"||typeof G=="boolean"?O[z]=G:O[z]=G.clone(),!0;{const X=O[z];if(typeof G=="number"||typeof G=="boolean"){if(X!==G)return O[z]=G,!0}else if(X.equals(G)===!1)return X.copy(G),!0}return!1}function E(P){const L=P.uniforms;let w=0;const O=16;for(let z=0,X=L.length;z<X;z++){const C=Array.isArray(L[z])?L[z]:[L[z]];for(let D=0,F=C.length;D<F;D++){const re=C[D],oe=Array.isArray(re.value)?re.value:[re.value];for(let ue=0,he=oe.length;ue<he;ue++){const B=oe[ue],Z=T(B),j=w%O,xe=j%Z.boundary,U=j+xe;w+=xe,U!==0&&O-U<Z.storage&&(w+=O-U),re.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=w,w+=Z.storage}}}const G=w%O;return G>0&&(w+=O-G),P.__size=w,P.__cache={},this}function T(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),L}function S(P){const L=P.target;L.removeEventListener("dispose",S);const w=u.indexOf(L.__bindingPointIndex);u.splice(w,1),o.deleteBuffer(r[L.id]),delete r[L.id],delete c[L.id]}function x(){for(const P in r)o.deleteBuffer(r[P]);u=[],r={},c={}}return{bind:p,update:d,dispose:x}}class OR{constructor(e={}){const{canvas:n=LM(),context:a=null,depth:r=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,x=null;const P=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let O=!1;this._outputColorSpace=An;let G=0,z=0,X=null,C=-1,D=null;const F=new Ct,re=new Ct;let oe=null;const ue=new st(0);let he=0,B=n.width,Z=n.height,j=1,xe=null,U=null;const $=new Ct(0,0,B,Z),ve=new Ct(0,0,B,Z);let ye=!1;const we=new xp;let ne=!1,de=!1;const Se=new ht,Oe=new q,qe=new Ct,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function mt(){return X===null?j:1}let H=a;function Dt(R,W){return n.getContext(R,W)}try{const R={alpha:!0,depth:r,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${op}`),n.addEventListener("webglcontextlost",Re,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),H===null){const W="webgl2";if(H=Dt(W,R),H===null)throw Dt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ze,Tt,Fe,Xt,ze,rt,Kt,Zt,N,b,ee,ce,_e,le,Pe,Ae,ke,We,Me,Ue,je,Ve,Ce,at;function k(){Ze=new XA(H),Ze.init(),Ve=new AR(H,Ze),Tt=new BA(H,Ze,e,Ve),Fe=new TR(H,Ze),Tt.reversedDepthBuffer&&v&&Fe.buffers.depth.setReversed(!0),Xt=new YA(H),ze=new fR,rt=new bR(H,Ze,Fe,ze,Tt,Ve,Xt),Kt=new zA(w),Zt=new kA(w),N=new $E(H),Ce=new PA(H,N),b=new WA(H,N,Xt,Ce),ee=new KA(H,b,N,Xt),Me=new jA(H,Tt,rt),Ae=new FA(ze),ce=new uR(w,Kt,Zt,Ze,Tt,Ce,Ae),_e=new LR(w,ze),le=new dR,Pe=new xR(Ze),We=new OA(w,Kt,Zt,Fe,ee,y,p),ke=new MR(w,ee,Tt),at=new NR(H,Xt,Tt,Fe),Ue=new IA(H,Ze,Xt),je=new qA(H,Ze,Xt),Xt.programs=ce.programs,w.capabilities=Tt,w.extensions=Ze,w.properties=ze,w.renderLists=le,w.shadowMap=ke,w.state=Fe,w.info=Xt}k();const be=new DR(w,H);this.xr=be,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=Ze.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ze.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(B,Z,!1))},this.getSize=function(R){return R.set(B,Z)},this.setSize=function(R,W,ae=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Z=W,n.width=Math.floor(R*j),n.height=Math.floor(W*j),ae===!0&&(n.style.width=R+"px",n.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(B*j,Z*j).floor()},this.setDrawingBufferSize=function(R,W,ae){B=R,Z=W,j=ae,n.width=Math.floor(R*ae),n.height=Math.floor(W*ae),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,W,ae,se){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,W,ae,se),Fe.viewport(F.copy($).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(ve)},this.setScissor=function(R,W,ae,se){R.isVector4?ve.set(R.x,R.y,R.z,R.w):ve.set(R,W,ae,se),Fe.scissor(re.copy(ve).multiplyScalar(j).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(R){Fe.setScissorTest(ye=R)},this.setOpaqueSort=function(R){xe=R},this.setTransparentSort=function(R){U=R},this.getClearColor=function(R){return R.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,ae=!0){let se=0;if(R){let K=!1;if(X!==null){const Te=X.texture.format;K=Te===pp||Te===dp||Te===hp}if(K){const Te=X.texture.type,De=Te===Vi||Te===Ns||Te===ol||Te===ll||Te===cp||Te===up,Be=We.getClearColor(),Le=We.getClearAlpha(),Qe=Be.r,$e=Be.g,Xe=Be.b;De?(E[0]=Qe,E[1]=$e,E[2]=Xe,E[3]=Le,H.clearBufferuiv(H.COLOR,0,E)):(T[0]=Qe,T[1]=$e,T[2]=Xe,T[3]=Le,H.clearBufferiv(H.COLOR,0,T))}else se|=H.COLOR_BUFFER_BIT}W&&(se|=H.DEPTH_BUFFER_BIT),ae&&(se|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Re,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),We.dispose(),le.dispose(),Pe.dispose(),ze.dispose(),Kt.dispose(),Zt.dispose(),ee.dispose(),Ce.dispose(),at.dispose(),ce.dispose(),be.dispose(),be.removeEventListener("sessionstart",un),be.removeEventListener("sessionend",fn),$t.stop()};function Re(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const R=Xt.autoReset,W=ke.enabled,ae=ke.autoUpdate,se=ke.needsUpdate,K=ke.type;k(),Xt.autoReset=R,ke.enabled=W,ke.autoUpdate=ae,ke.needsUpdate=se,ke.type=K}function Ee(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ge(R){const W=R.target;W.removeEventListener("dispose",ge),Ge(W)}function Ge(R){it(R),ze.remove(R)}function it(R){const W=ze.get(R).programs;W!==void 0&&(W.forEach(function(ae){ce.releaseProgram(ae)}),R.isShaderMaterial&&ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,ae,se,K,Te){W===null&&(W=nt);const De=K.isMesh&&K.matrixWorld.determinant()<0,Be=ya(R,W,ae,se,K);Fe.setMaterial(se,De);let Le=ae.index,Qe=1;if(se.wireframe===!0){if(Le=b.getWireframeAttribute(ae),Le===void 0)return;Qe=2}const $e=ae.drawRange,Xe=ae.attributes.position;let ct=$e.start*Qe,At=($e.start+$e.count)*Qe;Te!==null&&(ct=Math.max(ct,Te.start*Qe),At=Math.min(At,(Te.start+Te.count)*Qe)),Le!==null?(ct=Math.max(ct,0),At=Math.min(At,Le.count)):Xe!=null&&(ct=Math.max(ct,0),At=Math.min(At,Xe.count));const Yt=At-ct;if(Yt<0||Yt===1/0)return;Ce.setup(K,se,Be,ae,Le);let It,ut=Ue;if(Le!==null&&(It=N.get(Le),ut=je,ut.setIndex(It)),K.isMesh)se.wireframe===!0?(Fe.setLineWidth(se.wireframeLinewidth*mt()),ut.setMode(H.LINES)):ut.setMode(H.TRIANGLES);else if(K.isLine){let Ke=se.linewidth;Ke===void 0&&(Ke=1),Fe.setLineWidth(Ke*mt()),K.isLineSegments?ut.setMode(H.LINES):K.isLineLoop?ut.setMode(H.LINE_LOOP):ut.setMode(H.LINE_STRIP)}else K.isPoints?ut.setMode(H.POINTS):K.isSprite&&ut.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))ut.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ke=K._multiDrawStarts,qt=K._multiDrawCounts,gt=K._multiDrawCount,Rn=Le?N.get(Le).bytesPerElement:1,vi=ze.get(se).currentProgram.getUniforms();for(let On=0;On<gt;On++)vi.setValue(H,"_gl_DrawID",On),ut.render(Ke[On]/Rn,qt[On])}else if(K.isInstancedMesh)ut.renderInstances(ct,Yt,K.count);else if(ae.isInstancedBufferGeometry){const Ke=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,qt=Math.min(ae.instanceCount,Ke);ut.renderInstances(ct,Yt,qt)}else ut.render(ct,Yt)};function Ut(R,W,ae){R.transparent===!0&&R.side===Fi&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,Di(R,W,ae),R.side=va,R.needsUpdate=!0,Di(R,W,ae),R.side=Fi):Di(R,W,ae)}this.compile=function(R,W,ae=null){ae===null&&(ae=R),x=Pe.get(ae),x.init(W),L.push(x),ae.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),R!==ae&&R.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const se=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Te=K.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){const Be=Te[De];Ut(Be,ae,K),se.add(Be)}else Ut(Te,ae,K),se.add(Te)}),x=L.pop(),se},this.compileAsync=function(R,W,ae=null){const se=this.compile(R,W,ae);return new Promise(K=>{function Te(){if(se.forEach(function(De){ze.get(De).currentProgram.isReady()&&se.delete(De)}),se.size===0){K(R);return}setTimeout(Te,10)}Ze.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let bt=null;function _i(R){bt&&bt(R)}function un(){$t.stop()}function fn(){$t.start()}const $t=new rx;$t.setAnimationLoop(_i),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(R){bt=R,be.setAnimationLoop(R),R===null?$t.stop():$t.start()},be.addEventListener("sessionstart",un),be.addEventListener("sessionend",fn),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(W),W=be.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,W,X),x=Pe.get(R,L.length),x.init(W),L.push(x),Se.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),we.setFromProjectionMatrix(Se,zi,W.reversedDepth),de=this.localClippingEnabled,ne=Ae.init(this.clippingPlanes,de),S=le.get(R,P.length),S.init(),P.push(S),be.enabled===!0&&be.isPresenting===!0){const Te=w.xr.getDepthSensingMesh();Te!==null&&Ci(Te,W,-1/0,w.sortObjects)}Ci(R,W,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(xe,U),kt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,kt&&We.addToRenderList(S,R),this.info.render.frame++,ne===!0&&Ae.beginShadows();const ae=x.state.shadowsArray;ke.render(ae,R,W),ne===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=S.opaque,K=S.transmissive;if(x.setupLights(),W.isArrayCamera){const Te=W.cameras;if(K.length>0)for(let De=0,Be=Te.length;De<Be;De++){const Le=Te[De];_l(se,K,R,Le)}kt&&We.render(R);for(let De=0,Be=Te.length;De<Be;De++){const Le=Te[De];Ps(S,R,Le,Le.viewport)}}else K.length>0&&_l(se,K,R,W),kt&&We.render(R),Ps(S,R,W);X!==null&&z===0&&(rt.updateMultisampleRenderTarget(X),rt.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(w,R,W),Ce.resetDefaultState(),C=-1,D=null,L.pop(),L.length>0?(x=L[L.length-1],ne===!0&&Ae.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function Ci(R,W,ae,se){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||we.intersectsSprite(R)){se&&qe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Se);const De=ee.update(R),Be=R.material;Be.visible&&S.push(R,De,Be,ae,qe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||we.intersectsObject(R))){const De=ee.update(R),Be=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),qe.copy(R.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),qe.copy(De.boundingSphere.center)),qe.applyMatrix4(R.matrixWorld).applyMatrix4(Se)),Array.isArray(Be)){const Le=De.groups;for(let Qe=0,$e=Le.length;Qe<$e;Qe++){const Xe=Le[Qe],ct=Be[Xe.materialIndex];ct&&ct.visible&&S.push(R,De,ct,ae,qe.z,Xe)}}else Be.visible&&S.push(R,De,Be,ae,qe.z,null)}}const Te=R.children;for(let De=0,Be=Te.length;De<Be;De++)Ci(Te[De],W,ae,se)}function Ps(R,W,ae,se){const K=R.opaque,Te=R.transmissive,De=R.transparent;x.setupLightsView(ae),ne===!0&&Ae.setGlobalState(w.clippingPlanes,ae),se&&Fe.viewport(F.copy(se)),K.length>0&&Is(K,W,ae),Te.length>0&&Is(Te,W,ae),De.length>0&&Is(De,W,ae),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function _l(R,W,ae,se){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[se.id]===void 0&&(x.state.transmissionRenderTarget[se.id]=new Os(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?pl:Vi,minFilter:ma,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Te=x.state.transmissionRenderTarget[se.id],De=se.viewport||F;Te.setSize(De.z*w.transmissionResolutionScale,De.w*w.transmissionResolutionScale);const Be=w.getRenderTarget(),Le=w.getActiveCubeFace(),Qe=w.getActiveMipmapLevel();w.setRenderTarget(Te),w.getClearColor(ue),he=w.getClearAlpha(),he<1&&w.setClearColor(16777215,.5),w.clear(),kt&&We.render(ae);const $e=w.toneMapping;w.toneMapping=es;const Xe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),x.setupLightsView(se),ne===!0&&Ae.setGlobalState(w.clippingPlanes,se),Is(R,ae,se),rt.updateMultisampleRenderTarget(Te),rt.updateRenderTargetMipmap(Te),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let At=0,Yt=W.length;At<Yt;At++){const It=W[At],ut=It.object,Ke=It.geometry,qt=It.material,gt=It.group;if(qt.side===Fi&&ut.layers.test(se.layers)){const Rn=qt.side;qt.side=Yn,qt.needsUpdate=!0,Jr(ut,ae,se,Ke,qt,gt),qt.side=Rn,qt.needsUpdate=!0,ct=!0}}ct===!0&&(rt.updateMultisampleRenderTarget(Te),rt.updateRenderTargetMipmap(Te))}w.setRenderTarget(Be,Le,Qe),w.setClearColor(ue,he),Xe!==void 0&&(se.viewport=Xe),w.toneMapping=$e}function Is(R,W,ae){const se=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Te=R.length;K<Te;K++){const De=R[K],Be=De.object,Le=De.geometry,Qe=De.group;let $e=De.material;$e.allowOverride===!0&&se!==null&&($e=se),Be.layers.test(ae.layers)&&Jr(Be,W,ae,Le,$e,Qe)}}function Jr(R,W,ae,se,K,Te){R.onBeforeRender(w,W,ae,se,K,Te),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(w,W,ae,se,R,Te),K.transparent===!0&&K.side===Fi&&K.forceSinglePass===!1?(K.side=Yn,K.needsUpdate=!0,w.renderBufferDirect(ae,W,se,K,R,Te),K.side=va,K.needsUpdate=!0,w.renderBufferDirect(ae,W,se,K,R,Te),K.side=Fi):w.renderBufferDirect(ae,W,se,K,R,Te),R.onAfterRender(w,W,ae,se,K,Te)}function Di(R,W,ae){W.isScene!==!0&&(W=nt);const se=ze.get(R),K=x.state.lights,Te=x.state.shadowsArray,De=K.state.version,Be=ce.getParameters(R,K.state,Te,W,ae),Le=ce.getProgramCacheKey(Be);let Qe=se.programs;se.environment=R.isMeshStandardMaterial?W.environment:null,se.fog=W.fog,se.envMap=(R.isMeshStandardMaterial?Zt:Kt).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Qe===void 0&&(R.addEventListener("dispose",ge),Qe=new Map,se.programs=Qe);let $e=Qe.get(Le);if($e!==void 0){if(se.currentProgram===$e&&se.lightsStateVersion===De)return qi(R,Be),$e}else Be.uniforms=ce.getUniforms(R),R.onBeforeCompile(Be,w),$e=ce.acquireProgram(Be,Le),Qe.set(Le,$e),se.uniforms=Be.uniforms;const Xe=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Ae.uniform),qi(R,Be),se.needsLights=Sa(R),se.lightsStateVersion=De,se.needsLights&&(Xe.ambientLightColor.value=K.state.ambient,Xe.lightProbe.value=K.state.probe,Xe.directionalLights.value=K.state.directional,Xe.directionalLightShadows.value=K.state.directionalShadow,Xe.spotLights.value=K.state.spot,Xe.spotLightShadows.value=K.state.spotShadow,Xe.rectAreaLights.value=K.state.rectArea,Xe.ltc_1.value=K.state.rectAreaLTC1,Xe.ltc_2.value=K.state.rectAreaLTC2,Xe.pointLights.value=K.state.point,Xe.pointLightShadows.value=K.state.pointShadow,Xe.hemisphereLights.value=K.state.hemi,Xe.directionalShadowMap.value=K.state.directionalShadowMap,Xe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xe.spotShadowMap.value=K.state.spotShadowMap,Xe.spotLightMatrix.value=K.state.spotLightMatrix,Xe.spotLightMap.value=K.state.spotLightMap,Xe.pointShadowMap.value=K.state.pointShadowMap,Xe.pointShadowMatrix.value=K.state.pointShadowMatrix),se.currentProgram=$e,se.uniformsList=null,$e}function Bs(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=cu.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function qi(R,W){const ae=ze.get(R);ae.outputColorSpace=W.outputColorSpace,ae.batching=W.batching,ae.batchingColor=W.batchingColor,ae.instancing=W.instancing,ae.instancingColor=W.instancingColor,ae.instancingMorph=W.instancingMorph,ae.skinning=W.skinning,ae.morphTargets=W.morphTargets,ae.morphNormals=W.morphNormals,ae.morphColors=W.morphColors,ae.morphTargetsCount=W.morphTargetsCount,ae.numClippingPlanes=W.numClippingPlanes,ae.numIntersection=W.numClipIntersection,ae.vertexAlphas=W.vertexAlphas,ae.vertexTangents=W.vertexTangents,ae.toneMapping=W.toneMapping}function ya(R,W,ae,se,K){W.isScene!==!0&&(W=nt),rt.resetTextureUnits();const Te=W.fog,De=se.isMeshStandardMaterial?W.environment:null,Be=X===null?w.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Hn,Le=(se.isMeshStandardMaterial?Zt:Kt).get(se.envMap||De),Qe=se.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,$e=!!ae.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Xe=!!ae.morphAttributes.position,ct=!!ae.morphAttributes.normal,At=!!ae.morphAttributes.color;let Yt=es;se.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Yt=w.toneMapping);const It=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ut=It!==void 0?It.length:0,Ke=ze.get(se),qt=x.state.lights;if(ne===!0&&(de===!0||R!==D)){const en=R===D&&se.id===C;Ae.setState(se,R,en)}let gt=!1;se.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==qt.state.version||Ke.outputColorSpace!==Be||K.isBatchedMesh&&Ke.batching===!1||!K.isBatchedMesh&&Ke.batching===!0||K.isBatchedMesh&&Ke.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ke.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ke.instancing===!1||!K.isInstancedMesh&&Ke.instancing===!0||K.isSkinnedMesh&&Ke.skinning===!1||!K.isSkinnedMesh&&Ke.skinning===!0||K.isInstancedMesh&&Ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ke.instancingMorph===!1&&K.morphTexture!==null||Ke.envMap!==Le||se.fog===!0&&Ke.fog!==Te||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ae.numPlanes||Ke.numIntersection!==Ae.numIntersection)||Ke.vertexAlphas!==Qe||Ke.vertexTangents!==$e||Ke.morphTargets!==Xe||Ke.morphNormals!==ct||Ke.morphColors!==At||Ke.toneMapping!==Yt||Ke.morphTargetsCount!==ut)&&(gt=!0):(gt=!0,Ke.__version=se.version);let Rn=Ke.currentProgram;gt===!0&&(Rn=Di(se,W,K));let vi=!1,On=!1,gn=!1;const Gt=Rn.getUniforms(),Pn=Ke.uniforms;if(Fe.useProgram(Rn.program)&&(vi=!0,On=!0,gn=!0),se.id!==C&&(C=se.id,On=!0),vi||D!==R){Fe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Gt.setValue(H,"projectionMatrix",R.projectionMatrix),Gt.setValue(H,"viewMatrix",R.matrixWorldInverse);const Mn=Gt.map.cameraPosition;Mn!==void 0&&Mn.setValue(H,Oe.setFromMatrixPosition(R.matrixWorld)),Tt.logarithmicDepthBuffer&&Gt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Gt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,On=!0,gn=!0)}if(K.isSkinnedMesh){Gt.setOptional(H,K,"bindMatrix"),Gt.setOptional(H,K,"bindMatrixInverse");const en=K.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Gt.setValue(H,"boneTexture",en.boneTexture,rt))}K.isBatchedMesh&&(Gt.setOptional(H,K,"batchingTexture"),Gt.setValue(H,"batchingTexture",K._matricesTexture,rt),Gt.setOptional(H,K,"batchingIdTexture"),Gt.setValue(H,"batchingIdTexture",K._indirectTexture,rt),Gt.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Gt.setValue(H,"batchingColorTexture",K._colorsTexture,rt));const wn=ae.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Me.update(K,ae,Rn),(On||Ke.receiveShadow!==K.receiveShadow)&&(Ke.receiveShadow=K.receiveShadow,Gt.setValue(H,"receiveShadow",K.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Pn.envMap.value=Le,Pn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&W.environment!==null&&(Pn.envMapIntensity.value=W.environmentIntensity),On&&(Gt.setValue(H,"toneMappingExposure",w.toneMappingExposure),Ke.needsLights&&is(Pn,gn),Te&&se.fog===!0&&_e.refreshFogUniforms(Pn,Te),_e.refreshMaterialUniforms(Pn,se,j,Z,x.state.transmissionRenderTarget[R.id]),cu.upload(H,Bs(Ke),Pn,rt)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(cu.upload(H,Bs(Ke),Pn,rt),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Gt.setValue(H,"center",K.center),Gt.setValue(H,"modelViewMatrix",K.modelViewMatrix),Gt.setValue(H,"normalMatrix",K.normalMatrix),Gt.setValue(H,"modelMatrix",K.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const en=se.uniformsGroups;for(let Mn=0,Fs=en.length;Mn<Fs;Mn++){const Gn=en[Mn];at.update(Gn,Rn),at.bind(Gn,Rn)}}return Rn}function is(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Sa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,W,ae){const se=ze.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),ze.get(R.texture).__webglTexture=W,ze.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ae,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const ae=ze.get(R);ae.__webglFramebuffer=W,ae.__useDefaultFramebuffer=W===void 0};const rn=H.createFramebuffer();this.setRenderTarget=function(R,W=0,ae=0){X=R,G=W,z=ae;let se=!0,K=null,Te=!1,De=!1;if(R){const Le=ze.get(R);if(Le.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(H.FRAMEBUFFER,null),se=!1;else if(Le.__webglFramebuffer===void 0)rt.setupRenderTarget(R);else if(Le.__hasExternalTextures)rt.rebindTextures(R,ze.get(R.texture).__webglTexture,ze.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xe=R.depthTexture;if(Le.__boundDepthTexture!==Xe){if(Xe!==null&&ze.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(R)}}const Qe=R.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(De=!0);const $e=ze.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($e[W])?K=$e[W][ae]:K=$e[W],Te=!0):R.samples>0&&rt.useMultisampledRTT(R)===!1?K=ze.get(R).__webglMultisampledFramebuffer:Array.isArray($e)?K=$e[ae]:K=$e,F.copy(R.viewport),re.copy(R.scissor),oe=R.scissorTest}else F.copy($).multiplyScalar(j).floor(),re.copy(ve).multiplyScalar(j).floor(),oe=ye;if(ae!==0&&(K=rn),Fe.bindFramebuffer(H.FRAMEBUFFER,K)&&se&&Fe.drawBuffers(R,K),Fe.viewport(F),Fe.scissor(re),Fe.setScissorTest(oe),Te){const Le=ze.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,ae)}else if(De){const Le=W;for(let Qe=0;Qe<R.textures.length;Qe++){const $e=ze.get(R.textures[Qe]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Qe,$e.__webglTexture,ae,Le)}}else if(R!==null&&ae!==0){const Le=ze.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Le.__webglTexture,ae)}C=-1},this.readRenderTargetPixels=function(R,W,ae,se,K,Te,De,Be=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Le=Le[De]),Le){Fe.bindFramebuffer(H.FRAMEBUFFER,Le);try{const Qe=R.textures[Be],$e=Qe.format,Xe=Qe.type;if(!Tt.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-se&&ae>=0&&ae<=R.height-K&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Be),H.readPixels(W,ae,se,K,Ve.convert($e),Ve.convert(Xe),Te))}finally{const Qe=X!==null?ze.get(X).__webglFramebuffer:null;Fe.bindFramebuffer(H.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(R,W,ae,se,K,Te,De,Be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Le=Le[De]),Le)if(W>=0&&W<=R.width-se&&ae>=0&&ae<=R.height-K){Fe.bindFramebuffer(H.FRAMEBUFFER,Le);const Qe=R.textures[Be],$e=Qe.format,Xe=Qe.type;if(!Tt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ct),H.bufferData(H.PIXEL_PACK_BUFFER,Te.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Be),H.readPixels(W,ae,se,K,Ve.convert($e),Ve.convert(Xe),0);const At=X!==null?ze.get(X).__webglFramebuffer:null;Fe.bindFramebuffer(H.FRAMEBUFFER,At);const Yt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await NM(H,Yt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ct),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Te),H.deleteBuffer(ct),H.deleteSync(Yt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,ae=0){const se=Math.pow(2,-ae),K=Math.floor(R.image.width*se),Te=Math.floor(R.image.height*se),De=W!==null?W.x:0,Be=W!==null?W.y:0;rt.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ae,0,0,De,Be,K,Te),Fe.unbindTexture()};const vl=H.createFramebuffer(),xl=H.createFramebuffer();this.copyTextureToTexture=function(R,W,ae=null,se=null,K=0,Te=null){Te===null&&(K!==0?(Pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=K,K=0):Te=0);let De,Be,Le,Qe,$e,Xe,ct,At,Yt;const It=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(ae!==null)De=ae.max.x-ae.min.x,Be=ae.max.y-ae.min.y,Le=ae.isBox3?ae.max.z-ae.min.z:1,Qe=ae.min.x,$e=ae.min.y,Xe=ae.isBox3?ae.min.z:0;else{const wn=Math.pow(2,-K);De=Math.floor(It.width*wn),Be=Math.floor(It.height*wn),R.isDataArrayTexture?Le=It.depth:R.isData3DTexture?Le=Math.floor(It.depth*wn):Le=1,Qe=0,$e=0,Xe=0}se!==null?(ct=se.x,At=se.y,Yt=se.z):(ct=0,At=0,Yt=0);const ut=Ve.convert(W.format),Ke=Ve.convert(W.type);let qt;W.isData3DTexture?(rt.setTexture3D(W,0),qt=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(rt.setTexture2DArray(W,0),qt=H.TEXTURE_2D_ARRAY):(rt.setTexture2D(W,0),qt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const gt=H.getParameter(H.UNPACK_ROW_LENGTH),Rn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),vi=H.getParameter(H.UNPACK_SKIP_PIXELS),On=H.getParameter(H.UNPACK_SKIP_ROWS),gn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,It.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,It.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Qe),H.pixelStorei(H.UNPACK_SKIP_ROWS,$e),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xe);const Gt=R.isDataArrayTexture||R.isData3DTexture,Pn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const wn=ze.get(R),en=ze.get(W),Mn=ze.get(wn.__renderTarget),Fs=ze.get(en.__renderTarget);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Fs.__webglFramebuffer);for(let Gn=0;Gn<Le;Gn++)Gt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ze.get(R).__webglTexture,K,Xe+Gn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ze.get(W).__webglTexture,Te,Yt+Gn)),H.blitFramebuffer(Qe,$e,De,Be,ct,At,De,Be,H.DEPTH_BUFFER_BIT,H.NEAREST);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||ze.has(R)){const wn=ze.get(R),en=ze.get(W);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,vl),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,xl);for(let Mn=0;Mn<Le;Mn++)Gt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,wn.__webglTexture,K,Xe+Mn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,wn.__webglTexture,K),Pn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,en.__webglTexture,Te,Yt+Mn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,en.__webglTexture,Te),K!==0?H.blitFramebuffer(Qe,$e,De,Be,ct,At,De,Be,H.COLOR_BUFFER_BIT,H.NEAREST):Pn?H.copyTexSubImage3D(qt,Te,ct,At,Yt+Mn,Qe,$e,De,Be):H.copyTexSubImage2D(qt,Te,ct,At,Qe,$e,De,Be);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Pn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(qt,Te,ct,At,Yt,De,Be,Le,ut,Ke,It.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(qt,Te,ct,At,Yt,De,Be,Le,ut,It.data):H.texSubImage3D(qt,Te,ct,At,Yt,De,Be,Le,ut,Ke,It):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Te,ct,At,De,Be,ut,Ke,It.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Te,ct,At,It.width,It.height,ut,It.data):H.texSubImage2D(H.TEXTURE_2D,Te,ct,At,De,Be,ut,Ke,It);H.pixelStorei(H.UNPACK_ROW_LENGTH,gt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Rn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,vi),H.pixelStorei(H.UNPACK_SKIP_ROWS,On),H.pixelStorei(H.UNPACK_SKIP_IMAGES,gn),Te===0&&W.generateMipmaps&&H.generateMipmap(qt),Fe.unbindTexture()},this.copyTextureToTexture3D=function(R,W,ae=null,se=null,K=0){return Pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,ae,se,K)},this.initRenderTarget=function(R){ze.get(R).__webglFramebuffer===void 0&&rt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?rt.setTextureCube(R,0):R.isData3DTexture?rt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?rt.setTexture2DArray(R,0):rt.setTexture2D(R,0),Fe.unbindTexture()},this.resetState=function(){G=0,z=0,X=null,Fe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}function bv(o,e){if(e===sM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Jd||e===Gv){let n=o.getIndex();if(n===null){const u=[],h=o.getAttribute("position");if(h!==void 0){for(let p=0;p<h.count;p++)u.push(p);o.setIndex(u),n=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const a=n.count-2,r=[];if(e===Jd)for(let u=1;u<=a;u++)r.push(n.getX(0)),r.push(n.getX(u)),r.push(n.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(r.push(n.getX(u)),r.push(n.getX(u+1)),r.push(n.getX(u+2))):(r.push(n.getX(u+2)),r.push(n.getX(u+1)),r.push(n.getX(u)));r.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=o.clone();return c.setIndex(r),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class PR extends Zr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new HR(n)}),this.register(function(n){return new GR(n)}),this.register(function(n){return new ZR(n)}),this.register(function(n){return new QR(n)}),this.register(function(n){return new JR(n)}),this.register(function(n){return new kR(n)}),this.register(function(n){return new XR(n)}),this.register(function(n){return new WR(n)}),this.register(function(n){return new qR(n)}),this.register(function(n){return new zR(n)}),this.register(function(n){return new YR(n)}),this.register(function(n){return new VR(n)}),this.register(function(n){return new KR(n)}),this.register(function(n){return new jR(n)}),this.register(function(n){return new BR(n)}),this.register(function(n){return new $R(n)}),this.register(function(n){return new ew(n)})}load(e,n,a,r){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const d=rl.extractUrlBase(e);u=rl.resolveURL(d,this.path)}else u=rl.extractUrlBase(e);this.manager.itemStart(e);const h=function(d){r?r(d):console.error(d),c.manager.itemError(e),c.manager.itemEnd(e)},p=new sx(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(e,function(d){try{c.parse(d,u,function(g){n(g),c.manager.itemEnd(e)},h)}catch(g){h(g)}},a,h)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,r){let c;const u={},h={},p=new TextDecoder;if(typeof e=="string")c=JSON.parse(e);else if(e instanceof ArrayBuffer)if(p.decode(new Uint8Array(e,0,4))===hx){try{u[yt.KHR_BINARY_GLTF]=new tw(e)}catch(_){r&&r(_);return}c=JSON.parse(u[yt.KHR_BINARY_GLTF].content)}else c=JSON.parse(p.decode(e));else c=e;if(c.asset===void 0||c.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new pw(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](d);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[_.name]=_,u[_.name]=!0}if(c.extensionsUsed)for(let g=0;g<c.extensionsUsed.length;++g){const _=c.extensionsUsed[g],v=c.extensionsRequired||[];switch(_){case yt.KHR_MATERIALS_UNLIT:u[_]=new FR;break;case yt.KHR_DRACO_MESH_COMPRESSION:u[_]=new nw(c,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:u[_]=new iw;break;case yt.KHR_MESH_QUANTIZATION:u[_]=new aw;break;default:v.indexOf(_)>=0&&h[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}d.setExtensions(u),d.setPlugins(h),d.parse(a,r)}parseAsync(e,n){const a=this;return new Promise(function(r,c){a.parse(e,n,r,c)})}}function IR(){let o={};return{get:function(e){return o[e]},add:function(e,n){o[e]=n},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class BR{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let a=0,r=n.length;a<r;a++){const c=n[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(e){const n=this.parser,a="light:"+e;let r=n.cache.get(a);if(r)return r;const c=n.json,p=((c.extensions&&c.extensions[this.name]||{}).lights||[])[e];let d;const g=new st(16777215);p.color!==void 0&&g.setRGB(p.color[0],p.color[1],p.color[2],Hn);const _=p.range!==void 0?p.range:0;switch(p.type){case"directional":d=new zE(g),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new BE(g),d.distance=_;break;case"spot":d=new PE(g),d.distance=_,p.spot=p.spot||{},p.spot.innerConeAngle=p.spot.innerConeAngle!==void 0?p.spot.innerConeAngle:0,p.spot.outerConeAngle=p.spot.outerConeAngle!==void 0?p.spot.outerConeAngle:Math.PI/4,d.angle=p.spot.outerConeAngle,d.penumbra=1-p.spot.innerConeAngle/p.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+p.type)}return d.position.set(0,0,0),pa(d,p),p.intensity!==void 0&&(d.intensity=p.intensity),d.name=n.createUniqueName(p.name||"light_"+e),r=Promise.resolve(d),n.cache.add(a,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,a=this.parser,c=a.json.nodes[e],h=(c.extensions&&c.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(p){return a._getNodeRef(n.cache,h,p)})}}class FR{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return Us}extendParams(e,n,a){const r=[];e.color=new st(1,1,1),e.opacity=1;const c=n.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],Hn),e.opacity=u[3]}c.baseColorTexture!==void 0&&r.push(a.assignTexture(e,"map",c.baseColorTexture,An))}return Promise.all(r)}}class zR{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name].emissiveStrength;return c!==void 0&&(n.emissiveIntensity=c),Promise.resolve()}}class HR{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];if(u.clearcoatFactor!==void 0&&(n.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(c.push(a.assignTexture(n,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const h=u.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new St(h,h)}return Promise.all(c)}}class GR{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.dispersion=c.dispersion!==void 0?c.dispersion:0,Promise.resolve()}}class VR{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.iridescenceFactor!==void 0&&(n.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(n.iridescenceIOR=u.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(c)}}class kR{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[];n.sheenColor=new st(0,0,0),n.sheenRoughness=0,n.sheen=1;const u=r.extensions[this.name];if(u.sheenColorFactor!==void 0){const h=u.sheenColorFactor;n.sheenColor.setRGB(h[0],h[1],h[2],Hn)}return u.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&c.push(a.assignTexture(n,"sheenColorMap",u.sheenColorTexture,An)),u.sheenRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(c)}}class XR{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.transmissionFactor!==void 0&&(n.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&c.push(a.assignTexture(n,"transmissionMap",u.transmissionTexture)),Promise.all(c)}}class WR{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&c.push(a.assignTexture(n,"thicknessMap",u.thicknessTexture)),n.attenuationDistance=u.attenuationDistance||1/0;const h=u.attenuationColor||[1,1,1];return n.attenuationColor=new st().setRGB(h[0],h[1],h[2],Hn),Promise.all(c)}}class qR{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.ior=c.ior!==void 0?c.ior:1.5,Promise.resolve()}}class YR{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&c.push(a.assignTexture(n,"specularIntensityMap",u.specularTexture));const h=u.specularColorFactor||[1,1,1];return n.specularColor=new st().setRGB(h[0],h[1],h[2],Hn),u.specularColorTexture!==void 0&&c.push(a.assignTexture(n,"specularColorMap",u.specularColorTexture,An)),Promise.all(c)}}class jR{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return n.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&c.push(a.assignTexture(n,"bumpMap",u.bumpTexture)),Promise.all(c)}}class KR{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Wi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.anisotropyStrength!==void 0&&(n.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(n.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&c.push(a.assignTexture(n,"anisotropyMap",u.anisotropyTexture)),Promise.all(c)}}class ZR{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,a=n.json,r=a.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const c=r.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,c.source,u)}}class QR{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=r.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class JR{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=r.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class $R{constructor(e){this.name=yt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const r=a.extensions[this.name],c=this.parser.getDependency("buffer",r.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(h){const p=r.byteOffset||0,d=r.byteLength||0,g=r.count,_=r.byteStride,v=new Uint8Array(h,p,d);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,_,v,r.mode,r.filter).then(function(y){return y.buffer}):u.ready.then(function(){const y=new ArrayBuffer(g*_);return u.decodeGltfBuffer(new Uint8Array(y),g,_,v,r.mode,r.filter),y})})}else return null}}class ew{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const r=n.meshes[a.mesh];for(const d of r.primitives)if(d.mode!==di.TRIANGLES&&d.mode!==di.TRIANGLE_STRIP&&d.mode!==di.TRIANGLE_FAN&&d.mode!==void 0)return null;const u=a.extensions[this.name].attributes,h=[],p={};for(const d in u)h.push(this.parser.getDependency("accessor",u[d]).then(g=>(p[d]=g,p[d])));return h.length<1?null:(h.push(this.parser.createNodeMesh(e)),Promise.all(h).then(d=>{const g=d.pop(),_=g.isGroup?g.children:[g],v=d[0].count,y=[];for(const E of _){const T=new ht,S=new q,x=new ns,P=new q(1,1,1),L=new uE(E.geometry,E.material,v);for(let w=0;w<v;w++)p.TRANSLATION&&S.fromBufferAttribute(p.TRANSLATION,w),p.ROTATION&&x.fromBufferAttribute(p.ROTATION,w),p.SCALE&&P.fromBufferAttribute(p.SCALE,w),L.setMatrixAt(w,T.compose(S,x,P));for(const w in p)if(w==="_COLOR_0"){const O=p[w];L.instanceColor=new tp(O.array,O.itemSize,O.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&E.geometry.setAttribute(w,p[w]);Jt.prototype.copy.call(L,E),this.parser.assignFinalMaterial(L),y.push(L)}return g.isGroup?(g.clear(),g.add(...y),g):y[0]}))}}const hx="glTF",nl=12,Av={JSON:1313821514,BIN:5130562};class tw{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,nl),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==hx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-nl,c=new DataView(e,nl);let u=0;for(;u<r;){const h=c.getUint32(u,!0);u+=4;const p=c.getUint32(u,!0);if(u+=4,p===Av.JSON){const d=new Uint8Array(e,nl+u,h);this.content=a.decode(d)}else if(p===Av.BIN){const d=nl+u;this.body=e.slice(d,d+h)}u+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class nw{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const a=this.json,r=this.dracoLoader,c=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,h={},p={},d={};for(const g in u){const _=ap[g]||g.toLowerCase();h[_]=u[g]}for(const g in e.attributes){const _=ap[g]||g.toLowerCase();if(u[g]!==void 0){const v=a.accessors[e.attributes[g]],y=Br[v.componentType];d[_]=y.name,p[_]=v.normalized===!0}}return n.getDependency("bufferView",c).then(function(g){return new Promise(function(_,v){r.decodeDracoFile(g,function(y){for(const E in y.attributes){const T=y.attributes[E],S=p[E];S!==void 0&&(T.normalized=S)}_(y)},h,d,Hn,v)})})}}class iw{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class aw{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}}class dx extends gl{constructor(e,n,a,r){super(e,n,a,r)}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r*3+r;for(let u=0;u!==r;u++)n[u]=a[c+u];return n}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=h*2,d=h*3,g=r-n,_=(a-n)/g,v=_*_,y=v*_,E=e*d,T=E-d,S=-2*y+3*v,x=y-v,P=1-S,L=x-v+_;for(let w=0;w!==h;w++){const O=u[T+w+h],G=u[T+w+p]*g,z=u[E+w+h],X=u[E+w]*g;c[w]=P*O+L*G+S*z+x*X}return c}}const sw=new ns;class rw extends dx{interpolate_(e,n,a,r){const c=super.interpolate_(e,n,a,r);return sw.fromArray(c).normalize().toArray(c),c}}const di={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Br={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rv={9728:zn,9729:ii,9984:Nv,9985:iu,9986:il,9987:ma},wv={33071:Ja,33648:uu,10497:Gr},hd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ap={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Za={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ow={CUBICSPLINE:void 0,LINEAR:hl,STEP:fl},dd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lw(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Sp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:va})),o.DefaultMaterial}function As(o,e,n){for(const a in n.extensions)o[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function pa(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cw(o,e,n){let a=!1,r=!1,c=!1;for(let d=0,g=e.length;d<g;d++){const _=e[d];if(_.POSITION!==void 0&&(a=!0),_.NORMAL!==void 0&&(r=!0),_.COLOR_0!==void 0&&(c=!0),a&&r&&c)break}if(!a&&!r&&!c)return Promise.resolve(o);const u=[],h=[],p=[];for(let d=0,g=e.length;d<g;d++){const _=e[d];if(a){const v=_.POSITION!==void 0?n.getDependency("accessor",_.POSITION):o.attributes.position;u.push(v)}if(r){const v=_.NORMAL!==void 0?n.getDependency("accessor",_.NORMAL):o.attributes.normal;h.push(v)}if(c){const v=_.COLOR_0!==void 0?n.getDependency("accessor",_.COLOR_0):o.attributes.color;p.push(v)}}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p)]).then(function(d){const g=d[0],_=d[1],v=d[2];return a&&(o.morphAttributes.position=g),r&&(o.morphAttributes.normal=_),c&&(o.morphAttributes.color=v),o.morphTargetsRelative=!0,o})}function uw(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)o.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(o.morphTargetInfluences.length===n.length){o.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++)o.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fw(o){let e;const n=o.extensions&&o.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+pd(n.attributes):e=o.indices+":"+pd(o.attributes)+":"+o.mode,o.targets!==void 0)for(let a=0,r=o.targets.length;a<r;a++)e+=":"+pd(o.targets[a]);return e}function pd(o){let e="";const n=Object.keys(o).sort();for(let a=0,r=n.length;a<r;a++)e+=n[a]+":"+o[n[a]]+";";return e}function sp(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hw(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const dw=new ht;class pw{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new IR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,r=-1,c=!1,u=-1;if(typeof navigator<"u"){const h=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(h)===!0;const p=h.match(/Version\/(\d+)/);r=a&&p?parseInt(p[1],10):-1,c=h.indexOf("Firefox")>-1,u=c?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&r<17||c&&u<98?this.textureLoader=new NE(this.options.manager):this.textureLoader=new GE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const a=this,r=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const h={scene:u[0][r.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:r.asset,parser:a,userData:{}};return As(c,h,r),pa(h,r),Promise.all(a._invokeAll(function(p){return p.afterRoot&&p.afterRoot(h)})).then(function(){for(const p of h.scenes)p.updateMatrixWorld();e(h)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let r=0,c=n.length;r<c;r++){const u=n[r].joints;for(let h=0,p=u.length;h<p;h++)e[u[h]].isBone=!0}for(let r=0,c=e.length;r<c;r++){const u=e[r];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;const r=a.clone(),c=(u,h)=>{const p=this.associations.get(u);p!=null&&this.associations.set(h,p);for(const[d,g]of u.children.entries())c(g,h.children[d])};return c(a,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const r=e(n[a]);if(r)return r}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let r=0;r<n.length;r++){const c=e(n[r]);c&&a.push(c)}return a}getDependency(e,n){const a=e+":"+n;let r=this.cache.get(a);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(c){return c.loadNode&&c.loadNode(n)});break;case"mesh":r=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(a,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){const a=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(c,u){return a.getDependency(e,u)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(c,u){a.load(rl.resolveURL(n.uri,r.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){const r=n.byteLength||0,c=n.byteOffset||0;return a.slice(c,c+r)})}loadAccessor(e){const n=this,a=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const u=hd[r.type],h=Br[r.componentType],p=r.normalized===!0,d=new h(r.count*u);return Promise.resolve(new Nn(d,u,p))}const c=[];return r.bufferView!==void 0?c.push(this.getDependency("bufferView",r.bufferView)):c.push(null),r.sparse!==void 0&&(c.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(c).then(function(u){const h=u[0],p=hd[r.type],d=Br[r.componentType],g=d.BYTES_PER_ELEMENT,_=g*p,v=r.byteOffset||0,y=r.bufferView!==void 0?a.bufferViews[r.bufferView].byteStride:void 0,E=r.normalized===!0;let T,S;if(y&&y!==_){const x=Math.floor(v/y),P="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+x+":"+r.count;let L=n.cache.get(P);L||(T=new d(h,x*y,r.count*y/g),L=new sE(T,y/g),n.cache.add(P,L)),S=new _p(L,p,v%y/g,E)}else h===null?T=new d(r.count*p):T=new d(h,v,r.count*p),S=new Nn(T,p,E);if(r.sparse!==void 0){const x=hd.SCALAR,P=Br[r.sparse.indices.componentType],L=r.sparse.indices.byteOffset||0,w=r.sparse.values.byteOffset||0,O=new P(u[1],L,r.sparse.count*x),G=new d(u[2],w,r.sparse.count*p);h!==null&&(S=new Nn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let z=0,X=O.length;z<X;z++){const C=O[z];if(S.setX(C,G[z*p]),p>=2&&S.setY(C,G[z*p+1]),p>=3&&S.setZ(C,G[z*p+2]),p>=4&&S.setW(C,G[z*p+3]),p>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=E}return S})}loadTexture(e){const n=this.json,a=this.options,c=n.textures[e].source,u=n.images[c];let h=this.textureLoader;if(u.uri){const p=a.manager.getHandler(u.uri);p!==null&&(h=p)}return this.loadTextureImage(e,c,h)}loadTextureImage(e,n,a){const r=this,c=this.json,u=c.textures[e],h=c.images[n],p=(h.uri||h.bufferView)+":"+u.sampler;if(this.textureCache[p])return this.textureCache[p];const d=this.loadImageSource(n,a).then(function(g){g.flipY=!1,g.name=u.name||h.name||"",g.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(g.name=h.uri);const v=(c.samplers||{})[u.sampler]||{};return g.magFilter=Rv[v.magFilter]||ii,g.minFilter=Rv[v.minFilter]||ma,g.wrapS=wv[v.wrapS]||Gr,g.wrapT=wv[v.wrapT]||Gr,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==zn&&g.minFilter!==ii,r.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[p]=d,d}loadImageSource(e,n){const a=this,r=this.json,c=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const u=r.images[e],h=self.URL||self.webkitURL;let p=u.uri||"",d=!1;if(u.bufferView!==void 0)p=a.getDependency("bufferView",u.bufferView).then(function(_){d=!0;const v=new Blob([_],{type:u.mimeType});return p=h.createObjectURL(v),p});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(p).then(function(_){return new Promise(function(v,y){let E=v;n.isImageBitmapLoader===!0&&(E=function(T){const S=new Sn(T);S.needsUpdate=!0,v(S)}),n.load(rl.resolveURL(_,c.path),E,void 0,y)})}).then(function(_){return d===!0&&h.revokeObjectURL(p),pa(_,u),_.userData.mimeType=u.mimeType||hw(u.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",p),_});return this.sourceCache[e]=g,g}assignTexture(e,n,a,r){const c=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),c.extensions[yt.KHR_TEXTURE_TRANSFORM]){const h=a.extensions!==void 0?a.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const p=c.associations.get(u);u=c.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(u,h),c.associations.set(u,p)}}return r!==void 0&&(u.colorSpace=r),e[n]=u,u})}assignFinalMaterial(e){const n=e.geometry;let a=e.material;const r=n.attributes.tangent===void 0,c=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(e.isPoints){const h="PointsMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new tx,Hi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,p.sizeAttenuation=!1,this.cache.add(h,p)),a=p}else if(e.isLine){const h="LineBasicMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new yp,Hi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,this.cache.add(h,p)),a=p}if(r||c||u){let h="ClonedMaterial:"+a.uuid+":";r&&(h+="derivative-tangents:"),c&&(h+="vertex-colors:"),u&&(h+="flat-shading:");let p=this.cache.get(h);p||(p=a.clone(),c&&(p.vertexColors=!0),u&&(p.flatShading=!0),r&&(p.normalScale&&(p.normalScale.y*=-1),p.clearcoatNormalScale&&(p.clearcoatNormalScale.y*=-1)),this.cache.add(h,p),this.associations.set(p,this.associations.get(a))),a=p}e.material=a}getMaterialType(){return Sp}loadMaterial(e){const n=this,a=this.json,r=this.extensions,c=a.materials[e];let u;const h={},p=c.extensions||{},d=[];if(p[yt.KHR_MATERIALS_UNLIT]){const _=r[yt.KHR_MATERIALS_UNLIT];u=_.getMaterialType(),d.push(_.extendParams(h,c,n))}else{const _=c.pbrMetallicRoughness||{};if(h.color=new st(1,1,1),h.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;h.color.setRGB(v[0],v[1],v[2],Hn),h.opacity=v[3]}_.baseColorTexture!==void 0&&d.push(n.assignTexture(h,"map",_.baseColorTexture,An)),h.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,h.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(d.push(n.assignTexture(h,"metalnessMap",_.metallicRoughnessTexture)),d.push(n.assignTexture(h,"roughnessMap",_.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,h)})))}c.doubleSided===!0&&(h.side=Fi);const g=c.alphaMode||dd.OPAQUE;if(g===dd.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,g===dd.MASK&&(h.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==Us&&(d.push(n.assignTexture(h,"normalMap",c.normalTexture)),h.normalScale=new St(1,1),c.normalTexture.scale!==void 0)){const _=c.normalTexture.scale;h.normalScale.set(_,_)}if(c.occlusionTexture!==void 0&&u!==Us&&(d.push(n.assignTexture(h,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==Us){const _=c.emissiveFactor;h.emissive=new st().setRGB(_[0],_[1],_[2],Hn)}return c.emissiveTexture!==void 0&&u!==Us&&d.push(n.assignTexture(h,"emissiveMap",c.emissiveTexture,An)),Promise.all(d).then(function(){const _=new u(h);return c.name&&(_.name=c.name),pa(_,c),n.associations.set(_,{materials:e}),c.extensions&&As(r,_,c),_})}createUniqueName(e){const n=Pt.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,a=this.extensions,r=this.primitiveCache;function c(h){return a[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,n).then(function(p){return Cv(p,h,n)})}const u=[];for(let h=0,p=e.length;h<p;h++){const d=e[h],g=fw(d),_=r[g];if(_)u.push(_.promise);else{let v;d.extensions&&d.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?v=c(d):v=Cv(new gi,d,n),r[g]={primitive:d,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const n=this,a=this.json,r=this.extensions,c=a.meshes[e],u=c.primitives,h=[];for(let p=0,d=u.length;p<d;p++){const g=u[p].material===void 0?lw(this.cache):this.getDependency("material",u[p].material);h.push(g)}return h.push(n.loadGeometries(u)),Promise.all(h).then(function(p){const d=p.slice(0,p.length-1),g=p[p.length-1],_=[];for(let y=0,E=g.length;y<E;y++){const T=g[y],S=u[y];let x;const P=d[y];if(S.mode===di.TRIANGLES||S.mode===di.TRIANGLE_STRIP||S.mode===di.TRIANGLE_FAN||S.mode===void 0)x=c.isSkinnedMesh===!0?new oE(T,P):new ai(T,P),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===di.TRIANGLE_STRIP?x.geometry=bv(x.geometry,Gv):S.mode===di.TRIANGLE_FAN&&(x.geometry=bv(x.geometry,Jd));else if(S.mode===di.LINES)x=new pE(T,P);else if(S.mode===di.LINE_STRIP)x=new _u(T,P);else if(S.mode===di.LINE_LOOP)x=new mE(T,P);else if(S.mode===di.POINTS)x=new gE(T,P);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&uw(x,c),x.name=n.createUniqueName(c.name||"mesh_"+e),pa(x,c),S.extensions&&As(r,x,S),n.assignFinalMaterial(x),_.push(x)}for(let y=0,E=_.length;y<E;y++)n.associations.set(_[y],{meshes:e,primitives:y});if(_.length===1)return c.extensions&&As(r,_[0],c),_[0];const v=new Ls;c.extensions&&As(r,v,c),n.associations.set(v,{meshes:e});for(let y=0,E=_.length;y<E;y++)v.add(_[y]);return v})}loadCamera(e){let n;const a=this.json.cameras[e],r=a[a.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new qn(ep.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):a.type==="orthographic"&&(n=new yu(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),pa(n,a),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],a=[];for(let r=0,c=n.joints.length;r<c;r++)a.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(r){const c=r.pop(),u=r,h=[],p=[];for(let d=0,g=u.length;d<g;d++){const _=u[d];if(_){h.push(_);const v=new ht;c!==null&&v.fromArray(c.array,d*16),p.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[d])}return new vp(h,p)})}loadAnimation(e){const n=this.json,a=this,r=n.animations[e],c=r.name?r.name:"animation_"+e,u=[],h=[],p=[],d=[],g=[];for(let _=0,v=r.channels.length;_<v;_++){const y=r.channels[_],E=r.samplers[y.sampler],T=y.target,S=T.node,x=r.parameters!==void 0?r.parameters[E.input]:E.input,P=r.parameters!==void 0?r.parameters[E.output]:E.output;T.node!==void 0&&(u.push(this.getDependency("node",S)),h.push(this.getDependency("accessor",x)),p.push(this.getDependency("accessor",P)),d.push(E),g.push(T))}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p),Promise.all(d),Promise.all(g)]).then(function(_){const v=_[0],y=_[1],E=_[2],T=_[3],S=_[4],x=[];for(let P=0,L=v.length;P<L;P++){const w=v[P],O=y[P],G=E[P],z=T[P],X=S[P];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const C=a._createAnimationTracks(w,O,G,z,X);if(C)for(let D=0;D<C.length;D++)x.push(C[D])}return new AE(c,void 0,x)})}createNodeMesh(e){const n=this.json,a=this,r=n.nodes[e];return r.mesh===void 0?null:a.getDependency("mesh",r.mesh).then(function(c){const u=a._getNodeRef(a.meshCache,r.mesh,c);return r.weights!==void 0&&u.traverse(function(h){if(h.isMesh)for(let p=0,d=r.weights.length;p<d;p++)h.morphTargetInfluences[p]=r.weights[p]}),u})}loadNode(e){const n=this.json,a=this,r=n.nodes[e],c=a._loadNodeShallow(e),u=[],h=r.children||[];for(let d=0,g=h.length;d<g;d++)u.push(a.getDependency("node",h[d]));const p=r.skin===void 0?Promise.resolve(null):a.getDependency("skin",r.skin);return Promise.all([c,Promise.all(u),p]).then(function(d){const g=d[0],_=d[1],v=d[2];v!==null&&g.traverse(function(y){y.isSkinnedMesh&&y.bind(v,dw)});for(let y=0,E=_.length;y<E;y++)g.add(_[y]);return g})}_loadNodeShallow(e){const n=this.json,a=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const c=n.nodes[e],u=c.name?r.createUniqueName(c.name):"",h=[],p=r._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return p&&h.push(p),c.camera!==void 0&&h.push(r.getDependency("camera",c.camera).then(function(d){return r._getNodeRef(r.cameraCache,c.camera,d)})),r._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){h.push(d)}),this.nodeCache[e]=Promise.all(h).then(function(d){let g;if(c.isBone===!0?g=new $v:d.length>1?g=new Ls:d.length===1?g=d[0]:g=new Jt,g!==d[0])for(let _=0,v=d.length;_<v;_++)g.add(d[_]);if(c.name&&(g.userData.name=c.name,g.name=u),pa(g,c),c.extensions&&As(a,g,c),c.matrix!==void 0){const _=new ht;_.fromArray(c.matrix),g.applyMatrix4(_)}else c.translation!==void 0&&g.position.fromArray(c.translation),c.rotation!==void 0&&g.quaternion.fromArray(c.rotation),c.scale!==void 0&&g.scale.fromArray(c.scale);if(!r.associations.has(g))r.associations.set(g,{});else if(c.mesh!==void 0&&r.meshCache.refs[c.mesh]>1){const _=r.associations.get(g);r.associations.set(g,{..._})}return r.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const n=this.extensions,a=this.json.scenes[e],r=this,c=new Ls;a.name&&(c.name=r.createUniqueName(a.name)),pa(c,a),a.extensions&&As(n,c,a);const u=a.nodes||[],h=[];for(let p=0,d=u.length;p<d;p++)h.push(r.getDependency("node",u[p]));return Promise.all(h).then(function(p){for(let g=0,_=p.length;g<_;g++)c.add(p[g]);const d=g=>{const _=new Map;for(const[v,y]of r.associations)(v instanceof Hi||v instanceof Sn)&&_.set(v,y);return g.traverse(v=>{const y=r.associations.get(v);y!=null&&_.set(v,y)}),_};return r.associations=d(c),c})}_createAnimationTracks(e,n,a,r,c){const u=[],h=e.name?e.name:e.uuid,p=[];Za[c.path]===Za.weights?e.traverse(function(v){v.morphTargetInfluences&&p.push(v.name?v.name:v.uuid)}):p.push(h);let d;switch(Za[c.path]){case Za.weights:d=Xr;break;case Za.rotation:d=Wr;break;case Za.translation:case Za.scale:d=qr;break;default:switch(a.itemSize){case 1:d=Xr;break;case 2:case 3:default:d=qr;break}break}const g=r.interpolation!==void 0?ow[r.interpolation]:hl,_=this._getArrayFromAccessor(a);for(let v=0,y=p.length;v<y;v++){const E=new d(p[v]+"."+Za[c.path],n.array,_,g);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),u.push(E)}return u}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const a=sp(n.constructor),r=new Float32Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=n[c]*a;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const r=this instanceof Wr?rw:dx;return new r(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function mw(o,e,n){const a=e.attributes,r=new xa;if(a.POSITION!==void 0){const h=n.json.accessors[a.POSITION],p=h.min,d=h.max;if(p!==void 0&&d!==void 0){if(r.set(new q(p[0],p[1],p[2]),new q(d[0],d[1],d[2])),h.normalized){const g=sp(Br[h.componentType]);r.min.multiplyScalar(g),r.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=e.targets;if(c!==void 0){const h=new q,p=new q;for(let d=0,g=c.length;d<g;d++){const _=c[d];if(_.POSITION!==void 0){const v=n.json.accessors[_.POSITION],y=v.min,E=v.max;if(y!==void 0&&E!==void 0){if(p.setX(Math.max(Math.abs(y[0]),Math.abs(E[0]))),p.setY(Math.max(Math.abs(y[1]),Math.abs(E[1]))),p.setZ(Math.max(Math.abs(y[2]),Math.abs(E[2]))),v.normalized){const T=sp(Br[v.componentType]);p.multiplyScalar(T)}h.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(h)}o.boundingBox=r;const u=new Xi;r.getCenter(u.center),u.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=u}function Cv(o,e,n){const a=e.attributes,r=[];function c(u,h){return n.getDependency("accessor",u).then(function(p){o.setAttribute(h,p)})}for(const u in a){const h=ap[u]||u.toLowerCase();h in o.attributes||r.push(c(a[u],h))}if(e.indices!==void 0&&!o.index){const u=n.getDependency("accessor",e.indices).then(function(h){o.setIndex(h)});r.push(u)}return Et.workingColorSpace!==Hn&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Et.workingColorSpace}" not supported.`),pa(o,e),mw(o,e,n),Promise.all(r).then(function(){return e.targets!==void 0?cw(o,e.targets,n):o})}function gw(){const o=nu.useRef(null),e=nu.useRef(!1);return nu.useEffect(()=>{if(e.current)return;e.current=!0;const n=new aE,a=o.current.clientWidth/200,r=o.current.clientWidth/o.current.clientHeight,c=new yu(-a*r/2,a*r/2,a/2,-a/2,.1,1e3);c.position.z=10;const u=new OR({antialias:!0,alpha:!0});u.setSize(o.current.clientWidth,o.current.clientHeight),o.current.appendChild(u.domElement);const h=new HE(16777215,.9);n.add(h);const p=()=>{const y=document.getElementById("logo");if(!y||!o.current)return new q;const E=y.getBoundingClientRect(),T=(E.left+E.width/2)/window.innerWidth*2-1,S=-((E.top+E.height/2)/window.innerHeight*2-1);return new q(T,S,0).unproject(c)};new PR().load("brain5.glb",y=>{const E=y.scene.children[0];E.geometry.center();const T=new _E(E.geometry),S=new yp({color:65484}),x=[],P=T.attributes.position.array;for(let O=0;O<P.length;O+=6){const G=new gi,z=new Float32Array(P.slice(O,O+6));G.setAttribute("position",new Nn(z,3));const X=new _u(G,S);n.add(X),X.rotation.x-=.25;const C=X.position.clone(),D=new q((Math.random()-.5)*8,(Math.random()-.5)*3,(Math.random()-.5)*4),F=p(),re=Math.random()*.3;x.push({line:X,originalPos:C,randomTargetPos:C.clone().add(D),finalTargetPos:F,delay:re})}const L=O=>O<.5?4*O*O*O:1-Math.pow(-2*O+2,3)/2,w=()=>{x.forEach(({line:O,originalPos:G,randomTargetPos:z,finalTargetPos:X,delay:C})=>{const D=1-C,F=ep.clamp((g-C)/D,0,1),re=L(F);let oe=new q;if(F<.5){const ue=re/.5;oe.lerpVectors(G,z,ue)}else{const ue=(re-.5)/.5;oe.lerpVectors(z,X,ue),_=ep.lerp(1,.3,ue)}O.position.copy(oe),O.rotation.y+=.01,O.scale.set(_,_,_)}),u.render(n,c),requestAnimationFrame(w)};w()});let g=0;window.addEventListener("scroll",()=>{const y=window.scrollY;g=Math.min(y/800,1)});let _=1;const v=()=>{if(!o.current)return;c.aspect=o.current.clientWidth/o.current.clientHeight,c.left=-a*r/2,c.right=a*r/2,c.top=a/2,c.bottom=-a/2,c.updateProjectionMatrix(),u.setSize(o.current.clientWidth,o.current.clientHeight);const y=p();segments.forEach(E=>{E.finalTargetPos.copy(y)})};return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),u.dispose(),o.current?.contains(u.domElement)&&o.current.removeChild(u.domElement)}}),Ii.jsx("div",{ref:o,className:"fixed top-0 left-0 w-screen h-screen pointer-events-none z-[9999]"})}function _w(){return Ii.jsxs("div",{className:"relative h-[200vh] bg-gray-900 text-white",children:[Ii.jsxs("nav",{className:"fixed top-0 left-0 right-0 h-20 bg-gray-300 flex items-center px-4 z-50",children:[Ii.jsx("div",{id:"logo",className:"w-20 h-20 border-2 border-white bg-gray-600"}),Ii.jsx("div",{className:"flex-1 relative h-screen",children:Ii.jsx(gw,{})})]}),Ii.jsx("main",{className:"pt-18",children:Ii.jsx("h1",{className:"text-center text-4xl font-bold mb-4 mt-18",children:"Scroll to Transform the Cube"})})]})}AS.createRoot(document.getElementById("root")).render(Ii.jsx(nu.StrictMode,{children:Ii.jsx(_w,{})}));
