(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function AS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Dh={exports:{}},pa={},Nh={exports:{}},pt={};var $g;function CS(){if($g)return pt;$g=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(O,re,be){this.props=O,this.context=re,this.refs=M,this.updater=be||y}x.prototype.isReactComponent={},x.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=x.prototype;function A(O,re,be){this.props=O,this.context=re,this.refs=M,this.updater=be||y}var T=A.prototype=new v;T.constructor=A,E(T,x.prototype),T.isPureReactComponent=!0;var b=Array.isArray,V=Object.prototype.hasOwnProperty,D={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function G(O,re,be){var Q,K={},fe=null,de=null;if(re!=null)for(Q in re.ref!==void 0&&(de=re.ref),re.key!==void 0&&(fe=""+re.key),re)V.call(re,Q)&&!I.hasOwnProperty(Q)&&(K[Q]=re[Q]);var Me=arguments.length-2;if(Me===1)K.children=be;else if(1<Me){for(var Ce=Array(Me),Ie=0;Ie<Me;Ie++)Ce[Ie]=arguments[Ie+2];K.children=Ce}if(O&&O.defaultProps)for(Q in Me=O.defaultProps,Me)K[Q]===void 0&&(K[Q]=Me[Q]);return{$$typeof:n,type:O,key:fe,ref:de,props:K,_owner:D.current}}function L(O,re){return{$$typeof:n,type:O.type,key:re,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function N(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(be){return re[be]})}var H=/\/+/g;function Y(O,re){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):re.toString(36)}function ee(O,re,be,Q,K){var fe=typeof O;(fe==="undefined"||fe==="boolean")&&(O=null);var de=!1;if(O===null)de=!0;else switch(fe){case"string":case"number":de=!0;break;case"object":switch(O.$$typeof){case n:case e:de=!0}}if(de)return de=O,K=K(de),O=Q===""?"."+Y(de,0):Q,b(K)?(be="",O!=null&&(be=O.replace(H,"$&/")+"/"),ee(K,re,be,"",function(Ie){return Ie})):K!=null&&(C(K)&&(K=L(K,be+(!K.key||de&&de.key===K.key?"":(""+K.key).replace(H,"$&/")+"/")+O)),re.push(K)),1;if(de=0,Q=Q===""?".":Q+":",b(O))for(var Me=0;Me<O.length;Me++){fe=O[Me];var Ce=Q+Y(fe,Me);de+=ee(fe,re,be,Ce,K)}else if(Ce=g(O),typeof Ce=="function")for(O=Ce.call(O),Me=0;!(fe=O.next()).done;)fe=fe.value,Ce=Q+Y(fe,Me++),de+=ee(fe,re,be,Ce,K);else if(fe==="object")throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return de}function ue(O,re,be){if(O==null)return O;var Q=[],K=0;return ee(O,Q,"","",function(fe){return re.call(be,fe,K++)}),Q}function J(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(be){(O._status===0||O._status===-1)&&(O._status=1,O._result=be)},function(be){(O._status===0||O._status===-1)&&(O._status=2,O._result=be)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var le={current:null},z={transition:null},he={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:z,ReactCurrentOwner:D};function ne(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ue,forEach:function(O,re,be){ue(O,function(){re.apply(this,arguments)},be)},count:function(O){var re=0;return ue(O,function(){re++}),re},toArray:function(O){return ue(O,function(re){return re})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},pt.Component=x,pt.Fragment=t,pt.Profiler=o,pt.PureComponent=A,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,pt.act=ne,pt.cloneElement=function(O,re,be){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Q=E({},O.props),K=O.key,fe=O.ref,de=O._owner;if(re!=null){if(re.ref!==void 0&&(fe=re.ref,de=D.current),re.key!==void 0&&(K=""+re.key),O.type&&O.type.defaultProps)var Me=O.type.defaultProps;for(Ce in re)V.call(re,Ce)&&!I.hasOwnProperty(Ce)&&(Q[Ce]=re[Ce]===void 0&&Me!==void 0?Me[Ce]:re[Ce])}var Ce=arguments.length-2;if(Ce===1)Q.children=be;else if(1<Ce){Me=Array(Ce);for(var Ie=0;Ie<Ce;Ie++)Me[Ie]=arguments[Ie+2];Q.children=Me}return{$$typeof:n,type:O.type,key:K,ref:fe,props:Q,_owner:de}},pt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},pt.createElement=G,pt.createFactory=function(O){var re=G.bind(null,O);return re.type=O,re},pt.createRef=function(){return{current:null}},pt.forwardRef=function(O){return{$$typeof:c,render:O}},pt.isValidElement=C,pt.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:J}},pt.memo=function(O,re){return{$$typeof:d,type:O,compare:re===void 0?null:re}},pt.startTransition=function(O){var re=z.transition;z.transition={};try{O()}finally{z.transition=re}},pt.unstable_act=ne,pt.useCallback=function(O,re){return le.current.useCallback(O,re)},pt.useContext=function(O){return le.current.useContext(O)},pt.useDebugValue=function(){},pt.useDeferredValue=function(O){return le.current.useDeferredValue(O)},pt.useEffect=function(O,re){return le.current.useEffect(O,re)},pt.useId=function(){return le.current.useId()},pt.useImperativeHandle=function(O,re,be){return le.current.useImperativeHandle(O,re,be)},pt.useInsertionEffect=function(O,re){return le.current.useInsertionEffect(O,re)},pt.useLayoutEffect=function(O,re){return le.current.useLayoutEffect(O,re)},pt.useMemo=function(O,re){return le.current.useMemo(O,re)},pt.useReducer=function(O,re,be){return le.current.useReducer(O,re,be)},pt.useRef=function(O){return le.current.useRef(O)},pt.useState=function(O){return le.current.useState(O)},pt.useSyncExternalStore=function(O,re,be){return le.current.useSyncExternalStore(O,re,be)},pt.useTransition=function(){return le.current.useTransition()},pt.version="18.3.1",pt}var qg;function kd(){return qg||(qg=1,Nh.exports=CS()),Nh.exports}var Kg;function RS(){if(Kg)return pa;Kg=1;var n=kd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,h,d){var p,_={},g=null,y=null;d!==void 0&&(g=""+d),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(y=h.ref);for(p in h)r.call(h,p)&&!l.hasOwnProperty(p)&&(_[p]=h[p]);if(c&&c.defaultProps)for(p in h=c.defaultProps,h)_[p]===void 0&&(_[p]=h[p]);return{$$typeof:e,type:c,key:g,ref:y,props:_,_owner:o.current}}return pa.Fragment=t,pa.jsx=u,pa.jsxs=u,pa}var Zg;function bS(){return Zg||(Zg=1,Dh.exports=RS()),Dh.exports}var ie=bS(),Ke=kd();const PS=AS(Ke);var ru={},Ih={exports:{}},In={},Uh={exports:{}},Fh={};var Qg;function LS(){return Qg||(Qg=1,(function(n){function e(z,he){var ne=z.length;z.push(he);e:for(;0<ne;){var O=ne-1>>>1,re=z[O];if(0<o(re,he))z[O]=he,z[ne]=re,ne=O;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var he=z[0],ne=z.pop();if(ne!==he){z[0]=ne;e:for(var O=0,re=z.length,be=re>>>1;O<be;){var Q=2*(O+1)-1,K=z[Q],fe=Q+1,de=z[fe];if(0>o(K,ne))fe<re&&0>o(de,K)?(z[O]=de,z[fe]=ne,O=fe):(z[O]=K,z[Q]=ne,O=Q);else if(fe<re&&0>o(de,ne))z[O]=de,z[fe]=ne,O=fe;else break e}}return he}function o(z,he){var ne=z.sortIndex-he.sortIndex;return ne!==0?ne:z.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var h=[],d=[],p=1,_=null,g=3,y=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(z){for(var he=t(d);he!==null;){if(he.callback===null)r(d);else if(he.startTime<=z)r(d),he.sortIndex=he.expirationTime,e(h,he);else break;he=t(d)}}function b(z){if(M=!1,T(z),!E)if(t(h)!==null)E=!0,J(V);else{var he=t(d);he!==null&&le(b,he.startTime-z)}}function V(z,he){E=!1,M&&(M=!1,v(G),G=-1),y=!0;var ne=g;try{for(T(he),_=t(h);_!==null&&(!(_.expirationTime>he)||z&&!N());){var O=_.callback;if(typeof O=="function"){_.callback=null,g=_.priorityLevel;var re=O(_.expirationTime<=he);he=n.unstable_now(),typeof re=="function"?_.callback=re:_===t(h)&&r(h),T(he)}else r(h);_=t(h)}if(_!==null)var be=!0;else{var Q=t(d);Q!==null&&le(b,Q.startTime-he),be=!1}return be}finally{_=null,g=ne,y=!1}}var D=!1,I=null,G=-1,L=5,C=-1;function N(){return!(n.unstable_now()-C<L)}function H(){if(I!==null){var z=n.unstable_now();C=z;var he=!0;try{he=I(!0,z)}finally{he?Y():(D=!1,I=null)}}else D=!1}var Y;if(typeof A=="function")Y=function(){A(H)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ue=ee.port2;ee.port1.onmessage=H,Y=function(){ue.postMessage(null)}}else Y=function(){x(H,0)};function J(z){I=z,D||(D=!0,Y())}function le(z,he){G=x(function(){z(n.unstable_now())},he)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_continueExecution=function(){E||y||(E=!0,J(V))},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(h)},n.unstable_next=function(z){switch(g){case 1:case 2:case 3:var he=3;break;default:he=g}var ne=g;g=he;try{return z()}finally{g=ne}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(z,he){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ne=g;g=z;try{return he()}finally{g=ne}},n.unstable_scheduleCallback=function(z,he,ne){var O=n.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=ne+re,z={id:p++,callback:he,priorityLevel:z,startTime:ne,expirationTime:re,sortIndex:-1},ne>O?(z.sortIndex=ne,e(d,z),t(h)===null&&z===t(d)&&(M?(v(G),G=-1):M=!0,le(b,ne-O))):(z.sortIndex=re,e(h,z),E||y||(E=!0,J(V))),z},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(z){var he=g;return function(){var ne=g;g=he;try{return z.apply(this,arguments)}finally{g=ne}}}})(Fh)),Fh}var Jg;function DS(){return Jg||(Jg=1,Uh.exports=LS()),Uh.exports}var e_;function NS(){if(e_)return In;e_=1;var n=kd(),e=DS();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},_={};function g(i){return h.call(_,i)?!0:h.call(p,i)?!1:d.test(i)?_[i]=!0:(p[i]=!0,!1)}function y(i,s,a,f){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,a,f){if(s===null||typeof s>"u"||y(i,s,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(i,s,a,f,m,S,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=S,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];x[s]=new M(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function A(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(v,A);x[s]=new M(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(v,A);x[s]=new M(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(v,A);x[s]=new M(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function T(i,s,a,f){var m=x.hasOwnProperty(s)?x[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,a,m,f)&&(a=null),f||m===null?g(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):m.mustUseProperty?i[m.propertyName]=a===null?m.type===3?!1:"":a:(s=m.attributeName,f=m.attributeNamespace,a===null?i.removeAttribute(s):(m=m.type,a=m===3||m===4&&a===!0?"":""+a,f?i.setAttributeNS(f,s,a):i.setAttribute(s,a))))}var b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),D=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),N=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),z=Symbol.iterator;function he(i){return i===null||typeof i!="object"?null:(i=z&&i[z]||i["@@iterator"],typeof i=="function"?i:null)}var ne=Object.assign,O;function re(i){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var be=!1;function Q(i,s){if(!i||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ae){var f=ae}Reflect.construct(i,[],s)}else{try{s.call()}catch(ae){f=ae}i.call(s.prototype)}else{try{throw Error()}catch(ae){f=ae}i()}}catch(ae){if(ae&&f&&typeof ae.stack=="string"){for(var m=ae.stack.split(`
`),S=f.stack.split(`
`),w=m.length-1,U=S.length-1;1<=w&&0<=U&&m[w]!==S[U];)U--;for(;1<=w&&0<=U;w--,U--)if(m[w]!==S[U]){if(w!==1||U!==1)do if(w--,U--,0>U||m[w]!==S[U]){var B=`
`+m[w].replace(" at new "," at ");return i.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",i.displayName)),B}while(1<=w&&0<=U);break}}}finally{be=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?re(i):""}function K(i){switch(i.tag){case 5:return re(i.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return i=Q(i.type,!1),i;case 11:return i=Q(i.type.render,!1),i;case 1:return i=Q(i.type,!0),i;default:return""}}function fe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case I:return"Fragment";case D:return"Portal";case L:return"Profiler";case G:return"StrictMode";case Y:return"Suspense";case ee:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case N:return(i.displayName||"Context")+".Consumer";case C:return(i._context.displayName||"Context")+".Provider";case H:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ue:return s=i.displayName||null,s!==null?s:fe(i.type)||"Memo";case J:s=i._payload,i=i._init;try{return fe(i(s))}catch{}}return null}function de(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(s);case 8:return s===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Me(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ce(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ie(i){var s=Ce(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var m=a.get,S=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(w){f=""+w,S.call(this,w)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(w){f=""+w},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Le(i){i._valueTracker||(i._valueTracker=Ie(i))}function k(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),f="";return i&&(f=Ce(i)?i.checked?"true":"false":i.value),i=f,i!==a?(s.setValue(i),!0):!1}function _t(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function dt(i,s){var a=s.checked;return ne({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function xt(i,s){var a=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;a=Me(s.value!=null?s.value:a),i._wrapperState={initialChecked:f,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Ye(i,s){s=s.checked,s!=null&&T(i,"checked",s,!1)}function bt(i,s){Ye(i,s);var a=Me(s.value),f=s.type;if(a!=null)f==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?it(i,s.type,a):s.hasOwnProperty("defaultValue")&&it(i,s.type,Me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Je(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function it(i,s,a){(s!=="number"||_t(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var F=Array.isArray;function R(i,s,a,f){if(i=i.options,s){s={};for(var m=0;m<a.length;m++)s["$"+a[m]]=!0;for(a=0;a<i.length;a++)m=s.hasOwnProperty("$"+i[a].value),i[a].selected!==m&&(i[a].selected=m),m&&f&&(i[a].defaultSelected=!0)}else{for(a=""+Me(a),s=null,m=0;m<i.length;m++){if(i[m].value===a){i[m].selected=!0,f&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function ce(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ge(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(F(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:Me(a)}}function xe(i,s){var a=Me(s.value),f=Me(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),f!=null&&(i.defaultValue=""+f)}function _e(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function qe(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function De(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?qe(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ke,lt=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,f,m){MSApp.execUnsafeLocalFunction(function(){return i(s,a,f,m)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(ke=ke||document.createElement("div"),ke.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ke.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Ee(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Ue={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mt=["Webkit","ms","Moz","O"];Object.keys(Ue).forEach(function(i){mt.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ue[s]=Ue[i]})});function rt(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ue.hasOwnProperty(i)&&Ue[i]?(""+s).trim():s+"px"}function ze(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var f=a.indexOf("--")===0,m=rt(a,s[a],f);a==="float"&&(a="cssFloat"),f?i.setProperty(a,m):i[a]=m}}var at=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(i,s){if(s){if(at[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Rt(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var X=null;function Te(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var pe=null,me=null,Re=null;function et(i){if(i=Jo(i)){if(typeof pe!="function")throw Error(t(280));var s=i.stateNode;s&&(s=xl(s),pe(i.stateNode,i.type,s))}}function gt(i){me?Re?Re.push(i):Re=[i]:me=i}function zt(){if(me){var i=me,s=Re;if(Re=me=null,et(i),s)for(i=0;i<s.length;i++)et(s[i])}}function Xt(i,s){return i(s)}function yt(){}var zn=!1;function Bn(i,s,a){if(zn)return i(s,a);zn=!0;try{return Xt(i,s,a)}finally{zn=!1,(me!==null||Re!==null)&&(yt(),zt())}}function dr(i,s){var a=i.stateNode;if(a===null)return null;var f=xl(a);if(f===null)return null;a=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var fi=!1;if(c)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){fi=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{fi=!1}function Ja(i,s,a,f,m,S,w,U,B){var ae=Array.prototype.slice.call(arguments,3);try{s.apply(a,ae)}catch(ye){this.onError(ye)}}var pr=!1,Bi=null,$r=!1,mr=null,el={onError:function(i){pr=!0,Bi=i}};function tl(i,s,a,f,m,S,w,U,B){pr=!1,Bi=null,Ja.apply(el,arguments)}function Jc(i,s,a,f,m,S,w,U,B){if(tl.apply(this,arguments),pr){if(pr){var ae=Bi;pr=!1,Bi=null}else throw Error(t(198));$r||($r=!0,mr=ae)}}function Hi(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function nl(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function P(i){if(Hi(i)!==i)throw Error(t(188))}function j(i){var s=i.alternate;if(!s){if(s=Hi(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,f=s;;){var m=a.return;if(m===null)break;var S=m.alternate;if(S===null){if(f=m.return,f!==null){a=f;continue}break}if(m.child===S.child){for(S=m.child;S;){if(S===a)return P(m),i;if(S===f)return P(m),s;S=S.sibling}throw Error(t(188))}if(a.return!==f.return)a=m,f=S;else{for(var w=!1,U=m.child;U;){if(U===a){w=!0,a=m,f=S;break}if(U===f){w=!0,f=m,a=S;break}U=U.sibling}if(!w){for(U=S.child;U;){if(U===a){w=!0,a=S,f=m;break}if(U===f){w=!0,f=S,a=m;break}U=U.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function se(i){return i=j(i),i!==null?oe(i):null}function oe(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=oe(i);if(s!==null)return s;i=i.sibling}return null}var q=e.unstable_scheduleCallback,Ae=e.unstable_cancelCallback,Fe=e.unstable_shouldYield,Ve=e.unstable_requestPaint,Pe=e.unstable_now,nt=e.unstable_getCurrentPriorityLevel,tt=e.unstable_ImmediatePriority,je=e.unstable_UserBlockingPriority,vt=e.unstable_NormalPriority,Ft=e.unstable_LowPriority,Nt=e.unstable_IdlePriority,tn=null,ct=null;function $e(i){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(tn,i,void 0,(i.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:gr,Mt=Math.log,Hn=Math.LN2;function gr(i){return i>>>=0,i===0?32:31-(Mt(i)/Hn|0)|0}var nn=64,_r=4194304;function Pt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Vn(i,s){var a=i.pendingLanes;if(a===0)return 0;var f=0,m=i.suspendedLanes,S=i.pingedLanes,w=a&268435455;if(w!==0){var U=w&~m;U!==0?f=Pt(U):(S&=w,S!==0&&(f=Pt(S)))}else w=a&~m,w!==0?f=Pt(w):S!==0&&(f=Pt(S));if(f===0)return 0;if(s!==0&&s!==f&&(s&m)===0&&(m=f&-f,S=s&-s,m>=S||m===16&&(S&4194240)!==0))return s;if((f&4)!==0&&(f|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)a=31-Tt(s),m=1<<a,f|=i[a],s&=~m;return f}function Uo(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rn(i,s){for(var a=i.suspendedLanes,f=i.pingedLanes,m=i.expirationTimes,S=i.pendingLanes;0<S;){var w=31-Tt(S),U=1<<w,B=m[w];B===-1?((U&a)===0||(U&f)!==0)&&(m[w]=Uo(U,s)):B<=s&&(i.expiredLanes|=U),S&=~U}}function qr(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function il(){var i=nn;return nn<<=1,(nn&4194240)===0&&(nn=64),i}function bs(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function Fo(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Tt(s),i[s]=a}function Yx(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<a;){var m=31-Tt(a),S=1<<m;s[m]=0,f[m]=-1,i[m]=-1,a&=~S}}function ef(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var f=31-Tt(a),m=1<<f;m&s|i[f]&s&&(i[f]|=s),a&=~m}}var At=0;function Ap(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Cp,tf,Rp,bp,Pp,nf=!1,rl=[],vr=null,xr=null,yr=null,Oo=new Map,ko=new Map,Sr=[],$x="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lp(i,s){switch(i){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Oo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(s.pointerId)}}function zo(i,s,a,f,m,S){return i===null||i.nativeEvent!==S?(i={blockedOn:s,domEventName:a,eventSystemFlags:f,nativeEvent:S,targetContainers:[m]},s!==null&&(s=Jo(s),s!==null&&tf(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function qx(i,s,a,f,m){switch(s){case"focusin":return vr=zo(vr,i,s,a,f,m),!0;case"dragenter":return xr=zo(xr,i,s,a,f,m),!0;case"mouseover":return yr=zo(yr,i,s,a,f,m),!0;case"pointerover":var S=m.pointerId;return Oo.set(S,zo(Oo.get(S)||null,i,s,a,f,m)),!0;case"gotpointercapture":return S=m.pointerId,ko.set(S,zo(ko.get(S)||null,i,s,a,f,m)),!0}return!1}function Dp(i){var s=Kr(i.target);if(s!==null){var a=Hi(s);if(a!==null){if(s=a.tag,s===13){if(s=nl(a),s!==null){i.blockedOn=s,Pp(i.priority,function(){Rp(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function sl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=sf(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var f=new a.constructor(a.type,a);X=f,a.target.dispatchEvent(f),X=null}else return s=Jo(a),s!==null&&tf(s),i.blockedOn=a,!1;s.shift()}return!0}function Np(i,s,a){sl(i)&&a.delete(s)}function Kx(){nf=!1,vr!==null&&sl(vr)&&(vr=null),xr!==null&&sl(xr)&&(xr=null),yr!==null&&sl(yr)&&(yr=null),Oo.forEach(Np),ko.forEach(Np)}function Bo(i,s){i.blockedOn===s&&(i.blockedOn=null,nf||(nf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Kx)))}function Ho(i){function s(m){return Bo(m,i)}if(0<rl.length){Bo(rl[0],i);for(var a=1;a<rl.length;a++){var f=rl[a];f.blockedOn===i&&(f.blockedOn=null)}}for(vr!==null&&Bo(vr,i),xr!==null&&Bo(xr,i),yr!==null&&Bo(yr,i),Oo.forEach(s),ko.forEach(s),a=0;a<Sr.length;a++)f=Sr[a],f.blockedOn===i&&(f.blockedOn=null);for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)Dp(a),a.blockedOn===null&&Sr.shift()}var Ps=b.ReactCurrentBatchConfig,ol=!0;function Zx(i,s,a,f){var m=At,S=Ps.transition;Ps.transition=null;try{At=1,rf(i,s,a,f)}finally{At=m,Ps.transition=S}}function Qx(i,s,a,f){var m=At,S=Ps.transition;Ps.transition=null;try{At=4,rf(i,s,a,f)}finally{At=m,Ps.transition=S}}function rf(i,s,a,f){if(ol){var m=sf(i,s,a,f);if(m===null)Mf(i,s,f,al,a),Lp(i,f);else if(qx(m,i,s,a,f))f.stopPropagation();else if(Lp(i,f),s&4&&-1<$x.indexOf(i)){for(;m!==null;){var S=Jo(m);if(S!==null&&Cp(S),S=sf(i,s,a,f),S===null&&Mf(i,s,f,al,a),S===m)break;m=S}m!==null&&f.stopPropagation()}else Mf(i,s,f,null,a)}}var al=null;function sf(i,s,a,f){if(al=null,i=Te(f),i=Kr(i),i!==null)if(s=Hi(i),s===null)i=null;else if(a=s.tag,a===13){if(i=nl(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return al=i,null}function Ip(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nt()){case tt:return 1;case je:return 4;case vt:case Ft:return 16;case Nt:return 536870912;default:return 16}default:return 16}}var Mr=null,of=null,ll=null;function Up(){if(ll)return ll;var i,s=of,a=s.length,f,m="value"in Mr?Mr.value:Mr.textContent,S=m.length;for(i=0;i<a&&s[i]===m[i];i++);var w=a-i;for(f=1;f<=w&&s[a-f]===m[S-f];f++);return ll=m.slice(i,1<f?1-f:void 0)}function ul(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function cl(){return!0}function Fp(){return!1}function Gn(i){function s(a,f,m,S,w){this._reactName=a,this._targetInst=m,this.type=f,this.nativeEvent=S,this.target=w,this.currentTarget=null;for(var U in i)i.hasOwnProperty(U)&&(a=i[U],this[U]=a?a(S):S[U]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?cl:Fp,this.isPropagationStopped=Fp,this}return ne(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),s}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=Gn(Ls),Vo=ne({},Ls,{view:0,detail:0}),Jx=Gn(Vo),lf,uf,Go,fl=ne({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Go&&(Go&&i.type==="mousemove"?(lf=i.screenX-Go.screenX,uf=i.screenY-Go.screenY):uf=lf=0,Go=i),lf)},movementY:function(i){return"movementY"in i?i.movementY:uf}}),Op=Gn(fl),ey=ne({},fl,{dataTransfer:0}),ty=Gn(ey),ny=ne({},Vo,{relatedTarget:0}),cf=Gn(ny),iy=ne({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),ry=Gn(iy),sy=ne({},Ls,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),oy=Gn(sy),ay=ne({},Ls,{data:0}),kp=Gn(ay),ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fy(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=cy[i])?!!s[i]:!1}function ff(){return fy}var hy=ne({},Vo,{key:function(i){if(i.key){var s=ly[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=ul(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?uy[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(i){return i.type==="keypress"?ul(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ul(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),dy=Gn(hy),py=ne({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zp=Gn(py),my=ne({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),gy=Gn(my),_y=ne({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),vy=Gn(_y),xy=ne({},fl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),yy=Gn(xy),Sy=[9,13,27,32],hf=c&&"CompositionEvent"in window,Wo=null;c&&"documentMode"in document&&(Wo=document.documentMode);var My=c&&"TextEvent"in window&&!Wo,Bp=c&&(!hf||Wo&&8<Wo&&11>=Wo),Hp=" ",Vp=!1;function Gp(i,s){switch(i){case"keyup":return Sy.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ds=!1;function Ey(i,s){switch(i){case"compositionend":return Wp(s);case"keypress":return s.which!==32?null:(Vp=!0,Hp);case"textInput":return i=s.data,i===Hp&&Vp?null:i;default:return null}}function wy(i,s){if(Ds)return i==="compositionend"||!hf&&Gp(i,s)?(i=Up(),ll=of=Mr=null,Ds=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Bp&&s.locale!=="ko"?null:s.data;default:return null}}var Ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!Ty[i.type]:s==="textarea"}function jp(i,s,a,f){gt(f),s=gl(s,"onChange"),0<s.length&&(a=new af("onChange","change",null,a,f),i.push({event:a,listeners:s}))}var Xo=null,jo=null;function Ay(i){cm(i,0)}function hl(i){var s=Os(i);if(k(s))return i}function Cy(i,s){if(i==="change")return s}var Yp=!1;if(c){var df;if(c){var pf="oninput"in document;if(!pf){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),pf=typeof $p.oninput=="function"}df=pf}else df=!1;Yp=df&&(!document.documentMode||9<document.documentMode)}function qp(){Xo&&(Xo.detachEvent("onpropertychange",Kp),jo=Xo=null)}function Kp(i){if(i.propertyName==="value"&&hl(jo)){var s=[];jp(s,jo,i,Te(i)),Bn(Ay,s)}}function Ry(i,s,a){i==="focusin"?(qp(),Xo=s,jo=a,Xo.attachEvent("onpropertychange",Kp)):i==="focusout"&&qp()}function by(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return hl(jo)}function Py(i,s){if(i==="click")return hl(s)}function Ly(i,s){if(i==="input"||i==="change")return hl(s)}function Dy(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var hi=typeof Object.is=="function"?Object.is:Dy;function Yo(i,s){if(hi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),f=Object.keys(s);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var m=a[f];if(!h.call(s,m)||!hi(i[m],s[m]))return!1}return!0}function Zp(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Qp(i,s){var a=Zp(i);i=0;for(var f;a;){if(a.nodeType===3){if(f=i+a.textContent.length,i<=s&&f>=s)return{node:a,offset:s-i};i=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zp(a)}}function Jp(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Jp(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function em(){for(var i=window,s=_t();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=_t(i.document)}return s}function mf(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function Ny(i){var s=em(),a=i.focusedElem,f=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&Jp(a.ownerDocument.documentElement,a)){if(f!==null&&mf(a)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=a.textContent.length,S=Math.min(f.start,m);f=f.end===void 0?S:Math.min(f.end,m),!i.extend&&S>f&&(m=f,f=S,S=m),m=Qp(a,S);var w=Qp(a,f);m&&w&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),S>f?(i.addRange(s),i.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Iy=c&&"documentMode"in document&&11>=document.documentMode,Ns=null,gf=null,$o=null,_f=!1;function tm(i,s,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_f||Ns==null||Ns!==_t(f)||(f=Ns,"selectionStart"in f&&mf(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),$o&&Yo($o,f)||($o=f,f=gl(gf,"onSelect"),0<f.length&&(s=new af("onSelect","select",null,s,a),i.push({event:s,listeners:f}),s.target=Ns)))}function dl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Is={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},vf={},nm={};c&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function pl(i){if(vf[i])return vf[i];if(!Is[i])return i;var s=Is[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in nm)return vf[i]=s[a];return i}var im=pl("animationend"),rm=pl("animationiteration"),sm=pl("animationstart"),om=pl("transitionend"),am=new Map,lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(i,s){am.set(i,s),l(s,[i])}for(var xf=0;xf<lm.length;xf++){var yf=lm[xf],Uy=yf.toLowerCase(),Fy=yf[0].toUpperCase()+yf.slice(1);Er(Uy,"on"+Fy)}Er(im,"onAnimationEnd"),Er(rm,"onAnimationIteration"),Er(sm,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(om,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function um(i,s,a){var f=i.type||"unknown-event";i.currentTarget=a,Jc(f,s,void 0,i),i.currentTarget=null}function cm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var f=i[a],m=f.event;f=f.listeners;e:{var S=void 0;if(s)for(var w=f.length-1;0<=w;w--){var U=f[w],B=U.instance,ae=U.currentTarget;if(U=U.listener,B!==S&&m.isPropagationStopped())break e;um(m,U,ae),S=B}else for(w=0;w<f.length;w++){if(U=f[w],B=U.instance,ae=U.currentTarget,U=U.listener,B!==S&&m.isPropagationStopped())break e;um(m,U,ae),S=B}}}if($r)throw i=mr,$r=!1,mr=null,i}function It(i,s){var a=s[Rf];a===void 0&&(a=s[Rf]=new Set);var f=i+"__bubble";a.has(f)||(fm(s,i,2,!1),a.add(f))}function Sf(i,s,a){var f=0;s&&(f|=4),fm(a,i,f,s)}var ml="_reactListening"+Math.random().toString(36).slice(2);function Ko(i){if(!i[ml]){i[ml]=!0,r.forEach(function(a){a!=="selectionchange"&&(Oy.has(a)||Sf(a,!1,i),Sf(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[ml]||(s[ml]=!0,Sf("selectionchange",!1,s))}}function fm(i,s,a,f){switch(Ip(s)){case 1:var m=Zx;break;case 4:m=Qx;break;default:m=rf}a=m.bind(null,s,a,i),m=void 0,!fi||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?i.addEventListener(s,a,{capture:!0,passive:m}):i.addEventListener(s,a,!0):m!==void 0?i.addEventListener(s,a,{passive:m}):i.addEventListener(s,a,!1)}function Mf(i,s,a,f,m){var S=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var w=f.tag;if(w===3||w===4){var U=f.stateNode.containerInfo;if(U===m||U.nodeType===8&&U.parentNode===m)break;if(w===4)for(w=f.return;w!==null;){var B=w.tag;if((B===3||B===4)&&(B=w.stateNode.containerInfo,B===m||B.nodeType===8&&B.parentNode===m))return;w=w.return}for(;U!==null;){if(w=Kr(U),w===null)return;if(B=w.tag,B===5||B===6){f=S=w;continue e}U=U.parentNode}}f=f.return}Bn(function(){var ae=S,ye=Te(a),Se=[];e:{var ve=am.get(i);if(ve!==void 0){var Oe=af,He=i;switch(i){case"keypress":if(ul(a)===0)break e;case"keydown":case"keyup":Oe=dy;break;case"focusin":He="focus",Oe=cf;break;case"focusout":He="blur",Oe=cf;break;case"beforeblur":case"afterblur":Oe=cf;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=gy;break;case im:case rm:case sm:Oe=ry;break;case om:Oe=vy;break;case"scroll":Oe=Jx;break;case"wheel":Oe=yy;break;case"copy":case"cut":case"paste":Oe=oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=zp}var Ge=(s&4)!==0,Wt=!Ge&&i==="scroll",Z=Ge?ve!==null?ve+"Capture":null:ve;Ge=[];for(var W=ae,te;W!==null;){te=W;var we=te.stateNode;if(te.tag===5&&we!==null&&(te=we,Z!==null&&(we=dr(W,Z),we!=null&&Ge.push(Zo(W,we,te)))),Wt)break;W=W.return}0<Ge.length&&(ve=new Oe(ve,He,null,a,ye),Se.push({event:ve,listeners:Ge}))}}if((s&7)===0){e:{if(ve=i==="mouseover"||i==="pointerover",Oe=i==="mouseout"||i==="pointerout",ve&&a!==X&&(He=a.relatedTarget||a.fromElement)&&(Kr(He)||He[Vi]))break e;if((Oe||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,Oe?(He=a.relatedTarget||a.toElement,Oe=ae,He=He?Kr(He):null,He!==null&&(Wt=Hi(He),He!==Wt||He.tag!==5&&He.tag!==6)&&(He=null)):(Oe=null,He=ae),Oe!==He)){if(Ge=Op,we="onMouseLeave",Z="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(Ge=zp,we="onPointerLeave",Z="onPointerEnter",W="pointer"),Wt=Oe==null?ve:Os(Oe),te=He==null?ve:Os(He),ve=new Ge(we,W+"leave",Oe,a,ye),ve.target=Wt,ve.relatedTarget=te,we=null,Kr(ye)===ae&&(Ge=new Ge(Z,W+"enter",He,a,ye),Ge.target=te,Ge.relatedTarget=Wt,we=Ge),Wt=we,Oe&&He)t:{for(Ge=Oe,Z=He,W=0,te=Ge;te;te=Us(te))W++;for(te=0,we=Z;we;we=Us(we))te++;for(;0<W-te;)Ge=Us(Ge),W--;for(;0<te-W;)Z=Us(Z),te--;for(;W--;){if(Ge===Z||Z!==null&&Ge===Z.alternate)break t;Ge=Us(Ge),Z=Us(Z)}Ge=null}else Ge=null;Oe!==null&&hm(Se,ve,Oe,Ge,!1),He!==null&&Wt!==null&&hm(Se,Wt,He,Ge,!0)}}e:{if(ve=ae?Os(ae):window,Oe=ve.nodeName&&ve.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ve.type==="file")var Xe=Cy;else if(Xp(ve))if(Yp)Xe=Ly;else{Xe=by;var Ze=Ry}else(Oe=ve.nodeName)&&Oe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Xe=Py);if(Xe&&(Xe=Xe(i,ae))){jp(Se,Xe,a,ye);break e}Ze&&Ze(i,ve,ae),i==="focusout"&&(Ze=ve._wrapperState)&&Ze.controlled&&ve.type==="number"&&it(ve,"number",ve.value)}switch(Ze=ae?Os(ae):window,i){case"focusin":(Xp(Ze)||Ze.contentEditable==="true")&&(Ns=Ze,gf=ae,$o=null);break;case"focusout":$o=gf=Ns=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,tm(Se,a,ye);break;case"selectionchange":if(Iy)break;case"keydown":case"keyup":tm(Se,a,ye)}var Qe;if(hf)e:{switch(i){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else Ds?Gp(i,a)&&(st="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(Bp&&a.locale!=="ko"&&(Ds||st!=="onCompositionStart"?st==="onCompositionEnd"&&Ds&&(Qe=Up()):(Mr=ye,of="value"in Mr?Mr.value:Mr.textContent,Ds=!0)),Ze=gl(ae,st),0<Ze.length&&(st=new kp(st,i,null,a,ye),Se.push({event:st,listeners:Ze}),Qe?st.data=Qe:(Qe=Wp(a),Qe!==null&&(st.data=Qe)))),(Qe=My?Ey(i,a):wy(i,a))&&(ae=gl(ae,"onBeforeInput"),0<ae.length&&(ye=new kp("onBeforeInput","beforeinput",null,a,ye),Se.push({event:ye,listeners:ae}),ye.data=Qe))}cm(Se,s)})}function Zo(i,s,a){return{instance:i,listener:s,currentTarget:a}}function gl(i,s){for(var a=s+"Capture",f=[];i!==null;){var m=i,S=m.stateNode;m.tag===5&&S!==null&&(m=S,S=dr(i,a),S!=null&&f.unshift(Zo(i,S,m)),S=dr(i,s),S!=null&&f.push(Zo(i,S,m))),i=i.return}return f}function Us(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function hm(i,s,a,f,m){for(var S=s._reactName,w=[];a!==null&&a!==f;){var U=a,B=U.alternate,ae=U.stateNode;if(B!==null&&B===f)break;U.tag===5&&ae!==null&&(U=ae,m?(B=dr(a,S),B!=null&&w.unshift(Zo(a,B,U))):m||(B=dr(a,S),B!=null&&w.push(Zo(a,B,U)))),a=a.return}w.length!==0&&i.push({event:s,listeners:w})}var ky=/\r\n?/g,zy=/\u0000|\uFFFD/g;function dm(i){return(typeof i=="string"?i:""+i).replace(ky,`
`).replace(zy,"")}function _l(i,s,a){if(s=dm(s),dm(i)!==s&&a)throw Error(t(425))}function vl(){}var Ef=null,wf=null;function Tf(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Af=typeof setTimeout=="function"?setTimeout:void 0,By=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,Hy=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(i){return pm.resolve(null).then(i).catch(Vy)}:Af;function Vy(i){setTimeout(function(){throw i})}function Cf(i,s){var a=s,f=0;do{var m=a.nextSibling;if(i.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(f===0){i.removeChild(m),Ho(s);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=m}while(a);Ho(s)}function wr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function mm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Ri="__reactFiber$"+Fs,Qo="__reactProps$"+Fs,Vi="__reactContainer$"+Fs,Rf="__reactEvents$"+Fs,Gy="__reactListeners$"+Fs,Wy="__reactHandles$"+Fs;function Kr(i){var s=i[Ri];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Vi]||a[Ri]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=mm(i);i!==null;){if(a=i[Ri])return a;i=mm(i)}return s}i=a,a=i.parentNode}return null}function Jo(i){return i=i[Ri]||i[Vi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Os(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function xl(i){return i[Qo]||null}var bf=[],ks=-1;function Tr(i){return{current:i}}function Ut(i){0>ks||(i.current=bf[ks],bf[ks]=null,ks--)}function Lt(i,s){ks++,bf[ks]=i.current,i.current=s}var Ar={},fn=Tr(Ar),bn=Tr(!1),Zr=Ar;function zs(i,s){var a=i.type.contextTypes;if(!a)return Ar;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},S;for(S in a)m[S]=s[S];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function Pn(i){return i=i.childContextTypes,i!=null}function yl(){Ut(bn),Ut(fn)}function gm(i,s,a){if(fn.current!==Ar)throw Error(t(168));Lt(fn,s),Lt(bn,a)}function _m(i,s,a){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,de(i)||"Unknown",m));return ne({},a,f)}function Sl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ar,Zr=fn.current,Lt(fn,i),Lt(bn,bn.current),!0}function vm(i,s,a){var f=i.stateNode;if(!f)throw Error(t(169));a?(i=_m(i,s,Zr),f.__reactInternalMemoizedMergedChildContext=i,Ut(bn),Ut(fn),Lt(fn,i)):Ut(bn),Lt(bn,a)}var Gi=null,Ml=!1,Pf=!1;function xm(i){Gi===null?Gi=[i]:Gi.push(i)}function Xy(i){Ml=!0,xm(i)}function Cr(){if(!Pf&&Gi!==null){Pf=!0;var i=0,s=At;try{var a=Gi;for(At=1;i<a.length;i++){var f=a[i];do f=f(!0);while(f!==null)}Gi=null,Ml=!1}catch(m){throw Gi!==null&&(Gi=Gi.slice(i+1)),q(tt,Cr),m}finally{At=s,Pf=!1}}return null}var Bs=[],Hs=0,El=null,wl=0,ei=[],ti=0,Qr=null,Wi=1,Xi="";function Jr(i,s){Bs[Hs++]=wl,Bs[Hs++]=El,El=i,wl=s}function ym(i,s,a){ei[ti++]=Wi,ei[ti++]=Xi,ei[ti++]=Qr,Qr=i;var f=Wi;i=Xi;var m=32-Tt(f)-1;f&=~(1<<m),a+=1;var S=32-Tt(s)+m;if(30<S){var w=m-m%5;S=(f&(1<<w)-1).toString(32),f>>=w,m-=w,Wi=1<<32-Tt(s)+m|a<<m|f,Xi=S+i}else Wi=1<<S|a<<m|f,Xi=i}function Lf(i){i.return!==null&&(Jr(i,1),ym(i,1,0))}function Df(i){for(;i===El;)El=Bs[--Hs],Bs[Hs]=null,wl=Bs[--Hs],Bs[Hs]=null;for(;i===Qr;)Qr=ei[--ti],ei[ti]=null,Xi=ei[--ti],ei[ti]=null,Wi=ei[--ti],ei[ti]=null}var Wn=null,Xn=null,Ot=!1,di=null;function Sm(i,s){var a=si(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function Mm(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Wn=i,Xn=wr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Wn=i,Xn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Qr!==null?{id:Wi,overflow:Xi}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=si(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Wn=i,Xn=null,!0):!1;default:return!1}}function Nf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function If(i){if(Ot){var s=Xn;if(s){var a=s;if(!Mm(i,s)){if(Nf(i))throw Error(t(418));s=wr(a.nextSibling);var f=Wn;s&&Mm(i,s)?Sm(f,a):(i.flags=i.flags&-4097|2,Ot=!1,Wn=i)}}else{if(Nf(i))throw Error(t(418));i.flags=i.flags&-4097|2,Ot=!1,Wn=i}}}function Em(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Wn=i}function Tl(i){if(i!==Wn)return!1;if(!Ot)return Em(i),Ot=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Tf(i.type,i.memoizedProps)),s&&(s=Xn)){if(Nf(i))throw wm(),Error(t(418));for(;s;)Sm(i,s),s=wr(s.nextSibling)}if(Em(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Xn=wr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Xn=null}}else Xn=Wn?wr(i.stateNode.nextSibling):null;return!0}function wm(){for(var i=Xn;i;)i=wr(i.nextSibling)}function Vs(){Xn=Wn=null,Ot=!1}function Uf(i){di===null?di=[i]:di.push(i)}var jy=b.ReactCurrentBatchConfig;function ea(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,i));var m=f,S=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===S?s.ref:(s=function(w){var U=m.refs;w===null?delete U[S]:U[S]=w},s._stringRef=S,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function Al(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Tm(i){var s=i._init;return s(i._payload)}function Am(i){function s(Z,W){if(i){var te=Z.deletions;te===null?(Z.deletions=[W],Z.flags|=16):te.push(W)}}function a(Z,W){if(!i)return null;for(;W!==null;)s(Z,W),W=W.sibling;return null}function f(Z,W){for(Z=new Map;W!==null;)W.key!==null?Z.set(W.key,W):Z.set(W.index,W),W=W.sibling;return Z}function m(Z,W){return Z=Ur(Z,W),Z.index=0,Z.sibling=null,Z}function S(Z,W,te){return Z.index=te,i?(te=Z.alternate,te!==null?(te=te.index,te<W?(Z.flags|=2,W):te):(Z.flags|=2,W)):(Z.flags|=1048576,W)}function w(Z){return i&&Z.alternate===null&&(Z.flags|=2),Z}function U(Z,W,te,we){return W===null||W.tag!==6?(W=Ah(te,Z.mode,we),W.return=Z,W):(W=m(W,te),W.return=Z,W)}function B(Z,W,te,we){var Xe=te.type;return Xe===I?ye(Z,W,te.props.children,we,te.key):W!==null&&(W.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&Tm(Xe)===W.type)?(we=m(W,te.props),we.ref=ea(Z,W,te),we.return=Z,we):(we=Kl(te.type,te.key,te.props,null,Z.mode,we),we.ref=ea(Z,W,te),we.return=Z,we)}function ae(Z,W,te,we){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=Ch(te,Z.mode,we),W.return=Z,W):(W=m(W,te.children||[]),W.return=Z,W)}function ye(Z,W,te,we,Xe){return W===null||W.tag!==7?(W=as(te,Z.mode,we,Xe),W.return=Z,W):(W=m(W,te),W.return=Z,W)}function Se(Z,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Ah(""+W,Z.mode,te),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case V:return te=Kl(W.type,W.key,W.props,null,Z.mode,te),te.ref=ea(Z,null,W),te.return=Z,te;case D:return W=Ch(W,Z.mode,te),W.return=Z,W;case J:var we=W._init;return Se(Z,we(W._payload),te)}if(F(W)||he(W))return W=as(W,Z.mode,te,null),W.return=Z,W;Al(Z,W)}return null}function ve(Z,W,te,we){var Xe=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Xe!==null?null:U(Z,W,""+te,we);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case V:return te.key===Xe?B(Z,W,te,we):null;case D:return te.key===Xe?ae(Z,W,te,we):null;case J:return Xe=te._init,ve(Z,W,Xe(te._payload),we)}if(F(te)||he(te))return Xe!==null?null:ye(Z,W,te,we,null);Al(Z,te)}return null}function Oe(Z,W,te,we,Xe){if(typeof we=="string"&&we!==""||typeof we=="number")return Z=Z.get(te)||null,U(W,Z,""+we,Xe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case V:return Z=Z.get(we.key===null?te:we.key)||null,B(W,Z,we,Xe);case D:return Z=Z.get(we.key===null?te:we.key)||null,ae(W,Z,we,Xe);case J:var Ze=we._init;return Oe(Z,W,te,Ze(we._payload),Xe)}if(F(we)||he(we))return Z=Z.get(te)||null,ye(W,Z,we,Xe,null);Al(W,we)}return null}function He(Z,W,te,we){for(var Xe=null,Ze=null,Qe=W,st=W=0,on=null;Qe!==null&&st<te.length;st++){Qe.index>st?(on=Qe,Qe=null):on=Qe.sibling;var Et=ve(Z,Qe,te[st],we);if(Et===null){Qe===null&&(Qe=on);break}i&&Qe&&Et.alternate===null&&s(Z,Qe),W=S(Et,W,st),Ze===null?Xe=Et:Ze.sibling=Et,Ze=Et,Qe=on}if(st===te.length)return a(Z,Qe),Ot&&Jr(Z,st),Xe;if(Qe===null){for(;st<te.length;st++)Qe=Se(Z,te[st],we),Qe!==null&&(W=S(Qe,W,st),Ze===null?Xe=Qe:Ze.sibling=Qe,Ze=Qe);return Ot&&Jr(Z,st),Xe}for(Qe=f(Z,Qe);st<te.length;st++)on=Oe(Qe,Z,st,te[st],we),on!==null&&(i&&on.alternate!==null&&Qe.delete(on.key===null?st:on.key),W=S(on,W,st),Ze===null?Xe=on:Ze.sibling=on,Ze=on);return i&&Qe.forEach(function(Fr){return s(Z,Fr)}),Ot&&Jr(Z,st),Xe}function Ge(Z,W,te,we){var Xe=he(te);if(typeof Xe!="function")throw Error(t(150));if(te=Xe.call(te),te==null)throw Error(t(151));for(var Ze=Xe=null,Qe=W,st=W=0,on=null,Et=te.next();Qe!==null&&!Et.done;st++,Et=te.next()){Qe.index>st?(on=Qe,Qe=null):on=Qe.sibling;var Fr=ve(Z,Qe,Et.value,we);if(Fr===null){Qe===null&&(Qe=on);break}i&&Qe&&Fr.alternate===null&&s(Z,Qe),W=S(Fr,W,st),Ze===null?Xe=Fr:Ze.sibling=Fr,Ze=Fr,Qe=on}if(Et.done)return a(Z,Qe),Ot&&Jr(Z,st),Xe;if(Qe===null){for(;!Et.done;st++,Et=te.next())Et=Se(Z,Et.value,we),Et!==null&&(W=S(Et,W,st),Ze===null?Xe=Et:Ze.sibling=Et,Ze=Et);return Ot&&Jr(Z,st),Xe}for(Qe=f(Z,Qe);!Et.done;st++,Et=te.next())Et=Oe(Qe,Z,st,Et.value,we),Et!==null&&(i&&Et.alternate!==null&&Qe.delete(Et.key===null?st:Et.key),W=S(Et,W,st),Ze===null?Xe=Et:Ze.sibling=Et,Ze=Et);return i&&Qe.forEach(function(TS){return s(Z,TS)}),Ot&&Jr(Z,st),Xe}function Wt(Z,W,te,we){if(typeof te=="object"&&te!==null&&te.type===I&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case V:e:{for(var Xe=te.key,Ze=W;Ze!==null;){if(Ze.key===Xe){if(Xe=te.type,Xe===I){if(Ze.tag===7){a(Z,Ze.sibling),W=m(Ze,te.props.children),W.return=Z,Z=W;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&Tm(Xe)===Ze.type){a(Z,Ze.sibling),W=m(Ze,te.props),W.ref=ea(Z,Ze,te),W.return=Z,Z=W;break e}a(Z,Ze);break}else s(Z,Ze);Ze=Ze.sibling}te.type===I?(W=as(te.props.children,Z.mode,we,te.key),W.return=Z,Z=W):(we=Kl(te.type,te.key,te.props,null,Z.mode,we),we.ref=ea(Z,W,te),we.return=Z,Z=we)}return w(Z);case D:e:{for(Ze=te.key;W!==null;){if(W.key===Ze)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){a(Z,W.sibling),W=m(W,te.children||[]),W.return=Z,Z=W;break e}else{a(Z,W);break}else s(Z,W);W=W.sibling}W=Ch(te,Z.mode,we),W.return=Z,Z=W}return w(Z);case J:return Ze=te._init,Wt(Z,W,Ze(te._payload),we)}if(F(te))return He(Z,W,te,we);if(he(te))return Ge(Z,W,te,we);Al(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,W!==null&&W.tag===6?(a(Z,W.sibling),W=m(W,te),W.return=Z,Z=W):(a(Z,W),W=Ah(te,Z.mode,we),W.return=Z,Z=W),w(Z)):a(Z,W)}return Wt}var Gs=Am(!0),Cm=Am(!1),Cl=Tr(null),Rl=null,Ws=null,Ff=null;function Of(){Ff=Ws=Rl=null}function kf(i){var s=Cl.current;Ut(Cl),i._currentValue=s}function zf(i,s,a){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===a)break;i=i.return}}function Xs(i,s){Rl=i,Ff=Ws=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Ln=!0),i.firstContext=null)}function ni(i){var s=i._currentValue;if(Ff!==i)if(i={context:i,memoizedValue:s,next:null},Ws===null){if(Rl===null)throw Error(t(308));Ws=i,Rl.dependencies={lanes:0,firstContext:i}}else Ws=Ws.next=i;return s}var es=null;function Bf(i){es===null?es=[i]:es.push(i)}function Rm(i,s,a,f){var m=s.interleaved;return m===null?(a.next=a,Bf(s)):(a.next=m.next,m.next=a),s.interleaved=a,ji(i,f)}function ji(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var Rr=!1;function Hf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Yi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function br(i,s,a){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(St&2)!==0){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,ji(i,a)}return m=f.interleaved,m===null?(s.next=s,Bf(f)):(s.next=m.next,m.next=s),f.interleaved=s,ji(i,a)}function bl(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,ef(i,a)}}function Pm(i,s){var a=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var m=null,S=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};S===null?m=S=w:S=S.next=w,a=a.next}while(a!==null);S===null?m=S=s:S=S.next=s}else m=S=s;a={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:S,shared:f.shared,effects:f.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Pl(i,s,a,f){var m=i.updateQueue;Rr=!1;var S=m.firstBaseUpdate,w=m.lastBaseUpdate,U=m.shared.pending;if(U!==null){m.shared.pending=null;var B=U,ae=B.next;B.next=null,w===null?S=ae:w.next=ae,w=B;var ye=i.alternate;ye!==null&&(ye=ye.updateQueue,U=ye.lastBaseUpdate,U!==w&&(U===null?ye.firstBaseUpdate=ae:U.next=ae,ye.lastBaseUpdate=B))}if(S!==null){var Se=m.baseState;w=0,ye=ae=B=null,U=S;do{var ve=U.lane,Oe=U.eventTime;if((f&ve)===ve){ye!==null&&(ye=ye.next={eventTime:Oe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var He=i,Ge=U;switch(ve=s,Oe=a,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){Se=He.call(Oe,Se,ve);break e}Se=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,ve=typeof He=="function"?He.call(Oe,Se,ve):He,ve==null)break e;Se=ne({},Se,ve);break e;case 2:Rr=!0}}U.callback!==null&&U.lane!==0&&(i.flags|=64,ve=m.effects,ve===null?m.effects=[U]:ve.push(U))}else Oe={eventTime:Oe,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ye===null?(ae=ye=Oe,B=Se):ye=ye.next=Oe,w|=ve;if(U=U.next,U===null){if(U=m.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,m.lastBaseUpdate=ve,m.shared.pending=null}}while(!0);if(ye===null&&(B=Se),m.baseState=B,m.firstBaseUpdate=ae,m.lastBaseUpdate=ye,s=m.shared.interleaved,s!==null){m=s;do w|=m.lane,m=m.next;while(m!==s)}else S===null&&(m.shared.lanes=0);is|=w,i.lanes=w,i.memoizedState=Se}}function Lm(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],m=f.callback;if(m!==null){if(f.callback=null,f=a,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var ta={},bi=Tr(ta),na=Tr(ta),ia=Tr(ta);function ts(i){if(i===ta)throw Error(t(174));return i}function Vf(i,s){switch(Lt(ia,s),Lt(na,i),Lt(bi,ta),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:De(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=De(s,i)}Ut(bi),Lt(bi,s)}function js(){Ut(bi),Ut(na),Ut(ia)}function Dm(i){ts(ia.current);var s=ts(bi.current),a=De(s,i.type);s!==a&&(Lt(na,i),Lt(bi,a))}function Gf(i){na.current===i&&(Ut(bi),Ut(na))}var Bt=Tr(0);function Ll(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Wf=[];function Xf(){for(var i=0;i<Wf.length;i++)Wf[i]._workInProgressVersionPrimary=null;Wf.length=0}var Dl=b.ReactCurrentDispatcher,jf=b.ReactCurrentBatchConfig,ns=0,Ht=null,Kt=null,rn=null,Nl=!1,ra=!1,sa=0,Yy=0;function hn(){throw Error(t(321))}function Yf(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!hi(i[a],s[a]))return!1;return!0}function $f(i,s,a,f,m,S){if(ns=S,Ht=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Dl.current=i===null||i.memoizedState===null?Zy:Qy,i=a(f,m),ra){S=0;do{if(ra=!1,sa=0,25<=S)throw Error(t(301));S+=1,rn=Kt=null,s.updateQueue=null,Dl.current=Jy,i=a(f,m)}while(ra)}if(Dl.current=Fl,s=Kt!==null&&Kt.next!==null,ns=0,rn=Kt=Ht=null,Nl=!1,s)throw Error(t(300));return i}function qf(){var i=sa!==0;return sa=0,i}function Pi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Ht.memoizedState=rn=i:rn=rn.next=i,rn}function ii(){if(Kt===null){var i=Ht.alternate;i=i!==null?i.memoizedState:null}else i=Kt.next;var s=rn===null?Ht.memoizedState:rn.next;if(s!==null)rn=s,Kt=i;else{if(i===null)throw Error(t(310));Kt=i,i={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},rn===null?Ht.memoizedState=rn=i:rn=rn.next=i}return rn}function oa(i,s){return typeof s=="function"?s(i):s}function Kf(i){var s=ii(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=Kt,m=f.baseQueue,S=a.pending;if(S!==null){if(m!==null){var w=m.next;m.next=S.next,S.next=w}f.baseQueue=m=S,a.pending=null}if(m!==null){S=m.next,f=f.baseState;var U=w=null,B=null,ae=S;do{var ye=ae.lane;if((ns&ye)===ye)B!==null&&(B=B.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),f=ae.hasEagerState?ae.eagerState:i(f,ae.action);else{var Se={lane:ye,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};B===null?(U=B=Se,w=f):B=B.next=Se,Ht.lanes|=ye,is|=ye}ae=ae.next}while(ae!==null&&ae!==S);B===null?w=f:B.next=U,hi(f,s.memoizedState)||(Ln=!0),s.memoizedState=f,s.baseState=w,s.baseQueue=B,a.lastRenderedState=f}if(i=a.interleaved,i!==null){m=i;do S=m.lane,Ht.lanes|=S,is|=S,m=m.next;while(m!==i)}else m===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Zf(i){var s=ii(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=a.dispatch,m=a.pending,S=s.memoizedState;if(m!==null){a.pending=null;var w=m=m.next;do S=i(S,w.action),w=w.next;while(w!==m);hi(S,s.memoizedState)||(Ln=!0),s.memoizedState=S,s.baseQueue===null&&(s.baseState=S),a.lastRenderedState=S}return[S,f]}function Nm(){}function Im(i,s){var a=Ht,f=ii(),m=s(),S=!hi(f.memoizedState,m);if(S&&(f.memoizedState=m,Ln=!0),f=f.queue,Qf(Om.bind(null,a,f,i),[i]),f.getSnapshot!==s||S||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,aa(9,Fm.bind(null,a,f,m,s),void 0,null),sn===null)throw Error(t(349));(ns&30)!==0||Um(a,s,m)}return m}function Um(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Ht.updateQueue,s===null?(s={lastEffect:null,stores:null},Ht.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Fm(i,s,a,f){s.value=a,s.getSnapshot=f,km(s)&&zm(i)}function Om(i,s,a){return a(function(){km(s)&&zm(i)})}function km(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!hi(i,a)}catch{return!0}}function zm(i){var s=ji(i,1);s!==null&&_i(s,i,1,-1)}function Bm(i){var s=Pi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:i},s.queue=i,i=i.dispatch=Ky.bind(null,Ht,i),[s.memoizedState,i]}function aa(i,s,a,f){return i={tag:i,create:s,destroy:a,deps:f,next:null},s=Ht.updateQueue,s===null?(s={lastEffect:null,stores:null},Ht.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(f=a.next,a.next=i,i.next=f,s.lastEffect=i)),i}function Hm(){return ii().memoizedState}function Il(i,s,a,f){var m=Pi();Ht.flags|=i,m.memoizedState=aa(1|s,a,void 0,f===void 0?null:f)}function Ul(i,s,a,f){var m=ii();f=f===void 0?null:f;var S=void 0;if(Kt!==null){var w=Kt.memoizedState;if(S=w.destroy,f!==null&&Yf(f,w.deps)){m.memoizedState=aa(s,a,S,f);return}}Ht.flags|=i,m.memoizedState=aa(1|s,a,S,f)}function Vm(i,s){return Il(8390656,8,i,s)}function Qf(i,s){return Ul(2048,8,i,s)}function Gm(i,s){return Ul(4,2,i,s)}function Wm(i,s){return Ul(4,4,i,s)}function Xm(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function jm(i,s,a){return a=a!=null?a.concat([i]):null,Ul(4,4,Xm.bind(null,s,i),a)}function Jf(){}function Ym(i,s){var a=ii();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Yf(s,f[1])?f[0]:(a.memoizedState=[i,s],i)}function $m(i,s){var a=ii();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Yf(s,f[1])?f[0]:(i=i(),a.memoizedState=[i,s],i)}function qm(i,s,a){return(ns&21)===0?(i.baseState&&(i.baseState=!1,Ln=!0),i.memoizedState=a):(hi(a,s)||(a=il(),Ht.lanes|=a,is|=a,i.baseState=!0),s)}function $y(i,s){var a=At;At=a!==0&&4>a?a:4,i(!0);var f=jf.transition;jf.transition={};try{i(!1),s()}finally{At=a,jf.transition=f}}function Km(){return ii().memoizedState}function qy(i,s,a){var f=Nr(i);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},Zm(i))Qm(s,a);else if(a=Rm(i,s,a,f),a!==null){var m=Mn();_i(a,i,f,m),Jm(a,s,f)}}function Ky(i,s,a){var f=Nr(i),m={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zm(i))Qm(s,m);else{var S=i.alternate;if(i.lanes===0&&(S===null||S.lanes===0)&&(S=s.lastRenderedReducer,S!==null))try{var w=s.lastRenderedState,U=S(w,a);if(m.hasEagerState=!0,m.eagerState=U,hi(U,w)){var B=s.interleaved;B===null?(m.next=m,Bf(s)):(m.next=B.next,B.next=m),s.interleaved=m;return}}catch{}a=Rm(i,s,m,f),a!==null&&(m=Mn(),_i(a,i,f,m),Jm(a,s,f))}}function Zm(i){var s=i.alternate;return i===Ht||s!==null&&s===Ht}function Qm(i,s){ra=Nl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function Jm(i,s,a){if((a&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,ef(i,a)}}var Fl={readContext:ni,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},Zy={readContext:ni,useCallback:function(i,s){return Pi().memoizedState=[i,s===void 0?null:s],i},useContext:ni,useEffect:Vm,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Il(4194308,4,Xm.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Il(4194308,4,i,s)},useInsertionEffect:function(i,s){return Il(4,2,i,s)},useMemo:function(i,s){var a=Pi();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var f=Pi();return s=a!==void 0?a(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=qy.bind(null,Ht,i),[f.memoizedState,i]},useRef:function(i){var s=Pi();return i={current:i},s.memoizedState=i},useState:Bm,useDebugValue:Jf,useDeferredValue:function(i){return Pi().memoizedState=i},useTransition:function(){var i=Bm(!1),s=i[0];return i=$y.bind(null,i[1]),Pi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var f=Ht,m=Pi();if(Ot){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),sn===null)throw Error(t(349));(ns&30)!==0||Um(f,s,a)}m.memoizedState=a;var S={value:a,getSnapshot:s};return m.queue=S,Vm(Om.bind(null,f,S,i),[i]),f.flags|=2048,aa(9,Fm.bind(null,f,S,a,s),void 0,null),a},useId:function(){var i=Pi(),s=sn.identifierPrefix;if(Ot){var a=Xi,f=Wi;a=(f&~(1<<32-Tt(f)-1)).toString(32)+a,s=":"+s+"R"+a,a=sa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Yy++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},Qy={readContext:ni,useCallback:Ym,useContext:ni,useEffect:Qf,useImperativeHandle:jm,useInsertionEffect:Gm,useLayoutEffect:Wm,useMemo:$m,useReducer:Kf,useRef:Hm,useState:function(){return Kf(oa)},useDebugValue:Jf,useDeferredValue:function(i){var s=ii();return qm(s,Kt.memoizedState,i)},useTransition:function(){var i=Kf(oa)[0],s=ii().memoizedState;return[i,s]},useMutableSource:Nm,useSyncExternalStore:Im,useId:Km,unstable_isNewReconciler:!1},Jy={readContext:ni,useCallback:Ym,useContext:ni,useEffect:Qf,useImperativeHandle:jm,useInsertionEffect:Gm,useLayoutEffect:Wm,useMemo:$m,useReducer:Zf,useRef:Hm,useState:function(){return Zf(oa)},useDebugValue:Jf,useDeferredValue:function(i){var s=ii();return Kt===null?s.memoizedState=i:qm(s,Kt.memoizedState,i)},useTransition:function(){var i=Zf(oa)[0],s=ii().memoizedState;return[i,s]},useMutableSource:Nm,useSyncExternalStore:Im,useId:Km,unstable_isNewReconciler:!1};function pi(i,s){if(i&&i.defaultProps){s=ne({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function eh(i,s,a,f){s=i.memoizedState,a=a(f,s),a=a==null?s:ne({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Ol={isMounted:function(i){return(i=i._reactInternals)?Hi(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var f=Mn(),m=Nr(i),S=Yi(f,m);S.payload=s,a!=null&&(S.callback=a),s=br(i,S,m),s!==null&&(_i(s,i,m,f),bl(s,i,m))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var f=Mn(),m=Nr(i),S=Yi(f,m);S.tag=1,S.payload=s,a!=null&&(S.callback=a),s=br(i,S,m),s!==null&&(_i(s,i,m,f),bl(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=Mn(),f=Nr(i),m=Yi(a,f);m.tag=2,s!=null&&(m.callback=s),s=br(i,m,f),s!==null&&(_i(s,i,f,a),bl(s,i,f))}};function eg(i,s,a,f,m,S,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,S,w):s.prototype&&s.prototype.isPureReactComponent?!Yo(a,f)||!Yo(m,S):!0}function tg(i,s,a){var f=!1,m=Ar,S=s.contextType;return typeof S=="object"&&S!==null?S=ni(S):(m=Pn(s)?Zr:fn.current,f=s.contextTypes,S=(f=f!=null)?zs(i,m):Ar),s=new s(a,S),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ol,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=S),s}function ng(i,s,a,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,f),s.state!==i&&Ol.enqueueReplaceState(s,s.state,null)}function th(i,s,a,f){var m=i.stateNode;m.props=a,m.state=i.memoizedState,m.refs={},Hf(i);var S=s.contextType;typeof S=="object"&&S!==null?m.context=ni(S):(S=Pn(s)?Zr:fn.current,m.context=zs(i,S)),m.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(eh(i,s,S,a),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Ol.enqueueReplaceState(m,m.state,null),Pl(i,a,m,f),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function Ys(i,s){try{var a="",f=s;do a+=K(f),f=f.return;while(f);var m=a}catch(S){m=`
Error generating stack: `+S.message+`
`+S.stack}return{value:i,source:s,stack:m,digest:null}}function nh(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function ih(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var eS=typeof WeakMap=="function"?WeakMap:Map;function ig(i,s,a){a=Yi(-1,a),a.tag=3,a.payload={element:null};var f=s.value;return a.callback=function(){Wl||(Wl=!0,vh=f),ih(i,s)},a}function rg(i,s,a){a=Yi(-1,a),a.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;a.payload=function(){return f(m)},a.callback=function(){ih(i,s)}}var S=i.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(a.callback=function(){ih(i,s),typeof f!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function sg(i,s,a){var f=i.pingCache;if(f===null){f=i.pingCache=new eS;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(a)||(m.add(a),i=pS.bind(null,i,s,a),s.then(i,i))}function og(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function ag(i,s,a,f,m){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Yi(-1,1),s.tag=2,br(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var tS=b.ReactCurrentOwner,Ln=!1;function Sn(i,s,a,f){s.child=i===null?Cm(s,null,a,f):Gs(s,i.child,a,f)}function lg(i,s,a,f,m){a=a.render;var S=s.ref;return Xs(s,m),f=$f(i,s,a,f,S,m),a=qf(),i!==null&&!Ln?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,$i(i,s,m)):(Ot&&a&&Lf(s),s.flags|=1,Sn(i,s,f,m),s.child)}function ug(i,s,a,f,m){if(i===null){var S=a.type;return typeof S=="function"&&!Th(S)&&S.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=S,cg(i,s,S,f,m)):(i=Kl(a.type,null,f,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(S=i.child,(i.lanes&m)===0){var w=S.memoizedProps;if(a=a.compare,a=a!==null?a:Yo,a(w,f)&&i.ref===s.ref)return $i(i,s,m)}return s.flags|=1,i=Ur(S,f),i.ref=s.ref,i.return=s,s.child=i}function cg(i,s,a,f,m){if(i!==null){var S=i.memoizedProps;if(Yo(S,f)&&i.ref===s.ref)if(Ln=!1,s.pendingProps=f=S,(i.lanes&m)!==0)(i.flags&131072)!==0&&(Ln=!0);else return s.lanes=i.lanes,$i(i,s,m)}return rh(i,s,a,f,m)}function fg(i,s,a){var f=s.pendingProps,m=f.children,S=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(qs,jn),jn|=a;else{if((a&1073741824)===0)return i=S!==null?S.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Lt(qs,jn),jn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=S!==null?S.baseLanes:a,Lt(qs,jn),jn|=f}else S!==null?(f=S.baseLanes|a,s.memoizedState=null):f=a,Lt(qs,jn),jn|=f;return Sn(i,s,m,a),s.child}function hg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function rh(i,s,a,f,m){var S=Pn(a)?Zr:fn.current;return S=zs(s,S),Xs(s,m),a=$f(i,s,a,f,S,m),f=qf(),i!==null&&!Ln?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,$i(i,s,m)):(Ot&&f&&Lf(s),s.flags|=1,Sn(i,s,a,m),s.child)}function dg(i,s,a,f,m){if(Pn(a)){var S=!0;Sl(s)}else S=!1;if(Xs(s,m),s.stateNode===null)zl(i,s),tg(s,a,f),th(s,a,f,m),f=!0;else if(i===null){var w=s.stateNode,U=s.memoizedProps;w.props=U;var B=w.context,ae=a.contextType;typeof ae=="object"&&ae!==null?ae=ni(ae):(ae=Pn(a)?Zr:fn.current,ae=zs(s,ae));var ye=a.getDerivedStateFromProps,Se=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==f||B!==ae)&&ng(s,w,f,ae),Rr=!1;var ve=s.memoizedState;w.state=ve,Pl(s,f,w,m),B=s.memoizedState,U!==f||ve!==B||bn.current||Rr?(typeof ye=="function"&&(eh(s,a,ye,f),B=s.memoizedState),(U=Rr||eg(s,a,U,f,ve,B,ae))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=B),w.props=f,w.state=B,w.context=ae,f=U):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{w=s.stateNode,bm(i,s),U=s.memoizedProps,ae=s.type===s.elementType?U:pi(s.type,U),w.props=ae,Se=s.pendingProps,ve=w.context,B=a.contextType,typeof B=="object"&&B!==null?B=ni(B):(B=Pn(a)?Zr:fn.current,B=zs(s,B));var Oe=a.getDerivedStateFromProps;(ye=typeof Oe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==Se||ve!==B)&&ng(s,w,f,B),Rr=!1,ve=s.memoizedState,w.state=ve,Pl(s,f,w,m);var He=s.memoizedState;U!==Se||ve!==He||bn.current||Rr?(typeof Oe=="function"&&(eh(s,a,Oe,f),He=s.memoizedState),(ae=Rr||eg(s,a,ae,f,ve,He,B)||!1)?(ye||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(f,He,B),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(f,He,B)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=He),w.props=f,w.state=He,w.context=B,f=ae):(typeof w.componentDidUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),f=!1)}return sh(i,s,a,f,S,m)}function sh(i,s,a,f,m,S){hg(i,s);var w=(s.flags&128)!==0;if(!f&&!w)return m&&vm(s,a,!1),$i(i,s,S);f=s.stateNode,tS.current=s;var U=w&&typeof a.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&w?(s.child=Gs(s,i.child,null,S),s.child=Gs(s,null,U,S)):Sn(i,s,U,S),s.memoizedState=f.state,m&&vm(s,a,!0),s.child}function pg(i){var s=i.stateNode;s.pendingContext?gm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&gm(i,s.context,!1),Vf(i,s.containerInfo)}function mg(i,s,a,f,m){return Vs(),Uf(m),s.flags|=256,Sn(i,s,a,f),s.child}var oh={dehydrated:null,treeContext:null,retryLane:0};function ah(i){return{baseLanes:i,cachePool:null,transitions:null}}function gg(i,s,a){var f=s.pendingProps,m=Bt.current,S=!1,w=(s.flags&128)!==0,U;if((U=w)||(U=i!==null&&i.memoizedState===null?!1:(m&2)!==0),U?(S=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),Lt(Bt,m&1),i===null)return If(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=f.children,i=f.fallback,S?(f=s.mode,S=s.child,w={mode:"hidden",children:w},(f&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=w):S=Zl(w,f,0,null),i=as(i,f,a,null),S.return=s,i.return=s,S.sibling=i,s.child=S,s.child.memoizedState=ah(a),s.memoizedState=oh,i):lh(s,w));if(m=i.memoizedState,m!==null&&(U=m.dehydrated,U!==null))return nS(i,s,w,f,U,m,a);if(S){S=f.fallback,w=s.mode,m=i.child,U=m.sibling;var B={mode:"hidden",children:f.children};return(w&1)===0&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=B,s.deletions=null):(f=Ur(m,B),f.subtreeFlags=m.subtreeFlags&14680064),U!==null?S=Ur(U,S):(S=as(S,w,a,null),S.flags|=2),S.return=s,f.return=s,f.sibling=S,s.child=f,f=S,S=s.child,w=i.child.memoizedState,w=w===null?ah(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},S.memoizedState=w,S.childLanes=i.childLanes&~a,s.memoizedState=oh,f}return S=i.child,i=S.sibling,f=Ur(S,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=a),f.return=s,f.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=f,s.memoizedState=null,f}function lh(i,s){return s=Zl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function kl(i,s,a,f){return f!==null&&Uf(f),Gs(s,i.child,null,a),i=lh(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function nS(i,s,a,f,m,S,w){if(a)return s.flags&256?(s.flags&=-257,f=nh(Error(t(422))),kl(i,s,w,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(S=f.fallback,m=s.mode,f=Zl({mode:"visible",children:f.children},m,0,null),S=as(S,m,w,null),S.flags|=2,f.return=s,S.return=s,f.sibling=S,s.child=f,(s.mode&1)!==0&&Gs(s,i.child,null,w),s.child.memoizedState=ah(w),s.memoizedState=oh,S);if((s.mode&1)===0)return kl(i,s,w,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var U=f.dgst;return f=U,S=Error(t(419)),f=nh(S,f,void 0),kl(i,s,w,f)}if(U=(w&i.childLanes)!==0,Ln||U){if(f=sn,f!==null){switch(w&-w){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|w))!==0?0:m,m!==0&&m!==S.retryLane&&(S.retryLane=m,ji(i,m),_i(f,i,m,-1))}return wh(),f=nh(Error(t(421))),kl(i,s,w,f)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=mS.bind(null,i),m._reactRetry=s,null):(i=S.treeContext,Xn=wr(m.nextSibling),Wn=s,Ot=!0,di=null,i!==null&&(ei[ti++]=Wi,ei[ti++]=Xi,ei[ti++]=Qr,Wi=i.id,Xi=i.overflow,Qr=s),s=lh(s,f.children),s.flags|=4096,s)}function _g(i,s,a){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),zf(i.return,s,a)}function uh(i,s,a,f,m){var S=i.memoizedState;S===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:m}:(S.isBackwards=s,S.rendering=null,S.renderingStartTime=0,S.last=f,S.tail=a,S.tailMode=m)}function vg(i,s,a){var f=s.pendingProps,m=f.revealOrder,S=f.tail;if(Sn(i,s,f.children,a),f=Bt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&_g(i,a,s);else if(i.tag===19)_g(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Lt(Bt,f),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(a=s.child,m=null;a!==null;)i=a.alternate,i!==null&&Ll(i)===null&&(m=a),a=a.sibling;a=m,a===null?(m=s.child,s.child=null):(m=a.sibling,a.sibling=null),uh(s,!1,m,a,S);break;case"backwards":for(a=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&Ll(i)===null){s.child=m;break}i=m.sibling,m.sibling=a,a=m,m=i}uh(s,!0,a,null,S);break;case"together":uh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function zl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function $i(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),is|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Ur(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Ur(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function iS(i,s,a){switch(s.tag){case 3:pg(s),Vs();break;case 5:Dm(s);break;case 1:Pn(s.type)&&Sl(s);break;case 4:Vf(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;Lt(Cl,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Lt(Bt,Bt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?gg(i,s,a):(Lt(Bt,Bt.current&1),i=$i(i,s,a),i!==null?i.sibling:null);Lt(Bt,Bt.current&1);break;case 19:if(f=(a&s.childLanes)!==0,(i.flags&128)!==0){if(f)return vg(i,s,a);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Lt(Bt,Bt.current),f)break;return null;case 22:case 23:return s.lanes=0,fg(i,s,a)}return $i(i,s,a)}var xg,ch,yg,Sg;xg=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ch=function(){},yg=function(i,s,a,f){var m=i.memoizedProps;if(m!==f){i=s.stateNode,ts(bi.current);var S=null;switch(a){case"input":m=dt(i,m),f=dt(i,f),S=[];break;case"select":m=ne({},m,{value:void 0}),f=ne({},f,{value:void 0}),S=[];break;case"textarea":m=ce(i,m),f=ce(i,f),S=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=vl)}ut(a,f);var w;a=null;for(ae in m)if(!f.hasOwnProperty(ae)&&m.hasOwnProperty(ae)&&m[ae]!=null)if(ae==="style"){var U=m[ae];for(w in U)U.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?S||(S=[]):(S=S||[]).push(ae,null));for(ae in f){var B=f[ae];if(U=m?.[ae],f.hasOwnProperty(ae)&&B!==U&&(B!=null||U!=null))if(ae==="style")if(U){for(w in U)!U.hasOwnProperty(w)||B&&B.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in B)B.hasOwnProperty(w)&&U[w]!==B[w]&&(a||(a={}),a[w]=B[w])}else a||(S||(S=[]),S.push(ae,a)),a=B;else ae==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(S=S||[]).push(ae,B)):ae==="children"?typeof B!="string"&&typeof B!="number"||(S=S||[]).push(ae,""+B):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(B!=null&&ae==="onScroll"&&It("scroll",i),S||U===B||(S=[])):(S=S||[]).push(ae,B))}a&&(S=S||[]).push("style",a);var ae=S;(s.updateQueue=ae)&&(s.flags|=4)}},Sg=function(i,s,a,f){a!==f&&(s.flags|=4)};function la(i,s){if(!Ot)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function dn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,f=0;if(s)for(var m=i.child;m!==null;)a|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)a|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=f,i.childLanes=a,s}function rS(i,s,a){var f=s.pendingProps;switch(Df(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(s),null;case 1:return Pn(s.type)&&yl(),dn(s),null;case 3:return f=s.stateNode,js(),Ut(bn),Ut(fn),Xf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Tl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,di!==null&&(Sh(di),di=null))),ch(i,s),dn(s),null;case 5:Gf(s);var m=ts(ia.current);if(a=s.type,i!==null&&s.stateNode!=null)yg(i,s,a,f,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return dn(s),null}if(i=ts(bi.current),Tl(s)){f=s.stateNode,a=s.type;var S=s.memoizedProps;switch(f[Ri]=s,f[Qo]=S,i=(s.mode&1)!==0,a){case"dialog":It("cancel",f),It("close",f);break;case"iframe":case"object":case"embed":It("load",f);break;case"video":case"audio":for(m=0;m<qo.length;m++)It(qo[m],f);break;case"source":It("error",f);break;case"img":case"image":case"link":It("error",f),It("load",f);break;case"details":It("toggle",f);break;case"input":xt(f,S),It("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!S.multiple},It("invalid",f);break;case"textarea":ge(f,S),It("invalid",f)}ut(a,S),m=null;for(var w in S)if(S.hasOwnProperty(w)){var U=S[w];w==="children"?typeof U=="string"?f.textContent!==U&&(S.suppressHydrationWarning!==!0&&_l(f.textContent,U,i),m=["children",U]):typeof U=="number"&&f.textContent!==""+U&&(S.suppressHydrationWarning!==!0&&_l(f.textContent,U,i),m=["children",""+U]):o.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&It("scroll",f)}switch(a){case"input":Le(f),Je(f,S,!0);break;case"textarea":Le(f),_e(f);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(f.onclick=vl)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{w=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=qe(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=w.createElement(a,{is:f.is}):(i=w.createElement(a),a==="select"&&(w=i,f.multiple?w.multiple=!0:f.size&&(w.size=f.size))):i=w.createElementNS(i,a),i[Ri]=s,i[Qo]=f,xg(i,s,!1,!1),s.stateNode=i;e:{switch(w=Rt(a,f),a){case"dialog":It("cancel",i),It("close",i),m=f;break;case"iframe":case"object":case"embed":It("load",i),m=f;break;case"video":case"audio":for(m=0;m<qo.length;m++)It(qo[m],i);m=f;break;case"source":It("error",i),m=f;break;case"img":case"image":case"link":It("error",i),It("load",i),m=f;break;case"details":It("toggle",i),m=f;break;case"input":xt(i,f),m=dt(i,f),It("invalid",i);break;case"option":m=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},m=ne({},f,{value:void 0}),It("invalid",i);break;case"textarea":ge(i,f),m=ce(i,f),It("invalid",i);break;default:m=f}ut(a,m),U=m;for(S in U)if(U.hasOwnProperty(S)){var B=U[S];S==="style"?ze(i,B):S==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&lt(i,B)):S==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&Ee(i,B):typeof B=="number"&&Ee(i,""+B):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(o.hasOwnProperty(S)?B!=null&&S==="onScroll"&&It("scroll",i):B!=null&&T(i,S,B,w))}switch(a){case"input":Le(i),Je(i,f,!1);break;case"textarea":Le(i),_e(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Me(f.value));break;case"select":i.multiple=!!f.multiple,S=f.value,S!=null?R(i,!!f.multiple,S,!1):f.defaultValue!=null&&R(i,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=vl)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return dn(s),null;case 6:if(i&&s.stateNode!=null)Sg(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(a=ts(ia.current),ts(bi.current),Tl(s)){if(f=s.stateNode,a=s.memoizedProps,f[Ri]=s,(S=f.nodeValue!==a)&&(i=Wn,i!==null))switch(i.tag){case 3:_l(f.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&_l(f.nodeValue,a,(i.mode&1)!==0)}S&&(s.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[Ri]=s,s.stateNode=f}return dn(s),null;case 13:if(Ut(Bt),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Ot&&Xn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)wm(),Vs(),s.flags|=98560,S=!1;else if(S=Tl(s),f!==null&&f.dehydrated!==null){if(i===null){if(!S)throw Error(t(318));if(S=s.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[Ri]=s}else Vs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;dn(s),S=!1}else di!==null&&(Sh(di),di=null),S=!0;if(!S)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Bt.current&1)!==0?Zt===0&&(Zt=3):wh())),s.updateQueue!==null&&(s.flags|=4),dn(s),null);case 4:return js(),ch(i,s),i===null&&Ko(s.stateNode.containerInfo),dn(s),null;case 10:return kf(s.type._context),dn(s),null;case 17:return Pn(s.type)&&yl(),dn(s),null;case 19:if(Ut(Bt),S=s.memoizedState,S===null)return dn(s),null;if(f=(s.flags&128)!==0,w=S.rendering,w===null)if(f)la(S,!1);else{if(Zt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(w=Ll(i),w!==null){for(s.flags|=128,la(S,!1),f=w.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=a,a=s.child;a!==null;)S=a,i=f,S.flags&=14680066,w=S.alternate,w===null?(S.childLanes=0,S.lanes=i,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=w.childLanes,S.lanes=w.lanes,S.child=w.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=w.memoizedProps,S.memoizedState=w.memoizedState,S.updateQueue=w.updateQueue,S.type=w.type,i=w.dependencies,S.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Lt(Bt,Bt.current&1|2),s.child}i=i.sibling}S.tail!==null&&Pe()>Ks&&(s.flags|=128,f=!0,la(S,!1),s.lanes=4194304)}else{if(!f)if(i=Ll(w),i!==null){if(s.flags|=128,f=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),la(S,!0),S.tail===null&&S.tailMode==="hidden"&&!w.alternate&&!Ot)return dn(s),null}else 2*Pe()-S.renderingStartTime>Ks&&a!==1073741824&&(s.flags|=128,f=!0,la(S,!1),s.lanes=4194304);S.isBackwards?(w.sibling=s.child,s.child=w):(a=S.last,a!==null?a.sibling=w:s.child=w,S.last=w)}return S.tail!==null?(s=S.tail,S.rendering=s,S.tail=s.sibling,S.renderingStartTime=Pe(),s.sibling=null,a=Bt.current,Lt(Bt,f?a&1|2:a&1),s):(dn(s),null);case 22:case 23:return Eh(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(jn&1073741824)!==0&&(dn(s),s.subtreeFlags&6&&(s.flags|=8192)):dn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function sS(i,s){switch(Df(s),s.tag){case 1:return Pn(s.type)&&yl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return js(),Ut(bn),Ut(fn),Xf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Gf(s),null;case 13:if(Ut(Bt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Vs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ut(Bt),null;case 4:return js(),null;case 10:return kf(s.type._context),null;case 22:case 23:return Eh(),null;case 24:return null;default:return null}}var Bl=!1,pn=!1,oS=typeof WeakSet=="function"?WeakSet:Set,Be=null;function $s(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){Vt(i,s,f)}else a.current=null}function fh(i,s,a){try{a()}catch(f){Vt(i,s,f)}}var Mg=!1;function aS(i,s){if(Ef=ol,i=em(),mf(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var m=f.anchorOffset,S=f.focusNode;f=f.focusOffset;try{a.nodeType,S.nodeType}catch{a=null;break e}var w=0,U=-1,B=-1,ae=0,ye=0,Se=i,ve=null;t:for(;;){for(var Oe;Se!==a||m!==0&&Se.nodeType!==3||(U=w+m),Se!==S||f!==0&&Se.nodeType!==3||(B=w+f),Se.nodeType===3&&(w+=Se.nodeValue.length),(Oe=Se.firstChild)!==null;)ve=Se,Se=Oe;for(;;){if(Se===i)break t;if(ve===a&&++ae===m&&(U=w),ve===S&&++ye===f&&(B=w),(Oe=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Oe}a=U===-1||B===-1?null:{start:U,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(wf={focusedElem:i,selectionRange:a},ol=!1,Be=s;Be!==null;)if(s=Be,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Be=i;else for(;Be!==null;){s=Be;try{var He=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,Wt=He.memoizedState,Z=s.stateNode,W=Z.getSnapshotBeforeUpdate(s.elementType===s.type?Ge:pi(s.type,Ge),Wt);Z.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var te=s.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Vt(s,s.return,we)}if(i=s.sibling,i!==null){i.return=s.return,Be=i;break}Be=s.return}return He=Mg,Mg=!1,He}function ua(i,s,a){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&i)===i){var S=m.destroy;m.destroy=void 0,S!==void 0&&fh(s,a,S)}m=m.next}while(m!==f)}}function Hl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var f=a.create;a.destroy=f()}a=a.next}while(a!==s)}}function hh(i){var s=i.ref;if(s!==null){var a=i.stateNode;i.tag,i=a,typeof s=="function"?s(i):s.current=i}}function Eg(i){var s=i.alternate;s!==null&&(i.alternate=null,Eg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Ri],delete s[Qo],delete s[Rf],delete s[Gy],delete s[Wy])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function wg(i){return i.tag===5||i.tag===3||i.tag===4}function Tg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||wg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function dh(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=vl));else if(f!==4&&(i=i.child,i!==null))for(dh(i,s,a),i=i.sibling;i!==null;)dh(i,s,a),i=i.sibling}function ph(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(ph(i,s,a),i=i.sibling;i!==null;)ph(i,s,a),i=i.sibling}var ln=null,mi=!1;function Pr(i,s,a){for(a=a.child;a!==null;)Ag(i,s,a),a=a.sibling}function Ag(i,s,a){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(tn,a)}catch{}switch(a.tag){case 5:pn||$s(a,s);case 6:var f=ln,m=mi;ln=null,Pr(i,s,a),ln=f,mi=m,ln!==null&&(mi?(i=ln,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):ln.removeChild(a.stateNode));break;case 18:ln!==null&&(mi?(i=ln,a=a.stateNode,i.nodeType===8?Cf(i.parentNode,a):i.nodeType===1&&Cf(i,a),Ho(i)):Cf(ln,a.stateNode));break;case 4:f=ln,m=mi,ln=a.stateNode.containerInfo,mi=!0,Pr(i,s,a),ln=f,mi=m;break;case 0:case 11:case 14:case 15:if(!pn&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var S=m,w=S.destroy;S=S.tag,w!==void 0&&((S&2)!==0||(S&4)!==0)&&fh(a,s,w),m=m.next}while(m!==f)}Pr(i,s,a);break;case 1:if(!pn&&($s(a,s),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(U){Vt(a,s,U)}Pr(i,s,a);break;case 21:Pr(i,s,a);break;case 22:a.mode&1?(pn=(f=pn)||a.memoizedState!==null,Pr(i,s,a),pn=f):Pr(i,s,a);break;default:Pr(i,s,a)}}function Cg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new oS),s.forEach(function(f){var m=gS.bind(null,i,f);a.has(f)||(a.add(f),f.then(m,m))})}}function gi(i,s){var a=s.deletions;if(a!==null)for(var f=0;f<a.length;f++){var m=a[f];try{var S=i,w=s,U=w;e:for(;U!==null;){switch(U.tag){case 5:ln=U.stateNode,mi=!1;break e;case 3:ln=U.stateNode.containerInfo,mi=!0;break e;case 4:ln=U.stateNode.containerInfo,mi=!0;break e}U=U.return}if(ln===null)throw Error(t(160));Ag(S,w,m),ln=null,mi=!1;var B=m.alternate;B!==null&&(B.return=null),m.return=null}catch(ae){Vt(m,s,ae)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Rg(s,i),s=s.sibling}function Rg(i,s){var a=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(gi(s,i),Li(i),f&4){try{ua(3,i,i.return),Hl(3,i)}catch(Ge){Vt(i,i.return,Ge)}try{ua(5,i,i.return)}catch(Ge){Vt(i,i.return,Ge)}}break;case 1:gi(s,i),Li(i),f&512&&a!==null&&$s(a,a.return);break;case 5:if(gi(s,i),Li(i),f&512&&a!==null&&$s(a,a.return),i.flags&32){var m=i.stateNode;try{Ee(m,"")}catch(Ge){Vt(i,i.return,Ge)}}if(f&4&&(m=i.stateNode,m!=null)){var S=i.memoizedProps,w=a!==null?a.memoizedProps:S,U=i.type,B=i.updateQueue;if(i.updateQueue=null,B!==null)try{U==="input"&&S.type==="radio"&&S.name!=null&&Ye(m,S),Rt(U,w);var ae=Rt(U,S);for(w=0;w<B.length;w+=2){var ye=B[w],Se=B[w+1];ye==="style"?ze(m,Se):ye==="dangerouslySetInnerHTML"?lt(m,Se):ye==="children"?Ee(m,Se):T(m,ye,Se,ae)}switch(U){case"input":bt(m,S);break;case"textarea":xe(m,S);break;case"select":var ve=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!S.multiple;var Oe=S.value;Oe!=null?R(m,!!S.multiple,Oe,!1):ve!==!!S.multiple&&(S.defaultValue!=null?R(m,!!S.multiple,S.defaultValue,!0):R(m,!!S.multiple,S.multiple?[]:"",!1))}m[Qo]=S}catch(Ge){Vt(i,i.return,Ge)}}break;case 6:if(gi(s,i),Li(i),f&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,S=i.memoizedProps;try{m.nodeValue=S}catch(Ge){Vt(i,i.return,Ge)}}break;case 3:if(gi(s,i),Li(i),f&4&&a!==null&&a.memoizedState.isDehydrated)try{Ho(s.containerInfo)}catch(Ge){Vt(i,i.return,Ge)}break;case 4:gi(s,i),Li(i);break;case 13:gi(s,i),Li(i),m=i.child,m.flags&8192&&(S=m.memoizedState!==null,m.stateNode.isHidden=S,!S||m.alternate!==null&&m.alternate.memoizedState!==null||(_h=Pe())),f&4&&Cg(i);break;case 22:if(ye=a!==null&&a.memoizedState!==null,i.mode&1?(pn=(ae=pn)||ye,gi(s,i),pn=ae):gi(s,i),Li(i),f&8192){if(ae=i.memoizedState!==null,(i.stateNode.isHidden=ae)&&!ye&&(i.mode&1)!==0)for(Be=i,ye=i.child;ye!==null;){for(Se=Be=ye;Be!==null;){switch(ve=Be,Oe=ve.child,ve.tag){case 0:case 11:case 14:case 15:ua(4,ve,ve.return);break;case 1:$s(ve,ve.return);var He=ve.stateNode;if(typeof He.componentWillUnmount=="function"){f=ve,a=ve.return;try{s=f,He.props=s.memoizedProps,He.state=s.memoizedState,He.componentWillUnmount()}catch(Ge){Vt(f,a,Ge)}}break;case 5:$s(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Lg(Se);continue}}Oe!==null?(Oe.return=ve,Be=Oe):Lg(Se)}ye=ye.sibling}e:for(ye=null,Se=i;;){if(Se.tag===5){if(ye===null){ye=Se;try{m=Se.stateNode,ae?(S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(U=Se.stateNode,B=Se.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=rt("display",w))}catch(Ge){Vt(i,i.return,Ge)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=ae?"":Se.memoizedProps}catch(Ge){Vt(i,i.return,Ge)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===i)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===i)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===i)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:gi(s,i),Li(i),f&4&&Cg(i);break;case 21:break;default:gi(s,i),Li(i)}}function Li(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(wg(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(Ee(m,""),f.flags&=-33);var S=Tg(i);ph(i,S,m);break;case 3:case 4:var w=f.stateNode.containerInfo,U=Tg(i);dh(i,U,w);break;default:throw Error(t(161))}}catch(B){Vt(i,i.return,B)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function lS(i,s,a){Be=i,bg(i)}function bg(i,s,a){for(var f=(i.mode&1)!==0;Be!==null;){var m=Be,S=m.child;if(m.tag===22&&f){var w=m.memoizedState!==null||Bl;if(!w){var U=m.alternate,B=U!==null&&U.memoizedState!==null||pn;U=Bl;var ae=pn;if(Bl=w,(pn=B)&&!ae)for(Be=m;Be!==null;)w=Be,B=w.child,w.tag===22&&w.memoizedState!==null?Dg(m):B!==null?(B.return=w,Be=B):Dg(m);for(;S!==null;)Be=S,bg(S),S=S.sibling;Be=m,Bl=U,pn=ae}Pg(i)}else(m.subtreeFlags&8772)!==0&&S!==null?(S.return=m,Be=S):Pg(i)}}function Pg(i){for(;Be!==null;){var s=Be;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:pn||Hl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!pn)if(a===null)f.componentDidMount();else{var m=s.elementType===s.type?a.memoizedProps:pi(s.type,a.memoizedProps);f.componentDidUpdate(m,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var S=s.updateQueue;S!==null&&Lm(s,S,f);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Lm(s,w,a)}break;case 5:var U=s.stateNode;if(a===null&&s.flags&4){a=U;var B=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ae=s.alternate;if(ae!==null){var ye=ae.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&Ho(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}pn||s.flags&512&&hh(s)}catch(ve){Vt(s,s.return,ve)}}if(s===i){Be=null;break}if(a=s.sibling,a!==null){a.return=s.return,Be=a;break}Be=s.return}}function Lg(i){for(;Be!==null;){var s=Be;if(s===i){Be=null;break}var a=s.sibling;if(a!==null){a.return=s.return,Be=a;break}Be=s.return}}function Dg(i){for(;Be!==null;){var s=Be;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Hl(4,s)}catch(B){Vt(s,a,B)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(B){Vt(s,m,B)}}var S=s.return;try{hh(s)}catch(B){Vt(s,S,B)}break;case 5:var w=s.return;try{hh(s)}catch(B){Vt(s,w,B)}}}catch(B){Vt(s,s.return,B)}if(s===i){Be=null;break}var U=s.sibling;if(U!==null){U.return=s.return,Be=U;break}Be=s.return}}var uS=Math.ceil,Vl=b.ReactCurrentDispatcher,mh=b.ReactCurrentOwner,ri=b.ReactCurrentBatchConfig,St=0,sn=null,jt=null,un=0,jn=0,qs=Tr(0),Zt=0,ca=null,is=0,Gl=0,gh=0,fa=null,Dn=null,_h=0,Ks=1/0,qi=null,Wl=!1,vh=null,Lr=null,Xl=!1,Dr=null,jl=0,ha=0,xh=null,Yl=-1,$l=0;function Mn(){return(St&6)!==0?Pe():Yl!==-1?Yl:Yl=Pe()}function Nr(i){return(i.mode&1)===0?1:(St&2)!==0&&un!==0?un&-un:jy.transition!==null?($l===0&&($l=il()),$l):(i=At,i!==0||(i=window.event,i=i===void 0?16:Ip(i.type)),i)}function _i(i,s,a,f){if(50<ha)throw ha=0,xh=null,Error(t(185));Fo(i,a,f),((St&2)===0||i!==sn)&&(i===sn&&((St&2)===0&&(Gl|=a),Zt===4&&Ir(i,un)),Nn(i,f),a===1&&St===0&&(s.mode&1)===0&&(Ks=Pe()+500,Ml&&Cr()))}function Nn(i,s){var a=i.callbackNode;Rn(i,s);var f=Vn(i,i===sn?un:0);if(f===0)a!==null&&Ae(a),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(a!=null&&Ae(a),s===1)i.tag===0?Xy(Ig.bind(null,i)):xm(Ig.bind(null,i)),Hy(function(){(St&6)===0&&Cr()}),a=null;else{switch(Ap(f)){case 1:a=tt;break;case 4:a=je;break;case 16:a=vt;break;case 536870912:a=Nt;break;default:a=vt}a=Vg(a,Ng.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Ng(i,s){if(Yl=-1,$l=0,(St&6)!==0)throw Error(t(327));var a=i.callbackNode;if(Zs()&&i.callbackNode!==a)return null;var f=Vn(i,i===sn?un:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=ql(i,f);else{s=f;var m=St;St|=2;var S=Fg();(sn!==i||un!==s)&&(qi=null,Ks=Pe()+500,ss(i,s));do try{hS();break}catch(U){Ug(i,U)}while(!0);Of(),Vl.current=S,St=m,jt!==null?s=0:(sn=null,un=0,s=Zt)}if(s!==0){if(s===2&&(m=qr(i),m!==0&&(f=m,s=yh(i,m))),s===1)throw a=ca,ss(i,0),Ir(i,f),Nn(i,Pe()),a;if(s===6)Ir(i,f);else{if(m=i.current.alternate,(f&30)===0&&!cS(m)&&(s=ql(i,f),s===2&&(S=qr(i),S!==0&&(f=S,s=yh(i,S))),s===1))throw a=ca,ss(i,0),Ir(i,f),Nn(i,Pe()),a;switch(i.finishedWork=m,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:os(i,Dn,qi);break;case 3:if(Ir(i,f),(f&130023424)===f&&(s=_h+500-Pe(),10<s)){if(Vn(i,0)!==0)break;if(m=i.suspendedLanes,(m&f)!==f){Mn(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=Af(os.bind(null,i,Dn,qi),s);break}os(i,Dn,qi);break;case 4:if(Ir(i,f),(f&4194240)===f)break;for(s=i.eventTimes,m=-1;0<f;){var w=31-Tt(f);S=1<<w,w=s[w],w>m&&(m=w),f&=~S}if(f=m,f=Pe()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*uS(f/1960))-f,10<f){i.timeoutHandle=Af(os.bind(null,i,Dn,qi),f);break}os(i,Dn,qi);break;case 5:os(i,Dn,qi);break;default:throw Error(t(329))}}}return Nn(i,Pe()),i.callbackNode===a?Ng.bind(null,i):null}function yh(i,s){var a=fa;return i.current.memoizedState.isDehydrated&&(ss(i,s).flags|=256),i=ql(i,s),i!==2&&(s=Dn,Dn=a,s!==null&&Sh(s)),i}function Sh(i){Dn===null?Dn=i:Dn.push.apply(Dn,i)}function cS(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var m=a[f],S=m.getSnapshot;m=m.value;try{if(!hi(S(),m))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ir(i,s){for(s&=~gh,s&=~Gl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-Tt(s),f=1<<a;i[a]=-1,s&=~f}}function Ig(i){if((St&6)!==0)throw Error(t(327));Zs();var s=Vn(i,0);if((s&1)===0)return Nn(i,Pe()),null;var a=ql(i,s);if(i.tag!==0&&a===2){var f=qr(i);f!==0&&(s=f,a=yh(i,f))}if(a===1)throw a=ca,ss(i,0),Ir(i,s),Nn(i,Pe()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,os(i,Dn,qi),Nn(i,Pe()),null}function Mh(i,s){var a=St;St|=1;try{return i(s)}finally{St=a,St===0&&(Ks=Pe()+500,Ml&&Cr())}}function rs(i){Dr!==null&&Dr.tag===0&&(St&6)===0&&Zs();var s=St;St|=1;var a=ri.transition,f=At;try{if(ri.transition=null,At=1,i)return i()}finally{At=f,ri.transition=a,St=s,(St&6)===0&&Cr()}}function Eh(){jn=qs.current,Ut(qs)}function ss(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,By(a)),jt!==null)for(a=jt.return;a!==null;){var f=a;switch(Df(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&yl();break;case 3:js(),Ut(bn),Ut(fn),Xf();break;case 5:Gf(f);break;case 4:js();break;case 13:Ut(Bt);break;case 19:Ut(Bt);break;case 10:kf(f.type._context);break;case 22:case 23:Eh()}a=a.return}if(sn=i,jt=i=Ur(i.current,null),un=jn=s,Zt=0,ca=null,gh=Gl=is=0,Dn=fa=null,es!==null){for(s=0;s<es.length;s++)if(a=es[s],f=a.interleaved,f!==null){a.interleaved=null;var m=f.next,S=a.pending;if(S!==null){var w=S.next;S.next=m,f.next=w}a.pending=f}es=null}return i}function Ug(i,s){do{var a=jt;try{if(Of(),Dl.current=Fl,Nl){for(var f=Ht.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Nl=!1}if(ns=0,rn=Kt=Ht=null,ra=!1,sa=0,mh.current=null,a===null||a.return===null){Zt=1,ca=s,jt=null;break}e:{var S=i,w=a.return,U=a,B=s;if(s=un,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ae=B,ye=U,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Oe=og(w);if(Oe!==null){Oe.flags&=-257,ag(Oe,w,U,S,s),Oe.mode&1&&sg(S,ae,s),s=Oe,B=ae;var He=s.updateQueue;if(He===null){var Ge=new Set;Ge.add(B),s.updateQueue=Ge}else He.add(B);break e}else{if((s&1)===0){sg(S,ae,s),wh();break e}B=Error(t(426))}}else if(Ot&&U.mode&1){var Wt=og(w);if(Wt!==null){(Wt.flags&65536)===0&&(Wt.flags|=256),ag(Wt,w,U,S,s),Uf(Ys(B,U));break e}}S=B=Ys(B,U),Zt!==4&&(Zt=2),fa===null?fa=[S]:fa.push(S),S=w;do{switch(S.tag){case 3:S.flags|=65536,s&=-s,S.lanes|=s;var Z=ig(S,B,s);Pm(S,Z);break e;case 1:U=B;var W=S.type,te=S.stateNode;if((S.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Lr===null||!Lr.has(te)))){S.flags|=65536,s&=-s,S.lanes|=s;var we=rg(S,U,s);Pm(S,we);break e}}S=S.return}while(S!==null)}kg(a)}catch(Xe){s=Xe,jt===a&&a!==null&&(jt=a=a.return);continue}break}while(!0)}function Fg(){var i=Vl.current;return Vl.current=Fl,i===null?Fl:i}function wh(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),sn===null||(is&268435455)===0&&(Gl&268435455)===0||Ir(sn,un)}function ql(i,s){var a=St;St|=2;var f=Fg();(sn!==i||un!==s)&&(qi=null,ss(i,s));do try{fS();break}catch(m){Ug(i,m)}while(!0);if(Of(),St=a,Vl.current=f,jt!==null)throw Error(t(261));return sn=null,un=0,Zt}function fS(){for(;jt!==null;)Og(jt)}function hS(){for(;jt!==null&&!Fe();)Og(jt)}function Og(i){var s=Hg(i.alternate,i,jn);i.memoizedProps=i.pendingProps,s===null?kg(i):jt=s,mh.current=null}function kg(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=rS(a,s,jn),a!==null){jt=a;return}}else{if(a=sS(a,s),a!==null){a.flags&=32767,jt=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Zt=6,jt=null;return}}if(s=s.sibling,s!==null){jt=s;return}jt=s=i}while(s!==null);Zt===0&&(Zt=5)}function os(i,s,a){var f=At,m=ri.transition;try{ri.transition=null,At=1,dS(i,s,a,f)}finally{ri.transition=m,At=f}return null}function dS(i,s,a,f){do Zs();while(Dr!==null);if((St&6)!==0)throw Error(t(327));a=i.finishedWork;var m=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var S=a.lanes|a.childLanes;if(Yx(i,S),i===sn&&(jt=sn=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Xl||(Xl=!0,Vg(vt,function(){return Zs(),null})),S=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||S){S=ri.transition,ri.transition=null;var w=At;At=1;var U=St;St|=4,mh.current=null,aS(i,a),Rg(a,i),Ny(wf),ol=!!Ef,wf=Ef=null,i.current=a,lS(a),Ve(),St=U,At=w,ri.transition=S}else i.current=a;if(Xl&&(Xl=!1,Dr=i,jl=m),S=i.pendingLanes,S===0&&(Lr=null),$e(a.stateNode),Nn(i,Pe()),s!==null)for(f=i.onRecoverableError,a=0;a<s.length;a++)m=s[a],f(m.value,{componentStack:m.stack,digest:m.digest});if(Wl)throw Wl=!1,i=vh,vh=null,i;return(jl&1)!==0&&i.tag!==0&&Zs(),S=i.pendingLanes,(S&1)!==0?i===xh?ha++:(ha=0,xh=i):ha=0,Cr(),null}function Zs(){if(Dr!==null){var i=Ap(jl),s=ri.transition,a=At;try{if(ri.transition=null,At=16>i?16:i,Dr===null)var f=!1;else{if(i=Dr,Dr=null,jl=0,(St&6)!==0)throw Error(t(331));var m=St;for(St|=4,Be=i.current;Be!==null;){var S=Be,w=S.child;if((Be.flags&16)!==0){var U=S.deletions;if(U!==null){for(var B=0;B<U.length;B++){var ae=U[B];for(Be=ae;Be!==null;){var ye=Be;switch(ye.tag){case 0:case 11:case 15:ua(8,ye,S)}var Se=ye.child;if(Se!==null)Se.return=ye,Be=Se;else for(;Be!==null;){ye=Be;var ve=ye.sibling,Oe=ye.return;if(Eg(ye),ye===ae){Be=null;break}if(ve!==null){ve.return=Oe,Be=ve;break}Be=Oe}}}var He=S.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var Wt=Ge.sibling;Ge.sibling=null,Ge=Wt}while(Ge!==null)}}Be=S}}if((S.subtreeFlags&2064)!==0&&w!==null)w.return=S,Be=w;else e:for(;Be!==null;){if(S=Be,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:ua(9,S,S.return)}var Z=S.sibling;if(Z!==null){Z.return=S.return,Be=Z;break e}Be=S.return}}var W=i.current;for(Be=W;Be!==null;){w=Be;var te=w.child;if((w.subtreeFlags&2064)!==0&&te!==null)te.return=w,Be=te;else e:for(w=W;Be!==null;){if(U=Be,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Hl(9,U)}}catch(Xe){Vt(U,U.return,Xe)}if(U===w){Be=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,Be=we;break e}Be=U.return}}if(St=m,Cr(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(tn,i)}catch{}f=!0}return f}finally{At=a,ri.transition=s}}return!1}function zg(i,s,a){s=Ys(a,s),s=ig(i,s,1),i=br(i,s,1),s=Mn(),i!==null&&(Fo(i,1,s),Nn(i,s))}function Vt(i,s,a){if(i.tag===3)zg(i,i,a);else for(;s!==null;){if(s.tag===3){zg(s,i,a);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Lr===null||!Lr.has(f))){i=Ys(a,i),i=rg(s,i,1),s=br(s,i,1),i=Mn(),s!==null&&(Fo(s,1,i),Nn(s,i));break}}s=s.return}}function pS(i,s,a){var f=i.pingCache;f!==null&&f.delete(s),s=Mn(),i.pingedLanes|=i.suspendedLanes&a,sn===i&&(un&a)===a&&(Zt===4||Zt===3&&(un&130023424)===un&&500>Pe()-_h?ss(i,0):gh|=a),Nn(i,s)}function Bg(i,s){s===0&&((i.mode&1)===0?s=1:(s=_r,_r<<=1,(_r&130023424)===0&&(_r=4194304)));var a=Mn();i=ji(i,s),i!==null&&(Fo(i,s,a),Nn(i,a))}function mS(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),Bg(i,a)}function gS(i,s){var a=0;switch(i.tag){case 13:var f=i.stateNode,m=i.memoizedState;m!==null&&(a=m.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Bg(i,a)}var Hg;Hg=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||bn.current)Ln=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return Ln=!1,iS(i,s,a);Ln=(i.flags&131072)!==0}else Ln=!1,Ot&&(s.flags&1048576)!==0&&ym(s,wl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;zl(i,s),i=s.pendingProps;var m=zs(s,fn.current);Xs(s,a),m=$f(null,s,f,i,m,a);var S=qf();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Pn(f)?(S=!0,Sl(s)):S=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Hf(s),m.updater=Ol,s.stateNode=m,m._reactInternals=s,th(s,f,i,a),s=sh(null,s,f,!0,S,a)):(s.tag=0,Ot&&S&&Lf(s),Sn(null,s,m,a),s=s.child),s;case 16:f=s.elementType;e:{switch(zl(i,s),i=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=vS(f),i=pi(f,i),m){case 0:s=rh(null,s,f,i,a);break e;case 1:s=dg(null,s,f,i,a);break e;case 11:s=lg(null,s,f,i,a);break e;case 14:s=ug(null,s,f,pi(f.type,i),a);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:pi(f,m),rh(i,s,f,m,a);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:pi(f,m),dg(i,s,f,m,a);case 3:e:{if(pg(s),i===null)throw Error(t(387));f=s.pendingProps,S=s.memoizedState,m=S.element,bm(i,s),Pl(s,f,null,a);var w=s.memoizedState;if(f=w.element,S.isDehydrated)if(S={element:f,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=S,s.memoizedState=S,s.flags&256){m=Ys(Error(t(423)),s),s=mg(i,s,f,a,m);break e}else if(f!==m){m=Ys(Error(t(424)),s),s=mg(i,s,f,a,m);break e}else for(Xn=wr(s.stateNode.containerInfo.firstChild),Wn=s,Ot=!0,di=null,a=Cm(s,null,f,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Vs(),f===m){s=$i(i,s,a);break e}Sn(i,s,f,a)}s=s.child}return s;case 5:return Dm(s),i===null&&If(s),f=s.type,m=s.pendingProps,S=i!==null?i.memoizedProps:null,w=m.children,Tf(f,m)?w=null:S!==null&&Tf(f,S)&&(s.flags|=32),hg(i,s),Sn(i,s,w,a),s.child;case 6:return i===null&&If(s),null;case 13:return gg(i,s,a);case 4:return Vf(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Gs(s,null,f,a):Sn(i,s,f,a),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:pi(f,m),lg(i,s,f,m,a);case 7:return Sn(i,s,s.pendingProps,a),s.child;case 8:return Sn(i,s,s.pendingProps.children,a),s.child;case 12:return Sn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,S=s.memoizedProps,w=m.value,Lt(Cl,f._currentValue),f._currentValue=w,S!==null)if(hi(S.value,w)){if(S.children===m.children&&!bn.current){s=$i(i,s,a);break e}}else for(S=s.child,S!==null&&(S.return=s);S!==null;){var U=S.dependencies;if(U!==null){w=S.child;for(var B=U.firstContext;B!==null;){if(B.context===f){if(S.tag===1){B=Yi(-1,a&-a),B.tag=2;var ae=S.updateQueue;if(ae!==null){ae=ae.shared;var ye=ae.pending;ye===null?B.next=B:(B.next=ye.next,ye.next=B),ae.pending=B}}S.lanes|=a,B=S.alternate,B!==null&&(B.lanes|=a),zf(S.return,a,s),U.lanes|=a;break}B=B.next}}else if(S.tag===10)w=S.type===s.type?null:S.child;else if(S.tag===18){if(w=S.return,w===null)throw Error(t(341));w.lanes|=a,U=w.alternate,U!==null&&(U.lanes|=a),zf(w,a,s),w=S.sibling}else w=S.child;if(w!==null)w.return=S;else for(w=S;w!==null;){if(w===s){w=null;break}if(S=w.sibling,S!==null){S.return=w.return,w=S;break}w=w.return}S=w}Sn(i,s,m.children,a),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,Xs(s,a),m=ni(m),f=f(m),s.flags|=1,Sn(i,s,f,a),s.child;case 14:return f=s.type,m=pi(f,s.pendingProps),m=pi(f.type,m),ug(i,s,f,m,a);case 15:return cg(i,s,s.type,s.pendingProps,a);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:pi(f,m),zl(i,s),s.tag=1,Pn(f)?(i=!0,Sl(s)):i=!1,Xs(s,a),tg(s,f,m),th(s,f,m,a),sh(null,s,f,!0,i,a);case 19:return vg(i,s,a);case 22:return fg(i,s,a)}throw Error(t(156,s.tag))};function Vg(i,s){return q(i,s)}function _S(i,s,a,f){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(i,s,a,f){return new _S(i,s,a,f)}function Th(i){return i=i.prototype,!(!i||!i.isReactComponent)}function vS(i){if(typeof i=="function")return Th(i)?1:0;if(i!=null){if(i=i.$$typeof,i===H)return 11;if(i===ue)return 14}return 2}function Ur(i,s){var a=i.alternate;return a===null?(a=si(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function Kl(i,s,a,f,m,S){var w=2;if(f=i,typeof i=="function")Th(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case I:return as(a.children,m,S,s);case G:w=8,m|=8;break;case L:return i=si(12,a,s,m|2),i.elementType=L,i.lanes=S,i;case Y:return i=si(13,a,s,m),i.elementType=Y,i.lanes=S,i;case ee:return i=si(19,a,s,m),i.elementType=ee,i.lanes=S,i;case le:return Zl(a,m,S,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case C:w=10;break e;case N:w=9;break e;case H:w=11;break e;case ue:w=14;break e;case J:w=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=si(w,a,s,m),s.elementType=i,s.type=f,s.lanes=S,s}function as(i,s,a,f){return i=si(7,i,f,s),i.lanes=a,i}function Zl(i,s,a,f){return i=si(22,i,f,s),i.elementType=le,i.lanes=a,i.stateNode={isHidden:!1},i}function Ah(i,s,a){return i=si(6,i,null,s),i.lanes=a,i}function Ch(i,s,a){return s=si(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function xS(i,s,a,f,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bs(0),this.expirationTimes=bs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bs(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Rh(i,s,a,f,m,S,w,U,B){return i=new xS(i,s,a,U,B),s===1?(s=1,S===!0&&(s|=8)):s=0,S=si(3,null,null,s),i.current=S,S.stateNode=i,S.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(S),i}function yS(i,s,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:f==null?null:""+f,children:i,containerInfo:s,implementation:a}}function Gg(i){if(!i)return Ar;i=i._reactInternals;e:{if(Hi(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Pn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Pn(a))return _m(i,a,s)}return s}function Wg(i,s,a,f,m,S,w,U,B){return i=Rh(a,f,!0,i,m,S,w,U,B),i.context=Gg(null),a=i.current,f=Mn(),m=Nr(a),S=Yi(f,m),S.callback=s??null,br(a,S,m),i.current.lanes=m,Fo(i,m,f),Nn(i,f),i}function Ql(i,s,a,f){var m=s.current,S=Mn(),w=Nr(m);return a=Gg(a),s.context===null?s.context=a:s.pendingContext=a,s=Yi(S,w),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=br(m,s,w),i!==null&&(_i(i,m,w,S),bl(i,m,w)),w}function Jl(i){return i=i.current,i.child?(i.child.tag===5,i.child.stateNode):null}function Xg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function bh(i,s){Xg(i,s),(i=i.alternate)&&Xg(i,s)}function SS(){return null}var jg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Ph(i){this._internalRoot=i}eu.prototype.render=Ph.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Ql(i,s,null,null)},eu.prototype.unmount=Ph.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;rs(function(){Ql(null,i,null,null)}),s[Vi]=null}};function eu(i){this._internalRoot=i}eu.prototype.unstable_scheduleHydration=function(i){if(i){var s=bp();i={blockedOn:null,target:i,priority:s};for(var a=0;a<Sr.length&&s!==0&&s<Sr[a].priority;a++);Sr.splice(a,0,i),a===0&&Dp(i)}};function Lh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function tu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Yg(){}function MS(i,s,a,f,m){if(m){if(typeof f=="function"){var S=f;f=function(){var ae=Jl(w);S.call(ae)}}var w=Wg(s,f,i,0,null,!1,!1,"",Yg);return i._reactRootContainer=w,i[Vi]=w.current,Ko(i.nodeType===8?i.parentNode:i),rs(),w}for(;m=i.lastChild;)i.removeChild(m);if(typeof f=="function"){var U=f;f=function(){var ae=Jl(B);U.call(ae)}}var B=Rh(i,0,!1,null,null,!1,!1,"",Yg);return i._reactRootContainer=B,i[Vi]=B.current,Ko(i.nodeType===8?i.parentNode:i),rs(function(){Ql(s,B,a,f)}),B}function nu(i,s,a,f,m){var S=a._reactRootContainer;if(S){var w=S;if(typeof m=="function"){var U=m;m=function(){var B=Jl(w);U.call(B)}}Ql(s,w,i,m)}else w=MS(a,s,i,m,f);return Jl(w)}Cp=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=Pt(s.pendingLanes);a!==0&&(ef(s,a|1),Nn(s,Pe()),(St&6)===0&&(Ks=Pe()+500,Cr()))}break;case 13:rs(function(){var f=ji(i,1);if(f!==null){var m=Mn();_i(f,i,1,m)}}),bh(i,1)}},tf=function(i){if(i.tag===13){var s=ji(i,134217728);if(s!==null){var a=Mn();_i(s,i,134217728,a)}bh(i,134217728)}},Rp=function(i){if(i.tag===13){var s=Nr(i),a=ji(i,s);if(a!==null){var f=Mn();_i(a,i,s,f)}bh(i,s)}},bp=function(){return At},Pp=function(i,s){var a=At;try{return At=i,s()}finally{At=a}},pe=function(i,s,a){switch(s){case"input":if(bt(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var f=a[s];if(f!==i&&f.form===i.form){var m=xl(f);if(!m)throw Error(t(90));k(f),bt(f,m)}}}break;case"textarea":xe(i,a);break;case"select":s=a.value,s!=null&&R(i,!!a.multiple,s,!1)}},Xt=Mh,yt=rs;var ES={usingClientEntryPoint:!1,Events:[Jo,Os,xl,gt,zt,Mh]},da={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wS={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=se(i),i===null?null:i.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||SS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{tn=iu.inject(wS),ct=iu}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ES,In.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lh(s))throw Error(t(200));return yS(i,s,null,a)},In.createRoot=function(i,s){if(!Lh(i))throw Error(t(299));var a=!1,f="",m=jg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=Rh(i,1,!1,null,null,a,!1,f,m),i[Vi]=s.current,Ko(i.nodeType===8?i.parentNode:i),new Ph(s)},In.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=se(s),i=i===null?null:i.stateNode,i},In.flushSync=function(i){return rs(i)},In.hydrate=function(i,s,a){if(!tu(s))throw Error(t(200));return nu(null,i,s,!0,a)},In.hydrateRoot=function(i,s,a){if(!Lh(i))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,m=!1,S="",w=jg;if(a!=null&&(a.unstable_strictMode===!0&&(m=!0),a.identifierPrefix!==void 0&&(S=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Wg(s,null,i,1,a??null,m,!1,S,w),i[Vi]=s.current,Ko(i),f)for(i=0;i<f.length;i++)a=f[i],m=a._getVersion,m=m(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,m]:s.mutableSourceEagerHydrationData.push(a,m);return new eu(s)},In.render=function(i,s,a){if(!tu(s))throw Error(t(200));return nu(null,i,s,!1,a)},In.unmountComponentAtNode=function(i){if(!tu(i))throw Error(t(40));return i._reactRootContainer?(rs(function(){nu(null,null,i,!1,function(){i._reactRootContainer=null,i[Vi]=null})}),!0):!1},In.unstable_batchedUpdates=Mh,In.unstable_renderSubtreeIntoContainer=function(i,s,a,f){if(!tu(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return nu(i,s,a,!1,f)},In.version="18.3.1-next-f1338f8080-20240426",In}var t_;function IS(){if(t_)return Ih.exports;t_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Ih.exports=NS(),Ih.exports}var n_;function US(){if(n_)return ru;n_=1;var n=IS();return ru.createRoot=n.createRoot,ru.hydrateRoot=n.hydrateRoot,ru}var FS=US();const Ic="168",xs={ROTATE:0,DOLLY:1,PAN:2},_s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},H0=0,gd=1,V0=2,zd=1,G0=2,Di=3,lr=0,xn=1,Ni=2,or=0,Wr=1,Gu=2,_d=3,vd=4,W0=5,Gr=100,X0=101,j0=102,Y0=103,$0=104,q0=200,K0=201,Z0=202,Q0=203,Wu=204,Xu=205,J0=206,ev=207,tv=208,nv=209,iv=210,rv=211,sv=212,ov=213,av=214,lv=0,uv=1,cv=2,Fa=3,fv=4,hv=5,dv=6,pv=7,Uc=0,mv=1,gv=2,ar=0,_v=1,vv=2,xv=3,yv=4,Sv=5,Mv=6,Ev=7,Bd=300,Es=301,ws=302,ju=303,Yu=304,Ya=306,Oa=1e3,ir=1001,$u=1002,An=1003,wv=1004,Ea=1005,Kn=1006,Ou=1007,rr=1008,Oi=1009,Hd=1010,Vd=1011,Eo=1012,Fc=1013,Xr=1014,Ii=1015,Ro=1016,Oc=1017,kc=1018,Ts=1020,Gd=35902,Wd=1021,Xd=1022,ui=1023,jd=1024,Yd=1025,ys=1026,As=1027,$d=1028,zc=1029,qd=1030,Bc=1031,Hc=1033,Ra=33776,ba=33777,Pa=33778,La=33779,qu=35840,Ku=35841,Zu=35842,Qu=35843,Ju=36196,ec=37492,tc=37496,nc=37808,ic=37809,rc=37810,sc=37811,oc=37812,ac=37813,lc=37814,uc=37815,cc=37816,fc=37817,hc=37818,dc=37819,pc=37820,mc=37821,Da=36492,gc=36494,_c=36495,Kd=36283,vc=36284,xc=36285,yc=36286,Tv=3200,Av=3201,Vc=0,Cv=1,Ei="",li="srgb",fr="srgb-linear",Gc="display-p3",$a="display-p3-linear",ka="linear",Dt="srgb",za="rec709",Ba="p3",ps=7680,xd=519,Rv=512,bv=513,Pv=514,Zd=515,Lv=516,Dv=517,Nv=518,Iv=519,yd=35044,Sd="300 es",Ui=2e3,Ha=2001;class Yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let i_=1234567;const Na=Math.PI/180,Va=180/Math.PI;function bo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function vn(n,e,t){return Math.max(e,Math.min(t,n))}function Qd(n,e){return(n%e+e)%e}function OS(n,e,t,r,o){return r+(n-e)*(o-r)/(t-e)}function kS(n,e,t){return n!==e?(t-n)/(e-n):0}function Ia(n,e,t){return(1-t)*n+t*e}function zS(n,e,t,r){return Ia(n,e,1-Math.exp(-t*r))}function BS(n,e=1){return e-Math.abs(Qd(n,e*2)-e)}function HS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function VS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function GS(n,e){return n+Math.floor(Math.random()*(e-n+1))}function WS(n,e){return n+Math.random()*(e-n)}function XS(n){return n*(.5-Math.random())}function jS(n){n!==void 0&&(i_=n);let e=i_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function YS(n){return n*Na}function $S(n){return n*Va}function qS(n){return(n&n-1)===0&&n!==0}function KS(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ZS(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function QS(n,e,t,r,o){const l=Math.cos,u=Math.sin,c=l(t/2),h=u(t/2),d=l((e+r)/2),p=u((e+r)/2),_=l((e-r)/2),g=u((e-r)/2),y=l((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":n.set(c*p,h*_,h*g,c*d);break;case"YZY":n.set(h*g,c*p,h*_,c*d);break;case"ZXZ":n.set(h*_,h*g,c*p,c*d);break;case"XZX":n.set(c*p,h*E,h*y,c*d);break;case"YXY":n.set(h*y,c*p,h*E,c*d);break;case"ZYZ":n.set(h*E,h*y,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function go(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function En(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Wc={DEG2RAD:Na,RAD2DEG:Va,generateUUID:bo,clamp:vn,euclideanModulo:Qd,mapLinear:OS,inverseLerp:kS,lerp:Ia,damp:zS,pingpong:BS,smoothstep:HS,smootherstep:VS,randInt:GS,randFloat:WS,randFloatSpread:XS,seededRandom:jS,degToRad:YS,radToDeg:$S,isPowerOfTwo:qS,ceilPowerOfTwo:KS,floorPowerOfTwo:ZS,setQuaternionFromProperEuler:QS,normalize:En,denormalize:go};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,r,o,l,u,c,h,d){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,h,d)}set(e,t,r,o,l,u,c,h,d){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=l,p[5]=h,p[6]=r,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[3],h=r[6],d=r[1],p=r[4],_=r[7],g=r[2],y=r[5],E=r[8],M=o[0],x=o[3],v=o[6],A=o[1],T=o[4],b=o[7],V=o[2],D=o[5],I=o[8];return l[0]=u*M+c*A+h*V,l[3]=u*x+c*T+h*D,l[6]=u*v+c*b+h*I,l[1]=d*M+p*A+_*V,l[4]=d*x+p*T+_*D,l[7]=d*v+p*b+_*I,l[2]=g*M+y*A+E*V,l[5]=g*x+y*T+E*D,l[8]=g*v+y*b+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-r*l*p+r*c*h+o*l*d-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8],_=p*u-c*d,g=c*h-p*l,y=d*l-u*h,E=t*_+r*g+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=_*M,e[1]=(o*d-p*r)*M,e[2]=(c*r-o*u)*M,e[3]=g*M,e[4]=(p*t-o*h)*M,e[5]=(o*l-c*t)*M,e[6]=y*M,e[7]=(r*h-d*t)*M,e[8]=(u*t-r*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,c){const h=Math.cos(l),d=Math.sin(l);return this.set(r*h,r*d,-r*(h*u+d*c)+u+e,-o*d,o*h,-o*(-d*u+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Oh.makeScale(e,t)),this}rotate(e){return this.premultiply(Oh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oh=new ht;function Uv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fv(){const n=Ga("canvas");return n.style.display="block",n}const r_={};function Ua(n){n in r_||(r_[n]=!0,console.warn(n))}function JS(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const s_=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),o_=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ma={[fr]:{transfer:ka,primaries:za,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[li]:{transfer:Dt,primaries:za,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[$a]:{transfer:ka,primaries:Ba,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(o_),fromReference:n=>n.applyMatrix3(s_)},[Gc]:{transfer:Dt,primaries:Ba,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(o_),fromReference:n=>n.applyMatrix3(s_).convertLinearToSRGB()}},eM=new Set([fr,$a]),wt={enabled:!0,_workingColorSpace:fr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!eM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const r=ma[e].toReference,o=ma[t].fromReference;return o(r(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ma[n].primaries},getTransfer:function(n){return n===Ei?ka:ma[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(ma[e].luminanceCoefficients)}};function So(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function kh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qs;class Ov{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qs===void 0&&(Qs=Ga("canvas")),Qs.width=e.width,Qs.height=e.height;const r=Qs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ga("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=So(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(So(t[r]/255)*255):t[r]=So(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tM=0;class Jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?l.push(zh(o[u].image)):l.push(zh(o[u]))}else l=zh(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function zh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ov.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nM=0;class yn extends Yr{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,r=ir,o=ir,l=Kn,u=rr,c=ui,h=Oi,d=yn.DEFAULT_ANISOTROPY,p=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=bo(),this.name="",this.source=new Jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oa:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case $u:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oa:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case $u:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Bd;yn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,r=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,d=h[0],p=h[4],_=h[8],g=h[1],y=h[5],E=h[9],M=h[2],x=h[6],v=h[10];if(Math.abs(p-g)<.01&&Math.abs(_-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+M)<.1&&Math.abs(E+x)<.1&&Math.abs(d+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(d+1)/2,b=(y+1)/2,V=(v+1)/2,D=(p+g)/4,I=(_+M)/4,G=(E+x)/4;return T>b&&T>V?T<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(T),o=D/r,l=I/r):b>V?b<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),r=D/o,l=G/o):V<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),r=I/l,o=G/l),this.set(r,o,l,t),this}let A=Math.sqrt((x-E)*(x-E)+(_-M)*(_-M)+(g-p)*(g-p));return Math.abs(A)<.001&&(A=1),this.x=(x-E)/A,this.y=(_-M)/A,this.z=(g-p)/A,this.w=Math.acos((d+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kv extends Yr{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new yn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let c=0;c<u;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ur extends kv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ep extends yn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zv extends yn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,c){let h=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];const g=l[u+0],y=l[u+1],E=l[u+2],M=l[u+3];if(c===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(c===1){e[t+0]=g,e[t+1]=y,e[t+2]=E,e[t+3]=M;return}if(_!==M||h!==g||d!==y||p!==E){let x=1-c;const v=h*g+d*y+p*E+_*M,A=v>=0?1:-1,T=1-v*v;if(T>Number.EPSILON){const V=Math.sqrt(T),D=Math.atan2(V,v*A);x=Math.sin(x*D)/V,c=Math.sin(c*D)/V}const b=c*A;if(h=h*x+g*b,d=d*x+y*b,p=p*x+E*b,_=_*x+M*b,x===1-c){const V=1/Math.sqrt(h*h+d*d+p*p+_*_);h*=V,d*=V,p*=V,_*=V}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const c=r[o],h=r[o+1],d=r[o+2],p=r[o+3],_=l[u],g=l[u+1],y=l[u+2],E=l[u+3];return e[t]=c*E+p*_+h*y-d*g,e[t+1]=h*E+p*g+d*_-c*y,e[t+2]=d*E+p*y+c*g-h*_,e[t+3]=p*E-c*_-h*g-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,c=Math.cos,h=Math.sin,d=c(r/2),p=c(o/2),_=c(l/2),g=h(r/2),y=h(o/2),E=h(l/2);switch(u){case"XYZ":this._x=g*p*_+d*y*E,this._y=d*y*_-g*p*E,this._z=d*p*E+g*y*_,this._w=d*p*_-g*y*E;break;case"YXZ":this._x=g*p*_+d*y*E,this._y=d*y*_-g*p*E,this._z=d*p*E-g*y*_,this._w=d*p*_+g*y*E;break;case"ZXY":this._x=g*p*_-d*y*E,this._y=d*y*_+g*p*E,this._z=d*p*E+g*y*_,this._w=d*p*_-g*y*E;break;case"ZYX":this._x=g*p*_-d*y*E,this._y=d*y*_+g*p*E,this._z=d*p*E-g*y*_,this._w=d*p*_+g*y*E;break;case"YZX":this._x=g*p*_+d*y*E,this._y=d*y*_+g*p*E,this._z=d*p*E-g*y*_,this._w=d*p*_-g*y*E;break;case"XZY":this._x=g*p*_-d*y*E,this._y=d*y*_-g*p*E,this._z=d*p*E+g*y*_,this._w=d*p*_+g*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],c=t[5],h=t[9],d=t[2],p=t[6],_=t[10],g=r+c+_;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(p-h)*y,this._y=(l-d)*y,this._z=(u-o)*y}else if(r>c&&r>_){const y=2*Math.sqrt(1+r-c-_);this._w=(p-h)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+d)/y}else if(c>_){const y=2*Math.sqrt(1+c-r-_);this._w=(l-d)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(h+p)/y}else{const y=2*Math.sqrt(1+_-r-c);this._w=(u-o)/y,this._x=(l+d)/y,this._y=(h+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,c=t._x,h=t._y,d=t._z,p=t._w;return this._x=r*p+u*c+o*d-l*h,this._y=o*p+u*h+l*c-r*d,this._z=l*p+u*d+r*h-o*c,this._w=u*p-r*c-o*h-l*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let c=u*e._w+r*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*r+t*this._x,this._y=y*o+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,c),_=Math.sin((1-t)*p)/d,g=Math.sin(t*p)/d;return this._w=u*_+this._w*g,this._x=r*_+this._x*g,this._y=o*_+this._y*g,this._z=l*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(a_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(a_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,c=e.z,h=e.w,d=2*(u*o-c*r),p=2*(c*t-l*o),_=2*(l*r-u*t);return this.x=t+h*d+u*_-c*p,this.y=r+h*p+c*d-l*_,this.z=o+h*_+l*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,c=t.y,h=t.z;return this.x=o*h-l*c,this.y=l*u-r*h,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bh.copy(this).projectOnVector(e),this.sub(Bh)}reflect(e){return this.sub(Bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bh=new $,a_=new jr;class Po{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,vi):vi.fromBufferAttribute(l,u),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),su.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),su.copy(r.boundingBox)),su.applyMatrix4(e.matrixWorld),this.union(su)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),ou.subVectors(this.max,ga),Js.subVectors(e.a,ga),eo.subVectors(e.b,ga),to.subVectors(e.c,ga),Or.subVectors(eo,Js),kr.subVectors(to,eo),ls.subVectors(Js,to);let t=[0,-Or.z,Or.y,0,-kr.z,kr.y,0,-ls.z,ls.y,Or.z,0,-Or.x,kr.z,0,-kr.x,ls.z,0,-ls.x,-Or.y,Or.x,0,-kr.y,kr.x,0,-ls.y,ls.x,0];return!Hh(t,Js,eo,to,ou)||(t=[1,0,0,0,1,0,0,0,1],!Hh(t,Js,eo,to,ou))?!1:(au.crossVectors(Or,kr),t=[au.x,au.y,au.z],Hh(t,Js,eo,to,ou))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new $,new $,new $,new $,new $,new $,new $,new $],vi=new $,su=new Po,Js=new $,eo=new $,to=new $,Or=new $,kr=new $,ls=new $,ga=new $,ou=new $,au=new $,us=new $;function Hh(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){us.fromArray(n,l);const c=o.x*Math.abs(us.x)+o.y*Math.abs(us.y)+o.z*Math.abs(us.z),h=e.dot(us),d=t.dot(us),p=r.dot(us);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>c)return!1}return!0}const iM=new Po,_a=new $,Vh=new $;class Lo{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):iM.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const t=_a.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(_a,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Vh)),this.expandByPoint(_a.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new $,Gh=new $,lu=new $,zr=new $,Wh=new $,uu=new $,Xh=new $;class qa{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Gh.copy(e).add(t).multiplyScalar(.5),lu.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(Gh);const l=e.distanceTo(t)*.5,u=-this.direction.dot(lu),c=zr.dot(this.direction),h=-zr.dot(lu),d=zr.lengthSq(),p=Math.abs(1-u*u);let _,g,y,E;if(p>0)if(_=u*h-c,g=u*c-h,E=l*p,_>=0)if(g>=-E)if(g<=E){const M=1/p;_*=M,g*=M,y=_*(_+u*g+2*c)+g*(u*_+g+2*h)+d}else g=l,_=Math.max(0,-(u*g+c)),y=-_*_+g*(g+2*h)+d;else g=-l,_=Math.max(0,-(u*g+c)),y=-_*_+g*(g+2*h)+d;else g<=-E?(_=Math.max(0,-(-u*l+c)),g=_>0?-l:Math.min(Math.max(-l,-h),l),y=-_*_+g*(g+2*h)+d):g<=E?(_=0,g=Math.min(Math.max(-l,-h),l),y=g*(g+2*h)+d):(_=Math.max(0,-(u*l+c)),g=_>0?l:Math.min(Math.max(-l,-h),l),y=-_*_+g*(g+2*h)+d);else g=u>0?-l:l,_=Math.max(0,-(u*g+c)),y=-_*_+g*(g+2*h)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Gh).addScaledVector(lu,g),y}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),o=Zi.dot(Zi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),c=r-u,h=r+u;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,c,h;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return d>=0?(r=(e.min.x-g.x)*d,o=(e.max.x-g.x)*d):(r=(e.max.x-g.x)*d,o=(e.min.x-g.x)*d),p>=0?(l=(e.min.y-g.y)*p,u=(e.max.y-g.y)*p):(l=(e.max.y-g.y)*p,u=(e.min.y-g.y)*p),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(c=(e.min.z-g.z)*_,h=(e.max.z-g.z)*_):(c=(e.max.z-g.z)*_,h=(e.min.z-g.z)*_),r>h||c>o)||((c>r||r!==r)&&(r=c),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,r,o,l){Wh.subVectors(t,e),uu.subVectors(r,e),Xh.crossVectors(Wh,uu);let u=this.direction.dot(Xh),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;zr.subVectors(this.origin,e);const h=c*this.direction.dot(uu.crossVectors(zr,uu));if(h<0)return null;const d=c*this.direction.dot(Wh.cross(zr));if(d<0||h+d>u)return null;const p=-c*zr.dot(Xh);return p<0?null:this.at(p/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,r,o,l,u,c,h,d,p,_,g,y,E,M,x){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,h,d,p,_,g,y,E,M,x)}set(e,t,r,o,l,u,c,h,d,p,_,g,y,E,M,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=c,v[13]=h,v[2]=d,v[6]=p,v[10]=_,v[14]=g,v[3]=y,v[7]=E,v[11]=M,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/no.setFromMatrixColumn(e,0).length(),l=1/no.setFromMatrixColumn(e,1).length(),u=1/no.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),c=Math.sin(r),h=Math.cos(o),d=Math.sin(o),p=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=u*p,y=u*_,E=c*p,M=c*_;t[0]=h*p,t[4]=-h*_,t[8]=d,t[1]=y+E*d,t[5]=g-M*d,t[9]=-c*h,t[2]=M-g*d,t[6]=E+y*d,t[10]=u*h}else if(e.order==="YXZ"){const g=h*p,y=h*_,E=d*p,M=d*_;t[0]=g+M*c,t[4]=E*c-y,t[8]=u*d,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=y*c-E,t[6]=M+g*c,t[10]=u*h}else if(e.order==="ZXY"){const g=h*p,y=h*_,E=d*p,M=d*_;t[0]=g-M*c,t[4]=-u*_,t[8]=E+y*c,t[1]=y+E*c,t[5]=u*p,t[9]=M-g*c,t[2]=-u*d,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const g=u*p,y=u*_,E=c*p,M=c*_;t[0]=h*p,t[4]=E*d-y,t[8]=g*d+M,t[1]=h*_,t[5]=M*d+g,t[9]=y*d-E,t[2]=-d,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,y=u*d,E=c*h,M=c*d;t[0]=h*p,t[4]=M-g*_,t[8]=E*_+y,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=y*_+E,t[10]=g-M*_}else if(e.order==="XZY"){const g=u*h,y=u*d,E=c*h,M=c*d;t[0]=h*p,t[4]=-_,t[8]=d*p,t[1]=g*_+M,t[5]=u*p,t[9]=y*_-E,t[2]=E*_-y,t[6]=c*p,t[10]=M*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rM,e,sM)}lookAt(e,t,r){const o=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Br.crossVectors(r,Yn),Br.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Br.crossVectors(r,Yn)),Br.normalize(),cu.crossVectors(Yn,Br),o[0]=Br.x,o[4]=cu.x,o[8]=Yn.x,o[1]=Br.y,o[5]=cu.y,o[9]=Yn.y,o[2]=Br.z,o[6]=cu.z,o[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[4],h=r[8],d=r[12],p=r[1],_=r[5],g=r[9],y=r[13],E=r[2],M=r[6],x=r[10],v=r[14],A=r[3],T=r[7],b=r[11],V=r[15],D=o[0],I=o[4],G=o[8],L=o[12],C=o[1],N=o[5],H=o[9],Y=o[13],ee=o[2],ue=o[6],J=o[10],le=o[14],z=o[3],he=o[7],ne=o[11],O=o[15];return l[0]=u*D+c*C+h*ee+d*z,l[4]=u*I+c*N+h*ue+d*he,l[8]=u*G+c*H+h*J+d*ne,l[12]=u*L+c*Y+h*le+d*O,l[1]=p*D+_*C+g*ee+y*z,l[5]=p*I+_*N+g*ue+y*he,l[9]=p*G+_*H+g*J+y*ne,l[13]=p*L+_*Y+g*le+y*O,l[2]=E*D+M*C+x*ee+v*z,l[6]=E*I+M*N+x*ue+v*he,l[10]=E*G+M*H+x*J+v*ne,l[14]=E*L+M*Y+x*le+v*O,l[3]=A*D+T*C+b*ee+V*z,l[7]=A*I+T*N+b*ue+V*he,l[11]=A*G+T*H+b*J+V*ne,l[15]=A*L+T*Y+b*le+V*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],c=e[5],h=e[9],d=e[13],p=e[2],_=e[6],g=e[10],y=e[14],E=e[3],M=e[7],x=e[11],v=e[15];return E*(+l*h*_-o*d*_-l*c*g+r*d*g+o*c*y-r*h*y)+M*(+t*h*y-t*d*g+l*u*g-o*u*y+o*d*p-l*h*p)+x*(+t*d*_-t*c*y-l*u*_+r*u*y+l*c*p-r*d*p)+v*(-o*c*p-t*h*_+t*c*g+o*u*_-r*u*g+r*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8],_=e[9],g=e[10],y=e[11],E=e[12],M=e[13],x=e[14],v=e[15],A=_*x*d-M*g*d+M*h*y-c*x*y-_*h*v+c*g*v,T=E*g*d-p*x*d-E*h*y+u*x*y+p*h*v-u*g*v,b=p*M*d-E*_*d+E*c*y-u*M*y-p*c*v+u*_*v,V=E*_*h-p*M*h-E*c*g+u*M*g+p*c*x-u*_*x,D=t*A+r*T+o*b+l*V;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=A*I,e[1]=(M*g*l-_*x*l-M*o*y+r*x*y+_*o*v-r*g*v)*I,e[2]=(c*x*l-M*h*l+M*o*d-r*x*d-c*o*v+r*h*v)*I,e[3]=(_*h*l-c*g*l-_*o*d+r*g*d+c*o*y-r*h*y)*I,e[4]=T*I,e[5]=(p*x*l-E*g*l+E*o*y-t*x*y-p*o*v+t*g*v)*I,e[6]=(E*h*l-u*x*l-E*o*d+t*x*d+u*o*v-t*h*v)*I,e[7]=(u*g*l-p*h*l+p*o*d-t*g*d-u*o*y+t*h*y)*I,e[8]=b*I,e[9]=(E*_*l-p*M*l-E*r*y+t*M*y+p*r*v-t*_*v)*I,e[10]=(u*M*l-E*c*l+E*r*d-t*M*d-u*r*v+t*c*v)*I,e[11]=(p*c*l-u*_*l-p*r*d+t*_*d+u*r*y-t*c*y)*I,e[12]=V*I,e[13]=(p*M*o-E*_*o+E*r*g-t*M*g-p*r*x+t*_*x)*I,e[14]=(E*c*o-u*M*o-E*r*h+t*M*h+u*r*x-t*c*x)*I,e[15]=(u*_*o-p*c*o+p*r*h-t*_*h-u*r*g+t*c*g)*I,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,c=e.y,h=e.z,d=l*u,p=l*c;return this.set(d*u+r,d*c-o*h,d*h+o*c,0,d*c+o*h,p*c+r,p*h-o*u,0,d*h-o*c,p*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,c=t._z,h=t._w,d=l+l,p=u+u,_=c+c,g=l*d,y=l*p,E=l*_,M=u*p,x=u*_,v=c*_,A=h*d,T=h*p,b=h*_,V=r.x,D=r.y,I=r.z;return o[0]=(1-(M+v))*V,o[1]=(y+b)*V,o[2]=(E-T)*V,o[3]=0,o[4]=(y-b)*D,o[5]=(1-(g+v))*D,o[6]=(x+A)*D,o[7]=0,o[8]=(E+T)*I,o[9]=(x-A)*I,o[10]=(1-(g+M))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=no.set(o[0],o[1],o[2]).length();const u=no.set(o[4],o[5],o[6]).length(),c=no.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],xi.copy(this);const d=1/l,p=1/u,_=1/c;return xi.elements[0]*=d,xi.elements[1]*=d,xi.elements[2]*=d,xi.elements[4]*=p,xi.elements[5]*=p,xi.elements[6]*=p,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,t.setFromRotationMatrix(xi),r.x=l,r.y=u,r.z=c,this}makePerspective(e,t,r,o,l,u,c=Ui){const h=this.elements,d=2*l/(t-e),p=2*l/(r-o),_=(t+e)/(t-e),g=(r+o)/(r-o);let y,E;if(c===Ui)y=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(c===Ha)y=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=p,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,c=Ui){const h=this.elements,d=1/(t-e),p=1/(r-o),_=1/(u-l),g=(t+e)*d,y=(r+o)*p;let E,M;if(c===Ui)E=(u+l)*_,M=-2*_;else if(c===Ha)E=l*_,M=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-g,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=M,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const no=new $,xi=new kt,rM=new $(0,0,0),sM=new $(1,1,1),Br=new $,cu=new $,Yn=new $,l_=new kt,u_=new jr;class ci{constructor(e=0,t=0,r=0,o=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],c=o[8],h=o[1],d=o[5],p=o[9],_=o[2],g=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(vn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(vn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(vn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return l_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(l_,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return u_.setFromEuler(this),this.setFromQuaternion(u_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class tp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oM=0;const c_=new $,io=new jr,Qi=new kt,fu=new $,va=new $,aM=new $,lM=new jr,f_=new $(1,0,0),h_=new $(0,1,0),d_=new $(0,0,1),p_={type:"added"},uM={type:"removed"},ro={type:"childadded",child:null},jh={type:"childremoved",child:null};class qt extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new $,t=new ci,r=new jr,o=new $(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new kt},normalMatrix:{value:new ht}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.multiply(io),this}rotateOnWorldAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.premultiply(io),this}rotateX(e){return this.rotateOnAxis(f_,e)}rotateY(e){return this.rotateOnAxis(h_,e)}rotateZ(e){return this.rotateOnAxis(d_,e)}translateOnAxis(e,t){return c_.copy(e).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(f_,e)}translateY(e){return this.translateOnAxis(h_,e)}translateZ(e){return this.translateOnAxis(d_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?fu.copy(e):fu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(va,fu,this.up):Qi.lookAt(fu,va,this.up),this.quaternion.setFromRotationMatrix(Qi),o&&(Qi.extractRotation(o.matrixWorld),io.setFromRotationMatrix(Qi),this.quaternion.premultiply(io.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(p_),ro.child=e,this.dispatchEvent(ro),ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uM),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(p_),ro.child=e,this.dispatchEvent(ro),ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,aM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,lM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const _=h[d];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(l(e.materials,this.material[h]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];o.animations.push(l(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),d=u(e.textures),p=u(e.images),_=u(e.shapes),g=u(e.skeletons),y=u(e.animations),E=u(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),d.length>0&&(r.textures=d),p.length>0&&(r.images=p),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}qt.DEFAULT_UP=new $(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new $,Ji=new $,Yh=new $,er=new $,so=new $,oo=new $,m_=new $,$h=new $,qh=new $,Kh=new $;class wi{constructor(e=new $,t=new $,r=new $){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),yi.subVectors(e,t),o.cross(yi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){yi.subVectors(o,t),Ji.subVectors(r,t),Yh.subVectors(e,t);const u=yi.dot(yi),c=yi.dot(Ji),h=yi.dot(Yh),d=Ji.dot(Ji),p=Ji.dot(Yh),_=u*d-c*c;if(_===0)return l.set(0,0,0),null;const g=1/_,y=(d*h-c*p)*g,E=(u*p-c*h)*g;return l.set(1-y-E,E,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,r,o,l,u,c,h){return this.getBarycoord(e,t,r,o,er)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,er.x),h.addScaledVector(u,er.y),h.addScaledVector(c,er.z),h)}static isFrontFacing(e,t,r,o){return yi.subVectors(r,t),Ji.subVectors(e,t),yi.cross(Ji).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),yi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return wi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,c;so.subVectors(o,r),oo.subVectors(l,r),$h.subVectors(e,r);const h=so.dot($h),d=oo.dot($h);if(h<=0&&d<=0)return t.copy(r);qh.subVectors(e,o);const p=so.dot(qh),_=oo.dot(qh);if(p>=0&&_<=p)return t.copy(o);const g=h*_-p*d;if(g<=0&&h>=0&&p<=0)return u=h/(h-p),t.copy(r).addScaledVector(so,u);Kh.subVectors(e,l);const y=so.dot(Kh),E=oo.dot(Kh);if(E>=0&&y<=E)return t.copy(l);const M=y*d-h*E;if(M<=0&&d>=0&&E<=0)return c=d/(d-E),t.copy(r).addScaledVector(oo,c);const x=p*E-y*_;if(x<=0&&_-p>=0&&y-E>=0)return m_.subVectors(l,o),c=(_-p)/(_-p+(y-E)),t.copy(o).addScaledVector(m_,c);const v=1/(x+M+g);return u=M*v,c=g*v,t.copy(r).addScaledVector(so,u).addScaledVector(oo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},hu={h:0,s:0,l:0};function Zh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let We=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=wt.workingColorSpace){if(e=Qd(e,1),t=vn(t,0,1),r=vn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Zh(u,l,e+1/3),this.g=Zh(u,l,e),this.b=Zh(u,l,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,t=li){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){const r=Bv[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}copyLinearToSRGB(e){return this.r=kh(e.r),this.g=kh(e.g),this.b=kh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return wt.fromWorkingColorSpace(gn.copy(this),e),Math.round(vn(gn.r*255,0,255))*65536+Math.round(vn(gn.g*255,0,255))*256+Math.round(vn(gn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(gn.copy(this),t);const r=gn.r,o=gn.g,l=gn.b,u=Math.max(r,o,l),c=Math.min(r,o,l);let h,d;const p=(c+u)/2;if(c===u)h=0,d=0;else{const _=u-c;switch(d=p<=.5?_/(u+c):_/(2-u-c),u){case r:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-r)/_+2;break;case l:h=(r-o)/_+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=li){wt.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,r=gn.g,o=gn.b;return e!==li?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(hu);const r=Ia(Hr.h,hu.h,t),o=Ia(Hr.s,hu.s,t),l=Ia(Hr.l,hu.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const gn=new We;We.NAMES=Bv;let cM=0;class hr extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=Wr,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=Xu,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(r.blending=this.blending),this.side!==lr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wu&&(r.blendSrc=this.blendSrc),this.blendDst!==Xu&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xd&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const c in l){const h=l[c];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class np extends hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new $,du=new ot;class Gt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=yd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ua("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)du.fromBufferAttribute(this,t),du.applyMatrix3(e),this.setXY(t,du.x,du.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=go(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=En(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=go(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=go(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=go(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),r=En(r,this.array),o=En(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),r=En(r,this.array),o=En(o,this.array),l=En(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yd&&(e.usage=this.usage),e}}class ip extends Gt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class rp extends Gt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class kn extends Gt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let fM=0;const oi=new kt,Qh=new qt,ao=new $,$n=new Po,xa=new Po,an=new $;class cn extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uv(e)?rp:ip)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ht().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,r){return oi.makeTranslation(e,t,r),this.applyMatrix4(oi),this}scale(e,t,r){return oi.makeScale(e,t,r),this.applyMatrix4(oi),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const t=[];for(let r=0,o=e.length;r<o;r++){const l=e[r];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new kn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];$n.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];xa.setFromBufferAttribute(c),this.morphTargetsRelative?(an.addVectors($n.min,xa.min),$n.expandByPoint(an),an.addVectors($n.max,xa.max),$n.expandByPoint(an)):($n.expandByPoint(xa.min),$n.expandByPoint(xa.max))}$n.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)an.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(an));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],h=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)an.fromBufferAttribute(c,d),h&&(ao.fromBufferAttribute(e,d),an.add(ao)),o=Math.max(o,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],h=[];for(let G=0;G<r.count;G++)c[G]=new $,h[G]=new $;const d=new $,p=new $,_=new $,g=new ot,y=new ot,E=new ot,M=new $,x=new $;function v(G,L,C){d.fromBufferAttribute(r,G),p.fromBufferAttribute(r,L),_.fromBufferAttribute(r,C),g.fromBufferAttribute(l,G),y.fromBufferAttribute(l,L),E.fromBufferAttribute(l,C),p.sub(d),_.sub(d),y.sub(g),E.sub(g);const N=1/(y.x*E.y-E.x*y.y);isFinite(N)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(N),x.copy(_).multiplyScalar(y.x).addScaledVector(p,-E.x).multiplyScalar(N),c[G].add(M),c[L].add(M),c[C].add(M),h[G].add(x),h[L].add(x),h[C].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let G=0,L=A.length;G<L;++G){const C=A[G],N=C.start,H=C.count;for(let Y=N,ee=N+H;Y<ee;Y+=3)v(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const T=new $,b=new $,V=new $,D=new $;function I(G){V.fromBufferAttribute(o,G),D.copy(V);const L=c[G];T.copy(L),T.sub(V.multiplyScalar(V.dot(L))).normalize(),b.crossVectors(D,L);const N=b.dot(h[G])<0?-1:1;u.setXYZW(G,T.x,T.y,T.z,N)}for(let G=0,L=A.length;G<L;++G){const C=A[G],N=C.start,H=C.count;for(let Y=N,ee=N+H;Y<ee;Y+=3)I(e.getX(Y+0)),I(e.getX(Y+1)),I(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const o=new $,l=new $,u=new $,c=new $,h=new $,d=new $,p=new $,_=new $;if(e)for(let g=0,y=e.count;g<y;g+=3){const E=e.getX(g+0),M=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),u.fromBufferAttribute(t,x),p.subVectors(u,l),_.subVectors(o,l),p.cross(_),c.fromBufferAttribute(r,E),h.fromBufferAttribute(r,M),d.fromBufferAttribute(r,x),c.add(p),h.add(p),d.add(p),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(x,d.x,d.y,d.z)}else for(let g=0,y=t.count;g<y;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),p.subVectors(u,l),_.subVectors(o,l),p.cross(_),r.setXYZ(g+0,p.x,p.y,p.z),r.setXYZ(g+1,p.x,p.y,p.z),r.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(c,h){const d=c.array,p=c.itemSize,_=c.normalized,g=new d.constructor(h.length*p);let y=0,E=0;for(let M=0,x=h.length;M<x;M++){c.isInterleavedBufferAttribute?y=h[M]*c.data.stride+c.offset:y=h[M]*p;for(let v=0;v<p;v++)g[E++]=d[y++]}return new Gt(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,r=this.index.array,o=this.attributes;for(const c in o){const h=o[c],d=e(h,r);t.setAttribute(c,d)}const l=this.morphAttributes;for(const c in l){const h=[],d=l[c];for(let p=0,_=d.length;p<_;p++){const g=d[p],y=e(g,r);h.push(y)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const d=r[h];e.data.attributes[h]=d.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let _=0,g=d.length;_<g;_++){const y=d[_];p.push(y.toJSON(e.data))}p.length>0&&(o[h]=p,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const d in o){const p=o[d];this.setAttribute(d,p.clone(t))}const l=e.morphAttributes;for(const d in l){const p=[],_=l[d];for(let g=0,y=_.length;g<y;g++)p.push(_[g].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const g_=new kt,cs=new qa,pu=new Lo,__=new $,lo=new $,uo=new $,co=new $,Jh=new $,mu=new $,gu=new ot,_u=new ot,vu=new ot,v_=new $,x_=new $,y_=new $,xu=new $,yu=new $;class Zn extends qt{constructor(e=new cn,t=new np){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){mu.set(0,0,0);for(let h=0,d=l.length;h<d;h++){const p=c[h],_=l[h];p!==0&&(Jh.fromBufferAttribute(_,e),u?mu.addScaledVector(Jh,p):mu.addScaledVector(Jh.sub(t),p))}t.add(mu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pu.copy(r.boundingSphere),pu.applyMatrix4(l),cs.copy(e.ray).recast(e.near),!(pu.containsPoint(cs.origin)===!1&&(cs.intersectSphere(pu,__)===null||cs.origin.distanceToSquared(__)>(e.far-e.near)**2))&&(g_.copy(l).invert(),cs.copy(e.ray).applyMatrix4(g_),!(r.boundingBox!==null&&cs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,c=l.index,h=l.attributes.position,d=l.attributes.uv,p=l.attributes.uv1,_=l.attributes.normal,g=l.groups,y=l.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const x=g[E],v=u[x.materialIndex],A=Math.max(x.start,y.start),T=Math.min(c.count,Math.min(x.start+x.count,y.start+y.count));for(let b=A,V=T;b<V;b+=3){const D=c.getX(b),I=c.getX(b+1),G=c.getX(b+2);o=Su(this,v,e,r,d,p,_,D,I,G),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),M=Math.min(c.count,y.start+y.count);for(let x=E,v=M;x<v;x+=3){const A=c.getX(x),T=c.getX(x+1),b=c.getX(x+2);o=Su(this,u,e,r,d,p,_,A,T,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const x=g[E],v=u[x.materialIndex],A=Math.max(x.start,y.start),T=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let b=A,V=T;b<V;b+=3){const D=b,I=b+1,G=b+2;o=Su(this,v,e,r,d,p,_,D,I,G),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),M=Math.min(h.count,y.start+y.count);for(let x=E,v=M;x<v;x+=3){const A=x,T=x+1,b=x+2;o=Su(this,u,e,r,d,p,_,A,T,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function hM(n,e,t,r,o,l,u,c){let h;if(e.side===xn?h=r.intersectTriangle(u,l,o,!0,c):h=r.intersectTriangle(o,l,u,e.side===lr,c),h===null)return null;yu.copy(c),yu.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(yu);return d<t.near||d>t.far?null:{distance:d,point:yu.clone(),object:n}}function Su(n,e,t,r,o,l,u,c,h,d){n.getVertexPosition(c,lo),n.getVertexPosition(h,uo),n.getVertexPosition(d,co);const p=hM(n,e,t,r,lo,uo,co,xu);if(p){o&&(gu.fromBufferAttribute(o,c),_u.fromBufferAttribute(o,h),vu.fromBufferAttribute(o,d),p.uv=wi.getInterpolation(xu,lo,uo,co,gu,_u,vu,new ot)),l&&(gu.fromBufferAttribute(l,c),_u.fromBufferAttribute(l,h),vu.fromBufferAttribute(l,d),p.uv1=wi.getInterpolation(xu,lo,uo,co,gu,_u,vu,new ot)),u&&(v_.fromBufferAttribute(u,c),x_.fromBufferAttribute(u,h),y_.fromBufferAttribute(u,d),p.normal=wi.getInterpolation(xu,lo,uo,co,v_,x_,y_,new $),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:h,c:d,normal:new $,materialIndex:0};wi.getNormal(lo,uo,co,_.normal),p.face=_}return p}class Do extends cn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const c=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],d=[],p=[],_=[];let g=0,y=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new kn(d,3)),this.setAttribute("normal",new kn(p,3)),this.setAttribute("uv",new kn(_,2));function E(M,x,v,A,T,b,V,D,I,G,L){const C=b/I,N=V/G,H=b/2,Y=V/2,ee=D/2,ue=I+1,J=G+1;let le=0,z=0;const he=new $;for(let ne=0;ne<J;ne++){const O=ne*N-Y;for(let re=0;re<ue;re++){const be=re*C-H;he[M]=be*A,he[x]=O*T,he[v]=ee,d.push(he.x,he.y,he.z),he[M]=0,he[x]=0,he[v]=D>0?1:-1,p.push(he.x,he.y,he.z),_.push(re/I),_.push(1-ne/G),le+=1}}for(let ne=0;ne<G;ne++)for(let O=0;O<I;O++){const re=g+O+ue*ne,be=g+O+ue*(ne+1),Q=g+(O+1)+ue*(ne+1),K=g+(O+1)+ue*ne;h.push(re,be,K),h.push(be,Q,K),z+=6}c.addGroup(y,z,L),y+=z,g+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function wn(n){const e={};for(let t=0;t<n.length;t++){const r=wo(n[t]);for(const o in r)e[o]=r[o]}return e}function dM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Vv={clone:wo,merge:wn};var pM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pM,this.fragmentShader=mM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=dM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class sp extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vr=new $,S_=new ot,M_=new ot;class qn extends sp{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,S_,M_),t.subVectors(M_,S_)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Na*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,d=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/d,o*=u.width/h,r*=u.height/d}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fo=-90,ho=1;class Gv extends qt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new qn(fo,ho,e,t);o.layers=this.layers,this.add(o);const l=new qn(fo,ho,e,t);l.layers=this.layers,this.add(l);const u=new qn(fo,ho,e,t);u.layers=this.layers,this.add(u);const c=new qn(fo,ho,e,t);c.layers=this.layers,this.add(c);const h=new qn(fo,ho,e,t);h.layers=this.layers,this.add(h);const d=new qn(fo,ho,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,c,h]=t;for(const d of t)this.remove(d);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ha)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,h,d,p]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,c),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,d),r.texture.generateMipmaps=M,e.setRenderTarget(r,5,o),e.render(t,p),e.setRenderTarget(_,g,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class op extends yn{constructor(e,t,r,o,l,u,c,h,d,p){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,r,o,l,u,c,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wv extends ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new op(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Do(5,5,5),l=new Jn({name:"CubemapFromEquirect",uniforms:wo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:xn,blending:or});l.uniforms.tEquirect.value=t;const u=new Zn(o,l),c=t.minFilter;return t.minFilter===rr&&(t.minFilter=Kn),new Gv(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const ed=new $,gM=new $,_M=new ht;class nr{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ed.subVectors(r,t).cross(gM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ed),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||_M.getNormalMatrix(e),o=this.coplanarPoint(ed).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new Lo,Mu=new $;class Xc{constructor(e=new nr,t=new nr,r=new nr,o=new nr,l=new nr,u=new nr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ui){const r=this.planes,o=e.elements,l=o[0],u=o[1],c=o[2],h=o[3],d=o[4],p=o[5],_=o[6],g=o[7],y=o[8],E=o[9],M=o[10],x=o[11],v=o[12],A=o[13],T=o[14],b=o[15];if(r[0].setComponents(h-l,g-d,x-y,b-v).normalize(),r[1].setComponents(h+l,g+d,x+y,b+v).normalize(),r[2].setComponents(h+u,g+p,x+E,b+A).normalize(),r[3].setComponents(h-u,g-p,x-E,b-A).normalize(),r[4].setComponents(h-c,g-_,x-M,b-T).normalize(),t===Ui)r[5].setComponents(h+c,g+_,x+M,b+T).normalize();else if(t===Ha)r[5].setComponents(c,_,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Mu.x=o.normal.x>0?e.max.x:e.min.x,Mu.y=o.normal.y>0?e.max.y:e.min.y,Mu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Mu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xv(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function vM(n){const e=new WeakMap;function t(c,h){const d=c.array,p=c.usage,_=d.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,d,p),c.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:_}}function r(c,h,d){const p=h.array,_=h._updateRange,g=h.updateRanges;if(n.bindBuffer(d,c),_.count===-1&&g.length===0&&n.bufferSubData(d,0,p),g.length!==0){for(let y=0,E=g.length;y<E;y++){const M=g[y];n.bufferSubData(d,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}h.clearUpdateRanges()}_.count!==-1&&(n.bufferSubData(d,_.offset*p.BYTES_PER_ELEMENT,p,_.offset,_.count),_.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(n.deleteBuffer(h.buffer),e.delete(c))}function u(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:l,update:u}}class Ka extends cn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,c=Math.floor(r),h=Math.floor(o),d=c+1,p=h+1,_=e/c,g=t/h,y=[],E=[],M=[],x=[];for(let v=0;v<p;v++){const A=v*g-u;for(let T=0;T<d;T++){const b=T*_-l;E.push(b,-A,0),M.push(0,0,1),x.push(T/c),x.push(1-v/h)}}for(let v=0;v<h;v++)for(let A=0;A<c;A++){const T=A+d*v,b=A+d*(v+1),V=A+1+d*(v+1),D=A+1+d*v;y.push(T,b,D),y.push(b,V,D)}this.setIndex(y),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(M,3)),this.setAttribute("uv",new kn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var xM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yM=`#ifdef USE_ALPHAHASH
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
#endif`,SM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TM=`#ifdef USE_AOMAP
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
#endif`,AM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CM=`#ifdef USE_BATCHING
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
#endif`,RM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DM=`#ifdef USE_IRIDESCENCE
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
#endif`,NM=`#ifdef USE_BUMPMAP
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
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,VM=`#define PI 3.141592653589793
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
} // validated`,GM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WM=`vec3 transformedNormal = objectNormal;
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
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qM="gl_FragColor = linearToOutputTexel( gl_FragColor );",KM=`
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
}`,ZM=`#ifdef USE_ENVMAP
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
#endif`,QM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JM=`#ifdef USE_ENVMAP
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
#endif`,eE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
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
#endif`,nE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oE=`#ifdef USE_GRADIENTMAP
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
}`,aE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cE=`uniform bool receiveShadow;
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
#endif`,fE=`#ifdef USE_ENVMAP
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
#endif`,hE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gE=`PhysicalMaterial material;
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
#endif`,_E=`struct PhysicalMaterial {
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
}`,vE=`
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
#endif`,xE=`#if defined( RE_IndirectDiffuse )
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
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ME=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RE=`#if defined( USE_POINTS_UV )
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
#endif`,bE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`#ifdef USE_MORPHTARGETS
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
#endif`,UE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HE=`#ifdef USE_NORMALMAP
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
#endif`,VE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ew=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iw=`float getShadowMask() {
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
}`,rw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sw=`#ifdef USE_SKINNING
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
#endif`,ow=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aw=`#ifdef USE_SKINNING
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
#endif`,lw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hw=`#ifdef USE_TRANSMISSION
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
#endif`,dw=`#ifdef USE_TRANSMISSION
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
#endif`,pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_w=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xw=`uniform sampler2D t2D;
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
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ew=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`#include <common>
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
}`,Tw=`#if DEPTH_PACKING == 3200
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
}`,Aw=`#define DISTANCE
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
}`,Cw=`#define DISTANCE
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
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pw=`uniform float scale;
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
}`,Lw=`uniform vec3 diffuse;
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
}`,Dw=`#include <common>
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
}`,Nw=`uniform vec3 diffuse;
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
}`,Iw=`#define LAMBERT
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
}`,Uw=`#define LAMBERT
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
}`,Fw=`#define MATCAP
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
}`,Ow=`#define MATCAP
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
}`,kw=`#define NORMAL
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
}`,zw=`#define NORMAL
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
}`,Bw=`#define PHONG
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
}`,Hw=`#define PHONG
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
}`,Vw=`#define STANDARD
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
}`,Gw=`#define STANDARD
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
}`,Ww=`#define TOON
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
}`,Xw=`#define TOON
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
}`,jw=`uniform float size;
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
}`,Yw=`uniform vec3 diffuse;
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
}`,$w=`#include <common>
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
}`,qw=`uniform vec3 color;
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
}`,Kw=`uniform float rotation;
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
}`,Zw=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:xM,alphahash_pars_fragment:yM,alphamap_fragment:SM,alphamap_pars_fragment:MM,alphatest_fragment:EM,alphatest_pars_fragment:wM,aomap_fragment:TM,aomap_pars_fragment:AM,batching_pars_vertex:CM,batching_vertex:RM,begin_vertex:bM,beginnormal_vertex:PM,bsdfs:LM,iridescence_fragment:DM,bumpmap_pars_fragment:NM,clipping_planes_fragment:IM,clipping_planes_pars_fragment:UM,clipping_planes_pars_vertex:FM,clipping_planes_vertex:OM,color_fragment:kM,color_pars_fragment:zM,color_pars_vertex:BM,color_vertex:HM,common:VM,cube_uv_reflection_fragment:GM,defaultnormal_vertex:WM,displacementmap_pars_vertex:XM,displacementmap_vertex:jM,emissivemap_fragment:YM,emissivemap_pars_fragment:$M,colorspace_fragment:qM,colorspace_pars_fragment:KM,envmap_fragment:ZM,envmap_common_pars_fragment:QM,envmap_pars_fragment:JM,envmap_pars_vertex:eE,envmap_physical_pars_fragment:fE,envmap_vertex:tE,fog_vertex:nE,fog_pars_vertex:iE,fog_fragment:rE,fog_pars_fragment:sE,gradientmap_pars_fragment:oE,lightmap_pars_fragment:aE,lights_lambert_fragment:lE,lights_lambert_pars_fragment:uE,lights_pars_begin:cE,lights_toon_fragment:hE,lights_toon_pars_fragment:dE,lights_phong_fragment:pE,lights_phong_pars_fragment:mE,lights_physical_fragment:gE,lights_physical_pars_fragment:_E,lights_fragment_begin:vE,lights_fragment_maps:xE,lights_fragment_end:yE,logdepthbuf_fragment:SE,logdepthbuf_pars_fragment:ME,logdepthbuf_pars_vertex:EE,logdepthbuf_vertex:wE,map_fragment:TE,map_pars_fragment:AE,map_particle_fragment:CE,map_particle_pars_fragment:RE,metalnessmap_fragment:bE,metalnessmap_pars_fragment:PE,morphinstance_vertex:LE,morphcolor_vertex:DE,morphnormal_vertex:NE,morphtarget_pars_vertex:IE,morphtarget_vertex:UE,normal_fragment_begin:FE,normal_fragment_maps:OE,normal_pars_fragment:kE,normal_pars_vertex:zE,normal_vertex:BE,normalmap_pars_fragment:HE,clearcoat_normal_fragment_begin:VE,clearcoat_normal_fragment_maps:GE,clearcoat_pars_fragment:WE,iridescence_pars_fragment:XE,opaque_fragment:jE,packing:YE,premultiplied_alpha_fragment:$E,project_vertex:qE,dithering_fragment:KE,dithering_pars_fragment:ZE,roughnessmap_fragment:QE,roughnessmap_pars_fragment:JE,shadowmap_pars_fragment:ew,shadowmap_pars_vertex:tw,shadowmap_vertex:nw,shadowmask_pars_fragment:iw,skinbase_vertex:rw,skinning_pars_vertex:sw,skinning_vertex:ow,skinnormal_vertex:aw,specularmap_fragment:lw,specularmap_pars_fragment:uw,tonemapping_fragment:cw,tonemapping_pars_fragment:fw,transmission_fragment:hw,transmission_pars_fragment:dw,uv_pars_fragment:pw,uv_pars_vertex:mw,uv_vertex:gw,worldpos_vertex:_w,background_vert:vw,background_frag:xw,backgroundCube_vert:yw,backgroundCube_frag:Sw,cube_vert:Mw,cube_frag:Ew,depth_vert:ww,depth_frag:Tw,distanceRGBA_vert:Aw,distanceRGBA_frag:Cw,equirect_vert:Rw,equirect_frag:bw,linedashed_vert:Pw,linedashed_frag:Lw,meshbasic_vert:Dw,meshbasic_frag:Nw,meshlambert_vert:Iw,meshlambert_frag:Uw,meshmatcap_vert:Fw,meshmatcap_frag:Ow,meshnormal_vert:kw,meshnormal_frag:zw,meshphong_vert:Bw,meshphong_frag:Hw,meshphysical_vert:Vw,meshphysical_frag:Gw,meshtoon_vert:Ww,meshtoon_frag:Xw,points_vert:jw,points_frag:Yw,shadow_vert:$w,shadow_frag:qw,sprite_vert:Kw,sprite_frag:Zw},Ne={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Si={basic:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new We(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:wn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:wn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new We(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:wn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:wn([Ne.points,Ne.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:wn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:wn([Ne.common,Ne.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:wn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:wn([Ne.sprite,Ne.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:wn([Ne.common,Ne.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:wn([Ne.lights,Ne.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Si.physical={uniforms:wn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Eu={r:0,b:0,g:0},hs=new ci,Qw=new kt;function Jw(n,e,t,r,o,l,u){const c=new We(0);let h=l===!0?0:1,d,p,_=null,g=0,y=null;function E(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?t:e).get(T)),T}function M(A){let T=!1;const b=E(A);b===null?v(c,h):b&&b.isColor&&(v(b,1),T=!0);const V=n.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,u):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||T)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(A,T){const b=E(T);b&&(b.isCubeTexture||b.mapping===Ya)?(p===void 0&&(p=new Zn(new Do(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:wo(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),hs.copy(T.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),p.material.uniforms.envMap.value=b,p.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Qw.makeRotationFromEuler(hs)),p.material.toneMapped=wt.getTransfer(b.colorSpace)!==Dt,(_!==b||g!==b.version||y!==n.toneMapping)&&(p.material.needsUpdate=!0,_=b,g=b.version,y=n.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null)):b&&b.isTexture&&(d===void 0&&(d=new Zn(new Ka(2,2),new Jn({name:"BackgroundMaterial",uniforms:wo(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=b,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.toneMapped=wt.getTransfer(b.colorSpace)!==Dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),d.material.uniforms.uvTransform.value.copy(b.matrix),(_!==b||g!==b.version||y!==n.toneMapping)&&(d.material.needsUpdate=!0,_=b,g=b.version,y=n.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null))}function v(A,T){A.getRGB(Eu,Hv(n)),r.buffers.color.setClear(Eu.r,Eu.g,Eu.b,T,u)}return{getClearColor:function(){return c},setClearColor:function(A,T=1){c.set(A),h=T,v(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(A){h=A,v(c,h)},render:M,addToRenderList:x}}function e1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function c(C,N,H,Y,ee){let ue=!1;const J=_(Y,H,N);l!==J&&(l=J,d(l.object)),ue=y(C,Y,H,ee),ue&&E(C,Y,H,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,b(C,N,H,Y),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function h(){return n.createVertexArray()}function d(C){return n.bindVertexArray(C)}function p(C){return n.deleteVertexArray(C)}function _(C,N,H){const Y=H.wireframe===!0;let ee=r[C.id];ee===void 0&&(ee={},r[C.id]=ee);let ue=ee[N.id];ue===void 0&&(ue={},ee[N.id]=ue);let J=ue[Y];return J===void 0&&(J=g(h()),ue[Y]=J),J}function g(C){const N=[],H=[],Y=[];for(let ee=0;ee<t;ee++)N[ee]=0,H[ee]=0,Y[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:Y,object:C,attributes:{},index:null}}function y(C,N,H,Y){const ee=l.attributes,ue=N.attributes;let J=0;const le=H.getAttributes();for(const z in le)if(le[z].location>=0){const ne=ee[z];let O=ue[z];if(O===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),ne===void 0||ne.attribute!==O||O&&ne.data!==O.data)return!0;J++}return l.attributesNum!==J||l.index!==Y}function E(C,N,H,Y){const ee={},ue=N.attributes;let J=0;const le=H.getAttributes();for(const z in le)if(le[z].location>=0){let ne=ue[z];ne===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(ne=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(ne=C.instanceColor));const O={};O.attribute=ne,ne&&ne.data&&(O.data=ne.data),ee[z]=O,J++}l.attributes=ee,l.attributesNum=J,l.index=Y}function M(){const C=l.newAttributes;for(let N=0,H=C.length;N<H;N++)C[N]=0}function x(C){v(C,0)}function v(C,N){const H=l.newAttributes,Y=l.enabledAttributes,ee=l.attributeDivisors;H[C]=1,Y[C]===0&&(n.enableVertexAttribArray(C),Y[C]=1),ee[C]!==N&&(n.vertexAttribDivisor(C,N),ee[C]=N)}function A(){const C=l.newAttributes,N=l.enabledAttributes;for(let H=0,Y=N.length;H<Y;H++)N[H]!==C[H]&&(n.disableVertexAttribArray(H),N[H]=0)}function T(C,N,H,Y,ee,ue,J){J===!0?n.vertexAttribIPointer(C,N,H,ee,ue):n.vertexAttribPointer(C,N,H,Y,ee,ue)}function b(C,N,H,Y){M();const ee=Y.attributes,ue=H.getAttributes(),J=N.defaultAttributeValues;for(const le in ue){const z=ue[le];if(z.location>=0){let he=ee[le];if(he===void 0&&(le==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),le==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),he!==void 0){const ne=he.normalized,O=he.itemSize,re=e.get(he);if(re===void 0)continue;const be=re.buffer,Q=re.type,K=re.bytesPerElement,fe=Q===n.INT||Q===n.UNSIGNED_INT||he.gpuType===Fc;if(he.isInterleavedBufferAttribute){const de=he.data,Me=de.stride,Ce=he.offset;if(de.isInstancedInterleavedBuffer){for(let Ie=0;Ie<z.locationSize;Ie++)v(z.location+Ie,de.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ie=0;Ie<z.locationSize;Ie++)x(z.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,be);for(let Ie=0;Ie<z.locationSize;Ie++)T(z.location+Ie,O/z.locationSize,Q,ne,Me*K,(Ce+O/z.locationSize*Ie)*K,fe)}else{if(he.isInstancedBufferAttribute){for(let de=0;de<z.locationSize;de++)v(z.location+de,he.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let de=0;de<z.locationSize;de++)x(z.location+de);n.bindBuffer(n.ARRAY_BUFFER,be);for(let de=0;de<z.locationSize;de++)T(z.location+de,O/z.locationSize,Q,ne,O*K,O/z.locationSize*de*K,fe)}}else if(J!==void 0){const ne=J[le];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(z.location,ne);break;case 3:n.vertexAttrib3fv(z.location,ne);break;case 4:n.vertexAttrib4fv(z.location,ne);break;default:n.vertexAttrib1fv(z.location,ne)}}}}A()}function V(){G();for(const C in r){const N=r[C];for(const H in N){const Y=N[H];for(const ee in Y)p(Y[ee].object),delete Y[ee];delete N[H]}delete r[C]}}function D(C){if(r[C.id]===void 0)return;const N=r[C.id];for(const H in N){const Y=N[H];for(const ee in Y)p(Y[ee].object),delete Y[ee];delete N[H]}delete r[C.id]}function I(C){for(const N in r){const H=r[N];if(H[C.id]===void 0)continue;const Y=H[C.id];for(const ee in Y)p(Y[ee].object),delete Y[ee];delete H[C.id]}}function G(){L(),u=!0,l!==o&&(l=o,d(l.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:G,resetDefaultState:L,dispose:V,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:x,disableUnusedAttributes:A}}function t1(n,e,t){let r;function o(d){r=d}function l(d,p){n.drawArrays(r,d,p),t.update(p,r,1)}function u(d,p,_){_!==0&&(n.drawArraysInstanced(r,d,p,_),t.update(p,r,_))}function c(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,p,0,_);let y=0;for(let E=0;E<_;E++)y+=p[E];t.update(y,r,1)}function h(d,p,_,g){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)u(d[E],p[E],g[E]);else{y.multiDrawArraysInstancedWEBGL(r,d,0,p,0,g,0,_);let E=0;for(let M=0;M<_;M++)E+=p[M];for(let M=0;M<g.length;M++)t.update(E,r,g[M])}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function n1(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(D){return!(D!==ui&&r.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const I=D===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Oi&&r.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Ii&&!I)}function h(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=h(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const _=t.logarithmicDepthBuffer===!0,g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=y>0,V=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:_,maxTextures:g,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:T,vertexTextures:b,maxSamples:V}}function i1(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new nr,c=new ht,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const y=_.length!==0||g||r!==0||o;return o=g,r=_.length,y},this.beginShadows=function(){l=!0,p(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=p(_,g,0)},this.setState=function(_,g,y){const E=_.clippingPlanes,M=_.clipIntersection,x=_.clipShadows,v=n.get(_);if(!o||E===null||E.length===0||l&&!x)l?p(null):d();else{const A=l?0:r,T=A*4;let b=v.clippingState||null;h.value=b,b=p(E,g,T,y);for(let V=0;V!==T;++V)b[V]=t[V];v.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(_,g,y,E){const M=_!==null?_.length:0;let x=null;if(M!==0){if(x=h.value,E!==!0||x===null){const v=y+M*4,A=g.matrixWorldInverse;c.getNormalMatrix(A),(x===null||x.length<v)&&(x=new Float32Array(v));for(let T=0,b=y;T!==M;++T,b+=4)u.copy(_[T]).applyMatrix4(A,c),u.normal.toArray(x,b),x[b+3]=u.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function r1(n){let e=new WeakMap;function t(u,c){return c===ju?u.mapping=Es:c===Yu&&(u.mapping=ws),u}function r(u){if(u&&u.isTexture){const c=u.mapping;if(c===ju||c===Yu)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const d=new Wv(h.height);return d.fromEquirectangularTexture(n,u),e.set(u,d),u.addEventListener("dispose",o),t(d.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class ap extends sp{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,c=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,u=l+d*this.view.width,c-=p*this.view.offsetY,h=c-p*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _o=4,E_=[.125,.215,.35,.446,.526,.582],gs=20,td=new ap,w_=new We;let nd=null,id=0,rd=0,sd=!1;const ms=(1+Math.sqrt(5))/2,po=1/ms,T_=[new $(-ms,po,0),new $(ms,po,0),new $(-po,0,ms),new $(po,0,ms),new $(0,ms,-po),new $(0,ms,po),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Md{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=R_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nd,id,rd),this._renderer.xr.enabled=sd,e.scissorTest=!1,wu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Ro,format:ui,colorSpace:fr,depthBuffer:!1},o=A_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A_(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s1(l)),this._blurMaterial=o1(l,e,t)}return o}_compileMaterial(e){const t=new Zn(this._lodPlanes[0],e);this._renderer.compile(t,td)}_sceneToCubeUV(e,t,r,o){const c=new qn(90,1,t,r),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor(w_),p.toneMapping=ar,p.autoClear=!1;const y=new np({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),E=new Zn(new Do,y);let M=!1;const x=e.background;x?x.isColor&&(y.color.copy(x),e.background=null,M=!0):(y.color.copy(w_),M=!0);for(let v=0;v<6;v++){const A=v%3;A===0?(c.up.set(0,h[v],0),c.lookAt(d[v],0,0)):A===1?(c.up.set(0,0,h[v]),c.lookAt(0,d[v],0)):(c.up.set(0,h[v],0),c.lookAt(0,0,d[v]));const T=this._cubeSize;wu(o,A*T,v>2?T:0,T,T),p.setRenderTarget(o),M&&p.render(E,c),p.render(e,c)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=g,p.autoClear=_,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Es||e.mapping===ws;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=R_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C_());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Zn(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;wu(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,td)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),c=T_[(o-l-1)%T_.length];this._blur(e,l-1,l,u,c)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,c){const h=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new Zn(this._lodPlanes[o],d),g=d.uniforms,y=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*gs-1),M=l/E,x=isFinite(l)?1+Math.floor(p*M):gs;x>gs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${gs}`);const v=[];let A=0;for(let I=0;I<gs;++I){const G=I/M,L=Math.exp(-G*G/2);v.push(L),I===0?A+=L:I<x&&(A+=2*L)}for(let I=0;I<v.length;I++)v[I]=v[I]/A;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=v,g.latitudinal.value=u==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:T}=this;g.dTheta.value=E,g.mipInt.value=T-r;const b=this._sizeLods[o],V=3*b*(o>T-_o?o-T+_o:0),D=4*(this._cubeSize-b);wu(t,V,D,3*b,2*b),h.setRenderTarget(t),h.render(_,td)}}function s1(n){const e=[],t=[],r=[];let o=n;const l=n-_o+1+E_.length;for(let u=0;u<l;u++){const c=Math.pow(2,o);t.push(c);let h=1/c;u>n-_o?h=E_[u-n+_o-1]:u===0&&(h=0),r.push(h);const d=1/(c-2),p=-d,_=1+d,g=[p,p,_,p,_,_,p,p,_,_,p,_],y=6,E=6,M=3,x=2,v=1,A=new Float32Array(M*E*y),T=new Float32Array(x*E*y),b=new Float32Array(v*E*y);for(let D=0;D<y;D++){const I=D%3*2/3-1,G=D>2?0:-1,L=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];A.set(L,M*E*D),T.set(g,x*E*D);const C=[D,D,D,D,D,D];b.set(C,v*E*D)}const V=new cn;V.setAttribute("position",new Gt(A,M)),V.setAttribute("uv",new Gt(T,x)),V.setAttribute("faceIndex",new Gt(b,v)),e.push(V),o>_o&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function A_(n,e,t){const r=new ur(n,e,t);return r.texture.mapping=Ya,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wu(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function o1(n,e,t){const r=new Float32Array(gs),o=new $(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lp(),fragmentShader:`

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
	`}function a1(n){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const h=c.mapping,d=h===ju||h===Yu,p=h===Es||h===ws;if(d||p){let _=e.get(c);const g=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new Md(n)),_=d?t.fromEquirectangular(c,_):t.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),_.texture;if(_!==void 0)return _.texture;{const y=c.image;return d&&y&&y.height>0||p&&y&&o(y)?(t===null&&(t=new Md(n)),_=d?t.fromEquirectangular(c):t.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),c.addEventListener("dispose",l),_.texture):null}}}return c}function o(c){let h=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&h++;return h===d}function l(c){const h=c.target;h.removeEventListener("dispose",l);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function l1(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ua("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function u1(n,e,t,r){const o={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);for(const E in g.morphAttributes){const M=g.morphAttributes[E];for(let x=0,v=M.length;x<v;x++)e.remove(M[x])}g.removeEventListener("dispose",u),delete o[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(_,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function h(_){const g=_.attributes;for(const E in g)e.update(g[E],n.ARRAY_BUFFER);const y=_.morphAttributes;for(const E in y){const M=y[E];for(let x=0,v=M.length;x<v;x++)e.update(M[x],n.ARRAY_BUFFER)}}function d(_){const g=[],y=_.index,E=_.attributes.position;let M=0;if(y!==null){const A=y.array;M=y.version;for(let T=0,b=A.length;T<b;T+=3){const V=A[T+0],D=A[T+1],I=A[T+2];g.push(V,D,D,I,I,V)}}else if(E!==void 0){const A=E.array;M=E.version;for(let T=0,b=A.length/3-1;T<b;T+=3){const V=T+0,D=T+1,I=T+2;g.push(V,D,D,I,I,V)}}else return;const x=new(Uv(g)?rp:ip)(g,1);x.version=M;const v=l.get(_);v&&e.remove(v),l.set(_,x)}function p(_){const g=l.get(_);if(g){const y=_.index;y!==null&&g.version<y.version&&d(_)}else d(_);return l.get(_)}return{get:c,update:h,getWireframeAttribute:p}}function c1(n,e,t){let r;function o(g){r=g}let l,u;function c(g){l=g.type,u=g.bytesPerElement}function h(g,y){n.drawElements(r,y,l,g*u),t.update(y,r,1)}function d(g,y,E){E!==0&&(n.drawElementsInstanced(r,y,l,g*u,E),t.update(y,r,E))}function p(g,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,g,0,E);let x=0;for(let v=0;v<E;v++)x+=y[v];t.update(x,r,1)}function _(g,y,E,M){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<g.length;v++)d(g[v]/u,y[v],M[v]);else{x.multiDrawElementsInstancedWEBGL(r,y,0,l,g,0,M,0,E);let v=0;for(let A=0;A<E;A++)v+=y[A];for(let A=0;A<M.length;A++)t.update(v,r,M[A])}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function f1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(l/3);break;case n.LINES:t.lines+=c*(l/2);break;case n.LINE_STRIP:t.lines+=c*(l-1);break;case n.LINE_LOOP:t.lines+=c*l;break;case n.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function h1(n,e,t){const r=new WeakMap,o=new $t;function l(u,c,h){const d=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=p!==void 0?p.length:0;let g=r.get(c);if(g===void 0||g.count!==_){let C=function(){G.dispose(),r.delete(c),c.removeEventListener("dispose",C)};var y=C;g!==void 0&&g.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,v=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let b=0;E===!0&&(b=1),M===!0&&(b=2),x===!0&&(b=3);let V=c.attributes.position.count*b,D=1;V>e.maxTextureSize&&(D=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const I=new Float32Array(V*D*4*_),G=new ep(I,V,D,_);G.type=Ii,G.needsUpdate=!0;const L=b*4;for(let N=0;N<_;N++){const H=v[N],Y=A[N],ee=T[N],ue=V*D*4*N;for(let J=0;J<H.count;J++){const le=J*L;E===!0&&(o.fromBufferAttribute(H,J),I[ue+le+0]=o.x,I[ue+le+1]=o.y,I[ue+le+2]=o.z,I[ue+le+3]=0),M===!0&&(o.fromBufferAttribute(Y,J),I[ue+le+4]=o.x,I[ue+le+5]=o.y,I[ue+le+6]=o.z,I[ue+le+7]=0),x===!0&&(o.fromBufferAttribute(ee,J),I[ue+le+8]=o.x,I[ue+le+9]=o.y,I[ue+le+10]=o.z,I[ue+le+11]=ee.itemSize===4?o.w:1)}}g={count:_,texture:G,size:new ot(V,D)},r.set(c,g),c.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let E=0;for(let x=0;x<d.length;x++)E+=d[x];const M=c.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",d)}h.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:l}}function d1(n,e,t,r){let o=new WeakMap;function l(h){const d=r.render.frame,p=h.geometry,_=e.get(h,p);if(o.get(_)!==d&&(e.update(_),o.set(_,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),o.get(h)!==d&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),o.set(h,d))),h.isSkinnedMesh){const g=h.skeleton;o.get(g)!==d&&(g.update(),o.set(g,d))}return _}function u(){o=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:u}}class up extends yn{constructor(e,t,r,o,l,u,c,h,d,p=ys){if(p!==ys&&p!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&p===ys&&(r=Xr),r===void 0&&p===As&&(r=Ts),super(null,o,l,u,c,h,p,r,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:An,this.minFilter=h!==void 0?h:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const jv=new yn,b_=new up(1,1),Yv=new ep,$v=new zv,qv=new op,P_=[],L_=[],D_=new Float32Array(16),N_=new Float32Array(9),I_=new Float32Array(4);function No(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=P_[o];if(l===void 0&&(l=new Float32Array(o),P_[o]=l),e!==0){r.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(l,c)}return l}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function jc(n,e){let t=L_[e];t===void 0&&(t=new Int32Array(e),L_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function p1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function m1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function g1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function _1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function v1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;I_.set(r),n.uniformMatrix2fv(this.addr,!1,I_),en(t,r)}}function x1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;N_.set(r),n.uniformMatrix3fv(this.addr,!1,N_),en(t,r)}}function y1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;D_.set(r),n.uniformMatrix4fv(this.addr,!1,D_),en(t,r)}}function S1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function M1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function E1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function w1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function T1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function A1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function C1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function R1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function b1(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(b_.compareFunction=Zd,l=b_):l=jv,t.setTexture2D(e||l,o)}function P1(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||$v,o)}function L1(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||qv,o)}function D1(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Yv,o)}function N1(n){switch(n){case 5126:return p1;case 35664:return m1;case 35665:return g1;case 35666:return _1;case 35674:return v1;case 35675:return x1;case 35676:return y1;case 5124:case 35670:return S1;case 35667:case 35671:return M1;case 35668:case 35672:return E1;case 35669:case 35673:return w1;case 5125:return T1;case 36294:return A1;case 36295:return C1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return P1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return D1}}function I1(n,e){n.uniform1fv(this.addr,e)}function U1(n,e){const t=No(e,this.size,2);n.uniform2fv(this.addr,t)}function F1(n,e){const t=No(e,this.size,3);n.uniform3fv(this.addr,t)}function O1(n,e){const t=No(e,this.size,4);n.uniform4fv(this.addr,t)}function k1(n,e){const t=No(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function z1(n,e){const t=No(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function B1(n,e){const t=No(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function H1(n,e){n.uniform1iv(this.addr,e)}function V1(n,e){n.uniform2iv(this.addr,e)}function G1(n,e){n.uniform3iv(this.addr,e)}function W1(n,e){n.uniform4iv(this.addr,e)}function X1(n,e){n.uniform1uiv(this.addr,e)}function j1(n,e){n.uniform2uiv(this.addr,e)}function Y1(n,e){n.uniform3uiv(this.addr,e)}function $1(n,e){n.uniform4uiv(this.addr,e)}function q1(n,e,t){const r=this.cache,o=e.length,l=jc(t,o);Jt(r,l)||(n.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||jv,l[u])}function K1(n,e,t){const r=this.cache,o=e.length,l=jc(t,o);Jt(r,l)||(n.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||$v,l[u])}function Z1(n,e,t){const r=this.cache,o=e.length,l=jc(t,o);Jt(r,l)||(n.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||qv,l[u])}function Q1(n,e,t){const r=this.cache,o=e.length,l=jc(t,o);Jt(r,l)||(n.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Yv,l[u])}function J1(n){switch(n){case 5126:return I1;case 35664:return U1;case 35665:return F1;case 35666:return O1;case 35674:return k1;case 35675:return z1;case 35676:return B1;case 5124:case 35670:return H1;case 35667:case 35671:return V1;case 35668:case 35672:return G1;case 35669:case 35673:return W1;case 5125:return X1;case 36294:return j1;case 36295:return Y1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return K1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return Q1}}class eT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=N1(t.type)}}class tT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J1(t.type)}}class nT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const c=o[l];c.setValue(e,t[c.id],r)}}}const od=/(\w+)(\])?(\[|\.)?/g;function U_(n,e){n.seq.push(e),n.map[e.id]=e}function iT(n,e,t){const r=n.name,o=r.length;for(od.lastIndex=0;;){const l=od.exec(r),u=od.lastIndex;let c=l[1];const h=l[2]==="]",d=l[3];if(h&&(c=c|0),d===void 0||d==="["&&u+2===o){U_(t,d===void 0?new eT(c,n,e):new tT(c,n,e));break}else{let _=t.map[c];_===void 0&&(_=new nT(c),U_(t,_)),t=_}}}class ku{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);iT(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const c=t[l],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function F_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const rT=37297;let sT=0;function oT(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}function aT(n){const e=wt.getPrimaries(wt.workingColorSpace),t=wt.getPrimaries(n);let r;switch(e===t?r="":e===Ba&&t===za?r="LinearDisplayP3ToLinearSRGB":e===za&&t===Ba&&(r="LinearSRGBToLinearDisplayP3"),n){case fr:case $a:return[r,"LinearTransferOETF"];case li:case Gc:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[r,"LinearTransferOETF"]}}function O_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+oT(n.getShaderSource(e),u)}else return o}function lT(n,e){const t=aT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uT(n,e){let t;switch(e){case _v:t="Linear";break;case vv:t="Reinhard";break;case xv:t="Cineon";break;case yv:t="ACESFilmic";break;case Mv:t="AgX";break;case Ev:t="Neutral";break;case Sv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tu=new $;function cT(){wt.getLuminanceCoefficients(Tu);const n=Tu.x.toFixed(4),e=Tu.y.toFixed(4),t=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function hT(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function dT(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let c=1;l.type===n.FLOAT_MAT2&&(c=2),l.type===n.FLOAT_MAT3&&(c=3),l.type===n.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function wa(n){return n!==""}function k_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function z_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(n){return n.replace(pT,gT)}const mT=new Map;function gT(n,e){let t=ft[e];if(t===void 0){const r=mT.get(e);if(r!==void 0)t=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ed(t)}const _T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B_(n){return n.replace(_T,vT)}function vT(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function H_(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function xT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===G0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function yT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Es:case ws:e="ENVMAP_TYPE_CUBE";break;case Ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ST(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ws&&(e="ENVMAP_MODE_REFRACTION"),e}function MT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Uc:e="ENVMAP_BLENDING_MULTIPLY";break;case mv:e="ENVMAP_BLENDING_MIX";break;case gv:e="ENVMAP_BLENDING_ADD";break}return e}function ET(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function wT(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=xT(t),d=yT(t),p=ST(t),_=MT(t),g=ET(t),y=fT(t),E=hT(l),M=o.createProgram();let x,v,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(wa).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(wa).join(`
`),v.length>0&&(v+=`
`)):(x=[H_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),v=[H_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ar?"#define TONE_MAPPING":"",t.toneMapping!==ar?ft.tonemapping_pars_fragment:"",t.toneMapping!==ar?uT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,lT("linearToOutputTexel",t.outputColorSpace),cT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wa).join(`
`)),u=Ed(u),u=k_(u,t),u=z_(u,t),c=Ed(c),c=k_(c,t),c=z_(c,t),u=B_(u),c=B_(c),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===Sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const T=A+x+u,b=A+v+c,V=F_(o,o.VERTEX_SHADER,T),D=F_(o,o.FRAGMENT_SHADER,b);o.attachShader(M,V),o.attachShader(M,D),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function I(N){if(n.debug.checkShaderErrors){const H=o.getProgramInfoLog(M).trim(),Y=o.getShaderInfoLog(V).trim(),ee=o.getShaderInfoLog(D).trim();let ue=!0,J=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(ue=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,M,V,D);else{const le=O_(o,V,"vertex"),z=O_(o,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+le+`
`+z)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(Y===""||ee==="")&&(J=!1);J&&(N.diagnostics={runnable:ue,programLog:H,vertexShader:{log:Y,prefix:x},fragmentShader:{log:ee,prefix:v}})}o.deleteShader(V),o.deleteShader(D),G=new ku(o,M),L=dT(o,M)}let G;this.getUniforms=function(){return G===void 0&&I(this),G};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(M,rT)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sT++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=V,this.fragmentShader=D,this}let TT=0;class AT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new CT(e),t.set(e,r)),r}}class CT{constructor(e){this.id=TT++,this.code=e,this.usedTimes=0}}function RT(n,e,t,r,o,l,u){const c=new tp,h=new AT,d=new Set,p=[],_=o.logarithmicDepthBuffer,g=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(L){return d.add(L),L===0?"uv":`uv${L}`}function x(L,C,N,H,Y){const ee=H.fog,ue=Y.geometry,J=L.isMeshStandardMaterial?H.environment:null,le=(L.isMeshStandardMaterial?t:e).get(L.envMap||J),z=le&&le.mapping===Ya?le.image.height:null,he=E[L.type];L.precision!==null&&(y=o.getMaxPrecision(L.precision),y!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",y,"instead."));const ne=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,O=ne!==void 0?ne.length:0;let re=0;ue.morphAttributes.position!==void 0&&(re=1),ue.morphAttributes.normal!==void 0&&(re=2),ue.morphAttributes.color!==void 0&&(re=3);let be,Q,K,fe;if(he){const yt=Si[he];be=yt.vertexShader,Q=yt.fragmentShader}else be=L.vertexShader,Q=L.fragmentShader,h.update(L),K=h.getVertexShaderID(L),fe=h.getFragmentShaderID(L);const de=n.getRenderTarget(),Me=Y.isInstancedMesh===!0,Ce=Y.isBatchedMesh===!0,Ie=!!L.map,Le=!!L.matcap,k=!!le,_t=!!L.aoMap,dt=!!L.lightMap,xt=!!L.bumpMap,Ye=!!L.normalMap,bt=!!L.displacementMap,Je=!!L.emissiveMap,it=!!L.metalnessMap,F=!!L.roughnessMap,R=L.anisotropy>0,ce=L.clearcoat>0,ge=L.dispersion>0,xe=L.iridescence>0,_e=L.sheen>0,qe=L.transmission>0,De=R&&!!L.anisotropyMap,ke=ce&&!!L.clearcoatMap,lt=ce&&!!L.clearcoatNormalMap,Ee=ce&&!!L.clearcoatRoughnessMap,Ue=xe&&!!L.iridescenceMap,mt=xe&&!!L.iridescenceThicknessMap,rt=_e&&!!L.sheenColorMap,ze=_e&&!!L.sheenRoughnessMap,at=!!L.specularMap,ut=!!L.specularColorMap,Rt=!!L.specularIntensityMap,X=qe&&!!L.transmissionMap,Te=qe&&!!L.thicknessMap,pe=!!L.gradientMap,me=!!L.alphaMap,Re=L.alphaTest>0,et=!!L.alphaHash,gt=!!L.extensions;let zt=ar;L.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(zt=n.toneMapping);const Xt={shaderID:he,shaderType:L.type,shaderName:L.name,vertexShader:be,fragmentShader:Q,defines:L.defines,customVertexShaderID:K,customFragmentShaderID:fe,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:y,batching:Ce,batchingColor:Ce&&Y._colorsTexture!==null,instancing:Me,instancingColor:Me&&Y.instanceColor!==null,instancingMorph:Me&&Y.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:fr,alphaToCoverage:!!L.alphaToCoverage,map:Ie,matcap:Le,envMap:k,envMapMode:k&&le.mapping,envMapCubeUVHeight:z,aoMap:_t,lightMap:dt,bumpMap:xt,normalMap:Ye,displacementMap:g&&bt,emissiveMap:Je,normalMapObjectSpace:Ye&&L.normalMapType===Cv,normalMapTangentSpace:Ye&&L.normalMapType===Vc,metalnessMap:it,roughnessMap:F,anisotropy:R,anisotropyMap:De,clearcoat:ce,clearcoatMap:ke,clearcoatNormalMap:lt,clearcoatRoughnessMap:Ee,dispersion:ge,iridescence:xe,iridescenceMap:Ue,iridescenceThicknessMap:mt,sheen:_e,sheenColorMap:rt,sheenRoughnessMap:ze,specularMap:at,specularColorMap:ut,specularIntensityMap:Rt,transmission:qe,transmissionMap:X,thicknessMap:Te,gradientMap:pe,opaque:L.transparent===!1&&L.blending===Wr&&L.alphaToCoverage===!1,alphaMap:me,alphaTest:Re,alphaHash:et,combine:L.combine,mapUv:Ie&&M(L.map.channel),aoMapUv:_t&&M(L.aoMap.channel),lightMapUv:dt&&M(L.lightMap.channel),bumpMapUv:xt&&M(L.bumpMap.channel),normalMapUv:Ye&&M(L.normalMap.channel),displacementMapUv:bt&&M(L.displacementMap.channel),emissiveMapUv:Je&&M(L.emissiveMap.channel),metalnessMapUv:it&&M(L.metalnessMap.channel),roughnessMapUv:F&&M(L.roughnessMap.channel),anisotropyMapUv:De&&M(L.anisotropyMap.channel),clearcoatMapUv:ke&&M(L.clearcoatMap.channel),clearcoatNormalMapUv:lt&&M(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&M(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&M(L.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&M(L.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&M(L.sheenColorMap.channel),sheenRoughnessMapUv:ze&&M(L.sheenRoughnessMap.channel),specularMapUv:at&&M(L.specularMap.channel),specularColorMapUv:ut&&M(L.specularColorMap.channel),specularIntensityMapUv:Rt&&M(L.specularIntensityMap.channel),transmissionMapUv:X&&M(L.transmissionMap.channel),thicknessMapUv:Te&&M(L.thicknessMap.channel),alphaMapUv:me&&M(L.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Ye||R),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ue.attributes.uv&&(Ie||me),fog:!!ee,useFog:L.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:Y.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:L.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:zt,decodeVideoTexture:Ie&&L.map.isVideoTexture===!0&&wt.getTransfer(L.map.colorSpace)===Dt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Ni,flipSided:L.side===xn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:gt&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&L.extensions.multiDraw===!0||Ce)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Xt.vertexUv1s=d.has(1),Xt.vertexUv2s=d.has(2),Xt.vertexUv3s=d.has(3),d.clear(),Xt}function v(L){const C=[];if(L.shaderID?C.push(L.shaderID):(C.push(L.customVertexShaderID),C.push(L.customFragmentShaderID)),L.defines!==void 0)for(const N in L.defines)C.push(N),C.push(L.defines[N]);return L.isRawShaderMaterial===!1&&(A(C,L),T(C,L),C.push(n.outputColorSpace)),C.push(L.customProgramCacheKey),C.join()}function A(L,C){L.push(C.precision),L.push(C.outputColorSpace),L.push(C.envMapMode),L.push(C.envMapCubeUVHeight),L.push(C.mapUv),L.push(C.alphaMapUv),L.push(C.lightMapUv),L.push(C.aoMapUv),L.push(C.bumpMapUv),L.push(C.normalMapUv),L.push(C.displacementMapUv),L.push(C.emissiveMapUv),L.push(C.metalnessMapUv),L.push(C.roughnessMapUv),L.push(C.anisotropyMapUv),L.push(C.clearcoatMapUv),L.push(C.clearcoatNormalMapUv),L.push(C.clearcoatRoughnessMapUv),L.push(C.iridescenceMapUv),L.push(C.iridescenceThicknessMapUv),L.push(C.sheenColorMapUv),L.push(C.sheenRoughnessMapUv),L.push(C.specularMapUv),L.push(C.specularColorMapUv),L.push(C.specularIntensityMapUv),L.push(C.transmissionMapUv),L.push(C.thicknessMapUv),L.push(C.combine),L.push(C.fogExp2),L.push(C.sizeAttenuation),L.push(C.morphTargetsCount),L.push(C.morphAttributeCount),L.push(C.numDirLights),L.push(C.numPointLights),L.push(C.numSpotLights),L.push(C.numSpotLightMaps),L.push(C.numHemiLights),L.push(C.numRectAreaLights),L.push(C.numDirLightShadows),L.push(C.numPointLightShadows),L.push(C.numSpotLightShadows),L.push(C.numSpotLightShadowsWithMaps),L.push(C.numLightProbes),L.push(C.shadowMapType),L.push(C.toneMapping),L.push(C.numClippingPlanes),L.push(C.numClipIntersection),L.push(C.depthPacking)}function T(L,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),L.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.skinning&&c.enable(4),C.morphTargets&&c.enable(5),C.morphNormals&&c.enable(6),C.morphColors&&c.enable(7),C.premultipliedAlpha&&c.enable(8),C.shadowMapEnabled&&c.enable(9),C.doubleSided&&c.enable(10),C.flipSided&&c.enable(11),C.useDepthPacking&&c.enable(12),C.dithering&&c.enable(13),C.transmission&&c.enable(14),C.sheen&&c.enable(15),C.opaque&&c.enable(16),C.pointsUvs&&c.enable(17),C.decodeVideoTexture&&c.enable(18),C.alphaToCoverage&&c.enable(19),L.push(c.mask)}function b(L){const C=E[L.type];let N;if(C){const H=Si[C];N=Vv.clone(H.uniforms)}else N=L.uniforms;return N}function V(L,C){let N;for(let H=0,Y=p.length;H<Y;H++){const ee=p[H];if(ee.cacheKey===C){N=ee,++N.usedTimes;break}}return N===void 0&&(N=new wT(n,C,L,l),p.push(N)),N}function D(L){if(--L.usedTimes===0){const C=p.indexOf(L);p[C]=p[p.length-1],p.pop(),L.destroy()}}function I(L){h.remove(L)}function G(){h.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:b,acquireProgram:V,releaseProgram:D,releaseShaderCache:I,programs:p,dispose:G}}function bT(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let c=n.get(u);return c===void 0&&(c={},n.set(u,c)),c}function r(u){n.delete(u)}function o(u,c,h){n.get(u)[c]=h}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function PT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function V_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function G_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_,g,y,E,M,x){let v=n[e];return v===void 0?(v={id:_.id,object:_,geometry:g,material:y,groupOrder:E,renderOrder:_.renderOrder,z:M,group:x},n[e]=v):(v.id=_.id,v.object=_,v.geometry=g,v.material=y,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=M,v.group=x),e++,v}function c(_,g,y,E,M,x){const v=u(_,g,y,E,M,x);y.transmission>0?r.push(v):y.transparent===!0?o.push(v):t.push(v)}function h(_,g,y,E,M,x){const v=u(_,g,y,E,M,x);y.transmission>0?r.unshift(v):y.transparent===!0?o.unshift(v):t.unshift(v)}function d(_,g){t.length>1&&t.sort(_||PT),r.length>1&&r.sort(g||V_),o.length>1&&o.sort(g||V_)}function p(){for(let _=e,g=n.length;_<g;_++){const y=n[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:c,unshift:h,finish:p,sort:d}}function LT(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new G_,n.set(r,[u])):o>=l.length?(u=new G_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function DT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new We};break;case"SpotLight":t={position:new $,direction:new $,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function NT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let IT=0;function UT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function FT(n){const e=new DT,t=NT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new $);const o=new $,l=new kt,u=new kt;function c(d){let p=0,_=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let y=0,E=0,M=0,x=0,v=0,A=0,T=0,b=0,V=0,D=0,I=0;d.sort(UT);for(let L=0,C=d.length;L<C;L++){const N=d[L],H=N.color,Y=N.intensity,ee=N.distance,ue=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=H.r*Y,_+=H.g*Y,g+=H.b*Y;else if(N.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(N.sh.coefficients[J],Y);I++}else if(N.isDirectionalLight){const J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const le=N.shadow,z=t.get(N);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,r.directionalShadow[y]=z,r.directionalShadowMap[y]=ue,r.directionalShadowMatrix[y]=N.shadow.matrix,A++}r.directional[y]=J,y++}else if(N.isSpotLight){const J=e.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(H).multiplyScalar(Y),J.distance=ee,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,r.spot[M]=J;const le=N.shadow;if(N.map&&(r.spotLightMap[V]=N.map,V++,le.updateMatrices(N),N.castShadow&&D++),r.spotLightMatrix[M]=le.matrix,N.castShadow){const z=t.get(N);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,r.spotShadow[M]=z,r.spotShadowMap[M]=ue,b++}M++}else if(N.isRectAreaLight){const J=e.get(N);J.color.copy(H).multiplyScalar(Y),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),r.rectArea[x]=J,x++}else if(N.isPointLight){const J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){const le=N.shadow,z=t.get(N);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,z.shadowCameraNear=le.camera.near,z.shadowCameraFar=le.camera.far,r.pointShadow[E]=z,r.pointShadowMap[E]=ue,r.pointShadowMatrix[E]=N.shadow.matrix,T++}r.point[E]=J,E++}else if(N.isHemisphereLight){const J=e.get(N);J.skyColor.copy(N.color).multiplyScalar(Y),J.groundColor.copy(N.groundColor).multiplyScalar(Y),r.hemi[v]=J,v++}}x>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=_,r.ambient[2]=g;const G=r.hash;(G.directionalLength!==y||G.pointLength!==E||G.spotLength!==M||G.rectAreaLength!==x||G.hemiLength!==v||G.numDirectionalShadows!==A||G.numPointShadows!==T||G.numSpotShadows!==b||G.numSpotMaps!==V||G.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=M,r.rectArea.length=x,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=b+V-D,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=I,G.directionalLength=y,G.pointLength=E,G.spotLength=M,G.rectAreaLength=x,G.hemiLength=v,G.numDirectionalShadows=A,G.numPointShadows=T,G.numSpotShadows=b,G.numSpotMaps=V,G.numLightProbes=I,r.version=IT++)}function h(d,p){let _=0,g=0,y=0,E=0,M=0;const x=p.matrixWorldInverse;for(let v=0,A=d.length;v<A;v++){const T=d[v];if(T.isDirectionalLight){const b=r.directional[_];b.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(x),_++}else if(T.isSpotLight){const b=r.spot[y];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(x),y++}else if(T.isRectAreaLight){const b=r.rectArea[E];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(x),u.identity(),l.copy(T.matrixWorld),l.premultiply(x),u.extractRotation(l),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),E++}else if(T.isPointLight){const b=r.point[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(x),g++}else if(T.isHemisphereLight){const b=r.hemi[M];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(x),M++}}}return{setup:c,setupView:h,state:r}}function W_(n){const e=new FT(n),t=[],r=[];function o(p){d.camera=p,t.length=0,r.length=0}function l(p){t.push(p)}function u(p){r.push(p)}function c(){e.setup(t)}function h(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:c,setupLightsView:h,pushLight:l,pushShadow:u}}function OT(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let c;return u===void 0?(c=new W_(n),e.set(o,[c])):l>=u.length?(c=new W_(n),u.push(c)):c=u[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}class Kv extends hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zv extends hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zT=`uniform sampler2D shadow_pass;
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
}`;function BT(n,e,t){let r=new Xc;const o=new ot,l=new ot,u=new $t,c=new Kv({depthPacking:Av}),h=new Zv,d={},p=t.maxTextureSize,_={[lr]:xn,[xn]:lr,[Ni]:Ni},g=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:kT,fragmentShader:zT}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new cn;E.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Zn(E,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zd;let v=this.type;this.render=function(D,I,G){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;const L=n.getRenderTarget(),C=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),H=n.state;H.setBlending(or),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Y=v!==Di&&this.type===Di,ee=v===Di&&this.type!==Di;for(let ue=0,J=D.length;ue<J;ue++){const le=D[ue],z=le.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const he=z.getFrameExtents();if(o.multiply(he),l.copy(z.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(l.x=Math.floor(p/he.x),o.x=l.x*he.x,z.mapSize.x=l.x),o.y>p&&(l.y=Math.floor(p/he.y),o.y=l.y*he.y,z.mapSize.y=l.y)),z.map===null||Y===!0||ee===!0){const O=this.type!==Di?{minFilter:An,magFilter:An}:{};z.map!==null&&z.map.dispose(),z.map=new ur(o.x,o.y,O),z.map.texture.name=le.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ne=z.getViewportCount();for(let O=0;O<ne;O++){const re=z.getViewport(O);u.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),H.viewport(u),z.updateMatrices(le,O),r=z.getFrustum(),b(I,G,z.camera,le,this.type)}z.isPointLightShadow!==!0&&this.type===Di&&A(z,G),z.needsUpdate=!1}v=this.type,x.needsUpdate=!1,n.setRenderTarget(L,C,N)};function A(D,I){const G=e.update(M);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ur(o.x,o.y)),g.uniforms.shadow_pass.value=D.map.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(I,null,G,g,M,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(I,null,G,y,M,null)}function T(D,I,G,L){let C=null;const N=G.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(N!==void 0)C=N;else if(C=G.isPointLight===!0?h:c,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const H=C.uuid,Y=I.uuid;let ee=d[H];ee===void 0&&(ee={},d[H]=ee);let ue=ee[Y];ue===void 0&&(ue=C.clone(),ee[Y]=ue,I.addEventListener("dispose",V)),C=ue}if(C.visible=I.visible,C.wireframe=I.wireframe,L===Di?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:_[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,G.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const H=n.properties.get(C);H.light=G}return C}function b(D,I,G,L,C){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&C===Di)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,D.matrixWorld);const Y=e.update(D),ee=D.material;if(Array.isArray(ee)){const ue=Y.groups;for(let J=0,le=ue.length;J<le;J++){const z=ue[J],he=ee[z.materialIndex];if(he&&he.visible){const ne=T(D,he,L,C);D.onBeforeShadow(n,D,I,G,Y,ne,z),n.renderBufferDirect(G,null,Y,ne,D,z),D.onAfterShadow(n,D,I,G,Y,ne,z)}}}else if(ee.visible){const ue=T(D,ee,L,C);D.onBeforeShadow(n,D,I,G,Y,ue,null),n.renderBufferDirect(G,null,Y,ue,D,null),D.onAfterShadow(n,D,I,G,Y,ue,null)}}const H=D.children;for(let Y=0,ee=H.length;Y<ee;Y++)b(H[Y],I,G,L,C)}function V(D){D.target.removeEventListener("dispose",V);for(const G in d){const L=d[G],C=D.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function HT(n){function e(){let X=!1;const Te=new $t;let pe=null;const me=new $t(0,0,0,0);return{setMask:function(Re){pe!==Re&&!X&&(n.colorMask(Re,Re,Re,Re),pe=Re)},setLocked:function(Re){X=Re},setClear:function(Re,et,gt,zt,Xt){Xt===!0&&(Re*=zt,et*=zt,gt*=zt),Te.set(Re,et,gt,zt),me.equals(Te)===!1&&(n.clearColor(Re,et,gt,zt),me.copy(Te))},reset:function(){X=!1,pe=null,me.set(-1,0,0,0)}}}function t(){let X=!1,Te=null,pe=null,me=null;return{setTest:function(Re){Re?fe(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(Re){Te!==Re&&!X&&(n.depthMask(Re),Te=Re)},setFunc:function(Re){if(pe!==Re){switch(Re){case lv:n.depthFunc(n.NEVER);break;case uv:n.depthFunc(n.ALWAYS);break;case cv:n.depthFunc(n.LESS);break;case Fa:n.depthFunc(n.LEQUAL);break;case fv:n.depthFunc(n.EQUAL);break;case hv:n.depthFunc(n.GEQUAL);break;case dv:n.depthFunc(n.GREATER);break;case pv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=Re}},setLocked:function(Re){X=Re},setClear:function(Re){me!==Re&&(n.clearDepth(Re),me=Re)},reset:function(){X=!1,Te=null,pe=null,me=null}}}function r(){let X=!1,Te=null,pe=null,me=null,Re=null,et=null,gt=null,zt=null,Xt=null;return{setTest:function(yt){X||(yt?fe(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(yt){Te!==yt&&!X&&(n.stencilMask(yt),Te=yt)},setFunc:function(yt,zn,Bn){(pe!==yt||me!==zn||Re!==Bn)&&(n.stencilFunc(yt,zn,Bn),pe=yt,me=zn,Re=Bn)},setOp:function(yt,zn,Bn){(et!==yt||gt!==zn||zt!==Bn)&&(n.stencilOp(yt,zn,Bn),et=yt,gt=zn,zt=Bn)},setLocked:function(yt){X=yt},setClear:function(yt){Xt!==yt&&(n.clearStencil(yt),Xt=yt)},reset:function(){X=!1,Te=null,pe=null,me=null,Re=null,et=null,gt=null,zt=null,Xt=null}}}const o=new e,l=new t,u=new r,c=new WeakMap,h=new WeakMap;let d={},p={},_=new WeakMap,g=[],y=null,E=!1,M=null,x=null,v=null,A=null,T=null,b=null,V=null,D=new We(0,0,0),I=0,G=!1,L=null,C=null,N=null,H=null,Y=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,J=0;const le=n.getParameter(n.VERSION);le.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(le)[1]),ue=J>=1):le.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),ue=J>=2);let z=null,he={};const ne=n.getParameter(n.SCISSOR_BOX),O=n.getParameter(n.VIEWPORT),re=new $t().fromArray(ne),be=new $t().fromArray(O);function Q(X,Te,pe,me){const Re=new Uint8Array(4),et=n.createTexture();n.bindTexture(X,et),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let gt=0;gt<pe;gt++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Te+gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return et}const K={};K[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),fe(n.DEPTH_TEST),l.setFunc(Fa),xt(!1),Ye(gd),fe(n.CULL_FACE),_t(or);function fe(X){d[X]!==!0&&(n.enable(X),d[X]=!0)}function de(X){d[X]!==!1&&(n.disable(X),d[X]=!1)}function Me(X,Te){return p[X]!==Te?(n.bindFramebuffer(X,Te),p[X]=Te,X===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Te),X===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ce(X,Te){let pe=g,me=!1;if(X){pe=_.get(Te),pe===void 0&&(pe=[],_.set(Te,pe));const Re=X.textures;if(pe.length!==Re.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let et=0,gt=Re.length;et<gt;et++)pe[et]=n.COLOR_ATTACHMENT0+et;pe.length=Re.length,me=!0}}else pe[0]!==n.BACK&&(pe[0]=n.BACK,me=!0);me&&n.drawBuffers(pe)}function Ie(X){return y!==X?(n.useProgram(X),y=X,!0):!1}const Le={[Gr]:n.FUNC_ADD,[X0]:n.FUNC_SUBTRACT,[j0]:n.FUNC_REVERSE_SUBTRACT};Le[Y0]=n.MIN,Le[$0]=n.MAX;const k={[q0]:n.ZERO,[K0]:n.ONE,[Z0]:n.SRC_COLOR,[Wu]:n.SRC_ALPHA,[iv]:n.SRC_ALPHA_SATURATE,[tv]:n.DST_COLOR,[J0]:n.DST_ALPHA,[Q0]:n.ONE_MINUS_SRC_COLOR,[Xu]:n.ONE_MINUS_SRC_ALPHA,[nv]:n.ONE_MINUS_DST_COLOR,[ev]:n.ONE_MINUS_DST_ALPHA,[rv]:n.CONSTANT_COLOR,[sv]:n.ONE_MINUS_CONSTANT_COLOR,[ov]:n.CONSTANT_ALPHA,[av]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(X,Te,pe,me,Re,et,gt,zt,Xt,yt){if(X===or){E===!0&&(de(n.BLEND),E=!1);return}if(E===!1&&(fe(n.BLEND),E=!0),X!==W0){if(X!==M||yt!==G){if((x!==Gr||T!==Gr)&&(n.blendEquation(n.FUNC_ADD),x=Gr,T=Gr),yt)switch(X){case Wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gu:n.blendFunc(n.ONE,n.ONE);break;case _d:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _d:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}v=null,A=null,b=null,V=null,D.set(0,0,0),I=0,M=X,G=yt}return}Re=Re||Te,et=et||pe,gt=gt||me,(Te!==x||Re!==T)&&(n.blendEquationSeparate(Le[Te],Le[Re]),x=Te,T=Re),(pe!==v||me!==A||et!==b||gt!==V)&&(n.blendFuncSeparate(k[pe],k[me],k[et],k[gt]),v=pe,A=me,b=et,V=gt),(zt.equals(D)===!1||Xt!==I)&&(n.blendColor(zt.r,zt.g,zt.b,Xt),D.copy(zt),I=Xt),M=X,G=!1}function dt(X,Te){X.side===Ni?de(n.CULL_FACE):fe(n.CULL_FACE);let pe=X.side===xn;Te&&(pe=!pe),xt(pe),X.blending===Wr&&X.transparent===!1?_t(or):_t(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),l.setFunc(X.depthFunc),l.setTest(X.depthTest),l.setMask(X.depthWrite),o.setMask(X.colorWrite);const me=X.stencilWrite;u.setTest(me),me&&(u.setMask(X.stencilWriteMask),u.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),u.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Je(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function xt(X){L!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),L=X)}function Ye(X){X!==H0?(fe(n.CULL_FACE),X!==C&&(X===gd?n.cullFace(n.BACK):X===V0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),C=X}function bt(X){X!==N&&(ue&&n.lineWidth(X),N=X)}function Je(X,Te,pe){X?(fe(n.POLYGON_OFFSET_FILL),(H!==Te||Y!==pe)&&(n.polygonOffset(Te,pe),H=Te,Y=pe)):de(n.POLYGON_OFFSET_FILL)}function it(X){X?fe(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function F(X){X===void 0&&(X=n.TEXTURE0+ee-1),z!==X&&(n.activeTexture(X),z=X)}function R(X,Te,pe){pe===void 0&&(z===null?pe=n.TEXTURE0+ee-1:pe=z);let me=he[pe];me===void 0&&(me={type:void 0,texture:void 0},he[pe]=me),(me.type!==X||me.texture!==Te)&&(z!==pe&&(n.activeTexture(pe),z=pe),n.bindTexture(X,Te||K[X]),me.type=X,me.texture=Te)}function ce(){const X=he[z];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ge(){try{n.compressedTexImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{n.texSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qe(){try{n.texSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function De(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function lt(){try{n.texStorage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{n.texStorage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ue(){try{n.texImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{n.texImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function rt(X){re.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),re.copy(X))}function ze(X){be.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),be.copy(X))}function at(X,Te){let pe=h.get(Te);pe===void 0&&(pe=new WeakMap,h.set(Te,pe));let me=pe.get(X);me===void 0&&(me=n.getUniformBlockIndex(Te,X.name),pe.set(X,me))}function ut(X,Te){const me=h.get(Te).get(X);c.get(Te)!==me&&(n.uniformBlockBinding(Te,me,X.__bindingPointIndex),c.set(Te,me))}function Rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},z=null,he={},p={},_=new WeakMap,g=[],y=null,E=!1,M=null,x=null,v=null,A=null,T=null,b=null,V=null,D=new We(0,0,0),I=0,G=!1,L=null,C=null,N=null,H=null,Y=null,re.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:fe,disable:de,bindFramebuffer:Me,drawBuffers:Ce,useProgram:Ie,setBlending:_t,setMaterial:dt,setFlipSided:xt,setCullFace:Ye,setLineWidth:bt,setPolygonOffset:Je,setScissorTest:it,activeTexture:F,bindTexture:R,unbindTexture:ce,compressedTexImage2D:ge,compressedTexImage3D:xe,texImage2D:Ue,texImage3D:mt,updateUBOMapping:at,uniformBlockBinding:ut,texStorage2D:lt,texStorage3D:Ee,texSubImage2D:_e,texSubImage3D:qe,compressedTexSubImage2D:De,compressedTexSubImage3D:ke,scissor:rt,viewport:ze,reset:Rt}}function X_(n,e,t,r){const o=VT(r);switch(t){case Wd:return n*e;case jd:return n*e;case Yd:return n*e*2;case $d:return n*e/o.components*o.byteLength;case zc:return n*e/o.components*o.byteLength;case qd:return n*e*2/o.components*o.byteLength;case Bc:return n*e*2/o.components*o.byteLength;case Xd:return n*e*3/o.components*o.byteLength;case ui:return n*e*4/o.components*o.byteLength;case Hc:return n*e*4/o.components*o.byteLength;case Ra:case ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pa:case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ku:case Qu:return Math.max(n,16)*Math.max(e,8)/4;case qu:case Zu:return Math.max(n,8)*Math.max(e,8)/2;case Ju:case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Da:case gc:case _c:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kd:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xc:case yc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function VT(n){switch(n){case Oi:case Hd:return{byteLength:1,components:1};case Eo:case Vd:case Ro:return{byteLength:2,components:1};case Oc:case kc:return{byteLength:2,components:4};case Xr:case Fc:case Ii:return{byteLength:4,components:1};case Gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function GT(n,e,t,r,o,l,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ot,p=new WeakMap;let _;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,R){return y?new OffscreenCanvas(F,R):Ga("canvas")}function M(F,R,ce){let ge=1;const xe=it(F);if((xe.width>ce||xe.height>ce)&&(ge=ce/Math.max(xe.width,xe.height)),ge<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const _e=Math.floor(ge*xe.width),qe=Math.floor(ge*xe.height);_===void 0&&(_=E(_e,qe));const De=R?E(_e,qe):_;return De.width=_e,De.height=qe,De.getContext("2d").drawImage(F,0,0,_e,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+_e+"x"+qe+")."),De}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),F;return F}function x(F){return F.generateMipmaps&&F.minFilter!==An&&F.minFilter!==Kn}function v(F){n.generateMipmap(F)}function A(F,R,ce,ge,xe=!1){if(F!==null){if(n[F]!==void 0)return n[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let _e=R;if(R===n.RED&&(ce===n.FLOAT&&(_e=n.R32F),ce===n.HALF_FLOAT&&(_e=n.R16F),ce===n.UNSIGNED_BYTE&&(_e=n.R8)),R===n.RED_INTEGER&&(ce===n.UNSIGNED_BYTE&&(_e=n.R8UI),ce===n.UNSIGNED_SHORT&&(_e=n.R16UI),ce===n.UNSIGNED_INT&&(_e=n.R32UI),ce===n.BYTE&&(_e=n.R8I),ce===n.SHORT&&(_e=n.R16I),ce===n.INT&&(_e=n.R32I)),R===n.RG&&(ce===n.FLOAT&&(_e=n.RG32F),ce===n.HALF_FLOAT&&(_e=n.RG16F),ce===n.UNSIGNED_BYTE&&(_e=n.RG8)),R===n.RG_INTEGER&&(ce===n.UNSIGNED_BYTE&&(_e=n.RG8UI),ce===n.UNSIGNED_SHORT&&(_e=n.RG16UI),ce===n.UNSIGNED_INT&&(_e=n.RG32UI),ce===n.BYTE&&(_e=n.RG8I),ce===n.SHORT&&(_e=n.RG16I),ce===n.INT&&(_e=n.RG32I)),R===n.RGB&&ce===n.UNSIGNED_INT_5_9_9_9_REV&&(_e=n.RGB9_E5),R===n.RGBA){const qe=xe?ka:wt.getTransfer(ge);ce===n.FLOAT&&(_e=n.RGBA32F),ce===n.HALF_FLOAT&&(_e=n.RGBA16F),ce===n.UNSIGNED_BYTE&&(_e=qe===Dt?n.SRGB8_ALPHA8:n.RGBA8),ce===n.UNSIGNED_SHORT_4_4_4_4&&(_e=n.RGBA4),ce===n.UNSIGNED_SHORT_5_5_5_1&&(_e=n.RGB5_A1)}return(_e===n.R16F||_e===n.R32F||_e===n.RG16F||_e===n.RG32F||_e===n.RGBA16F||_e===n.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function T(F,R){let ce;return F?R===null||R===Xr||R===Ts?ce=n.DEPTH24_STENCIL8:R===Ii?ce=n.DEPTH32F_STENCIL8:R===Eo&&(ce=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Xr||R===Ts?ce=n.DEPTH_COMPONENT24:R===Ii?ce=n.DEPTH_COMPONENT32F:R===Eo&&(ce=n.DEPTH_COMPONENT16),ce}function b(F,R){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==An&&F.minFilter!==Kn?Math.log2(Math.max(R.width,R.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?R.mipmaps.length:1}function V(F){const R=F.target;R.removeEventListener("dispose",V),I(R),R.isVideoTexture&&p.delete(R)}function D(F){const R=F.target;R.removeEventListener("dispose",D),L(R)}function I(F){const R=r.get(F);if(R.__webglInit===void 0)return;const ce=F.source,ge=g.get(ce);if(ge){const xe=ge[R.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&G(F),Object.keys(ge).length===0&&g.delete(ce)}r.remove(F)}function G(F){const R=r.get(F);n.deleteTexture(R.__webglTexture);const ce=F.source,ge=g.get(ce);delete ge[R.__cacheKey],u.memory.textures--}function L(F){const R=r.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(R.__webglFramebuffer[ge]))for(let xe=0;xe<R.__webglFramebuffer[ge].length;xe++)n.deleteFramebuffer(R.__webglFramebuffer[ge][xe]);else n.deleteFramebuffer(R.__webglFramebuffer[ge]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[ge])}else{if(Array.isArray(R.__webglFramebuffer))for(let ge=0;ge<R.__webglFramebuffer.length;ge++)n.deleteFramebuffer(R.__webglFramebuffer[ge]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ge=0;ge<R.__webglColorRenderbuffer.length;ge++)R.__webglColorRenderbuffer[ge]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[ge]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ce=F.textures;for(let ge=0,xe=ce.length;ge<xe;ge++){const _e=r.get(ce[ge]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),u.memory.textures--),r.remove(ce[ge])}r.remove(F)}let C=0;function N(){C=0}function H(){const F=C;return F>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),C+=1,F}function Y(F){const R=[];return R.push(F.wrapS),R.push(F.wrapT),R.push(F.wrapR||0),R.push(F.magFilter),R.push(F.minFilter),R.push(F.anisotropy),R.push(F.internalFormat),R.push(F.format),R.push(F.type),R.push(F.generateMipmaps),R.push(F.premultiplyAlpha),R.push(F.flipY),R.push(F.unpackAlignment),R.push(F.colorSpace),R.join()}function ee(F,R){const ce=r.get(F);if(F.isVideoTexture&&bt(F),F.isRenderTargetTexture===!1&&F.version>0&&ce.__version!==F.version){const ge=F.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(ce,F,R);return}}t.bindTexture(n.TEXTURE_2D,ce.__webglTexture,n.TEXTURE0+R)}function ue(F,R){const ce=r.get(F);if(F.version>0&&ce.__version!==F.version){be(ce,F,R);return}t.bindTexture(n.TEXTURE_2D_ARRAY,ce.__webglTexture,n.TEXTURE0+R)}function J(F,R){const ce=r.get(F);if(F.version>0&&ce.__version!==F.version){be(ce,F,R);return}t.bindTexture(n.TEXTURE_3D,ce.__webglTexture,n.TEXTURE0+R)}function le(F,R){const ce=r.get(F);if(F.version>0&&ce.__version!==F.version){Q(ce,F,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture,n.TEXTURE0+R)}const z={[Oa]:n.REPEAT,[ir]:n.CLAMP_TO_EDGE,[$u]:n.MIRRORED_REPEAT},he={[An]:n.NEAREST,[wv]:n.NEAREST_MIPMAP_NEAREST,[Ea]:n.NEAREST_MIPMAP_LINEAR,[Kn]:n.LINEAR,[Ou]:n.LINEAR_MIPMAP_NEAREST,[rr]:n.LINEAR_MIPMAP_LINEAR},ne={[Rv]:n.NEVER,[Iv]:n.ALWAYS,[bv]:n.LESS,[Zd]:n.LEQUAL,[Pv]:n.EQUAL,[Nv]:n.GEQUAL,[Lv]:n.GREATER,[Dv]:n.NOTEQUAL};function O(F,R){if(R.type===Ii&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Kn||R.magFilter===Ou||R.magFilter===Ea||R.magFilter===rr||R.minFilter===Kn||R.minFilter===Ou||R.minFilter===Ea||R.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,z[R.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,z[R.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,z[R.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,he[R.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,he[R.minFilter]),R.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,ne[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===An||R.minFilter!==Ea&&R.minFilter!==rr||R.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const ce=e.get("EXT_texture_filter_anisotropic");n.texParameterf(F,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function re(F,R){let ce=!1;F.__webglInit===void 0&&(F.__webglInit=!0,R.addEventListener("dispose",V));const ge=R.source;let xe=g.get(ge);xe===void 0&&(xe={},g.set(ge,xe));const _e=Y(R);if(_e!==F.__cacheKey){xe[_e]===void 0&&(xe[_e]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,ce=!0),xe[_e].usedTimes++;const qe=xe[F.__cacheKey];qe!==void 0&&(xe[F.__cacheKey].usedTimes--,qe.usedTimes===0&&G(R)),F.__cacheKey=_e,F.__webglTexture=xe[_e].texture}return ce}function be(F,R,ce){let ge=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ge=n.TEXTURE_3D);const xe=re(F,R),_e=R.source;t.bindTexture(ge,F.__webglTexture,n.TEXTURE0+ce);const qe=r.get(_e);if(_e.version!==qe.__version||xe===!0){t.activeTexture(n.TEXTURE0+ce);const De=wt.getPrimaries(wt.workingColorSpace),ke=R.colorSpace===Ei?null:wt.getPrimaries(R.colorSpace),lt=R.colorSpace===Ei||De===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Ee=M(R.image,!1,o.maxTextureSize);Ee=Je(R,Ee);const Ue=l.convert(R.format,R.colorSpace),mt=l.convert(R.type);let rt=A(R.internalFormat,Ue,mt,R.colorSpace,R.isVideoTexture);O(ge,R);let ze;const at=R.mipmaps,ut=R.isVideoTexture!==!0,Rt=qe.__version===void 0||xe===!0,X=_e.dataReady,Te=b(R,Ee);if(R.isDepthTexture)rt=T(R.format===As,R.type),Rt&&(ut?t.texStorage2D(n.TEXTURE_2D,1,rt,Ee.width,Ee.height):t.texImage2D(n.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,Ue,mt,null));else if(R.isDataTexture)if(at.length>0){ut&&Rt&&t.texStorage2D(n.TEXTURE_2D,Te,rt,at[0].width,at[0].height);for(let pe=0,me=at.length;pe<me;pe++)ze=at[pe],ut?X&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ze.width,ze.height,Ue,mt,ze.data):t.texImage2D(n.TEXTURE_2D,pe,rt,ze.width,ze.height,0,Ue,mt,ze.data);R.generateMipmaps=!1}else ut?(Rt&&t.texStorage2D(n.TEXTURE_2D,Te,rt,Ee.width,Ee.height),X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ue,mt,Ee.data)):t.texImage2D(n.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,Ue,mt,Ee.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ut&&Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,rt,at[0].width,at[0].height,Ee.depth);for(let pe=0,me=at.length;pe<me;pe++)if(ze=at[pe],R.format!==ui)if(Ue!==null)if(ut){if(X)if(R.layerUpdates.size>0){const Re=X_(ze.width,ze.height,R.format,R.type);for(const et of R.layerUpdates){const gt=ze.data.subarray(et*Re/ze.data.BYTES_PER_ELEMENT,(et+1)*Re/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,et,ze.width,ze.height,1,Ue,gt,0,0)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ze.width,ze.height,Ee.depth,Ue,ze.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,rt,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ze.width,ze.height,Ee.depth,Ue,mt,ze.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,rt,ze.width,ze.height,Ee.depth,0,Ue,mt,ze.data)}else{ut&&Rt&&t.texStorage2D(n.TEXTURE_2D,Te,rt,at[0].width,at[0].height);for(let pe=0,me=at.length;pe<me;pe++)ze=at[pe],R.format!==ui?Ue!==null?ut?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,ze.width,ze.height,Ue,ze.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,rt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?X&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ze.width,ze.height,Ue,mt,ze.data):t.texImage2D(n.TEXTURE_2D,pe,rt,ze.width,ze.height,0,Ue,mt,ze.data)}else if(R.isDataArrayTexture)if(ut){if(Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,rt,Ee.width,Ee.height,Ee.depth),X)if(R.layerUpdates.size>0){const pe=X_(Ee.width,Ee.height,R.format,R.type);for(const me of R.layerUpdates){const Re=Ee.data.subarray(me*pe/Ee.data.BYTES_PER_ELEMENT,(me+1)*pe/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,Ee.width,Ee.height,1,Ue,mt,Re)}R.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,mt,Ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,rt,Ee.width,Ee.height,Ee.depth,0,Ue,mt,Ee.data);else if(R.isData3DTexture)ut?(Rt&&t.texStorage3D(n.TEXTURE_3D,Te,rt,Ee.width,Ee.height,Ee.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,mt,Ee.data)):t.texImage3D(n.TEXTURE_3D,0,rt,Ee.width,Ee.height,Ee.depth,0,Ue,mt,Ee.data);else if(R.isFramebufferTexture){if(Rt)if(ut)t.texStorage2D(n.TEXTURE_2D,Te,rt,Ee.width,Ee.height);else{let pe=Ee.width,me=Ee.height;for(let Re=0;Re<Te;Re++)t.texImage2D(n.TEXTURE_2D,Re,rt,pe,me,0,Ue,mt,null),pe>>=1,me>>=1}}else if(at.length>0){if(ut&&Rt){const pe=it(at[0]);t.texStorage2D(n.TEXTURE_2D,Te,rt,pe.width,pe.height)}for(let pe=0,me=at.length;pe<me;pe++)ze=at[pe],ut?X&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Ue,mt,ze):t.texImage2D(n.TEXTURE_2D,pe,rt,Ue,mt,ze);R.generateMipmaps=!1}else if(ut){if(Rt){const pe=it(Ee);t.texStorage2D(n.TEXTURE_2D,Te,rt,pe.width,pe.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,mt,Ee)}else t.texImage2D(n.TEXTURE_2D,0,rt,Ue,mt,Ee);x(R)&&v(ge),qe.__version=_e.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function Q(F,R,ce){if(R.image.length!==6)return;const ge=re(F,R),xe=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+ce);const _e=r.get(xe);if(xe.version!==_e.__version||ge===!0){t.activeTexture(n.TEXTURE0+ce);const qe=wt.getPrimaries(wt.workingColorSpace),De=R.colorSpace===Ei?null:wt.getPrimaries(R.colorSpace),ke=R.colorSpace===Ei||qe===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const lt=R.isCompressedTexture||R.image[0].isCompressedTexture,Ee=R.image[0]&&R.image[0].isDataTexture,Ue=[];for(let me=0;me<6;me++)!lt&&!Ee?Ue[me]=M(R.image[me],!0,o.maxCubemapSize):Ue[me]=Ee?R.image[me].image:R.image[me],Ue[me]=Je(R,Ue[me]);const mt=Ue[0],rt=l.convert(R.format,R.colorSpace),ze=l.convert(R.type),at=A(R.internalFormat,rt,ze,R.colorSpace),ut=R.isVideoTexture!==!0,Rt=_e.__version===void 0||ge===!0,X=xe.dataReady;let Te=b(R,mt);O(n.TEXTURE_CUBE_MAP,R);let pe;if(lt){ut&&Rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,at,mt.width,mt.height);for(let me=0;me<6;me++){pe=Ue[me].mipmaps;for(let Re=0;Re<pe.length;Re++){const et=pe[Re];R.format!==ui?rt!==null?ut?X&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,et.width,et.height,rt,et.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,at,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,et.width,et.height,rt,ze,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,at,et.width,et.height,0,rt,ze,et.data)}}}else{if(pe=R.mipmaps,ut&&Rt){pe.length>0&&Te++;const me=it(Ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,at,me.width,me.height)}for(let me=0;me<6;me++)if(Ee){ut?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ue[me].width,Ue[me].height,rt,ze,Ue[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,at,Ue[me].width,Ue[me].height,0,rt,ze,Ue[me].data);for(let Re=0;Re<pe.length;Re++){const gt=pe[Re].image[me].image;ut?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,gt.width,gt.height,rt,ze,gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,at,gt.width,gt.height,0,rt,ze,gt.data)}}else{ut?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,rt,ze,Ue[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,at,rt,ze,Ue[me]);for(let Re=0;Re<pe.length;Re++){const et=pe[Re];ut?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,rt,ze,et.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,at,rt,ze,et.image[me])}}}x(R)&&v(n.TEXTURE_CUBE_MAP),_e.__version=xe.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function K(F,R,ce,ge,xe,_e){const qe=l.convert(ce.format,ce.colorSpace),De=l.convert(ce.type),ke=A(ce.internalFormat,qe,De,ce.colorSpace);if(!r.get(R).__hasExternalTextures){const Ee=Math.max(1,R.width>>_e),Ue=Math.max(1,R.height>>_e);xe===n.TEXTURE_3D||xe===n.TEXTURE_2D_ARRAY?t.texImage3D(xe,_e,ke,Ee,Ue,R.depth,0,qe,De,null):t.texImage2D(xe,_e,ke,Ee,Ue,0,qe,De,null)}t.bindFramebuffer(n.FRAMEBUFFER,F),Ye(R)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,xe,r.get(ce).__webglTexture,0,xt(R)):(xe===n.TEXTURE_2D||xe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,xe,r.get(ce).__webglTexture,_e),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(F,R,ce){if(n.bindRenderbuffer(n.RENDERBUFFER,F),R.depthBuffer){const ge=R.depthTexture,xe=ge&&ge.isDepthTexture?ge.type:null,_e=T(R.stencilBuffer,xe),qe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=xt(R);Ye(R)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,_e,R.width,R.height):ce?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,_e,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,_e,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,qe,n.RENDERBUFFER,F)}else{const ge=R.textures;for(let xe=0;xe<ge.length;xe++){const _e=ge[xe],qe=l.convert(_e.format,_e.colorSpace),De=l.convert(_e.type),ke=A(_e.internalFormat,qe,De,_e.colorSpace),lt=xt(R);ce&&Ye(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,ke,R.width,R.height):Ye(R)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,ke,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,ke,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(F,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,F),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ee(R.depthTexture,0);const ge=r.get(R.depthTexture).__webglTexture,xe=xt(R);if(R.depthTexture.format===ys)Ye(R)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(R.depthTexture.format===As)Ye(R)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Me(F){const R=r.get(F),ce=F.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==F.depthTexture){const ge=F.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ge){const xe=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ge.removeEventListener("dispose",xe)};ge.addEventListener("dispose",xe),R.__depthDisposeCallback=xe}R.__boundDepthTexture=ge}if(F.depthTexture&&!R.__autoAllocateDepthBuffer){if(ce)throw new Error("target.depthTexture not supported in Cube render targets");de(R.__webglFramebuffer,F)}else if(ce){R.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[ge]),R.__webglDepthbuffer[ge]===void 0)R.__webglDepthbuffer[ge]=n.createRenderbuffer(),fe(R.__webglDepthbuffer[ge],F,!1);else{const xe=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=R.__webglDepthbuffer[ge];n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,_e)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),fe(R.__webglDepthbuffer,F,!1);else{const ge=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,xe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(F,R,ce){const ge=r.get(F);R!==void 0&&K(ge.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ce!==void 0&&Me(F)}function Ie(F){const R=F.texture,ce=r.get(F),ge=r.get(R);F.addEventListener("dispose",D);const xe=F.textures,_e=F.isWebGLCubeRenderTarget===!0,qe=xe.length>1;if(qe||(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=R.version,u.memory.textures++),_e){ce.__webglFramebuffer=[];for(let De=0;De<6;De++)if(R.mipmaps&&R.mipmaps.length>0){ce.__webglFramebuffer[De]=[];for(let ke=0;ke<R.mipmaps.length;ke++)ce.__webglFramebuffer[De][ke]=n.createFramebuffer()}else ce.__webglFramebuffer[De]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ce.__webglFramebuffer=[];for(let De=0;De<R.mipmaps.length;De++)ce.__webglFramebuffer[De]=n.createFramebuffer()}else ce.__webglFramebuffer=n.createFramebuffer();if(qe)for(let De=0,ke=xe.length;De<ke;De++){const lt=r.get(xe[De]);lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture(),u.memory.textures++)}if(F.samples>0&&Ye(F)===!1){ce.__webglMultisampledFramebuffer=n.createFramebuffer(),ce.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer);for(let De=0;De<xe.length;De++){const ke=xe[De];ce.__webglColorRenderbuffer[De]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ce.__webglColorRenderbuffer[De]);const lt=l.convert(ke.format,ke.colorSpace),Ee=l.convert(ke.type),Ue=A(ke.internalFormat,lt,Ee,ke.colorSpace,F.isXRRenderTarget===!0),mt=xt(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,Ue,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,ce.__webglColorRenderbuffer[De])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(ce.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(ce.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_e){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),O(n.TEXTURE_CUBE_MAP,R);for(let De=0;De<6;De++)if(R.mipmaps&&R.mipmaps.length>0)for(let ke=0;ke<R.mipmaps.length;ke++)K(ce.__webglFramebuffer[De][ke],F,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ke);else K(ce.__webglFramebuffer[De],F,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);x(R)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let De=0,ke=xe.length;De<ke;De++){const lt=xe[De],Ee=r.get(lt);t.bindTexture(n.TEXTURE_2D,Ee.__webglTexture),O(n.TEXTURE_2D,lt),K(ce.__webglFramebuffer,F,lt,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,0),x(lt)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let De=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(De=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(De,ge.__webglTexture),O(De,R),R.mipmaps&&R.mipmaps.length>0)for(let ke=0;ke<R.mipmaps.length;ke++)K(ce.__webglFramebuffer[ke],F,R,n.COLOR_ATTACHMENT0,De,ke);else K(ce.__webglFramebuffer,F,R,n.COLOR_ATTACHMENT0,De,0);x(R)&&v(De),t.unbindTexture()}F.depthBuffer&&Me(F)}function Le(F){const R=F.textures;for(let ce=0,ge=R.length;ce<ge;ce++){const xe=R[ce];if(x(xe)){const _e=F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,qe=r.get(xe).__webglTexture;t.bindTexture(_e,qe),v(_e),t.unbindTexture()}}}const k=[],_t=[];function dt(F){if(F.samples>0){if(Ye(F)===!1){const R=F.textures,ce=F.width,ge=F.height;let xe=n.COLOR_BUFFER_BIT;const _e=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,qe=r.get(F),De=R.length>1;if(De)for(let ke=0;ke<R.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,qe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let ke=0;ke<R.length;ke++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(xe|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(xe|=n.STENCIL_BUFFER_BIT)),De){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,qe.__webglColorRenderbuffer[ke]);const lt=r.get(R[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,lt,0)}n.blitFramebuffer(0,0,ce,ge,0,0,ce,ge,xe,n.NEAREST),h===!0&&(k.length=0,_t.length=0,k.push(n.COLOR_ATTACHMENT0+ke),F.depthBuffer&&F.resolveDepthBuffer===!1&&(k.push(_e),_t.push(_e),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_t)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),De)for(let ke=0;ke<R.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,qe.__webglColorRenderbuffer[ke]);const lt=r.get(R[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,qe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,lt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&h){const R=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function xt(F){return Math.min(o.maxSamples,F.samples)}function Ye(F){const R=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function bt(F){const R=u.render.frame;p.get(F)!==R&&(p.set(F,R),F.update())}function Je(F,R){const ce=F.colorSpace,ge=F.format,xe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ce!==fr&&ce!==Ei&&(wt.getTransfer(ce)===Dt?(ge!==ui||xe!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ce)),R}function it(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=ee,this.setTexture2DArray=ue,this.setTexture3D=J,this.setTextureCube=le,this.rebindTextures=Ce,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Ye}function Qv(n,e){function t(r,o=Ei){let l;const u=wt.getTransfer(o);if(r===Oi)return n.UNSIGNED_BYTE;if(r===Oc)return n.UNSIGNED_SHORT_4_4_4_4;if(r===kc)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Gd)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Hd)return n.BYTE;if(r===Vd)return n.SHORT;if(r===Eo)return n.UNSIGNED_SHORT;if(r===Fc)return n.INT;if(r===Xr)return n.UNSIGNED_INT;if(r===Ii)return n.FLOAT;if(r===Ro)return n.HALF_FLOAT;if(r===Wd)return n.ALPHA;if(r===Xd)return n.RGB;if(r===ui)return n.RGBA;if(r===jd)return n.LUMINANCE;if(r===Yd)return n.LUMINANCE_ALPHA;if(r===ys)return n.DEPTH_COMPONENT;if(r===As)return n.DEPTH_STENCIL;if(r===$d)return n.RED;if(r===zc)return n.RED_INTEGER;if(r===qd)return n.RG;if(r===Bc)return n.RG_INTEGER;if(r===Hc)return n.RGBA_INTEGER;if(r===Ra||r===ba||r===Pa||r===La)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ra)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ba)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pa)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===La)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ra)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ba)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pa)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===La)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qu||r===Ku||r===Zu||r===Qu)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===qu)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ku)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zu)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qu)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ju||r===ec||r===tc)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ju||r===ec)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===tc)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nc||r===ic||r===rc||r===sc||r===oc||r===ac||r===lc||r===uc||r===cc||r===fc||r===hc||r===dc||r===pc||r===mc)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===nc)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ic)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rc)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sc)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oc)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ac)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lc)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uc)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cc)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fc)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hc)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dc)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pc)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mc)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Da||r===gc||r===_c)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Da)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gc)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_c)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kd||r===vc||r===xc||r===yc)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Da)return l.COMPRESSED_RED_RGTC1_EXT;if(r===vc)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yc)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ts?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}class Jv extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vo extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WT={type:"move"};class ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const c=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,r),v=this._getHandJoint(d,M);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],g=p.position.distanceTo(_.position),y=.02,E=.005;d.inputState.pinching&&g>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(WT)))}return c!==null&&(c.visible=o!==null),h!==null&&(h.visible=l!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new vo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const XT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jT=`
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

}`;class YT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new yn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Jn({vertexShader:XT,fragmentShader:jT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zn(new Ka(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $T extends Yr{constructor(e,t){super();const r=this;let o=null,l=1,u=null,c="local-floor",h=1,d=null,p=null,_=null,g=null,y=null,E=null;const M=new YT,x=t.getContextAttributes();let v=null,A=null;const T=[],b=[],V=new ot;let D=null;const I=new qn;I.layers.enable(1),I.viewport=new $t;const G=new qn;G.layers.enable(2),G.viewport=new $t;const L=[I,G],C=new Jv;C.layers.enable(1),C.layers.enable(2);let N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let K=T[Q];return K===void 0&&(K=new ad,T[Q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Q){let K=T[Q];return K===void 0&&(K=new ad,T[Q]=K),K.getGripSpace()},this.getHand=function(Q){let K=T[Q];return K===void 0&&(K=new ad,T[Q]=K),K.getHandSpace()};function Y(Q){const K=b.indexOf(Q.inputSource);if(K===-1)return;const fe=T[K];fe!==void 0&&(fe.update(Q.inputSource,Q.frame,d||u),fe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ee(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",ue);for(let Q=0;Q<T.length;Q++){const K=b[Q];K!==null&&(b[Q]=null,T[Q].disconnect(K))}N=null,H=null,M.reset(),e.setRenderTarget(v),y=null,g=null,_=null,o=null,A=null,be.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",ue),x.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(V),o.renderState.layers===void 0){const K={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,K),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),A=new ur(y.framebufferWidth,y.framebufferHeight,{format:ui,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,fe=null,de=null;x.depth&&(de=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=x.stencil?As:ys,fe=x.stencil?Ts:Xr);const Me={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:l};_=new XRWebGLBinding(o,t),g=_.createProjectionLayer(Me),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),A=new ur(g.textureWidth,g.textureHeight,{format:ui,type:Oi,depthTexture:new up(g.textureWidth,g.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(h),d=null,u=await o.requestReferenceSpace(c),be.setContext(o),be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ue(Q){for(let K=0;K<Q.removed.length;K++){const fe=Q.removed[K],de=b.indexOf(fe);de>=0&&(b[de]=null,T[de].disconnect(fe))}for(let K=0;K<Q.added.length;K++){const fe=Q.added[K];let de=b.indexOf(fe);if(de===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=b.length){b.push(fe),de=Ce;break}else if(b[Ce]===null){b[Ce]=fe,de=Ce;break}if(de===-1)break}const Me=T[de];Me&&Me.connect(fe)}}const J=new $,le=new $;function z(Q,K,fe){J.setFromMatrixPosition(K.matrixWorld),le.setFromMatrixPosition(fe.matrixWorld);const de=J.distanceTo(le),Me=K.projectionMatrix.elements,Ce=fe.projectionMatrix.elements,Ie=Me[14]/(Me[10]-1),Le=Me[14]/(Me[10]+1),k=(Me[9]+1)/Me[5],_t=(Me[9]-1)/Me[5],dt=(Me[8]-1)/Me[0],xt=(Ce[8]+1)/Ce[0],Ye=Ie*dt,bt=Ie*xt,Je=de/(-dt+xt),it=Je*-dt;if(K.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(it),Q.translateZ(Je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Me[10]===-1)Q.projectionMatrix.copy(K.projectionMatrix),Q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const F=Ie+Je,R=Le+Je,ce=Ye-it,ge=bt+(de-it),xe=k*Le/R*F,_e=_t*Le/R*F;Q.projectionMatrix.makePerspective(ce,ge,xe,_e,F,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function he(Q,K){K===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(K.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let K=Q.near,fe=Q.far;M.texture!==null&&(M.depthNear>0&&(K=M.depthNear),M.depthFar>0&&(fe=M.depthFar)),C.near=G.near=I.near=K,C.far=G.far=I.far=fe,(N!==C.near||H!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),N=C.near,H=C.far);const de=Q.parent,Me=C.cameras;he(C,de);for(let Ce=0;Ce<Me.length;Ce++)he(Me[Ce],de);Me.length===2?z(C,I,G):C.projectionMatrix.copy(I.projectionMatrix),ne(Q,C,de)};function ne(Q,K,fe){fe===null?Q.matrix.copy(K.matrixWorld):(Q.matrix.copy(fe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(K.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(K.projectionMatrix),Q.projectionMatrixInverse.copy(K.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Va*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(g===null&&y===null))return h},this.setFoveation=function(Q){h=Q,g!==null&&(g.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)};let O=null;function re(Q,K){if(p=K.getViewerPose(d||u),E=K,p!==null){const fe=p.views;y!==null&&(e.setRenderTargetFramebuffer(A,y.framebuffer),e.setRenderTarget(A));let de=!1;fe.length!==C.cameras.length&&(C.cameras.length=0,de=!0);for(let Ce=0;Ce<fe.length;Ce++){const Ie=fe[Ce];let Le=null;if(y!==null)Le=y.getViewport(Ie);else{const _t=_.getViewSubImage(g,Ie);Le=_t.viewport,Ce===0&&(e.setRenderTargetTextures(A,_t.colorTexture,g.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(A))}let k=L[Ce];k===void 0&&(k=new qn,k.layers.enable(Ce),k.viewport=new $t,L[Ce]=k),k.matrix.fromArray(Ie.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(Ie.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(Le.x,Le.y,Le.width,Le.height),Ce===0&&(C.matrix.copy(k.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),de===!0&&C.cameras.push(k)}const Me=o.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const Ce=_.getDepthInformation(fe[0]);Ce&&Ce.isValid&&Ce.texture&&M.init(e,Ce,o.renderState)}}for(let fe=0;fe<T.length;fe++){const de=b[fe],Me=T[fe];de!==null&&Me!==void 0&&Me.update(de,K,d||u)}O&&O(Q,K),K.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:K}),E=null}const be=new Xv;be.setAnimationLoop(re),this.setAnimationLoop=function(Q){O=Q},this.dispose=function(){}}}const ds=new ci,qT=new kt;function KT(n,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,Hv(n)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,A,T,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(x,v):v.isMeshToonMaterial?(l(x,v),_(x,v)):v.isMeshPhongMaterial?(l(x,v),p(x,v)):v.isMeshStandardMaterial?(l(x,v),g(x,v),v.isMeshPhysicalMaterial&&y(x,v,b)):v.isMeshMatcapMaterial?(l(x,v),E(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),M(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&c(x,v)):v.isPointsMaterial?h(x,v,A,T):v.isSpriteMaterial?d(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===xn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===xn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const A=e.get(v),T=A.envMap,b=A.envMapRotation;T&&(x.envMap.value=T,ds.copy(b),ds.x*=-1,ds.y*=-1,ds.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),x.envMapRotation.value.setFromMatrix4(qT.makeRotationFromEuler(ds)),x.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function c(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function h(x,v,A,T){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*A,x.scale.value=T*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function d(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function _(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function g(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function y(x,v,A){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===xn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=A.texture,x.transmissionSamplerSize.value.set(A.width,A.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function M(x,v){const A=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(A.matrixWorld),x.nearDistance.value=A.shadow.camera.near,x.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function ZT(n,e,t,r){let o={},l={},u=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(A,T){const b=T.program;r.uniformBlockBinding(A,b)}function d(A,T){let b=o[A.id];b===void 0&&(E(A),b=p(A),o[A.id]=b,A.addEventListener("dispose",x));const V=T.program;r.updateUBOMapping(A,V);const D=e.render.frame;l[A.id]!==D&&(g(A),l[A.id]=D)}function p(A){const T=_();A.__bindingPointIndex=T;const b=n.createBuffer(),V=A.__size,D=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,V,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,b),b}function _(){for(let A=0;A<c;A++)if(u.indexOf(A)===-1)return u.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const T=o[A.id],b=A.uniforms,V=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let D=0,I=b.length;D<I;D++){const G=Array.isArray(b[D])?b[D]:[b[D]];for(let L=0,C=G.length;L<C;L++){const N=G[L];if(y(N,D,L,V)===!0){const H=N.__offset,Y=Array.isArray(N.value)?N.value:[N.value];let ee=0;for(let ue=0;ue<Y.length;ue++){const J=Y[ue],le=M(J);typeof J=="number"||typeof J=="boolean"?(N.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,H+ee,N.__data)):J.isMatrix3?(N.__data[0]=J.elements[0],N.__data[1]=J.elements[1],N.__data[2]=J.elements[2],N.__data[3]=0,N.__data[4]=J.elements[3],N.__data[5]=J.elements[4],N.__data[6]=J.elements[5],N.__data[7]=0,N.__data[8]=J.elements[6],N.__data[9]=J.elements[7],N.__data[10]=J.elements[8],N.__data[11]=0):(J.toArray(N.__data,ee),ee+=le.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(A,T,b,V){const D=A.value,I=T+"_"+b;if(V[I]===void 0)return typeof D=="number"||typeof D=="boolean"?V[I]=D:V[I]=D.clone(),!0;{const G=V[I];if(typeof D=="number"||typeof D=="boolean"){if(G!==D)return V[I]=D,!0}else if(G.equals(D)===!1)return G.copy(D),!0}return!1}function E(A){const T=A.uniforms;let b=0;const V=16;for(let I=0,G=T.length;I<G;I++){const L=Array.isArray(T[I])?T[I]:[T[I]];for(let C=0,N=L.length;C<N;C++){const H=L[C],Y=Array.isArray(H.value)?H.value:[H.value];for(let ee=0,ue=Y.length;ee<ue;ee++){const J=Y[ee],le=M(J),z=b%V,he=z%le.boundary,ne=z+he;b+=he,ne!==0&&V-ne<le.storage&&(b+=V-ne),H.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=le.storage}}}const D=b%V;return D>0&&(b+=V-D),A.__size=b,A.__cache={},this}function M(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function x(A){const T=A.target;T.removeEventListener("dispose",x);const b=u.indexOf(T.__bindingPointIndex);u.splice(b,1),n.deleteBuffer(o[T.id]),delete o[T.id],delete l[T.id]}function v(){for(const A in o)n.deleteBuffer(o[A]);u=[],o={},l={}}return{bind:h,update:d,dispose:v}}class ex{constructor(e={}){const{canvas:t=Fv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let g;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=r.getContextAttributes().alpha}else g=u;const y=new Uint32Array(4),E=new Int32Array(4);let M=null,x=null;const v=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this.toneMapping=ar,this.toneMappingExposure=1;const T=this;let b=!1,V=0,D=0,I=null,G=-1,L=null;const C=new $t,N=new $t;let H=null;const Y=new We(0);let ee=0,ue=t.width,J=t.height,le=1,z=null,he=null;const ne=new $t(0,0,ue,J),O=new $t(0,0,ue,J);let re=!1;const be=new Xc;let Q=!1,K=!1;const fe=new kt,de=new $,Me=new $t,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function Le(){return I===null?le:1}let k=r;function _t(P,j){return t.getContext(P,j)}try{const P={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ic}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",Re,!1),k===null){const j="webgl2";if(k=_t(j,P),k===null)throw _t(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let dt,xt,Ye,bt,Je,it,F,R,ce,ge,xe,_e,qe,De,ke,lt,Ee,Ue,mt,rt,ze,at,ut,Rt;function X(){dt=new l1(k),dt.init(),at=new Qv(k,dt),xt=new n1(k,dt,e,at),Ye=new HT(k),bt=new f1(k),Je=new bT,it=new GT(k,dt,Ye,Je,xt,at,bt),F=new r1(T),R=new a1(T),ce=new vM(k),ut=new e1(k,ce),ge=new u1(k,ce,bt,ut),xe=new d1(k,ge,ce,bt),mt=new h1(k,xt,it),lt=new i1(Je),_e=new RT(T,F,R,dt,xt,ut,lt),qe=new KT(T,Je),De=new LT,ke=new OT(dt),Ue=new Jw(T,F,R,Ye,xe,g,h),Ee=new BT(T,xe,xt),Rt=new ZT(k,bt,xt,Ye),rt=new t1(k,dt,bt),ze=new c1(k,dt,bt),bt.programs=_e.programs,T.capabilities=xt,T.extensions=dt,T.properties=Je,T.renderLists=De,T.shadowMap=Ee,T.state=Ye,T.info=bt}X();const Te=new $T(T,k);this.xr=Te,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const P=dt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=dt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(P){P!==void 0&&(le=P,this.setSize(ue,J,!1))},this.getSize=function(P){return P.set(ue,J)},this.setSize=function(P,j,se=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=P,J=j,t.width=Math.floor(P*le),t.height=Math.floor(j*le),se===!0&&(t.style.width=P+"px",t.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(ue*le,J*le).floor()},this.setDrawingBufferSize=function(P,j,se){ue=P,J=j,le=se,t.width=Math.floor(P*se),t.height=Math.floor(j*se),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(ne)},this.setViewport=function(P,j,se,oe){P.isVector4?ne.set(P.x,P.y,P.z,P.w):ne.set(P,j,se,oe),Ye.viewport(C.copy(ne).multiplyScalar(le).round())},this.getScissor=function(P){return P.copy(O)},this.setScissor=function(P,j,se,oe){P.isVector4?O.set(P.x,P.y,P.z,P.w):O.set(P,j,se,oe),Ye.scissor(N.copy(O).multiplyScalar(le).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(P){Ye.setScissorTest(re=P)},this.setOpaqueSort=function(P){z=P},this.setTransparentSort=function(P){he=P},this.getClearColor=function(P){return P.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(P=!0,j=!0,se=!0){let oe=0;if(P){let q=!1;if(I!==null){const Ae=I.texture.format;q=Ae===Hc||Ae===Bc||Ae===zc}if(q){const Ae=I.texture.type,Fe=Ae===Oi||Ae===Xr||Ae===Eo||Ae===Ts||Ae===Oc||Ae===kc,Ve=Ue.getClearColor(),Pe=Ue.getClearAlpha(),nt=Ve.r,tt=Ve.g,je=Ve.b;Fe?(y[0]=nt,y[1]=tt,y[2]=je,y[3]=Pe,k.clearBufferuiv(k.COLOR,0,y)):(E[0]=nt,E[1]=tt,E[2]=je,E[3]=Pe,k.clearBufferiv(k.COLOR,0,E))}else oe|=k.COLOR_BUFFER_BIT}j&&(oe|=k.DEPTH_BUFFER_BIT),se&&(oe|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),De.dispose(),ke.dispose(),Je.dispose(),F.dispose(),R.dispose(),xe.dispose(),ut.dispose(),Rt.dispose(),_e.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Bn),Te.removeEventListener("sessionend",dr),fi.stop()};function pe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const P=bt.autoReset,j=Ee.enabled,se=Ee.autoUpdate,oe=Ee.needsUpdate,q=Ee.type;X(),bt.autoReset=P,Ee.enabled=j,Ee.autoUpdate=se,Ee.needsUpdate=oe,Ee.type=q}function Re(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function et(P){const j=P.target;j.removeEventListener("dispose",et),gt(j)}function gt(P){zt(P),Je.remove(P)}function zt(P){const j=Je.get(P).programs;j!==void 0&&(j.forEach(function(se){_e.releaseProgram(se)}),P.isShaderMaterial&&_e.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,se,oe,q,Ae){j===null&&(j=Ce);const Fe=q.isMesh&&q.matrixWorld.determinant()<0,Ve=Jc(P,j,se,oe,q);Ye.setMaterial(oe,Fe);let Pe=se.index,nt=1;if(oe.wireframe===!0){if(Pe=ge.getWireframeAttribute(se),Pe===void 0)return;nt=2}const tt=se.drawRange,je=se.attributes.position;let vt=tt.start*nt,Ft=(tt.start+tt.count)*nt;Ae!==null&&(vt=Math.max(vt,Ae.start*nt),Ft=Math.min(Ft,(Ae.start+Ae.count)*nt)),Pe!==null?(vt=Math.max(vt,0),Ft=Math.min(Ft,Pe.count)):je!=null&&(vt=Math.max(vt,0),Ft=Math.min(Ft,je.count));const Nt=Ft-vt;if(Nt<0||Nt===1/0)return;ut.setup(q,oe,Ve,se,Pe);let tn,ct=rt;if(Pe!==null&&(tn=ce.get(Pe),ct=ze,ct.setIndex(tn)),q.isMesh)oe.wireframe===!0?(Ye.setLineWidth(oe.wireframeLinewidth*Le()),ct.setMode(k.LINES)):ct.setMode(k.TRIANGLES);else if(q.isLine){let $e=oe.linewidth;$e===void 0&&($e=1),Ye.setLineWidth($e*Le()),q.isLineSegments?ct.setMode(k.LINES):q.isLineLoop?ct.setMode(k.LINE_LOOP):ct.setMode(k.LINE_STRIP)}else q.isPoints?ct.setMode(k.POINTS):q.isSprite&&ct.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ct.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))ct.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const $e=q._multiDrawStarts,Tt=q._multiDrawCounts,Mt=q._multiDrawCount,Hn=Pe?ce.get(Pe).bytesPerElement:1,gr=Je.get(oe).currentProgram.getUniforms();for(let nn=0;nn<Mt;nn++)gr.setValue(k,"_gl_DrawID",nn),ct.render($e[nn]/Hn,Tt[nn])}else if(q.isInstancedMesh)ct.renderInstances(vt,Nt,q.count);else if(se.isInstancedBufferGeometry){const $e=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Tt=Math.min(se.instanceCount,$e);ct.renderInstances(vt,Nt,Tt)}else ct.render(vt,Nt)};function Xt(P,j,se){P.transparent===!0&&P.side===Ni&&P.forceSinglePass===!1?(P.side=xn,P.needsUpdate=!0,mr(P,j,se),P.side=lr,P.needsUpdate=!0,mr(P,j,se),P.side=Ni):mr(P,j,se)}this.compile=function(P,j,se=null){se===null&&(se=P),x=ke.get(se),x.init(j),A.push(x),se.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),P!==se&&P.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights();const oe=new Set;return P.traverse(function(q){const Ae=q.material;if(Ae)if(Array.isArray(Ae))for(let Fe=0;Fe<Ae.length;Fe++){const Ve=Ae[Fe];Xt(Ve,se,q),oe.add(Ve)}else Xt(Ae,se,q),oe.add(Ae)}),A.pop(),x=null,oe},this.compileAsync=function(P,j,se=null){const oe=this.compile(P,j,se);return new Promise(q=>{function Ae(){if(oe.forEach(function(Fe){Je.get(Fe).currentProgram.isReady()&&oe.delete(Fe)}),oe.size===0){q(P);return}setTimeout(Ae,10)}dt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let yt=null;function zn(P){yt&&yt(P)}function Bn(){fi.stop()}function dr(){fi.start()}const fi=new Xv;fi.setAnimationLoop(zn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(P){yt=P,Te.setAnimationLoop(P),P===null?fi.stop():fi.start()},Te.addEventListener("sessionstart",Bn),Te.addEventListener("sessionend",dr),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(j),j=Te.getCamera()),P.isScene===!0&&P.onBeforeRender(T,P,j,I),x=ke.get(P,A.length),x.init(j),A.push(x),fe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),be.setFromProjectionMatrix(fe),K=this.localClippingEnabled,Q=lt.init(this.clippingPlanes,K),M=De.get(P,v.length),M.init(),v.push(M),Te.enabled===!0&&Te.isPresenting===!0){const Ae=T.xr.getDepthSensingMesh();Ae!==null&&zi(Ae,j,-1/0,T.sortObjects)}zi(P,j,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(z,he),Ie=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Ie&&Ue.addToRenderList(M,P),this.info.render.frame++,Q===!0&&lt.beginShadows();const se=x.state.shadowsArray;Ee.render(se,P,j),Q===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=M.opaque,q=M.transmissive;if(x.setupLights(),j.isArrayCamera){const Ae=j.cameras;if(q.length>0)for(let Fe=0,Ve=Ae.length;Fe<Ve;Fe++){const Pe=Ae[Fe];pr(oe,q,P,Pe)}Ie&&Ue.render(P);for(let Fe=0,Ve=Ae.length;Fe<Ve;Fe++){const Pe=Ae[Fe];Ja(M,P,Pe,Pe.viewport)}}else q.length>0&&pr(oe,q,P,j),Ie&&Ue.render(P),Ja(M,P,j);I!==null&&(it.updateMultisampleRenderTarget(I),it.updateRenderTargetMipmap(I)),P.isScene===!0&&P.onAfterRender(T,P,j),ut.resetDefaultState(),G=-1,L=null,A.pop(),A.length>0?(x=A[A.length-1],Q===!0&&lt.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,v.pop(),v.length>0?M=v[v.length-1]:M=null};function zi(P,j,se,oe){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||be.intersectsSprite(P)){oe&&Me.setFromMatrixPosition(P.matrixWorld).applyMatrix4(fe);const Fe=xe.update(P),Ve=P.material;Ve.visible&&M.push(P,Fe,Ve,se,Me.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||be.intersectsObject(P))){const Fe=xe.update(P),Ve=P.material;if(oe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Me.copy(P.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Me.copy(Fe.boundingSphere.center)),Me.applyMatrix4(P.matrixWorld).applyMatrix4(fe)),Array.isArray(Ve)){const Pe=Fe.groups;for(let nt=0,tt=Pe.length;nt<tt;nt++){const je=Pe[nt],vt=Ve[je.materialIndex];vt&&vt.visible&&M.push(P,Fe,vt,se,Me.z,je)}}else Ve.visible&&M.push(P,Fe,Ve,se,Me.z,null)}}const Ae=P.children;for(let Fe=0,Ve=Ae.length;Fe<Ve;Fe++)zi(Ae[Fe],j,se,oe)}function Ja(P,j,se,oe){const q=P.opaque,Ae=P.transmissive,Fe=P.transparent;x.setupLightsView(se),Q===!0&&lt.setGlobalState(T.clippingPlanes,se),oe&&Ye.viewport(C.copy(oe)),q.length>0&&Bi(q,j,se),Ae.length>0&&Bi(Ae,j,se),Fe.length>0&&Bi(Fe,j,se),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function pr(P,j,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[oe.id]===void 0&&(x.state.transmissionRenderTarget[oe.id]=new ur(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Ro:Oi,minFilter:rr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Ae=x.state.transmissionRenderTarget[oe.id],Fe=oe.viewport||C;Ae.setSize(Fe.z,Fe.w);const Ve=T.getRenderTarget();T.setRenderTarget(Ae),T.getClearColor(Y),ee=T.getClearAlpha(),ee<1&&T.setClearColor(16777215,.5),T.clear(),Ie&&Ue.render(se);const Pe=T.toneMapping;T.toneMapping=ar;const nt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),x.setupLightsView(oe),Q===!0&&lt.setGlobalState(T.clippingPlanes,oe),Bi(P,se,oe),it.updateMultisampleRenderTarget(Ae),it.updateRenderTargetMipmap(Ae),dt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let je=0,vt=j.length;je<vt;je++){const Ft=j[je],Nt=Ft.object,tn=Ft.geometry,ct=Ft.material,$e=Ft.group;if(ct.side===Ni&&Nt.layers.test(oe.layers)){const Tt=ct.side;ct.side=xn,ct.needsUpdate=!0,$r(Nt,se,oe,tn,ct,$e),ct.side=Tt,ct.needsUpdate=!0,tt=!0}}tt===!0&&(it.updateMultisampleRenderTarget(Ae),it.updateRenderTargetMipmap(Ae))}T.setRenderTarget(Ve),T.setClearColor(Y,ee),nt!==void 0&&(oe.viewport=nt),T.toneMapping=Pe}function Bi(P,j,se){const oe=j.isScene===!0?j.overrideMaterial:null;for(let q=0,Ae=P.length;q<Ae;q++){const Fe=P[q],Ve=Fe.object,Pe=Fe.geometry,nt=oe===null?Fe.material:oe,tt=Fe.group;Ve.layers.test(se.layers)&&$r(Ve,j,se,Pe,nt,tt)}}function $r(P,j,se,oe,q,Ae){P.onBeforeRender(T,j,se,oe,q,Ae),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(T,j,se,oe,P,Ae),q.transparent===!0&&q.side===Ni&&q.forceSinglePass===!1?(q.side=xn,q.needsUpdate=!0,T.renderBufferDirect(se,j,oe,q,P,Ae),q.side=lr,q.needsUpdate=!0,T.renderBufferDirect(se,j,oe,q,P,Ae),q.side=Ni):T.renderBufferDirect(se,j,oe,q,P,Ae),P.onAfterRender(T,j,se,oe,q,Ae)}function mr(P,j,se){j.isScene!==!0&&(j=Ce);const oe=Je.get(P),q=x.state.lights,Ae=x.state.shadowsArray,Fe=q.state.version,Ve=_e.getParameters(P,q.state,Ae,j,se),Pe=_e.getProgramCacheKey(Ve);let nt=oe.programs;oe.environment=P.isMeshStandardMaterial?j.environment:null,oe.fog=j.fog,oe.envMap=(P.isMeshStandardMaterial?R:F).get(P.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&P.envMap===null?j.environmentRotation:P.envMapRotation,nt===void 0&&(P.addEventListener("dispose",et),nt=new Map,oe.programs=nt);let tt=nt.get(Pe);if(tt!==void 0){if(oe.currentProgram===tt&&oe.lightsStateVersion===Fe)return tl(P,Ve),tt}else Ve.uniforms=_e.getUniforms(P),P.onBeforeCompile(Ve,T),tt=_e.acquireProgram(Ve,Pe),nt.set(Pe,tt),oe.uniforms=Ve.uniforms;const je=oe.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(je.clippingPlanes=lt.uniform),tl(P,Ve),oe.needsLights=nl(P),oe.lightsStateVersion=Fe,oe.needsLights&&(je.ambientLightColor.value=q.state.ambient,je.lightProbe.value=q.state.probe,je.directionalLights.value=q.state.directional,je.directionalLightShadows.value=q.state.directionalShadow,je.spotLights.value=q.state.spot,je.spotLightShadows.value=q.state.spotShadow,je.rectAreaLights.value=q.state.rectArea,je.ltc_1.value=q.state.rectAreaLTC1,je.ltc_2.value=q.state.rectAreaLTC2,je.pointLights.value=q.state.point,je.pointLightShadows.value=q.state.pointShadow,je.hemisphereLights.value=q.state.hemi,je.directionalShadowMap.value=q.state.directionalShadowMap,je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,je.spotShadowMap.value=q.state.spotShadowMap,je.spotLightMatrix.value=q.state.spotLightMatrix,je.spotLightMap.value=q.state.spotLightMap,je.pointShadowMap.value=q.state.pointShadowMap,je.pointShadowMatrix.value=q.state.pointShadowMatrix),oe.currentProgram=tt,oe.uniformsList=null,tt}function el(P){if(P.uniformsList===null){const j=P.currentProgram.getUniforms();P.uniformsList=ku.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function tl(P,j){const se=Je.get(P);se.outputColorSpace=j.outputColorSpace,se.batching=j.batching,se.batchingColor=j.batchingColor,se.instancing=j.instancing,se.instancingColor=j.instancingColor,se.instancingMorph=j.instancingMorph,se.skinning=j.skinning,se.morphTargets=j.morphTargets,se.morphNormals=j.morphNormals,se.morphColors=j.morphColors,se.morphTargetsCount=j.morphTargetsCount,se.numClippingPlanes=j.numClippingPlanes,se.numIntersection=j.numClipIntersection,se.vertexAlphas=j.vertexAlphas,se.vertexTangents=j.vertexTangents,se.toneMapping=j.toneMapping}function Jc(P,j,se,oe,q){j.isScene!==!0&&(j=Ce),it.resetTextureUnits();const Ae=j.fog,Fe=oe.isMeshStandardMaterial?j.environment:null,Ve=I===null?T.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:fr,Pe=(oe.isMeshStandardMaterial?R:F).get(oe.envMap||Fe),nt=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,tt=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),je=!!se.morphAttributes.position,vt=!!se.morphAttributes.normal,Ft=!!se.morphAttributes.color;let Nt=ar;oe.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Nt=T.toneMapping);const tn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ct=tn!==void 0?tn.length:0,$e=Je.get(oe),Tt=x.state.lights;if(Q===!0&&(K===!0||P!==L)){const Rn=P===L&&oe.id===G;lt.setState(oe,P,Rn)}let Mt=!1;oe.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Tt.state.version||$e.outputColorSpace!==Ve||q.isBatchedMesh&&$e.batching===!1||!q.isBatchedMesh&&$e.batching===!0||q.isBatchedMesh&&$e.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&$e.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&$e.instancing===!1||!q.isInstancedMesh&&$e.instancing===!0||q.isSkinnedMesh&&$e.skinning===!1||!q.isSkinnedMesh&&$e.skinning===!0||q.isInstancedMesh&&$e.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&$e.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&$e.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&$e.instancingMorph===!1&&q.morphTexture!==null||$e.envMap!==Pe||oe.fog===!0&&$e.fog!==Ae||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==lt.numPlanes||$e.numIntersection!==lt.numIntersection)||$e.vertexAlphas!==nt||$e.vertexTangents!==tt||$e.morphTargets!==je||$e.morphNormals!==vt||$e.morphColors!==Ft||$e.toneMapping!==Nt||$e.morphTargetsCount!==ct)&&(Mt=!0):(Mt=!0,$e.__version=oe.version);let Hn=$e.currentProgram;Mt===!0&&(Hn=mr(oe,j,q));let gr=!1,nn=!1,_r=!1;const Pt=Hn.getUniforms(),Vn=$e.uniforms;if(Ye.useProgram(Hn.program)&&(gr=!0,nn=!0,_r=!0),oe.id!==G&&(G=oe.id,nn=!0),gr||L!==P){Pt.setValue(k,"projectionMatrix",P.projectionMatrix),Pt.setValue(k,"viewMatrix",P.matrixWorldInverse);const Rn=Pt.map.cameraPosition;Rn!==void 0&&Rn.setValue(k,de.setFromMatrixPosition(P.matrixWorld)),xt.logarithmicDepthBuffer&&Pt.setValue(k,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Pt.setValue(k,"isOrthographic",P.isOrthographicCamera===!0),L!==P&&(L=P,nn=!0,_r=!0)}if(q.isSkinnedMesh){Pt.setOptional(k,q,"bindMatrix"),Pt.setOptional(k,q,"bindMatrixInverse");const Rn=q.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Pt.setValue(k,"boneTexture",Rn.boneTexture,it))}q.isBatchedMesh&&(Pt.setOptional(k,q,"batchingTexture"),Pt.setValue(k,"batchingTexture",q._matricesTexture,it),Pt.setOptional(k,q,"batchingIdTexture"),Pt.setValue(k,"batchingIdTexture",q._indirectTexture,it),Pt.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&Pt.setValue(k,"batchingColorTexture",q._colorsTexture,it));const Uo=se.morphAttributes;if((Uo.position!==void 0||Uo.normal!==void 0||Uo.color!==void 0)&&mt.update(q,se,Hn),(nn||$e.receiveShadow!==q.receiveShadow)&&($e.receiveShadow=q.receiveShadow,Pt.setValue(k,"receiveShadow",q.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Vn.envMap.value=Pe,Vn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&j.environment!==null&&(Vn.envMapIntensity.value=j.environmentIntensity),nn&&(Pt.setValue(k,"toneMappingExposure",T.toneMappingExposure),$e.needsLights&&Hi(Vn,_r),Ae&&oe.fog===!0&&qe.refreshFogUniforms(Vn,Ae),qe.refreshMaterialUniforms(Vn,oe,le,J,x.state.transmissionRenderTarget[P.id]),ku.upload(k,el($e),Vn,it)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(ku.upload(k,el($e),Vn,it),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Pt.setValue(k,"center",q.center),Pt.setValue(k,"modelViewMatrix",q.modelViewMatrix),Pt.setValue(k,"normalMatrix",q.normalMatrix),Pt.setValue(k,"modelMatrix",q.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Rn=oe.uniformsGroups;for(let qr=0,il=Rn.length;qr<il;qr++){const bs=Rn[qr];Rt.update(bs,Hn),Rt.bind(bs,Hn)}}return Hn}function Hi(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function nl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(P,j,se){Je.get(P.texture).__webglTexture=j,Je.get(P.depthTexture).__webglTexture=se;const oe=Je.get(P);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,j){const se=Je.get(P);se.__webglFramebuffer=j,se.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,se=0){I=P,V=j,D=se;let oe=!0,q=null,Ae=!1,Fe=!1;if(P){const Pe=Je.get(P);if(Pe.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(k.FRAMEBUFFER,null),oe=!1;else if(Pe.__webglFramebuffer===void 0)it.setupRenderTarget(P);else if(Pe.__hasExternalTextures)it.rebindTextures(P,Je.get(P.texture).__webglTexture,Je.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const je=P.depthTexture;if(Pe.__boundDepthTexture!==je){if(je!==null&&Je.has(je)&&(P.width!==je.image.width||P.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(P)}}const nt=P.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Fe=!0);const tt=Je.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(tt[j])?q=tt[j][se]:q=tt[j],Ae=!0):P.samples>0&&it.useMultisampledRTT(P)===!1?q=Je.get(P).__webglMultisampledFramebuffer:Array.isArray(tt)?q=tt[se]:q=tt,C.copy(P.viewport),N.copy(P.scissor),H=P.scissorTest}else C.copy(ne).multiplyScalar(le).floor(),N.copy(O).multiplyScalar(le).floor(),H=re;if(Ye.bindFramebuffer(k.FRAMEBUFFER,q)&&oe&&Ye.drawBuffers(P,q),Ye.viewport(C),Ye.scissor(N),Ye.setScissorTest(H),Ae){const Pe=Je.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+j,Pe.__webglTexture,se)}else if(Fe){const Pe=Je.get(P.texture),nt=j||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pe.__webglTexture,se||0,nt)}G=-1},this.readRenderTargetPixels=function(P,j,se,oe,q,Ae,Fe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Je.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve){Ye.bindFramebuffer(k.FRAMEBUFFER,Ve);try{const Pe=P.texture,nt=Pe.format,tt=Pe.type;if(!xt.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-oe&&se>=0&&se<=P.height-q&&k.readPixels(j,se,oe,q,at.convert(nt),at.convert(tt),Ae)}finally{const Pe=I!==null?Je.get(I).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(P,j,se,oe,q,Ae,Fe){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Je.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve){Ye.bindFramebuffer(k.FRAMEBUFFER,Ve);try{const Pe=P.texture,nt=Pe.format,tt=Pe.type;if(!xt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=P.width-oe&&se>=0&&se<=P.height-q){const je=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,je),k.bufferData(k.PIXEL_PACK_BUFFER,Ae.byteLength,k.STREAM_READ),k.readPixels(j,se,oe,q,at.convert(nt),at.convert(tt),0),k.flush();const vt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);await JS(k,vt,4);try{k.bindBuffer(k.PIXEL_PACK_BUFFER,je),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ae)}finally{k.deleteBuffer(je),k.deleteSync(vt)}return Ae}}finally{const Pe=I!==null?Je.get(I).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(P,j=null,se=0){P.isTexture!==!0&&(Ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,P=arguments[1]);const oe=Math.pow(2,-se),q=Math.floor(P.image.width*oe),Ae=Math.floor(P.image.height*oe),Fe=j!==null?j.x:0,Ve=j!==null?j.y:0;it.setTexture2D(P,0),k.copyTexSubImage2D(k.TEXTURE_2D,se,0,0,Fe,Ve,q,Ae),Ye.unbindTexture()},this.copyTextureToTexture=function(P,j,se=null,oe=null,q=0){P.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,P=arguments[1],j=arguments[2],q=arguments[3]||0,se=null);let Ae,Fe,Ve,Pe,nt,tt;se!==null?(Ae=se.max.x-se.min.x,Fe=se.max.y-se.min.y,Ve=se.min.x,Pe=se.min.y):(Ae=P.image.width,Fe=P.image.height,Ve=0,Pe=0),oe!==null?(nt=oe.x,tt=oe.y):(nt=0,tt=0);const je=at.convert(j.format),vt=at.convert(j.type);it.setTexture2D(j,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const Ft=k.getParameter(k.UNPACK_ROW_LENGTH),Nt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),tn=k.getParameter(k.UNPACK_SKIP_PIXELS),ct=k.getParameter(k.UNPACK_SKIP_ROWS),$e=k.getParameter(k.UNPACK_SKIP_IMAGES),Tt=P.isCompressedTexture?P.mipmaps[q]:P.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Tt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Tt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ve),k.pixelStorei(k.UNPACK_SKIP_ROWS,Pe),P.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,q,nt,tt,Ae,Fe,je,vt,Tt.data):P.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,q,nt,tt,Tt.width,Tt.height,je,Tt.data):k.texSubImage2D(k.TEXTURE_2D,q,nt,tt,Ae,Fe,je,vt,Tt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ft),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Nt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,tn),k.pixelStorei(k.UNPACK_SKIP_ROWS,ct),k.pixelStorei(k.UNPACK_SKIP_IMAGES,$e),q===0&&j.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Ye.unbindTexture()},this.copyTextureToTexture3D=function(P,j,se=null,oe=null,q=0){P.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,oe=arguments[1]||null,P=arguments[2],j=arguments[3],q=arguments[4]||0);let Ae,Fe,Ve,Pe,nt,tt,je,vt,Ft;const Nt=P.isCompressedTexture?P.mipmaps[q]:P.image;se!==null?(Ae=se.max.x-se.min.x,Fe=se.max.y-se.min.y,Ve=se.max.z-se.min.z,Pe=se.min.x,nt=se.min.y,tt=se.min.z):(Ae=Nt.width,Fe=Nt.height,Ve=Nt.depth,Pe=0,nt=0,tt=0),oe!==null?(je=oe.x,vt=oe.y,Ft=oe.z):(je=0,vt=0,Ft=0);const tn=at.convert(j.format),ct=at.convert(j.type);let $e;if(j.isData3DTexture)it.setTexture3D(j,0),$e=k.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)it.setTexture2DArray(j,0),$e=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const Tt=k.getParameter(k.UNPACK_ROW_LENGTH),Mt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Hn=k.getParameter(k.UNPACK_SKIP_PIXELS),gr=k.getParameter(k.UNPACK_SKIP_ROWS),nn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Nt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Nt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Pe),k.pixelStorei(k.UNPACK_SKIP_ROWS,nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,tt),P.isDataTexture||P.isData3DTexture?k.texSubImage3D($e,q,je,vt,Ft,Ae,Fe,Ve,tn,ct,Nt.data):j.isCompressedArrayTexture?k.compressedTexSubImage3D($e,q,je,vt,Ft,Ae,Fe,Ve,tn,Nt.data):k.texSubImage3D($e,q,je,vt,Ft,Ae,Fe,Ve,tn,ct,Nt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Tt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Hn),k.pixelStorei(k.UNPACK_SKIP_ROWS,gr),k.pixelStorei(k.UNPACK_SKIP_IMAGES,nn),q===0&&j.generateMipmaps&&k.generateMipmap($e),Ye.unbindTexture()},this.initRenderTarget=function(P){Je.get(P).__webglFramebuffer===void 0&&it.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?it.setTextureCube(P,0):P.isData3DTexture?it.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?it.setTexture2DArray(P,0):it.setTexture2D(P,0),Ye.unbindTexture()},this.resetState=function(){V=0,D=0,I=null,Ye.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Gc?"display-p3":"srgb",t.unpackColorSpace=wt.workingColorSpace===$a?"display-p3":"srgb"}}class Yc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new Yc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tx extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Io extends hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new $,Mc=new $,j_=new kt,ya=new qa,Au=new Lo,ld=new $,Y_=new $;class nx extends qt{constructor(e=new cn,t=new Io){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Sc.fromBufferAttribute(t,o-1),Mc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Sc.distanceTo(Mc);e.setAttribute("lineDistance",new kn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Au.copy(r.boundingSphere),Au.applyMatrix4(o),Au.radius+=l,e.ray.intersectsSphere(Au)===!1)return;j_.copy(o).invert(),ya.copy(e.ray).applyMatrix4(j_);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=this.isLineSegments?2:1,p=r.index,g=r.attributes.position;if(p!==null){const y=Math.max(0,u.start),E=Math.min(p.count,u.start+u.count);for(let M=y,x=E-1;M<x;M+=d){const v=p.getX(M),A=p.getX(M+1),T=Cu(this,e,ya,h,v,A);T&&t.push(T)}if(this.isLineLoop){const M=p.getX(E-1),x=p.getX(y),v=Cu(this,e,ya,h,M,x);v&&t.push(v)}}else{const y=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let M=y,x=E-1;M<x;M+=d){const v=Cu(this,e,ya,h,M,M+1);v&&t.push(v)}if(this.isLineLoop){const M=Cu(this,e,ya,h,E-1,y);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function Cu(n,e,t,r,o,l){const u=n.geometry.attributes.position;if(Sc.fromBufferAttribute(u,o),Mc.fromBufferAttribute(u,l),t.distanceSqToSegment(Sc,Mc,ld,Y_)>r)return;ld.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(ld);if(!(h<e.near||h>e.far))return{distance:h,point:Y_.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,object:n}}const $_=new $,q_=new $;class $c extends nx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)$_.fromBufferAttribute(t,o),q_.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+$_.distanceTo(q_);e.setAttribute("lineDistance",new kn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cp extends hr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const K_=new kt,wd=new qa,Ru=new Lo,bu=new $;class fp extends qt{constructor(e=new cn,t=new cp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ru.copy(r.boundingSphere),Ru.applyMatrix4(o),Ru.radius+=l,e.ray.intersectsSphere(Ru)===!1)return;K_.copy(o).invert(),wd.copy(e.ray).applyMatrix4(K_);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=r.index,_=r.attributes.position;if(d!==null){const g=Math.max(0,u.start),y=Math.min(d.count,u.start+u.count);for(let E=g,M=y;E<M;E++){const x=d.getX(E);bu.fromBufferAttribute(_,x),Z_(bu,x,h,o,e,t,this)}}else{const g=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let E=g,M=y;E<M;E++)bu.fromBufferAttribute(_,E),Z_(bu,E,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function Z_(n,e,t,r,o,l,u){const c=wd.distanceSqToPoint(n);if(c<t){const h=new $;wd.closestPointToPoint(n,h),h.applyMatrix4(r);const d=o.ray.origin.distanceTo(h);if(d<o.near||d>o.far)return;l.push({distance:d,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,object:u})}}class Ss extends cn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+c,Math.PI);let d=0;const p=[],_=new $,g=new $,y=[],E=[],M=[],x=[];for(let v=0;v<=r;v++){const A=[],T=v/r;let b=0;v===0&&u===0?b=.5/t:v===r&&h===Math.PI&&(b=-.5/t);for(let V=0;V<=t;V++){const D=V/t;_.x=-e*Math.cos(o+D*l)*Math.sin(u+T*c),_.y=e*Math.cos(u+T*c),_.z=e*Math.sin(o+D*l)*Math.sin(u+T*c),E.push(_.x,_.y,_.z),g.copy(_).normalize(),M.push(g.x,g.y,g.z),x.push(D+b,1-T),A.push(d++)}p.push(A)}for(let v=0;v<r;v++)for(let A=0;A<t;A++){const T=p[v][A+1],b=p[v][A],V=p[v+1][A],D=p[v+1][A+1];(v!==0||u>0)&&y.push(T,b,D),(v!==r-1||h<Math.PI)&&y.push(b,V,D)}this.setIndex(y),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(M,3)),this.setAttribute("uv",new kn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ix extends cn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],r=new Set,o=new $,l=new $;if(e.index!==null){const u=e.attributes.position,c=e.index;let h=e.groups;h.length===0&&(h=[{start:0,count:c.count,materialIndex:0}]);for(let d=0,p=h.length;d<p;++d){const _=h[d],g=_.start,y=_.count;for(let E=g,M=g+y;E<M;E+=3)for(let x=0;x<3;x++){const v=c.getX(E+x),A=c.getX(E+(x+1)%3);o.fromBufferAttribute(u,v),l.fromBufferAttribute(u,A),Q_(o,l,r)===!0&&(t.push(o.x,o.y,o.z),t.push(l.x,l.y,l.z))}}}else{const u=e.attributes.position;for(let c=0,h=u.count/3;c<h;c++)for(let d=0;d<3;d++){const p=3*c+d,_=3*c+(d+1)%3;o.fromBufferAttribute(u,p),l.fromBufferAttribute(u,_),Q_(o,l,r)===!0&&(t.push(o.x,o.y,o.z),t.push(l.x,l.y,l.z))}}this.setAttribute("position",new kn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Q_(n,e,t){const r=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,o=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(r)===!0||t.has(o)===!0?!1:(t.add(r),t.add(o),!0)}class rx extends hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sx extends hr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ox extends Io{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Td={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ax{constructor(e,t,r){const o=this;let l=!1,u=0,c=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(p){c++,l===!1&&o.onStart!==void 0&&o.onStart(p,u,c),l=!0},this.itemEnd=function(p){u++,o.onProgress!==void 0&&o.onProgress(p,u,c),u===c&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,_){return d.push(p,_),this},this.removeHandler=function(p){const _=d.indexOf(p);return _!==-1&&d.splice(_,2),this},this.getHandler=function(p){for(let _=0,g=d.length;_<g;_+=2){const y=d[_],E=d[_+1];if(y.global&&(y.lastIndex=0),y.test(p))return E}return null}}}const lx=new ax;class qc{constructor(e){this.manager=e!==void 0?e:lx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qc.DEFAULT_MATERIAL_NAME="__DEFAULT";class ux extends qc{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Td.get(e);if(u!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u;const c=Ga("img");function h(){p(),Td.add(e,this),t&&t(this),l.manager.itemEnd(e)}function d(_){p(),o&&o(_),l.manager.itemError(e),l.manager.itemEnd(e)}function p(){c.removeEventListener("load",h,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),l.manager.itemStart(e),c.src=e,c}}class cx extends qc{constructor(e){super(e)}load(e,t,r,o){const l=new yn,u=new ux(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){l.image=c,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class hp extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class fx extends hp{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ud=new kt,J_=new $,e0=new $;class QT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xc,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;J_.setFromMatrixPosition(e.matrixWorld),t.position.copy(J_),e0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(e0),t.updateMatrixWorld(),ud.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ud)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class JT extends QT{constructor(){super(new ap(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hx extends hp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new JT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ad{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(vn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dx extends Yr{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);const t0=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:yv,AddEquation:Gr,AddOperation:gv,AdditiveBlending:Gu,AgXToneMapping:Mv,AlphaFormat:Wd,AlwaysCompare:Iv,AlwaysDepth:uv,AlwaysStencilFunc:xd,ArrayCamera:Jv,BackSide:xn,BasicDepthPacking:Tv,Box3:Po,BoxGeometry:Do,BufferAttribute:Gt,BufferGeometry:cn,ByteType:Hd,Cache:Td,Camera:sp,CineonToneMapping:xv,ClampToEdgeWrapping:ir,Color:We,ColorManagement:wt,ConstantAlphaFactor:ov,ConstantColorFactor:rv,Controls:dx,CubeCamera:Gv,CubeReflectionMapping:Es,CubeRefractionMapping:ws,CubeTexture:op,CubeUVReflectionMapping:Ya,CullFaceBack:gd,CullFaceFront:V0,CullFaceNone:H0,CustomBlending:W0,CustomToneMapping:Sv,Data3DTexture:zv,DataArrayTexture:ep,DefaultLoadingManager:lx,DepthFormat:ys,DepthStencilFormat:As,DepthTexture:up,DirectionalLight:hx,DisplayP3ColorSpace:Gc,DoubleSide:Ni,DstAlphaFactor:J0,DstColorFactor:tv,EqualCompare:Pv,EqualDepth:fv,EquirectangularReflectionMapping:ju,EquirectangularRefractionMapping:Yu,Euler:ci,EventDispatcher:Yr,Float32BufferAttribute:kn,FloatType:Ii,FogExp2:Yc,FrontSide:lr,Frustum:Xc,GLSL3:Sd,GreaterCompare:Lv,GreaterDepth:dv,GreaterEqualCompare:Nv,GreaterEqualDepth:hv,Group:vo,HalfFloatType:Ro,HemisphereLight:fx,ImageLoader:ux,ImageUtils:Ov,IntType:Fc,KeepStencilOp:ps,Layers:tp,LessCompare:bv,LessDepth:cv,LessEqualCompare:Zd,LessEqualDepth:Fa,Light:hp,Line:nx,LineBasicMaterial:Io,LineDashedMaterial:ox,LineSegments:$c,LinearDisplayP3ColorSpace:$a,LinearFilter:Kn,LinearMipmapLinearFilter:rr,LinearMipmapNearestFilter:Ou,LinearSRGBColorSpace:fr,LinearToneMapping:_v,LinearTransfer:ka,Loader:qc,LoadingManager:ax,LuminanceAlphaFormat:Yd,LuminanceFormat:jd,MOUSE:xs,Material:hr,MathUtils:Wc,Matrix3:ht,Matrix4:kt,MaxEquation:$0,Mesh:Zn,MeshBasicMaterial:np,MeshDepthMaterial:Kv,MeshDistanceMaterial:Zv,MeshPhongMaterial:sx,MeshStandardMaterial:rx,MinEquation:Y0,MirroredRepeatWrapping:$u,MixOperation:mv,MultiplyBlending:vd,MultiplyOperation:Uc,NearestFilter:An,NearestMipmapLinearFilter:Ea,NearestMipmapNearestFilter:wv,NeutralToneMapping:Ev,NeverCompare:Rv,NeverDepth:lv,NoBlending:or,NoColorSpace:Ei,NoToneMapping:ar,NormalBlending:Wr,NotEqualCompare:Dv,NotEqualDepth:pv,Object3D:qt,ObjectSpaceNormalMap:Cv,OneFactor:K0,OneMinusConstantAlphaFactor:av,OneMinusConstantColorFactor:sv,OneMinusDstAlphaFactor:ev,OneMinusDstColorFactor:nv,OneMinusSrcAlphaFactor:Xu,OneMinusSrcColorFactor:Q0,OrthographicCamera:ap,P3Primaries:Ba,PCFShadowMap:zd,PCFSoftShadowMap:G0,PMREMGenerator:Md,PerspectiveCamera:qn,Plane:nr,PlaneGeometry:Ka,Points:fp,PointsMaterial:cp,Quaternion:jr,RED_GREEN_RGTC2_Format:xc,RED_RGTC1_Format:Kd,REVISION:Ic,RGBADepthPacking:Av,RGBAFormat:ui,RGBAIntegerFormat:Hc,RGBA_ASTC_10x10_Format:dc,RGBA_ASTC_10x5_Format:cc,RGBA_ASTC_10x6_Format:fc,RGBA_ASTC_10x8_Format:hc,RGBA_ASTC_12x10_Format:pc,RGBA_ASTC_12x12_Format:mc,RGBA_ASTC_4x4_Format:nc,RGBA_ASTC_5x4_Format:ic,RGBA_ASTC_5x5_Format:rc,RGBA_ASTC_6x5_Format:sc,RGBA_ASTC_6x6_Format:oc,RGBA_ASTC_8x5_Format:ac,RGBA_ASTC_8x6_Format:lc,RGBA_ASTC_8x8_Format:uc,RGBA_BPTC_Format:Da,RGBA_ETC2_EAC_Format:tc,RGBA_PVRTC_2BPPV1_Format:Qu,RGBA_PVRTC_4BPPV1_Format:Zu,RGBA_S3TC_DXT1_Format:ba,RGBA_S3TC_DXT3_Format:Pa,RGBA_S3TC_DXT5_Format:La,RGBFormat:Xd,RGB_BPTC_SIGNED_Format:gc,RGB_BPTC_UNSIGNED_Format:_c,RGB_ETC1_Format:Ju,RGB_ETC2_Format:ec,RGB_PVRTC_2BPPV1_Format:Ku,RGB_PVRTC_4BPPV1_Format:qu,RGB_S3TC_DXT1_Format:Ra,RGFormat:qd,RGIntegerFormat:Bc,Ray:qa,Rec709Primaries:za,RedFormat:$d,RedIntegerFormat:zc,ReinhardToneMapping:vv,RenderTarget:kv,RepeatWrapping:Oa,ReverseSubtractEquation:j0,SIGNED_RED_GREEN_RGTC2_Format:yc,SIGNED_RED_RGTC1_Format:vc,SRGBColorSpace:li,SRGBTransfer:Dt,Scene:tx,ShaderChunk:ft,ShaderLib:Si,ShaderMaterial:Jn,ShortType:Vd,Source:Jd,Sphere:Lo,SphereGeometry:Ss,Spherical:Ad,SrcAlphaFactor:Wu,SrcAlphaSaturateFactor:iv,SrcColorFactor:Z0,StaticDrawUsage:yd,SubtractEquation:X0,SubtractiveBlending:_d,TOUCH:_s,TangentSpaceNormalMap:Vc,Texture:yn,TextureLoader:cx,Triangle:wi,UVMapping:Bd,Uint16BufferAttribute:ip,Uint32BufferAttribute:rp,UniformsLib:Ne,UniformsUtils:Vv,UnsignedByteType:Oi,UnsignedInt248Type:Ts,UnsignedInt5999Type:Gd,UnsignedIntType:Xr,UnsignedShort4444Type:Oc,UnsignedShort5551Type:kc,UnsignedShortType:Eo,VSMShadowMap:Di,Vector2:ot,Vector3:$,Vector4:$t,WebGLCoordinateSystem:Ui,WebGLCubeRenderTarget:Wv,WebGLRenderTarget:ur,WebGLRenderer:ex,WebGLUtils:Qv,WebGPUCoordinateSystem:Ha,WireframeGeometry:ix,ZeroFactor:q0,createCanvasElement:Fv},Symbol.toStringTag,{value:"Module"}));new We("#56b4e9"),new We("#0072b2"),new We("#009e73"),new We("#e69f00"),new We("#d55e00"),new We("#cc79a7"),new We("#364152"),new We("#f3f4f6");const sr=new Intl.NumberFormat("en-US"),eA=1,tA=.25,n0=typeof window<"u"&&window.requestIdleCallback?window.requestIdleCallback.bind(window):n=>setTimeout(()=>n({timeRemaining:()=>8}),0),nA=typeof window<"u"&&window.cancelIdleCallback?window.cancelIdleCallback.bind(window):clearTimeout;function zu(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function px(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function mx(n){let e,t,r;n.length!==2?(e=zu,t=(c,h)=>zu(n(c),h),r=(c,h)=>n(c)-h):(e=n===zu||n===px?n:iA,t=n,r=n);function o(c,h,d=0,p=c.length){if(d<p){if(e(h,h)!==0)return p;do{const _=d+p>>>1;t(c[_],h)<0?d=_+1:p=_}while(d<p)}return d}function l(c,h,d=0,p=c.length){if(d<p){if(e(h,h)!==0)return p;do{const _=d+p>>>1;t(c[_],h)<=0?d=_+1:p=_}while(d<p)}return d}function u(c,h,d=0,p=c.length){const _=o(c,h,d,p-1);return _>d&&r(c[_-1],h)>-r(c[_],h)?_-1:_}return{left:o,center:u,right:l}}function iA(){return 0}function rA(n){return n===null?NaN:+n}const sA=mx(zu),oA=sA.right;mx(rA).center;function i0(n,e){let t,r;if(e===void 0)for(const o of n)o!=null&&(t===void 0?o>=o&&(t=r=o):(t>o&&(t=o),r<o&&(r=o)));else{let o=-1;for(let l of n)(l=e(l,++o,n))!=null&&(t===void 0?l>=l&&(t=r=l):(t>l&&(t=l),r<l&&(r=l)))}return[t,r]}class aA extends Map{constructor(e,t=cA){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[r,o]of e)this.set(r,o)}get(e){return super.get(r0(this,e))}has(e){return super.has(r0(this,e))}set(e,t){return super.set(lA(this,e),t)}delete(e){return super.delete(uA(this,e))}}function r0({_intern:n,_key:e},t){const r=e(t);return n.has(r)?n.get(r):t}function lA({_intern:n,_key:e},t){const r=e(t);return n.has(r)?n.get(r):(n.set(r,t),t)}function uA({_intern:n,_key:e},t){const r=e(t);return n.has(r)&&(t=n.get(r),n.delete(r)),t}function cA(n){return n!==null&&typeof n=="object"?n.valueOf():n}function fA(n,e,...t){return hA(n,Array.from,e,t)}function hA(n,e,t,r){return(function o(l,u){if(u>=r.length)return t(l);const c=new aA,h=r[u++];let d=-1;for(const p of l){const _=h(p,++d,l),g=c.get(_);g?g.push(p):c.set(_,[p])}for(const[p,_]of c)c.set(p,o(_,u));return e(c)})(n,0)}const dA=Math.sqrt(50),pA=Math.sqrt(10),mA=Math.sqrt(2);function Ec(n,e,t){const r=(e-n)/Math.max(0,t),o=Math.floor(Math.log10(r)),l=r/Math.pow(10,o),u=l>=dA?10:l>=pA?5:l>=mA?2:1;let c,h,d;return o<0?(d=Math.pow(10,-o)/u,c=Math.round(n*d),h=Math.round(e*d),c/d<n&&++c,h/d>e&&--h,d=-d):(d=Math.pow(10,o)*u,c=Math.round(n/d),h=Math.round(e/d),c*d<n&&++c,h*d>e&&--h),h<c&&.5<=t&&t<2?Ec(n,e,t*2):[c,h,d]}function gA(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];const r=e<n,[o,l,u]=r?Ec(e,n,t):Ec(n,e,t);if(!(l>=o))return[];const c=l-o+1,h=new Array(c);if(r)if(u<0)for(let d=0;d<c;++d)h[d]=(l-d)/-u;else for(let d=0;d<c;++d)h[d]=(l-d)*u;else if(u<0)for(let d=0;d<c;++d)h[d]=(o+d)/-u;else for(let d=0;d<c;++d)h[d]=(o+d)*u;return h}function Cd(n,e,t){return e=+e,n=+n,t=+t,Ec(n,e,t)[2]}function _A(n,e,t){e=+e,n=+n,t=+t;const r=e<n,o=r?Cd(e,n,t):Cd(n,e,t);return(r?-1:1)*(o<0?1/-o:o)}function vA(n,e){let t=0,r=0;for(let o of n)o!=null&&(o=+o)>=o&&(++t,r+=o);if(t)return r/t}var xA={value:()=>{}};function dp(){for(var n=0,e=arguments.length,t={},r;n<e;++n){if(!(r=arguments[n]+"")||r in t||/[\s.]/.test(r))throw new Error("illegal type: "+r);t[r]=[]}return new Bu(t)}function Bu(n){this._=n}function yA(n,e){return n.trim().split(/^|\s+/).map(function(t){var r="",o=t.indexOf(".");if(o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}})}Bu.prototype=dp.prototype={constructor:Bu,on:function(n,e){var t=this._,r=yA(n+"",t),o,l=-1,u=r.length;if(arguments.length<2){for(;++l<u;)if((o=(n=r[l]).type)&&(o=SA(t[o],n.name)))return o;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++l<u;)if(o=(n=r[l]).type)t[o]=s0(t[o],n.name,e);else if(e==null)for(o in t)t[o]=s0(t[o],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new Bu(n)},call:function(n,e){if((o=arguments.length-2)>0)for(var t=new Array(o),r=0,o,l;r<o;++r)t[r]=arguments[r+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(l=this._[n],r=0,o=l.length;r<o;++r)l[r].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],o=0,l=r.length;o<l;++o)r[o].value.apply(e,t)}};function SA(n,e){for(var t=0,r=n.length,o;t<r;++t)if((o=n[t]).name===e)return o.value}function s0(n,e,t){for(var r=0,o=n.length;r<o;++r)if(n[r].name===e){n[r]=xA,n=n.slice(0,r).concat(n.slice(r+1));break}return t!=null&&n.push({name:e,value:t}),n}var Rd="http://www.w3.org/1999/xhtml";const o0={svg:"http://www.w3.org/2000/svg",xhtml:Rd,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Kc(n){var e=n+="",t=e.indexOf(":");return t>=0&&(e=n.slice(0,t))!=="xmlns"&&(n=n.slice(t+1)),o0.hasOwnProperty(e)?{space:o0[e],local:n}:n}function MA(n){return function(){var e=this.ownerDocument,t=this.namespaceURI;return t===Rd&&e.documentElement.namespaceURI===Rd?e.createElement(n):e.createElementNS(t,n)}}function EA(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function gx(n){var e=Kc(n);return(e.local?EA:MA)(e)}function wA(){}function pp(n){return n==null?wA:function(){return this.querySelector(n)}}function TA(n){typeof n!="function"&&(n=pp(n));for(var e=this._groups,t=e.length,r=new Array(t),o=0;o<t;++o)for(var l=e[o],u=l.length,c=r[o]=new Array(u),h,d,p=0;p<u;++p)(h=l[p])&&(d=n.call(h,h.__data__,p,l))&&("__data__"in h&&(d.__data__=h.__data__),c[p]=d);return new Ai(r,this._parents)}function AA(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function CA(){return[]}function _x(n){return n==null?CA:function(){return this.querySelectorAll(n)}}function RA(n){return function(){return AA(n.apply(this,arguments))}}function bA(n){typeof n=="function"?n=RA(n):n=_x(n);for(var e=this._groups,t=e.length,r=[],o=[],l=0;l<t;++l)for(var u=e[l],c=u.length,h,d=0;d<c;++d)(h=u[d])&&(r.push(n.call(h,h.__data__,d,u)),o.push(h));return new Ai(r,o)}function vx(n){return function(){return this.matches(n)}}function xx(n){return function(e){return e.matches(n)}}var PA=Array.prototype.find;function LA(n){return function(){return PA.call(this.children,n)}}function DA(){return this.firstElementChild}function NA(n){return this.select(n==null?DA:LA(typeof n=="function"?n:xx(n)))}var IA=Array.prototype.filter;function UA(){return Array.from(this.children)}function FA(n){return function(){return IA.call(this.children,n)}}function OA(n){return this.selectAll(n==null?UA:FA(typeof n=="function"?n:xx(n)))}function kA(n){typeof n!="function"&&(n=vx(n));for(var e=this._groups,t=e.length,r=new Array(t),o=0;o<t;++o)for(var l=e[o],u=l.length,c=r[o]=[],h,d=0;d<u;++d)(h=l[d])&&n.call(h,h.__data__,d,l)&&c.push(h);return new Ai(r,this._parents)}function yx(n){return new Array(n.length)}function zA(){return new Ai(this._enter||this._groups.map(yx),this._parents)}function wc(n,e){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=e}wc.prototype={constructor:wc,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,e){return this._parent.insertBefore(n,e)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function BA(n){return function(){return n}}function HA(n,e,t,r,o,l){for(var u=0,c,h=e.length,d=l.length;u<d;++u)(c=e[u])?(c.__data__=l[u],r[u]=c):t[u]=new wc(n,l[u]);for(;u<h;++u)(c=e[u])&&(o[u]=c)}function VA(n,e,t,r,o,l,u){var c,h,d=new Map,p=e.length,_=l.length,g=new Array(p),y;for(c=0;c<p;++c)(h=e[c])&&(g[c]=y=u.call(h,h.__data__,c,e)+"",d.has(y)?o[c]=h:d.set(y,h));for(c=0;c<_;++c)y=u.call(n,l[c],c,l)+"",(h=d.get(y))?(r[c]=h,h.__data__=l[c],d.delete(y)):t[c]=new wc(n,l[c]);for(c=0;c<p;++c)(h=e[c])&&d.get(g[c])===h&&(o[c]=h)}function GA(n){return n.__data__}function WA(n,e){if(!arguments.length)return Array.from(this,GA);var t=e?VA:HA,r=this._parents,o=this._groups;typeof n!="function"&&(n=BA(n));for(var l=o.length,u=new Array(l),c=new Array(l),h=new Array(l),d=0;d<l;++d){var p=r[d],_=o[d],g=_.length,y=XA(n.call(p,p&&p.__data__,d,r)),E=y.length,M=c[d]=new Array(E),x=u[d]=new Array(E),v=h[d]=new Array(g);t(p,_,M,x,v,y,e);for(var A=0,T=0,b,V;A<E;++A)if(b=M[A]){for(A>=T&&(T=A+1);!(V=x[T])&&++T<E;);b._next=V||null}}return u=new Ai(u,r),u._enter=c,u._exit=h,u}function XA(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function jA(){return new Ai(this._exit||this._groups.map(yx),this._parents)}function YA(n,e,t){var r=this.enter(),o=this,l=this.exit();return typeof n=="function"?(r=n(r),r&&(r=r.selection())):r=r.append(n+""),e!=null&&(o=e(o),o&&(o=o.selection())),t==null?l.remove():t(l),r&&o?r.merge(o).order():o}function $A(n){for(var e=n.selection?n.selection():n,t=this._groups,r=e._groups,o=t.length,l=r.length,u=Math.min(o,l),c=new Array(o),h=0;h<u;++h)for(var d=t[h],p=r[h],_=d.length,g=c[h]=new Array(_),y,E=0;E<_;++E)(y=d[E]||p[E])&&(g[E]=y);for(;h<o;++h)c[h]=t[h];return new Ai(c,this._parents)}function qA(){for(var n=this._groups,e=-1,t=n.length;++e<t;)for(var r=n[e],o=r.length-1,l=r[o],u;--o>=0;)(u=r[o])&&(l&&u.compareDocumentPosition(l)^4&&l.parentNode.insertBefore(u,l),l=u);return this}function KA(n){n||(n=ZA);function e(_,g){return _&&g?n(_.__data__,g.__data__):!_-!g}for(var t=this._groups,r=t.length,o=new Array(r),l=0;l<r;++l){for(var u=t[l],c=u.length,h=o[l]=new Array(c),d,p=0;p<c;++p)(d=u[p])&&(h[p]=d);h.sort(e)}return new Ai(o,this._parents).order()}function ZA(n,e){return n<e?-1:n>e?1:n>=e?0:NaN}function QA(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function JA(){return Array.from(this)}function eC(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var r=n[e],o=0,l=r.length;o<l;++o){var u=r[o];if(u)return u}return null}function tC(){let n=0;for(const e of this)++n;return n}function nC(){return!this.node()}function iC(n){for(var e=this._groups,t=0,r=e.length;t<r;++t)for(var o=e[t],l=0,u=o.length,c;l<u;++l)(c=o[l])&&n.call(c,c.__data__,l,o);return this}function rC(n){return function(){this.removeAttribute(n)}}function sC(n){return function(){this.removeAttributeNS(n.space,n.local)}}function oC(n,e){return function(){this.setAttribute(n,e)}}function aC(n,e){return function(){this.setAttributeNS(n.space,n.local,e)}}function lC(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttribute(n):this.setAttribute(n,t)}}function uC(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,t)}}function cC(n,e){var t=Kc(n);if(arguments.length<2){var r=this.node();return t.local?r.getAttributeNS(t.space,t.local):r.getAttribute(t)}return this.each((e==null?t.local?sC:rC:typeof e=="function"?t.local?uC:lC:t.local?aC:oC)(t,e))}function Sx(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function fC(n){return function(){this.style.removeProperty(n)}}function hC(n,e,t){return function(){this.style.setProperty(n,e,t)}}function dC(n,e,t){return function(){var r=e.apply(this,arguments);r==null?this.style.removeProperty(n):this.style.setProperty(n,r,t)}}function pC(n,e,t){return arguments.length>1?this.each((e==null?fC:typeof e=="function"?dC:hC)(n,e,t??"")):To(this.node(),n)}function To(n,e){return n.style.getPropertyValue(e)||Sx(n).getComputedStyle(n,null).getPropertyValue(e)}function mC(n){return function(){delete this[n]}}function gC(n,e){return function(){this[n]=e}}function _C(n,e){return function(){var t=e.apply(this,arguments);t==null?delete this[n]:this[n]=t}}function vC(n,e){return arguments.length>1?this.each((e==null?mC:typeof e=="function"?_C:gC)(n,e)):this.node()[n]}function Mx(n){return n.trim().split(/^|\s+/)}function mp(n){return n.classList||new Ex(n)}function Ex(n){this._node=n,this._names=Mx(n.getAttribute("class")||"")}Ex.prototype={add:function(n){var e=this._names.indexOf(n);e<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var e=this._names.indexOf(n);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function wx(n,e){for(var t=mp(n),r=-1,o=e.length;++r<o;)t.add(e[r])}function Tx(n,e){for(var t=mp(n),r=-1,o=e.length;++r<o;)t.remove(e[r])}function xC(n){return function(){wx(this,n)}}function yC(n){return function(){Tx(this,n)}}function SC(n,e){return function(){(e.apply(this,arguments)?wx:Tx)(this,n)}}function MC(n,e){var t=Mx(n+"");if(arguments.length<2){for(var r=mp(this.node()),o=-1,l=t.length;++o<l;)if(!r.contains(t[o]))return!1;return!0}return this.each((typeof e=="function"?SC:e?xC:yC)(t,e))}function EC(){this.textContent=""}function wC(n){return function(){this.textContent=n}}function TC(n){return function(){var e=n.apply(this,arguments);this.textContent=e??""}}function AC(n){return arguments.length?this.each(n==null?EC:(typeof n=="function"?TC:wC)(n)):this.node().textContent}function CC(){this.innerHTML=""}function RC(n){return function(){this.innerHTML=n}}function bC(n){return function(){var e=n.apply(this,arguments);this.innerHTML=e??""}}function PC(n){return arguments.length?this.each(n==null?CC:(typeof n=="function"?bC:RC)(n)):this.node().innerHTML}function LC(){this.nextSibling&&this.parentNode.appendChild(this)}function DC(){return this.each(LC)}function NC(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function IC(){return this.each(NC)}function UC(n){var e=typeof n=="function"?n:gx(n);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function FC(){return null}function OC(n,e){var t=typeof n=="function"?n:gx(n),r=e==null?FC:typeof e=="function"?e:pp(e);return this.select(function(){return this.insertBefore(t.apply(this,arguments),r.apply(this,arguments)||null)})}function kC(){var n=this.parentNode;n&&n.removeChild(this)}function zC(){return this.each(kC)}function BC(){var n=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function HC(){var n=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function VC(n){return this.select(n?HC:BC)}function GC(n){return arguments.length?this.property("__data__",n):this.node().__data__}function WC(n){return function(e){n.call(this,e,this.__data__)}}function XC(n){return n.trim().split(/^|\s+/).map(function(e){var t="",r=e.indexOf(".");return r>=0&&(t=e.slice(r+1),e=e.slice(0,r)),{type:e,name:t}})}function jC(n){return function(){var e=this.__on;if(e){for(var t=0,r=-1,o=e.length,l;t<o;++t)l=e[t],(!n.type||l.type===n.type)&&l.name===n.name?this.removeEventListener(l.type,l.listener,l.options):e[++r]=l;++r?e.length=r:delete this.__on}}}function YC(n,e,t){return function(){var r=this.__on,o,l=WC(e);if(r){for(var u=0,c=r.length;u<c;++u)if((o=r[u]).type===n.type&&o.name===n.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=l,o.options=t),o.value=e;return}}this.addEventListener(n.type,l,t),o={type:n.type,name:n.name,value:e,listener:l,options:t},r?r.push(o):this.__on=[o]}}function $C(n,e,t){var r=XC(n+""),o,l=r.length,u;if(arguments.length<2){var c=this.node().__on;if(c){for(var h=0,d=c.length,p;h<d;++h)for(o=0,p=c[h];o<l;++o)if((u=r[o]).type===p.type&&u.name===p.name)return p.value}return}for(c=e?YC:jC,o=0;o<l;++o)this.each(c(r[o],e,t));return this}function Ax(n,e,t){var r=Sx(n),o=r.CustomEvent;typeof o=="function"?o=new o(e,t):(o=r.document.createEvent("Event"),t?(o.initEvent(e,t.bubbles,t.cancelable),o.detail=t.detail):o.initEvent(e,!1,!1)),n.dispatchEvent(o)}function qC(n,e){return function(){return Ax(this,n,e)}}function KC(n,e){return function(){return Ax(this,n,e.apply(this,arguments))}}function ZC(n,e){return this.each((typeof e=="function"?KC:qC)(n,e))}function*QC(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var r=n[e],o=0,l=r.length,u;o<l;++o)(u=r[o])&&(yield u)}var JC=[null];function Ai(n,e){this._groups=n,this._parents=e}function Za(){return new Ai([[document.documentElement]],JC)}function eR(){return this}Ai.prototype=Za.prototype={constructor:Ai,select:TA,selectAll:bA,selectChild:NA,selectChildren:OA,filter:kA,data:WA,enter:zA,exit:jA,join:YA,merge:$A,selection:eR,order:qA,sort:KA,call:QA,nodes:JA,node:eC,size:tC,empty:nC,each:iC,attr:cC,style:pC,property:vC,classed:MC,text:AC,html:PC,raise:DC,lower:IC,append:UC,insert:OC,remove:zC,clone:VC,datum:GC,on:$C,dispatch:ZC,[Symbol.iterator]:QC};function gp(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function Cx(n,e){var t=Object.create(n.prototype);for(var r in e)t[r]=e[r];return t}function Qa(){}var Wa=.7,Tc=1/Wa,Mo="\\s*([+-]?\\d+)\\s*",Xa="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Fi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",tR=/^#([0-9a-f]{3,8})$/,nR=new RegExp(`^rgb\\(${Mo},${Mo},${Mo}\\)$`),iR=new RegExp(`^rgb\\(${Fi},${Fi},${Fi}\\)$`),rR=new RegExp(`^rgba\\(${Mo},${Mo},${Mo},${Xa}\\)$`),sR=new RegExp(`^rgba\\(${Fi},${Fi},${Fi},${Xa}\\)$`),oR=new RegExp(`^hsl\\(${Xa},${Fi},${Fi}\\)$`),aR=new RegExp(`^hsla\\(${Xa},${Fi},${Fi},${Xa}\\)$`),a0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};gp(Qa,Cs,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:l0,formatHex:l0,formatHex8:lR,formatHsl:uR,formatRgb:u0,toString:u0});function l0(){return this.rgb().formatHex()}function lR(){return this.rgb().formatHex8()}function uR(){return Rx(this).formatHsl()}function u0(){return this.rgb().formatRgb()}function Cs(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=tR.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?c0(e):t===3?new On(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?Pu(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?Pu(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=nR.exec(n))?new On(e[1],e[2],e[3],1):(e=iR.exec(n))?new On(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=rR.exec(n))?Pu(e[1],e[2],e[3],e[4]):(e=sR.exec(n))?Pu(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=oR.exec(n))?d0(e[1],e[2]/100,e[3]/100,1):(e=aR.exec(n))?d0(e[1],e[2]/100,e[3]/100,e[4]):a0.hasOwnProperty(n)?c0(a0[n]):n==="transparent"?new On(NaN,NaN,NaN,0):null}function c0(n){return new On(n>>16&255,n>>8&255,n&255,1)}function Pu(n,e,t,r){return r<=0&&(n=e=t=NaN),new On(n,e,t,r)}function cR(n){return n instanceof Qa||(n=Cs(n)),n?(n=n.rgb(),new On(n.r,n.g,n.b,n.opacity)):new On}function bd(n,e,t,r){return arguments.length===1?cR(n):new On(n,e,t,r??1)}function On(n,e,t,r){this.r=+n,this.g=+e,this.b=+t,this.opacity=+r}gp(On,bd,Cx(Qa,{brighter(n){return n=n==null?Tc:Math.pow(Tc,n),new On(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Wa:Math.pow(Wa,n),new On(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new On(Ms(this.r),Ms(this.g),Ms(this.b),Ac(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:f0,formatHex:f0,formatHex8:fR,formatRgb:h0,toString:h0}));function f0(){return`#${vs(this.r)}${vs(this.g)}${vs(this.b)}`}function fR(){return`#${vs(this.r)}${vs(this.g)}${vs(this.b)}${vs((isNaN(this.opacity)?1:this.opacity)*255)}`}function h0(){const n=Ac(this.opacity);return`${n===1?"rgb(":"rgba("}${Ms(this.r)}, ${Ms(this.g)}, ${Ms(this.b)}${n===1?")":`, ${n})`}`}function Ac(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Ms(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function vs(n){return n=Ms(n),(n<16?"0":"")+n.toString(16)}function d0(n,e,t,r){return r<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new Ti(n,e,t,r)}function Rx(n){if(n instanceof Ti)return new Ti(n.h,n.s,n.l,n.opacity);if(n instanceof Qa||(n=Cs(n)),!n)return new Ti;if(n instanceof Ti)return n;n=n.rgb();var e=n.r/255,t=n.g/255,r=n.b/255,o=Math.min(e,t,r),l=Math.max(e,t,r),u=NaN,c=l-o,h=(l+o)/2;return c?(e===l?u=(t-r)/c+(t<r)*6:t===l?u=(r-e)/c+2:u=(e-t)/c+4,c/=h<.5?l+o:2-l-o,u*=60):c=h>0&&h<1?0:u,new Ti(u,c,h,n.opacity)}function hR(n,e,t,r){return arguments.length===1?Rx(n):new Ti(n,e,t,r??1)}function Ti(n,e,t,r){this.h=+n,this.s=+e,this.l=+t,this.opacity=+r}gp(Ti,hR,Cx(Qa,{brighter(n){return n=n==null?Tc:Math.pow(Tc,n),new Ti(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Wa:Math.pow(Wa,n),new Ti(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*e,o=2*t-r;return new On(cd(n>=240?n-240:n+120,o,r),cd(n,o,r),cd(n<120?n+240:n-120,o,r),this.opacity)},clamp(){return new Ti(p0(this.h),Lu(this.s),Lu(this.l),Ac(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=Ac(this.opacity);return`${n===1?"hsl(":"hsla("}${p0(this.h)}, ${Lu(this.s)*100}%, ${Lu(this.l)*100}%${n===1?")":`, ${n})`}`}}));function p0(n){return n=(n||0)%360,n<0?n+360:n}function Lu(n){return Math.max(0,Math.min(1,n||0))}function cd(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}const _p=n=>()=>n;function dR(n,e){return function(t){return n+t*e}}function pR(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(r){return Math.pow(n+r*e,t)}}function mR(n){return(n=+n)==1?bx:function(e,t){return t-e?pR(e,t,n):_p(isNaN(e)?t:e)}}function bx(n,e){var t=e-n;return t?dR(n,t):_p(isNaN(n)?e:n)}const Cc=(function n(e){var t=mR(e);function r(o,l){var u=t((o=bd(o)).r,(l=bd(l)).r),c=t(o.g,l.g),h=t(o.b,l.b),d=bx(o.opacity,l.opacity);return function(p){return o.r=u(p),o.g=c(p),o.b=h(p),o.opacity=d(p),o+""}}return r.gamma=n,r})(1);function gR(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,r=e.slice(),o;return function(l){for(o=0;o<t;++o)r[o]=n[o]*(1-l)+e[o]*l;return r}}function _R(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function vR(n,e){var t=e?e.length:0,r=n?Math.min(t,n.length):0,o=new Array(r),l=new Array(t),u;for(u=0;u<r;++u)o[u]=vp(n[u],e[u]);for(;u<t;++u)l[u]=e[u];return function(c){for(u=0;u<r;++u)l[u]=o[u](c);return l}}function xR(n,e){var t=new Date;return n=+n,e=+e,function(r){return t.setTime(n*(1-r)+e*r),t}}function Mi(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function yR(n,e){var t={},r={},o;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(o in e)o in n?t[o]=vp(n[o],e[o]):r[o]=e[o];return function(l){for(o in t)r[o]=t[o](l);return r}}var Pd=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,fd=new RegExp(Pd.source,"g");function SR(n){return function(){return n}}function MR(n){return function(e){return n(e)+""}}function Px(n,e){var t=Pd.lastIndex=fd.lastIndex=0,r,o,l,u=-1,c=[],h=[];for(n=n+"",e=e+"";(r=Pd.exec(n))&&(o=fd.exec(e));)(l=o.index)>t&&(l=e.slice(t,l),c[u]?c[u]+=l:c[++u]=l),(r=r[0])===(o=o[0])?c[u]?c[u]+=o:c[++u]=o:(c[++u]=null,h.push({i:u,x:Mi(r,o)})),t=fd.lastIndex;return t<e.length&&(l=e.slice(t),c[u]?c[u]+=l:c[++u]=l),c.length<2?h[0]?MR(h[0].x):SR(e):(e=h.length,function(d){for(var p=0,_;p<e;++p)c[(_=h[p]).i]=_.x(d);return c.join("")})}function vp(n,e){var t=typeof e,r;return e==null||t==="boolean"?_p(e):(t==="number"?Mi:t==="string"?(r=Cs(e))?(e=r,Cc):Px:e instanceof Cs?Cc:e instanceof Date?xR:_R(e)?gR:Array.isArray(e)?vR:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?yR:Mi)(n,e)}function ER(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}var m0=180/Math.PI,Ld={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Lx(n,e,t,r,o,l){var u,c,h;return(u=Math.sqrt(n*n+e*e))&&(n/=u,e/=u),(h=n*t+e*r)&&(t-=n*h,r-=e*h),(c=Math.sqrt(t*t+r*r))&&(t/=c,r/=c,h/=c),n*r<e*t&&(n=-n,e=-e,h=-h,u=-u),{translateX:o,translateY:l,rotate:Math.atan2(e,n)*m0,skewX:Math.atan(h)*m0,scaleX:u,scaleY:c}}var Du;function wR(n){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return e.isIdentity?Ld:Lx(e.a,e.b,e.c,e.d,e.e,e.f)}function TR(n){return n==null||(Du||(Du=document.createElementNS("http://www.w3.org/2000/svg","g")),Du.setAttribute("transform",n),!(n=Du.transform.baseVal.consolidate()))?Ld:(n=n.matrix,Lx(n.a,n.b,n.c,n.d,n.e,n.f))}function Dx(n,e,t,r){function o(d){return d.length?d.pop()+" ":""}function l(d,p,_,g,y,E){if(d!==_||p!==g){var M=y.push("translate(",null,e,null,t);E.push({i:M-4,x:Mi(d,_)},{i:M-2,x:Mi(p,g)})}else(_||g)&&y.push("translate("+_+e+g+t)}function u(d,p,_,g){d!==p?(d-p>180?p+=360:p-d>180&&(d+=360),g.push({i:_.push(o(_)+"rotate(",null,r)-2,x:Mi(d,p)})):p&&_.push(o(_)+"rotate("+p+r)}function c(d,p,_,g){d!==p?g.push({i:_.push(o(_)+"skewX(",null,r)-2,x:Mi(d,p)}):p&&_.push(o(_)+"skewX("+p+r)}function h(d,p,_,g,y,E){if(d!==_||p!==g){var M=y.push(o(y)+"scale(",null,",",null,")");E.push({i:M-4,x:Mi(d,_)},{i:M-2,x:Mi(p,g)})}else(_!==1||g!==1)&&y.push(o(y)+"scale("+_+","+g+")")}return function(d,p){var _=[],g=[];return d=n(d),p=n(p),l(d.translateX,d.translateY,p.translateX,p.translateY,_,g),u(d.rotate,p.rotate,_,g),c(d.skewX,p.skewX,_,g),h(d.scaleX,d.scaleY,p.scaleX,p.scaleY,_,g),d=p=null,function(y){for(var E=-1,M=g.length,x;++E<M;)_[(x=g[E]).i]=x.x(y);return _.join("")}}}var AR=Dx(wR,"px, ","px)","deg)"),CR=Dx(TR,", ",")",")"),Ao=0,Ta=0,Sa=0,Nx=1e3,Rc,Aa,bc=0,Rs=0,Zc=0,ja=typeof performance=="object"&&performance.now?performance:Date,Ix=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function xp(){return Rs||(Ix(RR),Rs=ja.now()+Zc)}function RR(){Rs=0}function Pc(){this._call=this._time=this._next=null}Pc.prototype=yp.prototype={constructor:Pc,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?xp():+t)+(e==null?0:+e),!this._next&&Aa!==this&&(Aa?Aa._next=this:Rc=this,Aa=this),this._call=n,this._time=t,Dd()},stop:function(){this._call&&(this._call=null,this._time=1/0,Dd())}};function yp(n,e,t){var r=new Pc;return r.restart(n,e,t),r}function bR(){xp(),++Ao;for(var n=Rc,e;n;)(e=Rs-n._time)>=0&&n._call.call(void 0,e),n=n._next;--Ao}function g0(){Rs=(bc=ja.now())+Zc,Ao=Ta=0;try{bR()}finally{Ao=0,LR(),Rs=0}}function PR(){var n=ja.now(),e=n-bc;e>Nx&&(Zc-=e,bc=n)}function LR(){for(var n,e=Rc,t,r=1/0;e;)e._call?(r>e._time&&(r=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:Rc=t);Aa=n,Dd(r)}function Dd(n){if(!Ao){Ta&&(Ta=clearTimeout(Ta));var e=n-Rs;e>24?(n<1/0&&(Ta=setTimeout(g0,n-ja.now()-Zc)),Sa&&(Sa=clearInterval(Sa))):(Sa||(bc=ja.now(),Sa=setInterval(PR,Nx)),Ao=1,Ix(g0))}}function _0(n,e,t){var r=new Pc;return e=e==null?0:+e,r.restart(o=>{r.stop(),n(o+e)},e,t),r}var DR=dp("start","end","cancel","interrupt"),NR=[],Ux=0,v0=1,Nd=2,Hu=3,x0=4,Id=5,Vu=6;function Qc(n,e,t,r,o,l){var u=n.__transition;if(!u)n.__transition={};else if(t in u)return;IR(n,t,{name:e,index:r,group:o,on:DR,tween:NR,time:l.time,delay:l.delay,duration:l.duration,ease:l.ease,timer:null,state:Ux})}function Sp(n,e){var t=Ci(n,e);if(t.state>Ux)throw new Error("too late; already scheduled");return t}function ki(n,e){var t=Ci(n,e);if(t.state>Hu)throw new Error("too late; already running");return t}function Ci(n,e){var t=n.__transition;if(!t||!(t=t[e]))throw new Error("transition not found");return t}function IR(n,e,t){var r=n.__transition,o;r[e]=t,t.timer=yp(l,0,t.time);function l(d){t.state=v0,t.timer.restart(u,t.delay,t.time),t.delay<=d&&u(d-t.delay)}function u(d){var p,_,g,y;if(t.state!==v0)return h();for(p in r)if(y=r[p],y.name===t.name){if(y.state===Hu)return _0(u);y.state===x0?(y.state=Vu,y.timer.stop(),y.on.call("interrupt",n,n.__data__,y.index,y.group),delete r[p]):+p<e&&(y.state=Vu,y.timer.stop(),y.on.call("cancel",n,n.__data__,y.index,y.group),delete r[p])}if(_0(function(){t.state===Hu&&(t.state=x0,t.timer.restart(c,t.delay,t.time),c(d))}),t.state=Nd,t.on.call("start",n,n.__data__,t.index,t.group),t.state===Nd){for(t.state=Hu,o=new Array(g=t.tween.length),p=0,_=-1;p<g;++p)(y=t.tween[p].value.call(n,n.__data__,t.index,t.group))&&(o[++_]=y);o.length=_+1}}function c(d){for(var p=d<t.duration?t.ease.call(null,d/t.duration):(t.timer.restart(h),t.state=Id,1),_=-1,g=o.length;++_<g;)o[_].call(n,p);t.state===Id&&(t.on.call("end",n,n.__data__,t.index,t.group),h())}function h(){t.state=Vu,t.timer.stop(),delete r[e];for(var d in r)return;delete n.__transition}}function UR(n,e){var t=n.__transition,r,o,l=!0,u;if(t){e=e==null?null:e+"";for(u in t){if((r=t[u]).name!==e){l=!1;continue}o=r.state>Nd&&r.state<Id,r.state=Vu,r.timer.stop(),r.on.call(o?"interrupt":"cancel",n,n.__data__,r.index,r.group),delete t[u]}l&&delete n.__transition}}function FR(n){return this.each(function(){UR(this,n)})}function OR(n,e){var t,r;return function(){var o=ki(this,n),l=o.tween;if(l!==t){r=t=l;for(var u=0,c=r.length;u<c;++u)if(r[u].name===e){r=r.slice(),r.splice(u,1);break}}o.tween=r}}function kR(n,e,t){var r,o;if(typeof t!="function")throw new Error;return function(){var l=ki(this,n),u=l.tween;if(u!==r){o=(r=u).slice();for(var c={name:e,value:t},h=0,d=o.length;h<d;++h)if(o[h].name===e){o[h]=c;break}h===d&&o.push(c)}l.tween=o}}function zR(n,e){var t=this._id;if(n+="",arguments.length<2){for(var r=Ci(this.node(),t).tween,o=0,l=r.length,u;o<l;++o)if((u=r[o]).name===n)return u.value;return null}return this.each((e==null?OR:kR)(t,n,e))}function Mp(n,e,t){var r=n._id;return n.each(function(){var o=ki(this,r);(o.value||(o.value={}))[e]=t.apply(this,arguments)}),function(o){return Ci(o,r).value[e]}}function Fx(n,e){var t;return(typeof e=="number"?Mi:e instanceof Cs?Cc:(t=Cs(e))?(e=t,Cc):Px)(n,e)}function BR(n){return function(){this.removeAttribute(n)}}function HR(n){return function(){this.removeAttributeNS(n.space,n.local)}}function VR(n,e,t){var r,o=t+"",l;return function(){var u=this.getAttribute(n);return u===o?null:u===r?l:l=e(r=u,t)}}function GR(n,e,t){var r,o=t+"",l;return function(){var u=this.getAttributeNS(n.space,n.local);return u===o?null:u===r?l:l=e(r=u,t)}}function WR(n,e,t){var r,o,l;return function(){var u,c=t(this),h;return c==null?void this.removeAttribute(n):(u=this.getAttribute(n),h=c+"",u===h?null:u===r&&h===o?l:(o=h,l=e(r=u,c)))}}function XR(n,e,t){var r,o,l;return function(){var u,c=t(this),h;return c==null?void this.removeAttributeNS(n.space,n.local):(u=this.getAttributeNS(n.space,n.local),h=c+"",u===h?null:u===r&&h===o?l:(o=h,l=e(r=u,c)))}}function jR(n,e){var t=Kc(n),r=t==="transform"?CR:Fx;return this.attrTween(n,typeof e=="function"?(t.local?XR:WR)(t,r,Mp(this,"attr."+n,e)):e==null?(t.local?HR:BR)(t):(t.local?GR:VR)(t,r,e))}function YR(n,e){return function(t){this.setAttribute(n,e.call(this,t))}}function $R(n,e){return function(t){this.setAttributeNS(n.space,n.local,e.call(this,t))}}function qR(n,e){var t,r;function o(){var l=e.apply(this,arguments);return l!==r&&(t=(r=l)&&$R(n,l)),t}return o._value=e,o}function KR(n,e){var t,r;function o(){var l=e.apply(this,arguments);return l!==r&&(t=(r=l)&&YR(n,l)),t}return o._value=e,o}function ZR(n,e){var t="attr."+n;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;var r=Kc(n);return this.tween(t,(r.local?qR:KR)(r,e))}function QR(n,e){return function(){Sp(this,n).delay=+e.apply(this,arguments)}}function JR(n,e){return e=+e,function(){Sp(this,n).delay=e}}function eb(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?QR:JR)(e,n)):Ci(this.node(),e).delay}function tb(n,e){return function(){ki(this,n).duration=+e.apply(this,arguments)}}function nb(n,e){return e=+e,function(){ki(this,n).duration=e}}function ib(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?tb:nb)(e,n)):Ci(this.node(),e).duration}function rb(n,e){if(typeof e!="function")throw new Error;return function(){ki(this,n).ease=e}}function sb(n){var e=this._id;return arguments.length?this.each(rb(e,n)):Ci(this.node(),e).ease}function ob(n,e){return function(){var t=e.apply(this,arguments);if(typeof t!="function")throw new Error;ki(this,n).ease=t}}function ab(n){if(typeof n!="function")throw new Error;return this.each(ob(this._id,n))}function lb(n){typeof n!="function"&&(n=vx(n));for(var e=this._groups,t=e.length,r=new Array(t),o=0;o<t;++o)for(var l=e[o],u=l.length,c=r[o]=[],h,d=0;d<u;++d)(h=l[d])&&n.call(h,h.__data__,d,l)&&c.push(h);return new cr(r,this._parents,this._name,this._id)}function ub(n){if(n._id!==this._id)throw new Error;for(var e=this._groups,t=n._groups,r=e.length,o=t.length,l=Math.min(r,o),u=new Array(r),c=0;c<l;++c)for(var h=e[c],d=t[c],p=h.length,_=u[c]=new Array(p),g,y=0;y<p;++y)(g=h[y]||d[y])&&(_[y]=g);for(;c<r;++c)u[c]=e[c];return new cr(u,this._parents,this._name,this._id)}function cb(n){return(n+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||e==="start"})}function fb(n,e,t){var r,o,l=cb(e)?Sp:ki;return function(){var u=l(this,n),c=u.on;c!==r&&(o=(r=c).copy()).on(e,t),u.on=o}}function hb(n,e){var t=this._id;return arguments.length<2?Ci(this.node(),t).on.on(n):this.each(fb(t,n,e))}function db(n){return function(){var e=this.parentNode;for(var t in this.__transition)if(+t!==n)return;e&&e.removeChild(this)}}function pb(){return this.on("end.remove",db(this._id))}function mb(n){var e=this._name,t=this._id;typeof n!="function"&&(n=pp(n));for(var r=this._groups,o=r.length,l=new Array(o),u=0;u<o;++u)for(var c=r[u],h=c.length,d=l[u]=new Array(h),p,_,g=0;g<h;++g)(p=c[g])&&(_=n.call(p,p.__data__,g,c))&&("__data__"in p&&(_.__data__=p.__data__),d[g]=_,Qc(d[g],e,t,g,d,Ci(p,t)));return new cr(l,this._parents,e,t)}function gb(n){var e=this._name,t=this._id;typeof n!="function"&&(n=_x(n));for(var r=this._groups,o=r.length,l=[],u=[],c=0;c<o;++c)for(var h=r[c],d=h.length,p,_=0;_<d;++_)if(p=h[_]){for(var g=n.call(p,p.__data__,_,h),y,E=Ci(p,t),M=0,x=g.length;M<x;++M)(y=g[M])&&Qc(y,e,t,M,g,E);l.push(g),u.push(p)}return new cr(l,u,e,t)}var _b=Za.prototype.constructor;function vb(){return new _b(this._groups,this._parents)}function xb(n,e){var t,r,o;return function(){var l=To(this,n),u=(this.style.removeProperty(n),To(this,n));return l===u?null:l===t&&u===r?o:o=e(t=l,r=u)}}function Ox(n){return function(){this.style.removeProperty(n)}}function yb(n,e,t){var r,o=t+"",l;return function(){var u=To(this,n);return u===o?null:u===r?l:l=e(r=u,t)}}function Sb(n,e,t){var r,o,l;return function(){var u=To(this,n),c=t(this),h=c+"";return c==null&&(h=c=(this.style.removeProperty(n),To(this,n))),u===h?null:u===r&&h===o?l:(o=h,l=e(r=u,c))}}function Mb(n,e){var t,r,o,l="style."+e,u="end."+l,c;return function(){var h=ki(this,n),d=h.on,p=h.value[l]==null?c||(c=Ox(e)):void 0;(d!==t||o!==p)&&(r=(t=d).copy()).on(u,o=p),h.on=r}}function Eb(n,e,t){var r=(n+="")=="transform"?AR:Fx;return e==null?this.styleTween(n,xb(n,r)).on("end.style."+n,Ox(n)):typeof e=="function"?this.styleTween(n,Sb(n,r,Mp(this,"style."+n,e))).each(Mb(this._id,n)):this.styleTween(n,yb(n,r,e),t).on("end.style."+n,null)}function wb(n,e,t){return function(r){this.style.setProperty(n,e.call(this,r),t)}}function Tb(n,e,t){var r,o;function l(){var u=e.apply(this,arguments);return u!==o&&(r=(o=u)&&wb(n,u,t)),r}return l._value=e,l}function Ab(n,e,t){var r="style."+(n+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(e==null)return this.tween(r,null);if(typeof e!="function")throw new Error;return this.tween(r,Tb(n,e,t??""))}function Cb(n){return function(){this.textContent=n}}function Rb(n){return function(){var e=n(this);this.textContent=e??""}}function bb(n){return this.tween("text",typeof n=="function"?Rb(Mp(this,"text",n)):Cb(n==null?"":n+""))}function Pb(n){return function(e){this.textContent=n.call(this,e)}}function Lb(n){var e,t;function r(){var o=n.apply(this,arguments);return o!==t&&(e=(t=o)&&Pb(o)),e}return r._value=n,r}function Db(n){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;return this.tween(e,Lb(n))}function Nb(){for(var n=this._name,e=this._id,t=kx(),r=this._groups,o=r.length,l=0;l<o;++l)for(var u=r[l],c=u.length,h,d=0;d<c;++d)if(h=u[d]){var p=Ci(h,e);Qc(h,n,t,d,u,{time:p.time+p.delay+p.duration,delay:0,duration:p.duration,ease:p.ease})}return new cr(r,this._parents,n,t)}function Ib(){var n,e,t=this,r=t._id,o=t.size();return new Promise(function(l,u){var c={value:u},h={value:function(){--o===0&&l()}};t.each(function(){var d=ki(this,r),p=d.on;p!==n&&(e=(n=p).copy(),e._.cancel.push(c),e._.interrupt.push(c),e._.end.push(h)),d.on=e}),o===0&&l()})}var Ub=0;function cr(n,e,t,r){this._groups=n,this._parents=e,this._name=t,this._id=r}function kx(){return++Ub}var tr=Za.prototype;cr.prototype={constructor:cr,select:mb,selectAll:gb,selectChild:tr.selectChild,selectChildren:tr.selectChildren,filter:lb,merge:ub,selection:vb,transition:Nb,call:tr.call,nodes:tr.nodes,node:tr.node,size:tr.size,empty:tr.empty,each:tr.each,on:hb,attr:jR,attrTween:ZR,style:Eb,styleTween:Ab,text:bb,textTween:Db,remove:pb,tween:zR,delay:eb,duration:ib,ease:sb,easeVarying:ab,end:Ib,[Symbol.iterator]:tr[Symbol.iterator]};function Fb(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var Ob={time:null,delay:0,duration:250,ease:Fb};function kb(n,e){for(var t;!(t=n.__transition)||!(t=t[e]);)if(!(n=n.parentNode))throw new Error(`transition ${e} not found`);return t}function zb(n){var e,t;n instanceof cr?(e=n._id,n=n._name):(e=kx(),(t=Ob).time=xp(),n=n==null?null:n+"");for(var r=this._groups,o=r.length,l=0;l<o;++l)for(var u=r[l],c=u.length,h,d=0;d<c;++d)(h=u[d])&&Qc(h,n,e,d,u,t||kb(h,e));return new cr(r,this._parents,n,e)}Za.prototype.interrupt=FR;Za.prototype.transition=zb;var y0={},hd={},dd=34,Ma=10,pd=13;function zx(n){return new Function("d","return {"+n.map(function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'}).join(",")+"}")}function Bb(n,e){var t=zx(n);return function(r,o){return e(t(r),o,n)}}function S0(n){var e=Object.create(null),t=[];return n.forEach(function(r){for(var o in r)o in e||t.push(e[o]=o)}),t}function Fn(n,e){var t=n+"",r=t.length;return r<e?new Array(e-r+1).join(0)+t:t}function Hb(n){return n<0?"-"+Fn(-n,6):n>9999?"+"+Fn(n,6):Fn(n,4)}function Vb(n){var e=n.getUTCHours(),t=n.getUTCMinutes(),r=n.getUTCSeconds(),o=n.getUTCMilliseconds();return isNaN(n)?"Invalid Date":Hb(n.getUTCFullYear())+"-"+Fn(n.getUTCMonth()+1,2)+"-"+Fn(n.getUTCDate(),2)+(o?"T"+Fn(e,2)+":"+Fn(t,2)+":"+Fn(r,2)+"."+Fn(o,3)+"Z":r?"T"+Fn(e,2)+":"+Fn(t,2)+":"+Fn(r,2)+"Z":t||e?"T"+Fn(e,2)+":"+Fn(t,2)+"Z":"")}function Gb(n){var e=new RegExp('["'+n+`
\r]`),t=n.charCodeAt(0);function r(_,g){var y,E,M=o(_,function(x,v){if(y)return y(x,v-1);E=x,y=g?Bb(x,g):zx(x)});return M.columns=E||[],M}function o(_,g){var y=[],E=_.length,M=0,x=0,v,A=E<=0,T=!1;_.charCodeAt(E-1)===Ma&&--E,_.charCodeAt(E-1)===pd&&--E;function b(){if(A)return hd;if(T)return T=!1,y0;var D,I=M,G;if(_.charCodeAt(I)===dd){for(;M++<E&&_.charCodeAt(M)!==dd||_.charCodeAt(++M)===dd;);return(D=M)>=E?A=!0:(G=_.charCodeAt(M++))===Ma?T=!0:G===pd&&(T=!0,_.charCodeAt(M)===Ma&&++M),_.slice(I+1,D-1).replace(/""/g,'"')}for(;M<E;){if((G=_.charCodeAt(D=M++))===Ma)T=!0;else if(G===pd)T=!0,_.charCodeAt(M)===Ma&&++M;else if(G!==t)continue;return _.slice(I,D)}return A=!0,_.slice(I,E)}for(;(v=b())!==hd;){for(var V=[];v!==y0&&v!==hd;)V.push(v),v=b();g&&(V=g(V,x++))==null||y.push(V)}return y}function l(_,g){return _.map(function(y){return g.map(function(E){return p(y[E])}).join(n)})}function u(_,g){return g==null&&(g=S0(_)),[g.map(p).join(n)].concat(l(_,g)).join(`
`)}function c(_,g){return g==null&&(g=S0(_)),l(_,g).join(`
`)}function h(_){return _.map(d).join(`
`)}function d(_){return _.map(p).join(n)}function p(_){return _==null?"":_ instanceof Date?Vb(_):e.test(_+="")?'"'+_.replace(/"/g,'""')+'"':_}return{parse:r,parseRows:o,format:u,formatBody:c,formatRows:h,formatRow:d,formatValue:p}}var Wb=Gb(","),M0=Wb.parseRows;function Xb(n,e){var t,r=1;n==null&&(n=0),e==null&&(e=0);function o(){var l,u=t.length,c,h=0,d=0;for(l=0;l<u;++l)c=t[l],h+=c.x,d+=c.y;for(h=(h/u-n)*r,d=(d/u-e)*r,l=0;l<u;++l)c=t[l],c.x-=h,c.y-=d}return o.initialize=function(l){t=l},o.x=function(l){return arguments.length?(n=+l,o):n},o.y=function(l){return arguments.length?(e=+l,o):e},o.strength=function(l){return arguments.length?(r=+l,o):r},o}function jb(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return Bx(this.cover(e,t),e,t,n)}function Bx(n,e,t,r){if(isNaN(e)||isNaN(t))return n;var o,l=n._root,u={data:r},c=n._x0,h=n._y0,d=n._x1,p=n._y1,_,g,y,E,M,x,v,A;if(!l)return n._root=u,n;for(;l.length;)if((M=e>=(_=(c+d)/2))?c=_:d=_,(x=t>=(g=(h+p)/2))?h=g:p=g,o=l,!(l=l[v=x<<1|M]))return o[v]=u,n;if(y=+n._x.call(null,l.data),E=+n._y.call(null,l.data),e===y&&t===E)return u.next=l,o?o[v]=u:n._root=u,n;do o=o?o[v]=new Array(4):n._root=new Array(4),(M=e>=(_=(c+d)/2))?c=_:d=_,(x=t>=(g=(h+p)/2))?h=g:p=g;while((v=x<<1|M)===(A=(E>=g)<<1|y>=_));return o[A]=l,o[v]=u,n}function Yb(n){var e,t,r=n.length,o,l,u=new Array(r),c=new Array(r),h=1/0,d=1/0,p=-1/0,_=-1/0;for(t=0;t<r;++t)isNaN(o=+this._x.call(null,e=n[t]))||isNaN(l=+this._y.call(null,e))||(u[t]=o,c[t]=l,o<h&&(h=o),o>p&&(p=o),l<d&&(d=l),l>_&&(_=l));if(h>p||d>_)return this;for(this.cover(h,d).cover(p,_),t=0;t<r;++t)Bx(this,u[t],c[t],n[t]);return this}function $b(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,r=this._y0,o=this._x1,l=this._y1;if(isNaN(t))o=(t=Math.floor(n))+1,l=(r=Math.floor(e))+1;else{for(var u=o-t||1,c=this._root,h,d;t>n||n>=o||r>e||e>=l;)switch(d=(e<r)<<1|n<t,h=new Array(4),h[d]=c,c=h,u*=2,d){case 0:o=t+u,l=r+u;break;case 1:t=o-u,l=r+u;break;case 2:o=t+u,r=l-u;break;case 3:t=o-u,r=l-u;break}this._root&&this._root.length&&(this._root=c)}return this._x0=t,this._y0=r,this._x1=o,this._y1=l,this}function qb(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function Kb(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Tn(n,e,t,r,o){this.node=n,this.x0=e,this.y0=t,this.x1=r,this.y1=o}function Zb(n,e,t){var r,o=this._x0,l=this._y0,u,c,h,d,p=this._x1,_=this._y1,g=[],y=this._root,E,M;for(y&&g.push(new Tn(y,o,l,p,_)),t==null?t=1/0:(o=n-t,l=e-t,p=n+t,_=e+t,t*=t);E=g.pop();)if(!(!(y=E.node)||(u=E.x0)>p||(c=E.y0)>_||(h=E.x1)<o||(d=E.y1)<l))if(y.length){var x=(u+h)/2,v=(c+d)/2;g.push(new Tn(y[3],x,v,h,d),new Tn(y[2],u,v,x,d),new Tn(y[1],x,c,h,v),new Tn(y[0],u,c,x,v)),(M=(e>=v)<<1|n>=x)&&(E=g[g.length-1],g[g.length-1]=g[g.length-1-M],g[g.length-1-M]=E)}else{var A=n-+this._x.call(null,y.data),T=e-+this._y.call(null,y.data),b=A*A+T*T;if(b<t){var V=Math.sqrt(t=b);o=n-V,l=e-V,p=n+V,_=e+V,r=y.data}}return r}function Qb(n){if(isNaN(p=+this._x.call(null,n))||isNaN(_=+this._y.call(null,n)))return this;var e,t=this._root,r,o,l,u=this._x0,c=this._y0,h=this._x1,d=this._y1,p,_,g,y,E,M,x,v;if(!t)return this;if(t.length)for(;;){if((E=p>=(g=(u+h)/2))?u=g:h=g,(M=_>=(y=(c+d)/2))?c=y:d=y,e=t,!(t=t[x=M<<1|E]))return this;if(!t.length)break;(e[x+1&3]||e[x+2&3]||e[x+3&3])&&(r=e,v=x)}for(;t.data!==n;)if(o=t,!(t=t.next))return this;return(l=t.next)&&delete t.next,o?(l?o.next=l:delete o.next,this):e?(l?e[x]=l:delete e[x],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(r?r[v]=t:this._root=t),this):(this._root=l,this)}function Jb(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function eP(){return this._root}function tP(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function nP(n){var e=[],t,r=this._root,o,l,u,c,h;for(r&&e.push(new Tn(r,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(r=t.node,l=t.x0,u=t.y0,c=t.x1,h=t.y1)&&r.length){var d=(l+c)/2,p=(u+h)/2;(o=r[3])&&e.push(new Tn(o,d,p,c,h)),(o=r[2])&&e.push(new Tn(o,l,p,d,h)),(o=r[1])&&e.push(new Tn(o,d,u,c,p)),(o=r[0])&&e.push(new Tn(o,l,u,d,p))}return this}function iP(n){var e=[],t=[],r;for(this._root&&e.push(new Tn(this._root,this._x0,this._y0,this._x1,this._y1));r=e.pop();){var o=r.node;if(o.length){var l,u=r.x0,c=r.y0,h=r.x1,d=r.y1,p=(u+h)/2,_=(c+d)/2;(l=o[0])&&e.push(new Tn(l,u,c,p,_)),(l=o[1])&&e.push(new Tn(l,p,c,h,_)),(l=o[2])&&e.push(new Tn(l,u,_,p,d)),(l=o[3])&&e.push(new Tn(l,p,_,h,d))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.y0,r.x1,r.y1);return this}function rP(n){return n[0]}function sP(n){return arguments.length?(this._x=n,this):this._x}function oP(n){return n[1]}function aP(n){return arguments.length?(this._y=n,this):this._y}function Hx(n,e,t){var r=new Ep(e??rP,t??oP,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function Ep(n,e,t,r,o,l){this._x=n,this._y=e,this._x0=t,this._y0=r,this._x1=o,this._y1=l,this._root=void 0}function E0(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Cn=Hx.prototype=Ep.prototype;Cn.copy=function(){var n=new Ep(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=E0(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var o=0;o<4;++o)(r=e.source[o])&&(r.length?t.push({source:r,target:e.target[o]=new Array(4)}):e.target[o]=E0(r));return n};Cn.add=jb;Cn.addAll=Yb;Cn.cover=$b;Cn.data=qb;Cn.extent=Kb;Cn.find=Zb;Cn.remove=Qb;Cn.removeAll=Jb;Cn.root=eP;Cn.size=tP;Cn.visit=nP;Cn.visitAfter=iP;Cn.x=sP;Cn.y=aP;function Qn(n){return function(){return n}}function xo(n){return(n()-.5)*1e-6}function lP(n){return n.index}function w0(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function uP(n){var e=lP,t=_,r,o=Qn(30),l,u,c,h,d,p=1;n==null&&(n=[]);function _(x){return 1/Math.min(c[x.source.index],c[x.target.index])}function g(x){for(var v=0,A=n.length;v<p;++v)for(var T=0,b,V,D,I,G,L,C;T<A;++T)b=n[T],V=b.source,D=b.target,I=D.x+D.vx-V.x-V.vx||xo(d),G=D.y+D.vy-V.y-V.vy||xo(d),L=Math.sqrt(I*I+G*G),L=(L-l[T])/L*x*r[T],I*=L,G*=L,D.vx-=I*(C=h[T]),D.vy-=G*C,V.vx+=I*(C=1-C),V.vy+=G*C}function y(){if(u){var x,v=u.length,A=n.length,T=new Map(u.map((V,D)=>[e(V,D,u),V])),b;for(x=0,c=new Array(v);x<A;++x)b=n[x],b.index=x,typeof b.source!="object"&&(b.source=w0(T,b.source)),typeof b.target!="object"&&(b.target=w0(T,b.target)),c[b.source.index]=(c[b.source.index]||0)+1,c[b.target.index]=(c[b.target.index]||0)+1;for(x=0,h=new Array(A);x<A;++x)b=n[x],h[x]=c[b.source.index]/(c[b.source.index]+c[b.target.index]);r=new Array(A),E(),l=new Array(A),M()}}function E(){if(u)for(var x=0,v=n.length;x<v;++x)r[x]=+t(n[x],x,n)}function M(){if(u)for(var x=0,v=n.length;x<v;++x)l[x]=+o(n[x],x,n)}return g.initialize=function(x,v){u=x,d=v,y()},g.links=function(x){return arguments.length?(n=x,y(),g):n},g.id=function(x){return arguments.length?(e=x,g):e},g.iterations=function(x){return arguments.length?(p=+x,g):p},g.strength=function(x){return arguments.length?(t=typeof x=="function"?x:Qn(+x),E(),g):t},g.distance=function(x){return arguments.length?(o=typeof x=="function"?x:Qn(+x),M(),g):o},g}const cP=1664525,fP=1013904223,T0=4294967296;function hP(){let n=1;return()=>(n=(cP*n+fP)%T0)/T0}function dP(n){return n.x}function pP(n){return n.y}var mP=10,gP=Math.PI*(3-Math.sqrt(5));function _P(n){var e,t=1,r=.001,o=1-Math.pow(r,1/300),l=0,u=.6,c=new Map,h=yp(_),d=dp("tick","end"),p=hP();n==null&&(n=[]);function _(){g(),d.call("tick",e),t<r&&(h.stop(),d.call("end",e))}function g(M){var x,v=n.length,A;M===void 0&&(M=1);for(var T=0;T<M;++T)for(t+=(l-t)*o,c.forEach(function(b){b(t)}),x=0;x<v;++x)A=n[x],A.fx==null?A.x+=A.vx*=u:(A.x=A.fx,A.vx=0),A.fy==null?A.y+=A.vy*=u:(A.y=A.fy,A.vy=0);return e}function y(){for(var M=0,x=n.length,v;M<x;++M){if(v=n[M],v.index=M,v.fx!=null&&(v.x=v.fx),v.fy!=null&&(v.y=v.fy),isNaN(v.x)||isNaN(v.y)){var A=mP*Math.sqrt(.5+M),T=M*gP;v.x=A*Math.cos(T),v.y=A*Math.sin(T)}(isNaN(v.vx)||isNaN(v.vy))&&(v.vx=v.vy=0)}}function E(M){return M.initialize&&M.initialize(n,p),M}return y(),e={tick:g,restart:function(){return h.restart(_),e},stop:function(){return h.stop(),e},nodes:function(M){return arguments.length?(n=M,y(),c.forEach(E),e):n},alpha:function(M){return arguments.length?(t=+M,e):t},alphaMin:function(M){return arguments.length?(r=+M,e):r},alphaDecay:function(M){return arguments.length?(o=+M,e):+o},alphaTarget:function(M){return arguments.length?(l=+M,e):l},velocityDecay:function(M){return arguments.length?(u=1-M,e):1-u},randomSource:function(M){return arguments.length?(p=M,c.forEach(E),e):p},force:function(M,x){return arguments.length>1?(x==null?c.delete(M):c.set(M,E(x)),e):c.get(M)},find:function(M,x,v){var A=0,T=n.length,b,V,D,I,G;for(v==null?v=1/0:v*=v,A=0;A<T;++A)I=n[A],b=M-I.x,V=x-I.y,D=b*b+V*V,D<v&&(G=I,v=D);return G},on:function(M,x){return arguments.length>1?(d.on(M,x),e):d.on(M)}}}function vP(){var n,e,t,r,o=Qn(-30),l,u=1,c=1/0,h=.81;function d(y){var E,M=n.length,x=Hx(n,dP,pP).visitAfter(_);for(r=y,E=0;E<M;++E)e=n[E],x.visit(g)}function p(){if(n){var y,E=n.length,M;for(l=new Array(E),y=0;y<E;++y)M=n[y],l[M.index]=+o(M,y,n)}}function _(y){var E=0,M,x,v=0,A,T,b;if(y.length){for(A=T=b=0;b<4;++b)(M=y[b])&&(x=Math.abs(M.value))&&(E+=M.value,v+=x,A+=x*M.x,T+=x*M.y);y.x=A/v,y.y=T/v}else{M=y,M.x=M.data.x,M.y=M.data.y;do E+=l[M.data.index];while(M=M.next)}y.value=E}function g(y,E,M,x){if(!y.value)return!0;var v=y.x-e.x,A=y.y-e.y,T=x-E,b=v*v+A*A;if(T*T/h<b)return b<c&&(v===0&&(v=xo(t),b+=v*v),A===0&&(A=xo(t),b+=A*A),b<u&&(b=Math.sqrt(u*b)),e.vx+=v*y.value*r/b,e.vy+=A*y.value*r/b),!0;if(y.length||b>=c)return;(y.data!==e||y.next)&&(v===0&&(v=xo(t),b+=v*v),A===0&&(A=xo(t),b+=A*A),b<u&&(b=Math.sqrt(u*b)));do y.data!==e&&(T=l[y.data.index]*r/b,e.vx+=v*T,e.vy+=A*T);while(y=y.next)}return d.initialize=function(y,E){n=y,t=E,p()},d.strength=function(y){return arguments.length?(o=typeof y=="function"?y:Qn(+y),p(),d):o},d.distanceMin=function(y){return arguments.length?(u=y*y,d):Math.sqrt(u)},d.distanceMax=function(y){return arguments.length?(c=y*y,d):Math.sqrt(c)},d.theta=function(y){return arguments.length?(h=y*y,d):Math.sqrt(h)},d}function xP(n){var e=Qn(.1),t,r,o;typeof n!="function"&&(n=Qn(n==null?0:+n));function l(c){for(var h=0,d=t.length,p;h<d;++h)p=t[h],p.vx+=(o[h]-p.x)*r[h]*c}function u(){if(t){var c,h=t.length;for(r=new Array(h),o=new Array(h),c=0;c<h;++c)r[c]=isNaN(o[c]=+n(t[c],c,t))?0:+e(t[c],c,t)}}return l.initialize=function(c){t=c,u()},l.strength=function(c){return arguments.length?(e=typeof c=="function"?c:Qn(+c),u(),l):e},l.x=function(c){return arguments.length?(n=typeof c=="function"?c:Qn(+c),u(),l):n},l}function yP(n){var e=Qn(.1),t,r,o;typeof n!="function"&&(n=Qn(n==null?0:+n));function l(c){for(var h=0,d=t.length,p;h<d;++h)p=t[h],p.vy+=(o[h]-p.y)*r[h]*c}function u(){if(t){var c,h=t.length;for(r=new Array(h),o=new Array(h),c=0;c<h;++c)r[c]=isNaN(o[c]=+n(t[c],c,t))?0:+e(t[c],c,t)}}return l.initialize=function(c){t=c,u()},l.strength=function(c){return arguments.length?(e=typeof c=="function"?c:Qn(+c),u(),l):e},l.y=function(c){return arguments.length?(n=typeof c=="function"?c:Qn(+c),u(),l):n},l}function SP(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function Lc(n,e){if(!isFinite(n)||n===0)return null;var t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"),r=n.slice(0,t);return[r.length>1?r[0]+r.slice(2):r,+n.slice(t+1)]}function Co(n){return n=Lc(Math.abs(n)),n?n[1]:NaN}function MP(n,e){return function(t,r){for(var o=t.length,l=[],u=0,c=n[0],h=0;o>0&&c>0&&(h+c+1>r&&(c=Math.max(1,r-h)),l.push(t.substring(o-=c,o+c)),!((h+=c+1)>r));)c=n[u=(u+1)%n.length];return l.reverse().join(e)}}function EP(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var wP=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Dc(n){if(!(e=wP.exec(n)))throw new Error("invalid format: "+n);var e;return new wp({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Dc.prototype=wp.prototype;function wp(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}wp.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function TP(n){e:for(var e=n.length,t=1,r=-1,o;t<e;++t)switch(n[t]){case".":r=o=t;break;case"0":r===0&&(r=t),o=t;break;default:if(!+n[t])break e;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(o+1):n}var Nc;function AP(n,e){var t=Lc(n,e);if(!t)return Nc=void 0,n.toPrecision(e);var r=t[0],o=t[1],l=o-(Nc=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,u=r.length;return l===u?r:l>u?r+new Array(l-u+1).join("0"):l>0?r.slice(0,l)+"."+r.slice(l):"0."+new Array(1-l).join("0")+Lc(n,Math.max(0,e+l-1))[0]}function A0(n,e){var t=Lc(n,e);if(!t)return n+"";var r=t[0],o=t[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")}const C0={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:SP,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>A0(n*100,e),r:A0,s:AP,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function R0(n){return n}var b0=Array.prototype.map,P0=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function CP(n){var e=n.grouping===void 0||n.thousands===void 0?R0:MP(b0.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",o=n.decimal===void 0?".":n.decimal+"",l=n.numerals===void 0?R0:EP(b0.call(n.numerals,String)),u=n.percent===void 0?"%":n.percent+"",c=n.minus===void 0?"−":n.minus+"",h=n.nan===void 0?"NaN":n.nan+"";function d(_,g){_=Dc(_);var y=_.fill,E=_.align,M=_.sign,x=_.symbol,v=_.zero,A=_.width,T=_.comma,b=_.precision,V=_.trim,D=_.type;D==="n"?(T=!0,D="g"):C0[D]||(b===void 0&&(b=12),V=!0,D="g"),(v||y==="0"&&E==="=")&&(v=!0,y="0",E="=");var I=(g&&g.prefix!==void 0?g.prefix:"")+(x==="$"?t:x==="#"&&/[boxX]/.test(D)?"0"+D.toLowerCase():""),G=(x==="$"?r:/[%p]/.test(D)?u:"")+(g&&g.suffix!==void 0?g.suffix:""),L=C0[D],C=/[defgprs%]/.test(D);b=b===void 0?6:/[gprs]/.test(D)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b));function N(H){var Y=I,ee=G,ue,J,le;if(D==="c")ee=L(H)+ee,H="";else{H=+H;var z=H<0||1/H<0;if(H=isNaN(H)?h:L(Math.abs(H),b),V&&(H=TP(H)),z&&+H==0&&M!=="+"&&(z=!1),Y=(z?M==="("?M:c:M==="-"||M==="("?"":M)+Y,ee=(D==="s"&&!isNaN(H)&&Nc!==void 0?P0[8+Nc/3]:"")+ee+(z&&M==="("?")":""),C){for(ue=-1,J=H.length;++ue<J;)if(le=H.charCodeAt(ue),48>le||le>57){ee=(le===46?o+H.slice(ue+1):H.slice(ue))+ee,H=H.slice(0,ue);break}}}T&&!v&&(H=e(H,1/0));var he=Y.length+H.length+ee.length,ne=he<A?new Array(A-he+1).join(y):"";switch(T&&v&&(H=e(ne+H,ne.length?A-ee.length:1/0),ne=""),E){case"<":H=Y+H+ee+ne;break;case"=":H=Y+ne+H+ee;break;case"^":H=ne.slice(0,he=ne.length>>1)+Y+H+ee+ne.slice(he);break;default:H=ne+Y+H+ee;break}return l(H)}return N.toString=function(){return _+""},N}function p(_,g){var y=Math.max(-8,Math.min(8,Math.floor(Co(g)/3)))*3,E=Math.pow(10,-y),M=d((_=Dc(_),_.type="f",_),{suffix:P0[8+y/3]});return function(x){return M(E*x)}}return{format:d,formatPrefix:p}}var Nu,Vx,Gx;RP({thousands:",",grouping:[3],currency:["$",""]});function RP(n){return Nu=CP(n),Vx=Nu.format,Gx=Nu.formatPrefix,Nu}function bP(n){return Math.max(0,-Co(Math.abs(n)))}function PP(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Co(e)/3)))*3-Co(Math.abs(n)))}function LP(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,Co(e)-Co(n))+1}function DP(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function NP(n){return function(){return n}}function IP(n){return+n}var L0=[0,1];function yo(n){return n}function Ud(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:NP(isNaN(e)?NaN:.5)}function UP(n,e){var t;return n>e&&(t=n,n=e,e=t),function(r){return Math.max(n,Math.min(e,r))}}function FP(n,e,t){var r=n[0],o=n[1],l=e[0],u=e[1];return o<r?(r=Ud(o,r),l=t(u,l)):(r=Ud(r,o),l=t(l,u)),function(c){return l(r(c))}}function OP(n,e,t){var r=Math.min(n.length,e.length)-1,o=new Array(r),l=new Array(r),u=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++u<r;)o[u]=Ud(n[u],n[u+1]),l[u]=t(e[u],e[u+1]);return function(c){var h=oA(n,c,1,r)-1;return l[h](o[h](c))}}function kP(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function zP(){var n=L0,e=L0,t=vp,r,o,l,u=yo,c,h,d;function p(){var g=Math.min(n.length,e.length);return u!==yo&&(u=UP(n[0],n[g-1])),c=g>2?OP:FP,h=d=null,_}function _(g){return g==null||isNaN(g=+g)?l:(h||(h=c(n.map(r),e,t)))(r(u(g)))}return _.invert=function(g){return u(o((d||(d=c(e,n.map(r),Mi)))(g)))},_.domain=function(g){return arguments.length?(n=Array.from(g,IP),p()):n.slice()},_.range=function(g){return arguments.length?(e=Array.from(g),p()):e.slice()},_.rangeRound=function(g){return e=Array.from(g),t=ER,p()},_.clamp=function(g){return arguments.length?(u=g?!0:yo,p()):u!==yo},_.interpolate=function(g){return arguments.length?(t=g,p()):t},_.unknown=function(g){return arguments.length?(l=g,_):l},function(g,y){return r=g,o=y,p()}}function BP(){return zP()(yo,yo)}function HP(n,e,t,r){var o=_A(n,e,t),l;switch(r=Dc(r??",f"),r.type){case"s":{var u=Math.max(Math.abs(n),Math.abs(e));return r.precision==null&&!isNaN(l=PP(o,u))&&(r.precision=l),Gx(r,u)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(l=LP(o,Math.max(Math.abs(n),Math.abs(e))))&&(r.precision=l-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(l=bP(o))&&(r.precision=l-(r.type==="%")*2);break}}return Vx(r)}function VP(n){var e=n.domain;return n.ticks=function(t){var r=e();return gA(r[0],r[r.length-1],t??10)},n.tickFormat=function(t,r){var o=e();return HP(o[0],o[o.length-1],t??10,r)},n.nice=function(t){t==null&&(t=10);var r=e(),o=0,l=r.length-1,u=r[o],c=r[l],h,d,p=10;for(c<u&&(d=u,u=c,c=d,d=o,o=l,l=d);p-- >0;){if(d=Cd(u,c,t),d===h)return r[o]=u,r[l]=c,e(r);if(d>0)u=Math.floor(u/d)*d,c=Math.ceil(c/d)*d;else if(d<0)u=Math.ceil(u*d)/d,c=Math.floor(c*d)/d;else break;h=d}return n},n}function Fd(){var n=BP();return n.copy=function(){return kP(n,Fd())},DP.apply(n,arguments),VP(n)}function Ca(n,e,t){this.k=n,this.x=e,this.y=t}Ca.prototype={constructor:Ca,scale:function(n){return n===1?this:new Ca(this.k*n,this.x,this.y)},translate:function(n,e){return n===0&e===0?this:new Ca(this.k,this.x+this.k*n,this.y+this.k*e)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Ca.prototype;function mo(n){return n&&n!=="\\N"}function GP(n,e){const t=M0(n),r=new Map,o=new Map;for(const g of t){if(g.length<8)continue;const y=+g[6],E=+g[7];if(!Number.isFinite(y)||!Number.isFinite(E))continue;const M={numericId:g[0],name:g[1],city:g[2],country:g[3],iata:mo(g[4])?g[4]:null,icao:mo(g[5])?g[5]:null,lat:y,lon:E,degree:0,routeCount:0,international:0,domestic:0,neighbors:new Set,index:-1,topology:null};M.id=M.iata||M.icao||`ID-${M.numericId}`,r.set(M.numericId,M),M.iata&&o.set(M.iata,M),M.icao&&o.set(M.icao,M)}const l=new Map;let u=0,c=0;for(const g of M0(e)){if(g.length<6)continue;const y=mo(g[3])&&r.get(g[3])||mo(g[2])&&o.get(g[2]),E=mo(g[5])&&r.get(g[5])||mo(g[4])&&o.get(g[4]);if(!y||!E||y===E){c++;continue}u++;const M=y.numericId<E.numericId?[y,E]:[E,y],x=`${M[0].numericId}|${M[1].numericId}`;let v=l.get(x);v||(v={source:M[0],target:M[1],weight:0,carriers:new Set,international:M[0].country!==M[1].country},l.set(x,v)),v.weight++,g[0]&&v.carriers.add(g[0])}const h=[...l.values()],d=new Set;for(const g of h)d.add(g.source),d.add(g.target),g.source.neighbors.add(g.target.numericId),g.target.neighbors.add(g.source.numericId),g.source.routeCount+=g.weight,g.target.routeCount+=g.weight,g.international?(g.source.international+=g.weight,g.target.international+=g.weight):(g.source.domestic+=g.weight,g.target.domestic+=g.weight);const p=[...d];p.forEach((g,y)=>{g.index=y,g.degree=g.neighbors.size}),h.forEach((g,y)=>{g.index=y,g.score=g.weight*20+Math.sqrt(g.source.degree*g.target.degree)}),h.sort((g,y)=>y.score-g.score);const _=fA(p,g=>g.length,g=>g.country).sort((g,y)=>px(g[1],y[1]));return{nodes:p,links:h,countries:_,rawRouteCount:u,skipped:c}}function Od(n,e,t=1){const r=(90-n)*Math.PI/180,o=(e+180)*Math.PI/180;return new $(-Math.sin(r)*Math.cos(o),Math.cos(r),Math.sin(r)*Math.sin(o)).multiplyScalar(t)}function D0(n,e,t,r){const o=n.clone().normalize(),l=e.clone().normalize(),u=Math.acos(Wc.clamp(o.dot(l),-1,1));let c;if(u<1e-4)c=o.clone().lerp(l,t).normalize();else{const h=Math.sin(u);c=o.multiplyScalar(Math.sin((1-t)*u)/h).add(l.multiplyScalar(Math.sin(t*u)/h))}return c.multiplyScalar(1.012+Math.sin(Math.PI*t)*r)}function N0(n,e,t){const r=n===e,o=!!(e&&e.neighbors.has(n.numericId)),l=r?t.nodeSelected:o?t.nodeConnected:n.degree>45?t.node.hub:n.degree>15?t.node.mid:t.node.low,u=(4.2+Math.min(8,Math.sqrt(n.degree)*.72))*(r?1.65:o?1.2:1);return{color:l,pixelSize:u,isSelected:r,connected:o}}function I0(n,e,t,r){const o=Wc.degToRad(e.fov),l=2*Math.tan(o/2)*r,u=t/l;return n/(2*u)}const WP=1.014;function XP(n){const e=n.length,t=new Float32Array(e*3),r=new Float32Array(e*3);let o=!1;const l=new $;return n.forEach((u,c)=>{l.copy(Od(u.lat,u.lon,WP)),t[c*3]=l.x,t[c*3+1]=l.y,t[c*3+2]=l.z}),{count:e,geo:t,topology:r,get topologyReady(){return o},markTopologyReady(){o=!0},table(u){return u==="globe"||!o?t:r},read(u,c,h){const d=this.table(u);return h.set(d[c*3],d[c*3+1],d[c*3+2])}}}const jP="e3bc6dedbcceb8b7b74248a00dcd6207254da6bd",YP=`https://cdn.jsdelivr.net/gh/jpatokal/openflights@${jP}/data`,$P=2e4,qP=["airports","routes"];async function KP(n,e,t){const r=new AbortController,o=()=>r.abort(t?.reason);t?.aborted?r.abort(t.reason):t?.addEventListener("abort",o,{once:!0});const l=e?setTimeout(()=>r.abort(new Error("timed out")),e):null;try{const u=await fetch(n,{signal:r.signal});if(!u.ok)throw new Error(`HTTP ${u.status}`);const c=await u.text();if(/^\s*<(?:!doctype|html)/i.test(c))throw new Error("received HTML, not data");return c}finally{l&&clearTimeout(l),t?.removeEventListener("abort",o)}}const Iu={local:{id:"local",label:"bundled data files",url:n=>`/openflights/${n}.dat`},upstream:{id:"upstream",label:"OpenFlights upstream (jsDelivr)",url:n=>`${YP}/${n}.dat`,timeout:$P}};function ZP(){const n=typeof window>"u"?null:new URLSearchParams(window.location.search).get("data");return n==="local"?[Iu.local]:n==="upstream"?[Iu.upstream]:[Iu.local,Iu.upstream]}async function QP({signal:n}={}){const e=[];for(const r of ZP())try{const[o,l]=await Promise.all(qP.map(u=>KP(r.url(u),r.timeout,n)));return{airports:o,routes:l,source:r.id,attempts:e}}catch(o){if(n?.aborted)throw o;e.push(`${r.label}: ${o.message}`)}const t=new Error(e.join("; ")||"no data sources configured");throw t.attempts=e,t}function JP(n,e,t){Ke.useEffect(()=>{if(!n)return;let r=!1,o;const l=n.nodes.map(p=>({id:p.numericId,x:p.lon*2.1,y:-p.lat*2.1,ref:p})),u=n.links.map(p=>({source:p.source.numericId,target:p.target.numericId,weight:p.weight})),c=_P(l).force("link",uP(u).id(p=>p.id).distance(p=>18+22/Math.sqrt(p.weight)).strength(.045)).force("charge",vP().strength(-17).distanceMax(190)).force("center",Xb(0,0)).force("x",xP(0).strength(.012)).force("y",yP(0).strength(.012)).stop();let h=0;const d=p=>{for(;!r&&h<85&&p.timeRemaining()>1;)c.tick(),h++;if(!r)if(h<85)o=n0(d);else{const _=i0(l,x=>x.x),g=i0(l,x=>x.y),y=Fd().domain(_).range([-1.5,1.5]),E=Fd().domain(g).range([1.1,-1.1]),M=e.topology;for(const x of l){const v=x.ref.index;M[v*3]=y(x.x),M[v*3+1]=E(x.y),M[v*3+2]=.08*Math.log1p(x.ref.degree)}e.markTopologyReady(),t()}};return o=n0(d),()=>{r=!0,nA(o),c.stop()}},[n,e,t])}const U0={type:"change"},Tp={type:"start"},Wx={type:"end"},Uu=new qa,F0=new nr,e2=Math.cos(70*Wc.DEG2RAD),Qt=new $,Un=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},md=1e-6;class t2 extends dx{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.enabled=!0,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xs.ROTATE,MIDDLE:xs.DOLLY,RIGHT:xs.PAN},this.touches={ONE:_s.ROTATE,TWO:_s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new jr,this._lastTargetPosition=new $,this._quat=new jr().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ad,this._sphericalDelta=new Ad,this._scale=1,this._panOffset=new $,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new $,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=i2.bind(this),this._onPointerDown=n2.bind(this),this._onPointerUp=r2.bind(this),this._onContextMenu=f2.bind(this),this._onMouseWheel=a2.bind(this),this._onKeyDown=l2.bind(this),this._onTouchStart=u2.bind(this),this._onTouchMove=c2.bind(this),this._onMouseDown=s2.bind(this),this._onMouseMove=o2.bind(this),this._interceptControlDown=h2.bind(this),this._interceptControlUp=d2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(U0),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Un:r>Math.PI&&(r-=Un),o<-Math.PI?o+=Un:o>Math.PI&&(o-=Un),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const c=Qt.length();u=this._clampDistance(c*this._scale);const h=c-u;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const c=new $(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(c),this.object.updateMatrixWorld(),u=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Uu.origin.copy(this.object.position),Uu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uu.direction))<e2?this.object.lookAt(this.target):(F0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uu.intersectPlane(F0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>md||8*(1-this._lastQuaternion.dot(this.object.quaternion))>md||this._lastTargetPosition.distanceToSquared(this.target)>md?(this.dispatchEvent(U0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Qt.copy(o).sub(this.target);let l=Qt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,c=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(u,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ot,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function n2(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function i2(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function r2(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wx),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function s2(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ct.DOLLY;break;case xs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ct.ROTATE}break;case xs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Tp)}function o2(n){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function a2(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(n.preventDefault(),this.dispatchEvent(Tp),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Wx))}function l2(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function u2(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case _s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ct.TOUCH_ROTATE;break;case _s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case _s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ct.TOUCH_DOLLY_PAN;break;case _s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Tp)}function c2(n){switch(this._trackPointer(n),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ct.NONE}}function f2(n){this.enabled!==!1&&n.preventDefault()}function h2(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function d2(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const p2=`
varying vec2 vUv;
varying vec3 vNormal;
void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,m2=`
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
}`;function g2(n,e,t){const r=n.land;return new Jn({transparent:!1,uniforms:{uTerrain:{value:e},uTexel:{value:new ot(1/t.x,1/t.y)},uOcean:{value:n.ocean.clone()},uOceanDeep:{value:n.oceanDeep.clone()},uShore:{value:n.shore.clone()},uRamp:{value:r.map(o=>o.color.clone())},uRampAt:{value:r.map(o=>o.at)},uRelief:{value:n.relief},uLightDir:{value:new $(.6,.45,.66).normalize()}},vertexShader:p2,fragmentShader:m2})}function _2(n){const e=new vo;n.add(e);const t=new sx({color:1055270,emissive:462874,specular:2704476,shininess:22,transparent:!1}),r=new Zn(new Ss(eA,96,64),t);e.add(r);const o=new Io({color:3493992,transparent:!0,opacity:.13,depthWrite:!1}),l=new $c(new ix(new Ss(1.003,36,18)),o);e.add(l);const u=new Jn({transparent:!0,side:xn,depthWrite:!1,uniforms:{uColor:{value:new We("#389eeb")},uStrength:{value:.26}},vertexShader:"varying vec3 vN; varying vec3 vW; void main(){vN=normalize(normalMatrix*normal); vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`uniform vec3 uColor; uniform float uStrength; varying vec3 vN; varying vec3 vW; void main(){vec3 V=normalize(cameraPosition-vW);float rim=pow(1.0-max(dot(vN,V),0.0),2.4);gl_FragColor=vec4(uColor,rim*uStrength);
      #include <colorspace_fragment>
    }`}),c=new Zn(new Ss(1.045,48,32),u);e.add(c);const h=new cn,d=new Float32Array(900*3);for(let v=0;v<900;v++){const A=7+Math.random()*8,T=Math.random()*2-1,b=Math.random()*Math.PI*2,V=Math.sqrt(1-T*T);d[v*3]=A*V*Math.cos(b),d[v*3+1]=A*T,d[v*3+2]=A*V*Math.sin(b)}h.setAttribute("position",new Gt(d,3));const p=new fp(h,new cp({color:8231863,size:.012,transparent:!0,opacity:.42,depthWrite:!1}));n.add(p);let _=null,g=null,y=!1,E=null;const M=(v,A)=>{_||y||!v.terrain||(y=!0,new cx().load("/openflights/geo/terrain-4096.png",T=>{y=!1,T.colorSpace=Ei,T.wrapS=Oa,T.wrapT=ir,T.minFilter=rr,T.magFilter=Kn,T.generateMipmaps=!0,T.anisotropy=8,g=T,_=g2(v.terrain,T,{x:T.image.width,y:T.image.height}),E&&E.terrain&&(r.material=_),A?.()},void 0,()=>{y=!1}))};return{globeGroup:e,globe:r,grid:l,atmosphere:c,starsObj:p,starsGeo:h,applyTheme:(v,A)=>{E=v,v.terrain?_?r.material=_:M(v,A):r.material=t,o.color.set(v.grid.color),o.opacity=v.grid.opacity,u.uniforms.uColor.value.copy(v.atmosphere.color),u.uniforms.uStrength.value=v.atmosphere.strength,p.visible=v.stars},dispose(){g?.dispose(),_?.dispose(),t.dispose()}}}function v2(n,e,t,r,o,l){const u=new Float32Array(e.nodes.length*3),c=new Float32Array(e.nodes.length*3),h=new Float32Array(e.nodes.length),d=new Float32Array(e.nodes.length),p=new Float32Array(e.nodes.length),_=new Float32Array(e.nodes.length);for(let C=0;C<p.length;C++)p[C]=C;u.set(t.geo),e.nodes.forEach((C,N)=>{h[N]=4.2+Math.min(8,Math.sqrt(C.degree)*.72),d[N]=.88});const g=new cn;g.setAttribute("position",new Gt(u,3)),g.setAttribute("color",new Gt(c,3)),g.setAttribute("aSize",new Gt(h,1)),g.setAttribute("aAlpha",new Gt(d,1)),g.setAttribute("aIndex",new Gt(p,1)),g.setAttribute("aPickable",new Gt(_,1));const y=new Jn({transparent:!0,depthWrite:!1,vertexColors:!0,uniforms:{uPixelRatio:{value:r.getPixelRatio()}},vertexShader:"attribute float aSize;attribute float aAlpha;varying vec3 vColor;varying float vAlpha;void main(){vColor=color;vAlpha=aAlpha;vec4 mv=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(aSize*(260.0/-mv.z),2.0,18.0);gl_Position=projectionMatrix*mv;}",fragmentShader:`varying vec3 vColor;varying float vAlpha;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,.25,d)*vAlpha;if(a<.015)discard;gl_FragColor=vec4(vColor,a);
      #include <colorspace_fragment>
    }`}),E=new fp(g,y);n.add(E);const M=e.nodes.reduce((C,N)=>N.degree>C.degree?N:C,e.nodes[0]),x=new Ss(1,24,16),v=new rx({roughness:.32,metalness:.2}),A=new Zn(x,v);A.visible=!1,n.add(A);let T=0,b=3.55;const V=(C,N,H,Y)=>{if(!H){A.visible=!1;return}const{color:ee,pixelSize:ue}=N0(H,N,Y);t.read(C.view,H.index,A.position),G=H.index,v.color.copy(ee),v.emissive.copy(ee).multiplyScalar(.32),T=ue,b=C.view==="globe"?3.55:4.2,A.scale.setScalar(I0(T,o,l(),b)),A.visible=!0};let D=e.nodes.map((C,N)=>N),I=t.geo,G=-1;const L=(C,N,H,Y)=>{D=[];const ee=t.table(C.view);ee!==I&&(u.set(ee),g.attributes.position.needsUpdate=!0,I=ee),e.nodes.forEach((ue,J)=>{const le=!C.country||ue.country===C.country,z=ue.degree>=C.minDegree,he=le&&z,{color:ne,pixelSize:O,isSelected:re,connected:be}=N0(ue,N,Y);let Q=re?1:he?.9:be?.75:tA;const K=ue===H;K&&(Q=0),c[J*3]=ne.r,c[J*3+1]=ne.g,c[J*3+2]=ne.b,d[J]=Q,h[J]=O;const fe=re||be||he||K;_[J]=fe?1:0,fe&&D.push(J)}),g.attributes.color.needsUpdate=!0,g.attributes.aAlpha.needsUpdate=!0,g.attributes.aSize.needsUpdate=!0,g.attributes.aPickable.needsUpdate=!0};return{points:E,topHubNode:M,geometry:g,material:y,heroMesh:A,get heroIndex(){return A.visible?G:-1},positions:u,get visibleIndices(){return D},update(C,N,H,Y){L(C,N,H,Y),V(C,N,H,Y)},resize(){A.visible&&A.scale.setScalar(I0(T,o,l(),b))},dispose(){g.dispose(),y.dispose(),x.dispose(),v.dispose()}}}function x2(n,e){const t={contextDomestic:[],contextInternational:[],focusDomestic:[],focusInternational:[]};for(const r of n){const l=e&&(r.source===e||r.target===e)?r.international?"focusInternational":"focusDomestic":r.international?"contextInternational":"contextDomestic";t[l].push(r)}return t}function y2(n,e){const t=new Float32Array(n.length/3);for(const[r,o]of e){let l=0;for(let u=r;u<o;u+=2){const c=u*3,h=(u+1)*3;t[u]=l,l+=Math.hypot(n[h]-n[c],n[h+1]-n[c+1],n[h+2]-n[c+2]),t[u+1]=l}}return t}const S2=.025,M2=.015;function E2(n,e,t){let r=[];const o=new $,l=new $,u=(_,g)=>{t.read(_,g.source.index,o),t.read(_,g.target.index,l)},c=_=>{_&&(n.remove(_),_.geometry.dispose(),_.material.dispose())},h=(_,g,y,E,M,x,v,A)=>{if(!_.length)return null;let T=0;for(const N of _)T+=g.view==="globe"?(u("globe",N),o.angleTo(l)>1.25?11:7):1;const b=new Float32Array(T*2*3),V=new Float32Array(T*2*3),D=[];let I=0;for(const N of _){const H=I/3;if(g.view==="globe"){u("globe",N);const Y=o.angleTo(l),ee=Y>1.25?11:7,ue=.025+Math.min(.34,Y*.18)+x;let J=D0(o,l,0,ue);for(let le=1;le<=ee;le++){const z=D0(o,l,le/ee,ue);b.set(J.toArray(),I),V.set(y.toArray(),I),I+=3,b.set(z.toArray(),I),V.set(y.toArray(),I),I+=3,J=z}}else u("topology",N),b.set(o.toArray(),I),V.set(y.toArray(),I),I+=3,b.set(l.toArray(),I),V.set(y.toArray(),I),I+=3;D.push([H,I/3])}const G=new cn;G.setAttribute("position",new Gt(b,3)),G.setAttribute("color",new Gt(V,3)),M&&G.setAttribute("lineDistance",new Gt(y2(b,D),1));const L=M?ox:Io,C=new $c(G,new L({vertexColors:!0,transparent:!0,opacity:v,depthWrite:!1,blending:E,...M?{dashSize:S2,gapSize:M2}:{}}));return C.renderOrder=A,n.add(C),C},d=()=>{r.forEach(c),r=[]};return{get objects(){return r},get object(){return r[0]||null},update:(_,g,y)=>{d();const E=Math.ceil(e.links.length*_.density/100),M=[];let x=0;for(const D of e.links){if(x>=E)break;_.scope==="international"&&!D.international||_.scope==="domestic"&&D.international||_.country&&D.source.country!==_.country&&D.target.country!==_.country||D.source.degree<_.minDegree||D.target.degree<_.minDegree||(x++,M.push(D))}const v=x2(M,g),A=_.view==="globe"?"globe":"topology",b=v.focusDomestic.length>0||v.focusInternational.length>0?y.routeContextOpacity[A]:y.routeOpacity[A],V=_.view==="globe"?.02:0;r=[h(v.contextDomestic,_,y.route.domestic,y.routeBlending,!1,0,b,1),h(v.contextInternational,_,y.route.intl,y.routeBlending,!0,0,b,1),h(v.focusDomestic,_,y.route.selected,y.routeBlending,!1,V,y.routeFocusOpacity,2),h(v.focusInternational,_,y.route.selected,y.routeBlending,!0,V,y.routeFocusOpacity,2)].filter(Boolean)},dispose(){d()}}}const w2=8,T2=["attribute float aSize;","attribute float aIndex;","attribute float aPickable;","varying vec3 vId;","void main() {","  if (aPickable < 0.5) {","    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);","    gl_PointSize = 0.0;","    return;","  }","  float id = aIndex + 1.0;","  vId = vec3(","    floor(id / 65536.0),","    floor(mod(id, 65536.0) / 256.0),","    mod(id, 256.0)","  ) / 255.0;","  vec4 mv = modelViewMatrix * vec4(position, 1.0);","  gl_PointSize = clamp(aSize * (260.0 / -mv.z), 2.0, 18.0);","  gl_Position = projectionMatrix * mv;","}"].join(`
`),A2=["varying vec3 vId;","void main() {","  if (length(gl_PointCoord - 0.5) > 0.5) discard;","  gl_FragColor = vec4(vId, 1.0);","}"].join(`
`),O0=n=>new n.ShaderMaterial({uniforms:{uId:{value:new n.Vector3}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 uId;void main(){gl_FragColor=vec4(uId,1.0);}"}),C2=(n,e)=>e.set(Math.floor(n/65536)/255,Math.floor(n/256)%256/255,n%256/255);function R2({renderer:n,scene:e,camera:t,data:r,sprites:o,world:l,routes:u,selectedRef:c,onHover:h,onSelect:d,onClear:p}){let _=0,g=null,y=!1,E=0,M=null,x=null;const v=new Jn({vertexShader:T2,fragmentShader:A2,transparent:!1,depthTest:!0,depthWrite:!0}),A=O0(t0),T=O0(t0),b=N=>{const H=Math.max(1,Math.round(w2*2*N)+1);H===E&&M||(M?.dispose(),E=H,M=new ur(E,E,{minFilter:An,magFilter:An,depthBuffer:!0}),M.texture.colorSpace=Ei,M.texture.generateMipmaps=!1,x=new Uint8Array(E*E*4))},V=(N,H)=>{const Y=n.domElement,ee=Y.getBoundingClientRect();if(N<ee.left||H<ee.top||N>ee.right||H>ee.bottom)return null;const ue=n.getPixelRatio();b(ue);const J=Math.round(ee.width*ue),le=Math.round(ee.height*ue),z=(N-ee.left)*ue,he=(H-ee.top)*ue,ne=o.heroIndex,O=[],re=Ie=>{Ie&&(O.push([Ie,"visible",Ie.visible]),Ie.visible=!1)},be=(Ie,Le)=>{O.push([Ie,"material",Ie.material]),Ie.material=Le};re(l.starsObj),re(l.grid),re(l.atmosphere),u.objects.forEach(re),be(l.globe,A),be(o.points,v),ne>=0?(C2(ne+1,T.uniforms.uId.value),be(o.heroMesh,T)):re(o.heroMesh);const Q=n.getRenderTarget(),K=n.getClearColor(new We),fe=n.getClearAlpha();t.setViewOffset(J,le,Math.round(z)-(E>>1),Math.round(he)-(E>>1),E,E),n.setRenderTarget(M),n.setClearColor(0,1),n.clear(),n.render(e,t),n.readRenderTargetPixels(M,0,0,E,E,x),t.clearViewOffset(),n.setRenderTarget(Q),n.setClearColor(K,fe);for(let Ie=O.length-1;Ie>=0;Ie--){const[Le,k,_t]=O[Ie];Le[k]=_t}const de=E>>1;let Me=null,Ce=1/0;for(let Ie=0;Ie<E;Ie++)for(let Le=0;Le<E;Le++){const k=((E-1-Ie)*E+Le)*4,_t=x[k]<<16|x[k+1]<<8|x[k+2];if(!_t)continue;const dt=(Le-de)*(Le-de)+(Ie-de)*(Ie-de);dt<Ce&&(Ce=dt,Me=_t-1)}return Me!==null&&Me<r.nodes.length?Me:null},D=N=>{_||(_=requestAnimationFrame(()=>{if(_=0,c.current)return;const H=V(N.clientX,N.clientY);n.domElement.style.cursor=H===null?"grab":"pointer",h(H===null?null:r.nodes[H],H===null?null:{x:N.clientX,y:N.clientY})}))},I=N=>{g={x:N.clientX,y:N.clientY},y=!1},G=N=>{if(!g)return;const H=N.clientX-g.x,Y=N.clientY-g.y;if(y=H*H+Y*Y>36,g=null,y)return;const ee=V(N.clientX,N.clientY);ee===null?p():d(r.nodes[ee],{x:N.clientX,y:N.clientY})},L=()=>{_&&(cancelAnimationFrame(_),_=0),c.current||h(null,null)},C=n.domElement;return C.addEventListener("pointermove",D,{passive:!0}),C.addEventListener("pointerdown",I),C.addEventListener("pointerup",G),C.addEventListener("pointerleave",L),{pickAt:V,dispose(){_&&cancelAnimationFrame(_),C.removeEventListener("pointermove",D),C.removeEventListener("pointerdown",I),C.removeEventListener("pointerup",G),C.removeEventListener("pointerleave",L),M?.dispose(),v.dispose(),A.dispose(),T.dispose()}}}const k0=1.0025,b2=4,P2=2.6;function L2(n){const{scale:e,translate:t}=n.transform;return n.arcs.map(r=>{let o=0,l=0;return r.map(([u,c])=>(o+=u,l+=c,[o*e[0]+t[0],l*e[1]+t[1]]))})}function D2(n,e){const t=n.objects.countries||n.objects.land,r=[],o=l=>{const u=[];for(const c of l){const h=c<0?e[~c].slice().reverse():e[c];u.length?u.push(...h.slice(1)):u.push(...h)}return u};for(const l of t.geometries){const u=l.type==="Polygon"?[l.arcs]:l.type==="MultiPolygon"?l.arcs:[];for(const c of u)for(const h of c)r.push(o(h))}return r}function N2(n){const e=[],t=new $,r=new $;for(const l of n)for(let u=0;u<l.length-1;u++){const[c,h]=l[u],[d,p]=l[u+1];if(Math.abs(d-c)>180)continue;const _=Math.max(Math.abs(d-c),Math.abs(p-h)),g=Math.max(1,Math.ceil(_/b2));t.copy(Od(h,c,k0));for(let y=1;y<=g;y++){const E=y/g;r.copy(Od(h+(p-h)*E,c+(d-c)*E,k0)),e.push(t.x,t.y,t.z,r.x,r.y,r.z),t.copy(r)}}const o=new cn;return o.setAttribute("position",new Gt(new Float32Array(e),3)),o}function I2(n){const e=new Io({color:2830392,transparent:!0,opacity:.5,depthWrite:!1}),t=new $c(new cn,e);t.visible=!1,t.renderOrder=0,n.add(t);const r={"110m":null,"50m":null},o={};let l=!1,u=null;const c=d=>{!r[d]||u===d||(t.geometry=r[d],u=d)},h=(d,p)=>{r[d]||o[d]||(o[d]=!0,fetch(`/openflights/geo/countries-${d}.json`).then(_=>_.ok?_.json():Promise.reject(new Error(_.status))).then(_=>{const g=L2(_);r[d]=N2(D2(_,g)),o[d]=!1,l&&(d!=="110m"||!r["50m"])&&(c(d),p?.())}).catch(()=>{o[d]=!1}))};return{object:t,setTheme(d,p){l=!!d.borders,t.visible=l,l&&(e.color.set(d.borders.color),e.opacity=d.borders.opacity,r["110m"]?c(r["50m"]?"50m":"110m"):h("110m",p))},updateDetail(d,p){l&&(d<=P2?r["50m"]?c("50m"):h("50m",p):r["110m"]&&c("110m"))},dispose(){e.dispose();for(const d of Object.keys(r))r[d]?.dispose();n.remove(t)}}}const ai={orange:"#e69f00",sky:"#56b4e9",green:"#009e73",blue:"#0072b2",vermillion:"#d55e00",purple:"#cc79a7"},_n=n=>new We(n),z0={dark:{fog:724242,fogDensity:.055,node:{hub:_n("#e69f00"),mid:_n("#56b4e9"),low:_n("#f3f4f6")},nodeSelected:_n(ai.orange),nodeConnected:_n(ai.purple),route:{intl:_n(ai.sky),domestic:_n(ai.green),selected:_n(ai.orange)},routeBlending:Gu,routeOpacity:{globe:.29,topology:.2},routeContextOpacity:{globe:.08,topology:.07},routeFocusOpacity:.95,globe:{color:1055270,emissive:462874,specular:2704476,shininess:22},grid:{color:3493992,opacity:.13},atmosphere:{color:new We("#389eeb"),strength:.26},stars:!0,terrain:!1,borders:null,lights:{hemiSky:10145778,hemiGround:659488,hemi:1.15,sun:1.4}},light:{fog:15659508,fogDensity:.03,node:{hub:_n(ai.vermillion),mid:_n(ai.blue),low:_n("#1c1f26")},nodeSelected:_n(ai.vermillion),nodeConnected:_n(ai.purple),route:{intl:_n(ai.blue),domestic:_n(ai.green),selected:_n(ai.vermillion)},routeBlending:Wr,routeOpacity:{globe:.26,topology:.22},routeContextOpacity:{globe:.09,topology:.08},routeFocusOpacity:.9,globe:{color:14673644,emissive:0,specular:2241348,shininess:4},grid:{color:4937059,opacity:.12},atmosphere:{color:new We("#5c8cb8"),strength:.16},stars:!1,terrain:{ocean:new We("#a9d3ee"),oceanDeep:new We("#7fbde4"),shore:new We("#cfe8f7"),land:[{at:0,color:new We("#5fae8d")},{at:.18,color:new We("#9ac68a")},{at:.38,color:new We("#f0e442")},{at:.58,color:new We("#e69f00")},{at:.78,color:new We("#d55e00")},{at:1,color:new We("#f4f1ec")}],relief:.55},borders:{color:2830392,opacity:.5,coastOpacity:.75},lights:{hemiSky:16777215,hemiGround:13227230,hemi:1.35,sun:.85}}},B0=n=>z0[n]||z0.dark,U2=n=>{const e=n.target instanceof Element?n.target:document.activeElement;return!(e instanceof Element)||e.tagName==="CANVAS"?!1:!!e.closest('input, textarea, select, button, a[href], [contenteditable]:not([contenteditable="false"]), [tabindex]:not([tabindex^="-"])')},F2=n=>n.defaultPrevented||n.isComposing||n.repeat||n.ctrlKey||n.metaKey||n.altKey||U2(n);function O2({data:n,positions:e,options:t,sidebarOpen:r,selected:o,onHover:l,onSelect:u,onClear:c,focusRequest:h,topologyVersion:d}){const p=Ke.useRef(),_=Ke.useRef(),g=Ke.useRef(o),y=Ke.useRef({onHover:l,onSelect:u,onClear:c}),E=Ke.useRef(t),M=Ke.useRef(!1);return Ke.useLayoutEffect(()=>{g.current=o},[o]),Ke.useLayoutEffect(()=>{y.current={onHover:l,onSelect:u,onClear:c}},[l,u,c]),Ke.useLayoutEffect(()=>{E.current=t},[t]),Ke.useEffect(()=>{const x=p.current;if(!x||!n)return;const v=window.matchMedia("(prefers-reduced-motion: reduce)");M.current=v.matches;let A=!1,T=0,b=performance.now(),V=[],D="globe";const I=E.current;let G=B0(I.theme);const L=new tx;L.fog=new Yc(G.fog,G.fogDensity);const C=new qn(42,1,.01,100);C.position.set(0,.3,3.55);const N=new ex({antialias:!0,alpha:!0,powerPreference:"high-performance"});N.setPixelRatio(Math.min(devicePixelRatio,1.75)),N.setSize(x.clientWidth,x.clientHeight,!1),N.outputColorSpace=li,N.domElement.tabIndex=0,N.domElement.setAttribute("role","img"),N.domElement.setAttribute("aria-describedby","canvas-keyboard-instructions"),N.domElement.setAttribute("aria-label",`Interactive 3D flight network with ${sr.format(n.nodes.length)} airports and ${sr.format(n.links.length)} connections`),x.appendChild(N.domElement);const H=new t2(C,N.domElement);H.enableDamping=!0,H.dampingFactor=.065,H.enablePan=!1,H.minDistance=1.55,H.maxDistance=8,H.autoRotateSpeed=.32;const Y=new fx(10145778,659488,1.15);L.add(Y);const ee=new hx(16777215,1.4);ee.position.set(3,2,4),L.add(ee);const ue=()=>x.clientHeight||800,J=_2(L),le=I2(L),z=v2(L,n,e,N,C,ue),he=E2(L,n,e),ne=R2({renderer:N,scene:L,camera:C,data:n,sprites:z,world:J,routes:he,selectedRef:g,onHover:(...Le)=>y.current.onHover(...Le),onSelect:(...Le)=>y.current.onSelect(...Le),onClear:(...Le)=>y.current.onClear(...Le)}),O=(Le=D)=>{H.target.set(0,0,0),C.position.set(0,.3,Le==="globe"?3.55:4.2),H.update()},re=Le=>{const k=e.read(D,Le.index,new $);if(D==="globe"){const _t=k.clone().normalize().multiplyScalar(2.35);if(M.current){C.position.copy(_t),H.target.copy(k).multiplyScalar(.18),H.update();return}const dt=C.position.clone(),xt=H.target.clone(),Ye=performance.now(),bt=650,Je=it=>{const F=Math.min(1,(it-Ye)/bt),R=1-Math.pow(1-F,3);C.position.lerpVectors(dt,_t,R),H.target.lerpVectors(xt,k.clone().multiplyScalar(.18),R),H.update(),F<1&&requestAnimationFrame(Je)};requestAnimationFrame(Je)}else H.target.copy(k),C.position.set(k.x,k.y,k.z+2.4),H.update()},be=()=>{L.fog.color.set(G.fog),L.fog.density=G.fogDensity,Y.color.set(G.lights.hemiSky),Y.groundColor.set(G.lights.hemiGround),Y.intensity=G.lights.hemi,ee.intensity=G.lights.sun,J.applyTheme(G),le.setTheme(G),le.object.visible=!!G.borders&&D==="globe"},Q=(Le=E.current)=>{H.autoRotate=Le.autoRotate&&!M.current&&D==="globe"},K=(Le,k)=>{D=Le.view,G=B0(Le.theme),be(),Q(Le);const _t=k||z.topHubNode;z.update(Le,k,_t,G),he.update(Le,k,G),J.globeGroup.visible=Le.view==="globe",H.enablePan=Le.view==="topology",H.minDistance=Le.view==="globe"?1.55:1.2,H.maxDistance=Le.view==="globe"?8:10},fe=()=>{const Le=x.clientWidth,k=x.clientHeight;!Le||!k||(C.aspect=Le/k,C.updateProjectionMatrix(),N.setSize(Le,k,!1),z.resize())},de=Le=>{M.current=Le.matches,Q()};v.addEventListener("change",de),_.current={update:K,focusNode:re,resetCamera:O,resize:fe},K(I,g.current);const Me=new ResizeObserver(fe);Me.observe(x),fe();const Ce=Le=>{if(A)return;const k=Le-b;b=Le,V.push(k),V.length>90&&V.shift(),V.length===90&&N.getPixelRatio()>1&&vA(V)>24&&(N.setPixelRatio(1),z.material.uniforms.uPixelRatio.value=1,fe(),V=[]),H.update(),le.updateDetail(C.position.length()),N.render(L,C),T=requestAnimationFrame(Ce)};T=requestAnimationFrame(Ce);const Ie=Le=>{Le.key.toLowerCase()==="r"&&!F2(Le)&&O()};return window.addEventListener("keydown",Ie),()=>{A=!0,cancelAnimationFrame(T),Me.disconnect(),v.removeEventListener("change",de),window.removeEventListener("keydown",Ie),ne.dispose(),le.dispose(),J.dispose(),H.dispose(),L.traverse(Le=>{Le.geometry?.dispose?.(),Array.isArray(Le.material)?Le.material.forEach(k=>k.dispose()):Le.material?.dispose?.()}),N.dispose(),N.domElement.remove(),_.current=null}},[n,e]),Ke.useEffect(()=>{_.current?.update(t,o)},[t,o,d]),Ke.useEffect(()=>{h?.node&&_.current?.focusNode(h.node)},[h]),Ke.useEffect(()=>{_.current?.resize()},[r]),ie.jsxs(ie.Fragment,{children:[ie.jsx("div",{ref:p,className:"canvas-host"}),ie.jsx("p",{id:"canvas-keyboard-instructions",className:"sr-only",children:"To select an airport with the keyboard, press slash and use Search airports. Press R to reset the camera or Escape to clear the selection."})]})}function k2({data:n,options:e,setOptions:t,query:r,setQuery:o,selected:l,selectNode:u,clearSelection:c,restoreSearchFocusRef:h,isDesktopViewport:d,open:p,inert:_}){const g=Ke.useRef(null),y=Ke.useMemo(()=>{const A=r.trim().toLowerCase();return A?n.nodes.filter(T=>`${T.id} ${T.name} ${T.city} ${T.country}`.toLowerCase().includes(A)).sort((T,b)=>b.degree-T.degree).slice(0,8):[]},[n,r]),M=r.trim()?y.length===0?"No matching airports.":`${y.length} airport result${y.length===1?"":"s"} shown.`:"",[x,v]=Ke.useState(!1);return Ke.useLayoutEffect(()=>{h.current&&(h.current=!1,g.current?.focus())},[d,r,h,l]),ie.jsxs("aside",{id:"controls",className:`sidebar ${p?"open":""}`,"aria-label":"Network controls",inert:_?"":void 0,children:[ie.jsxs("section",{className:"section",children:[ie.jsxs("div",{className:"section-title",children:[ie.jsx("span",{children:"Find an airport"}),ie.jsx("span",{className:"value-pill",children:sr.format(n.nodes.length)})]}),ie.jsxs("div",{className:"search-wrap",children:[ie.jsx("input",{ref:g,id:"airport-search",className:"search",value:r,onInput:A=>o(A.target.value),placeholder:"Code, city, airport…","aria-label":"Search airports",autoComplete:"off"}),ie.jsx("span",{className:"search-icon",children:"⌕"})]}),ie.jsx("div",{className:"sr-only",role:"status","aria-atomic":"true",children:M}),y.length>0&&ie.jsx("div",{className:"results",children:y.map(A=>ie.jsxs("button",{className:"result-btn",onClick:T=>{d&&document.activeElement===T.currentTarget&&(h.current=!0),u(A,void 0,!0),o("")},children:[ie.jsx("span",{className:"result-name",children:A.name}),ie.jsx("span",{className:"result-code",children:A.iata||A.icao})]},A.id))}),l&&ie.jsxs("div",{className:"selected-chip",children:[ie.jsxs("div",{children:[ie.jsx("strong",{children:l.name}),ie.jsxs("span",{children:[l.city,", ",l.country]})]}),ie.jsx("button",{id:"clear-selected-airport",className:"clear-btn",onClick:A=>{document.activeElement===A.currentTarget&&(h.current=!0),c()},"aria-label":"Clear selected airport",children:"×"})]})]}),ie.jsxs("section",{className:"section",children:[ie.jsx("div",{className:"section-title",children:ie.jsx("span",{children:"View"})}),ie.jsxs("div",{className:"segmented",role:"group","aria-label":"Visualization mode",children:[ie.jsx("button",{className:`seg-btn ${e.view==="globe"?"active":""}`,"aria-pressed":e.view==="globe",onClick:()=>t(A=>({...A,view:"globe"})),children:"3D globe"}),ie.jsx("button",{className:`seg-btn ${e.view==="topology"?"active":""}`,"aria-pressed":e.view==="topology",onClick:()=>t(A=>({...A,view:"topology"})),children:"Topology"})]}),ie.jsxs("div",{className:"segmented",role:"group","aria-label":"Colour theme",style:{marginTop:"8px"},children:[ie.jsx("button",{className:`seg-btn ${e.theme==="dark"?"active":""}`,"aria-pressed":e.theme==="dark",onClick:()=>t(A=>({...A,theme:"dark"})),children:"Dark"}),ie.jsx("button",{className:`seg-btn ${e.theme==="light"?"active":""}`,"aria-pressed":e.theme==="light",onClick:()=>t(A=>({...A,theme:"light"})),children:"Light map"})]}),ie.jsxs("label",{className:"check-row",children:[ie.jsx("input",{type:"checkbox",checked:e.autoRotate,onChange:A=>t(T=>({...T,autoRotate:A.target.checked}))}),"Auto-rotate globe"]})]}),ie.jsxs("section",{className:"section",children:[ie.jsxs("div",{className:"section-title",children:[ie.jsx("span",{children:"Route filters"}),ie.jsxs("span",{className:"value-pill",children:[e.density,"%"]})]}),ie.jsxs("div",{className:"control-row",children:[ie.jsxs("div",{className:"control-label",children:[ie.jsx("span",{children:"Route density"}),ie.jsxs("span",{children:[e.density,"%"]})]}),ie.jsx("input",{type:"range",min:"5",max:"100",step:"5",value:e.density,"aria-label":"Route density: adjust from 5% to 100%",onInput:A=>t(T=>({...T,density:+A.target.value}))})]}),ie.jsxs("div",{className:"control-row",children:[ie.jsxs("div",{className:"control-label",children:[ie.jsx("span",{children:"Minimum hub degree"}),ie.jsx("span",{children:e.minDegree})]}),ie.jsx("input",{type:"range",min:"0",max:"80",step:"1",value:e.minDegree,"aria-label":"Minimum hub degree: adjust from 0 to 80 connections",onInput:A=>t(T=>({...T,minDegree:+A.target.value}))})]}),ie.jsxs("div",{className:"control-row",children:[ie.jsx("label",{className:"control-label",htmlFor:"scope",children:ie.jsx("span",{children:"Route scope"})}),ie.jsxs("select",{id:"scope",value:e.scope,onChange:A=>t(T=>({...T,scope:A.target.value})),children:[ie.jsx("option",{value:"all",children:"All routes"}),ie.jsx("option",{value:"international",children:"International only"}),ie.jsx("option",{value:"domestic",children:"Domestic only"})]})]}),ie.jsxs("div",{className:"control-row",children:[ie.jsx("label",{className:"control-label",htmlFor:"country",children:ie.jsx("span",{children:"Country focus"})}),ie.jsxs("select",{id:"country",value:e.country,onChange:A=>t(T=>({...T,country:A.target.value})),children:[ie.jsx("option",{value:"",children:"All countries"}),n.countries.map(([A,T])=>ie.jsxs("option",{value:A,children:[A," (",T,")"]},A))]})]})]}),ie.jsxs("section",{className:"section",children:[ie.jsx("div",{className:"section-title",children:ie.jsx("span",{children:"Legend"})}),ie.jsxs("div",{className:"legend",children:[ie.jsxs("div",{className:"legend-row",children:[ie.jsx("span",{className:"swatch swatch-international","aria-hidden":"true"}),ie.jsx("span",{children:"International connection — dashed"})]}),ie.jsxs("div",{className:"legend-row",children:[ie.jsx("span",{className:"swatch swatch-domestic","aria-hidden":"true"}),ie.jsx("span",{children:"Domestic connection — solid"})]}),ie.jsxs("div",{className:"legend-row",children:[ie.jsx("span",{className:"swatch swatch-selected","aria-hidden":"true"}),ie.jsx("span",{children:"Selected-airport connection — emphasis, pattern retained"})]})]})]}),ie.jsxs("section",{className:"section help",children:["Drag to orbit · scroll to zoom · click an airport to pin.",ie.jsx("br",{}),ie.jsx("br",{}),ie.jsx("kbd",{children:"/"})," Search   ",ie.jsx("kbd",{children:"Esc"})," Clear selection  ",ie.jsx("kbd",{children:"R"})," Reset camera"]}),ie.jsxs("footer",{className:"sidebar-footer",children:[ie.jsx("p",{className:"data-source",children:"© 2026 Jeremiah King"}),ie.jsxs("p",{className:"data-source",children:["Data from","",ie.jsx("a",{href:"https://openflights.org",target:"_blank",rel:"noreferrer",children:"OpenFlights.org"})]}),ie.jsxs("button",{type:"button",className:"about-toggle","aria-expanded":x,"aria-controls":"about-data-panel",onClick:()=>v(A=>!A),children:[x?"▾":"▸"," About this data"]}),ie.jsxs("div",{id:"about-data-panel",className:"about-panel",hidden:!x,children:[ie.jsxs("p",{children:[ie.jsx("b",{children:"~7,700 airports"})," with IATA/ICAO codes, coordinates and timezones. About 3,300 carry routes, forming the ~19,000 connections drawn here."]}),ie.jsx("p",{children:"Useful as reference data, and as a real-world scale-free network for graph analysis and visualisation."}),ie.jsxs("p",{children:[ie.jsx("b",{children:"A historical snapshot, not a live feed."})," Airports are current to roughly 2017, with the last upstream correction in 2019. There are no schedules, frequencies or fares, so it cannot tell you what flies today."]})]})]})]})}function z2({node:n,pinned:e,point:t}){if(!n||!t)return null;const r=295,o=18,l=t.x+o,c=l+r<=innerWidth?l:Math.max(0,t.x-r-o),h=Math.max(12,Math.min(t.y-20,innerHeight-190));return ie.jsxs("div",{className:`tooltip ${e?"pinned":""}`,style:{left:c,top:h},children:[ie.jsxs("div",{className:"tooltip-top",children:[ie.jsx("div",{className:"airport-code",children:n.iata||n.icao||"—"}),ie.jsxs("div",{children:[ie.jsx("h2",{children:n.name}),ie.jsxs("div",{className:"tooltip-sub",children:[n.city,", ",n.country]})]})]}),ie.jsxs("div",{className:"tooltip-grid",children:[ie.jsxs("div",{className:"tooltip-metric",children:[ie.jsx("b",{children:sr.format(n.degree)}),ie.jsx("span",{children:"Connections"})]}),ie.jsxs("div",{className:"tooltip-metric",children:[ie.jsx("b",{children:sr.format(n.routeCount)}),ie.jsx("span",{children:"Route records"})]}),ie.jsxs("div",{className:"tooltip-metric",children:[ie.jsxs("b",{children:[n.lat.toFixed(1),"°, ",n.lon.toFixed(1),"°"]}),ie.jsx("span",{children:"Coordinates"})]})]}),ie.jsx("div",{className:"tooltip-note",children:e?"Pinned — click empty space or press Escape to close.":"Click to pin this airport."})]})}function B2({onLoaded:n,loading:e,error:t}){const r=Ke.useRef(),o=Ke.useRef(),l=async u=>{const c=o.current?.contains(document.activeElement)??!1,h=[...u],d=h.find(_=>/airport/i.test(_.name)),p=h.find(_=>/route/i.test(_.name));if(!d||!p)return n(null,null,"Select both airports.dat and routes.dat.",!1);n(await d.text(),await p.text(),void 0,c)};return ie.jsx("div",{ref:o,className:"load-screen",onDragOver:u=>u.preventDefault(),onDrop:u=>{u.preventDefault(),l(u.dataTransfer.files)},children:ie.jsxs("div",{className:"load-card",children:[ie.jsx("div",{className:"eyebrow",children:"OpenFlights data loader"}),ie.jsx("h2",{children:e?"Loading the global aviation network…":"Load the global aviation network"}),e?ie.jsx("p",{role:"status","aria-live":"polite",children:"Fetching and parsing the airport and route data. This usually takes a few seconds."}):ie.jsxs("p",{children:["The dashboard first looks for ",ie.jsx("b",{children:"airports.dat"})," and"," ",ie.jsx("b",{children:"routes.dat"})," beside this HTML file. If your browser blocks local file requests, select or drop both supplied files here."]}),ie.jsx("div",{className:"drop-zone",children:ie.jsxs("div",{children:[ie.jsx("button",{className:"primary-btn",onClick:()=>r.current.click(),disabled:e,children:e?"Building network…":"Choose both data files"}),ie.jsx("input",{ref:r,hidden:!0,type:"file",multiple:!0,accept:".txt,.dat,text/plain",onChange:u=>l(u.target.files)}),ie.jsx("div",{className:"file-note",children:"You can also drag and drop both files onto this panel."})]})}),e&&ie.jsx("div",{className:"loading-bar","aria-hidden":"true"}),t&&ie.jsx("div",{className:"error",role:"alert",children:t})]})})}function Fu({value:n,label:e}){return ie.jsxs("div",{className:"stat",children:[ie.jsx("div",{className:"stat-value",children:n}),ie.jsx("div",{className:"stat-label",children:e})]})}const Xx="(min-width: 681px)",H2=()=>typeof window>"u"||!window.matchMedia?!0:window.matchMedia(Xx).matches,V2=()=>{if(typeof window>"u")return"dark";try{const n=localStorage.getItem("openflights-theme");if(n==="light"||n==="dark")return n}catch{}return window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"},jx=n=>n.target instanceof Element?n.target:document.activeElement,G2=n=>{const e=jx(n);return!(e instanceof Element)||e.tagName==="CANVAS"?!1:!!e.closest('input, textarea, select, button, a[href], [contenteditable]:not([contenteditable="false"]), [tabindex]:not([tabindex^="-"])')},W2=n=>n.defaultPrevented||n.isComposing||n.repeat||n.ctrlKey||n.metaKey||n.altKey||G2(n),X2=n=>{const e=jx(n);return e instanceof Element&&!!e.closest('select, [contenteditable]:not([contenteditable="false"])')};function j2(){const[n,e]=Ke.useState(null),[t,r]=Ke.useState(!0),[o,l]=Ke.useState(""),[u,c]=Ke.useState({view:"globe",density:55,minDegree:0,scope:"all",country:"",autoRotate:!1,theme:V2()}),[h,d]=Ke.useState(""),[p,_]=Ke.useState(null),[g,y]=Ke.useState(null),[E,M]=Ke.useState(null),[x,v]=Ke.useState(null),[A,T]=Ke.useState(!1),[b,V]=Ke.useState(H2),[D,I]=Ke.useState(0),G=Ke.useRef(null),L=Ke.useRef(null),C=Ke.useRef(!1),N=Ke.useRef(!1),H=Ke.useRef(!1),Y=Ke.useRef(!1),ee=Ke.useRef(!1),ue=Ke.useRef(!1),J=b||A,le=Ke.useCallback(()=>I(K=>K+1),[]),z=Ke.useMemo(()=>n?XP(n.nodes):null,[n]);JP(n,z,le);const he=u.view==="topology"&&D===0,ne=Ke.useCallback((K,fe,de,Me=!1)=>{if(C.current=!1,de){l(de),r(!1);return}r(!0),l(""),setTimeout(()=>{try{const Ce=GP(K,fe);if(!Ce.nodes.length||!Ce.links.length)throw new Error("No usable airport-route pairs were found.");C.current=Me,e(Ce)}catch(Ce){C.current=!1,l(`Could not parse the files: ${Ce.message}`)}finally{r(!1)}},30)},[]);Ke.useLayoutEffect(()=>{!n||!C.current||(C.current=!1,L.current?.focus())},[n]),Ke.useEffect(()=>{let K=!1;const fe=new AbortController;return QP({signal:fe.signal}).then(({airports:de,routes:Me,source:Ce})=>{K||(Ce!=="local"&&console.info(`OpenFlights data loaded from ${Ce}.`),ne(de,Me))}).catch(de=>{K||fe.signal.aborted||ne(null,null,`Could not load the flight data (${de.message}). Select or drop airports.dat and routes.dat below.`)}),()=>{K=!0,fe.abort()}},[ne]),Ke.useEffect(()=>{const K=document.documentElement;K.dataset.themeSwitching="",K.dataset.theme=u.theme;let fe=!1;const de=()=>{fe||(fe=!0,delete K.dataset.themeSwitching)},Me=requestAnimationFrame(()=>requestAnimationFrame(de)),Ce=setTimeout(de,300);try{localStorage.setItem("openflights-theme",u.theme)}catch{}return()=>{cancelAnimationFrame(Me),clearTimeout(Ce),de()}},[u.theme]),Ke.useEffect(()=>{const K=window.matchMedia?.("(prefers-color-scheme: light)");if(!K)return;const fe=de=>{let Me=null;try{Me=localStorage.getItem("openflights-theme")}catch{Me=null}Me||c(Ce=>({...Ce,theme:de.matches?"light":"dark"}))};return K.addEventListener("change",fe),()=>K.removeEventListener("change",fe)},[]),Ke.useEffect(()=>{const K=window.matchMedia?.(Xx);if(!K)return;const fe=de=>{de.matches&&document.activeElement===G.current&&(Y.current=!0),!de.matches&&document.getElementById("controls")?.contains(document.activeElement)&&T(!0),V(de.matches)};return K.addEventListener("change",fe),()=>K.removeEventListener("change",fe)},[]),Ke.useEffect(()=>{const K=document.getElementById("skip-to-controls");if(!K)return;const fe=de=>{J||(de.preventDefault(),H.current=!0,T(!0))};return K.addEventListener("click",fe),()=>K.removeEventListener("click",fe)},[J,n]),Ke.useLayoutEffect(()=>{J&&N.current&&(N.current=!1,document.getElementById("airport-search")?.focus()),J&&H.current&&(H.current=!1,window.location.hash="controls",document.getElementById("airport-search")?.focus()),J&&Y.current&&(Y.current=!1,document.getElementById("airport-search")?.focus()),!J&&ee.current&&(ee.current=!1,G.current?.focus())},[J,b]),Ke.useEffect(()=>{const K=fe=>{if(fe.key==="/"&&!W2(fe)){const de=document.getElementById("airport-search");if(!de)return;fe.preventDefault(),J?de.focus():(N.current=!0,T(!0))}fe.key==="Escape"&&!fe.defaultPrevented&&!fe.isComposing&&!fe.repeat&&!fe.ctrlKey&&!fe.metaKey&&!fe.altKey&&!fe.shiftKey&&!X2(fe)&&(document.activeElement?.id==="clear-selected-airport"&&(ue.current=!0),_(null),y(null),M(null))};return window.addEventListener("keydown",K),()=>window.removeEventListener("keydown",K)},[J]);const O=(K,fe,de=!1)=>{_(K),y(null),M(fe||{x:innerWidth*.56,y:innerHeight*.3}),v({node:K,id:performance.now()}),b||(de&&(ee.current=!0),T(!1))},re=()=>{_(null),y(null),M(null)},be=p||g,Q=Ke.useMemo(()=>n?n.links.filter(K=>(u.scope==="all"||u.scope==="international"===K.international)&&(!u.country||K.source.country===u.country||K.target.country===u.country)&&K.source.degree>=u.minDegree&&K.target.degree>=u.minDegree).length:0,[n,u.scope,u.country,u.minDegree]);return ie.jsxs("div",{className:"app",children:[n&&ie.jsx("a",{id:"skip-to-controls",className:"skip-link",href:"#controls",children:"Skip to controls"}),ie.jsxs("header",{className:"topbar",children:[n&&!b&&ie.jsx("button",{ref:G,className:"icon-btn menu-btn",onClick:()=>T(K=>!K),"aria-label":A?"Hide controls":"Show controls","aria-expanded":A,"aria-controls":"controls",title:A?"Hide controls":"Show controls",children:"☰"}),ie.jsxs("div",{className:"brand",children:[ie.jsx("div",{className:"eyebrow",children:"Global aviation intelligence"}),ie.jsx("h1",{ref:L,tabIndex:-1,children:"OpenFlights Network"})]}),n&&ie.jsxs("div",{className:"stats","aria-label":"Network summary",children:[ie.jsx(Fu,{value:sr.format(n.nodes.length),label:"Airports"}),ie.jsx(Fu,{value:sr.format(n.links.length),label:"Connections"}),ie.jsx(Fu,{value:sr.format(Q),label:"Visible pool"}),ie.jsx(Fu,{value:sr.format(n.countries.length),label:"Countries"})]}),n&&ie.jsx("div",{className:"top-actions",children:ie.jsx("button",{className:"icon-btn desktop-only",onClick:()=>c(K=>({...K,autoRotate:!K.autoRotate})),"aria-label":"Toggle automatic rotation","aria-pressed":u.autoRotate,children:"◌"})})]}),ie.jsxs("main",{className:n?"main":"main no-data",children:[n&&ie.jsx(k2,{data:n,options:u,setOptions:c,query:h,setQuery:d,selected:p,selectNode:O,clearSelection:re,restoreSearchFocusRef:ue,isDesktopViewport:b,open:J,inert:!J}),ie.jsxs("section",{className:"stage","aria-label":n?"3D flight visualization":"Flight network data loader",children:[n&&ie.jsx(O2,{data:n,positions:z,sidebarOpen:J,options:u,selected:p,topologyVersion:D,focusRequest:x,onHover:(K,fe)=>{y(K),M(fe)},onSelect:O,onClear:re}),n&&ie.jsxs("div",{className:"stage-badge",children:[ie.jsx("span",{className:"dot"}),ie.jsxs("span",{children:[u.view==="globe"?"GEOGRAPHIC GLOBE":"FORCE-DIRECTED TOPOLOGY"," ","· ",he?"COMPUTING LAYOUT…":`${u.density}% ROUTES`]})]}),ie.jsx(z2,{node:be,pinned:!!p,point:E}),!n&&ie.jsx(B2,{onLoaded:ne,loading:t,error:o}),ie.jsx("div",{className:"sr-only",role:"status","aria-live":"polite",children:he?"Computing force-directed layout.":""}),ie.jsx("div",{className:"sr-only","aria-live":"polite",children:be?`${be.name}, ${be.city}, ${be.country}. ${be.degree} direct connections.`:""})]})]})]})}FS.createRoot(document.getElementById("root")).render(ie.jsx(PS.StrictMode,{children:ie.jsx(j2,{})}));
