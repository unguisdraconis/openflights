(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function wS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Dh={exports:{}},da={},Nh={exports:{}},ht={};var $g;function TS(){if($g)return ht;$g=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;function m(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function v(O,re,ge){this.props=O,this.context=re,this.refs=M,this.updater=ge||y}v.prototype.isReactComponent={},v.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=v.prototype;function T(O,re,ge){this.props=O,this.context=re,this.refs=M,this.updater=ge||y}var A=T.prototype=new x;A.constructor=T,E(A,v.prototype),A.isPureReactComponent=!0;var C=Array.isArray,k=Object.prototype.hasOwnProperty,D={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function X(O,re,ge){var $,fe={},ye=null,Se=null;if(re!=null)for($ in re.ref!==void 0&&(Se=re.ref),re.key!==void 0&&(ye=""+re.key),re)k.call(re,$)&&!I.hasOwnProperty($)&&(fe[$]=re[$]);var Re=arguments.length-2;if(Re===1)fe.children=ge;else if(1<Re){for(var De=Array(Re),Ne=0;Ne<Re;Ne++)De[Ne]=arguments[Ne+2];fe.children=De}if(O&&O.defaultProps)for($ in Re=O.defaultProps,Re)fe[$]===void 0&&(fe[$]=Re[$]);return{$$typeof:n,type:O,key:ye,ref:Se,props:fe,_owner:D.current}}function L(O,re){return{$$typeof:n,type:O.type,key:re,ref:O.ref,props:O.props,_owner:O._owner}}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function U(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return re[ge]})}var W=/\/+/g;function V(O,re){return typeof O=="object"&&O!==null&&O.key!=null?U(""+O.key):re.toString(36)}function K(O,re,ge,$,fe){var ye=typeof O;(ye==="undefined"||ye==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(ye){case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case n:case e:Se=!0}}if(Se)return Se=O,fe=fe(Se),O=$===""?"."+V(Se,0):$,C(fe)?(ge="",O!=null&&(ge=O.replace(W,"$&/")+"/"),K(fe,re,ge,"",function(Ne){return Ne})):fe!=null&&(R(fe)&&(fe=L(fe,ge+(!fe.key||Se&&Se.key===fe.key?"":(""+fe.key).replace(W,"$&/")+"/")+O)),re.push(fe)),1;if(Se=0,$=$===""?".":$+":",C(O))for(var Re=0;Re<O.length;Re++){ye=O[Re];var De=$+V(ye,Re);Se+=K(ye,re,ge,De,fe)}else if(De=m(O),typeof De=="function")for(O=De.call(O),Re=0;!(ye=O.next()).done;)ye=ye.value,De=$+V(ye,Re++),Se+=K(ye,re,ge,De,fe);else if(ye==="object")throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return Se}function te(O,re,ge){if(O==null)return O;var $=[],fe=0;return K(O,$,"","",function(ye){return re.call(ge,ye,fe++)}),$}function J(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var le={current:null},H={transition:null},ce={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:H,ReactCurrentOwner:D};function ne(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:te,forEach:function(O,re,ge){te(O,function(){re.apply(this,arguments)},ge)},count:function(O){var re=0;return te(O,function(){re++}),re},toArray:function(O){return te(O,function(re){return re})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ht.Component=v,ht.Fragment=t,ht.Profiler=o,ht.PureComponent=T,ht.StrictMode=r,ht.Suspense=h,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,ht.act=ne,ht.cloneElement=function(O,re,ge){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var $=E({},O.props),fe=O.key,ye=O.ref,Se=O._owner;if(re!=null){if(re.ref!==void 0&&(ye=re.ref,Se=D.current),re.key!==void 0&&(fe=""+re.key),O.type&&O.type.defaultProps)var Re=O.type.defaultProps;for(De in re)k.call(re,De)&&!I.hasOwnProperty(De)&&($[De]=re[De]===void 0&&Re!==void 0?Re[De]:re[De])}var De=arguments.length-2;if(De===1)$.children=ge;else if(1<De){Re=Array(De);for(var Ne=0;Ne<De;Ne++)Re[Ne]=arguments[Ne+2];$.children=Re}return{$$typeof:n,type:O.type,key:fe,ref:ye,props:$,_owner:Se}},ht.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},ht.createElement=X,ht.createFactory=function(O){var re=X.bind(null,O);return re.type=O,re},ht.createRef=function(){return{current:null}},ht.forwardRef=function(O){return{$$typeof:c,render:O}},ht.isValidElement=R,ht.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:J}},ht.memo=function(O,re){return{$$typeof:d,type:O,compare:re===void 0?null:re}},ht.startTransition=function(O){var re=H.transition;H.transition={};try{O()}finally{H.transition=re}},ht.unstable_act=ne,ht.useCallback=function(O,re){return le.current.useCallback(O,re)},ht.useContext=function(O){return le.current.useContext(O)},ht.useDebugValue=function(){},ht.useDeferredValue=function(O){return le.current.useDeferredValue(O)},ht.useEffect=function(O,re){return le.current.useEffect(O,re)},ht.useId=function(){return le.current.useId()},ht.useImperativeHandle=function(O,re,ge){return le.current.useImperativeHandle(O,re,ge)},ht.useInsertionEffect=function(O,re){return le.current.useInsertionEffect(O,re)},ht.useLayoutEffect=function(O,re){return le.current.useLayoutEffect(O,re)},ht.useMemo=function(O,re){return le.current.useMemo(O,re)},ht.useReducer=function(O,re,ge){return le.current.useReducer(O,re,ge)},ht.useRef=function(O){return le.current.useRef(O)},ht.useState=function(O){return le.current.useState(O)},ht.useSyncExternalStore=function(O,re,ge){return le.current.useSyncExternalStore(O,re,ge)},ht.useTransition=function(){return le.current.useTransition()},ht.version="18.3.1",ht}var qg;function kd(){return qg||(qg=1,Nh.exports=TS()),Nh.exports}var Kg;function AS(){if(Kg)return da;Kg=1;var n=kd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,h,d){var p,_={},m=null,y=null;d!==void 0&&(m=""+d),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(y=h.ref);for(p in h)r.call(h,p)&&!l.hasOwnProperty(p)&&(_[p]=h[p]);if(c&&c.defaultProps)for(p in h=c.defaultProps,h)_[p]===void 0&&(_[p]=h[p]);return{$$typeof:e,type:c,key:m,ref:y,props:_,_owner:o.current}}return da.Fragment=t,da.jsx=u,da.jsxs=u,da}var Zg;function CS(){return Zg||(Zg=1,Dh.exports=AS()),Dh.exports}var se=CS(),At=kd();const RS=wS(At);var ru={},Ih={exports:{}},In={},Uh={exports:{}},Fh={};var Qg;function bS(){return Qg||(Qg=1,(function(n){function e(H,ce){var ne=H.length;H.push(ce);e:for(;0<ne;){var O=ne-1>>>1,re=H[O];if(0<o(re,ce))H[O]=ce,H[ne]=re,ne=O;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ce=H[0],ne=H.pop();if(ne!==ce){H[0]=ne;e:for(var O=0,re=H.length,ge=re>>>1;O<ge;){var $=2*(O+1)-1,fe=H[$],ye=$+1,Se=H[ye];if(0>o(fe,ne))ye<re&&0>o(Se,fe)?(H[O]=Se,H[ye]=ne,O=ye):(H[O]=fe,H[$]=ne,O=$);else if(ye<re&&0>o(Se,ne))H[O]=Se,H[ye]=ne,O=ye;else break e}}return ce}function o(H,ce){var ne=H.sortIndex-ce.sortIndex;return ne!==0?ne:H.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var h=[],d=[],p=1,_=null,m=3,y=!1,E=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(H){for(var ce=t(d);ce!==null;){if(ce.callback===null)r(d);else if(ce.startTime<=H)r(d),ce.sortIndex=ce.expirationTime,e(h,ce);else break;ce=t(d)}}function C(H){if(M=!1,A(H),!E)if(t(h)!==null)E=!0,J(k);else{var ce=t(d);ce!==null&&le(C,ce.startTime-H)}}function k(H,ce){E=!1,M&&(M=!1,x(X),X=-1),y=!0;var ne=m;try{for(A(ce),_=t(h);_!==null&&(!(_.expirationTime>ce)||H&&!U());){var O=_.callback;if(typeof O=="function"){_.callback=null,m=_.priorityLevel;var re=O(_.expirationTime<=ce);ce=n.unstable_now(),typeof re=="function"?_.callback=re:_===t(h)&&r(h),A(ce)}else r(h);_=t(h)}if(_!==null)var ge=!0;else{var $=t(d);$!==null&&le(C,$.startTime-ce),ge=!1}return ge}finally{_=null,m=ne,y=!1}}var D=!1,I=null,X=-1,L=5,R=-1;function U(){return!(n.unstable_now()-R<L)}function W(){if(I!==null){var H=n.unstable_now();R=H;var ce=!0;try{ce=I(!0,H)}finally{ce?V():(D=!1,I=null)}}else D=!1}var V;if(typeof T=="function")V=function(){T(W)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,te=K.port2;K.port1.onmessage=W,V=function(){te.postMessage(null)}}else V=function(){v(W,0)};function J(H){I=H,D||(D=!0,V())}function le(H,ce){X=v(function(){H(n.unstable_now())},ce)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){E||y||(E=!0,J(k))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(h)},n.unstable_next=function(H){switch(m){case 1:case 2:case 3:var ce=3;break;default:ce=m}var ne=m;m=ce;try{return H()}finally{m=ne}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,ce){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ne=m;m=H;try{return ce()}finally{m=ne}},n.unstable_scheduleCallback=function(H,ce,ne){var O=n.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=ne+re,H={id:p++,callback:ce,priorityLevel:H,startTime:ne,expirationTime:re,sortIndex:-1},ne>O?(H.sortIndex=ne,e(d,H),t(h)===null&&H===t(d)&&(M?(x(X),X=-1):M=!0,le(C,ne-O))):(H.sortIndex=re,e(h,H),E||y||(E=!0,J(k))),H},n.unstable_shouldYield=U,n.unstable_wrapCallback=function(H){var ce=m;return function(){var ne=m;m=ce;try{return H.apply(this,arguments)}finally{m=ne}}}})(Fh)),Fh}var Jg;function PS(){return Jg||(Jg=1,Uh.exports=bS()),Uh.exports}var e_;function LS(){if(e_)return In;e_=1;var n=kd(),e=PS();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},_={};function m(i){return h.call(_,i)?!0:h.call(p,i)?!1:d.test(i)?_[i]=!0:(p[i]=!0,!1)}function y(i,s,a,f){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,a,f){if(s===null||typeof s>"u"||y(i,s,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(i,s,a,f,g,S,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=S,this.removeEmptyString=w}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){v[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];v[s]=new M(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){v[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){v[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){v[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){v[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){v[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){v[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){v[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function T(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(x,T);v[s]=new M(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(x,T);v[s]=new M(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(x,T);v[s]=new M(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){v[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),v.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){v[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function A(i,s,a,f){var g=v.hasOwnProperty(s)?v[s]:null;(g!==null?g.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,a,g,f)&&(a=null),f||g===null?m(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):g.mustUseProperty?i[g.propertyName]=a===null?g.type===3?!1:"":a:(s=g.attributeName,f=g.attributeNamespace,a===null?i.removeAttribute(s):(g=g.type,a=g===3||g===4&&a===!0?"":""+a,f?i.setAttributeNS(f,s,a):i.setAttribute(s,a))))}var C=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),D=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),U=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),H=Symbol.iterator;function ce(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var ne=Object.assign,O;function re(i){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var ge=!1;function $(i,s){if(!i||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ae){var f=ae}Reflect.construct(i,[],s)}else{try{s.call()}catch(ae){f=ae}i.call(s.prototype)}else{try{throw Error()}catch(ae){f=ae}i()}}catch(ae){if(ae&&f&&typeof ae.stack=="string"){for(var g=ae.stack.split(`
`),S=f.stack.split(`
`),w=g.length-1,N=S.length-1;1<=w&&0<=N&&g[w]!==S[N];)N--;for(;1<=w&&0<=N;w--,N--)if(g[w]!==S[N]){if(w!==1||N!==1)do if(w--,N--,0>N||g[w]!==S[N]){var B=`
`+g[w].replace(" at new "," at ");return i.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",i.displayName)),B}while(1<=w&&0<=N);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?re(i):""}function fe(i){switch(i.tag){case 5:return re(i.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return i=$(i.type,!1),i;case 11:return i=$(i.type.render,!1),i;case 1:return i=$(i.type,!0),i;default:return""}}function ye(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case I:return"Fragment";case D:return"Portal";case L:return"Profiler";case X:return"StrictMode";case V:return"Suspense";case K:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case U:return(i.displayName||"Context")+".Consumer";case R:return(i._context.displayName||"Context")+".Provider";case W:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case te:return s=i.displayName||null,s!==null?s:ye(i.type)||"Memo";case J:s=i._payload,i=i._init;try{return ye(i(s))}catch{}}return null}function Se(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(s);case 8:return s===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Re(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function De(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ne(i){var s=De(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var g=a.get,S=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return g.call(this)},set:function(w){f=""+w,S.call(this,w)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(w){f=""+w},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function ft(i){i._valueTracker||(i._valueTracker=Ne(i))}function z(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),f="";return i&&(f=De(i)?i.checked?"true":"false":i.value),i=f,i!==a?(s.setValue(i),!0):!1}function _t(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function dt(i,s){var a=s.checked;return ne({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function Mt(i,s){var a=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;a=Re(s.value!=null?s.value:a),i._wrapperState={initialChecked:f,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Ye(i,s){s=s.checked,s!=null&&A(i,"checked",s,!1)}function Ut(i,s){Ye(i,s);var a=Re(s.value),f=s.type;if(a!=null)f==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?rt(i,s.type,a):s.hasOwnProperty("defaultValue")&&rt(i,s.type,Re(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function tt(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function rt(i,s,a){(s!=="number"||_t(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var F=Array.isArray;function b(i,s,a,f){if(i=i.options,s){s={};for(var g=0;g<a.length;g++)s["$"+a[g]]=!0;for(a=0;a<i.length;a++)g=s.hasOwnProperty("$"+i[a].value),i[a].selected!==g&&(i[a].selected=g),g&&f&&(i[a].defaultSelected=!0)}else{for(a=""+Re(a),s=null,g=0;g<i.length;g++){if(i[g].value===a){i[g].selected=!0,f&&(i[g].defaultSelected=!0);return}s!==null||i[g].disabled||(s=i[g])}s!==null&&(s.selected=!0)}}function ue(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function pe(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(F(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:Re(a)}}function ve(i,s){var a=Re(s.value),f=Re(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),f!=null&&(i.defaultValue=""+f)}function me(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function $e(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pe(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?$e(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Oe,ot=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,f,g){MSApp.execUnsafeLocalFunction(function(){return i(s,a,f,g)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Oe=Oe||document.createElement("div"),Oe.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Oe.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Ee(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Ie={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pt=["Webkit","ms","Moz","O"];Object.keys(Ie).forEach(function(i){pt.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ie[s]=Ie[i]})});function et(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ie.hasOwnProperty(i)&&Ie[i]?(""+s).trim():s+"px"}function ke(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var f=a.indexOf("--")===0,g=et(a,s[a],f);a==="float"&&(a="cssFloat"),f?i.setProperty(a,g):i[a]=g}}var st=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function at(i,s){if(s){if(st[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Rt(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var j=null;function Te(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var he=null,de=null,Ce=null;function Ze(i){if(i=Qo(i)){if(typeof he!="function")throw Error(t(280));var s=i.stateNode;s&&(s=xl(s),he(i.stateNode,i.type,s))}}function mt(i){de?Ce?Ce.push(i):Ce=[i]:de=i}function zt(){if(de){var i=de,s=Ce;if(Ce=de=null,Ze(i),s)for(i=0;i<s.length;i++)Ze(s[i])}}function Xt(i,s){return i(s)}function vt(){}var zn=!1;function Bn(i,s,a){if(zn)return i(s,a);zn=!0;try{return Xt(i,s,a)}finally{zn=!1,(de!==null||Ce!==null)&&(vt(),zt())}}function dr(i,s){var a=i.stateNode;if(a===null)return null;var f=xl(a);if(f===null)return null;a=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var fi=!1;if(c)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){fi=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{fi=!1}function Ja(i,s,a,f,g,S,w,N,B){var ae=Array.prototype.slice.call(arguments,3);try{s.apply(a,ae)}catch(xe){this.onError(xe)}}var pr=!1,Bi=null,$r=!1,mr=null,el={onError:function(i){pr=!0,Bi=i}};function tl(i,s,a,f,g,S,w,N,B){pr=!1,Bi=null,Ja.apply(el,arguments)}function Jc(i,s,a,f,g,S,w,N,B){if(tl.apply(this,arguments),pr){if(pr){var ae=Bi;pr=!1,Bi=null}else throw Error(t(198));$r||($r=!0,mr=ae)}}function Hi(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function nl(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function P(i){if(Hi(i)!==i)throw Error(t(188))}function Y(i){var s=i.alternate;if(!s){if(s=Hi(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,f=s;;){var g=a.return;if(g===null)break;var S=g.alternate;if(S===null){if(f=g.return,f!==null){a=f;continue}break}if(g.child===S.child){for(S=g.child;S;){if(S===a)return P(g),i;if(S===f)return P(g),s;S=S.sibling}throw Error(t(188))}if(a.return!==f.return)a=g,f=S;else{for(var w=!1,N=g.child;N;){if(N===a){w=!0,a=g,f=S;break}if(N===f){w=!0,f=g,a=S;break}N=N.sibling}if(!w){for(N=S.child;N;){if(N===a){w=!0,a=S,f=g;break}if(N===f){w=!0,f=S,a=g;break}N=N.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function ie(i){return i=Y(i),i!==null?oe(i):null}function oe(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=oe(i);if(s!==null)return s;i=i.sibling}return null}var Z=e.unstable_scheduleCallback,Ae=e.unstable_cancelCallback,Ue=e.unstable_shouldYield,He=e.unstable_requestPaint,be=e.unstable_now,Je=e.unstable_getCurrentPriorityLevel,Qe=e.unstable_ImmediatePriority,Xe=e.unstable_UserBlockingPriority,gt=e.unstable_NormalPriority,Ft=e.unstable_LowPriority,Dt=e.unstable_IdlePriority,tn=null,lt=null;function je(i){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(tn,i,void 0,(i.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:gr,yt=Math.log,Hn=Math.LN2;function gr(i){return i>>>=0,i===0?32:31-(yt(i)/Hn|0)|0}var nn=64,_r=4194304;function bt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Vn(i,s){var a=i.pendingLanes;if(a===0)return 0;var f=0,g=i.suspendedLanes,S=i.pingedLanes,w=a&268435455;if(w!==0){var N=w&~g;N!==0?f=bt(N):(S&=w,S!==0&&(f=bt(S)))}else w=a&~g,w!==0?f=bt(w):S!==0&&(f=bt(S));if(f===0)return 0;if(s!==0&&s!==f&&(s&g)===0&&(g=f&-f,S=s&-s,g>=S||g===16&&(S&4194240)!==0))return s;if((f&4)!==0&&(f|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)a=31-wt(s),g=1<<a,f|=i[a],s&=~g;return f}function Io(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rn(i,s){for(var a=i.suspendedLanes,f=i.pingedLanes,g=i.expirationTimes,S=i.pendingLanes;0<S;){var w=31-wt(S),N=1<<w,B=g[w];B===-1?((N&a)===0||(N&f)!==0)&&(g[w]=Io(N,s)):B<=s&&(i.expiredLanes|=N),S&=~N}}function qr(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function il(){var i=nn;return nn<<=1,(nn&4194240)===0&&(nn=64),i}function bs(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function Uo(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-wt(s),i[s]=a}function Xx(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<a;){var g=31-wt(a),S=1<<g;s[g]=0,f[g]=-1,i[g]=-1,a&=~S}}function ef(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var f=31-wt(a),g=1<<f;g&s|i[f]&s&&(i[f]|=s),a&=~g}}var Tt=0;function Ap(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Cp,tf,Rp,bp,Pp,nf=!1,rl=[],vr=null,xr=null,yr=null,Fo=new Map,Oo=new Map,Sr=[],jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lp(i,s){switch(i){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Fo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(s.pointerId)}}function ko(i,s,a,f,g,S){return i===null||i.nativeEvent!==S?(i={blockedOn:s,domEventName:a,eventSystemFlags:f,nativeEvent:S,targetContainers:[g]},s!==null&&(s=Qo(s),s!==null&&tf(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),i)}function Yx(i,s,a,f,g){switch(s){case"focusin":return vr=ko(vr,i,s,a,f,g),!0;case"dragenter":return xr=ko(xr,i,s,a,f,g),!0;case"mouseover":return yr=ko(yr,i,s,a,f,g),!0;case"pointerover":var S=g.pointerId;return Fo.set(S,ko(Fo.get(S)||null,i,s,a,f,g)),!0;case"gotpointercapture":return S=g.pointerId,Oo.set(S,ko(Oo.get(S)||null,i,s,a,f,g)),!0}return!1}function Dp(i){var s=Kr(i.target);if(s!==null){var a=Hi(s);if(a!==null){if(s=a.tag,s===13){if(s=nl(a),s!==null){i.blockedOn=s,Pp(i.priority,function(){Rp(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function sl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=sf(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var f=new a.constructor(a.type,a);j=f,a.target.dispatchEvent(f),j=null}else return s=Qo(a),s!==null&&tf(s),i.blockedOn=a,!1;s.shift()}return!0}function Np(i,s,a){sl(i)&&a.delete(s)}function $x(){nf=!1,vr!==null&&sl(vr)&&(vr=null),xr!==null&&sl(xr)&&(xr=null),yr!==null&&sl(yr)&&(yr=null),Fo.forEach(Np),Oo.forEach(Np)}function zo(i,s){i.blockedOn===s&&(i.blockedOn=null,nf||(nf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$x)))}function Bo(i){function s(g){return zo(g,i)}if(0<rl.length){zo(rl[0],i);for(var a=1;a<rl.length;a++){var f=rl[a];f.blockedOn===i&&(f.blockedOn=null)}}for(vr!==null&&zo(vr,i),xr!==null&&zo(xr,i),yr!==null&&zo(yr,i),Fo.forEach(s),Oo.forEach(s),a=0;a<Sr.length;a++)f=Sr[a],f.blockedOn===i&&(f.blockedOn=null);for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)Dp(a),a.blockedOn===null&&Sr.shift()}var Ps=C.ReactCurrentBatchConfig,ol=!0;function qx(i,s,a,f){var g=Tt,S=Ps.transition;Ps.transition=null;try{Tt=1,rf(i,s,a,f)}finally{Tt=g,Ps.transition=S}}function Kx(i,s,a,f){var g=Tt,S=Ps.transition;Ps.transition=null;try{Tt=4,rf(i,s,a,f)}finally{Tt=g,Ps.transition=S}}function rf(i,s,a,f){if(ol){var g=sf(i,s,a,f);if(g===null)Mf(i,s,f,al,a),Lp(i,f);else if(Yx(g,i,s,a,f))f.stopPropagation();else if(Lp(i,f),s&4&&-1<jx.indexOf(i)){for(;g!==null;){var S=Qo(g);if(S!==null&&Cp(S),S=sf(i,s,a,f),S===null&&Mf(i,s,f,al,a),S===g)break;g=S}g!==null&&f.stopPropagation()}else Mf(i,s,f,null,a)}}var al=null;function sf(i,s,a,f){if(al=null,i=Te(f),i=Kr(i),i!==null)if(s=Hi(i),s===null)i=null;else if(a=s.tag,a===13){if(i=nl(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return al=i,null}function Ip(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Qe:return 1;case Xe:return 4;case gt:case Ft:return 16;case Dt:return 536870912;default:return 16}default:return 16}}var Mr=null,of=null,ll=null;function Up(){if(ll)return ll;var i,s=of,a=s.length,f,g="value"in Mr?Mr.value:Mr.textContent,S=g.length;for(i=0;i<a&&s[i]===g[i];i++);var w=a-i;for(f=1;f<=w&&s[a-f]===g[S-f];f++);return ll=g.slice(i,1<f?1-f:void 0)}function ul(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function cl(){return!0}function Fp(){return!1}function Gn(i){function s(a,f,g,S,w){this._reactName=a,this._targetInst=g,this.type=f,this.nativeEvent=S,this.target=w,this.currentTarget=null;for(var N in i)i.hasOwnProperty(N)&&(a=i[N],this[N]=a?a(S):S[N]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?cl:Fp,this.isPropagationStopped=Fp,this}return ne(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),s}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=Gn(Ls),Ho=ne({},Ls,{view:0,detail:0}),Zx=Gn(Ho),lf,uf,Vo,fl=ne({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Vo&&(Vo&&i.type==="mousemove"?(lf=i.screenX-Vo.screenX,uf=i.screenY-Vo.screenY):uf=lf=0,Vo=i),lf)},movementY:function(i){return"movementY"in i?i.movementY:uf}}),Op=Gn(fl),Qx=ne({},fl,{dataTransfer:0}),Jx=Gn(Qx),ey=ne({},Ho,{relatedTarget:0}),cf=Gn(ey),ty=ne({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),ny=Gn(ty),iy=ne({},Ls,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),ry=Gn(iy),sy=ne({},Ls,{data:0}),kp=Gn(sy),oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uy(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=ly[i])?!!s[i]:!1}function ff(){return uy}var cy=ne({},Ho,{key:function(i){if(i.key){var s=oy[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=ul(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?ay[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(i){return i.type==="keypress"?ul(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ul(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),fy=Gn(cy),hy=ne({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zp=Gn(hy),dy=ne({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),py=Gn(dy),my=ne({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),gy=Gn(my),_y=ne({},fl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),vy=Gn(_y),xy=[9,13,27,32],hf=c&&"CompositionEvent"in window,Go=null;c&&"documentMode"in document&&(Go=document.documentMode);var yy=c&&"TextEvent"in window&&!Go,Bp=c&&(!hf||Go&&8<Go&&11>=Go),Hp=" ",Vp=!1;function Gp(i,s){switch(i){case"keyup":return xy.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ds=!1;function Sy(i,s){switch(i){case"compositionend":return Wp(s);case"keypress":return s.which!==32?null:(Vp=!0,Hp);case"textInput":return i=s.data,i===Hp&&Vp?null:i;default:return null}}function My(i,s){if(Ds)return i==="compositionend"||!hf&&Gp(i,s)?(i=Up(),ll=of=Mr=null,Ds=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Bp&&s.locale!=="ko"?null:s.data;default:return null}}var Ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!Ey[i.type]:s==="textarea"}function jp(i,s,a,f){mt(f),s=gl(s,"onChange"),0<s.length&&(a=new af("onChange","change",null,a,f),i.push({event:a,listeners:s}))}var Wo=null,Xo=null;function wy(i){cm(i,0)}function hl(i){var s=Os(i);if(z(s))return i}function Ty(i,s){if(i==="change")return s}var Yp=!1;if(c){var df;if(c){var pf="oninput"in document;if(!pf){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),pf=typeof $p.oninput=="function"}df=pf}else df=!1;Yp=df&&(!document.documentMode||9<document.documentMode)}function qp(){Wo&&(Wo.detachEvent("onpropertychange",Kp),Xo=Wo=null)}function Kp(i){if(i.propertyName==="value"&&hl(Xo)){var s=[];jp(s,Xo,i,Te(i)),Bn(wy,s)}}function Ay(i,s,a){i==="focusin"?(qp(),Wo=s,Xo=a,Wo.attachEvent("onpropertychange",Kp)):i==="focusout"&&qp()}function Cy(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return hl(Xo)}function Ry(i,s){if(i==="click")return hl(s)}function by(i,s){if(i==="input"||i==="change")return hl(s)}function Py(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var hi=typeof Object.is=="function"?Object.is:Py;function jo(i,s){if(hi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),f=Object.keys(s);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var g=a[f];if(!h.call(s,g)||!hi(i[g],s[g]))return!1}return!0}function Zp(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Qp(i,s){var a=Zp(i);i=0;for(var f;a;){if(a.nodeType===3){if(f=i+a.textContent.length,i<=s&&f>=s)return{node:a,offset:s-i};i=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zp(a)}}function Jp(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Jp(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function em(){for(var i=window,s=_t();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=_t(i.document)}return s}function mf(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function Ly(i){var s=em(),a=i.focusedElem,f=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&Jp(a.ownerDocument.documentElement,a)){if(f!==null&&mf(a)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var g=a.textContent.length,S=Math.min(f.start,g);f=f.end===void 0?S:Math.min(f.end,g),!i.extend&&S>f&&(g=f,f=S,S=g),g=Qp(a,S);var w=Qp(a,f);g&&w&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),i.removeAllRanges(),S>f?(i.addRange(s),i.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Dy=c&&"documentMode"in document&&11>=document.documentMode,Ns=null,gf=null,Yo=null,_f=!1;function tm(i,s,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_f||Ns==null||Ns!==_t(f)||(f=Ns,"selectionStart"in f&&mf(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Yo&&jo(Yo,f)||(Yo=f,f=gl(gf,"onSelect"),0<f.length&&(s=new af("onSelect","select",null,s,a),i.push({event:s,listeners:f}),s.target=Ns)))}function dl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Is={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},vf={},nm={};c&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function pl(i){if(vf[i])return vf[i];if(!Is[i])return i;var s=Is[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in nm)return vf[i]=s[a];return i}var im=pl("animationend"),rm=pl("animationiteration"),sm=pl("animationstart"),om=pl("transitionend"),am=new Map,lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(i,s){am.set(i,s),l(s,[i])}for(var xf=0;xf<lm.length;xf++){var yf=lm[xf],Ny=yf.toLowerCase(),Iy=yf[0].toUpperCase()+yf.slice(1);Er(Ny,"on"+Iy)}Er(im,"onAnimationEnd"),Er(rm,"onAnimationIteration"),Er(sm,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(om,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uy=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function um(i,s,a){var f=i.type||"unknown-event";i.currentTarget=a,Jc(f,s,void 0,i),i.currentTarget=null}function cm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var f=i[a],g=f.event;f=f.listeners;e:{var S=void 0;if(s)for(var w=f.length-1;0<=w;w--){var N=f[w],B=N.instance,ae=N.currentTarget;if(N=N.listener,B!==S&&g.isPropagationStopped())break e;um(g,N,ae),S=B}else for(w=0;w<f.length;w++){if(N=f[w],B=N.instance,ae=N.currentTarget,N=N.listener,B!==S&&g.isPropagationStopped())break e;um(g,N,ae),S=B}}}if($r)throw i=mr,$r=!1,mr=null,i}function Nt(i,s){var a=s[Rf];a===void 0&&(a=s[Rf]=new Set);var f=i+"__bubble";a.has(f)||(fm(s,i,2,!1),a.add(f))}function Sf(i,s,a){var f=0;s&&(f|=4),fm(a,i,f,s)}var ml="_reactListening"+Math.random().toString(36).slice(2);function qo(i){if(!i[ml]){i[ml]=!0,r.forEach(function(a){a!=="selectionchange"&&(Uy.has(a)||Sf(a,!1,i),Sf(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[ml]||(s[ml]=!0,Sf("selectionchange",!1,s))}}function fm(i,s,a,f){switch(Ip(s)){case 1:var g=qx;break;case 4:g=Kx;break;default:g=rf}a=g.bind(null,s,a,i),g=void 0,!fi||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),f?g!==void 0?i.addEventListener(s,a,{capture:!0,passive:g}):i.addEventListener(s,a,!0):g!==void 0?i.addEventListener(s,a,{passive:g}):i.addEventListener(s,a,!1)}function Mf(i,s,a,f,g){var S=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var w=f.tag;if(w===3||w===4){var N=f.stateNode.containerInfo;if(N===g||N.nodeType===8&&N.parentNode===g)break;if(w===4)for(w=f.return;w!==null;){var B=w.tag;if((B===3||B===4)&&(B=w.stateNode.containerInfo,B===g||B.nodeType===8&&B.parentNode===g))return;w=w.return}for(;N!==null;){if(w=Kr(N),w===null)return;if(B=w.tag,B===5||B===6){f=S=w;continue e}N=N.parentNode}}f=f.return}Bn(function(){var ae=S,xe=Te(a),Me=[];e:{var _e=am.get(i);if(_e!==void 0){var Fe=af,Be=i;switch(i){case"keypress":if(ul(a)===0)break e;case"keydown":case"keyup":Fe=fy;break;case"focusin":Be="focus",Fe=cf;break;case"focusout":Be="blur",Fe=cf;break;case"beforeblur":case"afterblur":Fe=cf;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=py;break;case im:case rm:case sm:Fe=ny;break;case om:Fe=gy;break;case"scroll":Fe=Zx;break;case"wheel":Fe=vy;break;case"copy":case"cut":case"paste":Fe=ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=zp}var Ve=(s&4)!==0,Gt=!Ve&&i==="scroll",Q=Ve?_e!==null?_e+"Capture":null:_e;Ve=[];for(var G=ae,ee;G!==null;){ee=G;var we=ee.stateNode;if(ee.tag===5&&we!==null&&(ee=we,Q!==null&&(we=dr(G,Q),we!=null&&Ve.push(Ko(G,we,ee)))),Gt)break;G=G.return}0<Ve.length&&(_e=new Fe(_e,Be,null,a,xe),Me.push({event:_e,listeners:Ve}))}}if((s&7)===0){e:{if(_e=i==="mouseover"||i==="pointerover",Fe=i==="mouseout"||i==="pointerout",_e&&a!==j&&(Be=a.relatedTarget||a.fromElement)&&(Kr(Be)||Be[Vi]))break e;if((Fe||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,Fe?(Be=a.relatedTarget||a.toElement,Fe=ae,Be=Be?Kr(Be):null,Be!==null&&(Gt=Hi(Be),Be!==Gt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Fe=null,Be=ae),Fe!==Be)){if(Ve=Op,we="onMouseLeave",Q="onMouseEnter",G="mouse",(i==="pointerout"||i==="pointerover")&&(Ve=zp,we="onPointerLeave",Q="onPointerEnter",G="pointer"),Gt=Fe==null?_e:Os(Fe),ee=Be==null?_e:Os(Be),_e=new Ve(we,G+"leave",Fe,a,xe),_e.target=Gt,_e.relatedTarget=ee,we=null,Kr(xe)===ae&&(Ve=new Ve(Q,G+"enter",Be,a,xe),Ve.target=ee,Ve.relatedTarget=Gt,we=Ve),Gt=we,Fe&&Be)t:{for(Ve=Fe,Q=Be,G=0,ee=Ve;ee;ee=Us(ee))G++;for(ee=0,we=Q;we;we=Us(we))ee++;for(;0<G-ee;)Ve=Us(Ve),G--;for(;0<ee-G;)Q=Us(Q),ee--;for(;G--;){if(Ve===Q||Q!==null&&Ve===Q.alternate)break t;Ve=Us(Ve),Q=Us(Q)}Ve=null}else Ve=null;Fe!==null&&hm(Me,_e,Fe,Ve,!1),Be!==null&&Gt!==null&&hm(Me,Gt,Be,Ve,!0)}}e:{if(_e=ae?Os(ae):window,Fe=_e.nodeName&&_e.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&_e.type==="file")var We=Ty;else if(Xp(_e))if(Yp)We=by;else{We=Cy;var qe=Ay}else(Fe=_e.nodeName)&&Fe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(We=Ry);if(We&&(We=We(i,ae))){jp(Me,We,a,xe);break e}qe&&qe(i,_e,ae),i==="focusout"&&(qe=_e._wrapperState)&&qe.controlled&&_e.type==="number"&&rt(_e,"number",_e.value)}switch(qe=ae?Os(ae):window,i){case"focusin":(Xp(qe)||qe.contentEditable==="true")&&(Ns=qe,gf=ae,Yo=null);break;case"focusout":Yo=gf=Ns=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,tm(Me,a,xe);break;case"selectionchange":if(Dy)break;case"keydown":case"keyup":tm(Me,a,xe)}var Ke;if(hf)e:{switch(i){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Ds?Gp(i,a)&&(nt="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(Bp&&a.locale!=="ko"&&(Ds||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Ds&&(Ke=Up()):(Mr=xe,of="value"in Mr?Mr.value:Mr.textContent,Ds=!0)),qe=gl(ae,nt),0<qe.length&&(nt=new kp(nt,i,null,a,xe),Me.push({event:nt,listeners:qe}),Ke?nt.data=Ke:(Ke=Wp(a),Ke!==null&&(nt.data=Ke)))),(Ke=yy?Sy(i,a):My(i,a))&&(ae=gl(ae,"onBeforeInput"),0<ae.length&&(xe=new kp("onBeforeInput","beforeinput",null,a,xe),Me.push({event:xe,listeners:ae}),xe.data=Ke))}cm(Me,s)})}function Ko(i,s,a){return{instance:i,listener:s,currentTarget:a}}function gl(i,s){for(var a=s+"Capture",f=[];i!==null;){var g=i,S=g.stateNode;g.tag===5&&S!==null&&(g=S,S=dr(i,a),S!=null&&f.unshift(Ko(i,S,g)),S=dr(i,s),S!=null&&f.push(Ko(i,S,g))),i=i.return}return f}function Us(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function hm(i,s,a,f,g){for(var S=s._reactName,w=[];a!==null&&a!==f;){var N=a,B=N.alternate,ae=N.stateNode;if(B!==null&&B===f)break;N.tag===5&&ae!==null&&(N=ae,g?(B=dr(a,S),B!=null&&w.unshift(Ko(a,B,N))):g||(B=dr(a,S),B!=null&&w.push(Ko(a,B,N)))),a=a.return}w.length!==0&&i.push({event:s,listeners:w})}var Fy=/\r\n?/g,Oy=/\u0000|\uFFFD/g;function dm(i){return(typeof i=="string"?i:""+i).replace(Fy,`
`).replace(Oy,"")}function _l(i,s,a){if(s=dm(s),dm(i)!==s&&a)throw Error(t(425))}function vl(){}var Ef=null,wf=null;function Tf(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Af=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,zy=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(i){return pm.resolve(null).then(i).catch(By)}:Af;function By(i){setTimeout(function(){throw i})}function Cf(i,s){var a=s,f=0;do{var g=a.nextSibling;if(i.removeChild(a),g&&g.nodeType===8)if(a=g.data,a==="/$"){if(f===0){i.removeChild(g),Bo(s);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=g}while(a);Bo(s)}function wr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function mm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Ri="__reactFiber$"+Fs,Zo="__reactProps$"+Fs,Vi="__reactContainer$"+Fs,Rf="__reactEvents$"+Fs,Hy="__reactListeners$"+Fs,Vy="__reactHandles$"+Fs;function Kr(i){var s=i[Ri];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Vi]||a[Ri]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=mm(i);i!==null;){if(a=i[Ri])return a;i=mm(i)}return s}i=a,a=i.parentNode}return null}function Qo(i){return i=i[Ri]||i[Vi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Os(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function xl(i){return i[Zo]||null}var bf=[],ks=-1;function Tr(i){return{current:i}}function It(i){0>ks||(i.current=bf[ks],bf[ks]=null,ks--)}function Pt(i,s){ks++,bf[ks]=i.current,i.current=s}var Ar={},fn=Tr(Ar),bn=Tr(!1),Zr=Ar;function zs(i,s){var a=i.type.contextTypes;if(!a)return Ar;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var g={},S;for(S in a)g[S]=s[S];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=g),g}function Pn(i){return i=i.childContextTypes,i!=null}function yl(){It(bn),It(fn)}function gm(i,s,a){if(fn.current!==Ar)throw Error(t(168));Pt(fn,s),Pt(bn,a)}function _m(i,s,a){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var g in f)if(!(g in s))throw Error(t(108,Se(i)||"Unknown",g));return ne({},a,f)}function Sl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ar,Zr=fn.current,Pt(fn,i),Pt(bn,bn.current),!0}function vm(i,s,a){var f=i.stateNode;if(!f)throw Error(t(169));a?(i=_m(i,s,Zr),f.__reactInternalMemoizedMergedChildContext=i,It(bn),It(fn),Pt(fn,i)):It(bn),Pt(bn,a)}var Gi=null,Ml=!1,Pf=!1;function xm(i){Gi===null?Gi=[i]:Gi.push(i)}function Gy(i){Ml=!0,xm(i)}function Cr(){if(!Pf&&Gi!==null){Pf=!0;var i=0,s=Tt;try{var a=Gi;for(Tt=1;i<a.length;i++){var f=a[i];do f=f(!0);while(f!==null)}Gi=null,Ml=!1}catch(g){throw Gi!==null&&(Gi=Gi.slice(i+1)),Z(Qe,Cr),g}finally{Tt=s,Pf=!1}}return null}var Bs=[],Hs=0,El=null,wl=0,ei=[],ti=0,Qr=null,Wi=1,Xi="";function Jr(i,s){Bs[Hs++]=wl,Bs[Hs++]=El,El=i,wl=s}function ym(i,s,a){ei[ti++]=Wi,ei[ti++]=Xi,ei[ti++]=Qr,Qr=i;var f=Wi;i=Xi;var g=32-wt(f)-1;f&=~(1<<g),a+=1;var S=32-wt(s)+g;if(30<S){var w=g-g%5;S=(f&(1<<w)-1).toString(32),f>>=w,g-=w,Wi=1<<32-wt(s)+g|a<<g|f,Xi=S+i}else Wi=1<<S|a<<g|f,Xi=i}function Lf(i){i.return!==null&&(Jr(i,1),ym(i,1,0))}function Df(i){for(;i===El;)El=Bs[--Hs],Bs[Hs]=null,wl=Bs[--Hs],Bs[Hs]=null;for(;i===Qr;)Qr=ei[--ti],ei[ti]=null,Xi=ei[--ti],ei[ti]=null,Wi=ei[--ti],ei[ti]=null}var Wn=null,Xn=null,Ot=!1,di=null;function Sm(i,s){var a=si(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function Mm(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Wn=i,Xn=wr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Wn=i,Xn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Qr!==null?{id:Wi,overflow:Xi}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=si(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Wn=i,Xn=null,!0):!1;default:return!1}}function Nf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function If(i){if(Ot){var s=Xn;if(s){var a=s;if(!Mm(i,s)){if(Nf(i))throw Error(t(418));s=wr(a.nextSibling);var f=Wn;s&&Mm(i,s)?Sm(f,a):(i.flags=i.flags&-4097|2,Ot=!1,Wn=i)}}else{if(Nf(i))throw Error(t(418));i.flags=i.flags&-4097|2,Ot=!1,Wn=i}}}function Em(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Wn=i}function Tl(i){if(i!==Wn)return!1;if(!Ot)return Em(i),Ot=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Tf(i.type,i.memoizedProps)),s&&(s=Xn)){if(Nf(i))throw wm(),Error(t(418));for(;s;)Sm(i,s),s=wr(s.nextSibling)}if(Em(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Xn=wr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Xn=null}}else Xn=Wn?wr(i.stateNode.nextSibling):null;return!0}function wm(){for(var i=Xn;i;)i=wr(i.nextSibling)}function Vs(){Xn=Wn=null,Ot=!1}function Uf(i){di===null?di=[i]:di.push(i)}var Wy=C.ReactCurrentBatchConfig;function Jo(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,i));var g=f,S=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===S?s.ref:(s=function(w){var N=g.refs;w===null?delete N[S]:N[S]=w},s._stringRef=S,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function Al(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Tm(i){var s=i._init;return s(i._payload)}function Am(i){function s(Q,G){if(i){var ee=Q.deletions;ee===null?(Q.deletions=[G],Q.flags|=16):ee.push(G)}}function a(Q,G){if(!i)return null;for(;G!==null;)s(Q,G),G=G.sibling;return null}function f(Q,G){for(Q=new Map;G!==null;)G.key!==null?Q.set(G.key,G):Q.set(G.index,G),G=G.sibling;return Q}function g(Q,G){return Q=Ur(Q,G),Q.index=0,Q.sibling=null,Q}function S(Q,G,ee){return Q.index=ee,i?(ee=Q.alternate,ee!==null?(ee=ee.index,ee<G?(Q.flags|=2,G):ee):(Q.flags|=2,G)):(Q.flags|=1048576,G)}function w(Q){return i&&Q.alternate===null&&(Q.flags|=2),Q}function N(Q,G,ee,we){return G===null||G.tag!==6?(G=Ah(ee,Q.mode,we),G.return=Q,G):(G=g(G,ee),G.return=Q,G)}function B(Q,G,ee,we){var We=ee.type;return We===I?xe(Q,G,ee.props.children,we,ee.key):G!==null&&(G.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===J&&Tm(We)===G.type)?(we=g(G,ee.props),we.ref=Jo(Q,G,ee),we.return=Q,we):(we=Kl(ee.type,ee.key,ee.props,null,Q.mode,we),we.ref=Jo(Q,G,ee),we.return=Q,we)}function ae(Q,G,ee,we){return G===null||G.tag!==4||G.stateNode.containerInfo!==ee.containerInfo||G.stateNode.implementation!==ee.implementation?(G=Ch(ee,Q.mode,we),G.return=Q,G):(G=g(G,ee.children||[]),G.return=Q,G)}function xe(Q,G,ee,we,We){return G===null||G.tag!==7?(G=as(ee,Q.mode,we,We),G.return=Q,G):(G=g(G,ee),G.return=Q,G)}function Me(Q,G,ee){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Ah(""+G,Q.mode,ee),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case k:return ee=Kl(G.type,G.key,G.props,null,Q.mode,ee),ee.ref=Jo(Q,null,G),ee.return=Q,ee;case D:return G=Ch(G,Q.mode,ee),G.return=Q,G;case J:var we=G._init;return Me(Q,we(G._payload),ee)}if(F(G)||ce(G))return G=as(G,Q.mode,ee,null),G.return=Q,G;Al(Q,G)}return null}function _e(Q,G,ee,we){var We=G!==null?G.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return We!==null?null:N(Q,G,""+ee,we);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case k:return ee.key===We?B(Q,G,ee,we):null;case D:return ee.key===We?ae(Q,G,ee,we):null;case J:return We=ee._init,_e(Q,G,We(ee._payload),we)}if(F(ee)||ce(ee))return We!==null?null:xe(Q,G,ee,we,null);Al(Q,ee)}return null}function Fe(Q,G,ee,we,We){if(typeof we=="string"&&we!==""||typeof we=="number")return Q=Q.get(ee)||null,N(G,Q,""+we,We);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case k:return Q=Q.get(we.key===null?ee:we.key)||null,B(G,Q,we,We);case D:return Q=Q.get(we.key===null?ee:we.key)||null,ae(G,Q,we,We);case J:var qe=we._init;return Fe(Q,G,ee,qe(we._payload),We)}if(F(we)||ce(we))return Q=Q.get(ee)||null,xe(G,Q,we,We,null);Al(G,we)}return null}function Be(Q,G,ee,we){for(var We=null,qe=null,Ke=G,nt=G=0,on=null;Ke!==null&&nt<ee.length;nt++){Ke.index>nt?(on=Ke,Ke=null):on=Ke.sibling;var St=_e(Q,Ke,ee[nt],we);if(St===null){Ke===null&&(Ke=on);break}i&&Ke&&St.alternate===null&&s(Q,Ke),G=S(St,G,nt),qe===null?We=St:qe.sibling=St,qe=St,Ke=on}if(nt===ee.length)return a(Q,Ke),Ot&&Jr(Q,nt),We;if(Ke===null){for(;nt<ee.length;nt++)Ke=Me(Q,ee[nt],we),Ke!==null&&(G=S(Ke,G,nt),qe===null?We=Ke:qe.sibling=Ke,qe=Ke);return Ot&&Jr(Q,nt),We}for(Ke=f(Q,Ke);nt<ee.length;nt++)on=Fe(Ke,Q,nt,ee[nt],we),on!==null&&(i&&on.alternate!==null&&Ke.delete(on.key===null?nt:on.key),G=S(on,G,nt),qe===null?We=on:qe.sibling=on,qe=on);return i&&Ke.forEach(function(Fr){return s(Q,Fr)}),Ot&&Jr(Q,nt),We}function Ve(Q,G,ee,we){var We=ce(ee);if(typeof We!="function")throw Error(t(150));if(ee=We.call(ee),ee==null)throw Error(t(151));for(var qe=We=null,Ke=G,nt=G=0,on=null,St=ee.next();Ke!==null&&!St.done;nt++,St=ee.next()){Ke.index>nt?(on=Ke,Ke=null):on=Ke.sibling;var Fr=_e(Q,Ke,St.value,we);if(Fr===null){Ke===null&&(Ke=on);break}i&&Ke&&Fr.alternate===null&&s(Q,Ke),G=S(Fr,G,nt),qe===null?We=Fr:qe.sibling=Fr,qe=Fr,Ke=on}if(St.done)return a(Q,Ke),Ot&&Jr(Q,nt),We;if(Ke===null){for(;!St.done;nt++,St=ee.next())St=Me(Q,St.value,we),St!==null&&(G=S(St,G,nt),qe===null?We=St:qe.sibling=St,qe=St);return Ot&&Jr(Q,nt),We}for(Ke=f(Q,Ke);!St.done;nt++,St=ee.next())St=Fe(Ke,Q,nt,St.value,we),St!==null&&(i&&St.alternate!==null&&Ke.delete(St.key===null?nt:St.key),G=S(St,G,nt),qe===null?We=St:qe.sibling=St,qe=St);return i&&Ke.forEach(function(ES){return s(Q,ES)}),Ot&&Jr(Q,nt),We}function Gt(Q,G,ee,we){if(typeof ee=="object"&&ee!==null&&ee.type===I&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case k:e:{for(var We=ee.key,qe=G;qe!==null;){if(qe.key===We){if(We=ee.type,We===I){if(qe.tag===7){a(Q,qe.sibling),G=g(qe,ee.props.children),G.return=Q,Q=G;break e}}else if(qe.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===J&&Tm(We)===qe.type){a(Q,qe.sibling),G=g(qe,ee.props),G.ref=Jo(Q,qe,ee),G.return=Q,Q=G;break e}a(Q,qe);break}else s(Q,qe);qe=qe.sibling}ee.type===I?(G=as(ee.props.children,Q.mode,we,ee.key),G.return=Q,Q=G):(we=Kl(ee.type,ee.key,ee.props,null,Q.mode,we),we.ref=Jo(Q,G,ee),we.return=Q,Q=we)}return w(Q);case D:e:{for(qe=ee.key;G!==null;){if(G.key===qe)if(G.tag===4&&G.stateNode.containerInfo===ee.containerInfo&&G.stateNode.implementation===ee.implementation){a(Q,G.sibling),G=g(G,ee.children||[]),G.return=Q,Q=G;break e}else{a(Q,G);break}else s(Q,G);G=G.sibling}G=Ch(ee,Q.mode,we),G.return=Q,Q=G}return w(Q);case J:return qe=ee._init,Gt(Q,G,qe(ee._payload),we)}if(F(ee))return Be(Q,G,ee,we);if(ce(ee))return Ve(Q,G,ee,we);Al(Q,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,G!==null&&G.tag===6?(a(Q,G.sibling),G=g(G,ee),G.return=Q,Q=G):(a(Q,G),G=Ah(ee,Q.mode,we),G.return=Q,Q=G),w(Q)):a(Q,G)}return Gt}var Gs=Am(!0),Cm=Am(!1),Cl=Tr(null),Rl=null,Ws=null,Ff=null;function Of(){Ff=Ws=Rl=null}function kf(i){var s=Cl.current;It(Cl),i._currentValue=s}function zf(i,s,a){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===a)break;i=i.return}}function Xs(i,s){Rl=i,Ff=Ws=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Ln=!0),i.firstContext=null)}function ni(i){var s=i._currentValue;if(Ff!==i)if(i={context:i,memoizedValue:s,next:null},Ws===null){if(Rl===null)throw Error(t(308));Ws=i,Rl.dependencies={lanes:0,firstContext:i}}else Ws=Ws.next=i;return s}var es=null;function Bf(i){es===null?es=[i]:es.push(i)}function Rm(i,s,a,f){var g=s.interleaved;return g===null?(a.next=a,Bf(s)):(a.next=g.next,g.next=a),s.interleaved=a,ji(i,f)}function ji(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var Rr=!1;function Hf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Yi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function br(i,s,a){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(xt&2)!==0){var g=f.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),f.pending=s,ji(i,a)}return g=f.interleaved,g===null?(s.next=s,Bf(f)):(s.next=g.next,g.next=s),f.interleaved=s,ji(i,a)}function bl(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,ef(i,a)}}function Pm(i,s){var a=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var g=null,S=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};S===null?g=S=w:S=S.next=w,a=a.next}while(a!==null);S===null?g=S=s:S=S.next=s}else g=S=s;a={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:S,shared:f.shared,effects:f.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Pl(i,s,a,f){var g=i.updateQueue;Rr=!1;var S=g.firstBaseUpdate,w=g.lastBaseUpdate,N=g.shared.pending;if(N!==null){g.shared.pending=null;var B=N,ae=B.next;B.next=null,w===null?S=ae:w.next=ae,w=B;var xe=i.alternate;xe!==null&&(xe=xe.updateQueue,N=xe.lastBaseUpdate,N!==w&&(N===null?xe.firstBaseUpdate=ae:N.next=ae,xe.lastBaseUpdate=B))}if(S!==null){var Me=g.baseState;w=0,xe=ae=B=null,N=S;do{var _e=N.lane,Fe=N.eventTime;if((f&_e)===_e){xe!==null&&(xe=xe.next={eventTime:Fe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Be=i,Ve=N;switch(_e=s,Fe=a,Ve.tag){case 1:if(Be=Ve.payload,typeof Be=="function"){Me=Be.call(Fe,Me,_e);break e}Me=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ve.payload,_e=typeof Be=="function"?Be.call(Fe,Me,_e):Be,_e==null)break e;Me=ne({},Me,_e);break e;case 2:Rr=!0}}N.callback!==null&&N.lane!==0&&(i.flags|=64,_e=g.effects,_e===null?g.effects=[N]:_e.push(N))}else Fe={eventTime:Fe,lane:_e,tag:N.tag,payload:N.payload,callback:N.callback,next:null},xe===null?(ae=xe=Fe,B=Me):xe=xe.next=Fe,w|=_e;if(N=N.next,N===null){if(N=g.shared.pending,N===null)break;_e=N,N=_e.next,_e.next=null,g.lastBaseUpdate=_e,g.shared.pending=null}}while(!0);if(xe===null&&(B=Me),g.baseState=B,g.firstBaseUpdate=ae,g.lastBaseUpdate=xe,s=g.shared.interleaved,s!==null){g=s;do w|=g.lane,g=g.next;while(g!==s)}else S===null&&(g.shared.lanes=0);is|=w,i.lanes=w,i.memoizedState=Me}}function Lm(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],g=f.callback;if(g!==null){if(f.callback=null,f=a,typeof g!="function")throw Error(t(191,g));g.call(f)}}}var ea={},bi=Tr(ea),ta=Tr(ea),na=Tr(ea);function ts(i){if(i===ea)throw Error(t(174));return i}function Vf(i,s){switch(Pt(na,s),Pt(ta,i),Pt(bi,ea),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Pe(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Pe(s,i)}It(bi),Pt(bi,s)}function js(){It(bi),It(ta),It(na)}function Dm(i){ts(na.current);var s=ts(bi.current),a=Pe(s,i.type);s!==a&&(Pt(ta,i),Pt(bi,a))}function Gf(i){ta.current===i&&(It(bi),It(ta))}var Bt=Tr(0);function Ll(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Wf=[];function Xf(){for(var i=0;i<Wf.length;i++)Wf[i]._workInProgressVersionPrimary=null;Wf.length=0}var Dl=C.ReactCurrentDispatcher,jf=C.ReactCurrentBatchConfig,ns=0,Ht=null,Kt=null,rn=null,Nl=!1,ia=!1,ra=0,Xy=0;function hn(){throw Error(t(321))}function Yf(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!hi(i[a],s[a]))return!1;return!0}function $f(i,s,a,f,g,S){if(ns=S,Ht=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Dl.current=i===null||i.memoizedState===null?qy:Ky,i=a(f,g),ia){S=0;do{if(ia=!1,ra=0,25<=S)throw Error(t(301));S+=1,rn=Kt=null,s.updateQueue=null,Dl.current=Zy,i=a(f,g)}while(ia)}if(Dl.current=Fl,s=Kt!==null&&Kt.next!==null,ns=0,rn=Kt=Ht=null,Nl=!1,s)throw Error(t(300));return i}function qf(){var i=ra!==0;return ra=0,i}function Pi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Ht.memoizedState=rn=i:rn=rn.next=i,rn}function ii(){if(Kt===null){var i=Ht.alternate;i=i!==null?i.memoizedState:null}else i=Kt.next;var s=rn===null?Ht.memoizedState:rn.next;if(s!==null)rn=s,Kt=i;else{if(i===null)throw Error(t(310));Kt=i,i={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},rn===null?Ht.memoizedState=rn=i:rn=rn.next=i}return rn}function sa(i,s){return typeof s=="function"?s(i):s}function Kf(i){var s=ii(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=Kt,g=f.baseQueue,S=a.pending;if(S!==null){if(g!==null){var w=g.next;g.next=S.next,S.next=w}f.baseQueue=g=S,a.pending=null}if(g!==null){S=g.next,f=f.baseState;var N=w=null,B=null,ae=S;do{var xe=ae.lane;if((ns&xe)===xe)B!==null&&(B=B.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),f=ae.hasEagerState?ae.eagerState:i(f,ae.action);else{var Me={lane:xe,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};B===null?(N=B=Me,w=f):B=B.next=Me,Ht.lanes|=xe,is|=xe}ae=ae.next}while(ae!==null&&ae!==S);B===null?w=f:B.next=N,hi(f,s.memoizedState)||(Ln=!0),s.memoizedState=f,s.baseState=w,s.baseQueue=B,a.lastRenderedState=f}if(i=a.interleaved,i!==null){g=i;do S=g.lane,Ht.lanes|=S,is|=S,g=g.next;while(g!==i)}else g===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Zf(i){var s=ii(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=a.dispatch,g=a.pending,S=s.memoizedState;if(g!==null){a.pending=null;var w=g=g.next;do S=i(S,w.action),w=w.next;while(w!==g);hi(S,s.memoizedState)||(Ln=!0),s.memoizedState=S,s.baseQueue===null&&(s.baseState=S),a.lastRenderedState=S}return[S,f]}function Nm(){}function Im(i,s){var a=Ht,f=ii(),g=s(),S=!hi(f.memoizedState,g);if(S&&(f.memoizedState=g,Ln=!0),f=f.queue,Qf(Om.bind(null,a,f,i),[i]),f.getSnapshot!==s||S||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,oa(9,Fm.bind(null,a,f,g,s),void 0,null),sn===null)throw Error(t(349));(ns&30)!==0||Um(a,s,g)}return g}function Um(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Ht.updateQueue,s===null?(s={lastEffect:null,stores:null},Ht.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Fm(i,s,a,f){s.value=a,s.getSnapshot=f,km(s)&&zm(i)}function Om(i,s,a){return a(function(){km(s)&&zm(i)})}function km(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!hi(i,a)}catch{return!0}}function zm(i){var s=ji(i,1);s!==null&&_i(s,i,1,-1)}function Bm(i){var s=Pi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:i},s.queue=i,i=i.dispatch=$y.bind(null,Ht,i),[s.memoizedState,i]}function oa(i,s,a,f){return i={tag:i,create:s,destroy:a,deps:f,next:null},s=Ht.updateQueue,s===null?(s={lastEffect:null,stores:null},Ht.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(f=a.next,a.next=i,i.next=f,s.lastEffect=i)),i}function Hm(){return ii().memoizedState}function Il(i,s,a,f){var g=Pi();Ht.flags|=i,g.memoizedState=oa(1|s,a,void 0,f===void 0?null:f)}function Ul(i,s,a,f){var g=ii();f=f===void 0?null:f;var S=void 0;if(Kt!==null){var w=Kt.memoizedState;if(S=w.destroy,f!==null&&Yf(f,w.deps)){g.memoizedState=oa(s,a,S,f);return}}Ht.flags|=i,g.memoizedState=oa(1|s,a,S,f)}function Vm(i,s){return Il(8390656,8,i,s)}function Qf(i,s){return Ul(2048,8,i,s)}function Gm(i,s){return Ul(4,2,i,s)}function Wm(i,s){return Ul(4,4,i,s)}function Xm(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function jm(i,s,a){return a=a!=null?a.concat([i]):null,Ul(4,4,Xm.bind(null,s,i),a)}function Jf(){}function Ym(i,s){var a=ii();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Yf(s,f[1])?f[0]:(a.memoizedState=[i,s],i)}function $m(i,s){var a=ii();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Yf(s,f[1])?f[0]:(i=i(),a.memoizedState=[i,s],i)}function qm(i,s,a){return(ns&21)===0?(i.baseState&&(i.baseState=!1,Ln=!0),i.memoizedState=a):(hi(a,s)||(a=il(),Ht.lanes|=a,is|=a,i.baseState=!0),s)}function jy(i,s){var a=Tt;Tt=a!==0&&4>a?a:4,i(!0);var f=jf.transition;jf.transition={};try{i(!1),s()}finally{Tt=a,jf.transition=f}}function Km(){return ii().memoizedState}function Yy(i,s,a){var f=Nr(i);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},Zm(i))Qm(s,a);else if(a=Rm(i,s,a,f),a!==null){var g=Mn();_i(a,i,f,g),Jm(a,s,f)}}function $y(i,s,a){var f=Nr(i),g={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zm(i))Qm(s,g);else{var S=i.alternate;if(i.lanes===0&&(S===null||S.lanes===0)&&(S=s.lastRenderedReducer,S!==null))try{var w=s.lastRenderedState,N=S(w,a);if(g.hasEagerState=!0,g.eagerState=N,hi(N,w)){var B=s.interleaved;B===null?(g.next=g,Bf(s)):(g.next=B.next,B.next=g),s.interleaved=g;return}}catch{}a=Rm(i,s,g,f),a!==null&&(g=Mn(),_i(a,i,f,g),Jm(a,s,f))}}function Zm(i){var s=i.alternate;return i===Ht||s!==null&&s===Ht}function Qm(i,s){ia=Nl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function Jm(i,s,a){if((a&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,ef(i,a)}}var Fl={readContext:ni,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},qy={readContext:ni,useCallback:function(i,s){return Pi().memoizedState=[i,s===void 0?null:s],i},useContext:ni,useEffect:Vm,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Il(4194308,4,Xm.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Il(4194308,4,i,s)},useInsertionEffect:function(i,s){return Il(4,2,i,s)},useMemo:function(i,s){var a=Pi();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var f=Pi();return s=a!==void 0?a(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=Yy.bind(null,Ht,i),[f.memoizedState,i]},useRef:function(i){var s=Pi();return i={current:i},s.memoizedState=i},useState:Bm,useDebugValue:Jf,useDeferredValue:function(i){return Pi().memoizedState=i},useTransition:function(){var i=Bm(!1),s=i[0];return i=jy.bind(null,i[1]),Pi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var f=Ht,g=Pi();if(Ot){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),sn===null)throw Error(t(349));(ns&30)!==0||Um(f,s,a)}g.memoizedState=a;var S={value:a,getSnapshot:s};return g.queue=S,Vm(Om.bind(null,f,S,i),[i]),f.flags|=2048,oa(9,Fm.bind(null,f,S,a,s),void 0,null),a},useId:function(){var i=Pi(),s=sn.identifierPrefix;if(Ot){var a=Xi,f=Wi;a=(f&~(1<<32-wt(f)-1)).toString(32)+a,s=":"+s+"R"+a,a=ra++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Xy++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},Ky={readContext:ni,useCallback:Ym,useContext:ni,useEffect:Qf,useImperativeHandle:jm,useInsertionEffect:Gm,useLayoutEffect:Wm,useMemo:$m,useReducer:Kf,useRef:Hm,useState:function(){return Kf(sa)},useDebugValue:Jf,useDeferredValue:function(i){var s=ii();return qm(s,Kt.memoizedState,i)},useTransition:function(){var i=Kf(sa)[0],s=ii().memoizedState;return[i,s]},useMutableSource:Nm,useSyncExternalStore:Im,useId:Km,unstable_isNewReconciler:!1},Zy={readContext:ni,useCallback:Ym,useContext:ni,useEffect:Qf,useImperativeHandle:jm,useInsertionEffect:Gm,useLayoutEffect:Wm,useMemo:$m,useReducer:Zf,useRef:Hm,useState:function(){return Zf(sa)},useDebugValue:Jf,useDeferredValue:function(i){var s=ii();return Kt===null?s.memoizedState=i:qm(s,Kt.memoizedState,i)},useTransition:function(){var i=Zf(sa)[0],s=ii().memoizedState;return[i,s]},useMutableSource:Nm,useSyncExternalStore:Im,useId:Km,unstable_isNewReconciler:!1};function pi(i,s){if(i&&i.defaultProps){s=ne({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function eh(i,s,a,f){s=i.memoizedState,a=a(f,s),a=a==null?s:ne({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Ol={isMounted:function(i){return(i=i._reactInternals)?Hi(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var f=Mn(),g=Nr(i),S=Yi(f,g);S.payload=s,a!=null&&(S.callback=a),s=br(i,S,g),s!==null&&(_i(s,i,g,f),bl(s,i,g))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var f=Mn(),g=Nr(i),S=Yi(f,g);S.tag=1,S.payload=s,a!=null&&(S.callback=a),s=br(i,S,g),s!==null&&(_i(s,i,g,f),bl(s,i,g))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=Mn(),f=Nr(i),g=Yi(a,f);g.tag=2,s!=null&&(g.callback=s),s=br(i,g,f),s!==null&&(_i(s,i,f,a),bl(s,i,f))}};function eg(i,s,a,f,g,S,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,S,w):s.prototype&&s.prototype.isPureReactComponent?!jo(a,f)||!jo(g,S):!0}function tg(i,s,a){var f=!1,g=Ar,S=s.contextType;return typeof S=="object"&&S!==null?S=ni(S):(g=Pn(s)?Zr:fn.current,f=s.contextTypes,S=(f=f!=null)?zs(i,g):Ar),s=new s(a,S),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ol,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=S),s}function ng(i,s,a,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,f),s.state!==i&&Ol.enqueueReplaceState(s,s.state,null)}function th(i,s,a,f){var g=i.stateNode;g.props=a,g.state=i.memoizedState,g.refs={},Hf(i);var S=s.contextType;typeof S=="object"&&S!==null?g.context=ni(S):(S=Pn(s)?Zr:fn.current,g.context=zs(i,S)),g.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(eh(i,s,S,a),g.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&Ol.enqueueReplaceState(g,g.state,null),Pl(i,a,g,f),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function Ys(i,s){try{var a="",f=s;do a+=fe(f),f=f.return;while(f);var g=a}catch(S){g=`
Error generating stack: `+S.message+`
`+S.stack}return{value:i,source:s,stack:g,digest:null}}function nh(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function ih(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var Qy=typeof WeakMap=="function"?WeakMap:Map;function ig(i,s,a){a=Yi(-1,a),a.tag=3,a.payload={element:null};var f=s.value;return a.callback=function(){Wl||(Wl=!0,vh=f),ih(i,s)},a}function rg(i,s,a){a=Yi(-1,a),a.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var g=s.value;a.payload=function(){return f(g)},a.callback=function(){ih(i,s)}}var S=i.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(a.callback=function(){ih(i,s),typeof f!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function sg(i,s,a){var f=i.pingCache;if(f===null){f=i.pingCache=new Qy;var g=new Set;f.set(s,g)}else g=f.get(s),g===void 0&&(g=new Set,f.set(s,g));g.has(a)||(g.add(a),i=hS.bind(null,i,s,a),s.then(i,i))}function og(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function ag(i,s,a,f,g){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Yi(-1,1),s.tag=2,br(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var Jy=C.ReactCurrentOwner,Ln=!1;function Sn(i,s,a,f){s.child=i===null?Cm(s,null,a,f):Gs(s,i.child,a,f)}function lg(i,s,a,f,g){a=a.render;var S=s.ref;return Xs(s,g),f=$f(i,s,a,f,S,g),a=qf(),i!==null&&!Ln?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,$i(i,s,g)):(Ot&&a&&Lf(s),s.flags|=1,Sn(i,s,f,g),s.child)}function ug(i,s,a,f,g){if(i===null){var S=a.type;return typeof S=="function"&&!Th(S)&&S.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=S,cg(i,s,S,f,g)):(i=Kl(a.type,null,f,s,s.mode,g),i.ref=s.ref,i.return=s,s.child=i)}if(S=i.child,(i.lanes&g)===0){var w=S.memoizedProps;if(a=a.compare,a=a!==null?a:jo,a(w,f)&&i.ref===s.ref)return $i(i,s,g)}return s.flags|=1,i=Ur(S,f),i.ref=s.ref,i.return=s,s.child=i}function cg(i,s,a,f,g){if(i!==null){var S=i.memoizedProps;if(jo(S,f)&&i.ref===s.ref)if(Ln=!1,s.pendingProps=f=S,(i.lanes&g)!==0)(i.flags&131072)!==0&&(Ln=!0);else return s.lanes=i.lanes,$i(i,s,g)}return rh(i,s,a,f,g)}function fg(i,s,a){var f=s.pendingProps,g=f.children,S=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(qs,jn),jn|=a;else{if((a&1073741824)===0)return i=S!==null?S.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Pt(qs,jn),jn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=S!==null?S.baseLanes:a,Pt(qs,jn),jn|=f}else S!==null?(f=S.baseLanes|a,s.memoizedState=null):f=a,Pt(qs,jn),jn|=f;return Sn(i,s,g,a),s.child}function hg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function rh(i,s,a,f,g){var S=Pn(a)?Zr:fn.current;return S=zs(s,S),Xs(s,g),a=$f(i,s,a,f,S,g),f=qf(),i!==null&&!Ln?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,$i(i,s,g)):(Ot&&f&&Lf(s),s.flags|=1,Sn(i,s,a,g),s.child)}function dg(i,s,a,f,g){if(Pn(a)){var S=!0;Sl(s)}else S=!1;if(Xs(s,g),s.stateNode===null)zl(i,s),tg(s,a,f),th(s,a,f,g),f=!0;else if(i===null){var w=s.stateNode,N=s.memoizedProps;w.props=N;var B=w.context,ae=a.contextType;typeof ae=="object"&&ae!==null?ae=ni(ae):(ae=Pn(a)?Zr:fn.current,ae=zs(s,ae));var xe=a.getDerivedStateFromProps,Me=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";Me||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==f||B!==ae)&&ng(s,w,f,ae),Rr=!1;var _e=s.memoizedState;w.state=_e,Pl(s,f,w,g),B=s.memoizedState,N!==f||_e!==B||bn.current||Rr?(typeof xe=="function"&&(eh(s,a,xe,f),B=s.memoizedState),(N=Rr||eg(s,a,N,f,_e,B,ae))?(Me||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=B),w.props=f,w.state=B,w.context=ae,f=N):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{w=s.stateNode,bm(i,s),N=s.memoizedProps,ae=s.type===s.elementType?N:pi(s.type,N),w.props=ae,Me=s.pendingProps,_e=w.context,B=a.contextType,typeof B=="object"&&B!==null?B=ni(B):(B=Pn(a)?Zr:fn.current,B=zs(s,B));var Fe=a.getDerivedStateFromProps;(xe=typeof Fe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==Me||_e!==B)&&ng(s,w,f,B),Rr=!1,_e=s.memoizedState,w.state=_e,Pl(s,f,w,g);var Be=s.memoizedState;N!==Me||_e!==Be||bn.current||Rr?(typeof Fe=="function"&&(eh(s,a,Fe,f),Be=s.memoizedState),(ae=Rr||eg(s,a,ae,f,_e,Be,B)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(f,Be,B),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(f,Be,B)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||N===i.memoizedProps&&_e===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===i.memoizedProps&&_e===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=Be),w.props=f,w.state=Be,w.context=B,f=ae):(typeof w.componentDidUpdate!="function"||N===i.memoizedProps&&_e===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===i.memoizedProps&&_e===i.memoizedState||(s.flags|=1024),f=!1)}return sh(i,s,a,f,S,g)}function sh(i,s,a,f,g,S){hg(i,s);var w=(s.flags&128)!==0;if(!f&&!w)return g&&vm(s,a,!1),$i(i,s,S);f=s.stateNode,Jy.current=s;var N=w&&typeof a.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&w?(s.child=Gs(s,i.child,null,S),s.child=Gs(s,null,N,S)):Sn(i,s,N,S),s.memoizedState=f.state,g&&vm(s,a,!0),s.child}function pg(i){var s=i.stateNode;s.pendingContext?gm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&gm(i,s.context,!1),Vf(i,s.containerInfo)}function mg(i,s,a,f,g){return Vs(),Uf(g),s.flags|=256,Sn(i,s,a,f),s.child}var oh={dehydrated:null,treeContext:null,retryLane:0};function ah(i){return{baseLanes:i,cachePool:null,transitions:null}}function gg(i,s,a){var f=s.pendingProps,g=Bt.current,S=!1,w=(s.flags&128)!==0,N;if((N=w)||(N=i!==null&&i.memoizedState===null?!1:(g&2)!==0),N?(S=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),Pt(Bt,g&1),i===null)return If(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=f.children,i=f.fallback,S?(f=s.mode,S=s.child,w={mode:"hidden",children:w},(f&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=w):S=Zl(w,f,0,null),i=as(i,f,a,null),S.return=s,i.return=s,S.sibling=i,s.child=S,s.child.memoizedState=ah(a),s.memoizedState=oh,i):lh(s,w));if(g=i.memoizedState,g!==null&&(N=g.dehydrated,N!==null))return eS(i,s,w,f,N,g,a);if(S){S=f.fallback,w=s.mode,g=i.child,N=g.sibling;var B={mode:"hidden",children:f.children};return(w&1)===0&&s.child!==g?(f=s.child,f.childLanes=0,f.pendingProps=B,s.deletions=null):(f=Ur(g,B),f.subtreeFlags=g.subtreeFlags&14680064),N!==null?S=Ur(N,S):(S=as(S,w,a,null),S.flags|=2),S.return=s,f.return=s,f.sibling=S,s.child=f,f=S,S=s.child,w=i.child.memoizedState,w=w===null?ah(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},S.memoizedState=w,S.childLanes=i.childLanes&~a,s.memoizedState=oh,f}return S=i.child,i=S.sibling,f=Ur(S,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=a),f.return=s,f.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=f,s.memoizedState=null,f}function lh(i,s){return s=Zl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function kl(i,s,a,f){return f!==null&&Uf(f),Gs(s,i.child,null,a),i=lh(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function eS(i,s,a,f,g,S,w){if(a)return s.flags&256?(s.flags&=-257,f=nh(Error(t(422))),kl(i,s,w,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(S=f.fallback,g=s.mode,f=Zl({mode:"visible",children:f.children},g,0,null),S=as(S,g,w,null),S.flags|=2,f.return=s,S.return=s,f.sibling=S,s.child=f,(s.mode&1)!==0&&Gs(s,i.child,null,w),s.child.memoizedState=ah(w),s.memoizedState=oh,S);if((s.mode&1)===0)return kl(i,s,w,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var N=f.dgst;return f=N,S=Error(t(419)),f=nh(S,f,void 0),kl(i,s,w,f)}if(N=(w&i.childLanes)!==0,Ln||N){if(f=sn,f!==null){switch(w&-w){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|w))!==0?0:g,g!==0&&g!==S.retryLane&&(S.retryLane=g,ji(i,g),_i(f,i,g,-1))}return wh(),f=nh(Error(t(421))),kl(i,s,w,f)}return g.data==="$?"?(s.flags|=128,s.child=i.child,s=dS.bind(null,i),g._reactRetry=s,null):(i=S.treeContext,Xn=wr(g.nextSibling),Wn=s,Ot=!0,di=null,i!==null&&(ei[ti++]=Wi,ei[ti++]=Xi,ei[ti++]=Qr,Wi=i.id,Xi=i.overflow,Qr=s),s=lh(s,f.children),s.flags|=4096,s)}function _g(i,s,a){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),zf(i.return,s,a)}function uh(i,s,a,f,g){var S=i.memoizedState;S===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:g}:(S.isBackwards=s,S.rendering=null,S.renderingStartTime=0,S.last=f,S.tail=a,S.tailMode=g)}function vg(i,s,a){var f=s.pendingProps,g=f.revealOrder,S=f.tail;if(Sn(i,s,f.children,a),f=Bt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&_g(i,a,s);else if(i.tag===19)_g(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Pt(Bt,f),(s.mode&1)===0)s.memoizedState=null;else switch(g){case"forwards":for(a=s.child,g=null;a!==null;)i=a.alternate,i!==null&&Ll(i)===null&&(g=a),a=a.sibling;a=g,a===null?(g=s.child,s.child=null):(g=a.sibling,a.sibling=null),uh(s,!1,g,a,S);break;case"backwards":for(a=null,g=s.child,s.child=null;g!==null;){if(i=g.alternate,i!==null&&Ll(i)===null){s.child=g;break}i=g.sibling,g.sibling=a,a=g,g=i}uh(s,!0,a,null,S);break;case"together":uh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function zl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function $i(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),is|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Ur(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Ur(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function tS(i,s,a){switch(s.tag){case 3:pg(s),Vs();break;case 5:Dm(s);break;case 1:Pn(s.type)&&Sl(s);break;case 4:Vf(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,g=s.memoizedProps.value;Pt(Cl,f._currentValue),f._currentValue=g;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Pt(Bt,Bt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?gg(i,s,a):(Pt(Bt,Bt.current&1),i=$i(i,s,a),i!==null?i.sibling:null);Pt(Bt,Bt.current&1);break;case 19:if(f=(a&s.childLanes)!==0,(i.flags&128)!==0){if(f)return vg(i,s,a);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Pt(Bt,Bt.current),f)break;return null;case 22:case 23:return s.lanes=0,fg(i,s,a)}return $i(i,s,a)}var xg,ch,yg,Sg;xg=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ch=function(){},yg=function(i,s,a,f){var g=i.memoizedProps;if(g!==f){i=s.stateNode,ts(bi.current);var S=null;switch(a){case"input":g=dt(i,g),f=dt(i,f),S=[];break;case"select":g=ne({},g,{value:void 0}),f=ne({},f,{value:void 0}),S=[];break;case"textarea":g=ue(i,g),f=ue(i,f),S=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=vl)}at(a,f);var w;a=null;for(ae in g)if(!f.hasOwnProperty(ae)&&g.hasOwnProperty(ae)&&g[ae]!=null)if(ae==="style"){var N=g[ae];for(w in N)N.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?S||(S=[]):(S=S||[]).push(ae,null));for(ae in f){var B=f[ae];if(N=g?.[ae],f.hasOwnProperty(ae)&&B!==N&&(B!=null||N!=null))if(ae==="style")if(N){for(w in N)!N.hasOwnProperty(w)||B&&B.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in B)B.hasOwnProperty(w)&&N[w]!==B[w]&&(a||(a={}),a[w]=B[w])}else a||(S||(S=[]),S.push(ae,a)),a=B;else ae==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,N=N?N.__html:void 0,B!=null&&N!==B&&(S=S||[]).push(ae,B)):ae==="children"?typeof B!="string"&&typeof B!="number"||(S=S||[]).push(ae,""+B):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(B!=null&&ae==="onScroll"&&Nt("scroll",i),S||N===B||(S=[])):(S=S||[]).push(ae,B))}a&&(S=S||[]).push("style",a);var ae=S;(s.updateQueue=ae)&&(s.flags|=4)}},Sg=function(i,s,a,f){a!==f&&(s.flags|=4)};function aa(i,s){if(!Ot)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function dn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,f=0;if(s)for(var g=i.child;g!==null;)a|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)a|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=f,i.childLanes=a,s}function nS(i,s,a){var f=s.pendingProps;switch(Df(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(s),null;case 1:return Pn(s.type)&&yl(),dn(s),null;case 3:return f=s.stateNode,js(),It(bn),It(fn),Xf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Tl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,di!==null&&(Sh(di),di=null))),ch(i,s),dn(s),null;case 5:Gf(s);var g=ts(na.current);if(a=s.type,i!==null&&s.stateNode!=null)yg(i,s,a,f,g),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return dn(s),null}if(i=ts(bi.current),Tl(s)){f=s.stateNode,a=s.type;var S=s.memoizedProps;switch(f[Ri]=s,f[Zo]=S,i=(s.mode&1)!==0,a){case"dialog":Nt("cancel",f),Nt("close",f);break;case"iframe":case"object":case"embed":Nt("load",f);break;case"video":case"audio":for(g=0;g<$o.length;g++)Nt($o[g],f);break;case"source":Nt("error",f);break;case"img":case"image":case"link":Nt("error",f),Nt("load",f);break;case"details":Nt("toggle",f);break;case"input":Mt(f,S),Nt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!S.multiple},Nt("invalid",f);break;case"textarea":pe(f,S),Nt("invalid",f)}at(a,S),g=null;for(var w in S)if(S.hasOwnProperty(w)){var N=S[w];w==="children"?typeof N=="string"?f.textContent!==N&&(S.suppressHydrationWarning!==!0&&_l(f.textContent,N,i),g=["children",N]):typeof N=="number"&&f.textContent!==""+N&&(S.suppressHydrationWarning!==!0&&_l(f.textContent,N,i),g=["children",""+N]):o.hasOwnProperty(w)&&N!=null&&w==="onScroll"&&Nt("scroll",f)}switch(a){case"input":ft(f),tt(f,S,!0);break;case"textarea":ft(f),me(f);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(f.onclick=vl)}f=g,s.updateQueue=f,f!==null&&(s.flags|=4)}else{w=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=$e(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=w.createElement(a,{is:f.is}):(i=w.createElement(a),a==="select"&&(w=i,f.multiple?w.multiple=!0:f.size&&(w.size=f.size))):i=w.createElementNS(i,a),i[Ri]=s,i[Zo]=f,xg(i,s,!1,!1),s.stateNode=i;e:{switch(w=Rt(a,f),a){case"dialog":Nt("cancel",i),Nt("close",i),g=f;break;case"iframe":case"object":case"embed":Nt("load",i),g=f;break;case"video":case"audio":for(g=0;g<$o.length;g++)Nt($o[g],i);g=f;break;case"source":Nt("error",i),g=f;break;case"img":case"image":case"link":Nt("error",i),Nt("load",i),g=f;break;case"details":Nt("toggle",i),g=f;break;case"input":Mt(i,f),g=dt(i,f),Nt("invalid",i);break;case"option":g=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},g=ne({},f,{value:void 0}),Nt("invalid",i);break;case"textarea":pe(i,f),g=ue(i,f),Nt("invalid",i);break;default:g=f}at(a,g),N=g;for(S in N)if(N.hasOwnProperty(S)){var B=N[S];S==="style"?ke(i,B):S==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&ot(i,B)):S==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&Ee(i,B):typeof B=="number"&&Ee(i,""+B):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(o.hasOwnProperty(S)?B!=null&&S==="onScroll"&&Nt("scroll",i):B!=null&&A(i,S,B,w))}switch(a){case"input":ft(i),tt(i,f,!1);break;case"textarea":ft(i),me(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Re(f.value));break;case"select":i.multiple=!!f.multiple,S=f.value,S!=null?b(i,!!f.multiple,S,!1):f.defaultValue!=null&&b(i,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=vl)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return dn(s),null;case 6:if(i&&s.stateNode!=null)Sg(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(a=ts(na.current),ts(bi.current),Tl(s)){if(f=s.stateNode,a=s.memoizedProps,f[Ri]=s,(S=f.nodeValue!==a)&&(i=Wn,i!==null))switch(i.tag){case 3:_l(f.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&_l(f.nodeValue,a,(i.mode&1)!==0)}S&&(s.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[Ri]=s,s.stateNode=f}return dn(s),null;case 13:if(It(Bt),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Ot&&Xn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)wm(),Vs(),s.flags|=98560,S=!1;else if(S=Tl(s),f!==null&&f.dehydrated!==null){if(i===null){if(!S)throw Error(t(318));if(S=s.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[Ri]=s}else Vs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;dn(s),S=!1}else di!==null&&(Sh(di),di=null),S=!0;if(!S)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Bt.current&1)!==0?Zt===0&&(Zt=3):wh())),s.updateQueue!==null&&(s.flags|=4),dn(s),null);case 4:return js(),ch(i,s),i===null&&qo(s.stateNode.containerInfo),dn(s),null;case 10:return kf(s.type._context),dn(s),null;case 17:return Pn(s.type)&&yl(),dn(s),null;case 19:if(It(Bt),S=s.memoizedState,S===null)return dn(s),null;if(f=(s.flags&128)!==0,w=S.rendering,w===null)if(f)aa(S,!1);else{if(Zt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(w=Ll(i),w!==null){for(s.flags|=128,aa(S,!1),f=w.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=a,a=s.child;a!==null;)S=a,i=f,S.flags&=14680066,w=S.alternate,w===null?(S.childLanes=0,S.lanes=i,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=w.childLanes,S.lanes=w.lanes,S.child=w.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=w.memoizedProps,S.memoizedState=w.memoizedState,S.updateQueue=w.updateQueue,S.type=w.type,i=w.dependencies,S.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Pt(Bt,Bt.current&1|2),s.child}i=i.sibling}S.tail!==null&&be()>Ks&&(s.flags|=128,f=!0,aa(S,!1),s.lanes=4194304)}else{if(!f)if(i=Ll(w),i!==null){if(s.flags|=128,f=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),aa(S,!0),S.tail===null&&S.tailMode==="hidden"&&!w.alternate&&!Ot)return dn(s),null}else 2*be()-S.renderingStartTime>Ks&&a!==1073741824&&(s.flags|=128,f=!0,aa(S,!1),s.lanes=4194304);S.isBackwards?(w.sibling=s.child,s.child=w):(a=S.last,a!==null?a.sibling=w:s.child=w,S.last=w)}return S.tail!==null?(s=S.tail,S.rendering=s,S.tail=s.sibling,S.renderingStartTime=be(),s.sibling=null,a=Bt.current,Pt(Bt,f?a&1|2:a&1),s):(dn(s),null);case 22:case 23:return Eh(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(jn&1073741824)!==0&&(dn(s),s.subtreeFlags&6&&(s.flags|=8192)):dn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function iS(i,s){switch(Df(s),s.tag){case 1:return Pn(s.type)&&yl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return js(),It(bn),It(fn),Xf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Gf(s),null;case 13:if(It(Bt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Vs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return It(Bt),null;case 4:return js(),null;case 10:return kf(s.type._context),null;case 22:case 23:return Eh(),null;case 24:return null;default:return null}}var Bl=!1,pn=!1,rS=typeof WeakSet=="function"?WeakSet:Set,ze=null;function $s(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){Vt(i,s,f)}else a.current=null}function fh(i,s,a){try{a()}catch(f){Vt(i,s,f)}}var Mg=!1;function sS(i,s){if(Ef=ol,i=em(),mf(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var g=f.anchorOffset,S=f.focusNode;f=f.focusOffset;try{a.nodeType,S.nodeType}catch{a=null;break e}var w=0,N=-1,B=-1,ae=0,xe=0,Me=i,_e=null;t:for(;;){for(var Fe;Me!==a||g!==0&&Me.nodeType!==3||(N=w+g),Me!==S||f!==0&&Me.nodeType!==3||(B=w+f),Me.nodeType===3&&(w+=Me.nodeValue.length),(Fe=Me.firstChild)!==null;)_e=Me,Me=Fe;for(;;){if(Me===i)break t;if(_e===a&&++ae===g&&(N=w),_e===S&&++xe===f&&(B=w),(Fe=Me.nextSibling)!==null)break;Me=_e,_e=Me.parentNode}Me=Fe}a=N===-1||B===-1?null:{start:N,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(wf={focusedElem:i,selectionRange:a},ol=!1,ze=s;ze!==null;)if(s=ze,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ze=i;else for(;ze!==null;){s=ze;try{var Be=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ve=Be.memoizedProps,Gt=Be.memoizedState,Q=s.stateNode,G=Q.getSnapshotBeforeUpdate(s.elementType===s.type?Ve:pi(s.type,Ve),Gt);Q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ee=s.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Vt(s,s.return,we)}if(i=s.sibling,i!==null){i.return=s.return,ze=i;break}ze=s.return}return Be=Mg,Mg=!1,Be}function la(i,s,a){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&i)===i){var S=g.destroy;g.destroy=void 0,S!==void 0&&fh(s,a,S)}g=g.next}while(g!==f)}}function Hl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var f=a.create;a.destroy=f()}a=a.next}while(a!==s)}}function hh(i){var s=i.ref;if(s!==null){var a=i.stateNode;i.tag,i=a,typeof s=="function"?s(i):s.current=i}}function Eg(i){var s=i.alternate;s!==null&&(i.alternate=null,Eg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Ri],delete s[Zo],delete s[Rf],delete s[Hy],delete s[Vy])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function wg(i){return i.tag===5||i.tag===3||i.tag===4}function Tg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||wg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function dh(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=vl));else if(f!==4&&(i=i.child,i!==null))for(dh(i,s,a),i=i.sibling;i!==null;)dh(i,s,a),i=i.sibling}function ph(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(ph(i,s,a),i=i.sibling;i!==null;)ph(i,s,a),i=i.sibling}var ln=null,mi=!1;function Pr(i,s,a){for(a=a.child;a!==null;)Ag(i,s,a),a=a.sibling}function Ag(i,s,a){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(tn,a)}catch{}switch(a.tag){case 5:pn||$s(a,s);case 6:var f=ln,g=mi;ln=null,Pr(i,s,a),ln=f,mi=g,ln!==null&&(mi?(i=ln,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):ln.removeChild(a.stateNode));break;case 18:ln!==null&&(mi?(i=ln,a=a.stateNode,i.nodeType===8?Cf(i.parentNode,a):i.nodeType===1&&Cf(i,a),Bo(i)):Cf(ln,a.stateNode));break;case 4:f=ln,g=mi,ln=a.stateNode.containerInfo,mi=!0,Pr(i,s,a),ln=f,mi=g;break;case 0:case 11:case 14:case 15:if(!pn&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var S=g,w=S.destroy;S=S.tag,w!==void 0&&((S&2)!==0||(S&4)!==0)&&fh(a,s,w),g=g.next}while(g!==f)}Pr(i,s,a);break;case 1:if(!pn&&($s(a,s),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(N){Vt(a,s,N)}Pr(i,s,a);break;case 21:Pr(i,s,a);break;case 22:a.mode&1?(pn=(f=pn)||a.memoizedState!==null,Pr(i,s,a),pn=f):Pr(i,s,a);break;default:Pr(i,s,a)}}function Cg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new rS),s.forEach(function(f){var g=pS.bind(null,i,f);a.has(f)||(a.add(f),f.then(g,g))})}}function gi(i,s){var a=s.deletions;if(a!==null)for(var f=0;f<a.length;f++){var g=a[f];try{var S=i,w=s,N=w;e:for(;N!==null;){switch(N.tag){case 5:ln=N.stateNode,mi=!1;break e;case 3:ln=N.stateNode.containerInfo,mi=!0;break e;case 4:ln=N.stateNode.containerInfo,mi=!0;break e}N=N.return}if(ln===null)throw Error(t(160));Ag(S,w,g),ln=null,mi=!1;var B=g.alternate;B!==null&&(B.return=null),g.return=null}catch(ae){Vt(g,s,ae)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Rg(s,i),s=s.sibling}function Rg(i,s){var a=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(gi(s,i),Li(i),f&4){try{la(3,i,i.return),Hl(3,i)}catch(Ve){Vt(i,i.return,Ve)}try{la(5,i,i.return)}catch(Ve){Vt(i,i.return,Ve)}}break;case 1:gi(s,i),Li(i),f&512&&a!==null&&$s(a,a.return);break;case 5:if(gi(s,i),Li(i),f&512&&a!==null&&$s(a,a.return),i.flags&32){var g=i.stateNode;try{Ee(g,"")}catch(Ve){Vt(i,i.return,Ve)}}if(f&4&&(g=i.stateNode,g!=null)){var S=i.memoizedProps,w=a!==null?a.memoizedProps:S,N=i.type,B=i.updateQueue;if(i.updateQueue=null,B!==null)try{N==="input"&&S.type==="radio"&&S.name!=null&&Ye(g,S),Rt(N,w);var ae=Rt(N,S);for(w=0;w<B.length;w+=2){var xe=B[w],Me=B[w+1];xe==="style"?ke(g,Me):xe==="dangerouslySetInnerHTML"?ot(g,Me):xe==="children"?Ee(g,Me):A(g,xe,Me,ae)}switch(N){case"input":Ut(g,S);break;case"textarea":ve(g,S);break;case"select":var _e=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!S.multiple;var Fe=S.value;Fe!=null?b(g,!!S.multiple,Fe,!1):_e!==!!S.multiple&&(S.defaultValue!=null?b(g,!!S.multiple,S.defaultValue,!0):b(g,!!S.multiple,S.multiple?[]:"",!1))}g[Zo]=S}catch(Ve){Vt(i,i.return,Ve)}}break;case 6:if(gi(s,i),Li(i),f&4){if(i.stateNode===null)throw Error(t(162));g=i.stateNode,S=i.memoizedProps;try{g.nodeValue=S}catch(Ve){Vt(i,i.return,Ve)}}break;case 3:if(gi(s,i),Li(i),f&4&&a!==null&&a.memoizedState.isDehydrated)try{Bo(s.containerInfo)}catch(Ve){Vt(i,i.return,Ve)}break;case 4:gi(s,i),Li(i);break;case 13:gi(s,i),Li(i),g=i.child,g.flags&8192&&(S=g.memoizedState!==null,g.stateNode.isHidden=S,!S||g.alternate!==null&&g.alternate.memoizedState!==null||(_h=be())),f&4&&Cg(i);break;case 22:if(xe=a!==null&&a.memoizedState!==null,i.mode&1?(pn=(ae=pn)||xe,gi(s,i),pn=ae):gi(s,i),Li(i),f&8192){if(ae=i.memoizedState!==null,(i.stateNode.isHidden=ae)&&!xe&&(i.mode&1)!==0)for(ze=i,xe=i.child;xe!==null;){for(Me=ze=xe;ze!==null;){switch(_e=ze,Fe=_e.child,_e.tag){case 0:case 11:case 14:case 15:la(4,_e,_e.return);break;case 1:$s(_e,_e.return);var Be=_e.stateNode;if(typeof Be.componentWillUnmount=="function"){f=_e,a=_e.return;try{s=f,Be.props=s.memoizedProps,Be.state=s.memoizedState,Be.componentWillUnmount()}catch(Ve){Vt(f,a,Ve)}}break;case 5:$s(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Lg(Me);continue}}Fe!==null?(Fe.return=_e,ze=Fe):Lg(Me)}xe=xe.sibling}e:for(xe=null,Me=i;;){if(Me.tag===5){if(xe===null){xe=Me;try{g=Me.stateNode,ae?(S=g.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(N=Me.stateNode,B=Me.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null,N.style.display=et("display",w))}catch(Ve){Vt(i,i.return,Ve)}}}else if(Me.tag===6){if(xe===null)try{Me.stateNode.nodeValue=ae?"":Me.memoizedProps}catch(Ve){Vt(i,i.return,Ve)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===i)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===i)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===i)break e;xe===Me&&(xe=null),Me=Me.return}xe===Me&&(xe=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:gi(s,i),Li(i),f&4&&Cg(i);break;case 21:break;default:gi(s,i),Li(i)}}function Li(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(wg(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(Ee(g,""),f.flags&=-33);var S=Tg(i);ph(i,S,g);break;case 3:case 4:var w=f.stateNode.containerInfo,N=Tg(i);dh(i,N,w);break;default:throw Error(t(161))}}catch(B){Vt(i,i.return,B)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function oS(i,s,a){ze=i,bg(i)}function bg(i,s,a){for(var f=(i.mode&1)!==0;ze!==null;){var g=ze,S=g.child;if(g.tag===22&&f){var w=g.memoizedState!==null||Bl;if(!w){var N=g.alternate,B=N!==null&&N.memoizedState!==null||pn;N=Bl;var ae=pn;if(Bl=w,(pn=B)&&!ae)for(ze=g;ze!==null;)w=ze,B=w.child,w.tag===22&&w.memoizedState!==null?Dg(g):B!==null?(B.return=w,ze=B):Dg(g);for(;S!==null;)ze=S,bg(S),S=S.sibling;ze=g,Bl=N,pn=ae}Pg(i)}else(g.subtreeFlags&8772)!==0&&S!==null?(S.return=g,ze=S):Pg(i)}}function Pg(i){for(;ze!==null;){var s=ze;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:pn||Hl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!pn)if(a===null)f.componentDidMount();else{var g=s.elementType===s.type?a.memoizedProps:pi(s.type,a.memoizedProps);f.componentDidUpdate(g,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var S=s.updateQueue;S!==null&&Lm(s,S,f);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Lm(s,w,a)}break;case 5:var N=s.stateNode;if(a===null&&s.flags&4){a=N;var B=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ae=s.alternate;if(ae!==null){var xe=ae.memoizedState;if(xe!==null){var Me=xe.dehydrated;Me!==null&&Bo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}pn||s.flags&512&&hh(s)}catch(_e){Vt(s,s.return,_e)}}if(s===i){ze=null;break}if(a=s.sibling,a!==null){a.return=s.return,ze=a;break}ze=s.return}}function Lg(i){for(;ze!==null;){var s=ze;if(s===i){ze=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ze=a;break}ze=s.return}}function Dg(i){for(;ze!==null;){var s=ze;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Hl(4,s)}catch(B){Vt(s,a,B)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var g=s.return;try{f.componentDidMount()}catch(B){Vt(s,g,B)}}var S=s.return;try{hh(s)}catch(B){Vt(s,S,B)}break;case 5:var w=s.return;try{hh(s)}catch(B){Vt(s,w,B)}}}catch(B){Vt(s,s.return,B)}if(s===i){ze=null;break}var N=s.sibling;if(N!==null){N.return=s.return,ze=N;break}ze=s.return}}var aS=Math.ceil,Vl=C.ReactCurrentDispatcher,mh=C.ReactCurrentOwner,ri=C.ReactCurrentBatchConfig,xt=0,sn=null,jt=null,un=0,jn=0,qs=Tr(0),Zt=0,ua=null,is=0,Gl=0,gh=0,ca=null,Dn=null,_h=0,Ks=1/0,qi=null,Wl=!1,vh=null,Lr=null,Xl=!1,Dr=null,jl=0,fa=0,xh=null,Yl=-1,$l=0;function Mn(){return(xt&6)!==0?be():Yl!==-1?Yl:Yl=be()}function Nr(i){return(i.mode&1)===0?1:(xt&2)!==0&&un!==0?un&-un:Wy.transition!==null?($l===0&&($l=il()),$l):(i=Tt,i!==0||(i=window.event,i=i===void 0?16:Ip(i.type)),i)}function _i(i,s,a,f){if(50<fa)throw fa=0,xh=null,Error(t(185));Uo(i,a,f),((xt&2)===0||i!==sn)&&(i===sn&&((xt&2)===0&&(Gl|=a),Zt===4&&Ir(i,un)),Nn(i,f),a===1&&xt===0&&(s.mode&1)===0&&(Ks=be()+500,Ml&&Cr()))}function Nn(i,s){var a=i.callbackNode;Rn(i,s);var f=Vn(i,i===sn?un:0);if(f===0)a!==null&&Ae(a),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(a!=null&&Ae(a),s===1)i.tag===0?Gy(Ig.bind(null,i)):xm(Ig.bind(null,i)),zy(function(){(xt&6)===0&&Cr()}),a=null;else{switch(Ap(f)){case 1:a=Qe;break;case 4:a=Xe;break;case 16:a=gt;break;case 536870912:a=Dt;break;default:a=gt}a=Vg(a,Ng.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Ng(i,s){if(Yl=-1,$l=0,(xt&6)!==0)throw Error(t(327));var a=i.callbackNode;if(Zs()&&i.callbackNode!==a)return null;var f=Vn(i,i===sn?un:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=ql(i,f);else{s=f;var g=xt;xt|=2;var S=Fg();(sn!==i||un!==s)&&(qi=null,Ks=be()+500,ss(i,s));do try{cS();break}catch(N){Ug(i,N)}while(!0);Of(),Vl.current=S,xt=g,jt!==null?s=0:(sn=null,un=0,s=Zt)}if(s!==0){if(s===2&&(g=qr(i),g!==0&&(f=g,s=yh(i,g))),s===1)throw a=ua,ss(i,0),Ir(i,f),Nn(i,be()),a;if(s===6)Ir(i,f);else{if(g=i.current.alternate,(f&30)===0&&!lS(g)&&(s=ql(i,f),s===2&&(S=qr(i),S!==0&&(f=S,s=yh(i,S))),s===1))throw a=ua,ss(i,0),Ir(i,f),Nn(i,be()),a;switch(i.finishedWork=g,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:os(i,Dn,qi);break;case 3:if(Ir(i,f),(f&130023424)===f&&(s=_h+500-be(),10<s)){if(Vn(i,0)!==0)break;if(g=i.suspendedLanes,(g&f)!==f){Mn(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=Af(os.bind(null,i,Dn,qi),s);break}os(i,Dn,qi);break;case 4:if(Ir(i,f),(f&4194240)===f)break;for(s=i.eventTimes,g=-1;0<f;){var w=31-wt(f);S=1<<w,w=s[w],w>g&&(g=w),f&=~S}if(f=g,f=be()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*aS(f/1960))-f,10<f){i.timeoutHandle=Af(os.bind(null,i,Dn,qi),f);break}os(i,Dn,qi);break;case 5:os(i,Dn,qi);break;default:throw Error(t(329))}}}return Nn(i,be()),i.callbackNode===a?Ng.bind(null,i):null}function yh(i,s){var a=ca;return i.current.memoizedState.isDehydrated&&(ss(i,s).flags|=256),i=ql(i,s),i!==2&&(s=Dn,Dn=a,s!==null&&Sh(s)),i}function Sh(i){Dn===null?Dn=i:Dn.push.apply(Dn,i)}function lS(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var g=a[f],S=g.getSnapshot;g=g.value;try{if(!hi(S(),g))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ir(i,s){for(s&=~gh,s&=~Gl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-wt(s),f=1<<a;i[a]=-1,s&=~f}}function Ig(i){if((xt&6)!==0)throw Error(t(327));Zs();var s=Vn(i,0);if((s&1)===0)return Nn(i,be()),null;var a=ql(i,s);if(i.tag!==0&&a===2){var f=qr(i);f!==0&&(s=f,a=yh(i,f))}if(a===1)throw a=ua,ss(i,0),Ir(i,s),Nn(i,be()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,os(i,Dn,qi),Nn(i,be()),null}function Mh(i,s){var a=xt;xt|=1;try{return i(s)}finally{xt=a,xt===0&&(Ks=be()+500,Ml&&Cr())}}function rs(i){Dr!==null&&Dr.tag===0&&(xt&6)===0&&Zs();var s=xt;xt|=1;var a=ri.transition,f=Tt;try{if(ri.transition=null,Tt=1,i)return i()}finally{Tt=f,ri.transition=a,xt=s,(xt&6)===0&&Cr()}}function Eh(){jn=qs.current,It(qs)}function ss(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,ky(a)),jt!==null)for(a=jt.return;a!==null;){var f=a;switch(Df(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&yl();break;case 3:js(),It(bn),It(fn),Xf();break;case 5:Gf(f);break;case 4:js();break;case 13:It(Bt);break;case 19:It(Bt);break;case 10:kf(f.type._context);break;case 22:case 23:Eh()}a=a.return}if(sn=i,jt=i=Ur(i.current,null),un=jn=s,Zt=0,ua=null,gh=Gl=is=0,Dn=ca=null,es!==null){for(s=0;s<es.length;s++)if(a=es[s],f=a.interleaved,f!==null){a.interleaved=null;var g=f.next,S=a.pending;if(S!==null){var w=S.next;S.next=g,f.next=w}a.pending=f}es=null}return i}function Ug(i,s){do{var a=jt;try{if(Of(),Dl.current=Fl,Nl){for(var f=Ht.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}Nl=!1}if(ns=0,rn=Kt=Ht=null,ia=!1,ra=0,mh.current=null,a===null||a.return===null){Zt=1,ua=s,jt=null;break}e:{var S=i,w=a.return,N=a,B=s;if(s=un,N.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ae=B,xe=N,Me=xe.tag;if((xe.mode&1)===0&&(Me===0||Me===11||Me===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Fe=og(w);if(Fe!==null){Fe.flags&=-257,ag(Fe,w,N,S,s),Fe.mode&1&&sg(S,ae,s),s=Fe,B=ae;var Be=s.updateQueue;if(Be===null){var Ve=new Set;Ve.add(B),s.updateQueue=Ve}else Be.add(B);break e}else{if((s&1)===0){sg(S,ae,s),wh();break e}B=Error(t(426))}}else if(Ot&&N.mode&1){var Gt=og(w);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),ag(Gt,w,N,S,s),Uf(Ys(B,N));break e}}S=B=Ys(B,N),Zt!==4&&(Zt=2),ca===null?ca=[S]:ca.push(S),S=w;do{switch(S.tag){case 3:S.flags|=65536,s&=-s,S.lanes|=s;var Q=ig(S,B,s);Pm(S,Q);break e;case 1:N=B;var G=S.type,ee=S.stateNode;if((S.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Lr===null||!Lr.has(ee)))){S.flags|=65536,s&=-s,S.lanes|=s;var we=rg(S,N,s);Pm(S,we);break e}}S=S.return}while(S!==null)}kg(a)}catch(We){s=We,jt===a&&a!==null&&(jt=a=a.return);continue}break}while(!0)}function Fg(){var i=Vl.current;return Vl.current=Fl,i===null?Fl:i}function wh(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),sn===null||(is&268435455)===0&&(Gl&268435455)===0||Ir(sn,un)}function ql(i,s){var a=xt;xt|=2;var f=Fg();(sn!==i||un!==s)&&(qi=null,ss(i,s));do try{uS();break}catch(g){Ug(i,g)}while(!0);if(Of(),xt=a,Vl.current=f,jt!==null)throw Error(t(261));return sn=null,un=0,Zt}function uS(){for(;jt!==null;)Og(jt)}function cS(){for(;jt!==null&&!Ue();)Og(jt)}function Og(i){var s=Hg(i.alternate,i,jn);i.memoizedProps=i.pendingProps,s===null?kg(i):jt=s,mh.current=null}function kg(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=nS(a,s,jn),a!==null){jt=a;return}}else{if(a=iS(a,s),a!==null){a.flags&=32767,jt=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Zt=6,jt=null;return}}if(s=s.sibling,s!==null){jt=s;return}jt=s=i}while(s!==null);Zt===0&&(Zt=5)}function os(i,s,a){var f=Tt,g=ri.transition;try{ri.transition=null,Tt=1,fS(i,s,a,f)}finally{ri.transition=g,Tt=f}return null}function fS(i,s,a,f){do Zs();while(Dr!==null);if((xt&6)!==0)throw Error(t(327));a=i.finishedWork;var g=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var S=a.lanes|a.childLanes;if(Xx(i,S),i===sn&&(jt=sn=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Xl||(Xl=!0,Vg(gt,function(){return Zs(),null})),S=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||S){S=ri.transition,ri.transition=null;var w=Tt;Tt=1;var N=xt;xt|=4,mh.current=null,sS(i,a),Rg(a,i),Ly(wf),ol=!!Ef,wf=Ef=null,i.current=a,oS(a),He(),xt=N,Tt=w,ri.transition=S}else i.current=a;if(Xl&&(Xl=!1,Dr=i,jl=g),S=i.pendingLanes,S===0&&(Lr=null),je(a.stateNode),Nn(i,be()),s!==null)for(f=i.onRecoverableError,a=0;a<s.length;a++)g=s[a],f(g.value,{componentStack:g.stack,digest:g.digest});if(Wl)throw Wl=!1,i=vh,vh=null,i;return(jl&1)!==0&&i.tag!==0&&Zs(),S=i.pendingLanes,(S&1)!==0?i===xh?fa++:(fa=0,xh=i):fa=0,Cr(),null}function Zs(){if(Dr!==null){var i=Ap(jl),s=ri.transition,a=Tt;try{if(ri.transition=null,Tt=16>i?16:i,Dr===null)var f=!1;else{if(i=Dr,Dr=null,jl=0,(xt&6)!==0)throw Error(t(331));var g=xt;for(xt|=4,ze=i.current;ze!==null;){var S=ze,w=S.child;if((ze.flags&16)!==0){var N=S.deletions;if(N!==null){for(var B=0;B<N.length;B++){var ae=N[B];for(ze=ae;ze!==null;){var xe=ze;switch(xe.tag){case 0:case 11:case 15:la(8,xe,S)}var Me=xe.child;if(Me!==null)Me.return=xe,ze=Me;else for(;ze!==null;){xe=ze;var _e=xe.sibling,Fe=xe.return;if(Eg(xe),xe===ae){ze=null;break}if(_e!==null){_e.return=Fe,ze=_e;break}ze=Fe}}}var Be=S.alternate;if(Be!==null){var Ve=Be.child;if(Ve!==null){Be.child=null;do{var Gt=Ve.sibling;Ve.sibling=null,Ve=Gt}while(Ve!==null)}}ze=S}}if((S.subtreeFlags&2064)!==0&&w!==null)w.return=S,ze=w;else e:for(;ze!==null;){if(S=ze,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:la(9,S,S.return)}var Q=S.sibling;if(Q!==null){Q.return=S.return,ze=Q;break e}ze=S.return}}var G=i.current;for(ze=G;ze!==null;){w=ze;var ee=w.child;if((w.subtreeFlags&2064)!==0&&ee!==null)ee.return=w,ze=ee;else e:for(w=G;ze!==null;){if(N=ze,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Hl(9,N)}}catch(We){Vt(N,N.return,We)}if(N===w){ze=null;break e}var we=N.sibling;if(we!==null){we.return=N.return,ze=we;break e}ze=N.return}}if(xt=g,Cr(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(tn,i)}catch{}f=!0}return f}finally{Tt=a,ri.transition=s}}return!1}function zg(i,s,a){s=Ys(a,s),s=ig(i,s,1),i=br(i,s,1),s=Mn(),i!==null&&(Uo(i,1,s),Nn(i,s))}function Vt(i,s,a){if(i.tag===3)zg(i,i,a);else for(;s!==null;){if(s.tag===3){zg(s,i,a);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Lr===null||!Lr.has(f))){i=Ys(a,i),i=rg(s,i,1),s=br(s,i,1),i=Mn(),s!==null&&(Uo(s,1,i),Nn(s,i));break}}s=s.return}}function hS(i,s,a){var f=i.pingCache;f!==null&&f.delete(s),s=Mn(),i.pingedLanes|=i.suspendedLanes&a,sn===i&&(un&a)===a&&(Zt===4||Zt===3&&(un&130023424)===un&&500>be()-_h?ss(i,0):gh|=a),Nn(i,s)}function Bg(i,s){s===0&&((i.mode&1)===0?s=1:(s=_r,_r<<=1,(_r&130023424)===0&&(_r=4194304)));var a=Mn();i=ji(i,s),i!==null&&(Uo(i,s,a),Nn(i,a))}function dS(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),Bg(i,a)}function pS(i,s){var a=0;switch(i.tag){case 13:var f=i.stateNode,g=i.memoizedState;g!==null&&(a=g.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Bg(i,a)}var Hg;Hg=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||bn.current)Ln=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return Ln=!1,tS(i,s,a);Ln=(i.flags&131072)!==0}else Ln=!1,Ot&&(s.flags&1048576)!==0&&ym(s,wl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;zl(i,s),i=s.pendingProps;var g=zs(s,fn.current);Xs(s,a),g=$f(null,s,f,i,g,a);var S=qf();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Pn(f)?(S=!0,Sl(s)):S=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Hf(s),g.updater=Ol,s.stateNode=g,g._reactInternals=s,th(s,f,i,a),s=sh(null,s,f,!0,S,a)):(s.tag=0,Ot&&S&&Lf(s),Sn(null,s,g,a),s=s.child),s;case 16:f=s.elementType;e:{switch(zl(i,s),i=s.pendingProps,g=f._init,f=g(f._payload),s.type=f,g=s.tag=gS(f),i=pi(f,i),g){case 0:s=rh(null,s,f,i,a);break e;case 1:s=dg(null,s,f,i,a);break e;case 11:s=lg(null,s,f,i,a);break e;case 14:s=ug(null,s,f,pi(f.type,i),a);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:pi(f,g),rh(i,s,f,g,a);case 1:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:pi(f,g),dg(i,s,f,g,a);case 3:e:{if(pg(s),i===null)throw Error(t(387));f=s.pendingProps,S=s.memoizedState,g=S.element,bm(i,s),Pl(s,f,null,a);var w=s.memoizedState;if(f=w.element,S.isDehydrated)if(S={element:f,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=S,s.memoizedState=S,s.flags&256){g=Ys(Error(t(423)),s),s=mg(i,s,f,a,g);break e}else if(f!==g){g=Ys(Error(t(424)),s),s=mg(i,s,f,a,g);break e}else for(Xn=wr(s.stateNode.containerInfo.firstChild),Wn=s,Ot=!0,di=null,a=Cm(s,null,f,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Vs(),f===g){s=$i(i,s,a);break e}Sn(i,s,f,a)}s=s.child}return s;case 5:return Dm(s),i===null&&If(s),f=s.type,g=s.pendingProps,S=i!==null?i.memoizedProps:null,w=g.children,Tf(f,g)?w=null:S!==null&&Tf(f,S)&&(s.flags|=32),hg(i,s),Sn(i,s,w,a),s.child;case 6:return i===null&&If(s),null;case 13:return gg(i,s,a);case 4:return Vf(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Gs(s,null,f,a):Sn(i,s,f,a),s.child;case 11:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:pi(f,g),lg(i,s,f,g,a);case 7:return Sn(i,s,s.pendingProps,a),s.child;case 8:return Sn(i,s,s.pendingProps.children,a),s.child;case 12:return Sn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(f=s.type._context,g=s.pendingProps,S=s.memoizedProps,w=g.value,Pt(Cl,f._currentValue),f._currentValue=w,S!==null)if(hi(S.value,w)){if(S.children===g.children&&!bn.current){s=$i(i,s,a);break e}}else for(S=s.child,S!==null&&(S.return=s);S!==null;){var N=S.dependencies;if(N!==null){w=S.child;for(var B=N.firstContext;B!==null;){if(B.context===f){if(S.tag===1){B=Yi(-1,a&-a),B.tag=2;var ae=S.updateQueue;if(ae!==null){ae=ae.shared;var xe=ae.pending;xe===null?B.next=B:(B.next=xe.next,xe.next=B),ae.pending=B}}S.lanes|=a,B=S.alternate,B!==null&&(B.lanes|=a),zf(S.return,a,s),N.lanes|=a;break}B=B.next}}else if(S.tag===10)w=S.type===s.type?null:S.child;else if(S.tag===18){if(w=S.return,w===null)throw Error(t(341));w.lanes|=a,N=w.alternate,N!==null&&(N.lanes|=a),zf(w,a,s),w=S.sibling}else w=S.child;if(w!==null)w.return=S;else for(w=S;w!==null;){if(w===s){w=null;break}if(S=w.sibling,S!==null){S.return=w.return,w=S;break}w=w.return}S=w}Sn(i,s,g.children,a),s=s.child}return s;case 9:return g=s.type,f=s.pendingProps.children,Xs(s,a),g=ni(g),f=f(g),s.flags|=1,Sn(i,s,f,a),s.child;case 14:return f=s.type,g=pi(f,s.pendingProps),g=pi(f.type,g),ug(i,s,f,g,a);case 15:return cg(i,s,s.type,s.pendingProps,a);case 17:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:pi(f,g),zl(i,s),s.tag=1,Pn(f)?(i=!0,Sl(s)):i=!1,Xs(s,a),tg(s,f,g),th(s,f,g,a),sh(null,s,f,!0,i,a);case 19:return vg(i,s,a);case 22:return fg(i,s,a)}throw Error(t(156,s.tag))};function Vg(i,s){return Z(i,s)}function mS(i,s,a,f){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(i,s,a,f){return new mS(i,s,a,f)}function Th(i){return i=i.prototype,!(!i||!i.isReactComponent)}function gS(i){if(typeof i=="function")return Th(i)?1:0;if(i!=null){if(i=i.$$typeof,i===W)return 11;if(i===te)return 14}return 2}function Ur(i,s){var a=i.alternate;return a===null?(a=si(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function Kl(i,s,a,f,g,S){var w=2;if(f=i,typeof i=="function")Th(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case I:return as(a.children,g,S,s);case X:w=8,g|=8;break;case L:return i=si(12,a,s,g|2),i.elementType=L,i.lanes=S,i;case V:return i=si(13,a,s,g),i.elementType=V,i.lanes=S,i;case K:return i=si(19,a,s,g),i.elementType=K,i.lanes=S,i;case le:return Zl(a,g,S,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case R:w=10;break e;case U:w=9;break e;case W:w=11;break e;case te:w=14;break e;case J:w=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=si(w,a,s,g),s.elementType=i,s.type=f,s.lanes=S,s}function as(i,s,a,f){return i=si(7,i,f,s),i.lanes=a,i}function Zl(i,s,a,f){return i=si(22,i,f,s),i.elementType=le,i.lanes=a,i.stateNode={isHidden:!1},i}function Ah(i,s,a){return i=si(6,i,null,s),i.lanes=a,i}function Ch(i,s,a){return s=si(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function _S(i,s,a,f,g){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bs(0),this.expirationTimes=bs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bs(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Rh(i,s,a,f,g,S,w,N,B){return i=new _S(i,s,a,N,B),s===1?(s=1,S===!0&&(s|=8)):s=0,S=si(3,null,null,s),i.current=S,S.stateNode=i,S.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(S),i}function vS(i,s,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:f==null?null:""+f,children:i,containerInfo:s,implementation:a}}function Gg(i){if(!i)return Ar;i=i._reactInternals;e:{if(Hi(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Pn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Pn(a))return _m(i,a,s)}return s}function Wg(i,s,a,f,g,S,w,N,B){return i=Rh(a,f,!0,i,g,S,w,N,B),i.context=Gg(null),a=i.current,f=Mn(),g=Nr(a),S=Yi(f,g),S.callback=s??null,br(a,S,g),i.current.lanes=g,Uo(i,g,f),Nn(i,f),i}function Ql(i,s,a,f){var g=s.current,S=Mn(),w=Nr(g);return a=Gg(a),s.context===null?s.context=a:s.pendingContext=a,s=Yi(S,w),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=br(g,s,w),i!==null&&(_i(i,g,w,S),bl(i,g,w)),w}function Jl(i){return i=i.current,i.child?(i.child.tag===5,i.child.stateNode):null}function Xg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function bh(i,s){Xg(i,s),(i=i.alternate)&&Xg(i,s)}function xS(){return null}var jg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Ph(i){this._internalRoot=i}eu.prototype.render=Ph.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Ql(i,s,null,null)},eu.prototype.unmount=Ph.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;rs(function(){Ql(null,i,null,null)}),s[Vi]=null}};function eu(i){this._internalRoot=i}eu.prototype.unstable_scheduleHydration=function(i){if(i){var s=bp();i={blockedOn:null,target:i,priority:s};for(var a=0;a<Sr.length&&s!==0&&s<Sr[a].priority;a++);Sr.splice(a,0,i),a===0&&Dp(i)}};function Lh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function tu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Yg(){}function yS(i,s,a,f,g){if(g){if(typeof f=="function"){var S=f;f=function(){var ae=Jl(w);S.call(ae)}}var w=Wg(s,f,i,0,null,!1,!1,"",Yg);return i._reactRootContainer=w,i[Vi]=w.current,qo(i.nodeType===8?i.parentNode:i),rs(),w}for(;g=i.lastChild;)i.removeChild(g);if(typeof f=="function"){var N=f;f=function(){var ae=Jl(B);N.call(ae)}}var B=Rh(i,0,!1,null,null,!1,!1,"",Yg);return i._reactRootContainer=B,i[Vi]=B.current,qo(i.nodeType===8?i.parentNode:i),rs(function(){Ql(s,B,a,f)}),B}function nu(i,s,a,f,g){var S=a._reactRootContainer;if(S){var w=S;if(typeof g=="function"){var N=g;g=function(){var B=Jl(w);N.call(B)}}Ql(s,w,i,g)}else w=yS(a,s,i,g,f);return Jl(w)}Cp=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=bt(s.pendingLanes);a!==0&&(ef(s,a|1),Nn(s,be()),(xt&6)===0&&(Ks=be()+500,Cr()))}break;case 13:rs(function(){var f=ji(i,1);if(f!==null){var g=Mn();_i(f,i,1,g)}}),bh(i,1)}},tf=function(i){if(i.tag===13){var s=ji(i,134217728);if(s!==null){var a=Mn();_i(s,i,134217728,a)}bh(i,134217728)}},Rp=function(i){if(i.tag===13){var s=Nr(i),a=ji(i,s);if(a!==null){var f=Mn();_i(a,i,s,f)}bh(i,s)}},bp=function(){return Tt},Pp=function(i,s){var a=Tt;try{return Tt=i,s()}finally{Tt=a}},he=function(i,s,a){switch(s){case"input":if(Ut(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var f=a[s];if(f!==i&&f.form===i.form){var g=xl(f);if(!g)throw Error(t(90));z(f),Ut(f,g)}}}break;case"textarea":ve(i,a);break;case"select":s=a.value,s!=null&&b(i,!!a.multiple,s,!1)}},Xt=Mh,vt=rs;var SS={usingClientEntryPoint:!1,Events:[Qo,Os,xl,mt,zt,Mh]},ha={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MS={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ie(i),i===null?null:i.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||xS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{tn=iu.inject(MS),lt=iu}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SS,In.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lh(s))throw Error(t(200));return vS(i,s,null,a)},In.createRoot=function(i,s){if(!Lh(i))throw Error(t(299));var a=!1,f="",g=jg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=Rh(i,1,!1,null,null,a,!1,f,g),i[Vi]=s.current,qo(i.nodeType===8?i.parentNode:i),new Ph(s)},In.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ie(s),i=i===null?null:i.stateNode,i},In.flushSync=function(i){return rs(i)},In.hydrate=function(i,s,a){if(!tu(s))throw Error(t(200));return nu(null,i,s,!0,a)},In.hydrateRoot=function(i,s,a){if(!Lh(i))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,g=!1,S="",w=jg;if(a!=null&&(a.unstable_strictMode===!0&&(g=!0),a.identifierPrefix!==void 0&&(S=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Wg(s,null,i,1,a??null,g,!1,S,w),i[Vi]=s.current,qo(i),f)for(i=0;i<f.length;i++)a=f[i],g=a._getVersion,g=g(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,g]:s.mutableSourceEagerHydrationData.push(a,g);return new eu(s)},In.render=function(i,s,a){if(!tu(s))throw Error(t(200));return nu(null,i,s,!1,a)},In.unmountComponentAtNode=function(i){if(!tu(i))throw Error(t(40));return i._reactRootContainer?(rs(function(){nu(null,null,i,!1,function(){i._reactRootContainer=null,i[Vi]=null})}),!0):!1},In.unstable_batchedUpdates=Mh,In.unstable_renderSubtreeIntoContainer=function(i,s,a,f){if(!tu(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return nu(i,s,a,!1,f)},In.version="18.3.1-next-f1338f8080-20240426",In}var t_;function DS(){if(t_)return Ih.exports;t_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Ih.exports=LS(),Ih.exports}var n_;function NS(){if(n_)return ru;n_=1;var n=DS();return ru.createRoot=n.createRoot,ru.hydrateRoot=n.hydrateRoot,ru}var IS=NS();const Ic="168",xs={ROTATE:0,DOLLY:1,PAN:2},_s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},V0=0,gd=1,G0=2,zd=1,W0=2,Di=3,lr=0,xn=1,Ni=2,or=0,Wr=1,Gu=2,_d=3,vd=4,X0=5,Gr=100,j0=101,Y0=102,$0=103,q0=104,K0=200,Z0=201,Q0=202,J0=203,Wu=204,Xu=205,ev=206,tv=207,nv=208,iv=209,rv=210,sv=211,ov=212,av=213,lv=214,uv=0,cv=1,fv=2,Ua=3,hv=4,dv=5,pv=6,mv=7,Uc=0,gv=1,_v=2,ar=0,vv=1,xv=2,yv=3,Sv=4,Mv=5,Ev=6,wv=7,Bd=300,Es=301,ws=302,ju=303,Yu=304,ja=306,Fa=1e3,ir=1001,$u=1002,An=1003,Tv=1004,Ma=1005,Kn=1006,Ou=1007,rr=1008,Oi=1009,Hd=1010,Vd=1011,Eo=1012,Fc=1013,Xr=1014,Ii=1015,Ro=1016,Oc=1017,kc=1018,Ts=1020,Gd=35902,Wd=1021,Xd=1022,ui=1023,jd=1024,Yd=1025,ys=1026,As=1027,$d=1028,zc=1029,qd=1030,Bc=1031,Hc=1033,Ca=33776,Ra=33777,ba=33778,Pa=33779,qu=35840,Ku=35841,Zu=35842,Qu=35843,Ju=36196,ec=37492,tc=37496,nc=37808,ic=37809,rc=37810,sc=37811,oc=37812,ac=37813,lc=37814,uc=37815,cc=37816,fc=37817,hc=37818,dc=37819,pc=37820,mc=37821,La=36492,gc=36494,_c=36495,Kd=36283,vc=36284,xc=36285,yc=36286,Av=3200,Cv=3201,Vc=0,Rv=1,Ei="",li="srgb",fr="srgb-linear",Gc="display-p3",Ya="display-p3-linear",Oa="linear",Lt="srgb",ka="rec709",za="p3",ps=7680,xd=519,bv=512,Pv=513,Lv=514,Zd=515,Dv=516,Nv=517,Iv=518,Uv=519,yd=35044,Sd="300 es",Ui=2e3,Ba=2001;class Yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let i_=1234567;const Da=Math.PI/180,Ha=180/Math.PI;function bo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function vn(n,e,t){return Math.max(e,Math.min(t,n))}function Qd(n,e){return(n%e+e)%e}function US(n,e,t,r,o){return r+(n-e)*(o-r)/(t-e)}function FS(n,e,t){return n!==e?(t-n)/(e-n):0}function Na(n,e,t){return(1-t)*n+t*e}function OS(n,e,t,r){return Na(n,e,1-Math.exp(-t*r))}function kS(n,e=1){return e-Math.abs(Qd(n,e*2)-e)}function zS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function BS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function HS(n,e){return n+Math.floor(Math.random()*(e-n+1))}function VS(n,e){return n+Math.random()*(e-n)}function GS(n){return n*(.5-Math.random())}function WS(n){n!==void 0&&(i_=n);let e=i_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function XS(n){return n*Da}function jS(n){return n*Ha}function YS(n){return(n&n-1)===0&&n!==0}function $S(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qS(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function KS(n,e,t,r,o){const l=Math.cos,u=Math.sin,c=l(t/2),h=u(t/2),d=l((e+r)/2),p=u((e+r)/2),_=l((e-r)/2),m=u((e-r)/2),y=l((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":n.set(c*p,h*_,h*m,c*d);break;case"YZY":n.set(h*m,c*p,h*_,c*d);break;case"ZXZ":n.set(h*_,h*m,c*p,c*d);break;case"XZX":n.set(c*p,h*E,h*y,c*d);break;case"YXY":n.set(h*y,c*p,h*E,c*d);break;case"ZYZ":n.set(h*E,h*y,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function go(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function En(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Wc={DEG2RAD:Da,RAD2DEG:Ha,generateUUID:bo,clamp:vn,euclideanModulo:Qd,mapLinear:US,inverseLerp:FS,lerp:Na,damp:OS,pingpong:kS,smoothstep:zS,smootherstep:BS,randInt:HS,randFloat:VS,randFloatSpread:GS,seededRandom:WS,degToRad:XS,radToDeg:jS,isPowerOfTwo:YS,ceilPowerOfTwo:$S,floorPowerOfTwo:qS,setQuaternionFromProperEuler:KS,normalize:En,denormalize:go};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,r,o,l,u,c,h,d){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,h,d)}set(e,t,r,o,l,u,c,h,d){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=l,p[5]=h,p[6]=r,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[3],h=r[6],d=r[1],p=r[4],_=r[7],m=r[2],y=r[5],E=r[8],M=o[0],v=o[3],x=o[6],T=o[1],A=o[4],C=o[7],k=o[2],D=o[5],I=o[8];return l[0]=u*M+c*T+h*k,l[3]=u*v+c*A+h*D,l[6]=u*x+c*C+h*I,l[1]=d*M+p*T+_*k,l[4]=d*v+p*A+_*D,l[7]=d*x+p*C+_*I,l[2]=m*M+y*T+E*k,l[5]=m*v+y*A+E*D,l[8]=m*x+y*C+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-r*l*p+r*c*h+o*l*d-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8],_=p*u-c*d,m=c*h-p*l,y=d*l-u*h,E=t*_+r*m+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=_*M,e[1]=(o*d-p*r)*M,e[2]=(c*r-o*u)*M,e[3]=m*M,e[4]=(p*t-o*h)*M,e[5]=(o*l-c*t)*M,e[6]=y*M,e[7]=(r*h-d*t)*M,e[8]=(u*t-r*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,c){const h=Math.cos(l),d=Math.sin(l);return this.set(r*h,r*d,-r*(h*u+d*c)+u+e,-o*d,o*h,-o*(-d*u+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Oh.makeScale(e,t)),this}rotate(e){return this.premultiply(Oh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oh=new ct;function Fv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ov(){const n=Va("canvas");return n.style.display="block",n}const r_={};function Ia(n){n in r_||(r_[n]=!0,console.warn(n))}function ZS(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const s_=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),o_=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pa={[fr]:{transfer:Oa,primaries:ka,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[li]:{transfer:Lt,primaries:ka,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ya]:{transfer:Oa,primaries:za,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(o_),fromReference:n=>n.applyMatrix3(s_)},[Gc]:{transfer:Lt,primaries:za,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(o_),fromReference:n=>n.applyMatrix3(s_).convertLinearToSRGB()}},QS=new Set([fr,Ya]),Et={enabled:!0,_workingColorSpace:fr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!QS.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const r=pa[e].toReference,o=pa[t].fromReference;return o(r(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return pa[n].primaries},getTransfer:function(n){return n===Ei?Oa:pa[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(pa[e].luminanceCoefficients)}};function So(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function kh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qs;class kv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qs===void 0&&(Qs=Va("canvas")),Qs.width=e.width,Qs.height=e.height;const r=Qs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Va("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=So(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(So(t[r]/255)*255):t[r]=So(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JS=0;class Jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?l.push(zh(o[u].image)):l.push(zh(o[u]))}else l=zh(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function zh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eM=0;class yn extends Yr{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,r=ir,o=ir,l=Kn,u=rr,c=ui,h=Oi,d=yn.DEFAULT_ANISOTROPY,p=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=bo(),this.name="",this.source=new Jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fa:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case $u:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fa:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case $u:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Bd;yn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,r=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,d=h[0],p=h[4],_=h[8],m=h[1],y=h[5],E=h[9],M=h[2],v=h[6],x=h[10];if(Math.abs(p-m)<.01&&Math.abs(_-M)<.01&&Math.abs(E-v)<.01){if(Math.abs(p+m)<.1&&Math.abs(_+M)<.1&&Math.abs(E+v)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(d+1)/2,C=(y+1)/2,k=(x+1)/2,D=(p+m)/4,I=(_+M)/4,X=(E+v)/4;return A>C&&A>k?A<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(A),o=D/r,l=I/r):C>k?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=D/o,l=X/o):k<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(k),r=I/l,o=X/l),this.set(r,o,l,t),this}let T=Math.sqrt((v-E)*(v-E)+(_-M)*(_-M)+(m-p)*(m-p));return Math.abs(T)<.001&&(T=1),this.x=(v-E)/T,this.y=(_-M)/T,this.z=(m-p)/T,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zv extends Yr{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new yn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let c=0;c<u;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ur extends zv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ep extends yn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bv extends yn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,c){let h=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];const m=l[u+0],y=l[u+1],E=l[u+2],M=l[u+3];if(c===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(c===1){e[t+0]=m,e[t+1]=y,e[t+2]=E,e[t+3]=M;return}if(_!==M||h!==m||d!==y||p!==E){let v=1-c;const x=h*m+d*y+p*E+_*M,T=x>=0?1:-1,A=1-x*x;if(A>Number.EPSILON){const k=Math.sqrt(A),D=Math.atan2(k,x*T);v=Math.sin(v*D)/k,c=Math.sin(c*D)/k}const C=c*T;if(h=h*v+m*C,d=d*v+y*C,p=p*v+E*C,_=_*v+M*C,v===1-c){const k=1/Math.sqrt(h*h+d*d+p*p+_*_);h*=k,d*=k,p*=k,_*=k}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const c=r[o],h=r[o+1],d=r[o+2],p=r[o+3],_=l[u],m=l[u+1],y=l[u+2],E=l[u+3];return e[t]=c*E+p*_+h*y-d*m,e[t+1]=h*E+p*m+d*_-c*y,e[t+2]=d*E+p*y+c*m-h*_,e[t+3]=p*E-c*_-h*m-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,c=Math.cos,h=Math.sin,d=c(r/2),p=c(o/2),_=c(l/2),m=h(r/2),y=h(o/2),E=h(l/2);switch(u){case"XYZ":this._x=m*p*_+d*y*E,this._y=d*y*_-m*p*E,this._z=d*p*E+m*y*_,this._w=d*p*_-m*y*E;break;case"YXZ":this._x=m*p*_+d*y*E,this._y=d*y*_-m*p*E,this._z=d*p*E-m*y*_,this._w=d*p*_+m*y*E;break;case"ZXY":this._x=m*p*_-d*y*E,this._y=d*y*_+m*p*E,this._z=d*p*E+m*y*_,this._w=d*p*_-m*y*E;break;case"ZYX":this._x=m*p*_-d*y*E,this._y=d*y*_+m*p*E,this._z=d*p*E-m*y*_,this._w=d*p*_+m*y*E;break;case"YZX":this._x=m*p*_+d*y*E,this._y=d*y*_+m*p*E,this._z=d*p*E-m*y*_,this._w=d*p*_-m*y*E;break;case"XZY":this._x=m*p*_-d*y*E,this._y=d*y*_-m*p*E,this._z=d*p*E+m*y*_,this._w=d*p*_+m*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],c=t[5],h=t[9],d=t[2],p=t[6],_=t[10],m=r+c+_;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(p-h)*y,this._y=(l-d)*y,this._z=(u-o)*y}else if(r>c&&r>_){const y=2*Math.sqrt(1+r-c-_);this._w=(p-h)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+d)/y}else if(c>_){const y=2*Math.sqrt(1+c-r-_);this._w=(l-d)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(h+p)/y}else{const y=2*Math.sqrt(1+_-r-c);this._w=(u-o)/y,this._x=(l+d)/y,this._y=(h+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,c=t._x,h=t._y,d=t._z,p=t._w;return this._x=r*p+u*c+o*d-l*h,this._y=o*p+u*h+l*c-r*d,this._z=l*p+u*d+r*h-o*c,this._w=u*p-r*c-o*h-l*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let c=u*e._w+r*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*r+t*this._x,this._y=y*o+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,c),_=Math.sin((1-t)*p)/d,m=Math.sin(t*p)/d;return this._w=u*_+this._w*m,this._x=r*_+this._x*m,this._y=o*_+this._y*m,this._z=l*_+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(a_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(a_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,c=e.z,h=e.w,d=2*(u*o-c*r),p=2*(c*t-l*o),_=2*(l*r-u*t);return this.x=t+h*d+u*_-c*p,this.y=r+h*p+c*d-l*_,this.z=o+h*_+l*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,c=t.y,h=t.z;return this.x=o*h-l*c,this.y=l*u-r*h,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bh.copy(this).projectOnVector(e),this.sub(Bh)}reflect(e){return this.sub(Bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bh=new q,a_=new jr;class Po{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,vi):vi.fromBufferAttribute(l,u),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),su.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),su.copy(r.boundingBox)),su.applyMatrix4(e.matrixWorld),this.union(su)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),ou.subVectors(this.max,ma),Js.subVectors(e.a,ma),eo.subVectors(e.b,ma),to.subVectors(e.c,ma),Or.subVectors(eo,Js),kr.subVectors(to,eo),ls.subVectors(Js,to);let t=[0,-Or.z,Or.y,0,-kr.z,kr.y,0,-ls.z,ls.y,Or.z,0,-Or.x,kr.z,0,-kr.x,ls.z,0,-ls.x,-Or.y,Or.x,0,-kr.y,kr.x,0,-ls.y,ls.x,0];return!Hh(t,Js,eo,to,ou)||(t=[1,0,0,0,1,0,0,0,1],!Hh(t,Js,eo,to,ou))?!1:(au.crossVectors(Or,kr),t=[au.x,au.y,au.z],Hh(t,Js,eo,to,ou))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new q,new q,new q,new q,new q,new q,new q,new q],vi=new q,su=new Po,Js=new q,eo=new q,to=new q,Or=new q,kr=new q,ls=new q,ma=new q,ou=new q,au=new q,us=new q;function Hh(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){us.fromArray(n,l);const c=o.x*Math.abs(us.x)+o.y*Math.abs(us.y)+o.z*Math.abs(us.z),h=e.dot(us),d=t.dot(us),p=r.dot(us);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>c)return!1}return!0}const tM=new Po,ga=new q,Vh=new q;class Lo{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):tM.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ga,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Vh)),this.expandByPoint(ga.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new q,Gh=new q,lu=new q,zr=new q,Wh=new q,uu=new q,Xh=new q;class $a{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Gh.copy(e).add(t).multiplyScalar(.5),lu.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(Gh);const l=e.distanceTo(t)*.5,u=-this.direction.dot(lu),c=zr.dot(this.direction),h=-zr.dot(lu),d=zr.lengthSq(),p=Math.abs(1-u*u);let _,m,y,E;if(p>0)if(_=u*h-c,m=u*c-h,E=l*p,_>=0)if(m>=-E)if(m<=E){const M=1/p;_*=M,m*=M,y=_*(_+u*m+2*c)+m*(u*_+m+2*h)+d}else m=l,_=Math.max(0,-(u*m+c)),y=-_*_+m*(m+2*h)+d;else m=-l,_=Math.max(0,-(u*m+c)),y=-_*_+m*(m+2*h)+d;else m<=-E?(_=Math.max(0,-(-u*l+c)),m=_>0?-l:Math.min(Math.max(-l,-h),l),y=-_*_+m*(m+2*h)+d):m<=E?(_=0,m=Math.min(Math.max(-l,-h),l),y=m*(m+2*h)+d):(_=Math.max(0,-(u*l+c)),m=_>0?l:Math.min(Math.max(-l,-h),l),y=-_*_+m*(m+2*h)+d);else m=u>0?-l:l,_=Math.max(0,-(u*m+c)),y=-_*_+m*(m+2*h)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Gh).addScaledVector(lu,m),y}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),o=Zi.dot(Zi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),c=r-u,h=r+u;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,c,h;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,m=this.origin;return d>=0?(r=(e.min.x-m.x)*d,o=(e.max.x-m.x)*d):(r=(e.max.x-m.x)*d,o=(e.min.x-m.x)*d),p>=0?(l=(e.min.y-m.y)*p,u=(e.max.y-m.y)*p):(l=(e.max.y-m.y)*p,u=(e.min.y-m.y)*p),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(c=(e.min.z-m.z)*_,h=(e.max.z-m.z)*_):(c=(e.max.z-m.z)*_,h=(e.min.z-m.z)*_),r>h||c>o)||((c>r||r!==r)&&(r=c),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,r,o,l){Wh.subVectors(t,e),uu.subVectors(r,e),Xh.crossVectors(Wh,uu);let u=this.direction.dot(Xh),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;zr.subVectors(this.origin,e);const h=c*this.direction.dot(uu.crossVectors(zr,uu));if(h<0)return null;const d=c*this.direction.dot(Wh.cross(zr));if(d<0||h+d>u)return null;const p=-c*zr.dot(Xh);return p<0?null:this.at(p/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,r,o,l,u,c,h,d,p,_,m,y,E,M,v){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,h,d,p,_,m,y,E,M,v)}set(e,t,r,o,l,u,c,h,d,p,_,m,y,E,M,v){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=c,x[13]=h,x[2]=d,x[6]=p,x[10]=_,x[14]=m,x[3]=y,x[7]=E,x[11]=M,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/no.setFromMatrixColumn(e,0).length(),l=1/no.setFromMatrixColumn(e,1).length(),u=1/no.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),c=Math.sin(r),h=Math.cos(o),d=Math.sin(o),p=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const m=u*p,y=u*_,E=c*p,M=c*_;t[0]=h*p,t[4]=-h*_,t[8]=d,t[1]=y+E*d,t[5]=m-M*d,t[9]=-c*h,t[2]=M-m*d,t[6]=E+y*d,t[10]=u*h}else if(e.order==="YXZ"){const m=h*p,y=h*_,E=d*p,M=d*_;t[0]=m+M*c,t[4]=E*c-y,t[8]=u*d,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=y*c-E,t[6]=M+m*c,t[10]=u*h}else if(e.order==="ZXY"){const m=h*p,y=h*_,E=d*p,M=d*_;t[0]=m-M*c,t[4]=-u*_,t[8]=E+y*c,t[1]=y+E*c,t[5]=u*p,t[9]=M-m*c,t[2]=-u*d,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const m=u*p,y=u*_,E=c*p,M=c*_;t[0]=h*p,t[4]=E*d-y,t[8]=m*d+M,t[1]=h*_,t[5]=M*d+m,t[9]=y*d-E,t[2]=-d,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const m=u*h,y=u*d,E=c*h,M=c*d;t[0]=h*p,t[4]=M-m*_,t[8]=E*_+y,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=y*_+E,t[10]=m-M*_}else if(e.order==="XZY"){const m=u*h,y=u*d,E=c*h,M=c*d;t[0]=h*p,t[4]=-_,t[8]=d*p,t[1]=m*_+M,t[5]=u*p,t[9]=y*_-E,t[2]=E*_-y,t[6]=c*p,t[10]=M*_+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nM,e,iM)}lookAt(e,t,r){const o=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Br.crossVectors(r,Yn),Br.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Br.crossVectors(r,Yn)),Br.normalize(),cu.crossVectors(Yn,Br),o[0]=Br.x,o[4]=cu.x,o[8]=Yn.x,o[1]=Br.y,o[5]=cu.y,o[9]=Yn.y,o[2]=Br.z,o[6]=cu.z,o[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[4],h=r[8],d=r[12],p=r[1],_=r[5],m=r[9],y=r[13],E=r[2],M=r[6],v=r[10],x=r[14],T=r[3],A=r[7],C=r[11],k=r[15],D=o[0],I=o[4],X=o[8],L=o[12],R=o[1],U=o[5],W=o[9],V=o[13],K=o[2],te=o[6],J=o[10],le=o[14],H=o[3],ce=o[7],ne=o[11],O=o[15];return l[0]=u*D+c*R+h*K+d*H,l[4]=u*I+c*U+h*te+d*ce,l[8]=u*X+c*W+h*J+d*ne,l[12]=u*L+c*V+h*le+d*O,l[1]=p*D+_*R+m*K+y*H,l[5]=p*I+_*U+m*te+y*ce,l[9]=p*X+_*W+m*J+y*ne,l[13]=p*L+_*V+m*le+y*O,l[2]=E*D+M*R+v*K+x*H,l[6]=E*I+M*U+v*te+x*ce,l[10]=E*X+M*W+v*J+x*ne,l[14]=E*L+M*V+v*le+x*O,l[3]=T*D+A*R+C*K+k*H,l[7]=T*I+A*U+C*te+k*ce,l[11]=T*X+A*W+C*J+k*ne,l[15]=T*L+A*V+C*le+k*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],c=e[5],h=e[9],d=e[13],p=e[2],_=e[6],m=e[10],y=e[14],E=e[3],M=e[7],v=e[11],x=e[15];return E*(+l*h*_-o*d*_-l*c*m+r*d*m+o*c*y-r*h*y)+M*(+t*h*y-t*d*m+l*u*m-o*u*y+o*d*p-l*h*p)+v*(+t*d*_-t*c*y-l*u*_+r*u*y+l*c*p-r*d*p)+x*(-o*c*p-t*h*_+t*c*m+o*u*_-r*u*m+r*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8],_=e[9],m=e[10],y=e[11],E=e[12],M=e[13],v=e[14],x=e[15],T=_*v*d-M*m*d+M*h*y-c*v*y-_*h*x+c*m*x,A=E*m*d-p*v*d-E*h*y+u*v*y+p*h*x-u*m*x,C=p*M*d-E*_*d+E*c*y-u*M*y-p*c*x+u*_*x,k=E*_*h-p*M*h-E*c*m+u*M*m+p*c*v-u*_*v,D=t*T+r*A+o*C+l*k;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=T*I,e[1]=(M*m*l-_*v*l-M*o*y+r*v*y+_*o*x-r*m*x)*I,e[2]=(c*v*l-M*h*l+M*o*d-r*v*d-c*o*x+r*h*x)*I,e[3]=(_*h*l-c*m*l-_*o*d+r*m*d+c*o*y-r*h*y)*I,e[4]=A*I,e[5]=(p*v*l-E*m*l+E*o*y-t*v*y-p*o*x+t*m*x)*I,e[6]=(E*h*l-u*v*l-E*o*d+t*v*d+u*o*x-t*h*x)*I,e[7]=(u*m*l-p*h*l+p*o*d-t*m*d-u*o*y+t*h*y)*I,e[8]=C*I,e[9]=(E*_*l-p*M*l-E*r*y+t*M*y+p*r*x-t*_*x)*I,e[10]=(u*M*l-E*c*l+E*r*d-t*M*d-u*r*x+t*c*x)*I,e[11]=(p*c*l-u*_*l-p*r*d+t*_*d+u*r*y-t*c*y)*I,e[12]=k*I,e[13]=(p*M*o-E*_*o+E*r*m-t*M*m-p*r*v+t*_*v)*I,e[14]=(E*c*o-u*M*o-E*r*h+t*M*h+u*r*v-t*c*v)*I,e[15]=(u*_*o-p*c*o+p*r*h-t*_*h-u*r*m+t*c*m)*I,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,c=e.y,h=e.z,d=l*u,p=l*c;return this.set(d*u+r,d*c-o*h,d*h+o*c,0,d*c+o*h,p*c+r,p*h-o*u,0,d*h-o*c,p*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,c=t._z,h=t._w,d=l+l,p=u+u,_=c+c,m=l*d,y=l*p,E=l*_,M=u*p,v=u*_,x=c*_,T=h*d,A=h*p,C=h*_,k=r.x,D=r.y,I=r.z;return o[0]=(1-(M+x))*k,o[1]=(y+C)*k,o[2]=(E-A)*k,o[3]=0,o[4]=(y-C)*D,o[5]=(1-(m+x))*D,o[6]=(v+T)*D,o[7]=0,o[8]=(E+A)*I,o[9]=(v-T)*I,o[10]=(1-(m+M))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=no.set(o[0],o[1],o[2]).length();const u=no.set(o[4],o[5],o[6]).length(),c=no.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],xi.copy(this);const d=1/l,p=1/u,_=1/c;return xi.elements[0]*=d,xi.elements[1]*=d,xi.elements[2]*=d,xi.elements[4]*=p,xi.elements[5]*=p,xi.elements[6]*=p,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,t.setFromRotationMatrix(xi),r.x=l,r.y=u,r.z=c,this}makePerspective(e,t,r,o,l,u,c=Ui){const h=this.elements,d=2*l/(t-e),p=2*l/(r-o),_=(t+e)/(t-e),m=(r+o)/(r-o);let y,E;if(c===Ui)y=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(c===Ba)y=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=p,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,c=Ui){const h=this.elements,d=1/(t-e),p=1/(r-o),_=1/(u-l),m=(t+e)*d,y=(r+o)*p;let E,M;if(c===Ui)E=(u+l)*_,M=-2*_;else if(c===Ba)E=l*_,M=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-m,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=M,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const no=new q,xi=new kt,nM=new q(0,0,0),iM=new q(1,1,1),Br=new q,cu=new q,Yn=new q,l_=new kt,u_=new jr;class ci{constructor(e=0,t=0,r=0,o=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],c=o[8],h=o[1],d=o[5],p=o[9],_=o[2],m=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(vn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(vn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(vn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return l_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(l_,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return u_.setFromEuler(this),this.setFromQuaternion(u_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class tp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rM=0;const c_=new q,io=new jr,Qi=new kt,fu=new q,_a=new q,sM=new q,oM=new jr,f_=new q(1,0,0),h_=new q(0,1,0),d_=new q(0,0,1),p_={type:"added"},aM={type:"removed"},ro={type:"childadded",child:null},jh={type:"childremoved",child:null};class qt extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new q,t=new ci,r=new jr,o=new q(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new kt},normalMatrix:{value:new ct}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.multiply(io),this}rotateOnWorldAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.premultiply(io),this}rotateX(e){return this.rotateOnAxis(f_,e)}rotateY(e){return this.rotateOnAxis(h_,e)}rotateZ(e){return this.rotateOnAxis(d_,e)}translateOnAxis(e,t){return c_.copy(e).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(f_,e)}translateY(e){return this.translateOnAxis(h_,e)}translateZ(e){return this.translateOnAxis(d_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?fu.copy(e):fu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(_a,fu,this.up):Qi.lookAt(fu,_a,this.up),this.quaternion.setFromRotationMatrix(Qi),o&&(Qi.extractRotation(o.matrixWorld),io.setFromRotationMatrix(Qi),this.quaternion.premultiply(io.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(p_),ro.child=e,this.dispatchEvent(ro),ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aM),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(p_),ro.child=e,this.dispatchEvent(ro),ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,sM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,oM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const _=h[d];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(l(e.materials,this.material[h]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];o.animations.push(l(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),d=u(e.textures),p=u(e.images),_=u(e.shapes),m=u(e.skeletons),y=u(e.animations),E=u(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),d.length>0&&(r.textures=d),p.length>0&&(r.images=p),_.length>0&&(r.shapes=_),m.length>0&&(r.skeletons=m),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}qt.DEFAULT_UP=new q(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new q,Ji=new q,Yh=new q,er=new q,so=new q,oo=new q,m_=new q,$h=new q,qh=new q,Kh=new q;class wi{constructor(e=new q,t=new q,r=new q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),yi.subVectors(e,t),o.cross(yi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){yi.subVectors(o,t),Ji.subVectors(r,t),Yh.subVectors(e,t);const u=yi.dot(yi),c=yi.dot(Ji),h=yi.dot(Yh),d=Ji.dot(Ji),p=Ji.dot(Yh),_=u*d-c*c;if(_===0)return l.set(0,0,0),null;const m=1/_,y=(d*h-c*p)*m,E=(u*p-c*h)*m;return l.set(1-y-E,E,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,r,o,l,u,c,h){return this.getBarycoord(e,t,r,o,er)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,er.x),h.addScaledVector(u,er.y),h.addScaledVector(c,er.z),h)}static isFrontFacing(e,t,r,o){return yi.subVectors(r,t),Ji.subVectors(e,t),yi.cross(Ji).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),yi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return wi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,c;so.subVectors(o,r),oo.subVectors(l,r),$h.subVectors(e,r);const h=so.dot($h),d=oo.dot($h);if(h<=0&&d<=0)return t.copy(r);qh.subVectors(e,o);const p=so.dot(qh),_=oo.dot(qh);if(p>=0&&_<=p)return t.copy(o);const m=h*_-p*d;if(m<=0&&h>=0&&p<=0)return u=h/(h-p),t.copy(r).addScaledVector(so,u);Kh.subVectors(e,l);const y=so.dot(Kh),E=oo.dot(Kh);if(E>=0&&y<=E)return t.copy(l);const M=y*d-h*E;if(M<=0&&d>=0&&E<=0)return c=d/(d-E),t.copy(r).addScaledVector(oo,c);const v=p*E-y*_;if(v<=0&&_-p>=0&&y-E>=0)return m_.subVectors(l,o),c=(_-p)/(_-p+(y-E)),t.copy(o).addScaledVector(m_,c);const x=1/(v+M+m);return u=M*x,c=m*x,t.copy(r).addScaledVector(so,u).addScaledVector(oo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},hu={h:0,s:0,l:0};function Zh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let Ge=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=r,Et.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Et.workingColorSpace){if(e=Qd(e,1),t=vn(t,0,1),r=vn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Zh(u,l,e+1/3),this.g=Zh(u,l,e),this.b=Zh(u,l,e-1/3)}return Et.toWorkingColorSpace(this,o),this}setStyle(e,t=li){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){const r=Hv[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}copyLinearToSRGB(e){return this.r=kh(e.r),this.g=kh(e.g),this.b=kh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Et.fromWorkingColorSpace(gn.copy(this),e),Math.round(vn(gn.r*255,0,255))*65536+Math.round(vn(gn.g*255,0,255))*256+Math.round(vn(gn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(gn.copy(this),t);const r=gn.r,o=gn.g,l=gn.b,u=Math.max(r,o,l),c=Math.min(r,o,l);let h,d;const p=(c+u)/2;if(c===u)h=0,d=0;else{const _=u-c;switch(d=p<=.5?_/(u+c):_/(2-u-c),u){case r:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-r)/_+2;break;case l:h=(r-o)/_+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=li){Et.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,r=gn.g,o=gn.b;return e!==li?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(hu);const r=Na(Hr.h,hu.h,t),o=Na(Hr.s,hu.s,t),l=Na(Hr.l,hu.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const gn=new Ge;Ge.NAMES=Hv;let lM=0;class hr extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=Wr,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=Xu,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(r.blending=this.blending),this.side!==lr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wu&&(r.blendSrc=this.blendSrc),this.blendDst!==Xu&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xd&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const c in l){const h=l[c];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class np extends hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new q,du=new it;class Wt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=yd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ia("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)du.fromBufferAttribute(this,t),du.applyMatrix3(e),this.setXY(t,du.x,du.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=go(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=En(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=go(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=go(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=go(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),r=En(r,this.array),o=En(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),r=En(r,this.array),o=En(o,this.array),l=En(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yd&&(e.usage=this.usage),e}}class ip extends Wt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class rp extends Wt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class kn extends Wt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let uM=0;const oi=new kt,Qh=new qt,ao=new q,$n=new Po,va=new Po,an=new q;class cn extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fv(e)?rp:ip)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,r){return oi.makeTranslation(e,t,r),this.applyMatrix4(oi),this}scale(e,t,r){return oi.makeScale(e,t,r),this.applyMatrix4(oi),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const t=[];for(let r=0,o=e.length;r<o;r++){const l=e[r];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new kn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];$n.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];va.setFromBufferAttribute(c),this.morphTargetsRelative?(an.addVectors($n.min,va.min),$n.expandByPoint(an),an.addVectors($n.max,va.max),$n.expandByPoint(an)):($n.expandByPoint(va.min),$n.expandByPoint(va.max))}$n.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)an.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(an));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],h=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)an.fromBufferAttribute(c,d),h&&(ao.fromBufferAttribute(e,d),an.add(ao)),o=Math.max(o,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],h=[];for(let X=0;X<r.count;X++)c[X]=new q,h[X]=new q;const d=new q,p=new q,_=new q,m=new it,y=new it,E=new it,M=new q,v=new q;function x(X,L,R){d.fromBufferAttribute(r,X),p.fromBufferAttribute(r,L),_.fromBufferAttribute(r,R),m.fromBufferAttribute(l,X),y.fromBufferAttribute(l,L),E.fromBufferAttribute(l,R),p.sub(d),_.sub(d),y.sub(m),E.sub(m);const U=1/(y.x*E.y-E.x*y.y);isFinite(U)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(U),v.copy(_).multiplyScalar(y.x).addScaledVector(p,-E.x).multiplyScalar(U),c[X].add(M),c[L].add(M),c[R].add(M),h[X].add(v),h[L].add(v),h[R].add(v))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let X=0,L=T.length;X<L;++X){const R=T[X],U=R.start,W=R.count;for(let V=U,K=U+W;V<K;V+=3)x(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const A=new q,C=new q,k=new q,D=new q;function I(X){k.fromBufferAttribute(o,X),D.copy(k);const L=c[X];A.copy(L),A.sub(k.multiplyScalar(k.dot(L))).normalize(),C.crossVectors(D,L);const U=C.dot(h[X])<0?-1:1;u.setXYZW(X,A.x,A.y,A.z,U)}for(let X=0,L=T.length;X<L;++X){const R=T[X],U=R.start,W=R.count;for(let V=U,K=U+W;V<K;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,y=r.count;m<y;m++)r.setXYZ(m,0,0,0);const o=new q,l=new q,u=new q,c=new q,h=new q,d=new q,p=new q,_=new q;if(e)for(let m=0,y=e.count;m<y;m+=3){const E=e.getX(m+0),M=e.getX(m+1),v=e.getX(m+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),u.fromBufferAttribute(t,v),p.subVectors(u,l),_.subVectors(o,l),p.cross(_),c.fromBufferAttribute(r,E),h.fromBufferAttribute(r,M),d.fromBufferAttribute(r,v),c.add(p),h.add(p),d.add(p),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(v,d.x,d.y,d.z)}else for(let m=0,y=t.count;m<y;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),u.fromBufferAttribute(t,m+2),p.subVectors(u,l),_.subVectors(o,l),p.cross(_),r.setXYZ(m+0,p.x,p.y,p.z),r.setXYZ(m+1,p.x,p.y,p.z),r.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(c,h){const d=c.array,p=c.itemSize,_=c.normalized,m=new d.constructor(h.length*p);let y=0,E=0;for(let M=0,v=h.length;M<v;M++){c.isInterleavedBufferAttribute?y=h[M]*c.data.stride+c.offset:y=h[M]*p;for(let x=0;x<p;x++)m[E++]=d[y++]}return new Wt(m,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,r=this.index.array,o=this.attributes;for(const c in o){const h=o[c],d=e(h,r);t.setAttribute(c,d)}const l=this.morphAttributes;for(const c in l){const h=[],d=l[c];for(let p=0,_=d.length;p<_;p++){const m=d[p],y=e(m,r);h.push(y)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const d=r[h];e.data.attributes[h]=d.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let _=0,m=d.length;_<m;_++){const y=d[_];p.push(y.toJSON(e.data))}p.length>0&&(o[h]=p,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const d in o){const p=o[d];this.setAttribute(d,p.clone(t))}const l=e.morphAttributes;for(const d in l){const p=[],_=l[d];for(let m=0,y=_.length;m<y;m++)p.push(_[m].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const g_=new kt,cs=new $a,pu=new Lo,__=new q,lo=new q,uo=new q,co=new q,Jh=new q,mu=new q,gu=new it,_u=new it,vu=new it,v_=new q,x_=new q,y_=new q,xu=new q,yu=new q;class Zn extends qt{constructor(e=new cn,t=new np){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){mu.set(0,0,0);for(let h=0,d=l.length;h<d;h++){const p=c[h],_=l[h];p!==0&&(Jh.fromBufferAttribute(_,e),u?mu.addScaledVector(Jh,p):mu.addScaledVector(Jh.sub(t),p))}t.add(mu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pu.copy(r.boundingSphere),pu.applyMatrix4(l),cs.copy(e.ray).recast(e.near),!(pu.containsPoint(cs.origin)===!1&&(cs.intersectSphere(pu,__)===null||cs.origin.distanceToSquared(__)>(e.far-e.near)**2))&&(g_.copy(l).invert(),cs.copy(e.ray).applyMatrix4(g_),!(r.boundingBox!==null&&cs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,c=l.index,h=l.attributes.position,d=l.attributes.uv,p=l.attributes.uv1,_=l.attributes.normal,m=l.groups,y=l.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=m.length;E<M;E++){const v=m[E],x=u[v.materialIndex],T=Math.max(v.start,y.start),A=Math.min(c.count,Math.min(v.start+v.count,y.start+y.count));for(let C=T,k=A;C<k;C+=3){const D=c.getX(C),I=c.getX(C+1),X=c.getX(C+2);o=Su(this,x,e,r,d,p,_,D,I,X),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),M=Math.min(c.count,y.start+y.count);for(let v=E,x=M;v<x;v+=3){const T=c.getX(v),A=c.getX(v+1),C=c.getX(v+2);o=Su(this,u,e,r,d,p,_,T,A,C),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,M=m.length;E<M;E++){const v=m[E],x=u[v.materialIndex],T=Math.max(v.start,y.start),A=Math.min(h.count,Math.min(v.start+v.count,y.start+y.count));for(let C=T,k=A;C<k;C+=3){const D=C,I=C+1,X=C+2;o=Su(this,x,e,r,d,p,_,D,I,X),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),M=Math.min(h.count,y.start+y.count);for(let v=E,x=M;v<x;v+=3){const T=v,A=v+1,C=v+2;o=Su(this,u,e,r,d,p,_,T,A,C),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function cM(n,e,t,r,o,l,u,c){let h;if(e.side===xn?h=r.intersectTriangle(u,l,o,!0,c):h=r.intersectTriangle(o,l,u,e.side===lr,c),h===null)return null;yu.copy(c),yu.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(yu);return d<t.near||d>t.far?null:{distance:d,point:yu.clone(),object:n}}function Su(n,e,t,r,o,l,u,c,h,d){n.getVertexPosition(c,lo),n.getVertexPosition(h,uo),n.getVertexPosition(d,co);const p=cM(n,e,t,r,lo,uo,co,xu);if(p){o&&(gu.fromBufferAttribute(o,c),_u.fromBufferAttribute(o,h),vu.fromBufferAttribute(o,d),p.uv=wi.getInterpolation(xu,lo,uo,co,gu,_u,vu,new it)),l&&(gu.fromBufferAttribute(l,c),_u.fromBufferAttribute(l,h),vu.fromBufferAttribute(l,d),p.uv1=wi.getInterpolation(xu,lo,uo,co,gu,_u,vu,new it)),u&&(v_.fromBufferAttribute(u,c),x_.fromBufferAttribute(u,h),y_.fromBufferAttribute(u,d),p.normal=wi.getInterpolation(xu,lo,uo,co,v_,x_,y_,new q),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:h,c:d,normal:new q,materialIndex:0};wi.getNormal(lo,uo,co,_.normal),p.face=_}return p}class Do extends cn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const c=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],d=[],p=[],_=[];let m=0,y=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new kn(d,3)),this.setAttribute("normal",new kn(p,3)),this.setAttribute("uv",new kn(_,2));function E(M,v,x,T,A,C,k,D,I,X,L){const R=C/I,U=k/X,W=C/2,V=k/2,K=D/2,te=I+1,J=X+1;let le=0,H=0;const ce=new q;for(let ne=0;ne<J;ne++){const O=ne*U-V;for(let re=0;re<te;re++){const ge=re*R-W;ce[M]=ge*T,ce[v]=O*A,ce[x]=K,d.push(ce.x,ce.y,ce.z),ce[M]=0,ce[v]=0,ce[x]=D>0?1:-1,p.push(ce.x,ce.y,ce.z),_.push(re/I),_.push(1-ne/X),le+=1}}for(let ne=0;ne<X;ne++)for(let O=0;O<I;O++){const re=m+O+te*ne,ge=m+O+te*(ne+1),$=m+(O+1)+te*(ne+1),fe=m+(O+1)+te*ne;h.push(re,ge,fe),h.push(ge,$,fe),H+=6}c.addGroup(y,H,L),y+=H,m+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function wn(n){const e={};for(let t=0;t<n.length;t++){const r=wo(n[t]);for(const o in r)e[o]=r[o]}return e}function fM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Gv={clone:wo,merge:wn};var hM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hM,this.fragmentShader=dM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=fM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class sp extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vr=new q,S_=new it,M_=new it;class qn extends sp{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,S_,M_),t.subVectors(M_,S_)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Da*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,d=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/d,o*=u.width/h,r*=u.height/d}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fo=-90,ho=1;class Wv extends qt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new qn(fo,ho,e,t);o.layers=this.layers,this.add(o);const l=new qn(fo,ho,e,t);l.layers=this.layers,this.add(l);const u=new qn(fo,ho,e,t);u.layers=this.layers,this.add(u);const c=new qn(fo,ho,e,t);c.layers=this.layers,this.add(c);const h=new qn(fo,ho,e,t);h.layers=this.layers,this.add(h);const d=new qn(fo,ho,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,c,h]=t;for(const d of t)this.remove(d);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ba)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,h,d,p]=this.children,_=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,c),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,d),r.texture.generateMipmaps=M,e.setRenderTarget(r,5,o),e.render(t,p),e.setRenderTarget(_,m,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class op extends yn{constructor(e,t,r,o,l,u,c,h,d,p){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,r,o,l,u,c,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xv extends ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new op(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Do(5,5,5),l=new Jn({name:"CubemapFromEquirect",uniforms:wo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:xn,blending:or});l.uniforms.tEquirect.value=t;const u=new Zn(o,l),c=t.minFilter;return t.minFilter===rr&&(t.minFilter=Kn),new Wv(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const ed=new q,pM=new q,mM=new ct;class nr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ed.subVectors(r,t).cross(pM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ed),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||mM.getNormalMatrix(e),o=this.coplanarPoint(ed).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new Lo,Mu=new q;class Xc{constructor(e=new nr,t=new nr,r=new nr,o=new nr,l=new nr,u=new nr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ui){const r=this.planes,o=e.elements,l=o[0],u=o[1],c=o[2],h=o[3],d=o[4],p=o[5],_=o[6],m=o[7],y=o[8],E=o[9],M=o[10],v=o[11],x=o[12],T=o[13],A=o[14],C=o[15];if(r[0].setComponents(h-l,m-d,v-y,C-x).normalize(),r[1].setComponents(h+l,m+d,v+y,C+x).normalize(),r[2].setComponents(h+u,m+p,v+E,C+T).normalize(),r[3].setComponents(h-u,m-p,v-E,C-T).normalize(),r[4].setComponents(h-c,m-_,v-M,C-A).normalize(),t===Ui)r[5].setComponents(h+c,m+_,v+M,C+A).normalize();else if(t===Ba)r[5].setComponents(c,_,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Mu.x=o.normal.x>0?e.max.x:e.min.x,Mu.y=o.normal.y>0?e.max.y:e.min.y,Mu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Mu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jv(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function gM(n){const e=new WeakMap;function t(c,h){const d=c.array,p=c.usage,_=d.byteLength,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,d,p),c.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:_}}function r(c,h,d){const p=h.array,_=h._updateRange,m=h.updateRanges;if(n.bindBuffer(d,c),_.count===-1&&m.length===0&&n.bufferSubData(d,0,p),m.length!==0){for(let y=0,E=m.length;y<E;y++){const M=m[y];n.bufferSubData(d,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}h.clearUpdateRanges()}_.count!==-1&&(n.bufferSubData(d,_.offset*p.BYTES_PER_ELEMENT,p,_.offset,_.count),_.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(n.deleteBuffer(h.buffer),e.delete(c))}function u(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:l,update:u}}class qa extends cn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,c=Math.floor(r),h=Math.floor(o),d=c+1,p=h+1,_=e/c,m=t/h,y=[],E=[],M=[],v=[];for(let x=0;x<p;x++){const T=x*m-u;for(let A=0;A<d;A++){const C=A*_-l;E.push(C,-T,0),M.push(0,0,1),v.push(A/c),v.push(1-x/h)}}for(let x=0;x<h;x++)for(let T=0;T<c;T++){const A=T+d*x,C=T+d*(x+1),k=T+1+d*(x+1),D=T+1+d*x;y.push(A,C,D),y.push(C,k,D)}this.setIndex(y),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(M,3)),this.setAttribute("uv",new kn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.widthSegments,e.heightSegments)}}var _M=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vM=`#ifdef USE_ALPHAHASH
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
#endif`,xM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EM=`#ifdef USE_AOMAP
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
#endif`,wM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TM=`#ifdef USE_BATCHING
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
#endif`,AM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PM=`#ifdef USE_IRIDESCENCE
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
#endif`,LM=`#ifdef USE_BUMPMAP
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
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,BM=`#define PI 3.141592653589793
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
} // validated`,HM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VM=`vec3 transformedNormal = objectNormal;
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
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YM="gl_FragColor = linearToOutputTexel( gl_FragColor );",$M=`
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
}`,qM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,QM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
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
#endif`,eE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rE=`#ifdef USE_GRADIENTMAP
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
}`,sE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lE=`uniform bool receiveShadow;
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
#endif`,uE=`#ifdef USE_ENVMAP
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
#endif`,cE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pE=`PhysicalMaterial material;
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
#endif`,mE=`struct PhysicalMaterial {
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
}`,gE=`
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
#endif`,_E=`#if defined( RE_IndirectDiffuse )
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
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AE=`#if defined( USE_POINTS_UV )
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
#endif`,CE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`#ifdef USE_MORPHTARGETS
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
#endif`,NE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zE=`#ifdef USE_NORMALMAP
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
#endif`,BE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ew=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tw=`float getShadowMask() {
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
}`,nw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iw=`#ifdef USE_SKINNING
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
#endif`,rw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sw=`#ifdef USE_SKINNING
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
#endif`,ow=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cw=`#ifdef USE_TRANSMISSION
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
#endif`,fw=`#ifdef USE_TRANSMISSION
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
#endif`,hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_w=`uniform sampler2D t2D;
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
}`,vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`#include <common>
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
}`,Ew=`#if DEPTH_PACKING == 3200
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
}`,ww=`#define DISTANCE
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
}`,Tw=`#define DISTANCE
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
}`,Aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rw=`uniform float scale;
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
}`,bw=`uniform vec3 diffuse;
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
}`,Pw=`#include <common>
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
}`,Lw=`uniform vec3 diffuse;
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
}`,Dw=`#define LAMBERT
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
}`,Nw=`#define LAMBERT
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
}`,Iw=`#define MATCAP
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
}`,Uw=`#define MATCAP
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
}`,Fw=`#define NORMAL
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
}`,Ow=`#define NORMAL
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
}`,kw=`#define PHONG
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
}`,zw=`#define PHONG
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
}`,Bw=`#define STANDARD
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
}`,Hw=`#define STANDARD
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
}`,Vw=`#define TOON
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
}`,Gw=`#define TOON
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
}`,Ww=`uniform float size;
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
}`,Xw=`uniform vec3 diffuse;
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
}`,jw=`#include <common>
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
}`,Yw=`uniform vec3 color;
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
}`,$w=`uniform float rotation;
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
}`,qw=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:_M,alphahash_pars_fragment:vM,alphamap_fragment:xM,alphamap_pars_fragment:yM,alphatest_fragment:SM,alphatest_pars_fragment:MM,aomap_fragment:EM,aomap_pars_fragment:wM,batching_pars_vertex:TM,batching_vertex:AM,begin_vertex:CM,beginnormal_vertex:RM,bsdfs:bM,iridescence_fragment:PM,bumpmap_pars_fragment:LM,clipping_planes_fragment:DM,clipping_planes_pars_fragment:NM,clipping_planes_pars_vertex:IM,clipping_planes_vertex:UM,color_fragment:FM,color_pars_fragment:OM,color_pars_vertex:kM,color_vertex:zM,common:BM,cube_uv_reflection_fragment:HM,defaultnormal_vertex:VM,displacementmap_pars_vertex:GM,displacementmap_vertex:WM,emissivemap_fragment:XM,emissivemap_pars_fragment:jM,colorspace_fragment:YM,colorspace_pars_fragment:$M,envmap_fragment:qM,envmap_common_pars_fragment:KM,envmap_pars_fragment:ZM,envmap_pars_vertex:QM,envmap_physical_pars_fragment:uE,envmap_vertex:JM,fog_vertex:eE,fog_pars_vertex:tE,fog_fragment:nE,fog_pars_fragment:iE,gradientmap_pars_fragment:rE,lightmap_pars_fragment:sE,lights_lambert_fragment:oE,lights_lambert_pars_fragment:aE,lights_pars_begin:lE,lights_toon_fragment:cE,lights_toon_pars_fragment:fE,lights_phong_fragment:hE,lights_phong_pars_fragment:dE,lights_physical_fragment:pE,lights_physical_pars_fragment:mE,lights_fragment_begin:gE,lights_fragment_maps:_E,lights_fragment_end:vE,logdepthbuf_fragment:xE,logdepthbuf_pars_fragment:yE,logdepthbuf_pars_vertex:SE,logdepthbuf_vertex:ME,map_fragment:EE,map_pars_fragment:wE,map_particle_fragment:TE,map_particle_pars_fragment:AE,metalnessmap_fragment:CE,metalnessmap_pars_fragment:RE,morphinstance_vertex:bE,morphcolor_vertex:PE,morphnormal_vertex:LE,morphtarget_pars_vertex:DE,morphtarget_vertex:NE,normal_fragment_begin:IE,normal_fragment_maps:UE,normal_pars_fragment:FE,normal_pars_vertex:OE,normal_vertex:kE,normalmap_pars_fragment:zE,clearcoat_normal_fragment_begin:BE,clearcoat_normal_fragment_maps:HE,clearcoat_pars_fragment:VE,iridescence_pars_fragment:GE,opaque_fragment:WE,packing:XE,premultiplied_alpha_fragment:jE,project_vertex:YE,dithering_fragment:$E,dithering_pars_fragment:qE,roughnessmap_fragment:KE,roughnessmap_pars_fragment:ZE,shadowmap_pars_fragment:QE,shadowmap_pars_vertex:JE,shadowmap_vertex:ew,shadowmask_pars_fragment:tw,skinbase_vertex:nw,skinning_pars_vertex:iw,skinning_vertex:rw,skinnormal_vertex:sw,specularmap_fragment:ow,specularmap_pars_fragment:aw,tonemapping_fragment:lw,tonemapping_pars_fragment:uw,transmission_fragment:cw,transmission_pars_fragment:fw,uv_pars_fragment:hw,uv_pars_vertex:dw,uv_vertex:pw,worldpos_vertex:mw,background_vert:gw,background_frag:_w,backgroundCube_vert:vw,backgroundCube_frag:xw,cube_vert:yw,cube_frag:Sw,depth_vert:Mw,depth_frag:Ew,distanceRGBA_vert:ww,distanceRGBA_frag:Tw,equirect_vert:Aw,equirect_frag:Cw,linedashed_vert:Rw,linedashed_frag:bw,meshbasic_vert:Pw,meshbasic_frag:Lw,meshlambert_vert:Dw,meshlambert_frag:Nw,meshmatcap_vert:Iw,meshmatcap_frag:Uw,meshnormal_vert:Fw,meshnormal_frag:Ow,meshphong_vert:kw,meshphong_frag:zw,meshphysical_vert:Bw,meshphysical_frag:Hw,meshtoon_vert:Vw,meshtoon_frag:Gw,points_vert:Ww,points_frag:Xw,shadow_vert:jw,shadow_frag:Yw,sprite_vert:$w,sprite_frag:qw},Le={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Si={basic:{uniforms:wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:wn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:wn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:wn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:wn([Le.points,Le.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:wn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:wn([Le.common,Le.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:wn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:wn([Le.sprite,Le.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:wn([Le.common,Le.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:wn([Le.lights,Le.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Si.physical={uniforms:wn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Eu={r:0,b:0,g:0},hs=new ci,Kw=new kt;function Zw(n,e,t,r,o,l,u){const c=new Ge(0);let h=l===!0?0:1,d,p,_=null,m=0,y=null;function E(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?t:e).get(A)),A}function M(T){let A=!1;const C=E(T);C===null?x(c,h):C&&C.isColor&&(x(C,1),A=!0);const k=n.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,u):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(T,A){const C=E(A);C&&(C.isCubeTexture||C.mapping===ja)?(p===void 0&&(p=new Zn(new Do(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:wo(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),hs.copy(A.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),p.material.uniforms.envMap.value=C,p.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Kw.makeRotationFromEuler(hs)),p.material.toneMapped=Et.getTransfer(C.colorSpace)!==Lt,(_!==C||m!==C.version||y!==n.toneMapping)&&(p.material.needsUpdate=!0,_=C,m=C.version,y=n.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new Zn(new qa(2,2),new Jn({name:"BackgroundMaterial",uniforms:wo(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=Et.getTransfer(C.colorSpace)!==Lt,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||m!==C.version||y!==n.toneMapping)&&(d.material.needsUpdate=!0,_=C,m=C.version,y=n.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null))}function x(T,A){T.getRGB(Eu,Vv(n)),r.buffers.color.setClear(Eu.r,Eu.g,Eu.b,A,u)}return{getClearColor:function(){return c},setClearColor:function(T,A=1){c.set(T),h=A,x(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(T){h=T,x(c,h)},render:M,addToRenderList:v}}function Qw(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=m(null);let l=o,u=!1;function c(R,U,W,V,K){let te=!1;const J=_(V,W,U);l!==J&&(l=J,d(l.object)),te=y(R,V,W,K),te&&E(R,V,W,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,C(R,U,W,V),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function h(){return n.createVertexArray()}function d(R){return n.bindVertexArray(R)}function p(R){return n.deleteVertexArray(R)}function _(R,U,W){const V=W.wireframe===!0;let K=r[R.id];K===void 0&&(K={},r[R.id]=K);let te=K[U.id];te===void 0&&(te={},K[U.id]=te);let J=te[V];return J===void 0&&(J=m(h()),te[V]=J),J}function m(R){const U=[],W=[],V=[];for(let K=0;K<t;K++)U[K]=0,W[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:V,object:R,attributes:{},index:null}}function y(R,U,W,V){const K=l.attributes,te=U.attributes;let J=0;const le=W.getAttributes();for(const H in le)if(le[H].location>=0){const ne=K[H];let O=te[H];if(O===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),ne===void 0||ne.attribute!==O||O&&ne.data!==O.data)return!0;J++}return l.attributesNum!==J||l.index!==V}function E(R,U,W,V){const K={},te=U.attributes;let J=0;const le=W.getAttributes();for(const H in le)if(le[H].location>=0){let ne=te[H];ne===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));const O={};O.attribute=ne,ne&&ne.data&&(O.data=ne.data),K[H]=O,J++}l.attributes=K,l.attributesNum=J,l.index=V}function M(){const R=l.newAttributes;for(let U=0,W=R.length;U<W;U++)R[U]=0}function v(R){x(R,0)}function x(R,U){const W=l.newAttributes,V=l.enabledAttributes,K=l.attributeDivisors;W[R]=1,V[R]===0&&(n.enableVertexAttribArray(R),V[R]=1),K[R]!==U&&(n.vertexAttribDivisor(R,U),K[R]=U)}function T(){const R=l.newAttributes,U=l.enabledAttributes;for(let W=0,V=U.length;W<V;W++)U[W]!==R[W]&&(n.disableVertexAttribArray(W),U[W]=0)}function A(R,U,W,V,K,te,J){J===!0?n.vertexAttribIPointer(R,U,W,K,te):n.vertexAttribPointer(R,U,W,V,K,te)}function C(R,U,W,V){M();const K=V.attributes,te=W.getAttributes(),J=U.defaultAttributeValues;for(const le in te){const H=te[le];if(H.location>=0){let ce=K[le];if(ce===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const ne=ce.normalized,O=ce.itemSize,re=e.get(ce);if(re===void 0)continue;const ge=re.buffer,$=re.type,fe=re.bytesPerElement,ye=$===n.INT||$===n.UNSIGNED_INT||ce.gpuType===Fc;if(ce.isInterleavedBufferAttribute){const Se=ce.data,Re=Se.stride,De=ce.offset;if(Se.isInstancedInterleavedBuffer){for(let Ne=0;Ne<H.locationSize;Ne++)x(H.location+Ne,Se.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ne=0;Ne<H.locationSize;Ne++)v(H.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Ne=0;Ne<H.locationSize;Ne++)A(H.location+Ne,O/H.locationSize,$,ne,Re*fe,(De+O/H.locationSize*Ne)*fe,ye)}else{if(ce.isInstancedBufferAttribute){for(let Se=0;Se<H.locationSize;Se++)x(H.location+Se,ce.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Se=0;Se<H.locationSize;Se++)v(H.location+Se);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Se=0;Se<H.locationSize;Se++)A(H.location+Se,O/H.locationSize,$,ne,O*fe,O/H.locationSize*Se*fe,ye)}}else if(J!==void 0){const ne=J[le];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(H.location,ne);break;case 3:n.vertexAttrib3fv(H.location,ne);break;case 4:n.vertexAttrib4fv(H.location,ne);break;default:n.vertexAttrib1fv(H.location,ne)}}}}T()}function k(){X();for(const R in r){const U=r[R];for(const W in U){const V=U[W];for(const K in V)p(V[K].object),delete V[K];delete U[W]}delete r[R]}}function D(R){if(r[R.id]===void 0)return;const U=r[R.id];for(const W in U){const V=U[W];for(const K in V)p(V[K].object),delete V[K];delete U[W]}delete r[R.id]}function I(R){for(const U in r){const W=r[U];if(W[R.id]===void 0)continue;const V=W[R.id];for(const K in V)p(V[K].object),delete V[K];delete W[R.id]}}function X(){L(),u=!0,l!==o&&(l=o,d(l.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:X,resetDefaultState:L,dispose:k,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:v,disableUnusedAttributes:T}}function Jw(n,e,t){let r;function o(d){r=d}function l(d,p){n.drawArrays(r,d,p),t.update(p,r,1)}function u(d,p,_){_!==0&&(n.drawArraysInstanced(r,d,p,_),t.update(p,r,_))}function c(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,p,0,_);let y=0;for(let E=0;E<_;E++)y+=p[E];t.update(y,r,1)}function h(d,p,_,m){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)u(d[E],p[E],m[E]);else{y.multiDrawArraysInstancedWEBGL(r,d,0,p,0,m,0,_);let E=0;for(let M=0;M<_;M++)E+=p[M];for(let M=0;M<m.length;M++)t.update(E,r,m[M])}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function e1(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(D){return!(D!==ui&&r.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const I=D===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Oi&&r.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Ii&&!I)}function h(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=h(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const _=t.logarithmicDepthBuffer===!0,m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=y>0,k=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:_,maxTextures:m,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:A,vertexTextures:C,maxSamples:k}}function t1(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new nr,c=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){const y=_.length!==0||m||r!==0||o;return o=m,r=_.length,y},this.beginShadows=function(){l=!0,p(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,m){t=p(_,m,0)},this.setState=function(_,m,y){const E=_.clippingPlanes,M=_.clipIntersection,v=_.clipShadows,x=n.get(_);if(!o||E===null||E.length===0||l&&!v)l?p(null):d();else{const T=l?0:r,A=T*4;let C=x.clippingState||null;h.value=C,C=p(E,m,A,y);for(let k=0;k!==A;++k)C[k]=t[k];x.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(_,m,y,E){const M=_!==null?_.length:0;let v=null;if(M!==0){if(v=h.value,E!==!0||v===null){const x=y+M*4,T=m.matrixWorldInverse;c.getNormalMatrix(T),(v===null||v.length<x)&&(v=new Float32Array(x));for(let A=0,C=y;A!==M;++A,C+=4)u.copy(_[A]).applyMatrix4(T,c),u.normal.toArray(v,C),v[C+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,v}}function n1(n){let e=new WeakMap;function t(u,c){return c===ju?u.mapping=Es:c===Yu&&(u.mapping=ws),u}function r(u){if(u&&u.isTexture){const c=u.mapping;if(c===ju||c===Yu)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const d=new Xv(h.height);return d.fromEquirectangularTexture(n,u),e.set(u,d),u.addEventListener("dispose",o),t(d.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class ap extends sp{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,c=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,u=l+d*this.view.width,c-=p*this.view.offsetY,h=c-p*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _o=4,E_=[.125,.215,.35,.446,.526,.582],gs=20,td=new ap,w_=new Ge;let nd=null,id=0,rd=0,sd=!1;const ms=(1+Math.sqrt(5))/2,po=1/ms,T_=[new q(-ms,po,0),new q(ms,po,0),new q(-po,0,ms),new q(po,0,ms),new q(0,ms,-po),new q(0,ms,po),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Md{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=R_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nd,id,rd),this._renderer.xr.enabled=sd,e.scissorTest=!1,wu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Ro,format:ui,colorSpace:fr,depthBuffer:!1},o=A_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A_(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i1(l)),this._blurMaterial=r1(l,e,t)}return o}_compileMaterial(e){const t=new Zn(this._lodPlanes[0],e);this._renderer.compile(t,td)}_sceneToCubeUV(e,t,r,o){const c=new qn(90,1,t,r),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,m=p.toneMapping;p.getClearColor(w_),p.toneMapping=ar,p.autoClear=!1;const y=new np({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),E=new Zn(new Do,y);let M=!1;const v=e.background;v?v.isColor&&(y.color.copy(v),e.background=null,M=!0):(y.color.copy(w_),M=!0);for(let x=0;x<6;x++){const T=x%3;T===0?(c.up.set(0,h[x],0),c.lookAt(d[x],0,0)):T===1?(c.up.set(0,0,h[x]),c.lookAt(0,d[x],0)):(c.up.set(0,h[x],0),c.lookAt(0,0,d[x]));const A=this._cubeSize;wu(o,T*A,x>2?A:0,A,A),p.setRenderTarget(o),M&&p.render(E,c),p.render(e,c)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=m,p.autoClear=_,e.background=v}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Es||e.mapping===ws;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=R_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C_());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Zn(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;wu(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,td)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),c=T_[(o-l-1)%T_.length];this._blur(e,l-1,l,u,c)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,c){const h=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new Zn(this._lodPlanes[o],d),m=d.uniforms,y=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*gs-1),M=l/E,v=isFinite(l)?1+Math.floor(p*M):gs;v>gs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${gs}`);const x=[];let T=0;for(let I=0;I<gs;++I){const X=I/M,L=Math.exp(-X*X/2);x.push(L),I===0?T+=L:I<v&&(T+=2*L)}for(let I=0;I<x.length;I++)x[I]=x[I]/T;m.envMap.value=e.texture,m.samples.value=v,m.weights.value=x,m.latitudinal.value=u==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:A}=this;m.dTheta.value=E,m.mipInt.value=A-r;const C=this._sizeLods[o],k=3*C*(o>A-_o?o-A+_o:0),D=4*(this._cubeSize-C);wu(t,k,D,3*C,2*C),h.setRenderTarget(t),h.render(_,td)}}function i1(n){const e=[],t=[],r=[];let o=n;const l=n-_o+1+E_.length;for(let u=0;u<l;u++){const c=Math.pow(2,o);t.push(c);let h=1/c;u>n-_o?h=E_[u-n+_o-1]:u===0&&(h=0),r.push(h);const d=1/(c-2),p=-d,_=1+d,m=[p,p,_,p,_,_,p,p,_,_,p,_],y=6,E=6,M=3,v=2,x=1,T=new Float32Array(M*E*y),A=new Float32Array(v*E*y),C=new Float32Array(x*E*y);for(let D=0;D<y;D++){const I=D%3*2/3-1,X=D>2?0:-1,L=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];T.set(L,M*E*D),A.set(m,v*E*D);const R=[D,D,D,D,D,D];C.set(R,x*E*D)}const k=new cn;k.setAttribute("position",new Wt(T,M)),k.setAttribute("uv",new Wt(A,v)),k.setAttribute("faceIndex",new Wt(C,x)),e.push(k),o>_o&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function A_(n,e,t){const r=new ur(n,e,t);return r.texture.mapping=ja,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wu(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function r1(n,e,t){const r=new Float32Array(gs),o=new q(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lp(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function C_(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lp(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function R_(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function lp(){return`

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
	`}function s1(n){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const h=c.mapping,d=h===ju||h===Yu,p=h===Es||h===ws;if(d||p){let _=e.get(c);const m=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new Md(n)),_=d?t.fromEquirectangular(c,_):t.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),_.texture;if(_!==void 0)return _.texture;{const y=c.image;return d&&y&&y.height>0||p&&y&&o(y)?(t===null&&(t=new Md(n)),_=d?t.fromEquirectangular(c):t.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),c.addEventListener("dispose",l),_.texture):null}}}return c}function o(c){let h=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&h++;return h===d}function l(c){const h=c.target;h.removeEventListener("dispose",l);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function o1(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ia("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function a1(n,e,t,r){const o={},l=new WeakMap;function u(_){const m=_.target;m.index!==null&&e.remove(m.index);for(const E in m.attributes)e.remove(m.attributes[E]);for(const E in m.morphAttributes){const M=m.morphAttributes[E];for(let v=0,x=M.length;v<x;v++)e.remove(M[v])}m.removeEventListener("dispose",u),delete o[m.id];const y=l.get(m);y&&(e.remove(y),l.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(_,m){return o[m.id]===!0||(m.addEventListener("dispose",u),o[m.id]=!0,t.memory.geometries++),m}function h(_){const m=_.attributes;for(const E in m)e.update(m[E],n.ARRAY_BUFFER);const y=_.morphAttributes;for(const E in y){const M=y[E];for(let v=0,x=M.length;v<x;v++)e.update(M[v],n.ARRAY_BUFFER)}}function d(_){const m=[],y=_.index,E=_.attributes.position;let M=0;if(y!==null){const T=y.array;M=y.version;for(let A=0,C=T.length;A<C;A+=3){const k=T[A+0],D=T[A+1],I=T[A+2];m.push(k,D,D,I,I,k)}}else if(E!==void 0){const T=E.array;M=E.version;for(let A=0,C=T.length/3-1;A<C;A+=3){const k=A+0,D=A+1,I=A+2;m.push(k,D,D,I,I,k)}}else return;const v=new(Fv(m)?rp:ip)(m,1);v.version=M;const x=l.get(_);x&&e.remove(x),l.set(_,v)}function p(_){const m=l.get(_);if(m){const y=_.index;y!==null&&m.version<y.version&&d(_)}else d(_);return l.get(_)}return{get:c,update:h,getWireframeAttribute:p}}function l1(n,e,t){let r;function o(m){r=m}let l,u;function c(m){l=m.type,u=m.bytesPerElement}function h(m,y){n.drawElements(r,y,l,m*u),t.update(y,r,1)}function d(m,y,E){E!==0&&(n.drawElementsInstanced(r,y,l,m*u,E),t.update(y,r,E))}function p(m,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,m,0,E);let v=0;for(let x=0;x<E;x++)v+=y[x];t.update(v,r,1)}function _(m,y,E,M){if(E===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<m.length;x++)d(m[x]/u,y[x],M[x]);else{v.multiDrawElementsInstancedWEBGL(r,y,0,l,m,0,M,0,E);let x=0;for(let T=0;T<E;T++)x+=y[T];for(let T=0;T<M.length;T++)t.update(x,r,M[T])}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function u1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(l/3);break;case n.LINES:t.lines+=c*(l/2);break;case n.LINE_STRIP:t.lines+=c*(l-1);break;case n.LINE_LOOP:t.lines+=c*l;break;case n.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function c1(n,e,t){const r=new WeakMap,o=new $t;function l(u,c,h){const d=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=p!==void 0?p.length:0;let m=r.get(c);if(m===void 0||m.count!==_){let R=function(){X.dispose(),r.delete(c),c.removeEventListener("dispose",R)};var y=R;m!==void 0&&m.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let C=0;E===!0&&(C=1),M===!0&&(C=2),v===!0&&(C=3);let k=c.attributes.position.count*C,D=1;k>e.maxTextureSize&&(D=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const I=new Float32Array(k*D*4*_),X=new ep(I,k,D,_);X.type=Ii,X.needsUpdate=!0;const L=C*4;for(let U=0;U<_;U++){const W=x[U],V=T[U],K=A[U],te=k*D*4*U;for(let J=0;J<W.count;J++){const le=J*L;E===!0&&(o.fromBufferAttribute(W,J),I[te+le+0]=o.x,I[te+le+1]=o.y,I[te+le+2]=o.z,I[te+le+3]=0),M===!0&&(o.fromBufferAttribute(V,J),I[te+le+4]=o.x,I[te+le+5]=o.y,I[te+le+6]=o.z,I[te+le+7]=0),v===!0&&(o.fromBufferAttribute(K,J),I[te+le+8]=o.x,I[te+le+9]=o.y,I[te+le+10]=o.z,I[te+le+11]=K.itemSize===4?o.w:1)}}m={count:_,texture:X,size:new it(k,D)},r.set(c,m),c.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let E=0;for(let v=0;v<d.length;v++)E+=d[v];const M=c.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",d)}h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:l}}function f1(n,e,t,r){let o=new WeakMap;function l(h){const d=r.render.frame,p=h.geometry,_=e.get(h,p);if(o.get(_)!==d&&(e.update(_),o.set(_,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),o.get(h)!==d&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),o.set(h,d))),h.isSkinnedMesh){const m=h.skeleton;o.get(m)!==d&&(m.update(),o.set(m,d))}return _}function u(){o=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:u}}class up extends yn{constructor(e,t,r,o,l,u,c,h,d,p=ys){if(p!==ys&&p!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&p===ys&&(r=Xr),r===void 0&&p===As&&(r=Ts),super(null,o,l,u,c,h,p,r,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:An,this.minFilter=h!==void 0?h:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yv=new yn,b_=new up(1,1),$v=new ep,qv=new Bv,Kv=new op,P_=[],L_=[],D_=new Float32Array(16),N_=new Float32Array(9),I_=new Float32Array(4);function No(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=P_[o];if(l===void 0&&(l=new Float32Array(o),P_[o]=l),e!==0){r.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(l,c)}return l}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function jc(n,e){let t=L_[e];t===void 0&&(t=new Int32Array(e),L_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function h1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function d1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function p1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function m1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function g1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;I_.set(r),n.uniformMatrix2fv(this.addr,!1,I_),en(t,r)}}function _1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;N_.set(r),n.uniformMatrix3fv(this.addr,!1,N_),en(t,r)}}function v1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;D_.set(r),n.uniformMatrix4fv(this.addr,!1,D_),en(t,r)}}function x1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function S1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function M1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function E1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function w1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function T1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function A1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function C1(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(b_.compareFunction=Zd,l=b_):l=Yv,t.setTexture2D(e||l,o)}function R1(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||qv,o)}function b1(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Kv,o)}function P1(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||$v,o)}function L1(n){switch(n){case 5126:return h1;case 35664:return d1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return _1;case 35676:return v1;case 5124:case 35670:return x1;case 35667:case 35671:return y1;case 35668:case 35672:return S1;case 35669:case 35673:return M1;case 5125:return E1;case 36294:return w1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return P1}}function D1(n,e){n.uniform1fv(this.addr,e)}function N1(n,e){const t=No(e,this.size,2);n.uniform2fv(this.addr,t)}function I1(n,e){const t=No(e,this.size,3);n.uniform3fv(this.addr,t)}function U1(n,e){const t=No(e,this.size,4);n.uniform4fv(this.addr,t)}function F1(n,e){const t=No(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function O1(n,e){const t=No(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function k1(n,e){const t=No(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function z1(n,e){n.uniform1iv(this.addr,e)}function B1(n,e){n.uniform2iv(this.addr,e)}function H1(n,e){n.uniform3iv(this.addr,e)}function V1(n,e){n.uniform4iv(this.addr,e)}function G1(n,e){n.uniform1uiv(this.addr,e)}function W1(n,e){n.uniform2uiv(this.addr,e)}function X1(n,e){n.uniform3uiv(this.addr,e)}function j1(n,e){n.uniform4uiv(this.addr,e)}function Y1(n,e,t){const r=this.cache,o=e.length,l=jc(t,o);Jt(r,l)||(n.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Yv,l[u])}function $1(n,e,t){const r=this.cache,o=e.length,l=jc(t,o);Jt(r,l)||(n.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||qv,l[u])}function q1(n,e,t){const r=this.cache,o=e.length,l=jc(t,o);Jt(r,l)||(n.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Kv,l[u])}function K1(n,e,t){const r=this.cache,o=e.length,l=jc(t,o);Jt(r,l)||(n.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||$v,l[u])}function Z1(n){switch(n){case 5126:return D1;case 35664:return N1;case 35665:return I1;case 35666:return U1;case 35674:return F1;case 35675:return O1;case 35676:return k1;case 5124:case 35670:return z1;case 35667:case 35671:return B1;case 35668:case 35672:return H1;case 35669:case 35673:return V1;case 5125:return G1;case 36294:return W1;case 36295:return X1;case 36296:return j1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return K1}}class Q1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=L1(t.type)}}class J1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z1(t.type)}}class eT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const c=o[l];c.setValue(e,t[c.id],r)}}}const od=/(\w+)(\])?(\[|\.)?/g;function U_(n,e){n.seq.push(e),n.map[e.id]=e}function tT(n,e,t){const r=n.name,o=r.length;for(od.lastIndex=0;;){const l=od.exec(r),u=od.lastIndex;let c=l[1];const h=l[2]==="]",d=l[3];if(h&&(c=c|0),d===void 0||d==="["&&u+2===o){U_(t,d===void 0?new Q1(c,n,e):new J1(c,n,e));break}else{let _=t.map[c];_===void 0&&(_=new eT(c),U_(t,_)),t=_}}}class ku{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);tT(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const c=t[l],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function F_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const nT=37297;let iT=0;function rT(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}function sT(n){const e=Et.getPrimaries(Et.workingColorSpace),t=Et.getPrimaries(n);let r;switch(e===t?r="":e===za&&t===ka?r="LinearDisplayP3ToLinearSRGB":e===ka&&t===za&&(r="LinearSRGBToLinearDisplayP3"),n){case fr:case Ya:return[r,"LinearTransferOETF"];case li:case Gc:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[r,"LinearTransferOETF"]}}function O_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+rT(n.getShaderSource(e),u)}else return o}function oT(n,e){const t=sT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function aT(n,e){let t;switch(e){case vv:t="Linear";break;case xv:t="Reinhard";break;case yv:t="Cineon";break;case Sv:t="ACESFilmic";break;case Ev:t="AgX";break;case wv:t="Neutral";break;case Mv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tu=new q;function lT(){Et.getLuminanceCoefficients(Tu);const n=Tu.x.toFixed(4),e=Tu.y.toFixed(4),t=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function cT(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function fT(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let c=1;l.type===n.FLOAT_MAT2&&(c=2),l.type===n.FLOAT_MAT3&&(c=3),l.type===n.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function Ea(n){return n!==""}function k_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function z_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(n){return n.replace(hT,pT)}const dT=new Map;function pT(n,e){let t=ut[e];if(t===void 0){const r=dT.get(e);if(r!==void 0)t=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ed(t)}const mT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B_(n){return n.replace(mT,gT)}function gT(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function H_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _T(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===W0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function vT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Es:case ws:e="ENVMAP_TYPE_CUBE";break;case ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xT(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ws&&(e="ENVMAP_MODE_REFRACTION"),e}function yT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Uc:e="ENVMAP_BLENDING_MULTIPLY";break;case gv:e="ENVMAP_BLENDING_MIX";break;case _v:e="ENVMAP_BLENDING_ADD";break}return e}function ST(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function MT(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=_T(t),d=vT(t),p=xT(t),_=yT(t),m=ST(t),y=uT(t),E=cT(l),M=o.createProgram();let v,x,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ea).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ea).join(`
`),x.length>0&&(x+=`
`)):(v=[H_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),x=[H_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ar?"#define TONE_MAPPING":"",t.toneMapping!==ar?ut.tonemapping_pars_fragment:"",t.toneMapping!==ar?aT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,oT("linearToOutputTexel",t.outputColorSpace),lT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),u=Ed(u),u=k_(u,t),u=z_(u,t),c=Ed(c),c=k_(c,t),c=z_(c,t),u=B_(u),c=B_(c),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,v=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===Sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const A=T+v+u,C=T+x+c,k=F_(o,o.VERTEX_SHADER,A),D=F_(o,o.FRAGMENT_SHADER,C);o.attachShader(M,k),o.attachShader(M,D),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function I(U){if(n.debug.checkShaderErrors){const W=o.getProgramInfoLog(M).trim(),V=o.getShaderInfoLog(k).trim(),K=o.getShaderInfoLog(D).trim();let te=!0,J=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,M,k,D);else{const le=O_(o,k,"vertex"),H=O_(o,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+le+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||K==="")&&(J=!1);J&&(U.diagnostics={runnable:te,programLog:W,vertexShader:{log:V,prefix:v},fragmentShader:{log:K,prefix:x}})}o.deleteShader(k),o.deleteShader(D),X=new ku(o,M),L=fT(o,M)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(M,nT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iT++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=k,this.fragmentShader=D,this}let ET=0;class wT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new TT(e),t.set(e,r)),r}}class TT{constructor(e){this.id=ET++,this.code=e,this.usedTimes=0}}function AT(n,e,t,r,o,l,u){const c=new tp,h=new wT,d=new Set,p=[],_=o.logarithmicDepthBuffer,m=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(L){return d.add(L),L===0?"uv":`uv${L}`}function v(L,R,U,W,V){const K=W.fog,te=V.geometry,J=L.isMeshStandardMaterial?W.environment:null,le=(L.isMeshStandardMaterial?t:e).get(L.envMap||J),H=le&&le.mapping===ja?le.image.height:null,ce=E[L.type];L.precision!==null&&(y=o.getMaxPrecision(L.precision),y!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",y,"instead."));const ne=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,O=ne!==void 0?ne.length:0;let re=0;te.morphAttributes.position!==void 0&&(re=1),te.morphAttributes.normal!==void 0&&(re=2),te.morphAttributes.color!==void 0&&(re=3);let ge,$,fe,ye;if(ce){const vt=Si[ce];ge=vt.vertexShader,$=vt.fragmentShader}else ge=L.vertexShader,$=L.fragmentShader,h.update(L),fe=h.getVertexShaderID(L),ye=h.getFragmentShaderID(L);const Se=n.getRenderTarget(),Re=V.isInstancedMesh===!0,De=V.isBatchedMesh===!0,Ne=!!L.map,ft=!!L.matcap,z=!!le,_t=!!L.aoMap,dt=!!L.lightMap,Mt=!!L.bumpMap,Ye=!!L.normalMap,Ut=!!L.displacementMap,tt=!!L.emissiveMap,rt=!!L.metalnessMap,F=!!L.roughnessMap,b=L.anisotropy>0,ue=L.clearcoat>0,pe=L.dispersion>0,ve=L.iridescence>0,me=L.sheen>0,$e=L.transmission>0,Pe=b&&!!L.anisotropyMap,Oe=ue&&!!L.clearcoatMap,ot=ue&&!!L.clearcoatNormalMap,Ee=ue&&!!L.clearcoatRoughnessMap,Ie=ve&&!!L.iridescenceMap,pt=ve&&!!L.iridescenceThicknessMap,et=me&&!!L.sheenColorMap,ke=me&&!!L.sheenRoughnessMap,st=!!L.specularMap,at=!!L.specularColorMap,Rt=!!L.specularIntensityMap,j=$e&&!!L.transmissionMap,Te=$e&&!!L.thicknessMap,he=!!L.gradientMap,de=!!L.alphaMap,Ce=L.alphaTest>0,Ze=!!L.alphaHash,mt=!!L.extensions;let zt=ar;L.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(zt=n.toneMapping);const Xt={shaderID:ce,shaderType:L.type,shaderName:L.name,vertexShader:ge,fragmentShader:$,defines:L.defines,customVertexShaderID:fe,customFragmentShaderID:ye,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:y,batching:De,batchingColor:De&&V._colorsTexture!==null,instancing:Re,instancingColor:Re&&V.instanceColor!==null,instancingMorph:Re&&V.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:fr,alphaToCoverage:!!L.alphaToCoverage,map:Ne,matcap:ft,envMap:z,envMapMode:z&&le.mapping,envMapCubeUVHeight:H,aoMap:_t,lightMap:dt,bumpMap:Mt,normalMap:Ye,displacementMap:m&&Ut,emissiveMap:tt,normalMapObjectSpace:Ye&&L.normalMapType===Rv,normalMapTangentSpace:Ye&&L.normalMapType===Vc,metalnessMap:rt,roughnessMap:F,anisotropy:b,anisotropyMap:Pe,clearcoat:ue,clearcoatMap:Oe,clearcoatNormalMap:ot,clearcoatRoughnessMap:Ee,dispersion:pe,iridescence:ve,iridescenceMap:Ie,iridescenceThicknessMap:pt,sheen:me,sheenColorMap:et,sheenRoughnessMap:ke,specularMap:st,specularColorMap:at,specularIntensityMap:Rt,transmission:$e,transmissionMap:j,thicknessMap:Te,gradientMap:he,opaque:L.transparent===!1&&L.blending===Wr&&L.alphaToCoverage===!1,alphaMap:de,alphaTest:Ce,alphaHash:Ze,combine:L.combine,mapUv:Ne&&M(L.map.channel),aoMapUv:_t&&M(L.aoMap.channel),lightMapUv:dt&&M(L.lightMap.channel),bumpMapUv:Mt&&M(L.bumpMap.channel),normalMapUv:Ye&&M(L.normalMap.channel),displacementMapUv:Ut&&M(L.displacementMap.channel),emissiveMapUv:tt&&M(L.emissiveMap.channel),metalnessMapUv:rt&&M(L.metalnessMap.channel),roughnessMapUv:F&&M(L.roughnessMap.channel),anisotropyMapUv:Pe&&M(L.anisotropyMap.channel),clearcoatMapUv:Oe&&M(L.clearcoatMap.channel),clearcoatNormalMapUv:ot&&M(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&M(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&M(L.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&M(L.iridescenceThicknessMap.channel),sheenColorMapUv:et&&M(L.sheenColorMap.channel),sheenRoughnessMapUv:ke&&M(L.sheenRoughnessMap.channel),specularMapUv:st&&M(L.specularMap.channel),specularColorMapUv:at&&M(L.specularColorMap.channel),specularIntensityMapUv:Rt&&M(L.specularIntensityMap.channel),transmissionMapUv:j&&M(L.transmissionMap.channel),thicknessMapUv:Te&&M(L.thicknessMap.channel),alphaMapUv:de&&M(L.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ye||b),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!te.attributes.uv&&(Ne||de),fog:!!K,useFog:L.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:V.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:re,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:L.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:zt,decodeVideoTexture:Ne&&L.map.isVideoTexture===!0&&Et.getTransfer(L.map.colorSpace)===Lt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Ni,flipSided:L.side===xn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:mt&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&L.extensions.multiDraw===!0||De)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Xt.vertexUv1s=d.has(1),Xt.vertexUv2s=d.has(2),Xt.vertexUv3s=d.has(3),d.clear(),Xt}function x(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const U in L.defines)R.push(U),R.push(L.defines[U]);return L.isRawShaderMaterial===!1&&(T(R,L),A(R,L),R.push(n.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function T(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function A(L,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),L.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.skinning&&c.enable(4),R.morphTargets&&c.enable(5),R.morphNormals&&c.enable(6),R.morphColors&&c.enable(7),R.premultipliedAlpha&&c.enable(8),R.shadowMapEnabled&&c.enable(9),R.doubleSided&&c.enable(10),R.flipSided&&c.enable(11),R.useDepthPacking&&c.enable(12),R.dithering&&c.enable(13),R.transmission&&c.enable(14),R.sheen&&c.enable(15),R.opaque&&c.enable(16),R.pointsUvs&&c.enable(17),R.decodeVideoTexture&&c.enable(18),R.alphaToCoverage&&c.enable(19),L.push(c.mask)}function C(L){const R=E[L.type];let U;if(R){const W=Si[R];U=Gv.clone(W.uniforms)}else U=L.uniforms;return U}function k(L,R){let U;for(let W=0,V=p.length;W<V;W++){const K=p[W];if(K.cacheKey===R){U=K,++U.usedTimes;break}}return U===void 0&&(U=new MT(n,R,L,l),p.push(U)),U}function D(L){if(--L.usedTimes===0){const R=p.indexOf(L);p[R]=p[p.length-1],p.pop(),L.destroy()}}function I(L){h.remove(L)}function X(){h.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:C,acquireProgram:k,releaseProgram:D,releaseShaderCache:I,programs:p,dispose:X}}function CT(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let c=n.get(u);return c===void 0&&(c={},n.set(u,c)),c}function r(u){n.delete(u)}function o(u,c,h){n.get(u)[c]=h}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function RT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function V_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function G_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_,m,y,E,M,v){let x=n[e];return x===void 0?(x={id:_.id,object:_,geometry:m,material:y,groupOrder:E,renderOrder:_.renderOrder,z:M,group:v},n[e]=x):(x.id=_.id,x.object=_,x.geometry=m,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=M,x.group=v),e++,x}function c(_,m,y,E,M,v){const x=u(_,m,y,E,M,v);y.transmission>0?r.push(x):y.transparent===!0?o.push(x):t.push(x)}function h(_,m,y,E,M,v){const x=u(_,m,y,E,M,v);y.transmission>0?r.unshift(x):y.transparent===!0?o.unshift(x):t.unshift(x)}function d(_,m){t.length>1&&t.sort(_||RT),r.length>1&&r.sort(m||V_),o.length>1&&o.sort(m||V_)}function p(){for(let _=e,m=n.length;_<m;_++){const y=n[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:c,unshift:h,finish:p,sort:d}}function bT(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new G_,n.set(r,[u])):o>=l.length?(u=new G_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function PT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Ge};break;case"SpotLight":t={position:new q,direction:new q,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function LT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let DT=0;function NT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IT(n){const e=new PT,t=LT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new q);const o=new q,l=new kt,u=new kt;function c(d){let p=0,_=0,m=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let y=0,E=0,M=0,v=0,x=0,T=0,A=0,C=0,k=0,D=0,I=0;d.sort(NT);for(let L=0,R=d.length;L<R;L++){const U=d[L],W=U.color,V=U.intensity,K=U.distance,te=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)p+=W.r*V,_+=W.g*V,m+=W.b*V;else if(U.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(U.sh.coefficients[J],V);I++}else if(U.isDirectionalLight){const J=e.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const le=U.shadow,H=t.get(U);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,r.directionalShadow[y]=H,r.directionalShadowMap[y]=te,r.directionalShadowMatrix[y]=U.shadow.matrix,T++}r.directional[y]=J,y++}else if(U.isSpotLight){const J=e.get(U);J.position.setFromMatrixPosition(U.matrixWorld),J.color.copy(W).multiplyScalar(V),J.distance=K,J.coneCos=Math.cos(U.angle),J.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),J.decay=U.decay,r.spot[M]=J;const le=U.shadow;if(U.map&&(r.spotLightMap[k]=U.map,k++,le.updateMatrices(U),U.castShadow&&D++),r.spotLightMatrix[M]=le.matrix,U.castShadow){const H=t.get(U);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,r.spotShadow[M]=H,r.spotShadowMap[M]=te,C++}M++}else if(U.isRectAreaLight){const J=e.get(U);J.color.copy(W).multiplyScalar(V),J.halfWidth.set(U.width*.5,0,0),J.halfHeight.set(0,U.height*.5,0),r.rectArea[v]=J,v++}else if(U.isPointLight){const J=e.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity),J.distance=U.distance,J.decay=U.decay,U.castShadow){const le=U.shadow,H=t.get(U);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,H.shadowCameraNear=le.camera.near,H.shadowCameraFar=le.camera.far,r.pointShadow[E]=H,r.pointShadowMap[E]=te,r.pointShadowMatrix[E]=U.shadow.matrix,A++}r.point[E]=J,E++}else if(U.isHemisphereLight){const J=e.get(U);J.skyColor.copy(U.color).multiplyScalar(V),J.groundColor.copy(U.groundColor).multiplyScalar(V),r.hemi[x]=J,x++}}v>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=_,r.ambient[2]=m;const X=r.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==M||X.rectAreaLength!==v||X.hemiLength!==x||X.numDirectionalShadows!==T||X.numPointShadows!==A||X.numSpotShadows!==C||X.numSpotMaps!==k||X.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=M,r.rectArea.length=v,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=C+k-D,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=I,X.directionalLength=y,X.pointLength=E,X.spotLength=M,X.rectAreaLength=v,X.hemiLength=x,X.numDirectionalShadows=T,X.numPointShadows=A,X.numSpotShadows=C,X.numSpotMaps=k,X.numLightProbes=I,r.version=DT++)}function h(d,p){let _=0,m=0,y=0,E=0,M=0;const v=p.matrixWorldInverse;for(let x=0,T=d.length;x<T;x++){const A=d[x];if(A.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(v),_++}else if(A.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(v),C.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(v),y++}else if(A.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(v),u.identity(),l.copy(A.matrixWorld),l.premultiply(v),u.extractRotation(l),C.halfWidth.set(A.width*.5,0,0),C.halfHeight.set(0,A.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(A.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(v),m++}else if(A.isHemisphereLight){const C=r.hemi[M];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(v),M++}}}return{setup:c,setupView:h,state:r}}function W_(n){const e=new IT(n),t=[],r=[];function o(p){d.camera=p,t.length=0,r.length=0}function l(p){t.push(p)}function u(p){r.push(p)}function c(){e.setup(t)}function h(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:c,setupLightsView:h,pushLight:l,pushShadow:u}}function UT(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let c;return u===void 0?(c=new W_(n),e.set(o,[c])):l>=u.length?(c=new W_(n),u.push(c)):c=u[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}class Zv extends hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Av,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qv extends hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OT=`uniform sampler2D shadow_pass;
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
}`;function kT(n,e,t){let r=new Xc;const o=new it,l=new it,u=new $t,c=new Zv({depthPacking:Cv}),h=new Qv,d={},p=t.maxTextureSize,_={[lr]:xn,[xn]:lr,[Ni]:Ni},m=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:FT,fragmentShader:OT}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const E=new cn;E.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Zn(E,m),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zd;let x=this.type;this.render=function(D,I,X){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||D.length===0)return;const L=n.getRenderTarget(),R=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),W=n.state;W.setBlending(or),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const V=x!==Di&&this.type===Di,K=x===Di&&this.type!==Di;for(let te=0,J=D.length;te<J;te++){const le=D[te],H=le.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const ce=H.getFrameExtents();if(o.multiply(ce),l.copy(H.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(l.x=Math.floor(p/ce.x),o.x=l.x*ce.x,H.mapSize.x=l.x),o.y>p&&(l.y=Math.floor(p/ce.y),o.y=l.y*ce.y,H.mapSize.y=l.y)),H.map===null||V===!0||K===!0){const O=this.type!==Di?{minFilter:An,magFilter:An}:{};H.map!==null&&H.map.dispose(),H.map=new ur(o.x,o.y,O),H.map.texture.name=le.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ne=H.getViewportCount();for(let O=0;O<ne;O++){const re=H.getViewport(O);u.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),W.viewport(u),H.updateMatrices(le,O),r=H.getFrustum(),C(I,X,H.camera,le,this.type)}H.isPointLightShadow!==!0&&this.type===Di&&T(H,X),H.needsUpdate=!1}x=this.type,v.needsUpdate=!1,n.setRenderTarget(L,R,U)};function T(D,I){const X=e.update(M);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ur(o.x,o.y)),m.uniforms.shadow_pass.value=D.map.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(I,null,X,m,M,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(I,null,X,y,M,null)}function A(D,I,X,L){let R=null;const U=X.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)R=U;else if(R=X.isPointLight===!0?h:c,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const W=R.uuid,V=I.uuid;let K=d[W];K===void 0&&(K={},d[W]=K);let te=K[V];te===void 0&&(te=R.clone(),K[V]=te,I.addEventListener("dispose",k)),R=te}if(R.visible=I.visible,R.wireframe=I.wireframe,L===Di?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:_[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const W=n.properties.get(R);W.light=X}return R}function C(D,I,X,L,R){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&R===Di)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,D.matrixWorld);const V=e.update(D),K=D.material;if(Array.isArray(K)){const te=V.groups;for(let J=0,le=te.length;J<le;J++){const H=te[J],ce=K[H.materialIndex];if(ce&&ce.visible){const ne=A(D,ce,L,R);D.onBeforeShadow(n,D,I,X,V,ne,H),n.renderBufferDirect(X,null,V,ne,D,H),D.onAfterShadow(n,D,I,X,V,ne,H)}}}else if(K.visible){const te=A(D,K,L,R);D.onBeforeShadow(n,D,I,X,V,te,null),n.renderBufferDirect(X,null,V,te,D,null),D.onAfterShadow(n,D,I,X,V,te,null)}}const W=D.children;for(let V=0,K=W.length;V<K;V++)C(W[V],I,X,L,R)}function k(D){D.target.removeEventListener("dispose",k);for(const X in d){const L=d[X],R=D.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function zT(n){function e(){let j=!1;const Te=new $t;let he=null;const de=new $t(0,0,0,0);return{setMask:function(Ce){he!==Ce&&!j&&(n.colorMask(Ce,Ce,Ce,Ce),he=Ce)},setLocked:function(Ce){j=Ce},setClear:function(Ce,Ze,mt,zt,Xt){Xt===!0&&(Ce*=zt,Ze*=zt,mt*=zt),Te.set(Ce,Ze,mt,zt),de.equals(Te)===!1&&(n.clearColor(Ce,Ze,mt,zt),de.copy(Te))},reset:function(){j=!1,he=null,de.set(-1,0,0,0)}}}function t(){let j=!1,Te=null,he=null,de=null;return{setTest:function(Ce){Ce?ye(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(Ce){Te!==Ce&&!j&&(n.depthMask(Ce),Te=Ce)},setFunc:function(Ce){if(he!==Ce){switch(Ce){case uv:n.depthFunc(n.NEVER);break;case cv:n.depthFunc(n.ALWAYS);break;case fv:n.depthFunc(n.LESS);break;case Ua:n.depthFunc(n.LEQUAL);break;case hv:n.depthFunc(n.EQUAL);break;case dv:n.depthFunc(n.GEQUAL);break;case pv:n.depthFunc(n.GREATER);break;case mv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Ce}},setLocked:function(Ce){j=Ce},setClear:function(Ce){de!==Ce&&(n.clearDepth(Ce),de=Ce)},reset:function(){j=!1,Te=null,he=null,de=null}}}function r(){let j=!1,Te=null,he=null,de=null,Ce=null,Ze=null,mt=null,zt=null,Xt=null;return{setTest:function(vt){j||(vt?ye(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(vt){Te!==vt&&!j&&(n.stencilMask(vt),Te=vt)},setFunc:function(vt,zn,Bn){(he!==vt||de!==zn||Ce!==Bn)&&(n.stencilFunc(vt,zn,Bn),he=vt,de=zn,Ce=Bn)},setOp:function(vt,zn,Bn){(Ze!==vt||mt!==zn||zt!==Bn)&&(n.stencilOp(vt,zn,Bn),Ze=vt,mt=zn,zt=Bn)},setLocked:function(vt){j=vt},setClear:function(vt){Xt!==vt&&(n.clearStencil(vt),Xt=vt)},reset:function(){j=!1,Te=null,he=null,de=null,Ce=null,Ze=null,mt=null,zt=null,Xt=null}}}const o=new e,l=new t,u=new r,c=new WeakMap,h=new WeakMap;let d={},p={},_=new WeakMap,m=[],y=null,E=!1,M=null,v=null,x=null,T=null,A=null,C=null,k=null,D=new Ge(0,0,0),I=0,X=!1,L=null,R=null,U=null,W=null,V=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,J=0;const le=n.getParameter(n.VERSION);le.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(le)[1]),te=J>=1):le.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),te=J>=2);let H=null,ce={};const ne=n.getParameter(n.SCISSOR_BOX),O=n.getParameter(n.VIEWPORT),re=new $t().fromArray(ne),ge=new $t().fromArray(O);function $(j,Te,he,de){const Ce=new Uint8Array(4),Ze=n.createTexture();n.bindTexture(j,Ze),n.texParameteri(j,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(j,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let mt=0;mt<he;mt++)j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Te+mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return Ze}const fe={};fe[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ye(n.DEPTH_TEST),l.setFunc(Ua),Mt(!1),Ye(gd),ye(n.CULL_FACE),_t(or);function ye(j){d[j]!==!0&&(n.enable(j),d[j]=!0)}function Se(j){d[j]!==!1&&(n.disable(j),d[j]=!1)}function Re(j,Te){return p[j]!==Te?(n.bindFramebuffer(j,Te),p[j]=Te,j===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Te),j===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function De(j,Te){let he=m,de=!1;if(j){he=_.get(Te),he===void 0&&(he=[],_.set(Te,he));const Ce=j.textures;if(he.length!==Ce.length||he[0]!==n.COLOR_ATTACHMENT0){for(let Ze=0,mt=Ce.length;Ze<mt;Ze++)he[Ze]=n.COLOR_ATTACHMENT0+Ze;he.length=Ce.length,de=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,de=!0);de&&n.drawBuffers(he)}function Ne(j){return y!==j?(n.useProgram(j),y=j,!0):!1}const ft={[Gr]:n.FUNC_ADD,[j0]:n.FUNC_SUBTRACT,[Y0]:n.FUNC_REVERSE_SUBTRACT};ft[$0]=n.MIN,ft[q0]=n.MAX;const z={[K0]:n.ZERO,[Z0]:n.ONE,[Q0]:n.SRC_COLOR,[Wu]:n.SRC_ALPHA,[rv]:n.SRC_ALPHA_SATURATE,[nv]:n.DST_COLOR,[ev]:n.DST_ALPHA,[J0]:n.ONE_MINUS_SRC_COLOR,[Xu]:n.ONE_MINUS_SRC_ALPHA,[iv]:n.ONE_MINUS_DST_COLOR,[tv]:n.ONE_MINUS_DST_ALPHA,[sv]:n.CONSTANT_COLOR,[ov]:n.ONE_MINUS_CONSTANT_COLOR,[av]:n.CONSTANT_ALPHA,[lv]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(j,Te,he,de,Ce,Ze,mt,zt,Xt,vt){if(j===or){E===!0&&(Se(n.BLEND),E=!1);return}if(E===!1&&(ye(n.BLEND),E=!0),j!==X0){if(j!==M||vt!==X){if((v!==Gr||A!==Gr)&&(n.blendEquation(n.FUNC_ADD),v=Gr,A=Gr),vt)switch(j){case Wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gu:n.blendFunc(n.ONE,n.ONE);break;case _d:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _d:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}x=null,T=null,C=null,k=null,D.set(0,0,0),I=0,M=j,X=vt}return}Ce=Ce||Te,Ze=Ze||he,mt=mt||de,(Te!==v||Ce!==A)&&(n.blendEquationSeparate(ft[Te],ft[Ce]),v=Te,A=Ce),(he!==x||de!==T||Ze!==C||mt!==k)&&(n.blendFuncSeparate(z[he],z[de],z[Ze],z[mt]),x=he,T=de,C=Ze,k=mt),(zt.equals(D)===!1||Xt!==I)&&(n.blendColor(zt.r,zt.g,zt.b,Xt),D.copy(zt),I=Xt),M=j,X=!1}function dt(j,Te){j.side===Ni?Se(n.CULL_FACE):ye(n.CULL_FACE);let he=j.side===xn;Te&&(he=!he),Mt(he),j.blending===Wr&&j.transparent===!1?_t(or):_t(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),l.setFunc(j.depthFunc),l.setTest(j.depthTest),l.setMask(j.depthWrite),o.setMask(j.colorWrite);const de=j.stencilWrite;u.setTest(de),de&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),tt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(j){L!==j&&(j?n.frontFace(n.CW):n.frontFace(n.CCW),L=j)}function Ye(j){j!==V0?(ye(n.CULL_FACE),j!==R&&(j===gd?n.cullFace(n.BACK):j===G0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),R=j}function Ut(j){j!==U&&(te&&n.lineWidth(j),U=j)}function tt(j,Te,he){j?(ye(n.POLYGON_OFFSET_FILL),(W!==Te||V!==he)&&(n.polygonOffset(Te,he),W=Te,V=he)):Se(n.POLYGON_OFFSET_FILL)}function rt(j){j?ye(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function F(j){j===void 0&&(j=n.TEXTURE0+K-1),H!==j&&(n.activeTexture(j),H=j)}function b(j,Te,he){he===void 0&&(H===null?he=n.TEXTURE0+K-1:he=H);let de=ce[he];de===void 0&&(de={type:void 0,texture:void 0},ce[he]=de),(de.type!==j||de.texture!==Te)&&(H!==he&&(n.activeTexture(he),H=he),n.bindTexture(j,Te||fe[j]),de.type=j,de.texture=Te)}function ue(){const j=ce[H];j!==void 0&&j.type!==void 0&&(n.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function pe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{n.compressedTexImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function me(){try{n.texSubImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function $e(){try{n.texSubImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ot(){try{n.texStorage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(){try{n.texStorage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ie(){try{n.texImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function pt(){try{n.texImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function et(j){re.equals(j)===!1&&(n.scissor(j.x,j.y,j.z,j.w),re.copy(j))}function ke(j){ge.equals(j)===!1&&(n.viewport(j.x,j.y,j.z,j.w),ge.copy(j))}function st(j,Te){let he=h.get(Te);he===void 0&&(he=new WeakMap,h.set(Te,he));let de=he.get(j);de===void 0&&(de=n.getUniformBlockIndex(Te,j.name),he.set(j,de))}function at(j,Te){const de=h.get(Te).get(j);c.get(Te)!==de&&(n.uniformBlockBinding(Te,de,j.__bindingPointIndex),c.set(Te,de))}function Rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},H=null,ce={},p={},_=new WeakMap,m=[],y=null,E=!1,M=null,v=null,x=null,T=null,A=null,C=null,k=null,D=new Ge(0,0,0),I=0,X=!1,L=null,R=null,U=null,W=null,V=null,re.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:ye,disable:Se,bindFramebuffer:Re,drawBuffers:De,useProgram:Ne,setBlending:_t,setMaterial:dt,setFlipSided:Mt,setCullFace:Ye,setLineWidth:Ut,setPolygonOffset:tt,setScissorTest:rt,activeTexture:F,bindTexture:b,unbindTexture:ue,compressedTexImage2D:pe,compressedTexImage3D:ve,texImage2D:Ie,texImage3D:pt,updateUBOMapping:st,uniformBlockBinding:at,texStorage2D:ot,texStorage3D:Ee,texSubImage2D:me,texSubImage3D:$e,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Oe,scissor:et,viewport:ke,reset:Rt}}function X_(n,e,t,r){const o=BT(r);switch(t){case Wd:return n*e;case jd:return n*e;case Yd:return n*e*2;case $d:return n*e/o.components*o.byteLength;case zc:return n*e/o.components*o.byteLength;case qd:return n*e*2/o.components*o.byteLength;case Bc:return n*e*2/o.components*o.byteLength;case Xd:return n*e*3/o.components*o.byteLength;case ui:return n*e*4/o.components*o.byteLength;case Hc:return n*e*4/o.components*o.byteLength;case Ca:case Ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ba:case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ku:case Qu:return Math.max(n,16)*Math.max(e,8)/4;case qu:case Zu:return Math.max(n,8)*Math.max(e,8)/2;case Ju:case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case La:case gc:case _c:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kd:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xc:case yc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BT(n){switch(n){case Oi:case Hd:return{byteLength:1,components:1};case Eo:case Vd:case Ro:return{byteLength:2,components:1};case Oc:case kc:return{byteLength:2,components:4};case Xr:case Fc:case Ii:return{byteLength:4,components:1};case Gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function HT(n,e,t,r,o,l,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new it,p=new WeakMap;let _;const m=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,b){return y?new OffscreenCanvas(F,b):Va("canvas")}function M(F,b,ue){let pe=1;const ve=rt(F);if((ve.width>ue||ve.height>ue)&&(pe=ue/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const me=Math.floor(pe*ve.width),$e=Math.floor(pe*ve.height);_===void 0&&(_=E(me,$e));const Pe=b?E(me,$e):_;return Pe.width=me,Pe.height=$e,Pe.getContext("2d").drawImage(F,0,0,me,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+me+"x"+$e+")."),Pe}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),F;return F}function v(F){return F.generateMipmaps&&F.minFilter!==An&&F.minFilter!==Kn}function x(F){n.generateMipmap(F)}function T(F,b,ue,pe,ve=!1){if(F!==null){if(n[F]!==void 0)return n[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let me=b;if(b===n.RED&&(ue===n.FLOAT&&(me=n.R32F),ue===n.HALF_FLOAT&&(me=n.R16F),ue===n.UNSIGNED_BYTE&&(me=n.R8)),b===n.RED_INTEGER&&(ue===n.UNSIGNED_BYTE&&(me=n.R8UI),ue===n.UNSIGNED_SHORT&&(me=n.R16UI),ue===n.UNSIGNED_INT&&(me=n.R32UI),ue===n.BYTE&&(me=n.R8I),ue===n.SHORT&&(me=n.R16I),ue===n.INT&&(me=n.R32I)),b===n.RG&&(ue===n.FLOAT&&(me=n.RG32F),ue===n.HALF_FLOAT&&(me=n.RG16F),ue===n.UNSIGNED_BYTE&&(me=n.RG8)),b===n.RG_INTEGER&&(ue===n.UNSIGNED_BYTE&&(me=n.RG8UI),ue===n.UNSIGNED_SHORT&&(me=n.RG16UI),ue===n.UNSIGNED_INT&&(me=n.RG32UI),ue===n.BYTE&&(me=n.RG8I),ue===n.SHORT&&(me=n.RG16I),ue===n.INT&&(me=n.RG32I)),b===n.RGB&&ue===n.UNSIGNED_INT_5_9_9_9_REV&&(me=n.RGB9_E5),b===n.RGBA){const $e=ve?Oa:Et.getTransfer(pe);ue===n.FLOAT&&(me=n.RGBA32F),ue===n.HALF_FLOAT&&(me=n.RGBA16F),ue===n.UNSIGNED_BYTE&&(me=$e===Lt?n.SRGB8_ALPHA8:n.RGBA8),ue===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),ue===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function A(F,b){let ue;return F?b===null||b===Xr||b===Ts?ue=n.DEPTH24_STENCIL8:b===Ii?ue=n.DEPTH32F_STENCIL8:b===Eo&&(ue=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xr||b===Ts?ue=n.DEPTH_COMPONENT24:b===Ii?ue=n.DEPTH_COMPONENT32F:b===Eo&&(ue=n.DEPTH_COMPONENT16),ue}function C(F,b){return v(F)===!0||F.isFramebufferTexture&&F.minFilter!==An&&F.minFilter!==Kn?Math.log2(Math.max(b.width,b.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?b.mipmaps.length:1}function k(F){const b=F.target;b.removeEventListener("dispose",k),I(b),b.isVideoTexture&&p.delete(b)}function D(F){const b=F.target;b.removeEventListener("dispose",D),L(b)}function I(F){const b=r.get(F);if(b.__webglInit===void 0)return;const ue=F.source,pe=m.get(ue);if(pe){const ve=pe[b.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&X(F),Object.keys(pe).length===0&&m.delete(ue)}r.remove(F)}function X(F){const b=r.get(F);n.deleteTexture(b.__webglTexture);const ue=F.source,pe=m.get(ue);delete pe[b.__cacheKey],u.memory.textures--}function L(F){const b=r.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let ve=0;ve<b.__webglFramebuffer[pe].length;ve++)n.deleteFramebuffer(b.__webglFramebuffer[pe][ve]);else n.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)n.deleteFramebuffer(b.__webglFramebuffer[pe]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ue=F.textures;for(let pe=0,ve=ue.length;pe<ve;pe++){const me=r.get(ue[pe]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),u.memory.textures--),r.remove(ue[pe])}r.remove(F)}let R=0;function U(){R=0}function W(){const F=R;return F>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),R+=1,F}function V(F){const b=[];return b.push(F.wrapS),b.push(F.wrapT),b.push(F.wrapR||0),b.push(F.magFilter),b.push(F.minFilter),b.push(F.anisotropy),b.push(F.internalFormat),b.push(F.format),b.push(F.type),b.push(F.generateMipmaps),b.push(F.premultiplyAlpha),b.push(F.flipY),b.push(F.unpackAlignment),b.push(F.colorSpace),b.join()}function K(F,b){const ue=r.get(F);if(F.isVideoTexture&&Ut(F),F.isRenderTargetTexture===!1&&F.version>0&&ue.__version!==F.version){const pe=F.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(ue,F,b);return}}t.bindTexture(n.TEXTURE_2D,ue.__webglTexture,n.TEXTURE0+b)}function te(F,b){const ue=r.get(F);if(F.version>0&&ue.__version!==F.version){ge(ue,F,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,ue.__webglTexture,n.TEXTURE0+b)}function J(F,b){const ue=r.get(F);if(F.version>0&&ue.__version!==F.version){ge(ue,F,b);return}t.bindTexture(n.TEXTURE_3D,ue.__webglTexture,n.TEXTURE0+b)}function le(F,b){const ue=r.get(F);if(F.version>0&&ue.__version!==F.version){$(ue,F,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture,n.TEXTURE0+b)}const H={[Fa]:n.REPEAT,[ir]:n.CLAMP_TO_EDGE,[$u]:n.MIRRORED_REPEAT},ce={[An]:n.NEAREST,[Tv]:n.NEAREST_MIPMAP_NEAREST,[Ma]:n.NEAREST_MIPMAP_LINEAR,[Kn]:n.LINEAR,[Ou]:n.LINEAR_MIPMAP_NEAREST,[rr]:n.LINEAR_MIPMAP_LINEAR},ne={[bv]:n.NEVER,[Uv]:n.ALWAYS,[Pv]:n.LESS,[Zd]:n.LEQUAL,[Lv]:n.EQUAL,[Iv]:n.GEQUAL,[Dv]:n.GREATER,[Nv]:n.NOTEQUAL};function O(F,b){if(b.type===Ii&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Kn||b.magFilter===Ou||b.magFilter===Ma||b.magFilter===rr||b.minFilter===Kn||b.minFilter===Ou||b.minFilter===Ma||b.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,H[b.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,H[b.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,H[b.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,ce[b.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,ce[b.minFilter]),b.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,ne[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===An||b.minFilter!==Ma&&b.minFilter!==rr||b.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ue=e.get("EXT_texture_filter_anisotropic");n.texParameterf(F,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function re(F,b){let ue=!1;F.__webglInit===void 0&&(F.__webglInit=!0,b.addEventListener("dispose",k));const pe=b.source;let ve=m.get(pe);ve===void 0&&(ve={},m.set(pe,ve));const me=V(b);if(me!==F.__cacheKey){ve[me]===void 0&&(ve[me]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,ue=!0),ve[me].usedTimes++;const $e=ve[F.__cacheKey];$e!==void 0&&(ve[F.__cacheKey].usedTimes--,$e.usedTimes===0&&X(b)),F.__cacheKey=me,F.__webglTexture=ve[me].texture}return ue}function ge(F,b,ue){let pe=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=n.TEXTURE_3D);const ve=re(F,b),me=b.source;t.bindTexture(pe,F.__webglTexture,n.TEXTURE0+ue);const $e=r.get(me);if(me.version!==$e.__version||ve===!0){t.activeTexture(n.TEXTURE0+ue);const Pe=Et.getPrimaries(Et.workingColorSpace),Oe=b.colorSpace===Ei?null:Et.getPrimaries(b.colorSpace),ot=b.colorSpace===Ei||Pe===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let Ee=M(b.image,!1,o.maxTextureSize);Ee=tt(b,Ee);const Ie=l.convert(b.format,b.colorSpace),pt=l.convert(b.type);let et=T(b.internalFormat,Ie,pt,b.colorSpace,b.isVideoTexture);O(pe,b);let ke;const st=b.mipmaps,at=b.isVideoTexture!==!0,Rt=$e.__version===void 0||ve===!0,j=me.dataReady,Te=C(b,Ee);if(b.isDepthTexture)et=A(b.format===As,b.type),Rt&&(at?t.texStorage2D(n.TEXTURE_2D,1,et,Ee.width,Ee.height):t.texImage2D(n.TEXTURE_2D,0,et,Ee.width,Ee.height,0,Ie,pt,null));else if(b.isDataTexture)if(st.length>0){at&&Rt&&t.texStorage2D(n.TEXTURE_2D,Te,et,st[0].width,st[0].height);for(let he=0,de=st.length;he<de;he++)ke=st[he],at?j&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ke.width,ke.height,Ie,pt,ke.data):t.texImage2D(n.TEXTURE_2D,he,et,ke.width,ke.height,0,Ie,pt,ke.data);b.generateMipmaps=!1}else at?(Rt&&t.texStorage2D(n.TEXTURE_2D,Te,et,Ee.width,Ee.height),j&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ie,pt,Ee.data)):t.texImage2D(n.TEXTURE_2D,0,et,Ee.width,Ee.height,0,Ie,pt,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){at&&Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,et,st[0].width,st[0].height,Ee.depth);for(let he=0,de=st.length;he<de;he++)if(ke=st[he],b.format!==ui)if(Ie!==null)if(at){if(j)if(b.layerUpdates.size>0){const Ce=X_(ke.width,ke.height,b.format,b.type);for(const Ze of b.layerUpdates){const mt=ke.data.subarray(Ze*Ce/ke.data.BYTES_PER_ELEMENT,(Ze+1)*Ce/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,Ze,ke.width,ke.height,1,Ie,mt,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ke.width,ke.height,Ee.depth,Ie,ke.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,et,ke.width,ke.height,Ee.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?j&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ke.width,ke.height,Ee.depth,Ie,pt,ke.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,et,ke.width,ke.height,Ee.depth,0,Ie,pt,ke.data)}else{at&&Rt&&t.texStorage2D(n.TEXTURE_2D,Te,et,st[0].width,st[0].height);for(let he=0,de=st.length;he<de;he++)ke=st[he],b.format!==ui?Ie!==null?at?j&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,ke.width,ke.height,Ie,ke.data):t.compressedTexImage2D(n.TEXTURE_2D,he,et,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?j&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ke.width,ke.height,Ie,pt,ke.data):t.texImage2D(n.TEXTURE_2D,he,et,ke.width,ke.height,0,Ie,pt,ke.data)}else if(b.isDataArrayTexture)if(at){if(Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,et,Ee.width,Ee.height,Ee.depth),j)if(b.layerUpdates.size>0){const he=X_(Ee.width,Ee.height,b.format,b.type);for(const de of b.layerUpdates){const Ce=Ee.data.subarray(de*he/Ee.data.BYTES_PER_ELEMENT,(de+1)*he/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,Ee.width,Ee.height,1,Ie,pt,Ce)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ie,pt,Ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,et,Ee.width,Ee.height,Ee.depth,0,Ie,pt,Ee.data);else if(b.isData3DTexture)at?(Rt&&t.texStorage3D(n.TEXTURE_3D,Te,et,Ee.width,Ee.height,Ee.depth),j&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ie,pt,Ee.data)):t.texImage3D(n.TEXTURE_3D,0,et,Ee.width,Ee.height,Ee.depth,0,Ie,pt,Ee.data);else if(b.isFramebufferTexture){if(Rt)if(at)t.texStorage2D(n.TEXTURE_2D,Te,et,Ee.width,Ee.height);else{let he=Ee.width,de=Ee.height;for(let Ce=0;Ce<Te;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,et,he,de,0,Ie,pt,null),he>>=1,de>>=1}}else if(st.length>0){if(at&&Rt){const he=rt(st[0]);t.texStorage2D(n.TEXTURE_2D,Te,et,he.width,he.height)}for(let he=0,de=st.length;he<de;he++)ke=st[he],at?j&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ie,pt,ke):t.texImage2D(n.TEXTURE_2D,he,et,Ie,pt,ke);b.generateMipmaps=!1}else if(at){if(Rt){const he=rt(Ee);t.texStorage2D(n.TEXTURE_2D,Te,et,he.width,he.height)}j&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ie,pt,Ee)}else t.texImage2D(n.TEXTURE_2D,0,et,Ie,pt,Ee);v(b)&&x(pe),$e.__version=me.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function $(F,b,ue){if(b.image.length!==6)return;const pe=re(F,b),ve=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+ue);const me=r.get(ve);if(ve.version!==me.__version||pe===!0){t.activeTexture(n.TEXTURE0+ue);const $e=Et.getPrimaries(Et.workingColorSpace),Pe=b.colorSpace===Ei?null:Et.getPrimaries(b.colorSpace),Oe=b.colorSpace===Ei||$e===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ot=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,Ie=[];for(let de=0;de<6;de++)!ot&&!Ee?Ie[de]=M(b.image[de],!0,o.maxCubemapSize):Ie[de]=Ee?b.image[de].image:b.image[de],Ie[de]=tt(b,Ie[de]);const pt=Ie[0],et=l.convert(b.format,b.colorSpace),ke=l.convert(b.type),st=T(b.internalFormat,et,ke,b.colorSpace),at=b.isVideoTexture!==!0,Rt=me.__version===void 0||pe===!0,j=ve.dataReady;let Te=C(b,pt);O(n.TEXTURE_CUBE_MAP,b);let he;if(ot){at&&Rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,st,pt.width,pt.height);for(let de=0;de<6;de++){he=Ie[de].mipmaps;for(let Ce=0;Ce<he.length;Ce++){const Ze=he[Ce];b.format!==ui?et!==null?at?j&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,0,0,Ze.width,Ze.height,et,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,st,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,0,0,Ze.width,Ze.height,et,ke,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,st,Ze.width,Ze.height,0,et,ke,Ze.data)}}}else{if(he=b.mipmaps,at&&Rt){he.length>0&&Te++;const de=rt(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,st,de.width,de.height)}for(let de=0;de<6;de++)if(Ee){at?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ie[de].width,Ie[de].height,et,ke,Ie[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,st,Ie[de].width,Ie[de].height,0,et,ke,Ie[de].data);for(let Ce=0;Ce<he.length;Ce++){const mt=he[Ce].image[de].image;at?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,0,0,mt.width,mt.height,et,ke,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,st,mt.width,mt.height,0,et,ke,mt.data)}}else{at?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,et,ke,Ie[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,st,et,ke,Ie[de]);for(let Ce=0;Ce<he.length;Ce++){const Ze=he[Ce];at?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,0,0,et,ke,Ze.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,st,et,ke,Ze.image[de])}}}v(b)&&x(n.TEXTURE_CUBE_MAP),me.__version=ve.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function fe(F,b,ue,pe,ve,me){const $e=l.convert(ue.format,ue.colorSpace),Pe=l.convert(ue.type),Oe=T(ue.internalFormat,$e,Pe,ue.colorSpace);if(!r.get(b).__hasExternalTextures){const Ee=Math.max(1,b.width>>me),Ie=Math.max(1,b.height>>me);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,me,Oe,Ee,Ie,b.depth,0,$e,Pe,null):t.texImage2D(ve,me,Oe,Ee,Ie,0,$e,Pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,F),Ye(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ve,r.get(ue).__webglTexture,0,Mt(b)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,ve,r.get(ue).__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(F,b,ue){if(n.bindRenderbuffer(n.RENDERBUFFER,F),b.depthBuffer){const pe=b.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,me=A(b.stencilBuffer,ve),$e=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=Mt(b);Ye(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,me,b.width,b.height):ue?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,me,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,me,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,$e,n.RENDERBUFFER,F)}else{const pe=b.textures;for(let ve=0;ve<pe.length;ve++){const me=pe[ve],$e=l.convert(me.format,me.colorSpace),Pe=l.convert(me.type),Oe=T(me.internalFormat,$e,Pe,me.colorSpace),ot=Mt(b);ue&&Ye(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,Oe,b.width,b.height):Ye(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,Oe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Oe,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(F,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,F),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const pe=r.get(b.depthTexture).__webglTexture,ve=Mt(b);if(b.depthTexture.format===ys)Ye(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0);else if(b.depthTexture.format===As)Ye(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Re(F){const b=r.get(F),ue=F.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==F.depthTexture){const pe=F.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){const ve=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),b.__depthDisposeCallback=ve}b.__boundDepthTexture=pe}if(F.depthTexture&&!b.__autoAllocateDepthBuffer){if(ue)throw new Error("target.depthTexture not supported in Cube render targets");Se(b.__webglFramebuffer,F)}else if(ue){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=n.createRenderbuffer(),ye(b.__webglDepthbuffer[pe],F,!1);else{const ve=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=b.__webglDepthbuffer[pe];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,me)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ye(b.__webglDepthbuffer,F,!1);else{const pe=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,ve)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(F,b,ue){const pe=r.get(F);b!==void 0&&fe(pe.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ue!==void 0&&Re(F)}function Ne(F){const b=F.texture,ue=r.get(F),pe=r.get(b);F.addEventListener("dispose",D);const ve=F.textures,me=F.isWebGLCubeRenderTarget===!0,$e=ve.length>1;if($e||(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=b.version,u.memory.textures++),me){ue.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(b.mipmaps&&b.mipmaps.length>0){ue.__webglFramebuffer[Pe]=[];for(let Oe=0;Oe<b.mipmaps.length;Oe++)ue.__webglFramebuffer[Pe][Oe]=n.createFramebuffer()}else ue.__webglFramebuffer[Pe]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ue.__webglFramebuffer=[];for(let Pe=0;Pe<b.mipmaps.length;Pe++)ue.__webglFramebuffer[Pe]=n.createFramebuffer()}else ue.__webglFramebuffer=n.createFramebuffer();if($e)for(let Pe=0,Oe=ve.length;Pe<Oe;Pe++){const ot=r.get(ve[Pe]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),u.memory.textures++)}if(F.samples>0&&Ye(F)===!1){ue.__webglMultisampledFramebuffer=n.createFramebuffer(),ue.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ve.length;Pe++){const Oe=ve[Pe];ue.__webglColorRenderbuffer[Pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ue.__webglColorRenderbuffer[Pe]);const ot=l.convert(Oe.format,Oe.colorSpace),Ee=l.convert(Oe.type),Ie=T(Oe.internalFormat,ot,Ee,Oe.colorSpace,F.isXRRenderTarget===!0),pt=Mt(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,Ie,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,ue.__webglColorRenderbuffer[Pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(ue.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(ue.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),O(n.TEXTURE_CUBE_MAP,b);for(let Pe=0;Pe<6;Pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Oe=0;Oe<b.mipmaps.length;Oe++)fe(ue.__webglFramebuffer[Pe][Oe],F,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Oe);else fe(ue.__webglFramebuffer[Pe],F,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);v(b)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Pe=0,Oe=ve.length;Pe<Oe;Pe++){const ot=ve[Pe],Ee=r.get(ot);t.bindTexture(n.TEXTURE_2D,Ee.__webglTexture),O(n.TEXTURE_2D,ot),fe(ue.__webglFramebuffer,F,ot,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,0),v(ot)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let Pe=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Pe=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,pe.__webglTexture),O(Pe,b),b.mipmaps&&b.mipmaps.length>0)for(let Oe=0;Oe<b.mipmaps.length;Oe++)fe(ue.__webglFramebuffer[Oe],F,b,n.COLOR_ATTACHMENT0,Pe,Oe);else fe(ue.__webglFramebuffer,F,b,n.COLOR_ATTACHMENT0,Pe,0);v(b)&&x(Pe),t.unbindTexture()}F.depthBuffer&&Re(F)}function ft(F){const b=F.textures;for(let ue=0,pe=b.length;ue<pe;ue++){const ve=b[ue];if(v(ve)){const me=F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,$e=r.get(ve).__webglTexture;t.bindTexture(me,$e),x(me),t.unbindTexture()}}}const z=[],_t=[];function dt(F){if(F.samples>0){if(Ye(F)===!1){const b=F.textures,ue=F.width,pe=F.height;let ve=n.COLOR_BUFFER_BIT;const me=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$e=r.get(F),Pe=b.length>1;if(Pe)for(let Oe=0;Oe<b.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Oe=0;Oe<b.length;Oe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$e.__webglColorRenderbuffer[Oe]);const ot=r.get(b[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ot,0)}n.blitFramebuffer(0,0,ue,pe,0,0,ue,pe,ve,n.NEAREST),h===!0&&(z.length=0,_t.length=0,z.push(n.COLOR_ATTACHMENT0+Oe),F.depthBuffer&&F.resolveDepthBuffer===!1&&(z.push(me),_t.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_t)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,z))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Pe)for(let Oe=0;Oe<b.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,$e.__webglColorRenderbuffer[Oe]);const ot=r.get(b[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,ot,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&h){const b=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Mt(F){return Math.min(o.maxSamples,F.samples)}function Ye(F){const b=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ut(F){const b=u.render.frame;p.get(F)!==b&&(p.set(F,b),F.update())}function tt(F,b){const ue=F.colorSpace,pe=F.format,ve=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ue!==fr&&ue!==Ei&&(Et.getTransfer(ue)===Lt?(pe!==ui||ve!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ue)),b}function rt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=W,this.resetTextureUnits=U,this.setTexture2D=K,this.setTexture2DArray=te,this.setTexture3D=J,this.setTextureCube=le,this.rebindTextures=De,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ye}function Jv(n,e){function t(r,o=Ei){let l;const u=Et.getTransfer(o);if(r===Oi)return n.UNSIGNED_BYTE;if(r===Oc)return n.UNSIGNED_SHORT_4_4_4_4;if(r===kc)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Gd)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Hd)return n.BYTE;if(r===Vd)return n.SHORT;if(r===Eo)return n.UNSIGNED_SHORT;if(r===Fc)return n.INT;if(r===Xr)return n.UNSIGNED_INT;if(r===Ii)return n.FLOAT;if(r===Ro)return n.HALF_FLOAT;if(r===Wd)return n.ALPHA;if(r===Xd)return n.RGB;if(r===ui)return n.RGBA;if(r===jd)return n.LUMINANCE;if(r===Yd)return n.LUMINANCE_ALPHA;if(r===ys)return n.DEPTH_COMPONENT;if(r===As)return n.DEPTH_STENCIL;if(r===$d)return n.RED;if(r===zc)return n.RED_INTEGER;if(r===qd)return n.RG;if(r===Bc)return n.RG_INTEGER;if(r===Hc)return n.RGBA_INTEGER;if(r===Ca||r===Ra||r===ba||r===Pa)if(u===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ca)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ra)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ba)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pa)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ca)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ra)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ba)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pa)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qu||r===Ku||r===Zu||r===Qu)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===qu)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ku)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zu)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qu)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ju||r===ec||r===tc)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ju||r===ec)return u===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===tc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nc||r===ic||r===rc||r===sc||r===oc||r===ac||r===lc||r===uc||r===cc||r===fc||r===hc||r===dc||r===pc||r===mc)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===nc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ic)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ac)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===La||r===gc||r===_c)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===La)return u===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gc)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_c)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kd||r===vc||r===xc||r===yc)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===La)return l.COMPRESSED_RED_RGTC1_EXT;if(r===vc)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yc)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ts?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}class ex extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vo extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VT={type:"move"};class ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const c=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const M of e.hand.values()){const v=t.getJointPose(M,r),x=this._getHandJoint(d,M);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],m=p.position.distanceTo(_.position),y=.02,E=.005;d.inputState.pinching&&m>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&m<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(VT)))}return c!==null&&(c.visible=o!==null),h!==null&&(h.visible=l!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new vo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const GT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WT=`
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

}`;class XT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new yn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Jn({vertexShader:GT,fragmentShader:WT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zn(new qa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jT extends Yr{constructor(e,t){super();const r=this;let o=null,l=1,u=null,c="local-floor",h=1,d=null,p=null,_=null,m=null,y=null,E=null;const M=new XT,v=t.getContextAttributes();let x=null,T=null;const A=[],C=[],k=new it;let D=null;const I=new qn;I.layers.enable(1),I.viewport=new $t;const X=new qn;X.layers.enable(2),X.viewport=new $t;const L=[I,X],R=new ex;R.layers.enable(1),R.layers.enable(2);let U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=A[$];return fe===void 0&&(fe=new ad,A[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=A[$];return fe===void 0&&(fe=new ad,A[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=A[$];return fe===void 0&&(fe=new ad,A[$]=fe),fe.getHandSpace()};function V($){const fe=C.indexOf($.inputSource);if(fe===-1)return;const ye=A[fe];ye!==void 0&&(ye.update($.inputSource,$.frame,d||u),ye.dispatchEvent({type:$.type,data:$.inputSource}))}function K(){o.removeEventListener("select",V),o.removeEventListener("selectstart",V),o.removeEventListener("selectend",V),o.removeEventListener("squeeze",V),o.removeEventListener("squeezestart",V),o.removeEventListener("squeezeend",V),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",te);for(let $=0;$<A.length;$++){const fe=C[$];fe!==null&&(C[$]=null,A[$].disconnect(fe))}U=null,W=null,M.reset(),e.setRenderTarget(x),y=null,m=null,_=null,o=null,T=null,ge.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){l=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function($){d=$},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function($){if(o=$,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",V),o.addEventListener("selectstart",V),o.addEventListener("selectend",V),o.addEventListener("squeeze",V),o.addEventListener("squeezestart",V),o.addEventListener("squeezeend",V),o.addEventListener("end",K),o.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(k),o.renderState.layers===void 0){const fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),T=new ur(y.framebufferWidth,y.framebufferHeight,{format:ui,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let fe=null,ye=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=v.stencil?As:ys,ye=v.stencil?Ts:Xr);const Re={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:l};_=new XRWebGLBinding(o,t),m=_.createProjectionLayer(Re),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),T=new ur(m.textureWidth,m.textureHeight,{format:ui,type:Oi,depthTexture:new up(m.textureWidth,m.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(h),d=null,u=await o.requestReferenceSpace(c),ge.setContext(o),ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function te($){for(let fe=0;fe<$.removed.length;fe++){const ye=$.removed[fe],Se=C.indexOf(ye);Se>=0&&(C[Se]=null,A[Se].disconnect(ye))}for(let fe=0;fe<$.added.length;fe++){const ye=$.added[fe];let Se=C.indexOf(ye);if(Se===-1){for(let De=0;De<A.length;De++)if(De>=C.length){C.push(ye),Se=De;break}else if(C[De]===null){C[De]=ye,Se=De;break}if(Se===-1)break}const Re=A[Se];Re&&Re.connect(ye)}}const J=new q,le=new q;function H($,fe,ye){J.setFromMatrixPosition(fe.matrixWorld),le.setFromMatrixPosition(ye.matrixWorld);const Se=J.distanceTo(le),Re=fe.projectionMatrix.elements,De=ye.projectionMatrix.elements,Ne=Re[14]/(Re[10]-1),ft=Re[14]/(Re[10]+1),z=(Re[9]+1)/Re[5],_t=(Re[9]-1)/Re[5],dt=(Re[8]-1)/Re[0],Mt=(De[8]+1)/De[0],Ye=Ne*dt,Ut=Ne*Mt,tt=Se/(-dt+Mt),rt=tt*-dt;if(fe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(rt),$.translateZ(tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Re[10]===-1)$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const F=Ne+tt,b=ft+tt,ue=Ye-rt,pe=Ut+(Se-rt),ve=z*ft/b*F,me=_t*ft/b*F;$.projectionMatrix.makePerspective(ue,pe,ve,me,F,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ce($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(o===null)return;let fe=$.near,ye=$.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(ye=M.depthFar)),R.near=X.near=I.near=fe,R.far=X.far=I.far=ye,(U!==R.near||W!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),U=R.near,W=R.far);const Se=$.parent,Re=R.cameras;ce(R,Se);for(let De=0;De<Re.length;De++)ce(Re[De],Se);Re.length===2?H(R,I,X):R.projectionMatrix.copy(I.projectionMatrix),ne($,R,Se)};function ne($,fe,ye){ye===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(ye.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ha*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(m===null&&y===null))return h},this.setFoveation=function($){h=$,m!==null&&(m.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(R)};let O=null;function re($,fe){if(p=fe.getViewerPose(d||u),E=fe,p!==null){const ye=p.views;y!==null&&(e.setRenderTargetFramebuffer(T,y.framebuffer),e.setRenderTarget(T));let Se=!1;ye.length!==R.cameras.length&&(R.cameras.length=0,Se=!0);for(let De=0;De<ye.length;De++){const Ne=ye[De];let ft=null;if(y!==null)ft=y.getViewport(Ne);else{const _t=_.getViewSubImage(m,Ne);ft=_t.viewport,De===0&&(e.setRenderTargetTextures(T,_t.colorTexture,m.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(T))}let z=L[De];z===void 0&&(z=new qn,z.layers.enable(De),z.viewport=new $t,L[De]=z),z.matrix.fromArray(Ne.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(Ne.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(ft.x,ft.y,ft.width,ft.height),De===0&&(R.matrix.copy(z.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Se===!0&&R.cameras.push(z)}const Re=o.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const De=_.getDepthInformation(ye[0]);De&&De.isValid&&De.texture&&M.init(e,De,o.renderState)}}for(let ye=0;ye<A.length;ye++){const Se=C[ye],Re=A[ye];Se!==null&&Re!==void 0&&Re.update(Se,fe,d||u)}O&&O($,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),E=null}const ge=new jv;ge.setAnimationLoop(re),this.setAnimationLoop=function($){O=$},this.dispose=function(){}}}const ds=new ci,YT=new kt;function $T(n,e){function t(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function r(v,x){x.color.getRGB(v.fogColor.value,Vv(n)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function o(v,x,T,A,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(v,x):x.isMeshToonMaterial?(l(v,x),_(v,x)):x.isMeshPhongMaterial?(l(v,x),p(v,x)):x.isMeshStandardMaterial?(l(v,x),m(v,x),x.isMeshPhysicalMaterial&&y(v,x,C)):x.isMeshMatcapMaterial?(l(v,x),E(v,x)):x.isMeshDepthMaterial?l(v,x):x.isMeshDistanceMaterial?(l(v,x),M(v,x)):x.isMeshNormalMaterial?l(v,x):x.isLineBasicMaterial?(u(v,x),x.isLineDashedMaterial&&c(v,x)):x.isPointsMaterial?h(v,x,T,A):x.isSpriteMaterial?d(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,t(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===xn&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,t(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===xn&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,t(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,t(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const T=e.get(x),A=T.envMap,C=T.envMapRotation;A&&(v.envMap.value=A,ds.copy(C),ds.x*=-1,ds.y*=-1,ds.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),v.envMapRotation.value.setFromMatrix4(YT.makeRotationFromEuler(ds)),v.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap&&(v.lightMap.value=x.lightMap,v.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,v.lightMapTransform)),x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,v.aoMapTransform))}function u(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform))}function c(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function h(v,x,T,A){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*T,v.scale.value=A*.5,x.map&&(v.map.value=x.map,t(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function d(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function p(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function _(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function m(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,v.roughnessMapTransform)),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function y(v,x,T){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===xn&&v.clearcoatNormalScale.value.negate())),x.dispersion>0&&(v.dispersion.value=x.dispersion),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=T.texture,v.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,x){x.matcap&&(v.matcap.value=x.matcap)}function M(v,x){const T=e.get(x).light;v.referencePosition.value.setFromMatrixPosition(T.matrixWorld),v.nearDistance.value=T.shadow.camera.near,v.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function qT(n,e,t,r){let o={},l={},u=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(T,A){const C=A.program;r.uniformBlockBinding(T,C)}function d(T,A){let C=o[T.id];C===void 0&&(E(T),C=p(T),o[T.id]=C,T.addEventListener("dispose",v));const k=A.program;r.updateUBOMapping(T,k);const D=e.render.frame;l[T.id]!==D&&(m(T),l[T.id]=D)}function p(T){const A=_();T.__bindingPointIndex=A;const C=n.createBuffer(),k=T.__size,D=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,k,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,C),C}function _(){for(let T=0;T<c;T++)if(u.indexOf(T)===-1)return u.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){const A=o[T.id],C=T.uniforms,k=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let D=0,I=C.length;D<I;D++){const X=Array.isArray(C[D])?C[D]:[C[D]];for(let L=0,R=X.length;L<R;L++){const U=X[L];if(y(U,D,L,k)===!0){const W=U.__offset,V=Array.isArray(U.value)?U.value:[U.value];let K=0;for(let te=0;te<V.length;te++){const J=V[te],le=M(J);typeof J=="number"||typeof J=="boolean"?(U.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,W+K,U.__data)):J.isMatrix3?(U.__data[0]=J.elements[0],U.__data[1]=J.elements[1],U.__data[2]=J.elements[2],U.__data[3]=0,U.__data[4]=J.elements[3],U.__data[5]=J.elements[4],U.__data[6]=J.elements[5],U.__data[7]=0,U.__data[8]=J.elements[6],U.__data[9]=J.elements[7],U.__data[10]=J.elements[8],U.__data[11]=0):(J.toArray(U.__data,K),K+=le.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(T,A,C,k){const D=T.value,I=A+"_"+C;if(k[I]===void 0)return typeof D=="number"||typeof D=="boolean"?k[I]=D:k[I]=D.clone(),!0;{const X=k[I];if(typeof D=="number"||typeof D=="boolean"){if(X!==D)return k[I]=D,!0}else if(X.equals(D)===!1)return X.copy(D),!0}return!1}function E(T){const A=T.uniforms;let C=0;const k=16;for(let I=0,X=A.length;I<X;I++){const L=Array.isArray(A[I])?A[I]:[A[I]];for(let R=0,U=L.length;R<U;R++){const W=L[R],V=Array.isArray(W.value)?W.value:[W.value];for(let K=0,te=V.length;K<te;K++){const J=V[K],le=M(J),H=C%k,ce=H%le.boundary,ne=H+ce;C+=ce,ne!==0&&k-ne<le.storage&&(C+=k-ne),W.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=C,C+=le.storage}}}const D=C%k;return D>0&&(C+=k-D),T.__size=C,T.__cache={},this}function M(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function v(T){const A=T.target;A.removeEventListener("dispose",v);const C=u.indexOf(A.__bindingPointIndex);u.splice(C,1),n.deleteBuffer(o[A.id]),delete o[A.id],delete l[A.id]}function x(){for(const T in o)n.deleteBuffer(o[T]);u=[],o={},l={}}return{bind:h,update:d,dispose:x}}class tx{constructor(e={}){const{canvas:t=Ov(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let m;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=r.getContextAttributes().alpha}else m=u;const y=new Uint32Array(4),E=new Int32Array(4);let M=null,v=null;const x=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this.toneMapping=ar,this.toneMappingExposure=1;const A=this;let C=!1,k=0,D=0,I=null,X=-1,L=null;const R=new $t,U=new $t;let W=null;const V=new Ge(0);let K=0,te=t.width,J=t.height,le=1,H=null,ce=null;const ne=new $t(0,0,te,J),O=new $t(0,0,te,J);let re=!1;const ge=new Xc;let $=!1,fe=!1;const ye=new kt,Se=new q,Re=new $t,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function ft(){return I===null?le:1}let z=r;function _t(P,Y){return t.getContext(P,Y)}try{const P={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ic}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),z===null){const Y="webgl2";if(z=_t(Y,P),z===null)throw _t(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let dt,Mt,Ye,Ut,tt,rt,F,b,ue,pe,ve,me,$e,Pe,Oe,ot,Ee,Ie,pt,et,ke,st,at,Rt;function j(){dt=new o1(z),dt.init(),st=new Jv(z,dt),Mt=new e1(z,dt,e,st),Ye=new zT(z),Ut=new u1(z),tt=new CT,rt=new HT(z,dt,Ye,tt,Mt,st,Ut),F=new n1(A),b=new s1(A),ue=new gM(z),at=new Qw(z,ue),pe=new a1(z,ue,Ut,at),ve=new f1(z,pe,ue,Ut),pt=new c1(z,Mt,rt),ot=new t1(tt),me=new AT(A,F,b,dt,Mt,at,ot),$e=new $T(A,tt),Pe=new bT,Oe=new UT(dt),Ie=new Zw(A,F,b,Ye,ve,m,h),Ee=new kT(A,ve,Mt),Rt=new qT(z,Ut,Mt,Ye),et=new Jw(z,dt,Ut),ke=new l1(z,dt,Ut),Ut.programs=me.programs,A.capabilities=Mt,A.extensions=dt,A.properties=tt,A.renderLists=Pe,A.shadowMap=Ee,A.state=Ye,A.info=Ut}j();const Te=new jT(A,z);this.xr=Te,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=dt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=dt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(P){P!==void 0&&(le=P,this.setSize(te,J,!1))},this.getSize=function(P){return P.set(te,J)},this.setSize=function(P,Y,ie=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=P,J=Y,t.width=Math.floor(P*le),t.height=Math.floor(Y*le),ie===!0&&(t.style.width=P+"px",t.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(te*le,J*le).floor()},this.setDrawingBufferSize=function(P,Y,ie){te=P,J=Y,le=ie,t.width=Math.floor(P*ie),t.height=Math.floor(Y*ie),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(ne)},this.setViewport=function(P,Y,ie,oe){P.isVector4?ne.set(P.x,P.y,P.z,P.w):ne.set(P,Y,ie,oe),Ye.viewport(R.copy(ne).multiplyScalar(le).round())},this.getScissor=function(P){return P.copy(O)},this.setScissor=function(P,Y,ie,oe){P.isVector4?O.set(P.x,P.y,P.z,P.w):O.set(P,Y,ie,oe),Ye.scissor(U.copy(O).multiplyScalar(le).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(P){Ye.setScissorTest(re=P)},this.setOpaqueSort=function(P){H=P},this.setTransparentSort=function(P){ce=P},this.getClearColor=function(P){return P.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(P=!0,Y=!0,ie=!0){let oe=0;if(P){let Z=!1;if(I!==null){const Ae=I.texture.format;Z=Ae===Hc||Ae===Bc||Ae===zc}if(Z){const Ae=I.texture.type,Ue=Ae===Oi||Ae===Xr||Ae===Eo||Ae===Ts||Ae===Oc||Ae===kc,He=Ie.getClearColor(),be=Ie.getClearAlpha(),Je=He.r,Qe=He.g,Xe=He.b;Ue?(y[0]=Je,y[1]=Qe,y[2]=Xe,y[3]=be,z.clearBufferuiv(z.COLOR,0,y)):(E[0]=Je,E[1]=Qe,E[2]=Xe,E[3]=be,z.clearBufferiv(z.COLOR,0,E))}else oe|=z.COLOR_BUFFER_BIT}Y&&(oe|=z.DEPTH_BUFFER_BIT),ie&&(oe|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Pe.dispose(),Oe.dispose(),tt.dispose(),F.dispose(),b.dispose(),ve.dispose(),at.dispose(),Rt.dispose(),me.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Bn),Te.removeEventListener("sessionend",dr),fi.stop()};function he(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const P=Ut.autoReset,Y=Ee.enabled,ie=Ee.autoUpdate,oe=Ee.needsUpdate,Z=Ee.type;j(),Ut.autoReset=P,Ee.enabled=Y,Ee.autoUpdate=ie,Ee.needsUpdate=oe,Ee.type=Z}function Ce(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ze(P){const Y=P.target;Y.removeEventListener("dispose",Ze),mt(Y)}function mt(P){zt(P),tt.remove(P)}function zt(P){const Y=tt.get(P).programs;Y!==void 0&&(Y.forEach(function(ie){me.releaseProgram(ie)}),P.isShaderMaterial&&me.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,ie,oe,Z,Ae){Y===null&&(Y=De);const Ue=Z.isMesh&&Z.matrixWorld.determinant()<0,He=Jc(P,Y,ie,oe,Z);Ye.setMaterial(oe,Ue);let be=ie.index,Je=1;if(oe.wireframe===!0){if(be=pe.getWireframeAttribute(ie),be===void 0)return;Je=2}const Qe=ie.drawRange,Xe=ie.attributes.position;let gt=Qe.start*Je,Ft=(Qe.start+Qe.count)*Je;Ae!==null&&(gt=Math.max(gt,Ae.start*Je),Ft=Math.min(Ft,(Ae.start+Ae.count)*Je)),be!==null?(gt=Math.max(gt,0),Ft=Math.min(Ft,be.count)):Xe!=null&&(gt=Math.max(gt,0),Ft=Math.min(Ft,Xe.count));const Dt=Ft-gt;if(Dt<0||Dt===1/0)return;at.setup(Z,oe,He,ie,be);let tn,lt=et;if(be!==null&&(tn=ue.get(be),lt=ke,lt.setIndex(tn)),Z.isMesh)oe.wireframe===!0?(Ye.setLineWidth(oe.wireframeLinewidth*ft()),lt.setMode(z.LINES)):lt.setMode(z.TRIANGLES);else if(Z.isLine){let je=oe.linewidth;je===void 0&&(je=1),Ye.setLineWidth(je*ft()),Z.isLineSegments?lt.setMode(z.LINES):Z.isLineLoop?lt.setMode(z.LINE_LOOP):lt.setMode(z.LINE_STRIP)}else Z.isPoints?lt.setMode(z.POINTS):Z.isSprite&&lt.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)lt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))lt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const je=Z._multiDrawStarts,wt=Z._multiDrawCounts,yt=Z._multiDrawCount,Hn=be?ue.get(be).bytesPerElement:1,gr=tt.get(oe).currentProgram.getUniforms();for(let nn=0;nn<yt;nn++)gr.setValue(z,"_gl_DrawID",nn),lt.render(je[nn]/Hn,wt[nn])}else if(Z.isInstancedMesh)lt.renderInstances(gt,Dt,Z.count);else if(ie.isInstancedBufferGeometry){const je=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,wt=Math.min(ie.instanceCount,je);lt.renderInstances(gt,Dt,wt)}else lt.render(gt,Dt)};function Xt(P,Y,ie){P.transparent===!0&&P.side===Ni&&P.forceSinglePass===!1?(P.side=xn,P.needsUpdate=!0,mr(P,Y,ie),P.side=lr,P.needsUpdate=!0,mr(P,Y,ie),P.side=Ni):mr(P,Y,ie)}this.compile=function(P,Y,ie=null){ie===null&&(ie=P),v=Oe.get(ie),v.init(Y),T.push(v),ie.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),P!==ie&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const oe=new Set;return P.traverse(function(Z){const Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let Ue=0;Ue<Ae.length;Ue++){const He=Ae[Ue];Xt(He,ie,Z),oe.add(He)}else Xt(Ae,ie,Z),oe.add(Ae)}),T.pop(),v=null,oe},this.compileAsync=function(P,Y,ie=null){const oe=this.compile(P,Y,ie);return new Promise(Z=>{function Ae(){if(oe.forEach(function(Ue){tt.get(Ue).currentProgram.isReady()&&oe.delete(Ue)}),oe.size===0){Z(P);return}setTimeout(Ae,10)}dt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let vt=null;function zn(P){vt&&vt(P)}function Bn(){fi.stop()}function dr(){fi.start()}const fi=new jv;fi.setAnimationLoop(zn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(P){vt=P,Te.setAnimationLoop(P),P===null?fi.stop():fi.start()},Te.addEventListener("sessionstart",Bn),Te.addEventListener("sessionend",dr),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(Y),Y=Te.getCamera()),P.isScene===!0&&P.onBeforeRender(A,P,Y,I),v=Oe.get(P,T.length),v.init(Y),T.push(v),ye.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ge.setFromProjectionMatrix(ye),fe=this.localClippingEnabled,$=ot.init(this.clippingPlanes,fe),M=Pe.get(P,x.length),M.init(),x.push(M),Te.enabled===!0&&Te.isPresenting===!0){const Ae=A.xr.getDepthSensingMesh();Ae!==null&&zi(Ae,Y,-1/0,A.sortObjects)}zi(P,Y,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(H,ce),Ne=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Ne&&Ie.addToRenderList(M,P),this.info.render.frame++,$===!0&&ot.beginShadows();const ie=v.state.shadowsArray;Ee.render(ie,P,Y),$===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=M.opaque,Z=M.transmissive;if(v.setupLights(),Y.isArrayCamera){const Ae=Y.cameras;if(Z.length>0)for(let Ue=0,He=Ae.length;Ue<He;Ue++){const be=Ae[Ue];pr(oe,Z,P,be)}Ne&&Ie.render(P);for(let Ue=0,He=Ae.length;Ue<He;Ue++){const be=Ae[Ue];Ja(M,P,be,be.viewport)}}else Z.length>0&&pr(oe,Z,P,Y),Ne&&Ie.render(P),Ja(M,P,Y);I!==null&&(rt.updateMultisampleRenderTarget(I),rt.updateRenderTargetMipmap(I)),P.isScene===!0&&P.onAfterRender(A,P,Y),at.resetDefaultState(),X=-1,L=null,T.pop(),T.length>0?(v=T[T.length-1],$===!0&&ot.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,x.pop(),x.length>0?M=x[x.length-1]:M=null};function zi(P,Y,ie,oe){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)ie=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)v.pushLight(P),P.castShadow&&v.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ge.intersectsSprite(P)){oe&&Re.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ye);const Ue=ve.update(P),He=P.material;He.visible&&M.push(P,Ue,He,ie,Re.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ge.intersectsObject(P))){const Ue=ve.update(P),He=P.material;if(oe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Re.copy(P.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Re.copy(Ue.boundingSphere.center)),Re.applyMatrix4(P.matrixWorld).applyMatrix4(ye)),Array.isArray(He)){const be=Ue.groups;for(let Je=0,Qe=be.length;Je<Qe;Je++){const Xe=be[Je],gt=He[Xe.materialIndex];gt&&gt.visible&&M.push(P,Ue,gt,ie,Re.z,Xe)}}else He.visible&&M.push(P,Ue,He,ie,Re.z,null)}}const Ae=P.children;for(let Ue=0,He=Ae.length;Ue<He;Ue++)zi(Ae[Ue],Y,ie,oe)}function Ja(P,Y,ie,oe){const Z=P.opaque,Ae=P.transmissive,Ue=P.transparent;v.setupLightsView(ie),$===!0&&ot.setGlobalState(A.clippingPlanes,ie),oe&&Ye.viewport(R.copy(oe)),Z.length>0&&Bi(Z,Y,ie),Ae.length>0&&Bi(Ae,Y,ie),Ue.length>0&&Bi(Ue,Y,ie),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function pr(P,Y,ie,oe){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[oe.id]===void 0&&(v.state.transmissionRenderTarget[oe.id]=new ur(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Ro:Oi,minFilter:rr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Ae=v.state.transmissionRenderTarget[oe.id],Ue=oe.viewport||R;Ae.setSize(Ue.z,Ue.w);const He=A.getRenderTarget();A.setRenderTarget(Ae),A.getClearColor(V),K=A.getClearAlpha(),K<1&&A.setClearColor(16777215,.5),A.clear(),Ne&&Ie.render(ie);const be=A.toneMapping;A.toneMapping=ar;const Je=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),v.setupLightsView(oe),$===!0&&ot.setGlobalState(A.clippingPlanes,oe),Bi(P,ie,oe),rt.updateMultisampleRenderTarget(Ae),rt.updateRenderTargetMipmap(Ae),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Xe=0,gt=Y.length;Xe<gt;Xe++){const Ft=Y[Xe],Dt=Ft.object,tn=Ft.geometry,lt=Ft.material,je=Ft.group;if(lt.side===Ni&&Dt.layers.test(oe.layers)){const wt=lt.side;lt.side=xn,lt.needsUpdate=!0,$r(Dt,ie,oe,tn,lt,je),lt.side=wt,lt.needsUpdate=!0,Qe=!0}}Qe===!0&&(rt.updateMultisampleRenderTarget(Ae),rt.updateRenderTargetMipmap(Ae))}A.setRenderTarget(He),A.setClearColor(V,K),Je!==void 0&&(oe.viewport=Je),A.toneMapping=be}function Bi(P,Y,ie){const oe=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Ae=P.length;Z<Ae;Z++){const Ue=P[Z],He=Ue.object,be=Ue.geometry,Je=oe===null?Ue.material:oe,Qe=Ue.group;He.layers.test(ie.layers)&&$r(He,Y,ie,be,Je,Qe)}}function $r(P,Y,ie,oe,Z,Ae){P.onBeforeRender(A,Y,ie,oe,Z,Ae),P.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(A,Y,ie,oe,P,Ae),Z.transparent===!0&&Z.side===Ni&&Z.forceSinglePass===!1?(Z.side=xn,Z.needsUpdate=!0,A.renderBufferDirect(ie,Y,oe,Z,P,Ae),Z.side=lr,Z.needsUpdate=!0,A.renderBufferDirect(ie,Y,oe,Z,P,Ae),Z.side=Ni):A.renderBufferDirect(ie,Y,oe,Z,P,Ae),P.onAfterRender(A,Y,ie,oe,Z,Ae)}function mr(P,Y,ie){Y.isScene!==!0&&(Y=De);const oe=tt.get(P),Z=v.state.lights,Ae=v.state.shadowsArray,Ue=Z.state.version,He=me.getParameters(P,Z.state,Ae,Y,ie),be=me.getProgramCacheKey(He);let Je=oe.programs;oe.environment=P.isMeshStandardMaterial?Y.environment:null,oe.fog=Y.fog,oe.envMap=(P.isMeshStandardMaterial?b:F).get(P.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,Je===void 0&&(P.addEventListener("dispose",Ze),Je=new Map,oe.programs=Je);let Qe=Je.get(be);if(Qe!==void 0){if(oe.currentProgram===Qe&&oe.lightsStateVersion===Ue)return tl(P,He),Qe}else He.uniforms=me.getUniforms(P),P.onBeforeCompile(He,A),Qe=me.acquireProgram(He,be),Je.set(be,Qe),oe.uniforms=He.uniforms;const Xe=oe.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=ot.uniform),tl(P,He),oe.needsLights=nl(P),oe.lightsStateVersion=Ue,oe.needsLights&&(Xe.ambientLightColor.value=Z.state.ambient,Xe.lightProbe.value=Z.state.probe,Xe.directionalLights.value=Z.state.directional,Xe.directionalLightShadows.value=Z.state.directionalShadow,Xe.spotLights.value=Z.state.spot,Xe.spotLightShadows.value=Z.state.spotShadow,Xe.rectAreaLights.value=Z.state.rectArea,Xe.ltc_1.value=Z.state.rectAreaLTC1,Xe.ltc_2.value=Z.state.rectAreaLTC2,Xe.pointLights.value=Z.state.point,Xe.pointLightShadows.value=Z.state.pointShadow,Xe.hemisphereLights.value=Z.state.hemi,Xe.directionalShadowMap.value=Z.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xe.spotShadowMap.value=Z.state.spotShadowMap,Xe.spotLightMatrix.value=Z.state.spotLightMatrix,Xe.spotLightMap.value=Z.state.spotLightMap,Xe.pointShadowMap.value=Z.state.pointShadowMap,Xe.pointShadowMatrix.value=Z.state.pointShadowMatrix),oe.currentProgram=Qe,oe.uniformsList=null,Qe}function el(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=ku.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function tl(P,Y){const ie=tt.get(P);ie.outputColorSpace=Y.outputColorSpace,ie.batching=Y.batching,ie.batchingColor=Y.batchingColor,ie.instancing=Y.instancing,ie.instancingColor=Y.instancingColor,ie.instancingMorph=Y.instancingMorph,ie.skinning=Y.skinning,ie.morphTargets=Y.morphTargets,ie.morphNormals=Y.morphNormals,ie.morphColors=Y.morphColors,ie.morphTargetsCount=Y.morphTargetsCount,ie.numClippingPlanes=Y.numClippingPlanes,ie.numIntersection=Y.numClipIntersection,ie.vertexAlphas=Y.vertexAlphas,ie.vertexTangents=Y.vertexTangents,ie.toneMapping=Y.toneMapping}function Jc(P,Y,ie,oe,Z){Y.isScene!==!0&&(Y=De),rt.resetTextureUnits();const Ae=Y.fog,Ue=oe.isMeshStandardMaterial?Y.environment:null,He=I===null?A.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:fr,be=(oe.isMeshStandardMaterial?b:F).get(oe.envMap||Ue),Je=oe.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Qe=!!ie.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Xe=!!ie.morphAttributes.position,gt=!!ie.morphAttributes.normal,Ft=!!ie.morphAttributes.color;let Dt=ar;oe.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Dt=A.toneMapping);const tn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,lt=tn!==void 0?tn.length:0,je=tt.get(oe),wt=v.state.lights;if($===!0&&(fe===!0||P!==L)){const Rn=P===L&&oe.id===X;ot.setState(oe,P,Rn)}let yt=!1;oe.version===je.__version?(je.needsLights&&je.lightsStateVersion!==wt.state.version||je.outputColorSpace!==He||Z.isBatchedMesh&&je.batching===!1||!Z.isBatchedMesh&&je.batching===!0||Z.isBatchedMesh&&je.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&je.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&je.instancing===!1||!Z.isInstancedMesh&&je.instancing===!0||Z.isSkinnedMesh&&je.skinning===!1||!Z.isSkinnedMesh&&je.skinning===!0||Z.isInstancedMesh&&je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&je.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&je.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&je.instancingMorph===!1&&Z.morphTexture!==null||je.envMap!==be||oe.fog===!0&&je.fog!==Ae||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ot.numPlanes||je.numIntersection!==ot.numIntersection)||je.vertexAlphas!==Je||je.vertexTangents!==Qe||je.morphTargets!==Xe||je.morphNormals!==gt||je.morphColors!==Ft||je.toneMapping!==Dt||je.morphTargetsCount!==lt)&&(yt=!0):(yt=!0,je.__version=oe.version);let Hn=je.currentProgram;yt===!0&&(Hn=mr(oe,Y,Z));let gr=!1,nn=!1,_r=!1;const bt=Hn.getUniforms(),Vn=je.uniforms;if(Ye.useProgram(Hn.program)&&(gr=!0,nn=!0,_r=!0),oe.id!==X&&(X=oe.id,nn=!0),gr||L!==P){bt.setValue(z,"projectionMatrix",P.projectionMatrix),bt.setValue(z,"viewMatrix",P.matrixWorldInverse);const Rn=bt.map.cameraPosition;Rn!==void 0&&Rn.setValue(z,Se.setFromMatrixPosition(P.matrixWorld)),Mt.logarithmicDepthBuffer&&bt.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&bt.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),L!==P&&(L=P,nn=!0,_r=!0)}if(Z.isSkinnedMesh){bt.setOptional(z,Z,"bindMatrix"),bt.setOptional(z,Z,"bindMatrixInverse");const Rn=Z.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),bt.setValue(z,"boneTexture",Rn.boneTexture,rt))}Z.isBatchedMesh&&(bt.setOptional(z,Z,"batchingTexture"),bt.setValue(z,"batchingTexture",Z._matricesTexture,rt),bt.setOptional(z,Z,"batchingIdTexture"),bt.setValue(z,"batchingIdTexture",Z._indirectTexture,rt),bt.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&bt.setValue(z,"batchingColorTexture",Z._colorsTexture,rt));const Io=ie.morphAttributes;if((Io.position!==void 0||Io.normal!==void 0||Io.color!==void 0)&&pt.update(Z,ie,Hn),(nn||je.receiveShadow!==Z.receiveShadow)&&(je.receiveShadow=Z.receiveShadow,bt.setValue(z,"receiveShadow",Z.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Vn.envMap.value=be,Vn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Y.environment!==null&&(Vn.envMapIntensity.value=Y.environmentIntensity),nn&&(bt.setValue(z,"toneMappingExposure",A.toneMappingExposure),je.needsLights&&Hi(Vn,_r),Ae&&oe.fog===!0&&$e.refreshFogUniforms(Vn,Ae),$e.refreshMaterialUniforms(Vn,oe,le,J,v.state.transmissionRenderTarget[P.id]),ku.upload(z,el(je),Vn,rt)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(ku.upload(z,el(je),Vn,rt),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&bt.setValue(z,"center",Z.center),bt.setValue(z,"modelViewMatrix",Z.modelViewMatrix),bt.setValue(z,"normalMatrix",Z.normalMatrix),bt.setValue(z,"modelMatrix",Z.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Rn=oe.uniformsGroups;for(let qr=0,il=Rn.length;qr<il;qr++){const bs=Rn[qr];Rt.update(bs,Hn),Rt.bind(bs,Hn)}}return Hn}function Hi(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function nl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(P,Y,ie){tt.get(P.texture).__webglTexture=Y,tt.get(P.depthTexture).__webglTexture=ie;const oe=tt.get(P);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=ie===void 0,oe.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Y){const ie=tt.get(P);ie.__webglFramebuffer=Y,ie.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,ie=0){I=P,k=Y,D=ie;let oe=!0,Z=null,Ae=!1,Ue=!1;if(P){const be=tt.get(P);if(be.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(z.FRAMEBUFFER,null),oe=!1;else if(be.__webglFramebuffer===void 0)rt.setupRenderTarget(P);else if(be.__hasExternalTextures)rt.rebindTextures(P,tt.get(P.texture).__webglTexture,tt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Xe=P.depthTexture;if(be.__boundDepthTexture!==Xe){if(Xe!==null&&tt.has(Xe)&&(P.width!==Xe.image.width||P.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(P)}}const Je=P.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ue=!0);const Qe=tt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Qe[Y])?Z=Qe[Y][ie]:Z=Qe[Y],Ae=!0):P.samples>0&&rt.useMultisampledRTT(P)===!1?Z=tt.get(P).__webglMultisampledFramebuffer:Array.isArray(Qe)?Z=Qe[ie]:Z=Qe,R.copy(P.viewport),U.copy(P.scissor),W=P.scissorTest}else R.copy(ne).multiplyScalar(le).floor(),U.copy(O).multiplyScalar(le).floor(),W=re;if(Ye.bindFramebuffer(z.FRAMEBUFFER,Z)&&oe&&Ye.drawBuffers(P,Z),Ye.viewport(R),Ye.scissor(U),Ye.setScissorTest(W),Ae){const be=tt.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,be.__webglTexture,ie)}else if(Ue){const be=tt.get(P.texture),Je=Y||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,be.__webglTexture,ie||0,Je)}X=-1},this.readRenderTargetPixels=function(P,Y,ie,oe,Z,Ae,Ue){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=tt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ue!==void 0&&(He=He[Ue]),He){Ye.bindFramebuffer(z.FRAMEBUFFER,He);try{const be=P.texture,Je=be.format,Qe=be.type;if(!Mt.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-oe&&ie>=0&&ie<=P.height-Z&&z.readPixels(Y,ie,oe,Z,st.convert(Je),st.convert(Qe),Ae)}finally{const be=I!==null?tt.get(I).__webglFramebuffer:null;Ye.bindFramebuffer(z.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(P,Y,ie,oe,Z,Ae,Ue){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=tt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ue!==void 0&&(He=He[Ue]),He){Ye.bindFramebuffer(z.FRAMEBUFFER,He);try{const be=P.texture,Je=be.format,Qe=be.type;if(!Mt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=P.width-oe&&ie>=0&&ie<=P.height-Z){const Xe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Xe),z.bufferData(z.PIXEL_PACK_BUFFER,Ae.byteLength,z.STREAM_READ),z.readPixels(Y,ie,oe,Z,st.convert(Je),st.convert(Qe),0),z.flush();const gt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);await ZS(z,gt,4);try{z.bindBuffer(z.PIXEL_PACK_BUFFER,Xe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ae)}finally{z.deleteBuffer(Xe),z.deleteSync(gt)}return Ae}}finally{const be=I!==null?tt.get(I).__webglFramebuffer:null;Ye.bindFramebuffer(z.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(P,Y=null,ie=0){P.isTexture!==!0&&(Ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,P=arguments[1]);const oe=Math.pow(2,-ie),Z=Math.floor(P.image.width*oe),Ae=Math.floor(P.image.height*oe),Ue=Y!==null?Y.x:0,He=Y!==null?Y.y:0;rt.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,ie,0,0,Ue,He,Z,Ae),Ye.unbindTexture()},this.copyTextureToTexture=function(P,Y,ie=null,oe=null,Z=0){P.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,P=arguments[1],Y=arguments[2],Z=arguments[3]||0,ie=null);let Ae,Ue,He,be,Je,Qe;ie!==null?(Ae=ie.max.x-ie.min.x,Ue=ie.max.y-ie.min.y,He=ie.min.x,be=ie.min.y):(Ae=P.image.width,Ue=P.image.height,He=0,be=0),oe!==null?(Je=oe.x,Qe=oe.y):(Je=0,Qe=0);const Xe=st.convert(Y.format),gt=st.convert(Y.type);rt.setTexture2D(Y,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ft=z.getParameter(z.UNPACK_ROW_LENGTH),Dt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),tn=z.getParameter(z.UNPACK_SKIP_PIXELS),lt=z.getParameter(z.UNPACK_SKIP_ROWS),je=z.getParameter(z.UNPACK_SKIP_IMAGES),wt=P.isCompressedTexture?P.mipmaps[Z]:P.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,wt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,wt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,He),z.pixelStorei(z.UNPACK_SKIP_ROWS,be),P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Z,Je,Qe,Ae,Ue,Xe,gt,wt.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Z,Je,Qe,wt.width,wt.height,Xe,wt.data):z.texSubImage2D(z.TEXTURE_2D,Z,Je,Qe,Ae,Ue,Xe,gt,wt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ft),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Dt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,tn),z.pixelStorei(z.UNPACK_SKIP_ROWS,lt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,je),Z===0&&Y.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Ye.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,ie=null,oe=null,Z=0){P.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,oe=arguments[1]||null,P=arguments[2],Y=arguments[3],Z=arguments[4]||0);let Ae,Ue,He,be,Je,Qe,Xe,gt,Ft;const Dt=P.isCompressedTexture?P.mipmaps[Z]:P.image;ie!==null?(Ae=ie.max.x-ie.min.x,Ue=ie.max.y-ie.min.y,He=ie.max.z-ie.min.z,be=ie.min.x,Je=ie.min.y,Qe=ie.min.z):(Ae=Dt.width,Ue=Dt.height,He=Dt.depth,be=0,Je=0,Qe=0),oe!==null?(Xe=oe.x,gt=oe.y,Ft=oe.z):(Xe=0,gt=0,Ft=0);const tn=st.convert(Y.format),lt=st.convert(Y.type);let je;if(Y.isData3DTexture)rt.setTexture3D(Y,0),je=z.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)rt.setTexture2DArray(Y,0),je=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const wt=z.getParameter(z.UNPACK_ROW_LENGTH),yt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Hn=z.getParameter(z.UNPACK_SKIP_PIXELS),gr=z.getParameter(z.UNPACK_SKIP_ROWS),nn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Dt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Dt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,be),z.pixelStorei(z.UNPACK_SKIP_ROWS,Je),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Qe),P.isDataTexture||P.isData3DTexture?z.texSubImage3D(je,Z,Xe,gt,Ft,Ae,Ue,He,tn,lt,Dt.data):Y.isCompressedArrayTexture?z.compressedTexSubImage3D(je,Z,Xe,gt,Ft,Ae,Ue,He,tn,Dt.data):z.texSubImage3D(je,Z,Xe,gt,Ft,Ae,Ue,He,tn,lt,Dt),z.pixelStorei(z.UNPACK_ROW_LENGTH,wt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,yt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Hn),z.pixelStorei(z.UNPACK_SKIP_ROWS,gr),z.pixelStorei(z.UNPACK_SKIP_IMAGES,nn),Z===0&&Y.generateMipmaps&&z.generateMipmap(je),Ye.unbindTexture()},this.initRenderTarget=function(P){tt.get(P).__webglFramebuffer===void 0&&rt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?rt.setTextureCube(P,0):P.isData3DTexture?rt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?rt.setTexture2DArray(P,0):rt.setTexture2D(P,0),Ye.unbindTexture()},this.resetState=function(){k=0,D=0,I=null,Ye.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Gc?"display-p3":"srgb",t.unpackColorSpace=Et.workingColorSpace===Ya?"display-p3":"srgb"}}class Yc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new Yc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nx extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ka extends hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new q,Mc=new q,j_=new kt,xa=new $a,Au=new Lo,ld=new q,Y_=new q;class ix extends qt{constructor(e=new cn,t=new Ka){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Sc.fromBufferAttribute(t,o-1),Mc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Sc.distanceTo(Mc);e.setAttribute("lineDistance",new kn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Au.copy(r.boundingSphere),Au.applyMatrix4(o),Au.radius+=l,e.ray.intersectsSphere(Au)===!1)return;j_.copy(o).invert(),xa.copy(e.ray).applyMatrix4(j_);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=this.isLineSegments?2:1,p=r.index,m=r.attributes.position;if(p!==null){const y=Math.max(0,u.start),E=Math.min(p.count,u.start+u.count);for(let M=y,v=E-1;M<v;M+=d){const x=p.getX(M),T=p.getX(M+1),A=Cu(this,e,xa,h,x,T);A&&t.push(A)}if(this.isLineLoop){const M=p.getX(E-1),v=p.getX(y),x=Cu(this,e,xa,h,M,v);x&&t.push(x)}}else{const y=Math.max(0,u.start),E=Math.min(m.count,u.start+u.count);for(let M=y,v=E-1;M<v;M+=d){const x=Cu(this,e,xa,h,M,M+1);x&&t.push(x)}if(this.isLineLoop){const M=Cu(this,e,xa,h,E-1,y);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function Cu(n,e,t,r,o,l){const u=n.geometry.attributes.position;if(Sc.fromBufferAttribute(u,o),Mc.fromBufferAttribute(u,l),t.distanceSqToSegment(Sc,Mc,ld,Y_)>r)return;ld.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(ld);if(!(h<e.near||h>e.far))return{distance:h,point:Y_.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,object:n}}const $_=new q,q_=new q;class $c extends ix{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)$_.fromBufferAttribute(t,o),q_.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+$_.distanceTo(q_);e.setAttribute("lineDistance",new kn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cp extends hr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const K_=new kt,wd=new $a,Ru=new Lo,bu=new q;class fp extends qt{constructor(e=new cn,t=new cp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ru.copy(r.boundingSphere),Ru.applyMatrix4(o),Ru.radius+=l,e.ray.intersectsSphere(Ru)===!1)return;K_.copy(o).invert(),wd.copy(e.ray).applyMatrix4(K_);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=r.index,_=r.attributes.position;if(d!==null){const m=Math.max(0,u.start),y=Math.min(d.count,u.start+u.count);for(let E=m,M=y;E<M;E++){const v=d.getX(E);bu.fromBufferAttribute(_,v),Z_(bu,v,h,o,e,t,this)}}else{const m=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let E=m,M=y;E<M;E++)bu.fromBufferAttribute(_,E),Z_(bu,E,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function Z_(n,e,t,r,o,l,u){const c=wd.distanceSqToPoint(n);if(c<t){const h=new q;wd.closestPointToPoint(n,h),h.applyMatrix4(r);const d=o.ray.origin.distanceTo(h);if(d<o.near||d>o.far)return;l.push({distance:d,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,object:u})}}class Ss extends cn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+c,Math.PI);let d=0;const p=[],_=new q,m=new q,y=[],E=[],M=[],v=[];for(let x=0;x<=r;x++){const T=[],A=x/r;let C=0;x===0&&u===0?C=.5/t:x===r&&h===Math.PI&&(C=-.5/t);for(let k=0;k<=t;k++){const D=k/t;_.x=-e*Math.cos(o+D*l)*Math.sin(u+A*c),_.y=e*Math.cos(u+A*c),_.z=e*Math.sin(o+D*l)*Math.sin(u+A*c),E.push(_.x,_.y,_.z),m.copy(_).normalize(),M.push(m.x,m.y,m.z),v.push(D+C,1-A),T.push(d++)}p.push(T)}for(let x=0;x<r;x++)for(let T=0;T<t;T++){const A=p[x][T+1],C=p[x][T],k=p[x+1][T],D=p[x+1][T+1];(x!==0||u>0)&&y.push(A,C,D),(x!==r-1||h<Math.PI)&&y.push(C,k,D)}this.setIndex(y),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(M,3)),this.setAttribute("uv",new kn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rx extends cn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],r=new Set,o=new q,l=new q;if(e.index!==null){const u=e.attributes.position,c=e.index;let h=e.groups;h.length===0&&(h=[{start:0,count:c.count,materialIndex:0}]);for(let d=0,p=h.length;d<p;++d){const _=h[d],m=_.start,y=_.count;for(let E=m,M=m+y;E<M;E+=3)for(let v=0;v<3;v++){const x=c.getX(E+v),T=c.getX(E+(v+1)%3);o.fromBufferAttribute(u,x),l.fromBufferAttribute(u,T),Q_(o,l,r)===!0&&(t.push(o.x,o.y,o.z),t.push(l.x,l.y,l.z))}}}else{const u=e.attributes.position;for(let c=0,h=u.count/3;c<h;c++)for(let d=0;d<3;d++){const p=3*c+d,_=3*c+(d+1)%3;o.fromBufferAttribute(u,p),l.fromBufferAttribute(u,_),Q_(o,l,r)===!0&&(t.push(o.x,o.y,o.z),t.push(l.x,l.y,l.z))}}this.setAttribute("position",new kn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Q_(n,e,t){const r=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,o=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(r)===!0||t.has(o)===!0?!1:(t.add(r),t.add(o),!0)}class sx extends hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ox extends hr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Td={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ax{constructor(e,t,r){const o=this;let l=!1,u=0,c=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(p){c++,l===!1&&o.onStart!==void 0&&o.onStart(p,u,c),l=!0},this.itemEnd=function(p){u++,o.onProgress!==void 0&&o.onProgress(p,u,c),u===c&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,_){return d.push(p,_),this},this.removeHandler=function(p){const _=d.indexOf(p);return _!==-1&&d.splice(_,2),this},this.getHandler=function(p){for(let _=0,m=d.length;_<m;_+=2){const y=d[_],E=d[_+1];if(y.global&&(y.lastIndex=0),y.test(p))return E}return null}}}const lx=new ax;class qc{constructor(e){this.manager=e!==void 0?e:lx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qc.DEFAULT_MATERIAL_NAME="__DEFAULT";class ux extends qc{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Td.get(e);if(u!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u;const c=Va("img");function h(){p(),Td.add(e,this),t&&t(this),l.manager.itemEnd(e)}function d(_){p(),o&&o(_),l.manager.itemError(e),l.manager.itemEnd(e)}function p(){c.removeEventListener("load",h,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),l.manager.itemStart(e),c.src=e,c}}class cx extends qc{constructor(e){super(e)}load(e,t,r,o){const l=new yn,u=new ux(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){l.image=c,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class hp extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class fx extends hp{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ud=new kt,J_=new q,e0=new q;class KT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xc,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;J_.setFromMatrixPosition(e.matrixWorld),t.position.copy(J_),e0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(e0),t.updateMatrixWorld(),ud.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ud)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ZT extends KT{constructor(){super(new ap(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hx extends hp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new ZT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ad{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(vn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dx extends Yr{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);const t0=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Sv,AddEquation:Gr,AddOperation:_v,AdditiveBlending:Gu,AgXToneMapping:Ev,AlphaFormat:Wd,AlwaysCompare:Uv,AlwaysDepth:cv,AlwaysStencilFunc:xd,ArrayCamera:ex,BackSide:xn,BasicDepthPacking:Av,Box3:Po,BoxGeometry:Do,BufferAttribute:Wt,BufferGeometry:cn,ByteType:Hd,Cache:Td,Camera:sp,CineonToneMapping:yv,ClampToEdgeWrapping:ir,Color:Ge,ColorManagement:Et,ConstantAlphaFactor:av,ConstantColorFactor:sv,Controls:dx,CubeCamera:Wv,CubeReflectionMapping:Es,CubeRefractionMapping:ws,CubeTexture:op,CubeUVReflectionMapping:ja,CullFaceBack:gd,CullFaceFront:G0,CullFaceNone:V0,CustomBlending:X0,CustomToneMapping:Mv,Data3DTexture:Bv,DataArrayTexture:ep,DefaultLoadingManager:lx,DepthFormat:ys,DepthStencilFormat:As,DepthTexture:up,DirectionalLight:hx,DisplayP3ColorSpace:Gc,DoubleSide:Ni,DstAlphaFactor:ev,DstColorFactor:nv,EqualCompare:Lv,EqualDepth:hv,EquirectangularReflectionMapping:ju,EquirectangularRefractionMapping:Yu,Euler:ci,EventDispatcher:Yr,Float32BufferAttribute:kn,FloatType:Ii,FogExp2:Yc,FrontSide:lr,Frustum:Xc,GLSL3:Sd,GreaterCompare:Dv,GreaterDepth:pv,GreaterEqualCompare:Iv,GreaterEqualDepth:dv,Group:vo,HalfFloatType:Ro,HemisphereLight:fx,ImageLoader:ux,ImageUtils:kv,IntType:Fc,KeepStencilOp:ps,Layers:tp,LessCompare:Pv,LessDepth:fv,LessEqualCompare:Zd,LessEqualDepth:Ua,Light:hp,Line:ix,LineBasicMaterial:Ka,LineSegments:$c,LinearDisplayP3ColorSpace:Ya,LinearFilter:Kn,LinearMipmapLinearFilter:rr,LinearMipmapNearestFilter:Ou,LinearSRGBColorSpace:fr,LinearToneMapping:vv,LinearTransfer:Oa,Loader:qc,LoadingManager:ax,LuminanceAlphaFormat:Yd,LuminanceFormat:jd,MOUSE:xs,Material:hr,MathUtils:Wc,Matrix3:ct,Matrix4:kt,MaxEquation:q0,Mesh:Zn,MeshBasicMaterial:np,MeshDepthMaterial:Zv,MeshDistanceMaterial:Qv,MeshPhongMaterial:ox,MeshStandardMaterial:sx,MinEquation:$0,MirroredRepeatWrapping:$u,MixOperation:gv,MultiplyBlending:vd,MultiplyOperation:Uc,NearestFilter:An,NearestMipmapLinearFilter:Ma,NearestMipmapNearestFilter:Tv,NeutralToneMapping:wv,NeverCompare:bv,NeverDepth:uv,NoBlending:or,NoColorSpace:Ei,NoToneMapping:ar,NormalBlending:Wr,NotEqualCompare:Nv,NotEqualDepth:mv,Object3D:qt,ObjectSpaceNormalMap:Rv,OneFactor:Z0,OneMinusConstantAlphaFactor:lv,OneMinusConstantColorFactor:ov,OneMinusDstAlphaFactor:tv,OneMinusDstColorFactor:iv,OneMinusSrcAlphaFactor:Xu,OneMinusSrcColorFactor:J0,OrthographicCamera:ap,P3Primaries:za,PCFShadowMap:zd,PCFSoftShadowMap:W0,PMREMGenerator:Md,PerspectiveCamera:qn,Plane:nr,PlaneGeometry:qa,Points:fp,PointsMaterial:cp,Quaternion:jr,RED_GREEN_RGTC2_Format:xc,RED_RGTC1_Format:Kd,REVISION:Ic,RGBADepthPacking:Cv,RGBAFormat:ui,RGBAIntegerFormat:Hc,RGBA_ASTC_10x10_Format:dc,RGBA_ASTC_10x5_Format:cc,RGBA_ASTC_10x6_Format:fc,RGBA_ASTC_10x8_Format:hc,RGBA_ASTC_12x10_Format:pc,RGBA_ASTC_12x12_Format:mc,RGBA_ASTC_4x4_Format:nc,RGBA_ASTC_5x4_Format:ic,RGBA_ASTC_5x5_Format:rc,RGBA_ASTC_6x5_Format:sc,RGBA_ASTC_6x6_Format:oc,RGBA_ASTC_8x5_Format:ac,RGBA_ASTC_8x6_Format:lc,RGBA_ASTC_8x8_Format:uc,RGBA_BPTC_Format:La,RGBA_ETC2_EAC_Format:tc,RGBA_PVRTC_2BPPV1_Format:Qu,RGBA_PVRTC_4BPPV1_Format:Zu,RGBA_S3TC_DXT1_Format:Ra,RGBA_S3TC_DXT3_Format:ba,RGBA_S3TC_DXT5_Format:Pa,RGBFormat:Xd,RGB_BPTC_SIGNED_Format:gc,RGB_BPTC_UNSIGNED_Format:_c,RGB_ETC1_Format:Ju,RGB_ETC2_Format:ec,RGB_PVRTC_2BPPV1_Format:Ku,RGB_PVRTC_4BPPV1_Format:qu,RGB_S3TC_DXT1_Format:Ca,RGFormat:qd,RGIntegerFormat:Bc,Ray:$a,Rec709Primaries:ka,RedFormat:$d,RedIntegerFormat:zc,ReinhardToneMapping:xv,RenderTarget:zv,RepeatWrapping:Fa,ReverseSubtractEquation:Y0,SIGNED_RED_GREEN_RGTC2_Format:yc,SIGNED_RED_RGTC1_Format:vc,SRGBColorSpace:li,SRGBTransfer:Lt,Scene:nx,ShaderChunk:ut,ShaderLib:Si,ShaderMaterial:Jn,ShortType:Vd,Source:Jd,Sphere:Lo,SphereGeometry:Ss,Spherical:Ad,SrcAlphaFactor:Wu,SrcAlphaSaturateFactor:rv,SrcColorFactor:Q0,StaticDrawUsage:yd,SubtractEquation:j0,SubtractiveBlending:_d,TOUCH:_s,TangentSpaceNormalMap:Vc,Texture:yn,TextureLoader:cx,Triangle:wi,UVMapping:Bd,Uint16BufferAttribute:ip,Uint32BufferAttribute:rp,UniformsLib:Le,UniformsUtils:Gv,UnsignedByteType:Oi,UnsignedInt248Type:Ts,UnsignedInt5999Type:Gd,UnsignedIntType:Xr,UnsignedShort4444Type:Oc,UnsignedShort5551Type:kc,UnsignedShortType:Eo,VSMShadowMap:Di,Vector2:it,Vector3:q,Vector4:$t,WebGLCoordinateSystem:Ui,WebGLCubeRenderTarget:Xv,WebGLRenderTarget:ur,WebGLRenderer:tx,WebGLUtils:Jv,WebGPUCoordinateSystem:Ba,WireframeGeometry:rx,ZeroFactor:K0,createCanvasElement:Ov},Symbol.toStringTag,{value:"Module"}));new Ge("#56b4e9"),new Ge("#0072b2"),new Ge("#009e73"),new Ge("#e69f00"),new Ge("#d55e00"),new Ge("#cc79a7"),new Ge("#364152"),new Ge("#f3f4f6");const sr=new Intl.NumberFormat("en-US"),QT=1,JT=.25,n0=typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,i0=typeof window<"u"&&window.requestIdleCallback?window.requestIdleCallback.bind(window):n=>setTimeout(()=>n({timeRemaining:()=>8}),0),eA=typeof window<"u"&&window.cancelIdleCallback?window.cancelIdleCallback.bind(window):clearTimeout;function zu(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function px(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function mx(n){let e,t,r;n.length!==2?(e=zu,t=(c,h)=>zu(n(c),h),r=(c,h)=>n(c)-h):(e=n===zu||n===px?n:tA,t=n,r=n);function o(c,h,d=0,p=c.length){if(d<p){if(e(h,h)!==0)return p;do{const _=d+p>>>1;t(c[_],h)<0?d=_+1:p=_}while(d<p)}return d}function l(c,h,d=0,p=c.length){if(d<p){if(e(h,h)!==0)return p;do{const _=d+p>>>1;t(c[_],h)<=0?d=_+1:p=_}while(d<p)}return d}function u(c,h,d=0,p=c.length){const _=o(c,h,d,p-1);return _>d&&r(c[_-1],h)>-r(c[_],h)?_-1:_}return{left:o,center:u,right:l}}function tA(){return 0}function nA(n){return n===null?NaN:+n}const iA=mx(zu),rA=iA.right;mx(nA).center;function r0(n,e){let t,r;if(e===void 0)for(const o of n)o!=null&&(t===void 0?o>=o&&(t=r=o):(t>o&&(t=o),r<o&&(r=o)));else{let o=-1;for(let l of n)(l=e(l,++o,n))!=null&&(t===void 0?l>=l&&(t=r=l):(t>l&&(t=l),r<l&&(r=l)))}return[t,r]}class sA extends Map{constructor(e,t=lA){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[r,o]of e)this.set(r,o)}get(e){return super.get(s0(this,e))}has(e){return super.has(s0(this,e))}set(e,t){return super.set(oA(this,e),t)}delete(e){return super.delete(aA(this,e))}}function s0({_intern:n,_key:e},t){const r=e(t);return n.has(r)?n.get(r):t}function oA({_intern:n,_key:e},t){const r=e(t);return n.has(r)?n.get(r):(n.set(r,t),t)}function aA({_intern:n,_key:e},t){const r=e(t);return n.has(r)&&(t=n.get(r),n.delete(r)),t}function lA(n){return n!==null&&typeof n=="object"?n.valueOf():n}function uA(n,e,...t){return cA(n,Array.from,e,t)}function cA(n,e,t,r){return(function o(l,u){if(u>=r.length)return t(l);const c=new sA,h=r[u++];let d=-1;for(const p of l){const _=h(p,++d,l),m=c.get(_);m?m.push(p):c.set(_,[p])}for(const[p,_]of c)c.set(p,o(_,u));return e(c)})(n,0)}const fA=Math.sqrt(50),hA=Math.sqrt(10),dA=Math.sqrt(2);function Ec(n,e,t){const r=(e-n)/Math.max(0,t),o=Math.floor(Math.log10(r)),l=r/Math.pow(10,o),u=l>=fA?10:l>=hA?5:l>=dA?2:1;let c,h,d;return o<0?(d=Math.pow(10,-o)/u,c=Math.round(n*d),h=Math.round(e*d),c/d<n&&++c,h/d>e&&--h,d=-d):(d=Math.pow(10,o)*u,c=Math.round(n/d),h=Math.round(e/d),c*d<n&&++c,h*d>e&&--h),h<c&&.5<=t&&t<2?Ec(n,e,t*2):[c,h,d]}function pA(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];const r=e<n,[o,l,u]=r?Ec(e,n,t):Ec(n,e,t);if(!(l>=o))return[];const c=l-o+1,h=new Array(c);if(r)if(u<0)for(let d=0;d<c;++d)h[d]=(l-d)/-u;else for(let d=0;d<c;++d)h[d]=(l-d)*u;else if(u<0)for(let d=0;d<c;++d)h[d]=(o+d)/-u;else for(let d=0;d<c;++d)h[d]=(o+d)*u;return h}function Cd(n,e,t){return e=+e,n=+n,t=+t,Ec(n,e,t)[2]}function mA(n,e,t){e=+e,n=+n,t=+t;const r=e<n,o=r?Cd(e,n,t):Cd(n,e,t);return(r?-1:1)*(o<0?1/-o:o)}function gA(n,e){let t=0,r=0;for(let o of n)o!=null&&(o=+o)>=o&&(++t,r+=o);if(t)return r/t}var _A={value:()=>{}};function dp(){for(var n=0,e=arguments.length,t={},r;n<e;++n){if(!(r=arguments[n]+"")||r in t||/[\s.]/.test(r))throw new Error("illegal type: "+r);t[r]=[]}return new Bu(t)}function Bu(n){this._=n}function vA(n,e){return n.trim().split(/^|\s+/).map(function(t){var r="",o=t.indexOf(".");if(o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}})}Bu.prototype=dp.prototype={constructor:Bu,on:function(n,e){var t=this._,r=vA(n+"",t),o,l=-1,u=r.length;if(arguments.length<2){for(;++l<u;)if((o=(n=r[l]).type)&&(o=xA(t[o],n.name)))return o;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++l<u;)if(o=(n=r[l]).type)t[o]=o0(t[o],n.name,e);else if(e==null)for(o in t)t[o]=o0(t[o],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new Bu(n)},call:function(n,e){if((o=arguments.length-2)>0)for(var t=new Array(o),r=0,o,l;r<o;++r)t[r]=arguments[r+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(l=this._[n],r=0,o=l.length;r<o;++r)l[r].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],o=0,l=r.length;o<l;++o)r[o].value.apply(e,t)}};function xA(n,e){for(var t=0,r=n.length,o;t<r;++t)if((o=n[t]).name===e)return o.value}function o0(n,e,t){for(var r=0,o=n.length;r<o;++r)if(n[r].name===e){n[r]=_A,n=n.slice(0,r).concat(n.slice(r+1));break}return t!=null&&n.push({name:e,value:t}),n}var Rd="http://www.w3.org/1999/xhtml";const a0={svg:"http://www.w3.org/2000/svg",xhtml:Rd,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Kc(n){var e=n+="",t=e.indexOf(":");return t>=0&&(e=n.slice(0,t))!=="xmlns"&&(n=n.slice(t+1)),a0.hasOwnProperty(e)?{space:a0[e],local:n}:n}function yA(n){return function(){var e=this.ownerDocument,t=this.namespaceURI;return t===Rd&&e.documentElement.namespaceURI===Rd?e.createElement(n):e.createElementNS(t,n)}}function SA(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function gx(n){var e=Kc(n);return(e.local?SA:yA)(e)}function MA(){}function pp(n){return n==null?MA:function(){return this.querySelector(n)}}function EA(n){typeof n!="function"&&(n=pp(n));for(var e=this._groups,t=e.length,r=new Array(t),o=0;o<t;++o)for(var l=e[o],u=l.length,c=r[o]=new Array(u),h,d,p=0;p<u;++p)(h=l[p])&&(d=n.call(h,h.__data__,p,l))&&("__data__"in h&&(d.__data__=h.__data__),c[p]=d);return new Ai(r,this._parents)}function wA(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function TA(){return[]}function _x(n){return n==null?TA:function(){return this.querySelectorAll(n)}}function AA(n){return function(){return wA(n.apply(this,arguments))}}function CA(n){typeof n=="function"?n=AA(n):n=_x(n);for(var e=this._groups,t=e.length,r=[],o=[],l=0;l<t;++l)for(var u=e[l],c=u.length,h,d=0;d<c;++d)(h=u[d])&&(r.push(n.call(h,h.__data__,d,u)),o.push(h));return new Ai(r,o)}function vx(n){return function(){return this.matches(n)}}function xx(n){return function(e){return e.matches(n)}}var RA=Array.prototype.find;function bA(n){return function(){return RA.call(this.children,n)}}function PA(){return this.firstElementChild}function LA(n){return this.select(n==null?PA:bA(typeof n=="function"?n:xx(n)))}var DA=Array.prototype.filter;function NA(){return Array.from(this.children)}function IA(n){return function(){return DA.call(this.children,n)}}function UA(n){return this.selectAll(n==null?NA:IA(typeof n=="function"?n:xx(n)))}function FA(n){typeof n!="function"&&(n=vx(n));for(var e=this._groups,t=e.length,r=new Array(t),o=0;o<t;++o)for(var l=e[o],u=l.length,c=r[o]=[],h,d=0;d<u;++d)(h=l[d])&&n.call(h,h.__data__,d,l)&&c.push(h);return new Ai(r,this._parents)}function yx(n){return new Array(n.length)}function OA(){return new Ai(this._enter||this._groups.map(yx),this._parents)}function wc(n,e){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=e}wc.prototype={constructor:wc,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,e){return this._parent.insertBefore(n,e)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function kA(n){return function(){return n}}function zA(n,e,t,r,o,l){for(var u=0,c,h=e.length,d=l.length;u<d;++u)(c=e[u])?(c.__data__=l[u],r[u]=c):t[u]=new wc(n,l[u]);for(;u<h;++u)(c=e[u])&&(o[u]=c)}function BA(n,e,t,r,o,l,u){var c,h,d=new Map,p=e.length,_=l.length,m=new Array(p),y;for(c=0;c<p;++c)(h=e[c])&&(m[c]=y=u.call(h,h.__data__,c,e)+"",d.has(y)?o[c]=h:d.set(y,h));for(c=0;c<_;++c)y=u.call(n,l[c],c,l)+"",(h=d.get(y))?(r[c]=h,h.__data__=l[c],d.delete(y)):t[c]=new wc(n,l[c]);for(c=0;c<p;++c)(h=e[c])&&d.get(m[c])===h&&(o[c]=h)}function HA(n){return n.__data__}function VA(n,e){if(!arguments.length)return Array.from(this,HA);var t=e?BA:zA,r=this._parents,o=this._groups;typeof n!="function"&&(n=kA(n));for(var l=o.length,u=new Array(l),c=new Array(l),h=new Array(l),d=0;d<l;++d){var p=r[d],_=o[d],m=_.length,y=GA(n.call(p,p&&p.__data__,d,r)),E=y.length,M=c[d]=new Array(E),v=u[d]=new Array(E),x=h[d]=new Array(m);t(p,_,M,v,x,y,e);for(var T=0,A=0,C,k;T<E;++T)if(C=M[T]){for(T>=A&&(A=T+1);!(k=v[A])&&++A<E;);C._next=k||null}}return u=new Ai(u,r),u._enter=c,u._exit=h,u}function GA(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function WA(){return new Ai(this._exit||this._groups.map(yx),this._parents)}function XA(n,e,t){var r=this.enter(),o=this,l=this.exit();return typeof n=="function"?(r=n(r),r&&(r=r.selection())):r=r.append(n+""),e!=null&&(o=e(o),o&&(o=o.selection())),t==null?l.remove():t(l),r&&o?r.merge(o).order():o}function jA(n){for(var e=n.selection?n.selection():n,t=this._groups,r=e._groups,o=t.length,l=r.length,u=Math.min(o,l),c=new Array(o),h=0;h<u;++h)for(var d=t[h],p=r[h],_=d.length,m=c[h]=new Array(_),y,E=0;E<_;++E)(y=d[E]||p[E])&&(m[E]=y);for(;h<o;++h)c[h]=t[h];return new Ai(c,this._parents)}function YA(){for(var n=this._groups,e=-1,t=n.length;++e<t;)for(var r=n[e],o=r.length-1,l=r[o],u;--o>=0;)(u=r[o])&&(l&&u.compareDocumentPosition(l)^4&&l.parentNode.insertBefore(u,l),l=u);return this}function $A(n){n||(n=qA);function e(_,m){return _&&m?n(_.__data__,m.__data__):!_-!m}for(var t=this._groups,r=t.length,o=new Array(r),l=0;l<r;++l){for(var u=t[l],c=u.length,h=o[l]=new Array(c),d,p=0;p<c;++p)(d=u[p])&&(h[p]=d);h.sort(e)}return new Ai(o,this._parents).order()}function qA(n,e){return n<e?-1:n>e?1:n>=e?0:NaN}function KA(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function ZA(){return Array.from(this)}function QA(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var r=n[e],o=0,l=r.length;o<l;++o){var u=r[o];if(u)return u}return null}function JA(){let n=0;for(const e of this)++n;return n}function eC(){return!this.node()}function tC(n){for(var e=this._groups,t=0,r=e.length;t<r;++t)for(var o=e[t],l=0,u=o.length,c;l<u;++l)(c=o[l])&&n.call(c,c.__data__,l,o);return this}function nC(n){return function(){this.removeAttribute(n)}}function iC(n){return function(){this.removeAttributeNS(n.space,n.local)}}function rC(n,e){return function(){this.setAttribute(n,e)}}function sC(n,e){return function(){this.setAttributeNS(n.space,n.local,e)}}function oC(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttribute(n):this.setAttribute(n,t)}}function aC(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,t)}}function lC(n,e){var t=Kc(n);if(arguments.length<2){var r=this.node();return t.local?r.getAttributeNS(t.space,t.local):r.getAttribute(t)}return this.each((e==null?t.local?iC:nC:typeof e=="function"?t.local?aC:oC:t.local?sC:rC)(t,e))}function Sx(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function uC(n){return function(){this.style.removeProperty(n)}}function cC(n,e,t){return function(){this.style.setProperty(n,e,t)}}function fC(n,e,t){return function(){var r=e.apply(this,arguments);r==null?this.style.removeProperty(n):this.style.setProperty(n,r,t)}}function hC(n,e,t){return arguments.length>1?this.each((e==null?uC:typeof e=="function"?fC:cC)(n,e,t??"")):To(this.node(),n)}function To(n,e){return n.style.getPropertyValue(e)||Sx(n).getComputedStyle(n,null).getPropertyValue(e)}function dC(n){return function(){delete this[n]}}function pC(n,e){return function(){this[n]=e}}function mC(n,e){return function(){var t=e.apply(this,arguments);t==null?delete this[n]:this[n]=t}}function gC(n,e){return arguments.length>1?this.each((e==null?dC:typeof e=="function"?mC:pC)(n,e)):this.node()[n]}function Mx(n){return n.trim().split(/^|\s+/)}function mp(n){return n.classList||new Ex(n)}function Ex(n){this._node=n,this._names=Mx(n.getAttribute("class")||"")}Ex.prototype={add:function(n){var e=this._names.indexOf(n);e<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var e=this._names.indexOf(n);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function wx(n,e){for(var t=mp(n),r=-1,o=e.length;++r<o;)t.add(e[r])}function Tx(n,e){for(var t=mp(n),r=-1,o=e.length;++r<o;)t.remove(e[r])}function _C(n){return function(){wx(this,n)}}function vC(n){return function(){Tx(this,n)}}function xC(n,e){return function(){(e.apply(this,arguments)?wx:Tx)(this,n)}}function yC(n,e){var t=Mx(n+"");if(arguments.length<2){for(var r=mp(this.node()),o=-1,l=t.length;++o<l;)if(!r.contains(t[o]))return!1;return!0}return this.each((typeof e=="function"?xC:e?_C:vC)(t,e))}function SC(){this.textContent=""}function MC(n){return function(){this.textContent=n}}function EC(n){return function(){var e=n.apply(this,arguments);this.textContent=e??""}}function wC(n){return arguments.length?this.each(n==null?SC:(typeof n=="function"?EC:MC)(n)):this.node().textContent}function TC(){this.innerHTML=""}function AC(n){return function(){this.innerHTML=n}}function CC(n){return function(){var e=n.apply(this,arguments);this.innerHTML=e??""}}function RC(n){return arguments.length?this.each(n==null?TC:(typeof n=="function"?CC:AC)(n)):this.node().innerHTML}function bC(){this.nextSibling&&this.parentNode.appendChild(this)}function PC(){return this.each(bC)}function LC(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function DC(){return this.each(LC)}function NC(n){var e=typeof n=="function"?n:gx(n);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function IC(){return null}function UC(n,e){var t=typeof n=="function"?n:gx(n),r=e==null?IC:typeof e=="function"?e:pp(e);return this.select(function(){return this.insertBefore(t.apply(this,arguments),r.apply(this,arguments)||null)})}function FC(){var n=this.parentNode;n&&n.removeChild(this)}function OC(){return this.each(FC)}function kC(){var n=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function zC(){var n=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function BC(n){return this.select(n?zC:kC)}function HC(n){return arguments.length?this.property("__data__",n):this.node().__data__}function VC(n){return function(e){n.call(this,e,this.__data__)}}function GC(n){return n.trim().split(/^|\s+/).map(function(e){var t="",r=e.indexOf(".");return r>=0&&(t=e.slice(r+1),e=e.slice(0,r)),{type:e,name:t}})}function WC(n){return function(){var e=this.__on;if(e){for(var t=0,r=-1,o=e.length,l;t<o;++t)l=e[t],(!n.type||l.type===n.type)&&l.name===n.name?this.removeEventListener(l.type,l.listener,l.options):e[++r]=l;++r?e.length=r:delete this.__on}}}function XC(n,e,t){return function(){var r=this.__on,o,l=VC(e);if(r){for(var u=0,c=r.length;u<c;++u)if((o=r[u]).type===n.type&&o.name===n.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=l,o.options=t),o.value=e;return}}this.addEventListener(n.type,l,t),o={type:n.type,name:n.name,value:e,listener:l,options:t},r?r.push(o):this.__on=[o]}}function jC(n,e,t){var r=GC(n+""),o,l=r.length,u;if(arguments.length<2){var c=this.node().__on;if(c){for(var h=0,d=c.length,p;h<d;++h)for(o=0,p=c[h];o<l;++o)if((u=r[o]).type===p.type&&u.name===p.name)return p.value}return}for(c=e?XC:WC,o=0;o<l;++o)this.each(c(r[o],e,t));return this}function Ax(n,e,t){var r=Sx(n),o=r.CustomEvent;typeof o=="function"?o=new o(e,t):(o=r.document.createEvent("Event"),t?(o.initEvent(e,t.bubbles,t.cancelable),o.detail=t.detail):o.initEvent(e,!1,!1)),n.dispatchEvent(o)}function YC(n,e){return function(){return Ax(this,n,e)}}function $C(n,e){return function(){return Ax(this,n,e.apply(this,arguments))}}function qC(n,e){return this.each((typeof e=="function"?$C:YC)(n,e))}function*KC(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var r=n[e],o=0,l=r.length,u;o<l;++o)(u=r[o])&&(yield u)}var ZC=[null];function Ai(n,e){this._groups=n,this._parents=e}function Za(){return new Ai([[document.documentElement]],ZC)}function QC(){return this}Ai.prototype=Za.prototype={constructor:Ai,select:EA,selectAll:CA,selectChild:LA,selectChildren:UA,filter:FA,data:VA,enter:OA,exit:WA,join:XA,merge:jA,selection:QC,order:YA,sort:$A,call:KA,nodes:ZA,node:QA,size:JA,empty:eC,each:tC,attr:lC,style:hC,property:gC,classed:yC,text:wC,html:RC,raise:PC,lower:DC,append:NC,insert:UC,remove:OC,clone:BC,datum:HC,on:jC,dispatch:qC,[Symbol.iterator]:KC};function gp(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function Cx(n,e){var t=Object.create(n.prototype);for(var r in e)t[r]=e[r];return t}function Qa(){}var Ga=.7,Tc=1/Ga,Mo="\\s*([+-]?\\d+)\\s*",Wa="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Fi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",JC=/^#([0-9a-f]{3,8})$/,eR=new RegExp(`^rgb\\(${Mo},${Mo},${Mo}\\)$`),tR=new RegExp(`^rgb\\(${Fi},${Fi},${Fi}\\)$`),nR=new RegExp(`^rgba\\(${Mo},${Mo},${Mo},${Wa}\\)$`),iR=new RegExp(`^rgba\\(${Fi},${Fi},${Fi},${Wa}\\)$`),rR=new RegExp(`^hsl\\(${Wa},${Fi},${Fi}\\)$`),sR=new RegExp(`^hsla\\(${Wa},${Fi},${Fi},${Wa}\\)$`),l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};gp(Qa,Cs,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:u0,formatHex:u0,formatHex8:oR,formatHsl:aR,formatRgb:c0,toString:c0});function u0(){return this.rgb().formatHex()}function oR(){return this.rgb().formatHex8()}function aR(){return Rx(this).formatHsl()}function c0(){return this.rgb().formatRgb()}function Cs(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=JC.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?f0(e):t===3?new On(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?Pu(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?Pu(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=eR.exec(n))?new On(e[1],e[2],e[3],1):(e=tR.exec(n))?new On(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=nR.exec(n))?Pu(e[1],e[2],e[3],e[4]):(e=iR.exec(n))?Pu(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=rR.exec(n))?p0(e[1],e[2]/100,e[3]/100,1):(e=sR.exec(n))?p0(e[1],e[2]/100,e[3]/100,e[4]):l0.hasOwnProperty(n)?f0(l0[n]):n==="transparent"?new On(NaN,NaN,NaN,0):null}function f0(n){return new On(n>>16&255,n>>8&255,n&255,1)}function Pu(n,e,t,r){return r<=0&&(n=e=t=NaN),new On(n,e,t,r)}function lR(n){return n instanceof Qa||(n=Cs(n)),n?(n=n.rgb(),new On(n.r,n.g,n.b,n.opacity)):new On}function bd(n,e,t,r){return arguments.length===1?lR(n):new On(n,e,t,r??1)}function On(n,e,t,r){this.r=+n,this.g=+e,this.b=+t,this.opacity=+r}gp(On,bd,Cx(Qa,{brighter(n){return n=n==null?Tc:Math.pow(Tc,n),new On(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Ga:Math.pow(Ga,n),new On(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new On(Ms(this.r),Ms(this.g),Ms(this.b),Ac(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:h0,formatHex:h0,formatHex8:uR,formatRgb:d0,toString:d0}));function h0(){return`#${vs(this.r)}${vs(this.g)}${vs(this.b)}`}function uR(){return`#${vs(this.r)}${vs(this.g)}${vs(this.b)}${vs((isNaN(this.opacity)?1:this.opacity)*255)}`}function d0(){const n=Ac(this.opacity);return`${n===1?"rgb(":"rgba("}${Ms(this.r)}, ${Ms(this.g)}, ${Ms(this.b)}${n===1?")":`, ${n})`}`}function Ac(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Ms(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function vs(n){return n=Ms(n),(n<16?"0":"")+n.toString(16)}function p0(n,e,t,r){return r<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new Ti(n,e,t,r)}function Rx(n){if(n instanceof Ti)return new Ti(n.h,n.s,n.l,n.opacity);if(n instanceof Qa||(n=Cs(n)),!n)return new Ti;if(n instanceof Ti)return n;n=n.rgb();var e=n.r/255,t=n.g/255,r=n.b/255,o=Math.min(e,t,r),l=Math.max(e,t,r),u=NaN,c=l-o,h=(l+o)/2;return c?(e===l?u=(t-r)/c+(t<r)*6:t===l?u=(r-e)/c+2:u=(e-t)/c+4,c/=h<.5?l+o:2-l-o,u*=60):c=h>0&&h<1?0:u,new Ti(u,c,h,n.opacity)}function cR(n,e,t,r){return arguments.length===1?Rx(n):new Ti(n,e,t,r??1)}function Ti(n,e,t,r){this.h=+n,this.s=+e,this.l=+t,this.opacity=+r}gp(Ti,cR,Cx(Qa,{brighter(n){return n=n==null?Tc:Math.pow(Tc,n),new Ti(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Ga:Math.pow(Ga,n),new Ti(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*e,o=2*t-r;return new On(cd(n>=240?n-240:n+120,o,r),cd(n,o,r),cd(n<120?n+240:n-120,o,r),this.opacity)},clamp(){return new Ti(m0(this.h),Lu(this.s),Lu(this.l),Ac(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=Ac(this.opacity);return`${n===1?"hsl(":"hsla("}${m0(this.h)}, ${Lu(this.s)*100}%, ${Lu(this.l)*100}%${n===1?")":`, ${n})`}`}}));function m0(n){return n=(n||0)%360,n<0?n+360:n}function Lu(n){return Math.max(0,Math.min(1,n||0))}function cd(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}const _p=n=>()=>n;function fR(n,e){return function(t){return n+t*e}}function hR(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(r){return Math.pow(n+r*e,t)}}function dR(n){return(n=+n)==1?bx:function(e,t){return t-e?hR(e,t,n):_p(isNaN(e)?t:e)}}function bx(n,e){var t=e-n;return t?fR(n,t):_p(isNaN(n)?e:n)}const Cc=(function n(e){var t=dR(e);function r(o,l){var u=t((o=bd(o)).r,(l=bd(l)).r),c=t(o.g,l.g),h=t(o.b,l.b),d=bx(o.opacity,l.opacity);return function(p){return o.r=u(p),o.g=c(p),o.b=h(p),o.opacity=d(p),o+""}}return r.gamma=n,r})(1);function pR(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,r=e.slice(),o;return function(l){for(o=0;o<t;++o)r[o]=n[o]*(1-l)+e[o]*l;return r}}function mR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function gR(n,e){var t=e?e.length:0,r=n?Math.min(t,n.length):0,o=new Array(r),l=new Array(t),u;for(u=0;u<r;++u)o[u]=vp(n[u],e[u]);for(;u<t;++u)l[u]=e[u];return function(c){for(u=0;u<r;++u)l[u]=o[u](c);return l}}function _R(n,e){var t=new Date;return n=+n,e=+e,function(r){return t.setTime(n*(1-r)+e*r),t}}function Mi(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function vR(n,e){var t={},r={},o;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(o in e)o in n?t[o]=vp(n[o],e[o]):r[o]=e[o];return function(l){for(o in t)r[o]=t[o](l);return r}}var Pd=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,fd=new RegExp(Pd.source,"g");function xR(n){return function(){return n}}function yR(n){return function(e){return n(e)+""}}function Px(n,e){var t=Pd.lastIndex=fd.lastIndex=0,r,o,l,u=-1,c=[],h=[];for(n=n+"",e=e+"";(r=Pd.exec(n))&&(o=fd.exec(e));)(l=o.index)>t&&(l=e.slice(t,l),c[u]?c[u]+=l:c[++u]=l),(r=r[0])===(o=o[0])?c[u]?c[u]+=o:c[++u]=o:(c[++u]=null,h.push({i:u,x:Mi(r,o)})),t=fd.lastIndex;return t<e.length&&(l=e.slice(t),c[u]?c[u]+=l:c[++u]=l),c.length<2?h[0]?yR(h[0].x):xR(e):(e=h.length,function(d){for(var p=0,_;p<e;++p)c[(_=h[p]).i]=_.x(d);return c.join("")})}function vp(n,e){var t=typeof e,r;return e==null||t==="boolean"?_p(e):(t==="number"?Mi:t==="string"?(r=Cs(e))?(e=r,Cc):Px:e instanceof Cs?Cc:e instanceof Date?_R:mR(e)?pR:Array.isArray(e)?gR:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?vR:Mi)(n,e)}function SR(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}var g0=180/Math.PI,Ld={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Lx(n,e,t,r,o,l){var u,c,h;return(u=Math.sqrt(n*n+e*e))&&(n/=u,e/=u),(h=n*t+e*r)&&(t-=n*h,r-=e*h),(c=Math.sqrt(t*t+r*r))&&(t/=c,r/=c,h/=c),n*r<e*t&&(n=-n,e=-e,h=-h,u=-u),{translateX:o,translateY:l,rotate:Math.atan2(e,n)*g0,skewX:Math.atan(h)*g0,scaleX:u,scaleY:c}}var Du;function MR(n){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return e.isIdentity?Ld:Lx(e.a,e.b,e.c,e.d,e.e,e.f)}function ER(n){return n==null||(Du||(Du=document.createElementNS("http://www.w3.org/2000/svg","g")),Du.setAttribute("transform",n),!(n=Du.transform.baseVal.consolidate()))?Ld:(n=n.matrix,Lx(n.a,n.b,n.c,n.d,n.e,n.f))}function Dx(n,e,t,r){function o(d){return d.length?d.pop()+" ":""}function l(d,p,_,m,y,E){if(d!==_||p!==m){var M=y.push("translate(",null,e,null,t);E.push({i:M-4,x:Mi(d,_)},{i:M-2,x:Mi(p,m)})}else(_||m)&&y.push("translate("+_+e+m+t)}function u(d,p,_,m){d!==p?(d-p>180?p+=360:p-d>180&&(d+=360),m.push({i:_.push(o(_)+"rotate(",null,r)-2,x:Mi(d,p)})):p&&_.push(o(_)+"rotate("+p+r)}function c(d,p,_,m){d!==p?m.push({i:_.push(o(_)+"skewX(",null,r)-2,x:Mi(d,p)}):p&&_.push(o(_)+"skewX("+p+r)}function h(d,p,_,m,y,E){if(d!==_||p!==m){var M=y.push(o(y)+"scale(",null,",",null,")");E.push({i:M-4,x:Mi(d,_)},{i:M-2,x:Mi(p,m)})}else(_!==1||m!==1)&&y.push(o(y)+"scale("+_+","+m+")")}return function(d,p){var _=[],m=[];return d=n(d),p=n(p),l(d.translateX,d.translateY,p.translateX,p.translateY,_,m),u(d.rotate,p.rotate,_,m),c(d.skewX,p.skewX,_,m),h(d.scaleX,d.scaleY,p.scaleX,p.scaleY,_,m),d=p=null,function(y){for(var E=-1,M=m.length,v;++E<M;)_[(v=m[E]).i]=v.x(y);return _.join("")}}}var wR=Dx(MR,"px, ","px)","deg)"),TR=Dx(ER,", ",")",")"),Ao=0,wa=0,ya=0,Nx=1e3,Rc,Ta,bc=0,Rs=0,Zc=0,Xa=typeof performance=="object"&&performance.now?performance:Date,Ix=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function xp(){return Rs||(Ix(AR),Rs=Xa.now()+Zc)}function AR(){Rs=0}function Pc(){this._call=this._time=this._next=null}Pc.prototype=yp.prototype={constructor:Pc,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?xp():+t)+(e==null?0:+e),!this._next&&Ta!==this&&(Ta?Ta._next=this:Rc=this,Ta=this),this._call=n,this._time=t,Dd()},stop:function(){this._call&&(this._call=null,this._time=1/0,Dd())}};function yp(n,e,t){var r=new Pc;return r.restart(n,e,t),r}function CR(){xp(),++Ao;for(var n=Rc,e;n;)(e=Rs-n._time)>=0&&n._call.call(void 0,e),n=n._next;--Ao}function _0(){Rs=(bc=Xa.now())+Zc,Ao=wa=0;try{CR()}finally{Ao=0,bR(),Rs=0}}function RR(){var n=Xa.now(),e=n-bc;e>Nx&&(Zc-=e,bc=n)}function bR(){for(var n,e=Rc,t,r=1/0;e;)e._call?(r>e._time&&(r=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:Rc=t);Ta=n,Dd(r)}function Dd(n){if(!Ao){wa&&(wa=clearTimeout(wa));var e=n-Rs;e>24?(n<1/0&&(wa=setTimeout(_0,n-Xa.now()-Zc)),ya&&(ya=clearInterval(ya))):(ya||(bc=Xa.now(),ya=setInterval(RR,Nx)),Ao=1,Ix(_0))}}function v0(n,e,t){var r=new Pc;return e=e==null?0:+e,r.restart(o=>{r.stop(),n(o+e)},e,t),r}var PR=dp("start","end","cancel","interrupt"),LR=[],Ux=0,x0=1,Nd=2,Hu=3,y0=4,Id=5,Vu=6;function Qc(n,e,t,r,o,l){var u=n.__transition;if(!u)n.__transition={};else if(t in u)return;DR(n,t,{name:e,index:r,group:o,on:PR,tween:LR,time:l.time,delay:l.delay,duration:l.duration,ease:l.ease,timer:null,state:Ux})}function Sp(n,e){var t=Ci(n,e);if(t.state>Ux)throw new Error("too late; already scheduled");return t}function ki(n,e){var t=Ci(n,e);if(t.state>Hu)throw new Error("too late; already running");return t}function Ci(n,e){var t=n.__transition;if(!t||!(t=t[e]))throw new Error("transition not found");return t}function DR(n,e,t){var r=n.__transition,o;r[e]=t,t.timer=yp(l,0,t.time);function l(d){t.state=x0,t.timer.restart(u,t.delay,t.time),t.delay<=d&&u(d-t.delay)}function u(d){var p,_,m,y;if(t.state!==x0)return h();for(p in r)if(y=r[p],y.name===t.name){if(y.state===Hu)return v0(u);y.state===y0?(y.state=Vu,y.timer.stop(),y.on.call("interrupt",n,n.__data__,y.index,y.group),delete r[p]):+p<e&&(y.state=Vu,y.timer.stop(),y.on.call("cancel",n,n.__data__,y.index,y.group),delete r[p])}if(v0(function(){t.state===Hu&&(t.state=y0,t.timer.restart(c,t.delay,t.time),c(d))}),t.state=Nd,t.on.call("start",n,n.__data__,t.index,t.group),t.state===Nd){for(t.state=Hu,o=new Array(m=t.tween.length),p=0,_=-1;p<m;++p)(y=t.tween[p].value.call(n,n.__data__,t.index,t.group))&&(o[++_]=y);o.length=_+1}}function c(d){for(var p=d<t.duration?t.ease.call(null,d/t.duration):(t.timer.restart(h),t.state=Id,1),_=-1,m=o.length;++_<m;)o[_].call(n,p);t.state===Id&&(t.on.call("end",n,n.__data__,t.index,t.group),h())}function h(){t.state=Vu,t.timer.stop(),delete r[e];for(var d in r)return;delete n.__transition}}function NR(n,e){var t=n.__transition,r,o,l=!0,u;if(t){e=e==null?null:e+"";for(u in t){if((r=t[u]).name!==e){l=!1;continue}o=r.state>Nd&&r.state<Id,r.state=Vu,r.timer.stop(),r.on.call(o?"interrupt":"cancel",n,n.__data__,r.index,r.group),delete t[u]}l&&delete n.__transition}}function IR(n){return this.each(function(){NR(this,n)})}function UR(n,e){var t,r;return function(){var o=ki(this,n),l=o.tween;if(l!==t){r=t=l;for(var u=0,c=r.length;u<c;++u)if(r[u].name===e){r=r.slice(),r.splice(u,1);break}}o.tween=r}}function FR(n,e,t){var r,o;if(typeof t!="function")throw new Error;return function(){var l=ki(this,n),u=l.tween;if(u!==r){o=(r=u).slice();for(var c={name:e,value:t},h=0,d=o.length;h<d;++h)if(o[h].name===e){o[h]=c;break}h===d&&o.push(c)}l.tween=o}}function OR(n,e){var t=this._id;if(n+="",arguments.length<2){for(var r=Ci(this.node(),t).tween,o=0,l=r.length,u;o<l;++o)if((u=r[o]).name===n)return u.value;return null}return this.each((e==null?UR:FR)(t,n,e))}function Mp(n,e,t){var r=n._id;return n.each(function(){var o=ki(this,r);(o.value||(o.value={}))[e]=t.apply(this,arguments)}),function(o){return Ci(o,r).value[e]}}function Fx(n,e){var t;return(typeof e=="number"?Mi:e instanceof Cs?Cc:(t=Cs(e))?(e=t,Cc):Px)(n,e)}function kR(n){return function(){this.removeAttribute(n)}}function zR(n){return function(){this.removeAttributeNS(n.space,n.local)}}function BR(n,e,t){var r,o=t+"",l;return function(){var u=this.getAttribute(n);return u===o?null:u===r?l:l=e(r=u,t)}}function HR(n,e,t){var r,o=t+"",l;return function(){var u=this.getAttributeNS(n.space,n.local);return u===o?null:u===r?l:l=e(r=u,t)}}function VR(n,e,t){var r,o,l;return function(){var u,c=t(this),h;return c==null?void this.removeAttribute(n):(u=this.getAttribute(n),h=c+"",u===h?null:u===r&&h===o?l:(o=h,l=e(r=u,c)))}}function GR(n,e,t){var r,o,l;return function(){var u,c=t(this),h;return c==null?void this.removeAttributeNS(n.space,n.local):(u=this.getAttributeNS(n.space,n.local),h=c+"",u===h?null:u===r&&h===o?l:(o=h,l=e(r=u,c)))}}function WR(n,e){var t=Kc(n),r=t==="transform"?TR:Fx;return this.attrTween(n,typeof e=="function"?(t.local?GR:VR)(t,r,Mp(this,"attr."+n,e)):e==null?(t.local?zR:kR)(t):(t.local?HR:BR)(t,r,e))}function XR(n,e){return function(t){this.setAttribute(n,e.call(this,t))}}function jR(n,e){return function(t){this.setAttributeNS(n.space,n.local,e.call(this,t))}}function YR(n,e){var t,r;function o(){var l=e.apply(this,arguments);return l!==r&&(t=(r=l)&&jR(n,l)),t}return o._value=e,o}function $R(n,e){var t,r;function o(){var l=e.apply(this,arguments);return l!==r&&(t=(r=l)&&XR(n,l)),t}return o._value=e,o}function qR(n,e){var t="attr."+n;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;var r=Kc(n);return this.tween(t,(r.local?YR:$R)(r,e))}function KR(n,e){return function(){Sp(this,n).delay=+e.apply(this,arguments)}}function ZR(n,e){return e=+e,function(){Sp(this,n).delay=e}}function QR(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?KR:ZR)(e,n)):Ci(this.node(),e).delay}function JR(n,e){return function(){ki(this,n).duration=+e.apply(this,arguments)}}function eb(n,e){return e=+e,function(){ki(this,n).duration=e}}function tb(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?JR:eb)(e,n)):Ci(this.node(),e).duration}function nb(n,e){if(typeof e!="function")throw new Error;return function(){ki(this,n).ease=e}}function ib(n){var e=this._id;return arguments.length?this.each(nb(e,n)):Ci(this.node(),e).ease}function rb(n,e){return function(){var t=e.apply(this,arguments);if(typeof t!="function")throw new Error;ki(this,n).ease=t}}function sb(n){if(typeof n!="function")throw new Error;return this.each(rb(this._id,n))}function ob(n){typeof n!="function"&&(n=vx(n));for(var e=this._groups,t=e.length,r=new Array(t),o=0;o<t;++o)for(var l=e[o],u=l.length,c=r[o]=[],h,d=0;d<u;++d)(h=l[d])&&n.call(h,h.__data__,d,l)&&c.push(h);return new cr(r,this._parents,this._name,this._id)}function ab(n){if(n._id!==this._id)throw new Error;for(var e=this._groups,t=n._groups,r=e.length,o=t.length,l=Math.min(r,o),u=new Array(r),c=0;c<l;++c)for(var h=e[c],d=t[c],p=h.length,_=u[c]=new Array(p),m,y=0;y<p;++y)(m=h[y]||d[y])&&(_[y]=m);for(;c<r;++c)u[c]=e[c];return new cr(u,this._parents,this._name,this._id)}function lb(n){return(n+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||e==="start"})}function ub(n,e,t){var r,o,l=lb(e)?Sp:ki;return function(){var u=l(this,n),c=u.on;c!==r&&(o=(r=c).copy()).on(e,t),u.on=o}}function cb(n,e){var t=this._id;return arguments.length<2?Ci(this.node(),t).on.on(n):this.each(ub(t,n,e))}function fb(n){return function(){var e=this.parentNode;for(var t in this.__transition)if(+t!==n)return;e&&e.removeChild(this)}}function hb(){return this.on("end.remove",fb(this._id))}function db(n){var e=this._name,t=this._id;typeof n!="function"&&(n=pp(n));for(var r=this._groups,o=r.length,l=new Array(o),u=0;u<o;++u)for(var c=r[u],h=c.length,d=l[u]=new Array(h),p,_,m=0;m<h;++m)(p=c[m])&&(_=n.call(p,p.__data__,m,c))&&("__data__"in p&&(_.__data__=p.__data__),d[m]=_,Qc(d[m],e,t,m,d,Ci(p,t)));return new cr(l,this._parents,e,t)}function pb(n){var e=this._name,t=this._id;typeof n!="function"&&(n=_x(n));for(var r=this._groups,o=r.length,l=[],u=[],c=0;c<o;++c)for(var h=r[c],d=h.length,p,_=0;_<d;++_)if(p=h[_]){for(var m=n.call(p,p.__data__,_,h),y,E=Ci(p,t),M=0,v=m.length;M<v;++M)(y=m[M])&&Qc(y,e,t,M,m,E);l.push(m),u.push(p)}return new cr(l,u,e,t)}var mb=Za.prototype.constructor;function gb(){return new mb(this._groups,this._parents)}function _b(n,e){var t,r,o;return function(){var l=To(this,n),u=(this.style.removeProperty(n),To(this,n));return l===u?null:l===t&&u===r?o:o=e(t=l,r=u)}}function Ox(n){return function(){this.style.removeProperty(n)}}function vb(n,e,t){var r,o=t+"",l;return function(){var u=To(this,n);return u===o?null:u===r?l:l=e(r=u,t)}}function xb(n,e,t){var r,o,l;return function(){var u=To(this,n),c=t(this),h=c+"";return c==null&&(h=c=(this.style.removeProperty(n),To(this,n))),u===h?null:u===r&&h===o?l:(o=h,l=e(r=u,c))}}function yb(n,e){var t,r,o,l="style."+e,u="end."+l,c;return function(){var h=ki(this,n),d=h.on,p=h.value[l]==null?c||(c=Ox(e)):void 0;(d!==t||o!==p)&&(r=(t=d).copy()).on(u,o=p),h.on=r}}function Sb(n,e,t){var r=(n+="")=="transform"?wR:Fx;return e==null?this.styleTween(n,_b(n,r)).on("end.style."+n,Ox(n)):typeof e=="function"?this.styleTween(n,xb(n,r,Mp(this,"style."+n,e))).each(yb(this._id,n)):this.styleTween(n,vb(n,r,e),t).on("end.style."+n,null)}function Mb(n,e,t){return function(r){this.style.setProperty(n,e.call(this,r),t)}}function Eb(n,e,t){var r,o;function l(){var u=e.apply(this,arguments);return u!==o&&(r=(o=u)&&Mb(n,u,t)),r}return l._value=e,l}function wb(n,e,t){var r="style."+(n+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(e==null)return this.tween(r,null);if(typeof e!="function")throw new Error;return this.tween(r,Eb(n,e,t??""))}function Tb(n){return function(){this.textContent=n}}function Ab(n){return function(){var e=n(this);this.textContent=e??""}}function Cb(n){return this.tween("text",typeof n=="function"?Ab(Mp(this,"text",n)):Tb(n==null?"":n+""))}function Rb(n){return function(e){this.textContent=n.call(this,e)}}function bb(n){var e,t;function r(){var o=n.apply(this,arguments);return o!==t&&(e=(t=o)&&Rb(o)),e}return r._value=n,r}function Pb(n){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;return this.tween(e,bb(n))}function Lb(){for(var n=this._name,e=this._id,t=kx(),r=this._groups,o=r.length,l=0;l<o;++l)for(var u=r[l],c=u.length,h,d=0;d<c;++d)if(h=u[d]){var p=Ci(h,e);Qc(h,n,t,d,u,{time:p.time+p.delay+p.duration,delay:0,duration:p.duration,ease:p.ease})}return new cr(r,this._parents,n,t)}function Db(){var n,e,t=this,r=t._id,o=t.size();return new Promise(function(l,u){var c={value:u},h={value:function(){--o===0&&l()}};t.each(function(){var d=ki(this,r),p=d.on;p!==n&&(e=(n=p).copy(),e._.cancel.push(c),e._.interrupt.push(c),e._.end.push(h)),d.on=e}),o===0&&l()})}var Nb=0;function cr(n,e,t,r){this._groups=n,this._parents=e,this._name=t,this._id=r}function kx(){return++Nb}var tr=Za.prototype;cr.prototype={constructor:cr,select:db,selectAll:pb,selectChild:tr.selectChild,selectChildren:tr.selectChildren,filter:ob,merge:ab,selection:gb,transition:Lb,call:tr.call,nodes:tr.nodes,node:tr.node,size:tr.size,empty:tr.empty,each:tr.each,on:cb,attr:WR,attrTween:qR,style:Sb,styleTween:wb,text:Cb,textTween:Pb,remove:hb,tween:OR,delay:QR,duration:tb,ease:ib,easeVarying:sb,end:Db,[Symbol.iterator]:tr[Symbol.iterator]};function Ib(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var Ub={time:null,delay:0,duration:250,ease:Ib};function Fb(n,e){for(var t;!(t=n.__transition)||!(t=t[e]);)if(!(n=n.parentNode))throw new Error(`transition ${e} not found`);return t}function Ob(n){var e,t;n instanceof cr?(e=n._id,n=n._name):(e=kx(),(t=Ub).time=xp(),n=n==null?null:n+"");for(var r=this._groups,o=r.length,l=0;l<o;++l)for(var u=r[l],c=u.length,h,d=0;d<c;++d)(h=u[d])&&Qc(h,n,e,d,u,t||Fb(h,e));return new cr(r,this._parents,n,e)}Za.prototype.interrupt=IR;Za.prototype.transition=Ob;var S0={},hd={},dd=34,Sa=10,pd=13;function zx(n){return new Function("d","return {"+n.map(function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'}).join(",")+"}")}function kb(n,e){var t=zx(n);return function(r,o){return e(t(r),o,n)}}function M0(n){var e=Object.create(null),t=[];return n.forEach(function(r){for(var o in r)o in e||t.push(e[o]=o)}),t}function Fn(n,e){var t=n+"",r=t.length;return r<e?new Array(e-r+1).join(0)+t:t}function zb(n){return n<0?"-"+Fn(-n,6):n>9999?"+"+Fn(n,6):Fn(n,4)}function Bb(n){var e=n.getUTCHours(),t=n.getUTCMinutes(),r=n.getUTCSeconds(),o=n.getUTCMilliseconds();return isNaN(n)?"Invalid Date":zb(n.getUTCFullYear())+"-"+Fn(n.getUTCMonth()+1,2)+"-"+Fn(n.getUTCDate(),2)+(o?"T"+Fn(e,2)+":"+Fn(t,2)+":"+Fn(r,2)+"."+Fn(o,3)+"Z":r?"T"+Fn(e,2)+":"+Fn(t,2)+":"+Fn(r,2)+"Z":t||e?"T"+Fn(e,2)+":"+Fn(t,2)+"Z":"")}function Hb(n){var e=new RegExp('["'+n+`
\r]`),t=n.charCodeAt(0);function r(_,m){var y,E,M=o(_,function(v,x){if(y)return y(v,x-1);E=v,y=m?kb(v,m):zx(v)});return M.columns=E||[],M}function o(_,m){var y=[],E=_.length,M=0,v=0,x,T=E<=0,A=!1;_.charCodeAt(E-1)===Sa&&--E,_.charCodeAt(E-1)===pd&&--E;function C(){if(T)return hd;if(A)return A=!1,S0;var D,I=M,X;if(_.charCodeAt(I)===dd){for(;M++<E&&_.charCodeAt(M)!==dd||_.charCodeAt(++M)===dd;);return(D=M)>=E?T=!0:(X=_.charCodeAt(M++))===Sa?A=!0:X===pd&&(A=!0,_.charCodeAt(M)===Sa&&++M),_.slice(I+1,D-1).replace(/""/g,'"')}for(;M<E;){if((X=_.charCodeAt(D=M++))===Sa)A=!0;else if(X===pd)A=!0,_.charCodeAt(M)===Sa&&++M;else if(X!==t)continue;return _.slice(I,D)}return T=!0,_.slice(I,E)}for(;(x=C())!==hd;){for(var k=[];x!==S0&&x!==hd;)k.push(x),x=C();m&&(k=m(k,v++))==null||y.push(k)}return y}function l(_,m){return _.map(function(y){return m.map(function(E){return p(y[E])}).join(n)})}function u(_,m){return m==null&&(m=M0(_)),[m.map(p).join(n)].concat(l(_,m)).join(`
`)}function c(_,m){return m==null&&(m=M0(_)),l(_,m).join(`
`)}function h(_){return _.map(d).join(`
`)}function d(_){return _.map(p).join(n)}function p(_){return _==null?"":_ instanceof Date?Bb(_):e.test(_+="")?'"'+_.replace(/"/g,'""')+'"':_}return{parse:r,parseRows:o,format:u,formatBody:c,formatRows:h,formatRow:d,formatValue:p}}var Vb=Hb(","),E0=Vb.parseRows;function Gb(n,e){var t,r=1;n==null&&(n=0),e==null&&(e=0);function o(){var l,u=t.length,c,h=0,d=0;for(l=0;l<u;++l)c=t[l],h+=c.x,d+=c.y;for(h=(h/u-n)*r,d=(d/u-e)*r,l=0;l<u;++l)c=t[l],c.x-=h,c.y-=d}return o.initialize=function(l){t=l},o.x=function(l){return arguments.length?(n=+l,o):n},o.y=function(l){return arguments.length?(e=+l,o):e},o.strength=function(l){return arguments.length?(r=+l,o):r},o}function Wb(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return Bx(this.cover(e,t),e,t,n)}function Bx(n,e,t,r){if(isNaN(e)||isNaN(t))return n;var o,l=n._root,u={data:r},c=n._x0,h=n._y0,d=n._x1,p=n._y1,_,m,y,E,M,v,x,T;if(!l)return n._root=u,n;for(;l.length;)if((M=e>=(_=(c+d)/2))?c=_:d=_,(v=t>=(m=(h+p)/2))?h=m:p=m,o=l,!(l=l[x=v<<1|M]))return o[x]=u,n;if(y=+n._x.call(null,l.data),E=+n._y.call(null,l.data),e===y&&t===E)return u.next=l,o?o[x]=u:n._root=u,n;do o=o?o[x]=new Array(4):n._root=new Array(4),(M=e>=(_=(c+d)/2))?c=_:d=_,(v=t>=(m=(h+p)/2))?h=m:p=m;while((x=v<<1|M)===(T=(E>=m)<<1|y>=_));return o[T]=l,o[x]=u,n}function Xb(n){var e,t,r=n.length,o,l,u=new Array(r),c=new Array(r),h=1/0,d=1/0,p=-1/0,_=-1/0;for(t=0;t<r;++t)isNaN(o=+this._x.call(null,e=n[t]))||isNaN(l=+this._y.call(null,e))||(u[t]=o,c[t]=l,o<h&&(h=o),o>p&&(p=o),l<d&&(d=l),l>_&&(_=l));if(h>p||d>_)return this;for(this.cover(h,d).cover(p,_),t=0;t<r;++t)Bx(this,u[t],c[t],n[t]);return this}function jb(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,r=this._y0,o=this._x1,l=this._y1;if(isNaN(t))o=(t=Math.floor(n))+1,l=(r=Math.floor(e))+1;else{for(var u=o-t||1,c=this._root,h,d;t>n||n>=o||r>e||e>=l;)switch(d=(e<r)<<1|n<t,h=new Array(4),h[d]=c,c=h,u*=2,d){case 0:o=t+u,l=r+u;break;case 1:t=o-u,l=r+u;break;case 2:o=t+u,r=l-u;break;case 3:t=o-u,r=l-u;break}this._root&&this._root.length&&(this._root=c)}return this._x0=t,this._y0=r,this._x1=o,this._y1=l,this}function Yb(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function $b(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Tn(n,e,t,r,o){this.node=n,this.x0=e,this.y0=t,this.x1=r,this.y1=o}function qb(n,e,t){var r,o=this._x0,l=this._y0,u,c,h,d,p=this._x1,_=this._y1,m=[],y=this._root,E,M;for(y&&m.push(new Tn(y,o,l,p,_)),t==null?t=1/0:(o=n-t,l=e-t,p=n+t,_=e+t,t*=t);E=m.pop();)if(!(!(y=E.node)||(u=E.x0)>p||(c=E.y0)>_||(h=E.x1)<o||(d=E.y1)<l))if(y.length){var v=(u+h)/2,x=(c+d)/2;m.push(new Tn(y[3],v,x,h,d),new Tn(y[2],u,x,v,d),new Tn(y[1],v,c,h,x),new Tn(y[0],u,c,v,x)),(M=(e>=x)<<1|n>=v)&&(E=m[m.length-1],m[m.length-1]=m[m.length-1-M],m[m.length-1-M]=E)}else{var T=n-+this._x.call(null,y.data),A=e-+this._y.call(null,y.data),C=T*T+A*A;if(C<t){var k=Math.sqrt(t=C);o=n-k,l=e-k,p=n+k,_=e+k,r=y.data}}return r}function Kb(n){if(isNaN(p=+this._x.call(null,n))||isNaN(_=+this._y.call(null,n)))return this;var e,t=this._root,r,o,l,u=this._x0,c=this._y0,h=this._x1,d=this._y1,p,_,m,y,E,M,v,x;if(!t)return this;if(t.length)for(;;){if((E=p>=(m=(u+h)/2))?u=m:h=m,(M=_>=(y=(c+d)/2))?c=y:d=y,e=t,!(t=t[v=M<<1|E]))return this;if(!t.length)break;(e[v+1&3]||e[v+2&3]||e[v+3&3])&&(r=e,x=v)}for(;t.data!==n;)if(o=t,!(t=t.next))return this;return(l=t.next)&&delete t.next,o?(l?o.next=l:delete o.next,this):e?(l?e[v]=l:delete e[v],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(r?r[x]=t:this._root=t),this):(this._root=l,this)}function Zb(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function Qb(){return this._root}function Jb(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function e2(n){var e=[],t,r=this._root,o,l,u,c,h;for(r&&e.push(new Tn(r,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(r=t.node,l=t.x0,u=t.y0,c=t.x1,h=t.y1)&&r.length){var d=(l+c)/2,p=(u+h)/2;(o=r[3])&&e.push(new Tn(o,d,p,c,h)),(o=r[2])&&e.push(new Tn(o,l,p,d,h)),(o=r[1])&&e.push(new Tn(o,d,u,c,p)),(o=r[0])&&e.push(new Tn(o,l,u,d,p))}return this}function t2(n){var e=[],t=[],r;for(this._root&&e.push(new Tn(this._root,this._x0,this._y0,this._x1,this._y1));r=e.pop();){var o=r.node;if(o.length){var l,u=r.x0,c=r.y0,h=r.x1,d=r.y1,p=(u+h)/2,_=(c+d)/2;(l=o[0])&&e.push(new Tn(l,u,c,p,_)),(l=o[1])&&e.push(new Tn(l,p,c,h,_)),(l=o[2])&&e.push(new Tn(l,u,_,p,d)),(l=o[3])&&e.push(new Tn(l,p,_,h,d))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.y0,r.x1,r.y1);return this}function n2(n){return n[0]}function i2(n){return arguments.length?(this._x=n,this):this._x}function r2(n){return n[1]}function s2(n){return arguments.length?(this._y=n,this):this._y}function Hx(n,e,t){var r=new Ep(e??n2,t??r2,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function Ep(n,e,t,r,o,l){this._x=n,this._y=e,this._x0=t,this._y0=r,this._x1=o,this._y1=l,this._root=void 0}function w0(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Cn=Hx.prototype=Ep.prototype;Cn.copy=function(){var n=new Ep(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=w0(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var o=0;o<4;++o)(r=e.source[o])&&(r.length?t.push({source:r,target:e.target[o]=new Array(4)}):e.target[o]=w0(r));return n};Cn.add=Wb;Cn.addAll=Xb;Cn.cover=jb;Cn.data=Yb;Cn.extent=$b;Cn.find=qb;Cn.remove=Kb;Cn.removeAll=Zb;Cn.root=Qb;Cn.size=Jb;Cn.visit=e2;Cn.visitAfter=t2;Cn.x=i2;Cn.y=s2;function Qn(n){return function(){return n}}function xo(n){return(n()-.5)*1e-6}function o2(n){return n.index}function T0(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function a2(n){var e=o2,t=_,r,o=Qn(30),l,u,c,h,d,p=1;n==null&&(n=[]);function _(v){return 1/Math.min(c[v.source.index],c[v.target.index])}function m(v){for(var x=0,T=n.length;x<p;++x)for(var A=0,C,k,D,I,X,L,R;A<T;++A)C=n[A],k=C.source,D=C.target,I=D.x+D.vx-k.x-k.vx||xo(d),X=D.y+D.vy-k.y-k.vy||xo(d),L=Math.sqrt(I*I+X*X),L=(L-l[A])/L*v*r[A],I*=L,X*=L,D.vx-=I*(R=h[A]),D.vy-=X*R,k.vx+=I*(R=1-R),k.vy+=X*R}function y(){if(u){var v,x=u.length,T=n.length,A=new Map(u.map((k,D)=>[e(k,D,u),k])),C;for(v=0,c=new Array(x);v<T;++v)C=n[v],C.index=v,typeof C.source!="object"&&(C.source=T0(A,C.source)),typeof C.target!="object"&&(C.target=T0(A,C.target)),c[C.source.index]=(c[C.source.index]||0)+1,c[C.target.index]=(c[C.target.index]||0)+1;for(v=0,h=new Array(T);v<T;++v)C=n[v],h[v]=c[C.source.index]/(c[C.source.index]+c[C.target.index]);r=new Array(T),E(),l=new Array(T),M()}}function E(){if(u)for(var v=0,x=n.length;v<x;++v)r[v]=+t(n[v],v,n)}function M(){if(u)for(var v=0,x=n.length;v<x;++v)l[v]=+o(n[v],v,n)}return m.initialize=function(v,x){u=v,d=x,y()},m.links=function(v){return arguments.length?(n=v,y(),m):n},m.id=function(v){return arguments.length?(e=v,m):e},m.iterations=function(v){return arguments.length?(p=+v,m):p},m.strength=function(v){return arguments.length?(t=typeof v=="function"?v:Qn(+v),E(),m):t},m.distance=function(v){return arguments.length?(o=typeof v=="function"?v:Qn(+v),M(),m):o},m}const l2=1664525,u2=1013904223,A0=4294967296;function c2(){let n=1;return()=>(n=(l2*n+u2)%A0)/A0}function f2(n){return n.x}function h2(n){return n.y}var d2=10,p2=Math.PI*(3-Math.sqrt(5));function m2(n){var e,t=1,r=.001,o=1-Math.pow(r,1/300),l=0,u=.6,c=new Map,h=yp(_),d=dp("tick","end"),p=c2();n==null&&(n=[]);function _(){m(),d.call("tick",e),t<r&&(h.stop(),d.call("end",e))}function m(M){var v,x=n.length,T;M===void 0&&(M=1);for(var A=0;A<M;++A)for(t+=(l-t)*o,c.forEach(function(C){C(t)}),v=0;v<x;++v)T=n[v],T.fx==null?T.x+=T.vx*=u:(T.x=T.fx,T.vx=0),T.fy==null?T.y+=T.vy*=u:(T.y=T.fy,T.vy=0);return e}function y(){for(var M=0,v=n.length,x;M<v;++M){if(x=n[M],x.index=M,x.fx!=null&&(x.x=x.fx),x.fy!=null&&(x.y=x.fy),isNaN(x.x)||isNaN(x.y)){var T=d2*Math.sqrt(.5+M),A=M*p2;x.x=T*Math.cos(A),x.y=T*Math.sin(A)}(isNaN(x.vx)||isNaN(x.vy))&&(x.vx=x.vy=0)}}function E(M){return M.initialize&&M.initialize(n,p),M}return y(),e={tick:m,restart:function(){return h.restart(_),e},stop:function(){return h.stop(),e},nodes:function(M){return arguments.length?(n=M,y(),c.forEach(E),e):n},alpha:function(M){return arguments.length?(t=+M,e):t},alphaMin:function(M){return arguments.length?(r=+M,e):r},alphaDecay:function(M){return arguments.length?(o=+M,e):+o},alphaTarget:function(M){return arguments.length?(l=+M,e):l},velocityDecay:function(M){return arguments.length?(u=1-M,e):1-u},randomSource:function(M){return arguments.length?(p=M,c.forEach(E),e):p},force:function(M,v){return arguments.length>1?(v==null?c.delete(M):c.set(M,E(v)),e):c.get(M)},find:function(M,v,x){var T=0,A=n.length,C,k,D,I,X;for(x==null?x=1/0:x*=x,T=0;T<A;++T)I=n[T],C=M-I.x,k=v-I.y,D=C*C+k*k,D<x&&(X=I,x=D);return X},on:function(M,v){return arguments.length>1?(d.on(M,v),e):d.on(M)}}}function g2(){var n,e,t,r,o=Qn(-30),l,u=1,c=1/0,h=.81;function d(y){var E,M=n.length,v=Hx(n,f2,h2).visitAfter(_);for(r=y,E=0;E<M;++E)e=n[E],v.visit(m)}function p(){if(n){var y,E=n.length,M;for(l=new Array(E),y=0;y<E;++y)M=n[y],l[M.index]=+o(M,y,n)}}function _(y){var E=0,M,v,x=0,T,A,C;if(y.length){for(T=A=C=0;C<4;++C)(M=y[C])&&(v=Math.abs(M.value))&&(E+=M.value,x+=v,T+=v*M.x,A+=v*M.y);y.x=T/x,y.y=A/x}else{M=y,M.x=M.data.x,M.y=M.data.y;do E+=l[M.data.index];while(M=M.next)}y.value=E}function m(y,E,M,v){if(!y.value)return!0;var x=y.x-e.x,T=y.y-e.y,A=v-E,C=x*x+T*T;if(A*A/h<C)return C<c&&(x===0&&(x=xo(t),C+=x*x),T===0&&(T=xo(t),C+=T*T),C<u&&(C=Math.sqrt(u*C)),e.vx+=x*y.value*r/C,e.vy+=T*y.value*r/C),!0;if(y.length||C>=c)return;(y.data!==e||y.next)&&(x===0&&(x=xo(t),C+=x*x),T===0&&(T=xo(t),C+=T*T),C<u&&(C=Math.sqrt(u*C)));do y.data!==e&&(A=l[y.data.index]*r/C,e.vx+=x*A,e.vy+=T*A);while(y=y.next)}return d.initialize=function(y,E){n=y,t=E,p()},d.strength=function(y){return arguments.length?(o=typeof y=="function"?y:Qn(+y),p(),d):o},d.distanceMin=function(y){return arguments.length?(u=y*y,d):Math.sqrt(u)},d.distanceMax=function(y){return arguments.length?(c=y*y,d):Math.sqrt(c)},d.theta=function(y){return arguments.length?(h=y*y,d):Math.sqrt(h)},d}function _2(n){var e=Qn(.1),t,r,o;typeof n!="function"&&(n=Qn(n==null?0:+n));function l(c){for(var h=0,d=t.length,p;h<d;++h)p=t[h],p.vx+=(o[h]-p.x)*r[h]*c}function u(){if(t){var c,h=t.length;for(r=new Array(h),o=new Array(h),c=0;c<h;++c)r[c]=isNaN(o[c]=+n(t[c],c,t))?0:+e(t[c],c,t)}}return l.initialize=function(c){t=c,u()},l.strength=function(c){return arguments.length?(e=typeof c=="function"?c:Qn(+c),u(),l):e},l.x=function(c){return arguments.length?(n=typeof c=="function"?c:Qn(+c),u(),l):n},l}function v2(n){var e=Qn(.1),t,r,o;typeof n!="function"&&(n=Qn(n==null?0:+n));function l(c){for(var h=0,d=t.length,p;h<d;++h)p=t[h],p.vy+=(o[h]-p.y)*r[h]*c}function u(){if(t){var c,h=t.length;for(r=new Array(h),o=new Array(h),c=0;c<h;++c)r[c]=isNaN(o[c]=+n(t[c],c,t))?0:+e(t[c],c,t)}}return l.initialize=function(c){t=c,u()},l.strength=function(c){return arguments.length?(e=typeof c=="function"?c:Qn(+c),u(),l):e},l.y=function(c){return arguments.length?(n=typeof c=="function"?c:Qn(+c),u(),l):n},l}function x2(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function Lc(n,e){if(!isFinite(n)||n===0)return null;var t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"),r=n.slice(0,t);return[r.length>1?r[0]+r.slice(2):r,+n.slice(t+1)]}function Co(n){return n=Lc(Math.abs(n)),n?n[1]:NaN}function y2(n,e){return function(t,r){for(var o=t.length,l=[],u=0,c=n[0],h=0;o>0&&c>0&&(h+c+1>r&&(c=Math.max(1,r-h)),l.push(t.substring(o-=c,o+c)),!((h+=c+1)>r));)c=n[u=(u+1)%n.length];return l.reverse().join(e)}}function S2(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var M2=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Dc(n){if(!(e=M2.exec(n)))throw new Error("invalid format: "+n);var e;return new wp({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Dc.prototype=wp.prototype;function wp(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}wp.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function E2(n){e:for(var e=n.length,t=1,r=-1,o;t<e;++t)switch(n[t]){case".":r=o=t;break;case"0":r===0&&(r=t),o=t;break;default:if(!+n[t])break e;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(o+1):n}var Nc;function w2(n,e){var t=Lc(n,e);if(!t)return Nc=void 0,n.toPrecision(e);var r=t[0],o=t[1],l=o-(Nc=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,u=r.length;return l===u?r:l>u?r+new Array(l-u+1).join("0"):l>0?r.slice(0,l)+"."+r.slice(l):"0."+new Array(1-l).join("0")+Lc(n,Math.max(0,e+l-1))[0]}function C0(n,e){var t=Lc(n,e);if(!t)return n+"";var r=t[0],o=t[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")}const R0={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:x2,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>C0(n*100,e),r:C0,s:w2,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function b0(n){return n}var P0=Array.prototype.map,L0=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function T2(n){var e=n.grouping===void 0||n.thousands===void 0?b0:y2(P0.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",o=n.decimal===void 0?".":n.decimal+"",l=n.numerals===void 0?b0:S2(P0.call(n.numerals,String)),u=n.percent===void 0?"%":n.percent+"",c=n.minus===void 0?"−":n.minus+"",h=n.nan===void 0?"NaN":n.nan+"";function d(_,m){_=Dc(_);var y=_.fill,E=_.align,M=_.sign,v=_.symbol,x=_.zero,T=_.width,A=_.comma,C=_.precision,k=_.trim,D=_.type;D==="n"?(A=!0,D="g"):R0[D]||(C===void 0&&(C=12),k=!0,D="g"),(x||y==="0"&&E==="=")&&(x=!0,y="0",E="=");var I=(m&&m.prefix!==void 0?m.prefix:"")+(v==="$"?t:v==="#"&&/[boxX]/.test(D)?"0"+D.toLowerCase():""),X=(v==="$"?r:/[%p]/.test(D)?u:"")+(m&&m.suffix!==void 0?m.suffix:""),L=R0[D],R=/[defgprs%]/.test(D);C=C===void 0?6:/[gprs]/.test(D)?Math.max(1,Math.min(21,C)):Math.max(0,Math.min(20,C));function U(W){var V=I,K=X,te,J,le;if(D==="c")K=L(W)+K,W="";else{W=+W;var H=W<0||1/W<0;if(W=isNaN(W)?h:L(Math.abs(W),C),k&&(W=E2(W)),H&&+W==0&&M!=="+"&&(H=!1),V=(H?M==="("?M:c:M==="-"||M==="("?"":M)+V,K=(D==="s"&&!isNaN(W)&&Nc!==void 0?L0[8+Nc/3]:"")+K+(H&&M==="("?")":""),R){for(te=-1,J=W.length;++te<J;)if(le=W.charCodeAt(te),48>le||le>57){K=(le===46?o+W.slice(te+1):W.slice(te))+K,W=W.slice(0,te);break}}}A&&!x&&(W=e(W,1/0));var ce=V.length+W.length+K.length,ne=ce<T?new Array(T-ce+1).join(y):"";switch(A&&x&&(W=e(ne+W,ne.length?T-K.length:1/0),ne=""),E){case"<":W=V+W+K+ne;break;case"=":W=V+ne+W+K;break;case"^":W=ne.slice(0,ce=ne.length>>1)+V+W+K+ne.slice(ce);break;default:W=ne+V+W+K;break}return l(W)}return U.toString=function(){return _+""},U}function p(_,m){var y=Math.max(-8,Math.min(8,Math.floor(Co(m)/3)))*3,E=Math.pow(10,-y),M=d((_=Dc(_),_.type="f",_),{suffix:L0[8+y/3]});return function(v){return M(E*v)}}return{format:d,formatPrefix:p}}var Nu,Vx,Gx;A2({thousands:",",grouping:[3],currency:["$",""]});function A2(n){return Nu=T2(n),Vx=Nu.format,Gx=Nu.formatPrefix,Nu}function C2(n){return Math.max(0,-Co(Math.abs(n)))}function R2(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Co(e)/3)))*3-Co(Math.abs(n)))}function b2(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,Co(e)-Co(n))+1}function P2(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function L2(n){return function(){return n}}function D2(n){return+n}var D0=[0,1];function yo(n){return n}function Ud(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:L2(isNaN(e)?NaN:.5)}function N2(n,e){var t;return n>e&&(t=n,n=e,e=t),function(r){return Math.max(n,Math.min(e,r))}}function I2(n,e,t){var r=n[0],o=n[1],l=e[0],u=e[1];return o<r?(r=Ud(o,r),l=t(u,l)):(r=Ud(r,o),l=t(l,u)),function(c){return l(r(c))}}function U2(n,e,t){var r=Math.min(n.length,e.length)-1,o=new Array(r),l=new Array(r),u=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++u<r;)o[u]=Ud(n[u],n[u+1]),l[u]=t(e[u],e[u+1]);return function(c){var h=rA(n,c,1,r)-1;return l[h](o[h](c))}}function F2(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function O2(){var n=D0,e=D0,t=vp,r,o,l,u=yo,c,h,d;function p(){var m=Math.min(n.length,e.length);return u!==yo&&(u=N2(n[0],n[m-1])),c=m>2?U2:I2,h=d=null,_}function _(m){return m==null||isNaN(m=+m)?l:(h||(h=c(n.map(r),e,t)))(r(u(m)))}return _.invert=function(m){return u(o((d||(d=c(e,n.map(r),Mi)))(m)))},_.domain=function(m){return arguments.length?(n=Array.from(m,D2),p()):n.slice()},_.range=function(m){return arguments.length?(e=Array.from(m),p()):e.slice()},_.rangeRound=function(m){return e=Array.from(m),t=SR,p()},_.clamp=function(m){return arguments.length?(u=m?!0:yo,p()):u!==yo},_.interpolate=function(m){return arguments.length?(t=m,p()):t},_.unknown=function(m){return arguments.length?(l=m,_):l},function(m,y){return r=m,o=y,p()}}function k2(){return O2()(yo,yo)}function z2(n,e,t,r){var o=mA(n,e,t),l;switch(r=Dc(r??",f"),r.type){case"s":{var u=Math.max(Math.abs(n),Math.abs(e));return r.precision==null&&!isNaN(l=R2(o,u))&&(r.precision=l),Gx(r,u)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(l=b2(o,Math.max(Math.abs(n),Math.abs(e))))&&(r.precision=l-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(l=C2(o))&&(r.precision=l-(r.type==="%")*2);break}}return Vx(r)}function B2(n){var e=n.domain;return n.ticks=function(t){var r=e();return pA(r[0],r[r.length-1],t??10)},n.tickFormat=function(t,r){var o=e();return z2(o[0],o[o.length-1],t??10,r)},n.nice=function(t){t==null&&(t=10);var r=e(),o=0,l=r.length-1,u=r[o],c=r[l],h,d,p=10;for(c<u&&(d=u,u=c,c=d,d=o,o=l,l=d);p-- >0;){if(d=Cd(u,c,t),d===h)return r[o]=u,r[l]=c,e(r);if(d>0)u=Math.floor(u/d)*d,c=Math.ceil(c/d)*d;else if(d<0)u=Math.ceil(u*d)/d,c=Math.floor(c*d)/d;else break;h=d}return n},n}function Fd(){var n=k2();return n.copy=function(){return F2(n,Fd())},P2.apply(n,arguments),B2(n)}function Aa(n,e,t){this.k=n,this.x=e,this.y=t}Aa.prototype={constructor:Aa,scale:function(n){return n===1?this:new Aa(this.k*n,this.x,this.y)},translate:function(n,e){return n===0&e===0?this:new Aa(this.k,this.x+this.k*n,this.y+this.k*e)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Aa.prototype;function mo(n){return n&&n!=="\\N"}function H2(n,e){const t=E0(n),r=new Map,o=new Map;for(const m of t){if(m.length<8)continue;const y=+m[6],E=+m[7];if(!Number.isFinite(y)||!Number.isFinite(E))continue;const M={numericId:m[0],name:m[1],city:m[2],country:m[3],iata:mo(m[4])?m[4]:null,icao:mo(m[5])?m[5]:null,lat:y,lon:E,degree:0,routeCount:0,international:0,domestic:0,neighbors:new Set,index:-1,topology:null};M.id=M.iata||M.icao||`ID-${M.numericId}`,r.set(M.numericId,M),M.iata&&o.set(M.iata,M),M.icao&&o.set(M.icao,M)}const l=new Map;let u=0,c=0;for(const m of E0(e)){if(m.length<6)continue;const y=mo(m[3])&&r.get(m[3])||mo(m[2])&&o.get(m[2]),E=mo(m[5])&&r.get(m[5])||mo(m[4])&&o.get(m[4]);if(!y||!E||y===E){c++;continue}u++;const M=y.numericId<E.numericId?[y,E]:[E,y],v=`${M[0].numericId}|${M[1].numericId}`;let x=l.get(v);x||(x={source:M[0],target:M[1],weight:0,carriers:new Set,international:M[0].country!==M[1].country},l.set(v,x)),x.weight++,m[0]&&x.carriers.add(m[0])}const h=[...l.values()],d=new Set;for(const m of h)d.add(m.source),d.add(m.target),m.source.neighbors.add(m.target.numericId),m.target.neighbors.add(m.source.numericId),m.source.routeCount+=m.weight,m.target.routeCount+=m.weight,m.international?(m.source.international+=m.weight,m.target.international+=m.weight):(m.source.domestic+=m.weight,m.target.domestic+=m.weight);const p=[...d];p.forEach((m,y)=>{m.index=y,m.degree=m.neighbors.size}),h.forEach((m,y)=>{m.index=y,m.score=m.weight*20+Math.sqrt(m.source.degree*m.target.degree)}),h.sort((m,y)=>y.score-m.score);const _=uA(p,m=>m.length,m=>m.country).sort((m,y)=>px(m[1],y[1]));return{nodes:p,links:h,countries:_,rawRouteCount:u,skipped:c}}function Od(n,e,t=1){const r=(90-n)*Math.PI/180,o=(e+180)*Math.PI/180;return new q(-Math.sin(r)*Math.cos(o),Math.cos(r),Math.sin(r)*Math.sin(o)).multiplyScalar(t)}function N0(n,e,t,r){const o=n.clone().normalize(),l=e.clone().normalize(),u=Math.acos(Wc.clamp(o.dot(l),-1,1));let c;if(u<1e-4)c=o.clone().lerp(l,t).normalize();else{const h=Math.sin(u);c=o.multiplyScalar(Math.sin((1-t)*u)/h).add(l.multiplyScalar(Math.sin(t*u)/h))}return c.multiplyScalar(1.012+Math.sin(Math.PI*t)*r)}function I0(n,e,t){const r=n===e,o=!!(e&&e.neighbors.has(n.numericId)),l=r?t.nodeSelected:o?t.nodeConnected:n.degree>45?t.node.hub:n.degree>15?t.node.mid:t.node.low,u=(4.2+Math.min(8,Math.sqrt(n.degree)*.72))*(r?1.65:o?1.2:1);return{color:l,pixelSize:u,isSelected:r,connected:o}}function U0(n,e,t,r){const o=Wc.degToRad(e.fov),l=2*Math.tan(o/2)*r,u=t/l;return n/(2*u)}const V2=1.014;function G2(n){const e=n.length,t=new Float32Array(e*3),r=new Float32Array(e*3);let o=!1;const l=new q;return n.forEach((u,c)=>{l.copy(Od(u.lat,u.lon,V2)),t[c*3]=l.x,t[c*3+1]=l.y,t[c*3+2]=l.z}),{count:e,geo:t,topology:r,get topologyReady(){return o},markTopologyReady(){o=!0},table(u){return u==="globe"||!o?t:r},read(u,c,h){const d=this.table(u);return h.set(d[c*3],d[c*3+1],d[c*3+2])}}}const W2="e3bc6dedbcceb8b7b74248a00dcd6207254da6bd",X2=`https://cdn.jsdelivr.net/gh/jpatokal/openflights@${W2}/data`,j2=2e4,Y2=["airports","routes"];async function $2(n,e,t){const r=new AbortController,o=()=>r.abort(t?.reason);t?.aborted?r.abort(t.reason):t?.addEventListener("abort",o,{once:!0});const l=e?setTimeout(()=>r.abort(new Error("timed out")),e):null;try{const u=await fetch(n,{signal:r.signal});if(!u.ok)throw new Error(`HTTP ${u.status}`);const c=await u.text();if(/^\s*<(?:!doctype|html)/i.test(c))throw new Error("received HTML, not data");return c}finally{l&&clearTimeout(l),t?.removeEventListener("abort",o)}}const Iu={local:{id:"local",label:"bundled data files",url:n=>`/openflights/${n}.dat`},upstream:{id:"upstream",label:"OpenFlights upstream (jsDelivr)",url:n=>`${X2}/${n}.dat`,timeout:j2}};function q2(){const n=typeof window>"u"?null:new URLSearchParams(window.location.search).get("data");return n==="local"?[Iu.local]:n==="upstream"?[Iu.upstream]:[Iu.local,Iu.upstream]}async function K2({signal:n}={}){const e=[];for(const r of q2())try{const[o,l]=await Promise.all(Y2.map(u=>$2(r.url(u),r.timeout,n)));return{airports:o,routes:l,source:r.id,attempts:e}}catch(o){if(n?.aborted)throw o;e.push(`${r.label}: ${o.message}`)}const t=new Error(e.join("; ")||"no data sources configured");throw t.attempts=e,t}function Z2(n,e,t){At.useEffect(()=>{if(!n)return;let r=!1,o;const l=n.nodes.map(p=>({id:p.numericId,x:p.lon*2.1,y:-p.lat*2.1,ref:p}));new Map(l.map(p=>[p.id,p]));const u=n.links.map(p=>({source:p.source.numericId,target:p.target.numericId,weight:p.weight})),c=m2(l).force("link",a2(u).id(p=>p.id).distance(p=>18+22/Math.sqrt(p.weight)).strength(.045)).force("charge",g2().strength(-17).distanceMax(190)).force("center",Gb(0,0)).force("x",_2(0).strength(.012)).force("y",v2(0).strength(.012)).stop();let h=0;const d=p=>{for(;!r&&h<85&&p.timeRemaining()>1;)c.tick(),h++;if(!r)if(h<85)o=i0(d);else{const _=r0(l,v=>v.x),m=r0(l,v=>v.y),y=Fd().domain(_).range([-1.5,1.5]),E=Fd().domain(m).range([1.1,-1.1]),M=e.topology;for(const v of l){const x=v.ref.index;M[x*3]=y(v.x),M[x*3+1]=E(v.y),M[x*3+2]=.08*Math.log1p(v.ref.degree)}e.markTopologyReady(),t()}};return o=i0(d),()=>{r=!0,eA(o),c.stop()}},[n,t])}const F0={type:"change"},Tp={type:"start"},Wx={type:"end"},Uu=new $a,O0=new nr,Q2=Math.cos(70*Wc.DEG2RAD),Qt=new q,Un=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},md=1e-6;class J2 extends dx{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xs.ROTATE,MIDDLE:xs.DOLLY,RIGHT:xs.PAN},this.touches={ONE:_s.ROTATE,TWO:_s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new jr,this._lastTargetPosition=new q,this._quat=new jr().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ad,this._sphericalDelta=new Ad,this._scale=1,this._panOffset=new q,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new q,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tP.bind(this),this._onPointerDown=eP.bind(this),this._onPointerUp=nP.bind(this),this._onContextMenu=uP.bind(this),this._onMouseWheel=sP.bind(this),this._onKeyDown=oP.bind(this),this._onTouchStart=aP.bind(this),this._onTouchMove=lP.bind(this),this._onMouseDown=iP.bind(this),this._onMouseMove=rP.bind(this),this._interceptControlDown=cP.bind(this),this._interceptControlUp=fP.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(F0),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Un:r>Math.PI&&(r-=Un),o<-Math.PI?o+=Un:o>Math.PI&&(o-=Un),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const c=Qt.length();u=this._clampDistance(c*this._scale);const h=c-u;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const c=new q(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const d=new q(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(c),this.object.updateMatrixWorld(),u=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Uu.origin.copy(this.object.position),Uu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uu.direction))<Q2?this.object.lookAt(this.target):(O0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uu.intersectPlane(O0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>md||8*(1-this._lastQuaternion.dot(this.object.quaternion))>md||this._lastTargetPosition.distanceToSquared(this.target)>md?(this.dispatchEvent(F0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Qt.copy(o).sub(this.target);let l=Qt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,c=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(u,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new it,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function eP(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function tP(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function nP(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wx),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function iP(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ct.DOLLY;break;case xs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ct.ROTATE}break;case xs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Tp)}function rP(n){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function sP(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(n.preventDefault(),this.dispatchEvent(Tp),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Wx))}function oP(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function aP(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case _s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ct.TOUCH_ROTATE;break;case _s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case _s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ct.TOUCH_DOLLY_PAN;break;case _s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Tp)}function lP(n){switch(this._trackPointer(n),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ct.NONE}}function uP(n){this.enabled!==!1&&n.preventDefault()}function cP(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fP(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const hP=`
varying vec2 vUv;
varying vec3 vNormal;
void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,dP=`
uniform sampler2D uTerrain;
uniform vec2 uTexel;
uniform vec3 uOcean;
uniform vec3 uOceanDeep;
uniform vec3 uShore;
uniform vec3 uRamp[6];
uniform float uRampAt[6];
uniform float uRelief;
uniform vec3 uLightDir;
varying vec2 vUv;
varying vec3 vNormal;

// Piecewise-linear lookup through the hypsometric ramp.
vec3 hypsometric(float h) {
  vec3 col = uRamp[0];
  for (int i = 1; i < 6; i++) {
    float t = smoothstep(uRampAt[i - 1], uRampAt[i], h);
    col = mix(col, uRamp[i], t);
  }
  return col;
}

void main() {
  vec4 t = texture2D(uTerrain, vUv);
  float elevation = t.r;
  float land = t.g;

  // Hillshade from the height gradient. Sampling neighbours in texture space
  // is cheap and, because the sphere's uv is equirectangular, lines up with
  // north/east on the ground.
  float hL = texture2D(uTerrain, vUv - vec2(uTexel.x, 0.0)).r;
  float hR = texture2D(uTerrain, vUv + vec2(uTexel.x, 0.0)).r;
  float hD = texture2D(uTerrain, vUv - vec2(0.0, uTexel.y)).r;
  float hU = texture2D(uTerrain, vUv + vec2(0.0, uTexel.y)).r;
  // Cosine of latitude: longitude texels converge at the poles, so the
  // east-west slope has to be rescaled or the poles shear into streaks.
  float latScale = max(sin(vUv.y * 3.14159265), 0.08);
  vec3 slope = normalize(vec3(-(hR - hL) / latScale, -(hU - hD), 0.12));
  float shade = clamp(dot(slope, normalize(uLightDir)), 0.0, 1.0);
  shade = mix(1.0, 0.45 + shade, uRelief);

  vec3 landColor = hypsometric(elevation) * shade;
  // A shore tint, keyed to the softened edge of the coastline mask rather
  // than to absolute height. Keying it to elevation washed every low-lying
  // basin — the Amazon, the Congo, the Gangetic plain — out to a water-like
  // pale blue, because those are only a few metres above sea level.
  float coast = 1.0 - smoothstep(0.55, 0.90, land);
  landColor = mix(landColor, uShore, coast * 0.45);

  // No bathymetry is available, so ocean depth is faked gently from distance
  // to land: the mask blurs across the coast under linear filtering.
  vec3 waterColor = mix(uOceanDeep, uOcean, smoothstep(0.0, 0.5, land));

  vec3 base = mix(waterColor, landColor, smoothstep(0.35, 0.65, land));

  // A little diffuse so the globe still reads as a sphere rather than a disc.
  float diffuse = clamp(dot(vNormal, normalize(uLightDir)), 0.0, 1.0);
  gl_FragColor = vec4(base * (0.78 + 0.30 * diffuse), 1.0);
  // A raw ShaderMaterial gets none of the built-in output processing, so the
  // linear working-space colour has to be encoded for the sRGB framebuffer
  // here. Without this the whole ramp renders dark and oversaturated.
  #include <colorspace_fragment>
}`;function pP(n,e,t){const r=n.land;return new Jn({transparent:!1,uniforms:{uTerrain:{value:e},uTexel:{value:new it(1/t.x,1/t.y)},uOcean:{value:n.ocean.clone()},uOceanDeep:{value:n.oceanDeep.clone()},uShore:{value:n.shore.clone()},uRamp:{value:r.map(o=>o.color.clone())},uRampAt:{value:r.map(o=>o.at)},uRelief:{value:n.relief},uLightDir:{value:new q(.6,.45,.66).normalize()}},vertexShader:hP,fragmentShader:dP})}function mP(n,e){const t=new vo;n.add(t);const r=new ox({color:1055270,emissive:462874,specular:2704476,shininess:22,transparent:!1}),o=new Zn(new Ss(QT,96,64),r);t.add(o);const l=new Ka({color:3493992,transparent:!0,opacity:.13,depthWrite:!1}),u=new $c(new rx(new Ss(1.003,36,18)),l);t.add(u);const c=new Jn({transparent:!0,side:xn,depthWrite:!1,uniforms:{uColor:{value:new Ge("#389eeb")},uStrength:{value:.26}},vertexShader:"varying vec3 vN; varying vec3 vW; void main(){vN=normalize(normalMatrix*normal); vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`uniform vec3 uColor; uniform float uStrength; varying vec3 vN; varying vec3 vW; void main(){vec3 V=normalize(cameraPosition-vW);float rim=pow(1.0-max(dot(vN,V),0.0),2.4);gl_FragColor=vec4(uColor,rim*uStrength);
      #include <colorspace_fragment>
    }`}),h=new Zn(new Ss(1.045,48,32),c);t.add(h);const d=new cn,p=new Float32Array(900*3);for(let T=0;T<900;T++){const A=7+Math.random()*8,C=Math.random()*2-1,k=Math.random()*Math.PI*2,D=Math.sqrt(1-C*C);p[T*3]=A*D*Math.cos(k),p[T*3+1]=A*C,p[T*3+2]=A*D*Math.sin(k)}d.setAttribute("position",new Wt(p,3));const _=new fp(d,new cp({color:8231863,size:.012,transparent:!0,opacity:.42,depthWrite:!1}));n.add(_);let m=null,y=null,E=!1,M=null;const v=(T,A)=>{m||E||!T.terrain||(E=!0,new cx().load("/openflights/geo/terrain-4096.png",C=>{E=!1,C.colorSpace=Ei,C.wrapS=Fa,C.wrapT=ir,C.minFilter=rr,C.magFilter=Kn,C.generateMipmaps=!0,C.anisotropy=8,y=C,m=pP(T.terrain,C,{x:C.image.width,y:C.image.height}),M&&M.terrain&&(o.material=m),A?.()},void 0,()=>{E=!1}))};return{globeGroup:t,globe:o,grid:u,atmosphere:h,starsObj:_,starsGeo:d,applyTheme:(T,A)=>{M=T,T.terrain?m?o.material=m:v(T,A):o.material=r,l.color.set(T.grid.color),l.opacity=T.grid.opacity,c.uniforms.uColor.value.copy(T.atmosphere.color),c.uniforms.uStrength.value=T.atmosphere.strength,_.visible=T.stars},dispose(){y?.dispose(),m?.dispose(),r.dispose()}}}function gP(n,e,t,r,o,l){const u=new Float32Array(e.nodes.length*3),c=new Float32Array(e.nodes.length*3),h=new Float32Array(e.nodes.length),d=new Float32Array(e.nodes.length),p=new Float32Array(e.nodes.length),_=new Float32Array(e.nodes.length);for(let R=0;R<p.length;R++)p[R]=R;u.set(t.geo),e.nodes.forEach((R,U)=>{h[U]=4.2+Math.min(8,Math.sqrt(R.degree)*.72),d[U]=.88});const m=new cn;m.setAttribute("position",new Wt(u,3)),m.setAttribute("color",new Wt(c,3)),m.setAttribute("aSize",new Wt(h,1)),m.setAttribute("aAlpha",new Wt(d,1)),m.setAttribute("aIndex",new Wt(p,1)),m.setAttribute("aPickable",new Wt(_,1));const y=new Jn({transparent:!0,depthWrite:!1,vertexColors:!0,uniforms:{uPixelRatio:{value:r.getPixelRatio()}},vertexShader:"attribute float aSize;attribute float aAlpha;varying vec3 vColor;varying float vAlpha;void main(){vColor=color;vAlpha=aAlpha;vec4 mv=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(aSize*(260.0/-mv.z),2.0,18.0);gl_Position=projectionMatrix*mv;}",fragmentShader:`varying vec3 vColor;varying float vAlpha;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,.25,d)*vAlpha;if(a<.015)discard;gl_FragColor=vec4(vColor,a);
      #include <colorspace_fragment>
    }`}),E=new fp(m,y);n.add(E);const M=e.nodes.reduce((R,U)=>U.degree>R.degree?U:R,e.nodes[0]),v=new Ss(1,24,16),x=new sx({roughness:.32,metalness:.2}),T=new Zn(v,x);T.visible=!1,n.add(T);let A=0,C=3.55;const k=(R,U,W,V)=>{if(!W){T.visible=!1;return}const{color:K,pixelSize:te}=I0(W,U,V);t.read(R.view,W.index,T.position),X=W.index,x.color.copy(K),x.emissive.copy(K).multiplyScalar(.32),A=te,C=R.view==="globe"?3.55:4.2,T.scale.setScalar(U0(A,o,l(),C)),T.visible=!0};let D=e.nodes.map((R,U)=>U),I=t.geo,X=-1;const L=(R,U,W,V)=>{D=[];const K=t.table(R.view);K!==I&&(u.set(K),m.attributes.position.needsUpdate=!0,I=K),e.nodes.forEach((te,J)=>{const le=!R.country||te.country===R.country,H=te.degree>=R.minDegree,ce=le&&H,{color:ne,pixelSize:O,isSelected:re,connected:ge}=I0(te,U,V);let $=re?1:ce?.9:ge?.75:JT;const fe=te===W;fe&&($=0),c[J*3]=ne.r,c[J*3+1]=ne.g,c[J*3+2]=ne.b,d[J]=$,h[J]=O;const ye=re||ge||ce||fe;_[J]=ye?1:0,ye&&D.push(J)}),m.attributes.color.needsUpdate=!0,m.attributes.aAlpha.needsUpdate=!0,m.attributes.aSize.needsUpdate=!0,m.attributes.aPickable.needsUpdate=!0};return{points:E,topHubNode:M,geometry:m,material:y,heroMesh:T,get heroIndex(){return T.visible?X:-1},positions:u,get visibleIndices(){return D},update(R,U,W,V){L(R,U,W,V),k(R,U,W,V)},resize(){T.visible&&T.scale.setScalar(U0(A,o,l(),C))},dispose(){m.dispose(),y.dispose(),v.dispose(),x.dispose()}}}function _P(n,e,t){let r=null,o=null;const l=new q,u=new q,c=(_,m)=>{t.read(_,m.source.index,l),t.read(_,m.target.index,u)},h=_=>{_&&(n.remove(_),_.geometry.dispose(),_.material.dispose())},d=(_,m,y,E,M,v,x)=>{if(!_.length)return null;let T=0;for(const X of _)T+=m.view==="globe"?(c("globe",X),l.angleTo(u)>1.25?11:7):1;const A=new Float32Array(T*2*3),C=new Float32Array(T*2*3);let k=0;for(const X of _){const R=E&&(X.source===E||X.target===E)?y.route.selected:X.international?y.route.intl:y.route.domestic;if(m.view==="globe"){c("globe",X);const U=l.angleTo(u),W=U>1.25?11:7,V=.025+Math.min(.34,U*.18)+M;let K=N0(l,u,0,V);for(let te=1;te<=W;te++){const J=N0(l,u,te/W,V);A.set(K.toArray(),k),C.set(R.toArray(),k),k+=3,A.set(J.toArray(),k),C.set(R.toArray(),k),k+=3,K=J}}else c("topology",X),A.set(l.toArray(),k),C.set(R.toArray(),k),k+=3,A.set(u.toArray(),k),C.set(R.toArray(),k),k+=3}const D=new cn;D.setAttribute("position",new Wt(A,3)),D.setAttribute("color",new Wt(C,3));const I=new $c(D,new Ka({vertexColors:!0,transparent:!0,opacity:v,depthWrite:!1,blending:y.routeBlending}));return I.renderOrder=x,n.add(I),I};return{get objects(){return[r,o].filter(Boolean)},get object(){return r},update:(_,m,y)=>{h(r),h(o),r=o=null;const E=Math.ceil(e.links.length*_.density/100),M=[],v=[];let x=0;for(const C of e.links){if(x>=E)break;_.scope==="international"&&!C.international||_.scope==="domestic"&&C.international||_.country&&C.source.country!==_.country&&C.target.country!==_.country||C.source.degree<_.minDegree||C.target.degree<_.minDegree||(x++,m&&(C.source===m||C.target===m)?v.push(C):M.push(C))}const T=_.view==="globe"?"globe":"topology",A=v.length?y.routeContextOpacity[T]:y.routeOpacity[T];r=d(M,_,y,m,0,A,1),o=d(v,_,y,m,_.view==="globe"?.02:0,y.routeFocusOpacity,2)},dispose(){h(r),h(o),r=o=null}}}const vP=8,xP=["attribute float aSize;","attribute float aIndex;","attribute float aPickable;","varying vec3 vId;","void main() {","  if (aPickable < 0.5) {","    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);","    gl_PointSize = 0.0;","    return;","  }","  float id = aIndex + 1.0;","  vId = vec3(","    floor(id / 65536.0),","    floor(mod(id, 65536.0) / 256.0),","    mod(id, 256.0)","  ) / 255.0;","  vec4 mv = modelViewMatrix * vec4(position, 1.0);","  gl_PointSize = clamp(aSize * (260.0 / -mv.z), 2.0, 18.0);","  gl_Position = projectionMatrix * mv;","}"].join(`
`),yP=["varying vec3 vId;","void main() {","  if (length(gl_PointCoord - 0.5) > 0.5) discard;","  gl_FragColor = vec4(vId, 1.0);","}"].join(`
`),k0=n=>new n.ShaderMaterial({uniforms:{uId:{value:new n.Vector3}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 uId;void main(){gl_FragColor=vec4(uId,1.0);}"}),SP=(n,e)=>e.set(Math.floor(n/65536)/255,Math.floor(n/256)%256/255,n%256/255);function MP({renderer:n,scene:e,camera:t,data:r,sprites:o,world:l,routes:u,selectedRef:c,onHover:h,onSelect:d,onClear:p}){let _=0,m=null,y=!1,E=0,M=null,v=null;const x=new Jn({vertexShader:xP,fragmentShader:yP,transparent:!1,depthTest:!0,depthWrite:!0}),T=k0(t0),A=k0(t0),C=U=>{const W=Math.max(1,Math.round(vP*2*U)+1);W===E&&M||(M?.dispose(),E=W,M=new ur(E,E,{minFilter:An,magFilter:An,depthBuffer:!0}),M.texture.colorSpace=Ei,M.texture.generateMipmaps=!1,v=new Uint8Array(E*E*4))},k=(U,W)=>{const V=n.domElement,K=V.getBoundingClientRect();if(U<K.left||W<K.top||U>K.right||W>K.bottom)return null;const te=n.getPixelRatio();C(te);const J=Math.round(K.width*te),le=Math.round(K.height*te),H=(U-K.left)*te,ce=(W-K.top)*te,ne=o.heroIndex,O=[],re=Ne=>{Ne&&(O.push([Ne,"visible",Ne.visible]),Ne.visible=!1)},ge=(Ne,ft)=>{O.push([Ne,"material",Ne.material]),Ne.material=ft};re(l.starsObj),re(l.grid),re(l.atmosphere),u.objects.forEach(re),ge(l.globe,T),ge(o.points,x),ne>=0?(SP(ne+1,A.uniforms.uId.value),ge(o.heroMesh,A)):re(o.heroMesh);const $=n.getRenderTarget(),fe=n.getClearColor(new Ge),ye=n.getClearAlpha();t.setViewOffset(J,le,Math.round(H)-(E>>1),Math.round(ce)-(E>>1),E,E),n.setRenderTarget(M),n.setClearColor(0,1),n.clear(),n.render(e,t),n.readRenderTargetPixels(M,0,0,E,E,v),t.clearViewOffset(),n.setRenderTarget($),n.setClearColor(fe,ye);for(let Ne=O.length-1;Ne>=0;Ne--){const[ft,z,_t]=O[Ne];ft[z]=_t}const Se=E>>1;let Re=null,De=1/0;for(let Ne=0;Ne<E;Ne++)for(let ft=0;ft<E;ft++){const z=((E-1-Ne)*E+ft)*4,_t=v[z]<<16|v[z+1]<<8|v[z+2];if(!_t)continue;const dt=(ft-Se)*(ft-Se)+(Ne-Se)*(Ne-Se);dt<De&&(De=dt,Re=_t-1)}return Re!==null&&Re<r.nodes.length?Re:null},D=U=>{_||(_=requestAnimationFrame(()=>{if(_=0,c.current)return;const W=k(U.clientX,U.clientY);n.domElement.style.cursor=W===null?"grab":"pointer",h(W===null?null:r.nodes[W],W===null?null:{x:U.clientX,y:U.clientY})}))},I=U=>{m={x:U.clientX,y:U.clientY},y=!1},X=U=>{if(!m)return;const W=U.clientX-m.x,V=U.clientY-m.y;if(y=W*W+V*V>36,m=null,y)return;const K=k(U.clientX,U.clientY);K===null?p():d(r.nodes[K],{x:U.clientX,y:U.clientY})},L=()=>{_&&(cancelAnimationFrame(_),_=0),c.current||h(null,null)},R=n.domElement;return R.addEventListener("pointermove",D,{passive:!0}),R.addEventListener("pointerdown",I),R.addEventListener("pointerup",X),R.addEventListener("pointerleave",L),{pickAt:k,dispose(){_&&cancelAnimationFrame(_),R.removeEventListener("pointermove",D),R.removeEventListener("pointerdown",I),R.removeEventListener("pointerup",X),R.removeEventListener("pointerleave",L),M?.dispose(),x.dispose(),T.dispose(),A.dispose()}}}const z0=1.0025,EP=4,wP=2.6;function TP(n){const{scale:e,translate:t}=n.transform;return n.arcs.map(r=>{let o=0,l=0;return r.map(([u,c])=>(o+=u,l+=c,[o*e[0]+t[0],l*e[1]+t[1]]))})}function AP(n,e){const t=n.objects.countries||n.objects.land,r=[],o=l=>{const u=[];for(const c of l){const h=c<0?e[~c].slice().reverse():e[c];u.length?u.push(...h.slice(1)):u.push(...h)}return u};for(const l of t.geometries){const u=l.type==="Polygon"?[l.arcs]:l.type==="MultiPolygon"?l.arcs:[];for(const c of u)for(const h of c)r.push(o(h))}return r}function CP(n){const e=[],t=new q,r=new q;for(const l of n)for(let u=0;u<l.length-1;u++){const[c,h]=l[u],[d,p]=l[u+1];if(Math.abs(d-c)>180)continue;const _=Math.max(Math.abs(d-c),Math.abs(p-h)),m=Math.max(1,Math.ceil(_/EP));t.copy(Od(h,c,z0));for(let y=1;y<=m;y++){const E=y/m;r.copy(Od(h+(p-h)*E,c+(d-c)*E,z0)),e.push(t.x,t.y,t.z,r.x,r.y,r.z),t.copy(r)}}const o=new cn;return o.setAttribute("position",new Wt(new Float32Array(e),3)),o}function RP(n){const e=new Ka({color:2830392,transparent:!0,opacity:.5,depthWrite:!1}),t=new $c(new cn,e);t.visible=!1,t.renderOrder=0,n.add(t);const r={"110m":null,"50m":null},o={};let l=!1,u=null;const c=d=>{!r[d]||u===d||(t.geometry=r[d],u=d)},h=(d,p)=>{r[d]||o[d]||(o[d]=!0,fetch(`/openflights/geo/countries-${d}.json`).then(_=>_.ok?_.json():Promise.reject(new Error(_.status))).then(_=>{const m=TP(_);r[d]=CP(AP(_,m)),o[d]=!1,l&&(d!=="110m"||!r["50m"])&&(c(d),p?.())}).catch(()=>{o[d]=!1}))};return{object:t,setTheme(d,p){l=!!d.borders,t.visible=l,l&&(e.color.set(d.borders.color),e.opacity=d.borders.opacity,r["110m"]?c(r["50m"]?"50m":"110m"):h("110m",p))},updateDetail(d,p){l&&(d<=wP?r["50m"]?c("50m"):h("50m",p):r["110m"]&&c("110m"))},dispose(){e.dispose();for(const d of Object.keys(r))r[d]?.dispose();n.remove(t)}}}const ai={orange:"#e69f00",sky:"#56b4e9",green:"#009e73",blue:"#0072b2",vermillion:"#d55e00",purple:"#cc79a7"},_n=n=>new Ge(n),B0={dark:{fog:724242,fogDensity:.055,node:{hub:_n("#e69f00"),mid:_n("#56b4e9"),low:_n("#f3f4f6")},nodeSelected:_n(ai.orange),nodeConnected:_n(ai.purple),route:{intl:_n(ai.sky),domestic:_n(ai.green),selected:_n(ai.orange)},routeBlending:Gu,routeOpacity:{globe:.29,topology:.2},routeContextOpacity:{globe:.08,topology:.07},routeFocusOpacity:.95,globe:{color:1055270,emissive:462874,specular:2704476,shininess:22},grid:{color:3493992,opacity:.13},atmosphere:{color:new Ge("#389eeb"),strength:.26},stars:!0,terrain:!1,borders:null,lights:{hemiSky:10145778,hemiGround:659488,hemi:1.15,sun:1.4}},light:{fog:15659508,fogDensity:.03,node:{hub:_n(ai.vermillion),mid:_n(ai.blue),low:_n("#1c1f26")},nodeSelected:_n(ai.vermillion),nodeConnected:_n(ai.purple),route:{intl:_n(ai.blue),domestic:_n(ai.green),selected:_n(ai.vermillion)},routeBlending:Wr,routeOpacity:{globe:.26,topology:.22},routeContextOpacity:{globe:.09,topology:.08},routeFocusOpacity:.9,globe:{color:14673644,emissive:0,specular:2241348,shininess:4},grid:{color:4937059,opacity:.12},atmosphere:{color:new Ge("#5c8cb8"),strength:.16},stars:!1,terrain:{ocean:new Ge("#a9d3ee"),oceanDeep:new Ge("#7fbde4"),shore:new Ge("#cfe8f7"),land:[{at:0,color:new Ge("#5fae8d")},{at:.18,color:new Ge("#9ac68a")},{at:.38,color:new Ge("#f0e442")},{at:.58,color:new Ge("#e69f00")},{at:.78,color:new Ge("#d55e00")},{at:1,color:new Ge("#f4f1ec")}],relief:.55},borders:{color:2830392,opacity:.5,coastOpacity:.75},lights:{hemiSky:16777215,hemiGround:13227230,hemi:1.35,sun:.85}}},H0=n=>B0[n]||B0.dark;function bP({data:n,positions:e,options:t,selected:r,onHover:o,onSelect:l,onClear:u,focusRequest:c,topologyVersion:h}){const d=At.useRef(),p=At.useRef(),_=At.useRef(r);return _.current=r,At.useEffect(()=>{const m=d.current;if(!m||!n)return;let y=!1,E=0,M=performance.now(),v=[],x="globe",T=H0(t.theme);const A=new nx;A.fog=new Yc(T.fog,T.fogDensity);const C=new qn(42,1,.01,100);C.position.set(0,.3,3.55);const k=new tx({antialias:!0,alpha:!0,powerPreference:"high-performance"});k.setPixelRatio(Math.min(devicePixelRatio,1.75)),k.setSize(m.clientWidth,m.clientHeight,!1),k.outputColorSpace=li,k.domElement.tabIndex=0,k.domElement.setAttribute("role","img"),k.domElement.setAttribute("aria-label",`Interactive 3D flight network with ${sr.format(n.nodes.length)} airports and ${sr.format(n.links.length)} connections`),m.appendChild(k.domElement);const D=new J2(C,k.domElement);D.enableDamping=!0,D.dampingFactor=.065,D.enablePan=!1,D.minDistance=1.55,D.maxDistance=8,D.autoRotateSpeed=.32;const I=new fx(10145778,659488,1.15);A.add(I);const X=new hx(16777215,1.4);X.position.set(3,2,4),A.add(X);const L=()=>m.clientHeight||800,R=mP(A),U=RP(A),W=gP(A,n,e,k,C,L),V=_P(A,n,e),K=MP({renderer:k,scene:A,camera:C,data:n,sprites:W,world:R,routes:V,selectedRef:_,onHover:o,onSelect:l,onClear:u}),te=(ge=x)=>{D.target.set(0,0,0),C.position.set(0,.3,ge==="globe"?3.55:4.2),D.update()},J=ge=>{const $=e.read(x,ge.index,new q);if(x==="globe"){const fe=$.clone().normalize().multiplyScalar(2.35),ye=C.position.clone(),Se=D.target.clone(),Re=performance.now(),De=n0?1:650,Ne=ft=>{const z=Math.min(1,(ft-Re)/De),_t=1-Math.pow(1-z,3);C.position.lerpVectors(ye,fe,_t),D.target.lerpVectors(Se,$.clone().multiplyScalar(.18),_t),D.update(),z<1&&requestAnimationFrame(Ne)};requestAnimationFrame(Ne)}else D.target.copy($),C.position.set($.x,$.y,$.z+2.4),D.update()},le=()=>{A.fog.color.set(T.fog),A.fog.density=T.fogDensity,I.color.set(T.lights.hemiSky),I.groundColor.set(T.lights.hemiGround),I.intensity=T.lights.hemi,X.intensity=T.lights.sun,R.applyTheme(T),U.setTheme(T),U.object.visible=!!T.borders&&x==="globe"},H=(ge,$)=>{x=ge.view,T=H0(ge.theme),le(),D.autoRotate=ge.autoRotate&&!n0&&ge.view==="globe";const fe=$||W.topHubNode;W.update(ge,$,fe,T),V.update(ge,$,T),R.globeGroup.visible=ge.view==="globe",D.enablePan=ge.view==="topology",D.minDistance=ge.view==="globe"?1.55:1.2,D.maxDistance=ge.view==="globe"?8:10};p.current={update:H,focusNode:J,resetCamera:te},H(t,r);const ce=()=>{const ge=m.clientWidth,$=m.clientHeight;!ge||!$||(C.aspect=ge/$,C.updateProjectionMatrix(),k.setSize(ge,$,!1),W.resize())},ne=new ResizeObserver(ce);ne.observe(m),ce();const O=ge=>{if(y)return;const $=ge-M;M=ge,v.push($),v.length>90&&v.shift(),v.length===90&&k.getPixelRatio()>1&&gA(v)>24&&(k.setPixelRatio(1),W.material.uniforms.uPixelRatio.value=1,ce(),v=[]),D.update(),U.updateDetail(C.position.length()),k.render(A,C),E=requestAnimationFrame(O)};E=requestAnimationFrame(O);const re=ge=>{ge.key.toLowerCase()==="r"&&document.activeElement?.tagName!=="INPUT"&&te()};return window.addEventListener("keydown",re),()=>{y=!0,cancelAnimationFrame(E),ne.disconnect(),window.removeEventListener("keydown",re),K.dispose(),U.dispose(),R.dispose(),D.dispose(),A.traverse(ge=>{ge.geometry?.dispose?.(),Array.isArray(ge.material)?ge.material.forEach($=>$.dispose()):ge.material?.dispose?.()}),k.dispose(),k.domElement.remove(),p.current=null}},[n]),At.useEffect(()=>{p.current?.update(t,r)},[t,r,h]),At.useEffect(()=>{c?.node&&p.current?.focusNode(c.node)},[c]),se.jsx("div",{ref:d,className:"canvas-host"})}function PP(){return se.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:se.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.37h2.5v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.5M6.88 8.56a1.68 1.68 0 1 1 0-3.36 1.68 1.68 0 0 1 0 3.36m-1.2 10.12h2.5V9.9h-2.5v8.78z"})})}function LP(){return se.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:se.jsx("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.891 1.529 2.341 1.544 2.914 1.182.092-.92.349-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.139 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"})})}function DP({data:n,options:e,setOptions:t,query:r,setQuery:o,selected:l,selectNode:u,clearSelection:c,open:h}){const d=At.useMemo(()=>{const p=r.trim().toLowerCase();return p?n.nodes.filter(_=>`${_.id} ${_.name} ${_.city} ${_.country}`.toLowerCase().includes(p)).sort((_,m)=>m.degree-_.degree).slice(0,8):[]},[n,r]);return se.jsxs("aside",{id:"controls",className:`sidebar ${h?"open":""}`,"aria-label":"Network controls",children:[se.jsxs("section",{className:"section",children:[se.jsxs("div",{className:"section-title",children:[se.jsx("span",{children:"Find an airport"}),se.jsx("span",{className:"value-pill",children:sr.format(n.nodes.length)})]}),se.jsxs("div",{className:"search-wrap",children:[se.jsx("input",{id:"airport-search",className:"search",value:r,onInput:p=>o(p.target.value),placeholder:"Code, city, airport…","aria-label":"Search airports",autoComplete:"off"}),se.jsx("span",{className:"search-icon",children:"⌕"})]}),d.length>0&&se.jsx("div",{className:"results",role:"listbox",children:d.map(p=>se.jsxs("button",{className:"result-btn",role:"option",onClick:()=>{u(p),o("")},children:[se.jsx("span",{className:"result-name",children:p.name}),se.jsx("span",{className:"result-code",children:p.iata||p.icao})]},p.id))}),l&&se.jsxs("div",{className:"selected-chip",children:[se.jsxs("div",{children:[se.jsx("strong",{children:l.name}),se.jsxs("span",{children:[l.city,", ",l.country]})]}),se.jsx("button",{className:"clear-btn",onClick:c,"aria-label":"Clear selected airport",children:"×"})]})]}),se.jsxs("section",{className:"section",children:[se.jsx("div",{className:"section-title",children:se.jsx("span",{children:"View"})}),se.jsxs("div",{className:"segmented",role:"group","aria-label":"Visualization mode",children:[se.jsx("button",{className:`seg-btn ${e.view==="globe"?"active":""}`,"aria-pressed":e.view==="globe",onClick:()=>t(p=>({...p,view:"globe"})),children:"3D globe"}),se.jsx("button",{className:`seg-btn ${e.view==="topology"?"active":""}`,"aria-pressed":e.view==="topology",onClick:()=>t(p=>({...p,view:"topology"})),children:"Topology"})]}),se.jsxs("div",{className:"segmented",role:"group","aria-label":"Colour theme",style:{marginTop:"8px"},children:[se.jsx("button",{className:`seg-btn ${e.theme==="dark"?"active":""}`,"aria-pressed":e.theme==="dark",onClick:()=>t(p=>({...p,theme:"dark"})),children:"Dark"}),se.jsx("button",{className:`seg-btn ${e.theme==="light"?"active":""}`,"aria-pressed":e.theme==="light",onClick:()=>t(p=>({...p,theme:"light"})),children:"Light map"})]}),se.jsxs("label",{className:"check-row",children:[se.jsx("input",{type:"checkbox",checked:e.autoRotate,onChange:p=>t(_=>({..._,autoRotate:p.target.checked}))}),"Auto-rotate globe"]})]}),se.jsxs("section",{className:"section",children:[se.jsxs("div",{className:"section-title",children:[se.jsx("span",{children:"Route filters"}),se.jsxs("span",{className:"value-pill",children:[e.density,"%"]})]}),se.jsxs("div",{className:"control-row",children:[se.jsxs("div",{className:"control-label",children:[se.jsx("span",{children:"Route density"}),se.jsxs("span",{children:[e.density,"%"]})]}),se.jsx("input",{type:"range",min:"5",max:"100",step:"5",value:e.density,"aria-label":"Route density: adjust from 5% to 100%",onInput:p=>t(_=>({..._,density:+p.target.value}))})]}),se.jsxs("div",{className:"control-row",children:[se.jsxs("div",{className:"control-label",children:[se.jsx("span",{children:"Minimum hub degree"}),se.jsx("span",{children:e.minDegree})]}),se.jsx("input",{type:"range",min:"0",max:"80",step:"1",value:e.minDegree,"aria-label":"Minimum hub degree: adjust from 0 to 80 connections",onInput:p=>t(_=>({..._,minDegree:+p.target.value}))})]}),se.jsxs("div",{className:"control-row",children:[se.jsx("label",{className:"control-label",htmlFor:"scope",children:se.jsx("span",{children:"Route scope"})}),se.jsxs("select",{id:"scope",value:e.scope,onChange:p=>t(_=>({..._,scope:p.target.value})),children:[se.jsx("option",{value:"all",children:"All routes"}),se.jsx("option",{value:"international",children:"International only"}),se.jsx("option",{value:"domestic",children:"Domestic only"})]})]}),se.jsxs("div",{className:"control-row",children:[se.jsx("label",{className:"control-label",htmlFor:"country",children:se.jsx("span",{children:"Country focus"})}),se.jsxs("select",{id:"country",value:e.country,onChange:p=>t(_=>({..._,country:p.target.value})),children:[se.jsx("option",{value:"",children:"All countries"}),n.countries.map(([p,_])=>se.jsxs("option",{value:p,children:[p," (",_,")"]},p))]})]})]}),se.jsxs("section",{className:"section",children:[se.jsx("div",{className:"section-title",children:se.jsx("span",{children:"Legend"})}),se.jsxs("div",{className:"legend",children:[se.jsxs("div",{className:"legend-row",children:[se.jsx("span",{className:"swatch",style:{background:"#56b4e9"}}),se.jsx("span",{children:"International connection"})]}),se.jsxs("div",{className:"legend-row",children:[se.jsx("span",{className:"swatch",style:{background:"#009e73"}}),se.jsx("span",{children:"Domestic connection"})]}),se.jsxs("div",{className:"legend-row",children:[se.jsx("span",{className:"swatch",style:{background:"#e69f00"}}),se.jsx("span",{children:"Selected-airport connection"})]})]})]}),se.jsxs("section",{className:"section help",children:["Drag to orbit · scroll to zoom · click an airport to pin.",se.jsx("br",{}),se.jsx("br",{}),se.jsx("kbd",{children:"/"})," Search   ",se.jsx("kbd",{children:"Esc"})," Clear selection  ",se.jsx("kbd",{children:"R"})," Reset camera"]}),se.jsxs("footer",{className:"sidebar-footer",children:[se.jsxs("div",{className:"social-links",children:[se.jsx("a",{href:"https://www.linkedin.com/in/jeremiahjking/",className:"social-btn",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:se.jsx(PP,{})}),se.jsx("a",{href:"https://github.com/unguisdraconis",className:"social-btn",target:"_blank",rel:"noreferrer","aria-label":"GitHub",children:se.jsx(LP,{})})]}),se.jsx("p",{className:"data-source",children:"© 2026 Jeremiah King"}),se.jsxs("p",{className:"data-source",children:["Data from","",se.jsx("a",{href:"https://openflights.org",target:"_blank",rel:"noreferrer",children:"OpenFlights.org"})]})]})]})}function NP({node:n,pinned:e,point:t}){if(!n||!t)return null;const r=295,o=18,l=t.x+o,c=l+r<=innerWidth?l:Math.max(0,t.x-r-o),h=Math.max(12,Math.min(t.y-20,innerHeight-190));return se.jsxs("div",{className:`tooltip ${e?"pinned":""}`,style:{left:c,top:h},role:e?"dialog":"status","aria-label":`${n.name} airport details`,children:[se.jsxs("div",{className:"tooltip-top",children:[se.jsx("div",{className:"airport-code",children:n.iata||n.icao||"—"}),se.jsxs("div",{children:[se.jsx("h2",{children:n.name}),se.jsxs("div",{className:"tooltip-sub",children:[n.city,", ",n.country]})]})]}),se.jsxs("div",{className:"tooltip-grid",children:[se.jsxs("div",{className:"tooltip-metric",children:[se.jsx("b",{children:sr.format(n.degree)}),se.jsx("span",{children:"Connections"})]}),se.jsxs("div",{className:"tooltip-metric",children:[se.jsx("b",{children:sr.format(n.routeCount)}),se.jsx("span",{children:"Route records"})]}),se.jsxs("div",{className:"tooltip-metric",children:[se.jsxs("b",{children:[n.lat.toFixed(1),"°, ",n.lon.toFixed(1),"°"]}),se.jsx("span",{children:"Coordinates"})]})]}),se.jsx("div",{className:"tooltip-note",children:e?"Pinned — click empty space or press Escape to close.":"Click to pin this airport."})]})}function IP({onLoaded:n,loading:e,error:t}){const r=At.useRef(),o=async l=>{const u=[...l],c=u.find(d=>/airport/i.test(d.name)),h=u.find(d=>/route/i.test(d.name));if(!c||!h)return n(null,null,"Select both airports.dat and routes.dat.");n(await c.text(),await h.text())};return se.jsx("div",{className:"load-screen",onDragOver:l=>l.preventDefault(),onDrop:l=>{l.preventDefault(),o(l.dataTransfer.files)},children:se.jsxs("div",{className:"load-card",children:[se.jsx("div",{className:"eyebrow",children:"OpenFlights data loader"}),se.jsx("h2",{children:e?"Loading the global aviation network…":"Load the global aviation network"}),e?se.jsx("p",{role:"status","aria-live":"polite",children:"Fetching and parsing the airport and route data. This usually takes a few seconds."}):se.jsxs("p",{children:["The dashboard first looks for ",se.jsx("b",{children:"airports.dat"})," and"," ",se.jsx("b",{children:"routes.dat"})," beside this HTML file. If your browser blocks local file requests, select or drop both supplied files here."]}),se.jsx("div",{className:"drop-zone",children:se.jsxs("div",{children:[se.jsx("button",{className:"primary-btn",onClick:()=>r.current.click(),disabled:e,children:e?"Building network…":"Choose both data files"}),se.jsx("input",{ref:r,className:"sr-only",type:"file",multiple:!0,accept:".txt,.dat,text/plain",onChange:l=>o(l.target.files)}),se.jsx("div",{className:"file-note",children:"You can also drag and drop both files onto this panel."})]})}),e&&se.jsx("div",{className:"loading-bar","aria-hidden":"true"}),t&&se.jsx("div",{className:"error",role:"alert",children:t})]})})}function Fu({value:n,label:e}){return se.jsxs("div",{className:"stat",children:[se.jsx("div",{className:"stat-value",children:n}),se.jsx("div",{className:"stat-label",children:e})]})}const UP=()=>{if(typeof window>"u")return"dark";try{const n=localStorage.getItem("openflights-theme");if(n==="light"||n==="dark")return n}catch{}return window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"};function FP(){const[n,e]=At.useState(null),[t,r]=At.useState(!0),[o,l]=At.useState(""),[u,c]=At.useState({view:"globe",density:55,minDegree:0,scope:"all",country:"",autoRotate:!1,theme:UP()}),[h,d]=At.useState(""),[p,_]=At.useState(null),[m,y]=At.useState(null),[E,M]=At.useState(null),[v,x]=At.useState(null),[T,A]=At.useState(!1),[C,k]=At.useState(0),D=At.useCallback(()=>k(V=>V+1),[]),I=At.useMemo(()=>n?G2(n.nodes):null,[n]);Z2(n,I,D);const X=At.useCallback((V,K,te)=>{if(te){l(te),r(!1);return}r(!0),l(""),setTimeout(()=>{try{const J=H2(V,K);if(!J.nodes.length||!J.links.length)throw new Error("No usable airport-route pairs were found.");e(J)}catch(J){l(`Could not parse the files: ${J.message}`)}finally{r(!1)}},30)},[]);At.useEffect(()=>{let V=!1;const K=new AbortController;return K2({signal:K.signal}).then(({airports:te,routes:J,source:le})=>{V||(le!=="local"&&console.info(`OpenFlights data loaded from ${le}.`),X(te,J))}).catch(te=>{V||K.signal.aborted||X(null,null,`Could not load the flight data (${te.message}). Select or drop airports.dat and routes.dat below.`)}),()=>{V=!0,K.abort()}},[X]),At.useEffect(()=>{const V=document.documentElement;V.dataset.themeSwitching="",V.dataset.theme=u.theme;let K=!1;const te=()=>{K||(K=!0,delete V.dataset.themeSwitching)},J=requestAnimationFrame(()=>requestAnimationFrame(te)),le=setTimeout(te,300);try{localStorage.setItem("openflights-theme",u.theme)}catch{}return()=>{cancelAnimationFrame(J),clearTimeout(le),te()}},[u.theme]),At.useEffect(()=>{const V=window.matchMedia?.("(prefers-color-scheme: light)");if(!V)return;const K=te=>{let J=null;try{J=localStorage.getItem("openflights-theme")}catch{J=null}J||c(le=>({...le,theme:te.matches?"light":"dark"}))};return V.addEventListener("change",K),()=>V.removeEventListener("change",K)},[]),At.useEffect(()=>{const V=K=>{K.key==="/"&&document.activeElement?.tagName!=="INPUT"&&(K.preventDefault(),document.getElementById("airport-search")?.focus()),K.key==="Escape"&&(_(null),y(null),M(null))};return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)},[]);const L=(V,K)=>{_(V),y(null),M(K||{x:innerWidth*.56,y:innerHeight*.3}),x({node:V,id:performance.now()}),A(!1)},R=()=>{_(null),y(null),M(null)},U=p||m,W=At.useMemo(()=>n?n.links.filter(V=>(u.scope==="all"||u.scope==="international"===V.international)&&(!u.country||V.source.country===u.country||V.target.country===u.country)&&V.source.degree>=u.minDegree&&V.target.degree>=u.minDegree).length:0,[n,u.scope,u.country,u.minDegree]);return se.jsxs("div",{className:"app",children:[se.jsxs("header",{className:"topbar",children:[se.jsx("button",{className:"icon-btn mobile-menu-btn",onClick:()=>A(V=>!V),"aria-label":"Toggle controls","aria-expanded":T,children:"☰"}),se.jsxs("div",{className:"brand",children:[se.jsx("div",{className:"eyebrow",children:"Global aviation intelligence"}),se.jsx("h1",{children:"OpenFlights Network"})]}),n&&se.jsxs("div",{className:"stats","aria-label":"Network summary",children:[se.jsx(Fu,{value:sr.format(n.nodes.length),label:"Airports"}),se.jsx(Fu,{value:sr.format(n.links.length),label:"Connections"}),se.jsx(Fu,{value:sr.format(W),label:"Visible pool"}),se.jsx(Fu,{value:sr.format(n.countries.length),label:"Countries"})]}),se.jsx("div",{className:"top-actions",children:se.jsx("button",{className:"icon-btn desktop-only",onClick:()=>c(V=>({...V,autoRotate:!V.autoRotate})),"aria-label":"Toggle automatic rotation","aria-pressed":u.autoRotate,children:"◌"})})]}),se.jsxs("main",{className:"main",children:[n&&se.jsx(DP,{data:n,options:u,setOptions:c,query:h,setQuery:d,selected:p,selectNode:L,clearSelection:R,open:T}),se.jsxs("section",{className:"stage","aria-label":"3D flight visualization",children:[n&&se.jsx(bP,{data:n,positions:I,options:u,selected:p,topologyVersion:C,focusRequest:v,onHover:(V,K)=>{y(V),M(K)},onSelect:L,onClear:R}),n&&se.jsxs("div",{className:"stage-badge",children:[se.jsx("span",{className:"dot"}),se.jsxs("span",{children:[u.view==="globe"?"GEOGRAPHIC GLOBE":"FORCE-DIRECTED TOPOLOGY"," ","· ",u.density,"% ROUTES"]})]}),se.jsx(NP,{node:U,pinned:!!p,point:E}),!n&&se.jsx(IP,{onLoaded:X,loading:t,error:o}),se.jsx("div",{className:"sr-only","aria-live":"polite",children:U?`${U.name}, ${U.city}, ${U.country}. ${U.degree} direct connections.`:""})]})]})]})}IS.createRoot(document.getElementById("root")).render(se.jsx(RS.StrictMode,{children:se.jsx(FP,{})}));
