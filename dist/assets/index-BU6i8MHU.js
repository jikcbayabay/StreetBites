(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var um={exports:{}},kl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function lw(){if(Ov)return kl;Ov=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var m in o)m!=="key"&&(c[m]=o[m])}else c=o;return o=c.ref,{$$typeof:n,type:r,key:h,ref:o!==void 0?o:null,props:c}}return kl.Fragment=e,kl.jsx=i,kl.jsxs=i,kl}var kv;function cw(){return kv||(kv=1,um.exports=lw()),um.exports}var y=cw(),hm={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function uw(){if(Mv)return Re;Mv=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.iterator;function k(M){return M===null||typeof M!="object"?null:(M=w&&M[w]||M["@@iterator"],typeof M=="function"?M:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,j={};function q(M,Z,le){this.props=M,this.context=Z,this.refs=j,this.updater=le||z}q.prototype.isReactComponent={},q.prototype.setState=function(M,Z){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Z,"setState")},q.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function B(){}B.prototype=q.prototype;function P(M,Z,le){this.props=M,this.context=Z,this.refs=j,this.updater=le||z}var se=P.prototype=new B;se.constructor=P,K(se,q.prototype),se.isPureReactComponent=!0;var ae=Array.isArray;function ue(){}var C={H:null,A:null,T:null,S:null},x=Object.prototype.hasOwnProperty;function R(M,Z,le){var fe=le.ref;return{$$typeof:n,type:M,key:Z,ref:fe!==void 0?fe:null,props:le}}function I(M,Z){return R(M.type,Z,M.props)}function D(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function V(M){var Z={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(le){return Z[le]})}var N=/\/+/g;function _e(M,Z){return typeof M=="object"&&M!==null&&M.key!=null?V(""+M.key):Z.toString(36)}function Ne(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(ue,ue):(M.status="pending",M.then(function(Z){M.status==="pending"&&(M.status="fulfilled",M.value=Z)},function(Z){M.status==="pending"&&(M.status="rejected",M.reason=Z)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function Y(M,Z,le,fe,Te){var Ae=typeof M;(Ae==="undefined"||Ae==="boolean")&&(M=null);var ke=!1;if(M===null)ke=!0;else switch(Ae){case"bigint":case"string":case"number":ke=!0;break;case"object":switch(M.$$typeof){case n:case e:ke=!0;break;case E:return ke=M._init,Y(ke(M._payload),Z,le,fe,Te)}}if(ke)return Te=Te(M),ke=fe===""?"."+_e(M,0):fe,ae(Te)?(le="",ke!=null&&(le=ke.replace(N,"$&/")+"/"),Y(Te,Z,le,"",function(on){return on})):Te!=null&&(D(Te)&&(Te=I(Te,le+(Te.key==null||M&&M.key===Te.key?"":(""+Te.key).replace(N,"$&/")+"/")+ke)),Z.push(Te)),1;ke=0;var ot=fe===""?".":fe+":";if(ae(M))for(var Ye=0;Ye<M.length;Ye++)fe=M[Ye],Ae=ot+_e(fe,Ye),ke+=Y(fe,Z,le,Ae,Te);else if(Ye=k(M),typeof Ye=="function")for(M=Ye.call(M),Ye=0;!(fe=M.next()).done;)fe=fe.value,Ae=ot+_e(fe,Ye++),ke+=Y(fe,Z,le,Ae,Te);else if(Ae==="object"){if(typeof M.then=="function")return Y(Ne(M),Z,le,fe,Te);throw Z=String(M),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ke}function re(M,Z,le){if(M==null)return M;var fe=[],Te=0;return Y(M,fe,"","",function(Ae){return Z.call(le,Ae,Te++)}),fe}function ce(M){if(M._status===-1){var Z=M._result;Z=Z(),Z.then(function(le){(M._status===0||M._status===-1)&&(M._status=1,M._result=le)},function(le){(M._status===0||M._status===-1)&&(M._status=2,M._result=le)}),M._status===-1&&(M._status=0,M._result=Z)}if(M._status===1)return M._result.default;throw M._result}var pe=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},he={map:re,forEach:function(M,Z,le){re(M,function(){Z.apply(this,arguments)},le)},count:function(M){var Z=0;return re(M,function(){Z++}),Z},toArray:function(M){return re(M,function(Z){return Z})||[]},only:function(M){if(!D(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return Re.Activity=T,Re.Children=he,Re.Component=q,Re.Fragment=i,Re.Profiler=o,Re.PureComponent=P,Re.StrictMode=r,Re.Suspense=p,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,Re.__COMPILER_RUNTIME={__proto__:null,c:function(M){return C.H.useMemoCache(M)}},Re.cache=function(M){return function(){return M.apply(null,arguments)}},Re.cacheSignal=function(){return null},Re.cloneElement=function(M,Z,le){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var fe=K({},M.props),Te=M.key;if(Z!=null)for(Ae in Z.key!==void 0&&(Te=""+Z.key),Z)!x.call(Z,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&Z.ref===void 0||(fe[Ae]=Z[Ae]);var Ae=arguments.length-2;if(Ae===1)fe.children=le;else if(1<Ae){for(var ke=Array(Ae),ot=0;ot<Ae;ot++)ke[ot]=arguments[ot+2];fe.children=ke}return R(M.type,Te,fe)},Re.createContext=function(M){return M={$$typeof:h,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:c,_context:M},M},Re.createElement=function(M,Z,le){var fe,Te={},Ae=null;if(Z!=null)for(fe in Z.key!==void 0&&(Ae=""+Z.key),Z)x.call(Z,fe)&&fe!=="key"&&fe!=="__self"&&fe!=="__source"&&(Te[fe]=Z[fe]);var ke=arguments.length-2;if(ke===1)Te.children=le;else if(1<ke){for(var ot=Array(ke),Ye=0;Ye<ke;Ye++)ot[Ye]=arguments[Ye+2];Te.children=ot}if(M&&M.defaultProps)for(fe in ke=M.defaultProps,ke)Te[fe]===void 0&&(Te[fe]=ke[fe]);return R(M,Ae,Te)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(M){return{$$typeof:m,render:M}},Re.isValidElement=D,Re.lazy=function(M){return{$$typeof:E,_payload:{_status:-1,_result:M},_init:ce}},Re.memo=function(M,Z){return{$$typeof:g,type:M,compare:Z===void 0?null:Z}},Re.startTransition=function(M){var Z=C.T,le={};C.T=le;try{var fe=M(),Te=C.S;Te!==null&&Te(le,fe),typeof fe=="object"&&fe!==null&&typeof fe.then=="function"&&fe.then(ue,pe)}catch(Ae){pe(Ae)}finally{Z!==null&&le.types!==null&&(Z.types=le.types),C.T=Z}},Re.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},Re.use=function(M){return C.H.use(M)},Re.useActionState=function(M,Z,le){return C.H.useActionState(M,Z,le)},Re.useCallback=function(M,Z){return C.H.useCallback(M,Z)},Re.useContext=function(M){return C.H.useContext(M)},Re.useDebugValue=function(){},Re.useDeferredValue=function(M,Z){return C.H.useDeferredValue(M,Z)},Re.useEffect=function(M,Z){return C.H.useEffect(M,Z)},Re.useEffectEvent=function(M){return C.H.useEffectEvent(M)},Re.useId=function(){return C.H.useId()},Re.useImperativeHandle=function(M,Z,le){return C.H.useImperativeHandle(M,Z,le)},Re.useInsertionEffect=function(M,Z){return C.H.useInsertionEffect(M,Z)},Re.useLayoutEffect=function(M,Z){return C.H.useLayoutEffect(M,Z)},Re.useMemo=function(M,Z){return C.H.useMemo(M,Z)},Re.useOptimistic=function(M,Z){return C.H.useOptimistic(M,Z)},Re.useReducer=function(M,Z,le){return C.H.useReducer(M,Z,le)},Re.useRef=function(M){return C.H.useRef(M)},Re.useState=function(M){return C.H.useState(M)},Re.useSyncExternalStore=function(M,Z,le){return C.H.useSyncExternalStore(M,Z,le)},Re.useTransition=function(){return C.H.useTransition()},Re.version="19.2.0",Re}var Vv;function Bh(){return Vv||(Vv=1,hm.exports=uw()),hm.exports}var F=Bh(),fm={exports:{}},Ml={},dm={exports:{}},mm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function hw(){return jv||(jv=1,(function(n){function e(Y,re){var ce=Y.length;Y.push(re);e:for(;0<ce;){var pe=ce-1>>>1,he=Y[pe];if(0<o(he,re))Y[pe]=re,Y[ce]=he,ce=pe;else break e}}function i(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var re=Y[0],ce=Y.pop();if(ce!==re){Y[0]=ce;e:for(var pe=0,he=Y.length,M=he>>>1;pe<M;){var Z=2*(pe+1)-1,le=Y[Z],fe=Z+1,Te=Y[fe];if(0>o(le,ce))fe<he&&0>o(Te,le)?(Y[pe]=Te,Y[fe]=ce,pe=fe):(Y[pe]=le,Y[Z]=ce,pe=Z);else if(fe<he&&0>o(Te,ce))Y[pe]=Te,Y[fe]=ce,pe=fe;else break e}}return re}function o(Y,re){var ce=Y.sortIndex-re.sortIndex;return ce!==0?ce:Y.id-re.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var h=Date,m=h.now();n.unstable_now=function(){return h.now()-m}}var p=[],g=[],E=1,T=null,w=3,k=!1,z=!1,K=!1,j=!1,q=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function se(Y){for(var re=i(g);re!==null;){if(re.callback===null)r(g);else if(re.startTime<=Y)r(g),re.sortIndex=re.expirationTime,e(p,re);else break;re=i(g)}}function ae(Y){if(K=!1,se(Y),!z)if(i(p)!==null)z=!0,ue||(ue=!0,V());else{var re=i(g);re!==null&&Ne(ae,re.startTime-Y)}}var ue=!1,C=-1,x=5,R=-1;function I(){return j?!0:!(n.unstable_now()-R<x)}function D(){if(j=!1,ue){var Y=n.unstable_now();R=Y;var re=!0;try{e:{z=!1,K&&(K=!1,B(C),C=-1),k=!0;var ce=w;try{t:{for(se(Y),T=i(p);T!==null&&!(T.expirationTime>Y&&I());){var pe=T.callback;if(typeof pe=="function"){T.callback=null,w=T.priorityLevel;var he=pe(T.expirationTime<=Y);if(Y=n.unstable_now(),typeof he=="function"){T.callback=he,se(Y),re=!0;break t}T===i(p)&&r(p),se(Y)}else r(p);T=i(p)}if(T!==null)re=!0;else{var M=i(g);M!==null&&Ne(ae,M.startTime-Y),re=!1}}break e}finally{T=null,w=ce,k=!1}re=void 0}}finally{re?V():ue=!1}}}var V;if(typeof P=="function")V=function(){P(D)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,_e=N.port2;N.port1.onmessage=D,V=function(){_e.postMessage(null)}}else V=function(){q(D,0)};function Ne(Y,re){C=q(function(){Y(n.unstable_now())},re)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(Y){switch(w){case 1:case 2:case 3:var re=3;break;default:re=w}var ce=w;w=re;try{return Y()}finally{w=ce}},n.unstable_requestPaint=function(){j=!0},n.unstable_runWithPriority=function(Y,re){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ce=w;w=Y;try{return re()}finally{w=ce}},n.unstable_scheduleCallback=function(Y,re,ce){var pe=n.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?pe+ce:pe):ce=pe,Y){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=ce+he,Y={id:E++,callback:re,priorityLevel:Y,startTime:ce,expirationTime:he,sortIndex:-1},ce>pe?(Y.sortIndex=ce,e(g,Y),i(p)===null&&Y===i(g)&&(K?(B(C),C=-1):K=!0,Ne(ae,ce-pe))):(Y.sortIndex=he,e(p,Y),z||k||(z=!0,ue||(ue=!0,V()))),Y},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(Y){var re=w;return function(){var ce=w;w=re;try{return Y.apply(this,arguments)}finally{w=ce}}}})(mm)),mm}var Lv;function fw(){return Lv||(Lv=1,dm.exports=hw()),dm.exports}var pm={exports:{}},Xt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function dw(){if(Pv)return Xt;Pv=1;var n=Bh();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,g,E){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:T==null?null:""+T,children:p,containerInfo:g,implementation:E}}var h=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Xt.createPortal=function(p,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return c(p,g,null,E)},Xt.flushSync=function(p){var g=h.T,E=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=g,r.p=E,r.d.f()}},Xt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(p,g))},Xt.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Xt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var E=g.as,T=m(E,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?r.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:k}):E==="script"&&r.d.X(p,{crossOrigin:T,integrity:w,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Xt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=m(g.as,g.crossOrigin);r.d.M(p,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(p)},Xt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,T=m(E,g.crossOrigin);r.d.L(p,E,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Xt.preloadModule=function(p,g){if(typeof p=="string")if(g){var E=m(g.as,g.crossOrigin);r.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(p)},Xt.requestFormReset=function(p){r.d.r(p)},Xt.unstable_batchedUpdates=function(p,g){return p(g)},Xt.useFormState=function(p,g,E){return h.H.useFormState(p,g,E)},Xt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Xt.version="19.2.0",Xt}var Uv;function mw(){if(Uv)return pm.exports;Uv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),pm.exports=dw(),pm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function pw(){if(zv)return Ml;zv=1;var n=fw(),e=Bh(),i=mw();function r(t){var s="https://react.dev/errors/"+t;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var s=t,a=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,(s.flags&4098)!==0&&(a=s.return),t=s.return;while(t)}return s.tag===3?a:null}function h(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function m(t){if(t.tag===31){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function g(t){var s=t.alternate;if(!s){if(s=c(t),s===null)throw Error(r(188));return s!==t?null:t}for(var a=t,l=s;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return p(f),t;if(d===l)return p(f),s;d=d.sibling}throw Error(r(188))}if(a.return!==l.return)a=f,l=d;else{for(var v=!1,S=f.child;S;){if(S===a){v=!0,a=f,l=d;break}if(S===l){v=!0,l=f,a=d;break}S=S.sibling}if(!v){for(S=d.child;S;){if(S===a){v=!0,a=d,l=f;break}if(S===l){v=!0,l=d,a=f;break}S=S.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:s}function E(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t;for(t=t.child;t!==null;){if(s=E(t),s!==null)return s;t=t.sibling}return null}var T=Object.assign,w=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),P=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),I=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=D&&t[D]||t["@@iterator"],typeof t=="function"?t:null)}var N=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===N?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case K:return"Fragment";case q:return"Profiler";case j:return"StrictMode";case ae:return"Suspense";case ue:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case z:return"Portal";case P:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case se:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case C:return s=t.displayName||null,s!==null?s:_e(t.type)||"Memo";case x:s=t._payload,t=t._init;try{return _e(t(s))}catch{}}return null}var Ne=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},pe=[],he=-1;function M(t){return{current:t}}function Z(t){0>he||(t.current=pe[he],pe[he]=null,he--)}function le(t,s){he++,pe[he]=t.current,t.current=s}var fe=M(null),Te=M(null),Ae=M(null),ke=M(null);function ot(t,s){switch(le(Ae,s),le(Te,t),le(fe,null),s.nodeType){case 9:case 11:t=(t=s.documentElement)&&(t=t.namespaceURI)?tv(t):0;break;default:if(t=s.tagName,s=s.namespaceURI)s=tv(s),t=nv(s,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(fe),le(fe,t)}function Ye(){Z(fe),Z(Te),Z(Ae)}function on(t){t.memoizedState!==null&&le(ke,t);var s=fe.current,a=nv(s,t.type);s!==a&&(le(Te,t),le(fe,a))}function mi(t){Te.current===t&&(Z(fe),Z(Te)),ke.current===t&&(Z(ke),Nl._currentValue=ce)}var Kn,Qn;function tn(t){if(Kn===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);Kn=s&&s[1]||"",Qn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kn+t+Qn}var In=!1;function ln(t,s){if(!t||In)return"";In=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(s){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(W){var $=W}Reflect.construct(t,[],te)}else{try{te.call()}catch(W){$=W}t.call(te.prototype)}}else{try{throw Error()}catch(W){$=W}(te=t())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(W){if(W&&$&&typeof W.stack=="string")return[W.stack,$.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],S=d[1];if(v&&S){var O=v.split(`
`),Q=S.split(`
`);for(f=l=0;l<O.length&&!O[l].includes("DetermineComponentFrameRoot");)l++;for(;f<Q.length&&!Q[f].includes("DetermineComponentFrameRoot");)f++;if(l===O.length||f===Q.length)for(l=O.length-1,f=Q.length-1;1<=l&&0<=f&&O[l]!==Q[f];)f--;for(;1<=l&&0<=f;l--,f--)if(O[l]!==Q[f]){if(l!==1||f!==1)do if(l--,f--,0>f||O[l]!==Q[f]){var J=`
`+O[l].replace(" at new "," at ");return t.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",t.displayName)),J}while(1<=l&&0<=f);break}}}finally{In=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?tn(a):""}function Dn(t,s){switch(t.tag){case 26:case 27:case 5:return tn(t.type);case 16:return tn("Lazy");case 13:return t.child!==s&&s!==null?tn("Suspense Fallback"):tn("Suspense");case 19:return tn("SuspenseList");case 0:case 15:return ln(t.type,!1);case 11:return ln(t.type.render,!1);case 1:return ln(t.type,!0);case 31:return tn("Activity");default:return""}}function pi(t){try{var s="",a=null;do s+=Dn(t,a),a=t,t=t.return;while(t);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var bt=Object.prototype.hasOwnProperty,kt=n.unstable_scheduleCallback,Cs=n.unstable_cancelCallback,ff=n.unstable_shouldYield,bc=n.unstable_requestPaint,nn=n.unstable_now,Ir=n.unstable_getCurrentPriorityLevel,Oo=n.unstable_ImmediatePriority,ko=n.unstable_UserBlockingPriority,Ns=n.unstable_NormalPriority,df=n.unstable_LowPriority,Tc=n.unstable_IdlePriority,Sc=n.log,wc=n.unstable_setDisableYieldValue,Yn=null,Bt=null;function On(t){if(typeof Sc=="function"&&wc(t),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(Yn,t)}catch{}}var mt=Math.clz32?Math.clz32:xc,Ac=Math.log,va=Math.LN2;function xc(t){return t>>>=0,t===0?32:31-(Ac(t)/va|0)|0}var gi=256,Dr=262144,Tt=4194304;function yi(t){var s=t&42;if(s!==0)return s;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _i(t,s,a){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var S=l&134217727;return S!==0?(l=S&~d,l!==0?f=yi(l):(v&=S,v!==0?f=yi(v):a||(a=S&~t,a!==0&&(f=yi(a))))):(S=l&~d,S!==0?f=yi(S):v!==0?f=yi(v):a||(a=l&~t,a!==0&&(f=yi(a)))),f===0?0:s!==0&&s!==f&&(s&d)===0&&(d=f&-f,a=s&-s,d>=a||d===32&&(a&4194048)!==0)?s:f}function $n(t,s){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&s)===0}function mf(t,s){switch(t){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rc(){var t=Tt;return Tt<<=1,(Tt&62914560)===0&&(Tt=4194304),t}function vi(t){for(var s=[],a=0;31>a;a++)s.push(t);return s}function Or(t,s){t.pendingLanes|=s,s!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function pf(t,s,a,l,f,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var S=t.entanglements,O=t.expirationTimes,Q=t.hiddenUpdates;for(a=v&~a;0<a;){var J=31-mt(a),te=1<<J;S[J]=0,O[J]=-1;var $=Q[J];if($!==null)for(Q[J]=null,J=0;J<$.length;J++){var W=$[J];W!==null&&(W.lane&=-536870913)}a&=~te}l!==0&&kr(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~s))}function kr(t,s,a){t.pendingLanes|=s,t.suspendedLanes&=~s;var l=31-mt(s);t.entangledLanes|=s,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function Mo(t,s){var a=t.entangledLanes|=s;for(t=t.entanglements;a;){var l=31-mt(a),f=1<<l;f&s|t[l]&s&&(t[l]|=s),a&=~f}}function Vo(t,s){var a=s&-s;return a=(a&42)!==0?1:Mr(a),(a&(t.suspendedLanes|s))!==0?0:a}function Mr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Wi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Cc(){var t=re.p;return t!==0?t:(t=window.event,t===void 0?32:Av(t.type))}function Xn(t,s){var a=re.p;try{return re.p=t,s()}finally{re.p=a}}var Wn=Math.random().toString(36).slice(2),St="__reactFiber$"+Wn,jt="__reactProps$"+Wn,Ei="__reactContainer$"+Wn,Ea="__reactEvents$"+Wn,gf="__reactListeners$"+Wn,Nc="__reactHandles$"+Wn,Ic="__reactResources$"+Wn,bi="__reactMarker$"+Wn;function ba(t){delete t[St],delete t[jt],delete t[Ea],delete t[gf],delete t[Nc]}function Ti(t){var s=t[St];if(s)return s;for(var a=t.parentNode;a;){if(s=a[Ei]||a[St]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(t=cv(t);t!==null;){if(a=t[St])return a;t=cv(t)}return s}t=a,a=t.parentNode}return null}function kn(t){if(t=t[St]||t[Ei]){var s=t.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return t}return null}function vn(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t.stateNode;throw Error(r(33))}function Si(t){var s=t[Ic];return s||(s=t[Ic]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function wt(t){t[bi]=!0}var jo=new Set,Lo={};function wi(t,s){Ai(t,s),Ai(t+"Capture",s)}function Ai(t,s){for(Lo[t]=s,t=0;t<s.length;t++)jo.add(s[t])}var Po=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uo={},zo={};function Dc(t){return bt.call(zo,t)?!0:bt.call(Uo,t)?!1:Po.test(t)?zo[t]=!0:(Uo[t]=!0,!1)}function Ta(t,s,a){if(Dc(s))if(a===null)t.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(s);return;case"boolean":var l=s.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(s);return}}t.setAttribute(s,""+a)}}function En(t,s,a){if(a===null)t.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttribute(s,""+a)}}function At(t,s,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(s,a,""+l)}}function Lt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Is(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Bo(t,s,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,s);if(!t.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){a=""+v,d.call(this,v)}}),Object.defineProperty(t,s,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function $e(t){if(!t._valueTracker){var s=Is(t)?"checked":"value";t._valueTracker=Bo(t,s,""+t[s])}}function Vr(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var a=s.getValue(),l="";return t&&(l=Is(t)?t.checked?"true":"false":t.value),t=l,t!==a?(s.setValue(t),!0):!1}function xi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var jr=/[\n"\\]/g;function cn(t){return t.replace(jr,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Sa(t,s,a,l,f,d,v,S){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),s!=null?v==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+Lt(s)):t.value!==""+Lt(s)&&(t.value=""+Lt(s)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),s!=null?qo(t,v,Lt(s)):a!=null?qo(t,v,Lt(a)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.name=""+Lt(S):t.removeAttribute("name")}function Oc(t,s,a,l,f,d,v,S){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),s!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||s!=null)){$e(t);return}a=a!=null?""+Lt(a):"",s=s!=null?""+Lt(s):a,S||s===t.value||(t.value=s),t.defaultValue=s}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=S?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),$e(t)}function qo(t,s,a){s==="number"&&xi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ds(t,s,a,l){if(t=t.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=s.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Lt(a),s=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}s!==null||t[f].disabled||(s=t[f])}s!==null&&(s.selected=!0)}}function kc(t,s,a){if(s!=null&&(s=""+Lt(s),s!==t.value&&(t.value=s),a==null)){t.defaultValue!==s&&(t.defaultValue=s);return}t.defaultValue=a!=null?""+Lt(a):""}function Os(t,s,a,l){if(s==null){if(l!=null){if(a!=null)throw Error(r(92));if(Ne(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),s=a}a=Lt(s),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),$e(t)}function un(t,s){if(s){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=s;return}}t.textContent=s}var Mc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ho(t,s,a){var l=s.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="":l?t.setProperty(s,a):typeof a!="number"||a===0||Mc.has(s)?s==="float"?t.cssFloat=a:t[s]=(""+a).trim():t[s]=a+"px"}function Fo(t,s,a){if(s!=null&&typeof s!="object")throw Error(r(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||s!=null&&s.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in s)l=s[f],s.hasOwnProperty(f)&&a[f]!==l&&Ho(t,f,l)}else for(var d in s)s.hasOwnProperty(d)&&Ho(t,d,s[d])}function wa(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ks=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Aa(t){return ks.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Jn(){}var Go=null;function Mn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ms=null,Ri=null;function Lr(t){var s=kn(t);if(s&&(t=s.stateNode)){var a=t[jt]||null;e:switch(t=s.stateNode,s.type){case"input":if(Sa(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),s=a.name,a.type==="radio"&&s!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+cn(""+s)+'"][type="radio"]'),s=0;s<a.length;s++){var l=a[s];if(l!==t&&l.form===t.form){var f=l[jt]||null;if(!f)throw Error(r(90));Sa(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<a.length;s++)l=a[s],l.form===t.form&&Vr(l)}break e;case"textarea":kc(t,a.value,a.defaultValue);break e;case"select":s=a.value,s!=null&&Ds(t,!!a.multiple,s,!1)}}}var xa=!1;function Vs(t,s,a){if(xa)return t(s,a);xa=!0;try{var l=t(s);return l}finally{if(xa=!1,(Ms!==null||Ri!==null)&&(Cu(),Ms&&(s=Ms,t=Ri,Ri=Ms=null,Lr(s),t)))for(s=0;s<t.length;s++)Lr(t[s])}}function Zn(t,s){var a=t.stateNode;if(a===null)return null;var l=a[jt]||null;if(l===null)return null;a=l[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,s,typeof a));return a}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pr=!1;if(Vn)try{var Je={};Object.defineProperty(Je,"passive",{get:function(){Pr=!0}}),window.addEventListener("test",Je,Je),window.removeEventListener("test",Je,Je)}catch{Pr=!1}var Ci=null,Ko=null,Ur=null;function Qo(){if(Ur)return Ur;var t,s=Ko,a=s.length,l,f="value"in Ci?Ci.value:Ci.textContent,d=f.length;for(t=0;t<a&&s[t]===f[t];t++);var v=a-t;for(l=1;l<=v&&s[a-l]===f[d-l];l++);return Ur=f.slice(t,1<l?1-l:void 0)}function zr(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function Ji(){return!0}function ei(){return!1}function qt(t){function s(a,l,f,d,v){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var S in t)t.hasOwnProperty(S)&&(a=t[S],this[S]=a?a(d):d[S]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ji:ei,this.isPropagationStopped=ei,this}return T(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ji)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ji)},persist:function(){},isPersistent:Ji}),s}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ni=qt(Zi),js=T({},Zi,{view:0,detail:0}),Yo=qt(js),Ls,Ra,Ii,Ca=T({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ii&&(Ii&&t.type==="mousemove"?(Ls=t.screenX-Ii.screenX,Ra=t.screenY-Ii.screenY):Ra=Ls=0,Ii=t),Ls)},movementY:function(t){return"movementY"in t?t.movementY:Ra}}),$o=qt(Ca),Br=T({},Ca,{dataTransfer:0}),jc=qt(Br),Lc=T({},js,{relatedTarget:0}),qr=qt(Lc),Xo=T({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),Pc=qt(Xo),Na=T({},Zi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Uc=qt(Na),zc=T({},Zi,{data:0}),Di=qt(zc),Bc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fc(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=Hc[t])?!!s[t]:!1}function Ps(){return Fc}var sn=T({},js,{key:function(t){if(t.key){var s=Bc[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=zr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qc[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(t){return t.type==="keypress"?zr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gc=qt(sn),Kc=T({},Ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),es=qt(Kc),u=T({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),_=qt(u),b=T({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),A=qt(b),H=T({},Ca,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),X=qt(H),oe=T({},Zi,{newState:0,oldState:0}),Ie=qt(oe),pt=[9,13,27,32],Ge=Vn&&"CompositionEvent"in window,lt=null;Vn&&"documentMode"in document&&(lt=document.documentMode);var jn=Vn&&"TextEvent"in window&&!lt,Oi=Vn&&(!Ge||lt&&8<lt&&11>=lt),ti=" ",ni=!1;function Hr(t,s){switch(t){case"keyup":return pt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ia(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Da=!1;function OT(t,s){switch(t){case"compositionend":return Ia(s);case"keypress":return s.which!==32?null:(ni=!0,ti);case"textInput":return t=s.data,t===ti&&ni?null:t;default:return null}}function kT(t,s){if(Da)return t==="compositionend"||!Ge&&Hr(t,s)?(t=Qo(),Ur=Ko=Ci=null,Da=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Oi&&s.locale!=="ko"?null:s.data;default:return null}}var MT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fg(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!MT[t.type]:s==="textarea"}function dg(t,s,a,l){Ms?Ri?Ri.push(l):Ri=[l]:Ms=l,s=Vu(s,"onChange"),0<s.length&&(a=new Ni("onChange","change",null,a,l),t.push({event:a,listeners:s}))}var Wo=null,Jo=null;function VT(t){$_(t,0)}function Qc(t){var s=vn(t);if(Vr(s))return t}function mg(t,s){if(t==="change")return s}var pg=!1;if(Vn){var yf;if(Vn){var _f="oninput"in document;if(!_f){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),_f=typeof gg.oninput=="function"}yf=_f}else yf=!1;pg=yf&&(!document.documentMode||9<document.documentMode)}function yg(){Wo&&(Wo.detachEvent("onpropertychange",_g),Jo=Wo=null)}function _g(t){if(t.propertyName==="value"&&Qc(Jo)){var s=[];dg(s,Jo,t,Mn(t)),Vs(VT,s)}}function jT(t,s,a){t==="focusin"?(yg(),Wo=s,Jo=a,Wo.attachEvent("onpropertychange",_g)):t==="focusout"&&yg()}function LT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qc(Jo)}function PT(t,s){if(t==="click")return Qc(s)}function UT(t,s){if(t==="input"||t==="change")return Qc(s)}function zT(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var bn=typeof Object.is=="function"?Object.is:zT;function Zo(t,s){if(bn(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var a=Object.keys(t),l=Object.keys(s);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!bt.call(s,f)||!bn(t[f],s[f]))return!1}return!0}function vg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Eg(t,s){var a=vg(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=s&&l>=s)return{node:a,offset:s-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vg(a)}}function bg(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?bg(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function Tg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var s=xi(t.document);s instanceof t.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)t=s.contentWindow;else break;s=xi(t.document)}return s}function vf(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}var BT=Vn&&"documentMode"in document&&11>=document.documentMode,Oa=null,Ef=null,el=null,bf=!1;function Sg(t,s,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bf||Oa==null||Oa!==xi(l)||(l=Oa,"selectionStart"in l&&vf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),el&&Zo(el,l)||(el=l,l=Vu(Ef,"onSelect"),0<l.length&&(s=new Ni("onSelect","select",null,s,a),t.push({event:s,listeners:l}),s.target=Oa)))}function Fr(t,s){var a={};return a[t.toLowerCase()]=s.toLowerCase(),a["Webkit"+t]="webkit"+s,a["Moz"+t]="moz"+s,a}var ka={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionrun:Fr("Transition","TransitionRun"),transitionstart:Fr("Transition","TransitionStart"),transitioncancel:Fr("Transition","TransitionCancel"),transitionend:Fr("Transition","TransitionEnd")},Tf={},wg={};Vn&&(wg=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function Gr(t){if(Tf[t])return Tf[t];if(!ka[t])return t;var s=ka[t],a;for(a in s)if(s.hasOwnProperty(a)&&a in wg)return Tf[t]=s[a];return t}var Ag=Gr("animationend"),xg=Gr("animationiteration"),Rg=Gr("animationstart"),qT=Gr("transitionrun"),HT=Gr("transitionstart"),FT=Gr("transitioncancel"),Cg=Gr("transitionend"),Ng=new Map,Sf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sf.push("scrollEnd");function ii(t,s){Ng.set(t,s),wi(s,[t])}var Yc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ln=[],Ma=0,wf=0;function $c(){for(var t=Ma,s=wf=Ma=0;s<t;){var a=Ln[s];Ln[s++]=null;var l=Ln[s];Ln[s++]=null;var f=Ln[s];Ln[s++]=null;var d=Ln[s];if(Ln[s++]=null,l!==null&&f!==null){var v=l.pending;v===null?f.next=f:(f.next=v.next,v.next=f),l.pending=f}d!==0&&Ig(a,f,d)}}function Xc(t,s,a,l){Ln[Ma++]=t,Ln[Ma++]=s,Ln[Ma++]=a,Ln[Ma++]=l,wf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Af(t,s,a,l){return Xc(t,s,a,l),Wc(t)}function Kr(t,s){return Xc(t,null,null,s),Wc(t)}function Ig(t,s,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var f=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&s!==null&&(f=31-mt(a),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[s]:l.push(s),s.lane=a|536870912),d):null}function Wc(t){if(50<Tl)throw Tl=0,Md=null,Error(r(185));for(var s=t.return;s!==null;)t=s,s=t.return;return t.tag===3?t.stateNode:null}var Va={};function GT(t,s,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,s,a,l){return new GT(t,s,a,l)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ts(t,s){var a=t.alternate;return a===null?(a=Tn(t.tag,s,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=s,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,s=t.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Dg(t,s){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=s,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,s=a.dependencies,t.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),t}function Jc(t,s,a,l,f,d){var v=0;if(l=t,typeof t=="function")xf(t)&&(v=1);else if(typeof t=="string")v=XS(t,a,fe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=Tn(31,a,s,f),t.elementType=R,t.lanes=d,t;case K:return Qr(a.children,f,d,s);case j:v=8,f|=24;break;case q:return t=Tn(12,a,s,f|2),t.elementType=q,t.lanes=d,t;case ae:return t=Tn(13,a,s,f),t.elementType=ae,t.lanes=d,t;case ue:return t=Tn(19,a,s,f),t.elementType=ue,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:v=10;break e;case B:v=9;break e;case se:v=11;break e;case C:v=14;break e;case x:v=16,l=null;break e}v=29,a=Error(r(130,t===null?"null":typeof t,"")),l=null}return s=Tn(v,a,s,f),s.elementType=t,s.type=l,s.lanes=d,s}function Qr(t,s,a,l){return t=Tn(7,t,l,s),t.lanes=a,t}function Rf(t,s,a){return t=Tn(6,t,null,s),t.lanes=a,t}function Og(t){var s=Tn(18,null,null,0);return s.stateNode=t,s}function Cf(t,s,a){return s=Tn(4,t.children!==null?t.children:[],t.key,s),s.lanes=a,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}var kg=new WeakMap;function Pn(t,s){if(typeof t=="object"&&t!==null){var a=kg.get(t);return a!==void 0?a:(s={value:t,source:s,stack:pi(s)},kg.set(t,s),s)}return{value:t,source:s,stack:pi(s)}}var ja=[],La=0,Zc=null,tl=0,Un=[],zn=0,Us=null,ki=1,Mi="";function ns(t,s){ja[La++]=tl,ja[La++]=Zc,Zc=t,tl=s}function Mg(t,s,a){Un[zn++]=ki,Un[zn++]=Mi,Un[zn++]=Us,Us=t;var l=ki;t=Mi;var f=32-mt(l)-1;l&=~(1<<f),a+=1;var d=32-mt(s)+f;if(30<d){var v=f-f%5;d=(l&(1<<v)-1).toString(32),l>>=v,f-=v,ki=1<<32-mt(s)+f|a<<f|l,Mi=d+t}else ki=1<<d|a<<f|l,Mi=t}function Nf(t){t.return!==null&&(ns(t,1),Mg(t,1,0))}function If(t){for(;t===Zc;)Zc=ja[--La],ja[La]=null,tl=ja[--La],ja[La]=null;for(;t===Us;)Us=Un[--zn],Un[zn]=null,Mi=Un[--zn],Un[zn]=null,ki=Un[--zn],Un[zn]=null}function Vg(t,s){Un[zn++]=ki,Un[zn++]=Mi,Un[zn++]=Us,ki=s.id,Mi=s.overflow,Us=t}var Ht=null,st=null,Be=!1,zs=null,Bn=!1,Df=Error(r(519));function Bs(t){var s=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nl(Pn(s,t)),Df}function jg(t){var s=t.stateNode,a=t.type,l=t.memoizedProps;switch(s[St]=t,s[jt]=l,a){case"dialog":Ve("cancel",s),Ve("close",s);break;case"iframe":case"object":case"embed":Ve("load",s);break;case"video":case"audio":for(a=0;a<wl.length;a++)Ve(wl[a],s);break;case"source":Ve("error",s);break;case"img":case"image":case"link":Ve("error",s),Ve("load",s);break;case"details":Ve("toggle",s);break;case"input":Ve("invalid",s),Oc(s,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ve("invalid",s);break;case"textarea":Ve("invalid",s),Os(s,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||s.textContent===""+a||l.suppressHydrationWarning===!0||Z_(s.textContent,a)?(l.popover!=null&&(Ve("beforetoggle",s),Ve("toggle",s)),l.onScroll!=null&&Ve("scroll",s),l.onScrollEnd!=null&&Ve("scrollend",s),l.onClick!=null&&(s.onclick=Jn),s=!0):s=!1,s||Bs(t,!0)}function Lg(t){for(Ht=t.return;Ht;)switch(Ht.tag){case 5:case 31:case 13:Bn=!1;return;case 27:case 3:Bn=!0;return;default:Ht=Ht.return}}function Pa(t){if(t!==Ht)return!1;if(!Be)return Lg(t),Be=!0,!1;var s=t.tag,a;if((a=s!==3&&s!==27)&&((a=s===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||$d(t.type,t.memoizedProps)),a=!a),a&&st&&Bs(t),Lg(t),s===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));st=lv(t)}else if(s===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));st=lv(t)}else s===27?(s=st,tr(t.type)?(t=em,em=null,st=t):st=s):st=Ht?Hn(t.stateNode.nextSibling):null;return!0}function Yr(){st=Ht=null,Be=!1}function Of(){var t=zs;return t!==null&&(mn===null?mn=t:mn.push.apply(mn,t),zs=null),t}function nl(t){zs===null?zs=[t]:zs.push(t)}var kf=M(null),$r=null,is=null;function qs(t,s,a){le(kf,s._currentValue),s._currentValue=a}function ss(t){t._currentValue=kf.current,Z(kf)}function Mf(t,s,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,l!==null&&(l.childLanes|=s)):l!==null&&(l.childLanes&s)!==s&&(l.childLanes|=s),t===a)break;t=t.return}}function Vf(t,s,a,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var v=f.child;d=d.firstContext;e:for(;d!==null;){var S=d;d=f;for(var O=0;O<s.length;O++)if(S.context===s[O]){d.lanes|=a,S=d.alternate,S!==null&&(S.lanes|=a),Mf(d.return,a,t),l||(v=null);break e}d=S.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(r(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Mf(v,a,t),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===t){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Ua(t,s,a,l){t=null;for(var f=s,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var S=f.type;bn(f.pendingProps.value,v.value)||(t!==null?t.push(S):t=[S])}}else if(f===ke.current){if(v=f.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Nl):t=[Nl])}f=f.return}t!==null&&Vf(s,t,a,l),s.flags|=262144}function eu(t){for(t=t.firstContext;t!==null;){if(!bn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Xr(t){$r=t,is=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ft(t){return Pg($r,t)}function tu(t,s){return $r===null&&Xr(t),Pg(t,s)}function Pg(t,s){var a=s._currentValue;if(s={context:s,memoizedValue:a,next:null},is===null){if(t===null)throw Error(r(308));is=s,t.dependencies={lanes:0,firstContext:s},t.flags|=524288}else is=is.next=s;return a}var KT=typeof AbortController<"u"?AbortController:function(){var t=[],s=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){s.aborted=!0,t.forEach(function(a){return a()})}},QT=n.unstable_scheduleCallback,YT=n.unstable_NormalPriority,xt={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jf(){return{controller:new KT,data:new Map,refCount:0}}function il(t){t.refCount--,t.refCount===0&&QT(YT,function(){t.controller.abort()})}var sl=null,Lf=0,za=0,Ba=null;function $T(t,s){if(sl===null){var a=sl=[];Lf=0,za=zd(),Ba={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Lf++,s.then(Ug,Ug),s}function Ug(){if(--Lf===0&&sl!==null){Ba!==null&&(Ba.status="fulfilled");var t=sl;sl=null,za=0,Ba=null;for(var s=0;s<t.length;s++)(0,t[s])()}}function XT(t,s){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return t.then(function(){l.status="fulfilled",l.value=s;for(var f=0;f<a.length;f++)(0,a[f])(s)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var zg=Y.S;Y.S=function(t,s){S_=nn(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&$T(t,s),zg!==null&&zg(t,s)};var Wr=M(null);function Pf(){var t=Wr.current;return t!==null?t:nt.pooledCache}function nu(t,s){s===null?le(Wr,Wr.current):le(Wr,s.pool)}function Bg(){var t=Pf();return t===null?null:{parent:xt._currentValue,pool:t}}var qa=Error(r(460)),Uf=Error(r(474)),iu=Error(r(542)),su={then:function(){}};function qg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Hg(t,s,a){switch(a=t[a],a===void 0?t.push(s):a!==s&&(s.then(Jn,Jn),s=a),s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,Gg(t),t;default:if(typeof s.status=="string")s.then(Jn,Jn);else{if(t=nt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=s,t.status="pending",t.then(function(l){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=l}},function(l){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=l}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,Gg(t),t}throw Zr=s,qa}}function Jr(t){try{var s=t._init;return s(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Zr=a,qa):a}}var Zr=null;function Fg(){if(Zr===null)throw Error(r(459));var t=Zr;return Zr=null,t}function Gg(t){if(t===qa||t===iu)throw Error(r(483))}var Ha=null,rl=0;function ru(t){var s=rl;return rl+=1,Ha===null&&(Ha=[]),Hg(Ha,t,s)}function al(t,s){s=s.props.ref,t.ref=s!==void 0?s:null}function au(t,s){throw s.$$typeof===w?Error(r(525)):(t=Object.prototype.toString.call(s),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t)))}function Kg(t){function s(U,L){if(t){var G=U.deletions;G===null?(U.deletions=[L],U.flags|=16):G.push(L)}}function a(U,L){if(!t)return null;for(;L!==null;)s(U,L),L=L.sibling;return null}function l(U){for(var L=new Map;U!==null;)U.key!==null?L.set(U.key,U):L.set(U.index,U),U=U.sibling;return L}function f(U,L){return U=ts(U,L),U.index=0,U.sibling=null,U}function d(U,L,G){return U.index=G,t?(G=U.alternate,G!==null?(G=G.index,G<L?(U.flags|=67108866,L):G):(U.flags|=67108866,L)):(U.flags|=1048576,L)}function v(U){return t&&U.alternate===null&&(U.flags|=67108866),U}function S(U,L,G,ee){return L===null||L.tag!==6?(L=Rf(G,U.mode,ee),L.return=U,L):(L=f(L,G),L.return=U,L)}function O(U,L,G,ee){var ve=G.type;return ve===K?J(U,L,G.props.children,ee,G.key):L!==null&&(L.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===x&&Jr(ve)===L.type)?(L=f(L,G.props),al(L,G),L.return=U,L):(L=Jc(G.type,G.key,G.props,null,U.mode,ee),al(L,G),L.return=U,L)}function Q(U,L,G,ee){return L===null||L.tag!==4||L.stateNode.containerInfo!==G.containerInfo||L.stateNode.implementation!==G.implementation?(L=Cf(G,U.mode,ee),L.return=U,L):(L=f(L,G.children||[]),L.return=U,L)}function J(U,L,G,ee,ve){return L===null||L.tag!==7?(L=Qr(G,U.mode,ee,ve),L.return=U,L):(L=f(L,G),L.return=U,L)}function te(U,L,G){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Rf(""+L,U.mode,G),L.return=U,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case k:return G=Jc(L.type,L.key,L.props,null,U.mode,G),al(G,L),G.return=U,G;case z:return L=Cf(L,U.mode,G),L.return=U,L;case x:return L=Jr(L),te(U,L,G)}if(Ne(L)||V(L))return L=Qr(L,U.mode,G,null),L.return=U,L;if(typeof L.then=="function")return te(U,ru(L),G);if(L.$$typeof===P)return te(U,tu(U,L),G);au(U,L)}return null}function $(U,L,G,ee){var ve=L!==null?L.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return ve!==null?null:S(U,L,""+G,ee);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case k:return G.key===ve?O(U,L,G,ee):null;case z:return G.key===ve?Q(U,L,G,ee):null;case x:return G=Jr(G),$(U,L,G,ee)}if(Ne(G)||V(G))return ve!==null?null:J(U,L,G,ee,null);if(typeof G.then=="function")return $(U,L,ru(G),ee);if(G.$$typeof===P)return $(U,L,tu(U,G),ee);au(U,G)}return null}function W(U,L,G,ee,ve){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return U=U.get(G)||null,S(L,U,""+ee,ve);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case k:return U=U.get(ee.key===null?G:ee.key)||null,O(L,U,ee,ve);case z:return U=U.get(ee.key===null?G:ee.key)||null,Q(L,U,ee,ve);case x:return ee=Jr(ee),W(U,L,G,ee,ve)}if(Ne(ee)||V(ee))return U=U.get(G)||null,J(L,U,ee,ve,null);if(typeof ee.then=="function")return W(U,L,G,ru(ee),ve);if(ee.$$typeof===P)return W(U,L,G,tu(L,ee),ve);au(L,ee)}return null}function ge(U,L,G,ee){for(var ve=null,He=null,ye=L,Oe=L=0,Le=null;ye!==null&&Oe<G.length;Oe++){ye.index>Oe?(Le=ye,ye=null):Le=ye.sibling;var Fe=$(U,ye,G[Oe],ee);if(Fe===null){ye===null&&(ye=Le);break}t&&ye&&Fe.alternate===null&&s(U,ye),L=d(Fe,L,Oe),He===null?ve=Fe:He.sibling=Fe,He=Fe,ye=Le}if(Oe===G.length)return a(U,ye),Be&&ns(U,Oe),ve;if(ye===null){for(;Oe<G.length;Oe++)ye=te(U,G[Oe],ee),ye!==null&&(L=d(ye,L,Oe),He===null?ve=ye:He.sibling=ye,He=ye);return Be&&ns(U,Oe),ve}for(ye=l(ye);Oe<G.length;Oe++)Le=W(ye,U,Oe,G[Oe],ee),Le!==null&&(t&&Le.alternate!==null&&ye.delete(Le.key===null?Oe:Le.key),L=d(Le,L,Oe),He===null?ve=Le:He.sibling=Le,He=Le);return t&&ye.forEach(function(ar){return s(U,ar)}),Be&&ns(U,Oe),ve}function be(U,L,G,ee){if(G==null)throw Error(r(151));for(var ve=null,He=null,ye=L,Oe=L=0,Le=null,Fe=G.next();ye!==null&&!Fe.done;Oe++,Fe=G.next()){ye.index>Oe?(Le=ye,ye=null):Le=ye.sibling;var ar=$(U,ye,Fe.value,ee);if(ar===null){ye===null&&(ye=Le);break}t&&ye&&ar.alternate===null&&s(U,ye),L=d(ar,L,Oe),He===null?ve=ar:He.sibling=ar,He=ar,ye=Le}if(Fe.done)return a(U,ye),Be&&ns(U,Oe),ve;if(ye===null){for(;!Fe.done;Oe++,Fe=G.next())Fe=te(U,Fe.value,ee),Fe!==null&&(L=d(Fe,L,Oe),He===null?ve=Fe:He.sibling=Fe,He=Fe);return Be&&ns(U,Oe),ve}for(ye=l(ye);!Fe.done;Oe++,Fe=G.next())Fe=W(ye,U,Oe,Fe.value,ee),Fe!==null&&(t&&Fe.alternate!==null&&ye.delete(Fe.key===null?Oe:Fe.key),L=d(Fe,L,Oe),He===null?ve=Fe:He.sibling=Fe,He=Fe);return t&&ye.forEach(function(ow){return s(U,ow)}),Be&&ns(U,Oe),ve}function tt(U,L,G,ee){if(typeof G=="object"&&G!==null&&G.type===K&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case k:e:{for(var ve=G.key;L!==null;){if(L.key===ve){if(ve=G.type,ve===K){if(L.tag===7){a(U,L.sibling),ee=f(L,G.props.children),ee.return=U,U=ee;break e}}else if(L.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===x&&Jr(ve)===L.type){a(U,L.sibling),ee=f(L,G.props),al(ee,G),ee.return=U,U=ee;break e}a(U,L);break}else s(U,L);L=L.sibling}G.type===K?(ee=Qr(G.props.children,U.mode,ee,G.key),ee.return=U,U=ee):(ee=Jc(G.type,G.key,G.props,null,U.mode,ee),al(ee,G),ee.return=U,U=ee)}return v(U);case z:e:{for(ve=G.key;L!==null;){if(L.key===ve)if(L.tag===4&&L.stateNode.containerInfo===G.containerInfo&&L.stateNode.implementation===G.implementation){a(U,L.sibling),ee=f(L,G.children||[]),ee.return=U,U=ee;break e}else{a(U,L);break}else s(U,L);L=L.sibling}ee=Cf(G,U.mode,ee),ee.return=U,U=ee}return v(U);case x:return G=Jr(G),tt(U,L,G,ee)}if(Ne(G))return ge(U,L,G,ee);if(V(G)){if(ve=V(G),typeof ve!="function")throw Error(r(150));return G=ve.call(G),be(U,L,G,ee)}if(typeof G.then=="function")return tt(U,L,ru(G),ee);if(G.$$typeof===P)return tt(U,L,tu(U,G),ee);au(U,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,L!==null&&L.tag===6?(a(U,L.sibling),ee=f(L,G),ee.return=U,U=ee):(a(U,L),ee=Rf(G,U.mode,ee),ee.return=U,U=ee),v(U)):a(U,L)}return function(U,L,G,ee){try{rl=0;var ve=tt(U,L,G,ee);return Ha=null,ve}catch(ye){if(ye===qa||ye===iu)throw ye;var He=Tn(29,ye,null,U.mode);return He.lanes=ee,He.return=U,He}finally{}}}var ea=Kg(!0),Qg=Kg(!1),Hs=!1;function zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bf(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Gs(t,s,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ke&2)!==0){var f=l.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),l.pending=s,s=Wc(t),Ig(t,null,a),s}return Xc(t,l,s,a),Wc(t)}function ol(t,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194048)!==0)){var l=s.lanes;l&=t.pendingLanes,a|=l,s.lanes=a,Mo(t,a)}}function qf(t,s){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?f=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?f=d=s:d=d.next=s}else f=d=s;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=s:t.next=s,a.lastBaseUpdate=s}var Hf=!1;function ll(){if(Hf){var t=Ba;if(t!==null)throw t}}function cl(t,s,a,l){Hf=!1;var f=t.updateQueue;Hs=!1;var d=f.firstBaseUpdate,v=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var O=S,Q=O.next;O.next=null,v===null?d=Q:v.next=Q,v=O;var J=t.alternate;J!==null&&(J=J.updateQueue,S=J.lastBaseUpdate,S!==v&&(S===null?J.firstBaseUpdate=Q:S.next=Q,J.lastBaseUpdate=O))}if(d!==null){var te=f.baseState;v=0,J=Q=O=null,S=d;do{var $=S.lane&-536870913,W=$!==S.lane;if(W?(je&$)===$:(l&$)===$){$!==0&&$===za&&(Hf=!0),J!==null&&(J=J.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var ge=t,be=S;$=s;var tt=a;switch(be.tag){case 1:if(ge=be.payload,typeof ge=="function"){te=ge.call(tt,te,$);break e}te=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=be.payload,$=typeof ge=="function"?ge.call(tt,te,$):ge,$==null)break e;te=T({},te,$);break e;case 2:Hs=!0}}$=S.callback,$!==null&&(t.flags|=64,W&&(t.flags|=8192),W=f.callbacks,W===null?f.callbacks=[$]:W.push($))}else W={lane:$,tag:S.tag,payload:S.payload,callback:S.callback,next:null},J===null?(Q=J=W,O=te):J=J.next=W,v|=$;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;W=S,S=W.next,W.next=null,f.lastBaseUpdate=W,f.shared.pending=null}}while(!0);J===null&&(O=te),f.baseState=O,f.firstBaseUpdate=Q,f.lastBaseUpdate=J,d===null&&(f.shared.lanes=0),Xs|=v,t.lanes=v,t.memoizedState=te}}function Yg(t,s){if(typeof t!="function")throw Error(r(191,t));t.call(s)}function $g(t,s){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Yg(a[t],s)}var Fa=M(null),ou=M(0);function Xg(t,s){t=ds,le(ou,t),le(Fa,s),ds=t|s.baseLanes}function Ff(){le(ou,ds),le(Fa,Fa.current)}function Gf(){ds=ou.current,Z(Fa),Z(ou)}var Sn=M(null),qn=null;function Ks(t){var s=t.alternate;le(gt,gt.current&1),le(Sn,t),qn===null&&(s===null||Fa.current!==null||s.memoizedState!==null)&&(qn=t)}function Kf(t){le(gt,gt.current),le(Sn,t),qn===null&&(qn=t)}function Wg(t){t.tag===22?(le(gt,gt.current),le(Sn,t),qn===null&&(qn=t)):Qs()}function Qs(){le(gt,gt.current),le(Sn,Sn.current)}function wn(t){Z(Sn),qn===t&&(qn=null),Z(gt)}var gt=M(0);function lu(t){for(var s=t;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jd(a)||Zd(a)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var rs=0,De=null,Ze=null,Rt=null,cu=!1,Ga=!1,ta=!1,uu=0,ul=0,Ka=null,WT=0;function ft(){throw Error(r(321))}function Qf(t,s){if(s===null)return!1;for(var a=0;a<s.length&&a<t.length;a++)if(!bn(t[a],s[a]))return!1;return!0}function Yf(t,s,a,l,f,d){return rs=d,De=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Y.H=t===null||t.memoizedState===null?My:cd,ta=!1,d=a(l,f),ta=!1,Ga&&(d=Zg(s,a,l,f)),Jg(t),d}function Jg(t){Y.H=dl;var s=Ze!==null&&Ze.next!==null;if(rs=0,Rt=Ze=De=null,cu=!1,ul=0,Ka=null,s)throw Error(r(300));t===null||Ct||(t=t.dependencies,t!==null&&eu(t)&&(Ct=!0))}function Zg(t,s,a,l){De=t;var f=0;do{if(Ga&&(Ka=null),ul=0,Ga=!1,25<=f)throw Error(r(301));if(f+=1,Rt=Ze=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Y.H=Vy,d=s(a,l)}while(Ga);return d}function JT(){var t=Y.H,s=t.useState()[0];return s=typeof s.then=="function"?hl(s):s,t=t.useState()[0],(Ze!==null?Ze.memoizedState:null)!==t&&(De.flags|=1024),s}function $f(){var t=uu!==0;return uu=0,t}function Xf(t,s,a){s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~a}function Wf(t){if(cu){for(t=t.memoizedState;t!==null;){var s=t.queue;s!==null&&(s.pending=null),t=t.next}cu=!1}rs=0,Rt=Ze=De=null,Ga=!1,ul=uu=0,Ka=null}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?De.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function yt(){if(Ze===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var s=Rt===null?De.memoizedState:Rt.next;if(s!==null)Rt=s,Ze=t;else{if(t===null)throw De.alternate===null?Error(r(467)):Error(r(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},Rt===null?De.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(t){var s=ul;return ul+=1,Ka===null&&(Ka=[]),t=Hg(Ka,t,s),s=De,(Rt===null?s.memoizedState:Rt.next)===null&&(s=s.alternate,Y.H=s===null||s.memoizedState===null?My:cd),t}function fu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return hl(t);if(t.$$typeof===P)return Ft(t)}throw Error(r(438,String(t)))}function Jf(t){var s=null,a=De.updateQueue;if(a!==null&&(s=a.memoCache),s==null){var l=De.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(s={data:l.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),a===null&&(a=hu(),De.updateQueue=a),a.memoCache=s,a=s.data[s.index],a===void 0)for(a=s.data[s.index]=Array(t),l=0;l<t;l++)a[l]=I;return s.index++,a}function as(t,s){return typeof s=="function"?s(t):s}function du(t){var s=yt();return Zf(s,Ze,t)}function Zf(t,s,a){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var v=f.next;f.next=d.next,d.next=v}s.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{s=f.next;var S=v=null,O=null,Q=s,J=!1;do{var te=Q.lane&-536870913;if(te!==Q.lane?(je&te)===te:(rs&te)===te){var $=Q.revertLane;if($===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),te===za&&(J=!0);else if((rs&$)===$){Q=Q.next,$===za&&(J=!0);continue}else te={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},O===null?(S=O=te,v=d):O=O.next=te,De.lanes|=$,Xs|=$;te=Q.action,ta&&a(d,te),d=Q.hasEagerState?Q.eagerState:a(d,te)}else $={lane:te,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},O===null?(S=O=$,v=d):O=O.next=$,De.lanes|=te,Xs|=te;Q=Q.next}while(Q!==null&&Q!==s);if(O===null?v=d:O.next=S,!bn(d,t.memoizedState)&&(Ct=!0,J&&(a=Ba,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=O,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function ed(t){var s=yt(),a=s.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,d=s.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do d=t(d,v.action),v=v.next;while(v!==f);bn(d,s.memoizedState)||(Ct=!0),s.memoizedState=d,s.baseQueue===null&&(s.baseState=d),a.lastRenderedState=d}return[d,l]}function ey(t,s,a){var l=De,f=yt(),d=Be;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=s();var v=!bn((Ze||f).memoizedState,a);if(v&&(f.memoizedState=a,Ct=!0),f=f.queue,id(iy.bind(null,l,f,t),[t]),f.getSnapshot!==s||v||Rt!==null&&Rt.memoizedState.tag&1){if(l.flags|=2048,Qa(9,{destroy:void 0},ny.bind(null,l,f,a,s),null),nt===null)throw Error(r(349));d||(rs&127)!==0||ty(l,s,a)}return a}function ty(t,s,a){t.flags|=16384,t={getSnapshot:s,value:a},s=De.updateQueue,s===null?(s=hu(),De.updateQueue=s,s.stores=[t]):(a=s.stores,a===null?s.stores=[t]:a.push(t))}function ny(t,s,a,l){s.value=a,s.getSnapshot=l,sy(s)&&ry(t)}function iy(t,s,a){return a(function(){sy(s)&&ry(t)})}function sy(t){var s=t.getSnapshot;t=t.value;try{var a=s();return!bn(t,a)}catch{return!0}}function ry(t){var s=Kr(t,2);s!==null&&pn(s,t,2)}function td(t){var s=rn();if(typeof t=="function"){var a=t;if(t=a(),ta){On(!0);try{a()}finally{On(!1)}}}return s.memoizedState=s.baseState=t,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:t},s}function ay(t,s,a,l){return t.baseState=a,Zf(t,Ze,typeof l=="function"?l:as)}function ZT(t,s,a,l,f){if(gu(t))throw Error(r(485));if(t=s.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};Y.T!==null?a(!0):d.isTransition=!1,l(d),a=s.pending,a===null?(d.next=s.pending=d,oy(s,d)):(d.next=a.next,s.pending=a.next=d)}}function oy(t,s){var a=s.action,l=s.payload,f=t.state;if(s.isTransition){var d=Y.T,v={};Y.T=v;try{var S=a(f,l),O=Y.S;O!==null&&O(v,S),ly(t,s,S)}catch(Q){nd(t,s,Q)}finally{d!==null&&v.types!==null&&(d.types=v.types),Y.T=d}}else try{d=a(f,l),ly(t,s,d)}catch(Q){nd(t,s,Q)}}function ly(t,s,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){cy(t,s,l)},function(l){return nd(t,s,l)}):cy(t,s,a)}function cy(t,s,a){s.status="fulfilled",s.value=a,uy(s),t.state=a,s=t.pending,s!==null&&(a=s.next,a===s?t.pending=null:(a=a.next,s.next=a,oy(t,a)))}function nd(t,s,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do s.status="rejected",s.reason=a,uy(s),s=s.next;while(s!==l)}t.action=null}function uy(t){t=t.listeners;for(var s=0;s<t.length;s++)(0,t[s])()}function hy(t,s){return s}function fy(t,s){if(Be){var a=nt.formState;if(a!==null){e:{var l=De;if(Be){if(st){t:{for(var f=st,d=Bn;f.nodeType!==8;){if(!d){f=null;break t}if(f=Hn(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){st=Hn(f.nextSibling),l=f.data==="F!";break e}}Bs(l)}l=!1}l&&(s=a[0])}}return a=rn(),a.memoizedState=a.baseState=s,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hy,lastRenderedState:s},a.queue=l,a=Dy.bind(null,De,l),l.dispatch=a,l=td(!1),d=ld.bind(null,De,!1,l.queue),l=rn(),f={state:s,dispatch:null,action:t,pending:null},l.queue=f,a=ZT.bind(null,De,f,d,a),f.dispatch=a,l.memoizedState=t,[s,a,!1]}function dy(t){var s=yt();return my(s,Ze,t)}function my(t,s,a){if(s=Zf(t,s,hy)[0],t=du(as)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var l=hl(s)}catch(v){throw v===qa?iu:v}else l=s;s=yt();var f=s.queue,d=f.dispatch;return a!==s.memoizedState&&(De.flags|=2048,Qa(9,{destroy:void 0},eS.bind(null,f,a),null)),[l,d,t]}function eS(t,s){t.action=s}function py(t){var s=yt(),a=Ze;if(a!==null)return my(s,a,t);yt(),s=s.memoizedState,a=yt();var l=a.queue.dispatch;return a.memoizedState=t,[s,l,!1]}function Qa(t,s,a,l){return t={tag:t,create:a,deps:l,inst:s,next:null},s=De.updateQueue,s===null&&(s=hu(),De.updateQueue=s),a=s.lastEffect,a===null?s.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,s.lastEffect=t),t}function gy(){return yt().memoizedState}function mu(t,s,a,l){var f=rn();De.flags|=t,f.memoizedState=Qa(1|s,{destroy:void 0},a,l===void 0?null:l)}function pu(t,s,a,l){var f=yt();l=l===void 0?null:l;var d=f.memoizedState.inst;Ze!==null&&l!==null&&Qf(l,Ze.memoizedState.deps)?f.memoizedState=Qa(s,d,a,l):(De.flags|=t,f.memoizedState=Qa(1|s,d,a,l))}function yy(t,s){mu(8390656,8,t,s)}function id(t,s){pu(2048,8,t,s)}function tS(t){De.flags|=4;var s=De.updateQueue;if(s===null)s=hu(),De.updateQueue=s,s.events=[t];else{var a=s.events;a===null?s.events=[t]:a.push(t)}}function _y(t){var s=yt().memoizedState;return tS({ref:s,nextImpl:t}),function(){if((Ke&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}function vy(t,s){return pu(4,2,t,s)}function Ey(t,s){return pu(4,4,t,s)}function by(t,s){if(typeof s=="function"){t=t();var a=s(t);return function(){typeof a=="function"?a():s(null)}}if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function Ty(t,s,a){a=a!=null?a.concat([t]):null,pu(4,4,by.bind(null,s,t),a)}function sd(){}function Sy(t,s){var a=yt();s=s===void 0?null:s;var l=a.memoizedState;return s!==null&&Qf(s,l[1])?l[0]:(a.memoizedState=[t,s],t)}function wy(t,s){var a=yt();s=s===void 0?null:s;var l=a.memoizedState;if(s!==null&&Qf(s,l[1]))return l[0];if(l=t(),ta){On(!0);try{t()}finally{On(!1)}}return a.memoizedState=[l,s],l}function rd(t,s,a){return a===void 0||(rs&1073741824)!==0&&(je&261930)===0?t.memoizedState=s:(t.memoizedState=a,t=A_(),De.lanes|=t,Xs|=t,a)}function Ay(t,s,a,l){return bn(a,s)?a:Fa.current!==null?(t=rd(t,a,l),bn(t,s)||(Ct=!0),t):(rs&42)===0||(rs&1073741824)!==0&&(je&261930)===0?(Ct=!0,t.memoizedState=a):(t=A_(),De.lanes|=t,Xs|=t,s)}function xy(t,s,a,l,f){var d=re.p;re.p=d!==0&&8>d?d:8;var v=Y.T,S={};Y.T=S,ld(t,!1,s,a);try{var O=f(),Q=Y.S;if(Q!==null&&Q(S,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var J=XT(O,l);fl(t,s,J,Rn(t))}else fl(t,s,l,Rn(t))}catch(te){fl(t,s,{then:function(){},status:"rejected",reason:te},Rn())}finally{re.p=d,v!==null&&S.types!==null&&(v.types=S.types),Y.T=v}}function nS(){}function ad(t,s,a,l){if(t.tag!==5)throw Error(r(476));var f=Ry(t).queue;xy(t,f,s,ce,a===null?nS:function(){return Cy(t),a(l)})}function Ry(t){var s=t.memoizedState;if(s!==null)return s;s={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:ce},next:null};var a={};return s.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:a},next:null},t.memoizedState=s,t=t.alternate,t!==null&&(t.memoizedState=s),s}function Cy(t){var s=Ry(t);s.next===null&&(s=t.alternate.memoizedState),fl(t,s.next.queue,{},Rn())}function od(){return Ft(Nl)}function Ny(){return yt().memoizedState}function Iy(){return yt().memoizedState}function iS(t){for(var s=t.return;s!==null;){switch(s.tag){case 24:case 3:var a=Rn();t=Fs(a);var l=Gs(s,t,a);l!==null&&(pn(l,s,a),ol(l,s,a)),s={cache:jf()},t.payload=s;return}s=s.return}}function sS(t,s,a){var l=Rn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gu(t)?Oy(s,a):(a=Af(t,s,a,l),a!==null&&(pn(a,t,l),ky(a,s,l)))}function Dy(t,s,a){var l=Rn();fl(t,s,a,l)}function fl(t,s,a,l){var f={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gu(t))Oy(s,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=s.lastRenderedReducer,d!==null))try{var v=s.lastRenderedState,S=d(v,a);if(f.hasEagerState=!0,f.eagerState=S,bn(S,v))return Xc(t,s,f,0),nt===null&&$c(),!1}catch{}finally{}if(a=Af(t,s,f,l),a!==null)return pn(a,t,l),ky(a,s,l),!0}return!1}function ld(t,s,a,l){if(l={lane:2,revertLane:zd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},gu(t)){if(s)throw Error(r(479))}else s=Af(t,a,l,2),s!==null&&pn(s,t,2)}function gu(t){var s=t.alternate;return t===De||s!==null&&s===De}function Oy(t,s){Ga=cu=!0;var a=t.pending;a===null?s.next=s:(s.next=a.next,a.next=s),t.pending=s}function ky(t,s,a){if((a&4194048)!==0){var l=s.lanes;l&=t.pendingLanes,a|=l,s.lanes=a,Mo(t,a)}}var dl={readContext:Ft,use:fu,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useLayoutEffect:ft,useInsertionEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useSyncExternalStore:ft,useId:ft,useHostTransitionStatus:ft,useFormState:ft,useActionState:ft,useOptimistic:ft,useMemoCache:ft,useCacheRefresh:ft};dl.useEffectEvent=ft;var My={readContext:Ft,use:fu,useCallback:function(t,s){return rn().memoizedState=[t,s===void 0?null:s],t},useContext:Ft,useEffect:yy,useImperativeHandle:function(t,s,a){a=a!=null?a.concat([t]):null,mu(4194308,4,by.bind(null,s,t),a)},useLayoutEffect:function(t,s){return mu(4194308,4,t,s)},useInsertionEffect:function(t,s){mu(4,2,t,s)},useMemo:function(t,s){var a=rn();s=s===void 0?null:s;var l=t();if(ta){On(!0);try{t()}finally{On(!1)}}return a.memoizedState=[l,s],l},useReducer:function(t,s,a){var l=rn();if(a!==void 0){var f=a(s);if(ta){On(!0);try{a(s)}finally{On(!1)}}}else f=s;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=sS.bind(null,De,t),[l.memoizedState,t]},useRef:function(t){var s=rn();return t={current:t},s.memoizedState=t},useState:function(t){t=td(t);var s=t.queue,a=Dy.bind(null,De,s);return s.dispatch=a,[t.memoizedState,a]},useDebugValue:sd,useDeferredValue:function(t,s){var a=rn();return rd(a,t,s)},useTransition:function(){var t=td(!1);return t=xy.bind(null,De,t.queue,!0,!1),rn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,s,a){var l=De,f=rn();if(Be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=s(),nt===null)throw Error(r(349));(je&127)!==0||ty(l,s,a)}f.memoizedState=a;var d={value:a,getSnapshot:s};return f.queue=d,yy(iy.bind(null,l,d,t),[t]),l.flags|=2048,Qa(9,{destroy:void 0},ny.bind(null,l,d,a,s),null),a},useId:function(){var t=rn(),s=nt.identifierPrefix;if(Be){var a=Mi,l=ki;a=(l&~(1<<32-mt(l)-1)).toString(32)+a,s="_"+s+"R_"+a,a=uu++,0<a&&(s+="H"+a.toString(32)),s+="_"}else a=WT++,s="_"+s+"r_"+a.toString(32)+"_";return t.memoizedState=s},useHostTransitionStatus:od,useFormState:fy,useActionState:fy,useOptimistic:function(t){var s=rn();s.memoizedState=s.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=a,s=ld.bind(null,De,!0,a),a.dispatch=s,[t,s]},useMemoCache:Jf,useCacheRefresh:function(){return rn().memoizedState=iS.bind(null,De)},useEffectEvent:function(t){var s=rn(),a={impl:t};return s.memoizedState=a,function(){if((Ke&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},cd={readContext:Ft,use:fu,useCallback:Sy,useContext:Ft,useEffect:id,useImperativeHandle:Ty,useInsertionEffect:vy,useLayoutEffect:Ey,useMemo:wy,useReducer:du,useRef:gy,useState:function(){return du(as)},useDebugValue:sd,useDeferredValue:function(t,s){var a=yt();return Ay(a,Ze.memoizedState,t,s)},useTransition:function(){var t=du(as)[0],s=yt().memoizedState;return[typeof t=="boolean"?t:hl(t),s]},useSyncExternalStore:ey,useId:Ny,useHostTransitionStatus:od,useFormState:dy,useActionState:dy,useOptimistic:function(t,s){var a=yt();return ay(a,Ze,t,s)},useMemoCache:Jf,useCacheRefresh:Iy};cd.useEffectEvent=_y;var Vy={readContext:Ft,use:fu,useCallback:Sy,useContext:Ft,useEffect:id,useImperativeHandle:Ty,useInsertionEffect:vy,useLayoutEffect:Ey,useMemo:wy,useReducer:ed,useRef:gy,useState:function(){return ed(as)},useDebugValue:sd,useDeferredValue:function(t,s){var a=yt();return Ze===null?rd(a,t,s):Ay(a,Ze.memoizedState,t,s)},useTransition:function(){var t=ed(as)[0],s=yt().memoizedState;return[typeof t=="boolean"?t:hl(t),s]},useSyncExternalStore:ey,useId:Ny,useHostTransitionStatus:od,useFormState:py,useActionState:py,useOptimistic:function(t,s){var a=yt();return Ze!==null?ay(a,Ze,t,s):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Jf,useCacheRefresh:Iy};Vy.useEffectEvent=_y;function ud(t,s,a,l){s=t.memoizedState,a=a(l,s),a=a==null?s:T({},s,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var hd={enqueueSetState:function(t,s,a){t=t._reactInternals;var l=Rn(),f=Fs(l);f.payload=s,a!=null&&(f.callback=a),s=Gs(t,f,l),s!==null&&(pn(s,t,l),ol(s,t,l))},enqueueReplaceState:function(t,s,a){t=t._reactInternals;var l=Rn(),f=Fs(l);f.tag=1,f.payload=s,a!=null&&(f.callback=a),s=Gs(t,f,l),s!==null&&(pn(s,t,l),ol(s,t,l))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var a=Rn(),l=Fs(a);l.tag=2,s!=null&&(l.callback=s),s=Gs(t,l,a),s!==null&&(pn(s,t,a),ol(s,t,a))}};function jy(t,s,a,l,f,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,v):s.prototype&&s.prototype.isPureReactComponent?!Zo(a,l)||!Zo(f,d):!0}function Ly(t,s,a,l){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,l),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,l),s.state!==t&&hd.enqueueReplaceState(s,s.state,null)}function na(t,s){var a=s;if("ref"in s){a={};for(var l in s)l!=="ref"&&(a[l]=s[l])}if(t=t.defaultProps){a===s&&(a=T({},a));for(var f in t)a[f]===void 0&&(a[f]=t[f])}return a}function Py(t){Yc(t)}function Uy(t){console.error(t)}function zy(t){Yc(t)}function yu(t,s){try{var a=t.onUncaughtError;a(s.value,{componentStack:s.stack})}catch(l){setTimeout(function(){throw l})}}function By(t,s,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function fd(t,s,a){return a=Fs(a),a.tag=3,a.payload={element:null},a.callback=function(){yu(t,s)},a}function qy(t){return t=Fs(t),t.tag=3,t}function Hy(t,s,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){By(s,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){By(s,a,l),typeof f!="function"&&(Ws===null?Ws=new Set([this]):Ws.add(this));var S=l.stack;this.componentDidCatch(l.value,{componentStack:S!==null?S:""})})}function rS(t,s,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(s=a.alternate,s!==null&&Ua(s,a,f,!0),a=Sn.current,a!==null){switch(a.tag){case 31:case 13:return qn===null?Nu():a.alternate===null&&dt===0&&(dt=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===su?a.flags|=16384:(s=a.updateQueue,s===null?a.updateQueue=new Set([l]):s.add(l),Ld(t,l,f)),!1;case 22:return a.flags|=65536,l===su?a.flags|=16384:(s=a.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=s):(a=s.retryQueue,a===null?s.retryQueue=new Set([l]):a.add(l)),Ld(t,l,f)),!1}throw Error(r(435,a.tag))}return Ld(t,l,f),Nu(),!1}if(Be)return s=Sn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,l!==Df&&(t=Error(r(422),{cause:l}),nl(Pn(t,a)))):(l!==Df&&(s=Error(r(423),{cause:l}),nl(Pn(s,a))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Pn(l,a),f=fd(t.stateNode,l,f),qf(t,f),dt!==4&&(dt=2)),!1;var d=Error(r(520),{cause:l});if(d=Pn(d,a),bl===null?bl=[d]:bl.push(d),dt!==4&&(dt=2),s===null)return!0;l=Pn(l,a),a=s;do{switch(a.tag){case 3:return a.flags|=65536,t=f&-f,a.lanes|=t,t=fd(a.stateNode,l,t),qf(a,t),!1;case 1:if(s=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ws===null||!Ws.has(d))))return a.flags|=65536,f&=-f,a.lanes|=f,f=qy(f),Hy(f,t,a,l),qf(a,f),!1}a=a.return}while(a!==null);return!1}var dd=Error(r(461)),Ct=!1;function Gt(t,s,a,l){s.child=t===null?Qg(s,null,a,l):ea(s,t.child,a,l)}function Fy(t,s,a,l,f){a=a.render;var d=s.ref;if("ref"in l){var v={};for(var S in l)S!=="ref"&&(v[S]=l[S])}else v=l;return Xr(s),l=Yf(t,s,a,v,d,f),S=$f(),t!==null&&!Ct?(Xf(t,s,f),os(t,s,f)):(Be&&S&&Nf(s),s.flags|=1,Gt(t,s,l,f),s.child)}function Gy(t,s,a,l,f){if(t===null){var d=a.type;return typeof d=="function"&&!xf(d)&&d.defaultProps===void 0&&a.compare===null?(s.tag=15,s.type=d,Ky(t,s,d,l,f)):(t=Jc(a.type,null,l,s,s.mode,f),t.ref=s.ref,t.return=s,s.child=t)}if(d=t.child,!bd(t,f)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Zo,a(v,l)&&t.ref===s.ref)return os(t,s,f)}return s.flags|=1,t=ts(d,l),t.ref=s.ref,t.return=s,s.child=t}function Ky(t,s,a,l,f){if(t!==null){var d=t.memoizedProps;if(Zo(d,l)&&t.ref===s.ref)if(Ct=!1,s.pendingProps=l=d,bd(t,f))(t.flags&131072)!==0&&(Ct=!0);else return s.lanes=t.lanes,os(t,s,f)}return md(t,s,a,l,f)}function Qy(t,s,a,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((s.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(l=s.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,s.child=null;return Yy(t,s,d,a,l)}if((a&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},t!==null&&nu(s,d!==null?d.cachePool:null),d!==null?Xg(s,d):Ff(),Wg(s);else return l=s.lanes=536870912,Yy(t,s,d!==null?d.baseLanes|a:a,a,l)}else d!==null?(nu(s,d.cachePool),Xg(s,d),Qs(),s.memoizedState=null):(t!==null&&nu(s,null),Ff(),Qs());return Gt(t,s,f,a),s.child}function ml(t,s){return t!==null&&t.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function Yy(t,s,a,l,f){var d=Pf();return d=d===null?null:{parent:xt._currentValue,pool:d},s.memoizedState={baseLanes:a,cachePool:d},t!==null&&nu(s,null),Ff(),Wg(s),t!==null&&Ua(t,s,l,!0),s.childLanes=f,null}function _u(t,s){return s=Eu({mode:s.mode,children:s.children},t.mode),s.ref=t.ref,t.child=s,s.return=t,s}function $y(t,s,a){return ea(s,t.child,null,a),t=_u(s,s.pendingProps),t.flags|=2,wn(s),s.memoizedState=null,t}function aS(t,s,a){var l=s.pendingProps,f=(s.flags&128)!==0;if(s.flags&=-129,t===null){if(Be){if(l.mode==="hidden")return t=_u(s,l),s.lanes=536870912,ml(null,t);if(Kf(s),(t=st)?(t=ov(t,Bn),t=t!==null&&t.data==="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:Us!==null?{id:ki,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=Og(t),a.return=s,s.child=a,Ht=s,st=null)):t=null,t===null)throw Bs(s);return s.lanes=536870912,null}return _u(s,l)}var d=t.memoizedState;if(d!==null){var v=d.dehydrated;if(Kf(s),f)if(s.flags&256)s.flags&=-257,s=$y(t,s,a);else if(s.memoizedState!==null)s.child=t.child,s.flags|=128,s=null;else throw Error(r(558));else if(Ct||Ua(t,s,a,!1),f=(a&t.childLanes)!==0,Ct||f){if(l=nt,l!==null&&(v=Vo(l,a),v!==0&&v!==d.retryLane))throw d.retryLane=v,Kr(t,v),pn(l,t,v),dd;Nu(),s=$y(t,s,a)}else t=d.treeContext,st=Hn(v.nextSibling),Ht=s,Be=!0,zs=null,Bn=!1,t!==null&&Vg(s,t),s=_u(s,l),s.flags|=4096;return s}return t=ts(t.child,{mode:l.mode,children:l.children}),t.ref=s.ref,s.child=t,t.return=s,t}function vu(t,s){var a=s.ref;if(a===null)t!==null&&t.ref!==null&&(s.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(s.flags|=4194816)}}function md(t,s,a,l,f){return Xr(s),a=Yf(t,s,a,l,void 0,f),l=$f(),t!==null&&!Ct?(Xf(t,s,f),os(t,s,f)):(Be&&l&&Nf(s),s.flags|=1,Gt(t,s,a,f),s.child)}function Xy(t,s,a,l,f,d){return Xr(s),s.updateQueue=null,a=Zg(s,l,a,f),Jg(t),l=$f(),t!==null&&!Ct?(Xf(t,s,d),os(t,s,d)):(Be&&l&&Nf(s),s.flags|=1,Gt(t,s,a,d),s.child)}function Wy(t,s,a,l,f){if(Xr(s),s.stateNode===null){var d=Va,v=a.contextType;typeof v=="object"&&v!==null&&(d=Ft(v)),d=new a(l,d),s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=hd,s.stateNode=d,d._reactInternals=s,d=s.stateNode,d.props=l,d.state=s.memoizedState,d.refs={},zf(s),v=a.contextType,d.context=typeof v=="object"&&v!==null?Ft(v):Va,d.state=s.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(ud(s,a,v,l),d.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&hd.enqueueReplaceState(d,d.state,null),cl(s,l,d,f),ll(),d.state=s.memoizedState),typeof d.componentDidMount=="function"&&(s.flags|=4194308),l=!0}else if(t===null){d=s.stateNode;var S=s.memoizedProps,O=na(a,S);d.props=O;var Q=d.context,J=a.contextType;v=Va,typeof J=="object"&&J!==null&&(v=Ft(J));var te=a.getDerivedStateFromProps;J=typeof te=="function"||typeof d.getSnapshotBeforeUpdate=="function",S=s.pendingProps!==S,J||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S||Q!==v)&&Ly(s,d,l,v),Hs=!1;var $=s.memoizedState;d.state=$,cl(s,l,d,f),ll(),Q=s.memoizedState,S||$!==Q||Hs?(typeof te=="function"&&(ud(s,a,te,l),Q=s.memoizedState),(O=Hs||jy(s,a,O,l,$,Q,v))?(J||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(s.flags|=4194308)):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=l,s.memoizedState=Q),d.props=l,d.state=Q,d.context=v,l=O):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),l=!1)}else{d=s.stateNode,Bf(t,s),v=s.memoizedProps,J=na(a,v),d.props=J,te=s.pendingProps,$=d.context,Q=a.contextType,O=Va,typeof Q=="object"&&Q!==null&&(O=Ft(Q)),S=a.getDerivedStateFromProps,(Q=typeof S=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==te||$!==O)&&Ly(s,d,l,O),Hs=!1,$=s.memoizedState,d.state=$,cl(s,l,d,f),ll();var W=s.memoizedState;v!==te||$!==W||Hs||t!==null&&t.dependencies!==null&&eu(t.dependencies)?(typeof S=="function"&&(ud(s,a,S,l),W=s.memoizedState),(J=Hs||jy(s,a,J,l,$,W,O)||t!==null&&t.dependencies!==null&&eu(t.dependencies))?(Q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,W,O),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,W,O)),typeof d.componentDidUpdate=="function"&&(s.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&$===t.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&$===t.memoizedState||(s.flags|=1024),s.memoizedProps=l,s.memoizedState=W),d.props=l,d.state=W,d.context=O,l=J):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&$===t.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&$===t.memoizedState||(s.flags|=1024),l=!1)}return d=l,vu(t,s),l=(s.flags&128)!==0,d||l?(d=s.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),s.flags|=1,t!==null&&l?(s.child=ea(s,t.child,null,f),s.child=ea(s,null,a,f)):Gt(t,s,a,f),s.memoizedState=d.state,t=s.child):t=os(t,s,f),t}function Jy(t,s,a,l){return Yr(),s.flags|=256,Gt(t,s,a,l),s.child}var pd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gd(t){return{baseLanes:t,cachePool:Bg()}}function yd(t,s,a){return t=t!==null?t.childLanes&~a:0,s&&(t|=xn),t}function Zy(t,s,a){var l=s.pendingProps,f=!1,d=(s.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(gt.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,t===null){if(Be){if(f?Ks(s):Qs(),(t=st)?(t=ov(t,Bn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(s.memoizedState={dehydrated:t,treeContext:Us!==null?{id:ki,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=Og(t),a.return=s,s.child=a,Ht=s,st=null)):t=null,t===null)throw Bs(s);return Zd(t)?s.lanes=32:s.lanes=536870912,null}var S=l.children;return l=l.fallback,f?(Qs(),f=s.mode,S=Eu({mode:"hidden",children:S},f),l=Qr(l,f,a,null),S.return=s,l.return=s,S.sibling=l,s.child=S,l=s.child,l.memoizedState=gd(a),l.childLanes=yd(t,v,a),s.memoizedState=pd,ml(null,l)):(Ks(s),_d(s,S))}var O=t.memoizedState;if(O!==null&&(S=O.dehydrated,S!==null)){if(d)s.flags&256?(Ks(s),s.flags&=-257,s=vd(t,s,a)):s.memoizedState!==null?(Qs(),s.child=t.child,s.flags|=128,s=null):(Qs(),S=l.fallback,f=s.mode,l=Eu({mode:"visible",children:l.children},f),S=Qr(S,f,a,null),S.flags|=2,l.return=s,S.return=s,l.sibling=S,s.child=l,ea(s,t.child,null,a),l=s.child,l.memoizedState=gd(a),l.childLanes=yd(t,v,a),s.memoizedState=pd,s=ml(null,l));else if(Ks(s),Zd(S)){if(v=S.nextSibling&&S.nextSibling.dataset,v)var Q=v.dgst;v=Q,l=Error(r(419)),l.stack="",l.digest=v,nl({value:l,source:null,stack:null}),s=vd(t,s,a)}else if(Ct||Ua(t,s,a,!1),v=(a&t.childLanes)!==0,Ct||v){if(v=nt,v!==null&&(l=Vo(v,a),l!==0&&l!==O.retryLane))throw O.retryLane=l,Kr(t,l),pn(v,t,l),dd;Jd(S)||Nu(),s=vd(t,s,a)}else Jd(S)?(s.flags|=192,s.child=t.child,s=null):(t=O.treeContext,st=Hn(S.nextSibling),Ht=s,Be=!0,zs=null,Bn=!1,t!==null&&Vg(s,t),s=_d(s,l.children),s.flags|=4096);return s}return f?(Qs(),S=l.fallback,f=s.mode,O=t.child,Q=O.sibling,l=ts(O,{mode:"hidden",children:l.children}),l.subtreeFlags=O.subtreeFlags&65011712,Q!==null?S=ts(Q,S):(S=Qr(S,f,a,null),S.flags|=2),S.return=s,l.return=s,l.sibling=S,s.child=l,ml(null,l),l=s.child,S=t.child.memoizedState,S===null?S=gd(a):(f=S.cachePool,f!==null?(O=xt._currentValue,f=f.parent!==O?{parent:O,pool:O}:f):f=Bg(),S={baseLanes:S.baseLanes|a,cachePool:f}),l.memoizedState=S,l.childLanes=yd(t,v,a),s.memoizedState=pd,ml(t.child,l)):(Ks(s),a=t.child,t=a.sibling,a=ts(a,{mode:"visible",children:l.children}),a.return=s,a.sibling=null,t!==null&&(v=s.deletions,v===null?(s.deletions=[t],s.flags|=16):v.push(t)),s.child=a,s.memoizedState=null,a)}function _d(t,s){return s=Eu({mode:"visible",children:s},t.mode),s.return=t,t.child=s}function Eu(t,s){return t=Tn(22,t,null,s),t.lanes=0,t}function vd(t,s,a){return ea(s,t.child,null,a),t=_d(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function e_(t,s,a){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s),Mf(t.return,s,a)}function Ed(t,s,a,l,f,d){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f,treeForkCount:d}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=l,v.tail=a,v.tailMode=f,v.treeForkCount=d)}function t_(t,s,a){var l=s.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var v=gt.current,S=(v&2)!==0;if(S?(v=v&1|2,s.flags|=128):v&=1,le(gt,v),Gt(t,s,l,a),l=Be?tl:0,!S&&t!==null&&(t.flags&128)!==0)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&e_(t,a,s);else if(t.tag===19)e_(t,a,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(a=s.child,f=null;a!==null;)t=a.alternate,t!==null&&lu(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),Ed(s,!1,f,a,d,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(t=f.alternate,t!==null&&lu(t)===null){s.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}Ed(s,!0,a,null,d,l);break;case"together":Ed(s,!1,null,null,void 0,l);break;default:s.memoizedState=null}return s.child}function os(t,s,a){if(t!==null&&(s.dependencies=t.dependencies),Xs|=s.lanes,(a&s.childLanes)===0)if(t!==null){if(Ua(t,s,a,!1),(a&s.childLanes)===0)return null}else return null;if(t!==null&&s.child!==t.child)throw Error(r(153));if(s.child!==null){for(t=s.child,a=ts(t,t.pendingProps),s.child=a,a.return=s;t.sibling!==null;)t=t.sibling,a=a.sibling=ts(t,t.pendingProps),a.return=s;a.sibling=null}return s.child}function bd(t,s){return(t.lanes&s)!==0?!0:(t=t.dependencies,!!(t!==null&&eu(t)))}function oS(t,s,a){switch(s.tag){case 3:ot(s,s.stateNode.containerInfo),qs(s,xt,t.memoizedState.cache),Yr();break;case 27:case 5:on(s);break;case 4:ot(s,s.stateNode.containerInfo);break;case 10:qs(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,Kf(s),null;break;case 13:var l=s.memoizedState;if(l!==null)return l.dehydrated!==null?(Ks(s),s.flags|=128,null):(a&s.child.childLanes)!==0?Zy(t,s,a):(Ks(s),t=os(t,s,a),t!==null?t.sibling:null);Ks(s);break;case 19:var f=(t.flags&128)!==0;if(l=(a&s.childLanes)!==0,l||(Ua(t,s,a,!1),l=(a&s.childLanes)!==0),f){if(l)return t_(t,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),le(gt,gt.current),l)break;return null;case 22:return s.lanes=0,Qy(t,s,a,s.pendingProps);case 24:qs(s,xt,t.memoizedState.cache)}return os(t,s,a)}function n_(t,s,a){if(t!==null)if(t.memoizedProps!==s.pendingProps)Ct=!0;else{if(!bd(t,a)&&(s.flags&128)===0)return Ct=!1,oS(t,s,a);Ct=(t.flags&131072)!==0}else Ct=!1,Be&&(s.flags&1048576)!==0&&Mg(s,tl,s.index);switch(s.lanes=0,s.tag){case 16:e:{var l=s.pendingProps;if(t=Jr(s.elementType),s.type=t,typeof t=="function")xf(t)?(l=na(t,l),s.tag=1,s=Wy(null,s,t,l,a)):(s.tag=0,s=md(null,s,t,l,a));else{if(t!=null){var f=t.$$typeof;if(f===se){s.tag=11,s=Fy(null,s,t,l,a);break e}else if(f===C){s.tag=14,s=Gy(null,s,t,l,a);break e}}throw s=_e(t)||t,Error(r(306,s,""))}}return s;case 0:return md(t,s,s.type,s.pendingProps,a);case 1:return l=s.type,f=na(l,s.pendingProps),Wy(t,s,l,f,a);case 3:e:{if(ot(s,s.stateNode.containerInfo),t===null)throw Error(r(387));l=s.pendingProps;var d=s.memoizedState;f=d.element,Bf(t,s),cl(s,l,null,a);var v=s.memoizedState;if(l=v.cache,qs(s,xt,l),l!==d.cache&&Vf(s,[xt],a,!0),ll(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=d,s.memoizedState=d,s.flags&256){s=Jy(t,s,l,a);break e}else if(l!==f){f=Pn(Error(r(424)),s),nl(f),s=Jy(t,s,l,a);break e}else{switch(t=s.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(st=Hn(t.firstChild),Ht=s,Be=!0,zs=null,Bn=!0,a=Qg(s,null,l,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Yr(),l===f){s=os(t,s,a);break e}Gt(t,s,l,a)}s=s.child}return s;case 26:return vu(t,s),t===null?(a=dv(s.type,null,s.pendingProps,null))?s.memoizedState=a:Be||(a=s.type,t=s.pendingProps,l=ju(Ae.current).createElement(a),l[St]=s,l[jt]=t,Kt(l,a,t),wt(l),s.stateNode=l):s.memoizedState=dv(s.type,t.memoizedProps,s.pendingProps,t.memoizedState),null;case 27:return on(s),t===null&&Be&&(l=s.stateNode=uv(s.type,s.pendingProps,Ae.current),Ht=s,Bn=!0,f=st,tr(s.type)?(em=f,st=Hn(l.firstChild)):st=f),Gt(t,s,s.pendingProps.children,a),vu(t,s),t===null&&(s.flags|=4194304),s.child;case 5:return t===null&&Be&&((f=l=st)&&(l=LS(l,s.type,s.pendingProps,Bn),l!==null?(s.stateNode=l,Ht=s,st=Hn(l.firstChild),Bn=!1,f=!0):f=!1),f||Bs(s)),on(s),f=s.type,d=s.pendingProps,v=t!==null?t.memoizedProps:null,l=d.children,$d(f,d)?l=null:v!==null&&$d(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=Yf(t,s,JT,null,null,a),Nl._currentValue=f),vu(t,s),Gt(t,s,l,a),s.child;case 6:return t===null&&Be&&((t=a=st)&&(a=PS(a,s.pendingProps,Bn),a!==null?(s.stateNode=a,Ht=s,st=null,t=!0):t=!1),t||Bs(s)),null;case 13:return Zy(t,s,a);case 4:return ot(s,s.stateNode.containerInfo),l=s.pendingProps,t===null?s.child=ea(s,null,l,a):Gt(t,s,l,a),s.child;case 11:return Fy(t,s,s.type,s.pendingProps,a);case 7:return Gt(t,s,s.pendingProps,a),s.child;case 8:return Gt(t,s,s.pendingProps.children,a),s.child;case 12:return Gt(t,s,s.pendingProps.children,a),s.child;case 10:return l=s.pendingProps,qs(s,s.type,l.value),Gt(t,s,l.children,a),s.child;case 9:return f=s.type._context,l=s.pendingProps.children,Xr(s),f=Ft(f),l=l(f),s.flags|=1,Gt(t,s,l,a),s.child;case 14:return Gy(t,s,s.type,s.pendingProps,a);case 15:return Ky(t,s,s.type,s.pendingProps,a);case 19:return t_(t,s,a);case 31:return aS(t,s,a);case 22:return Qy(t,s,a,s.pendingProps);case 24:return Xr(s),l=Ft(xt),t===null?(f=Pf(),f===null&&(f=nt,d=jf(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=a),f=d),s.memoizedState={parent:l,cache:f},zf(s),qs(s,xt,f)):((t.lanes&a)!==0&&(Bf(t,s),cl(s,null,null,a),ll()),f=t.memoizedState,d=s.memoizedState,f.parent!==l?(f={parent:l,cache:l},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),qs(s,xt,l)):(l=d.cache,qs(s,xt,l),l!==f.cache&&Vf(s,[xt],a,!0))),Gt(t,s,s.pendingProps.children,a),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}function ls(t){t.flags|=4}function Td(t,s,a,l,f){if((s=(t.mode&32)!==0)&&(s=!1),s){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(N_())t.flags|=8192;else throw Zr=su,Uf}else t.flags&=-16777217}function i_(t,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!_v(s))if(N_())t.flags|=8192;else throw Zr=su,Uf}function bu(t,s){s!==null&&(t.flags|=4),t.flags&16384&&(s=t.tag!==22?Rc():536870912,t.lanes|=s,Wa|=s)}function pl(t,s){if(!Be)switch(t.tailMode){case"hidden":s=t.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function rt(t){var s=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(s)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,s}function lS(t,s,a){var l=s.pendingProps;switch(If(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(s),null;case 1:return rt(s),null;case 3:return a=s.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),ss(xt),Ye(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Pa(s)?ls(s):t===null||t.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Of())),rt(s),null;case 26:var f=s.type,d=s.memoizedState;return t===null?(ls(s),d!==null?(rt(s),i_(s,d)):(rt(s),Td(s,f,null,l,a))):d?d!==t.memoizedState?(ls(s),rt(s),i_(s,d)):(rt(s),s.flags&=-16777217):(t=t.memoizedProps,t!==l&&ls(s),rt(s),Td(s,f,t,l,a)),null;case 27:if(mi(s),a=Ae.current,f=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==l&&ls(s);else{if(!l){if(s.stateNode===null)throw Error(r(166));return rt(s),null}t=fe.current,Pa(s)?jg(s):(t=uv(f,l,a),s.stateNode=t,ls(s))}return rt(s),null;case 5:if(mi(s),f=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==l&&ls(s);else{if(!l){if(s.stateNode===null)throw Error(r(166));return rt(s),null}if(d=fe.current,Pa(s))jg(s);else{var v=ju(Ae.current);switch(d){case 1:d=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=v.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?v.createElement("select",{is:l.is}):v.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?v.createElement(f,{is:l.is}):v.createElement(f)}}d[St]=s,d[jt]=l;e:for(v=s.child;v!==null;){if(v.tag===5||v.tag===6)d.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===s)break e;for(;v.sibling===null;){if(v.return===null||v.return===s)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}s.stateNode=d;e:switch(Kt(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ls(s)}}return rt(s),Td(s,s.type,t===null?null:t.memoizedProps,s.pendingProps,a),null;case 6:if(t&&s.stateNode!=null)t.memoizedProps!==l&&ls(s);else{if(typeof l!="string"&&s.stateNode===null)throw Error(r(166));if(t=Ae.current,Pa(s)){if(t=s.stateNode,a=s.memoizedProps,l=null,f=Ht,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[St]=s,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Z_(t.nodeValue,a)),t||Bs(s,!0)}else t=ju(t).createTextNode(l),t[St]=s,s.stateNode=t}return rt(s),null;case 31:if(a=s.memoizedState,t===null||t.memoizedState!==null){if(l=Pa(s),a!==null){if(t===null){if(!l)throw Error(r(318));if(t=s.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[St]=s}else Yr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;rt(s),t=!1}else a=Of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return s.flags&256?(wn(s),s):(wn(s),null);if((s.flags&128)!==0)throw Error(r(558))}return rt(s),null;case 13:if(l=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Pa(s),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[St]=s}else Yr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;rt(s),f=!1}else f=Of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(wn(s),s):(wn(s),null)}return wn(s),(s.flags&128)!==0?(s.lanes=a,s):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=s.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),a!==t&&a&&(s.child.flags|=8192),bu(s,s.updateQueue),rt(s),null);case 4:return Ye(),t===null&&Fd(s.stateNode.containerInfo),rt(s),null;case 10:return ss(s.type),rt(s),null;case 19:if(Z(gt),l=s.memoizedState,l===null)return rt(s),null;if(f=(s.flags&128)!==0,d=l.rendering,d===null)if(f)pl(l,!1);else{if(dt!==0||t!==null&&(t.flags&128)!==0)for(t=s.child;t!==null;){if(d=lu(t),d!==null){for(s.flags|=128,pl(l,!1),t=d.updateQueue,s.updateQueue=t,bu(s,t),s.subtreeFlags=0,t=a,a=s.child;a!==null;)Dg(a,t),a=a.sibling;return le(gt,gt.current&1|2),Be&&ns(s,l.treeForkCount),s.child}t=t.sibling}l.tail!==null&&nn()>xu&&(s.flags|=128,f=!0,pl(l,!1),s.lanes=4194304)}else{if(!f)if(t=lu(d),t!==null){if(s.flags|=128,f=!0,t=t.updateQueue,s.updateQueue=t,bu(s,t),pl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Be)return rt(s),null}else 2*nn()-l.renderingStartTime>xu&&a!==536870912&&(s.flags|=128,f=!0,pl(l,!1),s.lanes=4194304);l.isBackwards?(d.sibling=s.child,s.child=d):(t=l.last,t!==null?t.sibling=d:s.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=nn(),t.sibling=null,a=gt.current,le(gt,f?a&1|2:a&1),Be&&ns(s,l.treeForkCount),t):(rt(s),null);case 22:case 23:return wn(s),Gf(),l=s.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(s.flags|=8192):l&&(s.flags|=8192),l?(a&536870912)!==0&&(s.flags&128)===0&&(rt(s),s.subtreeFlags&6&&(s.flags|=8192)):rt(s),a=s.updateQueue,a!==null&&bu(s,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(l=s.memoizedState.cachePool.pool),l!==a&&(s.flags|=2048),t!==null&&Z(Wr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),s.memoizedState.cache!==a&&(s.flags|=2048),ss(xt),rt(s),null;case 25:return null;case 30:return null}throw Error(r(156,s.tag))}function cS(t,s){switch(If(s),s.tag){case 1:return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return ss(xt),Ye(),t=s.flags,(t&65536)!==0&&(t&128)===0?(s.flags=t&-65537|128,s):null;case 26:case 27:case 5:return mi(s),null;case 31:if(s.memoizedState!==null){if(wn(s),s.alternate===null)throw Error(r(340));Yr()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 13:if(wn(s),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(r(340));Yr()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return Z(gt),null;case 4:return Ye(),null;case 10:return ss(s.type),null;case 22:case 23:return wn(s),Gf(),t!==null&&Z(Wr),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 24:return ss(xt),null;case 25:return null;default:return null}}function s_(t,s){switch(If(s),s.tag){case 3:ss(xt),Ye();break;case 26:case 27:case 5:mi(s);break;case 4:Ye();break;case 31:s.memoizedState!==null&&wn(s);break;case 13:wn(s);break;case 19:Z(gt);break;case 10:ss(s.type);break;case 22:case 23:wn(s),Gf(),t!==null&&Z(Wr);break;case 24:ss(xt)}}function gl(t,s){try{var a=s.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&t)===t){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==f)}}catch(S){We(s,s.return,S)}}function Ys(t,s,a){try{var l=s.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var v=l.inst,S=v.destroy;if(S!==void 0){v.destroy=void 0,f=s;var O=a,Q=S;try{Q()}catch(J){We(f,O,J)}}}l=l.next}while(l!==d)}}catch(J){We(s,s.return,J)}}function r_(t){var s=t.updateQueue;if(s!==null){var a=t.stateNode;try{$g(s,a)}catch(l){We(t,t.return,l)}}}function a_(t,s,a){a.props=na(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){We(t,s,l)}}function yl(t,s){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(f){We(t,s,f)}}function Vi(t,s){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){We(t,s,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){We(t,s,f)}else a.current=null}function o_(t){var s=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){We(t,t.return,f)}}function Sd(t,s,a){try{var l=t.stateNode;DS(l,t.type,a,s),l[jt]=s}catch(f){We(t,t.return,f)}}function l_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&tr(t.type)||t.tag===4}function wd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||l_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&tr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ad(t,s,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,s?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,s):(s=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,s.appendChild(t),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Jn));else if(l!==4&&(l===27&&tr(t.type)&&(a=t.stateNode,s=null),t=t.child,t!==null))for(Ad(t,s,a),t=t.sibling;t!==null;)Ad(t,s,a),t=t.sibling}function Tu(t,s,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,s?a.insertBefore(t,s):a.appendChild(t);else if(l!==4&&(l===27&&tr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Tu(t,s,a),t=t.sibling;t!==null;)Tu(t,s,a),t=t.sibling}function c_(t){var s=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Kt(s,l,a),s[St]=t,s[jt]=a}catch(d){We(t,t.return,d)}}var cs=!1,Nt=!1,xd=!1,u_=typeof WeakSet=="function"?WeakSet:Set,Pt=null;function uS(t,s){if(t=t.containerInfo,Qd=Hu,t=Tg(t),vf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,S=-1,O=-1,Q=0,J=0,te=t,$=null;t:for(;;){for(var W;te!==a||f!==0&&te.nodeType!==3||(S=v+f),te!==d||l!==0&&te.nodeType!==3||(O=v+l),te.nodeType===3&&(v+=te.nodeValue.length),(W=te.firstChild)!==null;)$=te,te=W;for(;;){if(te===t)break t;if($===a&&++Q===f&&(S=v),$===d&&++J===l&&(O=v),(W=te.nextSibling)!==null)break;te=$,$=te.parentNode}te=W}a=S===-1||O===-1?null:{start:S,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yd={focusedElem:t,selectionRange:a},Hu=!1,Pt=s;Pt!==null;)if(s=Pt,t=s.child,(s.subtreeFlags&1028)!==0&&t!==null)t.return=s,Pt=t;else for(;Pt!==null;){switch(s=Pt,d=s.alternate,t=s.flags,s.tag){case 0:if((t&4)!==0&&(t=s.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)f=t[a],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=s,f=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var ge=na(a.type,f);t=l.getSnapshotBeforeUpdate(ge,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(be){We(a,a.return,be)}}break;case 3:if((t&1024)!==0){if(t=s.stateNode.containerInfo,a=t.nodeType,a===9)Wd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=s.sibling,t!==null){t.return=s.return,Pt=t;break}Pt=s.return}}function h_(t,s,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:hs(t,a),l&4&&gl(5,a);break;case 1:if(hs(t,a),l&4)if(t=a.stateNode,s===null)try{t.componentDidMount()}catch(v){We(a,a.return,v)}else{var f=na(a.type,s.memoizedProps);s=s.memoizedState;try{t.componentDidUpdate(f,s,t.__reactInternalSnapshotBeforeUpdate)}catch(v){We(a,a.return,v)}}l&64&&r_(a),l&512&&yl(a,a.return);break;case 3:if(hs(t,a),l&64&&(t=a.updateQueue,t!==null)){if(s=null,a.child!==null)switch(a.child.tag){case 27:case 5:s=a.child.stateNode;break;case 1:s=a.child.stateNode}try{$g(t,s)}catch(v){We(a,a.return,v)}}break;case 27:s===null&&l&4&&c_(a);case 26:case 5:hs(t,a),s===null&&l&4&&o_(a),l&512&&yl(a,a.return);break;case 12:hs(t,a);break;case 31:hs(t,a),l&4&&m_(t,a);break;case 13:hs(t,a),l&4&&p_(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=vS.bind(null,a),US(t,a))));break;case 22:if(l=a.memoizedState!==null||cs,!l){s=s!==null&&s.memoizedState!==null||Nt,f=cs;var d=Nt;cs=l,(Nt=s)&&!d?fs(t,a,(a.subtreeFlags&8772)!==0):hs(t,a),cs=f,Nt=d}break;case 30:break;default:hs(t,a)}}function f_(t){var s=t.alternate;s!==null&&(t.alternate=null,f_(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&ba(s)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ct=null,hn=!1;function us(t,s,a){for(a=a.child;a!==null;)d_(t,s,a),a=a.sibling}function d_(t,s,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Yn,a)}catch{}switch(a.tag){case 26:Nt||Vi(a,s),us(t,s,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Nt||Vi(a,s);var l=ct,f=hn;tr(a.type)&&(ct=a.stateNode,hn=!1),us(t,s,a),xl(a.stateNode),ct=l,hn=f;break;case 5:Nt||Vi(a,s);case 6:if(l=ct,f=hn,ct=null,us(t,s,a),ct=l,hn=f,ct!==null)if(hn)try{(ct.nodeType===9?ct.body:ct.nodeName==="HTML"?ct.ownerDocument.body:ct).removeChild(a.stateNode)}catch(d){We(a,s,d)}else try{ct.removeChild(a.stateNode)}catch(d){We(a,s,d)}break;case 18:ct!==null&&(hn?(t=ct,rv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ro(t)):rv(ct,a.stateNode));break;case 4:l=ct,f=hn,ct=a.stateNode.containerInfo,hn=!0,us(t,s,a),ct=l,hn=f;break;case 0:case 11:case 14:case 15:Ys(2,a,s),Nt||Ys(4,a,s),us(t,s,a);break;case 1:Nt||(Vi(a,s),l=a.stateNode,typeof l.componentWillUnmount=="function"&&a_(a,s,l)),us(t,s,a);break;case 21:us(t,s,a);break;case 22:Nt=(l=Nt)||a.memoizedState!==null,us(t,s,a),Nt=l;break;default:us(t,s,a)}}function m_(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ro(t)}catch(a){We(s,s.return,a)}}}function p_(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ro(t)}catch(a){We(s,s.return,a)}}function hS(t){switch(t.tag){case 31:case 13:case 19:var s=t.stateNode;return s===null&&(s=t.stateNode=new u_),s;case 22:return t=t.stateNode,s=t._retryCache,s===null&&(s=t._retryCache=new u_),s;default:throw Error(r(435,t.tag))}}function Su(t,s){var a=hS(t);s.forEach(function(l){if(!a.has(l)){a.add(l);var f=ES.bind(null,t,l);l.then(f,f)}})}function fn(t,s){var a=s.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],d=t,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 27:if(tr(S.type)){ct=S.stateNode,hn=!1;break e}break;case 5:ct=S.stateNode,hn=!1;break e;case 3:case 4:ct=S.stateNode.containerInfo,hn=!0;break e}S=S.return}if(ct===null)throw Error(r(160));d_(d,v,f),ct=null,hn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)g_(s,t),s=s.sibling}var si=null;function g_(t,s){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:fn(s,t),dn(t),l&4&&(Ys(3,t,t.return),gl(3,t),Ys(5,t,t.return));break;case 1:fn(s,t),dn(t),l&512&&(Nt||a===null||Vi(a,a.return)),l&64&&cs&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=si;if(fn(s,t),dn(t),l&512&&(Nt||a===null||Vi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[bi]||d[St]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Kt(d,l,a),d[St]=t,wt(d),l=d;break e;case"link":var v=gv("link","href",f).get(l+(a.href||""));if(v){for(var S=0;S<v.length;S++)if(d=v[S],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(S,1);break t}}d=f.createElement(l),Kt(d,l,a),f.head.appendChild(d);break;case"meta":if(v=gv("meta","content",f).get(l+(a.content||""))){for(S=0;S<v.length;S++)if(d=v[S],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(S,1);break t}}d=f.createElement(l),Kt(d,l,a),f.head.appendChild(d);break;default:throw Error(r(468,l))}d[St]=t,wt(d),l=d}t.stateNode=l}else yv(f,t.type,t.stateNode);else t.stateNode=pv(f,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?yv(f,t.type,t.stateNode):pv(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Sd(t,t.memoizedProps,a.memoizedProps)}break;case 27:fn(s,t),dn(t),l&512&&(Nt||a===null||Vi(a,a.return)),a!==null&&l&4&&Sd(t,t.memoizedProps,a.memoizedProps);break;case 5:if(fn(s,t),dn(t),l&512&&(Nt||a===null||Vi(a,a.return)),t.flags&32){f=t.stateNode;try{un(f,"")}catch(ge){We(t,t.return,ge)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Sd(t,f,a!==null?a.memoizedProps:f)),l&1024&&(xd=!0);break;case 6:if(fn(s,t),dn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(ge){We(t,t.return,ge)}}break;case 3:if(Uu=null,f=si,si=Lu(s.containerInfo),fn(s,t),si=f,dn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ro(s.containerInfo)}catch(ge){We(t,t.return,ge)}xd&&(xd=!1,y_(t));break;case 4:l=si,si=Lu(t.stateNode.containerInfo),fn(s,t),dn(t),si=l;break;case 12:fn(s,t),dn(t);break;case 31:fn(s,t),dn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Su(t,l)));break;case 13:fn(s,t),dn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Au=nn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Su(t,l)));break;case 22:f=t.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,Q=cs,J=Nt;if(cs=Q||f,Nt=J||O,fn(s,t),Nt=J,cs=Q,dn(t),l&8192)e:for(s=t.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(a===null||O||cs||Nt||ia(t)),a=null,s=t;;){if(s.tag===5||s.tag===26){if(a===null){O=a=s;try{if(d=O.stateNode,f)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{S=O.stateNode;var te=O.memoizedProps.style,$=te!=null&&te.hasOwnProperty("display")?te.display:null;S.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(ge){We(O,O.return,ge)}}}else if(s.tag===6){if(a===null){O=s;try{O.stateNode.nodeValue=f?"":O.memoizedProps}catch(ge){We(O,O.return,ge)}}}else if(s.tag===18){if(a===null){O=s;try{var W=O.stateNode;f?av(W,!0):av(O.stateNode,!1)}catch(ge){We(O,O.return,ge)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===t)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;a===s&&(a=null),s=s.return}a===s&&(a=null),s.sibling.return=s.return,s=s.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Su(t,a))));break;case 19:fn(s,t),dn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Su(t,l)));break;case 30:break;case 21:break;default:fn(s,t),dn(t)}}function dn(t){var s=t.flags;if(s&2){try{for(var a,l=t.return;l!==null;){if(l_(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var f=a.stateNode,d=wd(t);Tu(t,d,f);break;case 5:var v=a.stateNode;a.flags&32&&(un(v,""),a.flags&=-33);var S=wd(t);Tu(t,S,v);break;case 3:case 4:var O=a.stateNode.containerInfo,Q=wd(t);Ad(t,Q,O);break;default:throw Error(r(161))}}catch(J){We(t,t.return,J)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function y_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var s=t;y_(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),t=t.sibling}}function hs(t,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)h_(t,s.alternate,s),s=s.sibling}function ia(t){for(t=t.child;t!==null;){var s=t;switch(s.tag){case 0:case 11:case 14:case 15:Ys(4,s,s.return),ia(s);break;case 1:Vi(s,s.return);var a=s.stateNode;typeof a.componentWillUnmount=="function"&&a_(s,s.return,a),ia(s);break;case 27:xl(s.stateNode);case 26:case 5:Vi(s,s.return),ia(s);break;case 22:s.memoizedState===null&&ia(s);break;case 30:ia(s);break;default:ia(s)}t=t.sibling}}function fs(t,s,a){for(a=a&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var l=s.alternate,f=t,d=s,v=d.flags;switch(d.tag){case 0:case 11:case 15:fs(f,d,a),gl(4,d);break;case 1:if(fs(f,d,a),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(Q){We(l,l.return,Q)}if(l=d,f=l.updateQueue,f!==null){var S=l.stateNode;try{var O=f.shared.hiddenCallbacks;if(O!==null)for(f.shared.hiddenCallbacks=null,f=0;f<O.length;f++)Yg(O[f],S)}catch(Q){We(l,l.return,Q)}}a&&v&64&&r_(d),yl(d,d.return);break;case 27:c_(d);case 26:case 5:fs(f,d,a),a&&l===null&&v&4&&o_(d),yl(d,d.return);break;case 12:fs(f,d,a);break;case 31:fs(f,d,a),a&&v&4&&m_(f,d);break;case 13:fs(f,d,a),a&&v&4&&p_(f,d);break;case 22:d.memoizedState===null&&fs(f,d,a),yl(d,d.return);break;case 30:break;default:fs(f,d,a)}s=s.sibling}}function Rd(t,s){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(t=s.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&il(a))}function Cd(t,s){t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&il(t))}function ri(t,s,a,l){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)__(t,s,a,l),s=s.sibling}function __(t,s,a,l){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ri(t,s,a,l),f&2048&&gl(9,s);break;case 1:ri(t,s,a,l);break;case 3:ri(t,s,a,l),f&2048&&(t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&il(t)));break;case 12:if(f&2048){ri(t,s,a,l),t=s.stateNode;try{var d=s.memoizedProps,v=d.id,S=d.onPostCommit;typeof S=="function"&&S(v,s.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){We(s,s.return,O)}}else ri(t,s,a,l);break;case 31:ri(t,s,a,l);break;case 13:ri(t,s,a,l);break;case 23:break;case 22:d=s.stateNode,v=s.alternate,s.memoizedState!==null?d._visibility&2?ri(t,s,a,l):_l(t,s):d._visibility&2?ri(t,s,a,l):(d._visibility|=2,Ya(t,s,a,l,(s.subtreeFlags&10256)!==0||!1)),f&2048&&Rd(v,s);break;case 24:ri(t,s,a,l),f&2048&&Cd(s.alternate,s);break;default:ri(t,s,a,l)}}function Ya(t,s,a,l,f){for(f=f&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var d=t,v=s,S=a,O=l,Q=v.flags;switch(v.tag){case 0:case 11:case 15:Ya(d,v,S,O,f),gl(8,v);break;case 23:break;case 22:var J=v.stateNode;v.memoizedState!==null?J._visibility&2?Ya(d,v,S,O,f):_l(d,v):(J._visibility|=2,Ya(d,v,S,O,f)),f&&Q&2048&&Rd(v.alternate,v);break;case 24:Ya(d,v,S,O,f),f&&Q&2048&&Cd(v.alternate,v);break;default:Ya(d,v,S,O,f)}s=s.sibling}}function _l(t,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var a=t,l=s,f=l.flags;switch(l.tag){case 22:_l(a,l),f&2048&&Rd(l.alternate,l);break;case 24:_l(a,l),f&2048&&Cd(l.alternate,l);break;default:_l(a,l)}s=s.sibling}}var vl=8192;function $a(t,s,a){if(t.subtreeFlags&vl)for(t=t.child;t!==null;)v_(t,s,a),t=t.sibling}function v_(t,s,a){switch(t.tag){case 26:$a(t,s,a),t.flags&vl&&t.memoizedState!==null&&WS(a,si,t.memoizedState,t.memoizedProps);break;case 5:$a(t,s,a);break;case 3:case 4:var l=si;si=Lu(t.stateNode.containerInfo),$a(t,s,a),si=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=vl,vl=16777216,$a(t,s,a),vl=l):$a(t,s,a));break;default:$a(t,s,a)}}function E_(t){var s=t.alternate;if(s!==null&&(t=s.child,t!==null)){s.child=null;do s=t.sibling,t.sibling=null,t=s;while(t!==null)}}function El(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var l=s[a];Pt=l,T_(l,t)}E_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)b_(t),t=t.sibling}function b_(t){switch(t.tag){case 0:case 11:case 15:El(t),t.flags&2048&&Ys(9,t,t.return);break;case 3:El(t);break;case 12:El(t);break;case 22:var s=t.stateNode;t.memoizedState!==null&&s._visibility&2&&(t.return===null||t.return.tag!==13)?(s._visibility&=-3,wu(t)):El(t);break;default:El(t)}}function wu(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var l=s[a];Pt=l,T_(l,t)}E_(t)}for(t=t.child;t!==null;){switch(s=t,s.tag){case 0:case 11:case 15:Ys(8,s,s.return),wu(s);break;case 22:a=s.stateNode,a._visibility&2&&(a._visibility&=-3,wu(s));break;default:wu(s)}t=t.sibling}}function T_(t,s){for(;Pt!==null;){var a=Pt;switch(a.tag){case 0:case 11:case 15:Ys(8,a,s);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:il(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Pt=l;else e:for(a=t;Pt!==null;){l=Pt;var f=l.sibling,d=l.return;if(f_(l),l===a){Pt=null;break e}if(f!==null){f.return=d,Pt=f;break e}Pt=d}}}var fS={getCacheForType:function(t){var s=Ft(xt),a=s.data.get(t);return a===void 0&&(a=t(),s.data.set(t,a)),a},cacheSignal:function(){return Ft(xt).controller.signal}},dS=typeof WeakMap=="function"?WeakMap:Map,Ke=0,nt=null,Me=null,je=0,Xe=0,An=null,$s=!1,Xa=!1,Nd=!1,ds=0,dt=0,Xs=0,sa=0,Id=0,xn=0,Wa=0,bl=null,mn=null,Dd=!1,Au=0,S_=0,xu=1/0,Ru=null,Ws=null,Mt=0,Js=null,Ja=null,ms=0,Od=0,kd=null,w_=null,Tl=0,Md=null;function Rn(){return(Ke&2)!==0&&je!==0?je&-je:Y.T!==null?zd():Cc()}function A_(){if(xn===0)if((je&536870912)===0||Be){var t=Dr;Dr<<=1,(Dr&3932160)===0&&(Dr=262144),xn=t}else xn=536870912;return t=Sn.current,t!==null&&(t.flags|=32),xn}function pn(t,s,a){(t===nt&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)&&(Za(t,0),Zs(t,je,xn,!1)),Or(t,a),((Ke&2)===0||t!==nt)&&(t===nt&&((Ke&2)===0&&(sa|=a),dt===4&&Zs(t,je,xn,!1)),ji(t))}function x_(t,s,a){if((Ke&6)!==0)throw Error(r(327));var l=!a&&(s&127)===0&&(s&t.expiredLanes)===0||$n(t,s),f=l?gS(t,s):jd(t,s,!0),d=l;do{if(f===0){Xa&&!l&&Zs(t,s,0,!1);break}else{if(a=t.current.alternate,d&&!mS(a)){f=jd(t,s,!1),d=!1;continue}if(f===2){if(d=s,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var S=t;f=bl;var O=S.current.memoizedState.isDehydrated;if(O&&(Za(S,v).flags|=256),v=jd(S,v,!1),v!==2){if(Nd&&!O){S.errorRecoveryDisabledLanes|=d,sa|=d,f=4;break e}d=mn,mn=f,d!==null&&(mn===null?mn=d:mn.push.apply(mn,d))}f=v}if(d=!1,f!==2)continue}}if(f===1){Za(t,0),Zs(t,s,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((s&4194048)!==s)break;case 6:Zs(l,s,xn,!$s);break e;case 2:mn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((s&62914560)===s&&(f=Au+300-nn(),10<f)){if(Zs(l,s,xn,!$s),_i(l,0,!0)!==0)break e;ms=s,l.timeoutHandle=iv(R_.bind(null,l,a,mn,Ru,Dd,s,xn,sa,Wa,$s,d,"Throttled",-0,0),f);break e}R_(l,a,mn,Ru,Dd,s,xn,sa,Wa,$s,d,null,-0,0)}}break}while(!0);ji(t)}function R_(t,s,a,l,f,d,v,S,O,Q,J,te,$,W){if(t.timeoutHandle=-1,te=s.subtreeFlags,te&8192||(te&16785408)===16785408){te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Jn},v_(s,d,te);var ge=(d&62914560)===d?Au-nn():(d&4194048)===d?S_-nn():0;if(ge=JS(te,ge),ge!==null){ms=d,t.cancelPendingCommit=ge(V_.bind(null,t,s,d,a,l,f,v,S,O,J,te,null,$,W)),Zs(t,d,v,!Q);return}}V_(t,s,d,a,l,f,v,S,O)}function mS(t){for(var s=t;;){var a=s.tag;if((a===0||a===11||a===15)&&s.flags&16384&&(a=s.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],d=f.getSnapshot;f=f.value;try{if(!bn(d(),f))return!1}catch{return!1}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Zs(t,s,a,l){s&=~Id,s&=~sa,t.suspendedLanes|=s,t.pingedLanes&=~s,l&&(t.warmLanes|=s),l=t.expirationTimes;for(var f=s;0<f;){var d=31-mt(f),v=1<<d;l[d]=-1,f&=~v}a!==0&&kr(t,a,s)}function Cu(){return(Ke&6)===0?(Sl(0),!1):!0}function Vd(){if(Me!==null){if(Xe===0)var t=Me.return;else t=Me,is=$r=null,Wf(t),Ha=null,rl=0,t=Me;for(;t!==null;)s_(t.alternate,t),t=t.return;Me=null}}function Za(t,s){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,MS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ms=0,Vd(),nt=t,Me=a=ts(t.current,null),je=s,Xe=0,An=null,$s=!1,Xa=$n(t,s),Nd=!1,Wa=xn=Id=sa=Xs=dt=0,mn=bl=null,Dd=!1,(s&8)!==0&&(s|=s&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=s;0<l;){var f=31-mt(l),d=1<<f;s|=t[f],l&=~d}return ds=s,$c(),a}function C_(t,s){De=null,Y.H=dl,s===qa||s===iu?(s=Fg(),Xe=3):s===Uf?(s=Fg(),Xe=4):Xe=s===dd?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,An=s,Me===null&&(dt=1,yu(t,Pn(s,t.current)))}function N_(){var t=Sn.current;return t===null?!0:(je&4194048)===je?qn===null:(je&62914560)===je||(je&536870912)!==0?t===qn:!1}function I_(){var t=Y.H;return Y.H=dl,t===null?dl:t}function D_(){var t=Y.A;return Y.A=fS,t}function Nu(){dt=4,$s||(je&4194048)!==je&&Sn.current!==null||(Xa=!0),(Xs&134217727)===0&&(sa&134217727)===0||nt===null||Zs(nt,je,xn,!1)}function jd(t,s,a){var l=Ke;Ke|=2;var f=I_(),d=D_();(nt!==t||je!==s)&&(Ru=null,Za(t,s)),s=!1;var v=dt;e:do try{if(Xe!==0&&Me!==null){var S=Me,O=An;switch(Xe){case 8:Vd(),v=6;break e;case 3:case 2:case 9:case 6:Sn.current===null&&(s=!0);var Q=Xe;if(Xe=0,An=null,eo(t,S,O,Q),a&&Xa){v=0;break e}break;default:Q=Xe,Xe=0,An=null,eo(t,S,O,Q)}}pS(),v=dt;break}catch(J){C_(t,J)}while(!0);return s&&t.shellSuspendCounter++,is=$r=null,Ke=l,Y.H=f,Y.A=d,Me===null&&(nt=null,je=0,$c()),v}function pS(){for(;Me!==null;)O_(Me)}function gS(t,s){var a=Ke;Ke|=2;var l=I_(),f=D_();nt!==t||je!==s?(Ru=null,xu=nn()+500,Za(t,s)):Xa=$n(t,s);e:do try{if(Xe!==0&&Me!==null){s=Me;var d=An;t:switch(Xe){case 1:Xe=0,An=null,eo(t,s,d,1);break;case 2:case 9:if(qg(d)){Xe=0,An=null,k_(s);break}s=function(){Xe!==2&&Xe!==9||nt!==t||(Xe=7),ji(t)},d.then(s,s);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:qg(d)?(Xe=0,An=null,k_(s)):(Xe=0,An=null,eo(t,s,d,7));break;case 5:var v=null;switch(Me.tag){case 26:v=Me.memoizedState;case 5:case 27:var S=Me;if(v?_v(v):S.stateNode.complete){Xe=0,An=null;var O=S.sibling;if(O!==null)Me=O;else{var Q=S.return;Q!==null?(Me=Q,Iu(Q)):Me=null}break t}}Xe=0,An=null,eo(t,s,d,5);break;case 6:Xe=0,An=null,eo(t,s,d,6);break;case 8:Vd(),dt=6;break e;default:throw Error(r(462))}}yS();break}catch(J){C_(t,J)}while(!0);return is=$r=null,Y.H=l,Y.A=f,Ke=a,Me!==null?0:(nt=null,je=0,$c(),dt)}function yS(){for(;Me!==null&&!ff();)O_(Me)}function O_(t){var s=n_(t.alternate,t,ds);t.memoizedProps=t.pendingProps,s===null?Iu(t):Me=s}function k_(t){var s=t,a=s.alternate;switch(s.tag){case 15:case 0:s=Xy(a,s,s.pendingProps,s.type,void 0,je);break;case 11:s=Xy(a,s,s.pendingProps,s.type.render,s.ref,je);break;case 5:Wf(s);default:s_(a,s),s=Me=Dg(s,ds),s=n_(a,s,ds)}t.memoizedProps=t.pendingProps,s===null?Iu(t):Me=s}function eo(t,s,a,l){is=$r=null,Wf(s),Ha=null,rl=0;var f=s.return;try{if(rS(t,f,s,a,je)){dt=1,yu(t,Pn(a,t.current)),Me=null;return}}catch(d){if(f!==null)throw Me=f,d;dt=1,yu(t,Pn(a,t.current)),Me=null;return}s.flags&32768?(Be||l===1?t=!0:Xa||(je&536870912)!==0?t=!1:($s=t=!0,(l===2||l===9||l===3||l===6)&&(l=Sn.current,l!==null&&l.tag===13&&(l.flags|=16384))),M_(s,t)):Iu(s)}function Iu(t){var s=t;do{if((s.flags&32768)!==0){M_(s,$s);return}t=s.return;var a=lS(s.alternate,s,ds);if(a!==null){Me=a;return}if(s=s.sibling,s!==null){Me=s;return}Me=s=t}while(s!==null);dt===0&&(dt=5)}function M_(t,s){do{var a=cS(t.alternate,t);if(a!==null){a.flags&=32767,Me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!s&&(t=t.sibling,t!==null)){Me=t;return}Me=t=a}while(t!==null);dt=6,Me=null}function V_(t,s,a,l,f,d,v,S,O){t.cancelPendingCommit=null;do Du();while(Mt!==0);if((Ke&6)!==0)throw Error(r(327));if(s!==null){if(s===t.current)throw Error(r(177));if(d=s.lanes|s.childLanes,d|=wf,pf(t,a,d,v,S,O),t===nt&&(Me=nt=null,je=0),Ja=s,Js=t,ms=a,Od=d,kd=f,w_=l,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,bS(Ns,function(){return z_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||l){l=Y.T,Y.T=null,f=re.p,re.p=2,v=Ke,Ke|=4;try{uS(t,s,a)}finally{Ke=v,re.p=f,Y.T=l}}Mt=1,j_(),L_(),P_()}}function j_(){if(Mt===1){Mt=0;var t=Js,s=Ja,a=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||a){a=Y.T,Y.T=null;var l=re.p;re.p=2;var f=Ke;Ke|=4;try{g_(s,t);var d=Yd,v=Tg(t.containerInfo),S=d.focusedElem,O=d.selectionRange;if(v!==S&&S&&S.ownerDocument&&bg(S.ownerDocument.documentElement,S)){if(O!==null&&vf(S)){var Q=O.start,J=O.end;if(J===void 0&&(J=Q),"selectionStart"in S)S.selectionStart=Q,S.selectionEnd=Math.min(J,S.value.length);else{var te=S.ownerDocument||document,$=te&&te.defaultView||window;if($.getSelection){var W=$.getSelection(),ge=S.textContent.length,be=Math.min(O.start,ge),tt=O.end===void 0?be:Math.min(O.end,ge);!W.extend&&be>tt&&(v=tt,tt=be,be=v);var U=Eg(S,be),L=Eg(S,tt);if(U&&L&&(W.rangeCount!==1||W.anchorNode!==U.node||W.anchorOffset!==U.offset||W.focusNode!==L.node||W.focusOffset!==L.offset)){var G=te.createRange();G.setStart(U.node,U.offset),W.removeAllRanges(),be>tt?(W.addRange(G),W.extend(L.node,L.offset)):(G.setEnd(L.node,L.offset),W.addRange(G))}}}}for(te=[],W=S;W=W.parentNode;)W.nodeType===1&&te.push({element:W,left:W.scrollLeft,top:W.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<te.length;S++){var ee=te[S];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}Hu=!!Qd,Yd=Qd=null}finally{Ke=f,re.p=l,Y.T=a}}t.current=s,Mt=2}}function L_(){if(Mt===2){Mt=0;var t=Js,s=Ja,a=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||a){a=Y.T,Y.T=null;var l=re.p;re.p=2;var f=Ke;Ke|=4;try{h_(t,s.alternate,s)}finally{Ke=f,re.p=l,Y.T=a}}Mt=3}}function P_(){if(Mt===4||Mt===3){Mt=0,bc();var t=Js,s=Ja,a=ms,l=w_;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Mt=5:(Mt=0,Ja=Js=null,U_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ws=null),Wi(a),s=s.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Yn,s,void 0,(s.current.flags&128)===128)}catch{}if(l!==null){s=Y.T,f=re.p,re.p=2,Y.T=null;try{for(var d=t.onRecoverableError,v=0;v<l.length;v++){var S=l[v];d(S.value,{componentStack:S.stack})}}finally{Y.T=s,re.p=f}}(ms&3)!==0&&Du(),ji(t),f=t.pendingLanes,(a&261930)!==0&&(f&42)!==0?t===Md?Tl++:(Tl=0,Md=t):Tl=0,Sl(0)}}function U_(t,s){(t.pooledCacheLanes&=s)===0&&(s=t.pooledCache,s!=null&&(t.pooledCache=null,il(s)))}function Du(){return j_(),L_(),P_(),z_()}function z_(){if(Mt!==5)return!1;var t=Js,s=Od;Od=0;var a=Wi(ms),l=Y.T,f=re.p;try{re.p=32>a?32:a,Y.T=null,a=kd,kd=null;var d=Js,v=ms;if(Mt=0,Ja=Js=null,ms=0,(Ke&6)!==0)throw Error(r(331));var S=Ke;if(Ke|=4,b_(d.current),__(d,d.current,v,a),Ke=S,Sl(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Yn,d)}catch{}return!0}finally{re.p=f,Y.T=l,U_(t,s)}}function B_(t,s,a){s=Pn(a,s),s=fd(t.stateNode,s,2),t=Gs(t,s,2),t!==null&&(Or(t,2),ji(t))}function We(t,s,a){if(t.tag===3)B_(t,t,a);else for(;s!==null;){if(s.tag===3){B_(s,t,a);break}else if(s.tag===1){var l=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ws===null||!Ws.has(l))){t=Pn(a,t),a=qy(2),l=Gs(s,a,2),l!==null&&(Hy(a,l,s,t),Or(l,2),ji(l));break}}s=s.return}}function Ld(t,s,a){var l=t.pingCache;if(l===null){l=t.pingCache=new dS;var f=new Set;l.set(s,f)}else f=l.get(s),f===void 0&&(f=new Set,l.set(s,f));f.has(a)||(Nd=!0,f.add(a),t=_S.bind(null,t,s,a),s.then(t,t))}function _S(t,s,a){var l=t.pingCache;l!==null&&l.delete(s),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,nt===t&&(je&a)===a&&(dt===4||dt===3&&(je&62914560)===je&&300>nn()-Au?(Ke&2)===0&&Za(t,0):Id|=a,Wa===je&&(Wa=0)),ji(t)}function q_(t,s){s===0&&(s=Rc()),t=Kr(t,s),t!==null&&(Or(t,s),ji(t))}function vS(t){var s=t.memoizedState,a=0;s!==null&&(a=s.retryLane),q_(t,a)}function ES(t,s){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(s),q_(t,a)}function bS(t,s){return kt(t,s)}var Ou=null,to=null,Pd=!1,ku=!1,Ud=!1,er=0;function ji(t){t!==to&&t.next===null&&(to===null?Ou=to=t:to=to.next=t),ku=!0,Pd||(Pd=!0,SS())}function Sl(t,s){if(!Ud&&ku){Ud=!0;do for(var a=!1,l=Ou;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var v=l.suspendedLanes,S=l.pingedLanes;d=(1<<31-mt(42|t)+1)-1,d&=f&~(v&~S),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,K_(l,d))}else d=je,d=_i(l,l===nt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||$n(l,d)||(a=!0,K_(l,d));l=l.next}while(a);Ud=!1}}function TS(){H_()}function H_(){ku=Pd=!1;var t=0;er!==0&&kS()&&(t=er);for(var s=nn(),a=null,l=Ou;l!==null;){var f=l.next,d=F_(l,s);d===0?(l.next=null,a===null?Ou=f:a.next=f,f===null&&(to=a)):(a=l,(t!==0||(d&3)!==0)&&(ku=!0)),l=f}Mt!==0&&Mt!==5||Sl(t),er!==0&&(er=0)}function F_(t,s){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-mt(d),S=1<<v,O=f[v];O===-1?((S&a)===0||(S&l)!==0)&&(f[v]=mf(S,s)):O<=s&&(t.expiredLanes|=S),d&=~S}if(s=nt,a=je,a=_i(t,t===s?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===s&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Cs(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||$n(t,a)){if(s=a&-a,s===t.callbackPriority)return s;switch(l!==null&&Cs(l),Wi(a)){case 2:case 8:a=ko;break;case 32:a=Ns;break;case 268435456:a=Tc;break;default:a=Ns}return l=G_.bind(null,t),a=kt(a,l),t.callbackPriority=s,t.callbackNode=a,s}return l!==null&&l!==null&&Cs(l),t.callbackPriority=2,t.callbackNode=null,2}function G_(t,s){if(Mt!==0&&Mt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Du()&&t.callbackNode!==a)return null;var l=je;return l=_i(t,t===nt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(x_(t,l,s),F_(t,nn()),t.callbackNode!=null&&t.callbackNode===a?G_.bind(null,t):null)}function K_(t,s){if(Du())return null;x_(t,s,!0)}function SS(){VS(function(){(Ke&6)!==0?kt(Oo,TS):H_()})}function zd(){if(er===0){var t=za;t===0&&(t=gi,gi<<=1,(gi&261888)===0&&(gi=256)),er=t}return er}function Q_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Aa(""+t)}function Y_(t,s){var a=s.ownerDocument.createElement("input");return a.name=s.name,a.value=s.value,t.id&&a.setAttribute("form",t.id),s.parentNode.insertBefore(a,s),t=new FormData(t),a.parentNode.removeChild(a),t}function wS(t,s,a,l,f){if(s==="submit"&&a&&a.stateNode===f){var d=Q_((f[jt]||null).action),v=l.submitter;v&&(s=(s=v[jt]||null)?Q_(s.formAction):v.getAttribute("formAction"),s!==null&&(d=s,v=null));var S=new Ni("action","action",null,l,f);t.push({event:S,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(er!==0){var O=v?Y_(f,v):new FormData(f);ad(a,{pending:!0,data:O,method:f.method,action:d},null,O)}}else typeof d=="function"&&(S.preventDefault(),O=v?Y_(f,v):new FormData(f),ad(a,{pending:!0,data:O,method:f.method,action:d},d,O))},currentTarget:f}]})}}for(var Bd=0;Bd<Sf.length;Bd++){var qd=Sf[Bd],AS=qd.toLowerCase(),xS=qd[0].toUpperCase()+qd.slice(1);ii(AS,"on"+xS)}ii(Ag,"onAnimationEnd"),ii(xg,"onAnimationIteration"),ii(Rg,"onAnimationStart"),ii("dblclick","onDoubleClick"),ii("focusin","onFocus"),ii("focusout","onBlur"),ii(qT,"onTransitionRun"),ii(HT,"onTransitionStart"),ii(FT,"onTransitionCancel"),ii(Cg,"onTransitionEnd"),Ai("onMouseEnter",["mouseout","mouseover"]),Ai("onMouseLeave",["mouseout","mouseover"]),Ai("onPointerEnter",["pointerout","pointerover"]),Ai("onPointerLeave",["pointerout","pointerover"]),wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wi("onBeforeInput",["compositionend","keypress","textInput","paste"]),wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wl));function $_(t,s){s=(s&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var d=void 0;if(s)for(var v=l.length-1;0<=v;v--){var S=l[v],O=S.instance,Q=S.currentTarget;if(S=S.listener,O!==d&&f.isPropagationStopped())break e;d=S,f.currentTarget=Q;try{d(f)}catch(J){Yc(J)}f.currentTarget=null,d=O}else for(v=0;v<l.length;v++){if(S=l[v],O=S.instance,Q=S.currentTarget,S=S.listener,O!==d&&f.isPropagationStopped())break e;d=S,f.currentTarget=Q;try{d(f)}catch(J){Yc(J)}f.currentTarget=null,d=O}}}}function Ve(t,s){var a=s[Ea];a===void 0&&(a=s[Ea]=new Set);var l=t+"__bubble";a.has(l)||(X_(s,t,2,!1),a.add(l))}function Hd(t,s,a){var l=0;s&&(l|=4),X_(a,t,l,s)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function Fd(t){if(!t[Mu]){t[Mu]=!0,jo.forEach(function(a){a!=="selectionchange"&&(RS.has(a)||Hd(a,!1,t),Hd(a,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[Mu]||(s[Mu]=!0,Hd("selectionchange",!1,s))}}function X_(t,s,a,l){switch(Av(s)){case 2:var f=tw;break;case 8:f=nw;break;default:f=rm}a=f.bind(null,s,a,t),f=void 0,!Pr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(s,a,{capture:!0,passive:f}):t.addEventListener(s,a,!0):f!==void 0?t.addEventListener(s,a,{passive:f}):t.addEventListener(s,a,!1)}function Gd(t,s,a,l,f){var d=l;if((s&1)===0&&(s&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var S=l.stateNode.containerInfo;if(S===f)break;if(v===4)for(v=l.return;v!==null;){var O=v.tag;if((O===3||O===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;S!==null;){if(v=Ti(S),v===null)return;if(O=v.tag,O===5||O===6||O===26||O===27){l=d=v;continue e}S=S.parentNode}}l=l.return}Vs(function(){var Q=d,J=Mn(a),te=[];e:{var $=Ng.get(t);if($!==void 0){var W=Ni,ge=t;switch(t){case"keypress":if(zr(a)===0)break e;case"keydown":case"keyup":W=Gc;break;case"focusin":ge="focus",W=qr;break;case"focusout":ge="blur",W=qr;break;case"beforeblur":case"afterblur":W=qr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=$o;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=jc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=_;break;case Ag:case xg:case Rg:W=Pc;break;case Cg:W=A;break;case"scroll":case"scrollend":W=Yo;break;case"wheel":W=X;break;case"copy":case"cut":case"paste":W=Uc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=es;break;case"toggle":case"beforetoggle":W=Ie}var be=(s&4)!==0,tt=!be&&(t==="scroll"||t==="scrollend"),U=be?$!==null?$+"Capture":null:$;be=[];for(var L=Q,G;L!==null;){var ee=L;if(G=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||G===null||U===null||(ee=Zn(L,U),ee!=null&&be.push(Al(L,ee,G))),tt)break;L=L.return}0<be.length&&($=new W($,ge,null,a,J),te.push({event:$,listeners:be}))}}if((s&7)===0){e:{if($=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",$&&a!==Go&&(ge=a.relatedTarget||a.fromElement)&&(Ti(ge)||ge[Ei]))break e;if((W||$)&&($=J.window===J?J:($=J.ownerDocument)?$.defaultView||$.parentWindow:window,W?(ge=a.relatedTarget||a.toElement,W=Q,ge=ge?Ti(ge):null,ge!==null&&(tt=c(ge),be=ge.tag,ge!==tt||be!==5&&be!==27&&be!==6)&&(ge=null)):(W=null,ge=Q),W!==ge)){if(be=$o,ee="onMouseLeave",U="onMouseEnter",L="mouse",(t==="pointerout"||t==="pointerover")&&(be=es,ee="onPointerLeave",U="onPointerEnter",L="pointer"),tt=W==null?$:vn(W),G=ge==null?$:vn(ge),$=new be(ee,L+"leave",W,a,J),$.target=tt,$.relatedTarget=G,ee=null,Ti(J)===Q&&(be=new be(U,L+"enter",ge,a,J),be.target=G,be.relatedTarget=tt,ee=be),tt=ee,W&&ge)t:{for(be=CS,U=W,L=ge,G=0,ee=U;ee;ee=be(ee))G++;ee=0;for(var ve=L;ve;ve=be(ve))ee++;for(;0<G-ee;)U=be(U),G--;for(;0<ee-G;)L=be(L),ee--;for(;G--;){if(U===L||L!==null&&U===L.alternate){be=U;break t}U=be(U),L=be(L)}be=null}else be=null;W!==null&&W_(te,$,W,be,!1),ge!==null&&tt!==null&&W_(te,tt,ge,be,!0)}}e:{if($=Q?vn(Q):window,W=$.nodeName&&$.nodeName.toLowerCase(),W==="select"||W==="input"&&$.type==="file")var He=mg;else if(fg($))if(pg)He=UT;else{He=LT;var ye=jT}else W=$.nodeName,!W||W.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&wa(Q.elementType)&&(He=mg):He=PT;if(He&&(He=He(t,Q))){dg(te,He,a,J);break e}ye&&ye(t,$,Q),t==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&qo($,"number",$.value)}switch(ye=Q?vn(Q):window,t){case"focusin":(fg(ye)||ye.contentEditable==="true")&&(Oa=ye,Ef=Q,el=null);break;case"focusout":el=Ef=Oa=null;break;case"mousedown":bf=!0;break;case"contextmenu":case"mouseup":case"dragend":bf=!1,Sg(te,a,J);break;case"selectionchange":if(BT)break;case"keydown":case"keyup":Sg(te,a,J)}var Oe;if(Ge)e:{switch(t){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else Da?Hr(t,a)&&(Le="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Le="onCompositionStart");Le&&(Oi&&a.locale!=="ko"&&(Da||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&Da&&(Oe=Qo()):(Ci=J,Ko="value"in Ci?Ci.value:Ci.textContent,Da=!0)),ye=Vu(Q,Le),0<ye.length&&(Le=new Di(Le,t,null,a,J),te.push({event:Le,listeners:ye}),Oe?Le.data=Oe:(Oe=Ia(a),Oe!==null&&(Le.data=Oe)))),(Oe=jn?OT(t,a):kT(t,a))&&(Le=Vu(Q,"onBeforeInput"),0<Le.length&&(ye=new Di("onBeforeInput","beforeinput",null,a,J),te.push({event:ye,listeners:Le}),ye.data=Oe)),wS(te,t,Q,a,J)}$_(te,s)})}function Al(t,s,a){return{instance:t,listener:s,currentTarget:a}}function Vu(t,s){for(var a=s+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Zn(t,a),f!=null&&l.unshift(Al(t,f,d)),f=Zn(t,s),f!=null&&l.push(Al(t,f,d))),t.tag===3)return l;t=t.return}return[]}function CS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function W_(t,s,a,l,f){for(var d=s._reactName,v=[];a!==null&&a!==l;){var S=a,O=S.alternate,Q=S.stateNode;if(S=S.tag,O!==null&&O===l)break;S!==5&&S!==26&&S!==27||Q===null||(O=Q,f?(Q=Zn(a,d),Q!=null&&v.unshift(Al(a,Q,O))):f||(Q=Zn(a,d),Q!=null&&v.push(Al(a,Q,O)))),a=a.return}v.length!==0&&t.push({event:s,listeners:v})}var NS=/\r\n?/g,IS=/\u0000|\uFFFD/g;function J_(t){return(typeof t=="string"?t:""+t).replace(NS,`
`).replace(IS,"")}function Z_(t,s){return s=J_(s),J_(t)===s}function et(t,s,a,l,f,d){switch(a){case"children":typeof l=="string"?s==="body"||s==="textarea"&&l===""||un(t,l):(typeof l=="number"||typeof l=="bigint")&&s!=="body"&&un(t,""+l);break;case"className":En(t,"class",l);break;case"tabIndex":En(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":En(t,a,l);break;case"style":Fo(t,l,d);break;case"data":if(s!=="object"){En(t,"data",l);break}case"src":case"href":if(l===""&&(s!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Aa(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(s!=="input"&&et(t,s,"name",f.name,f,null),et(t,s,"formEncType",f.formEncType,f,null),et(t,s,"formMethod",f.formMethod,f,null),et(t,s,"formTarget",f.formTarget,f,null)):(et(t,s,"encType",f.encType,f,null),et(t,s,"method",f.method,f,null),et(t,s,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Aa(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Jn);break;case"onScroll":l!=null&&Ve("scroll",t);break;case"onScrollEnd":l!=null&&Ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Aa(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Ve("beforetoggle",t),Ve("toggle",t),Ta(t,"popover",l);break;case"xlinkActuate":At(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":At(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":At(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":At(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":At(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":At(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":At(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":At(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":At(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ta(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vc.get(a)||a,Ta(t,a,l))}}function Kd(t,s,a,l,f,d){switch(a){case"style":Fo(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof l=="string"?un(t,l):(typeof l=="number"||typeof l=="bigint")&&un(t,""+l);break;case"onScroll":l!=null&&Ve("scroll",t);break;case"onScrollEnd":l!=null&&Ve("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Jn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),s=a.slice(2,f?a.length-7:void 0),d=t[jt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(s,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(s,l,f);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Ta(t,a,l)}}}function Kt(t,s,a){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",t),Ve("load",t);var l=!1,f=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:et(t,s,d,v,a,null)}}f&&et(t,s,"srcSet",a.srcSet,a,null),l&&et(t,s,"src",a.src,a,null);return;case"input":Ve("invalid",t);var S=d=v=f=null,O=null,Q=null;for(l in a)if(a.hasOwnProperty(l)){var J=a[l];if(J!=null)switch(l){case"name":f=J;break;case"type":v=J;break;case"checked":O=J;break;case"defaultChecked":Q=J;break;case"value":d=J;break;case"defaultValue":S=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,s));break;default:et(t,s,l,J,a,null)}}Oc(t,d,S,O,Q,v,f,!1);return;case"select":Ve("invalid",t),l=v=d=null;for(f in a)if(a.hasOwnProperty(f)&&(S=a[f],S!=null))switch(f){case"value":d=S;break;case"defaultValue":v=S;break;case"multiple":l=S;default:et(t,s,f,S,a,null)}s=d,a=v,t.multiple=!!l,s!=null?Ds(t,!!l,s,!1):a!=null&&Ds(t,!!l,a,!0);return;case"textarea":Ve("invalid",t),d=f=l=null;for(v in a)if(a.hasOwnProperty(v)&&(S=a[v],S!=null))switch(v){case"value":l=S;break;case"defaultValue":f=S;break;case"children":d=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(r(91));break;default:et(t,s,v,S,a,null)}Os(t,l,f,d);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(l=a[O],l!=null))switch(O){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:et(t,s,O,l,a,null)}return;case"dialog":Ve("beforetoggle",t),Ve("toggle",t),Ve("cancel",t),Ve("close",t);break;case"iframe":case"object":Ve("load",t);break;case"video":case"audio":for(l=0;l<wl.length;l++)Ve(wl[l],t);break;case"image":Ve("error",t),Ve("load",t);break;case"details":Ve("toggle",t);break;case"embed":case"source":case"link":Ve("error",t),Ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(l=a[Q],l!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:et(t,s,Q,l,a,null)}return;default:if(wa(s)){for(J in a)a.hasOwnProperty(J)&&(l=a[J],l!==void 0&&Kd(t,s,J,l,a,void 0));return}}for(S in a)a.hasOwnProperty(S)&&(l=a[S],l!=null&&et(t,s,S,l,a,null))}function DS(t,s,a,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,v=null,S=null,O=null,Q=null,J=null;for(W in a){var te=a[W];if(a.hasOwnProperty(W)&&te!=null)switch(W){case"checked":break;case"value":break;case"defaultValue":O=te;default:l.hasOwnProperty(W)||et(t,s,W,null,l,te)}}for(var $ in l){var W=l[$];if(te=a[$],l.hasOwnProperty($)&&(W!=null||te!=null))switch($){case"type":d=W;break;case"name":f=W;break;case"checked":Q=W;break;case"defaultChecked":J=W;break;case"value":v=W;break;case"defaultValue":S=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(r(137,s));break;default:W!==te&&et(t,s,$,W,l,te)}}Sa(t,v,S,O,Q,J,d,f);return;case"select":W=v=S=$=null;for(d in a)if(O=a[d],a.hasOwnProperty(d)&&O!=null)switch(d){case"value":break;case"multiple":W=O;default:l.hasOwnProperty(d)||et(t,s,d,null,l,O)}for(f in l)if(d=l[f],O=a[f],l.hasOwnProperty(f)&&(d!=null||O!=null))switch(f){case"value":$=d;break;case"defaultValue":S=d;break;case"multiple":v=d;default:d!==O&&et(t,s,f,d,l,O)}s=S,a=v,l=W,$!=null?Ds(t,!!a,$,!1):!!l!=!!a&&(s!=null?Ds(t,!!a,s,!0):Ds(t,!!a,a?[]:"",!1));return;case"textarea":W=$=null;for(S in a)if(f=a[S],a.hasOwnProperty(S)&&f!=null&&!l.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:et(t,s,S,null,l,f)}for(v in l)if(f=l[v],d=a[v],l.hasOwnProperty(v)&&(f!=null||d!=null))switch(v){case"value":$=f;break;case"defaultValue":W=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&et(t,s,v,f,l,d)}kc(t,$,W);return;case"option":for(var ge in a)if($=a[ge],a.hasOwnProperty(ge)&&$!=null&&!l.hasOwnProperty(ge))switch(ge){case"selected":t.selected=!1;break;default:et(t,s,ge,null,l,$)}for(O in l)if($=l[O],W=a[O],l.hasOwnProperty(O)&&$!==W&&($!=null||W!=null))switch(O){case"selected":t.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:et(t,s,O,$,l,W)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in a)$=a[be],a.hasOwnProperty(be)&&$!=null&&!l.hasOwnProperty(be)&&et(t,s,be,null,l,$);for(Q in l)if($=l[Q],W=a[Q],l.hasOwnProperty(Q)&&$!==W&&($!=null||W!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,s));break;default:et(t,s,Q,$,l,W)}return;default:if(wa(s)){for(var tt in a)$=a[tt],a.hasOwnProperty(tt)&&$!==void 0&&!l.hasOwnProperty(tt)&&Kd(t,s,tt,void 0,l,$);for(J in l)$=l[J],W=a[J],!l.hasOwnProperty(J)||$===W||$===void 0&&W===void 0||Kd(t,s,J,$,l,W);return}}for(var U in a)$=a[U],a.hasOwnProperty(U)&&$!=null&&!l.hasOwnProperty(U)&&et(t,s,U,null,l,$);for(te in l)$=l[te],W=a[te],!l.hasOwnProperty(te)||$===W||$==null&&W==null||et(t,s,te,$,l,W)}function ev(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function OS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,s=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var f=a[l],d=f.transferSize,v=f.initiatorType,S=f.duration;if(d&&S&&ev(v)){for(v=0,S=f.responseEnd,l+=1;l<a.length;l++){var O=a[l],Q=O.startTime;if(Q>S)break;var J=O.transferSize,te=O.initiatorType;J&&ev(te)&&(O=O.responseEnd,v+=J*(O<S?1:(S-Q)/(O-Q)))}if(--l,s+=8*(d+v)/(f.duration/1e3),t++,10<t)break}}if(0<t)return s/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Qd=null,Yd=null;function ju(t){return t.nodeType===9?t:t.ownerDocument}function tv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nv(t,s){if(t===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&s==="foreignObject"?0:t}function $d(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Xd=null;function kS(){var t=window.event;return t&&t.type==="popstate"?t===Xd?!1:(Xd=t,!0):(Xd=null,!1)}var iv=typeof setTimeout=="function"?setTimeout:void 0,MS=typeof clearTimeout=="function"?clearTimeout:void 0,sv=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof sv<"u"?function(t){return sv.resolve(null).then(t).catch(jS)}:iv;function jS(t){setTimeout(function(){throw t})}function tr(t){return t==="head"}function rv(t,s){var a=s,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(f),ro(s);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")xl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,xl(a);for(var d=a.firstChild;d;){var v=d.nextSibling,S=d.nodeName;d[bi]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=v}}else a==="body"&&xl(t.ownerDocument.body);a=f}while(a);ro(s)}function av(t,s){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?s?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(s?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function Wd(t){var s=t.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var a=s;switch(s=s.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wd(a),ba(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function LS(t,s,a,l){for(;t.nodeType===1;){var f=a;if(t.nodeName.toLowerCase()!==s.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[bi])switch(s){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(s==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Hn(t.nextSibling),t===null)break}return null}function PS(t,s,a){if(s==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Hn(t.nextSibling),t===null))return null;return t}function ov(t,s){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Hn(t.nextSibling),t===null))return null;return t}function Jd(t){return t.data==="$?"||t.data==="$~"}function Zd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function US(t,s){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=s;else if(t.data!=="$?"||a.readyState!=="loading")s();else{var l=function(){s(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Hn(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return t}var em=null;function lv(t){t=t.nextSibling;for(var s=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(s===0)return Hn(t.nextSibling);s--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||s++}t=t.nextSibling}return null}function cv(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(s===0)return t;s--}else a!=="/$"&&a!=="/&"||s++}t=t.previousSibling}return null}function uv(t,s,a){switch(s=ju(a),t){case"html":if(t=s.documentElement,!t)throw Error(r(452));return t;case"head":if(t=s.head,!t)throw Error(r(453));return t;case"body":if(t=s.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function xl(t){for(var s=t.attributes;s.length;)t.removeAttributeNode(s[0]);ba(t)}var Fn=new Map,hv=new Set;function Lu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ps=re.d;re.d={f:zS,r:BS,D:qS,C:HS,L:FS,m:GS,X:QS,S:KS,M:YS};function zS(){var t=ps.f(),s=Cu();return t||s}function BS(t){var s=kn(t);s!==null&&s.tag===5&&s.type==="form"?Cy(s):ps.r(t)}var no=typeof document>"u"?null:document;function fv(t,s,a){var l=no;if(l&&typeof s=="string"&&s){var f=cn(s);f='link[rel="'+t+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),hv.has(f)||(hv.add(f),t={rel:t,crossOrigin:a,href:s},l.querySelector(f)===null&&(s=l.createElement("link"),Kt(s,"link",t),wt(s),l.head.appendChild(s)))}}function qS(t){ps.D(t),fv("dns-prefetch",t,null)}function HS(t,s){ps.C(t,s),fv("preconnect",t,s)}function FS(t,s,a){ps.L(t,s,a);var l=no;if(l&&t&&s){var f='link[rel="preload"][as="'+cn(s)+'"]';s==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+cn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+cn(a.imageSizes)+'"]')):f+='[href="'+cn(t)+'"]';var d=f;switch(s){case"style":d=io(t);break;case"script":d=so(t)}Fn.has(d)||(t=T({rel:"preload",href:s==="image"&&a&&a.imageSrcSet?void 0:t,as:s},a),Fn.set(d,t),l.querySelector(f)!==null||s==="style"&&l.querySelector(Rl(d))||s==="script"&&l.querySelector(Cl(d))||(s=l.createElement("link"),Kt(s,"link",t),wt(s),l.head.appendChild(s)))}}function GS(t,s){ps.m(t,s);var a=no;if(a&&t){var l=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+cn(l)+'"][href="'+cn(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=so(t)}if(!Fn.has(d)&&(t=T({rel:"modulepreload",href:t},s),Fn.set(d,t),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Cl(d)))return}l=a.createElement("link"),Kt(l,"link",t),wt(l),a.head.appendChild(l)}}}function KS(t,s,a){ps.S(t,s,a);var l=no;if(l&&t){var f=Si(l).hoistableStyles,d=io(t);s=s||"default";var v=f.get(d);if(!v){var S={loading:0,preload:null};if(v=l.querySelector(Rl(d)))S.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":s},a),(a=Fn.get(d))&&tm(t,a);var O=v=l.createElement("link");wt(O),Kt(O,"link",t),O._p=new Promise(function(Q,J){O.onload=Q,O.onerror=J}),O.addEventListener("load",function(){S.loading|=1}),O.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Pu(v,s,l)}v={type:"stylesheet",instance:v,count:1,state:S},f.set(d,v)}}}function QS(t,s){ps.X(t,s);var a=no;if(a&&t){var l=Si(a).hoistableScripts,f=so(t),d=l.get(f);d||(d=a.querySelector(Cl(f)),d||(t=T({src:t,async:!0},s),(s=Fn.get(f))&&nm(t,s),d=a.createElement("script"),wt(d),Kt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function YS(t,s){ps.M(t,s);var a=no;if(a&&t){var l=Si(a).hoistableScripts,f=so(t),d=l.get(f);d||(d=a.querySelector(Cl(f)),d||(t=T({src:t,async:!0,type:"module"},s),(s=Fn.get(f))&&nm(t,s),d=a.createElement("script"),wt(d),Kt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function dv(t,s,a,l){var f=(f=Ae.current)?Lu(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(s=io(a.href),a=Si(f).hoistableStyles,l=a.get(s),l||(l={type:"style",instance:null,count:0,state:null},a.set(s,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=io(a.href);var d=Si(f).hoistableStyles,v=d.get(t);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=f.querySelector(Rl(t)))&&!d._p&&(v.instance=d,v.state.loading=5),Fn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Fn.set(t,a),d||$S(f,t,a,v.state))),s&&l===null)throw Error(r(528,""));return v}if(s&&l!==null)throw Error(r(529,""));return null;case"script":return s=a.async,a=a.src,typeof a=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=so(a),a=Si(f).hoistableScripts,l=a.get(s),l||(l={type:"script",instance:null,count:0,state:null},a.set(s,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function io(t){return'href="'+cn(t)+'"'}function Rl(t){return'link[rel="stylesheet"]['+t+"]"}function mv(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function $S(t,s,a,l){t.querySelector('link[rel="preload"][as="style"]['+s+"]")?l.loading=1:(s=t.createElement("link"),l.preload=s,s.addEventListener("load",function(){return l.loading|=1}),s.addEventListener("error",function(){return l.loading|=2}),Kt(s,"link",a),wt(s),t.head.appendChild(s))}function so(t){return'[src="'+cn(t)+'"]'}function Cl(t){return"script[async]"+t}function pv(t,s,a){if(s.count++,s.instance===null)switch(s.type){case"style":var l=t.querySelector('style[data-href~="'+cn(a.href)+'"]');if(l)return s.instance=l,wt(l),l;var f=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),wt(l),Kt(l,"style",f),Pu(l,a.precedence,t),s.instance=l;case"stylesheet":f=io(a.href);var d=t.querySelector(Rl(f));if(d)return s.state.loading|=4,s.instance=d,wt(d),d;l=mv(a),(f=Fn.get(f))&&tm(l,f),d=(t.ownerDocument||t).createElement("link"),wt(d);var v=d;return v._p=new Promise(function(S,O){v.onload=S,v.onerror=O}),Kt(d,"link",l),s.state.loading|=4,Pu(d,a.precedence,t),s.instance=d;case"script":return d=so(a.src),(f=t.querySelector(Cl(d)))?(s.instance=f,wt(f),f):(l=a,(f=Fn.get(d))&&(l=T({},a),nm(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),wt(f),Kt(f,"link",l),t.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(l=s.instance,s.state.loading|=4,Pu(l,a.precedence,t));return s.instance}function Pu(t,s,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,v=0;v<l.length;v++){var S=l[v];if(S.dataset.precedence===s)d=S;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(s=a.nodeType===9?a.head:a,s.insertBefore(t,s.firstChild))}function tm(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.title==null&&(t.title=s.title)}function nm(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.integrity==null&&(t.integrity=s.integrity)}var Uu=null;function gv(t,s,a){if(Uu===null){var l=new Map,f=Uu=new Map;f.set(a,l)}else f=Uu,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),f=0;f<a.length;f++){var d=a[f];if(!(d[bi]||d[St]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(s)||"";v=t+v;var S=l.get(v);S?S.push(d):l.set(v,[d])}}return l}function yv(t,s,a){t=t.ownerDocument||t,t.head.insertBefore(a,s==="title"?t.querySelector("head > title"):null)}function XS(t,s,a){if(a===1||s.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return t=s.disabled,typeof s.precedence=="string"&&t==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function _v(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function WS(t,s,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=io(l.href),d=s.querySelector(Rl(f));if(d){s=d._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(t.count++,t=zu.bind(t),s.then(t,t)),a.state.loading|=4,a.instance=d,wt(d);return}d=s.ownerDocument||s,l=mv(l),(f=Fn.get(f))&&tm(l,f),d=d.createElement("link"),wt(d);var v=d;v._p=new Promise(function(S,O){v.onload=S,v.onerror=O}),Kt(d,"link",l),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,s),(s=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=zu.bind(t),s.addEventListener("load",a),s.addEventListener("error",a))}}var im=0;function JS(t,s){return t.stylesheets&&t.count===0&&qu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&qu(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+s);0<t.imgBytes&&im===0&&(im=62500*OS());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&qu(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>im?50:800)+s);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function zu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bu=null;function qu(t,s){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bu=new Map,s.forEach(ZS,t),Bu=null,zu.call(t))}function ZS(t,s){if(!(s.state.loading&4)){var a=Bu.get(t);if(a)var l=a.get(null);else{a=new Map,Bu.set(t,a);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var v=f[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}f=s.instance,v=f.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,f),a.set(v,f),this.count++,l=zu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),s.state.loading|=4}}var Nl={$$typeof:P,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function ew(t,s,a,l,f,d,v,S,O){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.hiddenUpdates=vi(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function vv(t,s,a,l,f,d,v,S,O,Q,J,te){return t=new ew(t,s,a,v,O,Q,J,te,S),s=1,d===!0&&(s|=24),d=Tn(3,null,null,s),t.current=d,d.stateNode=t,s=jf(),s.refCount++,t.pooledCache=s,s.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:s},zf(d),t}function Ev(t){return t?(t=Va,t):Va}function bv(t,s,a,l,f,d){f=Ev(f),l.context===null?l.context=f:l.pendingContext=f,l=Fs(s),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Gs(t,l,s),a!==null&&(pn(a,t,s),ol(a,t,s))}function Tv(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<s?a:s}}function sm(t,s){Tv(t,s),(t=t.alternate)&&Tv(t,s)}function Sv(t){if(t.tag===13||t.tag===31){var s=Kr(t,67108864);s!==null&&pn(s,t,67108864),sm(t,67108864)}}function wv(t){if(t.tag===13||t.tag===31){var s=Rn();s=Mr(s);var a=Kr(t,s);a!==null&&pn(a,t,s),sm(t,s)}}var Hu=!0;function tw(t,s,a,l){var f=Y.T;Y.T=null;var d=re.p;try{re.p=2,rm(t,s,a,l)}finally{re.p=d,Y.T=f}}function nw(t,s,a,l){var f=Y.T;Y.T=null;var d=re.p;try{re.p=8,rm(t,s,a,l)}finally{re.p=d,Y.T=f}}function rm(t,s,a,l){if(Hu){var f=am(l);if(f===null)Gd(t,s,l,Fu,a),xv(t,l);else if(sw(f,t,s,a,l))l.stopPropagation();else if(xv(t,l),s&4&&-1<iw.indexOf(t)){for(;f!==null;){var d=kn(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=yi(d.pendingLanes);if(v!==0){var S=d;for(S.pendingLanes|=2,S.entangledLanes|=2;v;){var O=1<<31-mt(v);S.entanglements[1]|=O,v&=~O}ji(d),(Ke&6)===0&&(xu=nn()+500,Sl(0))}}break;case 31:case 13:S=Kr(d,2),S!==null&&pn(S,d,2),Cu(),sm(d,2)}if(d=am(l),d===null&&Gd(t,s,l,Fu,a),d===f)break;f=d}f!==null&&l.stopPropagation()}else Gd(t,s,l,null,a)}}function am(t){return t=Mn(t),om(t)}var Fu=null;function om(t){if(Fu=null,t=Ti(t),t!==null){var s=c(t);if(s===null)t=null;else{var a=s.tag;if(a===13){if(t=h(s),t!==null)return t;t=null}else if(a===31){if(t=m(s),t!==null)return t;t=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null)}}return Fu=t,null}function Av(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ir()){case Oo:return 2;case ko:return 8;case Ns:case df:return 32;case Tc:return 268435456;default:return 32}default:return 32}}var lm=!1,nr=null,ir=null,sr=null,Il=new Map,Dl=new Map,rr=[],iw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xv(t,s){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Il.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dl.delete(s.pointerId)}}function Ol(t,s,a,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:s,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},s!==null&&(s=kn(s),s!==null&&Sv(s)),t):(t.eventSystemFlags|=l,s=t.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),t)}function sw(t,s,a,l,f){switch(s){case"focusin":return nr=Ol(nr,t,s,a,l,f),!0;case"dragenter":return ir=Ol(ir,t,s,a,l,f),!0;case"mouseover":return sr=Ol(sr,t,s,a,l,f),!0;case"pointerover":var d=f.pointerId;return Il.set(d,Ol(Il.get(d)||null,t,s,a,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Dl.set(d,Ol(Dl.get(d)||null,t,s,a,l,f)),!0}return!1}function Rv(t){var s=Ti(t.target);if(s!==null){var a=c(s);if(a!==null){if(s=a.tag,s===13){if(s=h(a),s!==null){t.blockedOn=s,Xn(t.priority,function(){wv(a)});return}}else if(s===31){if(s=m(a),s!==null){t.blockedOn=s,Xn(t.priority,function(){wv(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gu(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var a=am(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Go=l,a.target.dispatchEvent(l),Go=null}else return s=kn(a),s!==null&&Sv(s),t.blockedOn=a,!1;s.shift()}return!0}function Cv(t,s,a){Gu(t)&&a.delete(s)}function rw(){lm=!1,nr!==null&&Gu(nr)&&(nr=null),ir!==null&&Gu(ir)&&(ir=null),sr!==null&&Gu(sr)&&(sr=null),Il.forEach(Cv),Dl.forEach(Cv)}function Ku(t,s){t.blockedOn===s&&(t.blockedOn=null,lm||(lm=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,rw)))}var Qu=null;function Nv(t){Qu!==t&&(Qu=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Qu===t&&(Qu=null);for(var s=0;s<t.length;s+=3){var a=t[s],l=t[s+1],f=t[s+2];if(typeof l!="function"){if(om(l||a)===null)continue;break}var d=kn(a);d!==null&&(t.splice(s,3),s-=3,ad(d,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function ro(t){function s(O){return Ku(O,t)}nr!==null&&Ku(nr,t),ir!==null&&Ku(ir,t),sr!==null&&Ku(sr,t),Il.forEach(s),Dl.forEach(s);for(var a=0;a<rr.length;a++){var l=rr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<rr.length&&(a=rr[0],a.blockedOn===null);)Rv(a),a.blockedOn===null&&rr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],d=a[l+1],v=f[jt]||null;if(typeof d=="function")v||Nv(a);else if(v){var S=null;if(d&&d.hasAttribute("formAction")){if(f=d,v=d[jt]||null)S=v.formAction;else if(om(f)!==null)continue}else S=v.action;typeof S=="function"?a[l+1]=S:(a.splice(l,3),l-=3),Nv(a)}}}function Iv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function s(){f!==null&&(f(),f=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),f!==null&&(f(),f=null)}}}function cm(t){this._internalRoot=t}Yu.prototype.render=cm.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(r(409));var a=s.current,l=Rn();bv(a,l,t,s,null,null)},Yu.prototype.unmount=cm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;bv(t.current,2,null,t,null,null),Cu(),s[Ei]=null}};function Yu(t){this._internalRoot=t}Yu.prototype.unstable_scheduleHydration=function(t){if(t){var s=Cc();t={blockedOn:null,target:t,priority:s};for(var a=0;a<rr.length&&s!==0&&s<rr[a].priority;a++);rr.splice(a,0,t),a===0&&Rv(t)}};var Dv=e.version;if(Dv!=="19.2.0")throw Error(r(527,Dv,"19.2.0"));re.findDOMNode=function(t){var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=g(s),t=t!==null?E(t):null,t=t===null?null:t.stateNode,t};var aw={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{Yn=$u.inject(aw),Bt=$u}catch{}}return Ml.createRoot=function(t,s){if(!o(t))throw Error(r(299));var a=!1,l="",f=Py,d=Uy,v=zy;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(l=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(d=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=vv(t,1,!1,null,null,a,l,null,f,d,v,Iv),t[Ei]=s.current,Fd(t),new cm(s)},Ml.hydrateRoot=function(t,s,a){if(!o(t))throw Error(r(299));var l=!1,f="",d=Py,v=Uy,S=zy,O=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError),a.formState!==void 0&&(O=a.formState)),s=vv(t,1,!0,s,a??null,l,f,O,d,v,S,Iv),s.context=Ev(null),a=s.current,l=Rn(),l=Mr(l),f=Fs(l),f.callback=null,Gs(a,f,l),a=l,s.current.lanes=a,Or(s,a),ji(s),t[Ei]=s.current,Fd(t),new Yu(s)},Ml.version="19.2.0",Ml}var Bv;function gw(){if(Bv)return fm.exports;Bv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),fm.exports=pw(),fm.exports}var yw=gw(),gm={exports:{}},ym={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function _w(){if(qv)return ym;qv=1;var n=Bh().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return ym.c=function(e){return n.H.useMemoCache(e)},ym}var Hv;function vw(){return Hv||(Hv=1,gm.exports=_w()),gm.exports}var _n=vw();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fv="popstate";function Ew(n={}){function e(r,o){let{pathname:c,search:h,hash:m}=r.location;return km("",{pathname:c,search:h,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(r,o){return typeof o=="string"?o:$l(o)}return Tw(e,i,null,n)}function ut(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function li(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bw(){return Math.random().toString(36).substring(2,10)}function Gv(n,e){return{usr:n.state,key:n.key,idx:e}}function km(n,e,i=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?So(e):e,state:i,key:e&&e.key||r||bw()}}function $l({pathname:n="/",search:e="",hash:i=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function So(n){let e={};if(n){let i=n.indexOf("#");i>=0&&(e.hash=n.substring(i),n=n.substring(0,i));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function Tw(n,e,i,r={}){let{window:o=document.defaultView,v5Compat:c=!1}=r,h=o.history,m="POP",p=null,g=E();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function E(){return(h.state||{idx:null}).idx}function T(){m="POP";let j=E(),q=j==null?null:j-g;g=j,p&&p({action:m,location:K.location,delta:q})}function w(j,q){m="PUSH";let B=km(K.location,j,q);g=E()+1;let P=Gv(B,g),se=K.createHref(B);try{h.pushState(P,"",se)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;o.location.assign(se)}c&&p&&p({action:m,location:K.location,delta:1})}function k(j,q){m="REPLACE";let B=km(K.location,j,q);g=E();let P=Gv(B,g),se=K.createHref(B);h.replaceState(P,"",se),c&&p&&p({action:m,location:K.location,delta:0})}function z(j){return Sw(j)}let K={get action(){return m},get location(){return n(o,h)},listen(j){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Fv,T),p=j,()=>{o.removeEventListener(Fv,T),p=null}},createHref(j){return e(o,j)},createURL:z,encodeLocation(j){let q=z(j);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:w,replace:k,go(j){return h.go(j)}};return K}function Sw(n,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),ut(i,"No window.location.(origin|href) available to create URL");let r=typeof n=="string"?n:$l(n);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function M0(n,e,i="/"){return ww(n,e,i,!1)}function ww(n,e,i,r){let o=typeof e=="string"?So(e):e,c=bs(o.pathname||"/",i);if(c==null)return null;let h=V0(n);Aw(h);let m=null;for(let p=0;m==null&&p<h.length;++p){let g=jw(c);m=Mw(h[p],g,r)}return m}function V0(n,e=[],i=[],r="",o=!1){let c=(h,m,p=o,g)=>{let E={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(r)&&p)return;ut(E.relativePath.startsWith(r),`Absolute route path "${E.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(r.length)}let T=_s([r,E.relativePath]),w=i.concat(E);h.children&&h.children.length>0&&(ut(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),V0(h.children,e,w,T,p)),!(h.path==null&&!h.index)&&e.push({path:T,score:Ow(T,h.index),routesMeta:w})};return n.forEach((h,m)=>{if(h.path===""||!h.path?.includes("?"))c(h,m);else for(let p of j0(h.path))c(h,m,!0,p)}),e}function j0(n){let e=n.split("/");if(e.length===0)return[];let[i,...r]=e,o=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return o?[c,""]:[c];let h=j0(r.join("/")),m=[];return m.push(...h.map(p=>p===""?c:[c,p].join("/"))),o&&m.push(...h),m.map(p=>n.startsWith("/")&&p===""?"/":p)}function Aw(n){n.sort((e,i)=>e.score!==i.score?i.score-e.score:kw(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var xw=/^:[\w-]+$/,Rw=3,Cw=2,Nw=1,Iw=10,Dw=-2,Kv=n=>n==="*";function Ow(n,e){let i=n.split("/"),r=i.length;return i.some(Kv)&&(r+=Dw),e&&(r+=Cw),i.filter(o=>!Kv(o)).reduce((o,c)=>o+(xw.test(c)?Rw:c===""?Nw:Iw),r)}function kw(n,e){return n.length===e.length&&n.slice(0,-1).every((r,o)=>r===e[o])?n[n.length-1]-e[e.length-1]:0}function Mw(n,e,i=!1){let{routesMeta:r}=n,o={},c="/",h=[];for(let m=0;m<r.length;++m){let p=r[m],g=m===r.length-1,E=c==="/"?e:e.slice(c.length)||"/",T=_h({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},E),w=p.route;if(!T&&g&&i&&!r[r.length-1].route.index&&(T=_h({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:_s([c,T.pathname]),pathnameBase:zw(_s([c,T.pathnameBase])),route:w}),T.pathnameBase!=="/"&&(c=_s([c,T.pathnameBase]))}return h}function _h(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,r]=Vw(n.path,n.caseSensitive,n.end),o=e.match(i);if(!o)return null;let c=o[0],h=c.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:r.reduce((g,{paramName:E,isOptional:T},w)=>{if(E==="*"){let z=m[w]||"";h=c.slice(0,c.length-z.length).replace(/(.)\/+$/,"$1")}const k=m[w];return T&&!k?g[E]=void 0:g[E]=(k||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:h,pattern:n}}function Vw(n,e=!1,i=!0){li(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,p)=>(r.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(r.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function jw(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return li(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function bs(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=n.charAt(i);return r&&r!=="/"?null:n.slice(i)||"/"}function Lw(n,e="/"){let{pathname:i,search:r="",hash:o=""}=typeof n=="string"?So(n):n;return{pathname:i?i.startsWith("/")?i:Pw(i,e):e,search:Bw(r),hash:qw(o)}}function Pw(n,e){let i=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function _m(n,e,i,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Uw(n){return n.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function hp(n){let e=Uw(n);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function fp(n,e,i,r=!1){let o;typeof n=="string"?o=So(n):(o={...n},ut(!o.pathname||!o.pathname.includes("?"),_m("?","pathname","search",o)),ut(!o.pathname||!o.pathname.includes("#"),_m("#","pathname","hash",o)),ut(!o.search||!o.search.includes("#"),_m("#","search","hash",o)));let c=n===""||o.pathname==="",h=c?"/":o.pathname,m;if(h==null)m=i;else{let T=e.length-1;if(!r&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),T-=1;o.pathname=w.join("/")}m=T>=0?e[T]:"/"}let p=Lw(o,m),g=h&&h!=="/"&&h.endsWith("/"),E=(c||h===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(g||E)&&(p.pathname+="/"),p}var _s=n=>n.join("/").replace(/\/\/+/g,"/"),zw=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Bw=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,qw=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Hw(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var L0=["POST","PUT","PATCH","DELETE"];new Set(L0);var Fw=["GET",...L0];new Set(Fw);var wo=F.createContext(null);wo.displayName="DataRouter";var qh=F.createContext(null);qh.displayName="DataRouterState";F.createContext(!1);var P0=F.createContext({isTransitioning:!1});P0.displayName="ViewTransition";var Gw=F.createContext(new Map);Gw.displayName="Fetchers";var Kw=F.createContext(null);Kw.displayName="Await";var hi=F.createContext(null);hi.displayName="Navigation";var rc=F.createContext(null);rc.displayName="Location";var fi=F.createContext({outlet:null,matches:[],isDataRoute:!1});fi.displayName="Route";var dp=F.createContext(null);dp.displayName="RouteError";function Qw(n,{relative:e}={}){ut(Ao(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=F.useContext(hi),{hash:o,pathname:c,search:h}=ac(n,{relative:e}),m=c;return i!=="/"&&(m=c==="/"?i:_s([i,c])),r.createHref({pathname:m,search:h,hash:o})}function Ao(){return F.useContext(rc)!=null}function Ar(){return ut(Ao(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(rc).location}var U0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function z0(n){F.useContext(hi).static||F.useLayoutEffect(n)}function an(){let{isDataRoute:n}=F.useContext(fi);return n?oA():Yw()}function Yw(){ut(Ao(),"useNavigate() may be used only in the context of a <Router> component.");let n=F.useContext(wo),{basename:e,navigator:i}=F.useContext(hi),{matches:r}=F.useContext(fi),{pathname:o}=Ar(),c=JSON.stringify(hp(r)),h=F.useRef(!1);return z0(()=>{h.current=!0}),F.useCallback((p,g={})=>{if(li(h.current,U0),!h.current)return;if(typeof p=="number"){i.go(p);return}let E=fp(p,JSON.parse(c),o,g.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:_s([e,E.pathname])),(g.replace?i.replace:i.push)(E,g.state,g)},[e,i,c,o,n])}F.createContext(null);function $w(){let{matches:n}=F.useContext(fi),e=n[n.length-1];return e?e.params:{}}function ac(n,{relative:e}={}){let{matches:i}=F.useContext(fi),{pathname:r}=Ar(),o=JSON.stringify(hp(i));return F.useMemo(()=>fp(n,JSON.parse(o),r,e==="path"),[n,o,r,e])}function Xw(n,e){return B0(n,e)}function B0(n,e,i,r,o){ut(Ao(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=F.useContext(hi),{matches:h}=F.useContext(fi),m=h[h.length-1],p=m?m.params:{},g=m?m.pathname:"/",E=m?m.pathnameBase:"/",T=m&&m.route;{let B=T&&T.path||"";q0(g,!T||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let w=Ar(),k;if(e){let B=typeof e=="string"?So(e):e;ut(E==="/"||B.pathname?.startsWith(E),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${B.pathname}" was given in the \`location\` prop.`),k=B}else k=w;let z=k.pathname||"/",K=z;if(E!=="/"){let B=E.replace(/^\//,"").split("/");K="/"+z.replace(/^\//,"").split("/").slice(B.length).join("/")}let j=M0(n,{pathname:K});li(T||j!=null,`No routes matched location "${k.pathname}${k.search}${k.hash}" `),li(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=tA(j&&j.map(B=>Object.assign({},B,{params:Object.assign({},p,B.params),pathname:_s([E,c.encodeLocation?c.encodeLocation(B.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?E:_s([E,c.encodeLocation?c.encodeLocation(B.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathnameBase])})),h,i,r,o);return e&&q?F.createElement(rc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...k},navigationType:"POP"}},q):q}function Ww(){let n=aA(),e=Hw(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:c},"ErrorBoundary")," or"," ",F.createElement("code",{style:c},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),i?F.createElement("pre",{style:o},i):null,h)}var Jw=F.createElement(Ww,null),Zw=class extends F.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.unstable_onError?this.props.unstable_onError(n,e):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?F.createElement(fi.Provider,{value:this.props.routeContext},F.createElement(dp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function eA({routeContext:n,match:e,children:i}){let r=F.useContext(wo);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(fi.Provider,{value:n},i)}function tA(n,e=[],i=null,r=null,o=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let c=n,h=i?.errors;if(h!=null){let g=c.findIndex(E=>E.route.id&&h?.[E.route.id]!==void 0);ut(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let m=!1,p=-1;if(i)for(let g=0;g<c.length;g++){let E=c[g];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(p=g),E.route.id){let{loaderData:T,errors:w}=i,k=E.route.loader&&!T.hasOwnProperty(E.route.id)&&(!w||w[E.route.id]===void 0);if(E.route.lazy||k){m=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((g,E,T)=>{let w,k=!1,z=null,K=null;i&&(w=h&&E.route.id?h[E.route.id]:void 0,z=E.route.errorElement||Jw,m&&(p<0&&T===0?(q0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,K=null):p===T&&(k=!0,K=E.route.hydrateFallbackElement||null)));let j=e.concat(c.slice(0,T+1)),q=()=>{let B;return w?B=z:k?B=K:E.route.Component?B=F.createElement(E.route.Component,null):E.route.element?B=E.route.element:B=g,F.createElement(eA,{match:E,routeContext:{outlet:g,matches:j,isDataRoute:i!=null},children:B})};return i&&(E.route.ErrorBoundary||E.route.errorElement||T===0)?F.createElement(Zw,{location:i.location,revalidation:i.revalidation,component:z,error:w,children:q(),routeContext:{outlet:null,matches:j,isDataRoute:!0},unstable_onError:r}):q()},null)}function mp(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nA(n){let e=F.useContext(wo);return ut(e,mp(n)),e}function iA(n){let e=F.useContext(qh);return ut(e,mp(n)),e}function sA(n){let e=F.useContext(fi);return ut(e,mp(n)),e}function pp(n){let e=sA(n),i=e.matches[e.matches.length-1];return ut(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function rA(){return pp("useRouteId")}function aA(){let n=F.useContext(dp),e=iA("useRouteError"),i=pp("useRouteError");return n!==void 0?n:e.errors?.[i]}function oA(){let{router:n}=nA("useNavigate"),e=pp("useNavigate"),i=F.useRef(!1);return z0(()=>{i.current=!0}),F.useCallback(async(o,c={})=>{li(i.current,U0),i.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...c}))},[n,e])}var Qv={};function q0(n,e,i){!e&&!Qv[n]&&(Qv[n]=!0,li(!1,i))}F.memo(lA);function lA({routes:n,future:e,state:i,unstable_onError:r}){return B0(n,void 0,i,r,e)}function cA({to:n,replace:e,state:i,relative:r}){ut(Ao(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=F.useContext(hi);li(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=F.useContext(fi),{pathname:h}=Ar(),m=an(),p=fp(n,hp(c),h,r==="path"),g=JSON.stringify(p);return F.useEffect(()=>{m(JSON.parse(g),{replace:e,state:i,relative:r})},[m,g,r,e,i]),null}function _t(n){ut(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function uA({basename:n="/",children:e=null,location:i,navigationType:r="POP",navigator:o,static:c=!1}){ut(!Ao(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),m=F.useMemo(()=>({basename:h,navigator:o,static:c,future:{}}),[h,o,c]);typeof i=="string"&&(i=So(i));let{pathname:p="/",search:g="",hash:E="",state:T=null,key:w="default"}=i,k=F.useMemo(()=>{let z=bs(p,h);return z==null?null:{location:{pathname:z,search:g,hash:E,state:T,key:w},navigationType:r}},[h,p,g,E,T,w,r]);return li(k!=null,`<Router basename="${h}"> is not able to match the URL "${p}${g}${E}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:F.createElement(hi.Provider,{value:m},F.createElement(rc.Provider,{children:e,value:k}))}function hA({children:n,location:e}){return Xw(Mm(n),e)}function Mm(n,e=[]){let i=[];return F.Children.forEach(n,(r,o)=>{if(!F.isValidElement(r))return;let c=[...e,o];if(r.type===F.Fragment){i.push.apply(i,Mm(r.props.children,c));return}ut(r.type===_t,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ut(!r.props.index||!r.props.children,"An index route cannot have child routes.");let h={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(h.children=Mm(r.props.children,c)),i.push(h)}),i}var rh="get",ah="application/x-www-form-urlencoded";function Hh(n){return n!=null&&typeof n.tagName=="string"}function fA(n){return Hh(n)&&n.tagName.toLowerCase()==="button"}function dA(n){return Hh(n)&&n.tagName.toLowerCase()==="form"}function mA(n){return Hh(n)&&n.tagName.toLowerCase()==="input"}function pA(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function gA(n,e){return n.button===0&&(!e||e==="_self")&&!pA(n)}var Xu=null;function yA(){if(Xu===null)try{new FormData(document.createElement("form"),0),Xu=!1}catch{Xu=!0}return Xu}var _A=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function vm(n){return n!=null&&!_A.has(n)?(li(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ah}"`),null):n}function vA(n,e){let i,r,o,c,h;if(dA(n)){let m=n.getAttribute("action");r=m?bs(m,e):null,i=n.getAttribute("method")||rh,o=vm(n.getAttribute("enctype"))||ah,c=new FormData(n)}else if(fA(n)||mA(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||m.getAttribute("action");if(r=p?bs(p,e):null,i=n.getAttribute("formmethod")||m.getAttribute("method")||rh,o=vm(n.getAttribute("formenctype"))||vm(m.getAttribute("enctype"))||ah,c=new FormData(m,n),!yA()){let{name:g,type:E,value:T}=n;if(E==="image"){let w=g?`${g}.`:"";c.append(`${w}x`,"0"),c.append(`${w}y`,"0")}else g&&c.append(g,T)}}else{if(Hh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=rh,r=null,o=ah,h=n}return c&&o==="text/plain"&&(h=c,c=void 0),{action:r,method:i.toLowerCase(),encType:o,formData:c,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gp(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function EA(n,e,i){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&bs(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function bA(n,e){if(n.id in e)return e[n.id];try{let i=await import(n.module);return e[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function TA(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function SA(n,e,i){let r=await Promise.all(n.map(async o=>{let c=e.routes[o.route.id];if(c){let h=await bA(c,i);return h.links?h.links():[]}return[]}));return RA(r.flat(1).filter(TA).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Yv(n,e,i,r,o,c){let h=(p,g)=>i[g]?p.route.id!==i[g].route.id:!0,m=(p,g)=>i[g].pathname!==p.pathname||i[g].route.path?.endsWith("*")&&i[g].params["*"]!==p.params["*"];return c==="assets"?e.filter((p,g)=>h(p,g)||m(p,g)):c==="data"?e.filter((p,g)=>{let E=r.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(h(p,g)||m(p,g))return!0;if(p.route.shouldRevalidate){let T=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function wA(n,e,{includeHydrateFallback:i}={}){return AA(n.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function AA(n){return[...new Set(n)]}function xA(n){let e={},i=Object.keys(n).sort();for(let r of i)e[r]=n[r];return e}function RA(n,e){let i=new Set;return new Set(e),n.reduce((r,o)=>{let c=JSON.stringify(xA(o));return i.has(c)||(i.add(c),r.push({key:c,link:o})),r},[])}function H0(){let n=F.useContext(wo);return gp(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function CA(){let n=F.useContext(qh);return gp(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var yp=F.createContext(void 0);yp.displayName="FrameworkContext";function F0(){let n=F.useContext(yp);return gp(n,"You must render this element inside a <HydratedRouter> element"),n}function NA(n,e){let i=F.useContext(yp),[r,o]=F.useState(!1),[c,h]=F.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:g,onMouseLeave:E,onTouchStart:T}=e,w=F.useRef(null);F.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let K=q=>{q.forEach(B=>{h(B.isIntersecting)})},j=new IntersectionObserver(K,{threshold:.5});return w.current&&j.observe(w.current),()=>{j.disconnect()}}},[n]),F.useEffect(()=>{if(r){let K=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(K)}}},[r]);let k=()=>{o(!0)},z=()=>{o(!1),h(!1)};return i?n!=="intent"?[c,w,{}]:[c,w,{onFocus:Vl(m,k),onBlur:Vl(p,z),onMouseEnter:Vl(g,k),onMouseLeave:Vl(E,z),onTouchStart:Vl(T,k)}]:[!1,w,{}]}function Vl(n,e){return i=>{n&&n(i),i.defaultPrevented||e(i)}}function IA({page:n,...e}){let{router:i}=H0(),r=F.useMemo(()=>M0(i.routes,n,i.basename),[i.routes,n,i.basename]);return r?F.createElement(OA,{page:n,matches:r,...e}):null}function DA(n){let{manifest:e,routeModules:i}=F0(),[r,o]=F.useState([]);return F.useEffect(()=>{let c=!1;return SA(n,e,i).then(h=>{c||o(h)}),()=>{c=!0}},[n,e,i]),r}function OA({page:n,matches:e,...i}){let r=Ar(),{manifest:o,routeModules:c}=F0(),{basename:h}=H0(),{loaderData:m,matches:p}=CA(),g=F.useMemo(()=>Yv(n,e,p,o,r,"data"),[n,e,p,o,r]),E=F.useMemo(()=>Yv(n,e,p,o,r,"assets"),[n,e,p,o,r]),T=F.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let z=new Set,K=!1;if(e.forEach(q=>{let B=o.routes[q.route.id];!B||!B.hasLoader||(!g.some(P=>P.route.id===q.route.id)&&q.route.id in m&&c[q.route.id]?.shouldRevalidate||B.hasClientLoader?K=!0:z.add(q.route.id))}),z.size===0)return[];let j=EA(n,h,"data");return K&&z.size>0&&j.searchParams.set("_routes",e.filter(q=>z.has(q.route.id)).map(q=>q.route.id).join(",")),[j.pathname+j.search]},[h,m,r,o,g,e,n,c]),w=F.useMemo(()=>wA(E,o),[E,o]),k=DA(E);return F.createElement(F.Fragment,null,T.map(z=>F.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...i})),w.map(z=>F.createElement("link",{key:z,rel:"modulepreload",href:z,...i})),k.map(({key:z,link:K})=>F.createElement("link",{key:z,nonce:i.nonce,...K})))}function kA(...n){return e=>{n.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var G0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{G0&&(window.__reactRouterVersion="7.9.4")}catch{}function MA({basename:n,children:e,window:i}){let r=F.useRef();r.current==null&&(r.current=Ew({window:i,v5Compat:!0}));let o=r.current,[c,h]=F.useState({action:o.action,location:o.location}),m=F.useCallback(p=>{F.startTransition(()=>h(p))},[h]);return F.useLayoutEffect(()=>o.listen(m),[o,m]),F.createElement(uA,{basename:n,children:e,location:c.location,navigationType:c.action,navigator:o})}var K0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,di=F.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:o,reloadDocument:c,replace:h,state:m,target:p,to:g,preventScrollReset:E,viewTransition:T,...w},k){let{basename:z}=F.useContext(hi),K=typeof g=="string"&&K0.test(g),j,q=!1;if(typeof g=="string"&&K&&(j=g,G0))try{let R=new URL(window.location.href),I=g.startsWith("//")?new URL(R.protocol+g):new URL(g),D=bs(I.pathname,z);I.origin===R.origin&&D!=null?g=D+I.search+I.hash:q=!0}catch{li(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=Qw(g,{relative:o}),[P,se,ae]=NA(r,w),ue=PA(g,{replace:h,state:m,target:p,preventScrollReset:E,relative:o,viewTransition:T});function C(R){e&&e(R),R.defaultPrevented||ue(R)}let x=F.createElement("a",{...w,...ae,href:j||B,onClick:q||c?e:C,ref:kA(k,se),target:p,"data-discover":!K&&i==="render"?"true":void 0});return P&&!K?F.createElement(F.Fragment,null,x,F.createElement(IA,{page:B})):x});di.displayName="Link";var VA=F.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:o=!1,style:c,to:h,viewTransition:m,children:p,...g},E){let T=ac(h,{relative:g.relative}),w=Ar(),k=F.useContext(qh),{navigator:z,basename:K}=F.useContext(hi),j=k!=null&&HA(T)&&m===!0,q=z.encodeLocation?z.encodeLocation(T).pathname:T.pathname,B=w.pathname,P=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;i||(B=B.toLowerCase(),P=P?P.toLowerCase():null,q=q.toLowerCase()),P&&K&&(P=bs(P,K)||P);const se=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let ae=B===q||!o&&B.startsWith(q)&&B.charAt(se)==="/",ue=P!=null&&(P===q||!o&&P.startsWith(q)&&P.charAt(q.length)==="/"),C={isActive:ae,isPending:ue,isTransitioning:j},x=ae?e:void 0,R;typeof r=="function"?R=r(C):R=[r,ae?"active":null,ue?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let I=typeof c=="function"?c(C):c;return F.createElement(di,{...g,"aria-current":x,className:R,ref:E,style:I,to:h,viewTransition:m},typeof p=="function"?p(C):p)});VA.displayName="NavLink";var jA=F.forwardRef(({discover:n="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:o,state:c,method:h=rh,action:m,onSubmit:p,relative:g,preventScrollReset:E,viewTransition:T,...w},k)=>{let z=BA(),K=qA(m,{relative:g}),j=h.toLowerCase()==="get"?"get":"post",q=typeof m=="string"&&K0.test(m),B=P=>{if(p&&p(P),P.defaultPrevented)return;P.preventDefault();let se=P.nativeEvent.submitter,ae=se?.getAttribute("formmethod")||h;z(se||P.currentTarget,{fetcherKey:e,method:ae,navigate:i,replace:o,state:c,relative:g,preventScrollReset:E,viewTransition:T})};return F.createElement("form",{ref:k,method:j,action:K,onSubmit:r?p:B,...w,"data-discover":!q&&n==="render"?"true":void 0})});jA.displayName="Form";function LA(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Q0(n){let e=F.useContext(wo);return ut(e,LA(n)),e}function PA(n,{target:e,replace:i,state:r,preventScrollReset:o,relative:c,viewTransition:h}={}){let m=an(),p=Ar(),g=ac(n,{relative:c});return F.useCallback(E=>{if(gA(E,e)){E.preventDefault();let T=i!==void 0?i:$l(p)===$l(g);m(n,{replace:T,state:r,preventScrollReset:o,relative:c,viewTransition:h})}},[p,m,g,i,r,e,n,o,c,h])}var UA=0,zA=()=>`__${String(++UA)}__`;function BA(){let{router:n}=Q0("useSubmit"),{basename:e}=F.useContext(hi),i=rA();return F.useCallback(async(r,o={})=>{let{action:c,method:h,encType:m,formData:p,body:g}=vA(r,e);if(o.navigate===!1){let E=o.fetcherKey||zA();await n.fetch(E,i,o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||h,formEncType:o.encType||m,flushSync:o.flushSync})}else await n.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||h,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,i])}function qA(n,{relative:e}={}){let{basename:i}=F.useContext(hi),r=F.useContext(fi);ut(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),c={...ac(n||".",{relative:e})},h=Ar();if(n==null){c.search=h.search;let m=new URLSearchParams(c.search),p=m.getAll("index");if(p.some(E=>E==="")){m.delete("index"),p.filter(T=>T).forEach(T=>m.append("index",T));let E=m.toString();c.search=E?`?${E}`:""}}return(!n||n===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:_s([i,c.pathname])),$l(c)}function HA(n,{relative:e}={}){let i=F.useContext(P0);ut(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Q0("useViewTransitionState"),o=ac(n,{relative:e});if(!i.isTransitioning)return!1;let c=bs(i.currentLocation.pathname,r)||i.currentLocation.pathname,h=bs(i.nextLocation.pathname,r)||i.nextLocation.pathname;return _h(o.pathname,h)!=null||_h(o.pathname,c)!=null}const FA="/assets/hero-bg1-Dbq6NROQ.jpg",GA="/assets/kwek-kwek-lhXCGovP.jpg",KA="/assets/betamax-DrPmkB4m.jpg",QA="/assets/isaw-DRLqUlnD.png",YA="/assets/barbecue-DrG29f52.png",$A="/assets/MLs-CRaISRRB.png",XA="/assets/redtak-BtFVg1hw.png",WA="/assets/globe-B9_H1mNg.png",JA=()=>{const n=_n.c(38),[e,i]=F.useState(""),r=an();let o;n[0]!==r||n[1]!==e?(o=()=>{e.trim()!==""&&r(`/search/${e}`)},n[0]=r,n[1]=e,n[2]=o):o=n[2];const c=o;let h;n[3]!==r?(h=he=>{r(`/search/${he}`)},n[3]=r,n[4]=h):h=n[4];const m=h;let p;n[5]===Symbol.for("react.memo_cache_sentinel")?(p=[{name:"Isaw",image:QA},{name:"Barbecue",image:YA},{name:"Kwek-Kwek",image:GA},{name:"Betamax",image:KA}],n[5]=p):p=n[5];const g=p;let E;n[6]===Symbol.for("react.memo_cache_sentinel")?(E=[{name:"takoyaki",trending:!0},{name:"Turon",trending:!0},{name:"Tokwa",recent:!0},{name:"Lumpia",trending:!0}],n[6]=E):E=n[6];const T=E;let w;n[7]===Symbol.for("react.memo_cache_sentinel")?(w=[{name:"Mang Larry's - Dahlia",distance:"0.7km",rating:4.1,image:$A},{name:"RedTak - Quiapo",distance:"5.3km",rating:4.7,image:XA},{name:"Globe Lumpia - Raon",distance:"5.1km",rating:4.3,image:WA}],n[7]=w):w=n[7];const k=w,[z,K]=F.useState("home");let j;n[8]===Symbol.for("react.memo_cache_sentinel")?(j=[{id:"home",label:"Home",path:"/"},{id:"maps",label:"Maps",path:"/maps"},{id:"favorites",label:"Favorites",path:"/favorites"},{id:"profile",label:"Profile",path:"/profile"}],n[8]=j):j=n[8];const q=j;let B;n[9]===Symbol.for("react.memo_cache_sentinel")?(B={homePage:{fontFamily:"Arial, sans-serif",paddingBottom:"80px",maxWidth:"100vw",margin:"0",backgroundColor:"#f5f5f5",boxShadow:"none",transition:"all 0.3s ease",overflow:"hidden"},heroSection:{backgroundImage:`url(${FA})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",minHeight:"420px",position:"relative",overflow:"hidden"},heroOverlay:{position:"absolute",inset:0,backgroundColor:"rgba(0, 0, 0, 0.4)",zIndex:10},header:{position:"relative",zIndex:20,display:"flex",justifyContent:"flex-end",alignItems:"center",padding:"12px 16px"},searchSection:{position:"relative",zIndex:20,padding:"0 20px",marginTop:"20px"},logo:{fontSize:"42px",fontWeight:"bold",color:"white",marginBottom:"50px"},searchTitle:{fontSize:"22px",color:"white",fontWeight:"500",marginBottom:"20px"},searchBarContainer:{display:"flex",gap:"8px",marginBottom:"20px",maxWidth:"100%"},searchInputWrapper:{flex:1,backgroundColor:"white",borderRadius:"24px",display:"flex",alignItems:"center",padding:"10px 14px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.15)"},searchIcon:{width:"18px",height:"18px",color:"#9ca3af",marginRight:"10px"},searchInput:{flex:1,border:"none",outline:"none",fontSize:"15px",color:"#374151"},searchButton:{width:"44px",height:"44px",backgroundColor:"#dc2626",borderRadius:"50%",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"22px",boxShadow:"0 2px 8px rgba(220, 38, 38, 0.4)"},mainContent:{backgroundColor:"white",borderRadius:"20px 20px 0 0",marginTop:"-20px",position:"relative",zIndex:30,padding:"24px 20px"},categoryList:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"12px",marginBottom:"24px",maxWidth:"100%"},categoryItem:{display:"flex",flexDirection:"column",alignItems:"center",background:"none",border:"none",cursor:"pointer",padding:"8px 4px"},categoryIcon:{width:"56px",height:"56px",backgroundColor:"#f3f4f6",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",marginBottom:"6px",transition:"background-color 0.3s",overflow:"hidden"},categoryImage:{width:"100%",height:"100%",borderRadius:"50%",objectFit:"cover"},categoryName:{fontSize:"11px",color:"#374151",textAlign:"center"},tagCloud:{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"24px"},tagButton:{padding:"8px 14px",backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"20px",display:"flex",alignItems:"center",gap:"6px",cursor:"pointer",fontSize:"13px"},recommendedSection:{marginBottom:"20px"},recommendedTitle:{fontSize:"18px",fontWeight:"bold",color:"#111827",marginBottom:"14px"},recommendedList:{display:"grid",gridTemplateColumns:"1fr",gap:"12px"},placeCard:{display:"flex",alignItems:"center",gap:"12px",padding:"10px",backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"12px",cursor:"pointer",transition:"box-shadow 0.3s"},placeImage:{width:"80px",height:"80px",background:"linear-gradient(to bottom right, #fee2e2, #fed7aa)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px",flexShrink:0,overflow:"hidden"},placeLogo:{width:"100%",height:"100%",objectFit:"cover"},placeInfo:{flex:1},placeName:{fontWeight:"600",color:"#111827",marginBottom:"4px",fontSize:"14px"},placeDetails:{display:"flex",alignItems:"center",gap:"10px"},placeDistance:{fontSize:"13px",color:"#6b7280"},placeRating:{display:"flex",alignItems:"center",gap:"3px"},ratingValue:{fontWeight:"600",color:"#111827",fontSize:"13px"},bottomNav:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"white",borderTop:"1px solid #e5e7eb",padding:"8px 16px 12px",zIndex:40,boxShadow:"0 -2px 10px rgba(0, 0, 0, 0.05)"},navContainer:{display:"flex",justifyContent:"space-around",alignItems:"center",maxWidth:"100%",margin:"0 auto",padding:"0"},navItem:{display:"flex",flexDirection:"column",alignItems:"center",gap:"3px",background:"none",border:"none",cursor:"pointer",padding:"4px 12px",minWidth:"60px",transition:"all 0.3s",borderRadius:"8px",textDecoration:"none"}},n[9]=B):B=n[9];const P=B;let se;n[10]===Symbol.for("react.memo_cache_sentinel")?(se=y.jsx("div",{style:P.heroOverlay}),n[10]=se):se=n[10];let ae,ue;n[11]===Symbol.for("react.memo_cache_sentinel")?(ae=y.jsx("h1",{style:P.logo,children:"StreetBites"}),ue=y.jsx("p",{style:P.searchTitle,children:"Looking for a place?"}),n[11]=ae,n[12]=ue):(ae=n[11],ue=n[12]);let C;n[13]===Symbol.for("react.memo_cache_sentinel")?(C=y.jsx("svg",{style:P.searchIcon,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),n[13]=C):C=n[13];let x;n[14]===Symbol.for("react.memo_cache_sentinel")?(x=he=>i(he.target.value),n[14]=x):x=n[14];let R;n[15]!==c?(R=he=>{he.key==="Enter"&&c()},n[15]=c,n[16]=R):R=n[16];let I;n[17]!==e||n[18]!==R?(I=y.jsxs("div",{style:P.searchInputWrapper,children:[C,y.jsx("input",{type:"text",style:P.searchInput,placeholder:"Search",value:e,onChange:x,onKeyDown:R})]}),n[17]=e,n[18]=R,n[19]=I):I=n[19];let D;n[20]!==c?(D=y.jsx("button",{style:P.searchButton,onClick:c,children:"›"}),n[20]=c,n[21]=D):D=n[21];let V;n[22]!==I||n[23]!==D?(V=y.jsxs("div",{style:P.heroSection,children:[se,y.jsxs("div",{style:P.searchSection,children:[ae,ue,y.jsxs("div",{style:P.searchBarContainer,children:[I,D]})]})]}),n[22]=I,n[23]=D,n[24]=V):V=n[24];let N;n[25]!==m?(N=y.jsx("div",{style:P.categoryList,children:g.map((he,M)=>y.jsxs("button",{style:P.categoryItem,onClick:()=>m(he.name),children:[y.jsx("div",{style:P.categoryIcon,children:he.image?y.jsx("img",{src:he.image,alt:he.name,style:P.categoryImage}):he.icon}),y.jsx("div",{style:P.categoryName,children:he.name})]},M))}),n[25]=m,n[26]=N):N=n[26];let _e;n[27]===Symbol.for("react.memo_cache_sentinel")?(_e=y.jsx("div",{style:P.tagCloud,children:T.map((he,M)=>y.jsxs("button",{style:P.tagButton,children:[he.recent&&y.jsx("svg",{style:{width:"14px",height:"14px",color:"#6b7280"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),y.jsx("span",{children:he.name}),he.trending&&y.jsx("svg",{style:{width:"14px",height:"14px",color:"#dc2626"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})]},M))}),n[27]=_e):_e=n[27];let Ne;n[28]===Symbol.for("react.memo_cache_sentinel")?(Ne=y.jsx("h2",{style:P.recommendedTitle,children:"Recommended"}),n[28]=Ne):Ne=n[28];let Y;n[29]===Symbol.for("react.memo_cache_sentinel")?(Y=y.jsxs("div",{style:P.recommendedSection,children:[Ne,y.jsx("div",{style:P.recommendedList,children:k.map((he,M)=>y.jsxs("div",{style:P.placeCard,children:[y.jsx("div",{style:P.placeImage,children:y.jsx("img",{src:he.image,alt:he.name,style:P.placeLogo})}),y.jsxs("div",{style:P.placeInfo,children:[y.jsx("div",{style:P.placeName,children:he.name}),y.jsxs("div",{style:P.placeDetails,children:[y.jsx("span",{style:P.placeDistance,children:he.distance}),y.jsxs("div",{style:P.placeRating,children:[y.jsx("svg",{style:{width:"14px",height:"14px",color:"#fbbf24",fill:"#fbbf24"},viewBox:"0 0 24 24",children:y.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),y.jsx("span",{style:P.ratingValue,children:he.rating})]})]})]})]},M))})]}),n[29]=Y):Y=n[29];let re;n[30]!==N?(re=y.jsxs("main",{style:P.mainContent,children:[N,_e,Y]}),n[30]=N,n[31]=re):re=n[31];let ce;n[32]!==z?(ce=y.jsx("div",{style:P.bottomNav,children:y.jsx("div",{style:P.navContainer,children:q.map(he=>y.jsxs(di,{to:he.path,style:{...P.navItem,color:z===he.id?"#dc2626":"#6b7280"},onClick:()=>K(he.id),children:[y.jsxs("svg",{style:{width:"22px",height:"22px"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[he.id==="home"&&y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}),he.id==="maps"&&y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"}),he.id==="favorites"&&y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}),he.id==="profile"&&y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})]}),y.jsx("span",{style:{fontSize:"11px",fontWeight:"500"},children:he.label})]},he.id))})}),n[32]=z,n[33]=ce):ce=n[33];let pe;return n[34]!==V||n[35]!==re||n[36]!==ce?(pe=y.jsxs("div",{style:P.homePage,children:[V,re,ce]}),n[34]=V,n[35]=re,n[36]=ce,n[37]=pe):pe=n[37],pe},ZA=()=>{const n=_n.c(20),[e,i]=F.useState("profile"),r=an();let o;n[0]!==r?(o=()=>{localStorage.removeItem("user"),sessionStorage.clear(),r("/login")},n[0]=r,n[1]=o):o=n[1];const c=o;let h;n[2]===Symbol.for("react.memo_cache_sentinel")?(h=[{id:"home",label:"Home",path:"/"},{id:"maps",label:"Maps",path:"/maps"},{id:"favorites",label:"Favorites",path:"/favorites"},{id:"profile",label:"Profile",path:"/profile"}],n[2]=h):h=n[2];const m=h;let p;n[3]===Symbol.for("react.memo_cache_sentinel")?(p=[{label:"Account",path:"/account"},{label:"Language",path:"/language"},{label:"Email settings",path:"/email-settings"},{label:"Security",path:"/security"}],n[3]=p):p=n[3];const g=p;let E;n[4]===Symbol.for("react.memo_cache_sentinel")?(E=[{label:"FAQ",path:"/faq",external:!0},{label:"Terms of Service",path:"/terms-of-service",external:!1},{label:"Privacy Policy",path:"/privacy-policy",external:!1}],n[4]=E):E=n[4];const T=E;let w;n[5]===Symbol.for("react.memo_cache_sentinel")?(w={position:"fixed",bottom:0,left:0,right:0,backgroundColor:"white",borderTop:"1px solid #e5e7eb",padding:"8px 16px 12px",zIndex:40,boxShadow:"0 -2px 10px rgba(0, 0, 0, 0.05)",maxWidth:"100%"},n[5]=w):w=n[5];const k=w;let z;n[6]===Symbol.for("react.memo_cache_sentinel")?(z={display:"flex",justifyContent:"space-around",alignItems:"center",maxWidth:"100%",margin:"0 auto",padding:"0"},n[6]=z):z=n[6];const K=z;let j;n[7]===Symbol.for("react.memo_cache_sentinel")?(j={display:"flex",flexDirection:"column",alignItems:"center",gap:"3px",background:"none",border:"none",cursor:"pointer",padding:"4px 12px",minWidth:"60px",transition:"all 0.3s",borderRadius:"8px",textDecoration:"none"},n[7]=j):j=n[7];const q=j;let B;n[8]===Symbol.for("react.memo_cache_sentinel")?(B=y.jsx("header",{className:"profile-header"}),n[8]=B):B=n[8];let P;n[9]===Symbol.for("react.memo_cache_sentinel")?(P=y.jsx("img",{src:"https://placehold.co/60x60/F9A8D4/A90C6B?text=JD",alt:"Juan Dela Cruz",className:"profile-picture"}),n[9]=P):P=n[9];let se;n[10]===Symbol.for("react.memo_cache_sentinel")?(se=y.jsxs("section",{className:"user-info-section",children:[P,y.jsxs("div",{className:"user-details",children:[y.jsx("span",{className:"user-name",children:"Juan Dela Cruz"}),y.jsx("span",{className:"user-handle",children:"@JD.CRUZ"})]}),y.jsx("span",{className:"arrow-icon",children:">"})]}),n[10]=se):se=n[10];let ae;n[11]===Symbol.for("react.memo_cache_sentinel")?(ae=y.jsx("nav",{className:"settings-list",children:g.map(e2)}),n[11]=ae):ae=n[11];let ue;n[12]===Symbol.for("react.memo_cache_sentinel")?(ue=y.jsx("nav",{className:"info-list",children:T.map(t2)}),n[12]=ue):ue=n[12];let C;n[13]!==c?(C=y.jsxs("div",{className:"profile-container",children:[B,se,ae,ue,y.jsx("button",{className:"logout-button",onClick:c,children:"Logout"})]}),n[13]=c,n[14]=C):C=n[14];let x;n[15]!==e?(x=y.jsx("div",{style:k,children:y.jsx("div",{style:K,children:m.map(I=>y.jsxs(di,{to:I.path,style:{...q,color:e===I.id?"#dc2626":"#6b7280"},onClick:()=>i(I.id),children:[y.jsxs("svg",{style:{width:"22px",height:"22px"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[I.id==="home"&&y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}),I.id==="maps"&&y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"}),I.id==="favorites"&&y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}),I.id==="profile"&&y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})]}),y.jsx("span",{style:{fontSize:"11px",fontWeight:"500"},children:I.label})]},I.id))})}),n[15]=e,n[16]=x):x=n[16];let R;return n[17]!==C||n[18]!==x?(R=y.jsxs("div",{className:"profile-page-background",children:[C,x]}),n[17]=C,n[18]=x,n[19]=R):R=n[19],R};function e2(n,e){return y.jsxs(di,{to:n.path,className:"settings-item",children:[y.jsx("span",{children:n.label}),y.jsx("span",{className:"arrow-icon",children:">"})]},e)}function t2(n,e){return y.jsxs(di,{to:n.path,className:"info-item",children:[y.jsx("span",{children:n.label}),y.jsx("span",{className:"external-link-icon",children:"↗"})]},e)}const n2=()=>{const{query:n}=$w(),e=an(),[i,r]=F.useState([]),[o,c]=F.useState(!0),[h,m]=F.useState(null);return F.useEffect(()=>{(async()=>{c(!0),m(null);try{const g=await fetch(`/api/search?query=${n}`);if(!g.ok)throw new Error("Failed to fetch search results");const E=await g.json();r(E)}catch(g){console.error("Error fetching search results:",g),m("Failed to load search results. Please try again.")}finally{c(!1)}})()},[n]),y.jsxs("div",{className:"search-results-page",children:[y.jsxs("header",{className:"search-header",children:[y.jsx("button",{onClick:()=>e(-1),className:"back-button",children:y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:y.jsx("polyline",{points:"15 18 9 12 15 6"})})}),y.jsx("h1",{className:"search-title",children:n})]}),y.jsxs("main",{className:"search-content",children:[o&&y.jsxs("p",{className:"loading-message",children:['Loading results for "',n,'"...']}),h&&y.jsx("p",{className:"error-message",children:h}),!o&&!h&&i.length===0&&y.jsxs("p",{className:"no-results-message",children:['No results found for "',n,'".']}),!o&&!h&&i.length>0&&y.jsx("div",{className:"results-list",children:i.map(p=>y.jsxs("div",{className:"result-card",children:[y.jsx("img",{src:p.image,alt:p.name,className:"result-image"}),y.jsxs("div",{className:"result-details",children:[y.jsx("h2",{className:"result-name",children:p.name}),y.jsxs("div",{className:"result-meta",children:[y.jsx("span",{className:"result-distance",children:p.distance}),y.jsxs("span",{className:"result-rating",children:[y.jsx("svg",{viewBox:"0 0 24 24",className:"star-icon",children:y.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),p.rating]})]})]})]},p.id))})]})]})},i2=()=>{const[n,e]=F.useState("maps"),i=F.useRef(null),[r,o]=F.useState(null),[c,h]=F.useState(null),[m,p]=F.useState(null),[g,E]=F.useState(null),[T,w]=F.useState(!1),k="AIzaSyAZ9U8zQf_jssNXF0FtBQBp_q8ttV0yRVI";F.useEffect(()=>{if(window.google)z();else{const P=document.createElement("script");P.src=`https://maps.googleapis.com/maps/api/js?key=${k}`,P.async=!0,P.defer=!0,P.onload=()=>{z()},document.head.appendChild(P)}},[]);const z=()=>{if(i.current){const P={lat:14.5764,lng:121.0237},se=new window.google.maps.Map(i.current,{zoom:15,center:P,mapTypeControl:!0,fullscreenControl:!0,streetViewControl:!1,zoomControl:!0,mapTypeId:"roadmap"});o(se)}},K=()=>{if(!navigator.geolocation){p("Geolocation is not supported by your browser"),alert("Geolocation is not supported by your browser");return}w(!0),p("Getting your location..."),navigator.geolocation.getCurrentPosition(P=>{const{latitude:se,longitude:ae,accuracy:ue}=P.coords,C={lat:se,lng:ae};if(h(C),p(null),w(!1),console.log(`Location found: ${se}, ${ae}`),console.log(`Accuracy: ±${Math.round(ue)} meters`),r){r.setCenter(C),r.setZoom(18),g&&(g.setMap(null),g.accuracyCircle&&g.accuracyCircle.setMap(null));const x=new window.google.maps.Marker({position:C,map:r,title:`Your Location (±${Math.round(ue)}m)`,animation:window.google.maps.Animation.DROP,icon:{path:window.google.maps.SymbolPath.CIRCLE,scale:10,fillColor:"#4285F4",fillOpacity:1,strokeColor:"#ffffff",strokeWeight:3}}),R=new window.google.maps.Circle({map:r,center:C,radius:ue,fillOpacity:0,strokeOpacity:0});x.accuracyCircle=R,E(x);const I=new window.google.maps.InfoWindow({content:`<div style="padding: 8px;">
              <strong>Your Location</strong><br/>
              <small>Accuracy: ±${Math.round(ue)}m</small>
            </div>`});x.addListener("click",()=>{I.open(r,x)})}},P=>{w(!1);let se="Unable to retrieve your location";switch(P.code){case P.PERMISSION_DENIED:se="Location permission denied. Please enable location access in your browser settings.";break;case P.POSITION_UNAVAILABLE:se="Location information unavailable. Make sure location services are enabled.";break;case P.TIMEOUT:se="Location request timed out. Please try again.";break;default:se="An unknown error occurred while getting your location."}p(se),alert(se)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})},j=()=>{g&&(g.setMap(null),g.accuracyCircle&&g.accuracyCircle.setMap(null),E(null),h(null),p(null))},q=[{id:"home",label:"Home",path:"/"},{id:"maps",label:"Maps",path:"/maps"},{id:"favorites",label:"Favorites",path:"/favorites"},{id:"profile",label:"Profile",path:"/profile"}],B={mapsPage:{fontFamily:"Arial, sans-serif",display:"flex",flexDirection:"column",height:"100vh",width:"100%",backgroundColor:"#f5f5f5",overflow:"hidden"},header:{position:"relative",zIndex:20,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 16px",backgroundColor:"white",borderBottom:"1px solid #e5e7eb"},headerLeft:{display:"flex",alignItems:"center",gap:"12px"},breadcrumb:{color:"#9ca3af",fontSize:"14px",fontWeight:"500"},mapContainer:{flex:1,width:"100%",position:"relative",zIndex:10},mapElement:{width:"100%",height:"100%"},locationButton:{position:"absolute",bottom:"100px",left:"16px",width:"56px",height:"56px",backgroundColor:"white",borderRadius:"50%",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",zIndex:30,transition:"all 0.3s",opacity:T?.6:1},removeButton:{position:"absolute",bottom:"170px",left:"16px",width:"56px",height:"56px",backgroundColor:"#dc2626",borderRadius:"50%",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(220, 38, 38, 0.3)",zIndex:30,transition:"all 0.3s"},bottomNav:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"white",borderTop:"1px solid #e5e7eb",padding:"8px 16px 12px",zIndex:40,boxShadow:"0 -2px 10px rgba(0, 0, 0, 0.05)"},navContainer:{display:"flex",justifyContent:"space-around",alignItems:"center",maxWidth:"100%",margin:"0 auto",padding:"0"},navItem:{display:"flex",flexDirection:"column",alignItems:"center",gap:"3px",background:"none",border:"none",cursor:"pointer",padding:"4px 12px",minWidth:"60px",transition:"all 0.3s",borderRadius:"8px",textDecoration:"none",color:"#6b7280"},navItemActive:{color:"#dc2626"},statusBadge:{position:"absolute",top:"80px",left:"50%",transform:"translateX(-50%)",backgroundColor:"rgba(0, 0, 0, 0.75)",color:"white",padding:"8px 16px",borderRadius:"20px",fontSize:"13px",zIndex:25,display:m?"block":"none",maxWidth:"80%",textAlign:"center"}};return y.jsxs("div",{style:B.mapsPage,children:[y.jsxs("div",{style:B.header,children:[y.jsx("div",{style:B.headerLeft,children:y.jsx("span",{style:B.breadcrumb,children:"StreetBites"})}),y.jsx("div",{style:B.headerLeft,children:y.jsx("span",{style:B.breadcrumb,children:"Maps"})})]}),y.jsxs("div",{style:B.mapContainer,children:[y.jsx("div",{ref:i,style:B.mapElement}),m&&T&&y.jsx("div",{style:B.statusBadge,children:m}),g&&y.jsx("button",{style:B.removeButton,onClick:j,title:"Remove location pin",onMouseEnter:P=>P.currentTarget.style.transform="scale(1.1)",onMouseLeave:P=>P.currentTarget.style.transform="scale(1)",children:y.jsx("svg",{style:{width:"28px",height:"28px",color:"white"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M6 18L18 6M6 6l12 12"})})}),y.jsx("button",{style:B.locationButton,onClick:K,title:"Get current location",disabled:T,onMouseEnter:P=>!T&&(P.currentTarget.style.transform="scale(1.1)"),onMouseLeave:P=>P.currentTarget.style.transform="scale(1)",children:y.jsxs("svg",{style:{width:"28px",height:"28px",color:T?"#9ca3af":"#374151"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]})})]}),y.jsx("div",{style:B.bottomNav,children:y.jsx("div",{style:B.navContainer,children:q.map(P=>y.jsxs(di,{to:P.path,style:{...B.navItem,...n===P.id?B.navItemActive:{}},onClick:()=>e(P.id),children:[y.jsxs("svg",{style:{width:"24px",height:"24px"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[P.id==="home"&&y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}),P.id==="maps"&&y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"}),P.id==="favorites"&&y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}),P.id==="profile"&&y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})]}),y.jsx("span",{style:{fontSize:"11px",fontWeight:"500"},children:P.label})]},P.id))})})]})},s2=()=>{const n=_n.c(13),e=an();let i;n[0]!==e?(i=()=>{e("/profile")},n[0]=e,n[1]=i):i=n[1];const r=i;let o;n[2]===Symbol.for("react.memo_cache_sentinel")?(o=y.jsx("span",{className:"header-title",children:"Account"}),n[2]=o):o=n[2];let c;n[3]!==r?(c=y.jsxs("header",{className:"profile-header",children:[o,y.jsx("button",{className:"collapse-button",onClick:r,children:"←"})]}),n[3]=r,n[4]=c):c=n[4];let h;n[5]===Symbol.for("react.memo_cache_sentinel")?(h=y.jsx("h2",{className:"section-title",children:"Account Settings"}),n[5]=h):h=n[5];let m;n[6]===Symbol.for("react.memo_cache_sentinel")?(m=y.jsxs("div",{className:"form-group",children:[y.jsx("label",{className:"form-label",children:"Email Address"}),y.jsx("input",{type:"email",className:"form-input",value:"juan@example.com",readOnly:!0})]}),n[6]=m):m=n[6];let p;n[7]===Symbol.for("react.memo_cache_sentinel")?(p=y.jsxs("div",{className:"form-group",children:[y.jsx("label",{className:"form-label",children:"Display Name"}),y.jsx("input",{type:"text",className:"form-input",defaultValue:"Juan Dela Cruz"})]}),n[7]=p):p=n[7];let g;n[8]===Symbol.for("react.memo_cache_sentinel")?(g=y.jsxs("div",{className:"form-group",children:[y.jsx("label",{className:"form-label",children:"Username"}),y.jsx("input",{type:"text",className:"form-input",defaultValue:"@JD.CRUZ"})]}),n[8]=g):g=n[8];let E;n[9]===Symbol.for("react.memo_cache_sentinel")?(E=y.jsxs("div",{className:"form-group",children:[y.jsx("label",{className:"form-label",children:"Bio"}),y.jsx("textarea",{className:"form-textarea",placeholder:"Tell us about yourself..."})]}),n[9]=E):E=n[9];let T;n[10]===Symbol.for("react.memo_cache_sentinel")?(T=y.jsxs("div",{className:"content-section",children:[h,m,p,g,E,y.jsxs("div",{className:"button-group",children:[y.jsx("button",{className:"btn-primary",children:"Save Changes"}),y.jsx("button",{className:"btn-secondary",children:"Cancel"})]})]}),n[10]=T):T=n[10];let w;return n[11]!==c?(w=y.jsx("div",{className:"profile-page-background",children:y.jsxs("div",{className:"profile-container account-page",children:[c,T]})}),n[11]=c,n[12]=w):w=n[12],w},r2=()=>{const n=_n.c(14),e=an();let i;n[0]!==e?(i=()=>{e("/profile")},n[0]=e,n[1]=i):i=n[1];const r=i;let o;n[2]===Symbol.for("react.memo_cache_sentinel")?(o=y.jsx("span",{className:"header-title",children:"Email Settings"}),n[2]=o):o=n[2];let c;n[3]!==r?(c=y.jsxs("header",{className:"profile-header",children:[o,y.jsx("button",{className:"collapse-button",onClick:r,children:"←"})]}),n[3]=r,n[4]=c):c=n[4];let h;n[5]===Symbol.for("react.memo_cache_sentinel")?(h=y.jsx("h2",{className:"section-title",children:"Email Preferences"}),n[5]=h):h=n[5];let m;n[6]===Symbol.for("react.memo_cache_sentinel")?(m=y.jsxs("div",{className:"toggle-switch",children:[y.jsx("span",{className:"toggle-label",children:"Marketing Emails"}),y.jsx("input",{type:"checkbox",className:"toggle-checkbox",defaultChecked:!0})]}),n[6]=m):m=n[6];let p;n[7]===Symbol.for("react.memo_cache_sentinel")?(p=y.jsxs("div",{className:"toggle-switch",children:[y.jsx("span",{className:"toggle-label",children:"Account Notifications"}),y.jsx("input",{type:"checkbox",className:"toggle-checkbox",defaultChecked:!0})]}),n[7]=p):p=n[7];let g;n[8]===Symbol.for("react.memo_cache_sentinel")?(g=y.jsxs("div",{className:"toggle-switch",children:[y.jsx("span",{className:"toggle-label",children:"Weekly Digest"}),y.jsx("input",{type:"checkbox",className:"toggle-checkbox"})]}),n[8]=g):g=n[8];let E;n[9]===Symbol.for("react.memo_cache_sentinel")?(E=y.jsxs("div",{className:"toggle-switch",children:[y.jsx("span",{className:"toggle-label",children:"Security Alerts"}),y.jsx("input",{type:"checkbox",className:"toggle-checkbox",defaultChecked:!0})]}),n[9]=E):E=n[9];let T;n[10]===Symbol.for("react.memo_cache_sentinel")?(T=y.jsxs("div",{className:"form-group",style:{marginTop:"2rem"},children:[y.jsx("label",{className:"form-label",children:"Primary Email"}),y.jsx("input",{type:"email",className:"form-input",value:"juan@example.com",readOnly:!0})]}),n[10]=T):T=n[10];let w;n[11]===Symbol.for("react.memo_cache_sentinel")?(w=y.jsxs("div",{className:"content-section",children:[h,m,p,g,E,T,y.jsx("div",{className:"button-group",children:y.jsx("button",{className:"btn-primary",children:"Save Preferences"})})]}),n[11]=w):w=n[11];let k;return n[12]!==c?(k=y.jsx("div",{className:"profile-page-background",children:y.jsxs("div",{className:"profile-container email-settings-page",children:[c,w]})}),n[12]=c,n[13]=k):k=n[13],k},a2=()=>{const n=_n.c(8),e=an();let i;n[0]!==e?(i=()=>{e("/profile")},n[0]=e,n[1]=i):i=n[1];const r=i;let o;n[2]===Symbol.for("react.memo_cache_sentinel")?(o=y.jsx("span",{className:"header-title",children:"FAQ"}),n[2]=o):o=n[2];let c;n[3]!==r?(c=y.jsxs("header",{className:"profile-header",children:[o,y.jsx("button",{className:"collapse-button",onClick:r,children:"←"})]}),n[3]=r,n[4]=c):c=n[4];let h;n[5]===Symbol.for("react.memo_cache_sentinel")?(h=y.jsxs("div",{className:"content-section",children:[y.jsx("h2",{className:"section-title",children:"Frequently Asked Questions"}),y.jsxs("details",{children:[y.jsx("summary",{children:"How do I reset my password?"}),y.jsx("p",{children:'Go to the Security section and click "Update Password". Follow the prompts to set a new password.'})]}),y.jsxs("details",{children:[y.jsx("summary",{children:"How do I change my language preference?"}),y.jsx("p",{children:"Visit the Language settings page and select your preferred language from the available options."})]}),y.jsxs("details",{children:[y.jsx("summary",{children:"How do I enable two-factor authentication?"}),y.jsx("p",{children:'Go to Security settings and toggle on "Two-Factor Authentication". Follow the setup instructions.'})]}),y.jsxs("details",{children:[y.jsx("summary",{children:"Can I delete my account?"}),y.jsx("p",{children:"Contact our support team for account deletion requests. Account deletion is permanent and cannot be undone."})]})]}),n[5]=h):h=n[5];let m;return n[6]!==c?(m=y.jsx("div",{className:"profile-page-background",children:y.jsxs("div",{className:"profile-container faq-page",children:[c,h]})}),n[6]=c,n[7]=m):m=n[7],m},o2=()=>{const n=_n.c(8),e=an();let i;n[0]!==e?(i=()=>{e("/profile")},n[0]=e,n[1]=i):i=n[1];const r=i;let o;n[2]===Symbol.for("react.memo_cache_sentinel")?(o=y.jsx("span",{className:"header-title",children:"Privacy Policy"}),n[2]=o):o=n[2];let c;n[3]!==r?(c=y.jsxs("header",{className:"profile-header",children:[o,y.jsx("button",{className:"collapse-button",onClick:r,children:"←"})]}),n[3]=r,n[4]=c):c=n[4];let h;n[5]===Symbol.for("react.memo_cache_sentinel")?(h=y.jsxs("div",{className:"content-section",children:[y.jsx("h2",{className:"section-title",children:"Privacy Policy"}),y.jsx("h3",{children:"1. Information Collection"}),y.jsx("p",{children:"We collect information you provide directly to us, such as when you create an account or update your profile. This includes your name, email address, and other details you choose to share."}),y.jsx("h3",{children:"2. How We Use Information"}),y.jsx("p",{children:"We use the information we collect to:"}),y.jsxs("ul",{children:[y.jsx("li",{children:"Provide, maintain, and improve our services"}),y.jsx("li",{children:"Send you technical notices and support messages"}),y.jsx("li",{children:"Respond to your comments and questions"}),y.jsx("li",{children:"Send marketing communications"})]}),y.jsx("h3",{children:"3. Data Security"}),y.jsx("p",{children:"We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."}),y.jsx("h3",{children:"4. Your Rights"}),y.jsx("p",{children:"You have the right to access, update, or delete your personal information at any time by logging into your account or contacting us."})]}),n[5]=h):h=n[5];let m;return n[6]!==c?(m=y.jsx("div",{className:"profile-page-background",children:y.jsxs("div",{className:"profile-container privacy-page",children:[c,h]})}),n[6]=c,n[7]=m):m=n[7],m},l2=()=>{const n=_n.c(15),e=an();let i;n[0]!==e?(i=()=>{e("/profile")},n[0]=e,n[1]=i):i=n[1];const r=i;let o;n[2]===Symbol.for("react.memo_cache_sentinel")?(o=y.jsx("span",{className:"header-title",children:"Security"}),n[2]=o):o=n[2];let c;n[3]!==r?(c=y.jsxs("header",{className:"profile-header",children:[o,y.jsx("button",{className:"collapse-button",onClick:r,children:"←"})]}),n[3]=r,n[4]=c):c=n[4];let h;n[5]===Symbol.for("react.memo_cache_sentinel")?(h=y.jsx("h2",{className:"section-title",children:"Security Settings"}),n[5]=h):h=n[5];let m;n[6]===Symbol.for("react.memo_cache_sentinel")?(m=y.jsxs("div",{className:"form-group",children:[y.jsx("label",{className:"form-label",children:"Current Password"}),y.jsx("input",{type:"password",className:"form-input",placeholder:"Enter current password"})]}),n[6]=m):m=n[6];let p;n[7]===Symbol.for("react.memo_cache_sentinel")?(p=y.jsxs("div",{className:"form-group",children:[y.jsx("label",{className:"form-label",children:"New Password"}),y.jsx("input",{type:"password",className:"form-input",placeholder:"Enter new password"})]}),n[7]=p):p=n[7];let g,E;n[8]===Symbol.for("react.memo_cache_sentinel")?(g=y.jsxs("div",{className:"form-group",children:[y.jsx("label",{className:"form-label",children:"Confirm Password"}),y.jsx("input",{type:"password",className:"form-input",placeholder:"Confirm new password"})]}),E={marginTop:"2rem",paddingTop:"1.5rem",borderTop:"1px solid #e8e8e8"},n[8]=g,n[9]=E):(g=n[8],E=n[9]);let T;n[10]===Symbol.for("react.memo_cache_sentinel")?(T=y.jsx("h3",{className:"section-title",style:{marginTop:0,marginBottom:"1rem"},children:"Two-Factor Authentication"}),n[10]=T):T=n[10];let w;n[11]===Symbol.for("react.memo_cache_sentinel")?(w=y.jsxs("div",{style:E,children:[T,y.jsxs("div",{className:"toggle-switch",style:{borderBottom:"none"},children:[y.jsx("span",{className:"toggle-label",children:"Enable 2FA"}),y.jsx("input",{type:"checkbox",className:"toggle-checkbox"})]})]}),n[11]=w):w=n[11];let k;n[12]===Symbol.for("react.memo_cache_sentinel")?(k=y.jsxs("div",{className:"content-section",children:[h,m,p,g,w,y.jsxs("div",{className:"button-group",children:[y.jsx("button",{className:"btn-primary",children:"Update Password"}),y.jsx("button",{className:"btn-secondary",children:"Cancel"})]})]}),n[12]=k):k=n[12];let z;return n[13]!==c?(z=y.jsx("div",{className:"profile-page-background",children:y.jsxs("div",{className:"profile-container security-page",children:[c,k]})}),n[13]=c,n[14]=z):z=n[14],z},c2=()=>{const n=_n.c(8),e=an();let i;n[0]!==e?(i=()=>{e("/profile")},n[0]=e,n[1]=i):i=n[1];const r=i;let o;n[2]===Symbol.for("react.memo_cache_sentinel")?(o=y.jsx("span",{className:"header-title",children:"Terms of Service"}),n[2]=o):o=n[2];let c;n[3]!==r?(c=y.jsxs("header",{className:"profile-header",children:[o,y.jsx("button",{className:"collapse-button",onClick:r,children:"←"})]}),n[3]=r,n[4]=c):c=n[4];let h;n[5]===Symbol.for("react.memo_cache_sentinel")?(h=y.jsxs("div",{className:"content-section",children:[y.jsx("h2",{className:"section-title",children:"Terms of Service"}),y.jsx("h3",{children:"1. Agreement to Terms"}),y.jsx("p",{children:"By accessing and using this application, you accept and agree to be bound by the terms and provision of this agreement."}),y.jsx("h3",{children:"2. Use License"}),y.jsx("p",{children:"Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:"}),y.jsxs("ul",{children:[y.jsx("li",{children:"Modify or copy the materials"}),y.jsx("li",{children:"Use the materials for any commercial purpose or for any public display"}),y.jsx("li",{children:"Attempt to decompile or reverse engineer any software contained on the application"}),y.jsx("li",{children:"Remove any copyright or other proprietary notations from the materials"})]}),y.jsx("h3",{children:"3. Disclaimer"}),y.jsx("p",{children:"The materials on our application are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."})]}),n[5]=h):h=n[5];let m;return n[6]!==c?(m=y.jsx("div",{className:"profile-page-background",children:y.jsxs("div",{className:"profile-container terms-page",children:[c,h]})}),n[6]=c,n[7]=m):m=n[7],m},u2=()=>{const n=an(),[e,i]=F.useState(null),[r,o]=F.useState(!0),[c,h]=F.useState(null),[m,p]=F.useState("favorites"),g=[{id:"home",label:"Home",path:"/"},{id:"maps",label:"Maps",path:"/maps"},{id:"favorites",label:"Favorites",path:"/favorites"},{id:"profile",label:"Profile",path:"/profile"}],E={bottomNav:{position:"fixed",bottom:0,left:0,right:0,width:"100%",backgroundColor:"white",borderTop:"1px solid #e5e7eb",padding:"8px 16px 12px",zIndex:40,boxShadow:"0 -2px 10px rgba(0, 0, 0, 0.05)"},navContainer:{display:"flex",justifyContent:"space-around",alignItems:"center",maxWidth:"100%",margin:"0 auto",padding:"0"},navItem:{display:"flex",flexDirection:"column",alignItems:"center",gap:"3px",background:"none",border:"none",cursor:"pointer",padding:"4px 12px",minWidth:"60px",transition:"all 0.3s",borderRadius:"8px",textDecoration:"none"},navLabel:{fontSize:"11px",fontWeight:"500"}};F.useEffect(()=>{(async()=>{o(!0),h(null);try{const k=await fetch("/api/favorites-details");if(!k.ok)throw new Error("Failed to fetch favorites");const z=await k.json();z&&z.length>0?i(z[0]):i(null)}catch(k){console.error("Error fetching favorites:",k),h("Failed to load favorite details. Please try again."),i({id:"1",name:"Fairview 2025",location:"Private room in Mandaluyong",details:"Container Home Mandaluyong | N04(1)",beds:"1 bed",rating:4.7,imageUrl:"https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Favorite+Venue"})}finally{o(!1)}})()},[]);const T=()=>{n(-1)};return y.jsxs("div",{className:"favorites-page-ui",children:[y.jsxs("header",{className:"favorites-header-ui",children:[y.jsx("button",{onClick:T,className:"back-button-ui",children:y.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:y.jsx("polyline",{points:"15 18 9 12 15 6"})})}),y.jsx("div",{className:"header-options-ui",children:y.jsx("span",{children:"⋯"})})]}),y.jsxs("main",{className:"favorites-main-ui",children:[r&&y.jsx("p",{className:"loading-message-ui",children:"Loading favorite..."}),c&&y.jsx("p",{className:"error-message-ui",children:c}),!r&&!c&&e&&y.jsxs(y.Fragment,{children:[y.jsx("h1",{className:"favorites-title-ui",children:e.name}),y.jsxs("div",{className:"action-buttons-ui",children:[y.jsx("button",{className:"date-guests-button-ui",children:"Dates · 2 guests"}),y.jsxs("button",{className:"share-button-ui",children:["Share ",y.jsx("span",{children:"↗"})]})]}),y.jsxs("div",{className:"favorite-image-container-ui",children:[y.jsx("img",{src:e.imageUrl,alt:e.name,className:"favorite-image-ui"}),y.jsx("div",{className:"image-overlay-ui",children:y.jsx("span",{className:"heart-icon-ui",children:"❤"})})]}),y.jsxs("div",{className:"favorite-details-ui",children:[y.jsx("p",{className:"favorite-location-ui",children:e.location}),y.jsxs("p",{className:"favorite-other-details-ui",children:[e.details," · ",e.beds,y.jsxs("span",{className:"rating-ui",children:["★ ",e.rating]})]})]}),y.jsx("div",{className:"add-note-ui",children:"Add note"})]})]}),y.jsx("div",{style:E.bottomNav,children:y.jsx("div",{style:E.navContainer,children:g.map(w=>y.jsxs(di,{to:w.path,style:{...E.navItem,color:m===w.id?"#dc2626":"#6b7280"},onClick:()=>p(w.id),children:[y.jsxs("svg",{style:{width:"22px",height:"22px"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[w.id==="home"&&y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}),w.id==="maps"&&y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"}),w.id==="favorites"&&y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}),w.id==="profile"&&y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})]}),y.jsx("span",{style:E.navLabel,children:w.label})]},w.id))})})]})},Y0=n=>{const e=_n.c(38),{viewMode:i,onBack:r}=n,[o,c]=F.useState(""),[h,m]=F.useState("");let p;e[0]===Symbol.for("react.memo_cache_sentinel")?(p={},e[0]=p):p=e[0];const[g,E]=F.useState(p),T=h2,w=f2;let k;e[1]===Symbol.for("react.memo_cache_sentinel")?(k=pe=>{const he=w(pe.target.value);c(he),T(he)&&E(d2)},e[1]=k):k=e[1];const z=k;let K;e[2]!==o||e[3]!==h?(K=pe=>{if(pe.preventDefault(),!T(o)){E({email:"Please enter a valid email address"});return}E({}),console.log("Admin login attempt:",{email:o,password:h})},e[2]=o,e[3]=h,e[4]=K):K=e[4];const j=K;let q;e[5]!==r?(q=y.jsx("button",{className:"back-btn",onClick:r,children:"← Back"}),e[5]=r,e[6]=q):q=e[6];let B,P,se;e[7]===Symbol.for("react.memo_cache_sentinel")?(B=y.jsx("h1",{className:"logo-title",children:"Admin Login"}),P=y.jsx("p",{className:"logo-subtitle",children:"Access administrator dashboard"}),se=y.jsx("p",{className:"hero-description",children:"Access the core control panel. Monitor site activity, manage user and vendor accounts, and ensure the StreetBites platform remains a high-quality resource for all street food enthusiasts."}),e[7]=B,e[8]=P,e[9]=se):(B=e[7],P=e[8],se=e[9]);let ae;e[10]!==q?(ae=y.jsxs("div",{className:"login-hero",children:[q,B,P,se]}),e[10]=q,e[11]=ae):ae=e[11];let ue;e[12]===Symbol.for("react.memo_cache_sentinel")?(ue=y.jsx("label",{htmlFor:"email",className:"form-label",children:"Email"}),e[12]=ue):ue=e[12];let C;e[13]!==o?(C=y.jsx("input",{type:"email",id:"email",className:"form-input",placeholder:"admin@streetbites.com",value:o,onChange:z,required:!0}),e[13]=o,e[14]=C):C=e[14];let x;e[15]!==g.email?(x=g.email&&y.jsx("span",{className:"error-message",children:g.email}),e[15]=g.email,e[16]=x):x=e[16];let R;e[17]!==C||e[18]!==x?(R=y.jsxs("div",{className:"form-group",children:[ue,C,x]}),e[17]=C,e[18]=x,e[19]=R):R=e[19];let I;e[20]===Symbol.for("react.memo_cache_sentinel")?(I=y.jsx("label",{htmlFor:"password",className:"form-label",children:"Password"}),e[20]=I):I=e[20];let D;e[21]===Symbol.for("react.memo_cache_sentinel")?(D=pe=>m(pe.target.value),e[21]=D):D=e[21];let V;e[22]!==h?(V=y.jsxs("div",{className:"form-group",children:[I,y.jsx("input",{type:"password",id:"password",className:"form-input",placeholder:"Enter your password",value:h,onChange:D,required:!0})]}),e[22]=h,e[23]=V):V=e[23];let N;e[24]===Symbol.for("react.memo_cache_sentinel")?(N=y.jsx("button",{type:"submit",className:"submit-btn",children:"Login as Admin"}),e[24]=N):N=e[24];let _e;e[25]!==j||e[26]!==R||e[27]!==V?(_e=y.jsxs("form",{className:"email-form",onSubmit:j,noValidate:!0,children:[R,V,N]}),e[25]=j,e[26]=R,e[27]=V,e[28]=_e):_e=e[28];let Ne;e[29]===Symbol.for("react.memo_cache_sentinel")?(Ne=y.jsx("div",{className:"signup-section",children:y.jsxs("span",{className:"signup-text",children:["Don't have an account? ",y.jsx("a",{href:"/admin-sign",className:"signup-link",children:"Sign Up"})]})}),e[29]=Ne):Ne=e[29];let Y;e[30]!==_e?(Y=y.jsxs("main",{className:"login-content",children:[_e,Ne]}),e[30]=_e,e[31]=Y):Y=e[31];let re;e[32]!==Y||e[33]!==ae?(re=y.jsxs("div",{className:"login-wrapper",children:[ae,Y]}),e[32]=Y,e[33]=ae,e[34]=re):re=e[34];let ce;return e[35]!==re||e[36]!==i?(ce=y.jsx("div",{className:"login-page","data-view":i,children:re}),e[35]=re,e[36]=i,e[37]=ce):ce=e[37],ce};function h2(n){return/\S+@\S+\.\S+/.test(n)}function f2(n){return n.trim().toLowerCase()}function d2(n){return{...n,email:""}}const m2=()=>{};var $v={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=function(n){const e=[];let i=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},p2=function(n){const e=[];let i=0,r=0;for(;i<n.length;){const o=n[i++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=n[i++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=n[i++],h=n[i++],m=n[i++],p=((o&7)<<18|(c&63)<<12|(h&63)<<6|m&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const c=n[i++],h=n[i++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return e.join("")},X0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const c=n[o],h=o+1<n.length,m=h?n[o+1]:0,p=o+2<n.length,g=p?n[o+2]:0,E=c>>2,T=(c&3)<<4|m>>4;let w=(m&15)<<2|g>>6,k=g&63;p||(k=64,h||(w=64)),r.push(i[E],i[T],i[w],i[k])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):p2(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const c=i[n.charAt(o++)],m=o<n.length?i[n.charAt(o)]:0;++o;const g=o<n.length?i[n.charAt(o)]:64;++o;const T=o<n.length?i[n.charAt(o)]:64;if(++o,c==null||m==null||g==null||T==null)throw new g2;const w=c<<2|m>>4;if(r.push(w),g!==64){const k=m<<4&240|g>>2;if(r.push(k),T!==64){const z=g<<6&192|T;r.push(z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class g2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const y2=function(n){const e=$0(n);return X0.encodeByteArray(e,!0)},vh=function(n){return y2(n).replace(/\./g,"")},W0=function(n){try{return X0.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=()=>_2().__FIREBASE_DEFAULTS__,E2=()=>{if(typeof process>"u"||typeof $v>"u")return;const n=$v.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},b2=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&W0(n[1]);return e&&JSON.parse(e)},Fh=()=>{try{return m2()||v2()||E2()||b2()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},J0=n=>Fh()?.emulatorHosts?.[n],Z0=n=>{const e=J0(n);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),r]:[e.substring(0,i),r]},eE=()=>Fh()?.config,tE=n=>Fh()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _p(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...n};return[vh(JSON.stringify(i)),vh(JSON.stringify(h)),""].join(".")}const ql={};function S2(){const n={prod:[],emulator:[]};for(const e of Object.keys(ql))ql[e]?n.emulator.push(e):n.prod.push(e);return n}function w2(n){let e=document.getElementById(n),i=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),i=!0),{created:i,element:e}}let Xv=!1;function vp(n,e){if(typeof window>"u"||typeof document>"u"||!ma(window.location.host)||ql[n]===e||ql[n]||Xv)return;ql[n]=e;function i(w){return`__firebase__banner__${w}`}const r="__firebase__banner",c=S2().prod.length>0;function h(){const w=document.getElementById(r);w&&w.remove()}function m(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,k){w.setAttribute("width","24"),w.setAttribute("id",k),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Xv=!0,h()},w}function E(w,k){w.setAttribute("id",k),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function T(){const w=w2(r),k=i("text"),z=document.getElementById(k)||document.createElement("span"),K=i("learnmore"),j=document.getElementById(K)||document.createElement("a"),q=i("preprendIcon"),B=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const P=w.element;m(P),E(j,K);const se=g();p(B,q),P.append(B,z,j,se),document.body.appendChild(P)}c?(z.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function A2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function x2(){const n=Fh()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function R2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function C2(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function N2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I2(){const n=en();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function D2(){return!x2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function O2(){try{return typeof indexedDB=="object"}catch{return!1}}function k2(){return new Promise((n,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(i){e(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2="FirebaseError";class $i extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=M2,Object.setPrototypeOf(this,$i.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oc.prototype.create)}}class oc{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},o=`${this.service}/${e}`,c=this.errors[e],h=c?V2(c,r):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new $i(o,m,r)}}function V2(n,e){return n.replace(j2,(i,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const j2=/\{\$([^}]+)}/g;function L2(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function la(n,e){if(n===e)return!0;const i=Object.keys(n),r=Object.keys(e);for(const o of i){if(!r.includes(o))return!1;const c=n[o],h=e[o];if(Wv(c)&&Wv(h)){if(!la(c,h))return!1}else if(c!==h)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function Wv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(n){const e=[];for(const[i,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,c]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(c)}}),e}function Ll(n){const e=n.indexOf("?");if(!e)return"";const i=n.indexOf("#",e);return n.substring(e,i>0?i:void 0)}function P2(n,e){const i=new U2(n,e);return i.subscribe.bind(i)}class U2{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let o;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");z2(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:r},o.next===void 0&&(o.next=Em),o.error===void 0&&(o.error=Em),o.complete===void 0&&(o.complete=Em);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function z2(n,e){if(typeof n!="object"||n===null)return!1;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}function Em(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(n){return n&&n._delegate?n._delegate:n}class _r{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new T2;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){const i=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(H2(e))try{this.getOrInitializeService({instanceIdentifier:ra})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=ra){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ra){return this.instances.has(e)}getOptions(e=ra){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);r===m&&h.resolve(o)}return o}onInit(e,i){const r=this.normalizeInstanceIdentifier(i),o=this.onInitCallbacks.get(r)??new Set;o.add(e),this.onInitCallbacks.set(r,o);const c=this.instances.get(r);return c&&e(c,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:q2(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ra){return this.component?this.component.multipleInstances?e:ra:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function q2(n){return n===ra?void 0:n}function H2(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new B2(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const G2={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},K2=Pe.INFO,Q2={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},Y2=(n,e,...i)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=Q2[e];if(o)console[o](`[${r}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ep{constructor(e){this.name=e,this._logLevel=K2,this._logHandler=Y2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?G2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const $2=(n,e)=>e.some(i=>n instanceof i);let Jv,Zv;function X2(){return Jv||(Jv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function W2(){return Zv||(Zv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iE=new WeakMap,Vm=new WeakMap,sE=new WeakMap,bm=new WeakMap,bp=new WeakMap;function J2(n){const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("success",c),n.removeEventListener("error",h)},c=()=>{i(mr(n.result)),o()},h=()=>{r(n.error),o()};n.addEventListener("success",c),n.addEventListener("error",h)});return e.then(i=>{i instanceof IDBCursor&&iE.set(i,n)}).catch(()=>{}),bp.set(e,n),e}function Z2(n){if(Vm.has(n))return;const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",h),n.removeEventListener("abort",h)},c=()=>{i(),o()},h=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",c),n.addEventListener("error",h),n.addEventListener("abort",h)});Vm.set(n,e)}let jm={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return Vm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||sE.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return mr(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ex(n){jm=n(jm)}function tx(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=n.call(Tm(this),e,...i);return sE.set(r,e.sort?e.sort():[e]),mr(r)}:W2().includes(n)?function(...e){return n.apply(Tm(this),e),mr(iE.get(this))}:function(...e){return mr(n.apply(Tm(this),e))}}function nx(n){return typeof n=="function"?tx(n):(n instanceof IDBTransaction&&Z2(n),$2(n,X2())?new Proxy(n,jm):n)}function mr(n){if(n instanceof IDBRequest)return J2(n);if(bm.has(n))return bm.get(n);const e=nx(n);return e!==n&&(bm.set(n,e),bp.set(e,n)),e}const Tm=n=>bp.get(n);function ix(n,e,{blocked:i,upgrade:r,blocking:o,terminated:c}={}){const h=indexedDB.open(n,e),m=mr(h);return r&&h.addEventListener("upgradeneeded",p=>{r(mr(h.result),p.oldVersion,p.newVersion,mr(h.transaction),p)}),i&&h.addEventListener("blocked",p=>i(p.oldVersion,p.newVersion,p)),m.then(p=>{c&&p.addEventListener("close",()=>c()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const sx=["get","getKey","getAll","getAllKeys","count"],rx=["put","add","delete","clear"],Sm=new Map;function e1(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Sm.get(e))return Sm.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,o=rx.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||sx.includes(i)))return;const c=async function(h,...m){const p=this.transaction(h,o?"readwrite":"readonly");let g=p.store;return r&&(g=g.index(m.shift())),(await Promise.all([g[i](...m),o&&p.done]))[0]};return Sm.set(e,c),c}ex(n=>({...n,get:(e,i,r)=>e1(e,i)||n.get(e,i,r),has:(e,i)=>!!e1(e,i)||n.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(ox(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function ox(n){return n.getComponent()?.type==="VERSION"}const Lm="@firebase/app",t1="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Ep("@firebase/app"),lx="@firebase/app-compat",cx="@firebase/analytics-compat",ux="@firebase/analytics",hx="@firebase/app-check-compat",fx="@firebase/app-check",dx="@firebase/auth",mx="@firebase/auth-compat",px="@firebase/database",gx="@firebase/data-connect",yx="@firebase/database-compat",_x="@firebase/functions",vx="@firebase/functions-compat",Ex="@firebase/installations",bx="@firebase/installations-compat",Tx="@firebase/messaging",Sx="@firebase/messaging-compat",wx="@firebase/performance",Ax="@firebase/performance-compat",xx="@firebase/remote-config",Rx="@firebase/remote-config-compat",Cx="@firebase/storage",Nx="@firebase/storage-compat",Ix="@firebase/firestore",Dx="@firebase/ai",Ox="@firebase/firestore-compat",kx="firebase",Mx="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="[DEFAULT]",Vx={[Lm]:"fire-core",[lx]:"fire-core-compat",[ux]:"fire-analytics",[cx]:"fire-analytics-compat",[fx]:"fire-app-check",[hx]:"fire-app-check-compat",[dx]:"fire-auth",[mx]:"fire-auth-compat",[px]:"fire-rtdb",[gx]:"fire-data-connect",[yx]:"fire-rtdb-compat",[_x]:"fire-fn",[vx]:"fire-fn-compat",[Ex]:"fire-iid",[bx]:"fire-iid-compat",[Tx]:"fire-fcm",[Sx]:"fire-fcm-compat",[wx]:"fire-perf",[Ax]:"fire-perf-compat",[xx]:"fire-rc",[Rx]:"fire-rc-compat",[Cx]:"fire-gcs",[Nx]:"fire-gcs-compat",[Ix]:"fire-fst",[Ox]:"fire-fst-compat",[Dx]:"fire-vertex","fire-js":"fire-js",[kx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=new Map,jx=new Map,Um=new Map;function n1(n,e){try{n.container.addComponent(e)}catch(i){Ts.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,i)}}function ca(n){const e=n.name;if(Um.has(e))return Ts.debug(`There were multiple attempts to register component ${e}.`),!1;Um.set(e,n);for(const i of Eh.values())n1(i,n);for(const i of jx.values())n1(i,n);return!0}function Gh(n,e){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(e)}function Cn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pr=new oc("app","Firebase",Lx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,i,r){this._isDeleted=!1,this._options={...e},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=Mx;function rE(n,e={}){let i=n;typeof e!="object"&&(e={name:e});const r={name:Pm,automaticDataCollectionEnabled:!0,...e},o=r.name;if(typeof o!="string"||!o)throw pr.create("bad-app-name",{appName:String(o)});if(i||(i=eE()),!i)throw pr.create("no-options");const c=Eh.get(o);if(c){if(la(i,c.options)&&la(r,c.config))return c;throw pr.create("duplicate-app",{appName:o})}const h=new F2(o);for(const p of Um.values())h.addComponent(p);const m=new Px(i,r,h);return Eh.set(o,m),m}function Tp(n=Pm){const e=Eh.get(n);if(!e&&n===Pm&&eE())return rE();if(!e)throw pr.create("no-app",{appName:n});return e}function Ui(n,e,i){let r=Vx[n]??n;i&&(r+=`-${i}`);const o=r.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const h=[`Unable to register library "${r}" with version "${e}":`];o&&h.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ts.warn(h.join(" "));return}ca(new _r(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux="firebase-heartbeat-database",zx=1,Xl="firebase-heartbeat-store";let wm=null;function aE(){return wm||(wm=ix(Ux,zx,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xl)}catch(i){console.warn(i)}}}}).catch(n=>{throw pr.create("idb-open",{originalErrorMessage:n.message})})),wm}async function Bx(n){try{const i=(await aE()).transaction(Xl),r=await i.objectStore(Xl).get(oE(n));return await i.done,r}catch(e){if(e instanceof $i)Ts.warn(e.message);else{const i=pr.create("idb-get",{originalErrorMessage:e?.message});Ts.warn(i.message)}}}async function i1(n,e){try{const r=(await aE()).transaction(Xl,"readwrite");await r.objectStore(Xl).put(e,oE(n)),await r.done}catch(i){if(i instanceof $i)Ts.warn(i.message);else{const r=pr.create("idb-set",{originalErrorMessage:i?.message});Ts.warn(r.message)}}}function oE(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=1024,Hx=30;class Fx{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Kx(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=s1();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Hx){const o=Qx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ts.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=s1(),{heartbeatsToSend:i,unsentEntries:r}=Gx(this._heartbeatsCache.heartbeats),o=vh(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ts.warn(e),""}}}function s1(){return new Date().toISOString().substring(0,10)}function Gx(n,e=qx){const i=[];let r=n.slice();for(const o of n){const c=i.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),r1(i)>e){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),r1(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class Kx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return O2()?k2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Bx(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return i1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return i1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function r1(n){return vh(JSON.stringify({version:2,heartbeats:n})).length}function Qx(n){if(n.length===0)return-1;let e=0,i=n[0].date;for(let r=1;r<n.length;r++)n[r].date<i&&(i=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(n){ca(new _r("platform-logger",e=>new ax(e),"PRIVATE")),ca(new _r("heartbeat",e=>new Fx(e),"PRIVATE")),Ui(Lm,t1,n),Ui(Lm,t1,"esm2020"),Ui("fire-js","")}Yx("");function lE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $x=lE,cE=new oc("auth","Firebase",lE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=new Ep("@firebase/auth");function Xx(n,...e){bh.logLevel<=Pe.WARN&&bh.warn(`Auth (${pa}): ${n}`,...e)}function oh(n,...e){bh.logLevel<=Pe.ERROR&&bh.error(`Auth (${pa}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(n,...e){throw Sp(n,...e)}function zi(n,...e){return Sp(n,...e)}function uE(n,e,i){const r={...$x(),[e]:i};return new oc("auth","Firebase",r).create(e,{appName:n.name})}function vs(n){return uE(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sp(n,...e){if(typeof n!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(i,...r)}return cE.create(n,...e)}function Se(n,e,...i){if(!n)throw Sp(e,...i)}function gs(n){const e="INTERNAL ASSERTION FAILED: "+n;throw oh(e),new Error(e)}function Ss(n,e){n||gs(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(){return typeof self<"u"&&self.location?.href||""}function Wx(){return a1()==="http:"||a1()==="https:"}function a1(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wx()||C2()||"connection"in navigator)?navigator.onLine:!0}function Zx(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,i){this.shortDelay=e,this.longDelay=i,Ss(i>e,"Short delay should be less than long delay!"),this.isMobile=A2()||N2()}get(){return Jx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(n,e){Ss(n.emulator,"Emulator should always be set here");const{url:i}=n.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nR=new cc(3e4,6e4);function xr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Rr(n,e,i,r,o={}){return fE(n,o,async()=>{let c={},h={};r&&(e==="GET"?h=r:c={body:JSON.stringify(r)});const m=lc({key:n.config.apiKey,...h}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...c};return R2()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&ma(n.emulatorConfig.host)&&(g.credentials="include"),hE.fetch()(await dE(n,n.config.apiHost,i,m),g)})}async function fE(n,e,i){n._canInitEmulator=!1;const r={...eR,...e};try{const o=new sR(n),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Wu(n,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const m=c.ok?h.errorMessage:h.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wu(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw Wu(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw Wu(n,"user-disabled",h);const E=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw uE(n,E,g);ci(n,E)}}catch(o){if(o instanceof $i)throw o;ci(n,"network-request-failed",{message:String(o)})}}async function uc(n,e,i,r,o={}){const c=await Rr(n,e,i,r,o);return"mfaPendingCredential"in c&&ci(n,"multi-factor-auth-required",{_serverResponse:c}),c}async function dE(n,e,i,r){const o=`${e}${i}?${r}`,c=n,h=c.config.emulator?wp(n.config,o):`${n.config.apiScheme}://${o}`;return tR.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function iR(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(zi(this.auth,"network-request-failed")),nR.get())})}}function Wu(n,e,i){const r={appName:n.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=zi(n,e,r);return o.customData._tokenResponse=i,o}function o1(n){return n!==void 0&&n.enterprise!==void 0}class rR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===e)return iR(i.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function aR(n,e){return Rr(n,"GET","/v2/recaptchaConfig",xr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(n,e){return Rr(n,"POST","/v1/accounts:delete",e)}async function Th(n,e){return Rr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lR(n,e=!1){const i=zt(n),r=await i.getIdToken(e),o=Ap(r);Se(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c?.sign_in_provider;return{claims:o,token:r,authTime:Hl(Am(o.auth_time)),issuedAtTime:Hl(Am(o.iat)),expirationTime:Hl(Am(o.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Am(n){return Number(n)*1e3}function Ap(n){const[e,i,r]=n.split(".");if(e===void 0||i===void 0||r===void 0)return oh("JWT malformed, contained fewer than 3 sections"),null;try{const o=W0(i);return o?JSON.parse(o):(oh("Failed to decode base64 JWT payload"),null)}catch(o){return oh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function l1(n){const e=Ap(n);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wl(n,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof $i&&cR(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function cR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hl(this.lastLoginAt),this.creationTime=Hl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sh(n){const e=n.auth,i=await n.getIdToken(),r=await Wl(n,Th(e,{idToken:i}));Se(r?.users.length,e,"internal-error");const o=r.users[0];n._notifyReloadListener(o);const c=o.providerUserInfo?.length?mE(o.providerUserInfo):[],h=fR(n.providerData,c),m=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!h?.length,g=m?p:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Bm(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(n,E)}async function hR(n){const e=zt(n);await Sh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fR(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function mE(n){return n.map(({providerId:e,...i})=>({providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(n,e){const i=await fE(n,{},async()=>{const r=lc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=n.config,h=await dE(n,o,"/v1/token",`key=${c}`),m=await n._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:r};return n.emulatorConfig&&ma(n.emulatorConfig.host)&&(p.credentials="include"),hE.fetch()(h,p)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function mR(n,e){return Rr(n,"POST","/v2/accounts:revokeToken",xr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):l1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const i=l1(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:o,expiresIn:c}=await dR(e,i);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:o,expirationTime:c}=i,h=new ho;return r&&(Se(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),o&&(Se(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),c&&(Se(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return gs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(n,e){Se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ai{constructor({uid:e,auth:i,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new uR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Bm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const i=await Wl(this,this.stsTokenManager.getToken(this.auth,e));return Se(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return lR(this,e)}reload(){return hR(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>({...i})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new ai({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await Sh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(vs(this.auth));const e=await this.getIdToken();return await Wl(this,oR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){const r=i.displayName??void 0,o=i.email??void 0,c=i.phoneNumber??void 0,h=i.photoURL??void 0,m=i.tenantId??void 0,p=i._redirectEventId??void 0,g=i.createdAt??void 0,E=i.lastLoginAt??void 0,{uid:T,emailVerified:w,isAnonymous:k,providerData:z,stsTokenManager:K}=i;Se(T&&K,e,"internal-error");const j=ho.fromJSON(this.name,K);Se(typeof T=="string",e,"internal-error"),or(r,e.name),or(o,e.name),Se(typeof w=="boolean",e,"internal-error"),Se(typeof k=="boolean",e,"internal-error"),or(c,e.name),or(h,e.name),or(m,e.name),or(p,e.name),or(g,e.name),or(E,e.name);const q=new ai({uid:T,auth:e,email:o,emailVerified:w,displayName:r,isAnonymous:k,photoURL:h,phoneNumber:c,tenantId:m,stsTokenManager:j,createdAt:g,lastLoginAt:E});return z&&Array.isArray(z)&&(q.providerData=z.map(B=>({...B}))),p&&(q._redirectEventId=p),q}static async _fromIdTokenResponse(e,i,r=!1){const o=new ho;o.updateFromServerResponse(i);const c=new ai({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await Sh(c),c}static async _fromGetAccountInfoResponse(e,i,r){const o=i.users[0];Se(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?mE(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!c?.length,m=new ho;m.updateFromIdToken(r);const p=new ai({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Bm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=new Map;function ys(n){Ss(n instanceof Function,"Expected a class definition");let e=c1.get(n);return e?(Ss(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,c1.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}pE.type="NONE";const u1=pE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(n,e,i){return`firebase:${n}:${e}:${i}`}class fo{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=lh(this.userKey,o.apiKey,c),this.fullPersistenceKey=lh("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await Th(this.auth,{idToken:e}).catch(()=>{});return i?ai._fromGetAccountInfoResponse(this.auth,i,e):null}return ai._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new fo(ys(u1),e,r);const o=(await Promise.all(i.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let c=o[0]||ys(u1);const h=lh(r,e.config.apiKey,e.name);let m=null;for(const g of i)try{const E=await g._get(h);if(E){let T;if(typeof E=="string"){const w=await Th(e,{idToken:E}).catch(()=>{});if(!w)break;T=await ai._fromGetAccountInfoResponse(e,w,E)}else T=ai._fromJSON(e,E);g!==c&&(m=T),c=g;break}}catch{}const p=o.filter(g=>g._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new fo(c,e,r):(c=p[0],m&&await c._set(h,m.toJSON()),await Promise.all(i.map(async g=>{if(g!==c)try{await g._remove(h)}catch{}})),new fo(c,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bE(e))return"Blackberry";if(TE(e))return"Webos";if(yE(e))return"Safari";if((e.includes("chrome/")||_E(e))&&!e.includes("edge/"))return"Chrome";if(EE(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(i);if(r?.length===2)return r[1]}return"Other"}function gE(n=en()){return/firefox\//i.test(n)}function yE(n=en()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _E(n=en()){return/crios\//i.test(n)}function vE(n=en()){return/iemobile/i.test(n)}function EE(n=en()){return/android/i.test(n)}function bE(n=en()){return/blackberry/i.test(n)}function TE(n=en()){return/webos/i.test(n)}function xp(n=en()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function pR(n=en()){return xp(n)&&!!window.navigator?.standalone}function gR(){return I2()&&document.documentMode===10}function SE(n=en()){return xp(n)||EE(n)||TE(n)||bE(n)||/windows phone/i.test(n)||vE(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(n,e=[]){let i;switch(n){case"Browser":i=h1(en());break;case"Worker":i=`${h1(en())}-${n}`;break;default:i=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${pa}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=c=>new Promise((h,m)=>{try{const p=e(c);h(p)}catch(p){m(p)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _R(n,e={}){return Rr(n,"GET","/v2/passwordPolicy",xr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=6;class ER{constructor(e){const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??vR,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,i),this.validatePasswordCharacterOptions(e,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(e,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=e.length>=r),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,i,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,i,r,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new f1(this),this.idTokenSubscription=new f1(this),this.beforeStateQueue=new yR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=ys(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await fo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await Th(this,{idToken:e}),r=await ai._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Cn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=r?._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===h)&&m?.user&&(r=m.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(c){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Sh(e)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(vs(this));const i=e?zt(e):null;return i&&Se(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(vs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(vs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ys(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _R(this),i=new ER(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new oc("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await mR(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&ys(e)||this._popupRedirectResolver;Se(i,this,"argument-error"),this.redirectPersistenceManager=await fo.create(this,[ys(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(m,this,"internal-error"),m.then(()=>{h||c(this.currentUser)}),typeof i=="function"){const p=e.addObserver(i,r,o);return()=>{h=!0,p()}}else{const p=e.addObserver(i);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(e["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Xx(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ga(n){return zt(n)}class f1{constructor(e){this.auth=e,this.observer=null,this.addObserver=P2(i=>this.observer=i)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TR(n){Kh=n}function AE(n){return Kh.loadJS(n)}function SR(){return Kh.recaptchaEnterpriseScript}function wR(){return Kh.gapiScript}function AR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class xR{constructor(){this.enterprise=new RR}ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}class RR{ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}const CR="recaptcha-enterprise",xE="NO_RECAPTCHA";class NR{constructor(e){this.type=CR,this.auth=ga(e)}async verify(e="verify",i=!1){async function r(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,m)=>{aR(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const g=new rR(p);return c.tenantId==null?c._agentRecaptchaConfig=g:c._tenantRecaptchaConfigs[c.tenantId]=g,h(g.siteKey)}}).catch(p=>{m(p)})})}function o(c,h,m){const p=window.grecaptcha;o1(p)?p.enterprise.ready(()=>{p.enterprise.execute(c,{action:e}).then(g=>{h(g)}).catch(()=>{h(xE)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xR().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{r(this.auth).then(m=>{if(!i&&o1(window.grecaptcha))o(m,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=SR();p.length!==0&&(p+=m),AE(p).then(()=>{o(m,c,h)}).catch(g=>{h(g)})}}).catch(m=>{h(m)})})}}async function d1(n,e,i,r=!1,o=!1){const c=new NR(n);let h;if(o)h=xE;else try{h=await c.verify(i)}catch{h=await c.verify(i,!0)}const m={...e};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,g=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return r?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function qm(n,e,i,r,o){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await d1(n,e,i,i==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await d1(n,e,i,i==="getOobCode");return r(n,h)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(n,e){const i=Gh(n,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if(la(c,e??{}))return o;ci(o,"already-initialized")}return i.initialize({options:e})}function DR(n,e){const i=e?.persistence||[],r=(Array.isArray(i)?i:[i]).map(ys);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function OR(n,e,i){const r=ga(n);Se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,c=RE(e),{host:h,port:m}=kR(e),p=m===null?"":`:${m}`,g={url:`${c}//${h}${p}/`},E=Object.freeze({host:h,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){Se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Se(la(g,r.config.emulator)&&la(E,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=E,r.settings.appVerificationDisabledForTesting=!0,ma(h)?(_p(`${c}//${h}${p}`),vp("Auth",!0)):MR()}function RE(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function kR(n){const e=RE(n),i=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:m1(r.substr(c.length+1))}}else{const[c,h]=r.split(":");return{host:c,port:m1(h)}}}function m1(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function MR(){function n(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return gs("not implemented")}_getIdTokenResponse(e){return gs("not implemented")}_linkToIdToken(e,i){return gs("not implemented")}_getReauthenticationResolver(e){return gs("not implemented")}}async function VR(n,e){return Rr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR(n,e){return uc(n,"POST","/v1/accounts:signInWithPassword",xr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(n,e){return uc(n,"POST","/v1/accounts:signInWithEmailLink",xr(n,e))}async function PR(n,e){return uc(n,"POST","/v1/accounts:signInWithEmailLink",xr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends Rp{constructor(e,i,r,o=null){super("password",r),this._email=e,this._password=i,this._tenantId=o}static _fromEmailAndPassword(e,i){return new Jl(e,i,"password")}static _fromEmailAndCode(e,i,r=null){return new Jl(e,i,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qm(e,i,"signInWithPassword",jR);case"emailLink":return LR(e,{email:this._email,oobCode:this._password});default:ci(e,"internal-error")}}async _linkToIdToken(e,i){switch(this.signInMethod){case"password":const r={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qm(e,r,"signUpPassword",VR);case"emailLink":return PR(e,{idToken:i,email:this._email,oobCode:this._password});default:ci(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(n,e){return uc(n,"POST","/v1/accounts:signInWithIdp",xr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR="http://localhost";class ua extends Rp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new ua(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):ci("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o,...c}=i;if(!r||!o)return null;const h=new ua(r,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const i=this.buildRequest();return mo(e,i)}_linkToIdToken(e,i){const r=this.buildRequest();return r.idToken=i,mo(e,r)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,mo(e,i)}buildRequest(){const e={requestUri:UR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=lc(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BR(n){const e=jl(Ll(n)).link,i=e?jl(Ll(e)).deep_link_id:null,r=jl(Ll(n)).deep_link_id;return(r?jl(Ll(r)).link:null)||r||i||e||n}class Cp{constructor(e){const i=jl(Ll(e)),r=i.apiKey??null,o=i.oobCode??null,c=zR(i.mode??null);Se(r&&o&&c,"argument-error"),this.apiKey=r,this.operation=c,this.code=o,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(e){const i=BR(e);try{return new Cp(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.providerId=xo.PROVIDER_ID}static credential(e,i){return Jl._fromEmailAndPassword(e,i)}static credentialWithLink(e,i){const r=Cp.parseLink(i);return Se(r,"argument-error"),Jl._fromEmailAndCode(e,r.code,r.tenantId)}}xo.PROVIDER_ID="password";xo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends CE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends hc{constructor(){super("facebook.com")}static credential(e){return ua._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends hc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return ua._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:r}=e;if(!i&&!r)return null;try{return cr.credential(i,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends hc{constructor(){super("github.com")}static credential(e){return ua._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends hc{constructor(){super("twitter.com")}static credential(e,i){return ua._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=e;if(!i||!r)return null;try{return hr.credential(i,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qR(n,e){return uc(n,"POST","/v1/accounts:signUp",xr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,r,o=!1){const c=await ai._fromIdTokenResponse(e,r,o),h=p1(r);return new ha({user:c,providerId:h,_tokenResponse:r,operationType:i})}static async _forOperation(e,i,r){await e._updateTokensIfNecessary(r,!0);const o=p1(r);return new ha({user:e,providerId:o,_tokenResponse:r,operationType:i})}}function p1(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh extends $i{constructor(e,i,r,o){super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,wh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,i,r,o){return new wh(e,i,r,o)}}function NE(n,e,i,r){return(e==="reauthenticate"?i._getReauthenticationResolver(n):i._getIdTokenResponse(n)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?wh._fromErrorAndOperation(n,c,e,r):c})}async function HR(n,e,i=!1){const r=await Wl(n,e._linkToIdToken(n.auth,await n.getIdToken()),i);return ha._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(n,e,i=!1){const{auth:r}=n;if(Cn(r.app))return Promise.reject(vs(r));const o="reauthenticate";try{const c=await Wl(n,NE(r,o,e,n),i);Se(c.idToken,r,"internal-error");const h=Ap(c.idToken);Se(h,r,"internal-error");const{sub:m}=h;return Se(n.uid===m,r,"user-mismatch"),ha._forOperation(n,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&ci(r,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(n,e,i=!1){if(Cn(n.app))return Promise.reject(vs(n));const r="signIn",o=await NE(n,r,e),c=await ha._fromIdTokenResponse(n,r,o);return i||await n._updateCurrentUser(c.user),c}async function GR(n,e){return IE(ga(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE(n){const e=ga(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function KR(n,e,i){if(Cn(n.app))return Promise.reject(vs(n));const r=ga(n),h=await qm(r,{returnSecureToken:!0,email:e,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qR).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&DE(n),p}),m=await ha._fromIdTokenResponse(r,"signIn",h);return await r._updateCurrentUser(m.user),m}function QR(n,e,i){return Cn(n.app)?Promise.reject(vs(n)):GR(zt(n),xo.credential(e,i)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&DE(n),r})}function YR(n,e,i,r){return zt(n).onIdTokenChanged(e,i,r)}function $R(n,e,i){return zt(n).beforeAuthStateChanged(e,i)}function Ju(n){return zt(n).signOut()}const Ah="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Ah,"1"),this.storage.removeItem(Ah),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=1e3,WR=10;class kE extends OE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=SE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&e(i,o,r)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((h,m,p)=>{this.notifyListeners(h,p)});return}const r=e.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!i&&this.localCache[r]===h||this.notifyListeners(r,h)},c=this.storage.getItem(r);gR()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,WR):o()}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:r}),!0)})},XR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}kE.type="LOCAL";const JR=kE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME extends OE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}ME.type="SESSION";const VE=ME;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(o=>o.isListeningto(e));if(i)return i;const r=new Qh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:r,eventType:o,data:c}=i.data,h=this.handlersMap[o];if(!h?.size)return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const m=Array.from(h).map(async g=>g(i.origin,c)),p=await ZR(m);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:p})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(n="",e=10){let i="";for(let r=0;r<e;r++)i+=Math.floor(Math.random()*10);return n+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((m,p)=>{const g=Np("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(T){const w=T;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(E),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(w.data.response);break;default:clearTimeout(E),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(){return window}function tC(n){Bi().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(){return typeof Bi().WorkerGlobalScope<"u"&&typeof Bi().importScripts=="function"}async function nC(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iC(){return navigator?.serviceWorker?.controller||null}function sC(){return jE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="firebaseLocalStorageDb",rC=1,xh="firebaseLocalStorage",PE="fbase_key";class fc{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Yh(n,e){return n.transaction([xh],e?"readwrite":"readonly").objectStore(xh)}function aC(){const n=indexedDB.deleteDatabase(LE);return new fc(n).toPromise()}function Hm(){const n=indexedDB.open(LE,rC);return new Promise((e,i)=>{n.addEventListener("error",()=>{i(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(xh,{keyPath:PE})}catch(o){i(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(xh)?e(r):(r.close(),await aC(),e(await Hm()))})})}async function g1(n,e,i){const r=Yh(n,!0).put({[PE]:e,value:i});return new fc(r).toPromise()}async function oC(n,e){const i=Yh(n,!1).get(e),r=await new fc(i).toPromise();return r===void 0?null:r.value}function y1(n,e){const i=Yh(n,!0).delete(e);return new fc(i).toPromise()}const lC=800,cC=3;class UE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hm(),this.db)}async _withRetries(e){let i=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(i++>cC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qh._getInstance(sC()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await nC(),!this.activeServiceWorker)return;this.sender=new eC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hm();return await g1(e,Ah,"1"),await y1(e,Ah),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>g1(r,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(r=>oC(r,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>y1(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=Yh(o,!1).getAll();return new fc(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}UE.type="LOCAL";const uC=UE;new cc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(n,e){return e?ys(e):(Se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip extends Rp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mo(e,this._buildIdpRequest())}_linkToIdToken(e,i){return mo(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function fC(n){return IE(n.auth,new Ip(n),n.bypassAuthState)}function dC(n){const{auth:e,user:i}=n;return Se(i,e,"internal-error"),FR(i,new Ip(n),n.bypassAuthState)}async function mC(n){const{auth:e,user:i}=n;return Se(i,e,"internal-error"),HR(i,new Ip(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,i,r,o,c=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:r,postBody:o,tenantId:c,error:h,type:m}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:i,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fC;case"linkViaPopup":case"linkViaRedirect":return mC;case"reauthViaPopup":case"reauthViaRedirect":return dC;default:ci(this.auth,"internal-error")}}resolve(e){Ss(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ss(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=new cc(2e3,1e4);class uo extends zE{constructor(e,i,r,o,c){super(e,i,o,c),this.provider=r,this.authWindow=null,this.pollId=null,uo.currentPopupAction&&uo.currentPopupAction.cancel(),uo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){Ss(this.filter.length===1,"Popup operations only handle one event");const e=Np();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(zi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(zi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,uo.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pC.get())};e()}}uo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="pendingRedirect",ch=new Map;class yC extends zE{constructor(e,i,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let e=ch.get(this.auth._key());if(!e){try{const r=await _C(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(i){e=()=>Promise.reject(i)}ch.set(this.auth._key(),e)}return this.bypassAuthState||ch.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _C(n,e){const i=bC(e),r=EC(n);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function vC(n,e){ch.set(n._key(),e)}function EC(n){return ys(n._redirectPersistence)}function bC(n){return lh(gC,n.config.apiKey,n.name)}async function TC(n,e,i=!1){if(Cn(n.app))return Promise.reject(vs(n));const r=ga(n),o=hC(r,e),h=await new yC(r,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=600*1e3;class wC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(i=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AC(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){if(e.error&&!BE(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";i.onError(zi(this.auth,r))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const r=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SC&&this.cachedEventUids.clear(),this.cachedEventUids.has(_1(e))}saveEventToCache(e){this.cachedEventUids.add(_1(e)),this.lastProcessedEventTime=Date.now()}}function _1(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function BE({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function AC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return BE(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(n,e={}){return Rr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CC=/^https?/;async function NC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await xC(n);for(const i of e)try{if(IC(i))return}catch{}ci(n,"unauthorized-domain")}function IC(n){const e=zm(),{protocol:i,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&r===""?i==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===r}if(!CC.test(i))return!1;if(RC.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=new cc(3e4,6e4);function v1(){const n=Bi().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let i=0;i<n.CP.length;i++)n.CP[i]=null}}function OC(n){return new Promise((e,i)=>{function r(){v1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{v1(),i(zi(n,"network-request-failed"))},timeout:DC.get()})}if(Bi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Bi().gapi?.load)r();else{const o=AR("iframefcb");return Bi()[o]=()=>{gapi.load?r():i(zi(n,"network-request-failed"))},AE(`${wR()}?onload=${o}`).catch(c=>i(c))}}).catch(e=>{throw uh=null,e})}let uh=null;function kC(n){return uh=uh||OC(n),uh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=new cc(5e3,15e3),VC="__/auth/iframe",jC="emulator/auth/iframe",LC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UC(n){const e=n.config;Se(e.authDomain,n,"auth-domain-config-required");const i=e.emulator?wp(e,jC):`https://${n.config.authDomain}/${VC}`,r={apiKey:e.apiKey,appName:n.name,v:pa},o=PC.get(n.config.apiHost);o&&(r.eid=o);const c=n._getFrameworks();return c.length&&(r.fw=c.join(",")),`${i}?${lc(r).slice(1)}`}async function zC(n){const e=await kC(n),i=Bi().gapi;return Se(i,n,"internal-error"),e.open({where:document.body,url:UC(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LC,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const h=zi(n,"network-request-failed"),m=Bi().setTimeout(()=>{c(h)},MC.get());function p(){Bi().clearTimeout(m),o(r)}r.ping(p).then(p,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qC=500,HC=600,FC="_blank",GC="http://localhost";class E1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KC(n,e,i,r=qC,o=HC){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let m="";const p={...BC,width:r.toString(),height:o.toString(),top:c,left:h},g=en().toLowerCase();i&&(m=_E(g)?FC:i),gE(g)&&(e=e||GC,p.scrollbars="yes");const E=Object.entries(p).reduce((w,[k,z])=>`${w}${k}=${z},`,"");if(pR(g)&&m!=="_self")return QC(e||"",m),new E1(null);const T=window.open(e||"",m,E);Se(T,n,"popup-blocked");try{T.focus()}catch{}return new E1(T)}function QC(n,e){const i=document.createElement("a");i.href=n,i.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC="__/auth/handler",$C="emulator/auth/handler",XC=encodeURIComponent("fac");async function b1(n,e,i,r,o,c){Se(n.config.authDomain,n,"auth-domain-config-required"),Se(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:r,v:pa,eventId:o};if(e instanceof CE){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",L2(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof hc){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}n.tenantId&&(h.tid=n.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await n._getAppCheckToken(),g=p?`#${XC}=${encodeURIComponent(p)}`:"";return`${WC(n)}?${lc(m).slice(1)}${g}`}function WC({config:n}){return n.emulator?wp(n,$C):`https://${n.authDomain}/${YC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="webStorageSupport";class JC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=VE,this._completeRedirectFn=TC,this._overrideRedirectResult=vC}async _openPopup(e,i,r,o){Ss(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await b1(e,i,r,zm(),o);return KC(e,c,Np())}async _openRedirect(e,i,r,o){await this._originValidation(e);const c=await b1(e,i,r,zm(),o);return tC(c),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(Ss(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(e){const i=await zC(e),r=new wC(e);return i.register("authEvent",o=>(Se(o?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=i,r}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(xm,{type:xm},o=>{const c=o?.[0]?.[xm];c!==void 0&&i(!!c),ci(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=NC(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return SE()||yE()||xp()}}const ZC=JC;var T1="@firebase/auth",S1="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nN(n){ca(new _r("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=r.options;Se(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:h,authDomain:m,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wE(n)},g=new bR(r,o,c,p);return DR(g,i),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),ca(new _r("auth-internal",e=>{const i=ga(e.getProvider("auth").getImmediate());return(r=>new eN(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ui(T1,S1,tN(n)),Ui(T1,S1,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=300,sN=tE("authIdTokenMaxAge")||iN;let w1=null;const rN=n=>async e=>{const i=e&&await e.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>sN)return;const o=i?.token;w1!==o&&(w1=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function aN(n=Tp()){const e=Gh(n,"auth");if(e.isInitialized())return e.getImmediate();const i=IR(n,{popupRedirectResolver:ZC,persistence:[uC,JR,VE]}),r=tE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const h=rN(c.toString());$R(i,h,()=>h(i.currentUser)),YR(i,m=>h(m))}}const o=J0("auth");return o&&OR(i,`http://${o}`),i}function oN(){return document.getElementsByTagName("head")?.[0]??document}TR({loadJS(n){return new Promise((e,i)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const c=zi("internal-error");c.customData=o,i(c)},r.type="text/javascript",r.charset="UTF-8",oN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nN("Browser");var A1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gr,qE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,x){function R(){}R.prototype=x.prototype,C.F=x.prototype,C.prototype=new R,C.prototype.constructor=C,C.D=function(I,D,V){for(var N=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)N[_e-2]=arguments[_e];return x.prototype[D].apply(I,N)}}function i(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,i),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,x,R){R||(R=0);const I=Array(16);if(typeof x=="string")for(var D=0;D<16;++D)I[D]=x.charCodeAt(R++)|x.charCodeAt(R++)<<8|x.charCodeAt(R++)<<16|x.charCodeAt(R++)<<24;else for(D=0;D<16;++D)I[D]=x[R++]|x[R++]<<8|x[R++]<<16|x[R++]<<24;x=C.g[0],R=C.g[1],D=C.g[2];let V=C.g[3],N;N=x+(V^R&(D^V))+I[0]+3614090360&4294967295,x=R+(N<<7&4294967295|N>>>25),N=V+(D^x&(R^D))+I[1]+3905402710&4294967295,V=x+(N<<12&4294967295|N>>>20),N=D+(R^V&(x^R))+I[2]+606105819&4294967295,D=V+(N<<17&4294967295|N>>>15),N=R+(x^D&(V^x))+I[3]+3250441966&4294967295,R=D+(N<<22&4294967295|N>>>10),N=x+(V^R&(D^V))+I[4]+4118548399&4294967295,x=R+(N<<7&4294967295|N>>>25),N=V+(D^x&(R^D))+I[5]+1200080426&4294967295,V=x+(N<<12&4294967295|N>>>20),N=D+(R^V&(x^R))+I[6]+2821735955&4294967295,D=V+(N<<17&4294967295|N>>>15),N=R+(x^D&(V^x))+I[7]+4249261313&4294967295,R=D+(N<<22&4294967295|N>>>10),N=x+(V^R&(D^V))+I[8]+1770035416&4294967295,x=R+(N<<7&4294967295|N>>>25),N=V+(D^x&(R^D))+I[9]+2336552879&4294967295,V=x+(N<<12&4294967295|N>>>20),N=D+(R^V&(x^R))+I[10]+4294925233&4294967295,D=V+(N<<17&4294967295|N>>>15),N=R+(x^D&(V^x))+I[11]+2304563134&4294967295,R=D+(N<<22&4294967295|N>>>10),N=x+(V^R&(D^V))+I[12]+1804603682&4294967295,x=R+(N<<7&4294967295|N>>>25),N=V+(D^x&(R^D))+I[13]+4254626195&4294967295,V=x+(N<<12&4294967295|N>>>20),N=D+(R^V&(x^R))+I[14]+2792965006&4294967295,D=V+(N<<17&4294967295|N>>>15),N=R+(x^D&(V^x))+I[15]+1236535329&4294967295,R=D+(N<<22&4294967295|N>>>10),N=x+(D^V&(R^D))+I[1]+4129170786&4294967295,x=R+(N<<5&4294967295|N>>>27),N=V+(R^D&(x^R))+I[6]+3225465664&4294967295,V=x+(N<<9&4294967295|N>>>23),N=D+(x^R&(V^x))+I[11]+643717713&4294967295,D=V+(N<<14&4294967295|N>>>18),N=R+(V^x&(D^V))+I[0]+3921069994&4294967295,R=D+(N<<20&4294967295|N>>>12),N=x+(D^V&(R^D))+I[5]+3593408605&4294967295,x=R+(N<<5&4294967295|N>>>27),N=V+(R^D&(x^R))+I[10]+38016083&4294967295,V=x+(N<<9&4294967295|N>>>23),N=D+(x^R&(V^x))+I[15]+3634488961&4294967295,D=V+(N<<14&4294967295|N>>>18),N=R+(V^x&(D^V))+I[4]+3889429448&4294967295,R=D+(N<<20&4294967295|N>>>12),N=x+(D^V&(R^D))+I[9]+568446438&4294967295,x=R+(N<<5&4294967295|N>>>27),N=V+(R^D&(x^R))+I[14]+3275163606&4294967295,V=x+(N<<9&4294967295|N>>>23),N=D+(x^R&(V^x))+I[3]+4107603335&4294967295,D=V+(N<<14&4294967295|N>>>18),N=R+(V^x&(D^V))+I[8]+1163531501&4294967295,R=D+(N<<20&4294967295|N>>>12),N=x+(D^V&(R^D))+I[13]+2850285829&4294967295,x=R+(N<<5&4294967295|N>>>27),N=V+(R^D&(x^R))+I[2]+4243563512&4294967295,V=x+(N<<9&4294967295|N>>>23),N=D+(x^R&(V^x))+I[7]+1735328473&4294967295,D=V+(N<<14&4294967295|N>>>18),N=R+(V^x&(D^V))+I[12]+2368359562&4294967295,R=D+(N<<20&4294967295|N>>>12),N=x+(R^D^V)+I[5]+4294588738&4294967295,x=R+(N<<4&4294967295|N>>>28),N=V+(x^R^D)+I[8]+2272392833&4294967295,V=x+(N<<11&4294967295|N>>>21),N=D+(V^x^R)+I[11]+1839030562&4294967295,D=V+(N<<16&4294967295|N>>>16),N=R+(D^V^x)+I[14]+4259657740&4294967295,R=D+(N<<23&4294967295|N>>>9),N=x+(R^D^V)+I[1]+2763975236&4294967295,x=R+(N<<4&4294967295|N>>>28),N=V+(x^R^D)+I[4]+1272893353&4294967295,V=x+(N<<11&4294967295|N>>>21),N=D+(V^x^R)+I[7]+4139469664&4294967295,D=V+(N<<16&4294967295|N>>>16),N=R+(D^V^x)+I[10]+3200236656&4294967295,R=D+(N<<23&4294967295|N>>>9),N=x+(R^D^V)+I[13]+681279174&4294967295,x=R+(N<<4&4294967295|N>>>28),N=V+(x^R^D)+I[0]+3936430074&4294967295,V=x+(N<<11&4294967295|N>>>21),N=D+(V^x^R)+I[3]+3572445317&4294967295,D=V+(N<<16&4294967295|N>>>16),N=R+(D^V^x)+I[6]+76029189&4294967295,R=D+(N<<23&4294967295|N>>>9),N=x+(R^D^V)+I[9]+3654602809&4294967295,x=R+(N<<4&4294967295|N>>>28),N=V+(x^R^D)+I[12]+3873151461&4294967295,V=x+(N<<11&4294967295|N>>>21),N=D+(V^x^R)+I[15]+530742520&4294967295,D=V+(N<<16&4294967295|N>>>16),N=R+(D^V^x)+I[2]+3299628645&4294967295,R=D+(N<<23&4294967295|N>>>9),N=x+(D^(R|~V))+I[0]+4096336452&4294967295,x=R+(N<<6&4294967295|N>>>26),N=V+(R^(x|~D))+I[7]+1126891415&4294967295,V=x+(N<<10&4294967295|N>>>22),N=D+(x^(V|~R))+I[14]+2878612391&4294967295,D=V+(N<<15&4294967295|N>>>17),N=R+(V^(D|~x))+I[5]+4237533241&4294967295,R=D+(N<<21&4294967295|N>>>11),N=x+(D^(R|~V))+I[12]+1700485571&4294967295,x=R+(N<<6&4294967295|N>>>26),N=V+(R^(x|~D))+I[3]+2399980690&4294967295,V=x+(N<<10&4294967295|N>>>22),N=D+(x^(V|~R))+I[10]+4293915773&4294967295,D=V+(N<<15&4294967295|N>>>17),N=R+(V^(D|~x))+I[1]+2240044497&4294967295,R=D+(N<<21&4294967295|N>>>11),N=x+(D^(R|~V))+I[8]+1873313359&4294967295,x=R+(N<<6&4294967295|N>>>26),N=V+(R^(x|~D))+I[15]+4264355552&4294967295,V=x+(N<<10&4294967295|N>>>22),N=D+(x^(V|~R))+I[6]+2734768916&4294967295,D=V+(N<<15&4294967295|N>>>17),N=R+(V^(D|~x))+I[13]+1309151649&4294967295,R=D+(N<<21&4294967295|N>>>11),N=x+(D^(R|~V))+I[4]+4149444226&4294967295,x=R+(N<<6&4294967295|N>>>26),N=V+(R^(x|~D))+I[11]+3174756917&4294967295,V=x+(N<<10&4294967295|N>>>22),N=D+(x^(V|~R))+I[2]+718787259&4294967295,D=V+(N<<15&4294967295|N>>>17),N=R+(V^(D|~x))+I[9]+3951481745&4294967295,C.g[0]=C.g[0]+x&4294967295,C.g[1]=C.g[1]+(D+(N<<21&4294967295|N>>>11))&4294967295,C.g[2]=C.g[2]+D&4294967295,C.g[3]=C.g[3]+V&4294967295}r.prototype.v=function(C,x){x===void 0&&(x=C.length);const R=x-this.blockSize,I=this.C;let D=this.h,V=0;for(;V<x;){if(D==0)for(;V<=R;)o(this,C,V),V+=this.blockSize;if(typeof C=="string"){for(;V<x;)if(I[D++]=C.charCodeAt(V++),D==this.blockSize){o(this,I),D=0;break}}else for(;V<x;)if(I[D++]=C[V++],D==this.blockSize){o(this,I),D=0;break}}this.h=D,this.o+=x},r.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var x=1;x<C.length-8;++x)C[x]=0;x=this.o*8;for(var R=C.length-8;R<C.length;++R)C[R]=x&255,x/=256;for(this.v(C),C=Array(16),x=0,R=0;R<4;++R)for(let I=0;I<32;I+=8)C[x++]=this.g[R]>>>I&255;return C};function c(C,x){var R=m;return Object.prototype.hasOwnProperty.call(R,C)?R[C]:R[C]=x(C)}function h(C,x){this.h=x;const R=[];let I=!0;for(let D=C.length-1;D>=0;D--){const V=C[D]|0;I&&V==x||(R[D]=V,I=!1)}this.g=R}var m={};function p(C){return-128<=C&&C<128?c(C,function(x){return new h([x|0],x<0?-1:0)}):new h([C|0],C<0?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return T;if(C<0)return j(g(-C));const x=[];let R=1;for(let I=0;C>=R;I++)x[I]=C/R|0,R*=4294967296;return new h(x,0)}function E(C,x){if(C.length==0)throw Error("number format error: empty string");if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(C.charAt(0)=="-")return j(E(C.substring(1),x));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=g(Math.pow(x,8));let I=T;for(let V=0;V<C.length;V+=8){var D=Math.min(8,C.length-V);const N=parseInt(C.substring(V,V+D),x);D<8?(D=g(Math.pow(x,D)),I=I.j(D).add(g(N))):(I=I.j(R),I=I.add(g(N)))}return I}var T=p(0),w=p(1),k=p(16777216);n=h.prototype,n.m=function(){if(K(this))return-j(this).m();let C=0,x=1;for(let R=0;R<this.g.length;R++){const I=this.i(R);C+=(I>=0?I:4294967296+I)*x,x*=4294967296}return C},n.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(z(this))return"0";if(K(this))return"-"+j(this).toString(C);const x=g(Math.pow(C,6));var R=this;let I="";for(;;){const D=se(R,x).g;R=q(R,D.j(x));let V=((R.g.length>0?R.g[0]:R.h)>>>0).toString(C);if(R=D,z(R))return V+I;for(;V.length<6;)V="0"+V;I=V+I}},n.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function z(C){if(C.h!=0)return!1;for(let x=0;x<C.g.length;x++)if(C.g[x]!=0)return!1;return!0}function K(C){return C.h==-1}n.l=function(C){return C=q(this,C),K(C)?-1:z(C)?0:1};function j(C){const x=C.g.length,R=[];for(let I=0;I<x;I++)R[I]=~C.g[I];return new h(R,~C.h).add(w)}n.abs=function(){return K(this)?j(this):this},n.add=function(C){const x=Math.max(this.g.length,C.g.length),R=[];let I=0;for(let D=0;D<=x;D++){let V=I+(this.i(D)&65535)+(C.i(D)&65535),N=(V>>>16)+(this.i(D)>>>16)+(C.i(D)>>>16);I=N>>>16,V&=65535,N&=65535,R[D]=N<<16|V}return new h(R,R[R.length-1]&-2147483648?-1:0)};function q(C,x){return C.add(j(x))}n.j=function(C){if(z(this)||z(C))return T;if(K(this))return K(C)?j(this).j(j(C)):j(j(this).j(C));if(K(C))return j(this.j(j(C)));if(this.l(k)<0&&C.l(k)<0)return g(this.m()*C.m());const x=this.g.length+C.g.length,R=[];for(var I=0;I<2*x;I++)R[I]=0;for(I=0;I<this.g.length;I++)for(let D=0;D<C.g.length;D++){const V=this.i(I)>>>16,N=this.i(I)&65535,_e=C.i(D)>>>16,Ne=C.i(D)&65535;R[2*I+2*D]+=N*Ne,B(R,2*I+2*D),R[2*I+2*D+1]+=V*Ne,B(R,2*I+2*D+1),R[2*I+2*D+1]+=N*_e,B(R,2*I+2*D+1),R[2*I+2*D+2]+=V*_e,B(R,2*I+2*D+2)}for(C=0;C<x;C++)R[C]=R[2*C+1]<<16|R[2*C];for(C=x;C<2*x;C++)R[C]=0;return new h(R,0)};function B(C,x){for(;(C[x]&65535)!=C[x];)C[x+1]+=C[x]>>>16,C[x]&=65535,x++}function P(C,x){this.g=C,this.h=x}function se(C,x){if(z(x))throw Error("division by zero");if(z(C))return new P(T,T);if(K(C))return x=se(j(C),x),new P(j(x.g),j(x.h));if(K(x))return x=se(C,j(x)),new P(j(x.g),x.h);if(C.g.length>30){if(K(C)||K(x))throw Error("slowDivide_ only works with positive integers.");for(var R=w,I=x;I.l(C)<=0;)R=ae(R),I=ae(I);var D=ue(R,1),V=ue(I,1);for(I=ue(I,2),R=ue(R,2);!z(I);){var N=V.add(I);N.l(C)<=0&&(D=D.add(R),V=N),I=ue(I,1),R=ue(R,1)}return x=q(C,D.j(x)),new P(D,x)}for(D=T;C.l(x)>=0;){for(R=Math.max(1,Math.floor(C.m()/x.m())),I=Math.ceil(Math.log(R)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),V=g(R),N=V.j(x);K(N)||N.l(C)>0;)R-=I,V=g(R),N=V.j(x);z(V)&&(V=w),D=D.add(V),C=q(C,N)}return new P(D,C)}n.B=function(C){return se(this,C).h},n.and=function(C){const x=Math.max(this.g.length,C.g.length),R=[];for(let I=0;I<x;I++)R[I]=this.i(I)&C.i(I);return new h(R,this.h&C.h)},n.or=function(C){const x=Math.max(this.g.length,C.g.length),R=[];for(let I=0;I<x;I++)R[I]=this.i(I)|C.i(I);return new h(R,this.h|C.h)},n.xor=function(C){const x=Math.max(this.g.length,C.g.length),R=[];for(let I=0;I<x;I++)R[I]=this.i(I)^C.i(I);return new h(R,this.h^C.h)};function ae(C){const x=C.g.length+1,R=[];for(let I=0;I<x;I++)R[I]=C.i(I)<<1|C.i(I-1)>>>31;return new h(R,C.h)}function ue(C,x){const R=x>>5;x%=32;const I=C.g.length-R,D=[];for(let V=0;V<I;V++)D[V]=x>0?C.i(V+R)>>>x|C.i(V+R+1)<<32-x:C.i(V+R);return new h(D,C.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,qE=r,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=E,gr=h}).apply(typeof A1<"u"?A1:typeof self<"u"?self:typeof window<"u"?window:{});var Zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var HE,Pl,FE,hh,Fm,GE,KE,QE;(function(){var n,e=Object.defineProperty;function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zu=="object"&&Zu];for(var _=0;_<u.length;++_){var b=u[_];if(b&&b.Math==Math)return b}throw Error("Cannot find global object")}var r=i(this);function o(u,_){if(_)e:{var b=r;u=u.split(".");for(var A=0;A<u.length-1;A++){var H=u[A];if(!(H in b))break e;b=b[H]}u=u[u.length-1],A=b[u],_=_(A),_!=A&&_!=null&&e(b,u,{configurable:!0,writable:!0,value:_})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(_){var b=[],A;for(A in _)Object.prototype.hasOwnProperty.call(_,A)&&b.push([A,_[A]]);return b}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function m(u){var _=typeof u;return _=="object"&&u!=null||_=="function"}function p(u,_,b){return u.call.apply(u.bind,arguments)}function g(u,_,b){return g=p,g.apply(null,arguments)}function E(u,_){var b=Array.prototype.slice.call(arguments,1);return function(){var A=b.slice();return A.push.apply(A,arguments),u.apply(this,A)}}function T(u,_){function b(){}b.prototype=_.prototype,u.Z=_.prototype,u.prototype=new b,u.prototype.constructor=u,u.Ob=function(A,H,X){for(var oe=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)oe[Ie-2]=arguments[Ie];return _.prototype[H].apply(A,oe)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function k(u){const _=u.length;if(_>0){const b=Array(_);for(let A=0;A<_;A++)b[A]=u[A];return b}return[]}function z(u,_){for(let A=1;A<arguments.length;A++){const H=arguments[A];var b=typeof H;if(b=b!="object"?b:H?Array.isArray(H)?"array":b:"null",b=="array"||b=="object"&&typeof H.length=="number"){b=u.length||0;const X=H.length||0;u.length=b+X;for(let oe=0;oe<X;oe++)u[b+oe]=H[oe]}else u.push(H)}}class K{constructor(_,b){this.i=_,this.j=b,this.h=0,this.g=null}get(){let _;return this.h>0?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function j(u){h.setTimeout(()=>{throw u},0)}function q(){var u=C;let _=null;return u.g&&(_=u.g,u.g=u.g.next,u.g||(u.h=null),_.next=null),_}class B{constructor(){this.h=this.g=null}add(_,b){const A=P.get();A.set(_,b),this.h?this.h.next=A:this.g=A,this.h=A}}var P=new K(()=>new se,u=>u.reset());class se{constructor(){this.next=this.g=this.h=null}set(_,b){this.h=_,this.g=b,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,ue=!1,C=new B,x=()=>{const u=Promise.resolve(void 0);ae=()=>{u.then(R)}};function R(){for(var u;u=q();){try{u.h.call(u.g)}catch(b){j(b)}var _=P;_.j(u),_.h<100&&(_.h++,u.next=_.g,_.g=u)}ue=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function D(u,_){this.type=u,this.g=this.target=_,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,_=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const b=()=>{};h.addEventListener("test",b,_),h.removeEventListener("test",b,_)}catch{}return u})();function N(u){return/^[\s\xa0]*$/.test(u)}function _e(u,_){D.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,_)}T(_e,D),_e.prototype.init=function(u,_){const b=this.type=u.type,A=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=_,_=u.relatedTarget,_||(b=="mouseover"?_=u.fromElement:b=="mouseout"&&(_=u.toElement)),this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&_e.Z.h.call(this)},_e.prototype.h=function(){_e.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ne="closure_listenable_"+(Math.random()*1e6|0),Y=0;function re(u,_,b,A,H){this.listener=u,this.proxy=null,this.src=_,this.type=b,this.capture=!!A,this.ha=H,this.key=++Y,this.da=this.fa=!1}function ce(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pe(u,_,b){for(const A in u)_.call(b,u[A],A,u)}function he(u,_){for(const b in u)_.call(void 0,u[b],b,u)}function M(u){const _={};for(const b in u)_[b]=u[b];return _}const Z="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function le(u,_){let b,A;for(let H=1;H<arguments.length;H++){A=arguments[H];for(b in A)u[b]=A[b];for(let X=0;X<Z.length;X++)b=Z[X],Object.prototype.hasOwnProperty.call(A,b)&&(u[b]=A[b])}}function fe(u){this.src=u,this.g={},this.h=0}fe.prototype.add=function(u,_,b,A,H){const X=u.toString();u=this.g[X],u||(u=this.g[X]=[],this.h++);const oe=Ae(u,_,A,H);return oe>-1?(_=u[oe],b||(_.fa=!1)):(_=new re(_,this.src,X,!!A,H),_.fa=b,u.push(_)),_};function Te(u,_){const b=_.type;if(b in u.g){var A=u.g[b],H=Array.prototype.indexOf.call(A,_,void 0),X;(X=H>=0)&&Array.prototype.splice.call(A,H,1),X&&(ce(_),u.g[b].length==0&&(delete u.g[b],u.h--))}}function Ae(u,_,b,A){for(let H=0;H<u.length;++H){const X=u[H];if(!X.da&&X.listener==_&&X.capture==!!b&&X.ha==A)return H}return-1}var ke="closure_lm_"+(Math.random()*1e6|0),ot={};function Ye(u,_,b,A,H){if(Array.isArray(_)){for(let X=0;X<_.length;X++)Ye(u,_[X],b,A,H);return null}return b=pi(b),u&&u[Ne]?u.J(_,b,m(A)?!!A.capture:!1,H):on(u,_,b,!1,A,H)}function on(u,_,b,A,H,X){if(!_)throw Error("Invalid event type");const oe=m(H)?!!H.capture:!!H;let Ie=ln(u);if(Ie||(u[ke]=Ie=new fe(u)),b=Ie.add(_,b,A,oe,X),b.proxy)return b;if(A=mi(),b.proxy=A,A.src=u,A.listener=b,u.addEventListener)V||(H=oe),H===void 0&&(H=!1),u.addEventListener(_.toString(),A,H);else if(u.attachEvent)u.attachEvent(tn(_.toString()),A);else if(u.addListener&&u.removeListener)u.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return b}function mi(){function u(b){return _.call(u.src,u.listener,b)}const _=In;return u}function Kn(u,_,b,A,H){if(Array.isArray(_))for(var X=0;X<_.length;X++)Kn(u,_[X],b,A,H);else A=m(A)?!!A.capture:!!A,b=pi(b),u&&u[Ne]?(u=u.i,X=String(_).toString(),X in u.g&&(_=u.g[X],b=Ae(_,b,A,H),b>-1&&(ce(_[b]),Array.prototype.splice.call(_,b,1),_.length==0&&(delete u.g[X],u.h--)))):u&&(u=ln(u))&&(_=u.g[_.toString()],u=-1,_&&(u=Ae(_,b,A,H)),(b=u>-1?_[u]:null)&&Qn(b))}function Qn(u){if(typeof u!="number"&&u&&!u.da){var _=u.src;if(_&&_[Ne])Te(_.i,u);else{var b=u.type,A=u.proxy;_.removeEventListener?_.removeEventListener(b,A,u.capture):_.detachEvent?_.detachEvent(tn(b),A):_.addListener&&_.removeListener&&_.removeListener(A),(b=ln(_))?(Te(b,u),b.h==0&&(b.src=null,_[ke]=null)):ce(u)}}}function tn(u){return u in ot?ot[u]:ot[u]="on"+u}function In(u,_){if(u.da)u=!0;else{_=new _e(_,this);const b=u.listener,A=u.ha||u.src;u.fa&&Qn(u),u=b.call(A,_)}return u}function ln(u){return u=u[ke],u instanceof fe?u:null}var Dn="__closure_events_fn_"+(Math.random()*1e9>>>0);function pi(u){return typeof u=="function"?u:(u[Dn]||(u[Dn]=function(_){return u.handleEvent(_)}),u[Dn])}function bt(){I.call(this),this.i=new fe(this),this.M=this,this.G=null}T(bt,I),bt.prototype[Ne]=!0,bt.prototype.removeEventListener=function(u,_,b,A){Kn(this,u,_,b,A)};function kt(u,_){var b,A=u.G;if(A)for(b=[];A;A=A.G)b.push(A);if(u=u.M,A=_.type||_,typeof _=="string")_=new D(_,u);else if(_ instanceof D)_.target=_.target||u;else{var H=_;_=new D(A,u),le(_,H)}H=!0;let X,oe;if(b)for(oe=b.length-1;oe>=0;oe--)X=_.g=b[oe],H=Cs(X,A,!0,_)&&H;if(X=_.g=u,H=Cs(X,A,!0,_)&&H,H=Cs(X,A,!1,_)&&H,b)for(oe=0;oe<b.length;oe++)X=_.g=b[oe],H=Cs(X,A,!1,_)&&H}bt.prototype.N=function(){if(bt.Z.N.call(this),this.i){var u=this.i;for(const _ in u.g){const b=u.g[_];for(let A=0;A<b.length;A++)ce(b[A]);delete u.g[_],u.h--}}this.G=null},bt.prototype.J=function(u,_,b,A){return this.i.add(String(u),_,!1,b,A)},bt.prototype.K=function(u,_,b,A){return this.i.add(String(u),_,!0,b,A)};function Cs(u,_,b,A){if(_=u.i.g[String(_)],!_)return!0;_=_.concat();let H=!0;for(let X=0;X<_.length;++X){const oe=_[X];if(oe&&!oe.da&&oe.capture==b){const Ie=oe.listener,pt=oe.ha||oe.src;oe.fa&&Te(u.i,oe),H=Ie.call(pt,A)!==!1&&H}}return H&&!A.defaultPrevented}function ff(u,_){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=g(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(_)>2147483647?-1:h.setTimeout(u,_||0)}function bc(u){u.g=ff(()=>{u.g=null,u.i&&(u.i=!1,bc(u))},u.l);const _=u.h;u.h=null,u.m.apply(null,_)}class nn extends I{constructor(_,b){super(),this.m=_,this.l=b,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:bc(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ir(u){I.call(this),this.h=u,this.g={}}T(Ir,I);var Oo=[];function ko(u){pe(u.g,function(_,b){this.g.hasOwnProperty(b)&&Qn(_)},u),u.g={}}Ir.prototype.N=function(){Ir.Z.N.call(this),ko(this)},Ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ns=h.JSON.stringify,df=h.JSON.parse,Tc=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Sc(){}function wc(){}var Yn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Bt(){D.call(this,"d")}T(Bt,D);function On(){D.call(this,"c")}T(On,D);var mt={},Ac=null;function va(){return Ac=Ac||new bt}mt.Ia="serverreachability";function xc(u){D.call(this,mt.Ia,u)}T(xc,D);function gi(u){const _=va();kt(_,new xc(_))}mt.STAT_EVENT="statevent";function Dr(u,_){D.call(this,mt.STAT_EVENT,u),this.stat=_}T(Dr,D);function Tt(u){const _=va();kt(_,new Dr(_,u))}mt.Ja="timingevent";function yi(u,_){D.call(this,mt.Ja,u),this.size=_}T(yi,D);function _i(u,_){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},_)}function $n(){this.g=!0}$n.prototype.ua=function(){this.g=!1};function mf(u,_,b,A,H,X){u.info(function(){if(u.g)if(X){var oe="",Ie=X.split("&");for(let Ge=0;Ge<Ie.length;Ge++){var pt=Ie[Ge].split("=");if(pt.length>1){const lt=pt[0];pt=pt[1];const jn=lt.split("_");oe=jn.length>=2&&jn[1]=="type"?oe+(lt+"="+pt+"&"):oe+(lt+"=redacted&")}}}else oe=null;else oe=X;return"XMLHTTP REQ ("+A+") [attempt "+H+"]: "+_+`
`+b+`
`+oe})}function Rc(u,_,b,A,H,X,oe){u.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+H+"]: "+_+`
`+b+`
`+X+" "+oe})}function vi(u,_,b,A){u.info(function(){return"XMLHTTP TEXT ("+_+"): "+pf(u,b)+(A?" "+A:"")})}function Or(u,_){u.info(function(){return"TIMEOUT: "+_})}$n.prototype.info=function(){};function pf(u,_){if(!u.g)return _;if(!_)return null;try{const X=JSON.parse(_);if(X){for(u=0;u<X.length;u++)if(Array.isArray(X[u])){var b=X[u];if(!(b.length<2)){var A=b[1];if(Array.isArray(A)&&!(A.length<1)){var H=A[0];if(H!="noop"&&H!="stop"&&H!="close")for(let oe=1;oe<A.length;oe++)A[oe]=""}}}}return Ns(X)}catch{return _}}var kr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Mo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Vo;function Mr(){}T(Mr,Sc),Mr.prototype.g=function(){return new XMLHttpRequest},Vo=new Mr;function Wi(u){return encodeURIComponent(String(u))}function Cc(u){var _=1;u=u.split(":");const b=[];for(;_>0&&u.length;)b.push(u.shift()),_--;return u.length&&b.push(u.join(":")),b}function Xn(u,_,b,A){this.j=u,this.i=_,this.l=b,this.S=A||1,this.V=new Ir(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Wn}function Wn(){this.i=null,this.g="",this.h=!1}var St={},jt={};function Ei(u,_,b){u.M=1,u.A=Vr(At(_)),u.u=b,u.R=!0,Ea(u,null)}function Ea(u,_){u.F=Date.now(),bi(u),u.B=At(u.A);var b=u.B,A=u.S;Array.isArray(A)||(A=[String(A)]),wa(b.i,"t",A),u.C=0,b=u.j.L,u.h=new Wn,u.g=Hc(u.j,b?_:null,!u.u),u.P>0&&(u.O=new nn(g(u.Y,u,u.g),u.P)),_=u.V,b=u.g,A=u.ba;var H="readystatechange";Array.isArray(H)||(H&&(Oo[0]=H.toString()),H=Oo);for(let X=0;X<H.length;X++){const oe=Ye(b,H[X],A||_.handleEvent,!1,_.h||_);if(!oe)break;_.g[oe.key]=oe}_=u.J?M(u.J):{},u.u?(u.v||(u.v="POST"),_["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,_)):(u.v="GET",u.g.ea(u.B,u.v,null,_)),gi(),mf(u.i,u.v,u.B,u.l,u.S,u.u)}Xn.prototype.ba=function(u){u=u.target;const _=this.O;_&&ei(u)==3?_.j():this.Y(u)},Xn.prototype.Y=function(u){try{if(u==this.g)e:{const Ie=ei(this.g),pt=this.g.ya(),Ge=this.g.ca();if(!(Ie<3)&&(Ie!=3||this.g&&(this.h.h||this.g.la()||qt(this.g)))){this.K||Ie!=4||pt==7||(pt==8||Ge<=0?gi(3):gi(2)),Ti(this);var _=this.g.ca();this.X=_;var b=gf(this);if(this.o=_==200,Rc(this.i,this.v,this.B,this.l,this.S,Ie,_),this.o){if(this.U&&!this.L){t:{if(this.g){var A,H=this.g;if((A=H.g?H.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(A)){var X=A;break t}}X=null}if(u=X)vi(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Si(this,u);else{this.o=!1,this.m=3,Tt(12),vn(this),kn(this);break e}}if(this.R){u=!0;let lt;for(;!this.K&&this.C<b.length;)if(lt=Ic(this,b),lt==jt){Ie==4&&(this.m=4,Tt(14),u=!1),vi(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==St){this.m=4,Tt(15),vi(this.i,this.l,b,"[Invalid Chunk]"),u=!1;break}else vi(this.i,this.l,lt,null),Si(this,lt);if(Nc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||b.length!=0||this.h.h||(this.m=1,Tt(16),u=!1),this.o=this.o&&u,!u)vi(this.i,this.l,b,"[Invalid Chunked Response]"),vn(this),kn(this);else if(b.length>0&&!this.W){this.W=!0;var oe=this.j;oe.g==this&&oe.aa&&!oe.P&&(oe.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),Xo(oe),oe.P=!0,Tt(11))}}else vi(this.i,this.l,b,null),Si(this,b);Ie==4&&vn(this),this.o&&!this.K&&(Ie==4?Uc(this.j,this):(this.o=!1,bi(this)))}else Zi(this.g),_==400&&b.indexOf("Unknown SID")>0?(this.m=3,Tt(12)):(this.m=0,Tt(13)),vn(this),kn(this)}}}catch{}finally{}};function gf(u){if(!Nc(u))return u.g.la();const _=qt(u.g);if(_==="")return"";let b="";const A=_.length,H=ei(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return vn(u),kn(u),"";u.h.i=new h.TextDecoder}for(let X=0;X<A;X++)u.h.h=!0,b+=u.h.i.decode(_[X],{stream:!(H&&X==A-1)});return _.length=0,u.h.g+=b,u.C=0,u.h.g}function Nc(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Ic(u,_){var b=u.C,A=_.indexOf(`
`,b);return A==-1?jt:(b=Number(_.substring(b,A)),isNaN(b)?St:(A+=1,A+b>_.length?jt:(_=_.slice(A,A+b),u.C=A+b,_)))}Xn.prototype.cancel=function(){this.K=!0,vn(this)};function bi(u){u.T=Date.now()+u.H,ba(u,u.H)}function ba(u,_){if(u.D!=null)throw Error("WatchDog timer not null");u.D=_i(g(u.aa,u),_)}function Ti(u){u.D&&(h.clearTimeout(u.D),u.D=null)}Xn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Or(this.i,this.B),this.M!=2&&(gi(),Tt(17)),vn(this),this.m=2,kn(this)):ba(this,this.T-u)};function kn(u){u.j.I==0||u.K||Uc(u.j,u)}function vn(u){Ti(u);var _=u.O;_&&typeof _.dispose=="function"&&_.dispose(),u.O=null,ko(u.V),u.g&&(_=u.g,u.g=null,_.abort(),_.dispose())}function Si(u,_){try{var b=u.j;if(b.I!=0&&(b.g==u||Ai(b.h,u))){if(!u.L&&Ai(b.h,u)&&b.I==3){try{var A=b.Ba.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var H=A;if(H[0]==0){e:if(!b.v){if(b.g)if(b.g.F+3e3<u.F)Na(b),Ls(b);else break e;qr(b),Tt(18)}}else b.xa=H[1],0<b.xa-b.K&&H[2]<37500&&b.F&&b.A==0&&!b.C&&(b.C=_i(g(b.Va,b),6e3));wi(b.h)<=1&&b.ta&&(b.ta=void 0)}else Di(b,11)}else if((u.L||b.g==u)&&Na(b),!N(_))for(H=b.Ba.g.parse(_),_=0;_<H.length;_++){let Ge=H[_];const lt=Ge[0];if(!(lt<=b.K))if(b.K=lt,Ge=Ge[1],b.I==2)if(Ge[0]=="c"){b.M=Ge[1],b.ba=Ge[2];const jn=Ge[3];jn!=null&&(b.ka=jn,b.j.info("VER="+b.ka));const Oi=Ge[4];Oi!=null&&(b.za=Oi,b.j.info("SVER="+b.za));const ti=Ge[5];ti!=null&&typeof ti=="number"&&ti>0&&(A=1.5*ti,b.O=A,b.j.info("backChannelRequestTimeoutMs_="+A)),A=b;const ni=u.g;if(ni){const Hr=ni.g?ni.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hr){var X=A.h;X.g||Hr.indexOf("spdy")==-1&&Hr.indexOf("quic")==-1&&Hr.indexOf("h2")==-1||(X.j=X.l,X.g=new Set,X.h&&(Po(X,X.h),X.h=null))}if(A.G){const Ia=ni.g?ni.g.getResponseHeader("X-HTTP-Session-Id"):null;Ia&&(A.wa=Ia,$e(A.J,A.G,Ia))}}b.I=3,b.l&&b.l.ra(),b.aa&&(b.T=Date.now()-u.F,b.j.info("Handshake RTT: "+b.T+"ms")),A=b;var oe=u;if(A.na=qc(A,A.L?A.ba:null,A.W),oe.L){Uo(A.h,oe);var Ie=oe,pt=A.O;pt&&(Ie.H=pt),Ie.D&&(Ti(Ie),bi(Ie)),A.g=oe}else Lc(A);b.i.length>0&&Ii(b)}else Ge[0]!="stop"&&Ge[0]!="close"||Di(b,7);else b.I==3&&(Ge[0]=="stop"||Ge[0]=="close"?Ge[0]=="stop"?Di(b,7):Yo(b):Ge[0]!="noop"&&b.l&&b.l.qa(Ge),b.A=0)}}gi(4)}catch{}}var wt=class{constructor(u,_){this.g=u,this.map=_}};function jo(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Lo(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function wi(u){return u.h?1:u.g?u.g.size:0}function Ai(u,_){return u.h?u.h==_:u.g?u.g.has(_):!1}function Po(u,_){u.g?u.g.add(_):u.h=_}function Uo(u,_){u.h&&u.h==_?u.h=null:u.g&&u.g.has(_)&&u.g.delete(_)}jo.prototype.cancel=function(){if(this.i=zo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function zo(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let _=u.i;for(const b of u.g.values())_=_.concat(b.G);return _}return k(u.i)}var Dc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ta(u,_){if(u){u=u.split("&");for(let b=0;b<u.length;b++){const A=u[b].indexOf("=");let H,X=null;A>=0?(H=u[b].substring(0,A),X=u[b].substring(A+1)):H=u[b],_(H,X?decodeURIComponent(X.replace(/\+/g," ")):"")}}}function En(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let _;u instanceof En?(this.l=u.l,Lt(this,u.j),this.o=u.o,this.g=u.g,Is(this,u.u),this.h=u.h,Bo(this,Vc(u.i)),this.m=u.m):u&&(_=String(u).match(Dc))?(this.l=!1,Lt(this,_[1]||"",!0),this.o=xi(_[2]||""),this.g=xi(_[3]||"",!0),Is(this,_[4]),this.h=xi(_[5]||"",!0),Bo(this,_[6]||"",!0),this.m=xi(_[7]||"")):(this.l=!1,this.i=new Os(null,this.l))}En.prototype.toString=function(){const u=[];var _=this.j;_&&u.push(jr(_,Sa,!0),":");var b=this.g;return(b||_=="file")&&(u.push("//"),(_=this.o)&&u.push(jr(_,Sa,!0),"@"),u.push(Wi(b).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),b=this.u,b!=null&&u.push(":",String(b))),(b=this.h)&&(this.g&&b.charAt(0)!="/"&&u.push("/"),u.push(jr(b,b.charAt(0)=="/"?qo:Oc,!0))),(b=this.i.toString())&&u.push("?",b),(b=this.m)&&u.push("#",jr(b,kc)),u.join("")},En.prototype.resolve=function(u){const _=At(this);let b=!!u.j;b?Lt(_,u.j):b=!!u.o,b?_.o=u.o:b=!!u.g,b?_.g=u.g:b=u.u!=null;var A=u.h;if(b)Is(_,u.u);else if(b=!!u.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var H=_.h.lastIndexOf("/");H!=-1&&(A=_.h.slice(0,H+1)+A)}if(H=A,H==".."||H==".")A="";else if(H.indexOf("./")!=-1||H.indexOf("/.")!=-1){A=H.lastIndexOf("/",0)==0,H=H.split("/");const X=[];for(let oe=0;oe<H.length;){const Ie=H[oe++];Ie=="."?A&&oe==H.length&&X.push(""):Ie==".."?((X.length>1||X.length==1&&X[0]!="")&&X.pop(),A&&oe==H.length&&X.push("")):(X.push(Ie),A=!0)}A=X.join("/")}else A=H}return b?_.h=A:b=u.i.toString()!=="",b?Bo(_,Vc(u.i)):b=!!u.m,b&&(_.m=u.m),_};function At(u){return new En(u)}function Lt(u,_,b){u.j=b?xi(_,!0):_,u.j&&(u.j=u.j.replace(/:$/,""))}function Is(u,_){if(_){if(_=Number(_),isNaN(_)||_<0)throw Error("Bad port number "+_);u.u=_}else u.u=null}function Bo(u,_,b){_ instanceof Os?(u.i=_,Aa(u.i,u.l)):(b||(_=jr(_,Ds)),u.i=new Os(_,u.l))}function $e(u,_,b){u.i.set(_,b)}function Vr(u){return $e(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function xi(u,_){return u?_?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function jr(u,_,b){return typeof u=="string"?(u=encodeURI(u).replace(_,cn),b&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function cn(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Sa=/[#\/\?@]/g,Oc=/[#\?:]/g,qo=/[#\?]/g,Ds=/[#\?@]/g,kc=/#/g;function Os(u,_){this.h=this.g=null,this.i=u||null,this.j=!!_}function un(u){u.g||(u.g=new Map,u.h=0,u.i&&Ta(u.i,function(_,b){u.add(decodeURIComponent(_.replace(/\+/g," ")),b)}))}n=Os.prototype,n.add=function(u,_){un(this),this.i=null,u=ks(this,u);let b=this.g.get(u);return b||this.g.set(u,b=[]),b.push(_),this.h+=1,this};function Mc(u,_){un(u),_=ks(u,_),u.g.has(_)&&(u.i=null,u.h-=u.g.get(_).length,u.g.delete(_))}function Ho(u,_){return un(u),_=ks(u,_),u.g.has(_)}n.forEach=function(u,_){un(this),this.g.forEach(function(b,A){b.forEach(function(H){u.call(_,H,A,this)},this)},this)};function Fo(u,_){un(u);let b=[];if(typeof _=="string")Ho(u,_)&&(b=b.concat(u.g.get(ks(u,_))));else for(u=Array.from(u.g.values()),_=0;_<u.length;_++)b=b.concat(u[_]);return b}n.set=function(u,_){return un(this),this.i=null,u=ks(this,u),Ho(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[_]),this.h+=1,this},n.get=function(u,_){return u?(u=Fo(this,u),u.length>0?String(u[0]):_):_};function wa(u,_,b){Mc(u,_),b.length>0&&(u.i=null,u.g.set(ks(u,_),k(b)),u.h+=b.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],_=Array.from(this.g.keys());for(let A=0;A<_.length;A++){var b=_[A];const H=Wi(b);b=Fo(this,b);for(let X=0;X<b.length;X++){let oe=H;b[X]!==""&&(oe+="="+Wi(b[X])),u.push(oe)}}return this.i=u.join("&")};function Vc(u){const _=new Os;return _.i=u.i,u.g&&(_.g=new Map(u.g),_.h=u.h),_}function ks(u,_){return _=String(_),u.j&&(_=_.toLowerCase()),_}function Aa(u,_){_&&!u.j&&(un(u),u.i=null,u.g.forEach(function(b,A){const H=A.toLowerCase();A!=H&&(Mc(this,A),wa(this,H,b))},u)),u.j=_}function Jn(u,_){const b=new $n;if(h.Image){const A=new Image;A.onload=E(Mn,b,"TestLoadImage: loaded",!0,_,A),A.onerror=E(Mn,b,"TestLoadImage: error",!1,_,A),A.onabort=E(Mn,b,"TestLoadImage: abort",!1,_,A),A.ontimeout=E(Mn,b,"TestLoadImage: timeout",!1,_,A),h.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=u}else _(!1)}function Go(u,_){const b=new $n,A=new AbortController,H=setTimeout(()=>{A.abort(),Mn(b,"TestPingServer: timeout",!1,_)},1e4);fetch(u,{signal:A.signal}).then(X=>{clearTimeout(H),X.ok?Mn(b,"TestPingServer: ok",!0,_):Mn(b,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(H),Mn(b,"TestPingServer: error",!1,_)})}function Mn(u,_,b,A,H){try{H&&(H.onload=null,H.onerror=null,H.onabort=null,H.ontimeout=null),A(b)}catch{}}function Ms(){this.g=new Tc}function Ri(u){this.i=u.Sb||null,this.h=u.ab||!1}T(Ri,Sc),Ri.prototype.g=function(){return new Lr(this.i,this.h)};function Lr(u,_){bt.call(this),this.H=u,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(Lr,bt),n=Lr.prototype,n.open=function(u,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=_,this.readyState=1,Zn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const _={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(_.body=u),(this.H||h).fetch(new Request(this.D,_)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=0},n.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;xa(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function xa(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}n.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var _=u.value?u.value:new Uint8Array(0);(_=this.B.decode(_,{stream:!u.done}))&&(this.response=this.responseText+=_)}u.done?Vs(this):Zn(this),this.readyState==3&&xa(this)}},n.Oa=function(u){this.g&&(this.response=this.responseText=u,Vs(this))},n.Na=function(u){this.g&&(this.response=u,Vs(this))},n.ga=function(){this.g&&Vs(this)};function Vs(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Zn(u)}n.setRequestHeader=function(u,_){this.A.append(u,_)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],_=this.h.entries();for(var b=_.next();!b.done;)b=b.value,u.push(b[0]+": "+b[1]),b=_.next();return u.join(`\r
`)};function Zn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Lr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Vn(u){let _="";return pe(u,function(b,A){_+=A,_+=":",_+=b,_+=`\r
`}),_}function Pr(u,_,b){e:{for(A in b){var A=!1;break e}A=!0}A||(b=Vn(b),typeof u=="string"?b!=null&&Wi(b):$e(u,_,b))}function Je(u){bt.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(Je,bt);var Ci=/^https?$/i,Ko=["POST","PUT"];n=Je.prototype,n.Fa=function(u){this.H=u},n.ea=function(u,_,b,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);_=_?_.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Vo.g(),this.g.onreadystatechange=w(g(this.Ca,this));try{this.B=!0,this.g.open(_,String(u),!0),this.B=!1}catch(X){Ur(this,X);return}if(u=b||"",b=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var H in A)b.set(H,A[H]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const X of A.keys())b.set(X,A.get(X));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(b.keys()).find(X=>X.toLowerCase()=="content-type"),H=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(Ko,_,void 0)>=0)||A||H||b.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[X,oe]of b)this.g.setRequestHeader(X,oe);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(X){Ur(this,X)}};function Ur(u,_){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=_,u.o=5,Qo(u),Ji(u)}function Qo(u){u.A||(u.A=!0,kt(u,"complete"),kt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,kt(this,"complete"),kt(this,"abort"),Ji(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ji(this,!0)),Je.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?zr(this):this.Xa())},n.Xa=function(){zr(this)};function zr(u){if(u.h&&typeof c<"u"){if(u.v&&ei(u)==4)setTimeout(u.Ca.bind(u),0);else if(kt(u,"readystatechange"),ei(u)==4){u.h=!1;try{const X=u.ca();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var b;if(!(b=_)){var A;if(A=X===0){let oe=String(u.D).match(Dc)[1]||null;!oe&&h.self&&h.self.location&&(oe=h.self.location.protocol.slice(0,-1)),A=!Ci.test(oe?oe.toLowerCase():"")}b=A}if(b)kt(u,"complete"),kt(u,"success");else{u.o=6;try{var H=ei(u)>2?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.ca()+"]",Qo(u)}}finally{Ji(u)}}}}function Ji(u,_){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const b=u.g;u.g=null,_||kt(u,"ready");try{b.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ei(u){return u.g?u.g.readyState:0}n.ca=function(){try{return ei(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(u){if(this.g){var _=this.g.responseText;return u&&_.indexOf(u)==0&&(_=_.substring(u.length)),df(_)}};function qt(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Zi(u){const _={};u=(u.g&&ei(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<u.length;A++){if(N(u[A]))continue;var b=Cc(u[A]);const H=b[0];if(b=b[1],typeof b!="string")continue;b=b.trim();const X=_[H]||[];_[H]=X,X.push(b)}he(_,function(A){return A.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ni(u,_,b){return b&&b.internalChannelParams&&b.internalChannelParams[u]||_}function js(u){this.za=0,this.i=[],this.j=new $n,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ni("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ni("baseRetryDelayMs",5e3,u),this.Za=Ni("retryDelaySeedMs",1e4,u),this.Ta=Ni("forwardChannelMaxRetries",2,u),this.va=Ni("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new jo(u&&u.concurrentRequestLimit),this.Ba=new Ms,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=js.prototype,n.ka=8,n.I=1,n.connect=function(u,_,b,A){Tt(0),this.W=u,this.H=_||{},b&&A!==void 0&&(this.H.OSID=b,this.H.OAID=A),this.F=this.X,this.J=qc(this,null,this.W),Ii(this)};function Yo(u){if(Ra(u),u.I==3){var _=u.V++,b=At(u.J);if($e(b,"SID",u.M),$e(b,"RID",_),$e(b,"TYPE","terminate"),Br(u,b),_=new Xn(u,u.j,_),_.M=2,_.A=Vr(At(b)),b=!1,h.navigator&&h.navigator.sendBeacon)try{b=h.navigator.sendBeacon(_.A.toString(),"")}catch{}!b&&h.Image&&(new Image().src=_.A,b=!0),b||(_.g=Hc(_.j,null),_.g.ea(_.A)),_.F=Date.now(),bi(_)}Bc(u)}function Ls(u){u.g&&(Xo(u),u.g.cancel(),u.g=null)}function Ra(u){Ls(u),u.v&&(h.clearTimeout(u.v),u.v=null),Na(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function Ii(u){if(!Lo(u.h)&&!u.m){u.m=!0;var _=u.Ea;ae||x(),ue||(ae(),ue=!0),C.add(_,u),u.D=0}}function Ca(u,_){return wi(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=_.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=_i(g(u.Ea,u,_),zc(u,u.D)),u.D++,!0)}n.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const H=new Xn(this,this.j,u);let X=this.o;if(this.U&&(X?(X=M(X),le(X,this.U)):X=this.U),this.u!==null||this.R||(H.J=X,X=null),this.S)e:{for(var _=0,b=0;b<this.i.length;b++){t:{var A=this.i[b];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,_>4096){_=b;break e}if(_===4096||b===this.i.length-1){_=b+1;break e}}_=1e3}else _=1e3;_=jc(this,H,_),b=At(this.J),$e(b,"RID",u),$e(b,"CVER",22),this.G&&$e(b,"X-HTTP-Session-Id",this.G),Br(this,b),X&&(this.R?_="headers="+Wi(Vn(X))+"&"+_:this.u&&Pr(b,this.u,X)),Po(this.h,H),this.Ra&&$e(b,"TYPE","init"),this.S?($e(b,"$req",_),$e(b,"SID","null"),H.U=!0,Ei(H,b,null)):Ei(H,b,_),this.I=2}}else this.I==3&&(u?$o(this,u):this.i.length==0||Lo(this.h)||$o(this))};function $o(u,_){var b;_?b=_.l:b=u.V++;const A=At(u.J);$e(A,"SID",u.M),$e(A,"RID",b),$e(A,"AID",u.K),Br(u,A),u.u&&u.o&&Pr(A,u.u,u.o),b=new Xn(u,u.j,b,u.D+1),u.u===null&&(b.J=u.o),_&&(u.i=_.G.concat(u.i)),_=jc(u,b,1e3),b.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Po(u.h,b),Ei(b,A,_)}function Br(u,_){u.H&&pe(u.H,function(b,A){$e(_,A,b)}),u.l&&pe({},function(b,A){$e(_,A,b)})}function jc(u,_,b){b=Math.min(u.i.length,b);const A=u.l?g(u.l.Ka,u.l,u):null;e:{var H=u.i;let Ie=-1;for(;;){const pt=["count="+b];Ie==-1?b>0?(Ie=H[0].g,pt.push("ofs="+Ie)):Ie=0:pt.push("ofs="+Ie);let Ge=!0;for(let lt=0;lt<b;lt++){var X=H[lt].g;const jn=H[lt].map;if(X-=Ie,X<0)Ie=Math.max(0,H[lt].g-100),Ge=!1;else try{X="req"+X+"_"||"";try{var oe=jn instanceof Map?jn:Object.entries(jn);for(const[Oi,ti]of oe){let ni=ti;m(ti)&&(ni=Ns(ti)),pt.push(X+Oi+"="+encodeURIComponent(ni))}}catch(Oi){throw pt.push(X+"type="+encodeURIComponent("_badmap")),Oi}}catch{A&&A(jn)}}if(Ge){oe=pt.join("&");break e}}oe=void 0}return u=u.i.splice(0,b),_.G=u,oe}function Lc(u){if(!u.g&&!u.v){u.Y=1;var _=u.Da;ae||x(),ue||(ae(),ue=!0),C.add(_,u),u.A=0}}function qr(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=_i(g(u.Da,u),zc(u,u.A)),u.A++,!0)}n.Da=function(){if(this.v=null,Pc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=_i(g(this.Wa,this),u)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Tt(10),Ls(this),Pc(this))};function Xo(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function Pc(u){u.g=new Xn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var _=At(u.na);$e(_,"RID","rpc"),$e(_,"SID",u.M),$e(_,"AID",u.K),$e(_,"CI",u.F?"0":"1"),!u.F&&u.ia&&$e(_,"TO",u.ia),$e(_,"TYPE","xmlhttp"),Br(u,_),u.u&&u.o&&Pr(_,u.u,u.o),u.O&&(u.g.H=u.O);var b=u.g;u=u.ba,b.M=1,b.A=Vr(At(_)),b.u=null,b.R=!0,Ea(b,u)}n.Va=function(){this.C!=null&&(this.C=null,Ls(this),qr(this),Tt(19))};function Na(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Uc(u,_){var b=null;if(u.g==_){Na(u),Xo(u),u.g=null;var A=2}else if(Ai(u.h,_))b=_.G,Uo(u.h,_),A=1;else return;if(u.I!=0){if(_.o)if(A==1){b=_.u?_.u.length:0,_=Date.now()-_.F;var H=u.D;A=va(),kt(A,new yi(A,b)),Ii(u)}else Lc(u);else if(H=_.m,H==3||H==0&&_.X>0||!(A==1&&Ca(u,_)||A==2&&qr(u)))switch(b&&b.length>0&&(_=u.h,_.i=_.i.concat(b)),H){case 1:Di(u,5);break;case 4:Di(u,10);break;case 3:Di(u,6);break;default:Di(u,2)}}}function zc(u,_){let b=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(b*=2),b*_}function Di(u,_){if(u.j.info("Error code "+_),_==2){var b=g(u.bb,u),A=u.Ua;const H=!A;A=new En(A||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Lt(A,"https"),Vr(A),H?Jn(A.toString(),b):Go(A.toString(),b)}else Tt(2);u.I=0,u.l&&u.l.pa(_),Bc(u),Ra(u)}n.bb=function(u){u?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Bc(u){if(u.I=0,u.ja=[],u.l){const _=zo(u.h);(_.length!=0||u.i.length!=0)&&(z(u.ja,_),z(u.ja,u.i),u.h.i.length=0,k(u.i),u.i.length=0),u.l.oa()}}function qc(u,_,b){var A=b instanceof En?At(b):new En(b);if(A.g!="")_&&(A.g=_+"."+A.g),Is(A,A.u);else{var H=h.location;A=H.protocol,_=_?_+"."+H.hostname:H.hostname,H=+H.port;const X=new En(null);A&&Lt(X,A),_&&(X.g=_),H&&Is(X,H),b&&(X.h=b),A=X}return b=u.G,_=u.wa,b&&_&&$e(A,b,_),$e(A,"VER",u.ka),Br(u,A),A}function Hc(u,_,b){if(_&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return _=u.Aa&&!u.ma?new Je(new Ri({ab:b})):new Je(u.ma),_.Fa(u.L),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fc(){}n=Fc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ps(){}Ps.prototype.g=function(u,_){return new sn(u,_)};function sn(u,_){bt.call(this),this.g=new js(_),this.l=u,this.h=_&&_.messageUrlParams||null,u=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(u?u["X-WebChannel-Content-Type"]=_.messageContentType:u={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.sa&&(u?u["X-WebChannel-Client-Profile"]=_.sa:u={"X-WebChannel-Client-Profile":_.sa}),this.g.U=u,(u=_&&_.Qb)&&!N(u)&&(this.g.u=u),this.A=_&&_.supportsCrossDomainXhr||!1,this.v=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!N(_)&&(this.g.G=_,u=this.h,u!==null&&_ in u&&(u=this.h,_ in u&&delete u[_])),this.j=new es(this)}T(sn,bt),sn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){Yo(this.g)},sn.prototype.o=function(u){var _=this.g;if(typeof u=="string"){var b={};b.__data__=u,u=b}else this.v&&(b={},b.__data__=Ns(u),u=b);_.i.push(new wt(_.Ya++,u)),_.I==3&&Ii(_)},sn.prototype.N=function(){this.g.l=null,delete this.j,Yo(this.g),delete this.g,sn.Z.N.call(this)};function Gc(u){Bt.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var _=u.__sm__;if(_){e:{for(const b in _){u=b;break e}u=void 0}(this.i=u)&&(u=this.i,_=_!==null&&u in _?_[u]:void 0),this.data=_}else this.data=u}T(Gc,Bt);function Kc(){On.call(this),this.status=1}T(Kc,On);function es(u){this.g=u}T(es,Fc),es.prototype.ra=function(){kt(this.g,"a")},es.prototype.qa=function(u){kt(this.g,new Gc(u))},es.prototype.pa=function(u){kt(this.g,new Kc)},es.prototype.oa=function(){kt(this.g,"b")},Ps.prototype.createWebChannel=Ps.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,QE=function(){return new Ps},KE=function(){return va()},GE=mt,Fm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},kr.NO_ERROR=0,kr.TIMEOUT=8,kr.HTTP_ERROR=6,hh=kr,Mo.COMPLETE="complete",FE=Mo,wc.EventType=Yn,Yn.OPEN="a",Yn.CLOSE="b",Yn.ERROR="c",Yn.MESSAGE="d",bt.prototype.listen=bt.prototype.J,Pl=wc,Je.prototype.listenOnce=Je.prototype.K,Je.prototype.getLastError=Je.prototype.Ha,Je.prototype.getLastErrorCode=Je.prototype.ya,Je.prototype.getStatus=Je.prototype.ca,Je.prototype.getResponseJson=Je.prototype.La,Je.prototype.getResponseText=Je.prototype.la,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Fa,HE=Je}).apply(typeof Zu<"u"?Zu:typeof self<"u"?self:typeof window<"u"?window:{});const x1="@firebase/firestore",R1="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Jt.UNAUTHENTICATED=new Jt(null),Jt.GOOGLE_CREDENTIALS=new Jt("google-credentials-uid"),Jt.FIRST_PARTY=new Jt("first-party-uid"),Jt.MOCK_USER=new Jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new Ep("@firebase/firestore");function ao(){return fa.logLevel}function me(n,...e){if(fa.logLevel<=Pe.DEBUG){const i=e.map(Dp);fa.debug(`Firestore (${Ro}): ${n}`,...i)}}function ws(n,...e){if(fa.logLevel<=Pe.ERROR){const i=e.map(Dp);fa.error(`Firestore (${Ro}): ${n}`,...i)}}function yo(n,...e){if(fa.logLevel<=Pe.WARN){const i=e.map(Dp);fa.warn(`Firestore (${Ro}): ${n}`,...i)}}function Dp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(i){return JSON.stringify(i)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,e,i){let r="Unexpected state";typeof e=="string"?r=e:i=e,YE(n,r,i)}function YE(n,e,i){let r=`FIRESTORE (${Ro}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(i!==void 0)try{r+=" CONTEXT: "+JSON.stringify(i)}catch{r+=" CONTEXT: "+i}throw ws(r),new Error(r)}function Qe(n,e,i,r){let o="Unexpected state";typeof i=="string"?o=i:r=i,n||YE(e,o,r)}function Ce(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends $i{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.promise=new Promise(((e,i)=>{this.resolve=e,this.reject=i}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable((()=>i(Jt.UNAUTHENTICATED)))}shutdown(){}}class cN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class uN{constructor(e){this.t=e,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){Qe(this.o===void 0,42304);let r=this.i;const o=p=>this.i!==r?(r=this.i,i(p)):Promise.resolve();let c=new Es;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Es,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const p=c;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},m=p=>{me("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((p=>m(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(me("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Es)}}),0),h()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((r=>this.i!==e?(me("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Qe(typeof r.accessToken=="string",31837,{l:r}),new $E(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string",2055,{h:e}),new Jt(e)}}class hN{constructor(e,i,r){this.P=e,this.T=i,this.I=r,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class fN{constructor(e,i,r){this.P=e,this.T=i,this.I=r}getToken(){return Promise.resolve(new hN(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable((()=>i(Jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class C1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dN{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){Qe(this.o===void 0,3512);const r=c=>{c.error!=null&&me("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,me("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?i(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>r(c)))};const o=c=>{me("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>o(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):me("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new C1(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((i=>i?(Qe(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new C1(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let r=0;r<n;r++)i[r]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=mN(40);for(let c=0;c<o.length;++c)r.length<20&&o[c]<i&&(r+=e.charAt(o[c]%62))}return r}}function Ue(n,e){return n<e?-1:n>e?1:0}function Gm(n,e){const i=Math.min(n.length,e.length);for(let r=0;r<i;r++){const o=n.charAt(r),c=e.charAt(r);if(o!==c)return Rm(o)===Rm(c)?Ue(o,c):Rm(o)?1:-1}return Ue(n.length,e.length)}const pN=55296,gN=57343;function Rm(n){const e=n.charCodeAt(0);return e>=pN&&e<=gN}function _o(n,e,i){return n.length===e.length&&n.every(((r,o)=>i(r,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1="__name__";class Li{constructor(e,i,r){i===void 0?i=0:i>e.length&&we(637,{offset:i,range:e.length}),r===void 0?r=e.length-i:r>e.length-i&&we(1746,{length:r,range:e.length-i}),this.segments=e,this.offset=i,this.len=r}get length(){return this.len}isEqual(e){return Li.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof Li?e.forEach((r=>{i.push(r)})):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,r=this.limit();i<r;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const r=Math.min(e.length,i.length);for(let o=0;o<r;o++){const c=Li.compareSegments(e.get(o),i.get(o));if(c!==0)return c}return Ue(e.length,i.length)}static compareSegments(e,i){const r=Li.isNumericId(e),o=Li.isNumericId(i);return r&&!o?-1:!r&&o?1:r&&o?Li.extractNumericId(e).compare(Li.extractNumericId(i)):Gm(e,i)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gr.fromString(e.substring(4,e.length-2))}}class it extends Li{construct(e,i,r){return new it(e,i,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const r of e){if(r.indexOf("//")>=0)throw new de(ne.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);i.push(...r.split("/").filter((o=>o.length>0)))}return new it(i)}static emptyPath(){return new it([])}}const yN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Yt extends Li{construct(e,i,r){return new Yt(e,i,r)}static isValidIdentifier(e){return yN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Yt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===N1}static keyField(){return new Yt([N1])}static fromServerFormat(e){const i=[];let r="",o=0;const c=()=>{if(r.length===0)throw new de(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(r),r=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new de(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new de(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(r+=m,o++):(c(),o++)}if(c(),h)throw new de(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Yt(i)}static emptyPath(){return new Yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(it.fromString(e))}static fromName(e){return new Ee(it.fromString(e).popFirst(5))}static empty(){return new Ee(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return it.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new it(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(n,e,i){if(!i)throw new de(ne.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function _N(n,e,i,r){if(e===!0&&r===!0)throw new de(ne.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function I1(n){if(!Ee.isDocumentKey(n))throw new de(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function D1(n){if(Ee.isDocumentKey(n))throw new de(ne.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function WE(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function $h(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we(12329,{type:typeof n})}function As(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new de(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=$h(n);throw new de(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(n,e){const i={typeString:n};return e&&(i.value=e),i}function dc(n,e){if(!WE(n))throw new de(ne.INVALID_ARGUMENT,"JSON must be an object");let i;for(const r in e)if(e[r]){const o=e[r].typeString,c="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){i=`JSON missing required field: '${r}'`;break}const h=n[r];if(o&&typeof h!==o){i=`JSON field '${r}' must be a ${o}.`;break}if(c!==void 0&&h!==c.value){i=`Expected '${r}' field to equal '${c.value}'`;break}}if(i)throw new de(ne.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=-62135596800,k1=1e6;class at{static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),r=Math.floor((e-1e3*i)*k1);return new at(i,r)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new de(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new de(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<O1)throw new de(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/k1}_compareTo(e){return this.seconds===e.seconds?Ue(this.nanoseconds,e.nanoseconds):Ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:at._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(dc(e,at._jsonSchema))return new at(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-O1;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}at._jsonSchemaVersion="firestore/timestamp/1.0",at._jsonSchema={type:Ot("string",at._jsonSchemaVersion),seconds:Ot("number"),nanoseconds:Ot("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{static fromTimestamp(e){return new xe(e)}static min(){return new xe(new at(0,0))}static max(){return new xe(new at(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=-1;function vN(n,e){const i=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,o=xe.fromTimestamp(r===1e9?new at(i+1,0):new at(i,r));return new vr(o,Ee.empty(),e)}function EN(n){return new vr(n.readTime,n.key,Zl)}class vr{constructor(e,i,r){this.readTime=e,this.documentKey=i,this.largestBatchId=r}static min(){return new vr(xe.min(),Ee.empty(),Zl)}static max(){return new vr(xe.max(),Ee.empty(),Zl)}}function bN(n,e){let i=n.readTime.compareTo(e.readTime);return i!==0?i:(i=Ee.comparator(n.documentKey,e.documentKey),i!==0?i:Ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(n){if(n.code!==ne.FAILED_PRECONDITION||n.message!==TN)throw n;me("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(e){return this.next(void 0,e)}next(e,i){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(e,this.result):new ie(((r,o)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(r,o)},this.catchCallback=c=>{this.wrapFailure(i,c).next(r,o)}}))}toPromise(){return new Promise(((e,i)=>{this.next(e,i)}))}wrapUserFunction(e){try{const i=e();return i instanceof ie?i:ie.resolve(i)}catch(i){return ie.reject(i)}}wrapSuccess(e,i){return e?this.wrapUserFunction((()=>e(i))):ie.resolve(i)}wrapFailure(e,i){return e?this.wrapUserFunction((()=>e(i))):ie.reject(i)}static resolve(e){return new ie(((i,r)=>{i(e)}))}static reject(e){return new ie(((i,r)=>{r(e)}))}static waitFor(e){return new ie(((i,r)=>{let o=0,c=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++c,h&&c===o&&i()}),(p=>r(p)))})),h=!0,c===o&&i()}))}static or(e){let i=ie.resolve(!1);for(const r of e)i=i.next((o=>o?ie.resolve(o):r()));return i}static forEach(e,i){const r=[];return e.forEach(((o,c)=>{r.push(i.call(this,o,c))})),this.waitFor(r)}static mapArray(e,i){return new ie(((r,o)=>{const c=e.length,h=new Array(c);let m=0;for(let p=0;p<c;p++){const g=p;i(e[g]).next((E=>{h[g]=E,++m,m===c&&r(h)}),(E=>o(E)))}}))}static doWhile(e,i){return new ie(((r,o)=>{const c=()=>{e()===!0?i().next((()=>{c()}),o):r()};c()}))}}function wN(n){const e=n.match(/Android ([\d.]+)/i),i=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function No(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,i){this.previousValue=e,i&&(i.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>i.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Xh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=-1;function Wh(n){return n==null}function Rh(n){return n===0&&1/n==-1/0}function AN(n){return typeof n=="number"&&Number.isInteger(n)&&!Rh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="";function xN(n){let e="";for(let i=0;i<n.length;i++)e.length>0&&(e=M1(e)),e=RN(n.get(i),e);return M1(e)}function RN(n,e){let i=e;const r=n.length;for(let o=0;o<r;o++){const c=n.charAt(o);switch(c){case"\0":i+="";break;case JE:i+="";break;default:i+=c}}return i}function M1(n){return n+JE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(n){let e=0;for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&e++;return e}function Cr(n,e){for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&e(i,n[i])}function ZE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,i){this.comparator=e,this.root=i||Qt.EMPTY}insert(e,i){return new ht(this.comparator,this.root.insert(e,i,this.comparator).copy(null,null,Qt.BLACK,null,null))}remove(e){return new ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qt.BLACK,null,null))}get(e){let i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return i.value;r<0?i=i.left:r>0&&(i=i.right)}return null}indexOf(e){let i=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return i+r.left.size;o<0?r=r.left:(i+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((i,r)=>(e(i,r),!1)))}toString(){const e=[];return this.inorderTraversal(((i,r)=>(e.push(`${i}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eh(this.root,e,this.comparator,!1)}getReverseIterator(){return new eh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eh(this.root,e,this.comparator,!0)}}class eh{constructor(e,i,r,o){this.isReverse=o,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=i?r(e.key,i):1,i&&o&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const i={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qt{constructor(e,i,r,o,c){this.key=e,this.value=i,this.color=r??Qt.RED,this.left=o??Qt.EMPTY,this.right=c??Qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,i,r,o,c){return new Qt(e??this.key,i??this.value,r??this.color,o??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,r){let o=this;const c=r(e,o.key);return o=c<0?o.copy(null,null,null,o.left.insert(e,i,r),null):c===0?o.copy(null,i,null,null,null):o.copy(null,null,null,null,o.right.insert(e,i,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,i){let r,o=this;if(i(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,i),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),i(e,o.key)===0){if(o.right.isEmpty())return Qt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,i))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}Qt.EMPTY=null,Qt.RED=!0,Qt.BLACK=!1;Qt.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,i,r,o,c){return this}insert(e,i,r){return new Qt(e,i)}remove(e,i){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.comparator=e,this.data=new ht(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((i,r)=>(e(i),!1)))}forEachInRange(e,i){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;i(o.key)}}forEachWhile(e,i){let r;for(r=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const i=this.data.getIteratorFrom(e);return i.hasNext()?i.getNext().key:null}getIterator(){return new j1(this.data.getIterator())}getIteratorFrom(e){return new j1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let i=this;return i.size<e.size&&(i=e,e=this),e.forEach((r=>{i=i.add(r)})),i}isEqual(e){if(!(e instanceof Vt)||this.size!==e.size)return!1;const i=this.data.getIterator(),r=e.data.getIterator();for(;i.hasNext();){const o=i.getNext().key,c=r.getNext().key;if(this.comparator(o,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((i=>{e.push(i)})),e}toString(){const e=[];return this.forEach((i=>e.push(i))),"SortedSet("+e.toString()+")"}copy(e){const i=new Vt(this.comparator);return i.data=e,i}}class j1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.fields=e,e.sort(Yt.comparator)}static empty(){return new Nn([])}unionWith(e){let i=new Vt(Yt.comparator);for(const r of this.fields)i=i.add(r);for(const r of e)i=i.add(r);return new Nn(i.toArray())}covers(e){for(const i of this.fields)if(i.isPrefixOf(e))return!0;return!1}isEqual(e){return _o(this.fields,e.fields,((i,r)=>i.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.binaryString=e}static fromBase64String(e){const i=(function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new eb("Invalid base64 string: "+c):c}})(e);return new $t(i)}static fromUint8Array(e){const i=(function(o){let c="";for(let h=0;h<o.length;++h)c+=String.fromCharCode(o[h]);return c})(e);return new $t(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const r=new Uint8Array(i.length);for(let o=0;o<i.length;o++)r[o]=i.charCodeAt(o);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$t.EMPTY_BYTE_STRING=new $t("");const CN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(n){if(Qe(!!n,39018),typeof n=="string"){let e=0;const i=CN.exec(n);if(Qe(!!i,46558,{timestamp:n}),i[1]){let o=i[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:vt(n.seconds),nanos:vt(n.nanos)}}function vt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function br(n){return typeof n=="string"?$t.fromBase64String(n):$t.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb="server_timestamp",nb="__type__",ib="__previous_value__",sb="__local_write_time__";function Mp(n){return(n?.mapValue?.fields||{})[nb]?.stringValue===tb}function Jh(n){const e=n.mapValue.fields[ib];return Mp(e)?Jh(e):e}function ec(n){const e=Er(n.mapValue.fields[sb].timestampValue);return new at(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,i,r,o,c,h,m,p,g,E){this.databaseId=e,this.appId=i,this.persistenceKey=r,this.host=o,this.ssl=c,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=E}}const Ch="(default)";class tc{constructor(e,i){this.projectId=e,this.database=i||Ch}static empty(){return new tc("","")}get isDefaultDatabase(){return this.database===Ch}isEqual(e){return e instanceof tc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="__type__",IN="__max__",th={mapValue:{}},ab="__vector__",Nh="value";function Tr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Mp(n)?4:ON(n)?9007199254740991:DN(n)?10:11:we(28295,{value:n})}function Qi(n,e){if(n===e)return!0;const i=Tr(n);if(i!==Tr(e))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ec(n).isEqual(ec(e));case 3:return(function(o,c){if(typeof o.timestampValue=="string"&&typeof c.timestampValue=="string"&&o.timestampValue.length===c.timestampValue.length)return o.timestampValue===c.timestampValue;const h=Er(o.timestampValue),m=Er(c.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,c){return br(o.bytesValue).isEqual(br(c.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,c){return vt(o.geoPointValue.latitude)===vt(c.geoPointValue.latitude)&&vt(o.geoPointValue.longitude)===vt(c.geoPointValue.longitude)})(n,e);case 2:return(function(o,c){if("integerValue"in o&&"integerValue"in c)return vt(o.integerValue)===vt(c.integerValue);if("doubleValue"in o&&"doubleValue"in c){const h=vt(o.doubleValue),m=vt(c.doubleValue);return h===m?Rh(h)===Rh(m):isNaN(h)&&isNaN(m)}return!1})(n,e);case 9:return _o(n.arrayValue.values||[],e.arrayValue.values||[],Qi);case 10:case 11:return(function(o,c){const h=o.mapValue.fields||{},m=c.mapValue.fields||{};if(V1(h)!==V1(m))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(m[p]===void 0||!Qi(h[p],m[p])))return!1;return!0})(n,e);default:return we(52216,{left:n})}}function nc(n,e){return(n.values||[]).find((i=>Qi(i,e)))!==void 0}function vo(n,e){if(n===e)return 0;const i=Tr(n),r=Tr(e);if(i!==r)return Ue(i,r);switch(i){case 0:case 9007199254740991:return 0;case 1:return Ue(n.booleanValue,e.booleanValue);case 2:return(function(c,h){const m=vt(c.integerValue||c.doubleValue),p=vt(h.integerValue||h.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1})(n,e);case 3:return L1(n.timestampValue,e.timestampValue);case 4:return L1(ec(n),ec(e));case 5:return Gm(n.stringValue,e.stringValue);case 6:return(function(c,h){const m=br(c),p=br(h);return m.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(c,h){const m=c.split("/"),p=h.split("/");for(let g=0;g<m.length&&g<p.length;g++){const E=Ue(m[g],p[g]);if(E!==0)return E}return Ue(m.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(c,h){const m=Ue(vt(c.latitude),vt(h.latitude));return m!==0?m:Ue(vt(c.longitude),vt(h.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return P1(n.arrayValue,e.arrayValue);case 10:return(function(c,h){const m=c.fields||{},p=h.fields||{},g=m[Nh]?.arrayValue,E=p[Nh]?.arrayValue,T=Ue(g?.values?.length||0,E?.values?.length||0);return T!==0?T:P1(g,E)})(n.mapValue,e.mapValue);case 11:return(function(c,h){if(c===th.mapValue&&h===th.mapValue)return 0;if(c===th.mapValue)return 1;if(h===th.mapValue)return-1;const m=c.fields||{},p=Object.keys(m),g=h.fields||{},E=Object.keys(g);p.sort(),E.sort();for(let T=0;T<p.length&&T<E.length;++T){const w=Gm(p[T],E[T]);if(w!==0)return w;const k=vo(m[p[T]],g[E[T]]);if(k!==0)return k}return Ue(p.length,E.length)})(n.mapValue,e.mapValue);default:throw we(23264,{he:i})}}function L1(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ue(n,e);const i=Er(n),r=Er(e),o=Ue(i.seconds,r.seconds);return o!==0?o:Ue(i.nanos,r.nanos)}function P1(n,e){const i=n.values||[],r=e.values||[];for(let o=0;o<i.length&&o<r.length;++o){const c=vo(i[o],r[o]);if(c)return c}return Ue(i.length,r.length)}function Eo(n){return Km(n)}function Km(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(i){const r=Er(i);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(i){return br(i).toBase64()})(n.bytesValue):"referenceValue"in n?(function(i){return Ee.fromName(i).toString()})(n.referenceValue):"geoPointValue"in n?(function(i){return`geo(${i.latitude},${i.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(i){let r="[",o=!0;for(const c of i.values||[])o?o=!1:r+=",",r+=Km(c);return r+"]"})(n.arrayValue):"mapValue"in n?(function(i){const r=Object.keys(i.fields||{}).sort();let o="{",c=!0;for(const h of r)c?c=!1:o+=",",o+=`${h}:${Km(i.fields[h])}`;return o+"}"})(n.mapValue):we(61005,{value:n})}function fh(n){switch(Tr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Jh(n);return e?16+fh(e):16;case 5:return 2*n.stringValue.length;case 6:return br(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((o,c)=>o+fh(c)),0)})(n.arrayValue);case 10:case 11:return(function(r){let o=0;return Cr(r.fields,((c,h)=>{o+=c.length+fh(h)})),o})(n.mapValue);default:throw we(13486,{value:n})}}function U1(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Qm(n){return!!n&&"integerValue"in n}function Vp(n){return!!n&&"arrayValue"in n}function z1(n){return!!n&&"nullValue"in n}function B1(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function dh(n){return!!n&&"mapValue"in n}function DN(n){return(n?.mapValue?.fields||{})[rb]?.stringValue===ab}function Fl(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Cr(n.mapValue.fields,((i,r)=>e.mapValue.fields[i]=Fl(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let i=0;i<(n.arrayValue.values||[]).length;++i)e.arrayValue.values[i]=Fl(n.arrayValue.values[i]);return e}return{...n}}function ON(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===IN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.value=e}static empty(){return new yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let i=this.value;for(let r=0;r<e.length-1;++r)if(i=(i.mapValue.fields||{})[e.get(r)],!dh(i))return null;return i=(i.mapValue.fields||{})[e.lastSegment()],i||null}}set(e,i){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fl(i)}setAll(e){let i=Yt.emptyPath(),r={},o=[];e.forEach(((h,m)=>{if(!i.isImmediateParentOf(m)){const p=this.getFieldsMap(i);this.applyChanges(p,r,o),r={},o=[],i=m.popLast()}h?r[m.lastSegment()]=Fl(h):o.push(m.lastSegment())}));const c=this.getFieldsMap(i);this.applyChanges(c,r,o)}delete(e){const i=this.field(e.popLast());dh(i)&&i.mapValue.fields&&delete i.mapValue.fields[e.lastSegment()]}isEqual(e){return Qi(this.value,e.value)}getFieldsMap(e){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=i.mapValue.fields[e.get(r)];dh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},i.mapValue.fields[e.get(r)]=o),i=o}return i.mapValue.fields}applyChanges(e,i,r){Cr(i,((o,c)=>e[o]=c));for(const o of r)delete e[o]}clone(){return new yn(Fl(this.value))}}function ob(n){const e=[];return Cr(n.fields,((i,r)=>{const o=new Yt([i]);if(dh(r)){const c=ob(r.mapValue).fields;if(c.length===0)e.push(o);else for(const h of c)e.push(o.child(h))}else e.push(o)})),new Nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,i,r,o,c,h,m){this.key=e,this.documentType=i,this.version=r,this.readTime=o,this.createTime=c,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Zt(e,0,xe.min(),xe.min(),xe.min(),yn.empty(),0)}static newFoundDocument(e,i,r,o){return new Zt(e,1,i,xe.min(),r,o,0)}static newNoDocument(e,i){return new Zt(e,2,i,xe.min(),xe.min(),yn.empty(),0)}static newUnknownDocument(e,i){return new Zt(e,3,i,xe.min(),xe.min(),yn.empty(),2)}convertToFoundDocument(e,i){return!this.createTime.isEqual(xe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,i){this.position=e,this.inclusive=i}}function q1(n,e,i){let r=0;for(let o=0;o<n.position.length;o++){const c=e[o],h=n.position[o];if(c.field.isKeyField()?r=Ee.comparator(Ee.fromName(h.referenceValue),i.key):r=vo(h,i.data.field(c.field)),c.dir==="desc"&&(r*=-1),r!==0)break}return r}function H1(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let i=0;i<n.position.length;i++)if(!Qi(n.position[i],e.position[i]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,i="asc"){this.field=e,this.dir=i}}function kN(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{}class Dt extends lb{constructor(e,i,r){super(),this.field=e,this.op=i,this.value=r}static create(e,i,r){return e.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(e,i,r):new VN(e,i,r):i==="array-contains"?new PN(e,r):i==="in"?new UN(e,r):i==="not-in"?new zN(e,r):i==="array-contains-any"?new BN(e,r):new Dt(e,i,r)}static createKeyFieldInFilter(e,i,r){return i==="in"?new jN(e,r):new LN(e,r)}matches(e){const i=e.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(vo(i,this.value)):i!==null&&Tr(this.value)===Tr(i)&&this.matchesComparison(vo(i,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ui extends lb{constructor(e,i){super(),this.filters=e,this.op=i,this.Pe=null}static create(e,i){return new ui(e,i)}matches(e){return cb(this)?this.filters.find((i=>!i.matches(e)))===void 0:this.filters.find((i=>i.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,i)=>e.concat(i.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function cb(n){return n.op==="and"}function ub(n){return MN(n)&&cb(n)}function MN(n){for(const e of n.filters)if(e instanceof ui)return!1;return!0}function Ym(n){if(n instanceof Dt)return n.field.canonicalString()+n.op.toString()+Eo(n.value);if(ub(n))return n.filters.map((e=>Ym(e))).join(",");{const e=n.filters.map((i=>Ym(i))).join(",");return`${n.op}(${e})`}}function hb(n,e){return n instanceof Dt?(function(r,o){return o instanceof Dt&&r.op===o.op&&r.field.isEqual(o.field)&&Qi(r.value,o.value)})(n,e):n instanceof ui?(function(r,o){return o instanceof ui&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce(((c,h,m)=>c&&hb(h,o.filters[m])),!0):!1})(n,e):void we(19439)}function fb(n){return n instanceof Dt?(function(i){return`${i.field.canonicalString()} ${i.op} ${Eo(i.value)}`})(n):n instanceof ui?(function(i){return i.op.toString()+" {"+i.getFilters().map(fb).join(" ,")+"}"})(n):"Filter"}class VN extends Dt{constructor(e,i,r){super(e,i,r),this.key=Ee.fromName(r.referenceValue)}matches(e){const i=Ee.comparator(e.key,this.key);return this.matchesComparison(i)}}class jN extends Dt{constructor(e,i){super(e,"in",i),this.keys=db("in",i)}matches(e){return this.keys.some((i=>i.isEqual(e.key)))}}class LN extends Dt{constructor(e,i){super(e,"not-in",i),this.keys=db("not-in",i)}matches(e){return!this.keys.some((i=>i.isEqual(e.key)))}}function db(n,e){return(e.arrayValue?.values||[]).map((i=>Ee.fromName(i.referenceValue)))}class PN extends Dt{constructor(e,i){super(e,"array-contains",i)}matches(e){const i=e.data.field(this.field);return Vp(i)&&nc(i.arrayValue,this.value)}}class UN extends Dt{constructor(e,i){super(e,"in",i)}matches(e){const i=e.data.field(this.field);return i!==null&&nc(this.value.arrayValue,i)}}class zN extends Dt{constructor(e,i){super(e,"not-in",i)}matches(e){if(nc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=e.data.field(this.field);return i!==null&&i.nullValue===void 0&&!nc(this.value.arrayValue,i)}}class BN extends Dt{constructor(e,i){super(e,"array-contains-any",i)}matches(e){const i=e.data.field(this.field);return!(!Vp(i)||!i.arrayValue.values)&&i.arrayValue.values.some((r=>nc(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,i=null,r=[],o=[],c=null,h=null,m=null){this.path=e,this.collectionGroup=i,this.orderBy=r,this.filters=o,this.limit=c,this.startAt=h,this.endAt=m,this.Te=null}}function F1(n,e=null,i=[],r=[],o=null,c=null,h=null){return new qN(n,e,i,r,o,c,h)}function jp(n){const e=Ce(n);if(e.Te===null){let i=e.path.canonicalString();e.collectionGroup!==null&&(i+="|cg:"+e.collectionGroup),i+="|f:",i+=e.filters.map((r=>Ym(r))).join(","),i+="|ob:",i+=e.orderBy.map((r=>(function(c){return c.field.canonicalString()+c.dir})(r))).join(","),Wh(e.limit)||(i+="|l:",i+=e.limit),e.startAt&&(i+="|lb:",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map((r=>Eo(r))).join(",")),e.endAt&&(i+="|ub:",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map((r=>Eo(r))).join(",")),e.Te=i}return e.Te}function Lp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<n.orderBy.length;i++)if(!kN(n.orderBy[i],e.orderBy[i]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let i=0;i<n.filters.length;i++)if(!hb(n.filters[i],e.filters[i]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!H1(n.startAt,e.startAt)&&H1(n.endAt,e.endAt)}function $m(n){return Ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,i=null,r=[],o=[],c=null,h="F",m=null,p=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=r,this.filters=o,this.limit=c,this.limitType=h,this.startAt=m,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function HN(n,e,i,r,o,c,h,m){return new mc(n,e,i,r,o,c,h,m)}function Pp(n){return new mc(n)}function G1(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function mb(n){return n.collectionGroup!==null}function Gl(n){const e=Ce(n);if(e.Ie===null){e.Ie=[];const i=new Set;for(const c of e.explicitOrderBy)e.Ie.push(c),i.add(c.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Vt(Yt.comparator);return h.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(m=m.add(g.field))}))})),m})(e).forEach((c=>{i.has(c.canonicalString())||c.isKeyField()||e.Ie.push(new Dh(c,r))})),i.has(Yt.keyField().canonicalString())||e.Ie.push(new Dh(Yt.keyField(),r))}return e.Ie}function qi(n){const e=Ce(n);return e.Ee||(e.Ee=FN(e,Gl(n))),e.Ee}function FN(n,e){if(n.limitType==="F")return F1(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const c=o.dir==="desc"?"asc":"desc";return new Dh(o.field,c)}));const i=n.endAt?new Ih(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ih(n.startAt.position,n.startAt.inclusive):null;return F1(n.path,n.collectionGroup,e,n.filters,n.limit,i,r)}}function Xm(n,e){const i=n.filters.concat([e]);return new mc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),i,n.limit,n.limitType,n.startAt,n.endAt)}function Wm(n,e,i){return new mc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,i,n.startAt,n.endAt)}function Zh(n,e){return Lp(qi(n),qi(e))&&n.limitType===e.limitType}function pb(n){return`${jp(qi(n))}|lt:${n.limitType}`}function oo(n){return`Query(target=${(function(i){let r=i.path.canonicalString();return i.collectionGroup!==null&&(r+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(r+=`, filters: [${i.filters.map((o=>fb(o))).join(", ")}]`),Wh(i.limit)||(r+=", limit: "+i.limit),i.orderBy.length>0&&(r+=`, orderBy: [${i.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),i.startAt&&(r+=", startAt: ",r+=i.startAt.inclusive?"b:":"a:",r+=i.startAt.position.map((o=>Eo(o))).join(",")),i.endAt&&(r+=", endAt: ",r+=i.endAt.inclusive?"a:":"b:",r+=i.endAt.position.map((o=>Eo(o))).join(",")),`Target(${r})`})(qi(n))}; limitType=${n.limitType})`}function ef(n,e){return e.isFoundDocument()&&(function(r,o){const c=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(c):Ee.isDocumentKey(r.path)?r.path.isEqual(c):r.path.isImmediateParentOf(c)})(n,e)&&(function(r,o){for(const c of Gl(r))if(!c.field.isKeyField()&&o.data.field(c.field)===null)return!1;return!0})(n,e)&&(function(r,o){for(const c of r.filters)if(!c.matches(o))return!1;return!0})(n,e)&&(function(r,o){return!(r.startAt&&!(function(h,m,p){const g=q1(h,m,p);return h.inclusive?g<=0:g<0})(r.startAt,Gl(r),o)||r.endAt&&!(function(h,m,p){const g=q1(h,m,p);return h.inclusive?g>=0:g>0})(r.endAt,Gl(r),o))})(n,e)}function GN(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gb(n){return(e,i)=>{let r=!1;for(const o of Gl(n)){const c=KN(o,e,i);if(c!==0)return c;r=r||o.field.isKeyField()}return 0}}function KN(n,e,i){const r=n.field.isKeyField()?Ee.comparator(e.key,i.key):(function(c,h,m){const p=h.data.field(c),g=m.data.field(c);return p!==null&&g!==null?vo(p,g):we(42886)})(n.field,e,i);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return we(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,i){this.mapKeyFn=e,this.equalsFn=i,this.inner={},this.innerSize=0}get(e){const i=this.mapKeyFn(e),r=this.inner[i];if(r!==void 0){for(const[o,c]of r)if(this.equalsFn(o,e))return c}}has(e){return this.get(e)!==void 0}set(e,i){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,i]],void this.innerSize++;for(let c=0;c<o.length;c++)if(this.equalsFn(o[c][0],e))return void(o[c]=[e,i]);o.push([e,i]),this.innerSize++}delete(e){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[i]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,((i,r)=>{for(const[o,c]of r)e(o,c)}))}isEmpty(){return ZE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=new ht(Ee.comparator);function xs(){return QN}const yb=new ht(Ee.comparator);function Ul(...n){let e=yb;for(const i of n)e=e.insert(i.key,i);return e}function _b(n){let e=yb;return n.forEach(((i,r)=>e=e.insert(i,r.overlayedDocument))),e}function aa(){return Kl()}function vb(){return Kl()}function Kl(){return new ya((n=>n.toString()),((n,e)=>n.isEqual(e)))}const YN=new ht(Ee.comparator),$N=new Vt(Ee.comparator);function ze(...n){let e=$N;for(const i of n)e=e.add(i);return e}const XN=new Vt(Ue);function WN(){return XN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rh(e)?"-0":e}}function Eb(n){return{integerValue:""+n}}function JN(n,e){return AN(e)?Eb(e):Up(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this._=void 0}}function ZN(n,e,i){return n instanceof Oh?(function(o,c){const h={fields:{[nb]:{stringValue:tb},[sb]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return c&&Mp(c)&&(c=Jh(c)),c&&(h.fields[ib]=c),{mapValue:h}})(i,e):n instanceof ic?Tb(n,e):n instanceof sc?Sb(n,e):(function(o,c){const h=bb(o,c),m=K1(h)+K1(o.Ae);return Qm(h)&&Qm(o.Ae)?Eb(m):Up(o.serializer,m)})(n,e)}function eI(n,e,i){return n instanceof ic?Tb(n,e):n instanceof sc?Sb(n,e):i}function bb(n,e){return n instanceof kh?(function(r){return Qm(r)||(function(c){return!!c&&"doubleValue"in c})(r)})(e)?e:{integerValue:0}:null}class Oh extends tf{}class ic extends tf{constructor(e){super(),this.elements=e}}function Tb(n,e){const i=wb(e);for(const r of n.elements)i.some((o=>Qi(o,r)))||i.push(r);return{arrayValue:{values:i}}}class sc extends tf{constructor(e){super(),this.elements=e}}function Sb(n,e){let i=wb(e);for(const r of n.elements)i=i.filter((o=>!Qi(o,r)));return{arrayValue:{values:i}}}class kh extends tf{constructor(e,i){super(),this.serializer=e,this.Ae=i}}function K1(n){return vt(n.integerValue||n.doubleValue)}function wb(n){return Vp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function tI(n,e){return n.field.isEqual(e.field)&&(function(r,o){return r instanceof ic&&o instanceof ic||r instanceof sc&&o instanceof sc?_o(r.elements,o.elements,Qi):r instanceof kh&&o instanceof kh?Qi(r.Ae,o.Ae):r instanceof Oh&&o instanceof Oh})(n.transform,e.transform)}class nI{constructor(e,i){this.version=e,this.transformResults=i}}class Hi{constructor(e,i){this.updateTime=e,this.exists=i}static none(){return new Hi}static exists(e){return new Hi(void 0,e)}static updateTime(e){return new Hi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class nf{}function Ab(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Rb(n.key,Hi.none()):new pc(n.key,n.data,Hi.none());{const i=n.data,r=yn.empty();let o=new Vt(Yt.comparator);for(let c of e.fields)if(!o.has(c)){let h=i.field(c);h===null&&c.length>1&&(c=c.popLast(),h=i.field(c)),h===null?r.delete(c):r.set(c,h),o=o.add(c)}return new Nr(n.key,r,new Nn(o.toArray()),Hi.none())}}function iI(n,e,i){n instanceof pc?(function(o,c,h){const m=o.value.clone(),p=Y1(o.fieldTransforms,c,h.transformResults);m.setAll(p),c.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(n,e,i):n instanceof Nr?(function(o,c,h){if(!mh(o.precondition,c))return void c.convertToUnknownDocument(h.version);const m=Y1(o.fieldTransforms,c,h.transformResults),p=c.data;p.setAll(xb(o)),p.setAll(m),c.convertToFoundDocument(h.version,p).setHasCommittedMutations()})(n,e,i):(function(o,c,h){c.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,i)}function Ql(n,e,i,r){return n instanceof pc?(function(c,h,m,p){if(!mh(c.precondition,h))return m;const g=c.value.clone(),E=$1(c.fieldTransforms,p,h);return g.setAll(E),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null})(n,e,i,r):n instanceof Nr?(function(c,h,m,p){if(!mh(c.precondition,h))return m;const g=$1(c.fieldTransforms,p,h),E=h.data;return E.setAll(xb(c)),E.setAll(g),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((T=>T.field)))})(n,e,i,r):(function(c,h,m){return mh(c.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(n,e,i)}function sI(n,e){let i=null;for(const r of n.fieldTransforms){const o=e.data.field(r.field),c=bb(r.transform,o||null);c!=null&&(i===null&&(i=yn.empty()),i.set(r.field,c))}return i||null}function Q1(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&_o(r,o,((c,h)=>tI(c,h)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class pc extends nf{constructor(e,i,r,o=[]){super(),this.key=e,this.value=i,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Nr extends nf{constructor(e,i,r,o,c=[]){super(),this.key=e,this.data=i,this.fieldMask=r,this.precondition=o,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function xb(n){const e=new Map;return n.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const r=n.data.field(i);e.set(i,r)}})),e}function Y1(n,e,i){const r=new Map;Qe(n.length===i.length,32656,{Re:i.length,Ve:n.length});for(let o=0;o<i.length;o++){const c=n[o],h=c.transform,m=e.data.field(c.field);r.set(c.field,eI(h,m,i[o]))}return r}function $1(n,e,i){const r=new Map;for(const o of n){const c=o.transform,h=i.data.field(o.field);r.set(o.field,ZN(c,h,e))}return r}class Rb extends nf{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rI extends nf{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,i,r,o){this.batchId=e,this.localWriteTime=i,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,i){const r=i.mutationResults;for(let o=0;o<this.mutations.length;o++){const c=this.mutations[o];c.key.isEqual(e.key)&&iI(c,e,r[o])}}applyToLocalView(e,i){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(i=Ql(r,e,i,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(i=Ql(r,e,i,this.localWriteTime));return i}applyToLocalDocumentSet(e,i){const r=vb();return this.mutations.forEach((o=>{const c=e.get(o.key),h=c.overlayedDocument;let m=this.applyToLocalView(h,c.mutatedFields);m=i.has(o.key)?null:m;const p=Ab(h,m);p!==null&&r.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(xe.min())})),r}keys(){return this.mutations.reduce(((e,i)=>e.add(i.key)),ze())}isEqual(e){return this.batchId===e.batchId&&_o(this.mutations,e.mutations,((i,r)=>Q1(i,r)))&&_o(this.baseMutations,e.baseMutations,((i,r)=>Q1(i,r)))}}class zp{constructor(e,i,r,o){this.batch=e,this.commitVersion=i,this.mutationResults=r,this.docVersions=o}static from(e,i,r){Qe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let o=(function(){return YN})();const c=e.mutations;for(let h=0;h<c.length;h++)o=o.insert(c[h].key,r[h].version);return new zp(e,i,r,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,i){this.largestBatchId=e,this.mutation=i}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,i){this.count=e,this.unchangedNames=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It,qe;function cI(n){switch(n){case ne.OK:return we(64938);case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0;default:return we(15467,{code:n})}}function Cb(n){if(n===void 0)return ws("GRPC error has no .code"),ne.UNKNOWN;switch(n){case It.OK:return ne.OK;case It.CANCELLED:return ne.CANCELLED;case It.UNKNOWN:return ne.UNKNOWN;case It.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case It.INTERNAL:return ne.INTERNAL;case It.UNAVAILABLE:return ne.UNAVAILABLE;case It.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case It.NOT_FOUND:return ne.NOT_FOUND;case It.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case It.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case It.ABORTED:return ne.ABORTED;case It.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case It.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case It.DATA_LOSS:return ne.DATA_LOSS;default:return we(39323,{code:n})}}(qe=It||(It={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=new gr([4294967295,4294967295],0);function X1(n){const e=uI().encode(n),i=new qE;return i.update(e),new Uint8Array(i.digest())}function W1(n){const e=new DataView(n.buffer),i=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),c=e.getUint32(12,!0);return[new gr([i,r],0),new gr([o,c],0)]}class Bp{constructor(e,i,r){if(this.bitmap=e,this.padding=i,this.hashCount=r,i<0||i>=8)throw new zl(`Invalid padding: ${i}`);if(r<0)throw new zl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zl(`Invalid hash count: ${r}`);if(e.length===0&&i!==0)throw new zl(`Invalid padding when bitmap length is 0: ${i}`);this.ge=8*e.length-i,this.pe=gr.fromNumber(this.ge)}ye(e,i,r){let o=e.add(i.multiply(gr.fromNumber(r)));return o.compare(hI)===1&&(o=new gr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const i=X1(e),[r,o]=W1(i);for(let c=0;c<this.hashCount;c++){const h=this.ye(r,o,c);if(!this.we(h))return!1}return!0}static create(e,i,r){const o=e%8==0?0:8-e%8,c=new Uint8Array(Math.ceil(e/8)),h=new Bp(c,o,i);return r.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const i=X1(e),[r,o]=W1(i);for(let c=0;c<this.hashCount;c++){const h=this.ye(r,o,c);this.Se(h)}}Se(e){const i=Math.floor(e/8),r=e%8;this.bitmap[i]|=1<<r}}class zl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,i,r,o,c){this.snapshotVersion=e,this.targetChanges=i,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,i,r){const o=new Map;return o.set(e,gc.createSynthesizedTargetChangeForCurrentChange(e,i,r)),new sf(xe.min(),o,new ht(Ue),xs(),ze())}}class gc{constructor(e,i,r,o,c){this.resumeToken=e,this.current=i,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,i,r){return new gc(r,i,ze(),ze(),ze())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,i,r,o){this.be=e,this.removedTargetIds=i,this.key=r,this.De=o}}class Nb{constructor(e,i){this.targetId=e,this.Ce=i}}class Ib{constructor(e,i,r=$t.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=i,this.resumeToken=r,this.cause=o}}class J1{constructor(){this.ve=0,this.Fe=Z1(),this.Me=$t.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ze(),i=ze(),r=ze();return this.Fe.forEach(((o,c)=>{switch(c){case 0:e=e.add(o);break;case 2:i=i.add(o);break;case 1:r=r.add(o);break;default:we(38017,{changeType:c})}})),new gc(this.Me,this.xe,e,i,r)}qe(){this.Oe=!1,this.Fe=Z1()}Qe(e,i){this.Oe=!0,this.Fe=this.Fe.insert(e,i)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Qe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class fI{constructor(e){this.Ge=e,this.ze=new Map,this.je=xs(),this.Je=nh(),this.He=nh(),this.Ye=new ht(Ue)}Ze(e){for(const i of e.be)e.De&&e.De.isFoundDocument()?this.Xe(i,e.De):this.et(i,e.key,e.De);for(const i of e.removedTargetIds)this.et(i,e.key,e.De)}tt(e){this.forEachTarget(e,(i=>{const r=this.nt(i);switch(e.state){case 0:this.rt(i)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(i);break;case 3:this.rt(i)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(i)&&(this.it(i),r.Le(e.resumeToken));break;default:we(56790,{state:e.state})}}))}forEachTarget(e,i){e.targetIds.length>0?e.targetIds.forEach(i):this.ze.forEach(((r,o)=>{this.rt(o)&&i(o)}))}st(e){const i=e.targetId,r=e.Ce.count,o=this.ot(i);if(o){const c=o.target;if($m(c))if(r===0){const h=new Ee(c.path);this.et(i,h,Zt.newNoDocument(h,xe.min()))}else Qe(r===1,20013,{expectedCount:r});else{const h=this._t(i);if(h!==r){const m=this.ut(e),p=m?this.ct(m,e,h):1;if(p!==0){this.it(i);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(i,g)}}}}}ut(e){const i=e.Ce.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:c=0}=i;let h,m;try{h=br(r).toUint8Array()}catch(p){if(p instanceof eb)return yo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Bp(h,o,c)}catch(p){return yo(p instanceof zl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.ge===0?null:m}ct(e,i,r){return i.Ce.count===r-this.Pt(e,i.targetId)?0:2}Pt(e,i){const r=this.Ge.getRemoteKeysForTarget(i);let o=0;return r.forEach((c=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${c.path.canonicalString()}`;e.mightContain(m)||(this.et(i,c,null),o++)})),o}Tt(e){const i=new Map;this.ze.forEach(((c,h)=>{const m=this.ot(h);if(m){if(c.current&&$m(m.target)){const p=new Ee(m.target.path);this.It(p).has(h)||this.Et(h,p)||this.et(h,p,Zt.newNoDocument(p,e))}c.Be&&(i.set(h,c.ke()),c.qe())}}));let r=ze();this.He.forEach(((c,h)=>{let m=!0;h.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(r=r.add(c))})),this.je.forEach(((c,h)=>h.setReadTime(e)));const o=new sf(e,i,this.Ye,this.je,r);return this.je=xs(),this.Je=nh(),this.He=nh(),this.Ye=new ht(Ue),o}Xe(e,i){if(!this.rt(e))return;const r=this.Et(e,i.key)?2:0;this.nt(e).Qe(i.key,r),this.je=this.je.insert(i.key,i),this.Je=this.Je.insert(i.key,this.It(i.key).add(e)),this.He=this.He.insert(i.key,this.dt(i.key).add(e))}et(e,i,r){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,i)?o.Qe(i,1):o.$e(i),this.He=this.He.insert(i,this.dt(i).delete(e)),this.He=this.He.insert(i,this.dt(i).add(e)),r&&(this.je=this.je.insert(i,r))}removeTarget(e){this.ze.delete(e)}_t(e){const i=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+i.addedDocuments.size-i.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let i=this.ze.get(e);return i||(i=new J1,this.ze.set(e,i)),i}dt(e){let i=this.He.get(e);return i||(i=new Vt(Ue),this.He=this.He.insert(e,i)),i}It(e){let i=this.Je.get(e);return i||(i=new Vt(Ue),this.Je=this.Je.insert(e,i)),i}rt(e){const i=this.ot(e)!==null;return i||me("WatchChangeAggregator","Detected inactive target",e),i}ot(e){const i=this.ze.get(e);return i&&i.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new J1),this.Ge.getRemoteKeysForTarget(e).forEach((i=>{this.et(e,i,null)}))}Et(e,i){return this.Ge.getRemoteKeysForTarget(e).has(i)}}function nh(){return new ht(Ee.comparator)}function Z1(){return new ht(Ee.comparator)}const dI={asc:"ASCENDING",desc:"DESCENDING"},mI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pI={and:"AND",or:"OR"};class gI{constructor(e,i){this.databaseId=e,this.useProto3Json=i}}function Jm(n,e){return n.useProto3Json||Wh(e)?e:{value:e}}function Mh(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Db(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function yI(n,e){return Mh(n,e.toTimestamp())}function Fi(n){return Qe(!!n,49232),xe.fromTimestamp((function(i){const r=Er(i);return new at(r.seconds,r.nanos)})(n))}function qp(n,e){return Zm(n,e).canonicalString()}function Zm(n,e){const i=(function(o){return new it(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?i:i.child(e)}function Ob(n){const e=it.fromString(n);return Qe(Lb(e),10190,{key:e.toString()}),e}function ep(n,e){return qp(n.databaseId,e.path)}function Cm(n,e){const i=Ob(e);if(i.get(1)!==n.databaseId.projectId)throw new de(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+n.databaseId.projectId);if(i.get(3)!==n.databaseId.database)throw new de(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+n.databaseId.database);return new Ee(Mb(i))}function kb(n,e){return qp(n.databaseId,e)}function _I(n){const e=Ob(n);return e.length===4?it.emptyPath():Mb(e)}function tp(n){return new it(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Mb(n){return Qe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function e0(n,e,i){return{name:ep(n,e),fields:i.value.mapValue.fields}}function vI(n,e){let i;if("targetChange"in e){e.targetChange;const r=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:we(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],c=(function(g,E){return g.useProto3Json?(Qe(E===void 0||typeof E=="string",58123),$t.fromBase64String(E||"")):(Qe(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),$t.fromUint8Array(E||new Uint8Array))})(n,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(g){const E=g.code===void 0?ne.UNKNOWN:Cb(g.code);return new de(E,g.message||"")})(h);i=new Ib(r,o,c,m||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=Cm(n,r.document.name),c=Fi(r.document.updateTime),h=r.document.createTime?Fi(r.document.createTime):xe.min(),m=new yn({mapValue:{fields:r.document.fields}}),p=Zt.newFoundDocument(o,c,h,m),g=r.targetIds||[],E=r.removedTargetIds||[];i=new ph(g,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=Cm(n,r.document),c=r.readTime?Fi(r.readTime):xe.min(),h=Zt.newNoDocument(o,c),m=r.removedTargetIds||[];i=new ph([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=Cm(n,r.document),c=r.removedTargetIds||[];i=new ph([],c,o,null)}else{if(!("filter"in e))return we(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:c}=r,h=new lI(o,c),m=r.targetId;i=new Nb(m,h)}}return i}function EI(n,e){let i;if(e instanceof pc)i={update:e0(n,e.key,e.value)};else if(e instanceof Rb)i={delete:ep(n,e.key)};else if(e instanceof Nr)i={update:e0(n,e.key,e.data),updateMask:NI(e.fieldMask)};else{if(!(e instanceof rI))return we(16599,{Vt:e.type});i={verify:ep(n,e.key)}}return e.fieldTransforms.length>0&&(i.updateTransforms=e.fieldTransforms.map((r=>(function(c,h){const m=h.transform;if(m instanceof Oh)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof ic)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof sc)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof kh)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw we(20930,{transform:h.transform})})(0,r)))),e.precondition.isNone||(i.currentDocument=(function(o,c){return c.updateTime!==void 0?{updateTime:yI(o,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:we(27497)})(n,e.precondition)),i}function bI(n,e){return n&&n.length>0?(Qe(e!==void 0,14353),n.map((i=>(function(o,c){let h=o.updateTime?Fi(o.updateTime):Fi(c);return h.isEqual(xe.min())&&(h=Fi(c)),new nI(h,o.transformResults||[])})(i,e)))):[]}function TI(n,e){return{documents:[kb(n,e.path)]}}function SI(n,e){const i={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,i.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),i.structuredQuery.from=[{collectionId:r.lastSegment()}]),i.parent=kb(n,o);const c=(function(g){if(g.length!==0)return jb(ui.create(g,"and"))})(e.filters);c&&(i.structuredQuery.where=c);const h=(function(g){if(g.length!==0)return g.map((E=>(function(w){return{field:lo(w.field),direction:xI(w.dir)}})(E)))})(e.orderBy);h&&(i.structuredQuery.orderBy=h);const m=Jm(n,e.limit);return m!==null&&(i.structuredQuery.limit=m),e.startAt&&(i.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(i.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:i,parent:o}}function wI(n){let e=_I(n.parent);const i=n.structuredQuery,r=i.from?i.from.length:0;let o=null;if(r>0){Qe(r===1,65062);const E=i.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let c=[];i.where&&(c=(function(T){const w=Vb(T);return w instanceof ui&&ub(w)?w.getFilters():[w]})(i.where));let h=[];i.orderBy&&(h=(function(T){return T.map((w=>(function(z){return new Dh(co(z.field),(function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(z.direction))})(w)))})(i.orderBy));let m=null;i.limit&&(m=(function(T){let w;return w=typeof T=="object"?T.value:T,Wh(w)?null:w})(i.limit));let p=null;i.startAt&&(p=(function(T){const w=!!T.before,k=T.values||[];return new Ih(k,w)})(i.startAt));let g=null;return i.endAt&&(g=(function(T){const w=!T.before,k=T.values||[];return new Ih(k,w)})(i.endAt)),HN(e,o,h,c,m,"F",p,g)}function AI(n,e){const i=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:o})}})(e.purpose);return i==null?null:{"goog-listen-tags":i}}function Vb(n){return n.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const r=co(i.unaryFilter.field);return Dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=co(i.unaryFilter.field);return Dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=co(i.unaryFilter.field);return Dt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=co(i.unaryFilter.field);return Dt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}})(n):n.fieldFilter!==void 0?(function(i){return Dt.create(co(i.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}})(i.fieldFilter.op),i.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(i){return ui.create(i.compositeFilter.filters.map((r=>Vb(r))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we(1026)}})(i.compositeFilter.op))})(n):we(30097,{filter:n})}function xI(n){return dI[n]}function RI(n){return mI[n]}function CI(n){return pI[n]}function lo(n){return{fieldPath:n.canonicalString()}}function co(n){return Yt.fromServerFormat(n.fieldPath)}function jb(n){return n instanceof Dt?(function(i){if(i.op==="=="){if(B1(i.value))return{unaryFilter:{field:lo(i.field),op:"IS_NAN"}};if(z1(i.value))return{unaryFilter:{field:lo(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(B1(i.value))return{unaryFilter:{field:lo(i.field),op:"IS_NOT_NAN"}};if(z1(i.value))return{unaryFilter:{field:lo(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lo(i.field),op:RI(i.op),value:i.value}}})(n):n instanceof ui?(function(i){const r=i.getFilters().map((o=>jb(o)));return r.length===1?r[0]:{compositeFilter:{op:CI(i.op),filters:r}}})(n):we(54877,{filter:n})}function NI(n){const e=[];return n.fields.forEach((i=>e.push(i.canonicalString()))),{fieldPaths:e}}function Lb(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,i,r,o,c=xe.min(),h=xe.min(),m=$t.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=i,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,i){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.yt=e}}function DI(n){const e=wI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Wm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.Cn=new kI}addToCollectionParentIndex(e,i){return this.Cn.add(i),ie.resolve()}getCollectionParents(e,i){return ie.resolve(this.Cn.getEntries(i))}addFieldIndex(e,i){return ie.resolve()}deleteFieldIndex(e,i){return ie.resolve()}deleteAllFieldIndexes(e){return ie.resolve()}createTargetIndexes(e,i){return ie.resolve()}getDocumentsMatchingTarget(e,i){return ie.resolve(null)}getIndexType(e,i){return ie.resolve(0)}getFieldIndexes(e,i){return ie.resolve([])}getNextCollectionGroupToUpdate(e){return ie.resolve(null)}getMinOffset(e,i){return ie.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,i){return ie.resolve(vr.min())}updateCollectionGroup(e,i,r){return ie.resolve()}updateIndexEntries(e,i){return ie.resolve()}}class kI{constructor(){this.index={}}add(e){const i=e.lastSegment(),r=e.popLast(),o=this.index[i]||new Vt(it.comparator),c=!o.has(r);return this.index[i]=o.add(r),c}has(e){const i=e.lastSegment(),r=e.popLast(),o=this.index[i];return o&&o.has(r)}getEntries(e){return(this.index[e]||new Vt(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Pb=41943040;class gn{static withCacheSize(e){return new gn(e,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,i,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn.DEFAULT_COLLECTION_PERCENTILE=10,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gn.DEFAULT=new gn(Pb,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gn.DISABLED=new gn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new bo(0)}static cr(){return new bo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0="LruGarbageCollector",MI=1048576;function i0([n,e],[i,r]){const o=Ue(n,i);return o===0?Ue(e,r):o}class VI{constructor(e){this.Ir=e,this.buffer=new Vt(i0),this.Er=0}dr(){return++this.Er}Ar(e){const i=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(i);else{const r=this.buffer.last();i0(i,r)<0&&(this.buffer=this.buffer.delete(r).add(i))}}get maxValue(){return this.buffer.last()[0]}}class jI{constructor(e,i,r){this.garbageCollector=e,this.asyncQueue=i,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){me(n0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){No(i)?me(n0,"Ignoring IndexedDB error during garbage collection: ",i):await Co(i)}await this.Vr(3e5)}))}}class LI{constructor(e,i){this.mr=e,this.params=i}calculateTargetCount(e,i){return this.mr.gr(e).next((r=>Math.floor(i/100*r)))}nthSequenceNumber(e,i){if(i===0)return ie.resolve(Xh.ce);const r=new VI(i);return this.mr.forEachTarget(e,(o=>r.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>r.Ar(o))))).next((()=>r.maxValue))}removeTargets(e,i,r){return this.mr.removeTargets(e,i,r)}removeOrphanedDocuments(e,i){return this.mr.removeOrphanedDocuments(e,i)}collect(e,i){return this.params.cacheSizeCollectionThreshold===-1?(me("LruGarbageCollector","Garbage collection skipped; disabled"),ie.resolve(t0)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(me("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),t0):this.yr(e,i)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,i){let r,o,c,h,m,p,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(me("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(r=T,m=Date.now(),this.removeTargets(e,r,i)))).next((T=>(c=T,p=Date.now(),this.removeOrphanedDocuments(e,r)))).next((T=>(g=Date.now(),ao()<=Pe.DEBUG&&me("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${c} targets in `+(p-m)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-E}ms`),ie.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:c,documentsRemoved:T}))))}}function PI(n,e){return new LI(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(){this.changes=new ya((e=>e.toString()),((e,i)=>e.isEqual(i))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,i){this.assertNotApplied(),this.changes.set(e,Zt.newInvalidDocument(e).setReadTime(i))}getEntry(e,i){this.assertNotApplied();const r=this.changes.get(i);return r!==void 0?ie.resolve(r):this.getFromCache(e,i)}getEntries(e,i){return this.getAllFromCache(e,i)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,i){this.overlayedDocument=e,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,i,r,o){this.remoteDocumentCache=e,this.mutationQueue=i,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,i){let r=null;return this.documentOverlayCache.getOverlay(e,i).next((o=>(r=o,this.remoteDocumentCache.getEntry(e,i)))).next((o=>(r!==null&&Ql(r.mutation,o,Nn.empty(),at.now()),o)))}getDocuments(e,i){return this.remoteDocumentCache.getEntries(e,i).next((r=>this.getLocalViewOfDocuments(e,r,ze()).next((()=>r))))}getLocalViewOfDocuments(e,i,r=ze()){const o=aa();return this.populateOverlays(e,o,i).next((()=>this.computeViews(e,i,o,r).next((c=>{let h=Ul();return c.forEach(((m,p)=>{h=h.insert(m,p.overlayedDocument)})),h}))))}getOverlayedDocuments(e,i){const r=aa();return this.populateOverlays(e,r,i).next((()=>this.computeViews(e,i,r,ze())))}populateOverlays(e,i,r){const o=[];return r.forEach((c=>{i.has(c)||o.push(c)})),this.documentOverlayCache.getOverlays(e,o).next((c=>{c.forEach(((h,m)=>{i.set(h,m)}))}))}computeViews(e,i,r,o){let c=xs();const h=Kl(),m=(function(){return Kl()})();return i.forEach(((p,g)=>{const E=r.get(g.key);o.has(g.key)&&(E===void 0||E.mutation instanceof Nr)?c=c.insert(g.key,g):E!==void 0?(h.set(g.key,E.mutation.getFieldMask()),Ql(E.mutation,g,E.mutation.getFieldMask(),at.now())):h.set(g.key,Nn.empty())})),this.recalculateAndSaveOverlays(e,c).next((p=>(p.forEach(((g,E)=>h.set(g,E))),i.forEach(((g,E)=>m.set(g,new zI(E,h.get(g)??null)))),m)))}recalculateAndSaveOverlays(e,i){const r=Kl();let o=new ht(((h,m)=>h-m)),c=ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,i).next((h=>{for(const m of h)m.keys().forEach((p=>{const g=i.get(p);if(g===null)return;let E=r.get(p)||Nn.empty();E=m.applyToLocalView(g,E),r.set(p,E);const T=(o.get(m.batchId)||ze()).add(p);o=o.insert(m.batchId,T)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,E=p.value,T=vb();E.forEach((w=>{if(!c.has(w)){const k=Ab(i.get(w),r.get(w));k!==null&&T.set(w,k),c=c.add(w)}})),h.push(this.documentOverlayCache.saveOverlays(e,g,T))}return ie.waitFor(h)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,i){return this.remoteDocumentCache.getEntries(e,i).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,i,r,o){return(function(h){return Ee.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(i)?this.getDocumentsMatchingDocumentQuery(e,i.path):mb(i)?this.getDocumentsMatchingCollectionGroupQuery(e,i,r,o):this.getDocumentsMatchingCollectionQuery(e,i,r,o)}getNextDocuments(e,i,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,i,r,o).next((c=>{const h=o-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,i,r.largestBatchId,o-c.size):ie.resolve(aa());let m=Zl,p=c;return h.next((g=>ie.forEach(g,((E,T)=>(m<T.largestBatchId&&(m=T.largestBatchId),c.get(E)?ie.resolve():this.remoteDocumentCache.getEntry(e,E).next((w=>{p=p.insert(E,w)}))))).next((()=>this.populateOverlays(e,g,c))).next((()=>this.computeViews(e,p,g,ze()))).next((E=>({batchId:m,changes:_b(E)})))))}))}getDocumentsMatchingDocumentQuery(e,i){return this.getDocument(e,new Ee(i)).next((r=>{let o=Ul();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o}))}getDocumentsMatchingCollectionGroupQuery(e,i,r,o){const c=i.collectionGroup;let h=Ul();return this.indexManager.getCollectionParents(e,c).next((m=>ie.forEach(m,(p=>{const g=(function(T,w){return new mc(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(i,p.child(c));return this.getDocumentsMatchingCollectionQuery(e,g,r,o).next((E=>{E.forEach(((T,w)=>{h=h.insert(T,w)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,i,r,o){let c;return this.documentOverlayCache.getOverlaysForCollection(e,i.path,r.largestBatchId).next((h=>(c=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,i,r,c,o)))).next((h=>{c.forEach(((p,g)=>{const E=g.getKey();h.get(E)===null&&(h=h.insert(E,Zt.newInvalidDocument(E)))}));let m=Ul();return h.forEach(((p,g)=>{const E=c.get(p);E!==void 0&&Ql(E.mutation,g,Nn.empty(),at.now()),ef(i,g)&&(m=m.insert(p,g))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,i){return ie.resolve(this.Lr.get(i))}saveBundleMetadata(e,i){return this.Lr.set(i.id,(function(o){return{id:o.id,version:o.version,createTime:Fi(o.createTime)}})(i)),ie.resolve()}getNamedQuery(e,i){return ie.resolve(this.kr.get(i))}saveNamedQuery(e,i){return this.kr.set(i.name,(function(o){return{name:o.name,query:DI(o.bundledQuery),readTime:Fi(o.readTime)}})(i)),ie.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.overlays=new ht(Ee.comparator),this.qr=new Map}getOverlay(e,i){return ie.resolve(this.overlays.get(i))}getOverlays(e,i){const r=aa();return ie.forEach(i,(o=>this.getOverlay(e,o).next((c=>{c!==null&&r.set(o,c)})))).next((()=>r))}saveOverlays(e,i,r){return r.forEach(((o,c)=>{this.St(e,i,c)})),ie.resolve()}removeOverlaysForBatchId(e,i,r){const o=this.qr.get(r);return o!==void 0&&(o.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(r)),ie.resolve()}getOverlaysForCollection(e,i,r){const o=aa(),c=i.length+1,h=new Ee(i.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!i.isPrefixOf(g.path))break;g.path.length===c&&p.largestBatchId>r&&o.set(p.getKey(),p)}return ie.resolve(o)}getOverlaysForCollectionGroup(e,i,r,o){let c=new ht(((g,E)=>g-E));const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===i&&g.largestBatchId>r){let E=c.get(g.largestBatchId);E===null&&(E=aa(),c=c.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const m=aa(),p=c.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,E)=>m.set(g,E))),!(m.size()>=o)););return ie.resolve(m)}St(e,i,r){const o=this.overlays.get(r.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(r.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(r.key,new oI(i,r));let c=this.qr.get(i);c===void 0&&(c=ze(),this.qr.set(i,c)),this.qr.set(i,c.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.sessionToken=$t.EMPTY_BYTE_STRING}getSessionToken(e){return ie.resolve(this.sessionToken)}setSessionToken(e,i){return this.sessionToken=i,ie.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(){this.Qr=new Vt(Ut.$r),this.Ur=new Vt(Ut.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,i){const r=new Ut(e,i);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,i){e.forEach((r=>this.addReference(r,i)))}removeReference(e,i){this.Gr(new Ut(e,i))}zr(e,i){e.forEach((r=>this.removeReference(r,i)))}jr(e){const i=new Ee(new it([])),r=new Ut(i,e),o=new Ut(i,e+1),c=[];return this.Ur.forEachInRange([r,o],(h=>{this.Gr(h),c.push(h.key)})),c}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const i=new Ee(new it([])),r=new Ut(i,e),o=new Ut(i,e+1);let c=ze();return this.Ur.forEachInRange([r,o],(h=>{c=c.add(h.key)})),c}containsKey(e){const i=new Ut(e,0),r=this.Qr.firstAfterOrEqual(i);return r!==null&&e.isEqual(r.key)}}class Ut{constructor(e,i){this.key=e,this.Yr=i}static $r(e,i){return Ee.comparator(e.key,i.key)||Ue(e.Yr,i.Yr)}static Kr(e,i){return Ue(e.Yr,i.Yr)||Ee.comparator(e.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,i){this.indexManager=e,this.referenceDelegate=i,this.mutationQueue=[],this.tr=1,this.Zr=new Vt(Ut.$r)}checkEmpty(e){return ie.resolve(this.mutationQueue.length===0)}addMutationBatch(e,i,r,o){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new aI(c,i,r,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new Ut(m.key,c)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return ie.resolve(h)}lookupMutationBatch(e,i){return ie.resolve(this.Xr(i))}getNextMutationBatchAfterBatchId(e,i){const r=i+1,o=this.ei(r),c=o<0?0:o;return ie.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return ie.resolve(this.mutationQueue.length===0?kp:this.tr-1)}getAllMutationBatches(e){return ie.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,i){const r=new Ut(i,0),o=new Ut(i,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([r,o],(h=>{const m=this.Xr(h.Yr);c.push(m)})),ie.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,i){let r=new Vt(Ue);return i.forEach((o=>{const c=new Ut(o,0),h=new Ut(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,h],(m=>{r=r.add(m.Yr)}))})),ie.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,i){const r=i.path,o=r.length+1;let c=r;Ee.isDocumentKey(c)||(c=c.child(""));const h=new Ut(new Ee(c),0);let m=new Vt(Ue);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!r.isPrefixOf(g)&&(g.length===o&&(m=m.add(p.Yr)),!0)}),h),ie.resolve(this.ti(m))}ti(e){const i=[];return e.forEach((r=>{const o=this.Xr(r);o!==null&&i.push(o)})),i}removeMutationBatch(e,i){Qe(this.ni(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return ie.forEach(i.mutations,(o=>{const c=new Ut(o.key,i.batchId);return r=r.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,i){const r=new Ut(i,0),o=this.Zr.firstAfterOrEqual(r);return ie.resolve(i.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ie.resolve()}ni(e,i){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const i=this.ei(e);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.ri=e,this.docs=(function(){return new ht(Ee.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,i){const r=i.key,o=this.docs.get(r),c=o?o.size:0,h=this.ri(i);return this.docs=this.docs.insert(r,{document:i.mutableCopy(),size:h}),this.size+=h-c,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const i=this.docs.get(e);i&&(this.docs=this.docs.remove(e),this.size-=i.size)}getEntry(e,i){const r=this.docs.get(i);return ie.resolve(r?r.document.mutableCopy():Zt.newInvalidDocument(i))}getEntries(e,i){let r=xs();return i.forEach((o=>{const c=this.docs.get(o);r=r.insert(o,c?c.document.mutableCopy():Zt.newInvalidDocument(o))})),ie.resolve(r)}getDocumentsMatchingQuery(e,i,r,o){let c=xs();const h=i.path,m=new Ee(h.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:E}}=p.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||bN(EN(E),r)<=0||(o.has(E.key)||ef(i,E))&&(c=c.insert(E.key,E.mutableCopy()))}return ie.resolve(c)}getAllFromCollectionGroup(e,i,r,o){we(9500)}ii(e,i){return ie.forEach(this.docs,(r=>i(r)))}newChangeBuffer(e){return new QI(this)}getSize(e){return ie.resolve(this.size)}}class QI extends UI{constructor(e){super(),this.Nr=e}applyChanges(e){const i=[];return this.changes.forEach(((r,o)=>{o.isValidDocument()?i.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(r)})),ie.waitFor(i)}getFromCache(e,i){return this.Nr.getEntry(e,i)}getAllFromCache(e,i){return this.Nr.getEntries(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.persistence=e,this.si=new ya((i=>jp(i)),Lp),this.lastRemoteSnapshotVersion=xe.min(),this.highestTargetId=0,this.oi=0,this._i=new Hp,this.targetCount=0,this.ai=bo.ur()}forEachTarget(e,i){return this.si.forEach(((r,o)=>i(o))),ie.resolve()}getLastRemoteSnapshotVersion(e){return ie.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ie.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ie.resolve(this.highestTargetId)}setTargetsMetadata(e,i,r){return r&&(this.lastRemoteSnapshotVersion=r),i>this.oi&&(this.oi=i),ie.resolve()}Pr(e){this.si.set(e.target,e);const i=e.targetId;i>this.highestTargetId&&(this.ai=new bo(i),this.highestTargetId=i),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,i){return this.Pr(i),this.targetCount+=1,ie.resolve()}updateTargetData(e,i){return this.Pr(i),ie.resolve()}removeTargetData(e,i){return this.si.delete(i.target),this._i.jr(i.targetId),this.targetCount-=1,ie.resolve()}removeTargets(e,i,r){let o=0;const c=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=i&&r.get(m.targetId)===null&&(this.si.delete(h),c.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),ie.waitFor(c).next((()=>o))}getTargetCount(e){return ie.resolve(this.targetCount)}getTargetData(e,i){const r=this.si.get(i)||null;return ie.resolve(r)}addMatchingKeys(e,i,r){return this._i.Wr(i,r),ie.resolve()}removeMatchingKeys(e,i,r){this._i.zr(i,r);const o=this.persistence.referenceDelegate,c=[];return o&&i.forEach((h=>{c.push(o.markPotentiallyOrphaned(e,h))})),ie.waitFor(c)}removeMatchingKeysForTargetId(e,i){return this._i.jr(i),ie.resolve()}getMatchingKeysForTargetId(e,i){const r=this._i.Hr(i);return ie.resolve(r)}containsKey(e,i){return ie.resolve(this._i.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,i){this.ui={},this.overlays={},this.ci=new Xh(0),this.li=!1,this.li=!0,this.hi=new FI,this.referenceDelegate=e(this),this.Pi=new YI(this),this.indexManager=new OI,this.remoteDocumentCache=(function(o){return new KI(o)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new II(i),this.Ii=new qI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let i=this.overlays[e.toKey()];return i||(i=new HI,this.overlays[e.toKey()]=i),i}getMutationQueue(e,i){let r=this.ui[e.toKey()];return r||(r=new GI(i,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,i,r){me("MemoryPersistence","Starting transaction:",e);const o=new $I(this.ci.next());return this.referenceDelegate.Ei(),r(o).next((c=>this.referenceDelegate.di(o).next((()=>c)))).toPromise().then((c=>(o.raiseOnCommittedEvent(),c)))}Ai(e,i){return ie.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,i))))}}class $I extends SN{constructor(e){super(),this.currentSequenceNumber=e}}class Fp{constructor(e){this.persistence=e,this.Ri=new Hp,this.Vi=null}static mi(e){return new Fp(e)}get fi(){if(this.Vi)return this.Vi;throw we(60996)}addReference(e,i,r){return this.Ri.addReference(r,i),this.fi.delete(r.toString()),ie.resolve()}removeReference(e,i,r){return this.Ri.removeReference(r,i),this.fi.add(r.toString()),ie.resolve()}markPotentiallyOrphaned(e,i){return this.fi.add(i.toString()),ie.resolve()}removeTarget(e,i){this.Ri.jr(i.targetId).forEach((o=>this.fi.add(o.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,i.targetId).next((o=>{o.forEach((c=>this.fi.add(c.toString())))})).next((()=>r.removeTargetData(e,i)))}Ei(){this.Vi=new Set}di(e){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ie.forEach(this.fi,(r=>{const o=Ee.fromPath(r);return this.gi(e,o).next((c=>{c||i.removeEntry(o,xe.min())}))})).next((()=>(this.Vi=null,i.apply(e))))}updateLimboDocument(e,i){return this.gi(e,i).next((r=>{r?this.fi.delete(i.toString()):this.fi.add(i.toString())}))}Ti(e){return 0}gi(e,i){return ie.or([()=>ie.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(e,i),()=>this.persistence.Ai(e,i)])}}class Vh{constructor(e,i){this.persistence=e,this.pi=new ya((r=>xN(r.path)),((r,o)=>r.isEqual(o))),this.garbageCollector=PI(this,i)}static mi(e,i){return new Vh(e,i)}Ei(){}di(e){return ie.resolve()}forEachTarget(e,i){return this.persistence.getTargetCache().forEachTarget(e,i)}gr(e){const i=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>i.next((o=>r+o))))}wr(e){let i=0;return this.pr(e,(r=>{i++})).next((()=>i))}pr(e,i){return ie.forEach(this.pi,((r,o)=>this.br(e,r,o).next((c=>c?ie.resolve():i(o)))))}removeTargets(e,i,r){return this.persistence.getTargetCache().removeTargets(e,i,r)}removeOrphanedDocuments(e,i){let r=0;const o=this.persistence.getRemoteDocumentCache(),c=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,i).next((m=>{m||(r++,c.removeEntry(h,xe.min()))})))).next((()=>c.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,i){return this.pi.set(i,e.currentSequenceNumber),ie.resolve()}removeTarget(e,i){const r=i.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,i,r){return this.pi.set(r,e.currentSequenceNumber),ie.resolve()}removeReference(e,i,r){return this.pi.set(r,e.currentSequenceNumber),ie.resolve()}updateLimboDocument(e,i){return this.pi.set(i,e.currentSequenceNumber),ie.resolve()}Ti(e){let i=e.key.toString().length;return e.isFoundDocument()&&(i+=fh(e.data.value)),i}br(e,i,r){return ie.or([()=>this.persistence.Ai(e,i),()=>this.persistence.getTargetCache().containsKey(e,i),()=>{const o=this.pi.get(i);return ie.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,i,r,o){this.targetId=e,this.fromCache=i,this.Es=r,this.ds=o}static As(e,i){let r=ze(),o=ze();for(const c of i.docChanges)switch(c.type){case 0:r=r.add(c.doc.key);break;case 1:o=o.add(c.doc.key)}return new Gp(e,i.fromCache,r,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return D2()?8:wN(en())>0?6:4})()}initialize(e,i){this.ps=e,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(e,i,r,o){const c={result:null};return this.ys(e,i).next((h=>{c.result=h})).next((()=>{if(!c.result)return this.ws(e,i,o,r).next((h=>{c.result=h}))})).next((()=>{if(c.result)return;const h=new XI;return this.Ss(e,i,h).next((m=>{if(c.result=m,this.Vs)return this.bs(e,i,h,m.size)}))})).next((()=>c.result))}bs(e,i,r,o){return r.documentReadCount<this.fs?(ao()<=Pe.DEBUG&&me("QueryEngine","SDK will not create cache indexes for query:",oo(i),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ie.resolve()):(ao()<=Pe.DEBUG&&me("QueryEngine","Query:",oo(i),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.gs*o?(ao()<=Pe.DEBUG&&me("QueryEngine","The SDK decides to create cache indexes for query:",oo(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qi(i))):ie.resolve())}ys(e,i){if(G1(i))return ie.resolve(null);let r=qi(i);return this.indexManager.getIndexType(e,r).next((o=>o===0?null:(i.limit!==null&&o===1&&(i=Wm(i,null,"F"),r=qi(i)),this.indexManager.getDocumentsMatchingTarget(e,r).next((c=>{const h=ze(...c);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,r).next((p=>{const g=this.Ds(i,m);return this.Cs(i,g,h,p.readTime)?this.ys(e,Wm(i,null,"F")):this.vs(e,g,i,p)}))))})))))}ws(e,i,r,o){return G1(i)||o.isEqual(xe.min())?ie.resolve(null):this.ps.getDocuments(e,r).next((c=>{const h=this.Ds(i,c);return this.Cs(i,h,r,o)?ie.resolve(null):(ao()<=Pe.DEBUG&&me("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),oo(i)),this.vs(e,h,i,vN(o,Zl)).next((m=>m)))}))}Ds(e,i){let r=new Vt(gb(e));return i.forEach(((o,c)=>{ef(e,c)&&(r=r.add(c))})),r}Cs(e,i,r,o){if(e.limit===null)return!1;if(r.size!==i.size)return!0;const c=e.limitType==="F"?i.last():i.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(o)>0)}Ss(e,i,r){return ao()<=Pe.DEBUG&&me("QueryEngine","Using full collection scan to execute query:",oo(i)),this.ps.getDocumentsMatchingQuery(e,i,vr.min(),r)}vs(e,i,r,o){return this.ps.getDocumentsMatchingQuery(e,r,o).next((c=>(i.forEach((h=>{c=c.insert(h.key,h)})),c)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="LocalStore",JI=3e8;class ZI{constructor(e,i,r,o){this.persistence=e,this.Fs=i,this.serializer=o,this.Ms=new ht(Ue),this.xs=new ya((c=>jp(c)),Lp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>e.collect(i,this.Ms)))}}function e4(n,e,i,r){return new ZI(n,e,i,r)}async function zb(n,e){const i=Ce(n);return await i.persistence.runTransaction("Handle user change","readonly",(r=>{let o;return i.mutationQueue.getAllMutationBatches(r).next((c=>(o=c,i.Bs(e),i.mutationQueue.getAllMutationBatches(r)))).next((c=>{const h=[],m=[];let p=ze();for(const g of o){h.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}for(const g of c){m.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}return i.localDocuments.getDocuments(r,p).next((g=>({Ls:g,removedBatchIds:h,addedBatchIds:m})))}))}))}function t4(n,e){const i=Ce(n);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const o=e.batch.keys(),c=i.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,p,g,E){const T=g.batch,w=T.keys();let k=ie.resolve();return w.forEach((z=>{k=k.next((()=>E.getEntry(p,z))).next((K=>{const j=g.docVersions.get(z);Qe(j!==null,48541),K.version.compareTo(j)<0&&(T.applyToRemoteDocument(K,g),K.isValidDocument()&&(K.setReadTime(g.commitVersion),E.addEntry(K)))}))})),k.next((()=>m.mutationQueue.removeMutationBatch(p,T)))})(i,r,e,c).next((()=>c.apply(r))).next((()=>i.mutationQueue.performConsistencyCheck(r))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(m){let p=ze();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p})(e)))).next((()=>i.localDocuments.getDocuments(r,o)))}))}function Bb(n){const e=Ce(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>e.Pi.getLastRemoteSnapshotVersion(i)))}function n4(n,e){const i=Ce(n),r=e.snapshotVersion;let o=i.Ms;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const h=i.Ns.newChangeBuffer({trackRemovals:!0});o=i.Ms;const m=[];e.targetChanges.forEach(((E,T)=>{const w=o.get(T);if(!w)return;m.push(i.Pi.removeMatchingKeys(c,E.removedDocuments,T).next((()=>i.Pi.addMatchingKeys(c,E.addedDocuments,T))));let k=w.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.get(T)!==null?k=k.withResumeToken($t.EMPTY_BYTE_STRING,xe.min()).withLastLimboFreeSnapshotVersion(xe.min()):E.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(E.resumeToken,r)),o=o.insert(T,k),(function(K,j,q){return K.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=JI?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0})(w,k,E)&&m.push(i.Pi.updateTargetData(c,k))}));let p=xs(),g=ze();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(i.persistence.referenceDelegate.updateLimboDocument(c,E))})),m.push(i4(c,h,e.documentUpdates).next((E=>{p=E.ks,g=E.qs}))),!r.isEqual(xe.min())){const E=i.Pi.getLastRemoteSnapshotVersion(c).next((T=>i.Pi.setTargetsMetadata(c,c.currentSequenceNumber,r)));m.push(E)}return ie.waitFor(m).next((()=>h.apply(c))).next((()=>i.localDocuments.getLocalViewOfDocuments(c,p,g))).next((()=>p))})).then((c=>(i.Ms=o,c)))}function i4(n,e,i){let r=ze(),o=ze();return i.forEach((c=>r=r.add(c))),e.getEntries(n,r).next((c=>{let h=xs();return i.forEach(((m,p)=>{const g=c.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(xe.min())?(e.removeEntry(m,p.readTime),h=h.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),h=h.insert(m,p)):me(Kp,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)})),{ks:h,qs:o}}))}function s4(n,e){const i=Ce(n);return i.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=kp),i.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function r4(n,e){const i=Ce(n);return i.persistence.runTransaction("Allocate target","readwrite",(r=>{let o;return i.Pi.getTargetData(r,e).next((c=>c?(o=c,ie.resolve(o)):i.Pi.allocateTargetId(r).next((h=>(o=new dr(e,h,"TargetPurposeListen",r.currentSequenceNumber),i.Pi.addTargetData(r,o).next((()=>o)))))))})).then((r=>{const o=i.Ms.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(i.Ms=i.Ms.insert(r.targetId,r),i.xs.set(e,r.targetId)),r}))}async function np(n,e,i){const r=Ce(n),o=r.Ms.get(e),c=i?"readwrite":"readwrite-primary";try{i||await r.persistence.runTransaction("Release target",c,(h=>r.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!No(h))throw h;me(Kp,`Failed to update sequence numbers for target ${e}: ${h}`)}r.Ms=r.Ms.remove(e),r.xs.delete(o.target)}function s0(n,e,i){const r=Ce(n);let o=xe.min(),c=ze();return r.persistence.runTransaction("Execute query","readwrite",(h=>(function(p,g,E){const T=Ce(p),w=T.xs.get(E);return w!==void 0?ie.resolve(T.Ms.get(w)):T.Pi.getTargetData(g,E)})(r,h,qi(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(h,m.targetId).next((p=>{c=p}))})).next((()=>r.Fs.getDocumentsMatchingQuery(h,e,i?o:xe.min(),i?c:ze()))).next((m=>(a4(r,GN(e),m),{documents:m,Qs:c})))))}function a4(n,e,i){let r=n.Os.get(e)||xe.min();i.forEach(((o,c)=>{c.readTime.compareTo(r)>0&&(r=c.readTime)})),n.Os.set(e,r)}class r0{constructor(){this.activeTargetIds=WN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class o4{constructor(){this.Mo=new r0,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,i,r){}addLocalQueryTarget(e,i=!0){return i&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,i,r){this.xo[e]=i}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new r0,Promise.resolve()}handleUserChange(e,i,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="ConnectivityMonitor";class o0{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){me(a0,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){me(a0,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ih=null;function ip(){return ih===null?ih=(function(){return 268435456+Math.round(2147483648*Math.random())})():ih++,"0x"+ih.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="RestConnection",c4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class u4{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=i+"://"+e.host,this.Ko=`projects/${r}/databases/${o}`,this.Wo=this.databaseId.database===Ch?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Go(e,i,r,o,c){const h=ip(),m=this.zo(e,i.toUriEncodedString());me(Nm,`Sending RPC '${e}' ${h}:`,m,r);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,o,c);const{host:g}=new URL(m),E=ma(g);return this.Jo(e,m,p,r,E).then((T=>(me(Nm,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw yo(Nm,`RPC '${e}' ${h} failed with error: `,T,"url: ",m,"request:",r),T}))}Ho(e,i,r,o,c,h){return this.Go(e,i,r,o,c)}jo(e,i,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ro})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((o,c)=>e[c]=o)),r&&r.headers.forEach(((o,c)=>e[c]=o))}zo(e,i){const r=c4[e];return`${this.Uo}/v1/${i}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="WebChannelConnection";class f4 extends u4{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,i,r,o,c){const h=ip();return new Promise(((m,p)=>{const g=new HE;g.setWithCredentials(!0),g.listenOnce(FE.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case hh.NO_ERROR:const T=g.getResponseJson();me(Wt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),m(T);break;case hh.TIMEOUT:me(Wt,`RPC '${e}' ${h} timed out`),p(new de(ne.DEADLINE_EXCEEDED,"Request time out"));break;case hh.HTTP_ERROR:const w=g.getStatus();if(me(Wt,`RPC '${e}' ${h} failed with status:`,w,"response text:",g.getResponseText()),w>0){let k=g.getResponseJson();Array.isArray(k)&&(k=k[0]);const z=k?.error;if(z&&z.status&&z.message){const K=(function(q){const B=q.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(B)>=0?B:ne.UNKNOWN})(z.status);p(new de(K,z.message))}else p(new de(ne.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new de(ne.UNAVAILABLE,"Connection failed."));break;default:we(9055,{l_:e,streamId:h,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{me(Wt,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);me(Wt,`RPC '${e}' ${h} sending request:`,o),g.send(i,"POST",E,r,15)}))}T_(e,i,r){const o=ip(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=QE(),m=KE(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,i,r),p.encodeInitMessageHeaders=!0;const E=c.join("");me(Wt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const T=h.createWebChannel(E,p);this.I_(T);let w=!1,k=!1;const z=new h4({Yo:j=>{k?me(Wt,`Not sending because RPC '${e}' stream ${o} is closed:`,j):(w||(me(Wt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),w=!0),me(Wt,`RPC '${e}' stream ${o} sending:`,j),T.send(j))},Zo:()=>T.close()}),K=(j,q,B)=>{j.listen(q,(P=>{try{B(P)}catch(se){setTimeout((()=>{throw se}),0)}}))};return K(T,Pl.EventType.OPEN,(()=>{k||(me(Wt,`RPC '${e}' stream ${o} transport opened.`),z.o_())})),K(T,Pl.EventType.CLOSE,(()=>{k||(k=!0,me(Wt,`RPC '${e}' stream ${o} transport closed`),z.a_(),this.E_(T))})),K(T,Pl.EventType.ERROR,(j=>{k||(k=!0,yo(Wt,`RPC '${e}' stream ${o} transport errored. Name:`,j.name,"Message:",j.message),z.a_(new de(ne.UNAVAILABLE,"The operation could not be completed")))})),K(T,Pl.EventType.MESSAGE,(j=>{if(!k){const q=j.data[0];Qe(!!q,16349);const B=q,P=B?.error||B[0]?.error;if(P){me(Wt,`RPC '${e}' stream ${o} received error:`,P);const se=P.status;let ae=(function(x){const R=It[x];if(R!==void 0)return Cb(R)})(se),ue=P.message;ae===void 0&&(ae=ne.INTERNAL,ue="Unknown error status: "+se+" with message "+P.message),k=!0,z.a_(new de(ae,ue)),T.close()}else me(Wt,`RPC '${e}' stream ${o} received:`,q),z.u_(q)}})),K(m,GE.STAT_EVENT,(j=>{j.stat===Fm.PROXY?me(Wt,`RPC '${e}' stream ${o} detected buffering proxy`):j.stat===Fm.NOPROXY&&me(Wt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{z.__()}),0),z}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((i=>i===e))}}function Im(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(n){return new gI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,i,r=1e3,o=1.5,c=6e4){this.Mi=e,this.timerId=i,this.d_=r,this.A_=o,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const i=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),o=Math.max(0,i-r);o>0&&me("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="PersistentStream";class Hb{constructor(e,i,r,o,c,h,m,p){this.Mi=e,this.S_=r,this.b_=o,this.connection=c,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new qb(e,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,i){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():i&&i.code===ne.RESOURCE_EXHAUSTED?(ws(i.toString()),ws("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(i)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,o])=>{this.D_===i&&this.G_(r,o)}),(r=>{e((()=>{const o=new de(ne.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(o)}))}))}G_(e,i){const r=this.W_(this.D_);this.stream=this.j_(e,i),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{r((()=>this.z_(o)))})),this.stream.onMessage((o=>{r((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return me(l0,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return i=>{this.Mi.enqueueAndForget((()=>this.D_===e?i():(me(l0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class d4 extends Hb{constructor(e,i,r,o,c,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,r,o,h),this.serializer=c}j_(e,i){return this.connection.T_("Listen",e,i)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const i=vI(this.serializer,e),r=(function(c){if(!("targetChange"in c))return xe.min();const h=c.targetChange;return h.targetIds&&h.targetIds.length?xe.min():h.readTime?Fi(h.readTime):xe.min()})(e);return this.listener.H_(i,r)}Y_(e){const i={};i.database=tp(this.serializer),i.addTarget=(function(c,h){let m;const p=h.target;if(m=$m(p)?{documents:TI(c,p)}:{query:SI(c,p).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Db(c,h.resumeToken);const g=Jm(c,h.expectedCount);g!==null&&(m.expectedCount=g)}else if(h.snapshotVersion.compareTo(xe.min())>0){m.readTime=Mh(c,h.snapshotVersion.toTimestamp());const g=Jm(c,h.expectedCount);g!==null&&(m.expectedCount=g)}return m})(this.serializer,e);const r=AI(this.serializer,e);r&&(i.labels=r),this.q_(i)}Z_(e){const i={};i.database=tp(this.serializer),i.removeTarget=e,this.q_(i)}}class m4 extends Hb{constructor(e,i,r,o,c,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,r,o,h),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,i){return this.connection.T_("Write",e,i)}J_(e){return Qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const i=bI(e.writeResults,e.commitTime),r=Fi(e.commitTime);return this.listener.na(r,i)}ra(){const e={};e.database=tp(this.serializer),this.q_(e)}ea(e){const i={streamToken:this.lastStreamToken,writes:e.map((r=>EI(this.serializer,r)))};this.q_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{}class g4 extends p4{constructor(e,i,r,o){super(),this.authCredentials=e,this.appCheckCredentials=i,this.connection=r,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new de(ne.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,i,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,h])=>this.connection.Go(e,Zm(i,r),o,c,h))).catch((c=>{throw c.name==="FirebaseError"?(c.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new de(ne.UNKNOWN,c.toString())}))}Ho(e,i,r,o,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,Zm(i,r),o,h,m,c))).catch((h=>{throw h.name==="FirebaseError"?(h.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new de(ne.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class y4{constructor(e,i){this.asyncQueue=e,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const i=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ws(i),this.aa=!1):me("OnlineStateTracker",i)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="RemoteStore";class _4{constructor(e,i,r,o,c){this.localStore=e,this.datastore=i,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((h=>{r.enqueueAndForget((async()=>{_a(this)&&(me(da,"Restarting streams for network reachability change."),await(async function(p){const g=Ce(p);g.Ea.add(4),await yc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await af(g)})(this))}))})),this.Ra=new y4(r,o)}}async function af(n){if(_a(n))for(const e of n.da)await e(!0)}async function yc(n){for(const e of n.da)await e(!1)}function Fb(n,e){const i=Ce(n);i.Ia.has(e.targetId)||(i.Ia.set(e.targetId,e),Xp(i)?$p(i):Io(i).O_()&&Yp(i,e))}function Qp(n,e){const i=Ce(n),r=Io(i);i.Ia.delete(e),r.O_()&&Gb(i,e),i.Ia.size===0&&(r.O_()?r.L_():_a(i)&&i.Ra.set("Unknown"))}function Yp(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(xe.min())>0){const i=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(i)}Io(n).Y_(e)}function Gb(n,e){n.Va.Ue(e),Io(n).Z_(e)}function $p(n){n.Va=new fI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Io(n).start(),n.Ra.ua()}function Xp(n){return _a(n)&&!Io(n).x_()&&n.Ia.size>0}function _a(n){return Ce(n).Ea.size===0}function Kb(n){n.Va=void 0}async function v4(n){n.Ra.set("Online")}async function E4(n){n.Ia.forEach(((e,i)=>{Yp(n,e)}))}async function b4(n,e){Kb(n),Xp(n)?(n.Ra.ha(e),$p(n)):n.Ra.set("Unknown")}async function T4(n,e,i){if(n.Ra.set("Online"),e instanceof Ib&&e.state===2&&e.cause)try{await(async function(o,c){const h=c.cause;for(const m of c.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))})(n,e)}catch(r){me(da,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jh(n,r)}else if(e instanceof ph?n.Va.Ze(e):e instanceof Nb?n.Va.st(e):n.Va.tt(e),!i.isEqual(xe.min()))try{const r=await Bb(n.localStore);i.compareTo(r)>=0&&await(function(c,h){const m=c.Va.Tt(h);return m.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const E=c.Ia.get(g);E&&c.Ia.set(g,E.withResumeToken(p.resumeToken,h))}})),m.targetMismatches.forEach(((p,g)=>{const E=c.Ia.get(p);if(!E)return;c.Ia.set(p,E.withResumeToken($t.EMPTY_BYTE_STRING,E.snapshotVersion)),Gb(c,p);const T=new dr(E.target,p,g,E.sequenceNumber);Yp(c,T)})),c.remoteSyncer.applyRemoteEvent(m)})(n,i)}catch(r){me(da,"Failed to raise snapshot:",r),await jh(n,r)}}async function jh(n,e,i){if(!No(e))throw e;n.Ea.add(1),await yc(n),n.Ra.set("Offline"),i||(i=()=>Bb(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{me(da,"Retrying IndexedDB access"),await i(),n.Ea.delete(1),await af(n)}))}function Qb(n,e){return e().catch((i=>jh(n,i,e)))}async function of(n){const e=Ce(n),i=Sr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:kp;for(;S4(e);)try{const o=await s4(e.localStore,r);if(o===null){e.Ta.length===0&&i.L_();break}r=o.batchId,w4(e,o)}catch(o){await jh(e,o)}Yb(e)&&$b(e)}function S4(n){return _a(n)&&n.Ta.length<10}function w4(n,e){n.Ta.push(e);const i=Sr(n);i.O_()&&i.X_&&i.ea(e.mutations)}function Yb(n){return _a(n)&&!Sr(n).x_()&&n.Ta.length>0}function $b(n){Sr(n).start()}async function A4(n){Sr(n).ra()}async function x4(n){const e=Sr(n);for(const i of n.Ta)e.ea(i.mutations)}async function R4(n,e,i){const r=n.Ta.shift(),o=zp.from(r,e,i);await Qb(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await of(n)}async function C4(n,e){e&&Sr(n).X_&&await(async function(r,o){if((function(h){return cI(h)&&h!==ne.ABORTED})(o.code)){const c=r.Ta.shift();Sr(r).B_(),await Qb(r,(()=>r.remoteSyncer.rejectFailedWrite(c.batchId,o))),await of(r)}})(n,e),Yb(n)&&$b(n)}async function c0(n,e){const i=Ce(n);i.asyncQueue.verifyOperationInProgress(),me(da,"RemoteStore received new credentials");const r=_a(i);i.Ea.add(3),await yc(i),r&&i.Ra.set("Unknown"),await i.remoteSyncer.handleCredentialChange(e),i.Ea.delete(3),await af(i)}async function N4(n,e){const i=Ce(n);e?(i.Ea.delete(2),await af(i)):e||(i.Ea.add(2),await yc(i),i.Ra.set("Unknown"))}function Io(n){return n.ma||(n.ma=(function(i,r,o){const c=Ce(i);return c.sa(),new d4(r,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)})(n.datastore,n.asyncQueue,{Xo:v4.bind(null,n),t_:E4.bind(null,n),r_:b4.bind(null,n),H_:T4.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Xp(n)?$p(n):n.Ra.set("Unknown")):(await n.ma.stop(),Kb(n))}))),n.ma}function Sr(n){return n.fa||(n.fa=(function(i,r,o){const c=Ce(i);return c.sa(),new m4(r,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:A4.bind(null,n),r_:C4.bind(null,n),ta:x4.bind(null,n),na:R4.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await of(n)):(await n.fa.stop(),n.Ta.length>0&&(me(da,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,i,r,o,c){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new Es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,i,r,o,c){const h=Date.now()+r,m=new Wp(e,i,h,o,c);return m.start(r),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jp(n,e){if(ws("AsyncQueue",`${e}: ${n}`),No(n))return new de(ne.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{static emptySet(e){return new po(e.comparator)}constructor(e){this.comparator=e?(i,r)=>e(i,r)||Ee.comparator(i.key,r.key):(i,r)=>Ee.comparator(i.key,r.key),this.keyedMap=Ul(),this.sortedSet=new ht(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const i=this.keyedMap.get(e);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((i,r)=>(e(i),!1)))}add(e){const i=this.delete(e.key);return i.copy(i.keyedMap.insert(e.key,e),i.sortedSet.insert(e,null))}delete(e){const i=this.get(e);return i?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(i)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const i=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;i.hasNext();){const o=i.getNext().key,c=r.getNext().key;if(!o.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach((i=>{e.push(i.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,i){const r=new po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=i,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(){this.ga=new ht(Ee.comparator)}track(e){const i=e.doc.key,r=this.ga.get(i);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(i,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(i,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(i,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(i,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(i):e.type===1&&r.type===2?this.ga=this.ga.insert(i,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(i,{type:2,doc:e.doc}):we(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(i,e)}ya(){const e=[];return this.ga.inorderTraversal(((i,r)=>{e.push(r)})),e}}class To{constructor(e,i,r,o,c,h,m,p,g){this.query=e,this.docs=i,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=c,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,i,r,o,c){const h=[];return i.forEach((m=>{h.push({type:0,doc:m})})),new To(e,i,po.emptySet(i),h,r,o,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const i=this.docChanges,r=e.docChanges;if(i.length!==r.length)return!1;for(let o=0;o<i.length;o++)if(i[o].type!==r[o].type||!i[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class D4{constructor(){this.queries=h0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,r){const o=Ce(i),c=o.queries;o.queries=h0(),c.forEach(((h,m)=>{for(const p of m.Sa)p.onError(r)}))})(this,new de(ne.ABORTED,"Firestore shutting down"))}}function h0(){return new ya((n=>pb(n)),Zh)}async function Xb(n,e){const i=Ce(n);let r=3;const o=e.query;let c=i.queries.get(o);c?!c.ba()&&e.Da()&&(r=2):(c=new I4,r=e.Da()?0:1);try{switch(r){case 0:c.wa=await i.onListen(o,!0);break;case 1:c.wa=await i.onListen(o,!1);break;case 2:await i.onFirstRemoteStoreListen(o)}}catch(h){const m=Jp(h,`Initialization of query '${oo(e.query)}' failed`);return void e.onError(m)}i.queries.set(o,c),c.Sa.push(e),e.va(i.onlineState),c.wa&&e.Fa(c.wa)&&Zp(i)}async function Wb(n,e){const i=Ce(n),r=e.query;let o=3;const c=i.queries.get(r);if(c){const h=c.Sa.indexOf(e);h>=0&&(c.Sa.splice(h,1),c.Sa.length===0?o=e.Da()?0:1:!c.ba()&&e.Da()&&(o=2))}switch(o){case 0:return i.queries.delete(r),i.onUnlisten(r,!0);case 1:return i.queries.delete(r),i.onUnlisten(r,!1);case 2:return i.onLastRemoteStoreUnlisten(r);default:return}}function O4(n,e){const i=Ce(n);let r=!1;for(const o of e){const c=o.query,h=i.queries.get(c);if(h){for(const m of h.Sa)m.Fa(o)&&(r=!0);h.wa=o}}r&&Zp(i)}function k4(n,e,i){const r=Ce(n),o=r.queries.get(e);if(o)for(const c of o.Sa)c.onError(i);r.queries.delete(e)}function Zp(n){n.Ca.forEach((e=>{e.next()}))}var sp,f0;(f0=sp||(sp={})).Ma="default",f0.Cache="cache";class Jb{constructor(e,i,r){this.query=e,this.xa=i,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new To(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let i=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),i=!0):this.La(e,this.onlineState)&&(this.ka(e),i=!0),this.Na=e,i}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let i=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),i=!0),i}La(e,i){if(!e.fromCache||!this.Da())return!0;const r=i!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||i==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const i=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}ka(e){e=To.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==sp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.key=e}}class eT{constructor(e){this.key=e}}class M4{constructor(e,i){this.query=e,this.Ya=i,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ze(),this.mutatedKeys=ze(),this.eu=gb(e),this.tu=new po(this.eu)}get nu(){return this.Ya}ru(e,i){const r=i?i.iu:new u0,o=i?i.tu:this.tu;let c=i?i.mutatedKeys:this.mutatedKeys,h=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,T)=>{const w=o.get(E),k=ef(this.query,T)?T:null,z=!!w&&this.mutatedKeys.has(w.key),K=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let j=!1;w&&k?w.data.isEqual(k.data)?z!==K&&(r.track({type:3,doc:k}),j=!0):this.su(w,k)||(r.track({type:2,doc:k}),j=!0,(p&&this.eu(k,p)>0||g&&this.eu(k,g)<0)&&(m=!0)):!w&&k?(r.track({type:0,doc:k}),j=!0):w&&!k&&(r.track({type:1,doc:w}),j=!0,(p||g)&&(m=!0)),j&&(k?(h=h.add(k),c=K?c.add(E):c.delete(E)):(h=h.delete(E),c=c.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),c=c.delete(E.key),r.track({type:1,doc:E})}return{tu:h,iu:r,Cs:m,mutatedKeys:c}}su(e,i){return e.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(e,i,r,o){const c=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,T)=>(function(k,z){const K=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{Rt:j})}};return K(k)-K(z)})(E.type,T.type)||this.eu(E.doc,T.doc))),this.ou(r),o=o??!1;const m=i&&!o?this._u():[],p=this.Xa.size===0&&this.current&&!o?1:0,g=p!==this.Za;return this.Za=p,h.length!==0||g?{snapshot:new To(this.query,e.tu,c,h,e.mutatedKeys,p===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new u0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((i=>this.Ya=this.Ya.add(i))),e.modifiedDocuments.forEach((i=>{})),e.removedDocuments.forEach((i=>this.Ya=this.Ya.delete(i))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ze(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const i=[];return e.forEach((r=>{this.Xa.has(r)||i.push(new eT(r))})),this.Xa.forEach((r=>{e.has(r)||i.push(new Zb(r))})),i}cu(e){this.Ya=e.Qs,this.Xa=ze();const i=this.ru(e.documents);return this.applyChanges(i,!0)}lu(){return To.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const eg="SyncEngine";class V4{constructor(e,i,r){this.query=e,this.targetId=i,this.view=r}}class j4{constructor(e){this.key=e,this.hu=!1}}class L4{constructor(e,i,r,o,c,h){this.localStore=e,this.remoteStore=i,this.eventManager=r,this.sharedClientState=o,this.currentUser=c,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ya((m=>pb(m)),Zh),this.Iu=new Map,this.Eu=new Set,this.du=new ht(Ee.comparator),this.Au=new Map,this.Ru=new Hp,this.Vu={},this.mu=new Map,this.fu=bo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function P4(n,e,i=!0){const r=aT(n);let o;const c=r.Tu.get(e);return c?(r.sharedClientState.addLocalQueryTarget(c.targetId),o=c.view.lu()):o=await tT(r,e,i,!0),o}async function U4(n,e){const i=aT(n);await tT(i,e,!0,!1)}async function tT(n,e,i,r){const o=await r4(n.localStore,qi(e)),c=o.targetId,h=n.sharedClientState.addLocalQueryTarget(c,i);let m;return r&&(m=await z4(n,e,c,h==="current",o.resumeToken)),n.isPrimaryClient&&i&&Fb(n.remoteStore,o),m}async function z4(n,e,i,r,o){n.pu=(T,w,k)=>(async function(K,j,q,B){let P=j.view.ru(q);P.Cs&&(P=await s0(K.localStore,j.query,!1).then((({documents:C})=>j.view.ru(C,P))));const se=B&&B.targetChanges.get(j.targetId),ae=B&&B.targetMismatches.get(j.targetId)!=null,ue=j.view.applyChanges(P,K.isPrimaryClient,se,ae);return m0(K,j.targetId,ue.au),ue.snapshot})(n,T,w,k);const c=await s0(n.localStore,e,!0),h=new M4(e,c.Qs),m=h.ru(c.documents),p=gc.createSynthesizedTargetChangeForCurrentChange(i,r&&n.onlineState!=="Offline",o),g=h.applyChanges(m,n.isPrimaryClient,p);m0(n,i,g.au);const E=new V4(e,i,h);return n.Tu.set(e,E),n.Iu.has(i)?n.Iu.get(i).push(e):n.Iu.set(i,[e]),g.snapshot}async function B4(n,e,i){const r=Ce(n),o=r.Tu.get(e),c=r.Iu.get(o.targetId);if(c.length>1)return r.Iu.set(o.targetId,c.filter((h=>!Zh(h,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await np(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),i&&Qp(r.remoteStore,o.targetId),rp(r,o.targetId)})).catch(Co)):(rp(r,o.targetId),await np(r.localStore,o.targetId,!0))}async function q4(n,e){const i=Ce(n),r=i.Tu.get(e),o=i.Iu.get(r.targetId);i.isPrimaryClient&&o.length===1&&(i.sharedClientState.removeLocalQueryTarget(r.targetId),Qp(i.remoteStore,r.targetId))}async function H4(n,e,i){const r=X4(n);try{const o=await(function(h,m){const p=Ce(h),g=at.now(),E=m.reduce(((k,z)=>k.add(z.key)),ze());let T,w;return p.persistence.runTransaction("Locally write mutations","readwrite",(k=>{let z=xs(),K=ze();return p.Ns.getEntries(k,E).next((j=>{z=j,z.forEach(((q,B)=>{B.isValidDocument()||(K=K.add(q))}))})).next((()=>p.localDocuments.getOverlayedDocuments(k,z))).next((j=>{T=j;const q=[];for(const B of m){const P=sI(B,T.get(B.key).overlayedDocument);P!=null&&q.push(new Nr(B.key,P,ob(P.value.mapValue),Hi.exists(!0)))}return p.mutationQueue.addMutationBatch(k,g,q,m)})).next((j=>{w=j;const q=j.applyToLocalDocumentSet(T,K);return p.documentOverlayCache.saveOverlays(k,j.batchId,q)}))})).then((()=>({batchId:w.batchId,changes:_b(T)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),(function(h,m,p){let g=h.Vu[h.currentUser.toKey()];g||(g=new ht(Ue)),g=g.insert(m,p),h.Vu[h.currentUser.toKey()]=g})(r,o.batchId,i),await _c(r,o.changes),await of(r.remoteStore)}catch(o){const c=Jp(o,"Failed to persist write");i.reject(c)}}async function nT(n,e){const i=Ce(n);try{const r=await n4(i.localStore,e);e.targetChanges.forEach(((o,c)=>{const h=i.Au.get(c);h&&(Qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Qe(h.hu,14607):o.removedDocuments.size>0&&(Qe(h.hu,42227),h.hu=!1))})),await _c(i,r,e)}catch(r){await Co(r)}}function d0(n,e,i){const r=Ce(n);if(r.isPrimaryClient&&i===0||!r.isPrimaryClient&&i===1){const o=[];r.Tu.forEach(((c,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const p=Ce(h);p.onlineState=m;let g=!1;p.queries.forEach(((E,T)=>{for(const w of T.Sa)w.va(m)&&(g=!0)})),g&&Zp(p)})(r.eventManager,e),o.length&&r.Pu.H_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function F4(n,e,i){const r=Ce(n);r.sharedClientState.updateQueryState(e,"rejected",i);const o=r.Au.get(e),c=o&&o.key;if(c){let h=new ht(Ee.comparator);h=h.insert(c,Zt.newNoDocument(c,xe.min()));const m=ze().add(c),p=new sf(xe.min(),new Map,new ht(Ue),h,m);await nT(r,p),r.du=r.du.remove(c),r.Au.delete(e),tg(r)}else await np(r.localStore,e,!1).then((()=>rp(r,e,i))).catch(Co)}async function G4(n,e){const i=Ce(n),r=e.batch.batchId;try{const o=await t4(i.localStore,e);sT(i,r,null),iT(i,r),i.sharedClientState.updateMutationState(r,"acknowledged"),await _c(i,o)}catch(o){await Co(o)}}async function K4(n,e,i){const r=Ce(n);try{const o=await(function(h,m){const p=Ce(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let E;return p.mutationQueue.lookupMutationBatch(g,m).next((T=>(Qe(T!==null,37113),E=T.keys(),p.mutationQueue.removeMutationBatch(g,T)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,E,m))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E))).next((()=>p.localDocuments.getDocuments(g,E)))}))})(r.localStore,e);sT(r,e,i),iT(r,e),r.sharedClientState.updateMutationState(e,"rejected",i),await _c(r,o)}catch(o){await Co(o)}}function iT(n,e){(n.mu.get(e)||[]).forEach((i=>{i.resolve()})),n.mu.delete(e)}function sT(n,e,i){const r=Ce(n);let o=r.Vu[r.currentUser.toKey()];if(o){const c=o.get(e);c&&(i?c.reject(i):c.resolve(),o=o.remove(e)),r.Vu[r.currentUser.toKey()]=o}}function rp(n,e,i=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),i&&n.Pu.yu(r,i);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||rT(n,r)}))}function rT(n,e){n.Eu.delete(e.path.canonicalString());const i=n.du.get(e);i!==null&&(Qp(n.remoteStore,i),n.du=n.du.remove(e),n.Au.delete(i),tg(n))}function m0(n,e,i){for(const r of i)r instanceof Zb?(n.Ru.addReference(r.key,e),Q4(n,r)):r instanceof eT?(me(eg,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||rT(n,r.key)):we(19791,{wu:r})}function Q4(n,e){const i=e.key,r=i.path.canonicalString();n.du.get(i)||n.Eu.has(r)||(me(eg,"New document in limbo: "+i),n.Eu.add(r),tg(n))}function tg(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const i=new Ee(it.fromString(e)),r=n.fu.next();n.Au.set(r,new j4(i)),n.du=n.du.insert(i,r),Fb(n.remoteStore,new dr(qi(Pp(i.path)),r,"TargetPurposeLimboResolution",Xh.ce))}}async function _c(n,e,i){const r=Ce(n),o=[],c=[],h=[];r.Tu.isEmpty()||(r.Tu.forEach(((m,p)=>{h.push(r.pu(p,e,i).then((g=>{if((g||i)&&r.isPrimaryClient){const E=g?!g.fromCache:i?.targetChanges.get(p.targetId)?.current;r.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(g){o.push(g);const E=Gp.As(p.targetId,g);c.push(E)}})))})),await Promise.all(h),r.Pu.H_(o),await(async function(p,g){const E=Ce(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>ie.forEach(g,(w=>ie.forEach(w.Es,(k=>E.persistence.referenceDelegate.addReference(T,w.targetId,k))).next((()=>ie.forEach(w.ds,(k=>E.persistence.referenceDelegate.removeReference(T,w.targetId,k)))))))))}catch(T){if(!No(T))throw T;me(Kp,"Failed to update sequence numbers: "+T)}for(const T of g){const w=T.targetId;if(!T.fromCache){const k=E.Ms.get(w),z=k.snapshotVersion,K=k.withLastLimboFreeSnapshotVersion(z);E.Ms=E.Ms.insert(w,K)}}})(r.localStore,c))}async function Y4(n,e){const i=Ce(n);if(!i.currentUser.isEqual(e)){me(eg,"User change. New user:",e.toKey());const r=await zb(i.localStore,e);i.currentUser=e,(function(c,h){c.mu.forEach((m=>{m.forEach((p=>{p.reject(new de(ne.CANCELLED,h))}))})),c.mu.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _c(i,r.Ls)}}function $4(n,e){const i=Ce(n),r=i.Au.get(e);if(r&&r.hu)return ze().add(r.key);{let o=ze();const c=i.Iu.get(e);if(!c)return o;for(const h of c){const m=i.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function aT(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=nT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=F4.bind(null,e),e.Pu.H_=O4.bind(null,e.eventManager),e.Pu.yu=k4.bind(null,e.eventManager),e}function X4(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=G4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=K4.bind(null,e),e}class Lh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,i){return null}Mu(e,i){return null}vu(e){return e4(this.persistence,new WI,e.initialUser,this.serializer)}Cu(e){return new Ub(Fp.mi,this.serializer)}Du(e){return new o4}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lh.provider={build:()=>new Lh};class W4 extends Lh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,i){Qe(this.persistence.referenceDelegate instanceof Vh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new jI(r,e.asyncQueue,i)}Cu(e){const i=this.cacheSizeBytes!==void 0?gn.withCacheSize(this.cacheSizeBytes):gn.DEFAULT;return new Ub((r=>Vh.mi(r,i)),this.serializer)}}class ap{async initialize(e,i){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>d0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Y4.bind(null,this.syncEngine),await N4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new D4})()}createDatastore(e){const i=rf(e.databaseInfo.databaseId),r=(function(c){return new f4(c)})(e.databaseInfo);return(function(c,h,m,p){return new g4(c,h,m,p)})(e.authCredentials,e.appCheckCredentials,r,i)}createRemoteStore(e){return(function(r,o,c,h,m){return new _4(r,o,c,h,m)})(this.localStore,this.datastore,e.asyncQueue,(i=>d0(this.syncEngine,i,0)),(function(){return o0.v()?new o0:new l4})())}createSyncEngine(e,i){return(function(o,c,h,m,p,g,E){const T=new L4(o,c,h,m,p,g);return E&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,i)}async terminate(){await(async function(i){const r=Ce(i);me(da,"RemoteStore shutting down."),r.Ea.add(5),await yc(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ap.provider={build:()=>new ap};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ws("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,i){setTimeout((()=>{this.muted||e(i)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="FirestoreClient";class J4{constructor(e,i,r,o,c){this.authCredentials=e,this.appCheckCredentials=i,this.asyncQueue=r,this.databaseInfo=o,this.user=Jt.UNAUTHENTICATED,this.clientId=Op.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(r,(async h=>{me(wr,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(r,(h=>(me(wr,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Es;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){const r=Jp(i,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Dm(n,e){n.asyncQueue.verifyOperationInProgress(),me(wr,"Initializing OfflineComponentProvider");const i=n.configuration;await e.initialize(i);let r=i.initialUser;n.setCredentialChangeListener((async o=>{r.isEqual(o)||(await zb(e.localStore,o),r=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function p0(n,e){n.asyncQueue.verifyOperationInProgress();const i=await Z4(n);me(wr,"Initializing OnlineComponentProvider"),await e.initialize(i,n.configuration),n.setCredentialChangeListener((r=>c0(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,o)=>c0(e.remoteStore,o))),n._onlineComponents=e}async function Z4(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){me(wr,"Using user provided OfflineComponentProvider");try{await Dm(n,n._uninitializedComponentsProvider._offline)}catch(e){const i=e;if(!(function(o){return o.name==="FirebaseError"?o.code===ne.FAILED_PRECONDITION||o.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(i))throw i;yo("Error using user provided cache. Falling back to memory cache: "+i),await Dm(n,new Lh)}}else me(wr,"Using default OfflineComponentProvider"),await Dm(n,new W4(void 0));return n._offlineComponents}async function lT(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(me(wr,"Using user provided OnlineComponentProvider"),await p0(n,n._uninitializedComponentsProvider._online)):(me(wr,"Using default OnlineComponentProvider"),await p0(n,new ap))),n._onlineComponents}function eD(n){return lT(n).then((e=>e.syncEngine))}async function cT(n){const e=await lT(n),i=e.eventManager;return i.onListen=P4.bind(null,e.syncEngine),i.onUnlisten=B4.bind(null,e.syncEngine),i.onFirstRemoteStoreListen=U4.bind(null,e.syncEngine),i.onLastRemoteStoreUnlisten=q4.bind(null,e.syncEngine),i}function tD(n,e,i={}){const r=new Es;return n.asyncQueue.enqueueAndForget((async()=>(function(c,h,m,p,g){const E=new oT({next:w=>{E.Nu(),h.enqueueAndForget((()=>Wb(c,T)));const k=w.docs.has(m);!k&&w.fromCache?g.reject(new de(ne.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&w.fromCache&&p&&p.source==="server"?g.reject(new de(ne.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new Jb(Pp(m.path),E,{includeMetadataChanges:!0,qa:!0});return Xb(c,T)})(await cT(n),n.asyncQueue,e,i,r))),r.promise}function nD(n,e,i={}){const r=new Es;return n.asyncQueue.enqueueAndForget((async()=>(function(c,h,m,p,g){const E=new oT({next:w=>{E.Nu(),h.enqueueAndForget((()=>Wb(c,T))),w.fromCache&&p.source==="server"?g.reject(new de(ne.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new Jb(m,E,{includeMetadataChanges:!0,qa:!0});return Xb(c,T)})(await cT(n),n.asyncQueue,e,i,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="firestore.googleapis.com",y0=!0;class _0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new de(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hT,this.ssl=y0}else this.host=e.host,this.ssl=e.ssl??y0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Pb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<MI)throw new de(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_N("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uT(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new de(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new de(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new de(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,o){return r.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lf{constructor(e,i,r,o){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new lN;switch(r.type){case"firstParty":return new fN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new de(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const r=g0.get(i);r&&(me("ComponentProvider","Removing Datastore"),g0.delete(i),r.terminate())})(this),Promise.resolve()}}function iD(n,e,i,r={}){n=As(n,lf);const o=ma(e),c=n._getSettings(),h={...c,emulatorOptions:n._getEmulatorOptions()},m=`${e}:${i}`;o&&(_p(`https://${m}`),vp("Firestore",!0)),c.host!==hT&&c.host!==m&&yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...c,host:m,ssl:o,emulatorOptions:r};if(!la(p,h)&&(n._setSettings(p),r.mockUserToken)){let g,E;if(typeof r.mockUserToken=="string")g=r.mockUserToken,E=Jt.MOCK_USER;else{g=nE(r.mockUserToken,n._app?.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new de(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Jt(T)}n._authCredentials=new cN(new $E(g,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,i,r){this.converter=i,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Do(this.firestore,e,this._query)}}class Et{constructor(e,i,r){this.converter=i,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}toJSON(){return{type:Et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,i,r){if(dc(i,Et._jsonSchema))return new Et(e,r||null,new Ee(it.fromString(i.referencePath)))}}Et._jsonSchemaVersion="firestore/documentReference/1.0",Et._jsonSchema={type:Ot("string",Et._jsonSchemaVersion),referencePath:Ot("string")};class yr extends Do{constructor(e,i,r){super(e,i,Pp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new Ee(e))}withConverter(e){return new yr(this.firestore,e,this._path)}}function op(n,e,...i){if(n=zt(n),XE("collection","path",e),n instanceof lf){const r=it.fromString(e,...i);return D1(r),new yr(n,null,r)}{if(!(n instanceof Et||n instanceof yr))throw new de(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(it.fromString(e,...i));return D1(r),new yr(n.firestore,null,r)}}function Yl(n,e,...i){if(n=zt(n),arguments.length===1&&(e=Op.newId()),XE("doc","path",e),n instanceof lf){const r=it.fromString(e,...i);return I1(r),new Et(n,null,new Ee(r))}{if(!(n instanceof Et||n instanceof yr))throw new de(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(it.fromString(e,...i));return I1(r),new Et(n.firestore,n instanceof yr?n.converter:null,new Ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="AsyncQueue";class E0{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new qb(this,"async_queue_retry"),this._c=()=>{const r=Im();r&&me(v0,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const i=Im();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const i=Im();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new Es;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!No(e))throw e;me(v0,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const i=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,ws("INTERNAL UNHANDLED ERROR: ",b0(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=i,i}enqueueAfterDelay(e,i,r){this.uc(),this.oc.indexOf(e)>-1&&(i=0);const o=Wp.createAndSchedule(this,e,i,r,(c=>this.hc(c)));return this.tc.push(o),o}uc(){this.nc&&we(47125,{Pc:b0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const i of this.tc)if(i.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((i,r)=>i.targetTimeMs-r.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const i=this.tc.indexOf(e);this.tc.splice(i,1)}}function b0(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class vc extends lf{constructor(e,i,r,o){super(e,i,r,o),this.type="firestore",this._queue=new E0,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new E0(e),this._firestoreClient=void 0,await e}}}function sD(n,e){const i=typeof n=="object"?n:Tp(),r=typeof n=="string"?n:Ch,o=Gh(i,"firestore").getImmediate({identifier:r});if(!o._initialized){const c=Z0("firestore");c&&iD(o,...c)}return o}function ng(n){if(n._terminated)throw new de(ne.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||rD(n),n._firestoreClient}function rD(n){const e=n._freezeSettings(),i=(function(o,c,h,m){return new NN(o,c,h,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,uT(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new J4(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(o){const c=o?._online.build();return{_offline:o?._offline.build(c),_online:c}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gn($t.fromBase64String(e))}catch(i){throw new de(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new Gn($t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Gn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(dc(e,Gn._jsonSchema))return Gn.fromBase64String(e.bytes)}}Gn._jsonSchemaVersion="firestore/bytes/1.0",Gn._jsonSchema={type:Ot("string",Gn._jsonSchemaVersion),bytes:Ot("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new de(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new de(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new de(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ue(this._lat,e._lat)||Ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Gi._jsonSchemaVersion}}static fromJSON(e){if(dc(e,Gi._jsonSchema))return new Gi(e.latitude,e.longitude)}}Gi._jsonSchemaVersion="firestore/geoPoint/1.0",Gi._jsonSchema={type:Ot("string",Gi._jsonSchemaVersion),latitude:Ot("number"),longitude:Ot("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this._values=(e||[]).map((i=>i))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,o){if(r.length!==o.length)return!1;for(let c=0;c<r.length;++c)if(r[c]!==o[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ki._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(dc(e,Ki._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((i=>typeof i=="number")))return new Ki(e.vectorValues);throw new de(ne.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ki._jsonSchemaVersion="firestore/vectorValue/1.0",Ki._jsonSchema={type:Ot("string",Ki._jsonSchemaVersion),vectorValues:Ot("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=/^__.*__$/;class oD{constructor(e,i,r){this.data=e,this.fieldMask=i,this.fieldTransforms=r}toMutation(e,i){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,i,this.fieldTransforms):new pc(e,this.data,i,this.fieldTransforms)}}class fT{constructor(e,i,r){this.data=e,this.fieldMask=i,this.fieldTransforms=r}toMutation(e,i){return new Nr(e,this.data,this.fieldMask,i,this.fieldTransforms)}}function dT(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ac:n})}}class sg{constructor(e,i,r,o,c,h){this.settings=e,this.databaseId=i,this.serializer=r,this.ignoreUndefinedProperties=o,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new sg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const i=this.path?.child(e),r=this.Vc({path:i,fc:!1});return r.gc(e),r}yc(e){const i=this.path?.child(e),r=this.Vc({path:i,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ph(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((i=>e.isPrefixOf(i)))!==void 0||this.fieldTransforms.find((i=>e.isPrefixOf(i.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(dT(this.Ac)&&aD.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class lD{constructor(e,i,r){this.databaseId=e,this.ignoreUndefinedProperties=i,this.serializer=r||rf(e)}Cc(e,i,r,o=!1){return new sg({Ac:e,methodName:i,Dc:r,path:Yt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rg(n){const e=n._freezeSettings(),i=rf(n._databaseId);return new lD(n._databaseId,!!e.ignoreUndefinedProperties,i)}function cD(n,e,i,r,o,c={}){const h=n.Cc(c.merge||c.mergeFields?2:0,e,i,o);ag("Data must be an object, but it was:",h,r);const m=mT(r,h);let p,g;if(c.merge)p=new Nn(h.fieldMask),g=h.fieldTransforms;else if(c.mergeFields){const E=[];for(const T of c.mergeFields){const w=lp(e,T,i);if(!h.contains(w))throw new de(ne.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);gT(E,w)||E.push(w)}p=new Nn(E),g=h.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,g=h.fieldTransforms;return new oD(new yn(m),p,g)}class uf extends ig{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uf}}function uD(n,e,i,r){const o=n.Cc(1,e,i);ag("Data must be an object, but it was:",o,r);const c=[],h=yn.empty();Cr(r,((p,g)=>{const E=og(e,p,i);g=zt(g);const T=o.yc(E);if(g instanceof uf)c.push(E);else{const w=Ec(g,T);w!=null&&(c.push(E),h.set(E,w))}}));const m=new Nn(c);return new fT(h,m,o.fieldTransforms)}function hD(n,e,i,r,o,c){const h=n.Cc(1,e,i),m=[lp(e,r,i)],p=[o];if(c.length%2!=0)throw new de(ne.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<c.length;w+=2)m.push(lp(e,c[w])),p.push(c[w+1]);const g=[],E=yn.empty();for(let w=m.length-1;w>=0;--w)if(!gT(g,m[w])){const k=m[w];let z=p[w];z=zt(z);const K=h.yc(k);if(z instanceof uf)g.push(k);else{const j=Ec(z,K);j!=null&&(g.push(k),E.set(k,j))}}const T=new Nn(g);return new fT(E,T,h.fieldTransforms)}function fD(n,e,i,r=!1){return Ec(i,n.Cc(r?4:3,e))}function Ec(n,e){if(pT(n=zt(n)))return ag("Unsupported field value:",e,n),mT(n,e);if(n instanceof ig)return(function(r,o){if(!dT(o.Ac))throw o.Sc(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${r._methodName}() is not currently supported inside arrays`);const c=r._toFieldTransform(o);c&&o.fieldTransforms.push(c)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,o){const c=[];let h=0;for(const m of r){let p=Ec(m,o.wc(h));p==null&&(p={nullValue:"NULL_VALUE"}),c.push(p),h++}return{arrayValue:{values:c}}})(n,e)}return(function(r,o){if((r=zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JN(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const c=at.fromDate(r);return{timestampValue:Mh(o.serializer,c)}}if(r instanceof at){const c=new at(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mh(o.serializer,c)}}if(r instanceof Gi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gn)return{bytesValue:Db(o.serializer,r._byteString)};if(r instanceof Et){const c=o.databaseId,h=r.firestore._databaseId;if(!h.isEqual(c))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:qp(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof Ki)return(function(h,m){return{mapValue:{fields:{[rb]:{stringValue:ab},[Nh]:{arrayValue:{values:h.toArray().map((g=>{if(typeof g!="number")throw m.Sc("VectorValues must only contain numeric values.");return Up(m.serializer,g)}))}}}}}})(r,o);throw o.Sc(`Unsupported field value: ${$h(r)}`)})(n,e)}function mT(n,e){const i={};return ZE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(n,((r,o)=>{const c=Ec(o,e.mc(r));c!=null&&(i[r]=c)})),{mapValue:{fields:i}}}function pT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof at||n instanceof Gi||n instanceof Gn||n instanceof Et||n instanceof ig||n instanceof Ki)}function ag(n,e,i){if(!pT(i)||!WE(i)){const r=$h(i);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function lp(n,e,i){if((e=zt(e))instanceof cf)return e._internalPath;if(typeof e=="string")return og(n,e);throw Ph("Field path arguments must be of type string or ",n,!1,void 0,i)}const dD=new RegExp("[~\\*/\\[\\]]");function og(n,e,i){if(e.search(dD)>=0)throw Ph(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,i);try{return new cf(...e.split("."))._internalPath}catch{throw Ph(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,i)}}function Ph(n,e,i,r,o){const c=r&&!r.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;i&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(c||h)&&(p+=" (found",c&&(p+=` in field ${r}`),h&&(p+=` in document ${o}`),p+=")"),new de(ne.INVALID_ARGUMENT,m+n+p)}function gT(n,e){return n.some((i=>i.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,i,r,o,c){this._firestore=e,this._userDataWriter=i,this._key=r,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const i=this._document.data.field(lg("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i)}}}class mD extends yT{data(){return super.data()}}function lg(n,e){return typeof e=="string"?og(n,e):e instanceof cf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new de(ne.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cg{}class gD extends cg{}function cp(n,e,...i){let r=[];e instanceof cg&&r.push(e),r=r.concat(i),(function(c){const h=c.filter((p=>p instanceof ug)).length,m=c.filter((p=>p instanceof hf)).length;if(h>1||h>0&&m>0)throw new de(ne.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const o of r)n=o._apply(n);return n}class hf extends gD{constructor(e,i,r){super(),this._field=e,this._op=i,this._value=r,this.type="where"}static _create(e,i,r){return new hf(e,i,r)}_apply(e){const i=this._parse(e);return _T(e._query,i),new Do(e.firestore,e.converter,Xm(e._query,i))}_parse(e){const i=rg(e.firestore);return(function(c,h,m,p,g,E,T){let w;if(g.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new de(ne.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){S0(T,E);const z=[];for(const K of T)z.push(T0(p,c,K));w={arrayValue:{values:z}}}else w=T0(p,c,T)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||S0(T,E),w=fD(m,h,T,E==="in"||E==="not-in");return Dt.create(g,E,w)})(e._query,"where",i,e.firestore._databaseId,this._field,this._op,this._value)}}function up(n,e,i){const r=e,o=lg("where",n);return hf._create(o,r,i)}class ug extends cg{constructor(e,i){super(),this.type=e,this._queryConstraints=i}static _create(e,i){return new ug(e,i)}_parse(e){const i=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return i.length===1?i[0]:ui.create(i,this._getOperator())}_apply(e){const i=this._parse(e);return i.getFilters().length===0?e:((function(o,c){let h=o;const m=c.getFlattenedFilters();for(const p of m)_T(h,p),h=Xm(h,p)})(e._query,i),new Do(e.firestore,e.converter,Xm(e._query,i)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function T0(n,e,i){if(typeof(i=zt(i))=="string"){if(i==="")throw new de(ne.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mb(e)&&i.indexOf("/")!==-1)throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${i}' contains a '/' character.`);const r=e.path.child(it.fromString(i));if(!Ee.isDocumentKey(r))throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return U1(n,new Ee(r))}if(i instanceof Et)return U1(n,i._key);throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$h(i)}.`)}function S0(n,e){if(!Array.isArray(n)||n.length===0)throw new de(ne.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _T(n,e){const i=(function(o,c){for(const h of o)for(const m of h.getFlattenedFilters())if(c.indexOf(m.op)>=0)return m.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(i!==null)throw i===e.op?new de(ne.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new de(ne.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${i.toString()}' filters.`)}class yD{convertValue(e,i="none"){switch(Tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,i);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,i);case 11:return this.convertObject(e.mapValue,i);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,i){return this.convertObjectMap(e.fields,i)}convertObjectMap(e,i="none"){const r={};return Cr(e,((o,c)=>{r[o]=this.convertValue(c,i)})),r}convertVectorValue(e){const i=e.fields?.[Nh].arrayValue?.values?.map((r=>vt(r.doubleValue)));return new Ki(i)}convertGeoPoint(e){return new Gi(vt(e.latitude),vt(e.longitude))}convertArray(e,i){return(e.values||[]).map((r=>this.convertValue(r,i)))}convertServerTimestamp(e,i){switch(i){case"previous":const r=Jh(e);return r==null?null:this.convertValue(r,i);case"estimate":return this.convertTimestamp(ec(e));default:return null}}convertTimestamp(e){const i=Er(e);return new at(i.seconds,i.nanos)}convertDocumentKey(e,i){const r=it.fromString(e);Qe(Lb(r),9688,{name:e});const o=new tc(r.get(1),r.get(3)),c=new Ee(r.popFirst(5));return o.isEqual(i)||ws(`Document ${c} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(n,e,i){let r;return r=n?n.toFirestore(e):e,r}class Bl{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oa extends yT{constructor(e,i,r,o,c,h){super(e,i,r,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const i=new gh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){const r=this._document.data.field(lg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(ne.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,i={};return i.type=oa._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}oa._jsonSchemaVersion="firestore/documentSnapshot/1.0",oa._jsonSchema={type:Ot("string",oa._jsonSchemaVersion),bundleSource:Ot("string","DocumentSnapshot"),bundleName:Ot("string"),bundle:Ot("string")};class gh extends oa{data(e={}){return super.data(e)}}class go{constructor(e,i,r,o){this._firestore=e,this._userDataWriter=i,this._snapshot=o,this.metadata=new Bl(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach((i=>e.push(i))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,i){this._snapshot.docs.forEach((r=>{e.call(i,new gh(this._firestore,this._userDataWriter,r.key,r,new Bl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new de(ne.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(o,c){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const p=new gh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Bl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>c||m.type!==3)).map((m=>{const p=new gh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Bl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,E=-1;return m.type!==0&&(g=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:vD(m.type),doc:p,oldIndex:g,newIndex:E}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(ne.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=go._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Op.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],r=[],o=[];return this.docs.forEach((c=>{c._document!==null&&(i.push(c._document),r.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function vD(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(n){n=As(n,Et);const e=As(n.firestore,vc);return tD(ng(e),n._key).then((i=>bD(e,n,i)))}go._jsonSchemaVersion="firestore/querySnapshot/1.0",go._jsonSchema={type:Ot("string",go._jsonSchemaVersion),bundleSource:Ot("string","QuerySnapshot"),bundleName:Ot("string"),bundle:Ot("string")};class ET extends yD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gn(e)}convertReference(e){const i=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,i)}}function yh(n){n=As(n,Do);const e=As(n.firestore,vc),i=ng(e),r=new ET(e);return pD(n._query),nD(i,n._query).then((o=>new go(e,r,n,o)))}function bT(n,e,i){n=As(n,Et);const r=As(n.firestore,vc),o=_D(n.converter,e);return TT(r,[cD(rg(r),"setDoc",n._key,o,n.converter!==null,i).toMutation(n._key,Hi.none())])}function ED(n,e,i,...r){n=As(n,Et);const o=As(n.firestore,vc),c=rg(o);let h;return h=typeof(e=zt(e))=="string"||e instanceof cf?hD(c,"updateDoc",n._key,e,i,r):uD(c,"updateDoc",n._key,e),TT(o,[h.toMutation(n._key,Hi.exists(!0))])}function TT(n,e){return(function(r,o){const c=new Es;return r.asyncQueue.enqueueAndForget((async()=>H4(await eD(r),o,c))),c.promise})(ng(n),e)}function bD(n,e,i){const r=i.docs.get(e._key),o=new ET(n);return new oa(n,o,e._key,r,new Bl(i.hasPendingWrites,i.fromCache),e.converter)}(function(e,i=!0){(function(o){Ro=o})(pa),ca(new _r("firestore",((r,{instanceIdentifier:o,options:c})=>{const h=r.getProvider("app").getImmediate(),m=new vc(new uN(r.getProvider("auth-internal")),new dN(h,r.getProvider("app-check-internal")),(function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new de(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tc(g.options.projectId,E)})(h,o),h);return c={useFetchStreams:i,...c},m._setSettings(c),m}),"PUBLIC").setMultipleInstances(!0)),Ui(x1,R1,e),Ui(x1,R1,"esm2020")})();var TD="firebase",SD="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ui(TD,SD,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="firebasestorage.googleapis.com",wD="storageBucket",AD=120*1e3,xD=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends $i{constructor(e,i,r=0){super(Om(e),`Firebase Storage: ${i} (${Om(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Xi.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Om(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Yi;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Yi||(Yi={}));function Om(n){return"storage/"+n}function RD(){const n="An unknown error occurred, please check the error payload for server response.";return new Xi(Yi.UNKNOWN,n)}function CD(){return new Xi(Yi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ND(){return new Xi(Yi.CANCELED,"User canceled the upload/download.")}function ID(n){return new Xi(Yi.INVALID_URL,"Invalid URL '"+n+"'.")}function DD(n){return new Xi(Yi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function w0(n){return new Xi(Yi.INVALID_ARGUMENT,n)}function wT(){return new Xi(Yi.APP_DELETED,"The Firebase app was deleted.")}function OD(n){return new Xi(Yi.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,i){this.bucket=e,this.path_=i}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,i){let r;try{r=oi.makeFromUrl(e,i)}catch{return new oi(e,"")}if(r.path==="")return r;throw DD(e)}static makeFromUrl(e,i){let r=null;const o="([A-Za-z0-9.\\-_]+)";function c(se){se.path.charAt(se.path.length-1)==="/"&&(se.path_=se.path_.slice(0,-1))}const h="(/(.*))?$",m=new RegExp("^gs://"+o+h,"i"),p={bucket:1,path:3};function g(se){se.path_=decodeURIComponent(se.path)}const E="v[A-Za-z0-9_]+",T=i.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",k=new RegExp(`^https?://${T}/${E}/b/${o}/o${w}`,"i"),z={bucket:1,path:3},K=i===ST?"(?:storage.googleapis.com|storage.cloud.google.com)":i,j="([^?#]*)",q=new RegExp(`^https?://${K}/${o}/${j}`,"i"),P=[{regex:m,indices:p,postModify:c},{regex:k,indices:z,postModify:g},{regex:q,indices:{bucket:1,path:2},postModify:g}];for(let se=0;se<P.length;se++){const ae=P[se],ue=ae.regex.exec(e);if(ue){const C=ue[ae.indices.bucket];let x=ue[ae.indices.path];x||(x=""),r=new oi(C,x),ae.postModify(r);break}}if(r==null)throw ID(e);return r}}class kD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(n,e,i){let r=1,o=null,c=null,h=!1,m=0;function p(){return m===2}let g=!1;function E(...j){g||(g=!0,e.apply(null,j))}function T(j){o=setTimeout(()=>{o=null,n(k,p())},j)}function w(){c&&clearTimeout(c)}function k(j,...q){if(g){w();return}if(j){w(),E.call(null,j,...q);return}if(p()||h){w(),E.call(null,j,...q);return}r<64&&(r*=2);let P;m===1?(m=2,P=0):P=(r+Math.random())*1e3,T(P)}let z=!1;function K(j){z||(z=!0,w(),!g&&(o!==null?(j||(m=2),clearTimeout(o),T(0)):j||(m=1)))}return T(0),c=setTimeout(()=>{h=!0,K(!0)},i),K}function VD(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(n){return n!==void 0}function A0(n,e,i,r){if(r<e)throw w0(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>i)throw w0(`Invalid value for '${n}'. Expected ${i} or less.`)}function LD(n){const e=encodeURIComponent;let i="?";for(const r in n)if(n.hasOwnProperty(r)){const o=e(r)+"="+e(n[r]);i=i+o+"&"}return i=i.slice(0,-1),i}var Uh;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Uh||(Uh={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(n,e){const i=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,c=e.indexOf(n)!==-1;return i||o||c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,i,r,o,c,h,m,p,g,E,T,w=!0,k=!1){this.url_=e,this.method_=i,this.headers_=r,this.body_=o,this.successCodes_=c,this.additionalRetryCodes_=h,this.callback_=m,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=E,this.connectionFactory_=T,this.retry=w,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((z,K)=>{this.resolve_=z,this.reject_=K,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new sh(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const h=m=>{const p=m.loaded,g=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&c.addUploadProgressListener(h),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(h),this.pendingConnection_=null;const m=c.getErrorCode()===Uh.NO_ERROR,p=c.getStatus();if(!m||PD(p,this.additionalRetryCodes_)&&this.retry){const E=c.getErrorCode()===Uh.ABORT;r(!1,new sh(!1,null,E));return}const g=this.successCodes_.indexOf(p)!==-1;r(!0,new sh(g,c))})},i=(r,o)=>{const c=this.resolve_,h=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(m,m.getResponse());jD(p)?c(p):c()}catch(p){h(p)}else if(m!==null){const p=RD();p.serverResponse=m.getErrorText(),this.errorCallback_?h(this.errorCallback_(m,p)):h(p)}else if(o.canceled){const p=this.appDelete_?wT():ND();h(p)}else{const p=CD();h(p)}};this.canceled_?i(!1,new sh(!1,null,!0)):this.backoffId_=MD(e,i,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class sh{constructor(e,i,r){this.wasSuccessCode=e,this.connection=i,this.canceled=!!r}}function zD(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function BD(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qD(n,e){e&&(n["X-Firebase-GMPID"]=e)}function HD(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function FD(n,e,i,r,o,c,h=!0,m=!1){const p=LD(n.urlParams),g=n.url+p,E=Object.assign({},n.headers);return qD(E,e),zD(E,i),BD(E,c),HD(E,r),new UD(g,n.method,E,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h,m)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function KD(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,i){this._service=e,i instanceof oi?this._location=i:this._location=oi.makeFromUrl(i,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,i){return new zh(e,i)}get root(){const e=new oi(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return KD(this._location.path)}get storage(){return this._service}get parent(){const e=GD(this._location.path);if(e===null)return null;const i=new oi(this._location.bucket,e);return new zh(this._service,i)}_throwIfRoot(e){if(this._location.path==="")throw OD(e)}}function x0(n,e){const i=e?.[wD];return i==null?null:oi.makeFromBucketSpec(i,n)}function QD(n,e,i,r={}){n.host=`${e}:${i}`;const o=ma(e);o&&(_p(`https://${n.host}/b`),vp("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:c}=r;c&&(n._overrideAuthToken=typeof c=="string"?c:nE(c,n.app.options.projectId))}class YD{constructor(e,i,r,o,c,h=!1){this.app=e,this._authProvider=i,this._appCheckProvider=r,this._url=o,this._firebaseVersion=c,this._isUsingEmulator=h,this._bucket=null,this._host=ST,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=AD,this._maxUploadRetryTime=xD,this._requests=new Set,o!=null?this._bucket=oi.makeFromBucketSpec(o,this._host):this._bucket=x0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=oi.makeFromBucketSpec(this._url,e):this._bucket=x0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){A0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){A0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const i=await e.getToken();if(i!==null)return i.accessToken}return null}async _getAppCheckToken(){if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zh(this,e)}_makeRequest(e,i,r,o,c=!0){if(this._deleted)return new kD(wT());{const h=FD(e,this._appId,r,o,i,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,i){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,i,r,o).getPromise()}}const R0="@firebase/storage",C0="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="storage";function $D(n=Tp(),e){n=zt(n);const r=Gh(n,AT).getImmediate({identifier:e}),o=Z0("storage");return o&&XD(r,...o),r}function XD(n,e,i,r={}){QD(n,e,i,r)}function WD(n,{instanceIdentifier:e}){const i=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new YD(i,r,o,e,pa)}function JD(){ca(new _r(AT,WD,"PUBLIC").setMultipleInstances(!0)),Ui(R0,C0,""),Ui(R0,C0,"esm2020")}JD();const ZD={apiKey:"AIzaSyCMcWQBH1lxPNm6dSNoeT9RDSvUwAlFAkM",authDomain:"streetbites-app.firebaseapp.com",projectId:"streetbites-app",storageBucket:"streetbites-app.firebasestorage.app",messagingSenderId:"543680507157",appId:"1:543680507157:web:ca617d6b495f7fb6f2cd1c",measurementId:"G-5EWKZJ0V6W"},hg=rE(ZD),Pi=aN(hg),fr=sD(hg);$D(hg);class e3{async login(e,i,r){try{console.log(`
=== ${r.toUpperCase()} LOGIN STARTED ===`),console.log("Email:",e),console.log(`
[1/4] Authenticating with Firebase...`);const c=(await QR(Pi,e.toLowerCase().trim(),i)).user;console.log("✓ Authentication successful"),console.log("   UID:",c.uid),console.log(`
[2/4] Initializing session...`),await new Promise(g=>setTimeout(g,500)),console.log(`
[3/4] Fetching user profile...`);const h=Yl(fr,"users",c.uid),m=await vT(h);if(!m.exists())throw console.error("✗ User document not found in Firestore"),await Ju(Pi),new Error("User profile not found. Please contact support.");const p=m.data();if(console.log("✓ User profile loaded"),console.log("   Role:",p.role),console.log("   Status:",p.account_status),console.log(`
[4/4] Validating role and status...`),p.role!==r)throw console.error(`✗ Role mismatch: Expected ${r}, got ${p.role}`),await Ju(Pi),new Error(`Access denied. This account is not registered as a ${r}.`);if(console.log("✓ Role validated"),p.account_status!=="active")throw console.error("✗ Account is not active:",p.account_status),await Ju(Pi),new Error("Account is not active. Please contact support.");return console.log("✓ Account is active"),console.log(`
=== ${r.toUpperCase()} LOGIN COMPLETED SUCCESSFULLY ===
`),{uid:c.uid,docId:c.uid,email:p.email,firstName:p.first_name,lastName:p.last_name,role:p.role,contactNumber:p.contact_number,accountStatus:p.account_status}}catch(o){throw console.error(`
=== LOGIN FAILED ===`),console.error("Error code:",o.code),console.error("Error message:",o.message),o.code==="auth/user-not-found"?new Error("No account found with this email address."):o.code==="auth/wrong-password"?new Error("Incorrect password. Please try again."):o.code==="auth/invalid-email"?new Error("Invalid email format."):o.code==="auth/user-disabled"?new Error("This account has been disabled."):o.code==="auth/too-many-requests"?new Error("Too many failed login attempts. Please try again later."):o.code==="auth/invalid-credential"?new Error("Invalid email or password. Please check your credentials."):o.message.includes("Access denied")||o.message.includes("not active")||o.message.includes("profile not found")?o:o.code==="permission-denied"?new Error("Permission denied. Unable to access user profile."):(console.error("Unknown error during login:",o),new Error("Login failed. Please try again."))}}async userLogin(e,i){return await this.login(e,i,"user")}async vendorLogin(e,i){return await this.login(e,i,"vendor")}async adminLogin(e,i){return await this.login(e,i,"admin")}async logout(){try{return console.log("Logging out user..."),await Ju(Pi),localStorage.removeItem("userData"),console.log("✓ Logout successful"),{success:!0}}catch(e){throw console.error("Logout error:",e),new Error("Logout failed. Please try again.")}}getCurrentUser(){return Pi.currentUser}isAuthenticated(){return!!Pi.currentUser}}const t3=new e3,xT=({viewMode:n,onBack:e,onToggleView:i})=>{const r=an(),[o,c]=F.useState(""),[h,m]=F.useState(""),[p,g]=F.useState({}),[E,T]=F.useState(!1),w=j=>/\S+@\S+\.\S+/.test(j),k=j=>j.trim().toLowerCase(),z=j=>{const q=k(j.target.value);c(q),w(q)&&g(B=>({...B,email:""}))},K=async j=>{if(j.preventDefault(),!w(o)){g({email:"Please enter a valid email address"});return}if(!h||h.length<6){g({password:"Password must be at least 6 characters"});return}g({}),T(!0);try{console.log("Vendor login attempt:",{email:o,password:h});const q=await t3.vendorLogin(o,h);console.log("Vendor login successful:",q),localStorage.setItem("userData",JSON.stringify(q)),r("/vendor-dashboard")}catch(q){console.error("Vendor login error:",q.message),g({submit:q.message||"Login failed. Please try again."})}finally{T(!1)}};return y.jsx("div",{className:"login-page","data-view":n,children:y.jsxs("div",{className:"login-wrapper",children:[y.jsxs("div",{className:"login-hero",children:[y.jsx("button",{className:"back-btn",onClick:e,disabled:E,children:"← Back"}),y.jsx("h1",{className:"logo-title",children:"Vendor Login"}),y.jsx("p",{className:"logo-subtitle",children:"Manage your street food business"}),y.jsx("p",{className:"hero-description",children:"Gain control of your street food business. Update your menu, manage your truck's location, and respond to customer reviews to grow your presence within the StreetBites community."})]}),y.jsxs("main",{className:"login-content",children:[y.jsxs("form",{className:"email-form",onSubmit:K,noValidate:!0,children:[y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"email",className:"form-label",children:"Email"}),y.jsx("input",{type:"email",id:"email",className:"form-input",placeholder:"vendor@example.com",value:o,onChange:z,required:!0,disabled:E}),p.email&&y.jsx("span",{className:"error-message",children:p.email})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"password",className:"form-label",children:"Password"}),y.jsx("input",{type:"password",id:"password",className:"form-input",placeholder:"Enter your password",value:h,onChange:j=>m(j.target.value),required:!0,disabled:E}),p.password&&y.jsx("span",{className:"error-message",children:p.password})]}),p.submit&&y.jsx("div",{className:"error-message",style:{marginBottom:"16px",textAlign:"center"},children:p.submit}),y.jsx("button",{type:"submit",className:"submit-btn",disabled:E,children:E?"Logging in...":"Login"})]}),y.jsx("div",{className:"signup-section",children:y.jsxs("span",{className:"signup-text",children:["Don't have an account? ",y.jsx(di,{to:"/vendor-signup",className:"signup-link",children:"Sign Up"})]})})]})]})})},RT=n=>{const e=_n.c(38),{viewMode:i,onBack:r}=n,[o,c]=F.useState(""),[h,m]=F.useState("");let p;e[0]===Symbol.for("react.memo_cache_sentinel")?(p={},e[0]=p):p=e[0];const[g,E]=F.useState(p),T=n3,w=i3;let k;e[1]===Symbol.for("react.memo_cache_sentinel")?(k=pe=>{const he=w(pe.target.value);c(he),T(he)&&E(s3)},e[1]=k):k=e[1];const z=k;let K;e[2]!==o||e[3]!==h?(K=pe=>{if(pe.preventDefault(),!T(o)){E({email:"Please enter a valid email address"});return}E({}),console.log("User login attempt:",{email:o,password:h})},e[2]=o,e[3]=h,e[4]=K):K=e[4];const j=K;let q;e[5]!==r?(q=y.jsx("button",{className:"back-btn",onClick:r,children:"← Back"}),e[5]=r,e[6]=q):q=e[6];let B,P,se;e[7]===Symbol.for("react.memo_cache_sentinel")?(B=y.jsx("h1",{className:"logo-title",children:"User Login"}),P=y.jsx("p",{className:"logo-subtitle",children:"Sign in to write reviews"}),se=y.jsx("p",{className:"hero-description",children:"Find your next great meal on the go. Discover top-rated vendors, read authentic reviews from fellow foodies, and share your own experiences to help build the ultimate street food guide."}),e[7]=B,e[8]=P,e[9]=se):(B=e[7],P=e[8],se=e[9]);let ae;e[10]!==q?(ae=y.jsxs("div",{className:"login-hero",children:[q,B,P,se]}),e[10]=q,e[11]=ae):ae=e[11];let ue;e[12]===Symbol.for("react.memo_cache_sentinel")?(ue=y.jsx("label",{htmlFor:"email",className:"form-label",children:"Email"}),e[12]=ue):ue=e[12];let C;e[13]!==o?(C=y.jsx("input",{type:"email",id:"email",className:"form-input",placeholder:"juan@example.com",value:o,onChange:z,required:!0}),e[13]=o,e[14]=C):C=e[14];let x;e[15]!==g.email?(x=g.email&&y.jsx("span",{className:"error-message",children:g.email}),e[15]=g.email,e[16]=x):x=e[16];let R;e[17]!==C||e[18]!==x?(R=y.jsxs("div",{className:"form-group",children:[ue,C,x]}),e[17]=C,e[18]=x,e[19]=R):R=e[19];let I;e[20]===Symbol.for("react.memo_cache_sentinel")?(I=y.jsx("label",{htmlFor:"password",className:"form-label",children:"Password"}),e[20]=I):I=e[20];let D;e[21]===Symbol.for("react.memo_cache_sentinel")?(D=pe=>m(pe.target.value),e[21]=D):D=e[21];let V;e[22]!==h?(V=y.jsxs("div",{className:"form-group",children:[I,y.jsx("input",{type:"password",id:"password",className:"form-input",placeholder:"Enter your password",value:h,onChange:D,required:!0})]}),e[22]=h,e[23]=V):V=e[23];let N;e[24]===Symbol.for("react.memo_cache_sentinel")?(N=y.jsx("button",{type:"submit",className:"submit-btn",children:"Login"}),e[24]=N):N=e[24];let _e;e[25]!==j||e[26]!==R||e[27]!==V?(_e=y.jsxs("form",{className:"email-form",onSubmit:j,noValidate:!0,children:[R,V,N]}),e[25]=j,e[26]=R,e[27]=V,e[28]=_e):_e=e[28];let Ne;e[29]===Symbol.for("react.memo_cache_sentinel")?(Ne=y.jsx("div",{className:"signup-section",children:y.jsxs("span",{className:"signup-text",children:["Don't have an account? ",y.jsx(di,{to:"/user-sign",className:"signup-link",children:"Sign Up"})]})}),e[29]=Ne):Ne=e[29];let Y;e[30]!==_e?(Y=y.jsxs("main",{className:"login-content",children:[_e,Ne]}),e[30]=_e,e[31]=Y):Y=e[31];let re;e[32]!==Y||e[33]!==ae?(re=y.jsxs("div",{className:"login-wrapper",children:[ae,Y]}),e[32]=Y,e[33]=ae,e[34]=re):re=e[34];let ce;return e[35]!==re||e[36]!==i?(ce=y.jsx("div",{className:"login-page","data-view":i,children:re}),e[35]=re,e[36]=i,e[37]=ce):ce=e[37],ce};function n3(n){return/\S+@\S+\.\S+/.test(n)}function i3(n){return n.trim().toLowerCase()}function s3(n){return{...n,email:""}}const r3=()=>{const n=_n.c(9),[e,i]=F.useState(null);let r;n[0]===Symbol.for("react.memo_cache_sentinel")?(r=()=>{i(null)},n[0]=r):r=n[0];const o=r;if(e==="admin"){let E;return n[1]===Symbol.for("react.memo_cache_sentinel")?(E=y.jsx(Y0,{onBack:o}),n[1]=E):E=n[1],E}if(e==="vendor"){let E;return n[2]===Symbol.for("react.memo_cache_sentinel")?(E=y.jsx(xT,{onBack:o}),n[2]=E):E=n[2],E}if(e==="user"){let E;return n[3]===Symbol.for("react.memo_cache_sentinel")?(E=y.jsx(RT,{onBack:o}),n[3]=E):E=n[3],E}let c;n[4]===Symbol.for("react.memo_cache_sentinel")?(c=y.jsxs("div",{className:"login-hero",children:[y.jsx("h1",{className:"logo-title",children:"StreetBites"}),y.jsx("p",{className:"logo-subtitle",children:"Sign in to write reviews"}),y.jsx("p",{className:"hero-description",children:"Discover the best street food in your area. Share your experiences, read reviews from fellow food lovers, and help others find their next favorite meal on wheels."})]}),n[4]=c):c=n[4];let h;n[5]===Symbol.for("react.memo_cache_sentinel")?(h=y.jsx("button",{className:"login-btn admin",onClick:()=>i("admin"),children:y.jsx("span",{className:"btn-text",children:"Login as Admin"})}),n[5]=h):h=n[5];let m;n[6]===Symbol.for("react.memo_cache_sentinel")?(m=y.jsx("button",{className:"login-btn vendor",onClick:()=>i("vendor"),children:y.jsx("span",{className:"btn-text",children:"Login as Vendor"})}),n[6]=m):m=n[6];let p;n[7]===Symbol.for("react.memo_cache_sentinel")?(p=y.jsxs("div",{className:"login-buttons",children:[h,m,y.jsx("button",{className:"login-btn email",onClick:()=>i("user"),children:y.jsx("span",{className:"btn-text",children:"Sign In with Email"})})]}),n[7]=p):p=n[7];let g;return n[8]===Symbol.for("react.memo_cache_sentinel")?(g=y.jsx("div",{className:"login-page",children:y.jsxs("div",{className:"login-wrapper",children:[c,y.jsxs("main",{className:"login-content",children:[p,y.jsx("div",{className:"signup-section",children:y.jsxs("span",{className:"signup-text",children:["Don't have an account? ",y.jsx(di,{to:"/user-sign",className:"signup-link",children:"Sign Up"})]})})]})]})}),n[8]=g):g=n[8],g},a3=()=>{const n=_n.c(37),[e,i]=F.useState(1);let r;n[0]===Symbol.for("react.memo_cache_sentinel")?(r={firstName:"",lastName:"",contactNumber:"",email:"",password:""},n[0]=r):r=n[0];const[o,c]=F.useState(r);let h;n[1]===Symbol.for("react.memo_cache_sentinel")?(h={},n[1]=h):h=n[1];const[m,p]=F.useState(h),g=o3,E=l3,T=c3,w=u3;let k;n[2]===Symbol.for("react.memo_cache_sentinel")?(k=Y=>{const{name:re,value:ce}=Y.target;if(re==="contactNumber"){const pe=g(ce);c(he=>({...he,contactNumber:pe})),E(pe)&&p(h3)}else if(re==="email"){const pe=w(ce);c(he=>({...he,email:pe})),T(pe)&&p(f3)}else c(pe=>({...pe,[re]:ce}))},n[2]=k):k=n[2];const z=k;let K;n[3]!==o.contactNumber?(K=Y=>{if(Y.preventDefault(),!E(o.contactNumber)){p({contactNumber:"Please enter a valid mobile number (09XX XXX XXXX)"});return}p({}),i(2)},n[3]=o.contactNumber,n[4]=K):K=n[4];const j=K;let q;n[5]!==e?(q=()=>{e===2?i(1):window.location.href="/login"},n[5]=e,n[6]=q):q=n[6];const B=q;let P;n[7]!==o?(P=Y=>{if(Y.preventDefault(),!T(o.email)){p({email:"Please enter a valid email address"});return}p({}),console.log("Admin signup data:",o)},n[7]=o,n[8]=P):P=n[8];const se=P;let ae;n[9]!==B?(ae=y.jsx("button",{className:"back-btn",onClick:B,children:"← Back"}),n[9]=B,n[10]=ae):ae=n[10];let ue;n[11]===Symbol.for("react.memo_cache_sentinel")?(ue=y.jsx("h1",{className:"logo-title",children:"Admin Sign Up"}),n[11]=ue):ue=n[11];const C=e===1?"Administrator Registration":"Setup Admin Account";let x;n[12]!==C?(x=y.jsx("p",{className:"logo-subtitle",children:C}),n[12]=C,n[13]=x):x=n[13];const R=e===1?"Create an administrator account. Please provide your personal information to begin the registration process.":"Complete your admin account setup by providing your email and creating a secure password.";let I;n[14]!==R?(I=y.jsx("p",{className:"hero-description",children:R}),n[14]=R,n[15]=I):I=n[15];let D;n[16]!==I||n[17]!==ae||n[18]!==x?(D=y.jsxs("div",{className:"login-hero",children:[ae,ue,x,I]}),n[16]=I,n[17]=ae,n[18]=x,n[19]=D):D=n[19];let V;n[20]!==m.contactNumber||n[21]!==m.email||n[22]!==o.contactNumber||n[23]!==o.email||n[24]!==o.firstName||n[25]!==o.lastName||n[26]!==o.password||n[27]!==j||n[28]!==se||n[29]!==e?(V=e===1?y.jsxs("form",{className:"email-form",onSubmit:j,noValidate:!0,children:[y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"firstName",className:"form-label",children:"First Name"}),y.jsx("input",{type:"text",id:"firstName",name:"firstName",className:"form-input",placeholder:"Juan",value:o.firstName,onChange:z,required:!0})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"lastName",className:"form-label",children:"Last Name"}),y.jsx("input",{type:"text",id:"lastName",name:"lastName",className:"form-input",placeholder:"Dela Cruz",value:o.lastName,onChange:z,required:!0})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"contactNumber",className:"form-label",children:"Contact Number"}),y.jsx("input",{type:"tel",id:"contactNumber",name:"contactNumber",className:"form-input",placeholder:"09XX XXX XXXX",value:o.contactNumber,onChange:z,required:!0}),m.contactNumber&&y.jsx("span",{className:"error-message",children:m.contactNumber})]}),y.jsx("button",{type:"submit",className:"submit-btn",children:"Next"})]}):y.jsxs("form",{className:"email-form",onSubmit:se,noValidate:!0,children:[y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"email",className:"form-label",children:"Email"}),y.jsx("input",{type:"email",id:"email",name:"email",className:"form-input",placeholder:"admin@streetbites.com",value:o.email,onChange:z,required:!0}),m.email&&y.jsx("span",{className:"error-message",children:m.email})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"password",className:"form-label",children:"Password"}),y.jsx("input",{type:"password",id:"password",name:"password",className:"form-input",placeholder:"Create a strong password",value:o.password,onChange:z,required:!0,minLength:"8"})]}),y.jsx("button",{type:"submit",className:"submit-btn",children:"Create Admin Account"})]}),n[20]=m.contactNumber,n[21]=m.email,n[22]=o.contactNumber,n[23]=o.email,n[24]=o.firstName,n[25]=o.lastName,n[26]=o.password,n[27]=j,n[28]=se,n[29]=e,n[30]=V):V=n[30];let N;n[31]===Symbol.for("react.memo_cache_sentinel")?(N=y.jsx("div",{className:"signup-section",children:y.jsxs("span",{className:"signup-text",children:["Already have an account? ",y.jsx("a",{href:"/login",className:"signup-link",children:"Sign In"})]})}),n[31]=N):N=n[31];let _e;n[32]!==V?(_e=y.jsxs("main",{className:"login-content",children:[V,N]}),n[32]=V,n[33]=_e):_e=n[33];let Ne;return n[34]!==D||n[35]!==_e?(Ne=y.jsx("div",{className:"login-page",children:y.jsxs("div",{className:"login-wrapper",children:[D,_e]})}),n[34]=D,n[35]=_e,n[36]=Ne):Ne=n[36],Ne};function o3(n){const e=n.replace(/\D/g,"");let i=e;return e.length>4&&e.length<=7?i=`${e.slice(0,4)} ${e.slice(4)}`:e.length>7&&(i=`${e.slice(0,4)} ${e.slice(4,7)} ${e.slice(7,11)}`),i}function l3(n){const e=n.replace(/\D/g,"");return/^09\d{9}$/.test(e)}function c3(n){return/\S+@\S+\.\S+/.test(n)}function u3(n){return n.trim().toLowerCase()}function h3(n){return{...n,contactNumber:""}}function f3(n){return{...n,email:""}}class d3{async emailExists(e){try{const i=op(fr,"users"),r=cp(i,up("email","==",e.toLowerCase().trim()));return!(await yh(r)).empty}catch(i){return console.error("Error checking email existence:",i),!1}}async waitForAuth(e=3e3){const i=Date.now();for(;Date.now()-i<e;){if(Pi.currentUser){console.log("✓ Auth user detected:",Pi.currentUser.uid);return}await new Promise(r=>setTimeout(r,100))}throw new Error("Auth timeout - user not found")}async createUserDocument(e,i){const{email:r,firstName:o,lastName:c,contactNumber:h}=i,m={uid:e,email:r.toLowerCase().trim(),first_name:o.trim(),last_name:c.trim(),contact_number:h.replace(/\s/g,""),role:"user",account_status:"active",created_at:new Date,updated_at:new Date};console.log("Creating document at path: users/"+e),console.log("Document data:",m);const p=Yl(fr,"users",e);await bT(p,m),console.log("✓ Document created successfully")}async signup(e){let i=null;try{const{email:r,password:o,firstName:c,lastName:h,contactNumber:m}=e;if(!r||!o||!c||!h||!m)throw new Error("All fields are required");if(console.log(`
=== SIGNUP PROCESS STARTED ===`),console.log("Email:",r),console.log(`
[1/5] Checking email availability...`),await this.emailExists(r))throw new Error("This email is already registered. Please use a different email or try logging in.");console.log("✓ Email available"),console.log(`
[2/5] Creating Firebase Auth account...`),i=(await KR(Pi,r,o)).user,console.log("✓ Auth account created"),console.log("   UID:",i.uid),console.log(`
[3/5] Waiting for authentication to initialize...`),await this.waitForAuth(),console.log(`
[4/5] Getting authentication token...`);const E=await i.getIdToken(!0);return console.log("✓ Token obtained:",E.substring(0,20)+"..."),console.log("   Waiting for token to propagate..."),await new Promise(T=>setTimeout(T,2e3)),console.log(`
[5/5] Creating user profile in database...`),await this.createUserDocument(i.uid,e),console.log(`
=== SIGNUP COMPLETED SUCCESSFULLY ===
`),{uid:i.uid,docId:i.uid,email:r.toLowerCase().trim(),firstName:c.trim(),lastName:h.trim(),contactNumber:m.replace(/\s/g,""),role:"user",accountStatus:"active"}}catch(r){if(console.error(`
=== SIGNUP FAILED ===`),console.error("Error code:",r.code),console.error("Error message:",r.message),console.error("Full error:",r),i&&(r.code==="permission-denied"||r.message.includes("permission"))){console.log(`
Cleaning up: Attempting to delete auth user...`);try{await i.delete(),console.log("✓ Auth user deleted")}catch(o){console.error("✗ Failed to delete auth user:",o)}}return this.handleSignupError(r)}}handleSignupError(e){throw e.code==="auth/email-already-in-use"?new Error("This email is already registered. Please try logging in or use a different email."):e.code==="auth/weak-password"?new Error("Password is too weak. Please use at least 6 characters."):e.code==="auth/invalid-email"?new Error("Invalid email format. Please enter a valid email address."):e.code==="auth/operation-not-allowed"?new Error("Email/password accounts are not enabled. Please contact support."):e.code==="permission-denied"||e.message.includes("permission")?new Error("Unable to create user profile. Please ensure you are properly authenticated and try again."):e.message.includes("already registered")||e.message.includes("All fields are required")?e:(console.error("Unhandled error:",e),new Error("Signup failed: "+(e.message||"Please try again.")))}}const m3=new d3,p3=()=>{const n=an(),[e,i]=F.useState(1),[r,o]=F.useState({firstName:"",lastName:"",contactNumber:"",email:"",password:""}),[c,h]=F.useState({}),[m,p]=F.useState(!1),g=q=>{const B=q.replace(/\D/g,"");let P=B;return B.length>4&&B.length<=7?P=`${B.slice(0,4)} ${B.slice(4)}`:B.length>7&&(P=`${B.slice(0,4)} ${B.slice(4,7)} ${B.slice(7,11)}`),P},E=q=>{const B=q.replace(/\D/g,"");return/^09\d{9}$/.test(B)},T=q=>/\S+@\S+\.\S+/.test(q),w=q=>q.trim().toLowerCase(),k=q=>{const{name:B,value:P}=q.target;if(B==="contactNumber"){const se=g(P);o(ae=>({...ae,contactNumber:se})),E(se)&&h(ae=>({...ae,contactNumber:""}))}else if(B==="email"){const se=w(P);o(ae=>({...ae,email:se})),T(se)&&h(ae=>({...ae,email:""}))}else o(se=>({...se,[B]:P}))},z=q=>{if(q.preventDefault(),!E(r.contactNumber)){h({contactNumber:"Please enter a valid mobile number (09XX XXX XXXX)"});return}h({}),i(2)},K=()=>{e===2?i(1):n("/login")},j=async q=>{if(q.preventDefault(),!T(r.email)){h({email:"Please enter a valid email address"});return}if(r.password.length<6){h({password:"Password must be at least 6 characters"});return}h({}),p(!0);try{const B=await m3.signup({email:r.email,password:r.password,firstName:r.firstName,lastName:r.lastName,contactNumber:r.contactNumber});console.log("Signup successful:",B),n("/home")}catch(B){console.error("Signup error:",B),h({general:B.message})}finally{p(!1)}};return y.jsx("div",{className:"login-page",children:y.jsxs("div",{className:"login-wrapper",children:[y.jsxs("div",{className:"login-hero",children:[y.jsx("button",{className:"back-btn",onClick:K,children:"← Back"}),y.jsx("h1",{className:"logo-title",children:"Sign Up"}),y.jsx("p",{className:"logo-subtitle",children:e===1?"Tell us about yourself":"Create your account"}),y.jsx("p",{className:"hero-description",children:e===1?"Let's start with your basic information. We'll need your name and contact details.":"Almost there! Set up your email and password to complete your registration."})]}),y.jsxs("main",{className:"login-content",children:[e===1?y.jsxs("form",{className:"email-form",onSubmit:z,noValidate:!0,children:[y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"firstName",className:"form-label",children:"First Name"}),y.jsx("input",{type:"text",id:"firstName",name:"firstName",className:"form-input",placeholder:"Juan",value:r.firstName,onChange:k,required:!0})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"lastName",className:"form-label",children:"Last Name"}),y.jsx("input",{type:"text",id:"lastName",name:"lastName",className:"form-input",placeholder:"Dela Cruz",value:r.lastName,onChange:k,required:!0})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"contactNumber",className:"form-label",children:"Contact Number"}),y.jsx("input",{type:"tel",id:"contactNumber",name:"contactNumber",className:"form-input",placeholder:"09XX XXX XXXX",value:r.contactNumber,onChange:k,required:!0}),c.contactNumber&&y.jsx("span",{className:"error-message",children:c.contactNumber})]}),y.jsx("button",{type:"submit",className:"submit-btn",children:"Next"})]}):y.jsxs("form",{className:"email-form",onSubmit:j,noValidate:!0,children:[c.general&&y.jsx("div",{className:"error-message",style:{marginBottom:"1rem"},children:c.general}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"email",className:"form-label",children:"Email"}),y.jsx("input",{type:"email",id:"email",name:"email",className:"form-input",placeholder:"juan@example.com",value:r.email,onChange:k,required:!0,disabled:m}),c.email&&y.jsx("span",{className:"error-message",children:c.email})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"password",className:"form-label",children:"Password"}),y.jsx("input",{type:"password",id:"password",name:"password",className:"form-input",placeholder:"Create a strong password",value:r.password,onChange:k,required:!0,minLength:"6",disabled:m}),c.password&&y.jsx("span",{className:"error-message",children:c.password})]}),y.jsx("button",{type:"submit",className:"submit-btn",disabled:m,children:m?"Creating Account...":"Create Account"})]}),y.jsx("div",{className:"signup-section",children:y.jsxs("span",{className:"signup-text",children:["Already have an account? ",y.jsx("a",{href:"/login",className:"signup-link",children:"Sign In"})]})})]})]})})};class g3{async getUserByEmail(e){try{const i=e.toLowerCase().trim();console.log("Searching for user with email:",i);const r=op(fr,"users"),o=cp(r,up("email","==",i)),c=await yh(o);if(console.log(`Found ${c.size} matching user(s)`),c.empty){console.warn("No user found. Attempting alternative search with original case...");const p=(await yh(r)).docs.find(g=>g.data().email?.toLowerCase()===i);return p?(console.log("✓ User found via case-insensitive search"),{uid:p.id,...p.data()}):null}const h=c.docs[0];return console.log("✓ User found:",h.data()),{uid:h.id,...h.data()}}catch(i){throw console.error("Error checking user existence:",i),new Error(`Failed to search for user: ${i.message}`)}}async isAlreadyVendor(e){try{const i=Yl(fr,"vendors",e);return(await vT(i)).exists()}catch(i){return console.error("Error checking vendor existence:",i),!1}}async businessNameExists(e){try{const i=op(fr,"vendors"),r=cp(i,up("business_name","==",e.trim()));return!(await yh(r)).empty}catch(i){return console.error("Error checking business name existence:",i),!1}}async updateUserRoleToVendor(e){try{console.log("Attempting to update user role for UID:",e);const i=Yl(fr,"users",e);await ED(i,{role:"vendor",updated_at:new Date}),console.log("✓ User role updated to vendor")}catch(i){throw console.error("Error updating user role:",i.code,i.message),new Error(`Failed to update user role: ${i.message}`)}}async createVendorDocument(e,i){const{businessName:r,address:o,operatingHours:c}=i,h={user_id:`/users/${e}`,business_name:r.trim(),address:o.trim(),operating_hours:c.trim(),verification_status:"pending",created_at:new Date,updated_at:new Date};console.log("Creating vendor document at path: vendors/"+e),console.log("Vendor document data:",h);const m=Yl(fr,"vendors",e);await bT(m,h),console.log("✓ Vendor document created successfully")}async applyAsVendor(e){try{const{email:i,businessName:r,address:o,operatingHours:c}=e;if(!i||!r||!o||!c)throw new Error("All fields are required");console.log(`
=== VENDOR APPLICATION PROCESS STARTED ===`),console.log("Email provided:",i),console.log("Business Name:",r),console.log(`
[1/5] Checking if user account exists...`);const h=await this.getUserByEmail(i);if(!h)throw console.error("User not found in database"),console.error("Troubleshooting tips:"),console.error("1. Make sure the email matches exactly (case-sensitive in some systems)"),console.error('2. Verify the account was created in the "users" collection'),console.error("3. Check browser console and Firebase console for details"),new Error(`No user account found with this email. Please verify:
1. You used the correct email
2. The account was successfully created
3. Try refreshing the page and try again`);if(console.log("✓ User account found"),console.log("   UID:",h.uid),console.log("   Email:",h.email),console.log(`
[2/5] Checking if user is already a vendor...`),await this.isAlreadyVendor(h.uid))throw new Error("This account is already registered as a vendor.");if(console.log("✓ User is not yet a vendor"),console.log(`
[3/5] Checking business name availability...`),await this.businessNameExists(r))throw new Error("This business name is already registered. Please use a different name.");return console.log("✓ Business name available"),console.log(`
[4/5] Updating user role to vendor...`),await this.updateUserRoleToVendor(h.uid),console.log(`
[5/5] Creating vendor profile in database...`),await this.createVendorDocument(h.uid,{businessName:r,address:o,operatingHours:c}),console.log(`
=== VENDOR APPLICATION COMPLETED SUCCESSFULLY ===
`),{uid:h.uid,email:h.email,firstName:h.first_name,lastName:h.last_name,contactNumber:h.contact_number,role:"vendor",businessName:r.trim(),address:o.trim(),operatingHours:c.trim(),verificationStatus:"pending"}}catch(i){return console.error(`
=== VENDOR APPLICATION FAILED ===`),console.error("Error code:",i.code),console.error("Error message:",i.message),console.error("Full error:",i),this.handleApplicationError(i)}}handleApplicationError(e){throw e.code==="permission-denied"||e.message.includes("permission")?new Error("Unable to create vendor profile. Please ensure you are properly authenticated and try again."):e.message.includes("No user account found")||e.message.includes("already registered as a vendor")||e.message.includes("already registered")||e.message.includes("All fields are required")?e:(console.error("Unhandled error:",e),new Error("Vendor application failed: "+(e.message||"Please try again.")))}}const y3=new g3,_3=()=>{const n=an(),[e,i]=F.useState(1),[r,o]=F.useState({email:"",businessName:"",address:"",operatingHours:""}),[c,h]=F.useState({}),[m,p]=F.useState(!1),g=K=>/\S+@\S+\.\S+/.test(K),E=K=>K.trim().toLowerCase(),T=K=>{const{name:j,value:q}=K.target;if(j==="email"){const B=E(q);o(P=>({...P,email:B})),g(B)&&h(P=>({...P,email:""}))}else o(B=>({...B,[j]:q}))},w=K=>{K.preventDefault();const j={};if(g(r.email)||(j.email="Please enter a valid email address"),Object.keys(j).length>0){h(j);return}h({}),i(2)},k=()=>{e===2?i(1):n("/login")},z=async K=>{K.preventDefault();const j={};if(r.businessName.trim()||(j.businessName="Business name is required"),r.address.trim()||(j.address="Address is required"),r.operatingHours.trim()||(j.operatingHours="Operating hours are required"),Object.keys(j).length>0){h(j);return}h({}),p(!0);try{const q=await y3.applyAsVendor({email:r.email,businessName:r.businessName,address:r.address,operatingHours:r.operatingHours});console.log("Vendor application successful:",q),n("/vendor-dashboard")}catch(q){console.error("Vendor application error:",q),h({submit:q.message||"Application failed. Please try again."})}finally{p(!1)}};return y.jsx("div",{className:"login-page",children:y.jsxs("div",{className:"login-wrapper",children:[y.jsxs("div",{className:"login-hero",children:[y.jsx("button",{className:"back-btn",onClick:k,disabled:m,children:"← Back"}),y.jsx("h1",{className:"logo-title",children:"Apply as Vendor"}),y.jsx("p",{className:"logo-subtitle",children:e===1?"Verify Your Account":"Business Information"}),y.jsx("p",{className:"hero-description",children:e===1?"Enter the email address associated with your existing user account to continue.":"Tell us about your business. Your application will be reviewed by our team for approval."})]}),y.jsxs("main",{className:"login-content",children:[e===1&&y.jsxs("form",{className:"email-form",onSubmit:w,noValidate:!0,children:[y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"email",className:"form-label",children:"Email Address"}),y.jsx("input",{type:"email",id:"email",name:"email",className:"form-input",placeholder:"juan@example.com",value:r.email,onChange:T,required:!0}),c.email&&y.jsx("span",{className:"error-message",children:c.email}),y.jsx("small",{style:{display:"block",marginTop:"8px",color:"#6b7280",fontSize:"13px"},children:"Use the email from your existing StreetBites account"})]}),y.jsx("button",{type:"submit",className:"submit-btn",children:"Next"})]}),e===2&&y.jsxs("form",{className:"email-form",onSubmit:z,noValidate:!0,children:[y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"businessName",className:"form-label",children:"Business Name"}),y.jsx("input",{type:"text",id:"businessName",name:"businessName",className:"form-input",placeholder:"Jack's Cool Drinks",value:r.businessName,onChange:T,required:!0,disabled:m}),c.businessName&&y.jsx("span",{className:"error-message",children:c.businessName})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"address",className:"form-label",children:"Business Address"}),y.jsx("input",{type:"text",id:"address",name:"address",className:"form-input",placeholder:"Etivac",value:r.address,onChange:T,required:!0,disabled:m}),c.address&&y.jsx("span",{className:"error-message",children:c.address})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"operatingHours",className:"form-label",children:"Operating Hours"}),y.jsx("input",{type:"text",id:"operatingHours",name:"operatingHours",className:"form-input",placeholder:"1pm to 3pm",value:r.operatingHours,onChange:T,required:!0,disabled:m}),c.operatingHours&&y.jsx("span",{className:"error-message",children:c.operatingHours})]}),y.jsxs("div",{className:"form-group",style:{backgroundColor:"#f3f4f6",padding:"12px",borderRadius:"8px",marginBottom:"20px"},children:[y.jsxs("p",{style:{margin:0,fontSize:"14px",color:"#6b7280"},children:[y.jsx("strong",{children:"📋 Application Status:"})," Pending Review"]}),y.jsx("small",{style:{display:"block",marginTop:"4px",color:"#6b7280",fontSize:"12px"},children:"Your vendor application will be reviewed by our team. You'll receive an email notification once approved."})]}),c.submit&&y.jsx("div",{className:"error-message",style:{marginBottom:"16px",textAlign:"center"},children:c.submit}),y.jsx("button",{type:"submit",className:"submit-btn",disabled:m,children:m?"Submitting Application...":"Submit Application"})]}),y.jsx("div",{className:"signup-section",children:y.jsxs("span",{className:"signup-text",children:["Don't have an account?"," ",y.jsx("a",{href:"/user-sign",className:"signup-link",children:"Create User Account First"})]})})]})]})})};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),E3=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),N0=n=>{const e=E3(n);return e.charAt(0).toUpperCase()+e.slice(1)},CT=(...n)=>n.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),b3=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var T3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=F.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:h,...m},p)=>F.createElement("svg",{ref:p,...T3,width:e,height:e,stroke:n,strokeWidth:r?Number(i)*24/Number(e):i,className:CT("lucide",o),...!c&&!b3(m)&&{"aria-hidden":"true"},...m},[...h.map(([g,E])=>F.createElement(g,E)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=(n,e)=>{const i=F.forwardRef(({className:r,...o},c)=>F.createElement(S3,{ref:c,iconNode:e,className:CT(`lucide-${v3(N0(n))}`,`lucide-${n}`,r),...o}));return i.displayName=N0(n),i};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],I0=Rs("camera",w3);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],NT=Rs("eye",A3);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],IT=Rs("heart",x3);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],D0=Rs("map-pin",R3);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],N3=Rs("message-circle",C3);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],D3=Rs("plus",I3);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],O0=Rs("star",O3);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],k0=Rs("trending-up",k3);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],DT=Rs("user",M3),V3=`
  .vendor-dashboard {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    min-height: 100vh;
    padding-bottom: 80px;
  }

  .vendor-header {
    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
    color: white;
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .vendor-header h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }

  .vendor-badge {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
  }

  .vendor-main {
    padding: 20px;
    max-width: 100%;
  }

  .vendor-content {
    animation: fadeIn 0.3s ease-in;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .content-header h2 {
    font-size: 22px;
    font-weight: bold;
    color: #111827;
    margin: 0;
  }

  .add-button {
    background-color: #dc2626;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.3s;
  }

  .add-button:hover {
    background-color: #b91c1c;
  }

  .vendor-card {
    background: white;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .vendor-profile {
    display: flex;
    gap: 16px;
    align-items: start;
  }

  .vendor-image-container {
    position: relative;
    flex-shrink: 0;
  }

  .vendor-image {
    width: 100px;
    height: 100px;
    border-radius: 12px;
    object-fit: cover;
  }

  .edit-image-btn {
    position: absolute;
    bottom: -8px;
    right: -8px;
    background-color: #dc2626;
    color: white;
    border: 2px solid white;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .vendor-info {
    flex: 1;
  }

  .vendor-info h3 {
    font-size: 18px;
    font-weight: bold;
    color: #111827;
    margin: 0 0 8px 0;
  }

  .vendor-description {
    font-size: 14px;
    color: #6b7280;
    margin: 0 0 12px 0;
  }

  .vendor-meta {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    font-size: 13px;
  }

  .vendor-meta .location {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #6b7280;
  }

  .vendor-meta .category {
    background-color: #f3f4f6;
    padding: 4px 10px;
    border-radius: 12px;
    color: #374151;
  }

  .vendor-meta .rating {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #111827;
    font-weight: 600;
  }

  .edit-button {
    background-color: #f3f4f6;
    color: #374151;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.3s;
  }

  .edit-button:hover {
    background-color: #e5e7eb;
  }

  .listings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }

  .listing-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .listing-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .listing-image-wrapper {
    position: relative;
    height: 180px;
    overflow: hidden;
  }

  .listing-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .listing-stats {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 8px;
  }

  .listing-stats span {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .listing-details {
    padding: 12px;
  }

  .listing-details h4 {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
    margin: 0 0 6px 0;
  }

  .listing-price {
    font-size: 18px;
    font-weight: bold;
    color: #dc2626;
    margin: 0 0 12px 0;
  }

  .edit-listing-btn {
    width: 100%;
    background-color: #f3f4f6;
    color: #374151;
    border: none;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.3s;
  }

  .edit-listing-btn:hover {
    background-color: #e5e7eb;
  }

  .period-select {
    padding: 8px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    background-color: white;
    cursor: pointer;
    font-size: 14px;
    color: #374151;
  }

  .insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-bottom: 24px;
  }

  .insight-card {
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 12px;
  }

  .insight-icon {
    width: 44px;
    height: 44px;
    background-color: #fee2e2;
    color: #dc2626;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .insight-info {
    flex: 1;
  }

  .insight-label {
    font-size: 13px;
    color: #6b7280;
    margin: 0 0 4px 0;
  }

  .insight-value {
    font-size: 24px;
    font-weight: bold;
    color: #111827;
    margin: 0 0 4px 0;
  }

  .insight-change {
    font-size: 12px;
    font-weight: 600;
  }

  .insight-change.positive {
    color: #10b981;
  }

  .chart-placeholder {
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .chart-placeholder h3 {
    font-size: 18px;
    font-weight: bold;
    color: #111827;
    margin: 0 0 16px 0;
  }

  .chart-content {
    background-color: #f9fafb;
    border-radius: 8px;
    padding: 40px;
    text-align: center;
    color: #6b7280;
  }

  .chart-content p {
    margin: 8px 0;
  }

  .chart-note {
    font-size: 13px;
  }

  .messages-list {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .message-item {
    display: flex;
    gap: 12px;
    padding: 16px;
    border-bottom: 1px solid #f3f4f6;
    cursor: pointer;
    transition: background-color 0.3s;
    position: relative;
  }

  .message-item:hover {
    background-color: #f9fafb;
  }

  .message-item.unread {
    background-color: #fef2f2;
  }

  .message-avatar {
    width: 44px;
    height: 44px;
    background-color: #f3f4f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
    flex-shrink: 0;
  }

  .message-content {
    flex: 1;
  }

  .message-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  }

  .message-header h4 {
    font-size: 15px;
    font-weight: 600;
    color: #111827;
    margin: 0;
  }

  .message-time {
    font-size: 12px;
    color: #9ca3af;
  }

  .message-text {
    font-size: 14px;
    color: #6b7280;
    margin: 0;
  }

  .unread-indicator {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: #dc2626;
    border-radius: 50%;
  }

  .profile-section {
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .profile-field {
    margin-bottom: 20px;
  }

  .profile-field label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #374151;
    margin-bottom: 8px;
  }

  .profile-field input,
  .profile-field textarea,
  .profile-field select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;
    color: #374151;
    box-sizing: border-box;
  }

  .profile-field textarea {
    resize: vertical;
    font-family: Arial, sans-serif;
  }

  .save-button {
    background-color: #dc2626;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    width: 100%;
    transition: background-color 0.3s;
  }

  .save-button:hover {
    background-color: #b91c1c;
  }

  .vendor-bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    border-top: 1px solid #e5e7eb;
    padding: 8px 16px 12px;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
    z-index: 100;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 12px;
    color: #6b7280;
    transition: color 0.3s;
    position: relative;
  }

  .nav-item.active {
    color: #dc2626;
  }

  .nav-item span {
    font-size: 11px;
    font-weight: 500;
  }

  .notification-badge {
    position: absolute;
    top: 0;
    right: 8px;
    background-color: #dc2626;
    color: white;
    font-size: 10px;
    font-weight: bold;
    padding: 2px 5px;
    border-radius: 10px;
    min-width: 16px;
    text-align: center;
  }

  .modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
  }

  .modal-content {
    background: white;
    border-radius: 16px;
    padding: 24px;
    max-width: 500px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
  }

  .modal-content h3 {
    font-size: 20px;
    font-weight: bold;
    color: #111827;
    margin: 0 0 20px 0;
  }

  .modal-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .form-field {
    display: flex;
    flex-direction: column;
  }

  .form-field label {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
    margin-bottom: 8px;
  }

  .form-field input,
  .form-field textarea {
    padding: 10px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;
    color: #374151;
  }

  .upload-area {
    border: 2px dashed #e5e7eb;
    border-radius: 8px;
    padding: 32px;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.3s;
  }

  .upload-area:hover {
    border-color: #dc2626;
  }

  .upload-area p {
    margin: 8px 0 0 0;
    font-size: 13px;
    color: #6b7280;
  }

  .modal-actions {
    display: flex;
    gap: 12px;
    margin-top: 8px;
  }

  .cancel-btn,
  .submit-btn {
    flex: 1;
    padding: 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    transition: background-color 0.3s;
  }

  .cancel-btn {
    background-color: #f3f4f6;
    color: #374151;
  }

  .cancel-btn:hover {
    background-color: #e5e7eb;
  }

  .submit-btn {
    background-color: #dc2626;
    color: white;
  }

  .submit-btn:hover {
    background-color: #b91c1c;
  }

  @media (max-width: 640px) {
    .vendor-profile {
      flex-direction: column;
    }

    .insights-grid {
      grid-template-columns: 1fr;
    }

    .listings-grid {
      grid-template-columns: 1fr;
    }
  }
`,j3=()=>{const n=_n.c(58),[e,i]=F.useState("listings"),[r,o]=F.useState(!1);let c;n[0]===Symbol.for("react.memo_cache_sentinel")?(c={name:"Boss Karl's Cart",description:"Authentic Filipino street food since 2020",location:"Sampaloc, Manila",category:"Street Food",rating:4.8,image:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop"},n[0]=c):c=n[0];const h=c;let m;n[1]===Symbol.for("react.memo_cache_sentinel")?(m=[{id:1,name:"Isaw Combo",price:"₱35",image:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop",views:234,likes:45},{id:2,name:"Kwek-Kwek Special",price:"₱25",image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop",views:189,likes:38},{id:3,name:"Barbecue Stick",price:"₱15",image:"https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=200&fit=crop",views:312,likes:67}],n[1]=m):m=n[1];const p=m;let g;n[2]===Symbol.for("react.memo_cache_sentinel")?(g={label:"Profile Views",value:"1,234",change:"+12%",icon:y.jsx(NT,{size:20})},n[2]=g):g=n[2];let E;n[3]===Symbol.for("react.memo_cache_sentinel")?(E={label:"Total Likes",value:"456",change:"+8%",icon:y.jsx(IT,{size:20})},n[3]=E):E=n[3];let T;n[4]===Symbol.for("react.memo_cache_sentinel")?(T={label:"Listing Views",value:"2,891",change:"+15%",icon:y.jsx(k0,{size:20})},n[4]=T):T=n[4];let w;n[5]===Symbol.for("react.memo_cache_sentinel")?(w=[g,E,T,{label:"Engagement Rate",value:"23%",change:"+3%",icon:y.jsx(O0,{size:20})}],n[5]=w):w=n[5];const k=w;let z;n[6]===Symbol.for("react.memo_cache_sentinel")?(z=[{id:1,user:"Maria S.",message:"What time do you open?",time:"10 min ago",unread:!0},{id:2,user:"Juan D.",message:"Do you have vegetarian options?",time:"1 hour ago",unread:!0},{id:3,user:"Anna R.",message:"Great food! Will visit again.",time:"2 hours ago",unread:!1}],n[6]=z):z=n[6];const K=z;let j;n[7]===Symbol.for("react.memo_cache_sentinel")?(j=()=>y.jsxs("div",{className:"vendor-content",children:[y.jsxs("div",{className:"content-header",children:[y.jsx("h2",{children:"My Listings"}),y.jsxs("button",{className:"add-button",onClick:()=>o(!0),children:[y.jsx(D3,{size:18}),y.jsx("span",{children:"Add New"})]})]}),y.jsx("div",{className:"vendor-card",children:y.jsxs("div",{className:"vendor-profile",children:[y.jsxs("div",{className:"vendor-image-container",children:[y.jsx("img",{src:h.image,alt:h.name,className:"vendor-image"}),y.jsx("button",{className:"edit-image-btn",children:y.jsx(I0,{size:16})})]}),y.jsxs("div",{className:"vendor-info",children:[y.jsx("h3",{children:h.name}),y.jsx("p",{className:"vendor-description",children:h.description}),y.jsxs("div",{className:"vendor-meta",children:[y.jsxs("span",{className:"location",children:[y.jsx(D0,{size:14}),h.location]}),y.jsx("span",{className:"category",children:h.category}),y.jsxs("span",{className:"rating",children:[y.jsx(O0,{size:14,fill:"#fbbf24",color:"#fbbf24"}),h.rating]})]})]}),y.jsx("button",{className:"edit-button",children:"Edit"})]})}),y.jsx("div",{className:"listings-grid",children:p.map(L3)})]}),n[7]=j):j=n[7];const q=j;let B;n[8]===Symbol.for("react.memo_cache_sentinel")?(B=()=>y.jsxs("div",{className:"vendor-content",children:[y.jsxs("div",{className:"content-header",children:[y.jsx("h2",{children:"Insights"}),y.jsxs("select",{className:"period-select",children:[y.jsx("option",{children:"Last 7 days"}),y.jsx("option",{children:"Last 30 days"}),y.jsx("option",{children:"Last 90 days"})]})]}),y.jsx("div",{className:"insights-grid",children:k.map(P3)}),y.jsxs("div",{className:"chart-placeholder",children:[y.jsx("h3",{children:"Engagement Over Time"}),y.jsxs("div",{className:"chart-content",children:[y.jsx("p",{children:"Chart visualization would go here"}),y.jsx("p",{className:"chart-note",children:"Track your profile views, likes, and engagement metrics"})]})]})]}),n[8]=B):B=n[8];const P=B;let se;n[9]===Symbol.for("react.memo_cache_sentinel")?(se=()=>y.jsxs("div",{className:"vendor-content",children:[y.jsx("div",{className:"content-header",children:y.jsx("h2",{children:"Messages"})}),y.jsx("div",{className:"messages-list",children:K.map(U3)})]}),n[9]=se):se=n[9];const ae=se;let ue;n[10]===Symbol.for("react.memo_cache_sentinel")?(ue=()=>y.jsxs("div",{className:"vendor-content",children:[y.jsx("div",{className:"content-header",children:y.jsx("h2",{children:"Profile Settings"})}),y.jsxs("div",{className:"profile-section",children:[y.jsxs("div",{className:"profile-field",children:[y.jsx("label",{children:"Business Name"}),y.jsx("input",{type:"text",defaultValue:h.name})]}),y.jsxs("div",{className:"profile-field",children:[y.jsx("label",{children:"Description"}),y.jsx("textarea",{rows:"3",defaultValue:h.description})]}),y.jsxs("div",{className:"profile-field",children:[y.jsx("label",{children:"Location"}),y.jsx("input",{type:"text",defaultValue:h.location})]}),y.jsxs("div",{className:"profile-field",children:[y.jsx("label",{children:"Category"}),y.jsxs("select",{defaultValue:h.category,children:[y.jsx("option",{children:"Street Food"}),y.jsx("option",{children:"Beverages"}),y.jsx("option",{children:"Desserts"}),y.jsx("option",{children:"Grilled Items"})]})]}),y.jsxs("div",{className:"profile-field",children:[y.jsx("label",{children:"Operating Hours"}),y.jsx("input",{type:"text",placeholder:"e.g., 8:00 AM - 8:00 PM"})]}),y.jsxs("div",{className:"profile-field",children:[y.jsx("label",{children:"Contact Number"}),y.jsx("input",{type:"tel",placeholder:"+63 XXX XXX XXXX"})]}),y.jsx("button",{className:"save-button",children:"Save Changes"})]})]}),n[10]=ue):ue=n[10];const C=ue;let x;n[11]===Symbol.for("react.memo_cache_sentinel")?(x=y.jsx("style",{children:V3}),n[11]=x):x=n[11];let R;n[12]===Symbol.for("react.memo_cache_sentinel")?(R=y.jsxs("header",{className:"vendor-header",children:[y.jsx("h1",{children:"StreetBites"}),y.jsx("span",{className:"vendor-badge",children:"Vendor"})]}),n[12]=R):R=n[12];let I;n[13]!==e?(I=e==="listings"&&q(),n[13]=e,n[14]=I):I=n[14];let D;n[15]!==e?(D=e==="insights"&&P(),n[15]=e,n[16]=D):D=n[16];let V;n[17]!==e?(V=e==="messages"&&ae(),n[17]=e,n[18]=V):V=n[18];let N;n[19]!==e?(N=e==="profile"&&C(),n[19]=e,n[20]=N):N=n[20];let _e;n[21]!==I||n[22]!==D||n[23]!==V||n[24]!==N?(_e=y.jsxs("div",{className:"vendor-main",children:[I,D,V,N]}),n[21]=I,n[22]=D,n[23]=V,n[24]=N,n[25]=_e):_e=n[25];const Ne=`nav-item ${e==="listings"?"active":""}`;let Y,re,ce;n[26]===Symbol.for("react.memo_cache_sentinel")?(Y=()=>i("listings"),re=y.jsx(D0,{size:22}),ce=y.jsx("span",{children:"My Listings"}),n[26]=Y,n[27]=re,n[28]=ce):(Y=n[26],re=n[27],ce=n[28]);let pe;n[29]!==Ne?(pe=y.jsxs("button",{className:Ne,onClick:Y,children:[re,ce]}),n[29]=Ne,n[30]=pe):pe=n[30];const he=`nav-item ${e==="insights"?"active":""}`;let M,Z,le;n[31]===Symbol.for("react.memo_cache_sentinel")?(M=()=>i("insights"),Z=y.jsx(k0,{size:22}),le=y.jsx("span",{children:"Insights"}),n[31]=M,n[32]=Z,n[33]=le):(M=n[31],Z=n[32],le=n[33]);let fe;n[34]!==he?(fe=y.jsxs("button",{className:he,onClick:M,children:[Z,le]}),n[34]=he,n[35]=fe):fe=n[35];const Te=`nav-item ${e==="messages"?"active":""}`;let Ae,ke,ot,Ye;n[36]===Symbol.for("react.memo_cache_sentinel")?(Ae=()=>i("messages"),ke=y.jsx(N3,{size:22}),ot=y.jsx("span",{children:"Messages"}),Ye=y.jsx("span",{className:"notification-badge",children:"2"}),n[36]=Ae,n[37]=ke,n[38]=ot,n[39]=Ye):(Ae=n[36],ke=n[37],ot=n[38],Ye=n[39]);let on;n[40]!==Te?(on=y.jsxs("button",{className:Te,onClick:Ae,children:[ke,ot,Ye]}),n[40]=Te,n[41]=on):on=n[41];const mi=`nav-item ${e==="profile"?"active":""}`;let Kn,Qn,tn;n[42]===Symbol.for("react.memo_cache_sentinel")?(Kn=()=>i("profile"),Qn=y.jsx(DT,{size:22}),tn=y.jsx("span",{children:"Profile"}),n[42]=Kn,n[43]=Qn,n[44]=tn):(Kn=n[42],Qn=n[43],tn=n[44]);let In;n[45]!==mi?(In=y.jsxs("button",{className:mi,onClick:Kn,children:[Qn,tn]}),n[45]=mi,n[46]=In):In=n[46];let ln;n[47]!==pe||n[48]!==fe||n[49]!==on||n[50]!==In?(ln=y.jsxs("nav",{className:"vendor-bottom-nav",children:[pe,fe,on,In]}),n[47]=pe,n[48]=fe,n[49]=on,n[50]=In,n[51]=ln):ln=n[51];let Dn;n[52]!==r?(Dn=r&&y.jsx("div",{className:"modal-overlay",onClick:()=>o(!1),children:y.jsxs("div",{className:"modal-content",onClick:z3,children:[y.jsx("h3",{children:"Add New Listing"}),y.jsxs("div",{className:"modal-form",children:[y.jsxs("div",{className:"form-field",children:[y.jsx("label",{children:"Item Name"}),y.jsx("input",{type:"text",placeholder:"e.g., Chicken Barbecue"})]}),y.jsxs("div",{className:"form-field",children:[y.jsx("label",{children:"Price"}),y.jsx("input",{type:"text",placeholder:"₱"})]}),y.jsxs("div",{className:"form-field",children:[y.jsx("label",{children:"Description"}),y.jsx("textarea",{rows:"3",placeholder:"Describe your item..."})]}),y.jsxs("div",{className:"form-field",children:[y.jsx("label",{children:"Upload Photo"}),y.jsxs("div",{className:"upload-area",children:[y.jsx(I0,{size:32}),y.jsx("p",{children:"Click to upload or drag and drop"})]})]}),y.jsxs("div",{className:"modal-actions",children:[y.jsx("button",{className:"cancel-btn",onClick:()=>o(!1),children:"Cancel"}),y.jsx("button",{className:"submit-btn",children:"Add Listing"})]})]})]})}),n[52]=r,n[53]=Dn):Dn=n[53];let pi;return n[54]!==_e||n[55]!==ln||n[56]!==Dn?(pi=y.jsxs(y.Fragment,{children:[x,y.jsxs("div",{className:"vendor-dashboard",children:[R,_e,ln,Dn]})]}),n[54]=_e,n[55]=ln,n[56]=Dn,n[57]=pi):pi=n[57],pi};function L3(n){return y.jsxs("div",{className:"listing-card",children:[y.jsxs("div",{className:"listing-image-wrapper",children:[y.jsx("img",{src:n.image,alt:n.name,className:"listing-image"}),y.jsxs("div",{className:"listing-stats",children:[y.jsxs("span",{children:[y.jsx(NT,{size:12})," ",n.views]}),y.jsxs("span",{children:[y.jsx(IT,{size:12})," ",n.likes]})]})]}),y.jsxs("div",{className:"listing-details",children:[y.jsx("h4",{children:n.name}),y.jsx("p",{className:"listing-price",children:n.price}),y.jsx("button",{className:"edit-listing-btn",children:"Edit"})]})]},n.id)}function P3(n,e){return y.jsxs("div",{className:"insight-card",children:[y.jsx("div",{className:"insight-icon",children:n.icon}),y.jsxs("div",{className:"insight-info",children:[y.jsx("p",{className:"insight-label",children:n.label}),y.jsx("h3",{className:"insight-value",children:n.value}),y.jsx("span",{className:"insight-change positive",children:n.change})]})]},e)}function U3(n){return y.jsxs("div",{className:`message-item ${n.unread?"unread":""}`,children:[y.jsx("div",{className:"message-avatar",children:y.jsx(DT,{size:24})}),y.jsxs("div",{className:"message-content",children:[y.jsxs("div",{className:"message-header",children:[y.jsx("h4",{children:n.user}),y.jsx("span",{className:"message-time",children:n.time})]}),y.jsx("p",{className:"message-text",children:n.message})]}),n.unread&&y.jsx("div",{className:"unread-indicator"})]},n.id)}function z3(n){return n.stopPropagation()}function B3(){const n=_n.c(20);let e;n[0]===Symbol.for("react.memo_cache_sentinel")?(e=y.jsx(_t,{path:"/",element:y.jsx(cA,{to:"/login"})}),n[0]=e):e=n[0];let i;n[1]===Symbol.for("react.memo_cache_sentinel")?(i=y.jsx(_t,{path:"/login",element:y.jsx(r3,{})}),n[1]=i):i=n[1];let r;n[2]===Symbol.for("react.memo_cache_sentinel")?(r=y.jsx(_t,{path:"/profile",element:y.jsx(ZA,{})}),n[2]=r):r=n[2];let o;n[3]===Symbol.for("react.memo_cache_sentinel")?(o=y.jsx(_t,{path:"/search/:query",element:y.jsx(n2,{})}),n[3]=o):o=n[3];let c;n[4]===Symbol.for("react.memo_cache_sentinel")?(c=y.jsx(_t,{path:"/maps",element:y.jsx(i2,{})}),n[4]=c):c=n[4];let h;n[5]===Symbol.for("react.memo_cache_sentinel")?(h=y.jsx(_t,{path:"/email-settings",element:y.jsx(r2,{})}),n[5]=h):h=n[5];let m;n[6]===Symbol.for("react.memo_cache_sentinel")?(m=y.jsx(_t,{path:"/faq",element:y.jsx(a2,{})}),n[6]=m):m=n[6];let p;n[7]===Symbol.for("react.memo_cache_sentinel")?(p=y.jsx(_t,{path:"/privacy-policy",element:y.jsx(o2,{})}),n[7]=p):p=n[7];let g;n[8]===Symbol.for("react.memo_cache_sentinel")?(g=y.jsx(_t,{path:"/security",element:y.jsx(l2,{})}),n[8]=g):g=n[8];let E;n[9]===Symbol.for("react.memo_cache_sentinel")?(E=y.jsx(_t,{path:"/terms-of-service",element:y.jsx(c2,{})}),n[9]=E):E=n[9];let T;n[10]===Symbol.for("react.memo_cache_sentinel")?(T=y.jsx(_t,{path:"/account",element:y.jsx(s2,{})}),n[10]=T):T=n[10];let w;n[11]===Symbol.for("react.memo_cache_sentinel")?(w=y.jsx(_t,{path:"/favorites",element:y.jsx(u2,{})}),n[11]=w):w=n[11];let k;n[12]===Symbol.for("react.memo_cache_sentinel")?(k=y.jsx(_t,{path:"/admin-login",element:y.jsx(Y0,{})}),n[12]=k):k=n[12];let z;n[13]===Symbol.for("react.memo_cache_sentinel")?(z=y.jsx(_t,{path:"/admin-sign",element:y.jsx(a3,{})}),n[13]=z):z=n[13];let K;n[14]===Symbol.for("react.memo_cache_sentinel")?(K=y.jsx(_t,{path:"/user-login",element:y.jsx(RT,{})}),n[14]=K):K=n[14];let j;n[15]===Symbol.for("react.memo_cache_sentinel")?(j=y.jsx(_t,{path:"/user-sign",element:y.jsx(p3,{})}),n[15]=j):j=n[15];let q;n[16]===Symbol.for("react.memo_cache_sentinel")?(q=y.jsx(_t,{path:"/vendor-login",element:y.jsx(xT,{})}),n[16]=q):q=n[16];let B;n[17]===Symbol.for("react.memo_cache_sentinel")?(B=y.jsx(_t,{path:"/vendor-signup",element:y.jsx(_3,{})}),n[17]=B):B=n[17];let P;n[18]===Symbol.for("react.memo_cache_sentinel")?(P=y.jsx(_t,{path:"/vendor-dashboard",element:y.jsx(j3,{})}),n[18]=P):P=n[18];let se;return n[19]===Symbol.for("react.memo_cache_sentinel")?(se=y.jsx("div",{className:"App",children:y.jsx(MA,{children:y.jsxs(hA,{children:[e,i,r,o,c,h,m,p,g,E,T,w,k,z,K,j,q,B,P,y.jsx(_t,{path:"/home",element:y.jsx(JA,{})})]})})}),n[19]=se):se=n[19],se}yw.createRoot(document.getElementById("root")).render(y.jsx(F.StrictMode,{children:y.jsx(B3,{})}));
