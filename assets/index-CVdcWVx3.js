(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();var xh={exports:{}},qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function dS(){if(j_)return qo;j_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,r,c){var u=null;if(c!==void 0&&(u=""+c),r.key!==void 0&&(u=""+r.key),"key"in r){c={};for(var h in r)h!=="key"&&(c[h]=r[h])}else c=r;return r=c.ref,{$$typeof:o,type:a,key:u,ref:r!==void 0?r:null,props:c}}return qo.Fragment=e,qo.jsx=n,qo.jsxs=n,qo}var K_;function pS(){return K_||(K_=1,xh.exports=dS()),xh.exports}var Mi=pS(),Sh={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function mS(){if(Z_)return st;Z_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(U,ee,ve){this.props=U,this.context=ee,this.refs=T,this.updater=ve||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,ee){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ee,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=S.prototype;function N(U,ee,ve){this.props=U,this.context=ee,this.refs=T,this.updater=ve||y}var L=N.prototype=new x;L.constructor=N,E(L,S.prototype),L.isPureReactComponent=!0;var w=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function B(U,ee,ve,xe,J,pe){return ve=pe.ref,{$$typeof:o,type:U,key:ee,ref:ve!==void 0?ve:null,props:pe}}function X(U,ee){return B(U.type,ee,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function C(U){var ee={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ve){return ee[ve]})}var V=/\/+/g;function le(U,ee){return typeof U=="object"&&U!==null&&U.key!=null?C(""+U.key):ee.toString(36)}function re(){}function _e(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(re,re):(U.status="pending",U.then(function(ee){U.status==="pending"&&(U.status="fulfilled",U.value=ee)},function(ee){U.status==="pending"&&(U.status="rejected",U.reason=ee)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function he(U,ee,ve,xe,J){var pe=typeof U;(pe==="undefined"||pe==="boolean")&&(U=null);var Se=!1;if(U===null)Se=!0;else switch(pe){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(U.$$typeof){case o:case e:Se=!0;break;case g:return Se=U._init,he(Se(U._payload),ee,ve,xe,J)}}if(Se)return J=J(U),Se=xe===""?"."+le(U,0):xe,w(J)?(ve="",Se!=null&&(ve=Se.replace(V,"$&/")+"/"),he(J,ee,ve,"",function(lt){return lt})):J!=null&&(D(J)&&(J=X(J,ve+(J.key==null||U&&U.key===J.key?"":(""+J.key).replace(V,"$&/")+"/")+Se)),ee.push(J)),1;Se=0;var Ae=xe===""?".":xe+":";if(w(U))for(var we=0;we<U.length;we++)xe=U[we],pe=Ae+le(xe,we),Se+=he(xe,ee,ve,pe,J);else if(we=v(U),typeof we=="function")for(U=we.call(U),we=0;!(xe=U.next()).done;)xe=xe.value,pe=Ae+le(xe,we++),Se+=he(xe,ee,ve,pe,J);else if(pe==="object"){if(typeof U.then=="function")return he(_e(U),ee,ve,xe,J);throw ee=String(U),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Se}function I(U,ee,ve){if(U==null)return U;var xe=[],J=0;return he(U,xe,"","",function(pe){return ee.call(ve,pe,J++)}),xe}function Z(U){if(U._status===-1){var ee=U._result;ee=ee(),ee.then(function(ve){(U._status===0||U._status===-1)&&(U._status=1,U._result=ve)},function(ve){(U._status===0||U._status===-1)&&(U._status=2,U._result=ve)}),U._status===-1&&(U._status=0,U._result=ee)}if(U._status===1)return U._result.default;throw U._result}var Y=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Me(){}return st.Children={map:I,forEach:function(U,ee,ve){I(U,function(){ee.apply(this,arguments)},ve)},count:function(U){var ee=0;return I(U,function(){ee++}),ee},toArray:function(U){return I(U,function(ee){return ee})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},st.Component=S,st.Fragment=n,st.Profiler=r,st.PureComponent=N,st.StrictMode=a,st.Suspense=p,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,st.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},st.cache=function(U){return function(){return U.apply(null,arguments)}},st.cloneElement=function(U,ee,ve){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var xe=E({},U.props),J=U.key,pe=void 0;if(ee!=null)for(Se in ee.ref!==void 0&&(pe=void 0),ee.key!==void 0&&(J=""+ee.key),ee)!H.call(ee,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&ee.ref===void 0||(xe[Se]=ee[Se]);var Se=arguments.length-2;if(Se===1)xe.children=ve;else if(1<Se){for(var Ae=Array(Se),we=0;we<Se;we++)Ae[we]=arguments[we+2];xe.children=Ae}return B(U.type,J,void 0,void 0,pe,xe)},st.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},st.createElement=function(U,ee,ve){var xe,J={},pe=null;if(ee!=null)for(xe in ee.key!==void 0&&(pe=""+ee.key),ee)H.call(ee,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(J[xe]=ee[xe]);var Se=arguments.length-2;if(Se===1)J.children=ve;else if(1<Se){for(var Ae=Array(Se),we=0;we<Se;we++)Ae[we]=arguments[we+2];J.children=Ae}if(U&&U.defaultProps)for(xe in Se=U.defaultProps,Se)J[xe]===void 0&&(J[xe]=Se[xe]);return B(U,pe,void 0,void 0,null,J)},st.createRef=function(){return{current:null}},st.forwardRef=function(U){return{$$typeof:h,render:U}},st.isValidElement=D,st.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Z}},st.memo=function(U,ee){return{$$typeof:d,type:U,compare:ee===void 0?null:ee}},st.startTransition=function(U){var ee=F.T,ve={};F.T=ve;try{var xe=U(),J=F.S;J!==null&&J(ve,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(Me,Y)}catch(pe){Y(pe)}finally{F.T=ee}},st.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},st.use=function(U){return F.H.use(U)},st.useActionState=function(U,ee,ve){return F.H.useActionState(U,ee,ve)},st.useCallback=function(U,ee){return F.H.useCallback(U,ee)},st.useContext=function(U){return F.H.useContext(U)},st.useDebugValue=function(){},st.useDeferredValue=function(U,ee){return F.H.useDeferredValue(U,ee)},st.useEffect=function(U,ee,ve){var xe=F.H;if(typeof ve=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xe.useEffect(U,ee)},st.useId=function(){return F.H.useId()},st.useImperativeHandle=function(U,ee,ve){return F.H.useImperativeHandle(U,ee,ve)},st.useInsertionEffect=function(U,ee){return F.H.useInsertionEffect(U,ee)},st.useLayoutEffect=function(U,ee){return F.H.useLayoutEffect(U,ee)},st.useMemo=function(U,ee){return F.H.useMemo(U,ee)},st.useOptimistic=function(U,ee){return F.H.useOptimistic(U,ee)},st.useReducer=function(U,ee,ve){return F.H.useReducer(U,ee,ve)},st.useRef=function(U){return F.H.useRef(U)},st.useState=function(U){return F.H.useState(U)},st.useSyncExternalStore=function(U,ee,ve){return F.H.useSyncExternalStore(U,ee,ve)},st.useTransition=function(){return F.H.useTransition()},st.version="19.1.0",st}var Q_;function ep(){return Q_||(Q_=1,Sh.exports=mS()),Sh.exports}var es=ep(),Mh={exports:{}},Yo={},Eh={exports:{}},Th={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function gS(){return J_||(J_=1,function(o){function e(I,Z){var Y=I.length;I.push(Z);e:for(;0<Y;){var Me=Y-1>>>1,U=I[Me];if(0<r(U,Z))I[Me]=Z,I[Y]=U,Y=Me;else break e}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var Z=I[0],Y=I.pop();if(Y!==Z){I[0]=Y;e:for(var Me=0,U=I.length,ee=U>>>1;Me<ee;){var ve=2*(Me+1)-1,xe=I[ve],J=ve+1,pe=I[J];if(0>r(xe,Y))J<U&&0>r(pe,xe)?(I[Me]=pe,I[J]=Y,Me=J):(I[Me]=xe,I[ve]=Y,Me=ve);else if(J<U&&0>r(pe,Y))I[Me]=pe,I[J]=Y,Me=J;else break e}}return Z}function r(I,Z){var Y=I.sortIndex-Z.sortIndex;return Y!==0?Y:I.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();o.unstable_now=function(){return u.now()-h}}var p=[],d=[],g=1,_=null,v=3,y=!1,E=!1,T=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(I){for(var Z=n(d);Z!==null;){if(Z.callback===null)a(d);else if(Z.startTime<=I)a(d),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=n(d)}}function F(I){if(T=!1,w(I),!E)if(n(p)!==null)E=!0,H||(H=!0,le());else{var Z=n(d);Z!==null&&he(F,Z.startTime-I)}}var H=!1,B=-1,X=5,D=-1;function C(){return S?!0:!(o.unstable_now()-D<X)}function V(){if(S=!1,H){var I=o.unstable_now();D=I;var Z=!0;try{e:{E=!1,T&&(T=!1,N(B),B=-1),y=!0;var Y=v;try{t:{for(w(I),_=n(p);_!==null&&!(_.expirationTime>I&&C());){var Me=_.callback;if(typeof Me=="function"){_.callback=null,v=_.priorityLevel;var U=Me(_.expirationTime<=I);if(I=o.unstable_now(),typeof U=="function"){_.callback=U,w(I),Z=!0;break t}_===n(p)&&a(p),w(I)}else a(p);_=n(p)}if(_!==null)Z=!0;else{var ee=n(d);ee!==null&&he(F,ee.startTime-I),Z=!1}}break e}finally{_=null,v=Y,y=!1}Z=void 0}}finally{Z?le():H=!1}}}var le;if(typeof L=="function")le=function(){L(V)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,_e=re.port2;re.port1.onmessage=V,le=function(){_e.postMessage(null)}}else le=function(){x(V,0)};function he(I,Z){B=x(function(){I(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(I){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var Y=v;v=Z;try{return I()}finally{v=Y}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(I,Z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=v;v=I;try{return Z()}finally{v=Y}},o.unstable_scheduleCallback=function(I,Z,Y){var Me=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Me+Y:Me):Y=Me,I){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,I={id:g++,callback:Z,priorityLevel:I,startTime:Y,expirationTime:U,sortIndex:-1},Y>Me?(I.sortIndex=Y,e(d,I),n(p)===null&&I===n(d)&&(T?(N(B),B=-1):T=!0,he(F,Y-Me))):(I.sortIndex=U,e(p,I),E||y||(E=!0,H||(H=!0,le()))),I},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(I){var Z=v;return function(){var Y=v;v=Z;try{return I.apply(this,arguments)}finally{v=Y}}}}(Th)),Th}var $_;function _S(){return $_||($_=1,Eh.exports=gS()),Eh.exports}var bh={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function vS(){if(e0)return Un;e0=1;var o=ep();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function c(p,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:p,containerInfo:d,implementation:g}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Un.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(p,d,null,g)},Un.flushSync=function(p){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=g,a.d.f()}},Un.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Un.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Un.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Un.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Un.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Un.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Un.requestFormReset=function(p){a.d.r(p)},Un.unstable_batchedUpdates=function(p,d){return p(d)},Un.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},Un.useFormStatus=function(){return u.H.useHostTransitionStatus()},Un.version="19.1.0",Un}var t0;function yS(){if(t0)return bh.exports;t0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),bh.exports=vS(),bh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function xS(){if(n0)return Yo;n0=1;var o=_S(),e=ep(),n=yS();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),t;if(m===l)return h(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var M=!1,A=f.child;A;){if(A===s){M=!0,s=f,l=m;break}if(A===l){M=!0,l=f,s=m;break}A=A.sibling}if(!M){for(A=m.child;A;){if(A===s){M=!0,s=m,l=f;break}if(A===l){M=!0,l=m,s=f;break}A=A.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function d(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=d(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case F:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case L:return(t.displayName||"Context")+".Provider";case N:return(t._context.displayName||"Context")+".Consumer";case w:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return i=t.displayName||null,i!==null?i:_e(t.type)||"Memo";case X:i=t._payload,t=t._init;try{return _e(t(i))}catch{}}return null}var he=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Me=[],U=-1;function ee(t){return{current:t}}function ve(t){0>U||(t.current=Me[U],Me[U]=null,U--)}function xe(t,i){U++,Me[U]=t.current,t.current=i}var J=ee(null),pe=ee(null),Se=ee(null),Ae=ee(null);function we(t,i){switch(xe(Se,i),xe(pe,t),xe(J,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?M_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=M_(i),t=E_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ve(J),xe(J,t)}function lt(){ve(J),ve(pe),ve(Se)}function Ze(t){t.memoizedState!==null&&xe(Ae,t);var i=J.current,s=E_(i,t.type);i!==s&&(xe(pe,t),xe(J,s))}function Bt(t){pe.current===t&&(ve(J),ve(pe)),Ae.current===t&&(ve(Ae),Go._currentValue=Y)}var kt=Object.prototype.hasOwnProperty,xt=o.unstable_scheduleCallback,z=o.unstable_cancelCallback,Mn=o.unstable_shouldYield,bt=o.unstable_requestPaint,pt=o.unstable_now,Ge=o.unstable_getCurrentPriorityLevel,St=o.unstable_ImmediatePriority,Ye=o.unstable_UserBlockingPriority,it=o.unstable_NormalPriority,en=o.unstable_LowPriority,O=o.unstable_IdlePriority,b=o.log,te=o.unstable_setDisableYieldValue,ue=null,de=null;function oe(t){if(typeof b=="function"&&te(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(ue,t)}catch{}}var Oe=Math.clz32?Math.clz32:Ve,De=Math.log,He=Math.LN2;function Ve(t){return t>>>=0,t===0?32:31-(De(t)/He|0)|0}var ye=256,Pe=4194304;function We(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qe(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?f=We(l):(M&=A,M!==0?f=We(M):s||(s=A&~t,s!==0&&(f=We(s))))):(A=l&~m,A!==0?f=We(A):M!==0?f=We(M):s||(s=l&~t,s!==0&&(f=We(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Re(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function nt(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var t=ye;return ye<<=1,(ye&4194048)===0&&(ye=256),t}function Ue(){var t=Pe;return Pe<<=1,(Pe&62914560)===0&&(Pe=4194304),t}function Ee(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Ie(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function be(t,i,s,l,f,m){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,P=t.expirationTimes,$=t.hiddenUpdates;for(s=M&~s;0<s;){var ce=31-Oe(s),me=1<<ce;A[ce]=0,P[ce]=-1;var ne=$[ce];if(ne!==null)for($[ce]=null,ce=0;ce<ne.length;ce++){var ie=ne[ce];ie!==null&&(ie.lane&=-536870913)}s&=~me}l!==0&&ge(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(M&~i))}function ge(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Oe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function Fe(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Oe(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function tt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Lt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:V_(t.type))}function jn(t,i){var s=Z.p;try{return Z.p=t,i()}finally{Z.p=s}}var pn=Math.random().toString(36).slice(2),ln="__reactFiber$"+pn,En="__reactProps$"+pn,Gn="__reactContainer$"+pn,ls="__reactEvents$"+pn,vl="__reactListeners$"+pn,yl="__reactHandles$"+pn,cs="__reactResources$"+pn,Sa="__reactMarker$"+pn;function Ma(t){delete t[ln],delete t[En],delete t[ls],delete t[vl],delete t[yl]}function Vi(t){var i=t[ln];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Gn]||s[ln]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=R_(t);t!==null;){if(s=t[ln])return s;t=R_(t)}return i}t=s,s=t.parentNode}return null}function ki(t){if(t=t[ln]||t[Gn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function us(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Ea(t){var i=t[cs];return i||(i=t[cs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function an(t){t[Sa]=!0}var xl=new Set,Sl={};function Xi(t,i){R(t,i),R(t+"Capture",i)}function R(t,i){for(Sl[t]=i,t=0;t<i.length;t++)xl.add(i[t])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},se={};function K(t){return kt.call(se,t)?!0:kt.call(ae,t)?!1:q.test(t)?se[t]=!0:(ae[t]=!0,!1)}function Te(t,i,s){if(K(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Ce(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ne(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}var Be,$e;function Ke(t){if(Be===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Be=i&&i[1]||"",$e=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Be+t+$e}var ke=!1;function ct(t,i){if(!t||ke)return"";ke=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(ie){var ne=ie}Reflect.construct(t,[],me)}else{try{me.call()}catch(ie){ne=ie}t.call(me.prototype)}}else{try{throw Error()}catch(ie){ne=ie}(me=t())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(ie){if(ie&&ne&&typeof ie.stack=="string")return[ie.stack,ne.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],A=m[1];if(M&&A){var P=M.split(`
`),$=A.split(`
`);for(f=l=0;l<P.length&&!P[l].includes("DetermineComponentFrameRoot");)l++;for(;f<$.length&&!$[f].includes("DetermineComponentFrameRoot");)f++;if(l===P.length||f===$.length)for(l=P.length-1,f=$.length-1;1<=l&&0<=f&&P[l]!==$[f];)f--;for(;1<=l&&0<=f;l--,f--)if(P[l]!==$[f]){if(l!==1||f!==1)do if(l--,f--,0>f||P[l]!==$[f]){var ce=`
`+P[l].replace(" at new "," at ");return t.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",t.displayName)),ce}while(1<=l&&0<=f);break}}}finally{ke=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Ke(s):""}function Dt(t){switch(t.tag){case 26:case 27:case 5:return Ke(t.type);case 16:return Ke("Lazy");case 13:return Ke("Suspense");case 19:return Ke("SuspenseList");case 0:case 15:return ct(t.type,!1);case 11:return ct(t.type.render,!1);case 1:return ct(t.type,!0);case 31:return Ke("Activity");default:return""}}function jt(t){try{var i="";do i+=Dt(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function ht(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ut(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(t){var i=Ut(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,m.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ft(t){t._valueTracker||(t._valueTracker=je(t))}function Mt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ut(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function mn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ta=/[\n"\\]/g;function qt(t){return t.replace(Ta,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Wi(t,i,s,l,f,m,M,A){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ht(i)):t.value!==""+ht(i)&&(t.value=""+ht(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?Cn(t,M,ht(i)):s!=null?Cn(t,M,ht(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ht(A):t.removeAttribute("name")}function Xt(t,i,s,l,f,m,M,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+ht(s):"",i=i!=null?""+ht(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Cn(t,i,s){i==="number"&&mn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function cn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ht(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function gn(t,i,s){if(i!=null&&(i=""+ht(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+ht(s):""}function Tn(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(he(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ht(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function Ci(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var qi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mp(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||qi.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Ep(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Mp(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Mp(t,m,i[m])}function vu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ml(t){return hy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var yu=null;function xu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gs=null,Vs=null;function Tp(t){var i=ki(t);if(i&&(t=i.stateNode)){var s=t[En]||null;e:switch(t=i.stateNode,i.type){case"input":if(Wi(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+qt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[En]||null;if(!f)throw Error(a(90));Wi(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Mt(l)}break e;case"textarea":gn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&cn(t,!!s.multiple,i,!1)}}}var Su=!1;function bp(t,i,s){if(Su)return t(i,s);Su=!0;try{var l=t(i);return l}finally{if(Su=!1,(Gs!==null||Vs!==null)&&(oc(),Gs&&(i=Gs,t=Vs,Vs=Gs=null,Tp(i),t)))for(i=0;i<t.length;i++)Tp(t[i])}}function $r(t,i){var s=t.stateNode;if(s===null)return null;var l=s[En]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(Yi)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Mu=!1}var ba=null,Eu=null,El=null;function Ap(){if(El)return El;var t,i=Eu,s=i.length,l,f="value"in ba?ba.value:ba.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===f[m-l];l++);return El=f.slice(t,1<l?1-l:void 0)}function Tl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function bl(){return!0}function Rp(){return!1}function Vn(t){function i(s,l,f,m,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?bl:Rp,this.isPropagationStopped=Rp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),i}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=Vn(fs),to=g({},fs,{view:0,detail:0}),dy=Vn(to),Tu,bu,no,Rl=g({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Tu=t.screenX-no.screenX,bu=t.screenY-no.screenY):bu=Tu=0,no=t),Tu)},movementY:function(t){return"movementY"in t?t.movementY:bu}}),wp=Vn(Rl),py=g({},Rl,{dataTransfer:0}),my=Vn(py),gy=g({},to,{relatedTarget:0}),Au=Vn(gy),_y=g({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),vy=Vn(_y),yy=g({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xy=Vn(yy),Sy=g({},fs,{data:0}),Cp=Vn(Sy),My={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function by(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ty[t])?!!i[t]:!1}function Ru(){return by}var Ay=g({},to,{key:function(t){if(t.key){var i=My[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ey[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ry=Vn(Ay),wy=g({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=Vn(wy),Cy=g({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),Dy=Vn(Cy),Uy=g({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ly=Vn(Uy),Ny=g({},Rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Oy=Vn(Ny),Py=g({},fs,{newState:0,oldState:0}),Iy=Vn(Py),By=[9,13,27,32],wu=Yi&&"CompositionEvent"in window,io=null;Yi&&"documentMode"in document&&(io=document.documentMode);var Fy=Yi&&"TextEvent"in window&&!io,Up=Yi&&(!wu||io&&8<io&&11>=io),Lp=" ",Np=!1;function Op(t,i){switch(t){case"keyup":return By.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function zy(t,i){switch(t){case"compositionend":return Pp(i);case"keypress":return i.which!==32?null:(Np=!0,Lp);case"textInput":return t=i.data,t===Lp&&Np?null:t;default:return null}}function Hy(t,i){if(ks)return t==="compositionend"||!wu&&Op(t,i)?(t=Ap(),El=Eu=ba=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Up&&i.locale!=="ko"?null:i.data;default:return null}}var Gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Gy[t.type]:i==="textarea"}function Bp(t,i,s,l){Gs?Vs?Vs.push(l):Vs=[l]:Gs=l,i=dc(i,"onChange"),0<i.length&&(s=new Al("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var ao=null,so=null;function Vy(t){__(t,0)}function wl(t){var i=us(t);if(Mt(i))return t}function Fp(t,i){if(t==="change")return i}var zp=!1;if(Yi){var Cu;if(Yi){var Du="oninput"in document;if(!Du){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),Du=typeof Hp.oninput=="function"}Cu=Du}else Cu=!1;zp=Cu&&(!document.documentMode||9<document.documentMode)}function Gp(){ao&&(ao.detachEvent("onpropertychange",Vp),so=ao=null)}function Vp(t){if(t.propertyName==="value"&&wl(so)){var i=[];Bp(i,so,t,xu(t)),bp(Vy,i)}}function ky(t,i,s){t==="focusin"?(Gp(),ao=i,so=s,ao.attachEvent("onpropertychange",Vp)):t==="focusout"&&Gp()}function Xy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(so)}function Wy(t,i){if(t==="click")return wl(i)}function qy(t,i){if(t==="input"||t==="change")return wl(i)}function Yy(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Kn=typeof Object.is=="function"?Object.is:Yy;function ro(t,i){if(Kn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!kt.call(i,f)||!Kn(t[f],i[f]))return!1}return!0}function kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xp(t,i){var s=kp(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=kp(s)}}function Wp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Wp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function qp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=mn(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=mn(t.document)}return i}function Uu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var jy=Yi&&"documentMode"in document&&11>=document.documentMode,Xs=null,Lu=null,oo=null,Nu=!1;function Yp(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Nu||Xs==null||Xs!==mn(l)||(l=Xs,"selectionStart"in l&&Uu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oo&&ro(oo,l)||(oo=l,l=dc(Lu,"onSelect"),0<l.length&&(i=new Al("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Xs)))}function hs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Ws={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Ou={},jp={};Yi&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function ds(t){if(Ou[t])return Ou[t];if(!Ws[t])return t;var i=Ws[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in jp)return Ou[t]=i[s];return t}var Kp=ds("animationend"),Zp=ds("animationiteration"),Qp=ds("animationstart"),Ky=ds("transitionrun"),Zy=ds("transitionstart"),Qy=ds("transitioncancel"),Jp=ds("transitionend"),$p=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function gi(t,i){$p.set(t,i),Xi(i,[t])}var em=new WeakMap;function si(t,i){if(typeof t=="object"&&t!==null){var s=em.get(t);return s!==void 0?s:(i={value:t,source:i,stack:jt(i)},em.set(t,i),i)}return{value:t,source:i,stack:jt(i)}}var ri=[],qs=0,Iu=0;function Cl(){for(var t=qs,i=Iu=qs=0;i<t;){var s=ri[i];ri[i++]=null;var l=ri[i];ri[i++]=null;var f=ri[i];ri[i++]=null;var m=ri[i];if(ri[i++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}m!==0&&tm(s,f,m)}}function Dl(t,i,s,l){ri[qs++]=t,ri[qs++]=i,ri[qs++]=s,ri[qs++]=l,Iu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Bu(t,i,s,l){return Dl(t,i,s,l),Ul(t)}function Ys(t,i){return Dl(t,null,null,i),Ul(t)}function tm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-Oe(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function Ul(t){if(50<No)throw No=0,Xf=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var js={};function Jy(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,i,s,l){return new Jy(t,i,s,l)}function Fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ji(t,i){var s=t.alternate;return s===null?(s=Zn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function nm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Ll(t,i,s,l,f,m){var M=0;if(l=t,typeof t=="function")Fu(t)&&(M=1);else if(typeof t=="string")M=eS(t,s,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=Zn(31,s,i,f),t.elementType=D,t.lanes=m,t;case E:return ps(s.children,f,m,i);case T:M=8,f|=24;break;case S:return t=Zn(12,s,i,f|2),t.elementType=S,t.lanes=m,t;case F:return t=Zn(13,s,i,f),t.elementType=F,t.lanes=m,t;case H:return t=Zn(19,s,i,f),t.elementType=H,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case L:M=10;break e;case N:M=9;break e;case w:M=11;break e;case B:M=14;break e;case X:M=16,l=null;break e}M=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=Zn(M,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function ps(t,i,s,l){return t=Zn(7,t,l,i),t.lanes=s,t}function zu(t,i,s){return t=Zn(6,t,null,i),t.lanes=s,t}function Hu(t,i,s){return i=Zn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Ks=[],Zs=0,Nl=null,Ol=0,oi=[],li=0,ms=null,Ki=1,Zi="";function gs(t,i){Ks[Zs++]=Ol,Ks[Zs++]=Nl,Nl=t,Ol=i}function im(t,i,s){oi[li++]=Ki,oi[li++]=Zi,oi[li++]=ms,ms=t;var l=Ki;t=Zi;var f=32-Oe(l)-1;l&=~(1<<f),s+=1;var m=32-Oe(i)+f;if(30<m){var M=f-f%5;m=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Ki=1<<32-Oe(i)+f|s<<f|l,Zi=m+t}else Ki=1<<m|s<<f|l,Zi=t}function Gu(t){t.return!==null&&(gs(t,1),im(t,1,0))}function Vu(t){for(;t===Nl;)Nl=Ks[--Zs],Ks[Zs]=null,Ol=Ks[--Zs],Ks[Zs]=null;for(;t===ms;)ms=oi[--li],oi[li]=null,Zi=oi[--li],oi[li]=null,Ki=oi[--li],oi[li]=null}var On=null,Jt=null,wt=!1,_s=null,Di=!1,ku=Error(a(519));function vs(t){var i=Error(a(418,""));throw uo(si(i,t)),ku}function am(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[ln]=t,i[En]=l,s){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(s=0;s<Po.length;s++)gt(Po[s],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":gt("invalid",i),Xt(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ft(i);break;case"select":gt("invalid",i);break;case"textarea":gt("invalid",i),Tn(i,l.value,l.defaultValue,l.children),Ft(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||S_(i.textContent,s)?(l.popover!=null&&(gt("beforetoggle",i),gt("toggle",i)),l.onScroll!=null&&gt("scroll",i),l.onScrollEnd!=null&&gt("scrollend",i),l.onClick!=null&&(i.onclick=pc),i=!0):i=!1,i||vs(t)}function sm(t){for(On=t.return;On;)switch(On.tag){case 5:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:On=On.return}}function lo(t){if(t!==On)return!1;if(!wt)return sm(t),wt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||rh(t.type,t.memoizedProps)),s=!s),s&&Jt&&vs(t),sm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){Jt=vi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}Jt=null}}else i===27?(i=Jt,Ga(t.type)?(t=uh,uh=null,Jt=t):Jt=i):Jt=On?vi(t.stateNode.nextSibling):null;return!0}function co(){Jt=On=null,wt=!1}function rm(){var t=_s;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),_s=null),t}function uo(t){_s===null?_s=[t]:_s.push(t)}var Xu=ee(null),ys=null,Qi=null;function Aa(t,i,s){xe(Xu,i._currentValue),i._currentValue=s}function Ji(t){t._currentValue=Xu.current,ve(Xu)}function Wu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function qu(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var M=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var P=0;P<i.length;P++)if(A.context===i[P]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),Wu(m.return,s,t),l||(M=null);break e}m=A.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(a(341));M.lanes|=s,m=M.alternate,m!==null&&(m.lanes|=s),Wu(M,s,t),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===t){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function fo(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var A=f.type;Kn(f.pendingProps.value,M.value)||(t!==null?t.push(A):t=[A])}}else if(f===Ae.current){if(M=f.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Go):t=[Go])}f=f.return}t!==null&&qu(i,t,s,l),i.flags|=262144}function Pl(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xs(t){ys=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return om(ys,t)}function Il(t,i){return ys===null&&xs(t),om(t,i)}function om(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Qi===null){if(t===null)throw Error(a(308));Qi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Qi=Qi.next=i;return s}var $y=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},ex=o.unstable_scheduleCallback,tx=o.unstable_NormalPriority,un={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new $y,data:new Map,refCount:0}}function ho(t){t.refCount--,t.refCount===0&&ex(tx,function(){t.controller.abort()})}var po=null,ju=0,Qs=0,Js=null;function nx(t,i){if(po===null){var s=po=[];ju=0,Qs=Qf(),Js={status:"pending",value:void 0,then:function(l){s.push(l)}}}return ju++,i.then(lm,lm),i}function lm(){if(--ju===0&&po!==null){Js!==null&&(Js.status="fulfilled");var t=po;po=null,Qs=0,Js=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function ix(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var cm=I.S;I.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&nx(t,i),cm!==null&&cm(t,i)};var Ss=ee(null);function Ku(){var t=Ss.current;return t!==null?t:Yt.pooledCache}function Bl(t,i){i===null?xe(Ss,Ss.current):xe(Ss,i.pool)}function um(){var t=Ku();return t===null?null:{parent:un._currentValue,pool:t}}var mo=Error(a(460)),fm=Error(a(474)),Fl=Error(a(542)),Zu={then:function(){}};function hm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function zl(){}function dm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(zl,zl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,mm(t),t;default:if(typeof i.status=="string")i.then(zl,zl);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,mm(t),t}throw go=i,mo}}var go=null;function pm(){if(go===null)throw Error(a(459));var t=go;return go=null,t}function mm(t){if(t===mo||t===Fl)throw Error(a(483))}var Ra=!1;function Qu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ca(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Nt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Ul(t),tm(t,null,s),i}return Dl(t,l,i,s),Ul(t)}function _o(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Fe(t,s)}}function $u(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=M:m=m.next=M,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var ef=!1;function vo(){if(ef){var t=Js;if(t!==null)throw t}}function yo(t,i,s,l){ef=!1;var f=t.updateQueue;Ra=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var P=A,$=P.next;P.next=null,M===null?m=$:M.next=$,M=P;var ce=t.alternate;ce!==null&&(ce=ce.updateQueue,A=ce.lastBaseUpdate,A!==M&&(A===null?ce.firstBaseUpdate=$:A.next=$,ce.lastBaseUpdate=P))}if(m!==null){var me=f.baseState;M=0,ce=$=P=null,A=m;do{var ne=A.lane&-536870913,ie=ne!==A.lane;if(ie?(Et&ne)===ne:(l&ne)===ne){ne!==0&&ne===Qs&&(ef=!0),ce!==null&&(ce=ce.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var et=t,Qe=A;ne=i;var Gt=s;switch(Qe.tag){case 1:if(et=Qe.payload,typeof et=="function"){me=et.call(Gt,me,ne);break e}me=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=Qe.payload,ne=typeof et=="function"?et.call(Gt,me,ne):et,ne==null)break e;me=g({},me,ne);break e;case 2:Ra=!0}}ne=A.callback,ne!==null&&(t.flags|=64,ie&&(t.flags|=8192),ie=f.callbacks,ie===null?f.callbacks=[ne]:ie.push(ne))}else ie={lane:ne,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ce===null?($=ce=ie,P=me):ce=ce.next=ie,M|=ne;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ie=A,A=ie.next,ie.next=null,f.lastBaseUpdate=ie,f.shared.pending=null}}while(!0);ce===null&&(P=me),f.baseState=P,f.firstBaseUpdate=$,f.lastBaseUpdate=ce,m===null&&(f.shared.lanes=0),Ba|=M,t.lanes=M,t.memoizedState=me}}function gm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function _m(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)gm(s[t],i)}var $s=ee(null),Hl=ee(0);function vm(t,i){t=sa,xe(Hl,t),xe($s,i),sa=t|i.baseLanes}function tf(){xe(Hl,sa),xe($s,$s.current)}function nf(){sa=Hl.current,ve($s),ve(Hl)}var Da=0,ft=null,zt=null,sn=null,Gl=!1,er=!1,Ms=!1,Vl=0,xo=0,tr=null,ax=0;function tn(){throw Error(a(321))}function af(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Kn(t[s],i[s]))return!1;return!0}function sf(t,i,s,l,f,m){return Da=m,ft=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=t===null||t.memoizedState===null?tg:ng,Ms=!1,m=s(l,f),Ms=!1,er&&(m=xm(i,s,l,f)),ym(t),m}function ym(t){I.H=jl;var i=zt!==null&&zt.next!==null;if(Da=0,sn=zt=ft=null,Gl=!1,xo=0,tr=null,i)throw Error(a(300));t===null||_n||(t=t.dependencies,t!==null&&Pl(t)&&(_n=!0))}function xm(t,i,s,l){ft=t;var f=0;do{if(er&&(tr=null),xo=0,er=!1,25<=f)throw Error(a(301));if(f+=1,sn=zt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=fx,m=i(s,l)}while(er);return m}function sx(){var t=I.H,i=t.useState()[0];return i=typeof i.then=="function"?So(i):i,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(ft.flags|=1024),i}function rf(){var t=Vl!==0;return Vl=0,t}function of(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function lf(t){if(Gl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Gl=!1}Da=0,sn=zt=ft=null,er=!1,xo=Vl=0,tr=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?ft.memoizedState=sn=t:sn=sn.next=t,sn}function rn(){if(zt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var i=sn===null?ft.memoizedState:sn.next;if(i!==null)sn=i,zt=t;else{if(t===null)throw ft.alternate===null?Error(a(467)):Error(a(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},sn===null?ft.memoizedState=sn=t:sn=sn.next=t}return sn}function cf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(t){var i=xo;return xo+=1,tr===null&&(tr=[]),t=dm(tr,t,i),i=ft,(sn===null?i.memoizedState:sn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?tg:ng),t}function kl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return So(t);if(t.$$typeof===L)return Dn(t)}throw Error(a(438,String(t)))}function uf(t){var i=null,s=ft.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ft.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=cf(),ft.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=C;return i.index++,s}function $i(t,i){return typeof i=="function"?i(t):i}function Xl(t){var i=rn();return ff(i,zt,t)}function ff(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var A=M=null,P=null,$=i,ce=!1;do{var me=$.lane&-536870913;if(me!==$.lane?(Et&me)===me:(Da&me)===me){var ne=$.revertLane;if(ne===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),me===Qs&&(ce=!0);else if((Da&ne)===ne){$=$.next,ne===Qs&&(ce=!0);continue}else me={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(A=P=me,M=m):P=P.next=me,ft.lanes|=ne,Ba|=ne;me=$.action,Ms&&s(m,me),m=$.hasEagerState?$.eagerState:s(m,me)}else ne={lane:me,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(A=P=ne,M=m):P=P.next=ne,ft.lanes|=me,Ba|=me;$=$.next}while($!==null&&$!==i);if(P===null?M=m:P.next=A,!Kn(m,t.memoizedState)&&(_n=!0,ce&&(s=Js,s!==null)))throw s;t.memoizedState=m,t.baseState=M,t.baseQueue=P,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function hf(t){var i=rn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do m=t(m,M.action),M=M.next;while(M!==f);Kn(m,i.memoizedState)||(_n=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Sm(t,i,s){var l=ft,f=rn(),m=wt;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var M=!Kn((zt||f).memoizedState,s);M&&(f.memoizedState=s,_n=!0),f=f.queue;var A=Tm.bind(null,l,f,t);if(Mo(2048,8,A,[t]),f.getSnapshot!==i||M||sn!==null&&sn.memoizedState.tag&1){if(l.flags|=2048,nr(9,Wl(),Em.bind(null,l,f,s,i),null),Yt===null)throw Error(a(349));m||(Da&124)!==0||Mm(l,i,s)}return s}function Mm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ft.updateQueue,i===null?(i=cf(),ft.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Em(t,i,s,l){i.value=s,i.getSnapshot=l,bm(i)&&Am(t)}function Tm(t,i,s){return s(function(){bm(i)&&Am(t)})}function bm(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Kn(t,s)}catch{return!0}}function Am(t){var i=Ys(t,2);i!==null&&ti(i,t,2)}function df(t){var i=kn();if(typeof t=="function"){var s=t;if(t=s(),Ms){oe(!0);try{s()}finally{oe(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:t},i}function Rm(t,i,s,l){return t.baseState=s,ff(t,zt,typeof l=="function"?l:$i)}function rx(t,i,s,l,f){if(Yl(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};I.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,wm(i,m)):(m.next=s.next,i.pending=s.next=m)}}function wm(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=I.T,M={};I.T=M;try{var A=s(f,l),P=I.S;P!==null&&P(M,A),Cm(t,i,A)}catch($){pf(t,i,$)}finally{I.T=m}}else try{m=s(f,l),Cm(t,i,m)}catch($){pf(t,i,$)}}function Cm(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Dm(t,i,l)},function(l){return pf(t,i,l)}):Dm(t,i,s)}function Dm(t,i,s){i.status="fulfilled",i.value=s,Um(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,wm(t,s)))}function pf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Um(i),i=i.next;while(i!==l)}t.action=null}function Um(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Lm(t,i){return i}function Nm(t,i){if(wt){var s=Yt.formState;if(s!==null){e:{var l=ft;if(wt){if(Jt){t:{for(var f=Jt,m=Di;f.nodeType!==8;){if(!m){f=null;break t}if(f=vi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Jt=vi(f.nextSibling),l=f.data==="F!";break e}}vs(l)}l=!1}l&&(i=s[0])}}return s=kn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lm,lastRenderedState:i},s.queue=l,s=Jm.bind(null,ft,l),l.dispatch=s,l=df(!1),m=yf.bind(null,ft,!1,l.queue),l=kn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=rx.bind(null,ft,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Om(t){var i=rn();return Pm(i,zt,t)}function Pm(t,i,s){if(i=ff(t,i,Lm)[0],t=Xl($i)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=So(i)}catch(M){throw M===mo?Fl:M}else l=i;i=rn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(ft.flags|=2048,nr(9,Wl(),ox.bind(null,f,s),null)),[l,m,t]}function ox(t,i){t.action=i}function Im(t){var i=rn(),s=zt;if(s!==null)return Pm(i,s,t);rn(),i=i.memoizedState,s=rn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function nr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ft.updateQueue,i===null&&(i=cf(),ft.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function Wl(){return{destroy:void 0,resource:void 0}}function Bm(){return rn().memoizedState}function ql(t,i,s,l){var f=kn();l=l===void 0?null:l,ft.flags|=t,f.memoizedState=nr(1|i,Wl(),s,l)}function Mo(t,i,s,l){var f=rn();l=l===void 0?null:l;var m=f.memoizedState.inst;zt!==null&&l!==null&&af(l,zt.memoizedState.deps)?f.memoizedState=nr(i,m,s,l):(ft.flags|=t,f.memoizedState=nr(1|i,m,s,l))}function Fm(t,i){ql(8390656,8,t,i)}function zm(t,i){Mo(2048,8,t,i)}function Hm(t,i){return Mo(4,2,t,i)}function Gm(t,i){return Mo(4,4,t,i)}function Vm(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function km(t,i,s){s=s!=null?s.concat([t]):null,Mo(4,4,Vm.bind(null,i,t),s)}function mf(){}function Xm(t,i){var s=rn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&af(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Wm(t,i){var s=rn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&af(i,l[1]))return l[0];if(l=t(),Ms){oe(!0);try{t()}finally{oe(!1)}}return s.memoizedState=[l,i],l}function gf(t,i,s){return s===void 0||(Da&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=jg(),ft.lanes|=t,Ba|=t,s)}function qm(t,i,s,l){return Kn(s,i)?s:$s.current!==null?(t=gf(t,s,l),Kn(t,i)||(_n=!0),t):(Da&42)===0?(_n=!0,t.memoizedState=s):(t=jg(),ft.lanes|=t,Ba|=t,i)}function Ym(t,i,s,l,f){var m=Z.p;Z.p=m!==0&&8>m?m:8;var M=I.T,A={};I.T=A,yf(t,!1,i,s);try{var P=f(),$=I.S;if($!==null&&$(A,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ce=ix(P,l);Eo(t,i,ce,ei(t))}else Eo(t,i,l,ei(t))}catch(me){Eo(t,i,{then:function(){},status:"rejected",reason:me},ei())}finally{Z.p=m,I.T=M}}function lx(){}function _f(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=jm(t).queue;Ym(t,f,i,Y,s===null?lx:function(){return Km(t),s(l)})}function jm(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:Y},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Km(t){var i=jm(t).next.queue;Eo(t,i,{},ei())}function vf(){return Dn(Go)}function Zm(){return rn().memoizedState}function Qm(){return rn().memoizedState}function cx(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ei();t=wa(s);var l=Ca(i,t,s);l!==null&&(ti(l,i,s),_o(l,i,s)),i={cache:Yu()},t.payload=i;return}i=i.return}}function ux(t,i,s){var l=ei();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Yl(t)?$m(i,s):(s=Bu(t,i,s,l),s!==null&&(ti(s,t,l),eg(s,i,l)))}function Jm(t,i,s){var l=ei();Eo(t,i,s,l)}function Eo(t,i,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Yl(t))$m(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,A=m(M,s);if(f.hasEagerState=!0,f.eagerState=A,Kn(A,M))return Dl(t,i,f,0),Yt===null&&Cl(),!1}catch{}finally{}if(s=Bu(t,i,f,l),s!==null)return ti(s,t,l),eg(s,i,l),!0}return!1}function yf(t,i,s,l){if(l={lane:2,revertLane:Qf(),action:l,hasEagerState:!1,eagerState:null,next:null},Yl(t)){if(i)throw Error(a(479))}else i=Bu(t,s,l,2),i!==null&&ti(i,t,2)}function Yl(t){var i=t.alternate;return t===ft||i!==null&&i===ft}function $m(t,i){er=Gl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function eg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Fe(t,s)}}var jl={readContext:Dn,use:kl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},tg={readContext:Dn,use:kl,useCallback:function(t,i){return kn().memoizedState=[t,i===void 0?null:i],t},useContext:Dn,useEffect:Fm,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,ql(4194308,4,Vm.bind(null,i,t),s)},useLayoutEffect:function(t,i){return ql(4194308,4,t,i)},useInsertionEffect:function(t,i){ql(4,2,t,i)},useMemo:function(t,i){var s=kn();i=i===void 0?null:i;var l=t();if(Ms){oe(!0);try{t()}finally{oe(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=kn();if(s!==void 0){var f=s(i);if(Ms){oe(!0);try{s(i)}finally{oe(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=ux.bind(null,ft,t),[l.memoizedState,t]},useRef:function(t){var i=kn();return t={current:t},i.memoizedState=t},useState:function(t){t=df(t);var i=t.queue,s=Jm.bind(null,ft,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:mf,useDeferredValue:function(t,i){var s=kn();return gf(s,t,i)},useTransition:function(){var t=df(!1);return t=Ym.bind(null,ft,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ft,f=kn();if(wt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Yt===null)throw Error(a(349));(Et&124)!==0||Mm(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Fm(Tm.bind(null,l,m,t),[t]),l.flags|=2048,nr(9,Wl(),Em.bind(null,l,m,s,i),null),s},useId:function(){var t=kn(),i=Yt.identifierPrefix;if(wt){var s=Zi,l=Ki;s=(l&~(1<<32-Oe(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Vl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=ax++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:vf,useFormState:Nm,useActionState:Nm,useOptimistic:function(t){var i=kn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=yf.bind(null,ft,!0,s),s.dispatch=i,[t,i]},useMemoCache:uf,useCacheRefresh:function(){return kn().memoizedState=cx.bind(null,ft)}},ng={readContext:Dn,use:kl,useCallback:Xm,useContext:Dn,useEffect:zm,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Wm,useReducer:Xl,useRef:Bm,useState:function(){return Xl($i)},useDebugValue:mf,useDeferredValue:function(t,i){var s=rn();return qm(s,zt.memoizedState,t,i)},useTransition:function(){var t=Xl($i)[0],i=rn().memoizedState;return[typeof t=="boolean"?t:So(t),i]},useSyncExternalStore:Sm,useId:Zm,useHostTransitionStatus:vf,useFormState:Om,useActionState:Om,useOptimistic:function(t,i){var s=rn();return Rm(s,zt,t,i)},useMemoCache:uf,useCacheRefresh:Qm},fx={readContext:Dn,use:kl,useCallback:Xm,useContext:Dn,useEffect:zm,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Wm,useReducer:hf,useRef:Bm,useState:function(){return hf($i)},useDebugValue:mf,useDeferredValue:function(t,i){var s=rn();return zt===null?gf(s,t,i):qm(s,zt.memoizedState,t,i)},useTransition:function(){var t=hf($i)[0],i=rn().memoizedState;return[typeof t=="boolean"?t:So(t),i]},useSyncExternalStore:Sm,useId:Zm,useHostTransitionStatus:vf,useFormState:Im,useActionState:Im,useOptimistic:function(t,i){var s=rn();return zt!==null?Rm(s,zt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:uf,useCacheRefresh:Qm},ir=null,To=0;function Kl(t){var i=To;return To+=1,ir===null&&(ir=[]),dm(ir,t,i)}function bo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Zl(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function ig(t){var i=t._init;return i(t._payload)}function ag(t){function i(W,G){if(t){var Q=W.deletions;Q===null?(W.deletions=[G],W.flags|=16):Q.push(G)}}function s(W,G){if(!t)return null;for(;G!==null;)i(W,G),G=G.sibling;return null}function l(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function f(W,G){return W=ji(W,G),W.index=0,W.sibling=null,W}function m(W,G,Q){return W.index=Q,t?(Q=W.alternate,Q!==null?(Q=Q.index,Q<G?(W.flags|=67108866,G):Q):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function M(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function A(W,G,Q,fe){return G===null||G.tag!==6?(G=zu(Q,W.mode,fe),G.return=W,G):(G=f(G,Q),G.return=W,G)}function P(W,G,Q,fe){var ze=Q.type;return ze===E?ce(W,G,Q.props.children,fe,Q.key):G!==null&&(G.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===X&&ig(ze)===G.type)?(G=f(G,Q.props),bo(G,Q),G.return=W,G):(G=Ll(Q.type,Q.key,Q.props,null,W.mode,fe),bo(G,Q),G.return=W,G)}function $(W,G,Q,fe){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=Hu(Q,W.mode,fe),G.return=W,G):(G=f(G,Q.children||[]),G.return=W,G)}function ce(W,G,Q,fe,ze){return G===null||G.tag!==7?(G=ps(Q,W.mode,fe,ze),G.return=W,G):(G=f(G,Q),G.return=W,G)}function me(W,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=zu(""+G,W.mode,Q),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case v:return Q=Ll(G.type,G.key,G.props,null,W.mode,Q),bo(Q,G),Q.return=W,Q;case y:return G=Hu(G,W.mode,Q),G.return=W,G;case X:var fe=G._init;return G=fe(G._payload),me(W,G,Q)}if(he(G)||le(G))return G=ps(G,W.mode,Q,null),G.return=W,G;if(typeof G.then=="function")return me(W,Kl(G),Q);if(G.$$typeof===L)return me(W,Il(W,G),Q);Zl(W,G)}return null}function ne(W,G,Q,fe){var ze=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return ze!==null?null:A(W,G,""+Q,fe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===ze?P(W,G,Q,fe):null;case y:return Q.key===ze?$(W,G,Q,fe):null;case X:return ze=Q._init,Q=ze(Q._payload),ne(W,G,Q,fe)}if(he(Q)||le(Q))return ze!==null?null:ce(W,G,Q,fe,null);if(typeof Q.then=="function")return ne(W,G,Kl(Q),fe);if(Q.$$typeof===L)return ne(W,G,Il(W,Q),fe);Zl(W,Q)}return null}function ie(W,G,Q,fe,ze){if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return W=W.get(Q)||null,A(G,W,""+fe,ze);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case v:return W=W.get(fe.key===null?Q:fe.key)||null,P(G,W,fe,ze);case y:return W=W.get(fe.key===null?Q:fe.key)||null,$(G,W,fe,ze);case X:var dt=fe._init;return fe=dt(fe._payload),ie(W,G,Q,fe,ze)}if(he(fe)||le(fe))return W=W.get(Q)||null,ce(G,W,fe,ze,null);if(typeof fe.then=="function")return ie(W,G,Q,Kl(fe),ze);if(fe.$$typeof===L)return ie(W,G,Q,Il(G,fe),ze);Zl(G,fe)}return null}function et(W,G,Q,fe){for(var ze=null,dt=null,Xe=G,Je=G=0,yn=null;Xe!==null&&Je<Q.length;Je++){Xe.index>Je?(yn=Xe,Xe=null):yn=Xe.sibling;var Rt=ne(W,Xe,Q[Je],fe);if(Rt===null){Xe===null&&(Xe=yn);break}t&&Xe&&Rt.alternate===null&&i(W,Xe),G=m(Rt,G,Je),dt===null?ze=Rt:dt.sibling=Rt,dt=Rt,Xe=yn}if(Je===Q.length)return s(W,Xe),wt&&gs(W,Je),ze;if(Xe===null){for(;Je<Q.length;Je++)Xe=me(W,Q[Je],fe),Xe!==null&&(G=m(Xe,G,Je),dt===null?ze=Xe:dt.sibling=Xe,dt=Xe);return wt&&gs(W,Je),ze}for(Xe=l(Xe);Je<Q.length;Je++)yn=ie(Xe,W,Je,Q[Je],fe),yn!==null&&(t&&yn.alternate!==null&&Xe.delete(yn.key===null?Je:yn.key),G=m(yn,G,Je),dt===null?ze=yn:dt.sibling=yn,dt=yn);return t&&Xe.forEach(function(qa){return i(W,qa)}),wt&&gs(W,Je),ze}function Qe(W,G,Q,fe){if(Q==null)throw Error(a(151));for(var ze=null,dt=null,Xe=G,Je=G=0,yn=null,Rt=Q.next();Xe!==null&&!Rt.done;Je++,Rt=Q.next()){Xe.index>Je?(yn=Xe,Xe=null):yn=Xe.sibling;var qa=ne(W,Xe,Rt.value,fe);if(qa===null){Xe===null&&(Xe=yn);break}t&&Xe&&qa.alternate===null&&i(W,Xe),G=m(qa,G,Je),dt===null?ze=qa:dt.sibling=qa,dt=qa,Xe=yn}if(Rt.done)return s(W,Xe),wt&&gs(W,Je),ze;if(Xe===null){for(;!Rt.done;Je++,Rt=Q.next())Rt=me(W,Rt.value,fe),Rt!==null&&(G=m(Rt,G,Je),dt===null?ze=Rt:dt.sibling=Rt,dt=Rt);return wt&&gs(W,Je),ze}for(Xe=l(Xe);!Rt.done;Je++,Rt=Q.next())Rt=ie(Xe,W,Je,Rt.value,fe),Rt!==null&&(t&&Rt.alternate!==null&&Xe.delete(Rt.key===null?Je:Rt.key),G=m(Rt,G,Je),dt===null?ze=Rt:dt.sibling=Rt,dt=Rt);return t&&Xe.forEach(function(hS){return i(W,hS)}),wt&&gs(W,Je),ze}function Gt(W,G,Q,fe){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:e:{for(var ze=Q.key;G!==null;){if(G.key===ze){if(ze=Q.type,ze===E){if(G.tag===7){s(W,G.sibling),fe=f(G,Q.props.children),fe.return=W,W=fe;break e}}else if(G.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===X&&ig(ze)===G.type){s(W,G.sibling),fe=f(G,Q.props),bo(fe,Q),fe.return=W,W=fe;break e}s(W,G);break}else i(W,G);G=G.sibling}Q.type===E?(fe=ps(Q.props.children,W.mode,fe,Q.key),fe.return=W,W=fe):(fe=Ll(Q.type,Q.key,Q.props,null,W.mode,fe),bo(fe,Q),fe.return=W,W=fe)}return M(W);case y:e:{for(ze=Q.key;G!==null;){if(G.key===ze)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){s(W,G.sibling),fe=f(G,Q.children||[]),fe.return=W,W=fe;break e}else{s(W,G);break}else i(W,G);G=G.sibling}fe=Hu(Q,W.mode,fe),fe.return=W,W=fe}return M(W);case X:return ze=Q._init,Q=ze(Q._payload),Gt(W,G,Q,fe)}if(he(Q))return et(W,G,Q,fe);if(le(Q)){if(ze=le(Q),typeof ze!="function")throw Error(a(150));return Q=ze.call(Q),Qe(W,G,Q,fe)}if(typeof Q.then=="function")return Gt(W,G,Kl(Q),fe);if(Q.$$typeof===L)return Gt(W,G,Il(W,Q),fe);Zl(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,G!==null&&G.tag===6?(s(W,G.sibling),fe=f(G,Q),fe.return=W,W=fe):(s(W,G),fe=zu(Q,W.mode,fe),fe.return=W,W=fe),M(W)):s(W,G)}return function(W,G,Q,fe){try{To=0;var ze=Gt(W,G,Q,fe);return ir=null,ze}catch(Xe){if(Xe===mo||Xe===Fl)throw Xe;var dt=Zn(29,Xe,null,W.mode);return dt.lanes=fe,dt.return=W,dt}finally{}}}var ar=ag(!0),sg=ag(!1),ci=ee(null),Ui=null;function Ua(t){var i=t.alternate;xe(fn,fn.current&1),xe(ci,t),Ui===null&&(i===null||$s.current!==null||i.memoizedState!==null)&&(Ui=t)}function rg(t){if(t.tag===22){if(xe(fn,fn.current),xe(ci,t),Ui===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Ui=t)}}else La()}function La(){xe(fn,fn.current),xe(ci,ci.current)}function ea(t){ve(ci),Ui===t&&(Ui=null),ve(fn)}var fn=ee(0);function Ql(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||ch(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function xf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Sf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=ei(),f=wa(l);f.payload=i,s!=null&&(f.callback=s),i=Ca(t,f,l),i!==null&&(ti(i,t,l),_o(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=ei(),f=wa(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ca(t,f,l),i!==null&&(ti(i,t,l),_o(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ei(),l=wa(s);l.tag=2,i!=null&&(l.callback=i),i=Ca(t,l,s),i!==null&&(ti(i,t,s),_o(i,t,s))}};function og(t,i,s,l,f,m,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,M):i.prototype&&i.prototype.isPureReactComponent?!ro(s,l)||!ro(f,m):!0}function lg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Sf.enqueueReplaceState(i,i.state,null)}function Es(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}var Jl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function cg(t){Jl(t)}function ug(t){console.error(t)}function fg(t){Jl(t)}function $l(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function hg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Mf(t,i,s){return s=wa(s),s.tag=3,s.payload={element:null},s.callback=function(){$l(t,i)},s}function dg(t){return t=wa(t),t.tag=3,t}function pg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){hg(i,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){hg(i,s,l),typeof f!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function hx(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&fo(i,s,f,!0),s=ci.current,s!==null){switch(s.tag){case 13:return Ui===null?qf():s.alternate===null&&$t===0&&($t=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Zu?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),jf(t,l,f)),!1;case 22:return s.flags|=65536,l===Zu?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),jf(t,l,f)),!1}throw Error(a(435,s.tag))}return jf(t,l,f),qf(),!1}if(wt)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==ku&&(t=Error(a(422),{cause:l}),uo(si(t,s)))):(l!==ku&&(i=Error(a(423),{cause:l}),uo(si(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=si(l,s),f=Mf(t.stateNode,l,f),$u(t,f),$t!==4&&($t=2)),!1;var m=Error(a(520),{cause:l});if(m=si(m,s),Lo===null?Lo=[m]:Lo.push(m),$t!==4&&($t=2),i===null)return!0;l=si(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Mf(s.stateNode,l,t),$u(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Fa===null||!Fa.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=dg(f),pg(f,t,s,l),$u(s,f),!1}s=s.return}while(s!==null);return!1}var mg=Error(a(461)),_n=!1;function bn(t,i,s,l){i.child=t===null?sg(i,null,s,l):ar(i,t.child,s,l)}function gg(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var M={};for(var A in l)A!=="ref"&&(M[A]=l[A])}else M=l;return xs(i),l=sf(t,i,s,M,m,f),A=rf(),t!==null&&!_n?(of(t,i,f),ta(t,i,f)):(wt&&A&&Gu(i),i.flags|=1,bn(t,i,l,f),i.child)}function _g(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!Fu(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,vg(t,i,m,l,f)):(t=Ll(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!Df(t,f)){var M=m.memoizedProps;if(s=s.compare,s=s!==null?s:ro,s(M,l)&&t.ref===i.ref)return ta(t,i,f)}return i.flags|=1,t=ji(m,l),t.ref=i.ref,t.return=i,i.child=t}function vg(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(ro(m,l)&&t.ref===i.ref)if(_n=!1,i.pendingProps=l=m,Df(t,f))(t.flags&131072)!==0&&(_n=!0);else return i.lanes=t.lanes,ta(t,i,f)}return Ef(t,i,s,l,f)}function yg(t,i,s){var l=i.pendingProps,f=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,t!==null){for(f=i.child=t.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return xg(t,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bl(i,m!==null?m.cachePool:null),m!==null?vm(i,m):tf(),rg(i);else return i.lanes=i.childLanes=536870912,xg(t,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Bl(i,m.cachePool),vm(i,m),La(),i.memoizedState=null):(t!==null&&Bl(i,null),tf(),La());return bn(t,i,f,s),i.child}function xg(t,i,s,l){var f=Ku();return f=f===null?null:{parent:un._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},t!==null&&Bl(i,null),tf(),rg(i),t!==null&&fo(t,i,l,!0),null}function ec(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Ef(t,i,s,l,f){return xs(i),s=sf(t,i,s,l,void 0,f),l=rf(),t!==null&&!_n?(of(t,i,f),ta(t,i,f)):(wt&&l&&Gu(i),i.flags|=1,bn(t,i,s,f),i.child)}function Sg(t,i,s,l,f,m){return xs(i),i.updateQueue=null,s=xm(i,l,s,f),ym(t),l=rf(),t!==null&&!_n?(of(t,i,m),ta(t,i,m)):(wt&&l&&Gu(i),i.flags|=1,bn(t,i,s,m),i.child)}function Mg(t,i,s,l,f){if(xs(i),i.stateNode===null){var m=js,M=s.contextType;typeof M=="object"&&M!==null&&(m=Dn(M)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Sf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Qu(i),M=s.contextType,m.context=typeof M=="object"&&M!==null?Dn(M):js,m.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(xf(i,s,M,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&Sf.enqueueReplaceState(m,m.state,null),yo(i,l,m,f),vo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var A=i.memoizedProps,P=Es(s,A);m.props=P;var $=m.context,ce=s.contextType;M=js,typeof ce=="object"&&ce!==null&&(M=Dn(ce));var me=s.getDerivedStateFromProps;ce=typeof me=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,ce||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||$!==M)&&lg(i,m,l,M),Ra=!1;var ne=i.memoizedState;m.state=ne,yo(i,l,m,f),vo(),$=i.memoizedState,A||ne!==$||Ra?(typeof me=="function"&&(xf(i,s,me,l),$=i.memoizedState),(P=Ra||og(i,s,P,l,ne,$,M))?(ce||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=$),m.props=l,m.state=$,m.context=M,l=P):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Ju(t,i),M=i.memoizedProps,ce=Es(s,M),m.props=ce,me=i.pendingProps,ne=m.context,$=s.contextType,P=js,typeof $=="object"&&$!==null&&(P=Dn($)),A=s.getDerivedStateFromProps,($=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==me||ne!==P)&&lg(i,m,l,P),Ra=!1,ne=i.memoizedState,m.state=ne,yo(i,l,m,f),vo();var ie=i.memoizedState;M!==me||ne!==ie||Ra||t!==null&&t.dependencies!==null&&Pl(t.dependencies)?(typeof A=="function"&&(xf(i,s,A,l),ie=i.memoizedState),(ce=Ra||og(i,s,ce,l,ne,ie,P)||t!==null&&t.dependencies!==null&&Pl(t.dependencies))?($||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ie,P),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ie,P)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ie),m.props=l,m.state=ie,m.context=P,l=ce):(typeof m.componentDidUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,ec(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=ar(i,t.child,null,f),i.child=ar(i,null,s,f)):bn(t,i,s,f),i.memoizedState=m.state,t=i.child):t=ta(t,i,f),t}function Eg(t,i,s,l){return co(),i.flags|=256,bn(t,i,s,l),i.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(t){return{baseLanes:t,cachePool:um()}}function Af(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=ui),t}function Tg(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,M;if((M=m)||(M=t!==null&&t.memoizedState===null?!1:(fn.current&2)!==0),M&&(f=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(wt){if(f?Ua(i):La(),wt){var A=Jt,P;if(P=A){e:{for(P=A,A=Di;P.nodeType!==8;){if(!A){A=null;break e}if(P=vi(P.nextSibling),P===null){A=null;break e}}A=P}A!==null?(i.memoizedState={dehydrated:A,treeContext:ms!==null?{id:Ki,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},P=Zn(18,null,null,0),P.stateNode=A,P.return=i,i.child=P,On=i,Jt=null,P=!0):P=!1}P||vs(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return ch(A)?i.lanes=32:i.lanes=536870912,null;ea(i)}return A=l.children,l=l.fallback,f?(La(),f=i.mode,A=tc({mode:"hidden",children:A},f),l=ps(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,f=i.child,f.memoizedState=bf(s),f.childLanes=Af(t,M,s),i.memoizedState=Tf,l):(Ua(i),Rf(i,A))}if(P=t.memoizedState,P!==null&&(A=P.dehydrated,A!==null)){if(m)i.flags&256?(Ua(i),i.flags&=-257,i=wf(t,i,s)):i.memoizedState!==null?(La(),i.child=t.child,i.flags|=128,i=null):(La(),f=l.fallback,A=i.mode,l=tc({mode:"visible",children:l.children},A),f=ps(f,A,s,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,ar(i,t.child,null,s),l=i.child,l.memoizedState=bf(s),l.childLanes=Af(t,M,s),i.memoizedState=Tf,i=f);else if(Ua(i),ch(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var $=M.dgst;M=$,l=Error(a(419)),l.stack="",l.digest=M,uo({value:l,source:null,stack:null}),i=wf(t,i,s)}else if(_n||fo(t,i,s,!1),M=(s&t.childLanes)!==0,_n||M){if(M=Yt,M!==null&&(l=s&-s,l=(l&42)!==0?1:tt(l),l=(l&(M.suspendedLanes|s))!==0?0:l,l!==0&&l!==P.retryLane))throw P.retryLane=l,Ys(t,l),ti(M,t,l),mg;A.data==="$?"||qf(),i=wf(t,i,s)}else A.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=P.treeContext,Jt=vi(A.nextSibling),On=i,wt=!0,_s=null,Di=!1,t!==null&&(oi[li++]=Ki,oi[li++]=Zi,oi[li++]=ms,Ki=t.id,Zi=t.overflow,ms=i),i=Rf(i,l.children),i.flags|=4096);return i}return f?(La(),f=l.fallback,A=i.mode,P=t.child,$=P.sibling,l=ji(P,{mode:"hidden",children:l.children}),l.subtreeFlags=P.subtreeFlags&65011712,$!==null?f=ji($,f):(f=ps(f,A,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,A=t.child.memoizedState,A===null?A=bf(s):(P=A.cachePool,P!==null?($=un._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=um(),A={baseLanes:A.baseLanes|s,cachePool:P}),f.memoizedState=A,f.childLanes=Af(t,M,s),i.memoizedState=Tf,l):(Ua(i),s=t.child,t=s.sibling,s=ji(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=s,i.memoizedState=null,s)}function Rf(t,i){return i=tc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function tc(t,i){return t=Zn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function wf(t,i,s){return ar(i,t.child,null,s),t=Rf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function bg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Wu(t.return,i,s)}function Cf(t,i,s,l,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function Ag(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(bn(t,i,l.children,s),l=fn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bg(t,s,i);else if(t.tag===19)bg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(xe(fn,l),f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Ql(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Cf(i,!1,f,s,m);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Ql(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Cf(i,!0,s,null,m);break;case"together":Cf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ta(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Ba|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(fo(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=ji(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ji(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Df(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Pl(t)))}function dx(t,i,s){switch(i.tag){case 3:we(i,i.stateNode.containerInfo),Aa(i,un,t.memoizedState.cache),co();break;case 27:case 5:Ze(i);break;case 4:we(i,i.stateNode.containerInfo);break;case 10:Aa(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ua(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Tg(t,i,s):(Ua(i),t=ta(t,i,s),t!==null?t.sibling:null);Ua(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(fo(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Ag(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),xe(fn,fn.current),l)break;return null;case 22:case 23:return i.lanes=0,yg(t,i,s);case 24:Aa(i,un,t.memoizedState.cache)}return ta(t,i,s)}function Rg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)_n=!0;else{if(!Df(t,s)&&(i.flags&128)===0)return _n=!1,dx(t,i,s);_n=(t.flags&131072)!==0}else _n=!1,wt&&(i.flags&1048576)!==0&&im(i,Ol,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")Fu(l)?(t=Es(l,t),i.tag=1,i=Mg(null,i,l,t,s)):(i.tag=0,i=Ef(null,i,l,t,s));else{if(l!=null){if(f=l.$$typeof,f===w){i.tag=11,i=gg(null,i,l,t,s);break e}else if(f===B){i.tag=14,i=_g(null,i,l,t,s);break e}}throw i=_e(l)||l,Error(a(306,i,""))}}return i;case 0:return Ef(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Es(l,i.pendingProps),Mg(t,i,l,f,s);case 3:e:{if(we(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,Ju(t,i),yo(i,l,null,s);var M=i.memoizedState;if(l=M.cache,Aa(i,un,l),l!==m.cache&&qu(i,[un],s,!0),vo(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Eg(t,i,l,s);break e}else if(l!==f){f=si(Error(a(424)),i),uo(f),i=Eg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=vi(t.firstChild),On=i,wt=!0,_s=null,Di=!0,s=sg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(co(),l===f){i=ta(t,i,s);break e}bn(t,i,l,s)}i=i.child}return i;case 26:return ec(t,i),t===null?(s=U_(i.type,null,i.pendingProps,null))?i.memoizedState=s:wt||(s=i.type,t=i.pendingProps,l=mc(Se.current).createElement(s),l[ln]=i,l[En]=t,Rn(l,s,t),an(l),i.stateNode=l):i.memoizedState=U_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ze(i),t===null&&wt&&(l=i.stateNode=w_(i.type,i.pendingProps,Se.current),On=i,Di=!0,f=Jt,Ga(i.type)?(uh=f,Jt=vi(l.firstChild)):Jt=f),bn(t,i,i.pendingProps.children,s),ec(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&wt&&((f=l=Jt)&&(l=Gx(l,i.type,i.pendingProps,Di),l!==null?(i.stateNode=l,On=i,Jt=vi(l.firstChild),Di=!1,f=!0):f=!1),f||vs(i)),Ze(i),f=i.type,m=i.pendingProps,M=t!==null?t.memoizedProps:null,l=m.children,rh(f,m)?l=null:M!==null&&rh(f,M)&&(i.flags|=32),i.memoizedState!==null&&(f=sf(t,i,sx,null,null,s),Go._currentValue=f),ec(t,i),bn(t,i,l,s),i.child;case 6:return t===null&&wt&&((t=s=Jt)&&(s=Vx(s,i.pendingProps,Di),s!==null?(i.stateNode=s,On=i,Jt=null,t=!0):t=!1),t||vs(i)),null;case 13:return Tg(t,i,s);case 4:return we(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ar(i,null,l,s):bn(t,i,l,s),i.child;case 11:return gg(t,i,i.type,i.pendingProps,s);case 7:return bn(t,i,i.pendingProps,s),i.child;case 8:return bn(t,i,i.pendingProps.children,s),i.child;case 12:return bn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Aa(i,i.type,l.value),bn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,xs(i),f=Dn(f),l=l(f),i.flags|=1,bn(t,i,l,s),i.child;case 14:return _g(t,i,i.type,i.pendingProps,s);case 15:return vg(t,i,i.type,i.pendingProps,s);case 19:return Ag(t,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},t===null?(s=tc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=ji(t.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return yg(t,i,s);case 24:return xs(i),l=Dn(un),t===null?(f=Ku(),f===null&&(f=Yt,m=Yu(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},Qu(i),Aa(i,un,f)):((t.lanes&s)!==0&&(Ju(t,i),yo(i,null,null,s),vo()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Aa(i,un,l)):(l=m.cache,Aa(i,un,l),l!==f.cache&&qu(i,[un],s,!0))),bn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function na(t){t.flags|=4}function wg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!I_(i)){if(i=ci.current,i!==null&&((Et&4194048)===Et?Ui!==null:(Et&62914560)!==Et&&(Et&536870912)===0||i!==Ui))throw go=Zu,fm;t.flags|=8192}}function nc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ue():536870912,t.lanes|=i,lr|=i)}function Ao(t,i){if(!wt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Qt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function px(t,i,s){var l=i.pendingProps;switch(Vu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(i),null;case 1:return Qt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ji(un),lt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(lo(i)?na(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,rm())),Qt(i),null;case 26:return s=i.memoizedState,t===null?(na(i),s!==null?(Qt(i),wg(i,s)):(Qt(i),i.flags&=-16777217)):s?s!==t.memoizedState?(na(i),Qt(i),wg(i,s)):(Qt(i),i.flags&=-16777217):(t.memoizedProps!==l&&na(i),Qt(i),i.flags&=-16777217),null;case 27:Bt(i),s=Se.current;var f=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&na(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Qt(i),null}t=J.current,lo(i)?am(i):(t=w_(f,l,s),i.stateNode=t,na(i))}return Qt(i),null;case 5:if(Bt(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&na(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Qt(i),null}if(t=J.current,lo(i))am(i);else{switch(f=mc(Se.current),t){case 1:t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}t[ln]=i,t[En]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)t.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=t;e:switch(Rn(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&na(i)}}return Qt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&na(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=Se.current,lo(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=On,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[ln]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||S_(t.nodeValue,s)),t||vs(i)}else t=mc(t).createTextNode(l),t[ln]=i,i.stateNode=t}return Qt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=lo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[ln]=i}else co(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qt(i),f=!1}else f=rm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ea(i),i):(ea(i),null)}if(ea(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),nc(i,i.updateQueue),Qt(i),null;case 4:return lt(),t===null&&th(i.stateNode.containerInfo),Qt(i),null;case 10:return Ji(i.type),Qt(i),null;case 19:if(ve(fn),f=i.memoizedState,f===null)return Qt(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)Ao(f,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Ql(t),m!==null){for(i.flags|=128,Ao(f,!1),t=m.updateQueue,i.updateQueue=t,nc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)nm(s,t),s=s.sibling;return xe(fn,fn.current&1|2),i.child}t=t.sibling}f.tail!==null&&pt()>sc&&(i.flags|=128,l=!0,Ao(f,!1),i.lanes=4194304)}else{if(!l)if(t=Ql(m),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,nc(i,t),Ao(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!wt)return Qt(i),null}else 2*pt()-f.renderingStartTime>sc&&s!==536870912&&(i.flags|=128,l=!0,Ao(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(t=f.last,t!==null?t.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=pt(),i.sibling=null,t=fn.current,xe(fn,l?t&1|2:t&1),i):(Qt(i),null);case 22:case 23:return ea(i),nf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Qt(i),i.subtreeFlags&6&&(i.flags|=8192)):Qt(i),s=i.updateQueue,s!==null&&nc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ve(Ss),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ji(un),Qt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function mx(t,i){switch(Vu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ji(un),lt(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Bt(i),null;case 13:if(ea(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));co()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ve(fn),null;case 4:return lt(),null;case 10:return Ji(i.type),null;case 22:case 23:return ea(i),nf(),t!==null&&ve(Ss),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ji(un),null;case 25:return null;default:return null}}function Cg(t,i){switch(Vu(i),i.tag){case 3:Ji(un),lt();break;case 26:case 27:case 5:Bt(i);break;case 4:lt();break;case 13:ea(i);break;case 19:ve(fn);break;case 10:Ji(i.type);break;case 22:case 23:ea(i),nf(),t!==null&&ve(Ss);break;case 24:Ji(un)}}function Ro(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,M=s.inst;l=m(),M.destroy=l}s=s.next}while(s!==f)}}catch(A){Wt(i,i.return,A)}}function Na(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var M=l.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,f=i;var P=s,$=A;try{$()}catch(ce){Wt(f,P,ce)}}}l=l.next}while(l!==m)}}catch(ce){Wt(i,i.return,ce)}}function Dg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{_m(i,s)}catch(l){Wt(t,t.return,l)}}}function Ug(t,i,s){s.props=Es(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Wt(t,i,l)}}function wo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Wt(t,i,f)}}function Li(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Wt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Wt(t,i,f)}else s.current=null}function Lg(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Wt(t,t.return,f)}}function Uf(t,i,s){try{var l=t.stateNode;Ix(l,t.type,s,i),l[En]=i}catch(f){Wt(t,t.return,f)}}function Ng(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function Lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nf(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=pc));else if(l!==4&&(l===27&&Ga(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Nf(t,i,s),t=t.sibling;t!==null;)Nf(t,i,s),t=t.sibling}function ic(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&Ga(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(ic(t,i,s),t=t.sibling;t!==null;)ic(t,i,s),t=t.sibling}function Og(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Rn(i,l,s),i[ln]=t,i[En]=s}catch(m){Wt(t,t.return,m)}}var ia=!1,nn=!1,Of=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function gx(t,i){if(t=t.containerInfo,ah=Sc,t=qp(t),Uu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var M=0,A=-1,P=-1,$=0,ce=0,me=t,ne=null;t:for(;;){for(var ie;me!==s||f!==0&&me.nodeType!==3||(A=M+f),me!==m||l!==0&&me.nodeType!==3||(P=M+l),me.nodeType===3&&(M+=me.nodeValue.length),(ie=me.firstChild)!==null;)ne=me,me=ie;for(;;){if(me===t)break t;if(ne===s&&++$===f&&(A=M),ne===m&&++ce===l&&(P=M),(ie=me.nextSibling)!==null)break;me=ne,ne=me.parentNode}me=ie}s=A===-1||P===-1?null:{start:A,end:P}}else s=null}s=s||{start:0,end:0}}else s=null;for(sh={focusedElem:t,selectionRange:s},Sc=!1,vn=i;vn!==null;)if(i=vn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,vn=t;else for(;vn!==null;){switch(i=vn,m=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var et=Es(s.type,f,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(et,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(Qe){Wt(s,s.return,Qe)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)lh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":lh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,vn=t;break}vn=i.return}}function Ig(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Oa(t,s),l&4&&Ro(5,s);break;case 1:if(Oa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(M){Wt(s,s.return,M)}else{var f=Es(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Wt(s,s.return,M)}}l&64&&Dg(s),l&512&&wo(s,s.return);break;case 3:if(Oa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{_m(t,i)}catch(M){Wt(s,s.return,M)}}break;case 27:i===null&&l&4&&Og(s);case 26:case 5:Oa(t,s),i===null&&l&4&&Lg(s),l&512&&wo(s,s.return);break;case 12:Oa(t,s);break;case 13:Oa(t,s),l&4&&zg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=bx.bind(null,s),kx(t,s))));break;case 22:if(l=s.memoizedState!==null||ia,!l){i=i!==null&&i.memoizedState!==null||nn,f=ia;var m=nn;ia=l,(nn=i)&&!m?Pa(t,s,(s.subtreeFlags&8772)!==0):Oa(t,s),ia=f,nn=m}break;case 30:break;default:Oa(t,s)}}function Bg(t){var i=t.alternate;i!==null&&(t.alternate=null,Bg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Ma(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Kt=null,Xn=!1;function aa(t,i,s){for(s=s.child;s!==null;)Fg(t,i,s),s=s.sibling}function Fg(t,i,s){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(ue,s)}catch{}switch(s.tag){case 26:nn||Li(s,i),aa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:nn||Li(s,i);var l=Kt,f=Xn;Ga(s.type)&&(Kt=s.stateNode,Xn=!1),aa(t,i,s),Bo(s.stateNode),Kt=l,Xn=f;break;case 5:nn||Li(s,i);case 6:if(l=Kt,f=Xn,Kt=null,aa(t,i,s),Kt=l,Xn=f,Kt!==null)if(Xn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(s.stateNode)}catch(m){Wt(s,i,m)}else try{Kt.removeChild(s.stateNode)}catch(m){Wt(s,i,m)}break;case 18:Kt!==null&&(Xn?(t=Kt,A_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Wo(t)):A_(Kt,s.stateNode));break;case 4:l=Kt,f=Xn,Kt=s.stateNode.containerInfo,Xn=!0,aa(t,i,s),Kt=l,Xn=f;break;case 0:case 11:case 14:case 15:nn||Na(2,s,i),nn||Na(4,s,i),aa(t,i,s);break;case 1:nn||(Li(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Ug(s,i,l)),aa(t,i,s);break;case 21:aa(t,i,s);break;case 22:nn=(l=nn)||s.memoizedState!==null,aa(t,i,s),nn=l;break;default:aa(t,i,s)}}function zg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Wo(t)}catch(s){Wt(i,i.return,s)}}function _x(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Pg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Pg),i;default:throw Error(a(435,t.tag))}}function Pf(t,i){var s=_x(t);i.forEach(function(l){var f=Ax.bind(null,t,l);s.has(l)||(s.add(l),l.then(f,f))})}function Qn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,M=i,A=M;e:for(;A!==null;){switch(A.tag){case 27:if(Ga(A.type)){Kt=A.stateNode,Xn=!1;break e}break;case 5:Kt=A.stateNode,Xn=!1;break e;case 3:case 4:Kt=A.stateNode.containerInfo,Xn=!0;break e}A=A.return}if(Kt===null)throw Error(a(160));Fg(m,M,f),Kt=null,Xn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Hg(i,t),i=i.sibling}var _i=null;function Hg(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qn(i,t),Jn(t),l&4&&(Na(3,t,t.return),Ro(3,t),Na(5,t,t.return));break;case 1:Qn(i,t),Jn(t),l&512&&(nn||s===null||Li(s,s.return)),l&64&&ia&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=_i;if(Qn(i,t),Jn(t),l&512&&(nn||s===null||Li(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Sa]||m[ln]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Rn(m,l,s),m[ln]=t,an(m),l=m;break e;case"link":var M=O_("link","href",f).get(l+(s.href||""));if(M){for(var A=0;A<M.length;A++)if(m=M[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(A,1);break t}}m=f.createElement(l),Rn(m,l,s),f.head.appendChild(m);break;case"meta":if(M=O_("meta","content",f).get(l+(s.content||""))){for(A=0;A<M.length;A++)if(m=M[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(A,1);break t}}m=f.createElement(l),Rn(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[ln]=t,an(m),l=m}t.stateNode=l}else P_(f,t.type,t.stateNode);else t.stateNode=N_(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?P_(f,t.type,t.stateNode):N_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Uf(t,t.memoizedProps,s.memoizedProps)}break;case 27:Qn(i,t),Jn(t),l&512&&(nn||s===null||Li(s,s.return)),s!==null&&l&4&&Uf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Qn(i,t),Jn(t),l&512&&(nn||s===null||Li(s,s.return)),t.flags&32){f=t.stateNode;try{Ci(f,"")}catch(ie){Wt(t,t.return,ie)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Uf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Of=!0);break;case 6:if(Qn(i,t),Jn(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(ie){Wt(t,t.return,ie)}}break;case 3:if(vc=null,f=_i,_i=gc(i.containerInfo),Qn(i,t),_i=f,Jn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Wo(i.containerInfo)}catch(ie){Wt(t,t.return,ie)}Of&&(Of=!1,Gg(t));break;case 4:l=_i,_i=gc(t.stateNode.containerInfo),Qn(i,t),Jn(t),_i=l;break;case 12:Qn(i,t),Jn(t);break;case 13:Qn(i,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Gf=pt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Pf(t,l)));break;case 22:f=t.memoizedState!==null;var P=s!==null&&s.memoizedState!==null,$=ia,ce=nn;if(ia=$||f,nn=ce||P,Qn(i,t),nn=ce,ia=$,Jn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||P||ia||nn||Ts(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){P=s=i;try{if(m=P.stateNode,f)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=P.stateNode;var me=P.memoizedProps.style,ne=me!=null&&me.hasOwnProperty("display")?me.display:null;A.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ie){Wt(P,P.return,ie)}}}else if(i.tag===6){if(s===null){P=i;try{P.stateNode.nodeValue=f?"":P.memoizedProps}catch(ie){Wt(P,P.return,ie)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Pf(t,s))));break;case 19:Qn(i,t),Jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Pf(t,l)));break;case 30:break;case 21:break;default:Qn(i,t),Jn(t)}}function Jn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Ng(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=Lf(t);ic(t,m,f);break;case 5:var M=s.stateNode;s.flags&32&&(Ci(M,""),s.flags&=-33);var A=Lf(t);ic(t,A,M);break;case 3:case 4:var P=s.stateNode.containerInfo,$=Lf(t);Nf(t,$,P);break;default:throw Error(a(161))}}catch(ce){Wt(t,t.return,ce)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Gg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Gg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Oa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ig(t,i.alternate,i),i=i.sibling}function Ts(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Na(4,i,i.return),Ts(i);break;case 1:Li(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Ug(i,i.return,s),Ts(i);break;case 27:Bo(i.stateNode);case 26:case 5:Li(i,i.return),Ts(i);break;case 22:i.memoizedState===null&&Ts(i);break;case 30:Ts(i);break;default:Ts(i)}t=t.sibling}}function Pa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,M=m.flags;switch(m.tag){case 0:case 11:case 15:Pa(f,m,s),Ro(4,m);break;case 1:if(Pa(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch($){Wt(l,l.return,$)}if(l=m,f=l.updateQueue,f!==null){var A=l.stateNode;try{var P=f.shared.hiddenCallbacks;if(P!==null)for(f.shared.hiddenCallbacks=null,f=0;f<P.length;f++)gm(P[f],A)}catch($){Wt(l,l.return,$)}}s&&M&64&&Dg(m),wo(m,m.return);break;case 27:Og(m);case 26:case 5:Pa(f,m,s),s&&l===null&&M&4&&Lg(m),wo(m,m.return);break;case 12:Pa(f,m,s);break;case 13:Pa(f,m,s),s&&M&4&&zg(f,m);break;case 22:m.memoizedState===null&&Pa(f,m,s),wo(m,m.return);break;case 30:break;default:Pa(f,m,s)}i=i.sibling}}function If(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&ho(s))}function Bf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ho(t))}function Ni(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Vg(t,i,s,l),i=i.sibling}function Vg(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ni(t,i,s,l),f&2048&&Ro(9,i);break;case 1:Ni(t,i,s,l);break;case 3:Ni(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ho(t)));break;case 12:if(f&2048){Ni(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,M=m.id,A=m.onPostCommit;typeof A=="function"&&A(M,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){Wt(i,i.return,P)}}else Ni(t,i,s,l);break;case 13:Ni(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,M=i.alternate,i.memoizedState!==null?m._visibility&2?Ni(t,i,s,l):Co(t,i):m._visibility&2?Ni(t,i,s,l):(m._visibility|=2,sr(t,i,s,l,(i.subtreeFlags&10256)!==0)),f&2048&&If(M,i);break;case 24:Ni(t,i,s,l),f&2048&&Bf(i.alternate,i);break;default:Ni(t,i,s,l)}}function sr(t,i,s,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=t,M=i,A=s,P=l,$=M.flags;switch(M.tag){case 0:case 11:case 15:sr(m,M,A,P,f),Ro(8,M);break;case 23:break;case 22:var ce=M.stateNode;M.memoizedState!==null?ce._visibility&2?sr(m,M,A,P,f):Co(m,M):(ce._visibility|=2,sr(m,M,A,P,f)),f&&$&2048&&If(M.alternate,M);break;case 24:sr(m,M,A,P,f),f&&$&2048&&Bf(M.alternate,M);break;default:sr(m,M,A,P,f)}i=i.sibling}}function Co(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:Co(s,l),f&2048&&If(l.alternate,l);break;case 24:Co(s,l),f&2048&&Bf(l.alternate,l);break;default:Co(s,l)}i=i.sibling}}var Do=8192;function rr(t){if(t.subtreeFlags&Do)for(t=t.child;t!==null;)kg(t),t=t.sibling}function kg(t){switch(t.tag){case 26:rr(t),t.flags&Do&&t.memoizedState!==null&&nS(_i,t.memoizedState,t.memoizedProps);break;case 5:rr(t);break;case 3:case 4:var i=_i;_i=gc(t.stateNode.containerInfo),rr(t),_i=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Do,Do=16777216,rr(t),Do=i):rr(t));break;default:rr(t)}}function Xg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Uo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];vn=l,qg(l,t)}Xg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wg(t),t=t.sibling}function Wg(t){switch(t.tag){case 0:case 11:case 15:Uo(t),t.flags&2048&&Na(9,t,t.return);break;case 3:Uo(t);break;case 12:Uo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,ac(t)):Uo(t);break;default:Uo(t)}}function ac(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];vn=l,qg(l,t)}Xg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Na(8,i,i.return),ac(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,ac(i));break;default:ac(i)}t=t.sibling}}function qg(t,i){for(;vn!==null;){var s=vn;switch(s.tag){case 0:case 11:case 15:Na(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ho(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,vn=l;else e:for(s=t;vn!==null;){l=vn;var f=l.sibling,m=l.return;if(Bg(l),l===s){vn=null;break e}if(f!==null){f.return=m,vn=f;break e}vn=m}}}var vx={getCacheForType:function(t){var i=Dn(un),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},yx=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Yt=null,mt=null,Et=0,Ot=0,$n=null,Ia=!1,or=!1,Ff=!1,sa=0,$t=0,Ba=0,bs=0,zf=0,ui=0,lr=0,Lo=null,Wn=null,Hf=!1,Gf=0,sc=1/0,rc=null,Fa=null,An=0,za=null,cr=null,ur=0,Vf=0,kf=null,Yg=null,No=0,Xf=null;function ei(){if((Nt&2)!==0&&Et!==0)return Et&-Et;if(I.T!==null){var t=Qs;return t!==0?t:Qf()}return At()}function jg(){ui===0&&(ui=(Et&536870912)===0||wt?k():536870912);var t=ci.current;return t!==null&&(t.flags|=32),ui}function ti(t,i,s){(t===Yt&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)&&(fr(t,0),Ha(t,Et,ui,!1)),Ie(t,s),((Nt&2)===0||t!==Yt)&&(t===Yt&&((Nt&2)===0&&(bs|=s),$t===4&&Ha(t,Et,ui,!1)),Oi(t))}function Kg(t,i,s){if((Nt&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&t.expiredLanes)===0||Re(t,i),f=l?Mx(t,i):Yf(t,i,!0),m=l;do{if(f===0){or&&!l&&Ha(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!xx(s)){f=Yf(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var A=t;f=Lo;var P=A.current.memoizedState.isDehydrated;if(P&&(fr(A,M).flags|=256),M=Yf(A,M,!1),M!==2){if(Ff&&!P){A.errorRecoveryDisabledLanes|=m,bs|=m,f=4;break e}m=Wn,Wn=f,m!==null&&(Wn===null?Wn=m:Wn.push.apply(Wn,m))}f=M}if(m=!1,f!==2)continue}}if(f===1){fr(t,0),Ha(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ha(l,i,ui,!Ia);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Gf+300-pt(),10<f)){if(Ha(l,i,ui,!Ia),qe(l,0,!0)!==0)break e;l.timeoutHandle=T_(Zg.bind(null,l,s,Wn,rc,Hf,i,ui,bs,lr,Ia,m,2,-0,0),f);break e}Zg(l,s,Wn,rc,Hf,i,ui,bs,lr,Ia,m,0,-0,0)}}break}while(!0);Oi(t)}function Zg(t,i,s,l,f,m,M,A,P,$,ce,me,ne,ie){if(t.timeoutHandle=-1,me=i.subtreeFlags,(me&8192||(me&16785408)===16785408)&&(Ho={stylesheets:null,count:0,unsuspend:tS},kg(i),me=iS(),me!==null)){t.cancelPendingCommit=me(i_.bind(null,t,i,m,s,l,f,M,A,P,ce,1,ne,ie)),Ha(t,m,M,!$);return}i_(t,i,m,s,l,f,M,A,P)}function xx(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!Kn(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ha(t,i,s,l){i&=~zf,i&=~bs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-Oe(f),M=1<<m;l[m]=-1,f&=~M}s!==0&&ge(t,s,i)}function oc(){return(Nt&6)===0?(Oo(0),!1):!0}function Wf(){if(mt!==null){if(Ot===0)var t=mt.return;else t=mt,Qi=ys=null,lf(t),ir=null,To=0,t=mt;for(;t!==null;)Cg(t.alternate,t),t=t.return;mt=null}}function fr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Fx(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Wf(),Yt=t,mt=s=ji(t.current,null),Et=i,Ot=0,$n=null,Ia=!1,or=Re(t,i),Ff=!1,lr=ui=zf=bs=Ba=$t=0,Wn=Lo=null,Hf=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Oe(l),m=1<<f;i|=t[f],l&=~m}return sa=i,Cl(),s}function Qg(t,i){ft=null,I.H=jl,i===mo||i===Fl?(i=pm(),Ot=3):i===fm?(i=pm(),Ot=4):Ot=i===mg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,$n=i,mt===null&&($t=1,$l(t,si(i,t.current)))}function Jg(){var t=I.H;return I.H=jl,t===null?jl:t}function $g(){var t=I.A;return I.A=vx,t}function qf(){$t=4,Ia||(Et&4194048)!==Et&&ci.current!==null||(or=!0),(Ba&134217727)===0&&(bs&134217727)===0||Yt===null||Ha(Yt,Et,ui,!1)}function Yf(t,i,s){var l=Nt;Nt|=2;var f=Jg(),m=$g();(Yt!==t||Et!==i)&&(rc=null,fr(t,i)),i=!1;var M=$t;e:do try{if(Ot!==0&&mt!==null){var A=mt,P=$n;switch(Ot){case 8:Wf(),M=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var $=Ot;if(Ot=0,$n=null,hr(t,A,P,$),s&&or){M=0;break e}break;default:$=Ot,Ot=0,$n=null,hr(t,A,P,$)}}Sx(),M=$t;break}catch(ce){Qg(t,ce)}while(!0);return i&&t.shellSuspendCounter++,Qi=ys=null,Nt=l,I.H=f,I.A=m,mt===null&&(Yt=null,Et=0,Cl()),M}function Sx(){for(;mt!==null;)e_(mt)}function Mx(t,i){var s=Nt;Nt|=2;var l=Jg(),f=$g();Yt!==t||Et!==i?(rc=null,sc=pt()+500,fr(t,i)):or=Re(t,i);e:do try{if(Ot!==0&&mt!==null){i=mt;var m=$n;t:switch(Ot){case 1:Ot=0,$n=null,hr(t,i,m,1);break;case 2:case 9:if(hm(m)){Ot=0,$n=null,t_(i);break}i=function(){Ot!==2&&Ot!==9||Yt!==t||(Ot=7),Oi(t)},m.then(i,i);break e;case 3:Ot=7;break e;case 4:Ot=5;break e;case 7:hm(m)?(Ot=0,$n=null,t_(i)):(Ot=0,$n=null,hr(t,i,m,7));break;case 5:var M=null;switch(mt.tag){case 26:M=mt.memoizedState;case 5:case 27:var A=mt;if(!M||I_(M)){Ot=0,$n=null;var P=A.sibling;if(P!==null)mt=P;else{var $=A.return;$!==null?(mt=$,lc($)):mt=null}break t}}Ot=0,$n=null,hr(t,i,m,5);break;case 6:Ot=0,$n=null,hr(t,i,m,6);break;case 8:Wf(),$t=6;break e;default:throw Error(a(462))}}Ex();break}catch(ce){Qg(t,ce)}while(!0);return Qi=ys=null,I.H=l,I.A=f,Nt=s,mt!==null?0:(Yt=null,Et=0,Cl(),$t)}function Ex(){for(;mt!==null&&!Mn();)e_(mt)}function e_(t){var i=Rg(t.alternate,t,sa);t.memoizedProps=t.pendingProps,i===null?lc(t):mt=i}function t_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Sg(s,i,i.pendingProps,i.type,void 0,Et);break;case 11:i=Sg(s,i,i.pendingProps,i.type.render,i.ref,Et);break;case 5:lf(i);default:Cg(s,i),i=mt=nm(i,sa),i=Rg(s,i,sa)}t.memoizedProps=t.pendingProps,i===null?lc(t):mt=i}function hr(t,i,s,l){Qi=ys=null,lf(i),ir=null,To=0;var f=i.return;try{if(hx(t,f,i,s,Et)){$t=1,$l(t,si(s,t.current)),mt=null;return}}catch(m){if(f!==null)throw mt=f,m;$t=1,$l(t,si(s,t.current)),mt=null;return}i.flags&32768?(wt||l===1?t=!0:or||(Et&536870912)!==0?t=!1:(Ia=t=!0,(l===2||l===9||l===3||l===6)&&(l=ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),n_(i,t)):lc(i)}function lc(t){var i=t;do{if((i.flags&32768)!==0){n_(i,Ia);return}t=i.return;var s=px(i.alternate,i,sa);if(s!==null){mt=s;return}if(i=i.sibling,i!==null){mt=i;return}mt=i=t}while(i!==null);$t===0&&($t=5)}function n_(t,i){do{var s=mx(t.alternate,t);if(s!==null){s.flags&=32767,mt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){mt=t;return}mt=t=s}while(t!==null);$t=6,mt=null}function i_(t,i,s,l,f,m,M,A,P){t.cancelPendingCommit=null;do cc();while(An!==0);if((Nt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Iu,be(t,s,m,M,A,P),t===Yt&&(mt=Yt=null,Et=0),cr=i,za=t,ur=s,Vf=m,kf=f,Yg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Rx(it,function(){return l_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,f=Z.p,Z.p=2,M=Nt,Nt|=4;try{gx(t,i,s)}finally{Nt=M,Z.p=f,I.T=l}}An=1,a_(),s_(),r_()}}function a_(){if(An===1){An=0;var t=za,i=cr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var l=Z.p;Z.p=2;var f=Nt;Nt|=4;try{Hg(i,t);var m=sh,M=qp(t.containerInfo),A=m.focusedElem,P=m.selectionRange;if(M!==A&&A&&A.ownerDocument&&Wp(A.ownerDocument.documentElement,A)){if(P!==null&&Uu(A)){var $=P.start,ce=P.end;if(ce===void 0&&(ce=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(ce,A.value.length);else{var me=A.ownerDocument||document,ne=me&&me.defaultView||window;if(ne.getSelection){var ie=ne.getSelection(),et=A.textContent.length,Qe=Math.min(P.start,et),Gt=P.end===void 0?Qe:Math.min(P.end,et);!ie.extend&&Qe>Gt&&(M=Gt,Gt=Qe,Qe=M);var W=Xp(A,Qe),G=Xp(A,Gt);if(W&&G&&(ie.rangeCount!==1||ie.anchorNode!==W.node||ie.anchorOffset!==W.offset||ie.focusNode!==G.node||ie.focusOffset!==G.offset)){var Q=me.createRange();Q.setStart(W.node,W.offset),ie.removeAllRanges(),Qe>Gt?(ie.addRange(Q),ie.extend(G.node,G.offset)):(Q.setEnd(G.node,G.offset),ie.addRange(Q))}}}}for(me=[],ie=A;ie=ie.parentNode;)ie.nodeType===1&&me.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<me.length;A++){var fe=me[A];fe.element.scrollLeft=fe.left,fe.element.scrollTop=fe.top}}Sc=!!ah,sh=ah=null}finally{Nt=f,Z.p=l,I.T=s}}t.current=i,An=2}}function s_(){if(An===2){An=0;var t=za,i=cr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var l=Z.p;Z.p=2;var f=Nt;Nt|=4;try{Ig(t,i.alternate,i)}finally{Nt=f,Z.p=l,I.T=s}}An=3}}function r_(){if(An===4||An===3){An=0,bt();var t=za,i=cr,s=ur,l=Yg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?An=5:(An=0,cr=za=null,o_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Fa=null),Lt(s),i=i.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(ue,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,f=Z.p,Z.p=2,I.T=null;try{for(var m=t.onRecoverableError,M=0;M<l.length;M++){var A=l[M];m(A.value,{componentStack:A.stack})}}finally{I.T=i,Z.p=f}}(ur&3)!==0&&cc(),Oi(t),f=t.pendingLanes,(s&4194090)!==0&&(f&42)!==0?t===Xf?No++:(No=0,Xf=t):No=0,Oo(0)}}function o_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,ho(i)))}function cc(t){return a_(),s_(),r_(),l_()}function l_(){if(An!==5)return!1;var t=za,i=Vf;Vf=0;var s=Lt(ur),l=I.T,f=Z.p;try{Z.p=32>s?32:s,I.T=null,s=kf,kf=null;var m=za,M=ur;if(An=0,cr=za=null,ur=0,(Nt&6)!==0)throw Error(a(331));var A=Nt;if(Nt|=4,Wg(m.current),Vg(m,m.current,M,s),Nt=A,Oo(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(ue,m)}catch{}return!0}finally{Z.p=f,I.T=l,o_(t,i)}}function c_(t,i,s){i=si(s,i),i=Mf(t.stateNode,i,2),t=Ca(t,i,2),t!==null&&(Ie(t,2),Oi(t))}function Wt(t,i,s){if(t.tag===3)c_(t,t,s);else for(;i!==null;){if(i.tag===3){c_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Fa===null||!Fa.has(l))){t=si(s,t),s=dg(2),l=Ca(i,s,2),l!==null&&(pg(s,l,i,t),Ie(l,2),Oi(l));break}}i=i.return}}function jf(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new yx;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Ff=!0,f.add(s),t=Tx.bind(null,t,i,s),i.then(t,t))}function Tx(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Yt===t&&(Et&s)===s&&($t===4||$t===3&&(Et&62914560)===Et&&300>pt()-Gf?(Nt&2)===0&&fr(t,0):zf|=s,lr===Et&&(lr=0)),Oi(t)}function u_(t,i){i===0&&(i=Ue()),t=Ys(t,i),t!==null&&(Ie(t,i),Oi(t))}function bx(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),u_(t,s)}function Ax(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),u_(t,s)}function Rx(t,i){return xt(t,i)}var uc=null,dr=null,Kf=!1,fc=!1,Zf=!1,As=0;function Oi(t){t!==dr&&t.next===null&&(dr===null?uc=dr=t:dr=dr.next=t),fc=!0,Kf||(Kf=!0,Cx())}function Oo(t,i){if(!Zf&&fc){Zf=!0;do for(var s=!1,l=uc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var M=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-Oe(42|t)+1)-1,m&=f&~(M&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,p_(l,m))}else m=Et,m=qe(l,l===Yt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Re(l,m)||(s=!0,p_(l,m));l=l.next}while(s);Zf=!1}}function wx(){f_()}function f_(){fc=Kf=!1;var t=0;As!==0&&(Bx()&&(t=As),As=0);for(var i=pt(),s=null,l=uc;l!==null;){var f=l.next,m=h_(l,i);m===0?(l.next=null,s===null?uc=f:s.next=f,f===null&&(dr=s)):(s=l,(t!==0||(m&3)!==0)&&(fc=!0)),l=f}Oo(t)}function h_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var M=31-Oe(m),A=1<<M,P=f[M];P===-1?((A&s)===0||(A&l)!==0)&&(f[M]=nt(A,i)):P<=i&&(t.expiredLanes|=A),m&=~A}if(i=Yt,s=Et,s=qe(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&z(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Re(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&z(l),Lt(s)){case 2:case 8:s=Ye;break;case 32:s=it;break;case 268435456:s=O;break;default:s=it}return l=d_.bind(null,t),s=xt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&z(l),t.callbackPriority=2,t.callbackNode=null,2}function d_(t,i){if(An!==0&&An!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(cc()&&t.callbackNode!==s)return null;var l=Et;return l=qe(t,t===Yt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Kg(t,l,i),h_(t,pt()),t.callbackNode!=null&&t.callbackNode===s?d_.bind(null,t):null)}function p_(t,i){if(cc())return null;Kg(t,i,!0)}function Cx(){zx(function(){(Nt&6)!==0?xt(St,wx):f_()})}function Qf(){return As===0&&(As=k()),As}function m_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ml(""+t)}function g_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Dx(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=m_((f[En]||null).action),M=l.submitter;M&&(i=(i=M[En]||null)?m_(i.formAction):M.getAttribute("formAction"),i!==null&&(m=i,M=null));var A=new Al("action","action",null,l,f);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(As!==0){var P=M?g_(f,M):new FormData(f);_f(s,{pending:!0,data:P,method:f.method,action:m},null,P)}}else typeof m=="function"&&(A.preventDefault(),P=M?g_(f,M):new FormData(f),_f(s,{pending:!0,data:P,method:f.method,action:m},m,P))},currentTarget:f}]})}}for(var Jf=0;Jf<Pu.length;Jf++){var $f=Pu[Jf],Ux=$f.toLowerCase(),Lx=$f[0].toUpperCase()+$f.slice(1);gi(Ux,"on"+Lx)}gi(Kp,"onAnimationEnd"),gi(Zp,"onAnimationIteration"),gi(Qp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(Ky,"onTransitionRun"),gi(Zy,"onTransitionStart"),gi(Qy,"onTransitionCancel"),gi(Jp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function __(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var M=l.length-1;0<=M;M--){var A=l[M],P=A.instance,$=A.currentTarget;if(A=A.listener,P!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=$;try{m(f)}catch(ce){Jl(ce)}f.currentTarget=null,m=P}else for(M=0;M<l.length;M++){if(A=l[M],P=A.instance,$=A.currentTarget,A=A.listener,P!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=$;try{m(f)}catch(ce){Jl(ce)}f.currentTarget=null,m=P}}}}function gt(t,i){var s=i[ls];s===void 0&&(s=i[ls]=new Set);var l=t+"__bubble";s.has(l)||(v_(i,t,2,!1),s.add(l))}function eh(t,i,s){var l=0;i&&(l|=4),v_(s,t,l,i)}var hc="_reactListening"+Math.random().toString(36).slice(2);function th(t){if(!t[hc]){t[hc]=!0,xl.forEach(function(s){s!=="selectionchange"&&(Nx.has(s)||eh(s,!1,t),eh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[hc]||(i[hc]=!0,eh("selectionchange",!1,i))}}function v_(t,i,s,l){switch(V_(i)){case 2:var f=rS;break;case 8:f=oS;break;default:f=mh}s=f.bind(null,i,s,t),f=void 0,!Mu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function nh(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var A=l.stateNode.containerInfo;if(A===f)break;if(M===4)for(M=l.return;M!==null;){var P=M.tag;if((P===3||P===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;A!==null;){if(M=Vi(A),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){l=m=M;continue e}A=A.parentNode}}l=l.return}bp(function(){var $=m,ce=xu(s),me=[];e:{var ne=$p.get(t);if(ne!==void 0){var ie=Al,et=t;switch(t){case"keypress":if(Tl(s)===0)break e;case"keydown":case"keyup":ie=Ry;break;case"focusin":et="focus",ie=Au;break;case"focusout":et="blur",ie=Au;break;case"beforeblur":case"afterblur":ie=Au;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=my;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=Dy;break;case Kp:case Zp:case Qp:ie=vy;break;case Jp:ie=Ly;break;case"scroll":case"scrollend":ie=dy;break;case"wheel":ie=Oy;break;case"copy":case"cut":case"paste":ie=xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=Dp;break;case"toggle":case"beforetoggle":ie=Iy}var Qe=(i&4)!==0,Gt=!Qe&&(t==="scroll"||t==="scrollend"),W=Qe?ne!==null?ne+"Capture":null:ne;Qe=[];for(var G=$,Q;G!==null;){var fe=G;if(Q=fe.stateNode,fe=fe.tag,fe!==5&&fe!==26&&fe!==27||Q===null||W===null||(fe=$r(G,W),fe!=null&&Qe.push(Io(G,fe,Q))),Gt)break;G=G.return}0<Qe.length&&(ne=new ie(ne,et,null,s,ce),me.push({event:ne,listeners:Qe}))}}if((i&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ie=t==="mouseout"||t==="pointerout",ne&&s!==yu&&(et=s.relatedTarget||s.fromElement)&&(Vi(et)||et[Gn]))break e;if((ie||ne)&&(ne=ce.window===ce?ce:(ne=ce.ownerDocument)?ne.defaultView||ne.parentWindow:window,ie?(et=s.relatedTarget||s.toElement,ie=$,et=et?Vi(et):null,et!==null&&(Gt=c(et),Qe=et.tag,et!==Gt||Qe!==5&&Qe!==27&&Qe!==6)&&(et=null)):(ie=null,et=$),ie!==et)){if(Qe=wp,fe="onMouseLeave",W="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Qe=Dp,fe="onPointerLeave",W="onPointerEnter",G="pointer"),Gt=ie==null?ne:us(ie),Q=et==null?ne:us(et),ne=new Qe(fe,G+"leave",ie,s,ce),ne.target=Gt,ne.relatedTarget=Q,fe=null,Vi(ce)===$&&(Qe=new Qe(W,G+"enter",et,s,ce),Qe.target=Q,Qe.relatedTarget=Gt,fe=Qe),Gt=fe,ie&&et)t:{for(Qe=ie,W=et,G=0,Q=Qe;Q;Q=pr(Q))G++;for(Q=0,fe=W;fe;fe=pr(fe))Q++;for(;0<G-Q;)Qe=pr(Qe),G--;for(;0<Q-G;)W=pr(W),Q--;for(;G--;){if(Qe===W||W!==null&&Qe===W.alternate)break t;Qe=pr(Qe),W=pr(W)}Qe=null}else Qe=null;ie!==null&&y_(me,ne,ie,Qe,!1),et!==null&&Gt!==null&&y_(me,Gt,et,Qe,!0)}}e:{if(ne=$?us($):window,ie=ne.nodeName&&ne.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ne.type==="file")var ze=Fp;else if(Ip(ne))if(zp)ze=qy;else{ze=Xy;var dt=ky}else ie=ne.nodeName,!ie||ie.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?$&&vu($.elementType)&&(ze=Fp):ze=Wy;if(ze&&(ze=ze(t,$))){Bp(me,ze,s,ce);break e}dt&&dt(t,ne,$),t==="focusout"&&$&&ne.type==="number"&&$.memoizedProps.value!=null&&Cn(ne,"number",ne.value)}switch(dt=$?us($):window,t){case"focusin":(Ip(dt)||dt.contentEditable==="true")&&(Xs=dt,Lu=$,oo=null);break;case"focusout":oo=Lu=Xs=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Yp(me,s,ce);break;case"selectionchange":if(jy)break;case"keydown":case"keyup":Yp(me,s,ce)}var Xe;if(wu)e:{switch(t){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else ks?Op(t,s)&&(Je="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Je="onCompositionStart");Je&&(Up&&s.locale!=="ko"&&(ks||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&ks&&(Xe=Ap()):(ba=ce,Eu="value"in ba?ba.value:ba.textContent,ks=!0)),dt=dc($,Je),0<dt.length&&(Je=new Cp(Je,t,null,s,ce),me.push({event:Je,listeners:dt}),Xe?Je.data=Xe:(Xe=Pp(s),Xe!==null&&(Je.data=Xe)))),(Xe=Fy?zy(t,s):Hy(t,s))&&(Je=dc($,"onBeforeInput"),0<Je.length&&(dt=new Cp("onBeforeInput","beforeinput",null,s,ce),me.push({event:dt,listeners:Je}),dt.data=Xe)),Dx(me,t,$,s,ce)}__(me,i)})}function Io(t,i,s){return{instance:t,listener:i,currentTarget:s}}function dc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=$r(t,s),f!=null&&l.unshift(Io(t,f,m)),f=$r(t,i),f!=null&&l.push(Io(t,f,m))),t.tag===3)return l;t=t.return}return[]}function pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function y_(t,i,s,l,f){for(var m=i._reactName,M=[];s!==null&&s!==l;){var A=s,P=A.alternate,$=A.stateNode;if(A=A.tag,P!==null&&P===l)break;A!==5&&A!==26&&A!==27||$===null||(P=$,f?($=$r(s,m),$!=null&&M.unshift(Io(s,$,P))):f||($=$r(s,m),$!=null&&M.push(Io(s,$,P)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var Ox=/\r\n?/g,Px=/\u0000|\uFFFD/g;function x_(t){return(typeof t=="string"?t:""+t).replace(Ox,`
`).replace(Px,"")}function S_(t,i){return i=x_(i),x_(t)===i}function pc(){}function Ht(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Ci(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Ci(t,""+l);break;case"className":Ce(t,"class",l);break;case"tabIndex":Ce(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ce(t,s,l);break;case"style":Ep(t,l,m);break;case"data":if(i!=="object"){Ce(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ml(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Ht(t,i,"name",f.name,f,null),Ht(t,i,"formEncType",f.formEncType,f,null),Ht(t,i,"formMethod",f.formMethod,f,null),Ht(t,i,"formTarget",f.formTarget,f,null)):(Ht(t,i,"encType",f.encType,f,null),Ht(t,i,"method",f.method,f,null),Ht(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ml(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=pc);break;case"onScroll":l!=null&&gt("scroll",t);break;case"onScrollEnd":l!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Ml(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":gt("beforetoggle",t),gt("toggle",t),Te(t,"popover",l);break;case"xlinkActuate":Ne(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ne(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ne(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ne(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ne(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ne(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ne(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ne(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ne(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Te(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=fy.get(s)||s,Te(t,s,l))}}function ih(t,i,s,l,f,m){switch(s){case"style":Ep(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Ci(t,l):(typeof l=="number"||typeof l=="bigint")&&Ci(t,""+l);break;case"onScroll":l!=null&&gt("scroll",t);break;case"onScrollEnd":l!=null&&gt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=pc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sl.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[En]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Te(t,s,l)}}}function Rn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var M=s[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ht(t,i,m,M,s,null)}}f&&Ht(t,i,"srcSet",s.srcSet,s,null),l&&Ht(t,i,"src",s.src,s,null);return;case"input":gt("invalid",t);var A=m=M=f=null,P=null,$=null;for(l in s)if(s.hasOwnProperty(l)){var ce=s[l];if(ce!=null)switch(l){case"name":f=ce;break;case"type":M=ce;break;case"checked":P=ce;break;case"defaultChecked":$=ce;break;case"value":m=ce;break;case"defaultValue":A=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,i));break;default:Ht(t,i,l,ce,s,null)}}Xt(t,m,A,P,$,M,f,!1),Ft(t);return;case"select":gt("invalid",t),l=M=m=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":M=A;break;case"multiple":l=A;default:Ht(t,i,f,A,s,null)}i=m,s=M,t.multiple=!!l,i!=null?cn(t,!!l,i,!1):s!=null&&cn(t,!!l,s,!0);return;case"textarea":gt("invalid",t),m=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(A=s[M],A!=null))switch(M){case"value":l=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Ht(t,i,M,A,s,null)}Tn(t,l,f,m),Ft(t);return;case"option":for(P in s)if(s.hasOwnProperty(P)&&(l=s[P],l!=null))switch(P){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ht(t,i,P,l,s,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(l=0;l<Po.length;l++)gt(Po[l],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in s)if(s.hasOwnProperty($)&&(l=s[$],l!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ht(t,i,$,l,s,null)}return;default:if(vu(i)){for(ce in s)s.hasOwnProperty(ce)&&(l=s[ce],l!==void 0&&ih(t,i,ce,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Ht(t,i,A,l,s,null))}function Ix(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,M=null,A=null,P=null,$=null,ce=null;for(ie in s){var me=s[ie];if(s.hasOwnProperty(ie)&&me!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":P=me;default:l.hasOwnProperty(ie)||Ht(t,i,ie,null,l,me)}}for(var ne in l){var ie=l[ne];if(me=s[ne],l.hasOwnProperty(ne)&&(ie!=null||me!=null))switch(ne){case"type":m=ie;break;case"name":f=ie;break;case"checked":$=ie;break;case"defaultChecked":ce=ie;break;case"value":M=ie;break;case"defaultValue":A=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(a(137,i));break;default:ie!==me&&Ht(t,i,ne,ie,l,me)}}Wi(t,M,A,P,$,ce,m,f);return;case"select":ie=M=A=ne=null;for(m in s)if(P=s[m],s.hasOwnProperty(m)&&P!=null)switch(m){case"value":break;case"multiple":ie=P;default:l.hasOwnProperty(m)||Ht(t,i,m,null,l,P)}for(f in l)if(m=l[f],P=s[f],l.hasOwnProperty(f)&&(m!=null||P!=null))switch(f){case"value":ne=m;break;case"defaultValue":A=m;break;case"multiple":M=m;default:m!==P&&Ht(t,i,f,m,l,P)}i=A,s=M,l=ie,ne!=null?cn(t,!!s,ne,!1):!!l!=!!s&&(i!=null?cn(t,!!s,i,!0):cn(t,!!s,s?[]:"",!1));return;case"textarea":ie=ne=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ht(t,i,A,null,l,f)}for(M in l)if(f=l[M],m=s[M],l.hasOwnProperty(M)&&(f!=null||m!=null))switch(M){case"value":ne=f;break;case"defaultValue":ie=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Ht(t,i,M,f,l,m)}gn(t,ne,ie);return;case"option":for(var et in s)if(ne=s[et],s.hasOwnProperty(et)&&ne!=null&&!l.hasOwnProperty(et))switch(et){case"selected":t.selected=!1;break;default:Ht(t,i,et,null,l,ne)}for(P in l)if(ne=l[P],ie=s[P],l.hasOwnProperty(P)&&ne!==ie&&(ne!=null||ie!=null))switch(P){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Ht(t,i,P,ne,l,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in s)ne=s[Qe],s.hasOwnProperty(Qe)&&ne!=null&&!l.hasOwnProperty(Qe)&&Ht(t,i,Qe,null,l,ne);for($ in l)if(ne=l[$],ie=s[$],l.hasOwnProperty($)&&ne!==ie&&(ne!=null||ie!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(a(137,i));break;default:Ht(t,i,$,ne,l,ie)}return;default:if(vu(i)){for(var Gt in s)ne=s[Gt],s.hasOwnProperty(Gt)&&ne!==void 0&&!l.hasOwnProperty(Gt)&&ih(t,i,Gt,void 0,l,ne);for(ce in l)ne=l[ce],ie=s[ce],!l.hasOwnProperty(ce)||ne===ie||ne===void 0&&ie===void 0||ih(t,i,ce,ne,l,ie);return}}for(var W in s)ne=s[W],s.hasOwnProperty(W)&&ne!=null&&!l.hasOwnProperty(W)&&Ht(t,i,W,null,l,ne);for(me in l)ne=l[me],ie=s[me],!l.hasOwnProperty(me)||ne===ie||ne==null&&ie==null||Ht(t,i,me,ne,l,ie)}var ah=null,sh=null;function mc(t){return t.nodeType===9?t:t.ownerDocument}function M_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function E_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function rh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var oh=null;function Bx(){var t=window.event;return t&&t.type==="popstate"?t===oh?!1:(oh=t,!0):(oh=null,!1)}var T_=typeof setTimeout=="function"?setTimeout:void 0,Fx=typeof clearTimeout=="function"?clearTimeout:void 0,b_=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof b_<"u"?function(t){return b_.resolve(null).then(t).catch(Hx)}:T_;function Hx(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function A_(t,i){var s=i,l=0,f=0;do{var m=s.nextSibling;if(t.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var M=t.ownerDocument;if(s&1&&Bo(M.documentElement),s&2&&Bo(M.body),s&4)for(s=M.head,Bo(s),M=s.firstChild;M;){var A=M.nextSibling,P=M.nodeName;M[Sa]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=A}}if(f===0){t.removeChild(m),Wo(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);Wo(i)}function lh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":lh(s),Ma(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Gx(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Sa])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function Vx(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=vi(t.nextSibling),t===null))return null;return t}function ch(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function kx(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function vi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var uh=null;function R_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function w_(t,i,s){switch(i=mc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Bo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ma(t)}var fi=new Map,C_=new Set;function gc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=Z.d;Z.d={f:Xx,r:Wx,D:qx,C:Yx,L:jx,m:Kx,X:Qx,S:Zx,M:Jx};function Xx(){var t=ra.f(),i=oc();return t||i}function Wx(t){var i=ki(t);i!==null&&i.tag===5&&i.type==="form"?Km(i):ra.r(t)}var mr=typeof document>"u"?null:document;function D_(t,i,s){var l=mr;if(l&&typeof i=="string"&&i){var f=qt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),C_.has(f)||(C_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Rn(i,"link",t),an(i),l.head.appendChild(i)))}}function qx(t){ra.D(t),D_("dns-prefetch",t,null)}function Yx(t,i){ra.C(t,i),D_("preconnect",t,i)}function jx(t,i,s){ra.L(t,i,s);var l=mr;if(l&&t&&i){var f='link[rel="preload"][as="'+qt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+qt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+qt(s.imageSizes)+'"]')):f+='[href="'+qt(t)+'"]';var m=f;switch(i){case"style":m=gr(t);break;case"script":m=_r(t)}fi.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),fi.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Fo(m))||i==="script"&&l.querySelector(zo(m))||(i=l.createElement("link"),Rn(i,"link",t),an(i),l.head.appendChild(i)))}}function Kx(t,i){ra.m(t,i);var s=mr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+qt(l)+'"][href="'+qt(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=_r(t)}if(!fi.has(m)&&(t=g({rel:"modulepreload",href:t},i),fi.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(zo(m)))return}l=s.createElement("link"),Rn(l,"link",t),an(l),s.head.appendChild(l)}}}function Zx(t,i,s){ra.S(t,i,s);var l=mr;if(l&&t){var f=Ea(l).hoistableStyles,m=gr(t);i=i||"default";var M=f.get(m);if(!M){var A={loading:0,preload:null};if(M=l.querySelector(Fo(m)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=fi.get(m))&&fh(t,s);var P=M=l.createElement("link");an(P),Rn(P,"link",t),P._p=new Promise(function($,ce){P.onload=$,P.onerror=ce}),P.addEventListener("load",function(){A.loading|=1}),P.addEventListener("error",function(){A.loading|=2}),A.loading|=4,_c(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:A},f.set(m,M)}}}function Qx(t,i){ra.X(t,i);var s=mr;if(s&&t){var l=Ea(s).hoistableScripts,f=_r(t),m=l.get(f);m||(m=s.querySelector(zo(f)),m||(t=g({src:t,async:!0},i),(i=fi.get(f))&&hh(t,i),m=s.createElement("script"),an(m),Rn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function Jx(t,i){ra.M(t,i);var s=mr;if(s&&t){var l=Ea(s).hoistableScripts,f=_r(t),m=l.get(f);m||(m=s.querySelector(zo(f)),m||(t=g({src:t,async:!0,type:"module"},i),(i=fi.get(f))&&hh(t,i),m=s.createElement("script"),an(m),Rn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function U_(t,i,s,l){var f=(f=Se.current)?gc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=gr(s.href),s=Ea(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=gr(s.href);var m=Ea(f).hoistableStyles,M=m.get(t);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,M),(m=f.querySelector(Fo(t)))&&!m._p&&(M.instance=m,M.state.loading=5),fi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},fi.set(t,s),m||$x(f,t,s,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=_r(s),s=Ea(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function gr(t){return'href="'+qt(t)+'"'}function Fo(t){return'link[rel="stylesheet"]['+t+"]"}function L_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function $x(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Rn(i,"link",s),an(i),t.head.appendChild(i))}function _r(t){return'[src="'+qt(t)+'"]'}function zo(t){return"script[async]"+t}function N_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+qt(s.href)+'"]');if(l)return i.instance=l,an(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),an(l),Rn(l,"style",f),_c(l,s.precedence,t),i.instance=l;case"stylesheet":f=gr(s.href);var m=t.querySelector(Fo(f));if(m)return i.state.loading|=4,i.instance=m,an(m),m;l=L_(s),(f=fi.get(f))&&fh(l,f),m=(t.ownerDocument||t).createElement("link"),an(m);var M=m;return M._p=new Promise(function(A,P){M.onload=A,M.onerror=P}),Rn(m,"link",l),i.state.loading|=4,_c(m,s.precedence,t),i.instance=m;case"script":return m=_r(s.src),(f=t.querySelector(zo(m)))?(i.instance=f,an(f),f):(l=s,(f=fi.get(m))&&(l=g({},s),hh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),an(f),Rn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,_c(l,s.precedence,t));return i.instance}function _c(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,M=0;M<l.length;M++){var A=l[M];if(A.dataset.precedence===i)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function fh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function hh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var vc=null;function O_(t,i,s){if(vc===null){var l=new Map,f=vc=new Map;f.set(s,l)}else f=vc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[Sa]||m[ln]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(i)||"";M=t+M;var A=l.get(M);A?A.push(m):l.set(M,[m])}}return l}function P_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function eS(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function I_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ho=null;function tS(){}function nS(t,i,s){if(Ho===null)throw Error(a(475));var l=Ho;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=gr(s.href),m=t.querySelector(Fo(f));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=yc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=m,an(m);return}m=t.ownerDocument||t,s=L_(s),(f=fi.get(f))&&fh(s,f),m=m.createElement("link"),an(m);var M=m;M._p=new Promise(function(A,P){M.onload=A,M.onerror=P}),Rn(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=yc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function iS(){if(Ho===null)throw Error(a(475));var t=Ho;return t.stylesheets&&t.count===0&&dh(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&dh(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function yc(){if(this.count--,this.count===0){if(this.stylesheets)dh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var xc=null;function dh(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,xc=new Map,i.forEach(aS,t),xc=null,yc.call(t))}function aS(t,i){if(!(i.state.loading&4)){var s=xc.get(t);if(s)var l=s.get(null);else{s=new Map,xc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var M=f[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=i.instance,M=f.getAttribute("data-precedence"),m=s.get(M)||l,m===l&&s.set(null,f),s.set(M,f),this.count++,l=yc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Go={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function sS(t,i,s,l,f,m,M,A){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function B_(t,i,s,l,f,m,M,A,P,$,ce,me){return t=new sS(t,i,s,M,A,P,$,me),i=1,m===!0&&(i|=24),m=Zn(3,null,null,i),t.current=m,m.stateNode=t,i=Yu(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},Qu(m),t}function F_(t){return t?(t=js,t):js}function z_(t,i,s,l,f,m){f=F_(f),l.context===null?l.context=f:l.pendingContext=f,l=wa(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Ca(t,l,i),s!==null&&(ti(s,t,i),_o(s,t,i))}function H_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function ph(t,i){H_(t,i),(t=t.alternate)&&H_(t,i)}function G_(t){if(t.tag===13){var i=Ys(t,67108864);i!==null&&ti(i,t,67108864),ph(t,67108864)}}var Sc=!0;function rS(t,i,s,l){var f=I.T;I.T=null;var m=Z.p;try{Z.p=2,mh(t,i,s,l)}finally{Z.p=m,I.T=f}}function oS(t,i,s,l){var f=I.T;I.T=null;var m=Z.p;try{Z.p=8,mh(t,i,s,l)}finally{Z.p=m,I.T=f}}function mh(t,i,s,l){if(Sc){var f=gh(l);if(f===null)nh(t,i,l,Mc,s),k_(t,l);else if(cS(f,t,i,s,l))l.stopPropagation();else if(k_(t,l),i&4&&-1<lS.indexOf(t)){for(;f!==null;){var m=ki(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=We(m.pendingLanes);if(M!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var P=1<<31-Oe(M);A.entanglements[1]|=P,M&=~P}Oi(m),(Nt&6)===0&&(sc=pt()+500,Oo(0))}}break;case 13:A=Ys(m,2),A!==null&&ti(A,m,2),oc(),ph(m,2)}if(m=gh(l),m===null&&nh(t,i,l,Mc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else nh(t,i,l,null,s)}}function gh(t){return t=xu(t),_h(t)}var Mc=null;function _h(t){if(Mc=null,t=Vi(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Mc=t,null}function V_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case St:return 2;case Ye:return 8;case it:case en:return 32;case O:return 268435456;default:return 32}default:return 32}}var vh=!1,Va=null,ka=null,Xa=null,Vo=new Map,ko=new Map,Wa=[],lS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k_(t,i){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(i.pointerId)}}function Xo(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=ki(i),i!==null&&G_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function cS(t,i,s,l,f){switch(i){case"focusin":return Va=Xo(Va,t,i,s,l,f),!0;case"dragenter":return ka=Xo(ka,t,i,s,l,f),!0;case"mouseover":return Xa=Xo(Xa,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return Vo.set(m,Xo(Vo.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,ko.set(m,Xo(ko.get(m)||null,t,i,s,l,f)),!0}return!1}function X_(t){var i=Vi(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,jn(t.priority,function(){if(s.tag===13){var l=ei();l=tt(l);var f=Ys(s,l);f!==null&&ti(f,s,l),ph(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ec(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=gh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);yu=l,s.target.dispatchEvent(l),yu=null}else return i=ki(s),i!==null&&G_(i),t.blockedOn=s,!1;i.shift()}return!0}function W_(t,i,s){Ec(t)&&s.delete(i)}function uS(){vh=!1,Va!==null&&Ec(Va)&&(Va=null),ka!==null&&Ec(ka)&&(ka=null),Xa!==null&&Ec(Xa)&&(Xa=null),Vo.forEach(W_),ko.forEach(W_)}function Tc(t,i){t.blockedOn===i&&(t.blockedOn=null,vh||(vh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,uS)))}var bc=null;function q_(t){bc!==t&&(bc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){bc===t&&(bc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(_h(l||s)===null)continue;break}var m=ki(s);m!==null&&(t.splice(i,3),i-=3,_f(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Wo(t){function i(P){return Tc(P,t)}Va!==null&&Tc(Va,t),ka!==null&&Tc(ka,t),Xa!==null&&Tc(Xa,t),Vo.forEach(i),ko.forEach(i);for(var s=0;s<Wa.length;s++){var l=Wa[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Wa.length&&(s=Wa[0],s.blockedOn===null);)X_(s),s.blockedOn===null&&Wa.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],M=f[En]||null;if(typeof m=="function")M||q_(s);else if(M){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,M=m[En]||null)A=M.formAction;else if(_h(f)!==null)continue}else A=M.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),q_(s)}}}function yh(t){this._internalRoot=t}Ac.prototype.render=yh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ei();z_(s,l,t,i,null,null)},Ac.prototype.unmount=yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;z_(t.current,2,null,t,null,null),oc(),i[Gn]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var i=At();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Wa.length&&i!==0&&i<Wa[s].priority;s++);Wa.splice(s,0,t),s===0&&X_(t)}};var Y_=e.version;if(Y_!=="19.1.0")throw Error(a(527,Y_,"19.1.0"));Z.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?d(t):null,t=t===null?null:t.stateNode,t};var fS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{ue=Rc.inject(fS),de=Rc}catch{}}return Yo.createRoot=function(t,i){if(!r(t))throw Error(a(299));var s=!1,l="",f=cg,m=ug,M=fg,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=B_(t,1,!1,null,null,s,l,f,m,M,A,null),t[Gn]=i.current,th(t),new yh(i)},Yo.hydrateRoot=function(t,i,s){if(!r(t))throw Error(a(299));var l=!1,f="",m=cg,M=ug,A=fg,P=null,$=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(P=s.unstable_transitionCallbacks),s.formState!==void 0&&($=s.formState)),i=B_(t,1,!0,i,s??null,l,f,m,M,A,P,$),i.context=F_(null),s=i.current,l=ei(),l=tt(l),f=wa(l),f.callback=null,Ca(s,f,l),s=l,i.current.lanes=s,Ie(i,s),Oi(i),t[Gn]=i.current,th(t),new Ac(i)},Yo.version="19.1.0",Yo}var i0;function SS(){if(i0)return Mh.exports;i0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Mh.exports=xS(),Mh.exports}var MS=SS();const a0=[{id:1,name:"Modern Chair (.glb)",gltfUrl:"https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Models@master/2.0/Chair/glTF-Binary/Chair.glb"},{id:2,name:"Sofa (.glb)",gltfUrl:"https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Models@master/2.0/Sofa/glTF-Binary/Sofa.glb"},{id:3,name:"Bar Stool (.glb)",gltfUrl:"https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Models@master/2.0/Stool/glTF-Binary/Stool.glb"},{id:4,name:"Coffee Table (.glb)",gltfUrl:"https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Models@master/2.0/Avocado/glTF-Binary/Avocado.glb"}];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tp="178",ES=0,s0=1,TS=2,Rv=1,bS=2,da=3,ya=0,Yn=1,Ii=2,as=0,Pr=1,r0=2,o0=3,l0=4,AS=5,Is=100,RS=101,wS=102,CS=103,DS=104,US=200,LS=201,NS=202,OS=203,ud=204,fd=205,PS=206,IS=207,BS=208,FS=209,zS=210,HS=211,GS=212,VS=213,kS=214,hd=0,dd=1,pd=2,zr=3,md=4,gd=5,_d=6,vd=7,wv=0,XS=1,WS=2,ss=0,qS=1,YS=2,jS=3,KS=4,ZS=5,QS=6,JS=7,c0="attached",$S="detached",Cv=300,Hr=301,Gr=302,yd=303,xd=304,du=306,Vr=1e3,ns=1001,lu=1002,Fn=1003,Dv=1004,il=1005,ai=1006,tu=1007,ma=1008,Fi=1009,Uv=1010,Lv=1011,ll=1012,np=1013,zs=1014,bi=1015,ml=1016,ip=1017,ap=1018,cl=1020,Nv=35902,Ov=1021,Pv=1022,pi=1023,ul=1026,fl=1027,sp=1028,rp=1029,Iv=1030,op=1031,lp=1033,nu=33776,iu=33777,au=33778,su=33779,Sd=35840,Md=35841,Ed=35842,Td=35843,bd=36196,Ad=37492,Rd=37496,wd=37808,Cd=37809,Dd=37810,Ud=37811,Ld=37812,Nd=37813,Od=37814,Pd=37815,Id=37816,Bd=37817,Fd=37818,zd=37819,Hd=37820,Gd=37821,ru=36492,Vd=36494,kd=36495,Bv=36283,Xd=36284,Wd=36285,qd=36286,hl=2300,dl=2301,Ah=2302,u0=2400,f0=2401,h0=2402,eM=2500,tM=0,Fv=1,Yd=2,nM=3200,iM=3201,zv=0,aM=1,ts="",wn="srgb",Hn="srgb-linear",cu="linear",Vt="srgb",vr=7680,d0=519,sM=512,rM=513,oM=514,Hv=515,lM=516,cM=517,uM=518,fM=519,jd=35044,p0="300 es",ga=2e3,uu=2001;class jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const r=a[e];if(r!==void 0){const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let c=0,u=r.length;c<u;c++)r[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let m0=1234567;const sl=Math.PI/180,kr=180/Math.PI;function Ai(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[a&255]+Ln[a>>8&255]+Ln[a>>16&255]+Ln[a>>24&255]).toLowerCase()}function _t(o,e,n){return Math.max(e,Math.min(n,o))}function cp(o,e){return(o%e+e)%e}function hM(o,e,n,a,r){return a+(o-e)*(r-a)/(n-e)}function dM(o,e,n){return o!==e?(n-o)/(e-o):0}function rl(o,e,n){return(1-n)*o+n*e}function pM(o,e,n,a){return rl(o,e,1-Math.exp(-n*a))}function mM(o,e=1){return e-Math.abs(cp(o,e*2)-e)}function gM(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*(3-2*o))}function _M(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*o*(o*(o*6-15)+10))}function vM(o,e){return o+Math.floor(Math.random()*(e-o+1))}function yM(o,e){return o+Math.random()*(e-o)}function xM(o){return o*(.5-Math.random())}function SM(o){o!==void 0&&(m0=o);let e=m0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function MM(o){return o*sl}function EM(o){return o*kr}function TM(o){return(o&o-1)===0&&o!==0}function bM(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function AM(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function RM(o,e,n,a,r){const c=Math.cos,u=Math.sin,h=c(n/2),p=u(n/2),d=c((e+a)/2),g=u((e+a)/2),_=c((e-a)/2),v=u((e-a)/2),y=c((a-e)/2),E=u((a-e)/2);switch(r){case"XYX":o.set(h*g,p*_,p*v,h*d);break;case"YZY":o.set(p*v,h*g,p*_,h*d);break;case"ZXZ":o.set(p*_,p*v,h*g,h*d);break;case"XZX":o.set(h*g,p*E,p*y,h*d);break;case"YXY":o.set(p*y,h*g,p*E,h*d);break;case"ZYZ":o.set(p*E,p*y,h*g,h*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ei(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const wM={DEG2RAD:sl,RAD2DEG:kr,generateUUID:Ai,clamp:_t,euclideanModulo:cp,mapLinear:hM,inverseLerp:dM,lerp:rl,damp:pM,pingpong:mM,smoothstep:gM,smootherstep:_M,randInt:vM,randFloat:yM,randFloatSpread:xM,seededRandom:SM,degToRad:MM,radToDeg:EM,isPowerOfTwo:TM,ceilPowerOfTwo:bM,floorPowerOfTwo:AM,setQuaternionFromProperEuler:RM,normalize:Pt,denormalize:Ei};class yt{constructor(e=0,n=0){yt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,r=e.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(_t(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(_t(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),r=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*r+e.x,this.y=c*r+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class os{constructor(e=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=r}static slerpFlat(e,n,a,r,c,u,h){let p=a[r+0],d=a[r+1],g=a[r+2],_=a[r+3];const v=c[u+0],y=c[u+1],E=c[u+2],T=c[u+3];if(h===0){e[n+0]=p,e[n+1]=d,e[n+2]=g,e[n+3]=_;return}if(h===1){e[n+0]=v,e[n+1]=y,e[n+2]=E,e[n+3]=T;return}if(_!==T||p!==v||d!==y||g!==E){let S=1-h;const x=p*v+d*y+g*E+_*T,N=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const F=Math.sqrt(L),H=Math.atan2(F,x*N);S=Math.sin(S*H)/F,h=Math.sin(h*H)/F}const w=h*N;if(p=p*S+v*w,d=d*S+y*w,g=g*S+E*w,_=_*S+T*w,S===1-h){const F=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=F,d*=F,g*=F,_*=F}}e[n]=p,e[n+1]=d,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,r,c,u){const h=a[r],p=a[r+1],d=a[r+2],g=a[r+3],_=c[u],v=c[u+1],y=c[u+2],E=c[u+3];return e[n]=h*E+g*_+p*y-d*v,e[n+1]=p*E+g*v+d*_-h*y,e[n+2]=d*E+g*y+h*v-p*_,e[n+3]=g*E-h*_-p*v-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,r){return this._x=e,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,r=e._y,c=e._z,u=e._order,h=Math.cos,p=Math.sin,d=h(a/2),g=h(r/2),_=h(c/2),v=p(a/2),y=p(r/2),E=p(c/2);switch(u){case"XYZ":this._x=v*g*_+d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_+v*y*E;break;case"YZX":this._x=v*g*_+d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_-v*y*E;break;case"XZY":this._x=v*g*_-d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],r=n[4],c=n[8],u=n[1],h=n[5],p=n[9],d=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-d)*y,this._z=(u-r)*y}else if(a>h&&a>_){const y=2*Math.sqrt(1+a-h-_);this._w=(g-p)/y,this._x=.25*y,this._y=(r+u)/y,this._z=(c+d)/y}else if(h>_){const y=2*Math.sqrt(1+h-a-_);this._w=(c-d)/y,this._x=(r+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+_-a-h);this._w=(u-r)/y,this._x=(c+d)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,r=e._y,c=e._z,u=e._w,h=n._x,p=n._y,d=n._z,g=n._w;return this._x=a*g+u*h+r*d-c*p,this._y=r*g+u*p+c*h-a*d,this._z=c*g+u*d+a*p-r*h,this._w=u*g-a*h-r*p-c*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const a=this._x,r=this._y,c=this._z,u=this._w;let h=u*e._w+a*e._x+r*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=a,this._y=r,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const y=1-n;return this._w=y*u+n*this._w,this._x=y*a+n*this._x,this._y=y*r+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const d=Math.sqrt(p),g=Math.atan2(d,h),_=Math.sin((1-n)*g)/d,v=Math.sin(n*g)/d;return this._w=u*_+this._w*v,this._x=a*_+this._x*v,this._y=r*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,a=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(g0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(g0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*r,this.y=c[1]*n+c[4]*a+c[7]*r,this.z=c[2]*n+c[5]*a+c[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*r+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*r+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*r+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*r+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,r=this.z,c=e.x,u=e.y,h=e.z,p=e.w,d=2*(u*r-h*a),g=2*(h*n-c*r),_=2*(c*a-u*n);return this.x=n+p*d+u*_-h*g,this.y=a+p*g+h*d-c*_,this.z=r+p*_+c*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*r,this.y=c[1]*n+c[5]*a+c[9]*r,this.z=c[2]*n+c[6]*a+c[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(_t(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,r=e.y,c=e.z,u=n.x,h=n.y,p=n.z;return this.x=r*p-c*h,this.y=c*u-a*p,this.z=a*h-r*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Rh.copy(this).projectOnVector(e),this.sub(Rh)}reflect(e){return this.sub(Rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(_t(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return n*n+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const r=Math.sin(n)*e;return this.x=r*Math.sin(a),this.y=Math.cos(n)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rh=new j,g0=new os;class rt{constructor(e,n,a,r,c,u,h,p,d){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,h,p,d)}set(e,n,a,r,c,u,h,p,d){const g=this.elements;return g[0]=e,g[1]=r,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],h=a[3],p=a[6],d=a[1],g=a[4],_=a[7],v=a[2],y=a[5],E=a[8],T=r[0],S=r[3],x=r[6],N=r[1],L=r[4],w=r[7],F=r[2],H=r[5],B=r[8];return c[0]=u*T+h*N+p*F,c[3]=u*S+h*L+p*H,c[6]=u*x+h*w+p*B,c[1]=d*T+g*N+_*F,c[4]=d*S+g*L+_*H,c[7]=d*x+g*w+_*B,c[2]=v*T+y*N+E*F,c[5]=v*S+y*L+E*H,c[8]=v*x+y*w+E*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8];return n*u*g-n*h*d-a*c*g+a*h*p+r*c*d-r*u*p}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8],_=g*u-h*d,v=h*p-g*c,y=d*c-u*p,E=n*_+a*v+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(r*d-g*a)*T,e[2]=(h*a-r*u)*T,e[3]=v*T,e[4]=(g*n-r*p)*T,e[5]=(r*c-h*n)*T,e[6]=y*T,e[7]=(a*p-d*n)*T,e[8]=(u*n-a*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,r,c,u,h){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*h)+u+e,-r*d,r*p,-r*(-d*u+p*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(wh.makeScale(e,n)),this}rotate(e){return this.premultiply(wh.makeRotation(-e)),this}translate(e,n){return this.premultiply(wh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new rt;function Gv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function pl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function CM(){const o=pl("canvas");return o.style.display="block",o}const _0={};function Ir(o){o in _0||(_0[o]=!0,console.warn(o))}function DM(o,e,n){return new Promise(function(a,r){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function UM(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function LM(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const v0=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y0=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NM(){const o={enabled:!0,workingColorSpace:Hn,spaces:{},convert:function(r,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Vt&&(r.r=va(r.r),r.g=va(r.g),r.b=va(r.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[c].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Vt&&(r.r=Br(r.r),r.g=Br(r.g),r.b=Br(r.b))),r},workingToColorSpace:function(r,c){return this.convert(r,this.workingColorSpace,c)},colorSpaceToWorking:function(r,c){return this.convert(r,c,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ts?cu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,c=this.workingColorSpace){return r.fromArray(this.spaces[c].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,c,u){return r.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,c){return Ir("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,c)},toWorkingColorSpace:function(r,c){return Ir("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Hn]:{primaries:e,whitePoint:a,transfer:cu,toXYZ:v0,fromXYZ:y0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:a,transfer:Vt,toXYZ:v0,fromXYZ:y0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),o}const Tt=NM();function va(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Br(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let yr;class OM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{yr===void 0&&(yr=pl("canvas")),yr.width=e.width,yr.height=e.height;const r=yr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=yr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),c=r.data;for(let u=0;u<c.length;u++)c[u]=va(c[u]/255)*255;return a.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(va(n[a]/255)*255):n[a]=va(n[a]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PM=0;class up{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let c;if(Array.isArray(r)){c=[];for(let u=0,h=r.length;u<h;u++)r[u].isDataTexture?c.push(Ch(r[u].image)):c.push(Ch(r[u]))}else c=Ch(r);a.url=c}return n||(e.images[this.uuid]=a),a}}function Ch(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?OM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let IM=0;const Dh=new j;class Sn extends jr{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,a=ns,r=ns,c=ai,u=ma,h=pi,p=Fi,d=Sn.DEFAULT_ANISOTROPY,g=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Ai(),this.name="",this.source=new up(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vr:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case lu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vr:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case lu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Cv;Sn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,a=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,r){return this.x=e,this.y=n,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,r,c;const p=e.elements,d=p[0],g=p[4],_=p[8],v=p[1],y=p[5],E=p[9],T=p[2],S=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(d+1)/2,w=(y+1)/2,F=(x+1)/2,H=(g+v)/4,B=(_+T)/4,X=(E+S)/4;return L>w&&L>F?L<.01?(a=0,r=.707106781,c=.707106781):(a=Math.sqrt(L),r=H/a,c=B/a):w>F?w<.01?(a=.707106781,r=0,c=.707106781):(r=Math.sqrt(w),a=H/r,c=X/r):F<.01?(a=.707106781,r=.707106781,c=0):(c=Math.sqrt(F),a=B/c,r=X/c),this.set(a,r,c,n),this}let N=Math.sqrt((S-E)*(S-E)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(N)<.001&&(N=1),this.x=(S-E)/N,this.y=(_-T)/N,this.z=(v-g)/N,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this.w=_t(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this.w=_t(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(_t(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BM extends jr{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:a.depth},c=new Sn(r);this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let r=0,c=this.textures.length;r<c;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new up(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hs extends BM{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Vv extends Sn{constructor(e=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FM extends Sn{constructor(e=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xa{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(yi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(yi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=yi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,yi):yi.fromBufferAttribute(c,u),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),wc.copy(a.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}const r=e.children;for(let c=0,u=r.length;c<u;c++)this.expandByObject(r[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Cc.subVectors(this.max,jo),xr.subVectors(e.a,jo),Sr.subVectors(e.b,jo),Mr.subVectors(e.c,jo),Ya.subVectors(Sr,xr),ja.subVectors(Mr,Sr),Rs.subVectors(xr,Mr);let n=[0,-Ya.z,Ya.y,0,-ja.z,ja.y,0,-Rs.z,Rs.y,Ya.z,0,-Ya.x,ja.z,0,-ja.x,Rs.z,0,-Rs.x,-Ya.y,Ya.x,0,-ja.y,ja.x,0,-Rs.y,Rs.x,0];return!Uh(n,xr,Sr,Mr,Cc)||(n=[1,0,0,0,1,0,0,0,1],!Uh(n,xr,Sr,Mr,Cc))?!1:(Dc.crossVectors(Ya,ja),n=[Dc.x,Dc.y,Dc.z],Uh(n,xr,Sr,Mr,Cc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oa=[new j,new j,new j,new j,new j,new j,new j,new j],yi=new j,wc=new xa,xr=new j,Sr=new j,Mr=new j,Ya=new j,ja=new j,Rs=new j,jo=new j,Cc=new j,Dc=new j,ws=new j;function Uh(o,e,n,a,r){for(let c=0,u=o.length-3;c<=u;c+=3){ws.fromArray(o,c);const h=r.x*Math.abs(ws.x)+r.y*Math.abs(ws.y)+r.z*Math.abs(ws.z),p=e.dot(ws),d=n.dot(ws),g=a.dot(ws);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const zM=new xa,Ko=new j,Lh=new j;class Hi{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):zM.setFromPoints(e).getCenter(a);let r=0;for(let c=0,u=e.length;c<u;c++)r=Math.max(r,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const n=Ko.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(Ko,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(Lh)),this.expandByPoint(Ko.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const la=new j,Nh=new j,Uc=new j,Ka=new j,Oh=new j,Lc=new j,Ph=new j;class pu{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,la)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=la.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(la.copy(this.origin).addScaledVector(this.direction,n),la.distanceToSquared(e))}distanceSqToSegment(e,n,a,r){Nh.copy(e).add(n).multiplyScalar(.5),Uc.copy(n).sub(e).normalize(),Ka.copy(this.origin).sub(Nh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Uc),h=Ka.dot(this.direction),p=-Ka.dot(Uc),d=Ka.lengthSq(),g=Math.abs(1-u*u);let _,v,y,E;if(g>0)if(_=u*p-h,v=u*h-p,E=c*g,_>=0)if(v>=-E)if(v<=E){const T=1/g;_*=T,v*=T,y=_*(_+u*v+2*h)+v*(u*_+v+2*p)+d}else v=c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*p)+d;else v=-c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*p)+d;else v<=-E?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-p),c),y=-_*_+v*(v+2*p)+d):v<=E?(_=0,v=Math.min(Math.max(-c,-p),c),y=v*(v+2*p)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-p),c),y=-_*_+v*(v+2*p)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Nh).addScaledVector(Uc,v),y}intersectSphere(e,n){la.subVectors(e.center,this.origin);const a=la.dot(this.direction),r=la.dot(la)-a*a,c=e.radius*e.radius;if(r>c)return null;const u=Math.sqrt(c-r),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,r,c,u,h,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(a=(e.min.x-v.x)*d,r=(e.max.x-v.x)*d):(a=(e.max.x-v.x)*d,r=(e.min.x-v.x)*d),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),a>u||c>r||((c>a||isNaN(a))&&(a=c),(u<r||isNaN(r))&&(r=u),_>=0?(h=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),a>p||h>r)||((h>a||a!==a)&&(a=h),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(e){return this.intersectBox(e,la)!==null}intersectTriangle(e,n,a,r,c){Oh.subVectors(n,e),Lc.subVectors(a,e),Ph.crossVectors(Oh,Lc);let u=this.direction.dot(Ph),h;if(u>0){if(r)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Ka.subVectors(this.origin,e);const p=h*this.direction.dot(Lc.crossVectors(Ka,Lc));if(p<0)return null;const d=h*this.direction.dot(Oh.cross(Ka));if(d<0||p+d>u)return null;const g=-h*Ka.dot(Ph);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,n,a,r,c,u,h,p,d,g,_,v,y,E,T,S){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,h,p,d,g,_,v,y,E,T,S)}set(e,n,a,r,c,u,h,p,d,g,_,v,y,E,T,S){const x=this.elements;return x[0]=e,x[4]=n,x[8]=a,x[12]=r,x[1]=c,x[5]=u,x[9]=h,x[13]=p,x[2]=d,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),c=1/Er.setFromMatrixColumn(e,1).length(),u=1/Er.setFromMatrixColumn(e,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,r=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(r),d=Math.sin(r),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,y=u*_,E=h*g,T=h*_;n[0]=p*g,n[4]=-p*_,n[8]=d,n[1]=y+E*d,n[5]=v-T*d,n[9]=-h*p,n[2]=T-v*d,n[6]=E+y*d,n[10]=u*p}else if(e.order==="YXZ"){const v=p*g,y=p*_,E=d*g,T=d*_;n[0]=v+T*h,n[4]=E*h-y,n[8]=u*d,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=y*h-E,n[6]=T+v*h,n[10]=u*p}else if(e.order==="ZXY"){const v=p*g,y=p*_,E=d*g,T=d*_;n[0]=v-T*h,n[4]=-u*_,n[8]=E+y*h,n[1]=y+E*h,n[5]=u*g,n[9]=T-v*h,n[2]=-u*d,n[6]=h,n[10]=u*p}else if(e.order==="ZYX"){const v=u*g,y=u*_,E=h*g,T=h*_;n[0]=p*g,n[4]=E*d-y,n[8]=v*d+T,n[1]=p*_,n[5]=T*d+v,n[9]=y*d-E,n[2]=-d,n[6]=h*p,n[10]=u*p}else if(e.order==="YZX"){const v=u*p,y=u*d,E=h*p,T=h*d;n[0]=p*g,n[4]=T-v*_,n[8]=E*_+y,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-d*g,n[6]=y*_+E,n[10]=v-T*_}else if(e.order==="XZY"){const v=u*p,y=u*d,E=h*p,T=h*d;n[0]=p*g,n[4]=-_,n[8]=d*g,n[1]=v*_+T,n[5]=u*g,n[9]=y*_-E,n[2]=E*_-y,n[6]=h*g,n[10]=T*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HM,e,GM)}lookAt(e,n,a){const r=this.elements;return ni.subVectors(e,n),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Za.crossVectors(a,ni),Za.lengthSq()===0&&(Math.abs(a.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Za.crossVectors(a,ni)),Za.normalize(),Nc.crossVectors(ni,Za),r[0]=Za.x,r[4]=Nc.x,r[8]=ni.x,r[1]=Za.y,r[5]=Nc.y,r[9]=ni.y,r[2]=Za.z,r[6]=Nc.z,r[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],h=a[4],p=a[8],d=a[12],g=a[1],_=a[5],v=a[9],y=a[13],E=a[2],T=a[6],S=a[10],x=a[14],N=a[3],L=a[7],w=a[11],F=a[15],H=r[0],B=r[4],X=r[8],D=r[12],C=r[1],V=r[5],le=r[9],re=r[13],_e=r[2],he=r[6],I=r[10],Z=r[14],Y=r[3],Me=r[7],U=r[11],ee=r[15];return c[0]=u*H+h*C+p*_e+d*Y,c[4]=u*B+h*V+p*he+d*Me,c[8]=u*X+h*le+p*I+d*U,c[12]=u*D+h*re+p*Z+d*ee,c[1]=g*H+_*C+v*_e+y*Y,c[5]=g*B+_*V+v*he+y*Me,c[9]=g*X+_*le+v*I+y*U,c[13]=g*D+_*re+v*Z+y*ee,c[2]=E*H+T*C+S*_e+x*Y,c[6]=E*B+T*V+S*he+x*Me,c[10]=E*X+T*le+S*I+x*U,c[14]=E*D+T*re+S*Z+x*ee,c[3]=N*H+L*C+w*_e+F*Y,c[7]=N*B+L*V+w*he+F*Me,c[11]=N*X+L*le+w*I+F*U,c[15]=N*D+L*re+w*Z+F*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],r=e[8],c=e[12],u=e[1],h=e[5],p=e[9],d=e[13],g=e[2],_=e[6],v=e[10],y=e[14],E=e[3],T=e[7],S=e[11],x=e[15];return E*(+c*p*_-r*d*_-c*h*v+a*d*v+r*h*y-a*p*y)+T*(+n*p*y-n*d*v+c*u*v-r*u*y+r*d*g-c*p*g)+S*(+n*d*_-n*h*y-c*u*_+a*u*y+c*h*g-a*d*g)+x*(-r*h*g-n*p*_+n*h*v+r*u*_-a*u*v+a*p*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8],_=e[9],v=e[10],y=e[11],E=e[12],T=e[13],S=e[14],x=e[15],N=_*S*d-T*v*d+T*p*y-h*S*y-_*p*x+h*v*x,L=E*v*d-g*S*d-E*p*y+u*S*y+g*p*x-u*v*x,w=g*T*d-E*_*d+E*h*y-u*T*y-g*h*x+u*_*x,F=E*_*p-g*T*p-E*h*v+u*T*v+g*h*S-u*_*S,H=n*N+a*L+r*w+c*F;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return e[0]=N*B,e[1]=(T*v*c-_*S*c-T*r*y+a*S*y+_*r*x-a*v*x)*B,e[2]=(h*S*c-T*p*c+T*r*d-a*S*d-h*r*x+a*p*x)*B,e[3]=(_*p*c-h*v*c-_*r*d+a*v*d+h*r*y-a*p*y)*B,e[4]=L*B,e[5]=(g*S*c-E*v*c+E*r*y-n*S*y-g*r*x+n*v*x)*B,e[6]=(E*p*c-u*S*c-E*r*d+n*S*d+u*r*x-n*p*x)*B,e[7]=(u*v*c-g*p*c+g*r*d-n*v*d-u*r*y+n*p*y)*B,e[8]=w*B,e[9]=(E*_*c-g*T*c-E*a*y+n*T*y+g*a*x-n*_*x)*B,e[10]=(u*T*c-E*h*c+E*a*d-n*T*d-u*a*x+n*h*x)*B,e[11]=(g*h*c-u*_*c-g*a*d+n*_*d+u*a*y-n*h*y)*B,e[12]=F*B,e[13]=(g*T*r-E*_*r+E*a*v-n*T*v-g*a*S+n*_*S)*B,e[14]=(E*h*r-u*T*r-E*a*p+n*T*p+u*a*S-n*h*S)*B,e[15]=(u*_*r-g*h*r+g*a*p-n*_*p-u*a*v+n*h*v)*B,this}scale(e){const n=this.elements,a=e.x,r=e.y,c=e.z;return n[0]*=a,n[4]*=r,n[8]*=c,n[1]*=a,n[5]*=r,n[9]*=c,n[2]*=a,n[6]*=r,n[10]*=c,n[3]*=a,n[7]*=r,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),r=Math.sin(n),c=1-a,u=e.x,h=e.y,p=e.z,d=c*u,g=c*h;return this.set(d*u+a,d*h-r*p,d*p+r*h,0,d*h+r*p,g*h+a,g*p-r*u,0,d*p-r*h,g*p+r*u,c*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,r,c,u){return this.set(1,a,c,0,e,1,u,0,n,r,1,0,0,0,0,1),this}compose(e,n,a){const r=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,d=c+c,g=u+u,_=h+h,v=c*d,y=c*g,E=c*_,T=u*g,S=u*_,x=h*_,N=p*d,L=p*g,w=p*_,F=a.x,H=a.y,B=a.z;return r[0]=(1-(T+x))*F,r[1]=(y+w)*F,r[2]=(E-L)*F,r[3]=0,r[4]=(y-w)*H,r[5]=(1-(v+x))*H,r[6]=(S+N)*H,r[7]=0,r[8]=(E+L)*B,r[9]=(S-N)*B,r[10]=(1-(v+T))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,a){const r=this.elements;let c=Er.set(r[0],r[1],r[2]).length();const u=Er.set(r[4],r[5],r[6]).length(),h=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(c=-c),e.x=r[12],e.y=r[13],e.z=r[14],xi.copy(this);const d=1/c,g=1/u,_=1/h;return xi.elements[0]*=d,xi.elements[1]*=d,xi.elements[2]*=d,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,n.setFromRotationMatrix(xi),a.x=c,a.y=u,a.z=h,this}makePerspective(e,n,a,r,c,u,h=ga){const p=this.elements,d=2*c/(n-e),g=2*c/(a-r),_=(n+e)/(n-e),v=(a+r)/(a-r);let y,E;if(h===ga)y=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(h===uu)y=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=d,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,r,c,u,h=ga){const p=this.elements,d=1/(n-e),g=1/(a-r),_=1/(u-c),v=(n+e)*d,y=(a+r)*g;let E,T;if(h===ga)E=(u+c)*_,T=-2*_;else if(h===uu)E=c*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*d,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Er=new j,xi=new ot,HM=new j(0,0,0),GM=new j(1,1,1),Za=new j,Nc=new j,ni=new j,x0=new ot,S0=new os;class zi{constructor(e=0,n=0,a=0,r=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,r=this._order){return this._x=e,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const r=e.elements,c=r[0],u=r[4],h=r[8],p=r[1],d=r[5],g=r[9],_=r[2],v=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return x0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(x0,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return S0.setFromEuler(this),this.setFromQuaternion(S0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class kv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VM=0;const M0=new j,Tr=new os,ca=new ot,Oc=new j,Zo=new j,kM=new j,XM=new os,E0=new j(1,0,0),T0=new j(0,1,0),b0=new j(0,0,1),A0={type:"added"},WM={type:"removed"},br={type:"childadded",child:null},Ih={type:"childremoved",child:null};class Zt extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new j,n=new zi,a=new os,r=new j(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new rt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Tr.setFromAxisAngle(e,n),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,n){return Tr.setFromAxisAngle(e,n),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(E0,e)}rotateY(e){return this.rotateOnAxis(T0,e)}rotateZ(e){return this.rotateOnAxis(b0,e)}translateOnAxis(e,n){return M0.copy(e).applyQuaternion(this.quaternion),this.position.add(M0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(E0,e)}translateY(e){return this.translateOnAxis(T0,e)}translateZ(e){return this.translateOnAxis(b0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Oc.copy(e):Oc.set(e,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Zo,Oc,this.up):ca.lookAt(Oc,Zo,this.up),this.quaternion.setFromRotationMatrix(ca),r&&(ca.extractRotation(r.matrixWorld),Tr.setFromRotationMatrix(ca),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(A0),br.child=e,this.dispatchEvent(br),br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(WM),Ih.child=e,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(A0),br.child=e,this.dispatchEvent(br),br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,kM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,XM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(h=>({...h})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(e.materials,this.material[p]));r.material=h}else r.material=c(e.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];r.animations.push(c(e.animations,p))}}if(n){const h=u(e.geometries),p=u(e.materials),d=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),y=u(e.animations),E=u(e.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=r,a;function u(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new j(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new j,ua=new j,Bh=new j,fa=new j,Ar=new j,Rr=new j,R0=new j,Fh=new j,zh=new j,Hh=new j,Gh=new Ct,Vh=new Ct,kh=new Ct;class Ti{constructor(e=new j,n=new j,a=new j){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,r){r.subVectors(a,n),Si.subVectors(e,n),r.cross(Si);const c=r.lengthSq();return c>0?r.multiplyScalar(1/Math.sqrt(c)):r.set(0,0,0)}static getBarycoord(e,n,a,r,c){Si.subVectors(r,n),ua.subVectors(a,n),Bh.subVectors(e,n);const u=Si.dot(Si),h=Si.dot(ua),p=Si.dot(Bh),d=ua.dot(ua),g=ua.dot(Bh),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(d*p-h*g)*v,E=(u*g-h*p)*v;return c.set(1-y-E,E,y)}static containsPoint(e,n,a,r){return this.getBarycoord(e,n,a,r,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(e,n,a,r,c,u,h,p){return this.getBarycoord(e,n,a,r,fa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,fa.x),p.addScaledVector(u,fa.y),p.addScaledVector(h,fa.z),p)}static getInterpolatedAttribute(e,n,a,r,c,u){return Gh.setScalar(0),Vh.setScalar(0),kh.setScalar(0),Gh.fromBufferAttribute(e,n),Vh.fromBufferAttribute(e,a),kh.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(Gh,c.x),u.addScaledVector(Vh,c.y),u.addScaledVector(kh,c.z),u}static isFrontFacing(e,n,a,r){return Si.subVectors(a,n),ua.subVectors(e,n),Si.cross(ua).dot(r)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,r){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,a,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),Si.cross(ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,r,c){return Ti.getInterpolation(e,this.a,this.b,this.c,n,a,r,c)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,r=this.b,c=this.c;let u,h;Ar.subVectors(r,a),Rr.subVectors(c,a),Fh.subVectors(e,a);const p=Ar.dot(Fh),d=Rr.dot(Fh);if(p<=0&&d<=0)return n.copy(a);zh.subVectors(e,r);const g=Ar.dot(zh),_=Rr.dot(zh);if(g>=0&&_<=g)return n.copy(r);const v=p*_-g*d;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(Ar,u);Hh.subVectors(e,c);const y=Ar.dot(Hh),E=Rr.dot(Hh);if(E>=0&&y<=E)return n.copy(c);const T=y*d-p*E;if(T<=0&&d>=0&&E<=0)return h=d/(d-E),n.copy(a).addScaledVector(Rr,h);const S=g*E-y*_;if(S<=0&&_-g>=0&&y-E>=0)return R0.subVectors(c,r),h=(_-g)/(_-g+(y-E)),n.copy(r).addScaledVector(R0,h);const x=1/(S+T+v);return u=T*x,h=v*x,n.copy(a).addScaledVector(Ar,u).addScaledVector(Rr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function Xh(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class at{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,r=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Tt.colorSpaceToWorking(this,r),this}setHSL(e,n,a,r=Tt.workingColorSpace){if(e=cp(e,1),n=_t(n,0,1),a=_t(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Xh(u,c,e+1/3),this.g=Xh(u,c,e),this.b=Xh(u,c,e-1/3)}return Tt.colorSpaceToWorking(this,r),this}setStyle(e,n=wn){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=r[1],h=r[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=r[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=wn){const a=Xv[e.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return Tt.workingToColorSpace(Nn.copy(this),e),Math.round(_t(Nn.r*255,0,255))*65536+Math.round(_t(Nn.g*255,0,255))*256+Math.round(_t(Nn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(Nn.copy(this),n);const a=Nn.r,r=Nn.g,c=Nn.b,u=Math.max(a,r,c),h=Math.min(a,r,c);let p,d;const g=(h+u)/2;if(h===u)p=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case a:p=(r-c)/_+(r<c?6:0);break;case r:p=(c-a)/_+2;break;case c:p=(a-r)/_+4;break}p/=6}return e.h=p,e.s=d,e.l=g,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(Nn.copy(this),n),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=wn){Tt.workingToColorSpace(Nn.copy(this),e);const n=Nn.r,a=Nn.g,r=Nn.b;return e!==wn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,n,a){return this.getHSL(Qa),this.setHSL(Qa.h+e,Qa.s+n,Qa.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Qa),e.getHSL(Pc);const a=rl(Qa.h,Pc.h,n),r=rl(Qa.s,Pc.s,n),c=rl(Qa.l,Pc.l,n);return this.setHSL(a,r,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,r=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*r,this.g=c[1]*n+c[4]*a+c[7]*r,this.b=c[2]*n+c[5]*a+c[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new at;at.NAMES=Xv;let qM=0;class Bi extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Pr,this.side=ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=fd,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(a.blending=this.blending),this.side!==ya&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==ud&&(a.blendSrc=this.blendSrc),this.blendDst!==fd&&(a.blendDst=this.blendDst),this.blendEquation!==Is&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=r(e.textures),u=r(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let c=0;c!==r;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class is extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new j,Ic=new yt;let YM=0;class zn{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=jd,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let r=0,c=this.itemSize;r<c;r++)this.array[e+r]=n.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Ic.fromBufferAttribute(this,n),Ic.applyMatrix3(e),this.setXY(n,Ic.x,Ic.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)on.fromBufferAttribute(this,n),on.applyMatrix3(e),this.setXYZ(n,on.x,on.y,on.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)on.fromBufferAttribute(this,n),on.applyMatrix4(e),this.setXYZ(n,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)on.fromBufferAttribute(this,n),on.applyNormalMatrix(e),this.setXYZ(n,on.x,on.y,on.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)on.fromBufferAttribute(this,n),on.transformDirection(e),this.setXYZ(n,on.x,on.y,on.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Ei(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Pt(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ei(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ei(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ei(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ei(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),a=Pt(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,r){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),a=Pt(a,this.array),r=Pt(r,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),a=Pt(a,this.array),r=Pt(r,this.array),c=Pt(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jd&&(e.usage=this.usage),e}}class Wv extends zn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class qv extends zn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class mi extends zn{constructor(e,n,a){super(new Float32Array(e),n,a)}}let jM=0;const hi=new ot,Wh=new Zt,wr=new j,ii=new xa,Qo=new xa,xn=new j;class Ri extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gv(e)?qv:Wv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new rt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,n,a){return hi.makeTranslation(e,n,a),this.applyMatrix4(hi),this}scale(e,n,a){return hi.makeScale(e,n,a),this.applyMatrix4(hi),this}lookAt(e){return Wh.lookAt(e),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,c=e.length;r<c;r++){const u=e[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new mi(a,3))}else{const a=Math.min(e.length,n.count);for(let r=0;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){const c=n[a];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const a=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Qo.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(ii.min,Qo.min),ii.expandByPoint(xn),xn.addVectors(ii.max,Qo.max),ii.expandByPoint(xn)):(ii.expandByPoint(Qo.min),ii.expandByPoint(Qo.max))}ii.getCenter(a);let r=0;for(let c=0,u=e.count;c<u;c++)xn.fromBufferAttribute(e,c),r=Math.max(r,a.distanceToSquared(xn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)xn.fromBufferAttribute(h,d),p&&(wr.fromBufferAttribute(e,d),xn.add(wr)),r=Math.max(r,a.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let X=0;X<a.count;X++)h[X]=new j,p[X]=new j;const d=new j,g=new j,_=new j,v=new yt,y=new yt,E=new yt,T=new j,S=new j;function x(X,D,C){d.fromBufferAttribute(a,X),g.fromBufferAttribute(a,D),_.fromBufferAttribute(a,C),v.fromBufferAttribute(c,X),y.fromBufferAttribute(c,D),E.fromBufferAttribute(c,C),g.sub(d),_.sub(d),y.sub(v),E.sub(v);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(V),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(V),h[X].add(T),h[D].add(T),h[C].add(T),p[X].add(S),p[D].add(S),p[C].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let X=0,D=N.length;X<D;++X){const C=N[X],V=C.start,le=C.count;for(let re=V,_e=V+le;re<_e;re+=3)x(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const L=new j,w=new j,F=new j,H=new j;function B(X){F.fromBufferAttribute(r,X),H.copy(F);const D=h[X];L.copy(D),L.sub(F.multiplyScalar(F.dot(D))).normalize(),w.crossVectors(H,D);const V=w.dot(p[X])<0?-1:1;u.setXYZW(X,L.x,L.y,L.z,V)}for(let X=0,D=N.length;X<D;++X){const C=N[X],V=C.start,le=C.count;for(let re=V,_e=V+le;re<_e;re+=3)B(e.getX(re+0)),B(e.getX(re+1)),B(e.getX(re+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new zn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const r=new j,c=new j,u=new j,h=new j,p=new j,d=new j,g=new j,_=new j;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);r.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(r,c),g.cross(_),h.fromBufferAttribute(a,E),p.fromBufferAttribute(a,T),d.fromBufferAttribute(a,S),h.add(g),p.add(g),d.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=n.count;v<y;v+=3)r.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(r,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)xn.fromBufferAttribute(e,n),xn.normalize(),e.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function e(h,p){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(p.length*g);let y=0,E=0;for(let T=0,S=p.length;T<S;T++){h.isInterleavedBufferAttribute?y=p[T]*h.data.stride+h.offset:y=p[T]*g;for(let x=0;x<g;x++)v[E++]=d[y++]}return new zn(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ri,a=this.index.array,r=this.attributes;for(const h in r){const p=r[h],d=e(p,a);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],y=e(v,a);p.push(y)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];e.data.attributes[p]=d.toJSON(e.data)}const r={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,v=d.length;_<v;_++){const y=d[_];g.push(y.toJSON(e.data))}g.length>0&&(r[p]=g,c=!0)}c&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const r=e.attributes;for(const d in r){const g=r[d];this.setAttribute(d,g.clone(n))}const c=e.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const w0=new ot,Cs=new pu,Bc=new Hi,C0=new j,Fc=new j,zc=new j,Hc=new j,qh=new j,Gc=new j,D0=new j,Vc=new j;class qn extends Zt{constructor(e=new Ri,n=new is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,r=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,e);const h=this.morphTargetInfluences;if(c&&h){Gc.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=h[p],_=c[p];g!==0&&(qh.fromBufferAttribute(_,e),u?Gc.addScaledVector(qh,g):Gc.addScaledVector(qh.sub(n),g))}n.add(Gc)}return n}raycast(e,n){const a=this.geometry,r=this.material,c=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Bc.copy(a.boundingSphere),Bc.applyMatrix4(c),Cs.copy(e.ray).recast(e.near),!(Bc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Bc,C0)===null||Cs.origin.distanceToSquared(C0)>(e.far-e.near)**2))&&(w0.copy(c).invert(),Cs.copy(e.ray).applyMatrix4(w0),!(a.boundingBox!==null&&Cs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Cs)))}_computeIntersections(e,n,a){let r;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const S=v[E],x=u[S.materialIndex],N=Math.max(S.start,y.start),L=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let w=N,F=L;w<F;w+=3){const H=h.getX(w),B=h.getX(w+1),X=h.getX(w+2);r=kc(this,x,e,a,d,g,_,H,B,X),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const E=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let S=E,x=T;S<x;S+=3){const N=h.getX(S),L=h.getX(S+1),w=h.getX(S+2);r=kc(this,u,e,a,d,g,_,N,L,w),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const S=v[E],x=u[S.materialIndex],N=Math.max(S.start,y.start),L=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let w=N,F=L;w<F;w+=3){const H=w,B=w+1,X=w+2;r=kc(this,x,e,a,d,g,_,H,B,X),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const E=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);for(let S=E,x=T;S<x;S+=3){const N=S,L=S+1,w=S+2;r=kc(this,u,e,a,d,g,_,N,L,w),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}}}function KM(o,e,n,a,r,c,u,h){let p;if(e.side===Yn?p=a.intersectTriangle(u,c,r,!0,h):p=a.intersectTriangle(r,c,u,e.side===ya,h),p===null)return null;Vc.copy(h),Vc.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(Vc);return d<n.near||d>n.far?null:{distance:d,point:Vc.clone(),object:o}}function kc(o,e,n,a,r,c,u,h,p,d){o.getVertexPosition(h,Fc),o.getVertexPosition(p,zc),o.getVertexPosition(d,Hc);const g=KM(o,e,n,a,Fc,zc,Hc,D0);if(g){const _=new j;Ti.getBarycoord(D0,Fc,zc,Hc,_),r&&(g.uv=Ti.getInterpolatedAttribute(r,h,p,d,_,new yt)),c&&(g.uv1=Ti.getInterpolatedAttribute(c,h,p,d,_,new yt)),u&&(g.normal=Ti.getInterpolatedAttribute(u,h,p,d,_,new j),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:d,normal:new j,materialIndex:0};Ti.getNormal(Fc,zc,Hc,v.normal),g.face=v,g.barycoord=_}return g}class gl extends Ri{constructor(e=1,n=1,a=1,r=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:r,heightSegments:c,depthSegments:u};const h=this;r=Math.floor(r),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,a,n,e,u,c,0),E("z","y","x",1,-1,a,n,-e,u,c,1),E("x","z","y",1,1,e,a,n,r,u,2),E("x","z","y",1,-1,e,a,-n,r,u,3),E("x","y","z",1,-1,e,n,a,r,c,4),E("x","y","z",-1,-1,e,n,-a,r,c,5),this.setIndex(p),this.setAttribute("position",new mi(d,3)),this.setAttribute("normal",new mi(g,3)),this.setAttribute("uv",new mi(_,2));function E(T,S,x,N,L,w,F,H,B,X,D){const C=w/B,V=F/X,le=w/2,re=F/2,_e=H/2,he=B+1,I=X+1;let Z=0,Y=0;const Me=new j;for(let U=0;U<I;U++){const ee=U*V-re;for(let ve=0;ve<he;ve++){const xe=ve*C-le;Me[T]=xe*N,Me[S]=ee*L,Me[x]=_e,d.push(Me.x,Me.y,Me.z),Me[T]=0,Me[S]=0,Me[x]=H>0?1:-1,g.push(Me.x,Me.y,Me.z),_.push(ve/B),_.push(1-U/X),Z+=1}}for(let U=0;U<X;U++)for(let ee=0;ee<B;ee++){const ve=v+ee+he*U,xe=v+ee+he*(U+1),J=v+(ee+1)+he*(U+1),pe=v+(ee+1)+he*U;p.push(ve,xe,pe),p.push(xe,J,pe),Y+=6}h.addGroup(y,Y,D),y+=Y,v+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xr(o){const e={};for(const n in o){e[n]={};for(const a in o[n]){const r=o[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=r.clone():Array.isArray(r)?e[n][a]=r.slice():e[n][a]=r}}return e}function In(o){const e={};for(let n=0;n<o.length;n++){const a=Xr(o[n]);for(const r in a)e[r]=a[r]}return e}function ZM(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Yv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const QM={clone:Xr,merge:In};var JM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$M=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rs extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JM,this.fragmentShader=$M,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=ZM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class jv extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ga}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new j,U0=new yt,L0=new yt;class Bn extends jv{constructor(e=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,n){return this.getViewBounds(e,U0,L0),n.subVectors(L0,U0)}setViewOffset(e,n,a,r,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sl*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,c=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*r/p,n-=u.offsetY*a/d,r*=u.width/p,a*=u.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+r,n,n-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cr=-90,Dr=1;class eE extends Zt{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(Cr,Dr,e,n);r.layers=this.layers,this.add(r);const c=new Bn(Cr,Dr,e,n);c.layers=this.layers,this.add(c);const u=new Bn(Cr,Dr,e,n);u.layers=this.layers,this.add(u);const h=new Bn(Cr,Dr,e,n);h.layers=this.layers,this.add(h);const p=new Bn(Cr,Dr,e,n);p.layers=this.layers,this.add(p);const d=new Bn(Cr,Dr,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,r,c,u,h,p]=n;for(const d of n)this.remove(d);if(e===ga)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===uu)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,d,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,r),e.render(n,c),e.setRenderTarget(a,1,r),e.render(n,u),e.setRenderTarget(a,2,r),e.render(n,h),e.setRenderTarget(a,3,r),e.render(n,p),e.setRenderTarget(a,4,r),e.render(n,d),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,r),e.render(n,g),e.setRenderTarget(_,v,y),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class Kv extends Sn{constructor(e=[],n=Hr,a,r,c,u,h,p,d,g){super(e,n,a,r,c,u,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tE extends Hs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new Kv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gl(5,5,5),c=new rs({name:"CubemapFromEquirect",uniforms:Xr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Yn,blending:as});c.uniforms.tEquirect.value=n;const u=new qn(r,c),h=n.minFilter;return n.minFilter===ma&&(n.minFilter=ai),new eE(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,r=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,r);e.setRenderTarget(c)}}class Fs extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nE={type:"move"};class Yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let r=null,c=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const T of e.hand.values()){const S=n.getJointPose(T,a),x=this._getHandJoint(d,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;d.inputState.pinching&&v>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(r=n.getPose(e.targetRaySpace,a),r===null&&c!==null&&(r=c),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(nE)))}return h!==null&&(h.visible=r!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Fs;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class iE extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class aE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=jd,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let r=0,c=this.stride;r<c;r++)this.array[e+r]=n.array[a+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new j;class fp{constructor(e,n,a,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)Pn.fromBufferAttribute(this,n),Pn.applyMatrix4(e),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Pn.fromBufferAttribute(this,n),Pn.applyNormalMatrix(e),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Pn.fromBufferAttribute(this,n),Pn.transformDirection(e),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Ei(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Pt(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ei(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ei(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ei(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ei(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Pt(n,this.array),a=Pt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Pt(n,this.array),a=Pt(a,this.array),r=Pt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Pt(n,this.array),a=Pt(a,this.array),r=Pt(r,this.array),c=Pt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this.data.array[e+3]=c,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return new zn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const N0=new j,O0=new Ct,P0=new Ct,sE=new j,I0=new ot,Xc=new j,jh=new Hi,B0=new ot,Kh=new pu;class rE extends qn{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=c0,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xa),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,Xc),this.boundingBox.expandByPoint(Xc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hi),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,Xc),this.boundingSphere.expandByPoint(Xc)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,r=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jh.copy(this.boundingSphere),jh.applyMatrix4(r),e.ray.intersectsSphere(jh)!==!1&&(B0.copy(r).invert(),Kh.copy(e.ray).applyMatrix4(B0),!(this.boundingBox!==null&&Kh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,Kh)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ct,n=this.geometry.attributes.skinWeight;for(let a=0,r=n.count;a<r;a++){e.fromBufferAttribute(n,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===c0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$S?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,r=this.geometry;O0.fromBufferAttribute(r.attributes.skinIndex,e),P0.fromBufferAttribute(r.attributes.skinWeight,e),N0.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let c=0;c<4;c++){const u=P0.getComponent(c);if(u!==0){const h=O0.getComponent(c);I0.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),n.addScaledVector(sE.copy(N0).applyMatrix4(I0),u)}}return n.applyMatrix4(this.bindMatrixInverse)}}class Zv extends Zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qv extends Sn{constructor(e=null,n=1,a=1,r,c,u,h,p,d=Fn,g=Fn,_,v){super(null,u,h,p,d,g,r,c,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const F0=new ot,oE=new ot;class hp{constructor(e=[],n=[]){this.uuid=Ai(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,r=this.bones.length;a<r;a++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new ot;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,r=this.boneTexture;for(let c=0,u=e.length;c<u;c++){const h=e[c]?e[c].matrixWorld:oE;F0.multiplyMatrices(h,n[c]),F0.toArray(a,c*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new hp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new Qv(n,e,e,pi,bi);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,r=e.bones.length;a<r;a++){const c=e.bones[a];let u=n[c];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",c),u=new Zv),this.bones.push(u),this.boneInverses.push(new ot().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let r=0,c=n.length;r<c;r++){const u=n[r];e.bones.push(u.uuid);const h=a[r];e.boneInverses.push(h.toArray())}return e}}class Kd extends zn{constructor(e,n,a,r=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ur=new ot,z0=new ot,Wc=[],H0=new xa,lE=new ot,Jo=new qn,$o=new Hi;class cE extends qn{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Kd(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<a;r++)this.setMatrixAt(r,lE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new xa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Ur),H0.copy(e.boundingBox).applyMatrix4(Ur),this.boundingBox.union(H0)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Ur),$o.copy(e.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union($o)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,r=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let h=0;h<a.length;h++)a[h]=r[u+h]}raycast(e,n){const a=this.matrixWorld,r=this.count;if(Jo.geometry=this.geometry,Jo.material=this.material,Jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(a),e.ray.intersectsSphere($o)!==!1))for(let c=0;c<r;c++){this.getMatrixAt(c,Ur),z0.multiplyMatrices(a,Ur),Jo.matrixWorld=z0,Jo.raycast(e,Wc);for(let u=0,h=Wc.length;u<h;u++){const p=Wc[u];p.instanceId=c,p.object=this,n.push(p)}Wc.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Kd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const a=n.morphTargetInfluences,r=a.length+1;this.morphTexture===null&&(this.morphTexture=new Qv(new Float32Array(r*this.count),r,this.count,sp,bi));const c=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const h=this.geometry.morphTargetsRelative?1:1-u,p=r*e;c[p]=h,c.set(a,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zh=new j,uE=new j,fE=new rt;class Os{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,r){return this.normal.set(e,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const r=Zh.subVectors(a,n).cross(uE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(Zh),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/r;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||fE.getNormalMatrix(e),r=this.coplanarPoint(Zh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new Hi,hE=new yt(.5,.5),qc=new j;class dp{constructor(e=new Os,n=new Os,a=new Os,r=new Os,c=new Os,u=new Os){this.planes=[e,n,a,r,c,u]}set(e,n,a,r,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(r),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ga){const a=this.planes,r=e.elements,c=r[0],u=r[1],h=r[2],p=r[3],d=r[4],g=r[5],_=r[6],v=r[7],y=r[8],E=r[9],T=r[10],S=r[11],x=r[12],N=r[13],L=r[14],w=r[15];if(a[0].setComponents(p-c,v-d,S-y,w-x).normalize(),a[1].setComponents(p+c,v+d,S+y,w+x).normalize(),a[2].setComponents(p+u,v+g,S+E,w+N).normalize(),a[3].setComponents(p-u,v-g,S-E,w-N).normalize(),a[4].setComponents(p-h,v-_,S-T,w-L).normalize(),n===ga)a[5].setComponents(p+h,v+_,S+T,w+L).normalize();else if(n===uu)a[5].setComponents(h,_,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);const n=hE.distanceTo(e.center);return Ds.radius=.7071067811865476+n,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const n=this.planes,a=e.center,r=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(qc.x=r.normal.x>0?e.max.x:e.min.x,qc.y=r.normal.y>0?e.max.y:e.min.y,qc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jv extends Bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fu=new j,hu=new j,G0=new ot,el=new pu,Yc=new Hi,Qh=new j,V0=new j;class pp extends Zt{constructor(e=new Ri,n=new Jv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let r=1,c=n.count;r<c;r++)fu.fromBufferAttribute(n,r-1),hu.fromBufferAttribute(n,r),a[r]=a[r-1],a[r]+=fu.distanceTo(hu);e.setAttribute("lineDistance",new mi(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Yc.copy(a.boundingSphere),Yc.applyMatrix4(r),Yc.radius+=c,e.ray.intersectsSphere(Yc)===!1)return;G0.copy(r).invert(),el.copy(e.ray).applyMatrix4(G0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,g=a.index,v=a.attributes.position;if(g!==null){const y=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let T=y,S=E-1;T<S;T+=d){const x=g.getX(T),N=g.getX(T+1),L=jc(this,e,el,p,x,N,T);L&&n.push(L)}if(this.isLineLoop){const T=g.getX(E-1),S=g.getX(y),x=jc(this,e,el,p,T,S,E-1);x&&n.push(x)}}else{const y=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let T=y,S=E-1;T<S;T+=d){const x=jc(this,e,el,p,T,T+1,T);x&&n.push(x)}if(this.isLineLoop){const T=jc(this,e,el,p,E-1,y,E-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function jc(o,e,n,a,r,c,u){const h=o.geometry.attributes.position;if(fu.fromBufferAttribute(h,r),hu.fromBufferAttribute(h,c),n.distanceSqToSegment(fu,hu,Qh,V0)>a)return;Qh.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(Qh);if(!(d<e.near||d>e.far))return{distance:d,point:V0.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const k0=new j,X0=new j;class dE extends pp{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let r=0,c=n.count;r<c;r+=2)k0.fromBufferAttribute(n,r),X0.fromBufferAttribute(n,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+k0.distanceTo(X0);e.setAttribute("lineDistance",new mi(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pE extends pp{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class $v extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const W0=new ot,Zd=new pu,Kc=new Hi,Zc=new j;class mE extends Zt{constructor(e=new Ri,n=new $v){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Kc.copy(a.boundingSphere),Kc.applyMatrix4(r),Kc.radius+=c,e.ray.intersectsSphere(Kc)===!1)return;W0.copy(r).invert(),Zd.copy(e.ray).applyMatrix4(W0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=a.index,_=a.attributes.position;if(d!==null){const v=Math.max(0,u.start),y=Math.min(d.count,u.start+u.count);for(let E=v,T=y;E<T;E++){const S=d.getX(E);Zc.fromBufferAttribute(_,S),q0(Zc,S,p,r,e,n,this)}}else{const v=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let E=v,T=y;E<T;E++)Zc.fromBufferAttribute(_,E),q0(Zc,E,p,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function q0(o,e,n,a,r,c,u){const h=Zd.distanceSqToPoint(o);if(h<n){const p=new j;Zd.closestPointToPoint(o,p),p.applyMatrix4(a);const d=r.ray.origin.distanceTo(p);if(d<r.near||d>r.far)return;c.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class ey extends Sn{constructor(e,n,a=zs,r,c,u,h=Fn,p=Fn,d,g=ul,_=1){if(g!==ul&&g!==fl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,r,c,u,h,p,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new up(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class mu extends Ri{constructor(e=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:r};const c=e/2,u=n/2,h=Math.floor(a),p=Math.floor(r),d=h+1,g=p+1,_=e/h,v=n/p,y=[],E=[],T=[],S=[];for(let x=0;x<g;x++){const N=x*v-u;for(let L=0;L<d;L++){const w=L*_-c;E.push(w,-N,0),T.push(0,0,1),S.push(L/h),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let N=0;N<h;N++){const L=N+d*x,w=N+d*(x+1),F=N+1+d*(x+1),H=N+1+d*x;y.push(L,w,H),y.push(w,F,H)}this.setIndex(y),this.setAttribute("position",new mi(E,3)),this.setAttribute("normal",new mi(T,3)),this.setAttribute("uv",new mi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.width,e.height,e.widthSegments,e.heightSegments)}}class mp extends Ri{constructor(e=.5,n=1,a=32,r=1,c=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:a,phiSegments:r,thetaStart:c,thetaLength:u},a=Math.max(3,a),r=Math.max(1,r);const h=[],p=[],d=[],g=[];let _=e;const v=(n-e)/r,y=new j,E=new yt;for(let T=0;T<=r;T++){for(let S=0;S<=a;S++){const x=c+S/a*u;y.x=_*Math.cos(x),y.y=_*Math.sin(x),p.push(y.x,y.y,y.z),d.push(0,0,1),E.x=(y.x/n+1)/2,E.y=(y.y/n+1)/2,g.push(E.x,E.y)}_+=v}for(let T=0;T<r;T++){const S=T*(a+1);for(let x=0;x<a;x++){const N=x+S,L=N,w=N+a+1,F=N+a+2,H=N+1;h.push(L,w,H),h.push(w,F,H)}}this.setIndex(h),this.setAttribute("position",new mi(p,3)),this.setAttribute("normal",new mi(d,3)),this.setAttribute("uv",new mi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gp extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zv,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gi extends gp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class gE extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _E extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Qc(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function vE(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function yE(o){function e(r,c){return o[r]-o[c]}const n=o.length,a=new Array(n);for(let r=0;r!==n;++r)a[r]=r;return a.sort(e),a}function Y0(o,e,n){const a=o.length,r=new o.constructor(a);for(let c=0,u=0;u!==a;++c){const h=n[c]*e;for(let p=0;p!==e;++p)r[u++]=o[h+p]}return r}function ty(o,e,n,a){let r=1,c=o[0];for(;c!==void 0&&c[a]===void 0;)c=o[r++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(e.push(c.time),n.push(...u)),c=o[r++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(e.push(c.time),u.toArray(n,n.length)),c=o[r++];while(c!==void 0);else do u=c[a],u!==void 0&&(e.push(c.time),n.push(u)),c=o[r++];while(c!==void 0)}class _l{constructor(e,n,a,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,r=n[a],c=n[a-1];e:{t:{let u;n:{i:if(!(e<r)){for(let h=a+2;;){if(r===void 0){if(e<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===h)break;if(c=r,r=n[++a],e<r)break t}u=n.length;break n}if(!(e>=c)){const h=n[1];e<h&&(a=2,c=h);for(let p=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(r=c,c=n[--a-1],e>=c)break t}u=a,a=0;break n}break e}for(;a<u;){const h=a+u>>>1;e<n[h]?u=h:a=h+1}if(r=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,r)}return this.interpolate_(a,c,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r;for(let u=0;u!==r;++u)n[u]=a[c+u];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class xE extends _l{constructor(e,n,a,r){super(e,n,a,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:u0,endingEnd:u0}}intervalChanged_(e,n,a){const r=this.parameterPositions;let c=e-2,u=e+1,h=r[c],p=r[u];if(h===void 0)switch(this.getSettings_().endingStart){case f0:c=e,h=2*n-a;break;case h0:c=r.length-2,h=n+r[c]-r[c+1];break;default:c=e,h=a}if(p===void 0)switch(this.getSettings_().endingEnd){case f0:u=e,p=2*a-n;break;case h0:u=1,p=a+r[1]-r[0];break;default:u=e-1,p=n}const d=(a-n)*.5,g=this.valueSize;this._weightPrev=d/(n-h),this._weightNext=d/(p-a),this._offsetPrev=c*g,this._offsetNext=u*g}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,y=this._weightNext,E=(a-n)/(r-n),T=E*E,S=T*E,x=-v*S+2*v*T-v*E,N=(1+v)*S+(-1.5-2*v)*T+(-.5+v)*E+1,L=(-1-y)*S+(1.5+y)*T+.5*E,w=y*S-y*T;for(let F=0;F!==h;++F)c[F]=x*u[g+F]+N*u[d+F]+L*u[p+F]+w*u[_+F];return c}}class SE extends _l{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=(a-n)/(r-n),_=1-g;for(let v=0;v!==h;++v)c[v]=u[d+v]*_+u[p+v]*g;return c}}class ME extends _l{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class wi{constructor(e,n,a,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qc(n,this.TimeBufferType),this.values=Qc(a,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:Qc(e.times,Array),values:Qc(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(a.interpolation=r)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new ME(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new SE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case hl:n=this.InterpolantFactoryMethodDiscrete;break;case dl:n=this.InterpolantFactoryMethodLinear;break;case Ah:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hl;case this.InterpolantFactoryMethodLinear:return dl;case this.InterpolantFactoryMethodSmooth:return Ah}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]*=e}return this}trim(e,n){const a=this.times,r=a.length;let c=0,u=r-1;for(;c!==r&&a[c]<e;)++c;for(;u!==-1&&a[u]>n;)--u;if(++u,c!==0||u!==r){c>=u&&(u=Math.max(u,1),c=u-1);const h=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*h,u*h)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,r=this.values,c=a.length;c===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let h=0;h!==c;h++){const p=a[h];if(typeof p=="number"&&isNaN(p)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,p),e=!1;break}if(u!==null&&u>p){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,p,u),e=!1;break}u=p}if(r!==void 0&&vE(r))for(let h=0,p=r.length;h!==p;++h){const d=r[h];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),r=this.getInterpolation()===Ah,c=e.length-1;let u=1;for(let h=1;h<c;++h){let p=!1;const d=e[h],g=e[h+1];if(d!==g&&(h!==1||d!==e[0]))if(r)p=!0;else{const _=h*a,v=_-a,y=_+a;for(let E=0;E!==a;++E){const T=n[_+E];if(T!==n[v+E]||T!==n[y+E]){p=!0;break}}}if(p){if(h!==u){e[u]=e[h];const _=h*a,v=u*a;for(let y=0;y!==a;++y)n[v+y]=n[_+y]}++u}}if(c>0){e[u]=e[c];for(let h=c*a,p=u*a,d=0;d!==a;++d)n[p+d]=n[h+d];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=n.slice(0,u*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,r=new a(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}wi.prototype.ValueTypeName="";wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=dl;class Kr extends wi{constructor(e,n,a){super(e,n,a)}}Kr.prototype.ValueTypeName="bool";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=hl;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;class ny extends wi{constructor(e,n,a,r){super(e,n,a,r)}}ny.prototype.ValueTypeName="color";class Wr extends wi{constructor(e,n,a,r){super(e,n,a,r)}}Wr.prototype.ValueTypeName="number";class EE extends _l{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=(a-n)/(r-n);let d=e*h;for(let g=d+h;d!==g;d+=4)os.slerpFlat(c,0,u,d-h,u,d,p);return c}}class qr extends wi{constructor(e,n,a,r){super(e,n,a,r)}InterpolantFactoryMethodLinear(e){return new EE(this.times,this.values,this.getValueSize(),e)}}qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Zr extends wi{constructor(e,n,a){super(e,n,a)}}Zr.prototype.ValueTypeName="string";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=hl;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Yr extends wi{constructor(e,n,a,r){super(e,n,a,r)}}Yr.prototype.ValueTypeName="vector";class TE{constructor(e="",n=-1,a=[],r=eM){this.name=e,this.tracks=a,this.duration=n,this.blendMode=r,this.uuid=Ai(),this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,r=1/(e.fps||1);for(let u=0,h=a.length;u!==h;++u)n.push(AE(a[u]).scale(r));const c=new this(e.name,e.duration,n,e.blendMode);return c.uuid=e.uuid,c}static toJSON(e){const n=[],a=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode};for(let c=0,u=a.length;c!==u;++c)n.push(wi.toJSON(a[c]));return r}static CreateFromMorphTargetSequence(e,n,a,r){const c=n.length,u=[];for(let h=0;h<c;h++){let p=[],d=[];p.push((h+c-1)%c,h,(h+1)%c),d.push(0,1,0);const g=yE(p);p=Y0(p,1,g),d=Y0(d,1,g),!r&&p[0]===0&&(p.push(c),d.push(d[0])),u.push(new Wr(".morphTargetInfluences["+n[h].name+"]",p,d).scale(1/a))}return new this(e,-1,u)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const r=e;a=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<a.length;r++)if(a[r].name===n)return a[r];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const r={},c=/^([\w-]*?)([\d]+)$/;for(let h=0,p=e.length;h<p;h++){const d=e[h],g=d.name.match(c);if(g&&g.length>1){const _=g[1];let v=r[_];v||(r[_]=v=[]),v.push(d)}}const u=[];for(const h in r)u.push(this.CreateFromMorphTargetSequence(h,r[h],n,a));return u}static parseAnimation(e,n){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const a=function(_,v,y,E,T){if(y.length!==0){const S=[],x=[];ty(y,S,x,E),S.length!==0&&T.push(new _(v,S,x))}},r=[],c=e.name||"default",u=e.fps||30,h=e.blendMode;let p=e.length||-1;const d=e.hierarchy||[];for(let _=0;_<d.length;_++){const v=d[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let E;for(E=0;E<v.length;E++)if(v[E].morphTargets)for(let T=0;T<v[E].morphTargets.length;T++)y[v[E].morphTargets[T]]=-1;for(const T in y){const S=[],x=[];for(let N=0;N!==v[E].morphTargets.length;++N){const L=v[E];S.push(L.time),x.push(L.morphTarget===T?1:0)}r.push(new Wr(".morphTargetInfluence["+T+"]",S,x))}p=y.length*u}else{const y=".bones["+n[_].name+"]";a(Yr,y+".position",v,"pos",r),a(qr,y+".quaternion",v,"rot",r),a(Yr,y+".scale",v,"scl",r)}}return r.length===0?null:new this(c,p,r,h)}resetDuration(){const e=this.tracks;let n=0;for(let a=0,r=e.length;a!==r;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function bE(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wr;case"vector":case"vector2":case"vector3":case"vector4":return Yr;case"color":return ny;case"quaternion":return qr;case"bool":case"boolean":return Kr;case"string":return Zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function AE(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=bE(o.type);if(o.times===void 0){const n=[],a=[];ty(o.keys,n,a,"value"),o.times=n,o.values=a}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const _a={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class RE{constructor(e,n,a){const r=this;let c=!1,u=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this.itemStart=function(g){h++,c===!1&&r.onStart!==void 0&&r.onStart(g,u,h),c=!0},this.itemEnd=function(g){u++,r.onProgress!==void 0&&r.onProgress(g,u,h),u===h&&(c=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=d.length;_<v;_+=2){const y=d[_],E=d[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null}}}const wE=new RE;class Qr{constructor(e){this.manager=e!==void 0?e:wE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(r,c){a.load(e,r,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ha={};class CE extends Error{constructor(e,n){super(e),this.response=n}}class iy extends Qr{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=_a.get(`file:${e}`);if(c!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0),c;if(ha[e]!==void 0){ha[e].push({onLoad:n,onProgress:a,onError:r});return}ha[e]=[],ha[e].push({onLoad:n,onProgress:a,onError:r});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,p=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=ha[e],_=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=v?parseInt(v):0,E=y!==0;let T=0;const S=new ReadableStream({start(x){N();function N(){_.read().then(({done:L,value:w})=>{if(L)x.close();else{T+=w.byteLength;const F=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:y});for(let H=0,B=g.length;H<B;H++){const X=g[H];X.onProgress&&X.onProgress(F)}x.enqueue(w),N()}},L=>{x.error(L)})}}});return new Response(S)}else throw new CE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return d.json();default:if(h==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),v=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(v);return d.arrayBuffer().then(E=>y.decode(E))}}}).then(d=>{_a.add(`file:${e}`,d);const g=ha[e];delete ha[e];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onLoad&&y.onLoad(d)}}).catch(d=>{const g=ha[e];if(g===void 0)throw this.manager.itemError(e),d;delete ha[e];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const Lr=new WeakMap;class DE extends Qr{constructor(e){super(e)}load(e,n,a,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=_a.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let _=Lr.get(u);_===void 0&&(_=[],Lr.set(u,_)),_.push({onLoad:n,onError:r})}return u}const h=pl("img");function p(){g(),n&&n(this);const _=Lr.get(this)||[];for(let v=0;v<_.length;v++){const y=_[v];y.onLoad&&y.onLoad(this)}Lr.delete(this),c.manager.itemEnd(e)}function d(_){g(),r&&r(_),_a.remove(`image:${e}`);const v=Lr.get(this)||[];for(let y=0;y<v.length;y++){const E=v[y];E.onError&&E.onError(_)}Lr.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){h.removeEventListener("load",p,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),_a.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class UE extends Qr{constructor(e){super(e)}load(e,n,a,r){const c=new Sn,u=new DE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,r),c}}class gu extends Zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class LE extends gu{constructor(e,n,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Jh=new ot,j0=new j,K0=new j;class _p{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dp,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;j0.setFromMatrixPosition(e.matrixWorld),n.position.copy(j0),K0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(K0),n.updateMatrixWorld(),Jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class NE extends _p{constructor(){super(new Bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,a=kr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||n.far;(a!==n.fov||r!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=r,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class OE extends gu{constructor(e,n,a=0,r=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.distance=a,this.angle=r,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new NE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Z0=new ot,tl=new j,$h=new j;class PE extends _p{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,n=0){const a=this.camera,r=this.matrix,c=e.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),tl.setFromMatrixPosition(e.matrixWorld),a.position.copy(tl),$h.copy(a.position),$h.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt($h),a.updateMatrixWorld(),r.makeTranslation(-tl.x,-tl.y,-tl.z),Z0.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Z0)}}class IE extends gu{constructor(e,n,a=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=r,this.shadow=new PE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vp extends jv{constructor(e=-1,n=1,a=1,r=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=r,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,r,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class BE extends _p{constructor(){super(new vp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class FE extends gu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new BE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ol{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}const ed=new WeakMap;class zE extends Qr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=_a.get(`image-bitmap:${e}`);if(u!==void 0){if(c.manager.itemStart(e),u.then){u.then(d=>{if(ed.has(u)===!0)r&&r(ed.get(u)),c.manager.itemError(e),c.manager.itemEnd(e);else return n&&n(d),c.manager.itemEnd(e),d});return}return setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader;const p=fetch(e,h).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(d){return _a.add(`image-bitmap:${e}`,d),n&&n(d),c.manager.itemEnd(e),d}).catch(function(d){r&&r(d),ed.set(p,d),_a.remove(`image-bitmap:${e}`),c.manager.itemError(e),c.manager.itemEnd(e)});_a.add(`image-bitmap:${e}`,p),c.manager.itemStart(e)}}class HE extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yp="\\[\\]\\.:\\/",GE=new RegExp("["+yp+"]","g"),xp="[^"+yp+"]",VE="[^"+yp.replace("\\.","")+"]",kE=/((?:WC+[\/:])*)/.source.replace("WC",xp),XE=/(WCOD+)?/.source.replace("WCOD",VE),WE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xp),qE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xp),YE=new RegExp("^"+kE+XE+WE+qE+"$"),jE=["material","materials","bones","map"];class KE{constructor(e,n,a){const r=a||It.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,r=this._bindings[a];r!==void 0&&r.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let r=this._targetGroup.nCachedObjects_,c=a.length;r!==c;++r)a[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class It{constructor(e,n,a){this.path=n,this.parsedPath=a||It.parseTrackName(n),this.node=It.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new It.Composite(e,n,a):new It(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(GE,"")}static parseTrackName(e){const n=YE.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=a.nodeName&&a.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const c=a.nodeName.substring(r+1);jE.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,r),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let u=0;u<c.length;u++){const h=c[u];if(h.name===n||h.uuid===n)return h;const p=a(h.children);if(p)return p}return null},r=a(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)e[n++]=a[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,r=n.propertyName;let c=n.propertyIndex;if(e||(e=It.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=n.objectIndex;switch(a){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===d){d=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const u=e[r];if(u===void 0){const d=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(c!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=r;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}It.Composite=KE;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Q0(o,e,n,a){const r=ZE(a);switch(n){case Ov:return o*e;case sp:return o*e/r.components*r.byteLength;case rp:return o*e/r.components*r.byteLength;case Iv:return o*e*2/r.components*r.byteLength;case op:return o*e*2/r.components*r.byteLength;case Pv:return o*e*3/r.components*r.byteLength;case pi:return o*e*4/r.components*r.byteLength;case lp:return o*e*4/r.components*r.byteLength;case nu:case iu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case au:case su:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Md:case Td:return Math.max(o,16)*Math.max(e,8)/4;case Sd:case Ed:return Math.max(o,8)*Math.max(e,8)/2;case bd:case Ad:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Rd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Od:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Id:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case zd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case ru:case Vd:case kd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Bv:case Xd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Wd:case qd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZE(o){switch(o){case Fi:case Uv:return{byteLength:1,components:1};case ll:case Lv:case ml:return{byteLength:2,components:1};case ip:case ap:return{byteLength:2,components:4};case zs:case np:case bi:return{byteLength:4,components:1};case Nv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ay(){let o=null,e=!1,n=null,a=null;function r(c,u){n(c,u),a=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(a=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function QE(o){const e=new WeakMap;function n(h,p){const d=h.array,g=h.usage,_=d.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,d,g),h.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,p,d){const g=p.array,_=p.updateRanges;if(o.bindBuffer(d,h),_.length===0)o.bufferSubData(d,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],T=_[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,_[v]=T)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const T=_[y];o.bufferSubData(d,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,p),d.version=h.version}}return{get:r,remove:c,update:u}}var JE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$E=`#ifdef USE_ALPHAHASH
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
#endif`,eT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aT=`#ifdef USE_AOMAP
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
#endif`,sT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rT=`#ifdef USE_BATCHING
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
#endif`,oT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fT=`#ifdef USE_IRIDESCENCE
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
#endif`,hT=`#ifdef USE_BUMPMAP
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
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ST=`#define PI 3.141592653589793
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
} // validated`,MT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ET=`vec3 transformedNormal = objectNormal;
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
#endif`,TT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wT="gl_FragColor = linearToOutputTexel( gl_FragColor );",CT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DT=`#ifdef USE_ENVMAP
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
#endif`,UT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LT=`#ifdef USE_ENVMAP
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
#endif`,NT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OT=`#ifdef USE_ENVMAP
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
#endif`,PT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zT=`#ifdef USE_GRADIENTMAP
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
}`,HT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kT=`uniform bool receiveShadow;
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
#endif`,XT=`#ifdef USE_ENVMAP
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
#endif`,WT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KT=`PhysicalMaterial material;
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
#endif`,ZT=`struct PhysicalMaterial {
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
}`,QT=`
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
#endif`,JT=`#if defined( RE_IndirectDiffuse )
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
#endif`,$T=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ib=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ob=`#if defined( USE_POINTS_UV )
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
#endif`,lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`#ifdef USE_MORPHTARGETS
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
#endif`,pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xb=`#ifdef USE_NORMALMAP
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
#endif`,Sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ab=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ub=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ob=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ib=`float getShadowMask() {
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
}`,Bb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fb=`#ifdef USE_SKINNING
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
#endif`,zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hb=`#ifdef USE_SKINNING
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
#endif`,Gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wb=`#ifdef USE_TRANSMISSION
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
#endif`,qb=`#ifdef USE_TRANSMISSION
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
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jb=`uniform sampler2D t2D;
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
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`#include <common>
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
}`,aA=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sA=`#define DISTANCE
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
}`,rA=`#define DISTANCE
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
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`uniform float scale;
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
}`,uA=`uniform vec3 diffuse;
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
}`,fA=`#include <common>
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
}`,hA=`uniform vec3 diffuse;
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
}`,dA=`#define LAMBERT
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
}`,pA=`#define LAMBERT
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
}`,mA=`#define MATCAP
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
}`,gA=`#define MATCAP
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
}`,_A=`#define NORMAL
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
}`,vA=`#define NORMAL
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
}`,yA=`#define PHONG
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
}`,xA=`#define PHONG
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
}`,SA=`#define STANDARD
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
}`,MA=`#define STANDARD
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
}`,EA=`#define TOON
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
}`,TA=`#define TOON
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
}`,bA=`uniform float size;
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
}`,AA=`uniform vec3 diffuse;
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
}`,RA=`#include <common>
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
}`,wA=`uniform vec3 color;
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
}`,CA=`uniform float rotation;
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
}`,DA=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:JE,alphahash_pars_fragment:$E,alphamap_fragment:eT,alphamap_pars_fragment:tT,alphatest_fragment:nT,alphatest_pars_fragment:iT,aomap_fragment:aT,aomap_pars_fragment:sT,batching_pars_vertex:rT,batching_vertex:oT,begin_vertex:lT,beginnormal_vertex:cT,bsdfs:uT,iridescence_fragment:fT,bumpmap_pars_fragment:hT,clipping_planes_fragment:dT,clipping_planes_pars_fragment:pT,clipping_planes_pars_vertex:mT,clipping_planes_vertex:gT,color_fragment:_T,color_pars_fragment:vT,color_pars_vertex:yT,color_vertex:xT,common:ST,cube_uv_reflection_fragment:MT,defaultnormal_vertex:ET,displacementmap_pars_vertex:TT,displacementmap_vertex:bT,emissivemap_fragment:AT,emissivemap_pars_fragment:RT,colorspace_fragment:wT,colorspace_pars_fragment:CT,envmap_fragment:DT,envmap_common_pars_fragment:UT,envmap_pars_fragment:LT,envmap_pars_vertex:NT,envmap_physical_pars_fragment:XT,envmap_vertex:OT,fog_vertex:PT,fog_pars_vertex:IT,fog_fragment:BT,fog_pars_fragment:FT,gradientmap_pars_fragment:zT,lightmap_pars_fragment:HT,lights_lambert_fragment:GT,lights_lambert_pars_fragment:VT,lights_pars_begin:kT,lights_toon_fragment:WT,lights_toon_pars_fragment:qT,lights_phong_fragment:YT,lights_phong_pars_fragment:jT,lights_physical_fragment:KT,lights_physical_pars_fragment:ZT,lights_fragment_begin:QT,lights_fragment_maps:JT,lights_fragment_end:$T,logdepthbuf_fragment:eb,logdepthbuf_pars_fragment:tb,logdepthbuf_pars_vertex:nb,logdepthbuf_vertex:ib,map_fragment:ab,map_pars_fragment:sb,map_particle_fragment:rb,map_particle_pars_fragment:ob,metalnessmap_fragment:lb,metalnessmap_pars_fragment:cb,morphinstance_vertex:ub,morphcolor_vertex:fb,morphnormal_vertex:hb,morphtarget_pars_vertex:db,morphtarget_vertex:pb,normal_fragment_begin:mb,normal_fragment_maps:gb,normal_pars_fragment:_b,normal_pars_vertex:vb,normal_vertex:yb,normalmap_pars_fragment:xb,clearcoat_normal_fragment_begin:Sb,clearcoat_normal_fragment_maps:Mb,clearcoat_pars_fragment:Eb,iridescence_pars_fragment:Tb,opaque_fragment:bb,packing:Ab,premultiplied_alpha_fragment:Rb,project_vertex:wb,dithering_fragment:Cb,dithering_pars_fragment:Db,roughnessmap_fragment:Ub,roughnessmap_pars_fragment:Lb,shadowmap_pars_fragment:Nb,shadowmap_pars_vertex:Ob,shadowmap_vertex:Pb,shadowmask_pars_fragment:Ib,skinbase_vertex:Bb,skinning_pars_vertex:Fb,skinning_vertex:zb,skinnormal_vertex:Hb,specularmap_fragment:Gb,specularmap_pars_fragment:Vb,tonemapping_fragment:kb,tonemapping_pars_fragment:Xb,transmission_fragment:Wb,transmission_pars_fragment:qb,uv_pars_fragment:Yb,uv_pars_vertex:jb,uv_vertex:Kb,worldpos_vertex:Zb,background_vert:Qb,background_frag:Jb,backgroundCube_vert:$b,backgroundCube_frag:eA,cube_vert:tA,cube_frag:nA,depth_vert:iA,depth_frag:aA,distanceRGBA_vert:sA,distanceRGBA_frag:rA,equirect_vert:oA,equirect_frag:lA,linedashed_vert:cA,linedashed_frag:uA,meshbasic_vert:fA,meshbasic_frag:hA,meshlambert_vert:dA,meshlambert_frag:pA,meshmatcap_vert:mA,meshmatcap_frag:gA,meshnormal_vert:_A,meshnormal_frag:vA,meshphong_vert:yA,meshphong_frag:xA,meshphysical_vert:SA,meshphysical_frag:MA,meshtoon_vert:EA,meshtoon_frag:TA,points_vert:bA,points_frag:AA,shadow_vert:RA,shadow_frag:wA,sprite_vert:CA,sprite_frag:DA},Le={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Pi={basic:{uniforms:In([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:In([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new at(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:In([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:In([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:In([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new at(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:In([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:In([Le.points,Le.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:In([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:In([Le.common,Le.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:In([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:In([Le.sprite,Le.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:In([Le.common,Le.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:In([Le.lights,Le.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Pi.physical={uniforms:In([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Jc={r:0,b:0,g:0},Us=new zi,UA=new ot;function LA(o,e,n,a,r,c,u){const h=new at(0);let p=c===!0?0:1,d,g,_=null,v=0,y=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?n:e).get(w)),w}function T(L){let w=!1;const F=E(L);F===null?x(h,p):F&&F.isColor&&(x(F,1),w=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?a.buffers.color.setClear(0,0,0,1,u):H==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,w){const F=E(w);F&&(F.isCubeTexture||F.mapping===du)?(g===void 0&&(g=new qn(new gl(1,1,1),new rs({name:"BackgroundCubeMaterial",uniforms:Xr(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,B,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Us.copy(w.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(UA.makeRotationFromEuler(Us)),g.material.toneMapped=Tt.getTransfer(F.colorSpace)!==Vt,(_!==F||v!==F.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,_=F,v=F.version,y=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(d===void 0&&(d=new qn(new mu(2,2),new rs({name:"BackgroundMaterial",uniforms:Xr(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=F,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Tt.getTransfer(F.colorSpace)!==Vt,F.matrixAutoUpdate===!0&&F.updateMatrix(),d.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||v!==F.version||y!==o.toneMapping)&&(d.material.needsUpdate=!0,_=F,v=F.version,y=o.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function x(L,w){L.getRGB(Jc,Yv(o)),a.buffers.color.setClear(Jc.r,Jc.g,Jc.b,w,u)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,w=1){h.set(L),p=w,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,x(h,p)},render:T,addToRenderList:S,dispose:N}}function NA(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=v(null);let c=r,u=!1;function h(C,V,le,re,_e){let he=!1;const I=_(re,le,V);c!==I&&(c=I,d(c.object)),he=y(C,re,le,_e),he&&E(C,re,le,_e),_e!==null&&e.update(_e,o.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,w(C,V,le,re),_e!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function p(){return o.createVertexArray()}function d(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function _(C,V,le){const re=le.wireframe===!0;let _e=a[C.id];_e===void 0&&(_e={},a[C.id]=_e);let he=_e[V.id];he===void 0&&(he={},_e[V.id]=he);let I=he[re];return I===void 0&&(I=v(p()),he[re]=I),I}function v(C){const V=[],le=[],re=[];for(let _e=0;_e<n;_e++)V[_e]=0,le[_e]=0,re[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:le,attributeDivisors:re,object:C,attributes:{},index:null}}function y(C,V,le,re){const _e=c.attributes,he=V.attributes;let I=0;const Z=le.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const U=_e[Y];let ee=he[Y];if(ee===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),U===void 0||U.attribute!==ee||ee&&U.data!==ee.data)return!0;I++}return c.attributesNum!==I||c.index!==re}function E(C,V,le,re){const _e={},he=V.attributes;let I=0;const Z=le.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let U=he[Y];U===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(U=C.instanceColor));const ee={};ee.attribute=U,U&&U.data&&(ee.data=U.data),_e[Y]=ee,I++}c.attributes=_e,c.attributesNum=I,c.index=re}function T(){const C=c.newAttributes;for(let V=0,le=C.length;V<le;V++)C[V]=0}function S(C){x(C,0)}function x(C,V){const le=c.newAttributes,re=c.enabledAttributes,_e=c.attributeDivisors;le[C]=1,re[C]===0&&(o.enableVertexAttribArray(C),re[C]=1),_e[C]!==V&&(o.vertexAttribDivisor(C,V),_e[C]=V)}function N(){const C=c.newAttributes,V=c.enabledAttributes;for(let le=0,re=V.length;le<re;le++)V[le]!==C[le]&&(o.disableVertexAttribArray(le),V[le]=0)}function L(C,V,le,re,_e,he,I){I===!0?o.vertexAttribIPointer(C,V,le,_e,he):o.vertexAttribPointer(C,V,le,re,_e,he)}function w(C,V,le,re){T();const _e=re.attributes,he=le.getAttributes(),I=V.defaultAttributeValues;for(const Z in he){const Y=he[Z];if(Y.location>=0){let Me=_e[Z];if(Me===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor)),Me!==void 0){const U=Me.normalized,ee=Me.itemSize,ve=e.get(Me);if(ve===void 0)continue;const xe=ve.buffer,J=ve.type,pe=ve.bytesPerElement,Se=J===o.INT||J===o.UNSIGNED_INT||Me.gpuType===np;if(Me.isInterleavedBufferAttribute){const Ae=Me.data,we=Ae.stride,lt=Me.offset;if(Ae.isInstancedInterleavedBuffer){for(let Ze=0;Ze<Y.locationSize;Ze++)x(Y.location+Ze,Ae.meshPerAttribute);C.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ze=0;Ze<Y.locationSize;Ze++)S(Y.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,xe);for(let Ze=0;Ze<Y.locationSize;Ze++)L(Y.location+Ze,ee/Y.locationSize,J,U,we*pe,(lt+ee/Y.locationSize*Ze)*pe,Se)}else{if(Me.isInstancedBufferAttribute){for(let Ae=0;Ae<Y.locationSize;Ae++)x(Y.location+Ae,Me.meshPerAttribute);C.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ae=0;Ae<Y.locationSize;Ae++)S(Y.location+Ae);o.bindBuffer(o.ARRAY_BUFFER,xe);for(let Ae=0;Ae<Y.locationSize;Ae++)L(Y.location+Ae,ee/Y.locationSize,J,U,ee*pe,ee/Y.locationSize*Ae*pe,Se)}}else if(I!==void 0){const U=I[Z];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(Y.location,U);break;case 3:o.vertexAttrib3fv(Y.location,U);break;case 4:o.vertexAttrib4fv(Y.location,U);break;default:o.vertexAttrib1fv(Y.location,U)}}}}N()}function F(){X();for(const C in a){const V=a[C];for(const le in V){const re=V[le];for(const _e in re)g(re[_e].object),delete re[_e];delete V[le]}delete a[C]}}function H(C){if(a[C.id]===void 0)return;const V=a[C.id];for(const le in V){const re=V[le];for(const _e in re)g(re[_e].object),delete re[_e];delete V[le]}delete a[C.id]}function B(C){for(const V in a){const le=a[V];if(le[C.id]===void 0)continue;const re=le[C.id];for(const _e in re)g(re[_e].object),delete re[_e];delete le[C.id]}}function X(){D(),u=!0,c!==r&&(c=r,d(c.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:X,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:S,disableUnusedAttributes:N}}function OA(o,e,n){let a;function r(d){a=d}function c(d,g){o.drawArrays(a,d,g),n.update(g,a,1)}function u(d,g,_){_!==0&&(o.drawArraysInstanced(a,d,g,_),n.update(g,a,_))}function h(d,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];n.update(y,a,1)}function p(d,g,_,v){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)u(d[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(a,d,0,g,0,v,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*v[T];n.update(E,a,1)}}this.setMode=r,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function PA(o,e,n,a){let r;function c(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(B){return!(B!==pi&&a.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const X=B===ml&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Fi&&a.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==bi&&!X)}function p(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:F,maxSamples:H}}function IA(o){const e=this;let n=null,a=0,r=!1,c=!1;const u=new Os,h=new rt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||a!==0||r;return r=v,a=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,x=o.get(_);if(!r||E===null||E.length===0||c&&!S)c?g(null):d();else{const N=c?0:a,L=N*4;let w=x.clippingState||null;p.value=w,w=g(E,v,L,y);for(let F=0;F!==L;++F)w[F]=n[F];x.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,y,E){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=p.value,E!==!0||S===null){const x=y+T*4,N=v.matrixWorldInverse;h.getNormalMatrix(N),(S===null||S.length<x)&&(S=new Float32Array(x));for(let L=0,w=y;L!==T;++L,w+=4)u.copy(_[L]).applyMatrix4(N,h),u.normal.toArray(S,w),S[w+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function BA(o){let e=new WeakMap;function n(u,h){return h===yd?u.mapping=Hr:h===xd&&(u.mapping=Gr),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===yd||h===xd)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new tE(p.height);return d.fromEquirectangularTexture(o,u),e.set(u,d),u.addEventListener("dispose",r),n(d.texture,u.mapping)}else return null}}return u}function r(u){const h=u.target;h.removeEventListener("dispose",r);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Or=4,J0=[.125,.215,.35,.446,.526,.582],Bs=20,td=new vp,$0=new at;let nd=null,id=0,ad=0,sd=!1;const Ps=(1+Math.sqrt(5))/2,Nr=1/Ps,ev=[new j(-Ps,Nr,0),new j(Ps,Nr,0),new j(-Nr,0,Ps),new j(Nr,0,Ps),new j(0,Ps,-Nr),new j(0,Ps,Nr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],FA=new j;class tv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,a=.1,r=100,c={}){const{size:u=256,position:h=FA}=c;nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,r,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nd,id,ad),this._renderer.xr.enabled=sd,e.scissorTest=!1,$c(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hr||e.mapping===Gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:ml,format:pi,colorSpace:Hn,depthBuffer:!1},r=nv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(e,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zA(c)),this._blurMaterial=HA(c,e,n)}return r}_compileMaterial(e){const n=new qn(this._lodPlanes[0],e);this._renderer.compile(n,td)}_sceneToCubeUV(e,n,a,r,c){const p=new Bn(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor($0),_.toneMapping=ss,_.autoClear=!1;const E=new is({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),T=new qn(new gl,E);let S=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,S=!0):(E.color.copy($0),S=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(p.up.set(0,d[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[N],c.y,c.z)):L===1?(p.up.set(0,0,d[N]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[N],c.z)):(p.up.set(0,d[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[N]));const w=this._cubeSize;$c(r,L*w,N>2?w:0,w,w),_.setRenderTarget(r),S&&_.render(T,p),_.render(e,p)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=y,_.autoClear=v,e.background=x}_textureToCubeUV(e,n){const a=this._renderer,r=e.mapping===Hr||e.mapping===Gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const c=r?this._cubemapMaterial:this._equirectMaterial,u=new qn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;$c(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,td)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let c=1;c<r;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=ev[(r-c-1)%ev.length];this._blur(e,c-1,c,u,h)}n.autoClear=a}_blur(e,n,a,r,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,r,"latitudinal",c),this._halfBlur(u,e,a,a,r,"longitudinal",c)}_halfBlur(e,n,a,r,c,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new qn(this._lodPlanes[r],d),v=d.uniforms,y=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Bs-1),T=c/E,S=isFinite(c)?1+Math.floor(g*T):Bs;S>Bs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Bs}`);const x=[];let N=0;for(let B=0;B<Bs;++B){const X=B/T,D=Math.exp(-X*X/2);x.push(D),B===0?N+=D:B<S&&(N+=2*D)}for(let B=0;B<x.length;B++)x[B]=x[B]/N;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-a;const w=this._sizeLods[r],F=3*w*(r>L-Or?r-L+Or:0),H=4*(this._cubeSize-w);$c(n,F,H,3*w,2*w),p.setRenderTarget(n),p.render(_,td)}}function zA(o){const e=[],n=[],a=[];let r=o;const c=o-Or+1+J0.length;for(let u=0;u<c;u++){const h=Math.pow(2,r);n.push(h);let p=1/h;u>o-Or?p=J0[u-o+Or-1]:u===0&&(p=0),a.push(p);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,T=3,S=2,x=1,N=new Float32Array(T*E*y),L=new Float32Array(S*E*y),w=new Float32Array(x*E*y);for(let H=0;H<y;H++){const B=H%3*2/3-1,X=H>2?0:-1,D=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];N.set(D,T*E*H),L.set(v,S*E*H);const C=[H,H,H,H,H,H];w.set(C,x*E*H)}const F=new Ri;F.setAttribute("position",new zn(N,T)),F.setAttribute("uv",new zn(L,S)),F.setAttribute("faceIndex",new zn(w,x)),e.push(F),r>Or&&r--}return{lodPlanes:e,sizeLods:n,sigmas:a}}function nv(o,e,n){const a=new Hs(o,e,n);return a.texture.mapping=du,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function $c(o,e,n,a,r){o.viewport.set(e,n,a,r),o.scissor.set(e,n,a,r)}function HA(o,e,n){const a=new Float32Array(Bs),r=new j(0,1,0);return new rs({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sp(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function iv(){return new rs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sp(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function av(){return new rs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Sp(){return`

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
	`}function GA(o){let e=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const p=h.mapping,d=p===yd||p===xd,g=p===Hr||p===Gr;if(d||g){let _=e.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new tv(o)),_=d?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return d&&y&&y.height>0||g&&y&&r(y)?(n===null&&(n=new tv(o)),_=d?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function r(h){let p=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&p++;return p===d}function c(h){const p=h.target;p.removeEventListener("dispose",c);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function VA(o){const e={};function n(a){if(e[a]!==void 0)return e[a];let r;switch(a){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(a)}return e[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&Ir("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function kA(o,e,n,a){const r={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete r[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function d(_){const v=[],y=_.index,E=_.attributes.position;let T=0;if(y!==null){const N=y.array;T=y.version;for(let L=0,w=N.length;L<w;L+=3){const F=N[L+0],H=N[L+1],B=N[L+2];v.push(F,H,H,B,B,F)}}else if(E!==void 0){const N=E.array;T=E.version;for(let L=0,w=N.length/3-1;L<w;L+=3){const F=L+0,H=L+1,B=L+2;v.push(F,H,H,B,B,F)}}else return;const S=new(Gv(v)?qv:Wv)(v,1);S.version=T;const x=c.get(_);x&&e.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function XA(o,e,n){let a;function r(v){a=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function p(v,y){o.drawElements(a,y,c,v*u),n.update(y,a,1)}function d(v,y,E){E!==0&&(o.drawElementsInstanced(a,y,c,v*u,E),n.update(y,a,E))}function g(v,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];n.update(S,a,1)}function _(v,y,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/u,y[x],T[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,c,v,0,T,0,E);let x=0;for(let N=0;N<E;N++)x+=y[N]*T[N];n.update(x,a,1)}}this.setMode=r,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function WA(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case o.TRIANGLES:n.triangles+=h*(c/3);break;case o.LINES:n.lines+=h*(c/2);break;case o.LINE_STRIP:n.lines+=h*(c-1);break;case o.LINE_LOOP:n.lines+=h*c;break;case o.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:a}}function qA(o,e,n){const a=new WeakMap,r=new Ct;function c(u,h,p){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let C=function(){X.dispose(),a.delete(h),h.removeEventListener("dispose",C)};var y=C;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),T===!0&&(w=2),S===!0&&(w=3);let F=h.attributes.position.count*w,H=1;F>e.maxTextureSize&&(H=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const B=new Float32Array(F*H*4*_),X=new Vv(B,F,H,_);X.type=bi,X.needsUpdate=!0;const D=w*4;for(let V=0;V<_;V++){const le=x[V],re=N[V],_e=L[V],he=F*H*4*V;for(let I=0;I<le.count;I++){const Z=I*D;E===!0&&(r.fromBufferAttribute(le,I),B[he+Z+0]=r.x,B[he+Z+1]=r.y,B[he+Z+2]=r.z,B[he+Z+3]=0),T===!0&&(r.fromBufferAttribute(re,I),B[he+Z+4]=r.x,B[he+Z+5]=r.y,B[he+Z+6]=r.z,B[he+Z+7]=0),S===!0&&(r.fromBufferAttribute(_e,I),B[he+Z+8]=r.x,B[he+Z+9]=r.y,B[he+Z+10]=r.z,B[he+Z+11]=_e.itemSize===4?r.w:1)}}v={count:_,texture:X,size:new yt(F,H)},a.set(h,v),h.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",u.morphTexture,n);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const T=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",T),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function YA(o,e,n,a){let r=new WeakMap;function c(p){const d=a.render.frame,g=p.geometry,_=e.get(p,g);if(r.get(_)!==d&&(e.update(_),r.set(_,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),r.get(p)!==d&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),r.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;r.get(v)!==d&&(v.update(),r.set(v,d))}return _}function u(){r=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:u}}const sy=new Sn,sv=new ey(1,1),ry=new Vv,oy=new FM,ly=new Kv,rv=[],ov=[],lv=new Float32Array(16),cv=new Float32Array(9),uv=new Float32Array(4);function Jr(o,e,n){const a=o[0];if(a<=0||a>0)return o;const r=e*n;let c=rv[r];if(c===void 0&&(c=new Float32Array(r),rv[r]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,o[u].toArray(c,h)}return c}function hn(o,e){if(o.length!==e.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==e[n])return!1;return!0}function dn(o,e){for(let n=0,a=e.length;n<a;n++)o[n]=e[n]}function _u(o,e){let n=ov[e];n===void 0&&(n=new Int32Array(e),ov[e]=n);for(let a=0;a!==e;++a)n[a]=o.allocateTextureUnit();return n}function jA(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function KA(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(hn(n,e))return;o.uniform2fv(this.addr,e),dn(n,e)}}function ZA(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(hn(n,e))return;o.uniform3fv(this.addr,e),dn(n,e)}}function QA(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(hn(n,e))return;o.uniform4fv(this.addr,e),dn(n,e)}}function JA(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(hn(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),dn(n,e)}else{if(hn(n,a))return;uv.set(a),o.uniformMatrix2fv(this.addr,!1,uv),dn(n,a)}}function $A(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(hn(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),dn(n,e)}else{if(hn(n,a))return;cv.set(a),o.uniformMatrix3fv(this.addr,!1,cv),dn(n,a)}}function e1(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(hn(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),dn(n,e)}else{if(hn(n,a))return;lv.set(a),o.uniformMatrix4fv(this.addr,!1,lv),dn(n,a)}}function t1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function n1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(hn(n,e))return;o.uniform2iv(this.addr,e),dn(n,e)}}function i1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(hn(n,e))return;o.uniform3iv(this.addr,e),dn(n,e)}}function a1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(hn(n,e))return;o.uniform4iv(this.addr,e),dn(n,e)}}function s1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function r1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(hn(n,e))return;o.uniform2uiv(this.addr,e),dn(n,e)}}function o1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(hn(n,e))return;o.uniform3uiv(this.addr,e),dn(n,e)}}function l1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(hn(n,e))return;o.uniform4uiv(this.addr,e),dn(n,e)}}function c1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let c;this.type===o.SAMPLER_2D_SHADOW?(sv.compareFunction=Hv,c=sv):c=sy,n.setTexture2D(e||c,r)}function u1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(e||oy,r)}function f1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(e||ly,r)}function h1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(e||ry,r)}function d1(o){switch(o){case 5126:return jA;case 35664:return KA;case 35665:return ZA;case 35666:return QA;case 35674:return JA;case 35675:return $A;case 35676:return e1;case 5124:case 35670:return t1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return a1;case 5125:return s1;case 36294:return r1;case 36295:return o1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return h1}}function p1(o,e){o.uniform1fv(this.addr,e)}function m1(o,e){const n=Jr(e,this.size,2);o.uniform2fv(this.addr,n)}function g1(o,e){const n=Jr(e,this.size,3);o.uniform3fv(this.addr,n)}function _1(o,e){const n=Jr(e,this.size,4);o.uniform4fv(this.addr,n)}function v1(o,e){const n=Jr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function y1(o,e){const n=Jr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function x1(o,e){const n=Jr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function S1(o,e){o.uniform1iv(this.addr,e)}function M1(o,e){o.uniform2iv(this.addr,e)}function E1(o,e){o.uniform3iv(this.addr,e)}function T1(o,e){o.uniform4iv(this.addr,e)}function b1(o,e){o.uniform1uiv(this.addr,e)}function A1(o,e){o.uniform2uiv(this.addr,e)}function R1(o,e){o.uniform3uiv(this.addr,e)}function w1(o,e){o.uniform4uiv(this.addr,e)}function C1(o,e,n){const a=this.cache,r=e.length,c=_u(n,r);hn(a,c)||(o.uniform1iv(this.addr,c),dn(a,c));for(let u=0;u!==r;++u)n.setTexture2D(e[u]||sy,c[u])}function D1(o,e,n){const a=this.cache,r=e.length,c=_u(n,r);hn(a,c)||(o.uniform1iv(this.addr,c),dn(a,c));for(let u=0;u!==r;++u)n.setTexture3D(e[u]||oy,c[u])}function U1(o,e,n){const a=this.cache,r=e.length,c=_u(n,r);hn(a,c)||(o.uniform1iv(this.addr,c),dn(a,c));for(let u=0;u!==r;++u)n.setTextureCube(e[u]||ly,c[u])}function L1(o,e,n){const a=this.cache,r=e.length,c=_u(n,r);hn(a,c)||(o.uniform1iv(this.addr,c),dn(a,c));for(let u=0;u!==r;++u)n.setTexture2DArray(e[u]||ry,c[u])}function N1(o){switch(o){case 5126:return p1;case 35664:return m1;case 35665:return g1;case 35666:return _1;case 35674:return v1;case 35675:return y1;case 35676:return x1;case 5124:case 35670:return S1;case 35667:case 35671:return M1;case 35668:case 35672:return E1;case 35669:case 35673:return T1;case 5125:return b1;case 36294:return A1;case 36295:return R1;case 36296:return w1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return D1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return L1}}class O1{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=d1(n.type)}}class P1{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=N1(n.type)}}class I1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const r=this.seq;for(let c=0,u=r.length;c!==u;++c){const h=r[c];h.setValue(e,n[h.id],a)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function fv(o,e){o.seq.push(e),o.map[e.id]=e}function B1(o,e,n){const a=o.name,r=a.length;for(rd.lastIndex=0;;){const c=rd.exec(a),u=rd.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===r){fv(n,d===void 0?new O1(h,o,e):new P1(h,o,e));break}else{let _=n.map[h];_===void 0&&(_=new I1(h),fv(n,_)),n=_}}}class ou{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const c=e.getActiveUniform(n,r),u=e.getUniformLocation(n,c.name);B1(c,u,this)}}setValue(e,n,a,r){const c=this.map[n];c!==void 0&&c.setValue(e,a,r)}setOptional(e,n,a){const r=n[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,n,a,r){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,r)}}static seqWithValue(e,n){const a=[];for(let r=0,c=e.length;r!==c;++r){const u=e[r];u.id in n&&a.push(u)}return a}}function hv(o,e,n){const a=o.createShader(e);return o.shaderSource(a,n),o.compileShader(a),a}const F1=37297;let z1=0;function H1(o,e){const n=o.split(`
`),a=[],r=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=r;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const dv=new rt;function G1(o){Tt._getMatrix(dv,Tt.workingColorSpace,o);const e=`mat3( ${dv.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(o)){case cu:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function pv(o,e,n){const a=o.getShaderParameter(e,o.COMPILE_STATUS),r=o.getShaderInfoLog(e).trim();if(a&&r==="")return"";const c=/ERROR: 0:(\d+)/.exec(r);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+r+`

`+H1(o.getShaderSource(e),u)}else return r}function V1(o,e){const n=G1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function k1(o,e){let n;switch(e){case qS:n="Linear";break;case YS:n="Reinhard";break;case jS:n="Cineon";break;case KS:n="ACESFilmic";break;case QS:n="AgX";break;case JS:n="Neutral";break;case ZS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const eu=new j;function X1(){Tt.getLuminanceCoefficients(eu);const o=eu.x.toFixed(4),e=eu.y.toFixed(4),n=eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function q1(o){const e=[];for(const n in o){const a=o[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function Y1(o,e){const n={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const c=o.getActiveAttrib(e,r),u=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:o.getAttribLocation(e,u),locationSize:h}}return n}function al(o){return o!==""}function mv(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(o){return o.replace(j1,Z1)}const K1=new Map;function Z1(o,e){let n=ut[e];if(n===void 0){const a=K1.get(e);if(a!==void 0)n=ut[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Qd(n)}const Q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _v(o){return o.replace(Q1,J1)}function J1(o,e,n,a){let r="";for(let c=parseInt(e);c<parseInt(n);c++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return r}function vv(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function $1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Rv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===bS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===da&&(e="SHADOWMAP_TYPE_VSM"),e}function eR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Hr:case Gr:e="ENVMAP_TYPE_CUBE";break;case du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Gr:e="ENVMAP_MODE_REFRACTION";break}return e}function nR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case wv:e="ENVMAP_BLENDING_MULTIPLY";break;case XS:e="ENVMAP_BLENDING_MIX";break;case WS:e="ENVMAP_BLENDING_ADD";break}return e}function iR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function aR(o,e,n,a){const r=o.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=$1(n),d=eR(n),g=tR(n),_=nR(n),v=iR(n),y=W1(n),E=q1(c),T=r.createProgram();let S,x,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(al).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(al).join(`
`),x.length>0&&(x+=`
`)):(S=[vv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),x=[vv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ss?"#define TONE_MAPPING":"",n.toneMapping!==ss?ut.tonemapping_pars_fragment:"",n.toneMapping!==ss?k1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,V1("linearToOutputTexel",n.outputColorSpace),X1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(al).join(`
`)),u=Qd(u),u=mv(u,n),u=gv(u,n),h=Qd(h),h=mv(h,n),h=gv(h,n),u=_v(u),h=_v(h),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===p0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===p0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=N+S+u,w=N+x+h,F=hv(r,r.VERTEX_SHADER,L),H=hv(r,r.FRAGMENT_SHADER,w);r.attachShader(T,F),r.attachShader(T,H),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function B(V){if(o.debug.checkShaderErrors){const le=r.getProgramInfoLog(T).trim(),re=r.getShaderInfoLog(F).trim(),_e=r.getShaderInfoLog(H).trim();let he=!0,I=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,T,F,H);else{const Z=pv(r,F,"vertex"),Y=pv(r,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+le+`
`+Z+`
`+Y)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(re===""||_e==="")&&(I=!1);I&&(V.diagnostics={runnable:he,programLog:le,vertexShader:{log:re,prefix:S},fragmentShader:{log:_e,prefix:x}})}r.deleteShader(F),r.deleteShader(H),X=new ou(r,T),D=Y1(r,T)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(T,F1)),C},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=z1++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=F,this.fragmentShader=H,this}let sR=0;class rR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,r=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new oR(e),n.set(e,a)),a}}class oR{constructor(e){this.id=sR++,this.code=e,this.usedTimes=0}}function lR(o,e,n,a,r,c,u){const h=new kv,p=new rR,d=new Set,g=[],_=r.logarithmicDepthBuffer,v=r.vertexTextures;let y=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return d.add(D),D===0?"uv":`uv${D}`}function S(D,C,V,le,re){const _e=le.fog,he=re.geometry,I=D.isMeshStandardMaterial?le.environment:null,Z=(D.isMeshStandardMaterial?n:e).get(D.envMap||I),Y=Z&&Z.mapping===du?Z.image.height:null,Me=E[D.type];D.precision!==null&&(y=r.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const U=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,ee=U!==void 0?U.length:0;let ve=0;he.morphAttributes.position!==void 0&&(ve=1),he.morphAttributes.normal!==void 0&&(ve=2),he.morphAttributes.color!==void 0&&(ve=3);let xe,J,pe,Se;if(Me){const At=Pi[Me];xe=At.vertexShader,J=At.fragmentShader}else xe=D.vertexShader,J=D.fragmentShader,p.update(D),pe=p.getVertexShaderID(D),Se=p.getFragmentShaderID(D);const Ae=o.getRenderTarget(),we=o.state.buffers.depth.getReversed(),lt=re.isInstancedMesh===!0,Ze=re.isBatchedMesh===!0,Bt=!!D.map,kt=!!D.matcap,xt=!!Z,z=!!D.aoMap,Mn=!!D.lightMap,bt=!!D.bumpMap,pt=!!D.normalMap,Ge=!!D.displacementMap,St=!!D.emissiveMap,Ye=!!D.metalnessMap,it=!!D.roughnessMap,en=D.anisotropy>0,O=D.clearcoat>0,b=D.dispersion>0,te=D.iridescence>0,ue=D.sheen>0,de=D.transmission>0,oe=en&&!!D.anisotropyMap,Oe=O&&!!D.clearcoatMap,De=O&&!!D.clearcoatNormalMap,He=O&&!!D.clearcoatRoughnessMap,Ve=te&&!!D.iridescenceMap,ye=te&&!!D.iridescenceThicknessMap,Pe=ue&&!!D.sheenColorMap,We=ue&&!!D.sheenRoughnessMap,qe=!!D.specularMap,Re=!!D.specularColorMap,nt=!!D.specularIntensityMap,k=de&&!!D.transmissionMap,Ue=de&&!!D.thicknessMap,Ee=!!D.gradientMap,Ie=!!D.alphaMap,be=D.alphaTest>0,ge=!!D.alphaHash,Fe=!!D.extensions;let tt=ss;D.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(tt=o.toneMapping);const Lt={shaderID:Me,shaderType:D.type,shaderName:D.name,vertexShader:xe,fragmentShader:J,defines:D.defines,customVertexShaderID:pe,customFragmentShaderID:Se,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&re._colorsTexture!==null,instancing:lt,instancingColor:lt&&re.instanceColor!==null,instancingMorph:lt&&re.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Ae===null?o.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Hn,alphaToCoverage:!!D.alphaToCoverage,map:Bt,matcap:kt,envMap:xt,envMapMode:xt&&Z.mapping,envMapCubeUVHeight:Y,aoMap:z,lightMap:Mn,bumpMap:bt,normalMap:pt,displacementMap:v&&Ge,emissiveMap:St,normalMapObjectSpace:pt&&D.normalMapType===aM,normalMapTangentSpace:pt&&D.normalMapType===zv,metalnessMap:Ye,roughnessMap:it,anisotropy:en,anisotropyMap:oe,clearcoat:O,clearcoatMap:Oe,clearcoatNormalMap:De,clearcoatRoughnessMap:He,dispersion:b,iridescence:te,iridescenceMap:Ve,iridescenceThicknessMap:ye,sheen:ue,sheenColorMap:Pe,sheenRoughnessMap:We,specularMap:qe,specularColorMap:Re,specularIntensityMap:nt,transmission:de,transmissionMap:k,thicknessMap:Ue,gradientMap:Ee,opaque:D.transparent===!1&&D.blending===Pr&&D.alphaToCoverage===!1,alphaMap:Ie,alphaTest:be,alphaHash:ge,combine:D.combine,mapUv:Bt&&T(D.map.channel),aoMapUv:z&&T(D.aoMap.channel),lightMapUv:Mn&&T(D.lightMap.channel),bumpMapUv:bt&&T(D.bumpMap.channel),normalMapUv:pt&&T(D.normalMap.channel),displacementMapUv:Ge&&T(D.displacementMap.channel),emissiveMapUv:St&&T(D.emissiveMap.channel),metalnessMapUv:Ye&&T(D.metalnessMap.channel),roughnessMapUv:it&&T(D.roughnessMap.channel),anisotropyMapUv:oe&&T(D.anisotropyMap.channel),clearcoatMapUv:Oe&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:De&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:We&&T(D.sheenRoughnessMap.channel),specularMapUv:qe&&T(D.specularMap.channel),specularColorMapUv:Re&&T(D.specularColorMap.channel),specularIntensityMapUv:nt&&T(D.specularIntensityMap.channel),transmissionMapUv:k&&T(D.transmissionMap.channel),thicknessMapUv:Ue&&T(D.thicknessMap.channel),alphaMapUv:Ie&&T(D.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(pt||en),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!he.attributes.uv&&(Bt||Ie),fog:!!_e,useFog:D.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:we,skinning:re.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ve,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:tt,decodeVideoTexture:Bt&&D.map.isVideoTexture===!0&&Tt.getTransfer(D.map.colorSpace)===Vt,decodeVideoTextureEmissive:St&&D.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(D.emissiveMap.colorSpace)===Vt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ii,flipSided:D.side===Yn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Fe&&D.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&D.extensions.multiDraw===!0||Ze)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Lt.vertexUv1s=d.has(1),Lt.vertexUv2s=d.has(2),Lt.vertexUv3s=d.has(3),d.clear(),Lt}function x(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)C.push(V),C.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(N(C,D),L(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function N(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function L(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),D.push(h.mask)}function w(D){const C=E[D.type];let V;if(C){const le=Pi[C];V=QM.clone(le.uniforms)}else V=D.uniforms;return V}function F(D,C){let V;for(let le=0,re=g.length;le<re;le++){const _e=g[le];if(_e.cacheKey===C){V=_e,++V.usedTimes;break}}return V===void 0&&(V=new aR(o,C,D,c),g.push(V)),V}function H(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function B(D){p.remove(D)}function X(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:w,acquireProgram:F,releaseProgram:H,releaseShaderCache:B,programs:g,dispose:X}}function cR(){let o=new WeakMap;function e(u){return o.has(u)}function n(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function a(u){o.delete(u)}function r(u,h,p){o.get(u)[h]=p}function c(){o=new WeakMap}return{has:e,get:n,remove:a,update:r,dispose:c}}function uR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function yv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function xv(){const o=[];let e=0;const n=[],a=[],r=[];function c(){e=0,n.length=0,a.length=0,r.length=0}function u(_,v,y,E,T,S){let x=o[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:T,group:S},o[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=T,x.group=S),e++,x}function h(_,v,y,E,T,S){const x=u(_,v,y,E,T,S);y.transmission>0?a.push(x):y.transparent===!0?r.push(x):n.push(x)}function p(_,v,y,E,T,S){const x=u(_,v,y,E,T,S);y.transmission>0?a.unshift(x):y.transparent===!0?r.unshift(x):n.unshift(x)}function d(_,v){n.length>1&&n.sort(_||uR),a.length>1&&a.sort(v||yv),r.length>1&&r.sort(v||yv)}function g(){for(let _=e,v=o.length;_<v;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:r,init:c,push:h,unshift:p,finish:g,sort:d}}function fR(){let o=new WeakMap;function e(a,r){const c=o.get(a);let u;return c===void 0?(u=new xv,o.set(a,[u])):r>=c.length?(u=new xv,c.push(u)):u=c[r],u}function n(){o=new WeakMap}return{get:e,dispose:n}}function hR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new at};break;case"SpotLight":n={position:new j,direction:new j,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=n,n}}}function dR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let pR=0;function mR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function gR(o){const e=new hR,n=dR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new j);const r=new j,c=new ot,u=new ot;function h(d){let g=0,_=0,v=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let y=0,E=0,T=0,S=0,x=0,N=0,L=0,w=0,F=0,H=0,B=0;d.sort(mR);for(let D=0,C=d.length;D<C;D++){const V=d[D],le=V.color,re=V.intensity,_e=V.distance,he=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=le.r*re,_+=le.g*re,v+=le.b*re;else if(V.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(V.sh.coefficients[I],re);B++}else if(V.isDirectionalLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,Y=n.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,a.directionalShadow[y]=Y,a.directionalShadowMap[y]=he,a.directionalShadowMatrix[y]=V.shadow.matrix,N++}a.directional[y]=I,y++}else if(V.isSpotLight){const I=e.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(le).multiplyScalar(re),I.distance=_e,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,a.spot[T]=I;const Z=V.shadow;if(V.map&&(a.spotLightMap[F]=V.map,F++,Z.updateMatrices(V),V.castShadow&&H++),a.spotLightMatrix[T]=Z.matrix,V.castShadow){const Y=n.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,a.spotShadow[T]=Y,a.spotShadowMap[T]=he,w++}T++}else if(V.isRectAreaLight){const I=e.get(V);I.color.copy(le).multiplyScalar(re),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),a.rectArea[S]=I,S++}else if(V.isPointLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const Z=V.shadow,Y=n.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,a.pointShadow[E]=Y,a.pointShadowMap[E]=he,a.pointShadowMatrix[E]=V.shadow.matrix,L++}a.point[E]=I,E++}else if(V.isHemisphereLight){const I=e.get(V);I.skyColor.copy(V.color).multiplyScalar(re),I.groundColor.copy(V.groundColor).multiplyScalar(re),a.hemi[x]=I,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Le.LTC_FLOAT_1,a.rectAreaLTC2=Le.LTC_FLOAT_2):(a.rectAreaLTC1=Le.LTC_HALF_1,a.rectAreaLTC2=Le.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const X=a.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==T||X.rectAreaLength!==S||X.hemiLength!==x||X.numDirectionalShadows!==N||X.numPointShadows!==L||X.numSpotShadows!==w||X.numSpotMaps!==F||X.numLightProbes!==B)&&(a.directional.length=y,a.spot.length=T,a.rectArea.length=S,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=w+F-H,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=H,a.numLightProbes=B,X.directionalLength=y,X.pointLength=E,X.spotLength=T,X.rectAreaLength=S,X.hemiLength=x,X.numDirectionalShadows=N,X.numPointShadows=L,X.numSpotShadows=w,X.numSpotMaps=F,X.numLightProbes=B,a.version=pR++)}function p(d,g){let _=0,v=0,y=0,E=0,T=0;const S=g.matrixWorldInverse;for(let x=0,N=d.length;x<N;x++){const L=d[x];if(L.isDirectionalLight){const w=a.directional[_];w.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(S),_++}else if(L.isSpotLight){const w=a.spot[y];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const w=a.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),u.identity(),c.copy(L.matrixWorld),c.premultiply(S),u.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const w=a.point[v];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const w=a.hemi[T];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(S),T++}}}return{setup:h,setupView:p,state:a}}function Sv(o){const e=new gR(o),n=[],a=[];function r(g){d.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){e.setup(n)}function p(g){e.setupView(n,g)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u}}function _R(o){let e=new WeakMap;function n(r,c=0){const u=e.get(r);let h;return u===void 0?(h=new Sv(o),e.set(r,[h])):c>=u.length?(h=new Sv(o),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const vR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yR=`uniform sampler2D shadow_pass;
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
}`;function xR(o,e,n){let a=new dp;const r=new yt,c=new yt,u=new Ct,h=new gE({depthPacking:iM}),p=new _E,d={},g=n.maxTextureSize,_={[ya]:Yn,[Yn]:ya,[Ii]:Ii},v=new rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:vR,fragmentShader:yR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Ri;E.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new qn(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rv;let x=this.type;this.render=function(H,B,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),le=o.state;le.setBlending(as),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const re=x!==da&&this.type===da,_e=x===da&&this.type!==da;for(let he=0,I=H.length;he<I;he++){const Z=H[he],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const Me=Y.getFrameExtents();if(r.multiply(Me),c.copy(Y.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(c.x=Math.floor(g/Me.x),r.x=c.x*Me.x,Y.mapSize.x=c.x),r.y>g&&(c.y=Math.floor(g/Me.y),r.y=c.y*Me.y,Y.mapSize.y=c.y)),Y.map===null||re===!0||_e===!0){const ee=this.type!==da?{minFilter:Fn,magFilter:Fn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Hs(r.x,r.y,ee),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const U=Y.getViewportCount();for(let ee=0;ee<U;ee++){const ve=Y.getViewport(ee);u.set(c.x*ve.x,c.y*ve.y,c.x*ve.z,c.y*ve.w),le.viewport(u),Y.updateMatrices(Z,ee),a=Y.getFrustum(),w(B,X,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===da&&N(Y,X),Y.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(D,C,V)};function N(H,B){const X=e.update(T);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Hs(r.x,r.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(B,null,X,v,T,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(B,null,X,y,T,null)}function L(H,B,X,D){let C=null;const V=X.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)C=V;else if(C=X.isPointLight===!0?p:h,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const le=C.uuid,re=B.uuid;let _e=d[le];_e===void 0&&(_e={},d[le]=_e);let he=_e[re];he===void 0&&(he=C.clone(),_e[re]=he,B.addEventListener("dispose",F)),C=he}if(C.visible=B.visible,C.wireframe=B.wireframe,D===da?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:_[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const le=o.properties.get(C);le.light=X}return C}function w(H,B,X,D,C){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===da)&&(!H.frustumCulled||a.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,H.matrixWorld);const re=e.update(H),_e=H.material;if(Array.isArray(_e)){const he=re.groups;for(let I=0,Z=he.length;I<Z;I++){const Y=he[I],Me=_e[Y.materialIndex];if(Me&&Me.visible){const U=L(H,Me,D,C);H.onBeforeShadow(o,H,B,X,re,U,Y),o.renderBufferDirect(X,null,re,U,H,Y),H.onAfterShadow(o,H,B,X,re,U,Y)}}}else if(_e.visible){const he=L(H,_e,D,C);H.onBeforeShadow(o,H,B,X,re,he,null),o.renderBufferDirect(X,null,re,he,H,null),H.onAfterShadow(o,H,B,X,re,he,null)}}const le=H.children;for(let re=0,_e=le.length;re<_e;re++)w(le[re],B,X,D,C)}function F(H){H.target.removeEventListener("dispose",F);for(const X in d){const D=d[X],C=H.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const SR={[hd]:dd,[pd]:_d,[md]:vd,[zr]:gd,[dd]:hd,[_d]:pd,[vd]:md,[gd]:zr};function MR(o,e){function n(){let k=!1;const Ue=new Ct;let Ee=null;const Ie=new Ct(0,0,0,0);return{setMask:function(be){Ee!==be&&!k&&(o.colorMask(be,be,be,be),Ee=be)},setLocked:function(be){k=be},setClear:function(be,ge,Fe,tt,Lt){Lt===!0&&(be*=tt,ge*=tt,Fe*=tt),Ue.set(be,ge,Fe,tt),Ie.equals(Ue)===!1&&(o.clearColor(be,ge,Fe,tt),Ie.copy(Ue))},reset:function(){k=!1,Ee=null,Ie.set(-1,0,0,0)}}}function a(){let k=!1,Ue=!1,Ee=null,Ie=null,be=null;return{setReversed:function(ge){if(Ue!==ge){const Fe=e.get("EXT_clip_control");ge?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Ue=ge;const tt=be;be=null,this.setClear(tt)}},getReversed:function(){return Ue},setTest:function(ge){ge?Ae(o.DEPTH_TEST):we(o.DEPTH_TEST)},setMask:function(ge){Ee!==ge&&!k&&(o.depthMask(ge),Ee=ge)},setFunc:function(ge){if(Ue&&(ge=SR[ge]),Ie!==ge){switch(ge){case hd:o.depthFunc(o.NEVER);break;case dd:o.depthFunc(o.ALWAYS);break;case pd:o.depthFunc(o.LESS);break;case zr:o.depthFunc(o.LEQUAL);break;case md:o.depthFunc(o.EQUAL);break;case gd:o.depthFunc(o.GEQUAL);break;case _d:o.depthFunc(o.GREATER);break;case vd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ie=ge}},setLocked:function(ge){k=ge},setClear:function(ge){be!==ge&&(Ue&&(ge=1-ge),o.clearDepth(ge),be=ge)},reset:function(){k=!1,Ee=null,Ie=null,be=null,Ue=!1}}}function r(){let k=!1,Ue=null,Ee=null,Ie=null,be=null,ge=null,Fe=null,tt=null,Lt=null;return{setTest:function(At){k||(At?Ae(o.STENCIL_TEST):we(o.STENCIL_TEST))},setMask:function(At){Ue!==At&&!k&&(o.stencilMask(At),Ue=At)},setFunc:function(At,jn,pn){(Ee!==At||Ie!==jn||be!==pn)&&(o.stencilFunc(At,jn,pn),Ee=At,Ie=jn,be=pn)},setOp:function(At,jn,pn){(ge!==At||Fe!==jn||tt!==pn)&&(o.stencilOp(At,jn,pn),ge=At,Fe=jn,tt=pn)},setLocked:function(At){k=At},setClear:function(At){Lt!==At&&(o.clearStencil(At),Lt=At)},reset:function(){k=!1,Ue=null,Ee=null,Ie=null,be=null,ge=null,Fe=null,tt=null,Lt=null}}}const c=new n,u=new a,h=new r,p=new WeakMap,d=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,T=!1,S=null,x=null,N=null,L=null,w=null,F=null,H=null,B=new at(0,0,0),X=0,D=!1,C=null,V=null,le=null,re=null,_e=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Z=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),I=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),I=Z>=2);let Me=null,U={};const ee=o.getParameter(o.SCISSOR_BOX),ve=o.getParameter(o.VIEWPORT),xe=new Ct().fromArray(ee),J=new Ct().fromArray(ve);function pe(k,Ue,Ee,Ie){const be=new Uint8Array(4),ge=o.createTexture();o.bindTexture(k,ge),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Fe=0;Fe<Ee;Fe++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ue,0,o.RGBA,1,1,Ie,0,o.RGBA,o.UNSIGNED_BYTE,be):o.texImage2D(Ue+Fe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,be);return ge}const Se={};Se[o.TEXTURE_2D]=pe(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=pe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=pe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=pe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ae(o.DEPTH_TEST),u.setFunc(zr),bt(!1),pt(s0),Ae(o.CULL_FACE),z(as);function Ae(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function we(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function lt(k,Ue){return _[k]!==Ue?(o.bindFramebuffer(k,Ue),_[k]=Ue,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ue),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Ze(k,Ue){let Ee=y,Ie=!1;if(k){Ee=v.get(Ue),Ee===void 0&&(Ee=[],v.set(Ue,Ee));const be=k.textures;if(Ee.length!==be.length||Ee[0]!==o.COLOR_ATTACHMENT0){for(let ge=0,Fe=be.length;ge<Fe;ge++)Ee[ge]=o.COLOR_ATTACHMENT0+ge;Ee.length=be.length,Ie=!0}}else Ee[0]!==o.BACK&&(Ee[0]=o.BACK,Ie=!0);Ie&&o.drawBuffers(Ee)}function Bt(k){return E!==k?(o.useProgram(k),E=k,!0):!1}const kt={[Is]:o.FUNC_ADD,[RS]:o.FUNC_SUBTRACT,[wS]:o.FUNC_REVERSE_SUBTRACT};kt[CS]=o.MIN,kt[DS]=o.MAX;const xt={[US]:o.ZERO,[LS]:o.ONE,[NS]:o.SRC_COLOR,[ud]:o.SRC_ALPHA,[zS]:o.SRC_ALPHA_SATURATE,[BS]:o.DST_COLOR,[PS]:o.DST_ALPHA,[OS]:o.ONE_MINUS_SRC_COLOR,[fd]:o.ONE_MINUS_SRC_ALPHA,[FS]:o.ONE_MINUS_DST_COLOR,[IS]:o.ONE_MINUS_DST_ALPHA,[HS]:o.CONSTANT_COLOR,[GS]:o.ONE_MINUS_CONSTANT_COLOR,[VS]:o.CONSTANT_ALPHA,[kS]:o.ONE_MINUS_CONSTANT_ALPHA};function z(k,Ue,Ee,Ie,be,ge,Fe,tt,Lt,At){if(k===as){T===!0&&(we(o.BLEND),T=!1);return}if(T===!1&&(Ae(o.BLEND),T=!0),k!==AS){if(k!==S||At!==D){if((x!==Is||w!==Is)&&(o.blendEquation(o.FUNC_ADD),x=Is,w=Is),At)switch(k){case Pr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case r0:o.blendFunc(o.ONE,o.ONE);break;case o0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case l0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Pr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case r0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case o0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case l0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}N=null,L=null,F=null,H=null,B.set(0,0,0),X=0,S=k,D=At}return}be=be||Ue,ge=ge||Ee,Fe=Fe||Ie,(Ue!==x||be!==w)&&(o.blendEquationSeparate(kt[Ue],kt[be]),x=Ue,w=be),(Ee!==N||Ie!==L||ge!==F||Fe!==H)&&(o.blendFuncSeparate(xt[Ee],xt[Ie],xt[ge],xt[Fe]),N=Ee,L=Ie,F=ge,H=Fe),(tt.equals(B)===!1||Lt!==X)&&(o.blendColor(tt.r,tt.g,tt.b,Lt),B.copy(tt),X=Lt),S=k,D=!1}function Mn(k,Ue){k.side===Ii?we(o.CULL_FACE):Ae(o.CULL_FACE);let Ee=k.side===Yn;Ue&&(Ee=!Ee),bt(Ee),k.blending===Pr&&k.transparent===!1?z(as):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),c.setMask(k.colorWrite);const Ie=k.stencilWrite;h.setTest(Ie),Ie&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),St(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ae(o.SAMPLE_ALPHA_TO_COVERAGE):we(o.SAMPLE_ALPHA_TO_COVERAGE)}function bt(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function pt(k){k!==ES?(Ae(o.CULL_FACE),k!==V&&(k===s0?o.cullFace(o.BACK):k===TS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):we(o.CULL_FACE),V=k}function Ge(k){k!==le&&(I&&o.lineWidth(k),le=k)}function St(k,Ue,Ee){k?(Ae(o.POLYGON_OFFSET_FILL),(re!==Ue||_e!==Ee)&&(o.polygonOffset(Ue,Ee),re=Ue,_e=Ee)):we(o.POLYGON_OFFSET_FILL)}function Ye(k){k?Ae(o.SCISSOR_TEST):we(o.SCISSOR_TEST)}function it(k){k===void 0&&(k=o.TEXTURE0+he-1),Me!==k&&(o.activeTexture(k),Me=k)}function en(k,Ue,Ee){Ee===void 0&&(Me===null?Ee=o.TEXTURE0+he-1:Ee=Me);let Ie=U[Ee];Ie===void 0&&(Ie={type:void 0,texture:void 0},U[Ee]=Ie),(Ie.type!==k||Ie.texture!==Ue)&&(Me!==Ee&&(o.activeTexture(Ee),Me=Ee),o.bindTexture(k,Ue||Se[k]),Ie.type=k,Ie.texture=Ue)}function O(){const k=U[Me];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(k){xe.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),xe.copy(k))}function We(k){J.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function qe(k,Ue){let Ee=d.get(Ue);Ee===void 0&&(Ee=new WeakMap,d.set(Ue,Ee));let Ie=Ee.get(k);Ie===void 0&&(Ie=o.getUniformBlockIndex(Ue,k.name),Ee.set(k,Ie))}function Re(k,Ue){const Ie=d.get(Ue).get(k);p.get(Ue)!==Ie&&(o.uniformBlockBinding(Ue,Ie,k.__bindingPointIndex),p.set(Ue,Ie))}function nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Me=null,U={},_={},v=new WeakMap,y=[],E=null,T=!1,S=null,x=null,N=null,L=null,w=null,F=null,H=null,B=new at(0,0,0),X=0,D=!1,C=null,V=null,le=null,re=null,_e=null,xe.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Ae,disable:we,bindFramebuffer:lt,drawBuffers:Ze,useProgram:Bt,setBlending:z,setMaterial:Mn,setFlipSided:bt,setCullFace:pt,setLineWidth:Ge,setPolygonOffset:St,setScissorTest:Ye,activeTexture:it,bindTexture:en,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:te,texImage2D:Ve,texImage3D:ye,updateUBOMapping:qe,uniformBlockBinding:Re,texStorage2D:De,texStorage3D:He,texSubImage2D:ue,texSubImage3D:de,compressedTexSubImage2D:oe,compressedTexSubImage3D:Oe,scissor:Pe,viewport:We,reset:nt}}function ER(o,e,n,a,r,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new yt,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return y?new OffscreenCanvas(O,b):pl("canvas")}function T(O,b,te){let ue=1;const de=en(O);if((de.width>te||de.height>te)&&(ue=te/Math.max(de.width,de.height)),ue<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const oe=Math.floor(ue*de.width),Oe=Math.floor(ue*de.height);_===void 0&&(_=E(oe,Oe));const De=b?E(oe,Oe):_;return De.width=oe,De.height=Oe,De.getContext("2d").drawImage(O,0,0,oe,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+oe+"x"+Oe+")."),De}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),O;return O}function S(O){return O.generateMipmaps}function x(O){o.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(O,b,te,ue,de=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let oe=b;if(b===o.RED&&(te===o.FLOAT&&(oe=o.R32F),te===o.HALF_FLOAT&&(oe=o.R16F),te===o.UNSIGNED_BYTE&&(oe=o.R8)),b===o.RED_INTEGER&&(te===o.UNSIGNED_BYTE&&(oe=o.R8UI),te===o.UNSIGNED_SHORT&&(oe=o.R16UI),te===o.UNSIGNED_INT&&(oe=o.R32UI),te===o.BYTE&&(oe=o.R8I),te===o.SHORT&&(oe=o.R16I),te===o.INT&&(oe=o.R32I)),b===o.RG&&(te===o.FLOAT&&(oe=o.RG32F),te===o.HALF_FLOAT&&(oe=o.RG16F),te===o.UNSIGNED_BYTE&&(oe=o.RG8)),b===o.RG_INTEGER&&(te===o.UNSIGNED_BYTE&&(oe=o.RG8UI),te===o.UNSIGNED_SHORT&&(oe=o.RG16UI),te===o.UNSIGNED_INT&&(oe=o.RG32UI),te===o.BYTE&&(oe=o.RG8I),te===o.SHORT&&(oe=o.RG16I),te===o.INT&&(oe=o.RG32I)),b===o.RGB_INTEGER&&(te===o.UNSIGNED_BYTE&&(oe=o.RGB8UI),te===o.UNSIGNED_SHORT&&(oe=o.RGB16UI),te===o.UNSIGNED_INT&&(oe=o.RGB32UI),te===o.BYTE&&(oe=o.RGB8I),te===o.SHORT&&(oe=o.RGB16I),te===o.INT&&(oe=o.RGB32I)),b===o.RGBA_INTEGER&&(te===o.UNSIGNED_BYTE&&(oe=o.RGBA8UI),te===o.UNSIGNED_SHORT&&(oe=o.RGBA16UI),te===o.UNSIGNED_INT&&(oe=o.RGBA32UI),te===o.BYTE&&(oe=o.RGBA8I),te===o.SHORT&&(oe=o.RGBA16I),te===o.INT&&(oe=o.RGBA32I)),b===o.RGB&&te===o.UNSIGNED_INT_5_9_9_9_REV&&(oe=o.RGB9_E5),b===o.RGBA){const Oe=de?cu:Tt.getTransfer(ue);te===o.FLOAT&&(oe=o.RGBA32F),te===o.HALF_FLOAT&&(oe=o.RGBA16F),te===o.UNSIGNED_BYTE&&(oe=Oe===Vt?o.SRGB8_ALPHA8:o.RGBA8),te===o.UNSIGNED_SHORT_4_4_4_4&&(oe=o.RGBA4),te===o.UNSIGNED_SHORT_5_5_5_1&&(oe=o.RGB5_A1)}return(oe===o.R16F||oe===o.R32F||oe===o.RG16F||oe===o.RG32F||oe===o.RGBA16F||oe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function w(O,b){let te;return O?b===null||b===zs||b===cl?te=o.DEPTH24_STENCIL8:b===bi?te=o.DEPTH32F_STENCIL8:b===ll&&(te=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===zs||b===cl?te=o.DEPTH_COMPONENT24:b===bi?te=o.DEPTH_COMPONENT32F:b===ll&&(te=o.DEPTH_COMPONENT16),te}function F(O,b){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Fn&&O.minFilter!==ai?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function H(O){const b=O.target;b.removeEventListener("dispose",H),X(b),b.isVideoTexture&&g.delete(b)}function B(O){const b=O.target;b.removeEventListener("dispose",B),C(b)}function X(O){const b=a.get(O);if(b.__webglInit===void 0)return;const te=O.source,ue=v.get(te);if(ue){const de=ue[b.__cacheKey];de.usedTimes--,de.usedTimes===0&&D(O),Object.keys(ue).length===0&&v.delete(te)}a.remove(O)}function D(O){const b=a.get(O);o.deleteTexture(b.__webglTexture);const te=O.source,ue=v.get(te);delete ue[b.__cacheKey],u.memory.textures--}function C(O){const b=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(b.__webglFramebuffer[ue]))for(let de=0;de<b.__webglFramebuffer[ue].length;de++)o.deleteFramebuffer(b.__webglFramebuffer[ue][de]);else o.deleteFramebuffer(b.__webglFramebuffer[ue]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[ue])}else{if(Array.isArray(b.__webglFramebuffer))for(let ue=0;ue<b.__webglFramebuffer.length;ue++)o.deleteFramebuffer(b.__webglFramebuffer[ue]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ue=0;ue<b.__webglColorRenderbuffer.length;ue++)b.__webglColorRenderbuffer[ue]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[ue]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const te=O.textures;for(let ue=0,de=te.length;ue<de;ue++){const oe=a.get(te[ue]);oe.__webglTexture&&(o.deleteTexture(oe.__webglTexture),u.memory.textures--),a.remove(te[ue])}a.remove(O)}let V=0;function le(){V=0}function re(){const O=V;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),V+=1,O}function _e(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function he(O,b){const te=a.get(O);if(O.isVideoTexture&&Ye(O),O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){const ue=O.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(te,O,b);return}}n.bindTexture(o.TEXTURE_2D,te.__webglTexture,o.TEXTURE0+b)}function I(O,b){const te=a.get(O);if(O.version>0&&te.__version!==O.version){Se(te,O,b);return}n.bindTexture(o.TEXTURE_2D_ARRAY,te.__webglTexture,o.TEXTURE0+b)}function Z(O,b){const te=a.get(O);if(O.version>0&&te.__version!==O.version){Se(te,O,b);return}n.bindTexture(o.TEXTURE_3D,te.__webglTexture,o.TEXTURE0+b)}function Y(O,b){const te=a.get(O);if(O.version>0&&te.__version!==O.version){Ae(te,O,b);return}n.bindTexture(o.TEXTURE_CUBE_MAP,te.__webglTexture,o.TEXTURE0+b)}const Me={[Vr]:o.REPEAT,[ns]:o.CLAMP_TO_EDGE,[lu]:o.MIRRORED_REPEAT},U={[Fn]:o.NEAREST,[Dv]:o.NEAREST_MIPMAP_NEAREST,[il]:o.NEAREST_MIPMAP_LINEAR,[ai]:o.LINEAR,[tu]:o.LINEAR_MIPMAP_NEAREST,[ma]:o.LINEAR_MIPMAP_LINEAR},ee={[sM]:o.NEVER,[fM]:o.ALWAYS,[rM]:o.LESS,[Hv]:o.LEQUAL,[oM]:o.EQUAL,[uM]:o.GEQUAL,[lM]:o.GREATER,[cM]:o.NOTEQUAL};function ve(O,b){if(b.type===bi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ai||b.magFilter===tu||b.magFilter===il||b.magFilter===ma||b.minFilter===ai||b.minFilter===tu||b.minFilter===il||b.minFilter===ma)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Me[b.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Me[b.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Me[b.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,U[b.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,U[b.minFilter]),b.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Fn||b.minFilter!==il&&b.minFilter!==ma||b.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function xe(O,b){let te=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",H));const ue=b.source;let de=v.get(ue);de===void 0&&(de={},v.set(ue,de));const oe=_e(b);if(oe!==O.__cacheKey){de[oe]===void 0&&(de[oe]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,te=!0),de[oe].usedTimes++;const Oe=de[O.__cacheKey];Oe!==void 0&&(de[O.__cacheKey].usedTimes--,Oe.usedTimes===0&&D(b)),O.__cacheKey=oe,O.__webglTexture=de[oe].texture}return te}function J(O,b,te){return Math.floor(Math.floor(O/te)/b)}function pe(O,b,te,ue){const oe=O.updateRanges;if(oe.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,te,ue,b.data);else{oe.sort((ye,Pe)=>ye.start-Pe.start);let Oe=0;for(let ye=1;ye<oe.length;ye++){const Pe=oe[Oe],We=oe[ye],qe=Pe.start+Pe.count,Re=J(We.start,b.width,4),nt=J(Pe.start,b.width,4);We.start<=qe+1&&Re===nt&&J(We.start+We.count-1,b.width,4)===Re?Pe.count=Math.max(Pe.count,We.start+We.count-Pe.start):(++Oe,oe[Oe]=We)}oe.length=Oe+1;const De=o.getParameter(o.UNPACK_ROW_LENGTH),He=o.getParameter(o.UNPACK_SKIP_PIXELS),Ve=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let ye=0,Pe=oe.length;ye<Pe;ye++){const We=oe[ye],qe=Math.floor(We.start/4),Re=Math.ceil(We.count/4),nt=qe%b.width,k=Math.floor(qe/b.width),Ue=Re,Ee=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,nt),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),n.texSubImage2D(o.TEXTURE_2D,0,nt,k,Ue,Ee,te,ue,b.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,De),o.pixelStorei(o.UNPACK_SKIP_PIXELS,He),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ve)}}function Se(O,b,te){let ue=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ue=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ue=o.TEXTURE_3D);const de=xe(O,b),oe=b.source;n.bindTexture(ue,O.__webglTexture,o.TEXTURE0+te);const Oe=a.get(oe);if(oe.version!==Oe.__version||de===!0){n.activeTexture(o.TEXTURE0+te);const De=Tt.getPrimaries(Tt.workingColorSpace),He=b.colorSpace===ts?null:Tt.getPrimaries(b.colorSpace),Ve=b.colorSpace===ts||De===He?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ye=T(b.image,!1,r.maxTextureSize);ye=it(b,ye);const Pe=c.convert(b.format,b.colorSpace),We=c.convert(b.type);let qe=L(b.internalFormat,Pe,We,b.colorSpace,b.isVideoTexture);ve(ue,b);let Re;const nt=b.mipmaps,k=b.isVideoTexture!==!0,Ue=Oe.__version===void 0||de===!0,Ee=oe.dataReady,Ie=F(b,ye);if(b.isDepthTexture)qe=w(b.format===fl,b.type),Ue&&(k?n.texStorage2D(o.TEXTURE_2D,1,qe,ye.width,ye.height):n.texImage2D(o.TEXTURE_2D,0,qe,ye.width,ye.height,0,Pe,We,null));else if(b.isDataTexture)if(nt.length>0){k&&Ue&&n.texStorage2D(o.TEXTURE_2D,Ie,qe,nt[0].width,nt[0].height);for(let be=0,ge=nt.length;be<ge;be++)Re=nt[be],k?Ee&&n.texSubImage2D(o.TEXTURE_2D,be,0,0,Re.width,Re.height,Pe,We,Re.data):n.texImage2D(o.TEXTURE_2D,be,qe,Re.width,Re.height,0,Pe,We,Re.data);b.generateMipmaps=!1}else k?(Ue&&n.texStorage2D(o.TEXTURE_2D,Ie,qe,ye.width,ye.height),Ee&&pe(b,ye,Pe,We)):n.texImage2D(o.TEXTURE_2D,0,qe,ye.width,ye.height,0,Pe,We,ye.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&Ue&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,qe,nt[0].width,nt[0].height,ye.depth);for(let be=0,ge=nt.length;be<ge;be++)if(Re=nt[be],b.format!==pi)if(Pe!==null)if(k){if(Ee)if(b.layerUpdates.size>0){const Fe=Q0(Re.width,Re.height,b.format,b.type);for(const tt of b.layerUpdates){const Lt=Re.data.subarray(tt*Fe/Re.data.BYTES_PER_ELEMENT,(tt+1)*Fe/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,tt,Re.width,Re.height,1,Pe,Lt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,Re.width,Re.height,ye.depth,Pe,Re.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,be,qe,Re.width,Re.height,ye.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ee&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,Re.width,Re.height,ye.depth,Pe,We,Re.data):n.texImage3D(o.TEXTURE_2D_ARRAY,be,qe,Re.width,Re.height,ye.depth,0,Pe,We,Re.data)}else{k&&Ue&&n.texStorage2D(o.TEXTURE_2D,Ie,qe,nt[0].width,nt[0].height);for(let be=0,ge=nt.length;be<ge;be++)Re=nt[be],b.format!==pi?Pe!==null?k?Ee&&n.compressedTexSubImage2D(o.TEXTURE_2D,be,0,0,Re.width,Re.height,Pe,Re.data):n.compressedTexImage2D(o.TEXTURE_2D,be,qe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ee&&n.texSubImage2D(o.TEXTURE_2D,be,0,0,Re.width,Re.height,Pe,We,Re.data):n.texImage2D(o.TEXTURE_2D,be,qe,Re.width,Re.height,0,Pe,We,Re.data)}else if(b.isDataArrayTexture)if(k){if(Ue&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,qe,ye.width,ye.height,ye.depth),Ee)if(b.layerUpdates.size>0){const be=Q0(ye.width,ye.height,b.format,b.type);for(const ge of b.layerUpdates){const Fe=ye.data.subarray(ge*be/ye.data.BYTES_PER_ELEMENT,(ge+1)*be/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ge,ye.width,ye.height,1,Pe,We,Fe)}b.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Pe,We,ye.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,qe,ye.width,ye.height,ye.depth,0,Pe,We,ye.data);else if(b.isData3DTexture)k?(Ue&&n.texStorage3D(o.TEXTURE_3D,Ie,qe,ye.width,ye.height,ye.depth),Ee&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Pe,We,ye.data)):n.texImage3D(o.TEXTURE_3D,0,qe,ye.width,ye.height,ye.depth,0,Pe,We,ye.data);else if(b.isFramebufferTexture){if(Ue)if(k)n.texStorage2D(o.TEXTURE_2D,Ie,qe,ye.width,ye.height);else{let be=ye.width,ge=ye.height;for(let Fe=0;Fe<Ie;Fe++)n.texImage2D(o.TEXTURE_2D,Fe,qe,be,ge,0,Pe,We,null),be>>=1,ge>>=1}}else if(nt.length>0){if(k&&Ue){const be=en(nt[0]);n.texStorage2D(o.TEXTURE_2D,Ie,qe,be.width,be.height)}for(let be=0,ge=nt.length;be<ge;be++)Re=nt[be],k?Ee&&n.texSubImage2D(o.TEXTURE_2D,be,0,0,Pe,We,Re):n.texImage2D(o.TEXTURE_2D,be,qe,Pe,We,Re);b.generateMipmaps=!1}else if(k){if(Ue){const be=en(ye);n.texStorage2D(o.TEXTURE_2D,Ie,qe,be.width,be.height)}Ee&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Pe,We,ye)}else n.texImage2D(o.TEXTURE_2D,0,qe,Pe,We,ye);S(b)&&x(ue),Oe.__version=oe.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Ae(O,b,te){if(b.image.length!==6)return;const ue=xe(O,b),de=b.source;n.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+te);const oe=a.get(de);if(de.version!==oe.__version||ue===!0){n.activeTexture(o.TEXTURE0+te);const Oe=Tt.getPrimaries(Tt.workingColorSpace),De=b.colorSpace===ts?null:Tt.getPrimaries(b.colorSpace),He=b.colorSpace===ts||Oe===De?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Ve=b.isCompressedTexture||b.image[0].isCompressedTexture,ye=b.image[0]&&b.image[0].isDataTexture,Pe=[];for(let ge=0;ge<6;ge++)!Ve&&!ye?Pe[ge]=T(b.image[ge],!0,r.maxCubemapSize):Pe[ge]=ye?b.image[ge].image:b.image[ge],Pe[ge]=it(b,Pe[ge]);const We=Pe[0],qe=c.convert(b.format,b.colorSpace),Re=c.convert(b.type),nt=L(b.internalFormat,qe,Re,b.colorSpace),k=b.isVideoTexture!==!0,Ue=oe.__version===void 0||ue===!0,Ee=de.dataReady;let Ie=F(b,We);ve(o.TEXTURE_CUBE_MAP,b);let be;if(Ve){k&&Ue&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,nt,We.width,We.height);for(let ge=0;ge<6;ge++){be=Pe[ge].mipmaps;for(let Fe=0;Fe<be.length;Fe++){const tt=be[Fe];b.format!==pi?qe!==null?k?Ee&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,0,0,tt.width,tt.height,qe,tt.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,nt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ee&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,0,0,tt.width,tt.height,qe,Re,tt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,nt,tt.width,tt.height,0,qe,Re,tt.data)}}}else{if(be=b.mipmaps,k&&Ue){be.length>0&&Ie++;const ge=en(Pe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,nt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ye){k?Ee&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Pe[ge].width,Pe[ge].height,qe,Re,Pe[ge].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,nt,Pe[ge].width,Pe[ge].height,0,qe,Re,Pe[ge].data);for(let Fe=0;Fe<be.length;Fe++){const Lt=be[Fe].image[ge].image;k?Ee&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,0,0,Lt.width,Lt.height,qe,Re,Lt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,nt,Lt.width,Lt.height,0,qe,Re,Lt.data)}}else{k?Ee&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,qe,Re,Pe[ge]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,nt,qe,Re,Pe[ge]);for(let Fe=0;Fe<be.length;Fe++){const tt=be[Fe];k?Ee&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,0,0,qe,Re,tt.image[ge]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,nt,qe,Re,tt.image[ge])}}}S(b)&&x(o.TEXTURE_CUBE_MAP),oe.__version=de.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function we(O,b,te,ue,de,oe){const Oe=c.convert(te.format,te.colorSpace),De=c.convert(te.type),He=L(te.internalFormat,Oe,De,te.colorSpace),Ve=a.get(b),ye=a.get(te);if(ye.__renderTarget=b,!Ve.__hasExternalTextures){const Pe=Math.max(1,b.width>>oe),We=Math.max(1,b.height>>oe);de===o.TEXTURE_3D||de===o.TEXTURE_2D_ARRAY?n.texImage3D(de,oe,He,Pe,We,b.depth,0,Oe,De,null):n.texImage2D(de,oe,He,Pe,We,0,Oe,De,null)}n.bindFramebuffer(o.FRAMEBUFFER,O),St(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ue,de,ye.__webglTexture,0,Ge(b)):(de===o.TEXTURE_2D||de>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ue,de,ye.__webglTexture,oe),n.bindFramebuffer(o.FRAMEBUFFER,null)}function lt(O,b,te){if(o.bindRenderbuffer(o.RENDERBUFFER,O),b.depthBuffer){const ue=b.depthTexture,de=ue&&ue.isDepthTexture?ue.type:null,oe=w(b.stencilBuffer,de),Oe=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,De=Ge(b);St(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,De,oe,b.width,b.height):te?o.renderbufferStorageMultisample(o.RENDERBUFFER,De,oe,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,oe,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Oe,o.RENDERBUFFER,O)}else{const ue=b.textures;for(let de=0;de<ue.length;de++){const oe=ue[de],Oe=c.convert(oe.format,oe.colorSpace),De=c.convert(oe.type),He=L(oe.internalFormat,Oe,De,oe.colorSpace),Ve=Ge(b);te&&St(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ve,He,b.width,b.height):St(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ve,He,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,He,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ze(O,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=a.get(b.depthTexture);ue.__renderTarget=b,(!ue.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),he(b.depthTexture,0);const de=ue.__webglTexture,oe=Ge(b);if(b.depthTexture.format===ul)St(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,de,0,oe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,de,0);else if(b.depthTexture.format===fl)St(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,de,0,oe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Bt(O){const b=a.get(O),te=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const ue=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ue){const de=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ue.removeEventListener("dispose",de)};ue.addEventListener("dispose",de),b.__depthDisposeCallback=de}b.__boundDepthTexture=ue}if(O.depthTexture&&!b.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const ue=O.texture.mipmaps;ue&&ue.length>0?Ze(b.__webglFramebuffer[0],O):Ze(b.__webglFramebuffer,O)}else if(te){b.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[ue]),b.__webglDepthbuffer[ue]===void 0)b.__webglDepthbuffer[ue]=o.createRenderbuffer(),lt(b.__webglDepthbuffer[ue],O,!1);else{const de=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[ue];o.bindRenderbuffer(o.RENDERBUFFER,oe),o.framebufferRenderbuffer(o.FRAMEBUFFER,de,o.RENDERBUFFER,oe)}}else{const ue=O.texture.mipmaps;if(ue&&ue.length>0?n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),lt(b.__webglDepthbuffer,O,!1);else{const de=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,oe),o.framebufferRenderbuffer(o.FRAMEBUFFER,de,o.RENDERBUFFER,oe)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(O,b,te){const ue=a.get(O);b!==void 0&&we(ue.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),te!==void 0&&Bt(O)}function xt(O){const b=O.texture,te=a.get(O),ue=a.get(b);O.addEventListener("dispose",B);const de=O.textures,oe=O.isWebGLCubeRenderTarget===!0,Oe=de.length>1;if(Oe||(ue.__webglTexture===void 0&&(ue.__webglTexture=o.createTexture()),ue.__version=b.version,u.memory.textures++),oe){te.__webglFramebuffer=[];for(let De=0;De<6;De++)if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer[De]=[];for(let He=0;He<b.mipmaps.length;He++)te.__webglFramebuffer[De][He]=o.createFramebuffer()}else te.__webglFramebuffer[De]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer=[];for(let De=0;De<b.mipmaps.length;De++)te.__webglFramebuffer[De]=o.createFramebuffer()}else te.__webglFramebuffer=o.createFramebuffer();if(Oe)for(let De=0,He=de.length;De<He;De++){const Ve=a.get(de[De]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=o.createTexture(),u.memory.textures++)}if(O.samples>0&&St(O)===!1){te.__webglMultisampledFramebuffer=o.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let De=0;De<de.length;De++){const He=de[De];te.__webglColorRenderbuffer[De]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,te.__webglColorRenderbuffer[De]);const Ve=c.convert(He.format,He.colorSpace),ye=c.convert(He.type),Pe=L(He.internalFormat,Ve,ye,He.colorSpace,O.isXRRenderTarget===!0),We=Ge(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,We,Pe,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,te.__webglColorRenderbuffer[De])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(te.__webglDepthRenderbuffer=o.createRenderbuffer(),lt(te.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(oe){n.bindTexture(o.TEXTURE_CUBE_MAP,ue.__webglTexture),ve(o.TEXTURE_CUBE_MAP,b);for(let De=0;De<6;De++)if(b.mipmaps&&b.mipmaps.length>0)for(let He=0;He<b.mipmaps.length;He++)we(te.__webglFramebuffer[De][He],O,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,He);else we(te.__webglFramebuffer[De],O,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);S(b)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Oe){for(let De=0,He=de.length;De<He;De++){const Ve=de[De],ye=a.get(Ve);n.bindTexture(o.TEXTURE_2D,ye.__webglTexture),ve(o.TEXTURE_2D,Ve),we(te.__webglFramebuffer,O,Ve,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,0),S(Ve)&&x(o.TEXTURE_2D)}n.unbindTexture()}else{let De=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(De=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(De,ue.__webglTexture),ve(De,b),b.mipmaps&&b.mipmaps.length>0)for(let He=0;He<b.mipmaps.length;He++)we(te.__webglFramebuffer[He],O,b,o.COLOR_ATTACHMENT0,De,He);else we(te.__webglFramebuffer,O,b,o.COLOR_ATTACHMENT0,De,0);S(b)&&x(De),n.unbindTexture()}O.depthBuffer&&Bt(O)}function z(O){const b=O.textures;for(let te=0,ue=b.length;te<ue;te++){const de=b[te];if(S(de)){const oe=N(O),Oe=a.get(de).__webglTexture;n.bindTexture(oe,Oe),x(oe),n.unbindTexture()}}}const Mn=[],bt=[];function pt(O){if(O.samples>0){if(St(O)===!1){const b=O.textures,te=O.width,ue=O.height;let de=o.COLOR_BUFFER_BIT;const oe=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Oe=a.get(O),De=b.length>1;if(De)for(let Ve=0;Ve<b.length;Ve++)n.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const He=O.texture.mipmaps;He&&He.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ve=0;Ve<b.length;Ve++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(de|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(de|=o.STENCIL_BUFFER_BIT)),De){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ve]);const ye=a.get(b[Ve]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ye,0)}o.blitFramebuffer(0,0,te,ue,0,0,te,ue,de,o.NEAREST),p===!0&&(Mn.length=0,bt.length=0,Mn.push(o.COLOR_ATTACHMENT0+Ve),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Mn.push(oe),bt.push(oe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,bt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Mn))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),De)for(let Ve=0;Ve<b.length;Ve++){n.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ve]);const ye=a.get(b[Ve]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.TEXTURE_2D,ye,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const b=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Ge(O){return Math.min(r.maxSamples,O.samples)}function St(O){const b=a.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ye(O){const b=u.render.frame;g.get(O)!==b&&(g.set(O,b),O.update())}function it(O,b){const te=O.colorSpace,ue=O.format,de=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||te!==Hn&&te!==ts&&(Tt.getTransfer(te)===Vt?(ue!==pi||de!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),b}function en(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=re,this.resetTextureUnits=le,this.setTexture2D=he,this.setTexture2DArray=I,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=kt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=St}function TR(o,e){function n(a,r=ts){let c;const u=Tt.getTransfer(r);if(a===Fi)return o.UNSIGNED_BYTE;if(a===ip)return o.UNSIGNED_SHORT_4_4_4_4;if(a===ap)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Nv)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===Uv)return o.BYTE;if(a===Lv)return o.SHORT;if(a===ll)return o.UNSIGNED_SHORT;if(a===np)return o.INT;if(a===zs)return o.UNSIGNED_INT;if(a===bi)return o.FLOAT;if(a===ml)return o.HALF_FLOAT;if(a===Ov)return o.ALPHA;if(a===Pv)return o.RGB;if(a===pi)return o.RGBA;if(a===ul)return o.DEPTH_COMPONENT;if(a===fl)return o.DEPTH_STENCIL;if(a===sp)return o.RED;if(a===rp)return o.RED_INTEGER;if(a===Iv)return o.RG;if(a===op)return o.RG_INTEGER;if(a===lp)return o.RGBA_INTEGER;if(a===nu||a===iu||a===au||a===su)if(u===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Sd||a===Md||a===Ed||a===Td)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Sd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Md)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ed)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Td)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===bd||a===Ad||a===Rd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===bd||a===Ad)return u===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Rd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===wd||a===Cd||a===Dd||a===Ud||a===Ld||a===Nd||a===Od||a===Pd||a===Id||a===Bd||a===Fd||a===zd||a===Hd||a===Gd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===wd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Cd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Dd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ud)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ld)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Nd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Od)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Pd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Id)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Bd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Fd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===zd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Hd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Gd)return u===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===ru||a===Vd||a===kd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===ru)return u===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Vd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===kd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Bv||a===Xd||a===Wd||a===qd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===ru)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Xd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Wd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===cl?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const bR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AR=`
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

}`;class RR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,a){if(this.texture===null){const r=new Sn,c=e.properties.get(r);c.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new rs({vertexShader:bR,fragmentShader:AR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qn(new mu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wR extends jr{constructor(e,n){super();const a=this;let r=null,c=1,u=null,h="local-floor",p=1,d=null,g=null,_=null,v=null,y=null,E=null;const T=new RR,S=n.getContextAttributes();let x=null,N=null;const L=[],w=[],F=new yt;let H=null;const B=new Bn;B.viewport=new Ct;const X=new Bn;X.viewport=new Ct;const D=[B,X],C=new HE;let V=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pe=L[J];return pe===void 0&&(pe=new Yh,L[J]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(J){let pe=L[J];return pe===void 0&&(pe=new Yh,L[J]=pe),pe.getGripSpace()},this.getHand=function(J){let pe=L[J];return pe===void 0&&(pe=new Yh,L[J]=pe),pe.getHandSpace()};function re(J){const pe=w.indexOf(J.inputSource);if(pe===-1)return;const Se=L[pe];Se!==void 0&&(Se.update(J.inputSource,J.frame,d||u),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function _e(){r.removeEventListener("select",re),r.removeEventListener("selectstart",re),r.removeEventListener("selectend",re),r.removeEventListener("squeeze",re),r.removeEventListener("squeezestart",re),r.removeEventListener("squeezeend",re),r.removeEventListener("end",_e),r.removeEventListener("inputsourceschange",he);for(let J=0;J<L.length;J++){const pe=w[J];pe!==null&&(w[J]=null,L[J].disconnect(pe))}V=null,le=null,T.reset(),e.setRenderTarget(x),y=null,v=null,_=null,r=null,N=null,xe.stop(),a.isPresenting=!1,e.setPixelRatio(H),e.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(J){d=J},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",re),r.addEventListener("selectstart",re),r.addEventListener("selectend",re),r.addEventListener("squeeze",re),r.addEventListener("squeezestart",re),r.addEventListener("squeezeend",re),r.addEventListener("end",_e),r.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await n.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ae=null,we=null;S.depth&&(we=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=S.stencil?fl:ul,Ae=S.stencil?cl:zs);const lt={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:c};_=new XRWebGLBinding(r,n),v=_.createProjectionLayer(lt),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new Hs(v.textureWidth,v.textureHeight,{format:pi,type:Fi,depthTexture:new ey(v.textureWidth,v.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(r,n,Se),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Hs(y.framebufferWidth,y.framebufferHeight,{format:pi,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await r.requestReferenceSpace(h),xe.setContext(r),xe.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function he(J){for(let pe=0;pe<J.removed.length;pe++){const Se=J.removed[pe],Ae=w.indexOf(Se);Ae>=0&&(w[Ae]=null,L[Ae].disconnect(Se))}for(let pe=0;pe<J.added.length;pe++){const Se=J.added[pe];let Ae=w.indexOf(Se);if(Ae===-1){for(let lt=0;lt<L.length;lt++)if(lt>=w.length){w.push(Se),Ae=lt;break}else if(w[lt]===null){w[lt]=Se,Ae=lt;break}if(Ae===-1)break}const we=L[Ae];we&&we.connect(Se)}}const I=new j,Z=new j;function Y(J,pe,Se){I.setFromMatrixPosition(pe.matrixWorld),Z.setFromMatrixPosition(Se.matrixWorld);const Ae=I.distanceTo(Z),we=pe.projectionMatrix.elements,lt=Se.projectionMatrix.elements,Ze=we[14]/(we[10]-1),Bt=we[14]/(we[10]+1),kt=(we[9]+1)/we[5],xt=(we[9]-1)/we[5],z=(we[8]-1)/we[0],Mn=(lt[8]+1)/lt[0],bt=Ze*z,pt=Ze*Mn,Ge=Ae/(-z+Mn),St=Ge*-z;if(pe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(St),J.translateZ(Ge),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),we[10]===-1)J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ye=Ze+Ge,it=Bt+Ge,en=bt-St,O=pt+(Ae-St),b=kt*Bt/it*Ye,te=xt*Bt/it*Ye;J.projectionMatrix.makePerspective(en,O,b,te,Ye,it),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Me(J,pe){pe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let pe=J.near,Se=J.far;T.texture!==null&&(T.depthNear>0&&(pe=T.depthNear),T.depthFar>0&&(Se=T.depthFar)),C.near=X.near=B.near=pe,C.far=X.far=B.far=Se,(V!==C.near||le!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,le=C.far),B.layers.mask=J.layers.mask|2,X.layers.mask=J.layers.mask|4,C.layers.mask=B.layers.mask|X.layers.mask;const Ae=J.parent,we=C.cameras;Me(C,Ae);for(let lt=0;lt<we.length;lt++)Me(we[lt],Ae);we.length===2?Y(C,B,X):C.projectionMatrix.copy(B.projectionMatrix),U(J,C,Ae)};function U(J,pe,Se){Se===null?J.matrix.copy(pe.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(pe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=kr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(J){p=J,v!==null&&(v.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let ee=null;function ve(J,pe){if(g=pe.getViewerPose(d||u),E=pe,g!==null){const Se=g.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let Ae=!1;Se.length!==C.cameras.length&&(C.cameras.length=0,Ae=!0);for(let Ze=0;Ze<Se.length;Ze++){const Bt=Se[Ze];let kt=null;if(y!==null)kt=y.getViewport(Bt);else{const z=_.getViewSubImage(v,Bt);kt=z.viewport,Ze===0&&(e.setRenderTargetTextures(N,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(N))}let xt=D[Ze];xt===void 0&&(xt=new Bn,xt.layers.enable(Ze),xt.viewport=new Ct,D[Ze]=xt),xt.matrix.fromArray(Bt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(Bt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(kt.x,kt.y,kt.width,kt.height),Ze===0&&(C.matrix.copy(xt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ae===!0&&C.cameras.push(xt)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){const Ze=_.getDepthInformation(Se[0]);Ze&&Ze.isValid&&Ze.texture&&T.init(e,Ze,r.renderState)}}for(let Se=0;Se<L.length;Se++){const Ae=w[Se],we=L[Se];Ae!==null&&we!==void 0&&we.update(Ae,pe,d||u)}ee&&ee(J,pe),pe.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:pe}),E=null}const xe=new ay;xe.setAnimationLoop(ve),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const Ls=new zi,CR=new ot;function DR(o,e){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,Yv(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function r(S,x,N,L,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,w)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),T(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?p(S,x,N,L):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Yn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Yn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const N=e.get(x),L=N.envMap,w=N.envMapRotation;L&&(S.envMap.value=L,Ls.copy(w),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),S.envMapRotation.value.setFromMatrix4(CR.makeRotationFromEuler(Ls)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,N,L){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*N,S.scale.value=L*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,N){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Yn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){const N=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function UR(o,e,n,a){let r={},c={},u=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,L){const w=L.program;a.uniformBlockBinding(N,w)}function d(N,L){let w=r[N.id];w===void 0&&(E(N),w=g(N),r[N.id]=w,N.addEventListener("dispose",S));const F=L.program;a.updateUBOMapping(N,F);const H=e.render.frame;c[N.id]!==H&&(v(N),c[N.id]=H)}function g(N){const L=_();N.__bindingPointIndex=L;const w=o.createBuffer(),F=N.__size,H=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,F,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,w),w}function _(){for(let N=0;N<h;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const L=r[N.id],w=N.uniforms,F=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let H=0,B=w.length;H<B;H++){const X=Array.isArray(w[H])?w[H]:[w[H]];for(let D=0,C=X.length;D<C;D++){const V=X[D];if(y(V,H,D,F)===!0){const le=V.__offset,re=Array.isArray(V.value)?V.value:[V.value];let _e=0;for(let he=0;he<re.length;he++){const I=re[he],Z=T(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,le+_e,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,_e),_e+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,le,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(N,L,w,F){const H=N.value,B=L+"_"+w;if(F[B]===void 0)return typeof H=="number"||typeof H=="boolean"?F[B]=H:F[B]=H.clone(),!0;{const X=F[B];if(typeof H=="number"||typeof H=="boolean"){if(X!==H)return F[B]=H,!0}else if(X.equals(H)===!1)return X.copy(H),!0}return!1}function E(N){const L=N.uniforms;let w=0;const F=16;for(let B=0,X=L.length;B<X;B++){const D=Array.isArray(L[B])?L[B]:[L[B]];for(let C=0,V=D.length;C<V;C++){const le=D[C],re=Array.isArray(le.value)?le.value:[le.value];for(let _e=0,he=re.length;_e<he;_e++){const I=re[_e],Z=T(I),Y=w%F,Me=Y%Z.boundary,U=Y+Me;w+=Me,U!==0&&F-U<Z.storage&&(w+=F-U),le.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=w,w+=Z.storage}}}const H=w%F;return H>0&&(w+=F-H),N.__size=w,N.__cache={},this}function T(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const w=u.indexOf(L.__bindingPointIndex);u.splice(w,1),o.deleteBuffer(r[L.id]),delete r[L.id],delete c[L.id]}function x(){for(const N in r)o.deleteBuffer(r[N]);u=[],r={},c={}}return{bind:p,update:d,dispose:x}}class LR{constructor(e={}){const{canvas:n=CM(),context:a=null,depth:r=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,x=null;const N=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ss,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=wn;let H=0,B=0,X=null,D=-1,C=null;const V=new Ct,le=new Ct;let re=null;const _e=new at(0);let he=0,I=n.width,Z=n.height,Y=1,Me=null,U=null;const ee=new Ct(0,0,I,Z),ve=new Ct(0,0,I,Z);let xe=!1;const J=new dp;let pe=!1,Se=!1;const Ae=new ot,we=new ot,lt=new j,Ze=new Ct,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function xt(){return X===null?Y:1}let z=a;function Mn(R,q){return n.getContext(R,q)}try{const R={alpha:!0,depth:r,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tp}`),n.addEventListener("webglcontextlost",Ie,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",ge,!1),z===null){const q="webgl2";if(z=Mn(q,R),z===null)throw Mn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let bt,pt,Ge,St,Ye,it,en,O,b,te,ue,de,oe,Oe,De,He,Ve,ye,Pe,We,qe,Re,nt,k;function Ue(){bt=new VA(z),bt.init(),Re=new TR(z,bt),pt=new PA(z,bt,e,Re),Ge=new MR(z,bt),pt.reverseDepthBuffer&&v&&Ge.buffers.depth.setReversed(!0),St=new WA(z),Ye=new cR,it=new ER(z,bt,Ge,Ye,pt,Re,St),en=new BA(w),O=new GA(w),b=new QE(z),nt=new NA(z,b),te=new kA(z,b,St,nt),ue=new YA(z,te,b,St),Pe=new qA(z,pt,it),He=new IA(Ye),de=new lR(w,en,O,bt,pt,nt,He),oe=new DR(w,Ye),Oe=new fR,De=new _R(bt),ye=new LA(w,en,O,Ge,ue,y,p),Ve=new xR(w,ue,pt),k=new UR(z,St,pt,Ge),We=new OA(z,bt,St),qe=new XA(z,bt,St),St.programs=de.programs,w.capabilities=pt,w.extensions=bt,w.properties=Ye,w.renderLists=Oe,w.shadowMap=Ve,w.state=Ge,w.info=St}Ue();const Ee=new wR(w,z);this.xr=Ee,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=bt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=bt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(I,Z,!1))},this.getSize=function(R){return R.set(I,Z)},this.setSize=function(R,q,ae=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,Z=q,n.width=Math.floor(R*Y),n.height=Math.floor(q*Y),ae===!0&&(n.style.width=R+"px",n.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(I*Y,Z*Y).floor()},this.setDrawingBufferSize=function(R,q,ae){I=R,Z=q,Y=ae,n.width=Math.floor(R*ae),n.height=Math.floor(q*ae),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,q,ae,se){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,q,ae,se),Ge.viewport(V.copy(ee).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(ve)},this.setScissor=function(R,q,ae,se){R.isVector4?ve.set(R.x,R.y,R.z,R.w):ve.set(R,q,ae,se),Ge.scissor(le.copy(ve).multiplyScalar(Y).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(R){Ge.setScissorTest(xe=R)},this.setOpaqueSort=function(R){Me=R},this.setTransparentSort=function(R){U=R},this.getClearColor=function(R){return R.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ae=!0){let se=0;if(R){let K=!1;if(X!==null){const Te=X.texture.format;K=Te===lp||Te===op||Te===rp}if(K){const Te=X.texture.type,Ce=Te===Fi||Te===zs||Te===ll||Te===cl||Te===ip||Te===ap,Ne=ye.getClearColor(),Be=ye.getClearAlpha(),$e=Ne.r,Ke=Ne.g,ke=Ne.b;Ce?(E[0]=$e,E[1]=Ke,E[2]=ke,E[3]=Be,z.clearBufferuiv(z.COLOR,0,E)):(T[0]=$e,T[1]=Ke,T[2]=ke,T[3]=Be,z.clearBufferiv(z.COLOR,0,T))}else se|=z.COLOR_BUFFER_BIT}q&&(se|=z.DEPTH_BUFFER_BIT),ae&&(se|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ie,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),ye.dispose(),Oe.dispose(),De.dispose(),Ye.dispose(),en.dispose(),O.dispose(),ue.dispose(),nt.dispose(),k.dispose(),de.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",ln),Ee.removeEventListener("sessionend",En),Gn.stop()};function Ie(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=St.autoReset,q=Ve.enabled,ae=Ve.autoUpdate,se=Ve.needsUpdate,K=Ve.type;Ue(),St.autoReset=R,Ve.enabled=q,Ve.autoUpdate=ae,Ve.needsUpdate=se,Ve.type=K}function ge(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Fe(R){const q=R.target;q.removeEventListener("dispose",Fe),tt(q)}function tt(R){Lt(R),Ye.remove(R)}function Lt(R){const q=Ye.get(R).programs;q!==void 0&&(q.forEach(function(ae){de.releaseProgram(ae)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ae,se,K,Te){q===null&&(q=Bt);const Ce=K.isMesh&&K.matrixWorld.determinant()<0,Ne=us(R,q,ae,se,K);Ge.setMaterial(se,Ce);let Be=ae.index,$e=1;if(se.wireframe===!0){if(Be=te.getWireframeAttribute(ae),Be===void 0)return;$e=2}const Ke=ae.drawRange,ke=ae.attributes.position;let ct=Ke.start*$e,Dt=(Ke.start+Ke.count)*$e;Te!==null&&(ct=Math.max(ct,Te.start*$e),Dt=Math.min(Dt,(Te.start+Te.count)*$e)),Be!==null?(ct=Math.max(ct,0),Dt=Math.min(Dt,Be.count)):ke!=null&&(ct=Math.max(ct,0),Dt=Math.min(Dt,ke.count));const jt=Dt-ct;if(jt<0||jt===1/0)return;nt.setup(K,se,Ne,ae,Be);let ht,Ut=We;if(Be!==null&&(ht=b.get(Be),Ut=qe,Ut.setIndex(ht)),K.isMesh)se.wireframe===!0?(Ge.setLineWidth(se.wireframeLinewidth*xt()),Ut.setMode(z.LINES)):Ut.setMode(z.TRIANGLES);else if(K.isLine){let je=se.linewidth;je===void 0&&(je=1),Ge.setLineWidth(je*xt()),K.isLineSegments?Ut.setMode(z.LINES):K.isLineLoop?Ut.setMode(z.LINE_LOOP):Ut.setMode(z.LINE_STRIP)}else K.isPoints?Ut.setMode(z.POINTS):K.isSprite&&Ut.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Ir("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const je=K._multiDrawStarts,Ft=K._multiDrawCounts,Mt=K._multiDrawCount,mn=Be?b.get(Be).bytesPerElement:1,Ta=Ye.get(se).currentProgram.getUniforms();for(let qt=0;qt<Mt;qt++)Ta.setValue(z,"_gl_DrawID",qt),Ut.render(je[qt]/mn,Ft[qt])}else if(K.isInstancedMesh)Ut.renderInstances(ct,jt,K.count);else if(ae.isInstancedBufferGeometry){const je=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ft=Math.min(ae.instanceCount,je);Ut.renderInstances(ct,jt,Ft)}else Ut.render(ct,jt)};function At(R,q,ae){R.transparent===!0&&R.side===Ii&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,Ma(R,q,ae),R.side=ya,R.needsUpdate=!0,Ma(R,q,ae),R.side=Ii):Ma(R,q,ae)}this.compile=function(R,q,ae=null){ae===null&&(ae=R),x=De.get(ae),x.init(q),L.push(x),ae.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),R!==ae&&R.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const se=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Te=K.material;if(Te)if(Array.isArray(Te))for(let Ce=0;Ce<Te.length;Ce++){const Ne=Te[Ce];At(Ne,ae,K),se.add(Ne)}else At(Te,ae,K),se.add(Te)}),x=L.pop(),se},this.compileAsync=function(R,q,ae=null){const se=this.compile(R,q,ae);return new Promise(K=>{function Te(){if(se.forEach(function(Ce){Ye.get(Ce).currentProgram.isReady()&&se.delete(Ce)}),se.size===0){K(R);return}setTimeout(Te,10)}bt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let jn=null;function pn(R){jn&&jn(R)}function ln(){Gn.stop()}function En(){Gn.start()}const Gn=new ay;Gn.setAnimationLoop(pn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(R){jn=R,Ee.setAnimationLoop(R),R===null?Gn.stop():Gn.start()},Ee.addEventListener("sessionstart",ln),Ee.addEventListener("sessionend",En),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(q),q=Ee.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,q,X),x=De.get(R,L.length),x.init(q),L.push(x),we.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(we),Se=this.localClippingEnabled,pe=He.init(this.clippingPlanes,Se),S=Oe.get(R,N.length),S.init(),N.push(S),Ee.enabled===!0&&Ee.isPresenting===!0){const Te=w.xr.getDepthSensingMesh();Te!==null&&ls(Te,q,-1/0,w.sortObjects)}ls(R,q,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(Me,U),kt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,kt&&ye.addToRenderList(S,R),this.info.render.frame++,pe===!0&&He.beginShadows();const ae=x.state.shadowsArray;Ve.render(ae,R,q),pe===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=S.opaque,K=S.transmissive;if(x.setupLights(),q.isArrayCamera){const Te=q.cameras;if(K.length>0)for(let Ce=0,Ne=Te.length;Ce<Ne;Ce++){const Be=Te[Ce];yl(se,K,R,Be)}kt&&ye.render(R);for(let Ce=0,Ne=Te.length;Ce<Ne;Ce++){const Be=Te[Ce];vl(S,R,Be,Be.viewport)}}else K.length>0&&yl(se,K,R,q),kt&&ye.render(R),vl(S,R,q);X!==null&&B===0&&(it.updateMultisampleRenderTarget(X),it.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(w,R,q),nt.resetDefaultState(),D=-1,C=null,L.pop(),L.length>0?(x=L[L.length-1],pe===!0&&He.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function ls(R,q,ae,se){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){se&&Ze.setFromMatrixPosition(R.matrixWorld).applyMatrix4(we);const Ce=ue.update(R),Ne=R.material;Ne.visible&&S.push(R,Ce,Ne,ae,Ze.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ce=ue.update(R),Ne=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ze.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ze.copy(Ce.boundingSphere.center)),Ze.applyMatrix4(R.matrixWorld).applyMatrix4(we)),Array.isArray(Ne)){const Be=Ce.groups;for(let $e=0,Ke=Be.length;$e<Ke;$e++){const ke=Be[$e],ct=Ne[ke.materialIndex];ct&&ct.visible&&S.push(R,Ce,ct,ae,Ze.z,ke)}}else Ne.visible&&S.push(R,Ce,Ne,ae,Ze.z,null)}}const Te=R.children;for(let Ce=0,Ne=Te.length;Ce<Ne;Ce++)ls(Te[Ce],q,ae,se)}function vl(R,q,ae,se){const K=R.opaque,Te=R.transmissive,Ce=R.transparent;x.setupLightsView(ae),pe===!0&&He.setGlobalState(w.clippingPlanes,ae),se&&Ge.viewport(V.copy(se)),K.length>0&&cs(K,q,ae),Te.length>0&&cs(Te,q,ae),Ce.length>0&&cs(Ce,q,ae),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function yl(R,q,ae,se){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[se.id]===void 0&&(x.state.transmissionRenderTarget[se.id]=new Hs(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?ml:Fi,minFilter:ma,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Te=x.state.transmissionRenderTarget[se.id],Ce=se.viewport||V;Te.setSize(Ce.z*w.transmissionResolutionScale,Ce.w*w.transmissionResolutionScale);const Ne=w.getRenderTarget(),Be=w.getActiveCubeFace(),$e=w.getActiveMipmapLevel();w.setRenderTarget(Te),w.getClearColor(_e),he=w.getClearAlpha(),he<1&&w.setClearColor(16777215,.5),w.clear(),kt&&ye.render(ae);const Ke=w.toneMapping;w.toneMapping=ss;const ke=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),x.setupLightsView(se),pe===!0&&He.setGlobalState(w.clippingPlanes,se),cs(R,ae,se),it.updateMultisampleRenderTarget(Te),it.updateRenderTargetMipmap(Te),bt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Dt=0,jt=q.length;Dt<jt;Dt++){const ht=q[Dt],Ut=ht.object,je=ht.geometry,Ft=ht.material,Mt=ht.group;if(Ft.side===Ii&&Ut.layers.test(se.layers)){const mn=Ft.side;Ft.side=Yn,Ft.needsUpdate=!0,Sa(Ut,ae,se,je,Ft,Mt),Ft.side=mn,Ft.needsUpdate=!0,ct=!0}}ct===!0&&(it.updateMultisampleRenderTarget(Te),it.updateRenderTargetMipmap(Te))}w.setRenderTarget(Ne,Be,$e),w.setClearColor(_e,he),ke!==void 0&&(se.viewport=ke),w.toneMapping=Ke}function cs(R,q,ae){const se=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Te=R.length;K<Te;K++){const Ce=R[K],Ne=Ce.object,Be=Ce.geometry,$e=Ce.group;let Ke=Ce.material;Ke.allowOverride===!0&&se!==null&&(Ke=se),Ne.layers.test(ae.layers)&&Sa(Ne,q,ae,Be,Ke,$e)}}function Sa(R,q,ae,se,K,Te){R.onBeforeRender(w,q,ae,se,K,Te),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(w,q,ae,se,R,Te),K.transparent===!0&&K.side===Ii&&K.forceSinglePass===!1?(K.side=Yn,K.needsUpdate=!0,w.renderBufferDirect(ae,q,se,K,R,Te),K.side=ya,K.needsUpdate=!0,w.renderBufferDirect(ae,q,se,K,R,Te),K.side=Ii):w.renderBufferDirect(ae,q,se,K,R,Te),R.onAfterRender(w,q,ae,se,K,Te)}function Ma(R,q,ae){q.isScene!==!0&&(q=Bt);const se=Ye.get(R),K=x.state.lights,Te=x.state.shadowsArray,Ce=K.state.version,Ne=de.getParameters(R,K.state,Te,q,ae),Be=de.getProgramCacheKey(Ne);let $e=se.programs;se.environment=R.isMeshStandardMaterial?q.environment:null,se.fog=q.fog,se.envMap=(R.isMeshStandardMaterial?O:en).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",Fe),$e=new Map,se.programs=$e);let Ke=$e.get(Be);if(Ke!==void 0){if(se.currentProgram===Ke&&se.lightsStateVersion===Ce)return ki(R,Ne),Ke}else Ne.uniforms=de.getUniforms(R),R.onBeforeCompile(Ne,w),Ke=de.acquireProgram(Ne,Be),$e.set(Be,Ke),se.uniforms=Ne.uniforms;const ke=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ke.clippingPlanes=He.uniform),ki(R,Ne),se.needsLights=an(R),se.lightsStateVersion=Ce,se.needsLights&&(ke.ambientLightColor.value=K.state.ambient,ke.lightProbe.value=K.state.probe,ke.directionalLights.value=K.state.directional,ke.directionalLightShadows.value=K.state.directionalShadow,ke.spotLights.value=K.state.spot,ke.spotLightShadows.value=K.state.spotShadow,ke.rectAreaLights.value=K.state.rectArea,ke.ltc_1.value=K.state.rectAreaLTC1,ke.ltc_2.value=K.state.rectAreaLTC2,ke.pointLights.value=K.state.point,ke.pointLightShadows.value=K.state.pointShadow,ke.hemisphereLights.value=K.state.hemi,ke.directionalShadowMap.value=K.state.directionalShadowMap,ke.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ke.spotShadowMap.value=K.state.spotShadowMap,ke.spotLightMatrix.value=K.state.spotLightMatrix,ke.spotLightMap.value=K.state.spotLightMap,ke.pointShadowMap.value=K.state.pointShadowMap,ke.pointShadowMatrix.value=K.state.pointShadowMatrix),se.currentProgram=Ke,se.uniformsList=null,Ke}function Vi(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=ou.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function ki(R,q){const ae=Ye.get(R);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function us(R,q,ae,se,K){q.isScene!==!0&&(q=Bt),it.resetTextureUnits();const Te=q.fog,Ce=se.isMeshStandardMaterial?q.environment:null,Ne=X===null?w.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Hn,Be=(se.isMeshStandardMaterial?O:en).get(se.envMap||Ce),$e=se.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Ke=!!ae.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),ke=!!ae.morphAttributes.position,ct=!!ae.morphAttributes.normal,Dt=!!ae.morphAttributes.color;let jt=ss;se.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(jt=w.toneMapping);const ht=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ut=ht!==void 0?ht.length:0,je=Ye.get(se),Ft=x.state.lights;if(pe===!0&&(Se===!0||R!==C)){const gn=R===C&&se.id===D;He.setState(se,R,gn)}let Mt=!1;se.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ft.state.version||je.outputColorSpace!==Ne||K.isBatchedMesh&&je.batching===!1||!K.isBatchedMesh&&je.batching===!0||K.isBatchedMesh&&je.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&je.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&je.instancing===!1||!K.isInstancedMesh&&je.instancing===!0||K.isSkinnedMesh&&je.skinning===!1||!K.isSkinnedMesh&&je.skinning===!0||K.isInstancedMesh&&je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&je.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&je.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&je.instancingMorph===!1&&K.morphTexture!==null||je.envMap!==Be||se.fog===!0&&je.fog!==Te||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==He.numPlanes||je.numIntersection!==He.numIntersection)||je.vertexAlphas!==$e||je.vertexTangents!==Ke||je.morphTargets!==ke||je.morphNormals!==ct||je.morphColors!==Dt||je.toneMapping!==jt||je.morphTargetsCount!==Ut)&&(Mt=!0):(Mt=!0,je.__version=se.version);let mn=je.currentProgram;Mt===!0&&(mn=Ma(se,q,K));let Ta=!1,qt=!1,Wi=!1;const Xt=mn.getUniforms(),Cn=je.uniforms;if(Ge.useProgram(mn.program)&&(Ta=!0,qt=!0,Wi=!0),se.id!==D&&(D=se.id,qt=!0),Ta||C!==R){Ge.buffers.depth.getReversed()?(Ae.copy(R.projectionMatrix),UM(Ae),LM(Ae),Xt.setValue(z,"projectionMatrix",Ae)):Xt.setValue(z,"projectionMatrix",R.projectionMatrix),Xt.setValue(z,"viewMatrix",R.matrixWorldInverse);const Tn=Xt.map.cameraPosition;Tn!==void 0&&Tn.setValue(z,lt.setFromMatrixPosition(R.matrixWorld)),pt.logarithmicDepthBuffer&&Xt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Xt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,qt=!0,Wi=!0)}if(K.isSkinnedMesh){Xt.setOptional(z,K,"bindMatrix"),Xt.setOptional(z,K,"bindMatrixInverse");const gn=K.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Xt.setValue(z,"boneTexture",gn.boneTexture,it))}K.isBatchedMesh&&(Xt.setOptional(z,K,"batchingTexture"),Xt.setValue(z,"batchingTexture",K._matricesTexture,it),Xt.setOptional(z,K,"batchingIdTexture"),Xt.setValue(z,"batchingIdTexture",K._indirectTexture,it),Xt.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&Xt.setValue(z,"batchingColorTexture",K._colorsTexture,it));const cn=ae.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&Pe.update(K,ae,mn),(qt||je.receiveShadow!==K.receiveShadow)&&(je.receiveShadow=K.receiveShadow,Xt.setValue(z,"receiveShadow",K.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Cn.envMap.value=Be,Cn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&q.environment!==null&&(Cn.envMapIntensity.value=q.environmentIntensity),qt&&(Xt.setValue(z,"toneMappingExposure",w.toneMappingExposure),je.needsLights&&Ea(Cn,Wi),Te&&se.fog===!0&&oe.refreshFogUniforms(Cn,Te),oe.refreshMaterialUniforms(Cn,se,Y,Z,x.state.transmissionRenderTarget[R.id]),ou.upload(z,Vi(je),Cn,it)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(ou.upload(z,Vi(je),Cn,it),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Xt.setValue(z,"center",K.center),Xt.setValue(z,"modelViewMatrix",K.modelViewMatrix),Xt.setValue(z,"normalMatrix",K.normalMatrix),Xt.setValue(z,"modelMatrix",K.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const gn=se.uniformsGroups;for(let Tn=0,Ci=gn.length;Tn<Ci;Tn++){const qi=gn[Tn];k.update(qi,mn),k.bind(qi,mn)}}return mn}function Ea(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function an(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,q,ae){const se=Ye.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ye.get(R.texture).__webglTexture=q,Ye.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ae,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ae=Ye.get(R);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const xl=z.createFramebuffer();this.setRenderTarget=function(R,q=0,ae=0){X=R,H=q,B=ae;let se=!0,K=null,Te=!1,Ce=!1;if(R){const Be=Ye.get(R);if(Be.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(z.FRAMEBUFFER,null),se=!1;else if(Be.__webglFramebuffer===void 0)it.setupRenderTarget(R);else if(Be.__hasExternalTextures)it.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ke=R.depthTexture;if(Be.__boundDepthTexture!==ke){if(ke!==null&&Ye.has(ke)&&(R.width!==ke.image.width||R.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ce=!0);const Ke=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ke[q])?K=Ke[q][ae]:K=Ke[q],Te=!0):R.samples>0&&it.useMultisampledRTT(R)===!1?K=Ye.get(R).__webglMultisampledFramebuffer:Array.isArray(Ke)?K=Ke[ae]:K=Ke,V.copy(R.viewport),le.copy(R.scissor),re=R.scissorTest}else V.copy(ee).multiplyScalar(Y).floor(),le.copy(ve).multiplyScalar(Y).floor(),re=xe;if(ae!==0&&(K=xl),Ge.bindFramebuffer(z.FRAMEBUFFER,K)&&se&&Ge.drawBuffers(R,K),Ge.viewport(V),Ge.scissor(le),Ge.setScissorTest(re),Te){const Be=Ye.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Be.__webglTexture,ae)}else if(Ce){const Be=Ye.get(R.texture),$e=q;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.__webglTexture,ae,$e)}else if(R!==null&&ae!==0){const Be=Ye.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Be.__webglTexture,ae)}D=-1},this.readRenderTargetPixels=function(R,q,ae,se,K,Te,Ce,Ne=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Be=Be[Ce]),Be){Ge.bindFramebuffer(z.FRAMEBUFFER,Be);try{const $e=R.textures[Ne],Ke=$e.format,ke=$e.type;if(!pt.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-se&&ae>=0&&ae<=R.height-K&&(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ne),z.readPixels(q,ae,se,K,Re.convert(Ke),Re.convert(ke),Te))}finally{const $e=X!==null?Ye.get(X).__webglFramebuffer:null;Ge.bindFramebuffer(z.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,q,ae,se,K,Te,Ce,Ne=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Be=Be[Ce]),Be)if(q>=0&&q<=R.width-se&&ae>=0&&ae<=R.height-K){Ge.bindFramebuffer(z.FRAMEBUFFER,Be);const $e=R.textures[Ne],Ke=$e.format,ke=$e.type;if(!pt.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ct),z.bufferData(z.PIXEL_PACK_BUFFER,Te.byteLength,z.STREAM_READ),R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ne),z.readPixels(q,ae,se,K,Re.convert(Ke),Re.convert(ke),0);const Dt=X!==null?Ye.get(X).__webglFramebuffer:null;Ge.bindFramebuffer(z.FRAMEBUFFER,Dt);const jt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await DM(z,jt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ct),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Te),z.deleteBuffer(ct),z.deleteSync(jt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ae=0){const se=Math.pow(2,-ae),K=Math.floor(R.image.width*se),Te=Math.floor(R.image.height*se),Ce=q!==null?q.x:0,Ne=q!==null?q.y:0;it.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,ae,0,0,Ce,Ne,K,Te),Ge.unbindTexture()};const Sl=z.createFramebuffer(),Xi=z.createFramebuffer();this.copyTextureToTexture=function(R,q,ae=null,se=null,K=0,Te=null){Te===null&&(K!==0?(Ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=K,K=0):Te=0);let Ce,Ne,Be,$e,Ke,ke,ct,Dt,jt;const ht=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(ae!==null)Ce=ae.max.x-ae.min.x,Ne=ae.max.y-ae.min.y,Be=ae.isBox3?ae.max.z-ae.min.z:1,$e=ae.min.x,Ke=ae.min.y,ke=ae.isBox3?ae.min.z:0;else{const cn=Math.pow(2,-K);Ce=Math.floor(ht.width*cn),Ne=Math.floor(ht.height*cn),R.isDataArrayTexture?Be=ht.depth:R.isData3DTexture?Be=Math.floor(ht.depth*cn):Be=1,$e=0,Ke=0,ke=0}se!==null?(ct=se.x,Dt=se.y,jt=se.z):(ct=0,Dt=0,jt=0);const Ut=Re.convert(q.format),je=Re.convert(q.type);let Ft;q.isData3DTexture?(it.setTexture3D(q,0),Ft=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(it.setTexture2DArray(q,0),Ft=z.TEXTURE_2D_ARRAY):(it.setTexture2D(q,0),Ft=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const Mt=z.getParameter(z.UNPACK_ROW_LENGTH),mn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ta=z.getParameter(z.UNPACK_SKIP_PIXELS),qt=z.getParameter(z.UNPACK_SKIP_ROWS),Wi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ht.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ht.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$e),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ke),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ke);const Xt=R.isDataArrayTexture||R.isData3DTexture,Cn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const cn=Ye.get(R),gn=Ye.get(q),Tn=Ye.get(cn.__renderTarget),Ci=Ye.get(gn.__renderTarget);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let qi=0;qi<Be;qi++)Xt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ye.get(R).__webglTexture,K,ke+qi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ye.get(q).__webglTexture,Te,jt+qi)),z.blitFramebuffer($e,Ke,Ce,Ne,ct,Dt,Ce,Ne,z.DEPTH_BUFFER_BIT,z.NEAREST);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Ye.has(R)){const cn=Ye.get(R),gn=Ye.get(q);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,Sl),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,Xi);for(let Tn=0;Tn<Be;Tn++)Xt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,cn.__webglTexture,K,ke+Tn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,cn.__webglTexture,K),Cn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,gn.__webglTexture,Te,jt+Tn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,gn.__webglTexture,Te),K!==0?z.blitFramebuffer($e,Ke,Ce,Ne,ct,Dt,Ce,Ne,z.COLOR_BUFFER_BIT,z.NEAREST):Cn?z.copyTexSubImage3D(Ft,Te,ct,Dt,jt+Tn,$e,Ke,Ce,Ne):z.copyTexSubImage2D(Ft,Te,ct,Dt,$e,Ke,Ce,Ne);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Cn?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Ft,Te,ct,Dt,jt,Ce,Ne,Be,Ut,je,ht.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(Ft,Te,ct,Dt,jt,Ce,Ne,Be,Ut,ht.data):z.texSubImage3D(Ft,Te,ct,Dt,jt,Ce,Ne,Be,Ut,je,ht):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Te,ct,Dt,Ce,Ne,Ut,je,ht.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Te,ct,Dt,ht.width,ht.height,Ut,ht.data):z.texSubImage2D(z.TEXTURE_2D,Te,ct,Dt,Ce,Ne,Ut,je,ht);z.pixelStorei(z.UNPACK_ROW_LENGTH,Mt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ta),z.pixelStorei(z.UNPACK_SKIP_ROWS,qt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Wi),Te===0&&q.generateMipmaps&&z.generateMipmap(Ft),Ge.unbindTexture()},this.copyTextureToTexture3D=function(R,q,ae=null,se=null,K=0){return Ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,ae,se,K)},this.initRenderTarget=function(R){Ye.get(R).__webglFramebuffer===void 0&&it.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?it.setTextureCube(R,0):R.isData3DTexture?it.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?it.setTexture2DArray(R,0):it.setTexture2D(R,0),Ge.unbindTexture()},this.resetState=function(){H=0,B=0,X=null,Ge.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ga}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}function Mv(o,e){if(e===tM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Yd||e===Fv){let n=o.getIndex();if(n===null){const u=[],h=o.getAttribute("position");if(h!==void 0){for(let p=0;p<h.count;p++)u.push(p);o.setIndex(u),n=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const a=n.count-2,r=[];if(e===Yd)for(let u=1;u<=a;u++)r.push(n.getX(0)),r.push(n.getX(u)),r.push(n.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(r.push(n.getX(u)),r.push(n.getX(u+1)),r.push(n.getX(u+2))):(r.push(n.getX(u+2)),r.push(n.getX(u+1)),r.push(n.getX(u)));r.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=o.clone();return c.setIndex(r),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class NR extends Qr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new FR(n)}),this.register(function(n){return new zR(n)}),this.register(function(n){return new jR(n)}),this.register(function(n){return new KR(n)}),this.register(function(n){return new ZR(n)}),this.register(function(n){return new GR(n)}),this.register(function(n){return new VR(n)}),this.register(function(n){return new kR(n)}),this.register(function(n){return new XR(n)}),this.register(function(n){return new BR(n)}),this.register(function(n){return new WR(n)}),this.register(function(n){return new HR(n)}),this.register(function(n){return new YR(n)}),this.register(function(n){return new qR(n)}),this.register(function(n){return new PR(n)}),this.register(function(n){return new QR(n)}),this.register(function(n){return new JR(n)})}load(e,n,a,r){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const d=ol.extractUrlBase(e);u=ol.resolveURL(d,this.path)}else u=ol.extractUrlBase(e);this.manager.itemStart(e);const h=function(d){r?r(d):console.error(d),c.manager.itemError(e),c.manager.itemEnd(e)},p=new iy(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(e,function(d){try{c.parse(d,u,function(g){n(g),c.manager.itemEnd(e)},h)}catch(g){h(g)}},a,h)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,r){let c;const u={},h={},p=new TextDecoder;if(typeof e=="string")c=JSON.parse(e);else if(e instanceof ArrayBuffer)if(p.decode(new Uint8Array(e,0,4))===cy){try{u[vt.KHR_BINARY_GLTF]=new $R(e)}catch(_){r&&r(_);return}c=JSON.parse(u[vt.KHR_BINARY_GLTF].content)}else c=JSON.parse(p.decode(e));else c=e;if(c.asset===void 0||c.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new hw(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](d);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[_.name]=_,u[_.name]=!0}if(c.extensionsUsed)for(let g=0;g<c.extensionsUsed.length;++g){const _=c.extensionsUsed[g],v=c.extensionsRequired||[];switch(_){case vt.KHR_MATERIALS_UNLIT:u[_]=new IR;break;case vt.KHR_DRACO_MESH_COMPRESSION:u[_]=new ew(c,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:u[_]=new tw;break;case vt.KHR_MESH_QUANTIZATION:u[_]=new nw;break;default:v.indexOf(_)>=0&&h[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}d.setExtensions(u),d.setPlugins(h),d.parse(a,r)}parseAsync(e,n){const a=this;return new Promise(function(r,c){a.parse(e,n,r,c)})}}function OR(){let o={};return{get:function(e){return o[e]},add:function(e,n){o[e]=n},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class PR{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let a=0,r=n.length;a<r;a++){const c=n[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(e){const n=this.parser,a="light:"+e;let r=n.cache.get(a);if(r)return r;const c=n.json,p=((c.extensions&&c.extensions[this.name]||{}).lights||[])[e];let d;const g=new at(16777215);p.color!==void 0&&g.setRGB(p.color[0],p.color[1],p.color[2],Hn);const _=p.range!==void 0?p.range:0;switch(p.type){case"directional":d=new FE(g),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new IE(g),d.distance=_;break;case"spot":d=new OE(g),d.distance=_,p.spot=p.spot||{},p.spot.innerConeAngle=p.spot.innerConeAngle!==void 0?p.spot.innerConeAngle:0,p.spot.outerConeAngle=p.spot.outerConeAngle!==void 0?p.spot.outerConeAngle:Math.PI/4,d.angle=p.spot.outerConeAngle,d.penumbra=1-p.spot.innerConeAngle/p.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+p.type)}return d.position.set(0,0,0),pa(d,p),p.intensity!==void 0&&(d.intensity=p.intensity),d.name=n.createUniqueName(p.name||"light_"+e),r=Promise.resolve(d),n.cache.add(a,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,a=this.parser,c=a.json.nodes[e],h=(c.extensions&&c.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(p){return a._getNodeRef(n.cache,h,p)})}}class IR{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return is}extendParams(e,n,a){const r=[];e.color=new at(1,1,1),e.opacity=1;const c=n.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],Hn),e.opacity=u[3]}c.baseColorTexture!==void 0&&r.push(a.assignTexture(e,"map",c.baseColorTexture,wn))}return Promise.all(r)}}class BR{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name].emissiveStrength;return c!==void 0&&(n.emissiveIntensity=c),Promise.resolve()}}class FR{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Gi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];if(u.clearcoatFactor!==void 0&&(n.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(c.push(a.assignTexture(n,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const h=u.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new yt(h,h)}return Promise.all(c)}}class zR{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Gi}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.dispersion=c.dispersion!==void 0?c.dispersion:0,Promise.resolve()}}class HR{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Gi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.iridescenceFactor!==void 0&&(n.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(n.iridescenceIOR=u.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(c)}}class GR{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Gi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[];n.sheenColor=new at(0,0,0),n.sheenRoughness=0,n.sheen=1;const u=r.extensions[this.name];if(u.sheenColorFactor!==void 0){const h=u.sheenColorFactor;n.sheenColor.setRGB(h[0],h[1],h[2],Hn)}return u.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&c.push(a.assignTexture(n,"sheenColorMap",u.sheenColorTexture,wn)),u.sheenRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(c)}}class VR{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Gi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.transmissionFactor!==void 0&&(n.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&c.push(a.assignTexture(n,"transmissionMap",u.transmissionTexture)),Promise.all(c)}}class kR{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Gi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&c.push(a.assignTexture(n,"thicknessMap",u.thicknessTexture)),n.attenuationDistance=u.attenuationDistance||1/0;const h=u.attenuationColor||[1,1,1];return n.attenuationColor=new at().setRGB(h[0],h[1],h[2],Hn),Promise.all(c)}}class XR{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Gi}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.ior=c.ior!==void 0?c.ior:1.5,Promise.resolve()}}class WR{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Gi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&c.push(a.assignTexture(n,"specularIntensityMap",u.specularTexture));const h=u.specularColorFactor||[1,1,1];return n.specularColor=new at().setRGB(h[0],h[1],h[2],Hn),u.specularColorTexture!==void 0&&c.push(a.assignTexture(n,"specularColorMap",u.specularColorTexture,wn)),Promise.all(c)}}class qR{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Gi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return n.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&c.push(a.assignTexture(n,"bumpMap",u.bumpTexture)),Promise.all(c)}}class YR{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Gi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.anisotropyStrength!==void 0&&(n.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(n.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&c.push(a.assignTexture(n,"anisotropyMap",u.anisotropyTexture)),Promise.all(c)}}class jR{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,a=n.json,r=a.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const c=r.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,c.source,u)}}class KR{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=r.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class ZR{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=r.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class QR{constructor(e){this.name=vt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const r=a.extensions[this.name],c=this.parser.getDependency("buffer",r.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(h){const p=r.byteOffset||0,d=r.byteLength||0,g=r.count,_=r.byteStride,v=new Uint8Array(h,p,d);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,_,v,r.mode,r.filter).then(function(y){return y.buffer}):u.ready.then(function(){const y=new ArrayBuffer(g*_);return u.decodeGltfBuffer(new Uint8Array(y),g,_,v,r.mode,r.filter),y})})}else return null}}class JR{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const r=n.meshes[a.mesh];for(const d of r.primitives)if(d.mode!==di.TRIANGLES&&d.mode!==di.TRIANGLE_STRIP&&d.mode!==di.TRIANGLE_FAN&&d.mode!==void 0)return null;const u=a.extensions[this.name].attributes,h=[],p={};for(const d in u)h.push(this.parser.getDependency("accessor",u[d]).then(g=>(p[d]=g,p[d])));return h.length<1?null:(h.push(this.parser.createNodeMesh(e)),Promise.all(h).then(d=>{const g=d.pop(),_=g.isGroup?g.children:[g],v=d[0].count,y=[];for(const E of _){const T=new ot,S=new j,x=new os,N=new j(1,1,1),L=new cE(E.geometry,E.material,v);for(let w=0;w<v;w++)p.TRANSLATION&&S.fromBufferAttribute(p.TRANSLATION,w),p.ROTATION&&x.fromBufferAttribute(p.ROTATION,w),p.SCALE&&N.fromBufferAttribute(p.SCALE,w),L.setMatrixAt(w,T.compose(S,x,N));for(const w in p)if(w==="_COLOR_0"){const F=p[w];L.instanceColor=new Kd(F.array,F.itemSize,F.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&E.geometry.setAttribute(w,p[w]);Zt.prototype.copy.call(L,E),this.parser.assignFinalMaterial(L),y.push(L)}return g.isGroup?(g.clear(),g.add(...y),g):y[0]}))}}const cy="glTF",nl=12,Ev={JSON:1313821514,BIN:5130562};class $R{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,nl),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==cy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-nl,c=new DataView(e,nl);let u=0;for(;u<r;){const h=c.getUint32(u,!0);u+=4;const p=c.getUint32(u,!0);if(u+=4,p===Ev.JSON){const d=new Uint8Array(e,nl+u,h);this.content=a.decode(d)}else if(p===Ev.BIN){const d=nl+u;this.body=e.slice(d,d+h)}u+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ew{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const a=this.json,r=this.dracoLoader,c=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,h={},p={},d={};for(const g in u){const _=Jd[g]||g.toLowerCase();h[_]=u[g]}for(const g in e.attributes){const _=Jd[g]||g.toLowerCase();if(u[g]!==void 0){const v=a.accessors[e.attributes[g]],y=Fr[v.componentType];d[_]=y.name,p[_]=v.normalized===!0}}return n.getDependency("bufferView",c).then(function(g){return new Promise(function(_,v){r.decodeDracoFile(g,function(y){for(const E in y.attributes){const T=y.attributes[E],S=p[E];S!==void 0&&(T.normalized=S)}_(y)},h,d,Hn,v)})})}}class tw{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class nw{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}}class uy extends _l{constructor(e,n,a,r){super(e,n,a,r)}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r*3+r;for(let u=0;u!==r;u++)n[u]=a[c+u];return n}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=h*2,d=h*3,g=r-n,_=(a-n)/g,v=_*_,y=v*_,E=e*d,T=E-d,S=-2*y+3*v,x=y-v,N=1-S,L=x-v+_;for(let w=0;w!==h;w++){const F=u[T+w+h],H=u[T+w+p]*g,B=u[E+w+h],X=u[E+w]*g;c[w]=N*F+L*H+S*B+x*X}return c}}const iw=new os;class aw extends uy{interpolate_(e,n,a,r){const c=super.interpolate_(e,n,a,r);return iw.fromArray(c).normalize().toArray(c),c}}const di={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tv={9728:Fn,9729:ai,9984:Dv,9985:tu,9986:il,9987:ma},bv={33071:ns,33648:lu,10497:Vr},od={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$a={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sw={CUBICSPLINE:void 0,LINEAR:dl,STEP:hl},ld={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rw(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new gp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ya})),o.DefaultMaterial}function Ns(o,e,n){for(const a in n.extensions)o[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function pa(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ow(o,e,n){let a=!1,r=!1,c=!1;for(let d=0,g=e.length;d<g;d++){const _=e[d];if(_.POSITION!==void 0&&(a=!0),_.NORMAL!==void 0&&(r=!0),_.COLOR_0!==void 0&&(c=!0),a&&r&&c)break}if(!a&&!r&&!c)return Promise.resolve(o);const u=[],h=[],p=[];for(let d=0,g=e.length;d<g;d++){const _=e[d];if(a){const v=_.POSITION!==void 0?n.getDependency("accessor",_.POSITION):o.attributes.position;u.push(v)}if(r){const v=_.NORMAL!==void 0?n.getDependency("accessor",_.NORMAL):o.attributes.normal;h.push(v)}if(c){const v=_.COLOR_0!==void 0?n.getDependency("accessor",_.COLOR_0):o.attributes.color;p.push(v)}}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p)]).then(function(d){const g=d[0],_=d[1],v=d[2];return a&&(o.morphAttributes.position=g),r&&(o.morphAttributes.normal=_),c&&(o.morphAttributes.color=v),o.morphTargetsRelative=!0,o})}function lw(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)o.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(o.morphTargetInfluences.length===n.length){o.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++)o.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cw(o){let e;const n=o.extensions&&o.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+cd(n.attributes):e=o.indices+":"+cd(o.attributes)+":"+o.mode,o.targets!==void 0)for(let a=0,r=o.targets.length;a<r;a++)e+=":"+cd(o.targets[a]);return e}function cd(o){let e="";const n=Object.keys(o).sort();for(let a=0,r=n.length;a<r;a++)e+=n[a]+":"+o[n[a]]+";";return e}function $d(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uw(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const fw=new ot;class hw{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new OR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,r=-1,c=!1,u=-1;if(typeof navigator<"u"){const h=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(h)===!0;const p=h.match(/Version\/(\d+)/);r=a&&p?parseInt(p[1],10):-1,c=h.indexOf("Firefox")>-1,u=c?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&r<17||c&&u<98?this.textureLoader=new UE(this.options.manager):this.textureLoader=new zE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new iy(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const a=this,r=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const h={scene:u[0][r.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:r.asset,parser:a,userData:{}};return Ns(c,h,r),pa(h,r),Promise.all(a._invokeAll(function(p){return p.afterRoot&&p.afterRoot(h)})).then(function(){for(const p of h.scenes)p.updateMatrixWorld();e(h)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let r=0,c=n.length;r<c;r++){const u=n[r].joints;for(let h=0,p=u.length;h<p;h++)e[u[h]].isBone=!0}for(let r=0,c=e.length;r<c;r++){const u=e[r];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;const r=a.clone(),c=(u,h)=>{const p=this.associations.get(u);p!=null&&this.associations.set(h,p);for(const[d,g]of u.children.entries())c(g,h.children[d])};return c(a,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const r=e(n[a]);if(r)return r}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let r=0;r<n.length;r++){const c=e(n[r]);c&&a.push(c)}return a}getDependency(e,n){const a=e+":"+n;let r=this.cache.get(a);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(c){return c.loadNode&&c.loadNode(n)});break;case"mesh":r=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(a,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){const a=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(c,u){return a.getDependency(e,u)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(c,u){a.load(ol.resolveURL(n.uri,r.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){const r=n.byteLength||0,c=n.byteOffset||0;return a.slice(c,c+r)})}loadAccessor(e){const n=this,a=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const u=od[r.type],h=Fr[r.componentType],p=r.normalized===!0,d=new h(r.count*u);return Promise.resolve(new zn(d,u,p))}const c=[];return r.bufferView!==void 0?c.push(this.getDependency("bufferView",r.bufferView)):c.push(null),r.sparse!==void 0&&(c.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(c).then(function(u){const h=u[0],p=od[r.type],d=Fr[r.componentType],g=d.BYTES_PER_ELEMENT,_=g*p,v=r.byteOffset||0,y=r.bufferView!==void 0?a.bufferViews[r.bufferView].byteStride:void 0,E=r.normalized===!0;let T,S;if(y&&y!==_){const x=Math.floor(v/y),N="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+x+":"+r.count;let L=n.cache.get(N);L||(T=new d(h,x*y,r.count*y/g),L=new aE(T,y/g),n.cache.add(N,L)),S=new fp(L,p,v%y/g,E)}else h===null?T=new d(r.count*p):T=new d(h,v,r.count*p),S=new zn(T,p,E);if(r.sparse!==void 0){const x=od.SCALAR,N=Fr[r.sparse.indices.componentType],L=r.sparse.indices.byteOffset||0,w=r.sparse.values.byteOffset||0,F=new N(u[1],L,r.sparse.count*x),H=new d(u[2],w,r.sparse.count*p);h!==null&&(S=new zn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let B=0,X=F.length;B<X;B++){const D=F[B];if(S.setX(D,H[B*p]),p>=2&&S.setY(D,H[B*p+1]),p>=3&&S.setZ(D,H[B*p+2]),p>=4&&S.setW(D,H[B*p+3]),p>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=E}return S})}loadTexture(e){const n=this.json,a=this.options,c=n.textures[e].source,u=n.images[c];let h=this.textureLoader;if(u.uri){const p=a.manager.getHandler(u.uri);p!==null&&(h=p)}return this.loadTextureImage(e,c,h)}loadTextureImage(e,n,a){const r=this,c=this.json,u=c.textures[e],h=c.images[n],p=(h.uri||h.bufferView)+":"+u.sampler;if(this.textureCache[p])return this.textureCache[p];const d=this.loadImageSource(n,a).then(function(g){g.flipY=!1,g.name=u.name||h.name||"",g.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(g.name=h.uri);const v=(c.samplers||{})[u.sampler]||{};return g.magFilter=Tv[v.magFilter]||ai,g.minFilter=Tv[v.minFilter]||ma,g.wrapS=bv[v.wrapS]||Vr,g.wrapT=bv[v.wrapT]||Vr,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==Fn&&g.minFilter!==ai,r.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[p]=d,d}loadImageSource(e,n){const a=this,r=this.json,c=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const u=r.images[e],h=self.URL||self.webkitURL;let p=u.uri||"",d=!1;if(u.bufferView!==void 0)p=a.getDependency("bufferView",u.bufferView).then(function(_){d=!0;const v=new Blob([_],{type:u.mimeType});return p=h.createObjectURL(v),p});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(p).then(function(_){return new Promise(function(v,y){let E=v;n.isImageBitmapLoader===!0&&(E=function(T){const S=new Sn(T);S.needsUpdate=!0,v(S)}),n.load(ol.resolveURL(_,c.path),E,void 0,y)})}).then(function(_){return d===!0&&h.revokeObjectURL(p),pa(_,u),_.userData.mimeType=u.mimeType||uw(u.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",p),_});return this.sourceCache[e]=g,g}assignTexture(e,n,a,r){const c=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),c.extensions[vt.KHR_TEXTURE_TRANSFORM]){const h=a.extensions!==void 0?a.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const p=c.associations.get(u);u=c.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(u,h),c.associations.set(u,p)}}return r!==void 0&&(u.colorSpace=r),e[n]=u,u})}assignFinalMaterial(e){const n=e.geometry;let a=e.material;const r=n.attributes.tangent===void 0,c=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(e.isPoints){const h="PointsMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new $v,Bi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,p.sizeAttenuation=!1,this.cache.add(h,p)),a=p}else if(e.isLine){const h="LineBasicMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new Jv,Bi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,this.cache.add(h,p)),a=p}if(r||c||u){let h="ClonedMaterial:"+a.uuid+":";r&&(h+="derivative-tangents:"),c&&(h+="vertex-colors:"),u&&(h+="flat-shading:");let p=this.cache.get(h);p||(p=a.clone(),c&&(p.vertexColors=!0),u&&(p.flatShading=!0),r&&(p.normalScale&&(p.normalScale.y*=-1),p.clearcoatNormalScale&&(p.clearcoatNormalScale.y*=-1)),this.cache.add(h,p),this.associations.set(p,this.associations.get(a))),a=p}e.material=a}getMaterialType(){return gp}loadMaterial(e){const n=this,a=this.json,r=this.extensions,c=a.materials[e];let u;const h={},p=c.extensions||{},d=[];if(p[vt.KHR_MATERIALS_UNLIT]){const _=r[vt.KHR_MATERIALS_UNLIT];u=_.getMaterialType(),d.push(_.extendParams(h,c,n))}else{const _=c.pbrMetallicRoughness||{};if(h.color=new at(1,1,1),h.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;h.color.setRGB(v[0],v[1],v[2],Hn),h.opacity=v[3]}_.baseColorTexture!==void 0&&d.push(n.assignTexture(h,"map",_.baseColorTexture,wn)),h.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,h.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(d.push(n.assignTexture(h,"metalnessMap",_.metallicRoughnessTexture)),d.push(n.assignTexture(h,"roughnessMap",_.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,h)})))}c.doubleSided===!0&&(h.side=Ii);const g=c.alphaMode||ld.OPAQUE;if(g===ld.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,g===ld.MASK&&(h.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==is&&(d.push(n.assignTexture(h,"normalMap",c.normalTexture)),h.normalScale=new yt(1,1),c.normalTexture.scale!==void 0)){const _=c.normalTexture.scale;h.normalScale.set(_,_)}if(c.occlusionTexture!==void 0&&u!==is&&(d.push(n.assignTexture(h,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==is){const _=c.emissiveFactor;h.emissive=new at().setRGB(_[0],_[1],_[2],Hn)}return c.emissiveTexture!==void 0&&u!==is&&d.push(n.assignTexture(h,"emissiveMap",c.emissiveTexture,wn)),Promise.all(d).then(function(){const _=new u(h);return c.name&&(_.name=c.name),pa(_,c),n.associations.set(_,{materials:e}),c.extensions&&Ns(r,_,c),_})}createUniqueName(e){const n=It.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,a=this.extensions,r=this.primitiveCache;function c(h){return a[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,n).then(function(p){return Av(p,h,n)})}const u=[];for(let h=0,p=e.length;h<p;h++){const d=e[h],g=cw(d),_=r[g];if(_)u.push(_.promise);else{let v;d.extensions&&d.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?v=c(d):v=Av(new Ri,d,n),r[g]={primitive:d,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const n=this,a=this.json,r=this.extensions,c=a.meshes[e],u=c.primitives,h=[];for(let p=0,d=u.length;p<d;p++){const g=u[p].material===void 0?rw(this.cache):this.getDependency("material",u[p].material);h.push(g)}return h.push(n.loadGeometries(u)),Promise.all(h).then(function(p){const d=p.slice(0,p.length-1),g=p[p.length-1],_=[];for(let y=0,E=g.length;y<E;y++){const T=g[y],S=u[y];let x;const N=d[y];if(S.mode===di.TRIANGLES||S.mode===di.TRIANGLE_STRIP||S.mode===di.TRIANGLE_FAN||S.mode===void 0)x=c.isSkinnedMesh===!0?new rE(T,N):new qn(T,N),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===di.TRIANGLE_STRIP?x.geometry=Mv(x.geometry,Fv):S.mode===di.TRIANGLE_FAN&&(x.geometry=Mv(x.geometry,Yd));else if(S.mode===di.LINES)x=new dE(T,N);else if(S.mode===di.LINE_STRIP)x=new pp(T,N);else if(S.mode===di.LINE_LOOP)x=new pE(T,N);else if(S.mode===di.POINTS)x=new mE(T,N);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&lw(x,c),x.name=n.createUniqueName(c.name||"mesh_"+e),pa(x,c),S.extensions&&Ns(r,x,S),n.assignFinalMaterial(x),_.push(x)}for(let y=0,E=_.length;y<E;y++)n.associations.set(_[y],{meshes:e,primitives:y});if(_.length===1)return c.extensions&&Ns(r,_[0],c),_[0];const v=new Fs;c.extensions&&Ns(r,v,c),n.associations.set(v,{meshes:e});for(let y=0,E=_.length;y<E;y++)v.add(_[y]);return v})}loadCamera(e){let n;const a=this.json.cameras[e],r=a[a.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new Bn(wM.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):a.type==="orthographic"&&(n=new vp(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),pa(n,a),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],a=[];for(let r=0,c=n.joints.length;r<c;r++)a.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(r){const c=r.pop(),u=r,h=[],p=[];for(let d=0,g=u.length;d<g;d++){const _=u[d];if(_){h.push(_);const v=new ot;c!==null&&v.fromArray(c.array,d*16),p.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[d])}return new hp(h,p)})}loadAnimation(e){const n=this.json,a=this,r=n.animations[e],c=r.name?r.name:"animation_"+e,u=[],h=[],p=[],d=[],g=[];for(let _=0,v=r.channels.length;_<v;_++){const y=r.channels[_],E=r.samplers[y.sampler],T=y.target,S=T.node,x=r.parameters!==void 0?r.parameters[E.input]:E.input,N=r.parameters!==void 0?r.parameters[E.output]:E.output;T.node!==void 0&&(u.push(this.getDependency("node",S)),h.push(this.getDependency("accessor",x)),p.push(this.getDependency("accessor",N)),d.push(E),g.push(T))}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p),Promise.all(d),Promise.all(g)]).then(function(_){const v=_[0],y=_[1],E=_[2],T=_[3],S=_[4],x=[];for(let N=0,L=v.length;N<L;N++){const w=v[N],F=y[N],H=E[N],B=T[N],X=S[N];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const D=a._createAnimationTracks(w,F,H,B,X);if(D)for(let C=0;C<D.length;C++)x.push(D[C])}return new TE(c,void 0,x)})}createNodeMesh(e){const n=this.json,a=this,r=n.nodes[e];return r.mesh===void 0?null:a.getDependency("mesh",r.mesh).then(function(c){const u=a._getNodeRef(a.meshCache,r.mesh,c);return r.weights!==void 0&&u.traverse(function(h){if(h.isMesh)for(let p=0,d=r.weights.length;p<d;p++)h.morphTargetInfluences[p]=r.weights[p]}),u})}loadNode(e){const n=this.json,a=this,r=n.nodes[e],c=a._loadNodeShallow(e),u=[],h=r.children||[];for(let d=0,g=h.length;d<g;d++)u.push(a.getDependency("node",h[d]));const p=r.skin===void 0?Promise.resolve(null):a.getDependency("skin",r.skin);return Promise.all([c,Promise.all(u),p]).then(function(d){const g=d[0],_=d[1],v=d[2];v!==null&&g.traverse(function(y){y.isSkinnedMesh&&y.bind(v,fw)});for(let y=0,E=_.length;y<E;y++)g.add(_[y]);return g})}_loadNodeShallow(e){const n=this.json,a=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const c=n.nodes[e],u=c.name?r.createUniqueName(c.name):"",h=[],p=r._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return p&&h.push(p),c.camera!==void 0&&h.push(r.getDependency("camera",c.camera).then(function(d){return r._getNodeRef(r.cameraCache,c.camera,d)})),r._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){h.push(d)}),this.nodeCache[e]=Promise.all(h).then(function(d){let g;if(c.isBone===!0?g=new Zv:d.length>1?g=new Fs:d.length===1?g=d[0]:g=new Zt,g!==d[0])for(let _=0,v=d.length;_<v;_++)g.add(d[_]);if(c.name&&(g.userData.name=c.name,g.name=u),pa(g,c),c.extensions&&Ns(a,g,c),c.matrix!==void 0){const _=new ot;_.fromArray(c.matrix),g.applyMatrix4(_)}else c.translation!==void 0&&g.position.fromArray(c.translation),c.rotation!==void 0&&g.quaternion.fromArray(c.rotation),c.scale!==void 0&&g.scale.fromArray(c.scale);if(!r.associations.has(g))r.associations.set(g,{});else if(c.mesh!==void 0&&r.meshCache.refs[c.mesh]>1){const _=r.associations.get(g);r.associations.set(g,{..._})}return r.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const n=this.extensions,a=this.json.scenes[e],r=this,c=new Fs;a.name&&(c.name=r.createUniqueName(a.name)),pa(c,a),a.extensions&&Ns(n,c,a);const u=a.nodes||[],h=[];for(let p=0,d=u.length;p<d;p++)h.push(r.getDependency("node",u[p]));return Promise.all(h).then(function(p){for(let g=0,_=p.length;g<_;g++)c.add(p[g]);const d=g=>{const _=new Map;for(const[v,y]of r.associations)(v instanceof Bi||v instanceof Sn)&&_.set(v,y);return g.traverse(v=>{const y=r.associations.get(v);y!=null&&_.set(v,y)}),_};return r.associations=d(c),c})}_createAnimationTracks(e,n,a,r,c){const u=[],h=e.name?e.name:e.uuid,p=[];$a[c.path]===$a.weights?e.traverse(function(v){v.morphTargetInfluences&&p.push(v.name?v.name:v.uuid)}):p.push(h);let d;switch($a[c.path]){case $a.weights:d=Wr;break;case $a.rotation:d=qr;break;case $a.translation:case $a.scale:d=Yr;break;default:switch(a.itemSize){case 1:d=Wr;break;case 2:case 3:default:d=Yr;break}break}const g=r.interpolation!==void 0?sw[r.interpolation]:dl,_=this._getArrayFromAccessor(a);for(let v=0,y=p.length;v<y;v++){const E=new d(p[v]+"."+$a[c.path],n.array,_,g);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),u.push(E)}return u}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const a=$d(n.constructor),r=new Float32Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=n[c]*a;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const r=this instanceof qr?aw:uy;return new r(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function dw(o,e,n){const a=e.attributes,r=new xa;if(a.POSITION!==void 0){const h=n.json.accessors[a.POSITION],p=h.min,d=h.max;if(p!==void 0&&d!==void 0){if(r.set(new j(p[0],p[1],p[2]),new j(d[0],d[1],d[2])),h.normalized){const g=$d(Fr[h.componentType]);r.min.multiplyScalar(g),r.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=e.targets;if(c!==void 0){const h=new j,p=new j;for(let d=0,g=c.length;d<g;d++){const _=c[d];if(_.POSITION!==void 0){const v=n.json.accessors[_.POSITION],y=v.min,E=v.max;if(y!==void 0&&E!==void 0){if(p.setX(Math.max(Math.abs(y[0]),Math.abs(E[0]))),p.setY(Math.max(Math.abs(y[1]),Math.abs(E[1]))),p.setZ(Math.max(Math.abs(y[2]),Math.abs(E[2]))),v.normalized){const T=$d(Fr[v.componentType]);p.multiplyScalar(T)}h.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(h)}o.boundingBox=r;const u=new Hi;r.getCenter(u.center),u.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=u}function Av(o,e,n){const a=e.attributes,r=[];function c(u,h){return n.getDependency("accessor",u).then(function(p){o.setAttribute(h,p)})}for(const u in a){const h=Jd[u]||u.toLowerCase();h in o.attributes||r.push(c(a[u],h))}if(e.indices!==void 0&&!o.index){const u=n.getDependency("accessor",e.indices).then(function(h){o.setIndex(h)});r.push(u)}return Tt.workingColorSpace!==Hn&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Tt.workingColorSpace}" not supported.`),pa(o,e),dw(o,e,n),Promise.all(r).then(function(){return e.targets!==void 0?ow(o,e.targets,n):o})}class pw{static createButton(e,n={}){const a=document.createElement("button");function r(){if(n.domOverlay===void 0){const v=document.createElement("div");v.style.display="none",document.body.appendChild(v);const y=document.createElementNS("http://www.w3.org/2000/svg","svg");y.setAttribute("width",38),y.setAttribute("height",38),y.style.position="absolute",y.style.right="20px",y.style.top="20px",y.addEventListener("click",function(){d.end()}),v.appendChild(y);const E=document.createElementNS("http://www.w3.org/2000/svg","path");E.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),E.setAttribute("stroke","#fff"),E.setAttribute("stroke-width",2),y.appendChild(E),n.optionalFeatures===void 0&&(n.optionalFeatures=[]),n.optionalFeatures.push("dom-overlay"),n.domOverlay={root:v}}let d=null;async function g(v){v.addEventListener("end",_),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(v),a.textContent="STOP AR",n.domOverlay.root.style.display="",d=v}function _(){d.removeEventListener("end",_),a.textContent="START AR",n.domOverlay.root.style.display="none",d=null}a.style.display="",a.style.cursor="pointer",a.style.left="calc(50% - 50px)",a.style.width="100px",a.textContent="START AR",a.onmouseenter=function(){a.style.opacity="1.0"},a.onmouseleave=function(){a.style.opacity="0.5"},a.onclick=function(){d===null?navigator.xr.requestSession("immersive-ar",n).then(g):(d.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(g).catch(v=>{console.warn(v)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(g).catch(v=>{console.warn(v)})}function c(){a.style.display="",a.style.cursor="auto",a.style.left="calc(50% - 75px)",a.style.width="150px",a.onmouseenter=null,a.onmouseleave=null,a.onclick=null}function u(){c(),a.textContent="AR NOT SUPPORTED"}function h(d){c(),console.warn("Exception when trying to call xr.isSessionSupported",d),a.textContent="AR NOT ALLOWED"}function p(d){d.style.position="absolute",d.style.bottom="20px",d.style.padding="12px 6px",d.style.border="1px solid #fff",d.style.borderRadius="4px",d.style.background="rgba(0,0,0,0.1)",d.style.color="#fff",d.style.font="normal 13px sans-serif",d.style.textAlign="center",d.style.opacity="0.5",d.style.outline="none",d.style.zIndex="999"}if("xr"in navigator)return a.id="ARButton",a.style.display="none",p(a),navigator.xr.isSessionSupported("immersive-ar").then(function(d){d?r():u()}).catch(h),a;{const d=document.createElement("a");return window.isSecureContext===!1?(d.href=document.location.href.replace(/^http:/,"https:"),d.innerHTML="WEBXR NEEDS HTTPS"):(d.href="https://immersiveweb.dev/",d.innerHTML="WEBXR NOT AVAILABLE"),d.style.left="calc(50% - 90px)",d.style.width="180px",d.style.textDecoration="none",p(d),d}}}function mw(){const[o,e]=es.useState(a0[0]),n=es.useRef(null),a=es.useRef(null),r=es.useRef(null),c=es.useRef(null),u=es.useRef(null);es.useEffect(()=>{o&&h()},[o]);const h=async()=>{if(!n.current)return;a.current&&(a.current.dispose(),n.current.innerHTML="");const p=new iE,d=new Bn(70,window.innerWidth/window.innerHeight,.01,20),g=new LR({antialias:!0,alpha:!0});g.setSize(window.innerWidth,window.innerHeight),g.xr.enabled=!0,n.current.appendChild(g.domElement),n.current.appendChild(pw.createButton(g,{requiredFeatures:["hit-test"]}));const _=new LE(16777215,12303359,1);_.position.set(.5,1,.25),p.add(_);const v=g.xr.getController(0);v.addEventListener("select",N),p.add(v),u.current=v;const y=new qn(new mp(.15,.2,32).rotateX(-Math.PI/2),new is({color:1048320}));y.matrixAutoUpdate=!1,y.visible=!1,p.add(y),c.current=y;let E=null,T=!1,S=null;new NR().load(o.gltfUrl,w=>{S=w.scene,S.scale.set(.5,.5,.5)},void 0,w=>console.error("GLTF load error:",w));function N(){if(y.visible&&S){const w=S.clone();w.position.setFromMatrixPosition(y.matrix),w.quaternion.setFromRotationMatrix(y.matrix),p.add(w)}}function L(){g.setAnimationLoop((w,F)=>{if(F){const H=g.xr.getReferenceSpace(),B=g.xr.getSession();if(T||(B.requestReferenceSpace("viewer").then(X=>{B.requestHitTestSource({space:X}).then(D=>{E=D})}),B.addEventListener("end",()=>{T=!1,E=null}),T=!0),E){const X=F.getHitTestResults(E);if(X.length>0){const C=X[0].getPose(H);y.visible=!0,y.matrix.fromArray(C.transform.matrix)}else y.visible=!1}}g.render(p,d)})}L(),a.current=g,r.current=p};return Mi.jsxs("div",{className:"min-h-screen bg-gray-100 p-4",children:[Mi.jsx("h1",{className:"text-3xl font-bold text-center mb-4",children:"AR Furniture Viewer"}),Mi.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[Mi.jsxs("div",{className:"md:col-span-1",children:[Mi.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Choose Furniture"}),Mi.jsx("ul",{className:"space-y-2",children:a0.map(p=>Mi.jsx("li",{className:`p-3 rounded-lg cursor-pointer shadow-md bg-white hover:bg-blue-100 transition ${o.id===p.id?"bg-blue-200":""}`,onClick:()=>e(p),children:Mi.jsx("div",{className:"font-medium",children:p.name})},p.id))})]}),Mi.jsx("div",{className:"md:col-span-2 bg-black rounded-lg",style:{height:"80vh"},ref:n})]})]})}MS.createRoot(document.getElementById("root")).render(Mi.jsx(es.StrictMode,{children:Mi.jsx(mw,{})}));
